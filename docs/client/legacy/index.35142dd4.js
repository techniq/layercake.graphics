import{K as e,L as t,a as n,b as r,i as s,s as i,d as a,S as o,P as c,e as l,t as u,f,h,j as m,k as d,m as p,l as v,o as g,Q as b,p as y,q as w,M as E,g as k,y as C,n as R,r as $,z as L,w as S,u as A,x as T,B as x,R as G,C as D,D as I,T as j,U as B,V as M}from"./client.47df7b71.js";import"@babel/runtime/helpers/esm/classCallCheck";import"@babel/runtime/helpers/esm/assertThisInitialized";import"@babel/runtime/helpers/esm/possibleConstructorReturn";import"@babel/runtime/helpers/esm/getPrototypeOf";import"@babel/runtime/helpers/esm/inherits";import"@babel/runtime/helpers/esm/slicedToArray";import"@babel/runtime/helpers/esm/toConsumableArray";import"@babel/runtime/helpers/esm/typeof";import"@babel/runtime/regenerator";function q(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function z(e,t,n){var r=e.slice();return r[10]=t[n],r}function P(e){var t,n,r,s,i,a,o,c,k,C,R,$,L=e[10].metadata.title+"",S=e[10].html+"";return{c:function(){t=l("section"),n=l("h2"),r=u(L),s=f(),i=l("small"),a=l("a"),o=u("edit this section"),k=f(),R=f(),this.h()},l:function(e){t=h(e,"SECTION",{id:!0,class:!0});var c=m(t);n=h(c,"H2",{class:!0});var l=m(n);r=d(l,L),s=p(l),i=h(l,"SMALL",{class:!0});var u=m(i);a=h(u,"A",{href:!0,target:!0,rel:!0});var f=m(a);o=d(f,"edit this section"),f.forEach(v),u.forEach(v),l.forEach(v),k=p(c),R=p(c),c.forEach(v),this.h()},h:function(){g(a,"href",c="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+e[10].file),g(a,"target","_blank"),g(a,"rel","nofollow"),g(i,"class","svelte-1097mf0"),g(n,"class","svelte-1097mf0"),C=new b(S,R),g(t,"id",$=e[10].slug),g(t,"class","svelte-1097mf0")},m:function(e,c){y(e,t,c),w(t,n),w(n,r),w(n,s),w(n,i),w(i,a),w(a,o),w(t,k),C.m(t),w(t,R)},p:function(e,n){1&n&&L!==(L=e[10].metadata.title+"")&&E(r,L),1&n&&c!==(c="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+e[10].file)&&g(a,"href",c),1&n&&S!==(S=e[10].html+"")&&C.p(S),1&n&&$!==($=e[10].slug)&&g(t,"id",$)},d:function(e){e&&v(t)}}}function K(e){var t,n,r,s,i,a,o,u,d;function b(t){e[8].call(null,t)}var E={sections:e[0]};void 0!==e[2]&&(E.activeGuideSection=e[2]);var G=new c({props:E});j.push((function(){return B(G,"activeGuideSection",b)}));for(var D=e[0],I=[],q=0;q<D.length;q+=1)I[q]=P(z(e,D,q));return{c:function(){t=l("meta"),n=l("meta"),r=l("link"),s=f(),i=l("sidebar"),k(G.$$.fragment),o=f(),u=l("div");for(var e=0;e<I.length;e+=1)I[e].c();this.h()},l:function(e){var a=C('[data-svelte="svelte-1u1w7sg"]',document.head);t=h(a,"META",{name:!0,content:!0}),n=h(a,"META",{name:!0,content:!0}),r=h(a,"LINK",{rel:!0,href:!0}),a.forEach(v),s=p(e),i=h(e,"SIDEBAR",{class:!0});var c=m(i);R(G.$$.fragment,c),c.forEach(v),o=p(e),u=h(e,"DIV",{id:!0,class:!0});for(var l=m(u),f=0;f<I.length;f+=1)I[f].l(l);l.forEach(v),this.h()},h:function(){document.title="LayerCake - Guide",g(t,"name","og:title"),g(t,"content","Layer Cake — Guide"),g(n,"name","twitter:title"),g(n,"content","Layer Cake — Guide"),g(r,"rel","stylesheet"),g(r,"href","hljs.css"),g(i,"class","svelte-1097mf0"),g(u,"id","container"),g(u,"class","content svelte-1097mf0")},m:function(a,c){w(document.head,t),w(document.head,n),w(document.head,r),y(a,s,c),y(a,i,c),$(G,i,null),y(a,o,c),y(a,u,c);for(var l=0;l<I.length;l+=1)I[l].m(u,null);e[9](u),d=!0},p:function(e,t){var n=L(t,1)[0],r={};if(1&n&&(r.sections=e[0]),!a&&4&n&&(a=!0,r.activeGuideSection=e[2],M((function(){return a=!1}))),G.$set(r),1&n){var s;for(D=e[0],s=0;s<D.length;s+=1){var i=z(e,D,s);I[s]?I[s].p(i,n):(I[s]=P(i),I[s].c(),I[s].m(u,null))}for(;s<I.length;s+=1)I[s].d(1);I.length=D.length}},i:function(e){d||(S(G.$$.fragment,e),d=!0)},o:function(e){A(G.$$.fragment,e),d=!1},d:function(a){v(t),v(n),v(r),a&&v(s),a&&v(i),T(G),a&&v(o),a&&v(u),x(I,a),e[9](null)}}}function N(e){return O.apply(this,arguments)}function O(){return(O=e(t.mark((function e(n){return t.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.params,n.query,e.abrupt("return",this.fetch("api/guide").then((function(e){return e.json()})).then((function(e){return{sections:e}})));case 2:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function V(e,t,n){var r,s,i=t.sections,a=[],o="introduction",c=[];function l(){if(r){var e=r.getBoundingClientRect().top;a=[].map.call(c,(function(t){return t.getBoundingClientRect().top-e}))}}function u(){for(var e=-window.scrollY,t=c.length;t--;)if(a[t]+e<100){var r=c[t].id;return void(r!==o&&(n(2,s=r),o=r))}}return G((function(){if("undefined"!=typeof window){c=r.querySelectorAll("[id]"),o=window.location.hash.slice(1),n(2,s=o),l(),u(),window.addEventListener("scroll",u,!0),window.addEventListener("resize",l,!0);setTimeout(l,1e3),setTimeout(l,5e3)}})),e.$set=function(e){"sections"in e&&n(0,i=e.sections)},[i,r,s,a,o,c,l,u,function(e){n(2,s=e)},function(e){j[e?"unshift":"push"]((function(){n(1,r=e)}))}]}var H=function(e){n(l,o);var t,c=(t=l,function(){var e,n=D(t);if(q()){var r=D(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return I(this,e)});function l(e){var t;return r(this,l),t=c.call(this),s(a(t),e,V,K,i,{sections:0}),t}return l}();export default H;export{N as preload};
