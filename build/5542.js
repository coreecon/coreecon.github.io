(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5542],{27693:e=>{e.exports={name:"@voila-dashboards/voici",version:"0.1.0-alpha.0",description:"The Voici Frontend",author:"Voilà contributors",license:"BSD-3-Clause",main:"lib/index.js",browserslist:">0.8%, not ie 11, not op_mini all, not dead",dependencies:{"@jupyter-widgets/base":"^6.0.1","@jupyter-widgets/controls":"^5.0.1","@jupyter-widgets/jupyterlab-manager":"^5.0.3","@jupyter-widgets/output":"^6.0.1","@jupyterlab/application":"^3.0.0","@jupyterlab/apputils":"^3.0.0","@jupyterlab/apputils-extension":"^3.4.8","@jupyterlab/coreutils":"^5.0.0","@jupyterlab/docregistry":"^3.0.0","@jupyterlab/json-extension":"^3.0.0","@jupyterlab/logconsole":"^3.0.0","@jupyterlab/mainmenu":"^3.0.0","@jupyterlab/markdownviewer-extension":"^3.0.0","@jupyterlab/mathjax2-extension":"^3.0.0","@jupyterlab/nbconvert-css":"^3.4.8","@jupyterlab/nbformat":"^3.0.0","@jupyterlab/notebook":"^3.0.0","@jupyterlab/outputarea":"^3.0.0","@jupyterlab/rendermime":"^3.0.0","@jupyterlab/rendermime-extension":"^3.0.0","@jupyterlab/services":"^6.1.8","@jupyterlab/settingregistry":"^3.0.0","@jupyterlab/theme-dark-extension":"^3.4.8","@jupyterlab/theme-light-extension":"^3.4.8","@jupyterlab/translation":"^3.0.0","@jupyterlab/ui-components":"^3.0.0","@jupyterlite/iframe-extension":"^0.1.0-beta.13","@jupyterlite/pyolite-kernel-extension":"^0.1.0-beta.13","@jupyterlite/server":"^0.1.0-beta.13","@jupyterlite/server-extension":"^0.1.0-beta.13","@lumino/algorithm":"^1.6.2","@lumino/commands":"^1.15.2","@lumino/coreutils":"^1.8.2","@lumino/disposable":"^1.7.2","@lumino/domutils":"^1.5.2","@lumino/dragdrop":"^1.10.2","@lumino/messaging":"^1.7.2","@lumino/properties":"^1.5.2","@lumino/signaling":"^1.7.2","@lumino/virtualdom":"^1.11.2","@lumino/widgets":"^1.26.2","@voila-dashboards/voila":"^0.5.0-alpha.1",react:"^17.0.1"},devDependencies:{"@babel/core":"^7.2.2","@babel/preset-env":"^7.3.1","@jupyterlab/builder":"^3.0.0","@types/node":"^18.8.3","babel-loader":"^8.0.5","css-loader":"~5.0.2","file-loader":"^6.2.0","fs-extra":"^9.1.0",glob:"~7.1.6","ignore-loader":"^0.1.2","json-loader":"^0.5.7","mini-css-extract-plugin":"~0.9.0","p-limit":"^2.2.2","raw-loader":"^4.0.2",rimraf:"^3.0.2","style-loader":"^2.0.0","svg-url-loader":"^7.1.1",typescript:"~4.1.3","url-loader":"^4.1.1",watch:"^1.0.2",webpack:"^5.24.1","webpack-bundle-analyzer":"^4.4.0","webpack-cli":"^4.5.0","webpack-merge":"^5.7.3","whatwg-fetch":"^3.0.0"},scripts:{build:"yarn run build:lib && webpack --mode=development","build:lib":"tsc","build:prod":"yarn run build:lib && webpack --mode=production",clean:"yarn run clean:lib && rimraf build","clean:lib":"rimraf lib tsconfig.tsbuildinfo"}}},65542:(e,t,i)=>{"use strict";i.r(t),i(71024);var n=i(59110),a=i(51167),r=i(91361),o=i(75238),s=i(73198),l=i(12299),u=i(67651),d=i(17021),c=i(35918);class p extends c.KernelWidgetManager{constructor(e,t){super(e,t),t.addFactory({safe:!1,mimeTypes:["application/vnd.jupyter.widget-view+json"],createRenderer:e=>new c.WidgetRenderer(e,this)},-10),this._registerWidgets()}_registerWidgets(){this.register({name:"@jupyter-widgets/base",version:u.JUPYTER_WIDGETS_VERSION,exports:u}),this.register({name:"@jupyter-widgets/controls",version:d.JUPYTER_CONTROLS_VERSION,exports:d}),this.register({name:"@jupyter-widgets/output",version:c.output.OUTPUT_WIDGET_VERSION,exports:Object.assign(Object.assign({},c.output),{OutputModel:r.OutputModel})})}}var g=i(42051),m=i(37782);const h=new(i(92233).PromiseDelegate),b={id:"@voila-dashboards/voici:widget-manager",autoStart:!0,provides:u.IJupyterWidgetRegistry,activate:async()=>({registerWidget:async e=>{(await h.promise).register(e)}})},f={id:"@voila-dashboards/voici:theme-manager",autoStart:!0,optional:[m.IThemeManager],activate:(e,t)=>{var i,a;if(!t)return;const r=n.PageConfig.getOption("labThemeName"),o=window.location.search,s=null!==(a=null===(i=new URLSearchParams(o).get("theme"))||void 0===i?void 0:i.trim())&&void 0!==a?a:r,l=decodeURIComponent(s);t.setTheme(l)}},w=[r.pathsPlugin,r.translatorPlugin,b,f],y=i(27693);class v extends o.JupyterFrontEnd{constructor(e){var t;if(super(Object.assign(Object.assign({},e),{shell:null!==(t=e.shell)&&void 0!==t?t:new r.VoilaShell})),this.name="Voici",this.namespace=this.name,this.version=y.version,e.mimeExtensions)for(const t of(0,o.createRendermimePlugins)(e.mimeExtensions))this.registerPlugin(t);this._serviceManager=e.serviceManager}get paths(){return{urls:{base:n.PageConfig.getOption("baseUrl"),notFound:n.PageConfig.getOption("notFoundUrl"),app:n.PageConfig.getOption("appUrl"),static:n.PageConfig.getOption("staticUrl"),settings:n.PageConfig.getOption("settingsUrl"),themes:n.PageConfig.getOption("themesUrl"),doc:n.PageConfig.getOption("docUrl"),translations:n.PageConfig.getOption("translationsApiUrl"),hubHost:n.PageConfig.getOption("hubHost")||void 0,hubPrefix:n.PageConfig.getOption("hubPrefix")||void 0,hubUser:n.PageConfig.getOption("hubUser")||void 0,hubServerName:n.PageConfig.getOption("hubServerName")||void 0},directories:{appSettings:n.PageConfig.getOption("appSettingsDir"),schemas:n.PageConfig.getOption("schemasDir"),static:n.PageConfig.getOption("staticDir"),templates:n.PageConfig.getOption("templatesDir"),themes:n.PageConfig.getOption("themesDir"),userSettings:n.PageConfig.getOption("userSettingsDir"),serverRoot:n.PageConfig.getOption("serverRoot"),workspaces:n.PageConfig.getOption("workspacesDir")}}}registerPluginModule(e){let t=e.default;Object.prototype.hasOwnProperty.call(e,"__esModule")||(t=e),Array.isArray(t)||(t=[t]),t.forEach((e=>{try{this.registerPlugin(e)}catch(e){console.error(e)}}))}registerPluginModules(e){e.forEach((e=>{this.registerPluginModule(e)}))}async renderWidgets(){const e=this._serviceManager;if(!e)return void console.error("Missing service manager");await e.ready;const t=e.sessions;await t.ready;const i=await t.startNew({name:"",path:"",type:"notebook",kernel:{name:"python"}}),a=i.kernel;a?a.connectionStatusChanged.connect((async(e,t)=>{if("connected"===t){window.update_loading_text(0,0,"Starting up kernel...");const e=new l.RenderMimeRegistry({initialFactories:l.standardRendererFactories}),t=new p(a,e);if(h.resolve(t),!i.kernel)return;await new Promise((e=>setTimeout(e,500)));let r=!1;const o=JSON.parse(n.PageConfig.getOption("notebookSrc")),s=n.PageConfig.getOption("packagesSrc");a.statusChanged.connect((async(t,n)=>{r||"idle"!==n||(r=!0,await j.executeCells({packages:s,source:o,rendermime:e,kernel:i.kernel}))}))}})):console.error("Can not start kernel")}}var j;async function P(e,t){try{return(await window._JUPYTERLAB[e].get(t))()}catch(i){throw console.warn(`Failed to create module: package: ${e}; module: ${t}`),i}}function*O(e,t){let i;i=Object.prototype.hasOwnProperty.call(e,"__esModule")?e.default:e;const a=Array.isArray(i)?i:[i];for(const e of a)n.PageConfig.Extension.isDisabled(e.id)||t.includes(e.id)||t.includes(e.id.split(":")[0])||(yield e)}!function(e){e.executeCells=async function(e){var t,i;const{packages:n,source:a,rendermime:r,kernel:o}=e;if(n&&n.length>0){window.update_loading_text(0,0,"Installing dependencies");const e=o.requestExecute({code:n});await e.done}const l=a.length;for(let e=0;e<l;e++){const n=a[e];if(window.update_loading_text(e+1,l,null),"code"!==n.cell_type){e===l-1&&window.display_cells();continue}const u=new s.OutputAreaModel({trusted:!0}),d=new s.SimplifiedOutputArea({model:u,rendermime:r});d.future=o.requestExecute({code:n.cell_source}),await d.future.done;const c=document.querySelector(`[cell-index="${e+1}"]`);if(c&&d.node.childNodes.length>0){null===(t=c.lastElementChild)||void 0===t||t.classList.remove("jp-mod-noOutputs","jp-mod-noInput");const e=document.createElement("div");e.classList.add("jp-Cell-outputWrapper"),null===(i=c.lastElementChild)||void 0===i||i.appendChild(e),d.node.classList.add("jp-Cell-outputArea","jp-OutputArea-child"),g.Widget.attach(d,e)}e===l-1&&(window.display_cells(),window.dispatchEvent(new Event("resize")))}}}(j||(j={}));const C=[i.e(5286).then(i.t.bind(i,15286,23)),i.e(4273).then(i.t.bind(i,84273,23))],x=["@jupyter-widgets/jupyterlab-manager"];window.addEventListener("load",(async function(){const e=[i(9961).default.filter((e=>["@jupyterlab/apputils-extension:settings","@jupyterlab/apputils-extension:themes"].includes(e.id))),i(4319),i(24132),i(41412),i(99661),i(59601),w],t=[i(58631),i(70851)],o=JSON.parse(n.PageConfig.getOption("federated_extensions")),s=[],l=[],u=[],d=await Promise.allSettled(o.map((async e=>(await async function(e,t){await function(e){return new Promise(((t,i)=>{const n=document.createElement("script");n.onerror=i,n.onload=t,n.async=!0,document.head.appendChild(n),n.src=e}))}(e),await i.I("default");const n=window._JUPYTERLAB[t];await n.init(i.S.default)}(`${n.URLExt.join(n.PageConfig.getOption("fullLabextensionsUrl"),e.name,e.load)}`,e.name),e))));Object.entries(d).forEach((([e,t])=>{if("rejected"===t.status)return void console.error(t.reason);const i=t.value;i.extension&&s.push(P(i.name,i.extension)),i.mimeExtension&&l.push(P(i.name,i.mimeExtension)),i.style&&u.push(P(i.name,i.style))})),(await Promise.allSettled(s)).forEach((t=>{if("fulfilled"===t.status)for(const i of O(t.value,x))e.push(i);else console.error(t.reason)})),(await Promise.allSettled(l)).forEach((e=>{if("fulfilled"===e.status)for(const i of O(e.value,x))t.push(i);else console.error(e.reason)})),(await Promise.allSettled(u)).filter((({status:e})=>"rejected"===e)).forEach((e=>{console.error(e.reason)}));const c=[];(await Promise.all(C)).forEach((e=>{for(const t of O(e,x))c.push(t)}));const p=new a.JupyterLiteServer({shell:null});p.registerPluginModules(c),await p.start();const g=p.serviceManager,m=new v({serviceManager:g,mimeExtensions:t,shell:new r.VoilaShell});m.registerPluginModules(e),await m.start(),await m.renderWidgets(),window.jupyterapp=m}))}}]);