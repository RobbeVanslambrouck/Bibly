import{g as _,h as f,i as m,c as k,a as i,s as r,$ as w,o as x,b as h,d as q}from"../chunks/disclose-version.DDGIsoia.js";import{i as H,p as P,d as j}from"../chunks/runtime.Dy0AeBYV.js";import{o as A}from"../chunks/main-client.Czj9vjKq.js";import{l as M}from"../chunks/globals.Igp0um5e.js";const O=!1,S=({params:a})=>({index:parseInt(a.index)}),U=Object.freeze(Object.defineProperty({__proto__:null,load:S,ssr:O},Symbol.toStringTag,{value:"Module"}));async function T(a,n){n()}async function V(a,n){n()}var z=q('<div id="book"></div> <div id="pageControles" class="svelte-1mqunv8"><button id="prev" type="button" class="svelte-1mqunv8"> </button> <button id="next" type="button" class="svelte-1mqunv8"> </button></div>',!0);function B(a,n){j(n,!1);let e;A(async()=>{let t=M.books[n.data.index];await t.ready,console.log(t.load),e=t.renderTo("book"),await e.display(),e.on("keyup",u)});async function s(){if(e)try{await e.next()}catch{return}}async function l(){if(e)try{await e.prev()}catch{return}}async function u(t){let v=t.key;v==="ArrowRight"&&await s(),v==="ArrowLeft"&&await l()}H();var c=x(a,!0,z),p=h(c),y=r(r(p,!0)),o=i(y),b=i(o);b.nodeValue=f("<");var d=r(r(o,!0)),g=i(d);g.nodeValue=f(">"),m("keyup",w,u,!1),o.__click=[V,l],d.__click=[T,s],k(a,c),P()}_(["click"]);export{B as component,U as universal};