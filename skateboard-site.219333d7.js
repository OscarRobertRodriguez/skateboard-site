parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"edrZ":[function(require,module,exports) {
"use strict";var e=0,t=document.querySelectorAll(".carousel__btn");function n(t){var n=t.currentTarget,r=document.querySelectorAll(".carousel__img"),c=document.querySelectorAll(".carousel__info");console.log(c),0===e?e="prev"===n.dataset.name?2:1:2===e?e="prev"===n.dataset.name?1:0:1===e&&(e="prev"===n.dataset.name?0:2),r.forEach(function(e){e.classList.add("img__hidden")}),c.forEach(function(e){e.style.zIndex="1"}),r[e].classList.remove("img__hidden"),c[e].style.zIndex="10"}t.forEach(function(e){return e.addEventListener("click",n)});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./scripts/carousel.js");
},{"./scripts/carousel.js":"edrZ"}]},{},["Focm"], null)
//# sourceMappingURL=/skateboard-site/skateboard-site.219333d7.map