var G=Object.defineProperty;var U=(i,n,t)=>n in i?G(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var d=(i,n,t)=>(U(i,typeof n!="symbol"?n+"":n,t),t);import{S as Z,i as B,s as H,e as M,b as N,E as m,g as y,v as Q,d as O,f as W,h as g,a6 as X,G as T,k as D,l as w,m as v,n as _,p as q,C as V,_ as x,J as E,aa as $,L as tt,M as et,N as at,P as A,Z as b,F as st,V as nt,K as ot,U as j}from"./index.562f64e3.js";import{c as it,f as P,a as J}from"./ProInput.5bfda167.js";import{w as F}from"./singletons.ce28ec2f.js";import{J as C,R as z,Y as f}from"./store.83053b62.js";function L(i){let n,t,a,e,s,r,l,h;const p=i[5].default,c=T(p,i,i[4],null);return{c(){n=D("div"),t=D("div"),a=D("div"),c&&c.c(),this.h()},l(o){n=w(o,"DIV",{class:!0,draggable:!0});var u=v(n);t=w(u,"DIV",{class:!0});var Y=v(t);a=w(Y,"DIV",{class:!0});var I=v(a);c&&c.l(I),I.forEach(g),Y.forEach(g),u.forEach(g),this.h()},h(){_(a,"class","wrapper svelte-5e5o83"),_(t,"class","modal-content svelte-5e5o83"),q(t,"--width",i[1]),_(n,"class","backdrop svelte-5e5o83"),_(n,"draggable","true")},m(o,u){N(o,n,u),V(n,t),V(t,a),c&&c.m(a,null),r=!0,l||(h=[x(it.call(null,t)),m(t,"outclick",i[2]),m(t,"click",E(i[6])),m(n,"dragstart",$(E(ot(ct)))),m(n,"touchstart",E(lt),{passive:!0})],l=!0)},p(o,u){c&&c.p&&(!r||u&16)&&tt(c,p,o,o[4],r?at(p,o[4],u,null):et(o[4]),null),u&2&&q(t,"--width",o[1])},i(o){r||(y(c,o),A(()=>{r&&(e||(e=b(t,P,{y:-200},!0)),e.run(1))}),A(()=>{r&&(s||(s=b(n,J,{},!0)),s.run(1))}),r=!0)},o(o){O(c,o),e||(e=b(t,P,{y:-200},!1)),e.run(0),s||(s=b(n,J,{},!1)),s.run(0),r=!1},d(o){o&&g(n),c&&c.d(o),o&&e&&e.end(),o&&s&&s.end(),l=!1,st(h)}}}function rt(i){let n,t,a,e,s=i[0]&&L(i);return{c(){s&&s.c(),n=M()},l(r){s&&s.l(r),n=M()},m(r,l){s&&s.m(r,l),N(r,n,l),t=!0,a||(e=m(window,"keyup",i[3]),a=!0)},p(r,[l]){r[0]?s?(s.p(r,l),l&1&&y(s,1)):(s=L(r),s.c(),y(s,1),s.m(n.parentNode,n)):s&&(Q(),O(s,1,1,()=>{s=null}),W())},i(r){t||(y(s),t=!0)},o(r){O(s),t=!1},d(r){s&&s.d(r),r&&g(n),a=!1,e()}}}const ct=()=>!0,lt=()=>!0;function ut(i,n,t){let{$$slots:a={},$$scope:e}=n,{width:s="auto"}=n,{open:r=!1}=n;const l=X(),h=o=>{var u;t(0,r=!1),l("close"),(u=o==null?void 0:o.detail)==null||u.stopPropagation()},p=o=>{o.key=="Escape"&&(o.preventDefault(),o.stopPropagation(),h())};function c(o){nt.call(this,i,o)}return i.$$set=o=>{"width"in o&&t(1,s=o.width),"open"in o&&t(0,r=o.open),"$$scope"in o&&t(4,e=o.$$scope)},[r,s,h,p,e,a,c]}class gt extends Z{constructor(n){super(),B(this,n,ut,rt,H,{width:1,open:0})}}const _t=(()=>{let i=!1;i=localStorage.getItem("use-symbols")==="true";const{subscribe:n,set:t,update:a}=F(i);return{subscribe:n,set:e=>(localStorage.setItem("use-symbols",String(e)),t(e)),update:a}})(),bt=(()=>{let i=!0;i=localStorage.getItem("animation-enabled")==="true";const{subscribe:n,set:t,update:a}=F(i);return{subscribe:n,set:e=>(localStorage.setItem("animation-enabled",String(e)),t(e)),update:a}})();class yt extends C{constructor(t,a=!1){super("mechanic",t);d(this,"iconKey","");d(this,"countsAsCast",!0);super.isParent=a}toYamlObj(){const t=super.toYamlObj(),a=this.getData();a.getKeys().length>0&&t.put("data",a);const e=j(this.components);return e.length>0&&t.put("children",e),t}getData(){const t=new f("data");return t.put("icon-key",this.iconKey),t.put("counts",this.countsAsCast),this.data.filter(a=>a.meetsRequirements(this)).forEach(a=>{const e=a.getData();Object.keys(e).forEach(s=>t.put(s,e[s]))}),t}getRawData(){const t=new f("data");return this.data.forEach(a=>{const e=a.getData();Object.keys(e).forEach(s=>t.put(s,e[s]))}),t}deserialize(t){const a=t.get("data");a&&this.data.forEach(e=>e.deserialize(a)),this.setComponents(t.get("children",[],e=>z.deserializeComponents(e)))}}const S=class extends C{constructor(t){super("condition",t);d(this,"iconKey","")}toYamlObj(){const t=super.toYamlObj(),a=this.getData();a.getKeys().length>0&&t.put("data",a);const e=j(this.components);return e.length>0&&t.put("children",e),t}getData(){const t=new f("data");return t.put("icon-key",this.iconKey),this.data.filter(a=>a.meetsRequirements(this)).forEach(a=>{const e=a.getData();Object.keys(e).forEach(s=>t.put(s,e[s]))}),t}getRawData(){const t=new f("data");return t.put("icon-key",this.iconKey),this.data.forEach(a=>{const e=a.getData();Object.keys(e).forEach(s=>t.put(s,e[s]))}),t}deserialize(t){const a=t.get("data");this.iconKey=a.get("icon-key"),a&&this.data.forEach(e=>e.deserialize(a)),this.setComponents(t.get("children",[],e=>z.deserializeComponents(e)))}};let k=S;d(k,"new",()=>new S({name:"null"}));const R=class extends C{constructor(t){super("target",t);d(this,"iconKey","")}toYamlObj(){const t=super.toYamlObj(),a=this.getData();a.getKeys().length>0&&t.put("data",a);const e=j(this.components);return e.length>0&&t.put("children",e),t}getData(){const t=new f("data");return t.put("icon-key",this.iconKey),this.data.filter(a=>a.meetsRequirements(this)).forEach(a=>{const e=a.getData();Object.keys(e).forEach(s=>t.put(s,e[s]))}),t}getRawData(){const t=new f("data");return t.put("icon-key",this.iconKey),this.data.forEach(a=>{const e=a.getData();Object.keys(e).forEach(s=>t.put(s,e[s]))}),t}deserialize(t){const a=t.get("data");this.iconKey=a.get("icon-key"),a&&this.data.forEach(e=>e.deserialize(a)),this.setComponents(t.get("children",[],e=>z.deserializeComponents(e)))}};let K=R;d(K,"new",()=>new R({name:"null"}));export{gt as M,yt as P,bt as a,K as b,k as c,_t as u};
