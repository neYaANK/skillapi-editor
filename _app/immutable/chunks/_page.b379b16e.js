import{b as r,i as f,o as c,q as n}from"./store.3e8b4b09.js";import{U as a}from"./index.238df454.js";import{r as i}from"./index.1de1fe79.js";const _=!1;async function b({params:t}){const l=t.id;let o,s;if(t.type=="class"){for(const e of a(c))if(s||(s=e),e.name==l){o=e;break}}else if(t.type=="skill"){for(const e of a(n))if(s||(s=e),e.name==l){o=e;break}}if(o)return r.set(o),f.set(t.type=="class"),{data:o};throw s?i(302,`/${t.type}/${s.name}`):i(302,"/")}const d=Object.freeze(Object.defineProperty({__proto__:null,load:b,ssr:_},Symbol.toStringTag,{value:"Module"}));export{d as _,b as l,_ as s};
