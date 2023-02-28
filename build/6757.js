"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6757,4382],{54382:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var r=n(75238),i=n(37782),o=n(59110),s=n(92233);const a=new s.Token("@jupyterlab/markdownviewer:IMarkdownViewerTracker");var d=n(77968),c=n(12299),l=n(56956),h=n(42051);const u="text/markdown";class m extends h.Widget{constructor(e){super(),this._config=Object.assign({},m.defaultConfig),this._fragment="",this._ready=new s.PromiseDelegate,this._isRendering=!1,this._renderRequested=!1,this.context=e.context,this.translator=e.translator||l.nullTranslator,this._trans=this.translator.load("jupyterlab"),this.renderer=e.renderer,this.node.tabIndex=0,this.addClass("jp-MarkdownViewer"),(this.layout=new h.StackedLayout).addWidget(this.renderer),this.context.ready.then((async()=>{await this._render(),this._monitor=new o.ActivityMonitor({signal:this.context.model.contentChanged,timeout:this._config.renderTimeout}),this._monitor.activityStopped.connect(this.update,this),this._ready.resolve(void 0)}))}get ready(){return this._ready.promise}setFragment(e){this._fragment=e,this.update()}setOption(e,t){if(this._config[e]===t)return;this._config[e]=t;const{style:n}=this.renderer.node;switch(e){case"fontFamily":n.setProperty("font-family",t);break;case"fontSize":n.setProperty("font-size",t?t+"px":null);break;case"hideFrontMatter":this.update();break;case"lineHeight":n.setProperty("line-height",t?t.toString():null);break;case"lineWidth":{const e=t?`calc(50% - ${t/2}ch)`:null;n.setProperty("padding-left",e),n.setProperty("padding-right",e);break}case"renderTimeout":this._monitor&&(this._monitor.timeout=t)}}dispose(){this.isDisposed||(this._monitor&&this._monitor.dispose(),this._monitor=null,super.dispose())}onUpdateRequest(e){this.context.isReady&&!this.isDisposed&&(this._render(),this._fragment="")}onActivateRequest(e){this.node.focus()}async _render(){if(this.isDisposed)return;if(this._isRendering)return void(this._renderRequested=!0);this._renderRequested=!1;const{context:e}=this,{model:t}=e,n=t.toString(),r={};r[u]=this._config.hideFrontMatter?f.removeFrontMatter(n):n;const o=new c.MimeModel({data:r,metadata:{fragment:this._fragment}});try{if(this._isRendering=!0,await this.renderer.renderModel(o),this._isRendering=!1,this._renderRequested)return this._render()}catch(t){requestAnimationFrame((()=>{this.dispose()})),(0,i.showErrorMessage)(this._trans.__("Renderer Failure: %1",e.path),t)}}}!function(e){e.defaultConfig={fontFamily:null,fontSize:null,lineHeight:null,lineWidth:null,hideFrontMatter:!0,renderTimeout:1e3}}(m||(m={}));class p extends d.DocumentWidget{setFragment(e){this.content.setFragment(e)}}class g extends d.ABCWidgetFactory{constructor(e){super(f.createRegistryOptions(e)),this._fileType=e.primaryFileType,this._rendermime=e.rendermime}createNewWidget(e){var t,n,r,i,o;const s=this._rendermime.clone({resolver:e.urlResolver}).createRenderer(u),a=new m({context:e,renderer:s});return a.title.icon=null===(t=this._fileType)||void 0===t?void 0:t.icon,a.title.iconClass=null!==(r=null===(n=this._fileType)||void 0===n?void 0:n.iconClass)&&void 0!==r?r:"",a.title.iconLabel=null!==(o=null===(i=this._fileType)||void 0===i?void 0:i.iconLabel)&&void 0!==o?o:"",new p({content:a,context:e})}}var f;!function(e){e.createRegistryOptions=function(e){return Object.assign(Object.assign({},e),{readOnly:!0})},e.removeFrontMatter=function(e){const t=e.match(/^---\n[^]*?\n(---|...)\n/);if(!t)return e;const{length:n}=t[0];return e.slice(n)}}(f||(f={}));var y,_=n(68930);!function(e){e.markdownPreview="markdownviewer:open",e.markdownEditor="markdownviewer:edit"}(y||(y={}));const w="Markdown Preview",v={activate:function(e,t,n,r,s){const a=n.load("jupyterlab"),{commands:d,docRegistry:l}=e;t.addFactory(c.markdownRendererFactory);const h=new i.WidgetTracker({namespace:"markdownviewer-widget"});let u=Object.assign({},m.defaultConfig);function p(e){Object.keys(u).forEach((t=>{var n;e.setOption(t,null!==(n=u[t])&&void 0!==n?n:null)}))}if(s){const e=e=>{u=e.composite,h.forEach((e=>{p(e.content)}))};s.load(v.id).then((t=>{t.changed.connect((()=>{e(t)})),e(t)})).catch((e=>{console.error(e.message)}))}const f=new g({rendermime:t,name:w,primaryFileType:l.getFileType("markdown"),fileTypes:["markdown"],defaultRendered:["markdown"]});return f.widgetCreated.connect(((e,t)=>{t.context.pathChanged.connect((()=>{h.save(t)})),p(t.content),h.add(t)})),l.addWidgetFactory(f),r&&r.restore(h,{command:"docmanager:open",args:e=>({path:e.context.path,factory:w}),name:e=>e.context.path}),d.addCommand(y.markdownPreview,{label:a.__("Markdown Preview"),execute:e=>{const t=e.path;if("string"==typeof t)return d.execute("docmanager:open",{path:t,factory:w,options:e.options})}}),d.addCommand(y.markdownEditor,{execute:()=>{const e=h.currentWidget;if(!e)return;const t=e.context.path;return d.execute("docmanager:open",{path:t,factory:"Editor",options:{mode:"split-right"}})},isVisible:()=>{const e=h.currentWidget;return e&&".md"===o.PathExt.extname(e.context.path)||!1},label:a.__("Show Markdown Editor")}),h},id:"@jupyterlab/markdownviewer-extension:plugin",provides:a,requires:[c.IRenderMimeRegistry,l.ITranslator],optional:[r.ILayoutRestorer,_.ISettingRegistry],autoStart:!0},k=v}}]);