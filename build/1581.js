"use strict";(globalThis.webpackChunk_JUPYTERLAB_CORE_OUTPUT=globalThis.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1581,9406],{21581:(e,n,s)=>{s.r(n),s.d(n,{EditMenu:()=>a,FileMenu:()=>d,HelpMenu:()=>o,IJupyterLabMenu:()=>t.IRankedMenu,IMainMenu:()=>_,JupyterLabMenu:()=>t.RankedMenu,KernelMenu:()=>M,MainMenu:()=>p,RunMenu:()=>m,SettingsMenu:()=>c,TabsMenu:()=>l,ViewMenu:()=>h});var r,t=s(24643),i=s(23203),u=s(42051);class a extends t.RankedMenu{constructor(e){super(e),this.undoers=new Set,this.clearers=new Set,this.goToLiners=new Set}dispose(){this.undoers.clear(),this.clearers.clear(),super.dispose()}}class d extends t.RankedMenu{constructor(e){super(e),this.quitEntry=!1,this.closeAndCleaners=new Set,this.consoleCreators=new Set}get newMenu(){var e,n;return this._newMenu||(this._newMenu=null!==(n=null===(e=(0,i.find)(this.items,(e=>{var n;return"jp-mainmenu-file-new"===(null===(n=e.submenu)||void 0===n?void 0:n.id)})))||void 0===e?void 0:e.submenu)&&void 0!==n?n:new t.RankedMenu({commands:this.commands})),this._newMenu}dispose(){var e;null===(e=this._newMenu)||void 0===e||e.dispose(),this.consoleCreators.clear(),super.dispose()}}class o extends t.RankedMenu{constructor(e){super(e),this.kernelUsers=new Set}}class M extends t.RankedMenu{constructor(e){super(e),this.kernelUsers=new Set}dispose(){this.kernelUsers.clear(),super.dispose()}}class m extends t.RankedMenu{constructor(e){super(e),this.codeRunners=new Set}dispose(){this.codeRunners.clear(),super.dispose()}}class c extends t.RankedMenu{constructor(e){super(e)}}class l extends t.RankedMenu{constructor(e){super(e)}}class h extends t.RankedMenu{constructor(e){super(e),this.editorViewers=new Set}dispose(){this.editorViewers.clear(),super.dispose()}}class p extends u.MenuBar{constructor(e){super({forceItemsPosition:{forceX:!1,forceY:!0}}),this._items=[],this._commands=e}get editMenu(){return this._editMenu||(this._editMenu=new a({commands:this._commands,rank:2,renderer:t.MenuSvg.defaultRenderer})),this._editMenu}get fileMenu(){return this._fileMenu||(this._fileMenu=new d({commands:this._commands,rank:1,renderer:t.MenuSvg.defaultRenderer})),this._fileMenu}get helpMenu(){return this._helpMenu||(this._helpMenu=new o({commands:this._commands,rank:1e3,renderer:t.MenuSvg.defaultRenderer})),this._helpMenu}get kernelMenu(){return this._kernelMenu||(this._kernelMenu=new M({commands:this._commands,rank:5,renderer:t.MenuSvg.defaultRenderer})),this._kernelMenu}get runMenu(){return this._runMenu||(this._runMenu=new m({commands:this._commands,rank:4,renderer:t.MenuSvg.defaultRenderer})),this._runMenu}get settingsMenu(){return this._settingsMenu||(this._settingsMenu=new c({commands:this._commands,rank:999,renderer:t.MenuSvg.defaultRenderer})),this._settingsMenu}get viewMenu(){return this._viewMenu||(this._viewMenu=new h({commands:this._commands,rank:3,renderer:t.MenuSvg.defaultRenderer})),this._viewMenu}get tabsMenu(){return this._tabsMenu||(this._tabsMenu=new l({commands:this._commands,rank:500,renderer:t.MenuSvg.defaultRenderer})),this._tabsMenu}addMenu(e,n={}){if(i.ArrayExt.firstIndexOf(this.menus,e)>-1)return;t.MenuSvg.overrideDefaultRenderer(e);const s={menu:e,rank:"rank"in n?n.rank:"rank"in e?e.rank:t.IRankedMenu.DEFAULT_RANK},u=i.ArrayExt.upperBound(this._items,s,r.itemCmp);switch(e.disposed.connect(this._onMenuDisposed,this),i.ArrayExt.insert(this._items,u,s),this.insertMenu(u,e),e.id){case"jp-mainmenu-file":!this._fileMenu&&e instanceof d&&(this._fileMenu=e);break;case"jp-mainmenu-edit":!this._editMenu&&e instanceof a&&(this._editMenu=e);break;case"jp-mainmenu-view":!this._viewMenu&&e instanceof h&&(this._viewMenu=e);break;case"jp-mainmenu-run":!this._runMenu&&e instanceof m&&(this._runMenu=e);break;case"jp-mainmenu-kernel":!this._kernelMenu&&e instanceof M&&(this._kernelMenu=e);break;case"jp-mainmenu-tabs":!this._tabsMenu&&e instanceof l&&(this._tabsMenu=e);break;case"jp-mainmenu-settings":!this._settingsMenu&&e instanceof c&&(this._settingsMenu=e);break;case"jp-mainmenu-help":!this._helpMenu&&e instanceof o&&(this._helpMenu=e)}}dispose(){var e,n,s,r,t,i,u,a;null===(e=this._editMenu)||void 0===e||e.dispose(),null===(n=this._fileMenu)||void 0===n||n.dispose(),null===(s=this._helpMenu)||void 0===s||s.dispose(),null===(r=this._kernelMenu)||void 0===r||r.dispose(),null===(t=this._runMenu)||void 0===t||t.dispose(),null===(i=this._settingsMenu)||void 0===i||i.dispose(),null===(u=this._viewMenu)||void 0===u||u.dispose(),null===(a=this._tabsMenu)||void 0===a||a.dispose(),super.dispose()}static generateMenu(e,n,s){let r;const{id:i,label:u,rank:p}=n;switch(i){case"jp-mainmenu-file":r=new d({commands:e,rank:p,renderer:t.MenuSvg.defaultRenderer});break;case"jp-mainmenu-edit":r=new a({commands:e,rank:p,renderer:t.MenuSvg.defaultRenderer});break;case"jp-mainmenu-view":r=new h({commands:e,rank:p,renderer:t.MenuSvg.defaultRenderer});break;case"jp-mainmenu-run":r=new m({commands:e,rank:p,renderer:t.MenuSvg.defaultRenderer});break;case"jp-mainmenu-kernel":r=new M({commands:e,rank:p,renderer:t.MenuSvg.defaultRenderer});break;case"jp-mainmenu-tabs":r=new l({commands:e,rank:p,renderer:t.MenuSvg.defaultRenderer});break;case"jp-mainmenu-settings":r=new c({commands:e,rank:p,renderer:t.MenuSvg.defaultRenderer});break;case"jp-mainmenu-help":r=new o({commands:e,rank:p,renderer:t.MenuSvg.defaultRenderer});break;default:r=new t.RankedMenu({commands:e,rank:p,renderer:t.MenuSvg.defaultRenderer})}return u&&(r.title.label=s._p("menu",u)),r}_onMenuDisposed(e){this.removeMenu(e);const n=i.ArrayExt.findFirstIndex(this._items,(n=>n.menu===e));-1!==n&&i.ArrayExt.removeAt(this._items,n)}}!function(e){e.itemCmp=function(e,n){return e.rank-n.rank}}(r||(r={}));const _=new(s(92233).Token)("@jupyterlab/mainmenu:IMainMenu")}}]);