/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,n)=>{var i=n(698).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},r=Object.prototype,a=r.hasOwnProperty,s=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",h=c.toStringTag||"@@toStringTag";function v(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{v({},"")}catch(e){v=function(t,e,n){return t[e]=n}}function d(t,e,n,i){var o=e&&e.prototype instanceof w?e:w,r=Object.create(o.prototype),a=new _(i||[]);return s(r,"_invoke",{value:D(t,n,a)}),r}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=d;var p="suspendedStart",y="suspendedYield",m="executing",g="completed",b={};function w(){}function E(){}function L(){}var k={};v(k,u,(function(){return this}));var x=Object.getPrototypeOf,S=x&&x(x(N([])));S&&S!==r&&a.call(S,u)&&(k=S);var M=L.prototype=w.prototype=Object.create(k);function T(t){["next","throw","return"].forEach((function(e){v(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function n(o,r,s,c){var u=f(t[o],t,r);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==i(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var o;s(this,"_invoke",{value:function(t,i){function r(){return new e((function(e,o){n(t,i,e,o)}))}return o=o?o.then(r,r):r()}})}function D(t,n,i){var o=p;return function(r,a){if(o===m)throw new Error("Generator is already running");if(o===g){if("throw"===r)throw a;return{value:e,done:!0}}for(i.method=r,i.arg=a;;){var s=i.delegate;if(s){var c=A(s,i);if(c){if(c===b)continue;return c}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(o===p)throw o=g,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);o=m;var u=f(t,n,i);if("normal"===u.type){if(o=i.done?g:y,u.arg===b)continue;return{value:u.arg,done:i.done}}"throw"===u.type&&(o=g,i.method="throw",i.arg=u.arg)}}}function A(t,n){var i=n.method,o=t.iterator[i];if(o===e)return n.delegate=null,"throw"===i&&t.iterator.return&&(n.method="return",n.arg=e,A(t,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+i+"' method")),b;var r=f(o,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,b;var a=r.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,r=function n(){for(;++o<t.length;)if(a.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return r.next=r}}throw new TypeError(i(t)+" is not iterable")}return E.prototype=L,s(M,"constructor",{value:L,configurable:!0}),s(L,"constructor",{value:E,configurable:!0}),E.displayName=v(L,h,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,v(t,h,"GeneratorFunction")),t.prototype=Object.create(M),t},n.awrap=function(t){return{__await:t}},T(C.prototype),v(C.prototype,l,(function(){return this})),n.AsyncIterator=C,n.async=function(t,e,i,o,r){void 0===r&&(r=Promise);var a=new C(d(t,e,i,o),r);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},T(M),v(M,h,"Generator"),v(M,u,(function(){return this})),v(M,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},n.values=N,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(i,o){return s.type="throw",s.arg=t,n.next=i,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],s=r.completion;if("root"===r.tryLoc)return i("end");if(r.tryLoc<=this.prev){var c=a.call(r,"catchLoc"),u=a.call(r,"finallyLoc");if(c&&u){if(this.prev<r.catchLoc)return i(r.catchLoc,!0);if(this.prev<r.finallyLoc)return i(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return i(r.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return i(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var r=o?o.completion:{};return r.type=t,r.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(r)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:N(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),b}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,n)=>{var i=n(61)();t.exports=i;try{regeneratorRuntime=i}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function i(t,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(r=o.key,a=void 0,a=function(t,n){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r),"symbol"===e(a)?a:String(a)),o)}var r,a}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var r=function(){function e(n,i){t(this,e),this.menuLinkInt=document.querySelectorAll(n),this.options=void 0===i?{behavior:"smooth",block:"start"}:i,this.scrollToSection=this.scrollToSection.bind(this)}return o(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkInt",value:function(){var t=this;this.menuLinkInt.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.addLinkInt(),this}}]),e}();function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function s(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){var n;return function(){for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];n&&clearTimeout(n),n=setTimeout((function(){t.apply(void 0,o),n=null}),e)}}var u=function(){function e(n){t(this,e),this.sections=document.querySelectorAll(n),this.windowMetade=.6*window.innerHeight,this.checkDistance=c(this.checkDistance.bind(this),50)}return o(e,[{key:"getDistance",value:function(){var t=this;this.distance=s(this.sections).map((function(e){return{element:e,offset:e.offsetTop-t.windowMetade}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.scrollY>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}(),l=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="ativo"}return o(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAcordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAcordionEvent()),this}}]),e}(),h=function(){function e(n,i){t(this,e),this.menu=document.querySelectorAll(n),this.content=document.querySelectorAll(i),this.activeClass="ativo"}return o(e,[{key:"activeTab",value:function(t){var e=this;this.content.forEach((function(t){t.classList.remove(e.activeClass)}));var n=this.content[t].dataset.anime;this.content[t].classList.add(this.activeClass,n)}},{key:"addTabEvent",value:function(){var t=this;this.menu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.content.length&&this.menu.length&&(this.activeTab(0),this.addTabEvent()),this}}]),e}(),v=function(){function e(n,i,o){t(this,e),this.modalContainer=document.querySelector(n),this.loginButton=document.querySelector(i),this.fecharButton=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.outCLickModal=this.outCLickModal.bind(this)}return o(e,[{key:"toggleModal",value:function(){this.modalContainer.classList.toggle("ativo")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"outCLickModal",value:function(t){t.target===this.modalContainer&&this.toggleModal(t)}},{key:"addModalEvents",value:function(){this.loginButton.addEventListener("click",this.eventToggleModal),this.fecharButton.addEventListener("click",this.eventToggleModal),this.modalContainer.addEventListener("click",this.outCLickModal)}},{key:"init",value:function(){return this.modalContainer&&this.loginButton&&this.fecharButton&&this.addModalEvents(),this}}]),e}(),d=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return o(e,[{key:"onMouseMove",value:function(t){this.tooltipbox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.tooltipbox.style.left="".concat(t.pageX-190,"px"):this.tooltipbox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){this.tooltipbox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}},{key:"createToolTipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipbox=e}},{key:"onMouseOver",value:function(t){this.createToolTipBox(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave),this.onMouseLeave.element=this}},{key:"addToolTipsEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addToolTipsEvent(),this}}]),e}();function f(t,e,n){var i="data-outside",o=document.documentElement;function r(a){t.contains(a.target)||(t.removeAttribute(i),e.forEach((function(t){o.removeEventListener(t,r)})),n())}t.hasAttribute(i)||(e.forEach((function(t){setTimeout((function(){o.addEventListener(t,r)}))})),t.setAttribute(i,""))}var p=function(){function e(n,i,o){t(this,e),this.liDropDown=document.querySelectorAll(n),this.classList=i,this.events=void 0===o?["click","touchstart"]:o,this.activeDropDown=this.activeDropDown.bind(this)}return o(e,[{key:"activeDropDown",value:function(t){var e=this;t.preventDefault(),t.currentTarget.classList.toggle(this.classList),f(t.currentTarget,this.events,(function(){t.target.classList.remove(e.classList)}))}},{key:"addEvent",value:function(){var t=this;this.liDropDown.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.activeDropDown)}))}))}},{key:"init",value:function(){return this.liDropDown.length&&this.addEvent(),this}}]),e}(),y=function(){function e(n,i,o,r){t(this,e),this.menuButton=document.querySelector(n),this.menuList=document.querySelector(i),this.class=o,this.events=void 0===r?["click","touchstart"]:r,this.openMenu=this.openMenu.bind(this)}return o(e,[{key:"openMenu",value:function(t){var e=this;t.preventDefault(),this.menuList.classList.add(this.class),this.menuButton.classList.add(this.class),f(this.menuList,this.events,(function(){e.menuList.classList.remove(e.class),e.menuButton.classList.remove(e.class)}))}},{key:"addEvent",value:function(){var t=this;this.events.forEach((function(e){return t.menuButton.addEventListener(e,t.openMenu)}))}},{key:"init",value:function(){return this.menuButton&&this.menuList&&this.addEvent(),this}}]),e}(),m=function(){function e(n,i){t(this,e),this.funcionamento=document.querySelector(n),this.class=i}return o(e,[{key:"dadosFuncionamento",value:function(){this.diaFuncionamento=this.funcionamento.dataset.semana.split(",").map(Number),this.horarioFuncionamento=this.funcionamento.dataset.horario.split(",").map(Number)}},{key:"dadosAgora",value:function(){this.dataAgora=new Date,this.diaAgora=this.dataAgora.getUTCDay(),this.horaAgora=this.dataAgora.getUTCHours()-3}},{key:"verify",value:function(){var t=-1!==this.diaFuncionamento.indexOf(this.diaAgora),e=this.horaAgora>=this.horarioFuncionamento[0]&&this.horaAgora<this.horarioFuncionamento[1];return t&&e}},{key:"addClass",value:function(){this.verify()&&this.funcionamento.classList.add(this.class)}},{key:"init",value:function(){return this.funcionamento&&(this.dadosFuncionamento(),this.dadosAgora(),this.addClass()),this}}]),e}();function g(t,e,n,i,o,r,a){try{var s=t[r](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(i,o)}function b(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){g(r,i,o,a,s,"next",t)}function s(t){g(r,i,o,a,s,"throw",t)}a(void 0)}))}}var w=n(687),E=n.n(w),L=function(){function e(n,i,o){t(this,e),this.numeros=document.querySelectorAll(n),this.observerTarget=document.querySelector(i),this.observerClass=o,this.handleMutation=this.handleMutation.bind(this)}return o(e,[{key:"animaNumeros",value:function(){var t=this;this.numeros.forEach((function(e){return t.constructor.incrementarNumero(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}],[{key:"incrementarNumero",value:function(t){var e=+t.innerText,n=Math.floor(e/100),i=0,o=setInterval((function(){i+=n,t.innerText=i,i>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}}]),e}();function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}function S(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=x(t);if(n){var r=x(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return function(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,i)}}var M=function(){function e(n,i){t(this,e),this.slide=document.querySelector(n),this.wrapper=document.querySelector(i),this.clientDist={startX:0,movement:0,endX:0},this.activeClass="active",this.changeEvent=new Event("changeEvent")}return o(e,[{key:"transition",value:function(t){this.slide.style.transition=t?"transform .3s":""}},{key:"addMove",value:function(){return this.wrapper.addEventListener("touchmove",this.onMove),this.wrapper.addEventListener("mousemove",this.onMove),this}},{key:"onMove",value:function(t){var e;e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX;var n=this.updatePosition(e);this.movieSlide(n)}},{key:"onDown",value:function(t){"mousedown"===t.type?(t.preventDefault(),this.clientDist.startX=t.clientX):this.clientDist.startX=t.changedTouches[0].clientX,this.addMove(),this.transition(!1)}},{key:"endMove",value:function(){return this.wrapper.removeEventListener("touchstart",this.onMove),this.wrapper.removeEventListener("mousemove",this.onMove),this}},{key:"onUp",value:function(){this.clientDist.endX=this.movePosition,this.endMove(),this.transition(!0),this.changeSlideOnEnd()}},{key:"updatePosition",value:function(t){return this.clientDist.movement=1.4*(this.clientDist.startX-t),this.clientDist.endX-this.clientDist.movement}},{key:"movieSlide",value:function(t){this.movePosition=t,this.slide.style.transform="translate3d(".concat(t,"px, 0, 0)")}},{key:"changeSlideOnEnd",value:function(){this.clientDist.movement<-150&&void 0!==this.indexNav.prev?this.activePrevSlide():this.clientDist.movement>150&&void 0!==this.indexNav.next?this.activeNextSlide():this.changeSlide(this.indexNav.active)}},{key:"changeActiveClass",value:function(){var t=this;this.slideArray.forEach((function(e){return e.element.classList.remove(t.activeClass)})),this.slideArray[this.indexNav.active].element.classList.add(this.activeClass)}},{key:"slidesConfig",value:function(){var t=this;this.slideArray=s(this.slide.children).map((function(e){return{element:e,position:t.calculationSlide(e)}}))}},{key:"changeSlide",value:function(t){this.slidesConfig(),this.movieSlide(this.slideArray[t].position),this.clientDist.endX=this.slideArray[t].position,this.slideIndexNav(t),this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}},{key:"calculationSlide",value:function(t){var e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}},{key:"onResize",value:function(){var t=this;setTimeout((function(){t.slidesConfig(),t.changeSlide(t.indexNav.active)}),500)}},{key:"addResizeEvent",value:function(){window.addEventListener("resize",this.onResize)}},{key:"bindEvents",value:function(){this.onResize=c(this.onResize.bind(this),200),this.onMove=this.onMove.bind(this),this.onDown=this.onDown.bind(this),this.onUp=this.onUp.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this),this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}},{key:"addEvents",value:function(){this.wrapper.addEventListener("mousedown",this.onDown),this.wrapper.addEventListener("touchstart",this.onDown),this.wrapper.addEventListener("mouseup",this.onUp),this.wrapper.addEventListener("touchend",this.onUp)}},{key:"init",value:function(){return this.bindEvents(),this.transition(!0),this.addEvents(),this.addResizeEvent(),this.changeSlide(0),this}}]),e}(),T=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(i,e);var n=S(i);function i(){return t(this,i),n.apply(this,arguments)}return o(i,[{key:"slideIndexNav",value:function(t){var e=s(this.slide.children).length-1;this.indexNav={prev:t<=0?void 0:t-1,active:t,next:t>=e?void 0:t+1}}},{key:"activePrevSlide",value:function(){void 0!==this.indexNav.prev&&this.changeSlide(this.indexNav.prev)}},{key:"activeNextSlide",value:function(){void 0!==this.indexNav.next&&this.changeSlide(this.indexNav.next)}},{key:"selectButton",value:function(t,e){return this.prev=document.querySelector(t),this.next=document.querySelector(e),this}},{key:"createControl",value:function(){var t=document.createElement("ul");return t.dataset.control="slide",this.slideArray.forEach((function(e,n){t.innerHTML+='<li><a href="#slide'.concat(n+1,'">').concat(n+1)})),this.wrapper.appendChild(t),t}},{key:"eventControl",value:function(t,e){var n=this;t.addEventListener("click",(function(t){t.preventDefault(),n.changeSlide(e)})),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}},{key:"activeControlItem",value:function(){var t=this;this.arrayControl.forEach((function(e){return e.classList.remove(t.activeClass)})),this.arrayControl[this.indexNav.active].classList.add(this.activeClass)}},{key:"addEventControl",value:function(t){var e=this;this.control=document.querySelector(t)||this.createControl(),this.arrayControl=s(this.control.children),this.arrayControl.forEach((function(t,n){return e.eventControl(t,n)})),this.activeControlItem()}}]),i}(M);new r('[data-menu="suave"] a[href^="#"]').init(),new l('[data-anime="accordion"] dt',"ativo").init(),new h('[data-tab="menu"] li','[data-tab="content"] section').init(),new v('[data-modal="container"]','[data-modal="abrir"]','[data-modal="fechar"]').init(),new d("[data-toolTip]").init(),new u('[data-anime="scroll"]').init(),new p("[data-dropdown]","dropdown-ativo").init(),new y('[data-menu="button"]','[data-menu="list"]',"active").init(),new m("[data-semana]","aberto").init();var C=new T(".slide",".slide-wrapper");C.init(),C.addEventControl(".custom-controls"),function(t,e){function n(){return(n=b(E().mark((function t(){var n;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("./animaisapi.json");case 3:return n=t.sent,t.next=6,n.json();case 6:t.sent.forEach((function(t){return n=t,i=document.querySelector(e),o=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.especie,"</h3><span data-numero>").concat(t.total,"</span>"),e}(n),void i.appendChild(o);var n,i,o})),new L("[data-numero]",".numeros","ativo").init(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}(0,".numeros-grid"),function(t,e){function n(){return(n=b(E().mark((function t(){var e,n,i;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.blockchain.com/pt/ticker");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,i=(1e3/n.BRL.sell).toFixed(4),document.querySelector(".btc-preco").innerText=i,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(Error(t.t0));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}()})()})();