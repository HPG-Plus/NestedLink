!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e(t.NestedLink={},t.React)}(this,function(t,e){"use strict";var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function r(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var o=Array.prototype,i=Object.prototype;function u(t){if(t&&"object"==typeof t)switch(Object.getPrototypeOf(t)){case o:return s;case i:return c}return a}var a={clone:function(t){return t},map:function(t,e){return[]},remove:function(t){return t}},c={map:function(t,e){var n=[];for(var r in t.value){var o=e(t.at(r),r);void 0===o||n.push(o)}return n},remove:function(t,e){return delete t[e],t},clone:function(t){var e={};for(var n in t)e[n]=t[n];return e}},s={clone:function(t){return t.slice()},remove:function(t,e){return t.splice(e,1),t},map:function(t,e){for(var n=t.value.length,r=Array(n),o=0,i=0;o<n;o++){var u=e(t.at(o),o);void 0===u||(r[i++]=u)}return r.length===i||(r.length=i),r}},p=function(){function t(t){this.value=t}return t.value=function(t,e){return new l(t,e)},Object.defineProperty(t.prototype,"validationError",{get:function(){return this.error},enumerable:!0,configurable:!0}),t.prototype.onChange=function(t){var e=this;return new f(this,function(n){t(n),e.set(n)})},Object.defineProperty(t.prototype,"props",{get:function(){var t=this;return"boolean"==typeof this.value?{checked:this.value,onChange:function(e){return t.set(Boolean(e.target.checked))}}:{value:this.value,onChange:function(e){return t.set(e.target.value)}}},enumerable:!0,configurable:!0}),t.prototype.requestChange=function(t){this.set(t)},t.prototype.update=function(t,e){var n=t(this.clone(),e);void 0===n||this.set(n)},t.prototype.pipe=function(t){var e=this;return new f(this,function(n){var r=t(n,e.value);void 0===r||e.set(r)})},t.prototype.action=function(t){var e=this;return function(n){return e.update(t,n)}},t.prototype.equals=function(t){return new h(this,t)},t.prototype.enabled=function(t){return new v(this,t||"")},t.prototype.contains=function(t){return new y(this,t)},t.prototype.push=function(){var t=s.clone(this.value);Array.prototype.push.apply(t,arguments),this.set(t)},t.prototype.unshift=function(){var t=s.clone(this.value);Array.prototype.unshift.apply(t,arguments),this.set(t)},t.prototype.splice=function(){var t=s.clone(this.value);Array.prototype.splice.apply(t,arguments),this.set(t)},t.prototype.map=function(t){return u(this.value).map(this,t)},t.prototype.removeAt=function(t){var e=this.value,n=u(e);this.set(n.remove(n.clone(e),t))},t.prototype.at=function(t){return new k(this,t)},t.prototype.clone=function(){var t=this.value;return u(t).clone(t)},t.prototype.pick=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];t[n]=new k(this,n)}return t},t.prototype.check=function(t,e){return this.error||t(this.value)||(this.error=e||t.error||d),this},t}(),l=function(t){function e(e,n){var r=t.call(this,e)||this;return r.set=n,r}return r(e,t),e.prototype.set=function(t){},e}(p),f=function(t){function e(e,n){var r=t.call(this,e.value)||this;r.set=n;var o=e.error;return o&&(r.error=o),r}return r(e,t),e.prototype.set=function(t){},e}(p),h=function(t){function e(e,n){var r=t.call(this,e.value===n)||this;return r.parent=e,r.truthyValue=n,r}return r(e,t),e.prototype.set=function(t){this.parent.set(t?this.truthyValue:null)},e}(p),v=function(t){function e(e,n){var r=t.call(this,null!=e.value)||this;return r.parent=e,r.defaultValue=n,r}return r(e,t),e.prototype.set=function(t){this.parent.set(t?this.defaultValue:null)},e}(p),y=function(t){function e(e,n){var r=t.call(this,e.value.indexOf(n)>=0)||this;return r.parent=e,r.element=n,r}return r(e,t),e.prototype.set=function(t){var e=this,n=Boolean(t);if(this.value!==n){var r=this.parent.value,o=t?r.concat(this.element):r.filter(function(t){return t!==e.element});this.parent.set(o)}},e}(p),d="Invalid value",k=function(t){function e(e,n){var r=t.call(this,e.value[n])||this;return r.parent=e,r.key=n,r}return r(e,t),e.prototype.remove=function(){this.parent.removeAt(this.key)},e.prototype.set=function(t){var e=this;this.value!==t&&this.parent.update(function(n){return n[e.key]=t,n})},e}(p),m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.links=null,e}return r(e,t),e.prototype.linkAt=function(t){return b(this,t)},e.prototype.linkAll=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return g(this,t)},e}(e.Component);function g(t,e){for(var n=t.state,r=t.links||(t.links={}),o=0,i=e.length?e:Object.keys(n);o<i.length;o++){var u=i[o],a=n[u],c=r[u];c&&c.value===a||(r[u]=new w(t,u,a))}return r}function b(t,e){var n=t.state[e],r=t.links||(t.links={}),o=r[e];return o&&o.value===n?o:r[e]=new w(t,e,n)}p.all=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return g(t,e)},p.state=b;var w=function(t){function e(e,n,r){var o=t.call(this,r)||this;return o.component=e,o.key=n,o}return r(e,t),e.prototype.set=function(t){var e={};e[this.key]=t,this.component.setState(e)},e}(p);t.default=p,t.LinkedComponent=m,t.StateLink=w,t.Link=p,t.CustomLink=l,t.CloneLink=f,t.EqualsLink=h,t.EnabledLink=v,t.ContainsLink=y,t.LinkAt=k,t.useLink=function(t){var n=e.useState(t),r=n[0],o=n[1];return new l(r,o)},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
