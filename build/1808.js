/*! For license information please see 1808.js.LICENSE.txt */
var _JUPYTERLAB;(()=>{"use strict";var e,t,i,r,n,a,s,o,l,p={41808:(e,t,i)=>{const r=Symbol("Comlink.proxy"),n=Symbol("Comlink.endpoint"),a=Symbol("Comlink.releaseProxy"),s=Symbol("Comlink.finalizer"),o=Symbol("Comlink.thrown"),l=e=>"object"==typeof e&&null!==e||"function"==typeof e,p=new Map([["proxy",{canHandle:e=>l(e)&&e[r],serialize(e){const{port1:t,port2:i}=new MessageChannel;return u(e,t),[i,[i]]},deserialize:e=>(e.start(),f(e,[],undefined))}],["throw",{canHandle:e=>l(e)&&o in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function u(e,t=globalThis,i=["*"]){t.addEventListener("message",(function n(a){if(!a||!a.data)return;if(!function(e,t){for(const i of e){if(t===i||"*"===i)return!0;if(i instanceof RegExp&&i.test(t))return!0}return!1}(i,a.origin))return void console.warn(`Invalid origin '${a.origin}' for comlink proxy`);const{id:l,type:p,path:h}=Object.assign({path:[]},a.data),d=(a.data.argumentList||[]).map(b);let m;try{const t=h.slice(0,-1).reduce(((e,t)=>e[t]),e),i=h.reduce(((e,t)=>e[t]),e);switch(p){case"GET":m=i;break;case"SET":t[h.slice(-1)[0]]=b(a.data.value),m=!0;break;case"APPLY":m=i.apply(t,d);break;case"CONSTRUCT":m=function(e){return Object.assign(e,{[r]:!0})}(new i(...d));break;case"ENDPOINT":{const{port1:t,port2:i}=new MessageChannel;u(e,i),m=function(e,t){return g.set(e,t),e}(t,[t])}break;case"RELEASE":m=void 0;break;default:return}}catch(e){m={value:e,[o]:0}}Promise.resolve(m).catch((e=>({value:e,[o]:0}))).then((i=>{const[r,a]=v(i);t.postMessage(Object.assign(Object.assign({},r),{id:l}),a),"RELEASE"===p&&(t.removeEventListener("message",n),c(t),s in e&&"function"==typeof e[s]&&e[s]())})).catch((e=>{const[i,r]=v({value:new TypeError("Unserializable return value"),[o]:0});t.postMessage(Object.assign(Object.assign({},i),{id:l}),r)}))})),t.start&&t.start()}function c(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function h(e){if(e)throw new Error("Proxy has been released and is not useable")}function d(e){return w(e,{type:"RELEASE"}).then((()=>{c(e)}))}const m=new WeakMap,_="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(m.get(e)||0)-1;m.set(e,t),0===t&&d(e)}));function f(e,t=[],i=function(){}){let r=!1;const s=new Proxy(i,{get(i,n){if(h(r),n===a)return()=>{!function(e){_&&_.unregister(e)}(s),d(e),r=!0};if("then"===n){if(0===t.length)return{then:()=>s};const i=w(e,{type:"GET",path:t.map((e=>e.toString()))}).then(b);return i.then.bind(i)}return f(e,[...t,n])},set(i,n,a){h(r);const[s,o]=v(a);return w(e,{type:"SET",path:[...t,n].map((e=>e.toString())),value:s},o).then(b)},apply(i,a,s){h(r);const o=t[t.length-1];if(o===n)return w(e,{type:"ENDPOINT"}).then(b);if("bind"===o)return f(e,t.slice(0,-1));const[l,p]=y(s);return w(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:l},p).then(b)},construct(i,n){h(r);const[a,s]=y(n);return w(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:a},s).then(b)}});return function(e,t){const i=(m.get(t)||0)+1;m.set(t,i),_&&_.register(e,t,e)}(s,e),s}function y(e){const t=e.map(v);return[t.map((e=>e[0])),(i=t.map((e=>e[1])),Array.prototype.concat.apply([],i))];var i}const g=new WeakMap;function v(e){for(const[t,i]of p)if(i.canHandle(e)){const[r,n]=i.serialize(e);return[{type:"HANDLER",name:t,value:r},n]}return[{type:"RAW",value:e},g.get(e)||[]]}function b(e){switch(e.type){case"HANDLER":return p.get(e.name).deserialize(e.value);case"RAW":return e.value}}function w(e,t,i){return new Promise((r=>{const n=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(i){i.data&&i.data.id&&i.data.id===n&&(e.removeEventListener("message",t),r(i.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:n},t),i)}))}u(new class{constructor(){this._options=null,this._initializer=null,this._pyodide=null,this._localPath="",this._driveName="",this._driveFS=null,this._initialized=new Promise(((e,t)=>{this._initializer={resolve:e,reject:t}}))}async initialize(e){var t;if(this._options=e,e.location.includes(":")){const t=e.location.split(":");this._driveName=t[0],this._localPath=t[1]}else this._driveName="",this._localPath=e.location;await this.initRuntime(e),await this.initFilesystem(e),await this.initPackageManager(e),await this.initKernel(e),await this.initGlobals(e),null===(t=this._initializer)||void 0===t||t.resolve()}async initRuntime(e){const{pyodideUrl:t,indexUrl:i}=e;let r;t.endsWith(".mjs")?r=(await import(t)).loadPyodide:(importScripts(t),r=self.loadPyodide),this._pyodide=await r({indexURL:i})}async initPackageManager(e){if(!this._options)throw new Error("Uninitialized");const{pipliteWheelUrl:t,disablePyPIFallback:i,pipliteUrls:r}=this._options;await this._pyodide.loadPackage(["micropip"]),await this._pyodide.runPythonAsync(`\n      import micropip\n      await micropip.install('${t}', keep_going=True)\n      import piplite.piplite\n      piplite.piplite._PIPLITE_DISABLE_PYPI = ${i?"True":"False"}\n      piplite.piplite._PIPLITE_URLS = ${JSON.stringify(r)}\n    `)}async initKernel(e){await this._pyodide.runPythonAsync("\n      await piplite.install(['sqlite3'], keep_going=True);\n      await piplite.install(['ipykernel'], keep_going=True);\n      await piplite.install(['pyolite'], keep_going=True);\n      await piplite.install(['ipython'], keep_going=True);\n      import pyolite\n    "),e.mountDrive&&this._localPath&&await this._pyodide.runPythonAsync(`\n        import os;\n        os.chdir("${this._localPath}");\n      `)}async initGlobals(e){const{globals:t}=this._pyodide;this._kernel=t.get("pyolite").kernel_instance.copy(),this._stdout_stream=t.get("pyolite").stdout_stream.copy(),this._stderr_stream=t.get("pyolite").stderr_stream.copy(),this._interpreter=this._kernel.interpreter.copy(),this._interpreter.send_comm=this.sendComm.bind(this)}async initFilesystem(e){if(e.mountDrive){const t="/drive",{FS:r,PATH:n,ERRNO_CODES:a}=this._pyodide,{baseUrl:s}=e,{DriveFS:o}=await Promise.all([i.e(6413),i.e(4015),i.e(2233),i.e(9110),i.e(6461)]).then(i.bind(i,26461)),l=new o({FS:r,PATH:n,ERRNO_CODES:a,baseUrl:s,driveName:this._driveName,mountpoint:t});r.mkdir(t),r.mount(l,{},t),r.chdir(t),this._driveFS=l}}mapToObject(e){const t=e instanceof Array?[]:{};return e.forEach(((e,i)=>{t[i]=e instanceof Map||e instanceof Array?this.mapToObject(e):e})),t}formatResult(e){if(!this._pyodide.isPyProxy(e))return e;const t=e.toJs();return this.mapToObject(t)}async setup(e){await this._initialized,this._kernel._parent_header=this._pyodide.toPy(e)}async execute(e,t){await this.setup(t);const i=(e,t)=>{const i={name:this.formatResult(e),text:this.formatResult(t)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:i,type:"stream"})};this._stdout_stream.publish_stream_callback=i,this._stderr_stream.publish_stream_callback=i,this._interpreter.display_pub.clear_output_callback=e=>{const t={wait:this.formatResult(e)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:t,type:"clear_output"})},this._interpreter.display_pub.display_data_callback=(e,t,i)=>{const r={data:this.formatResult(e),metadata:this.formatResult(t),transient:this.formatResult(i)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:r,type:"display_data"})},this._interpreter.display_pub.update_display_data_callback=(e,t,i)=>{const r={data:this.formatResult(e),metadata:this.formatResult(t),transient:this.formatResult(i)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:r,type:"update_display_data"})},this._interpreter.displayhook.publish_execution_result=(e,t,i)=>{const r={execution_count:e,data:this.formatResult(t),metadata:this.formatResult(i)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:r,type:"execute_result"})},this._interpreter.input=this.input.bind(this),this._interpreter.getpass=this.getpass.bind(this);const r=await this._kernel.run(e.code),n=this.formatResult(r);return"error"===n.status&&((e,t,i)=>{const r={ename:e,evalue:t,traceback:i};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:r,type:"execute_error"})})(n.ename,n.evalue,n.traceback),n}async complete(e,t){await this.setup(t);const i=this._kernel.complete(e.code,e.cursor_pos);return this.formatResult(i)}async inspect(e,t){await this.setup(t);const i=this._kernel.inspect(e.code,e.cursor_pos,e.detail_level);return this.formatResult(i)}async isComplete(e,t){await this.setup(t);const i=this._kernel.is_complete(e.code);return this.formatResult(i)}async commInfo(e,t){await this.setup(t);const i=this._kernel.comm_info(e.target_name);return this.formatResult(i)}async commOpen(e,t){await this.setup(t);const i=this._kernel.comm_manager.comm_open(this._pyodide.toPy(e));return this.formatResult(i)}async commMsg(e,t){await this.setup(t);const i=this._kernel.comm_manager.comm_msg(this._pyodide.toPy(e));return this.formatResult(i)}async commClose(e,t){await this.setup(t);const i=this._kernel.comm_manager.comm_close(this._pyodide.toPy(e));return this.formatResult(i)}async inputReply(e,t){await this.setup(t),this._resolveInputReply(e)}async sendInputRequest(e,t){const i={prompt:e,password:t};postMessage({type:"input_request",parentHeader:this.formatResult(this._kernel._parent_header).header,content:i})}async getpass(e){e=void 0===e?"":e,await this.sendInputRequest(e,!0);const t=new Promise((e=>{this._resolveInputReply=e}));return(await t).value}async input(e){e=void 0===e?"":e,await this.sendInputRequest(e,!1);const t=new Promise((e=>{this._resolveInputReply=e}));return(await t).value}async sendComm(e,t,i,r,n){postMessage({type:e,content:this.formatResult(t),metadata:this.formatResult(i),ident:this.formatResult(r),buffers:this.formatResult(n),parentHeader:this.formatResult(this._kernel._parent_header).header})}})}},u={};function c(e){var t=u[e];if(void 0!==t)return t.exports;var i=u[e]={id:e,loaded:!1,exports:{}};return p[e].call(i.exports,i,i.exports,c),i.loaded=!0,i.exports}c.m=p,c.c=u,c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var i in t)c.o(t,i)&&!c.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,i)=>(c.f[i](e,t),t)),[])),c.u=e=>e+".js",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{c.S={};var e={},t={};c.I=(i,r)=>{r||(r=[]);var n=t[i];if(n||(n=t[i]={}),!(r.indexOf(n)>=0)){if(r.push(n),e[i])return e[i];c.o(c.S,i)||(c.S[i]={}),c.S[i];var a=[];return e[i]=a.length?Promise.all(a).then((()=>e[i]=1)):1}}})(),(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),e=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),i=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=i[1]?t(i[1]):[];return i[2]&&(r.length++,r.push.apply(r,t(i[2]))),i[3]&&(r.push([]),r.push.apply(r,t(i[3]))),r},t=(t,i)=>{t=e(t),i=e(i);for(var r=0;;){if(r>=t.length)return r<i.length&&"u"!=(typeof i[r])[0];var n=t[r],a=(typeof n)[0];if(r>=i.length)return"u"==a;var s=i[r],o=(typeof s)[0];if(a!=o)return"o"==a&&"n"==o||"s"==o||"u"==a;if("o"!=a&&"u"!=a&&n!=s)return n<s;r++}},i=(t,r)=>{if(0 in t){r=e(r);var n=t[0],a=n<0;a&&(n=-n-1);for(var s=0,o=1,l=!0;;o++,s++){var p,u,c=o<t.length?(typeof t[o])[0]:"";if(s>=r.length||"o"==(u=(typeof(p=r[s]))[0]))return!l||("u"==c?o>n&&!a:""==c!=a);if("u"==u){if(!l||"u"!=c)return!1}else if(l)if(c==u)if(o<=n){if(p!=t[o])return!1}else{if(a?p>t[o]:p<t[o])return!1;p!=t[o]&&(l=!1)}else if("s"!=c&&"n"!=c){if(a||o<=n)return!1;l=!1,o--}else{if(o<=n||u<c!=a)return!1;l=!1}else"s"!=c&&"n"!=c&&(l=!1,o--)}}var h=[],d=h.pop.bind(h);for(s=1;s<t.length;s++){var m=t[s];h.push(1==m?d()|d():2==m?d()&d():m?i(m,r):!d())}return!!d()},r=(e,r,n)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!i(n,r)||e&&!t(e,r)?e:r),0))&&a[r]},n=e=>(e.loaded=1,e.get()),a=(e=>function(t,i,r,n){var a=c.I(t);return a&&a.then?a.then(e.bind(e,t,c.S[t],i,r,n)):e(0,c.S[t],i,r,n)})(((e,t,i,a,s)=>{var o=t&&c.o(t,i)&&r(t,i,a);return o?n(o):s()})),s={},o={92233:()=>a("default","@lumino/coreutils",[1,1,8,2],(()=>c.e(1770).then((()=>()=>c(71770))))),59110:()=>a("default","@jupyterlab/coreutils",[1,5,0,0],(()=>Promise.all([c.e(5952),c.e(103),c.e(4947),c.e(6616)]).then((()=>()=>c(60103))))),4947:()=>a("default","@lumino/signaling",[1,1,7,2],(()=>Promise.all([c.e(3203),c.e(4629),c.e(5445)]).then((()=>()=>c(75445))))),23203:()=>a("default","@lumino/algorithm",[1,1,6,2],(()=>c.e(9060).then((()=>()=>c(69060))))),24629:()=>a("default","@lumino/properties",[1,1,5,2],(()=>c.e(3312).then((()=>()=>c(73312)))))},l={2233:[92233],3203:[23203],4629:[24629],4947:[4947],9110:[59110]},c.f.consumes=(e,t)=>{c.o(l,e)&&l[e].forEach((e=>{if(c.o(s,e))return t.push(s[e]);var i=t=>{s[e]=0,c.m[e]=i=>{delete c.c[e],i.exports=t()}},r=t=>{delete s[e],c.m[e]=i=>{throw delete c.c[e],t}};try{var n=o[e]();n.then?t.push(s[e]=n.then(i).catch(r)):i(n)}catch(e){r(e)}}))},(()=>{var e={1808:1};c.f.i=(t,i)=>{e[t]||/^(2233|3203|4629|4947|9110)$/.test(t)||importScripts(c.p+c.u(t))};var t=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[],i=t.push.bind(t);t.push=t=>{var r=t[0],n=t[1],a=t[2];for(var s in n)c.o(n,s)&&(c.m[s]=n[s]);for(a&&a(c);r.length;)e[r.pop()]=1;i(t)}})();var h=c(41808);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).CORE_OUTPUT=h})();