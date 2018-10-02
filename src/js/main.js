const _get = require('lodash/get');

module.exports = function (file, clientId) {
  let immediate = true;

  function authorize() {
    return gapi.auth
      .authorize({
        client_id: clientId,
        scope: 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata',
        immediate,
      })
      .then(
        function (response) { immediate = true; return response; },
        function (error) { immediate = false; throw error; }
      );
  }

  function loadDriveAPI() {
    return gapi.client.load('drive', 'v3');
  }

  function create() {
    return gapi.client.drive.files
      .create({
        fields: 'id',
        resource: { name: file, parents: ['appDataFolder'] }
      })
      .then(function (response) {
        return _get(response, 'result.id', null);
      });
  }

  function getFileId() {
    return gapi.client.drive.files
      .list({
        q: `name="${file}"`,
        spaces: 'appDataFolder',
        fields: 'files(id)'
      })
      .then(function (response) {
        return _get(response, 'result.files[0].id', null) || create();
      });
  }

  function prepare() {
    return authorize().then(function () {
      return loadDriveAPI().then(getFileId);
    });
  }

  return {
    read() {
      return prepare().then(function (id) {
        return gapi.client.drive.files
          .get({ fileId: id, alt: 'media' })
          .then(function (response) {
            return _get(response, 'result', null);
          });
      });
    },

    save(data) {
      return prepare().then(function (id) {
        return gapi.client
          .request({
            path: `/upload/drive/v3/files/${id}`,
            method: 'PATCH',
            params: { uploadType: 'media' },
            body: JSON.stringify(data)
          });
      });
    }
  };
};
