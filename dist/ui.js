!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);i(1);document.getElementById("both").onclick=()=>{parent.postMessage({pluginMessage:{type:"both"}},"*")},document.getElementById("title").onclick=()=>{parent.postMessage({pluginMessage:{type:"title"}},"*")},document.getElementById("footnote").onclick=()=>{parent.postMessage({pluginMessage:{type:"footnote"}},"*")},document.getElementById("sticky-green").onclick=()=>{parent.postMessage({pluginMessage:{type:"sticky-green"}},"*")},document.getElementById("sticky-yellow").onclick=()=>{parent.postMessage({pluginMessage:{type:"sticky-yellow"}},"*")},document.getElementById("sticky-red").onclick=()=>{parent.postMessage({pluginMessage:{type:"sticky-red"}},"*")},document.getElementById("annotation").onclick=()=>{parent.postMessage({pluginMessage:{type:"annotation"}},"*")},document.getElementById("annotation-alt").onclick=()=>{parent.postMessage({pluginMessage:{type:"annotation-alt"}},"*")},onmessage=t=>{var e=event.data.pluginMessage;"no-layers"===e?alert("No layers have been selected. Please select a text layer and try again."):(alert(e),console.log(e))}},function(t,e,i){var n=i(2),r=i(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1},h=(n(r,o),r.locals?r.locals:{});t.exports=h},function(t,e,i){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),h=[];function a(t){for(var e=-1,i=0;i<h.length;i++)if(h[i].identifier===t){e=i;break}return e}function l(t,e){for(var i={},n=[],r=0;r<t.length;r++){var o=t[r],l=e.base?o[0]+e.base:o[0],s=i[l]||0,c="".concat(l," ").concat(s);i[l]=s+1;var d=a(c),g={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(h[d].references++,h[d].updater(g)):h.push({identifier:c,updater:x(g,e),references:1}),n.push(c)}return n}function s(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var r=i.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var h=o(t.insert||"head");if(!h)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");h.appendChild(e)}return e}var c,d=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function g(t,e,i,n){var r=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=d(e,r);else{var o=document.createTextNode(r),h=t.childNodes;h[e]&&t.removeChild(h[e]),h.length?t.insertBefore(o,h[e]):t.appendChild(o)}}function f(t,e,i){var n=i.css,r=i.media,o=i.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var w=null,u=0;function x(t,e){var i,n,r;if(e.singleton){var o=u++;i=w||(w=s(e)),n=g.bind(null,i,o,!1),r=g.bind(null,i,o,!0)}else i=s(e),n=f.bind(null,i,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var i=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var r=a(i[n]);h[r].references--}for(var o=l(t,e),s=0;s<i.length;s++){var c=a(i[s]);0===h[c].references&&(h[c].updater(),h.splice(c,1))}i=o}}}},function(t,e,i){(e=i(4)(!1)).push([t.i,"/*  Typography */\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://rsms.me/inter/font-files/Inter-Regular.woff2?v=3.7\")\n    format(\"woff2\"),\n  url(\"https://rsms.me/inter/font-files/Inter-Regular.woff?v=3.7\")\n    format(\"woff\");\n}\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"https://rsms.me/inter/font-files/Inter-Medium.woff2?v=3.7\")\n    format(\"woff2\"),\n  url(\"https://rsms.me/inter/font-files/Inter-Medium.woff2?v=3.7\")\n    format(\"woff\");\n}\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(\"https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=3.7\")\n    format(\"woff2\"),\n  url(\"https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=3.7\")\n    format(\"woff\");\n}\n\nbody {\n  font: 12px \"Inter\", sans-serif;\n  margin: 8px 0;\n}\n\nbutton {\n  border: none;\n  padding: 0;\n  margin: 0;\n  outline: none;\n}\n\ninput {\n  border: none;\n  outline: none;\n  padding: 8px;\n}\n\n.icon {\n  height: 46px;\n  margin: 0;\n  padding: 16px 16px 16px 60px;\n  position: relative;\n  float: left;\n  width: 100%;\n  text-align: left;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.icon:after {\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  left: 16px;\n  height: 30px;\n  width: 30px;\n  background-size: 100%;\n}\n\n.icon:hover {\n  cursor: pointer;\n  background: #f2f2f2;\n}\n\n.icon-both:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='40' height='40' rx='1'/%3E%3C/mask%3E%3Crect width='40' height='40' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='5' y='5' width='16' height='2' rx='1' fill='%23333333'/%3E%3Crect x='5' y='34' width='21' height='1' rx='0.5' fill='%23333333'/%3E%3Crect x='5' y='31' width='30' height='1' rx='0.5' fill='%23333333'/%3E%3Crect x='5' y='28' width='30' height='1' rx='0.5' fill='%23333333'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-title:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='40' height='40' rx='1'/%3E%3C/mask%3E%3Crect width='40' height='40' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='5' y='5' width='16' height='2' rx='1' fill='%23333333'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-footnote:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='40' height='40' rx='1'/%3E%3C/mask%3E%3Crect width='40' height='40' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='5' y='34' width='21' height='1' rx='0.5' fill='%23333333'/%3E%3Crect x='5' y='31' width='30' height='1' rx='0.5' fill='%23333333'/%3E%3Crect x='5' y='28' width='30' height='1' rx='0.5' fill='%23333333'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-annotation:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='36' height='36' rx='1'/%3E%3C/mask%3E%3Crect width='36' height='36' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='5' y='26' width='5' height='5' rx='2.5' fill='%23333333'/%3E%3Crect x='13' y='27' width='26' height='12' rx='1' fill='%23333333' stroke='%23333333' stroke-width='2'/%3E%3Crect x='17' y='34' width='18' height='1' rx='0.5' fill='white'/%3E%3Crect x='17' y='31' width='18' height='1' rx='0.5' fill='white'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-annotation-alt:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect x='4' width='36' height='36' rx='1'/%3E%3C/mask%3E%3Crect x='4' width='36' height='36' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='30' y='26' width='5' height='5' rx='2.5' fill='%23333333'/%3E%3Crect x='1' y='27' width='26' height='12' rx='1' fill='%23333333' stroke='%23333333' stroke-width='2'/%3E%3Crect x='5' y='34' width='18' height='1' rx='0.5' fill='white'/%3E%3Crect x='5' y='31' width='18' height='1' rx='0.5' fill='white'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-sticky-green:after {\n  /*background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='40' height='40' rx='1'/%3E%3C/mask%3E%3Crect width='40' height='40' rx='1' stroke='%236FCF97' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='5' y='5' width='30' height='1' rx='0.5' fill='%236FCF97'/%3E%3Crect x='5' y='8' width='30' height='1' rx='0.5' fill='%236FCF97'/%3E%3Crect x='5' y='11' width='26' height='1' rx='0.5' fill='%236FCF97'/%3E%3C/svg%3E%0A\");*/\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='36' height='36' rx='1'/%3E%3C/mask%3E%3Crect width='36' height='36' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='19' y='19' width='21' height='21' rx='1' fill='%236FCF97'/%3E%3Crect x='23' y='26' width='13' height='1' rx='0.5' fill='white'/%3E%3Crect x='23' y='29' width='10' height='1' rx='0.5' fill='white'/%3E%3Crect x='23' y='23' width='13' height='1' rx='0.5' fill='white'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-sticky-yellow:after {\n  /*background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='40' height='40' rx='1'/%3E%3C/mask%3E%3Crect width='40' height='40' rx='1' stroke='%23F2C94C' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='5' y='5' width='30' height='1' rx='0.5' fill='%23F2C94C'/%3E%3Crect x='5' y='8' width='30' height='1' rx='0.5' fill='%23F2C94C'/%3E%3Crect x='5' y='11' width='26' height='1' rx='0.5' fill='%23F2C94C'/%3E%3C/svg%3E%0A\");*/\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='36' height='36' rx='1'/%3E%3C/mask%3E%3Crect width='36' height='36' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='19' y='19' width='21' height='21' rx='1' fill='%23F2C94C'/%3E%3Crect x='23' y='26' width='13' height='1' rx='0.5' fill='white'/%3E%3Crect x='23' y='29' width='10' height='1' rx='0.5' fill='white'/%3E%3Crect x='23' y='23' width='13' height='1' rx='0.5' fill='white'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-sticky-red:after {\n  /*background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='40' height='40' rx='1'/%3E%3C/mask%3E%3Crect width='40' height='40' rx='1' stroke='%23EB5757' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='5' y='5' width='30' height='1' rx='0.5' fill='%23EB5757'/%3E%3Crect x='5' y='8' width='30' height='1' rx='0.5' fill='%23EB5757'/%3E%3Crect x='5' y='11' width='26' height='1' rx='0.5' fill='%23EB5757'/%3E%3C/svg%3E%0A\");*/\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='36' height='36' rx='1'/%3E%3C/mask%3E%3Crect width='36' height='36' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='19' y='19' width='21' height='21' rx='1' fill='%23EB5757'/%3E%3Crect x='23' y='26' width='13' height='1' rx='0.5' fill='white'/%3E%3Crect x='23' y='29' width='10' height='1' rx='0.5' fill='white'/%3E%3Crect x='23' y='23' width='13' height='1' rx='0.5' fill='white'/%3E%3C/svg%3E%0A\");\n}\n\n.icon-cover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-inside-1' fill='white'%3E%3Crect width='40' height='40' rx='1'/%3E%3C/mask%3E%3Crect width='40' height='40' rx='1' stroke='%23333333' stroke-width='4' mask='url(%23path-1-inside-1)'/%3E%3Crect x='8' y='11' width='18' height='18' rx='1' fill='%23333333' stroke='%23333333' stroke-width='2'/%3E%3Crect x='31' y='11' width='8' height='18' rx='1' stroke='%23333333' stroke-width='2'/%3E%3Crect x='11' y='14' width='10' height='2' rx='1' fill='white'/%3E%3Crect x='34' y='14' width='6' height='2' rx='1' fill='%23333333'/%3E%3Crect x='11' y='22' width='12' height='1' rx='0.5' fill='white'/%3E%3Crect x='11' y='19' width='12' height='1' rx='0.5' fill='white'/%3E%3Crect x='34' y='19' width='6' height='1' rx='0.5' fill='%23333333'/%3E%3Crect x='34' y='22' width='6' height='1' rx='0.5' fill='%23333333'/%3E%3C/svg%3E%0A\");\n}\n",""]),t.exports=e},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var r=(h=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(h)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[i].concat(o).concat([r]).join("\n")}var h,a,l;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(n)for(var o=0;o<this.length;o++){var h=this[o][0];null!=h&&(r[h]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);n&&r[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),e.push(l))}},e}}]);