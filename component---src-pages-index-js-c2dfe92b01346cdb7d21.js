/*! For license information please see component---src-pages-index-js-c2dfe92b01346cdb7d21.js.LICENSE.txt */
(self.webpackChunkpixel_perfect=self.webpackChunkpixel_perfect||[]).push([[678],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function s(e){return function(t){return r.createElement(u,a({attr:a({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var n,i=e.attr,o=e.size,l=e.title,s=c(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}},8407:function(e,t){"use strict";var n=60103,r=60106,i=60107,o=60108,a=60114,c=60109,l=60110,s=60112,u=60113,d=60120,m=60115,p=60116,f=60121,h=60122,g=60117,b=60129,x=60131;if("function"==typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element"),r=w("react.portal"),i=w("react.fragment"),o=w("react.strict_mode"),a=w("react.profiler"),c=w("react.provider"),l=w("react.context"),s=w("react.forward_ref"),u=w("react.suspense"),d=w("react.suspense_list"),m=w("react.memo"),p=w("react.lazy"),f=w("react.block"),h=w("react.server.block"),g=w("react.fundamental"),b=w("react.debug_trace_mode"),x=w("react.legacy_hidden")}function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case a:case o:case u:case d:return e;default:switch(e=e&&e.$$typeof){case l:case s:case p:case m:case c:return e;default:return t}}case r:return t}}}},7089:function(e,t,n){"use strict";n(8407)},1388:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return He}});var r=n(7294),i=n(9),o=[{image:n.p+"static/home1-7b4798627913035c7a2195b81d6ced56.jpeg"},{image:n.p+"static/home2-ff94dc05e119c0262c04b35ff92dc6f7.jpeg"},{image:n.p+"static/home3-4b39c82078d17658725dc9c17db259af.jpeg"}],a=i.default.div.withConfig({displayName:"Form__Wrapper",componentId:"sc-jt7eu-0"})(["max-width:449px;width:auto;max-height:638px;height:auto;background-color:white;padding:30px;.paragraph{color:gray;margin-bottom:10px;}h3,h4{margin-bottom:10px;}@media (max-width:1300px){padding:20px;.paragraph{margin-bottom:10px;}h4,h3{margin-bottom:10px;}}@media (max-width:820px){padding:10px;.paragraph{margin-bottom:5px;}h4,h3{margin-bottom:5px;}}"]),c=i.default.input.withConfig({displayName:"Form__Input",componentId:"sc-jt7eu-1"})(["height:40px;width:100%;border:1px solid black;padding-left:20px;margin-bottom:10px;@media(max-width:376px){height:20px;}"]),l=i.default.label.withConfig({displayName:"Form__Label",componentId:"sc-jt7eu-2"})(['display:flex;gap:10px;font-size:10px;margin-bottom:10px;input[type="checkbox"]{width:20px;height:20px;}']),s=i.default.button.withConfig({displayName:"Form__Button",componentId:"sc-jt7eu-3"})(["width:100%;height:40px;font-weight:bold;letter-spacing:.2rem;border:none;color:white;background:linear-gradient(to right,#ffcc48 50%,black 50%);background-position:right bottom;background-size:200% 100%;transition:all .5s ease-out;&:hover{background-position:left bottom;color:black;cursor:pointer;}@media(max-width:376px){height:20px;}"]),u=function(){return r.createElement(a,null,r.createElement("h3",null,"Lorem ipsum ",r.createElement("br",null),"Lorem ipsum lorem ipsum"),r.createElement("div",{className:"paragraph"},"consectetur adipisicing elit. Ut auctor arcu"),r.createElement("h4",null,"Zostaw kontakt, zadzwonimy do Ciebie"),r.createElement(c,{type:"text",placeholder:"Imię i nazwisko"}),r.createElement(c,{type:"text",placeholder:"Telefon"}),r.createElement(c,{type:"email",placeholder:"Email"}),r.createElement(c,{type:"text",placeholder:"Lorem ipsum lorem ipsum"}),r.createElement(l,null,r.createElement("input",{type:"checkbox"}),"Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więce..."),r.createElement(s,null,"Wyślij"))},d=n(1279),m=i.default.div.withConfig({displayName:"Home__Wrapper",componentId:"sc-13fnsbz-0"})(['width:100vw;height:100vh;position:relative;display:flex;justify-content:center;align-items:center;.slide{opacity:0;}.slide.active{opacity:1;transition:2s ease-in-out;width:100%;height:100%;&::before{content:"";width:100%;height:100%;display:block;position:absolute;background-color:black;opacity:27%;}}']),p=i.default.img.withConfig({displayName:"Home__Img",componentId:"sc-13fnsbz-1"})(["width:100%;height:100%;object-fit:cover;"]),f=i.default.div.withConfig({displayName:"Home__CountWrapper",componentId:"sc-13fnsbz-2"})(["width:15%;max-width:305px;max-height:118px;height:12.53%;position:absolute;bottom:0;left:20vw;display:flex;align-items:center;justify-content:space-between;color:white;.bar{width:60%;height:5px;background-color:black;&::before{content:'';width:",";transition:all 8s ease;height:100%;background-color:white;display:block;}}@media (max-width:820px){height:50px;width:25%;}"],(function(e){return e.progress+"%"})),h=i.default.div.withConfig({displayName:"Home__ArrowWrapper",componentId:"sc-13fnsbz-3"})(["max-width:305px;max-height:118px;width:15.89%;height:12.53%;position:absolute;bottom:0;left:0;z-index:1;display:flex;justify-content:center;align-items:start;img{width:100%;height:100%;}@media (max-width:820px){height:50px;}"]),g=i.default.div.withConfig({displayName:"Home__ArrowLeft",componentId:"sc-13fnsbz-4"})(["width:52.64%;height:100%;display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none;background:linear-gradient(to left,black 50%,white 50%);background-position:left bottom;background-size:200% 100%;transition:all .3s ease-out;color:black;svg{height:40%;width:auto;}&:hover{background-position:right bottom;color:white;}"]),b=i.default.div.withConfig({displayName:"Home__ArrowRight",componentId:"sc-13fnsbz-5"})(["width:47.36%;height:100%;display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none;background:linear-gradient(to right,black 50%,white 50%);background-position:right bottom;background-size:200% 100%;transition:all .3s ease-out;color:black;svg{height:40%;width:auto;}&:hover{background-position:left bottom;color:white;}"]),x=i.default.div.withConfig({displayName:"Home__InsideWrapper",componentId:"sc-13fnsbz-6"})(["width:100vw;height:80%;position:absolute;top:90px;display:flex;align-items:end;justify-content:space-between;padding:30px 175px;gap:30px;@media (max-width:1000px){padding:0 120px;}@media (max-width:820px){padding:0 40px;flex-direction:column;align-items:center;max-height:50%;}"]),w=i.default.div.withConfig({displayName:"Home__Title",componentId:"sc-13fnsbz-7"})(["color:white;display:flex;flex-direction:column;font-size:2rem;img{max-width:176px;}@media (max-width:1000px){img{width:70px;}font-size:1.5rem;}@media (max-width:820px){img{width:50px;}font-size:1rem;}"]),v=function(){var e=(0,r.useState)(0),t=e[0],n=e[1],i=(0,r.useState)(0),a=i[0],c=i[1],l=o.length,s=function(){n(t===l-1?0:t+1),c(0)};return(0,r.useEffect)((function(){c(100),setTimeout((function(){s()}),8e3)}),[t]),(0,r.useEffect)((function(){console.log(a)}),[a]),r.createElement(m,null,o.map((function(e,n){return r.createElement("div",{className:n===t?"slide active":"slide",key:n},n===t&&r.createElement(p,{width:"100%",height:"100%",key:n,src:e.image,alt:"background"+n}))})),r.createElement(x,null,r.createElement(w,null,r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTYiIGhlaWdodD0iOTEiIHZpZXdCb3g9IjAgMCAxOTYgOTEiPg0KICAgIDxkZWZzPg0KICAgICAgICA8c3R5bGU+LmF7ZmlsbDojZmZmO2ZvbnQtc2l6ZTo2NXB4O2ZvbnQtZmFtaWx5OlBvcHBpbnMtQm9sZCwgUG9wcGlucywgc2Fucy1zZXJpZjtmb250LXdlaWdodDo3MDA7fTwvc3R5bGU+DQogICAgPC9kZWZzPg0KICAgIDx0ZXh0IGNsYXNzPSJhIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDY4KSI+DQogICAgICAgIDx0c3BhbiB4PSIwIiB5PSIwIj5GaXJtYTwvdHNwYW4+DQogICAgPC90ZXh0Pg0KPC9zdmc+DQo="}),"Lorem ipsum dolor sit amet,",r.createElement("br",null),"consectetur adipiscing elit. Ut auctor"),r.createElement(u,null)),r.createElement(h,null,r.createElement(g,{onClick:function(){n(0===t?l-1:t-1)}},r.createElement(d.kyg,null)),r.createElement(b,{onClick:s},r.createElement(d.mGl,null))),r.createElement(f,{progress:a},t+1<10?"0"+(t+1):t+1,r.createElement("div",{className:"bar"}),l<10?"0"+l:l))},y=n(3201),E=n(1852),O=n(1521),j=r.createContext(null);var N=function(e){e()},I=function(){return N};var C={notify:function(){},get:function(){return[]}};function k(e,t){var n,r=C;function i(){a.onStateChange&&a.onStateChange()}function o(){n||(n=t?t.addNestedSub(i):e.subscribe(i),r=function(){var e=I(),t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,i=n={callback:e,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){r&&null!==t&&(r=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}())}var a={addNestedSub:function(e){return o(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:i,isSubscribed:function(){return Boolean(n)},trySubscribe:o,tryUnsubscribe:function(){n&&(n(),n=void 0,r.clear(),r=C)},getListeners:function(){return r}};return a}var P="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;var z=function(e){var t=e.store,n=e.context,i=e.children,o=(0,r.useMemo)((function(){var e=k(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),a=(0,r.useMemo)((function(){return t.getState()}),[t]);P((function(){var e=o.subscription;return e.trySubscribe(),a!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[o,a]);var c=n||j;return r.createElement(c.Provider,{value:o},i)};n(5706),n(7089);function S(){return(0,r.useContext)(j)}function _(e){void 0===e&&(e=j);var t=e===j?S:function(){return(0,r.useContext)(e)};return function(){return t().store}}var Z=_();function A(e){void 0===e&&(e=j);var t=e===j?Z:_(e);return function(){return t().dispatch}}var D=A(),B=function(e,t){return e===t};function W(e){void 0===e&&(e=j);var t=e===j?S:function(){return(0,r.useContext)(e)};return function(e,n){void 0===n&&(n=B);var i=t(),o=function(e,t,n,i){var o,a=(0,r.useReducer)((function(e){return e+1}),0)[1],c=(0,r.useMemo)((function(){return k(n,i)}),[n,i]),l=(0,r.useRef)(),s=(0,r.useRef)(),u=(0,r.useRef)(),d=(0,r.useRef)(),m=n.getState();try{if(e!==s.current||m!==u.current||l.current){var p=e(m);o=void 0!==d.current&&t(p,d.current)?d.current:p}else o=d.current}catch(f){throw l.current&&(f.message+="\nThe error may be correlated with this previous error:\n"+l.current.stack+"\n\n"),f}return P((function(){s.current=e,u.current=m,d.current=o,l.current=void 0})),P((function(){function e(){try{var e=n.getState();if(e===u.current)return;var r=s.current(e);if(t(r,d.current))return;d.current=r,u.current=e}catch(f){l.current=f}a()}return c.onStateChange=e,c.trySubscribe(),e(),function(){return c.tryUnsubscribe()}}),[n,c]),o}(e,n,i.store,i.subscription);return(0,r.useDebugValue)(o),o}}var R,L=W(),H=n(3935);R=H.unstable_batchedUpdates,N=R;var G=function(){return{type:"TOGGLE_SIDEBAR"}},T=i.default.nav.withConfig({displayName:"Header__Wrapper",componentId:"sc-7etz6w-0"})(["height:67px;width:100vw;position:absolute;top:0;background-color:transparent;margin-top:42px;display:flex;align-items:center;justify-content:space-between;color:white;@media (max-width:1300px){}@media (max-width:1000px){margin-top:20px;}@media (max-width:820px){padding:0 20px;}"]),F=i.default.div.withConfig({displayName:"Header__Logo",componentId:"sc-7etz6w-1"})(["width:135px;height:100%;display:flex;justify-content:center;align-items:center;font-weight:bold;margin-left:175px;img{width:100%;}@media (max-width:1000px){width:70px;margin-left:120px;}@media (max-width:820px){width:40px;margin-left:10px;}"]),M=i.default.div.withConfig({displayName:"Header__Links",componentId:"sc-7etz6w-2"})(["width:auto;display:flex;align-items:center;justify-content:space-between;font-size:10px;ul{list-style:none;display:flex;align-items:center;padding:0;font-size:14px;}li{margin-right:30px;.bar{width:0;height:1px;background-color:white;margin-top:10px;transition:width 0.3s ease-in-out;position:relative;}&:hover{cursor:pointer;.bar{width:100%;left:50%;transform:translate(-50%,0);}}@media(max-width:1150px){display:none;}@media (max-width:1000px){margin-right:20px;}@media (max-width:820px){margin-right:10px;}}"]),U=i.default.div.withConfig({displayName:"Header__Social",componentId:"sc-7etz6w-3"})(["width:auto;height:100%;display:flex;align-items:center;margin-right:175px;.box{width:25px;height:25px;background-color:white;margin:5px;color:black;display:flex;align-items:center;justify-content:center;}.menu{color:white;background-color:transparent;margin-left:30px;svg{width:100%;height:100%;}@media(min-width:1150px){display:none;}}@media (max-width:1000px){margin-right:120px;}@media (max-width:820px){margin-right:10px;}"]),X=function(){var e=D(),t=L((function(e){return e.sidebar}));return r.createElement(T,null,r.createElement(F,null,r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDYiIGhlaWdodD0iNjciIHZpZXdCb3g9IjAgMCAxMzYgNjciPg0KICAgIDxkZWZzPg0KICAgICAgICA8c3R5bGU+LmF7ZmlsbDojZmZmO2ZvbnQtc2l6ZTo0OHB4O2ZvbnQtZmFtaWx5OlBvcHBpbnMtQm9sZCwgUG9wcGlucywgc2Fucy1zZXJpZjtmb250LXdlaWdodDo3MDA7fTwvc3R5bGU+DQogICAgPC9kZWZzPg0KICAgIDx0ZXh0IGNsYXNzPSJhIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUwKSI+DQogICAgICAgIDx0c3BhbiB4PSIwIiB5PSIwIj5MT0dPPC90c3Bhbj4NCiAgICA8L3RleHQ+DQo8L3N2Zz4NCg=="})),r.createElement(M,null,r.createElement("ul",null,r.createElement("li",null,"Poznaj przestrzeń",r.createElement("div",{className:"bar"})),r.createElement("li",null,"Oferta",r.createElement("div",{className:"bar"})),r.createElement("li",null,"Lokalizacja",r.createElement("div",{className:"bar"})),r.createElement("li",null,"Własne biuro",r.createElement("div",{className:"bar"})),r.createElement("li",null,"Kontakt",r.createElement("div",{className:"bar"})))),r.createElement(U,null,r.createElement("div",{className:"box"},r.createElement(y.tBk,null)),r.createElement("div",{className:"box"},r.createElement(E.Vs6,null)),r.createElement("div",{className:"box menu",onClick:function(){return e(G())}},t?r.createElement(O.Cq1,null):r.createElement(O.r0I,null))))},K=i.default.nav.withConfig({displayName:"Sidebar__NavWrapper",componentId:"sc-19c1qqs-0"})([".side{height:100vh;background-color:#344353;box-shadow:2px 0 5px rgba(0,0,0,.5);position:fixed;top:0;left:0;width:70%;max-width:300px;display:flex;align-items:center;justify-content:center;transform:translateX(-100%);transition:transform .35s ease-in-out;z-index:2;}.open{transform:translateX(0);}ul{list-style:none;display:flex;align-items:center;margin:0;padding:0 30px;height:auto;flex-direction:column;}li{padding:25px 10px;}a{text-decoration:none;color:#FFFFFF;&:hover{color:#FDFF00;cursor:pointer;}}"]),Q=i.default.div.withConfig({displayName:"Sidebar__Links",componentId:"sc-19c1qqs-1"})(["position:absolute;width:auto;right:10%;"]),Y=i.default.ul.withConfig({displayName:"Sidebar__UL",componentId:"sc-19c1qqs-2"})(["list-style:none;display:flex;align-items:center;margin:0;li{padding:30px 10px;text-decoration:none;color:white;&:hover{color:lightgray;cursor:pointer;}}@media (max-width:1350px){display:none;}"]),q=function(e){var t="side";return L((function(e){return e.sidebar}))&&(t="side open"),r.createElement(K,null,r.createElement("div",{className:t},r.createElement(Q,null,r.createElement(Y,null,r.createElement("li",null,"Poznaj przestrzeń"),r.createElement("li",null,"Oferta"),r.createElement("li",null,"Lokalizacja"),r.createElement("li",null,"Własne biuro"),r.createElement("li",null,"Kontakt")))))};function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var V=n(5900),ee=n.n(V),te=n(5893);var ne=r.createContext({prefixes:{}});ne.Consumer,ne.Provider;function re(e,t){var n=(0,r.useContext)(ne).prefixes;return e||n[t]||t}var ie=["bsPrefix","fluid","as","className"];function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){J(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce=r.forwardRef((function(e,t){var n=e.bsPrefix,r=e.fluid,i=e.as,o=void 0===i?"div":i,a=e.className,c=$(e,ie),l=re(n,"container"),s="string"==typeof r?"-".concat(r):"-fluid";return(0,te.jsx)(o,ae(ae({ref:t},c),{},{className:ee()(a,r?"".concat(l).concat(s):l)}))}));ce.displayName="Container",ce.defaultProps={fluid:!1};var le=ce,se=["bsPrefix","className","as"];function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){J(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=["xxl","xl","lg","md","sm","xs"],pe=r.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.as,o=void 0===i?"div":i,a=$(e,se),c=re(n,"row"),l="".concat(c,"-cols"),s=[];return me.forEach((function(e){var t,n=a[e];delete a[e],t=null!=n&&"object"==typeof n?n.cols:n;var r="xs"!==e?"-".concat(e):"";null!=t&&s.push("".concat(l).concat(r,"-").concat(t))})),(0,te.jsx)(o,de(de({ref:t},a),{},{className:ee().apply(void 0,[r,c].concat(s))}))}));pe.displayName="Row";var fe=pe;var he=n(181);function ge(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||(0,he.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var be=["as","bsPrefix","className"],xe=["className"];function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){J(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ye=["xxl","xl","lg","md","sm","xs"];var Ee=r.forwardRef((function(e,t){var n=function(e){var t=e.as,n=e.bsPrefix,r=e.className,i=$(e,be);n=re(n,"col");var o=[],a=[];return ye.forEach((function(e){var t,r,c,l=i[e];delete i[e],"object"==typeof l&&null!=l?(t=l.span,r=l.offset,c=l.order):t=l;var s="xs"!==e?"-".concat(e):"";t&&o.push(!0===t?"".concat(n).concat(s):"".concat(n).concat(s,"-").concat(t)),null!=c&&a.push("order".concat(s,"-").concat(c)),null!=r&&a.push("offset".concat(s,"-").concat(r))})),[ve(ve({},i),{},{className:ee().apply(void 0,[r].concat(o,a))}),{as:t,bsPrefix:n,spans:o}]}(e),r=ge(n,2),i=r[0],o=i.className,a=$(i,xe),c=r[1],l=c.as,s=void 0===l?"div":l,u=c.bsPrefix,d=c.spans;return(0,te.jsx)(s,ve(ve({},a),{},{ref:t,className:ee()(o,!d.length&&u)}))}));Ee.displayName="Col";var Oe=Ee,je=n.p+"static/service1-b542b6d49d71efb9f50aafce6f34a0d7.jpeg",Ne=n.p+"static/service2-3951c923020ec1641abf62d2cac3d10a.jpeg",Ie=n.p+"static/service3-2bd82abc0bd9c266f153ba0133f5ced2.jpeg",Ce=n.p+"static/service4-ec4057bd2df353d9e18e3f09d107aa7d.jpeg",ke=i.default.div.withConfig({displayName:"Services__Wrapper",componentId:"sc-1nz95u2-0"})(["width:100vw;height:auto;display:flex;justify-content:center;padding:140px 175px;.row{margin-bottom:28px;}.col{padding:0;}@media (max-width:1000px){padding:100px 120px;}@media (max-width:768px){padding:40px 40px;.col-md-6{margin-bottom:28px;}.row{margin-bottom:0;}}"]),Pe=i.default.div.withConfig({displayName:"Services__Card",componentId:"sc-1nz95u2-1"})(["max-width:770px;max-height:",";width:100%;height:auto;overflow:hidden;background-color:rgba(255,255,255,25%);position:relative;img{width:100%;height:auto;transition:.5s;position:relative;z-index:-1;}.arrow{max-width:130px;max-height:130px;width:6.77vw;height:6.77vw;position:absolute;bottom:0;right:0;background:linear-gradient(to right,black 50%,white 50%);background-position:right bottom;background-size:201% 100%;transition:all .5s ease-out;display:flex;align-items:center;justify-content:center;svg{width:40%;height:40%;}}&:hover{img{transform:scale(110%);}.arrow{background-position:left bottom;color:white;cursor:pointer;}}"],(function(e){return e.small?"362px":"495px"})),ze=i.default.div.withConfig({displayName:"Services__Info",componentId:"sc-1nz95u2-2"})(["max-width:330px;width:auto;height:auto;background-color:white;padding:35px 25px 25px 35px;position:absolute;top:",";bottom:",";left:29px;.smallBox{width:42px;height:42px;background-color:#ffcc48;position:absolute;top:25px;left:25px;@media(max-width:1200px){top:5px;left:5px;}}h3{position:relative;font-weight:bold;@media(max-width:1400px){font-size:18px;}@media(max-width:1200px){font-size:14px;}}.line{width:49px;height:5px;background-color:black;position:relative;margin-bottom:10px;margin-top:25px;@media(max-width:1200px){margin-bottom:5px;margin-top:10px;}}span{font-size:18px;@media(max-width:1400px){font-size:10px;}@media(max-width:1200px){font-size:8px;}}@media(max-width:1200px){padding:15px 5px 5px 15px;}"],(function(e){return e.bottom?"":"29px"}),(function(e){return e.bottom?"29px":""})),Se=function(){return r.createElement(ke,null,r.createElement(le,{fluid:"sm",style:{margin:0,padding:0}},r.createElement(fe,null,r.createElement(Oe,{sm:12,md:6},r.createElement(Pe,null,r.createElement(ze,null,r.createElement("div",{className:"smallBox"}),r.createElement("h3",null,"Biuro"),r.createElement("div",{className:"line"}),r.createElement("span",null,"od 1000zł/msc")),r.createElement("img",{src:je}),r.createElement("div",{className:"arrow"},r.createElement(d.mGl,null)))),r.createElement(Oe,{sm:12,md:6},r.createElement(Pe,null,r.createElement(ze,null,r.createElement("div",{className:"smallBox"}),r.createElement("h3",null,"Lorem",r.createElement("br",null),"ipsum"),r.createElement("div",{className:"line"}),r.createElement("span",null,"od 500zł/msc")),r.createElement("img",{src:Ne}),r.createElement("div",{className:"arrow"},r.createElement(d.mGl,null))))),r.createElement(fe,null,r.createElement(Oe,{sm:12,md:6},r.createElement(Pe,{small:!0},r.createElement(ze,{bottom:!0},r.createElement("div",{className:"smallBox"}),r.createElement("h3",null,"Biuro",r.createElement("br",null),"lorem"),r.createElement("div",{className:"line"}),r.createElement("span",null,"od 100zł/h")),r.createElement("img",{src:Ie}),r.createElement("div",{className:"arrow"},r.createElement(d.mGl,null)))),r.createElement(Oe,{sm:12,md:6},r.createElement(Pe,{small:!0},r.createElement(ze,{bottom:!0},r.createElement("div",{className:"smallBox"}),r.createElement("h3",null,"Biuro lorem ipsum ",r.createElement("br",null),"Lorem"),r.createElement("div",{className:"line"}),r.createElement("span",null,"od 100zł/h")),r.createElement("img",{src:Ce}),r.createElement("div",{className:"arrow"},r.createElement(d.mGl,null)))))))};function _e(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Ze="function"==typeof Symbol&&Symbol.observable||"@@observable",Ae=function(){return Math.random().toString(36).substring(7).split("").join(".")},De={INIT:"@@redux/INIT"+Ae(),REPLACE:"@@redux/REPLACE"+Ae(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ae()}};function Be(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function We(e,t,n){var r;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(_e(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(_e(1));return n(We)(e,t)}if("function"!=typeof e)throw new Error(_e(2));var i=e,o=t,a=[],c=a,l=!1;function s(){c===a&&(c=a.slice())}function u(){if(l)throw new Error(_e(3));return o}function d(e){if("function"!=typeof e)throw new Error(_e(4));if(l)throw new Error(_e(5));var t=!0;return s(),c.push(e),function(){if(t){if(l)throw new Error(_e(6));t=!1,s();var n=c.indexOf(e);c.splice(n,1),a=null}}}function m(e){if(!Be(e))throw new Error(_e(7));if(void 0===e.type)throw new Error(_e(8));if(l)throw new Error(_e(9));try{l=!0,o=i(o,e)}finally{l=!1}for(var t=a=c,n=0;n<t.length;n++){(0,t[n])()}return e}function p(e){if("function"!=typeof e)throw new Error(_e(10));i=e,m({type:De.REPLACE})}function f(){var e,t=d;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(_e(11));function n(){e.next&&e.next(u())}return n(),{unsubscribe:t(n)}}})[Ze]=function(){return this},e}return m({type:De.INIT}),(r={dispatch:m,subscribe:d,getState:u,replaceReducer:p})[Ze]=f,r}var Re=function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];0,"function"==typeof e[i]&&(n[i]=e[i])}var o,a=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:De.INIT}))throw new Error(_e(12));if(void 0===n(void 0,{type:De.PROBE_UNKNOWN_ACTION()}))throw new Error(_e(13))}))}(n)}catch(c){o=c}return function(e,t){if(void 0===e&&(e={}),o)throw o;for(var r=!1,i={},c=0;c<a.length;c++){var l=a[c],s=n[l],u=e[l],d=s(u,t);if(void 0===d){t&&t.type;throw new Error(_e(14))}i[l]=d,r=r||d!==u}return(r=r||a.length!==Object.keys(e).length)?i:e}}({sidebar:function(e,t){return void 0===e&&(e=!1),"TOGGLE_SIDEBAR"===t.type?!e:e}}),Le=i.default.div.withConfig({displayName:"pages__Main",componentId:"sc-i6t9gt-0"})([""]),He=function(){var e=We(Re);return r.createElement(z,{store:e},r.createElement(Le,null,r.createElement(q,null),r.createElement(v,null),r.createElement(X,null),r.createElement(Se,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-c2dfe92b01346cdb7d21.js.map