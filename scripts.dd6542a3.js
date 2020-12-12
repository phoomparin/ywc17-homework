parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jxGG":[function(require,module,exports) {

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Headers=h,exports.Request=w,exports.Response=_,exports.fetch=E,exports.DOMException=void 0;var t="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==t&&t,e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};function r(t){return t&&DataView.prototype.isPrototypeOf(t)}if(e.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=ArrayBuffer.isView||function(t){return t&&o.indexOf(Object.prototype.toString.call(t))>-1};function i(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function s(t){return"string"!=typeof t&&(t=String(t)),t}function a(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function h(t){this.map={},t instanceof h?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function u(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function f(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function c(t){var e=new FileReader,r=f(e);return e.readAsArrayBuffer(t),r}function d(t){var e=new FileReader,r=f(e);return e.readAsText(t),r}function y(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}function l(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(t){this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:e.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:e.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():e.arrayBuffer&&e.blob&&r(t)?(this._bodyArrayBuffer=l(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):e.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||n(t))?this._bodyArrayBuffer=l(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=u(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=u(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(c)}),this.text=function(){var t=u(this);if(t)return t;if(this._bodyBlob)return d(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(y(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=i(t),e=s(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},h.prototype.delete=function(t){delete this.map[i(t)]},h.prototype.get=function(t){return t=i(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(i(t))},h.prototype.set=function(t,e){this.map[i(t)]=s(e)},h.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},h.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),a(t)},h.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),a(t)},h.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),a(t)},e.iterable&&(h.prototype[Symbol.iterator]=h.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t){var e=t.toUpperCase();return b.indexOf(e)>-1?e:t}function w(t,e){if(!(this instanceof w))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new h(e.headers)),this.method=m(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var o=/([?&])_=[^&]*/;if(o.test(this.url))this.url=this.url.replace(o,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function v(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function T(t){var e=new h;return t.replace(/\r?\n[\t ]+/g," ").split("\r").map(function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t}).forEach(function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}}),e}function _(t,e){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"",this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},p.call(w.prototype),p.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},_.error=function(){var t=new _(null,{status:0,statusText:""});return t.type="error",t};var A=[301,302,303,307,308];_.redirect=function(t,e){if(-1===A.indexOf(e))throw new RangeError("Invalid status code");return new _(null,{status:e,headers:{location:t}})};var g=t.DOMException;exports.DOMException=g;try{new g}catch(B){exports.DOMException=g=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},g.prototype=Object.create(Error.prototype),g.prototype.constructor=g}function E(r,o){return new Promise(function(n,i){var a=new w(r,o);if(a.signal&&a.signal.aborted)return i(new g("Aborted","AbortError"));var u=new XMLHttpRequest;function f(){u.abort()}u.onload=function(){var t={status:u.status,statusText:u.statusText,headers:T(u.getAllResponseHeaders()||"")};t.url="responseURL"in u?u.responseURL:t.headers.get("X-Request-URL");var e="response"in u?u.response:u.responseText;setTimeout(function(){n(new _(e,t))},0)},u.onerror=function(){setTimeout(function(){i(new TypeError("Network request failed"))},0)},u.ontimeout=function(){setTimeout(function(){i(new TypeError("Network request failed"))},0)},u.onabort=function(){setTimeout(function(){i(new g("Aborted","AbortError"))},0)},u.open(a.method,function(e){try{return""===e&&t.location.href?t.location.href:e}catch(r){return e}}(a.url),!0),"include"===a.credentials?u.withCredentials=!0:"omit"===a.credentials&&(u.withCredentials=!1),"responseType"in u&&(e.blob?u.responseType="blob":e.arrayBuffer&&a.headers.get("Content-Type")&&-1!==a.headers.get("Content-Type").indexOf("application/octet-stream")&&(u.responseType="arraybuffer")),!o||"object"!=typeof o.headers||o.headers instanceof h?a.headers.forEach(function(t,e){u.setRequestHeader(e,t)}):Object.getOwnPropertyNames(o.headers).forEach(function(t){u.setRequestHeader(t,s(o.headers[t]))}),a.signal&&(a.signal.addEventListener("abort",f),u.onreadystatechange=function(){4===u.readyState&&a.signal.removeEventListener("abort",f)}),u.send(void 0===a._bodyInit?null:a._bodyInit)})}E.polyfill=!0,t.fetch||(t.fetch=E,t.Headers=h,t.Request=w,t.Response=_);
},{}],"W7FE":[function(require,module,exports) {
"use strict";var n=this&&this.__awaiter||function(n,e,t,r){return new(t||(t=Promise))(function(o,a){function i(n){try{c(r.next(n))}catch(e){a(e)}}function u(n){try{c(r.throw(n))}catch(e){a(e)}}function c(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t(function(n){n(e)})).then(i,u)}c((r=r.apply(n,e||[])).next())})},e=this&&this.__generator||function(n,e){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(n,i)}catch(u){a=[6,u],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};function t(){return n(this,void 0,Promise,function(){return e(this,function(n){switch(n.label){case 0:return[4,fetch("https://panjs.com/ywc.json")];case 1:return[2,n.sent().json()]}})})}function r(n,e){var t=document.querySelector(n);t&&e.forEach(function(n){t.innerHTML+='<a\n      href="'+n.href+'"\n      class="nav-link fade in"\n      target="_blank">\n      '+n.label+"\n    </a>"})}function o(n,e){var t=document.querySelector(n);t&&(t.innerHTML=e)}function a(){return n(this,void 0,void 0,function(){var n;return e(this,function(e){switch(e.label){case 0:return[4,t()];case 1:return r(".navbar",(n=e.sent()).navbarItems),r(".mobile-navbar",n.navbarItems),o(".duration",n.duration),o(".detail",n.detail),o(".condition",n.condition),[2]}})})}Object.defineProperty(exports,"__esModule",{value:!0}),require("whatwg-fetch"),document.addEventListener("DOMContentLoaded",a);
},{"whatwg-fetch":"jxGG"}]},{},["W7FE"], null)
//# sourceMappingURL=scripts.dd6542a3.js.map