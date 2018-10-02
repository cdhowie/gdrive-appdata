'use strict';

module.exports = {
    entry: { gdad: './src/js/gdad.js' },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        ],
    },
};
