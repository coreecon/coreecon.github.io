var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,o,a,i,u,l,s,d,f,p,c,h,v,b,y,g,m,w,j={316:(e,r,t)=>{var n={"./index":()=>t.e(97).then((()=>()=>t(97))),"./extension":()=>t.e(97).then((()=>()=>t(97))),"./style":()=>t.e(643).then((()=>()=>t(643)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},S={};function k(e){var r=S[e];if(void 0!==r)return r.exports;var t=S[e]={id:e,exports:{}};return j[e](t,t.exports,k),t.exports}k.m=j,k.c=S,k.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return k.d(r,{a:r}),r},k.d=(e,r)=>{for(var t in r)k.o(r,t)&&!k.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((r,t)=>(k.f[t](e,r),r)),[])),k.u=e=>e+"."+{97:"bb2a225e63b64034dbd8",643:"999197bbd8ad4b2ee222"}[e]+".js?v="+{97:"bb2a225e63b64034dbd8",643:"999197bbd8ad4b2ee222"}[e],k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@voila-dashboards/jupyterlab-preview:",k.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+o){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,k.nc&&i.setAttribute("nonce",k.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},r={};k.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];k.o(k.S,t)||(k.S[t]={});var a=k.S[t],i="@voila-dashboards/jupyterlab-preview",u=[];return"default"===t&&((e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(1!=!u.eager?n:i>u.from))&&(o[r]={get:()=>k.e(97).then((()=>()=>k(97))),from:i,eager:!1})})("@voila-dashboards/jupyterlab-preview","2.3.0-alpha.0"),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;k.g.importScripts&&(e=k.g.location+"");var r=k.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(u=e[a]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():o(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var s,d,f=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(d=(typeof(s=r[i]))[0]))return!l||("u"==f?u>n&&!o:""==f!=o);if("u"==d){if(!l||"u"!=f)return!1}else if(l)if(f==d)if(u<=n){if(s!=e[u])return!1}else{if(o?s>e[u]:s<e[u])return!1;s!=e[u]&&(l=!1)}else if("s"!=f&&"n"!=f){if(o||u<=n)return!1;l=!1,u--}else{if(u<=n||d<f!=o)return!1;l=!1}else"s"!=f&&"n"!=f&&(l=!1,u--)}}var p=[],c=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?c()|c():2==h?c()&c():h?a(h,r):!c())}return!!c()},i=(e,r)=>{var t=k.S[e];if(!t||!k.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||n(e,r)?r:e),0))&&t[r]},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},s=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",d=(e,r,t,n)=>{var o=l(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(s(e,t,o,n)),h(e[t][o])},f=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},p=(e,r,t,n)=>{var a=e[t];return"No satisfying version ("+o(n)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(a).map((e=>e+" from "+a[e].from)).join(", ")},c=(e,r,t,n)=>{"undefined"!=typeof console&&console.warn&&console.warn(p(e,r,t,n))},h=e=>(e.loaded=1,e.get()),b=(v=e=>function(r,t,n,o){var a=k.I(r);return a&&a.then?a.then(e.bind(e,r,k.S[r],t,n,o)):e(r,k.S[r],t,n,o)})(((e,r,t,n)=>(i(e,t),h(f(r,t,n)||c(r,e,t,n)||u(r,t))))),y=v(((e,r,t,n)=>(i(e,t),d(r,0,t,n)))),g={},m={15:()=>y("default","@jupyterlab/coreutils",[1,5,5,2]),142:()=>y("default","@jupyterlab/notebook",[1,3,5,2]),271:()=>y("default","react",[1,17,0,1]),384:()=>b("default","@jupyterlab/docregistry",[1,3,5,2]),526:()=>y("default","@lumino/coreutils",[1,1,11,0]),544:()=>y("default","@jupyterlab/ui-components",[1,3,5,2]),600:()=>y("default","@jupyterlab/settingregistry",[1,3,5,2]),634:()=>y("default","@jupyterlab/mainmenu",[1,3,5,2]),714:()=>y("default","@jupyterlab/application",[1,3,5,2]),740:()=>y("default","@jupyterlab/apputils",[1,3,5,2]),840:()=>y("default","@lumino/signaling",[1,1,10,0])},w={97:[15,142,271,384,526,544,600,634,714,740,840]},k.f.consumes=(e,r)=>{k.o(w,e)&&w[e].forEach((e=>{if(k.o(g,e))return r.push(g[e]);var t=r=>{g[e]=0,k.m[e]=t=>{delete k.c[e],t.exports=r()}},n=r=>{delete g[e],k.m[e]=t=>{throw delete k.c[e],r}};try{var o=m[e]();o.then?r.push(g[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={329:0};k.f.j=(r,t)=>{var n=k.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=k.p+k.u(r),i=new Error;k.l(a,(t=>{if(k.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,u]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in i)k.o(i,n)&&(k.m[n]=i[n]);u&&u(k)}for(r&&r(t);l<a.length;l++)o=a[l],k.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk_voila_dashboards_jupyterlab_preview=self.webpackChunk_voila_dashboards_jupyterlab_preview||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),k.nc=void 0;var E=k(316);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@voila-dashboards/jupyterlab-preview"]=E})();