!function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){window.gdad=r(1)},function(t,n,r){var e=r(2),o=(r(51),r(85));t.exports=function(t,n,r){var i=!0;r=r||"appDataFolder";var u=function(){return gapi.auth.authorize({client_id:n,scope:"https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata",immediate:i}).then(function(t){return i=!0,t},function(t){throw i=!1,t})},c=function(){return gapi.client.load("drive","v3")},a=function(){return gapi.client.drive.files.create({fields:"id",resource:{name:t,parents:[r]}}).then(function(t){return e(t,"result.id",null)})},f=function(){return gapi.client.drive.files.list({q:o('name="{0}"',t),spaces:r,fields:"files(id)"}).then(function(t){return e(t,"result.files[0].id",null)||a()})},p=function(){return u().then(function(){return c().then(f)})};return{read:function(){return p().then(function(t){return gapi.client.drive.files.get({fileId:t,alt:"media"}).then(function(t){return e(t,"result",null)})})},save:function(t){return p().then(function(n){return gapi.client.request({path:o("/upload/drive/v3/files/{0}",n),method:"PATCH",params:{uploadType:"media"},body:JSON.stringify(t)})})}}}},function(t,n,r){function e(t,n,r){var e=null==t?void 0:o(t,n);return void 0===e?r:e}var o=r(3);t.exports=e},function(t,n,r){function e(t,n){n=i(n,t)?[n]:o(n);for(var r=0,e=n.length;null!=t&&r<e;)t=t[u(n[r++])];return r&&r==e?t:void 0}var o=r(4),i=r(49),u=r(50);t.exports=e},function(t,n,r){function e(t){return o(t)?t:i(t)}var o=r(5),i=r(6);t.exports=e},function(t,n){var r=Array.isArray;t.exports=r},function(t,n,r){var e=r(7),o=r(43),i=/^\./,u=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,a=e(function(t){t=o(t);var n=[];return i.test(t)&&n.push(""),t.replace(u,function(t,r,e,o){n.push(e?o.replace(c,"$1"):r||t)}),n});t.exports=a},function(t,n,r){function e(t){var n=o(t,function(t){return r.size===i&&r.clear(),t}),r=n.cache;return n}var o=r(8),i=500;t.exports=e},function(t,n,r){function e(t,n){if("function"!=typeof t||n&&"function"!=typeof n)throw new TypeError(i);var r=function(){var e=arguments,o=n?n.apply(this,e):e[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,e);return r.cache=i.set(o,u)||i,u};return r.cache=new(e.Cache||o),r}var o=r(9),i="Expected a function";e.Cache=o,t.exports=e},function(t,n,r){function e(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}var o=r(10),i=r(37),u=r(40),c=r(41),a=r(42);e.prototype.clear=o,e.prototype.delete=i,e.prototype.get=u,e.prototype.has=c,e.prototype.set=a,t.exports=e},function(t,n,r){function e(){this.size=0,this.__data__={hash:new o,map:new(u||i),string:new o}}var o=r(11),i=r(28),u=r(36);t.exports=e},function(t,n,r){function e(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}var o=r(12),i=r(24),u=r(25),c=r(26),a=r(27);e.prototype.clear=o,e.prototype.delete=i,e.prototype.get=u,e.prototype.has=c,e.prototype.set=a,t.exports=e},function(t,n,r){function e(){this.__data__=o?o(null):{},this.size=0}var o=r(13);t.exports=e},function(t,n,r){var e=r(14),o=e(Object,"create");t.exports=o},function(t,n,r){function e(t,n){var r=i(t,n);return o(r)?r:void 0}var o=r(15),i=r(23);t.exports=e},function(t,n,r){function e(t){if(!u(t)||i(t))return!1;var n=o(t)?h:f;return n.test(c(t))}var o=r(16),i=r(18),u=r(17),c=r(22),a=/[\\^$.*+?()[\]{}|]/g,f=/^\[object .+?Constructor\]$/,p=Function.prototype,s=Object.prototype,l=p.toString,v=s.hasOwnProperty,h=RegExp("^"+l.call(v).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=e},function(t,n,r){function e(t){var n=o(t)?f.call(t):"";return n==i||n==u||n==c}var o=r(17),i="[object Function]",u="[object GeneratorFunction]",c="[object Proxy]",a=Object.prototype,f=a.toString;t.exports=e},function(t,n){function r(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}t.exports=r},function(t,n,r){function e(t){return!!i&&i in t}var o=r(19),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=e},function(t,n,r){var e=r(20),o=e["__core-js_shared__"];t.exports=o},function(t,n,r){var e=r(21),o="object"==typeof self&&self&&self.Object===Object&&self,i=e||o||Function("return this")();t.exports=i},function(t,n){(function(n){var r="object"==typeof n&&n&&n.Object===Object&&n;t.exports=r}).call(n,function(){return this}())},function(t,n){function r(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var e=Function.prototype,o=e.toString;t.exports=r},function(t,n){function r(t,n){return null==t?void 0:t[n]}t.exports=r},function(t,n){function r(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}t.exports=r},function(t,n,r){function e(t){var n=this.__data__;if(o){var r=n[t];return r===i?void 0:r}return c.call(n,t)?n[t]:void 0}var o=r(13),i="__lodash_hash_undefined__",u=Object.prototype,c=u.hasOwnProperty;t.exports=e},function(t,n,r){function e(t){var n=this.__data__;return o?void 0!==n[t]:u.call(n,t)}var o=r(13),i=Object.prototype,u=i.hasOwnProperty;t.exports=e},function(t,n,r){function e(t,n){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=o&&void 0===n?i:n,this}var o=r(13),i="__lodash_hash_undefined__";t.exports=e},function(t,n,r){function e(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}var o=r(29),i=r(30),u=r(33),c=r(34),a=r(35);e.prototype.clear=o,e.prototype.delete=i,e.prototype.get=u,e.prototype.has=c,e.prototype.set=a,t.exports=e},function(t,n){function r(){this.__data__=[],this.size=0}t.exports=r},function(t,n,r){function e(t){var n=this.__data__,r=o(n,t);if(r<0)return!1;var e=n.length-1;return r==e?n.pop():u.call(n,r,1),--this.size,!0}var o=r(31),i=Array.prototype,u=i.splice;t.exports=e},function(t,n,r){function e(t,n){for(var r=t.length;r--;)if(o(t[r][0],n))return r;return-1}var o=r(32);t.exports=e},function(t,n){function r(t,n){return t===n||t!==t&&n!==n}t.exports=r},function(t,n,r){function e(t){var n=this.__data__,r=o(n,t);return r<0?void 0:n[r][1]}var o=r(31);t.exports=e},function(t,n,r){function e(t){return o(this.__data__,t)>-1}var o=r(31);t.exports=e},function(t,n,r){function e(t,n){var r=this.__data__,e=o(r,t);return e<0?(++this.size,r.push([t,n])):r[e][1]=n,this}var o=r(31);t.exports=e},function(t,n,r){var e=r(14),o=r(20),i=e(o,"Map");t.exports=i},function(t,n,r){function e(t){var n=o(this,t).delete(t);return this.size-=n?1:0,n}var o=r(38);t.exports=e},function(t,n,r){function e(t,n){var r=t.__data__;return o(n)?r["string"==typeof n?"string":"hash"]:r.map}var o=r(39);t.exports=e},function(t,n){function r(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}t.exports=r},function(t,n,r){function e(t){return o(this,t).get(t)}var o=r(38);t.exports=e},function(t,n,r){function e(t){return o(this,t).has(t)}var o=r(38);t.exports=e},function(t,n,r){function e(t,n){var r=o(this,t),e=r.size;return r.set(t,n),this.size+=r.size==e?0:1,this}var o=r(38);t.exports=e},function(t,n,r){function e(t){return null==t?"":o(t)}var o=r(44);t.exports=e},function(t,n,r){function e(t){if("string"==typeof t)return t;if(u(t))return i(t,e)+"";if(c(t))return p?p.call(t):"";var n=t+"";return"0"==n&&1/t==-a?"-0":n}var o=r(45),i=r(46),u=r(5),c=r(47),a=1/0,f=o?o.prototype:void 0,p=f?f.toString:void 0;t.exports=e},function(t,n,r){var e=r(20),o=e.Symbol;t.exports=o},function(t,n){function r(t,n){for(var r=-1,e=t?t.length:0,o=Array(e);++r<e;)o[r]=n(t[r],r,t);return o}t.exports=r},function(t,n,r){function e(t){return"symbol"==typeof t||o(t)&&c.call(t)==i}var o=r(48),i="[object Symbol]",u=Object.prototype,c=u.toString;t.exports=e},function(t,n){function r(t){return null!=t&&"object"==typeof t}t.exports=r},function(t,n,r){function e(t,n){if(o(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!i(t))||(c.test(t)||!u.test(t)||null!=n&&t in Object(n))}var o=r(5),i=r(47),u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;t.exports=e},function(t,n,r){function e(t){if("string"==typeof t||o(t))return t;var n=t+"";return"0"==n&&1/t==-i?"-0":n}var o=r(47),i=1/0;t.exports=e},function(t,n,r){var e=r(52),o=r(55),i=r(56),u=r(66),c=r(69),a=r(70),f=Object.prototype,p=f.hasOwnProperty,s=i(function(t,n){if(c(n)||u(n))return void o(n,a(n),t);for(var r in n)p.call(n,r)&&e(t,r,n[r])});t.exports=s},function(t,n,r){function e(t,n,r){var e=t[n];c.call(t,n)&&i(e,r)&&(void 0!==r||n in t)||o(t,n,r)}var o=r(53),i=r(32),u=Object.prototype,c=u.hasOwnProperty;t.exports=e},function(t,n,r){function e(t,n,r){"__proto__"==n&&o?o(t,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[n]=r}var o=r(54);t.exports=e},function(t,n,r){var e=r(14),o=function(){try{var t=e(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,n,r){function e(t,n,r,e){var u=!r;r||(r={});for(var c=-1,a=n.length;++c<a;){var f=n[c],p=e?e(r[f],t[f],f,r,t):void 0;void 0===p&&(p=t[f]),u?i(r,f,p):o(r,f,p)}return r}var o=r(52),i=r(53);t.exports=e},function(t,n,r){function e(t){return o(function(n,r){var e=-1,o=r.length,u=o>1?r[o-1]:void 0,c=o>2?r[2]:void 0;for(u=t.length>3&&"function"==typeof u?(o--,u):void 0,c&&i(r[0],r[1],c)&&(u=o<3?void 0:u,o=1),n=Object(n);++e<o;){var a=r[e];a&&t(n,a,e,u)}return n})}var o=r(57),i=r(65);t.exports=e},function(t,n,r){function e(t,n){return u(i(t,n,o),t+"")}var o=r(58),i=r(59),u=r(61);t.exports=e},function(t,n){function r(t){return t}t.exports=r},function(t,n,r){function e(t,n,r){return n=i(void 0===n?t.length-1:n,0),function(){for(var e=arguments,u=-1,c=i(e.length-n,0),a=Array(c);++u<c;)a[u]=e[n+u];u=-1;for(var f=Array(n+1);++u<n;)f[u]=e[u];return f[n]=r(a),o(t,this,f)}}var o=r(60),i=Math.max;t.exports=e},function(t,n){function r(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}t.exports=r},function(t,n,r){var e=r(62),o=r(64),i=o(e);t.exports=i},function(t,n,r){var e=r(63),o=r(54),i=r(58),u=o?function(t,n){return o(t,"toString",{configurable:!0,enumerable:!1,value:e(n),writable:!0})}:i;t.exports=u},function(t,n){function r(t){return function(){return t}}t.exports=r},function(t,n){function r(t){var n=0,r=0;return function(){var u=i(),c=o-(u-r);if(r=u,c>0){if(++n>=e)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}var e=500,o=16,i=Date.now;t.exports=r},function(t,n,r){function e(t,n,r){if(!c(r))return!1;var e=typeof n;return!!("number"==e?i(r)&&u(n,r.length):"string"==e&&n in r)&&o(r[n],t)}var o=r(32),i=r(66),u=r(68),c=r(17);t.exports=e},function(t,n,r){function e(t){return null!=t&&i(t.length)&&!o(t)}var o=r(16),i=r(67);t.exports=e},function(t,n){function r(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=e}var e=9007199254740991;t.exports=r},function(t,n){function r(t,n){return n=null==n?e:n,!!n&&("number"==typeof t||o.test(t))&&t>-1&&t%1==0&&t<n}var e=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=r},function(t,n){function r(t){var n=t&&t.constructor,r="function"==typeof n&&n.prototype||e;return t===r}var e=Object.prototype;t.exports=r},function(t,n,r){function e(t){return u(t)?o(t):i(t)}var o=r(71),i=r(82),u=r(66);t.exports=e},function(t,n,r){function e(t,n){var r=u(t),e=!r&&i(t),p=!r&&!e&&c(t),l=!r&&!e&&!p&&f(t),v=r||e||p||l,h=v?o(t.length,String):[],y=h.length;for(var d in t)!n&&!s.call(t,d)||v&&("length"==d||p&&("offset"==d||"parent"==d)||l&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||a(d,y))||h.push(d);return h}var o=r(72),i=r(73),u=r(5),c=r(75),a=r(68),f=r(78),p=Object.prototype,s=p.hasOwnProperty;t.exports=e},function(t,n){function r(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}t.exports=r},function(t,n,r){var e=r(74),o=r(48),i=Object.prototype,u=i.hasOwnProperty,c=i.propertyIsEnumerable,a=e(function(){return arguments}())?e:function(t){return o(t)&&u.call(t,"callee")&&!c.call(t,"callee")};t.exports=a},function(t,n,r){function e(t){return o(t)&&c.call(t)==i}var o=r(48),i="[object Arguments]",u=Object.prototype,c=u.toString;t.exports=e},function(t,n,r){(function(t){var e=r(20),o=r(77),i="object"==typeof n&&n&&!n.nodeType&&n,u=i&&"object"==typeof t&&t&&!t.nodeType&&t,c=u&&u.exports===i,a=c?e.Buffer:void 0,f=a?a.isBuffer:void 0,p=f||o;t.exports=p}).call(n,r(76)(t))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,n){function r(){return!1}t.exports=r},function(t,n,r){var e=r(79),o=r(80),i=r(81),u=i&&i.isTypedArray,c=u?o(u):e;t.exports=c},function(t,n,r){function e(t){return i(t)&&o(t.length)&&!!F[E.call(t)]}var o=r(67),i=r(48),u="[object Arguments]",c="[object Array]",a="[object Boolean]",f="[object Date]",p="[object Error]",s="[object Function]",l="[object Map]",v="[object Number]",h="[object Object]",y="[object RegExp]",d="[object Set]",x="[object String]",b="[object WeakMap]",_="[object ArrayBuffer]",g="[object DataView]",j="[object Float32Array]",O="[object Float64Array]",m="[object Int8Array]",w="[object Int16Array]",A="[object Int32Array]",S="[object Uint8Array]",P="[object Uint8ClampedArray]",z="[object Uint16Array]",$="[object Uint32Array]",F={};F[j]=F[O]=F[m]=F[w]=F[A]=F[S]=F[P]=F[z]=F[$]=!0,F[u]=F[c]=F[_]=F[a]=F[g]=F[f]=F[p]=F[s]=F[l]=F[v]=F[h]=F[y]=F[d]=F[x]=F[b]=!1;var T=Object.prototype,E=T.toString;t.exports=e},function(t,n){function r(t){return function(n){return t(n)}}t.exports=r},function(t,n,r){(function(t){var e=r(21),o="object"==typeof n&&n&&!n.nodeType&&n,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,u=i&&i.exports===o,c=u&&e.process,a=function(){try{return c&&c.binding("util")}catch(t){}}();t.exports=a}).call(n,r(76)(t))},function(t,n,r){function e(t){if(!o(t))return i(t);var n=[];for(var r in Object(t))c.call(t,r)&&"constructor"!=r&&n.push(r);return n}var o=r(69),i=r(83),u=Object.prototype,c=u.hasOwnProperty;t.exports=e},function(t,n,r){var e=r(84),o=e(Object.keys,Object);t.exports=o},function(t,n){function r(t,n){return function(r){return t(n(r))}}t.exports=r},function(t,n){t.exports=function(t,n){return Array.isArray(n)||(n=[].slice.call(arguments,1)),(t||"").replace(/\{(\d+)\}/g,function(t,r){var e=n[r];return null===e||void 0===e?"":String(e)})}}]);