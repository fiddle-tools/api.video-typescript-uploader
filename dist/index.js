!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(this,(function(){return(()=>{var t={7633:(t,e,r)=>{r(9170),r(1539),r(8674),r(7922),r(4668),r(7727),r(8783),r(3948);var n=r(857);t.exports=n.Promise},3099:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6077:(t,e,r)=>{var n=r(111);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},1223:(t,e,r)=>{var n=r(5112),o=r(30),i=r(3070),a=n("unscopables"),u=Array.prototype;null==u[a]&&i.f(u,a,{configurable:!0,value:o(null)}),t.exports=function(t){u[a][t]=!0}},5787:t=>{t.exports=function(t,e,r){if(!(t instanceof e))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t}},9670:(t,e,r)=>{var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},1318:(t,e,r)=>{var n=r(5656),o=r(7466),i=r(1400),a=function(t){return function(e,r,a){var u,s=n(e),c=o(s.length),f=i(a,c);if(t&&r!=r){for(;c>f;)if((u=s[f++])!=u)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},7072:(t,e,r)=>{var n=r(5112)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i={};i[n]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},4326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},648:(t,e,r)=>{var n=r(1694),o=r(4326),i=r(5112)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:a?o(e):"Object"==(n=o(e))&&"function"==typeof e.callee?"Arguments":n}},9920:(t,e,r)=>{var n=r(6656),o=r(3887),i=r(1236),a=r(3070);t.exports=function(t,e){for(var r=o(e),u=a.f,s=i.f,c=0;c<r.length;c++){var f=r[c];n(t,f)||u(t,f,s(e,f))}}},8544:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:(t,e,r)=>{"use strict";var n=r(3383).IteratorPrototype,o=r(30),i=r(9114),a=r(8003),u=r(7497),s=function(){return this};t.exports=function(t,e,r){var c=e+" Iterator";return t.prototype=o(n,{next:i(1,r)}),a(t,c,!1,!0),u[c]=s,t}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},654:(t,e,r)=>{"use strict";var n=r(2109),o=r(4994),i=r(9518),a=r(7674),u=r(8003),s=r(8880),c=r(1320),f=r(5112),l=r(1913),p=r(7497),v=r(3383),h=v.IteratorPrototype,d=v.BUGGY_SAFARI_ITERATORS,y=f("iterator"),g="keys",m="values",b="entries",w=function(){return this};t.exports=function(t,e,r,f,v,x,S){o(r,e,f);var E,P,T,_=function(t){if(t===v&&A)return A;if(!d&&t in O)return O[t];switch(t){case g:case m:case b:return function(){return new r(this,t)}}return function(){return new r(this)}},k=e+" Iterator",I=!1,O=t.prototype,j=O[y]||O["@@iterator"]||v&&O[v],A=!d&&j||_(v),C="Array"==e&&O.entries||j;if(C&&(E=i(C.call(new t)),h!==Object.prototype&&E.next&&(l||i(E)===h||(a?a(E,h):"function"!=typeof E[y]&&s(E,y,w)),u(E,k,!0,!0),l&&(p[k]=w))),v==m&&j&&j.name!==m&&(I=!0,A=function(){return j.call(this)}),l&&!S||O[y]===A||s(O,y,A),p[e]=A,v)if(P={values:_(m),keys:x?A:_(g),entries:_(b)},S)for(T in P)(d||I||!(T in O))&&c(O,T,P[T]);else n({target:e,proto:!0,forced:d||I},P);return P}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},7871:t=>{t.exports="object"==typeof window},6833:(t,e,r)=>{var n=r(8113);t.exports=/(?:iphone|ipod|ipad).*applewebkit/i.test(n)},5268:(t,e,r)=>{var n=r(4326),o=r(7854);t.exports="process"==n(o.process)},1036:(t,e,r)=>{var n=r(8113);t.exports=/web0s(?!.*chrome)/i.test(n)},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,i=r(7854),a=r(8113),u=i.process,s=u&&u.versions,c=s&&s.v8;c?o=(n=c.split("."))[0]<4?1:n[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),a=r(1320),u=r(3505),s=r(9920),c=r(4705);t.exports=function(t,e){var r,f,l,p,v,h=t.target,d=t.global,y=t.stat;if(r=d?n:y?n[h]||u(h,{}):(n[h]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(v=o(r,f))&&v.value:r[f],!c(d?f:h+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;s(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(r,f,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:(t,e,r)=>{var n=r(3099);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},5005:(t,e,r)=>{var n=r(857),o=r(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},1246:(t,e,r)=>{var n=r(648),o=r(7497),i=r(5112)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[n(t)]}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:(t,e,r)=>{var n=r(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(n(t),e)}},3501:t=>{t.exports={}},842:(t,e,r)=>{var n=r(7854);t.exports=function(t,e){var r=n.console;r&&r.error&&(1===arguments.length?r.error(t):r.error(t,e))}},490:(t,e,r)=>{var n=r(5005);t.exports=n("document","documentElement")},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7293),o=r(4326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:(t,e,r)=>{var n=r(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},9909:(t,e,r)=>{var n,o,i,a=r(8536),u=r(7854),s=r(111),c=r(8880),f=r(6656),l=r(5465),p=r(6200),v=r(3501),h="Object already initialized",d=u.WeakMap;if(a||l.state){var y=l.state||(l.state=new d),g=y.get,m=y.has,b=y.set;n=function(t,e){if(m.call(y,t))throw new TypeError(h);return e.facade=t,b.call(y,t,e),e},o=function(t){return g.call(y,t)||{}},i=function(t){return m.call(y,t)}}else{var w=p("state");v[w]=!0,n=function(t,e){if(f(t,w))throw new TypeError(h);return e.facade=t,c(t,w,e),e},o=function(t){return f(t,w)?t[w]:{}},i=function(t){return f(t,w)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},7659:(t,e,r)=>{var n=r(5112),o=r(7497),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},4705:(t,e,r)=>{var n=r(7293),o=/#|\.prototype\./,i=function(t,e){var r=u[a(t)];return r==c||r!=s&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},s=i.NATIVE="N",c=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},408:(t,e,r)=>{var n=r(9670),o=r(7659),i=r(7466),a=r(9974),u=r(1246),s=r(9212),c=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,r){var f,l,p,v,h,d,y,g=r&&r.that,m=!(!r||!r.AS_ENTRIES),b=!(!r||!r.IS_ITERATOR),w=!(!r||!r.INTERRUPTED),x=a(e,g,1+m+w),S=function(t){return f&&s(f),new c(!0,t)},E=function(t){return m?(n(t),w?x(t[0],t[1],S):x(t[0],t[1])):w?x(t,S):x(t)};if(b)f=t;else{if("function"!=typeof(l=u(t)))throw TypeError("Target is not iterable");if(o(l)){for(p=0,v=i(t.length);v>p;p++)if((h=E(t[p]))&&h instanceof c)return h;return new c(!1)}f=l.call(t)}for(d=f.next;!(y=d.call(f)).done;){try{h=E(y.value)}catch(t){throw s(f),t}if("object"==typeof h&&h&&h instanceof c)return h}return new c(!1)}},9212:(t,e,r)=>{var n=r(9670);t.exports=function(t){var e=t.return;if(void 0!==e)return n(e.call(t)).value}},3383:(t,e,r)=>{"use strict";var n,o,i,a=r(7293),u=r(9518),s=r(8880),c=r(6656),f=r(5112),l=r(1913),p=f("iterator"),v=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(n=o):v=!0);var h=null==n||a((function(){var t={};return n[p].call(t)!==t}));h&&(n={}),l&&!h||c(n,p)||s(n,p,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:v}},7497:t=>{t.exports={}},5948:(t,e,r)=>{var n,o,i,a,u,s,c,f,l=r(7854),p=r(1236).f,v=r(261).set,h=r(6833),d=r(1036),y=r(5268),g=l.MutationObserver||l.WebKitMutationObserver,m=l.document,b=l.process,w=l.Promise,x=p(l,"queueMicrotask"),S=x&&x.value;S||(n=function(){var t,e;for(y&&(t=b.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?a():i=void 0,t}}i=void 0,t&&t.enter()},h||y||d||!g||!m?w&&w.resolve?((c=w.resolve(void 0)).constructor=w,f=c.then,a=function(){f.call(c,n)}):a=y?function(){b.nextTick(n)}:function(){v.call(l,n)}:(u=!0,s=m.createTextNode(""),new g(n).observe(s,{characterData:!0}),a=function(){s.data=u=!u})),t.exports=S||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,a()),i=e}},3366:(t,e,r)=>{var n=r(7854);t.exports=n.Promise},133:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,e,r)=>{var n=r(7854),o=r(2788),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},8523:(t,e,r)=>{"use strict";var n=r(3099),o=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n})),this.resolve=n(e),this.reject=n(r)};t.exports.f=function(t){return new o(t)}},30:(t,e,r)=>{var n,o=r(9670),i=r(6048),a=r(748),u=r(3501),s=r(490),c=r(317),f=r(6200)("IE_PROTO"),l=function(){},p=function(t){return"<script>"+t+"<\/script>"},v=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;v=n?function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=c("iframe")).style.display="none",s.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var r=a.length;r--;)delete v.prototype[a[r]];return v()};u[f]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(l.prototype=o(t),r=new l,l.prototype=null,r[f]=t):r=v(),void 0===e?r:i(r,e)}},6048:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9670),a=r(1956);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=a(e),u=n.length,s=0;u>s;)o.f(t,r=n[s++],e[r]);return t}},3070:(t,e,r)=>{var n=r(9781),o=r(4664),i=r(9670),a=r(7593),u=Object.defineProperty;e.f=n?u:function(t,e,r){if(i(t),e=a(e,!0),i(r),o)try{return u(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(5296),i=r(9114),a=r(5656),u=r(7593),s=r(6656),c=r(4664),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=a(t),e=u(e,!0),c)try{return f(t,e)}catch(t){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},9518:(t,e,r)=>{var n=r(6656),o=r(7908),i=r(6200),a=r(8544),u=i("IE_PROTO"),s=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),n(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},6324:(t,e,r)=>{var n=r(6656),o=r(5656),i=r(1318).indexOf,a=r(3501);t.exports=function(t,e){var r,u=o(t),s=0,c=[];for(r in u)!n(a,r)&&n(u,r)&&c.push(r);for(;e.length>s;)n(u,r=e[s++])&&(~i(c,r)||c.push(r));return c}},1956:(t,e,r)=>{var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},7674:(t,e,r)=>{var n=r(9670),o=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,i){return n(r),o(i),e?t.call(r,i):r.__proto__=i,r}}():void 0)},288:(t,e,r)=>{"use strict";var n=r(1694),o=r(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},3887:(t,e,r)=>{var n=r(5005),o=r(8006),i=r(5181),a=r(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},857:(t,e,r)=>{var n=r(7854);t.exports=n},2534:t=>{t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},9478:(t,e,r)=>{var n=r(9670),o=r(111),i=r(8523);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},2248:(t,e,r)=>{var n=r(1320);t.exports=function(t,e,r){for(var o in e)n(t,o,e[o],r);return t}},1320:(t,e,r)=>{var n=r(7854),o=r(8880),i=r(6656),a=r(3505),u=r(2788),s=r(9909),c=s.get,f=s.enforce,l=String(String).split("String");(t.exports=function(t,e,r,u){var s,c=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),(s=f(r)).source||(s.source=l.join("string"==typeof e?e:""))),t!==n?(c?!v&&t[e]&&(p=!0):delete t[e],p?t[e]=r:o(t,e,r)):p?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||u(this)}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=r(8880);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},6340:(t,e,r)=>{"use strict";var n=r(5005),o=r(3070),i=r(5112),a=r(9781),u=i("species");t.exports=function(t){var e=n(t),r=o.f;a&&e&&!e[u]&&r(e,u,{configurable:!0,get:function(){return this}})}},8003:(t,e,r)=>{var n=r(3070).f,o=r(6656),i=r(5112)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.15.0",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6707:(t,e,r)=>{var n=r(9670),o=r(3099),i=r(5112)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||null==(r=n(a)[i])?e:o(r)}},8710:(t,e,r)=>{var n=r(9958),o=r(4488),i=function(t){return function(e,r){var i,a,u=String(o(e)),s=n(r),c=u.length;return s<0||s>=c?t?"":void 0:(i=u.charCodeAt(s))<55296||i>56319||s+1===c||(a=u.charCodeAt(s+1))<56320||a>57343?t?u.charAt(s):i:t?u.slice(s,s+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},261:(t,e,r)=>{var n,o,i,a=r(7854),u=r(7293),s=r(9974),c=r(490),f=r(317),l=r(6833),p=r(5268),v=a.location,h=a.setImmediate,d=a.clearImmediate,y=a.process,g=a.MessageChannel,m=a.Dispatch,b=0,w={},x=function(t){if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}},S=function(t){return function(){x(t)}},E=function(t){x(t.data)},P=function(t){a.postMessage(t+"",v.protocol+"//"+v.host)};h&&d||(h=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return w[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},n(b),b},d=function(t){delete w[t]},p?n=function(t){y.nextTick(S(t))}:m&&m.now?n=function(t){m.now(S(t))}:g&&!l?(i=(o=new g).port2,o.port1.onmessage=E,n=s(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts&&v&&"file:"!==v.protocol&&!u(P)?(n=P,a.addEventListener("message",E,!1)):n="onreadystatechange"in f("script")?function(t){c.appendChild(f("script")).onreadystatechange=function(){c.removeChild(this),x(t)}}:function(t){setTimeout(S(t),0)}),t.exports={set:h,clear:d}},1400:(t,e,r)=>{var n=r(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9958:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},7466:(t,e,r)=>{var n=r(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(4488);t.exports=function(t){return Object(n(t))}},7593:(t,e,r)=>{var n=r(111);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1694:(t,e,r)=>{var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},9711:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(6656),a=r(9711),u=r(133),s=r(3307),c=o("wks"),f=n.Symbol,l=s?f:f&&f.withoutSetter||a;t.exports=function(t){return i(c,t)&&(u||"string"==typeof c[t])||(u&&i(f,t)?c[t]=f[t]:c[t]=l("Symbol."+t)),c[t]}},9170:(t,e,r)=>{"use strict";var n=r(2109),o=r(9518),i=r(7674),a=r(30),u=r(8880),s=r(9114),c=r(408),f=function(t,e){var r=this;if(!(r instanceof f))return new f(t,e);i&&(r=i(new Error(void 0),o(r))),void 0!==e&&u(r,"message",String(e));var n=[];return c(t,n.push,{that:n}),u(r,"errors",n),r};f.prototype=a(Error.prototype,{constructor:s(5,f),message:s(5,""),name:s(5,"AggregateError")}),n({global:!0},{AggregateError:f})},6992:(t,e,r)=>{"use strict";var n=r(5656),o=r(1223),i=r(7497),a=r(9909),u=r(654),s="Array Iterator",c=a.set,f=a.getterFor(s);t.exports=u(Array,"Array",(function(t,e){c(this,{type:s,target:n(t),index:0,kind:e})}),(function(){var t=f(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},1539:(t,e,r)=>{var n=r(1694),o=r(1320),i=r(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},7922:(t,e,r)=>{"use strict";var n=r(2109),o=r(3099),i=r(8523),a=r(2534),u=r(408);n({target:"Promise",stat:!0},{allSettled:function(t){var e=this,r=i.f(e),n=r.resolve,s=r.reject,c=a((function(){var r=o(e.resolve),i=[],a=0,s=1;u(t,(function(t){var o=a++,u=!1;i.push(void 0),s++,r.call(e,t).then((function(t){u||(u=!0,i[o]={status:"fulfilled",value:t},--s||n(i))}),(function(t){u||(u=!0,i[o]={status:"rejected",reason:t},--s||n(i))}))})),--s||n(i)}));return c.error&&s(c.value),r.promise}})},4668:(t,e,r)=>{"use strict";var n=r(2109),o=r(3099),i=r(5005),a=r(8523),u=r(2534),s=r(408),c="No one promise resolved";n({target:"Promise",stat:!0},{any:function(t){var e=this,r=a.f(e),n=r.resolve,f=r.reject,l=u((function(){var r=o(e.resolve),a=[],u=0,l=1,p=!1;s(t,(function(t){var o=u++,s=!1;a.push(void 0),l++,r.call(e,t).then((function(t){s||p||(p=!0,n(t))}),(function(t){s||p||(s=!0,a[o]=t,--l||f(new(i("AggregateError"))(a,c)))}))})),--l||f(new(i("AggregateError"))(a,c))}));return l.error&&f(l.value),r.promise}})},7727:(t,e,r)=>{"use strict";var n=r(2109),o=r(1913),i=r(3366),a=r(7293),u=r(5005),s=r(6707),c=r(9478),f=r(1320);if(n({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=s(this,u("Promise")),r="function"==typeof t;return this.then(r?function(r){return c(e,t()).then((function(){return r}))}:t,r?function(r){return c(e,t()).then((function(){throw r}))}:t)}}),!o&&"function"==typeof i){var l=u("Promise").prototype.finally;i.prototype.finally!==l&&f(i.prototype,"finally",l,{unsafe:!0})}},8674:(t,e,r)=>{"use strict";var n,o,i,a,u=r(2109),s=r(1913),c=r(7854),f=r(5005),l=r(3366),p=r(1320),v=r(2248),h=r(7674),d=r(8003),y=r(6340),g=r(111),m=r(3099),b=r(5787),w=r(2788),x=r(408),S=r(7072),E=r(6707),P=r(261).set,T=r(5948),_=r(9478),k=r(842),I=r(8523),O=r(2534),j=r(9909),A=r(4705),C=r(5112),M=r(7871),L=r(5268),N=r(7392),U=C("species"),R="Promise",F=j.get,H=j.set,z=j.getterFor(R),D=l&&l.prototype,B=l,K=D,Z=c.TypeError,G=c.document,V=c.process,q=I.f,X=q,W=!!(G&&G.createEvent&&c.dispatchEvent),Y="function"==typeof PromiseRejectionEvent,J="unhandledrejection",Q=!1,$=A(R,(function(){var t=w(B)!==String(B);if(!t&&66===N)return!0;if(s&&!K.finally)return!0;if(N>=51&&/native code/.test(B))return!1;var e=new B((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))};return(e.constructor={})[U]=r,!(Q=e.then((function(){}))instanceof r)||!t&&M&&!Y})),tt=$||!S((function(t){B.all(t).catch((function(){}))})),et=function(t){var e;return!(!g(t)||"function"!=typeof(e=t.then))&&e},rt=function(t,e){if(!t.notified){t.notified=!0;var r=t.reactions;T((function(){for(var n=t.value,o=1==t.state,i=0;r.length>i;){var a,u,s,c=r[i++],f=o?c.ok:c.fail,l=c.resolve,p=c.reject,v=c.domain;try{f?(o||(2===t.rejection&&at(t),t.rejection=1),!0===f?a=n:(v&&v.enter(),a=f(n),v&&(v.exit(),s=!0)),a===c.promise?p(Z("Promise-chain cycle")):(u=et(a))?u.call(a,l,p):l(a)):p(n)}catch(t){v&&!s&&v.exit(),p(t)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ot(t)}))}},nt=function(t,e,r){var n,o;W?((n=G.createEvent("Event")).promise=e,n.reason=r,n.initEvent(t,!1,!0),c.dispatchEvent(n)):n={promise:e,reason:r},!Y&&(o=c["on"+t])?o(n):t===J&&k("Unhandled promise rejection",r)},ot=function(t){P.call(c,(function(){var e,r=t.facade,n=t.value;if(it(t)&&(e=O((function(){L?V.emit("unhandledRejection",n,r):nt(J,r,n)})),t.rejection=L||it(t)?2:1,e.error))throw e.value}))},it=function(t){return 1!==t.rejection&&!t.parent},at=function(t){P.call(c,(function(){var e=t.facade;L?V.emit("rejectionHandled",e):nt("rejectionhandled",e,t.value)}))},ut=function(t,e,r){return function(n){t(e,n,r)}},st=function(t,e,r){t.done||(t.done=!0,r&&(t=r),t.value=e,t.state=2,rt(t,!0))},ct=function(t,e,r){if(!t.done){t.done=!0,r&&(t=r);try{if(t.facade===e)throw Z("Promise can't be resolved itself");var n=et(e);n?T((function(){var r={done:!1};try{n.call(e,ut(ct,r,t),ut(st,r,t))}catch(e){st(r,e,t)}})):(t.value=e,t.state=1,rt(t,!1))}catch(e){st({done:!1},e,t)}}};if($&&(K=(B=function(t){b(this,B,R),m(t),n.call(this);var e=F(this);try{t(ut(ct,e),ut(st,e))}catch(t){st(e,t)}}).prototype,(n=function(t){H(this,{type:R,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(K,{then:function(t,e){var r=z(this),n=q(E(this,B));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=L?V.domain:void 0,r.parent=!0,r.reactions.push(n),0!=r.state&&rt(r,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n,e=F(t);this.promise=t,this.resolve=ut(ct,e),this.reject=ut(st,e)},I.f=q=function(t){return t===B||t===i?new o(t):X(t)},!s&&"function"==typeof l&&D!==Object.prototype)){a=D.then,Q||(p(D,"then",(function(t,e){var r=this;return new B((function(t,e){a.call(r,t,e)})).then(t,e)}),{unsafe:!0}),p(D,"catch",K.catch,{unsafe:!0}));try{delete D.constructor}catch(t){}h&&h(D,K)}u({global:!0,wrap:!0,forced:$},{Promise:B}),d(B,R,!1,!0),y(R),i=f(R),u({target:R,stat:!0,forced:$},{reject:function(t){var e=q(this);return e.reject.call(void 0,t),e.promise}}),u({target:R,stat:!0,forced:s||$},{resolve:function(t){return _(s&&this===i?B:this,t)}}),u({target:R,stat:!0,forced:tt},{all:function(t){var e=this,r=q(e),n=r.resolve,o=r.reject,i=O((function(){var r=m(e.resolve),i=[],a=0,u=1;x(t,(function(t){var s=a++,c=!1;i.push(void 0),u++,r.call(e,t).then((function(t){c||(c=!0,i[s]=t,--u||n(i))}),o)})),--u||n(i)}));return i.error&&o(i.value),r.promise},race:function(t){var e=this,r=q(e),n=r.reject,o=O((function(){var o=m(e.resolve);x(t,(function(t){o.call(e,t).then(r.resolve,n)}))}));return o.error&&n(o.value),r.promise}})},8783:(t,e,r)=>{"use strict";var n=r(8710).charAt,o=r(9909),i=r(654),a="String Iterator",u=o.set,s=o.getterFor(a);i(String,"String",(function(t){u(this,{type:a,string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},3948:(t,e,r)=>{var n=r(7854),o=r(8324),i=r(6992),a=r(8880),u=r(5112),s=u("iterator"),c=u("toStringTag"),f=i.values;for(var l in o){var p=n[l],v=p&&p.prototype;if(v){if(v[s]!==f)try{a(v,s,f)}catch(t){v[s]=f}if(v[c]||a(v,c,l),o[l])for(var h in i)if(v[h]!==i[h])try{a(v,h,i[h])}catch(t){v[h]=i[h]}}}},1150:(t,e,r)=>{var n=r(7633);t.exports=n},3200:(t,e)=>{"use strict";e.__esModule=!0,e.DEFAULT_API_HOST=e.DEFAULT_RETRIES=e.MAX_CHUNK_SIZE=e.DEFAULT_CHUNK_SIZE=e.MIN_CHUNK_SIZE=void 0,e.MIN_CHUNK_SIZE=5242880,e.DEFAULT_CHUNK_SIZE=52428800,e.MAX_CHUNK_SIZE=134217728,e.DEFAULT_RETRIES=5,e.DEFAULT_API_HOST="ws.api.video"},3607:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]});e.__esModule=!0,e.MAX_CHUNK_SIZE=e.MIN_CHUNK_SIZE=e.ProgressiveUploader=e.VideoUploader=void 0,n(e,r(3368),"VideoUploader"),n(e,r(9213),"ProgressiveUploader");var o=r(3200);n(e,o,"MIN_CHUNK_SIZE"),n(e,o,"MAX_CHUNK_SIZE")},9213:function(t,e,r){"use strict";var n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{s(n.next(t))}catch(t){i(t)}}function u(t){try{s(n.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,u)}s((n=n.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};e.__esModule=!0,e.ProgressiveUploader=void 0;var i=r(3200),a=function(){function t(t){this.onProgressCallbacks=[],this.headers={},this.currentPartNum=1,this.currentPartBlobs=[],this.currentPartBlobsSize=0;var e=t.apiHost||i.DEFAULT_API_HOST;if(t.hasOwnProperty("uploadToken")){var r=t;r.videoId&&(this.videoId=r.videoId),this.uploadEndpoint="https://"+e+"/upload?token="+r.uploadToken}else{if(!t.hasOwnProperty("accessToken"))throw new Error("You must provide either an accessToken or an uploadToken");var n=t;if(!n.videoId)throw new Error("'videoId' is missing");this.uploadEndpoint="https://"+e+"/videos/"+n.videoId+"/source",this.headers.Authorization="Bearer "+n.accessToken}this.retries=t.retries||i.DEFAULT_RETRIES}return t.prototype.onProgress=function(t){this.onProgressCallbacks.push(t)},t.prototype.uploadPart=function(t){var e=this;if(this.currentPartBlobsSize+=t.size,this.currentPartBlobs.push(t),this.currentPartBlobsSize>=i.MIN_CHUNK_SIZE){var r=this.upload(new Blob(this.currentPartBlobs)).then((function(t){e.videoId=t.videoId}));return this.currentPartBlobs=[],this.currentPartBlobsSize=0,r}return Promise.resolve()},t.prototype.uploadLastPart=function(t){return this.currentPartBlobs.push(t),this.upload(new Blob(this.currentPartBlobs),!0)},t.prototype.createFormData=function(t){var e=t,r=new FormData;return this.videoId&&r.append("videoId",this.videoId),r.append("file",e,"file"),r},t.prototype.sleep=function(t){return new Promise((function(e,r){setTimeout((function(){return e()}),t)}))},t.prototype.upload=function(t,e){var r=this;return void 0===e&&(e=!1),new Promise((function(i,a){return n(r,void 0,void 0,(function(){var n,u,s,c;return o(this,(function(o){switch(o.label){case 0:u=0,s=this.currentPartNum,this.currentPartNum++,o.label=1;case 1:o.label=2;case 2:return o.trys.push([2,4,,6]),[4,(f=s,new Promise((function(n,o){var i=t.size,a="part "+f+"/"+(e?f:"*"),u=new window.XMLHttpRequest;u.open("POST",""+r.uploadEndpoint,!0),u.setRequestHeader("Content-Range",a);for(var s=0,c=Object.keys(r.headers);s<c.length;s++){var l=c[s];u.setRequestHeader(l,r.headers[l])}u.onreadystatechange=function(t){4===u.readyState&&u.status>=400&&o({status:u.status,message:u.response})},u.onload=function(t){return n(JSON.parse(u.response))},u.upload.onprogress=function(t){return r.onProgressCallbacks.forEach((function(e){return e({uploadedBytes:t.loaded,totalBytes:i})}))},u.send(r.createFormData(t))})))];case 3:return n=o.sent(),i(n),[2];case 4:return c=o.sent(),u>=this.retries?(a(c),[2]):[4,this.sleep(200+500*u)];case 5:return o.sent(),u++,[3,6];case 6:return[3,1];case 7:return[2]}var f}))}))}))},t}();e.ProgressiveUploader=a},3368:function(t,e,r){"use strict";var n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{s(n.next(t))}catch(t){i(t)}}function u(t){try{s(n.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,u)}s((n=n.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};e.__esModule=!0,e.VideoUploader=void 0;var i=r(3200),a=function(){function t(t){this.currentChunk=0,this.onProgressCallbacks=[],this.headers={};var e=t.apiHost||i.DEFAULT_API_HOST;if(!t.file)throw new Error("'file' is missing");if(t.hasOwnProperty("uploadToken")){var r=t;r.videoId&&(this.videoId=r.videoId),this.uploadEndpoint="https://"+e+"/upload?token="+r.uploadToken}else{if(!t.hasOwnProperty("accessToken"))throw new Error("You must provide either an accessToken or an uploadToken");var n=t;if(!n.videoId)throw new Error("'videoId' is missing");this.uploadEndpoint="https://"+e+"/videos/"+n.videoId+"/source",this.headers.Authorization="Bearer "+n.accessToken}if(t.chunkSize&&(t.chunkSize<i.MIN_CHUNK_SIZE||t.chunkSize>i.MAX_CHUNK_SIZE))throw new Error("Invalid chunk size. Minimal allowed value: "+i.MIN_CHUNK_SIZE/1024/1024+"MB, maximum allowed value: "+i.MAX_CHUNK_SIZE/1024/1024+"MB.");this.chunkSize=t.chunkSize||i.DEFAULT_CHUNK_SIZE,this.retries=t.retries||i.DEFAULT_RETRIES,this.file=t.file,this.fileSize=this.file.size,this.fileName=this.file.name,this.chunksCount=Math.ceil(this.fileSize/this.chunkSize)}return t.prototype.onProgress=function(t){this.onProgressCallbacks.push(t)},t.prototype.upload=function(){var t=this;return new Promise((function(e,r){return n(t,void 0,void 0,(function(){var t,n,i;return o(this,(function(o){switch(o.label){case 0:n=0,o.label=1;case 1:if(!(this.currentChunk<this.chunksCount))return[3,7];o.label=2;case 2:return o.trys.push([2,4,,6]),[4,this.uploadCurrentChunk()];case 3:return t=o.sent(),this.videoId=t.videoId,this.currentChunk++,[3,6];case 4:return i=o.sent(),n>=this.retries?(r(i),[2]):[4,this.sleep(200+500*n)];case 5:return o.sent(),n++,[3,6];case 6:return[3,1];case 7:return e(t),[2]}}))}))}))},t.prototype.sleep=function(t){return new Promise((function(e,r){setTimeout((function(){return e()}),t)}))},t.prototype.createFormData=function(t,e){var r=this.file.slice(t,e),n=new FormData;return this.videoId&&n.append("videoId",this.videoId),n.append("file",r,this.fileName),n},t.prototype.uploadCurrentChunk=function(){var t=this;return new Promise((function(e,r){var n=t.currentChunk*t.chunkSize,o=(t.currentChunk+1)*t.chunkSize,i=o>t.fileSize?t.fileSize:o,a=Math.ceil(t.fileSize/t.chunkSize),u="part "+(t.currentChunk+1)+"/"+a,s=new window.XMLHttpRequest;s.open("POST",""+t.uploadEndpoint,!0),s.setRequestHeader("Content-Range",u);for(var c=0,f=Object.keys(t.headers);c<f.length;c++){var l=f[c];s.setRequestHeader(l,t.headers[l])}s.onreadystatechange=function(t){4===s.readyState&&s.status>=400&&r({status:s.status,message:s.response})},s.onload=function(t){return e(JSON.parse(s.response))},s.upload.onprogress=function(e){return t.onProgressCallbacks.forEach((function(r){return r({uploadedBytes:e.loaded+n,totalBytes:t.fileSize,chunksCount:t.chunksCount,chunksBytes:t.chunkSize,currentChunk:t.currentChunk+1,currentChunkUploadedBytes:e.loaded})}))},s.send(t.createFormData(n,i))}))},t}();e.VideoUploader=a}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}return r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r(1150),r(3607)})()}));