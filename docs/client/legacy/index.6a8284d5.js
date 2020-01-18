import{B as t,C as e,D as n,E as a,a as i,s,F as r,S as o,e as c,I as u,x as l,b as f,d as h,J as d,y as m,f as p,g as v,a9 as g,j as w,w as x,K as y,M as E,N as k,O as G,G as $,t as L,o as C,P as S,L as b,aa as j,A,a3 as T,a5 as I}from"./index.2107e488.js";import{_ as B}from"./index.153ad375.js";import{_ as M}from"./asyncToGenerator.5229e80b.js";import{G as D}from"./GuideContents.9e3a653c.js";function N(t,e,n){var a=t.slice();return a[10]=e[n],a}function R(t){var e,n,a,i,s,r,o,E,k,G,$,L,C=t[10].metadata.title+"",S=t[10].html+"";return{c:function(){e=c("section"),n=c("h2"),a=u(C),i=l(),s=c("small"),r=c("a"),o=u("edit this section"),k=l(),$=l(),this.h()},l:function(t){e=f(t,"SECTION",{id:!0,class:!0});var c=h(e);n=f(c,"H2",{class:!0});var u=h(n);a=d(u,C),i=m(u),s=f(u,"SMALL",{class:!0});var l=h(s);r=f(l,"A",{href:!0,target:!0,rel:!0});var v=h(r);o=d(v,"edit this section"),v.forEach(p),l.forEach(p),u.forEach(p),k=m(c),$=m(c),c.forEach(p),this.h()},h:function(){v(r,"href",E="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+t[10].file),v(r,"target","_blank"),v(r,"rel","nofollow"),v(s,"class","svelte-1pxn4o0"),v(n,"class","svelte-1pxn4o0"),G=new g(S,$),v(e,"id",L=t[10].slug),v(e,"class","svelte-1pxn4o0")},m:function(t,c){w(t,e,c),x(e,n),x(n,a),x(n,i),x(n,s),x(s,r),x(r,o),x(e,k),G.m(e),x(e,$)},p:function(t,n){1&n&&C!==(C=t[10].metadata.title+"")&&y(a,C),1&n&&E!==(E="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+t[10].file)&&v(r,"href",E),1&n&&S!==(S=t[10].html+"")&&G.p(S),1&n&&L!==(L=t[10].slug)&&v(e,"id",L)},d:function(t){t&&p(e)}}}function _(t){var e,n,a,i,s,r,o,u,d;function g(e){t[8].call(null,e)}var y={sections:t[0]};void 0!==t[2]&&(y.activeGuideSection=t[2]);var j=new D({props:y});A.push((function(){return T(j,"activeGuideSection",g)}));for(var B=t[0],M=[],_=0;_<B.length;_+=1)M[_]=R(N(t,B,_));return{c:function(){e=c("meta"),n=c("meta"),a=c("link"),i=l(),s=c("sidebar"),E(j.$$.fragment),o=l(),u=c("div");for(var t=0;t<M.length;t+=1)M[t].c();this.h()},l:function(t){e=f(t,"META",{name:!0,content:!0}),n=f(t,"META",{name:!0,content:!0}),a=f(t,"LINK",{rel:!0,href:!0}),i=m(t),s=f(t,"SIDEBAR",{class:!0});var r=h(s);k(j.$$.fragment,r),r.forEach(p),o=m(t),u=f(t,"DIV",{id:!0,class:!0});for(var c=h(u),l=0;l<M.length;l+=1)M[l].l(c);c.forEach(p),this.h()},h:function(){document.title="LayerCake - Guide",v(e,"name","og:title"),v(e,"content","Layer Cake — Guide"),v(n,"name","twitter:title"),v(n,"content","Layer Cake — Guide"),v(a,"rel","stylesheet"),v(a,"href","hljs.css"),v(s,"class","svelte-1pxn4o0"),v(u,"id","container"),v(u,"class","content svelte-1pxn4o0")},m:function(r,c){x(document.head,e),x(document.head,n),x(document.head,a),w(r,i,c),w(r,s,c),G(j,s,null),w(r,o,c),w(r,u,c);for(var l=0;l<M.length;l+=1)M[l].m(u,null);t[9](u),d=!0},p:function(t,e){var n=$(e,1)[0],a={};if(1&n&&(a.sections=t[0]),!r&&4&n&&(r=!0,a.activeGuideSection=t[2],I((function(){return r=!1}))),j.$set(a),1&n){var i;for(B=t[0],i=0;i<B.length;i+=1){var s=N(t,B,i);M[i]?M[i].p(s,n):(M[i]=R(s),M[i].c(),M[i].m(u,null))}for(;i<M.length;i+=1)M[i].d(1);M.length=B.length}},i:function(t){d||(L(j.$$.fragment,t),d=!0)},o:function(t){C(j.$$.fragment,t),d=!1},d:function(r){p(e),p(n),p(a),r&&p(i),r&&p(s),S(j),r&&p(o),r&&p(u),b(M,r),t[9](null)}}}function q(t){return K.apply(this,arguments)}function K(){return(K=M(B.mark((function t(e){return B.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,e.query,t.abrupt("return",this.fetch("api/guide").then((function(t){return t.json()})).then((function(t){return{sections:t}})));case 2:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function O(t,e,n){var a,i,s=e.sections,r=[],o="introduction",c=[];function u(){if(a){var t=a.getBoundingClientRect().top;r=[].map.call(c,(function(e){return e.getBoundingClientRect().top-t}))}}function l(){for(var t=-window.scrollY,e=c.length;e--;)if(r[e]+t<100){var a=c[e].id;return void(a!==o&&(n(2,i=a),o=a))}}return j((function(){if("undefined"!=typeof window){c=a.querySelectorAll("[id]"),o=window.location.hash.slice(1),n(2,i=o),u(),l(),window.addEventListener("scroll",l,!0),window.addEventListener("resize",u,!0);setTimeout(u,1e3),setTimeout(u,5e3)}})),t.$set=function(t){"sections"in t&&n(0,s=t.sections)},[s,a,i,r,o,c,u,l,function(t){n(2,i=t)},function(t){A[t?"unshift":"push"]((function(){n(1,a=t)}))}]}var z=function(c){function u(t){var o;return e(this,u),o=n(this,a(u).call(this)),i(r(o),t,O,_,s,{sections:0}),o}return t(u,o),u}();export default z;export{q as preload};