"use strict";(globalThis.webpackChunk_JUPYTERLAB_CORE_OUTPUT=globalThis.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5445],{75445:(n,e,t)=>{t.r(e),t.d(e,{Signal:()=>o});var i,c=t(23203),r=t(24629),o=function(){function n(n){this._blockedCount=0,this.sender=n}return n.prototype.block=function(n){this._blockedCount++;try{n()}finally{this._blockedCount--}},n.prototype.connect=function(n,e){return i.connect(this,n,e)},n.prototype.disconnect=function(n,e){return i.disconnect(this,n,e)},n.prototype.emit=function(n){this._blockedCount||i.emit(this,n)},n}();!function(n){n.blockAll=function(n,e){var t=i.blockedProperty;t.set(n,t.get(n)+1);try{e()}finally{t.set(n,t.get(n)-1)}},n.disconnectBetween=function(n,e){i.disconnectBetween(n,e)},n.disconnectSender=function(n){i.disconnectSender(n)},n.disconnectReceiver=function(n){i.disconnectReceiver(n)},n.disconnectAll=function(n){i.disconnectAll(n)},n.clearData=function(n){i.disconnectAll(n)},n.getExceptionHandler=function(){return i.exceptionHandler},n.setExceptionHandler=function(n){var e=i.exceptionHandler;return i.exceptionHandler=n,e}}(o||(o={})),function(n){function e(n){var e=i.get(n);e&&0!==e.length&&((0,c.each)(e,(function(n){if(n.signal){var e=n.thisArg||n.slot;n.signal=null,d(o.get(e))}})),d(e))}function t(n){var e=o.get(n);e&&0!==e.length&&((0,c.each)(e,(function(n){if(n.signal){var e=n.signal.sender;n.signal=null,d(i.get(e))}})),d(e))}n.exceptionHandler=function(n){console.error(n)},n.connect=function(n,e,t){t=t||void 0;var c=i.get(n.sender);if(c||(c=[],i.set(n.sender,c)),s(c,n,e,t))return!1;var r=t||e,l=o.get(r);l||(l=[],o.set(r,l));var a={signal:n,slot:e,thisArg:t};return c.push(a),l.push(a),!0},n.disconnect=function(n,e,t){t=t||void 0;var c=i.get(n.sender);if(!c||0===c.length)return!1;var r=s(c,n,e,t);if(!r)return!1;var l=t||e,a=o.get(l);return r.signal=null,d(c),d(a),!0},n.disconnectBetween=function(n,e){var t=i.get(n);if(t&&0!==t.length){var r=o.get(e);r&&0!==r.length&&((0,c.each)(r,(function(e){e.signal&&e.signal.sender===n&&(e.signal=null)})),d(t),d(r))}},n.disconnectSender=e,n.disconnectReceiver=t,n.disconnectAll=function(n){e(n),t(n)},n.emit=function(e,t){if(!(n.blockedProperty.get(e.sender)>0)){var c=i.get(e.sender);if(c&&0!==c.length)for(var r=0,o=c.length;r<o;++r){var l=c[r];l.signal===e&&u(l,t)}}};var i=new WeakMap,o=new WeakMap,l=new Set,a="function"==typeof requestAnimationFrame?requestAnimationFrame:setImmediate;function s(n,e,t,i){return(0,c.find)(n,(function(n){return n.signal===e&&n.slot===t&&n.thisArg===i}))}function u(e,t){var i=e.signal,c=e.slot,r=e.thisArg;try{c.call(r,i.sender,t)}catch(e){n.exceptionHandler(e)}}function d(n){0===l.size&&a(f),l.add(n)}function f(){l.forEach(g),l.clear()}function g(n){c.ArrayExt.removeAllWhere(n,h)}function h(n){return null===n.signal}n.blockedProperty=new r.AttachedProperty({name:"blocked",create:function(){return 0}})}(i||(i={}))}}]);