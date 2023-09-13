/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,n)=>{var r=n(698).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},i=Object.prototype,a=i.hasOwnProperty,s=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",h=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,n){return t[e]=n}}function v(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new C(r||[]);return s(i,"_invoke",{value:O(t,n,a)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=v;var p="suspendedStart",y="suspendedYield",m="executing",g="completed",b={};function w(){}function L(){}function x(){}var E={};f(E,u,(function(){return this}));var k=Object.getPrototypeOf,T=k&&k(k(q([])));T&&T!==i&&a.call(T,u)&&(E=T);var M=x.prototype=w.prototype=Object.create(E);function S(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function D(t,e){function n(o,i,s,c){var u=d(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==r(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var o;s(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function O(t,n,r){var o=p;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var c=A(s,r);if(c){if(c===b)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var u=d(t,n,r);if("normal"===u.type){if(o=r.done?g:y,u.arg===b)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=g,r.method="throw",r.arg=u.arg)}}}function A(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,A(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var i=d(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,b;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function q(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(a.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(r(t)+" is not iterable")}return L.prototype=x,s(M,"constructor",{value:x,configurable:!0}),s(x,"constructor",{value:L,configurable:!0}),L.displayName=f(x,h,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,h,"GeneratorFunction")),t.prototype=Object.create(M),t},n.awrap=function(t){return{__await:t}},S(D.prototype),f(D.prototype,l,(function(){return this})),n.AsyncIterator=D,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new D(v(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(M),f(M,h,"Generator"),f(M,u,(function(){return this})),f(M,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=q,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:q(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),b}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,n)=>{var r=n(61)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(i=o.key,a=void 0,a=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),"symbol"===e(a)?a:String(a)),o)}var i,a}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var i=function(){function e(n,r){t(this,e),this.menuLinkInt=document.querySelectorAll(n),this.options=void 0===r?{behavior:"smooth",block:"start"}:r,this.scrollToSection=this.scrollToSection.bind(this)}return o(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkInt",value:function(){var t=this;this.menuLinkInt.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.addLinkInt(),this}}]),e}();function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=function(){function e(n){t(this,e),this.sections=document.querySelectorAll(n),this.windowMetade=.6*window.innerHeight,this.checkDistance=this.checkDistance.bind(this)}return o(e,[{key:"getDistance",value:function(){var t,e=this;this.distance=(t=this.sections,function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){return{element:t,offset:t.offsetTop-e.windowMetade}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.scrollY>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}(),c=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="ativo"}return o(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAcordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAcordionEvent()),this}}]),e}(),u=function(){function e(n,r){t(this,e),this.menu=document.querySelectorAll(n),this.content=document.querySelectorAll(r),this.activeClass="ativo"}return o(e,[{key:"activeTab",value:function(t){var e=this;this.content.forEach((function(t){t.classList.remove(e.activeClass)}));var n=this.content[t].dataset.anime;this.content[t].classList.add(this.activeClass,n)}},{key:"addTabEvent",value:function(){var t=this;this.menu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.content.length&&this.menu.length&&(this.activeTab(0),this.addTabEvent()),this}}]),e}(),l=function(){function e(n,r,o){t(this,e),this.modalContainer=document.querySelector(n),this.loginButton=document.querySelector(r),this.fecharButton=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.outCLickModal=this.outCLickModal.bind(this)}return o(e,[{key:"toggleModal",value:function(){this.modalContainer.classList.toggle("ativo")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"outCLickModal",value:function(t){t.target===this.modalContainer&&this.toggleModal(t)}},{key:"addModalEvents",value:function(){this.loginButton.addEventListener("click",this.eventToggleModal),this.fecharButton.addEventListener("click",this.eventToggleModal),this.modalContainer.addEventListener("click",this.outCLickModal)}},{key:"init",value:function(){return this.modalContainer&&this.loginButton&&this.fecharButton&&this.addModalEvents(),this}}]),e}(),h=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return o(e,[{key:"onMouseMove",value:function(t){this.tooltipbox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.tooltipbox.style.left="".concat(t.pageX-190,"px"):this.tooltipbox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){this.tooltipbox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}},{key:"createToolTipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipbox=e}},{key:"onMouseOver",value:function(t){this.createToolTipBox(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave),this.onMouseLeave.element=this}},{key:"addToolTipsEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addToolTipsEvent(),this}}]),e}();function f(t,e,n){var r="data-outside",o=document.documentElement;function i(a){t.contains(a.target)||(t.removeAttribute(r),e.forEach((function(t){o.removeEventListener(t,i)})),n())}t.hasAttribute(r)||(e.forEach((function(t){setTimeout((function(){o.addEventListener(t,i)}))})),t.setAttribute(r,""))}var v=function(){function e(n,r){t(this,e),this.liDropDown=document.querySelectorAll(n),this.events=["click","touchstart"],this.classList=r,this.activeDropDown=this.activeDropDown.bind(this)}return o(e,[{key:"activeDropDown",value:function(t){var e=this;console.log(t.currentTarget),t.preventDefault(this.liDropDown),t.currentTarget.classList.toggle(this.classList),f(t.currentTarget,this.events,(function(){t.target.classList.remove(e.classList)}))}},{key:"addEvent",value:function(){var t=this;this.liDropDown.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.activeDropDown)}))}))}},{key:"init",value:function(){return this.liDropDown.length&&this.addEvent(),this}}]),e}();function d(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){d(i,r,o,a,s,"next",t)}function s(t){d(i,r,o,a,s,"throw",t)}a(void 0)}))}}var y,m,g,b,w,L,x=n(687),E=n.n(x),k=function(){function e(n,r,o){t(this,e),this.numeros=document.querySelectorAll(n),this.observerTarget=document.querySelector(r),this.observerClass=o,this.handleMutation=this.handleMutation.bind(this)}return o(e,[{key:"animaNumeros",value:function(){var t=this;this.numeros.forEach((function(e){return t.constructor.incrementarNumero(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}],[{key:"incrementarNumero",value:function(t){var e=+t.innerText,n=Math.floor(e/100),r=0,o=setInterval((function(){r+=n,t.innerText=r,r>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}}]),e}();new i('[data-menu="suave"] a[href^="#"]').init(),new c('[data-anime="accordion"] dt',"ativo").init(),new u('[data-tab="menu"] li','[data-tab="content"] section').init(),new l('[data-modal="container"]','[data-modal="abrir"]','[data-modal="fechar"]').init(),new h("[data-toolTip]").init(),new s('[data-anime="scroll"]').init(),new v("[data-dropdown]","dropdown-ativo").init(),function(){var t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),n=["click","touchstart"];function r(){e.classList.add("active"),t.classList.add("active"),f(e,n,(function(){e.classList.remove("active"),t.classList.remove("active")}))}t&&n.forEach((function(e){return t.addEventListener(e,r)}))}(),m=(y=document.querySelector("[data-semana]")).dataset.semana.split(",").map(Number),g=y.dataset.horario.split(",").map(Number),w=(b=new Date).getUTCDay(),L=b.getUTCHours()-3,w>0&&w<=m[4]&&L>=g[0]&&L<g[1]&&y.classList.add("aberto"),function(t,e){function n(){return(n=p(E().mark((function t(){var n;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("animaisapi.json");case 3:return n=t.sent,t.next=6,n.json();case 6:t.sent.forEach((function(t){return n=t,r=document.querySelector(e),o=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.especie,"</h3><span data-numero>").concat(t.total,"</span>"),e}(n),void r.appendChild(o);var n,r,o})),new k("[data-numero]",".numeros","ativo").init(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}(0,".numeros-grid"),function(t,e){function n(){return(n=p(E().mark((function t(){var e,n,r,o;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.blockchain.com/pt/ticker");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,r=document.querySelector(".btc-preco"),o=(1e3/n.BRL.sell).toFixed(4),r.innerText=o,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(Error(t.t0));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}()})()})();