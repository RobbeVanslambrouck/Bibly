import{v as A,w as Y,x as ee,y as E,z as le,A as H,B as ae,C as te,D as O,E as j,F as q,n as S,q as M,a as C,t as P,c as L,k as ne,G as se,d as T,f as V,b as N,o as re,s as y,m as oe,i as F,h as ie,H as G}from"../chunks/disclose-version.DDGIsoia.js";import{l as D,r as I,m as ue,E as J,n as fe,o as ce,q as B,v as _e,w as Q,x as K,y as W,z as ve,A as de,B as he,k as U,d as Z,p as $,h as pe,C as be,D as me}from"../chunks/runtime.Dy0AeBYV.js";import{l as w,e as ge}from"../chunks/globals.Igp0um5e.js";function xe(){}function ke(e,a,s,r,t,_,v){const h=(s&B)!==0,n=ce(s,e);let c=null;ee(e,h);let u,b=null,l=null,d=!1;n.r=i=>{const f=c,p=f.s;p.add(i),i.f(()=>{p.delete(i),p.size===0&&f.e!==null&&(f.d!==null&&(A(f.d),f.d=null),D(f.e),f.e=null)})};const o=()=>{const i={d:null,e:null,s:new Set,p:c},f=I(()=>{const p=n.d;p!==null&&(A(p),n.d=null);let m=n.a;(n.f&B)!==0&&(E===null?(m=le(),n.a.appendChild(m)):m=m.firstChild),_(m),i.d=n.d,n.d=null},n,!0);i.e=f,c=i},g=i=>{const f=i.f,p=(f&B)!==0,m=i.a;v(u,i,m,p,t,f,!0,b)},k=I(()=>{var p,m;const i=a();u=ue(i)?i:i==null?[]:Array.from(i),r!==null?b=u.map(r):s&J||u.map(xe);const f=u.length;if(E!==null){const x=((m=(p=E)==null?void 0:p[0])==null?void 0:m.data)==="ssr:each_else";x&&f||!x&&!f?(A(E),H(null),d=!0):x&&E.shift()}if(_!==null){if(f===0){if(n.v.length!==0||l===null){g(n),o();return}}else if(n.v.length===0&&c!==null){const x=c,z=x.s;z.size===0?x.d!==null&&(A(x.d),x.d=null):Y(z,"out")}}l!==null&&_e(l)},n,!1);l=I(g,n,!0),d&&H([]),fe(k,()=>{const i=n.f,f=n.a,p=(i&B)!==0;let m=c;for(;m!==null;){const x=m.d;x!==null&&A(x);const z=m.e;z!==null&&D(z),m=m.p}v([],n,f,p,t,i,!1,b),D(l)}),n.e=k}function ye(e,a,s,r,t){ke(e,a,s,null,r,t,Ee)}function Ee(e,a,s,r,t,_,v){var h=a.v,n=a.s,c=h.length,u=e.length,b=Math.max(c,u),l=0,d,o;if(n.length!==0&&ze(n),u===0)for(d=[],r&&c!==0&&ae(s);l<b;)o=h[l++],R(o,n,v,r);else{var g,k=E!==null;if(d=Array(u),k){for(var i=E,f=i[0];l<b;l++){var p=te(f);if(H(p),!p)break;g=e[l],o=X(g,null,l,t,_),d[l]=o,f=p.at(-1).nextSibling.nextSibling}Ce(i,f)}for(;l<b;l++)l>=c?(g=e[l],o=X(g,null,l,t,_),d[l]=o,Ae(o,s,r,null)):l>=u?(o=h[l],R(o,n,v)):(g=e[l],o=h[l],d[l]=o,Ie(o,g,l,_));k&&E===null&&H([])}a.v=d}function Ce(e,a){if(a!==null){var s=e.indexOf(a);s!==-1&&e.length>s+1&&A(e.slice(s))}}function Ae(e,a,s,r){var t=e.d;return r===null?s?O(t,a,null):O(t,a.parentNode,a):O(t,null,r)}function ze(e){var a=e.length;if(a>0){for(var s=0,r,t;s<a;s++)r=e[s],t=r.r,t!==null&&(r.r=null,R(r,null,!1));e.length=0}}function Ie(e,a,s,r){const t=e.v;r&Q&&K(t,a);const _=e.s,v=(r&W)!==0,h=e.a;_!==null&&r&J&&h!==null&&h(e,_),v?K(e.i,s):e.i=s}function R(e,a,s,r=!1){const t=e.s;if(s&&t!==null){for(let v of t)v.r==="key"&&t.delete(v);if(t.size===0)e.s=null;else{Y(t,"out"),a!==null&&a.push(e);return}}const _=e.d;!r&&_!==null&&A(_),D(e.e)}function X(e,a,s,r,t){const v=(t&Q)===0?e:t&de?U(e):he(e),h=t&W?U(s):s,n=ve(v,h,a),c=I(u=>{r(null,u.v,u.i)},n,!0);return n.e=c,n}const we=!1,Re=Object.freeze(Object.defineProperty({__proto__:null,ssr:we},Symbol.toStringTag,{value:"Module"}));var Te=T("<p> </p> - <p> </p>",!0),Be=T('<img class="svelte-zubad5">'),De=T('<a class="svelte-zubad5"><!></a>');function He(e,a){Z(a,!0);let s=w.books[a.libIndex];var r=M(e,!0,De),t=C(r);j(r,"href",()=>`./reader/${a.libIndex}`),q(t,()=>w.books[a.libIndex].loaded.metadata,null,(_,v)=>{var h=V(_),n=N(h);q(n,()=>s.coverUrl(),c=>{var u=re(c,!0,Te),b=N(u),l=C(b),d=y(y(b,!0)),o=C(d);I(()=>{P(l,v.title),P(o,v.creator)}),L(c,u)},(c,u)=>{var b=V(c),l=N(b);ne(l,()=>u,d=>{var o=M(d,!0,Be);se(o,"src",u),j(o,"alt",()=>`${v.title} cover`),S(d,o)},null),L(c,b)},null),L(_,h)},null),S(e,r),$()}var Se=T("<li><!></li>"),Me=T('<main class="svelte-17e62un"><h1>Bibly</h1> <section><h2> </h2> <ul id="books" class="svelte-17e62un"><!> <div class="book svelte-17e62un" id="drop_zone"><p>Drag one or more epub files to this <i>drop zone</i>.</p></div></ul></section></main>');function je(e,a){Z(a,!0);let s=me(()=>w.books.length);async function r(l){if(!l.dataTransfer)return;let d=l.dataTransfer.files;for(let o=0;o<d.length;o++){const g=d[o];if(g.type!=="application/epub+zip")continue;let k=await g.arrayBuffer(),i=ge(k);w.books.push(i)}}var t=M(e,!0,Me),_=C(t),v=y(y(_,!0)),h=C(v),n=C(h),c=y(y(h,!0)),u=C(c),b=y(y(u,!0));oe(n,()=>`library (${ie(pe(s))})`),ye(u,()=>w.books,65,(l,d,o)=>{var g=M(l,!0,Se),k=C(g);He(k,{libIndex:be(o)}),S(l,g)},null),F("drop",b,G(r),!1),F("dragover",b,G(()=>{}),!1),S(e,t),$()}export{je as component,Re as universal};
