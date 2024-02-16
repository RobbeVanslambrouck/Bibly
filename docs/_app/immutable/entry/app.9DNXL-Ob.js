var D=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var i=(r,e,t)=>(D(r,e,"read from private field"),t?t.call(r):e.get(r)),w=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},I=(r,e,t,o)=>(D(r,e,"write to private field"),o?o.call(r,t):e.set(r,t),t);import{e as N,d as W,f as R,g as z,u as F,h as p,j as x,t as G,p as H,k as P}from"../chunks/runtime.Dy0AeBYV.js";import{j as J,p as K,k as L,c as E,l as C,m as Q,n as V,o as X,b as y,s as j,f as O,q as Y,a as Z,r as $,u as S,d as q}from"../chunks/disclose-version.DDGIsoia.js";import{o as ee}from"../chunks/main-client.Czj9vjKq.js";function te(r){return class extends re{constructor(e){super({component:r,...e})}}}var f,m;class re{constructor(e){w(this,f,{});w(this,m,void 0);I(this,m,J(e.component,{target:e.target,props:{...e.props,$$events:i(this,f)},context:e.context,intro:e.intro,recover:e.recover}));for(const t of Object.keys(i(this,m)))t==="$set"||t==="$destroy"||N(this,t,{get(){return i(this,m)[t]},set(o){i(this,m)[t]=o},enumerable:!0})}$set(e){i(this,m).$set(e)}$on(e,t){i(this,f)[e]=i(this,f)[e]||[];const o=(...c)=>t.call(this,...c);return i(this,f)[e].push(o),()=>{i(this,f)[e]=i(this,f)[e].filter(c=>c!==o)}}$destroy(){i(this,m).$destroy()}}f=new WeakMap,m=new WeakMap;const se="modulepreload",ne=function(r,e){return new URL(r,e).href},B={},b=function(e,t,o){let c=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link");c=Promise.all(t.map(s=>{if(s=ne(s,o),s in B)return;B[s]=!0;const _=s.endsWith(".css"),g=_?'[rel="stylesheet"]':"";if(!!o)for(let n=l.length-1;n>=0;n--){const a=l[n];if(a.href===s&&(!_||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${g}`))return;const u=document.createElement("link");if(u.rel=_?"stylesheet":se,_||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),_)return new Promise((n,a)=>{u.addEventListener("load",n),u.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${s}`)))})}))}return c.then(()=>e()).catch(l=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l})},me={};var oe=q('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),ae=q("<!> <!>",!0);function ie(r,e){W(e,!0);let t=R(e,"components",11,()=>[]),o=R(e,"data_0",3,null),c=R(e,"data_1",3,null);z(()=>e.stores.page.set(e.page)),F(()=>{e.stores,e.page,e.constructors,t(),e.form,o(),c(),e.stores.page.notify()});let l=P(!1),s=P(!1),_=P(null);ee(()=>{const n=e.stores.page.subscribe(()=>{p(l)&&(x(s,!0),G().then(()=>{x(_,K(document.title||"untitled page"))}))});return x(l,!0),n});var g=X(r,!0,ae),k=y(g),u=j(j(k,!0));L(k,()=>e.constructors[1],n=>{var a=O(n),h=y(a);C(h,()=>e.constructors[0],v=>{S(v(h,{get data(){return o()},children:(d,ce)=>{var T=O(d),A=y(T);C(A,()=>e.constructors[1],U=>{S(U(A,{get data(){return c()},get form(){return e.form}}),M=>t()[1]=M)}),E(d,T)}}),d=>t()[0]=d)}),E(n,a)},n=>{var a=O(n),h=y(a);C(h,()=>e.constructors[0],v=>{S(v(h,{get data(){return o()},get form(){return e.form}}),d=>t()[0]=d)}),E(n,a)}),L(u,()=>p(l),n=>{var a=Y(n,!0,oe),h=Z(a);L(h,()=>p(s),v=>{var d=$(v);Q(d,()=>p(_)),V(v,d)},null),V(n,a)},null),E(r,g),H()}const _e=te(ie),he=[()=>b(()=>import("../nodes/0.S3CbKkeI.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>b(()=>import("../nodes/1.BACWOPeQ.js"),__vite__mapDeps([4,1,2,5]),import.meta.url),()=>b(()=>import("../nodes/2.EnGvNNij.js"),__vite__mapDeps([6,1,2,7,8]),import.meta.url),()=>b(()=>import("../nodes/3.DgoV_GeQ.js"),__vite__mapDeps([9,1,2,10,7,11]),import.meta.url)],ve=[],ge={"/":[2],"/reader/[index]":[3]},pe={handleError:({error:r})=>{console.error(r)},reroute:()=>{}};export{ge as dictionary,pe as hooks,me as matchers,he as nodes,_e as root,ve as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.S3CbKkeI.js","../chunks/disclose-version.DDGIsoia.js","../chunks/runtime.Dy0AeBYV.js","../assets/0.C4um5RT0.css","../nodes/1.BACWOPeQ.js","../chunks/entry.CSFzch87.js","../nodes/2.EnGvNNij.js","../chunks/globals.Igp0um5e.js","../assets/2.un_UB2Nx.css","../nodes/3.DgoV_GeQ.js","../chunks/main-client.Czj9vjKq.js","../assets/3.BanNRZd6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}