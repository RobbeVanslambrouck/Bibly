const fe=()=>{};function an(e){return typeof(e==null?void 0:e.then)=="function"}function se(e){for(var n=0;n<e.length;n++)e[n]()}function $(e){return e()}function je(e,n,t){if(e==null)return n(void 0),t&&t(void 0),fe;const r=e.subscribe(n,t);return r.unsubscribe?()=>r.unsubscribe():r}var he=Array.isArray,dn=Array.from,pn=Object.keys,hn=Object.assign,vn=Object.isFrozen,En=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,He=Object.getOwnPropertyDescriptors,bn=Object.prototype,yn=Array.prototype,mn=Object.getPrototypeOf;const On=1,kn=2,Tn=4,An=8,In=64,ge=1,Be=4,Ke=8,Cn=["touchstart","touchmove","touchend"],Ye=0,ve=1,Ee=2,Ve=3,ze=4,We=7,Ze=9;function Sn(e){return{d:null,e:null,i:e,p:null,r:null,t:Ye}}function wn(){return{a:null,ae:null,c:null,ce:null,d:null,e:null,p:E,r:null,t:ve,v:!1}}function Rn(){return{d:null,e:null,p:E,r:null,t:We}}function Ln(){return{d:null,e:null,p:E,n:!0,r:null,t:ze}}function Nn(e,n){return{a:n,d:null,f:e,v:[],e:null,p:E,r:null,s:[],t:Ee}}function Dn(e,n,t){return{a:null,d:null,e:null,i:n,k:t,v:e,p:E,r:null,s:null,t:Ve}}function Pn(){return{d:null,p:E,e:null,r:null,t:Ze}}const be=1,U=2,G=4,R=8,P=16,L=64,q=128,O=256,m=512,H=1024,ne=2048,X=4096,J=G|R|P,ye=0,Ge=1,V=Symbol();let Y=ye,z=!1,W=!1,me=!1,S=!1,a=[],N=[],te=[],de=[],g=0,k=null,f=null,v=null,_=0,I=null,C=!1,re=!1,M=!1,E=null,d=null,ee=!1;function Z(e){const n=e||d;return n!==null&&n.r}function Oe(e,n){return e===n}function Xe(e,n){return{c:null,e:Oe,f:e,v:n}}function ke(e,n,t){return{b:t,c:null,d:null,e:null,f:e,l:0,i:null,r:null,v:n,x:null,y:null}}function Te(e,n){const t=e.r;t===null?e.r=[n]:t.push(n)}function oe(e){const n=e.f;if(n&m||e.v===V)return!0;if(n&H){const t=e.d;if(t!==null){const r=t.length;let c;for(c=0;c<r;c++){const u=t[c];if(u.f&H&&!oe(u)){T(u,O);continue}if(u.f&m)if(u.f&U){if(Le(u,!0),e.f&m)return!0}else return!0}}}return!1}function Ae(e){const n=e.i,t=e.f,r=v,c=_,u=I,h=k,o=E,s=d,b=M,y=(t&P)!==0,K=C;v=null,_=0,I=null,k=e,E=e.b,d=e.x,M=!S&&(t&q)!==0,C=!1;try{let p;y?p=n(e.b,e):p=n();let l=e.d;if(v!==null){let i;if(l!==null){const x=l.length,A=_===0?v:l.slice(0,_).concat(v),ae=A.length>16&&x-_>1?new Set(A):null;for(i=_;i<x;i++){const Q=l[i];(ae!==null?!ae.has(Q):!A.includes(Q))&&Ie(e,Q)}}if(l!==null&&_>0)for(l.length=_+v.length,i=0;i<v.length;i++)l[_+i]=v[i];else e.d=l=v;if(!M)for(i=_;i<l.length;i++){const x=l[i],A=x.c;A===null?x.c=[e]:A[A.length-1]!==e&&A.push(e)}}else l!==null&&_<l.length&&(le(e,_),l.length=_);return p}finally{v=r,_=c,I=u,k=h,E=o,d=s,M=b,C=K}}function Ie(e,n){const t=n.c;let r=0;if(t!==null){r=t.length-1;const c=t.indexOf(e);c!==-1&&(r===0?n.c=null:(t[c]=t[r],t.pop()))}r===0&&n.f&q&&(T(n,m),le(n,0))}function le(e,n){const t=e.d;if(t!==null){const r=n===0?null:t.slice(0,n);let c;for(c=n;c<t.length;c++){const u=t[c];(r===null||!r.includes(u))&&Ie(e,u)}}}function ie(e){const n=e.r;if(e.r=null,n!==null){let t;for(t=0;t<n.length;t++)rn(n[t])}}function Je(e,n){if(e!==null)throw n}function Ce(e){if(e.f&X)return;const n=e.v,t=f;f=e;try{ie(e),n!==null&&n();const c=Ae(e);typeof c=="function"&&(e.v=c)}catch(c){const u=e.b;if(u!==null)Je(u,c);else throw c}finally{f=t}const r=e.x;Z(r)&&e.f&R&&a.length>0&&nn(r)}function Se(){if(g>100)throw new Error("ERR_SVELTE_TOO_MANY_UPDATES");g++}function D(e){const n=e.length;if(n>0){Se();const t=S;S=!0;try{let r;for(r=0;r<n;r++){const c=e[r],u=c.f;u&(X|ne)||(oe(c)?(T(c,O),Ce(c)):u&H&&T(c,O))}}finally{S=t}e.length=0}}function Qe(){if(z=!1,g>101)return;const e=a,n=N;a=[],N=[],D(e),D(n),z||(g=0)}function F(e,n){const t=e.f;if(n){const r=S;try{S=!0,Ce(e),T(e,O)}finally{S=r}}else if(Y===ye&&(z||(z=!0,queueMicrotask(Qe))),t&G)N.push(e),t&L||Ne(e,!0);else{const r=a.length;let c=r===0;if(!c){const u=e.l,h=e.b,o=(t&R)!==0;let s,b,y=r;for(;;){if(s=a[--y],s.l<=u){y+1===r?c=!0:(b=(s.f&R)!==0,(s.b!==h||b&&!o)&&y++,a.splice(y,0,e));break}if(y===0){a.unshift(e);break}}}c&&a.push(e)}}function we(){W=!1;const e=te.slice();te=[],se(e)}function $e(){me=!1;const e=de.slice();de=[],se(e)}function qn(e){W||(W=!0,setTimeout(we,0)),te.push(e)}function en(){const e=[];for(let n=0;n<a.length;n++){const t=a[n];t.f&P&&t.x===d&&(e.push(t),a.splice(n,1),n--)}D(e)}function nn(e){const n=[];for(let t=0;t<a.length;t++){const r=a[t];r.f&R&&r.x===e&&(n.push(r),a.splice(t,1),t--)}D(n)}function Re(e){const n=Y,t=a,r=N;try{Se();const c=[],u=[];Y=Ge,a=c,N=u,D(t),D(r),e!==void 0&&e(),(a.length>0||u.length>0)&&Re(),me&&$e(),W&&we(),g=0}finally{Y=n,a=t,N=r}}async function Fn(){await Promise.resolve(),Re()}function Le(e,n){const t=ee;ee=!0,ie(e);const r=Ae(e);ee=t;const c=M||e.f&q?m:O;T(e,c);const u=e.e;u(r,e.v)||(e.v=r,_e(e,m,n))}function xn(e,n,t){let r=t[n];const c=r===void 0;c&&(r={store:null,last_value:null,value:qe(V),unsubscribe:fe},t[n]=r),(c||r.store!==e)&&(r.unsubscribe(),r.store=e??null,r.unsubscribe=tn(e,r.value));const u=w(r.value);return u===V?r.last_value:u}function tn(e,n){return e==null?(ue(n,void 0),fe):je(e,r=>{re=!0,ue(n,r),re=!1})}function Mn(e){ln(()=>{let n;for(n in e)e[n].unsubscribe()})}function w(e){const n=e.f;if(n&X)return e.v;if(k!==null&&!(k.f&L)&&!C){const t=(k.f&q)!==0,r=k.d;v===null&&r!==null&&r[_]===e&&!(t&&f!==null)?_++:(r===null||_===0||r[_-1]!==e)&&(v===null?v=[e]:v.push(e)),I!==null&&f!==null&&f.f&O&&I.includes(e)&&(T(f,m),F(f,!1))}return n&U&&oe(e)&&Le(e,!1),e.v}function ue(e,n){return De(e,n),n}function Ne(e,n,t){const r=e.r;if(r!==null){let c;for(c=0;c<r.length;c++){const u=r[c];u.f&J&&j(u,n,t)}}}function j(e,n,t=new Set){const r=e.f;if((r&ne)!==0!==n){e.f^=ne,!n&&r&J&&!(r&O)&&F(e,!1);const u=e.b;if(u!==null&&!t.has(u)){t.add(u);const h=u.t;if(h===ve){const o=u.e;o!==null&&u!==E&&j(o,n);const s=u.ce;s!==null&&u.v&&j(s,n,t);const b=u.ae;b!==null&&!u.v&&j(b,n,t)}else if(h===Ee){const o=u.v;for(let{e:s}of o)s!==null&&j(s,n,t)}}}Ne(e,n,t)}function _e(e,n,t){const r=Z(null),c=e.c;if(c!==null){const u=c.length;let h;for(h=0;h<u;h++){const o=c[h],s=o.f,b=(s&q)!==0,y=(s&m)!==0;y&&!b||(!t||!r)&&o===f||(T(o,n),(s&O||y&&b)&&(o.f&J?F(o,!1):_e(o,H,t)))}}}function De(e,n){if(!C&&!re&&k!==null&&Z(null)&&k.f&U)throw new Error("ERR_SVELTE_UNSAFE_MUTATION");e.f&be&&!e.e(n,e.v)&&(e.v=n,Z(null)&&f!==null&&f.c===null&&f.f&O&&(v!==null&&v.includes(e)?(T(f,m),F(f,!1)):I===null?I=[e]:I.push(e)),_e(e,m,!0))}function rn(e){const n=e.v,t=e.y,r=e.f;ie(e),le(e,0),e.i=e.r=e.y=e.x=e.b=e.d=e.c=null,T(e,X),t!==null&&(he(t)?se(t):t()),n!==null&&r&J&&n()}function un(e){const t=f===null?U|q:U,r=ke(t|O,V,E);return r.i=e,Pe(r),r.e=Oe,k!==null&&Te(k,r),r}function cn(e){const n=Xe(be|O,e);return Pe(n),n}function Pe(e){if(d===null||!d.r)return;const n=d.d;n?n.push(e):d.d=[e]}function qe(e){const n=cn(e);return n.e=Me,n}function Fe(e){const n=C;try{return C=!0,e()}finally{C=n}}function B(e,n,t,r,c){const u=ke(e|m,null,r);return u.i=n,u.x=d,f!==null&&(u.l=f.l+1,e&L||Te(f,u)),c&&F(u,t),u}function jn(){return f?(f.f&L)===0:!1}function ce(e){if(f===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=f.f&P&&d!==null&&!d.m,t=B(G,e,!1,E,!n);if(n){const r=d;(r.e??(r.e=[])).push(t)}return t}function Un(e){return B(G|L,e,!1,E,!0)}function Hn(e,n){return B(R|L,e,n,E,!0)}function fn(e){if(f===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=f!==null&&(f.f&P)!==0;return B(R,()=>{const t=e();return en(),t},n,E,!0)}function gn(e,n=E,t=!1,r=!0){let c=P;return t&&(c|=L),B(c,e,r,n,!0)}function Bn(e,n){let t=e.y;t===null?e.y=n:he(t)?t.push(n):e.y=[t,n]}const sn=~(m|H|O);function T(e,n){e.f=e.f&sn|n}function on(e){return typeof e=="object"&&e!==null&&typeof e.f=="number"}function Kn(e,n,t,r){var K;var c=(t&ge)!==0,u=(K=Ue(e,n))==null?void 0:K.set,h=e[n];h===void 0&&r!==void 0&&(t&Ke&&(r=r()),h=r,u&&u(h));var o=()=>{var p=e[n];return p!==void 0&&(r=void 0),p===void 0?r:p};if(!(t&Be))return o;if(u)return function(p){return arguments.length===1?(u(p),p):o()};var s=!1,b=qe(h),y=un(()=>{var p=o(),l=w(b);return s?(s=!1,l):b.v=p});return c||(y.e=Me),function(p,l=!1){var i=w(y);return arguments.length>0?((l||(c?p!==i:xe(p,i)))&&(s=!0,ue(b,l?i:p),w(y)),p):i}}function xe(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Me(e,n){return!xe(e,n)}function Yn(e,n=1){const t=w(e);return De(e,t+n),t}function ln(e){ce(()=>()=>Fe(e))}function Vn(e,n=!1){d={a:null,c:null,e:null,m:!1,p:d,d:null,s:e,r:n,u:null}}function zn(e){const n=d;if(n!==null){e!==void 0&&(n.a=e);const t=n.e;if(t!==null){n.e=null;for(let r=0;r<t.length;r++)F(t[r],!1)}d=n.p,n.m=!0}}function pe(e){if(e.d)for(const t of e.d)w(t);const n=He(e.s);for(const t of Object.values(n))t.get&&t.get()}function Wn(){const e=d,n=e.u;n&&(fn(()=>{pe(e),n.b.forEach($)}),ce(()=>{const t=Fe(()=>n.m.map($));return()=>{for(const r of t)typeof r=="function"&&r()}}),ce(()=>{pe(e),n.a.forEach($)}))}function Zn(e){return on(e)?w(e):e}export{hn as $,In as A,qe as B,Zn as C,un as D,Tn as E,vn as F,bn as G,yn as H,Yn as I,ee as J,Ue as K,jn as L,mn as M,qn as N,j as O,Hn as P,Un as Q,se as R,pn as S,Sn as T,V as U,dn as V,Pn as W,E as X,wn as Y,an as Z,Re as _,Fe as a,Cn as a0,Rn as a1,Ln as a2,on as a3,fe as a4,Mn as b,d as c,Vn as d,En as e,Kn as f,fn as g,w as h,Wn as i,ue as j,cn as k,rn as l,he as m,Bn as n,Nn as o,zn as p,An as q,gn as r,xn as s,Fn as t,ce as u,Ce as v,On as w,De as x,kn as y,Dn as z};