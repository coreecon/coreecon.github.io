/*! For license information please see 6219.js.LICENSE.txt */
"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6219],{76219:(t,e,n)=>{n.d(e,{M:()=>p});var r,i=n(1514),o=n(92233),a=n(42051);function u(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function u(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))}function s(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}function c(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r}function l(t){return"function"==typeof t.iter?t.iter():new h(t)}!function(t){function e(t,e,n,r){void 0===n&&(n=0),void 0===r&&(r=-1);var i,o=t.length;if(0===o)return-1;n=n<0?Math.max(0,n+o):Math.min(n,o-1),i=(r=r<0?Math.max(0,r+o):Math.min(r,o-1))<n?r+1+(o-n):r-n+1;for(var a=0;a<i;++a){var u=(n+a)%o;if(t[u]===e)return u}return-1}function n(t,e,n,r){void 0===n&&(n=-1),void 0===r&&(r=0);var i,o=t.length;if(0===o)return-1;i=(n=n<0?Math.max(0,n+o):Math.min(n,o-1))<(r=r<0?Math.max(0,r+o):Math.min(r,o-1))?n+1+(o-r):n-r+1;for(var a=0;a<i;++a){var u=(n-a+o)%o;if(t[u]===e)return u}return-1}function r(t,e,n,r){void 0===n&&(n=0),void 0===r&&(r=-1);var i,o=t.length;if(0===o)return-1;n=n<0?Math.max(0,n+o):Math.min(n,o-1),i=(r=r<0?Math.max(0,r+o):Math.min(r,o-1))<n?r+1+(o-n):r-n+1;for(var a=0;a<i;++a){var u=(n+a)%o;if(e(t[u],u))return u}return-1}function i(t,e,n,r){void 0===n&&(n=-1),void 0===r&&(r=0);var i,o=t.length;if(0===o)return-1;i=(n=n<0?Math.max(0,n+o):Math.min(n,o-1))<(r=r<0?Math.max(0,r+o):Math.min(r,o-1))?n+1+(o-r):n-r+1;for(var a=0;a<i;++a){var u=(n-a+o)%o;if(e(t[u],u))return u}return-1}function o(t,e,n){void 0===e&&(e=0),void 0===n&&(n=-1);var r=t.length;if(!(r<=1))for(e=e<0?Math.max(0,e+r):Math.min(e,r-1),n=n<0?Math.max(0,n+r):Math.min(n,r-1);e<n;){var i=t[e],o=t[n];t[e++]=o,t[n--]=i}}function a(t,e){var n=t.length;if(e<0&&(e+=n),!(e<0||e>=n)){for(var r=t[e],i=e+1;i<n;++i)t[i-1]=t[i];return t.length=n-1,r}}t.firstIndexOf=e,t.lastIndexOf=n,t.findFirstIndex=r,t.findLastIndex=i,t.findFirstValue=function(t,e,n,i){void 0===n&&(n=0),void 0===i&&(i=-1);var o=r(t,e,n,i);return-1!==o?t[o]:void 0},t.findLastValue=function(t,e,n,r){void 0===n&&(n=-1),void 0===r&&(r=0);var o=i(t,e,n,r);return-1!==o?t[o]:void 0},t.lowerBound=function(t,e,n,r,i){void 0===r&&(r=0),void 0===i&&(i=-1);var o=t.length;if(0===o)return 0;for(var a=r=r<0?Math.max(0,r+o):Math.min(r,o-1),u=(i=i<0?Math.max(0,i+o):Math.min(i,o-1))-r+1;u>0;){var s=u>>1,c=a+s;n(t[c],e)<0?(a=c+1,u-=s+1):u=s}return a},t.upperBound=function(t,e,n,r,i){void 0===r&&(r=0),void 0===i&&(i=-1);var o=t.length;if(0===o)return 0;for(var a=r=r<0?Math.max(0,r+o):Math.min(r,o-1),u=(i=i<0?Math.max(0,i+o):Math.min(i,o-1))-r+1;u>0;){var s=u>>1,c=a+s;n(t[c],e)>0?u=s:(a=c+1,u-=s+1)}return a},t.shallowEqual=function(t,e,n){if(t===e)return!0;if(t.length!==e.length)return!1;for(var r=0,i=t.length;r<i;++r)if(n?!n(t[r],e[r]):t[r]!==e[r])return!1;return!0},t.slice=function(t,e){void 0===e&&(e={});var n=e.start,r=e.stop,i=e.step;if(void 0===i&&(i=1),0===i)throw new Error("Slice `step` cannot be zero.");var o,a=t.length;void 0===n?n=i<0?a-1:0:n<0?n=Math.max(n+a,i<0?-1:0):n>=a&&(n=i<0?a-1:a),void 0===r?r=i<0?-1:a:r<0?r=Math.max(r+a,i<0?-1:0):r>=a&&(r=i<0?a-1:a),o=i<0&&r>=n||i>0&&n>=r?0:i<0?Math.floor((r-n+1)/i+1):Math.floor((r-n-1)/i+1);for(var u=[],s=0;s<o;++s)u[s]=t[n+s*i];return u},t.move=function(t,e,n){var r=t.length;if(!(r<=1)&&(e=e<0?Math.max(0,e+r):Math.min(e,r-1))!==(n=n<0?Math.max(0,n+r):Math.min(n,r-1))){for(var i=t[e],o=e<n?1:-1,a=e;a!==n;a+=o)t[a]=t[a+o];t[n]=i}},t.reverse=o,t.rotate=function(t,e,n,r){void 0===n&&(n=0),void 0===r&&(r=-1);var i=t.length;if(!(i<=1||(n=n<0?Math.max(0,n+i):Math.min(n,i-1))>=(r=r<0?Math.max(0,r+i):Math.min(r,i-1)))){var a=r-n+1;if(e>0?e%=a:e<0&&(e=(e%a+a)%a),0!==e){var u=n+e;o(t,n,u-1),o(t,u,r),o(t,n,r)}}},t.fill=function(t,e,n,r){void 0===n&&(n=0),void 0===r&&(r=-1);var i=t.length;if(0!==i){var o;n=n<0?Math.max(0,n+i):Math.min(n,i-1),o=(r=r<0?Math.max(0,r+i):Math.min(r,i-1))<n?r+1+(i-n):r-n+1;for(var a=0;a<o;++a)t[(n+a)%i]=e}},t.insert=function(t,e,n){var r=t.length;e=e<0?Math.max(0,e+r):Math.min(e,r);for(var i=r;i>e;--i)t[i]=t[i-1];t[e]=n},t.removeAt=a,t.removeFirstOf=function(t,n,r,i){void 0===r&&(r=0),void 0===i&&(i=-1);var o=e(t,n,r,i);return-1!==o&&a(t,o),o},t.removeLastOf=function(t,e,r,i){void 0===r&&(r=-1),void 0===i&&(i=0);var o=n(t,e,r,i);return-1!==o&&a(t,o),o},t.removeAllOf=function(t,e,n,r){void 0===n&&(n=0),void 0===r&&(r=-1);var i=t.length;if(0===i)return 0;n=n<0?Math.max(0,n+i):Math.min(n,i-1),r=r<0?Math.max(0,r+i):Math.min(r,i-1);for(var o=0,a=0;a<i;++a)n<=r&&a>=n&&a<=r&&t[a]===e||r<n&&(a<=r||a>=n)&&t[a]===e?o++:o>0&&(t[a-o]=t[a]);return o>0&&(t.length=i-o),o},t.removeFirstWhere=function(t,e,n,i){var o;void 0===n&&(n=0),void 0===i&&(i=-1);var u=r(t,e,n,i);return-1!==u&&(o=a(t,u)),{index:u,value:o}},t.removeLastWhere=function(t,e,n,r){var o;void 0===n&&(n=-1),void 0===r&&(r=0);var u=i(t,e,n,r);return-1!==u&&(o=a(t,u)),{index:u,value:o}},t.removeAllWhere=function(t,e,n,r){void 0===n&&(n=0),void 0===r&&(r=-1);var i=t.length;if(0===i)return 0;n=n<0?Math.max(0,n+i):Math.min(n,i-1),r=r<0?Math.max(0,r+i):Math.min(r,i-1);for(var o=0,a=0;a<i;++a)n<=r&&a>=n&&a<=r&&e(t[a],a)||r<n&&(a<=r||a>=n)&&e(t[a],a)?o++:o>0&&(t[a-o]=t[a]);return o>0&&(t.length=i-o),o}}(r||(r={}));var v,f,h=function(){function t(t){this._index=0,this._source=t}return t.prototype.iter=function(){return this},t.prototype.clone=function(){var e=new t(this._source);return e._index=this._index,e},t.prototype.next=function(){if(!(this._index>=this._source.length))return this._source[this._index++]},t}();!function(t){t.rangeLength=function(t,e,n){return 0===n?1/0:t>e&&n>0||t<e&&n<0?0:Math.ceil((e-t)/n)}}(v||(v={})),function(t){function e(t,e,n){void 0===n&&(n=0);for(var r=new Array(e.length),i=0,o=n,a=e.length;i<a;++i,++o){if(-1===(o=t.indexOf(e[i],o)))return null;r[i]=o}return r}t.findIndices=e,t.matchSumOfSquares=function(t,n,r){void 0===r&&(r=0);var i=e(t,n,r);if(!i)return null;for(var o=0,a=0,u=i.length;a<u;++a){var s=i[a]-r;o+=s*s}return{score:o,indices:i}},t.matchSumOfDeltas=function(t,n,r){void 0===r&&(r=0);var i=e(t,n,r);if(!i)return null;for(var o=0,a=r-1,u=0,s=i.length;u<s;++u){var c=i[u];o+=c-a-1,a=c}return{score:o,indices:i}},t.highlight=function(t,e,n){for(var r=[],i=0,o=0,a=e.length;i<a;){for(var u=e[i],s=e[i];++i<a&&e[i]===s+1;)s++;o<u&&r.push(t.slice(o,u)),u<s+1&&r.push(n(t.slice(u,s+1))),o=s+1}return o<t.length&&r.push(t.slice(o)),r},t.cmp=function(t,e){return t<e?-1:t>e?1:0}}(f||(f={}));var d,p=function(){function t(t){this._started=!1,this._pluginMap=d.createPluginMap(),this._serviceMap=d.createServiceMap(),this._delegate=new o.PromiseDelegate,this.commands=new i.CommandRegistry,this.contextMenu=new a.ContextMenu({commands:this.commands,renderer:t.contextMenuRenderer}),this.shell=t.shell}return Object.defineProperty(t.prototype,"started",{get:function(){return this._delegate.promise},enumerable:!0,configurable:!0}),t.prototype.getPluginDescription=function(t){var e=this._pluginMap[t];return e&&e.description||""},t.prototype.hasPlugin=function(t){return t in this._pluginMap},t.prototype.isPluginActivated=function(t){var e=this._pluginMap[t];return!!e&&e.activated},t.prototype.listPlugins=function(){return Object.keys(this._pluginMap)},t.prototype.registerPlugin=function(t){if(t.id in this._pluginMap)throw new Error("Plugin '"+t.id+"' is already registered.");var e=d.createPluginData(t);d.ensureNoCycle(e,this._pluginMap,this._serviceMap),e.provides&&this._serviceMap.set(e.provides,e.id),this._pluginMap[e.id]=e},t.prototype.registerPlugins=function(t){for(var e=0,n=t;e<n.length;e++){var r=n[e];this.registerPlugin(r)}},t.prototype.deregisterPlugin=function(t,e){var n=this._pluginMap[t];if(n){if(n.activated&&!e)throw new Error("Plugin '"+t+"' is still active.");delete this._pluginMap[t]}},t.prototype.activatePlugin=function(t){return u(this,void 0,void 0,(function(){var e,n,r,i=this;return s(this,(function(o){return(e=this._pluginMap[t])?e.activated?[2]:(e.promise||(n=e.requires.map((function(t){return i.resolveRequiredService(t)})),r=e.optional.map((function(t){return i.resolveOptionalService(t)})),e.promise=Promise.all(c(n,r)).then((function(t){return e.activate.apply(void 0,c([i],t))})).then((function(t){e.service=t,e.activated=!0,e.promise=null})).catch((function(t){throw e.promise=null,t}))),[2,e.promise]):[2,Promise.reject(new Error("Plugin '"+t+"' is not registered."))]}))}))},t.prototype.deactivatePlugin=function(t){return u(this,void 0,void 0,(function(){var e,n,r,i,o,a,u,l,v,f,h=this;return s(this,(function(s){switch(s.label){case 0:if(!(e=this._pluginMap[t]))throw new ReferenceError("Plugin '"+t+"' is not registered.");if(!e.activated)return[2,[]];if(!e.deactivate)throw new TypeError("Plugin '"+t+"'#deactivate() method missing");for(n=d.findDependents(t,this._pluginMap,this._serviceMap),r=n.map((function(t){return h._pluginMap[t]})),i=0,o=r;i<o.length;i++)if(!(a=o[i]).deactivate)throw new TypeError("Plugin "+a.id+"#deactivate() method missing (depends on "+t+")");u=0,l=r,s.label=1;case 1:return u<l.length?(v=l[u],f=c(v.requires,v.optional).map((function(t){var e=h._serviceMap.get(t);return e?h._pluginMap[e].service:null})),[4,v.deactivate.apply(v,c([this],f))]):[3,4];case 2:s.sent(),v.service=null,v.activated=!1,s.label=3;case 3:return u++,[3,1];case 4:return n.pop(),[2,n]}}))}))},t.prototype.resolveRequiredService=function(t){return u(this,void 0,void 0,(function(){var e,n;return s(this,(function(r){switch(r.label){case 0:return(e=this._serviceMap.get(t))?(n=this._pluginMap[e]).activated?[3,2]:[4,this.activatePlugin(e)]:[2,Promise.reject(new Error("No provider for: "+t.name+"."))];case 1:r.sent(),r.label=2;case 2:return[2,n.service]}}))}))},t.prototype.resolveOptionalService=function(t){return u(this,void 0,void 0,(function(){var e,n,r;return s(this,(function(i){switch(i.label){case 0:if(!(e=this._serviceMap.get(t)))return[2,null];if((n=this._pluginMap[e]).activated)return[3,4];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.activatePlugin(e)];case 2:return i.sent(),[3,4];case 3:return r=i.sent(),console.error(r),[2,null];case 4:return[2,n.service]}}))}))},t.prototype.start=function(t){var e=this;if(void 0===t&&(t={}),this._started)return this._delegate.promise;this._started=!0;var n=t.hostID||"",r=d.collectStartupPlugins(this._pluginMap,t).map((function(t){return e.activatePlugin(t).catch((function(e){console.error("Plugin '"+t+"' failed to activate."),console.error(e)}))}));return Promise.all(r).then((function(){e.attachShell(n),e.addEventListeners(),e._delegate.resolve(void 0)})),this._delegate.promise},t.prototype.handleEvent=function(t){switch(t.type){case"resize":this.evtResize(t);break;case"keydown":this.evtKeydown(t);break;case"contextmenu":this.evtContextMenu(t)}},t.prototype.attachShell=function(t){a.Widget.attach(this.shell,t&&document.getElementById(t)||document.body)},t.prototype.addEventListeners=function(){document.addEventListener("contextmenu",this),document.addEventListener("keydown",this,!0),window.addEventListener("resize",this)},t.prototype.evtKeydown=function(t){this.commands.processKeydownEvent(t)},t.prototype.evtContextMenu=function(t){t.shiftKey||this.contextMenu.open(t)&&(t.preventDefault(),t.stopPropagation())},t.prototype.evtResize=function(t){this.shell.update()},t}();!function(t){t.createPluginMap=function(){return Object.create(null)},t.createServiceMap=function(){return new Map},t.createPluginData=function(t){return{id:t.id,description:t.description||"",service:null,promise:null,activated:!1,activate:t.activate,deactivate:t.deactivate||null,provides:t.provides||null,autoStart:t.autoStart||!1,requires:t.requires?t.requires.slice():[],optional:t.optional?t.optional.slice():[]}},t.ensureNoCycle=function(t,e,n){var r=c(t.requires,t.optional),i=function(r){if(r===t.provides)return!0;var a=n.get(r);if(!a)return!1;var u=e[a],s=c(u.requires,u.optional);return 0!==s.length&&(o.push(a),!!s.some(i)||(o.pop(),!1))};if(t.provides&&0!==r.length){var o=[t.id];if(r.some(i))throw new Error("Cycle detected: "+o.join(" -> ")+".")}},t.findDependents=function(t,e,n){var r=new Array,i=function(t){var i=e[t],o=c(i.requires,i.optional);r.push.apply(r,o.reduce((function(e,r){var i=n.get(r);return i&&e.push([t,i]),e}),[]))};for(var o in e)i(o);for(var a=r.filter((function(e){return e[1]===t})),u=0;a.length>u;){for(var s=a.length,v=function(t){r.filter((function(e){return e[1]===t})).forEach((function(t){-1==a.indexOf(t)&&a.push(t)}))},f=0,h=a.map((function(t){return t[0]})).reduce((function(t,e){return-1==t.indexOf(e)&&t.push(e),t}),[]);f<h.length;f++)v(h[f]);u=s}var d=function(t){var e=[],n=new Set,r=new Map;return function(t,e){for(var n,i=l(t);void 0!==(n=i.next());)if(!1===(a=void 0,u=void 0,s=void 0,a=(o=n)[0],u=o[1],void((s=r.get(u))?s.push(a):r.set(u,[a]))))return;var o,a,u,s}(t),r.forEach((function(t,e){i(e)})),e;function i(t){if(!n.has(t)){n.add(t);var o=r.get(t);o&&o.forEach(i),e.push(t)}}}(a),p=function(e,n){for(var r,i=0,o=l(e);void 0!==(r=o.next());)if(i++,r===t)return i-1;return-1}(d);return-1===p?[t]:d.slice(0,p+1)},t.collectStartupPlugins=function(t,e){var n=new Map;for(var r in t)t[r].autoStart&&n.set(r,!0);if(e.startPlugins)for(var i=0,o=e.startPlugins;i<o.length;i++)r=o[i],n.set(r,!0);if(e.ignorePlugins)for(var a=0,u=e.ignorePlugins;a<u.length;a++)r=u[a],n.delete(r);return Array.from(n.keys())}}(d||(d={}))}}]);