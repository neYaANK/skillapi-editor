import{c as Yt,q as Ft,h as Ne,K as ge,R as Ce,k as De}from"../chunks/store.5f621617.js";import{I as Ie,S as ut,i as _t,s as dt,w as ie,M as oe,k as D,a as R,q as Y,y as U,l as C,m as y,c as q,h as u,r as F,z as le,n as P,Q as ce,p as Gt,b,C as E,A as x,E as X,R as se,T as He,g as L,u as ee,v as _e,d as B,f as de,N as fe,Z as Qt,B as te,F as Re,H as Oe,O as Xt,o as pt,a5 as mt,X as he,a2 as ue,G as qe,_ as Pe,Y as ht,a0 as vt,a1 as gt,e as ke,a6 as Ve,x as Ke,a9 as Zt}from"../chunks/index.50037c78.js";import{r as Ae}from"../chunks/index.ade5cbd2.js";import{M as Me,u as Jt,a as Se,P as Te,b as be}from"../chunks/settings.3b03426d.js";import{s as ae,P as $e,b as Ut,T as Le}from"../chunks/Toggle.f2310ec7.js";const xt=!1;async function el({params:i}){const e=i.id;let t,l;if(i.type=="class")throw Ae(302,`/${i.type}/${i.id}/edit`);if(i.type=="skill"){for(const n of Ie(Ne))if(l||(l=n),n.name==e){t=n;break}}if(t)return Yt.set(t),Ft.set(i.type=="class"),{data:t};throw l?Ae(302,`/${i.type}/${l.name}`):Ae(302,"/")}const Ml=Object.freeze(Object.defineProperty({__proto__:null,load:el,ssr:xt},Symbol.toStringTag,{value:"Module"}));function je(i,e,t){const l=i.slice();return l[64]=e[t],l}function We(i,e,t){const l=i.slice();return l[67]=e[t],l}function ze(i,e,t){const l=i.slice();return l[70]=e[t],l}function Be(i,e,t){const l=i.slice();return l[73]=e[t],l[74]=e,l[75]=t,l}function Ye(i,e,t){const l=i.slice();return l[76]=e[t],l[77]=e,l[78]=t,l}function tl(i){let e,t,l;return{c(){e=D("span"),t=Y("expand_less"),this.h()},l(n){e=C(n,"SPAN",{class:!0});var o=y(e);t=F(o,"expand_less"),o.forEach(u),this.h()},h(){P(e,"class","material-symbols-rounded svelte-m3pune")},m(n,o){b(n,e,o),E(e,t)},i(n){n&&(l||he(()=>{l=ht(e,i[22],{duration:400}),l.start()}))},o:qe,d(n){n&&u(e)}}}function ll(i){let e,t,l;return{c(){e=D("span"),t=Y("expand_more"),this.h()},l(n){e=C(n,"SPAN",{class:!0});var o=y(e);t=F(o,"expand_more"),o.forEach(u),this.h()},h(){P(e,"class","material-symbols-rounded svelte-m3pune")},m(n,o){b(n,e,o),E(e,t)},i(n){n&&(l||he(()=>{l=ht(e,i[22],{duration:400}),l.start()}))},o:qe,d(n){n&&u(e)}}}function nl(i){let e=i[0].name+"",t;return{c(){t=Y(e)},l(l){t=F(l,e)},m(l,n){b(l,t,n)},p(l,n){n[0]&1&&e!==(e=l[0].name+"")&&ee(t,e)},d(l){l&&u(t)}}}function il(i){let e,t=i[0].name+"",l;return{c(){e=D("s"),l=Y(t)},l(n){e=C(n,"S",{});var o=y(e);l=F(o,t),o.forEach(u)},m(n,o){b(n,e,o),E(e,l)},p(n,o){o[0]&1&&t!==(t=n[0].name+"")&&ee(l,t)},d(n){n&&u(e)}}}function Fe(i){let e,t,l,n,o,s,r,c,f,a,h,d,k,I,j,M,z,v=i[0].isParent&&Ge(i);const S=[ol,sl],A=[];function Q(p,g){return p[6].length==0?0:1}return d=Q(i),k=A[d]=S[d](i),{c(){e=D("div"),v&&v.c(),t=R(),l=D("div"),n=Y("content_copy"),s=R(),r=D("div"),c=Y("delete"),a=R(),h=D("div"),k.c(),this.h()},l(p){e=C(p,"DIV",{class:!0});var g=y(e);v&&v.l(g),t=q(g),l=C(g,"DIV",{class:!0,title:!0});var V=y(l);n=F(V,"content_copy"),V.forEach(u),s=q(g),r=C(g,"DIV",{class:!0,title:!0});var $=y(r);c=F($,"delete"),$.forEach(u),g.forEach(u),a=q(p),h=C(p,"DIV",{class:!0});var _=y(h);k.l(_),_.forEach(u),this.h()},h(){P(l,"class","material-symbols-rounded control copy svelte-m3pune"),P(l,"title","Copy"),P(r,"class","material-symbols-rounded control delete svelte-m3pune"),P(r,"title","Delete"),P(e,"class","controls svelte-m3pune"),P(h,"class","children svelte-m3pune")},m(p,g){b(p,e,g),v&&v.m(e,null),E(e,t),E(e,l),E(l,n),E(e,s),E(e,r),E(r,c),b(p,a,g),b(p,h,g),A[d].m(h,null),j=!0,M||(z=[X(l,"click",se(i[32])),X(r,"click",se(i[33]))],M=!0)},p(p,g){p[0].isParent?v?v.p(p,g):(v=Ge(p),v.c(),v.m(e,t)):v&&(v.d(1),v=null);let V=d;d=Q(p),d===V?A[d].p(p,g):(_e(),B(A[V],1,1,()=>{A[V]=null}),de(),k=A[d],k?k.p(p,g):(k=A[d]=S[d](p),k.c()),L(k,1),k.m(h,null))},i(p){j||(he(()=>{j&&(o||(o=ue(l,ae,{},!0)),o.run(1))}),he(()=>{j&&(f||(f=ue(r,ae,{},!0)),f.run(1))}),L(k),p&&he(()=>{j&&(I||(I=ue(h,ae,{},!0)),I.run(1))}),j=!0)},o(p){o||(o=ue(l,ae,{},!1)),o.run(0),f||(f=ue(r,ae,{},!1)),f.run(0),B(k),p&&(I||(I=ue(h,ae,{},!1)),I.run(0)),j=!1},d(p){p&&u(e),v&&v.d(),p&&o&&o.end(),p&&f&&f.end(),p&&u(a),p&&u(h),A[d].d(),p&&I&&I.end(),M=!1,Re(z)}}}function Ge(i){let e,t,l,n;return{c(){e=D("div"),t=Y("add"),this.h()},l(o){e=C(o,"DIV",{class:!0,title:!0});var s=y(e);t=F(s,"add"),s.forEach(u),this.h()},h(){P(e,"class","material-symbols-rounded control add svelte-m3pune"),P(e,"title","Add Component")},m(o,s){b(o,e,s),E(e,t),l||(n=X(e,"click",se(i[31])),l=!0)},p:qe,d(o){o&&u(e),l=!1,n()}}}function sl(i){let e,t=[],l=new Map,n,o=i[6];const s=r=>r[76].id;for(let r=0;r<o.length;r+=1){let c=Ye(i,o,r),f=s(c);l.set(f,t[r]=Qe(f,c))}return{c(){e=D("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=C(r,"DIV",{class:!0});var c=y(e);for(let f=0;f<t.length;f+=1)t[f].l(c);c.forEach(u),this.h()},h(){P(e,"class","child-wrapper")},m(r,c){b(r,e,c);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(e,null);i[40](e),n=!0},p(r,c){c[0]&67108930&&(o=r[6],_e(),t=vt(t,c,s,1,r,o,l,e,gt,Qe,null,Ye),de())},i(r){if(!n){for(let c=0;c<o.length;c+=1)L(t[c]);n=!0}},o(r){for(let c=0;c<t.length;c+=1)B(t[c]);n=!1},d(r){r&&u(e);for(let c=0;c<t.length;c+=1)t[c].d();i[40](null)}}}function ol(i){let e,t,l=i[0].isParent&&(i[9]||i[10])&&Xe(i);return{c(){l&&l.c(),e=ke()},l(n){l&&l.l(n),e=ke()},m(n,o){l&&l.m(n,o),b(n,e,o),t=!0},p(n,o){n[0].isParent&&(n[9]||n[10])?l?(l.p(n,o),o[0]&1537&&L(l,1)):(l=Xe(n),l.c(),L(l,1),l.m(e.parentNode,e)):l&&(_e(),B(l,1,1,()=>{l=null}),de())},i(n){t||(L(l),t=!0)},o(n){B(l),t=!1},d(n){l&&l.d(n),n&&u(e)}}}function Qe(i,e){let t,l,n,o,s,r;function c(a){e[37](a,e[76],e[77],e[78])}let f={skill:e[1]};return e[76]!==void 0&&(f.component=e[76]),l=new bt({props:f}),ie.push(()=>oe(l,"component",c)),l.$on("update",e[38]),l.$on("save",e[39]),l.$on("addskill",e[26]),{key:i,first:null,c(){t=D("span"),U(l.$$.fragment),o=R(),this.h()},l(a){t=C(a,"SPAN",{});var h=y(t);le(l.$$.fragment,h),o=q(h),h.forEach(u),this.h()},h(){this.first=t},m(a,h){b(a,t,h),x(l,t,null),E(t,o),r=!0},p(a,h){e=a;const d={};h[0]&2&&(d.skill=e[1]),!n&&h[0]&64&&(n=!0,d.component=e[76],fe(()=>n=!1)),l.$set(d)},i(a){r||(L(l.$$.fragment,a),a&&he(()=>{r&&(s||(s=ue(t,ae,{},!0)),s.run(1))}),r=!0)},o(a){B(l.$$.fragment,a),a&&(s||(s=ue(t,ae,{},!1)),s.run(0)),r=!1},d(a){a&&u(t),te(l),a&&s&&s.end()}}}function Xe(i){let e,t,l,n,o;return{c(){e=D("div"),this.h()},l(s){e=C(s,"DIV",{class:!0}),y(e).forEach(u),this.h()},h(){P(e,"class","filler svelte-m3pune"),ce(e,"overChildren",i[10])},m(s,r){b(s,e,r),l=!0,n||(o=[X(e,"dragenter",se(i[34])),X(e,"dragover",se(He(El))),X(e,"dragleave",i[35]),X(e,"drop",se(He(i[36])))],n=!0)},p(s,r){(!l||r[0]&1024)&&ce(e,"overChildren",s[10])},i(s){l||(he(()=>{l&&(t||(t=ue(e,ae,{},!0)),t.run(1))}),l=!0)},o(s){t||(t=ue(e,ae,{},!1)),t.run(0),l=!1},d(s){s&&u(e),s&&t&&t.end(),n=!1,Re(o)}}}function rl(i){let e,t=i[0].name+"",l;return{c(){e=D("h2"),l=Y(t)},l(n){e=C(n,"H2",{});var o=y(e);l=F(o,t),o.forEach(u)},m(n,o){b(n,e,o),E(e,l)},p(n,o){o[0]&1&&t!==(t=n[0].name+"")&&ee(l,t)},d(n){n&&u(e)}}}function al(i){let e,t,l=i[0].name+"",n,o,s,r;return{c(){e=D("h2"),t=D("s"),n=Y(l),o=R(),s=D("small"),r=Y("deprecated")},l(c){e=C(c,"H2",{});var f=y(e);t=C(f,"S",{});var a=y(t);n=F(a,l),a.forEach(u),o=q(f),s=C(f,"SMALL",{});var h=y(s);r=F(h,"deprecated"),h.forEach(u),f.forEach(u)},m(c,f){b(c,e,f),E(e,t),E(t,n),E(e,o),E(e,s),E(s,r)},p(c,f){f[0]&1&&l!==(l=c[0].name+"")&&ee(n,l)},d(c){c&&u(e)}}}function Ze(i){let e,t=i[0].description+"",l;return{c(){e=D("div"),l=Y(t),this.h()},l(n){e=C(n,"DIV",{class:!0});var o=y(e);l=F(o,t),o.forEach(u),this.h()},h(){P(e,"class","modal-desc svelte-m3pune")},m(n,o){b(n,e,o),E(e,l)},p(n,o){o[0]&1&&t!==(t=n[0].description+"")&&ee(l,t)},d(n){n&&u(e)}}}function fl(i){let e,t,l;function n(s){i[47](s)}let o={label:"Icon Key",tooltip:'[icon-key] The key used by the component in the Icon Lore. If this is set to "example" and has a value name of "value", it can be referenced using the string "{attr:example.value}"'};return i[0].iconKey!==void 0&&(o.value=i[0].iconKey),e=new $e({props:o}),ie.push(()=>oe(e,"value",n)),{c(){U(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,r){x(e,s,r),l=!0},p(s,r){const c={};!t&&r[0]&1&&(t=!0,c.value=s[0].iconKey,fe(()=>t=!1)),e.$set(c)},i(s){l||(L(e.$$.fragment,s),l=!0)},o(s){B(e.$$.fragment,s),l=!1},d(s){te(e,s)}}}function cl(i){let e,t,l,n;return e=new $e({props:{label:"Mana",tooltip:"[mana] Whether this trigger requires the mana cost to activate",$$slots:{default:[ul]},$$scope:{ctx:i}}}),l=new $e({props:{label:"Cooldown",tooltip:"[cooldown] Whether this trigger requires to be off cooldown to activate",$$slots:{default:[_l]},$$scope:{ctx:i}}}),{c(){U(e.$$.fragment),t=R(),U(l.$$.fragment)},l(o){le(e.$$.fragment,o),t=q(o),le(l.$$.fragment,o)},m(o,s){x(e,o,s),b(o,t,s),x(l,o,s),n=!0},p(o,s){const r={};s[0]&1|s[2]&131072&&(r.$$scope={dirty:s,ctx:o}),e.$set(r);const c={};s[0]&1|s[2]&131072&&(c.$$scope={dirty:s,ctx:o}),l.$set(c)},i(o){n||(L(e.$$.fragment,o),L(l.$$.fragment,o),n=!0)},o(o){B(e.$$.fragment,o),B(l.$$.fragment,o),n=!1},d(o){te(e,o),o&&u(t),te(l,o)}}}function ul(i){let e,t,l;function n(s){i[45](s)}let o={};return i[0].mana!==void 0&&(o.data=i[0].mana),e=new Le({props:o}),ie.push(()=>oe(e,"data",n)),{c(){U(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,r){x(e,s,r),l=!0},p(s,r){const c={};!t&&r[0]&1&&(t=!0,c.data=s[0].mana,fe(()=>t=!1)),e.$set(c)},i(s){l||(L(e.$$.fragment,s),l=!0)},o(s){B(e.$$.fragment,s),l=!1},d(s){te(e,s)}}}function _l(i){let e,t,l;function n(s){i[46](s)}let o={};return i[0].cooldown!==void 0&&(o.data=i[0].cooldown),e=new Le({props:o}),ie.push(()=>oe(e,"data",n)),{c(){U(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,r){x(e,s,r),l=!0},p(s,r){const c={};!t&&r[0]&1&&(t=!0,c.data=s[0].cooldown,fe(()=>t=!1)),e.$set(c)},i(s){l||(L(e.$$.fragment,s),l=!0)},o(s){B(e.$$.fragment,s),l=!1},d(s){te(e,s)}}}function Je(i){let e,t;return e=new $e({props:{label:"Counts as Cast",tooltip:'[counts] Whether this mechanic running treats the skill as "casted" and will consume mana and start the cooldown. Set to false if it is a mechanic applled when the skill fails such as cleanup or an error message"',$$slots:{default:[dl]},$$scope:{ctx:i}}}),{c(){U(e.$$.fragment)},l(l){le(e.$$.fragment,l)},m(l,n){x(e,l,n),t=!0},p(l,n){const o={};n[0]&1|n[2]&131072&&(o.$$scope={dirty:n,ctx:l}),e.$set(o)},i(l){t||(L(e.$$.fragment,l),t=!0)},o(l){B(e.$$.fragment,l),t=!1},d(l){te(e,l)}}}function dl(i){let e,t,l;function n(s){i[48](s)}let o={};return i[0].countsAsCast!==void 0&&(o.data=i[0].countsAsCast),e=new Le({props:o}),ie.push(()=>oe(e,"data",n)),{c(){U(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,r){x(e,s,r),l=!0},p(s,r){const c={};!t&&r[0]&1&&(t=!0,c.data=s[0].countsAsCast,fe(()=>t=!1)),e.$set(c)},i(s){l||(L(e.$$.fragment,s),l=!0)},o(s){B(e.$$.fragment,s),l=!1},d(s){te(e,s)}}}function Ue(i){let e,t,l,n;function o(c){i[49](c,i[73])}var s=i[73].component;function r(c){let f={name:c[73].name,tooltip:(c[73].key?"["+c[73].key+"] ":"")+c[73].tooltip,multiple:c[73].multiple};return c[73].data!==void 0&&(f.data=c[73].data),{props:f}}return s&&(e=Ke(s,r(i)),ie.push(()=>oe(e,"data",o)),e.$on("save",i[50])),{c(){e&&U(e.$$.fragment),l=ke()},l(c){e&&le(e.$$.fragment,c),l=ke()},m(c,f){e&&x(e,c,f),b(c,l,f),n=!0},p(c,f){i=c;const a={};if(f[0]&1&&(a.name=i[73].name),f[0]&1&&(a.tooltip=(i[73].key?"["+i[73].key+"] ":"")+i[73].tooltip),f[0]&1&&(a.multiple=i[73].multiple),!t&&f[0]&1&&(t=!0,a.data=i[73].data,fe(()=>t=!1)),f[0]&1&&s!==(s=i[73].component)){if(e){_e();const h=e;B(h.$$.fragment,1,0,()=>{te(h,1)}),de()}s?(e=Ke(s,r(i)),ie.push(()=>oe(e,"data",o)),e.$on("save",i[50]),U(e.$$.fragment),L(e.$$.fragment,1),x(e,l.parentNode,l)):e=null}else s&&e.$set(a)},i(c){n||(e&&L(e.$$.fragment,c),n=!0)},o(c){e&&B(e.$$.fragment,c),n=!1},d(c){c&&u(l),e&&te(e,c)}}}function xe(i){let e=i[73].meetsRequirements(i[0]),t,l,n=e&&Ue(i);return{c(){n&&n.c(),t=ke()},l(o){n&&n.l(o),t=ke()},m(o,s){n&&n.m(o,s),b(o,t,s),l=!0},p(o,s){s[0]&1&&(e=o[73].meetsRequirements(o[0])),e?n?(n.p(o,s),s[0]&1&&L(n,1)):(n=Ue(o),n.c(),L(n,1),n.m(t.parentNode,t)):n&&(_e(),B(n,1,1,()=>{n=null}),de())},i(o){l||(L(n),l=!0)},o(o){B(n),l=!1},d(o){n&&n.d(o),o&&u(t)}}}function pl(i){let e,t,l,n,o,s,r,c,f,a;function h(p,g){return p[0].isDeprecated?al:rl}let d=h(i),k=d(i),I=i[0].description&&Ze(i);const j=[cl,fl],M=[];function z(p,g){return p[0]instanceof De&&p[0].name!="Cast"&&p[0].name!="Initialize"&&p[0].name!="Cleanup"?0:p[0]instanceof Te||p[0]instanceof Se||p[0]instanceof be?1:-1}~(s=z(i))&&(r=M[s]=j[s](i));let v=i[0]instanceof be&&Je(i),S=i[0].data,A=[];for(let p=0;p<S.length;p+=1)A[p]=xe(Be(i,S,p));const Q=p=>B(A[p],1,1,()=>{A[p]=null});return{c(){k.c(),e=R(),I&&I.c(),t=R(),l=D("hr"),n=R(),o=D("div"),r&&r.c(),c=R(),v&&v.c(),f=R();for(let p=0;p<A.length;p+=1)A[p].c();this.h()},l(p){k.l(p),e=q(p),I&&I.l(p),t=q(p),l=C(p,"HR",{}),n=q(p),o=C(p,"DIV",{class:!0});var g=y(o);r&&r.l(g),c=q(g),v&&v.l(g),f=q(g);for(let V=0;V<A.length;V+=1)A[V].l(g);g.forEach(u),this.h()},h(){P(o,"class","component-entry svelte-m3pune")},m(p,g){k.m(p,g),b(p,e,g),I&&I.m(p,g),b(p,t,g),b(p,l,g),b(p,n,g),b(p,o,g),~s&&M[s].m(o,null),E(o,c),v&&v.m(o,null),E(o,f);for(let V=0;V<A.length;V+=1)A[V]&&A[V].m(o,null);a=!0},p(p,g){d===(d=h(p))&&k?k.p(p,g):(k.d(1),k=d(p),k&&(k.c(),k.m(e.parentNode,e))),p[0].description?I?I.p(p,g):(I=Ze(p),I.c(),I.m(t.parentNode,t)):I&&(I.d(1),I=null);let V=s;if(s=z(p),s===V?~s&&M[s].p(p,g):(r&&(_e(),B(M[V],1,1,()=>{M[V]=null}),de()),~s?(r=M[s],r?r.p(p,g):(r=M[s]=j[s](p),r.c()),L(r,1),r.m(o,c)):r=null),p[0]instanceof be?v?(v.p(p,g),g[0]&1&&L(v,1)):(v=Je(p),v.c(),L(v,1),v.m(o,f)):v&&(_e(),B(v,1,1,()=>{v=null}),de()),g[0]&1){S=p[0].data;let $;for($=0;$<S.length;$+=1){const _=Be(p,S,$);A[$]?(A[$].p(_,g),L(A[$],1)):(A[$]=xe(_),A[$].c(),L(A[$],1),A[$].m(o,null))}for(_e(),$=S.length;$<A.length;$+=1)Q($);de()}},i(p){if(!a){L(r),L(v);for(let g=0;g<S.length;g+=1)L(A[g]);a=!0}},o(p){B(r),B(v),A=A.filter(Boolean);for(let g=0;g<A.length;g+=1)B(A[g]);a=!1},d(p){k.d(p),p&&u(e),I&&I.d(p),p&&u(t),p&&u(l),p&&u(n),p&&u(o),~s&&M[s].d(),v&&v.d(),Ve(A,p)}}}function et(i){let e,t,l,n,o,s,r,c=i[13],f=[];for(let a=0;a<c.length;a+=1)f[a]=tt(ze(i,c,a));return{c(){e=D("hr"),t=R(),l=D("div"),n=D("h3"),o=Y("Targets"),s=R(),r=D("div");for(let a=0;a<f.length;a+=1)f[a].c();this.h()},l(a){e=C(a,"HR",{}),t=q(a),l=C(a,"DIV",{class:!0});var h=y(l);n=C(h,"H3",{class:!0});var d=y(n);o=F(d,"Targets"),d.forEach(u),h.forEach(u),s=q(a),r=C(a,"DIV",{class:!0});var k=y(r);for(let I=0;I<f.length;I+=1)f[I].l(k);k.forEach(u),this.h()},h(){P(n,"class","svelte-m3pune"),P(l,"class","comp-modal-header svelte-m3pune"),P(r,"class","triggers")},m(a,h){b(a,e,h),b(a,t,h),b(a,l,h),E(l,n),E(n,o),b(a,s,h),b(a,r,h);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m(r,null)},p(a,h){if(h[0]&1056768){c=a[13];let d;for(d=0;d<c.length;d+=1){const k=ze(a,c,d);f[d]?f[d].p(k,h):(f[d]=tt(k),f[d].c(),f[d].m(r,null))}for(;d<f.length;d+=1)f[d].d(1);f.length=c.length}},d(a){a&&u(e),a&&u(t),a&&u(l),a&&u(s),a&&u(r),Ve(f,a)}}}function ml(i){let e=i[70].name+"",t;return{c(){t=Y(e)},l(l){t=F(l,e)},m(l,n){b(l,t,n)},p(l,n){n[0]&8192&&e!==(e=l[70].name+"")&&ee(t,e)},d(l){l&&u(t)}}}function hl(i){let e,t=i[70].name+"",l;return{c(){e=D("s"),l=Y(t)},l(n){e=C(n,"S",{});var o=y(e);l=F(o,t),o.forEach(u)},m(n,o){b(n,e,o),E(e,l)},p(n,o){o[0]&8192&&t!==(t=n[70].name+"")&&ee(l,t)},d(n){n&&u(e)}}}function tt(i){let e,t,l,n;function o(f,a){return a[0]&8192&&(t=null),t==null&&(t=!!f[70].component.new().isDeprecated),t?hl:ml}let s=o(i,[-1,-1,-1]),r=s(i);function c(){return i[53](i[70])}return{c(){e=D("div"),r.c(),this.h()},l(f){e=C(f,"DIV",{class:!0});var a=y(e);r.l(a),a.forEach(u),this.h()},h(){P(e,"class","comp-select")},m(f,a){b(f,e,a),r.m(e,null),l||(n=X(e,"click",c),l=!0)},p(f,a){i=f,s===(s=o(i,a))&&r?r.p(i,a):(r.d(1),r=s(i),r&&(r.c(),r.m(e,null)))},d(f){f&&u(e),r.d(),l=!1,n()}}}function lt(i){let e,t,l,n,o,s,r,c=i[14],f=[];for(let a=0;a<c.length;a+=1)f[a]=nt(We(i,c,a));return{c(){e=D("hr"),t=R(),l=D("div"),n=D("h3"),o=Y("Conditions"),s=R(),r=D("div");for(let a=0;a<f.length;a+=1)f[a].c();this.h()},l(a){e=C(a,"HR",{}),t=q(a),l=C(a,"DIV",{class:!0});var h=y(l);n=C(h,"H3",{class:!0});var d=y(n);o=F(d,"Conditions"),d.forEach(u),h.forEach(u),s=q(a),r=C(a,"DIV",{class:!0});var k=y(r);for(let I=0;I<f.length;I+=1)f[I].l(k);k.forEach(u),this.h()},h(){P(n,"class","svelte-m3pune"),P(l,"class","comp-modal-header svelte-m3pune"),P(r,"class","triggers")},m(a,h){b(a,e,h),b(a,t,h),b(a,l,h),E(l,n),E(n,o),b(a,s,h),b(a,r,h);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m(r,null)},p(a,h){if(h[0]&1064960){c=a[14];let d;for(d=0;d<c.length;d+=1){const k=We(a,c,d);f[d]?f[d].p(k,h):(f[d]=nt(k),f[d].c(),f[d].m(r,null))}for(;d<f.length;d+=1)f[d].d(1);f.length=c.length}},d(a){a&&u(e),a&&u(t),a&&u(l),a&&u(s),a&&u(r),Ve(f,a)}}}function vl(i){let e=i[67].name+"",t;return{c(){t=Y(e)},l(l){t=F(l,e)},m(l,n){b(l,t,n)},p(l,n){n[0]&16384&&e!==(e=l[67].name+"")&&ee(t,e)},d(l){l&&u(t)}}}function gl(i){let e,t=i[67].name+"",l;return{c(){e=D("s"),l=Y(t)},l(n){e=C(n,"S",{});var o=y(e);l=F(o,t),o.forEach(u)},m(n,o){b(n,e,o),E(e,l)},p(n,o){o[0]&16384&&t!==(t=n[67].name+"")&&ee(l,t)},d(n){n&&u(e)}}}function nt(i){let e,t,l,n;function o(f,a){return a[0]&16384&&(t=null),t==null&&(t=!!f[67].component.new().isDeprecated),t?gl:vl}let s=o(i,[-1,-1,-1]),r=s(i);function c(){return i[54](i[67])}return{c(){e=D("div"),r.c(),this.h()},l(f){e=C(f,"DIV",{class:!0});var a=y(e);r.l(a),a.forEach(u),this.h()},h(){P(e,"class","comp-select")},m(f,a){b(f,e,a),r.m(e,null),l||(n=X(e,"click",c),l=!0)},p(f,a){i=f,s===(s=o(i,a))&&r?r.p(i,a):(r.d(1),r=s(i),r&&(r.c(),r.m(e,null)))},d(f){f&&u(e),r.d(),l=!1,n()}}}function it(i){let e,t,l,n,o,s,r,c=i[15],f=[];for(let a=0;a<c.length;a+=1)f[a]=st(je(i,c,a));return{c(){e=D("hr"),t=R(),l=D("div"),n=D("h3"),o=Y("Mechanics"),s=R(),r=D("div");for(let a=0;a<f.length;a+=1)f[a].c();this.h()},l(a){e=C(a,"HR",{}),t=q(a),l=C(a,"DIV",{class:!0});var h=y(l);n=C(h,"H3",{class:!0});var d=y(n);o=F(d,"Mechanics"),d.forEach(u),h.forEach(u),s=q(a),r=C(a,"DIV",{class:!0});var k=y(r);for(let I=0;I<f.length;I+=1)f[I].l(k);k.forEach(u),this.h()},h(){P(n,"class","svelte-m3pune"),P(l,"class","comp-modal-header svelte-m3pune"),P(r,"class","triggers")},m(a,h){b(a,e,h),b(a,t,h),b(a,l,h),E(l,n),E(n,o),b(a,s,h),b(a,r,h);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m(r,null)},p(a,h){if(h[0]&1081344){c=a[15];let d;for(d=0;d<c.length;d+=1){const k=je(a,c,d);f[d]?f[d].p(k,h):(f[d]=st(k),f[d].c(),f[d].m(r,null))}for(;d<f.length;d+=1)f[d].d(1);f.length=c.length}},d(a){a&&u(e),a&&u(t),a&&u(l),a&&u(s),a&&u(r),Ve(f,a)}}}function bl(i){let e=i[64].name+"",t;return{c(){t=Y(e)},l(l){t=F(l,e)},m(l,n){b(l,t,n)},p(l,n){n[0]&32768&&e!==(e=l[64].name+"")&&ee(t,e)},d(l){l&&u(t)}}}function kl(i){let e,t=i[64].name+"",l;return{c(){e=D("s"),l=Y(t)},l(n){e=C(n,"S",{});var o=y(e);l=F(o,t),o.forEach(u)},m(n,o){b(n,e,o),E(e,l)},p(n,o){o[0]&32768&&t!==(t=n[64].name+"")&&ee(l,t)},d(n){n&&u(e)}}}function st(i){let e,t,l,n;function o(f,a){return a[0]&32768&&(t=null),t==null&&(t=!!f[64].component.new().isDeprecated),t?kl:bl}let s=o(i,[-1,-1,-1]),r=s(i);function c(){return i[55](i[64])}return{c(){e=D("div"),r.c(),this.h()},l(f){e=C(f,"DIV",{class:!0});var a=y(e);r.l(a),a.forEach(u),this.h()},h(){P(e,"class","comp-select")},m(f,a){b(f,e,a),r.m(e,null),l||(n=X(e,"click",c),l=!0)},p(f,a){i=f,s===(s=o(i,a))&&r?r.p(i,a):(r.d(1),r=s(i),r&&(r.c(),r.m(e,null)))},d(f){f&&u(e),r.d(),l=!1,n()}}}function $l(i){let e,t,l,n,o,s,r,c,f,a,h,d,k,I,j,M,z,v,S,A;function Q(_){i[52](_)}let p={placeholder:"Search..."};i[3]!==void 0&&(p.value=i[3]),c=new $e({props:p}),ie.push(()=>oe(c,"value",Q));let g=i[13].length>0&&et(i),V=i[14].length>0&&lt(i),$=i[15].length>0&&it(i);return{c(){e=D("div"),t=D("div"),l=R(),n=D("h2"),o=Y("Add a Component"),s=R(),r=D("div"),U(c.$$.fragment),a=R(),g&&g.c(),h=R(),V&&V.c(),d=R(),$&&$.c(),k=R(),I=D("hr"),j=R(),M=D("div"),z=Y("Cancel"),this.h()},l(_){e=C(_,"DIV",{class:!0});var T=y(e);t=C(T,"DIV",{}),y(t).forEach(u),l=q(T),n=C(T,"H2",{});var G=y(n);o=F(G,"Add a Component"),G.forEach(u),s=q(T),r=C(T,"DIV",{class:!0});var W=y(r);le(c.$$.fragment,W),W.forEach(u),T.forEach(u),a=q(_),g&&g.l(_),h=q(_),V&&V.l(_),d=q(_),$&&$.l(_),k=q(_),I=C(_,"HR",{}),j=q(_),M=C(_,"DIV",{class:!0});var N=y(M);z=F(N,"Cancel"),N.forEach(u),this.h()},h(){P(r,"class","search-bar"),P(e,"class","modal-header-wrapper"),P(M,"class","cancel")},m(_,T){b(_,e,T),E(e,t),E(e,l),E(e,n),E(n,o),E(e,s),E(e,r),x(c,r,null),b(_,a,T),g&&g.m(_,T),b(_,h,T),V&&V.m(_,T),b(_,d,T),$&&$.m(_,T),b(_,k,T),b(_,I,T),b(_,j,T),b(_,M,T),E(M,z),v=!0,S||(A=X(M,"click",i[56]),S=!0)},p(_,T){const G={};!f&&T[0]&8&&(f=!0,G.value=_[3],fe(()=>f=!1)),c.$set(G),_[13].length>0?g?g.p(_,T):(g=et(_),g.c(),g.m(h.parentNode,h)):g&&(g.d(1),g=null),_[14].length>0?V?V.p(_,T):(V=lt(_),V.c(),V.m(d.parentNode,d)):V&&(V.d(1),V=null),_[15].length>0?$?$.p(_,T):($=it(_),$.c(),$.m(k.parentNode,k)):$&&($.d(1),$=null)},i(_){v||(L(c.$$.fragment,_),v=!0)},o(_){B(c.$$.fragment,_),v=!1},d(_){_&&u(e),te(c),_&&u(a),g&&g.d(_),_&&u(h),V&&V.d(_),_&&u(d),$&&$.d(_),_&&u(k),_&&u(I),_&&u(j),_&&u(M),S=!1,A()}}}function wl(i){let e,t,l,n,o,s,r,c=i[19](i[17])+"",f,a=i[17]?" ":": ",h,d,k,I,j,M,z,v,S,A,Q,p,g;function V(w,K){return w[8]?ll:tl}let $=V(i),_=$(i);function T(w,K){return w[0].isDeprecated?il:nl}let G=T(i),W=G(i),N=!i[8]&&Fe(i);function pe(w){i[51](w)}let re={width:"70%",$$slots:{default:[pl]},$$scope:{ctx:i}};i[2]!==void 0&&(re.open=i[2]),M=new Me({props:re}),ie.push(()=>oe(M,"open",pe));function H(w){i[57](w)}let O={width:"70%",$$slots:{default:[$l]},$$scope:{ctx:i}};return i[7]!==void 0&&(O.open=i[7]),S=new Me({props:O}),ie.push(()=>oe(S,"open",H)),{c(){e=D("div"),t=D("div"),_.c(),l=R(),n=D("div"),o=R(),s=D("div"),r=D("span"),f=Y(c),h=Y(a),d=R(),W.c(),k=R(),N&&N.c(),j=R(),U(M.$$.fragment),v=R(),U(S.$$.fragment),this.h()},l(w){e=C(w,"DIV",{class:!0});var K=y(e);t=C(K,"DIV",{draggable:!0,class:!0});var J=y(t);_.l(J),l=q(J),n=C(J,"DIV",{class:!0}),y(n).forEach(u),o=q(J),s=C(J,"DIV",{class:!0});var ne=y(s);r=C(ne,"SPAN",{class:!0});var me=y(r);f=F(me,c),me.forEach(u),h=F(ne,a),d=q(ne),W.l(ne),ne.forEach(u),k=q(J),N&&N.l(J),J.forEach(u),K.forEach(u),j=q(w),le(M.$$.fragment,w),v=q(w),le(S.$$.fragment,w),this.h()},h(){P(n,"class","corner svelte-m3pune"),P(r,"class","svelte-m3pune"),P(s,"class","name svelte-m3pune"),P(t,"draggable","true"),P(t,"class","comp-body svelte-m3pune"),ce(t,"over",i[9]),ce(t,"top",i[11]),ce(t,"bottom",i[12]),ce(t,"dragging",i[16]===i[0]),Gt(t,"--comp-color",i[21]()),P(e,"class","wrapper svelte-m3pune")},m(w,K){b(w,e,K),E(e,t),_.m(t,null),E(t,l),E(t,n),E(t,o),E(t,s),E(s,r),E(r,f),E(s,h),E(s,d),W.m(s,null),E(t,k),N&&N.m(t,null),i[41](t),b(w,j,K),x(M,w,K),b(w,v,K),x(S,w,K),Q=!0,p||(g=[X(n,"click",se(i[30])),X(t,"dragstart",se(i[42])),X(t,"dragend",i[43]),X(t,"drop",se(i[25])),X(t,"click",se(i[44])),X(t,"dragover",se(He(i[23]))),X(t,"dragleave",se(i[24]))],p=!0)},p(w,K){$!==($=V(w))&&(_.d(1),_=$(w),_&&(_.c(),L(_,1),_.m(t,l))),(!Q||K[0]&131072)&&c!==(c=w[19](w[17])+"")&&ee(f,c),(!Q||K[0]&131072)&&a!==(a=w[17]?" ":": ")&&ee(h,a),G===(G=T(w))&&W?W.p(w,K):(W.d(1),W=G(w),W&&(W.c(),W.m(s,null))),w[8]?N&&(_e(),B(N,1,1,()=>{N=null}),de()):N?(N.p(w,K),K[0]&256&&L(N,1)):(N=Fe(w),N.c(),L(N,1),N.m(t,null)),(!Q||K[0]&512)&&ce(t,"over",w[9]),(!Q||K[0]&2048)&&ce(t,"top",w[11]),(!Q||K[0]&4096)&&ce(t,"bottom",w[12]),(!Q||K[0]&65537)&&ce(t,"dragging",w[16]===w[0]);const J={};K[0]&1|K[2]&131072&&(J.$$scope={dirty:K,ctx:w}),!z&&K[0]&4&&(z=!0,J.open=w[2],fe(()=>z=!1)),M.$set(J);const ne={};K[0]&57480|K[2]&131072&&(ne.$$scope={dirty:K,ctx:w}),!A&&K[0]&128&&(A=!0,ne.open=w[7],fe(()=>A=!1)),S.$set(ne)},i(w){Q||(L(_),L(N),I&&I.end(1),L(M.$$.fragment,w),L(S.$$.fragment,w),Q=!0)},o(w){B(N),I=Qt(t,ae,{}),B(M.$$.fragment,w),B(S.$$.fragment,w),Q=!1},d(w){w&&u(e),_.d(),W.d(),N&&N.d(),i[41](null),w&&I&&I.end(),w&&u(j),te(M,w),w&&u(v),te(S,w),p=!1,Re(g)}}}const El=()=>{};function Dl(i,e,t){let l,n;Oe(i,ge,m=>t(16,l=m)),Oe(i,Jt,m=>t(17,n=m));let{skill:o}=e,{component:s}=e,r,c,f=[];const a=Xt();let h=!1,d=!1,k=!1,I=!1,j=!1,M=!1,z=!1,v="",S,A,Q,p,g={},V={},$={},_,T,G;pt(()=>{p=s.components.subscribe(m=>t(6,f=m)),S=Ce.targets.subscribe(m=>t(27,g=m)),A=Ce.conditions.subscribe(m=>t(28,V=m)),Q=Ce.mechanics.subscribe(m=>t(29,$=m)),t(2,h=s._defaultOpen)}),mt(()=>{p&&p(),S&&S(),A&&A(),Q&&Q()});const W=(m=!1)=>{if(m){if(s instanceof De)return"🚩";if(s instanceof Se)return"⚠";if(s instanceof Te)return"🎯";if(s instanceof be)return"🔧"}return s instanceof De?"Trigger":s instanceof Se?"Condition":s instanceof Te?"Target":s instanceof be?"Mechanic":"???"},N=m=>{s.addComponent(m.new().defaultOpen()),t(7,d=!1),t(3,v=""),a("save")},pe=()=>s instanceof De?"#0083ef":s instanceof Se?"#feac00":s instanceof Te?"#04af38":s instanceof be?"#ff3a3a":"orange",re=(m,{duration:Z})=>({duration:Z,css:Ee=>`transform: rotate(${180-Ut(Ee)*180}deg);`}),H=m=>{if(s==Ie(ge)||(t(9,I=!0),s instanceof De))return;const Z=r.getBoundingClientRect();t(11,M=m.clientY<Z.height/2+Z.top),t(12,z=m.clientY>=Z.height/2+Z.top)},O=()=>{t(9,I=!1),t(11,M=!1),t(12,z=!1)},w=m=>{(!m.relatedTarget||!(r!=null&&r.contains(m.relatedTarget))||c!=null&&c.contains(m.relatedTarget))&&O()},K=()=>{let m=Ie(ge);a("addskill",{comp:m,relativeTo:s,above:M}),O()},J=m=>{let Z=m.detail.comp,Ee=m.detail.relativeTo,ye=m.detail.above,Bt=f.indexOf(Ee);o.removeComponent(Z),s.addComponent(Z,Bt+(ye?0:1)),a("save")},ne=()=>t(8,k=!k),me=()=>t(7,d=!0),ve=()=>console.log("clicked copy"),we=()=>{o.removeComponent(s),a("update")},kt=()=>{t(10,j=!0),t(9,I=!1)},$t=m=>{t(10,j=!1),r!=null&&r.contains(m.relatedTarget)&&!(c!=null&&c.contains(m.relatedTarget))&&t(9,I=!0)},wt=()=>{t(10,j=!1);let m=Ie(ge);o.removeComponent(m),s.addComponent(m)};function Et(m,Z,Ee,ye){Ee[ye]=m,t(6,f)}function Dt(m){Pe.call(this,i,m)}function Ct(m){Pe.call(this,i,m)}function It(m){ie[m?"unshift":"push"](()=>{c=m,t(5,c)})}function Vt(m){ie[m?"unshift":"push"](()=>{r=m,t(4,r)})}const yt=()=>ge.set(s),St=()=>ge.set(void 0),Tt=()=>t(2,h=!0);function Pt(m){i.$$.not_equal(s.mana,m)&&(s.mana=m,t(0,s))}function At(m){i.$$.not_equal(s.cooldown,m)&&(s.cooldown=m,t(0,s))}function Nt(m){i.$$.not_equal(s.iconKey,m)&&(s.iconKey=m,t(0,s))}function Ht(m){i.$$.not_equal(s.countsAsCast,m)&&(s.countsAsCast=m,t(0,s))}function Mt(m,Z){i.$$.not_equal(Z.data,m)&&(Z.data=m,t(0,s))}function Rt(m){Pe.call(this,i,m)}function qt(m){h=m,t(2,h)}function Lt(m){v=m,t(3,v)}const Ot=m=>N(m.component),Kt=m=>N(m.component),jt=m=>N(m.component),Wt=()=>t(7,d=!1);function zt(m){d=m,t(7,d)}return i.$$set=m=>{"skill"in m&&t(1,o=m.skill),"component"in m&&t(0,s=m.component)},i.$$.update=()=>{i.$$.dirty[0]&939524104&&(t(13,_=Object.keys(g).filter(m=>g[m].name.toLowerCase().includes(v.toLowerCase())).sort((m,Z)=>(g[m].component.new().isDeprecated?0:-1)-(g[Z].component.new().isDeprecated?0:-1)).map(m=>g[m])),t(14,T=Object.keys(V).filter(m=>V[m].name.toLowerCase().includes(v.toLowerCase())).sort((m,Z)=>(V[m].component.new().isDeprecated?0:-1)-(V[Z].component.new().isDeprecated?0:-1)).map(m=>V[m])),t(15,G=Object.keys($).filter(m=>$[m].name.toLowerCase().includes(v.toLowerCase())).sort((m,Z)=>($[m].component.new().isDeprecated?0:-1)-($[Z].component.new().isDeprecated?0:-1)).map(m=>$[m]))),i.$$.dirty[0]&1&&s&&a("save"),i.$$.dirty[0]&5&&h&&s&&s.data.filter(m=>m.dataSource).forEach(m=>m.init())},[s,o,h,v,r,c,f,d,k,I,j,M,z,_,T,G,l,n,a,W,N,pe,re,H,w,K,J,g,V,$,ne,me,ve,we,kt,$t,wt,Et,Dt,Ct,It,Vt,yt,St,Tt,Pt,At,Nt,Ht,Mt,Rt,qt,Lt,Ot,Kt,jt,Wt,zt]}class bt extends ut{constructor(e){super(),_t(this,e,Dl,wl,dt,{skill:1,component:0},null,[-1,-1,-1])}}function ot(i,e,t){const l=i.slice();return l[17]=e[t],l}function rt(i,e,t){const l=i.slice();return l[20]=e[t],l}function at(i,e){let t,l,n;return l=new bt({props:{skill:e[1],component:e[20]}}),l.$on("update",e[5]),l.$on("save",e[6]),{key:i,first:null,c(){t=D("div"),U(l.$$.fragment),this.h()},l(o){t=C(o,"DIV",{class:!0});var s=y(t);le(l.$$.fragment,s),s.forEach(u),this.h()},h(){P(t,"class","widget svelte-187gm9u"),this.first=t},m(o,s){b(o,t,s),x(l,t,null),n=!0},p(o,s){e=o;const r={};s&2&&(r.skill=e[1]),s&2&&(r.component=e[20]),l.$set(r)},i(o){n||(L(l.$$.fragment,o),n=!0)},o(o){B(l.$$.fragment,o),n=!1},d(o){o&&u(t),te(l)}}}function ft(i){let e,t;return{c(){e=D("div"),t=Y("No triggers added yet.")},l(l){e=C(l,"DIV",{});var n=y(e);t=F(n,"No triggers added yet."),n.forEach(u)},m(l,n){b(l,e,n),E(e,t)},d(l){l&&u(e)}}}function Cl(i){let e=i[17].name+"",t;return{c(){t=Y(e)},l(l){t=F(l,e)},m(l,n){b(l,t,n)},p(l,n){n&8&&e!==(e=l[17].name+"")&&ee(t,e)},d(l){l&&u(t)}}}function Il(i){let e,t=i[17].name+"",l;return{c(){e=D("s"),l=Y(t)},l(n){e=C(n,"S",{});var o=y(e);l=F(o,t),o.forEach(u)},m(n,o){b(n,e,o),E(e,l)},p(n,o){o&8&&t!==(t=n[17].name+"")&&ee(l,t)},d(n){n&&u(e)}}}function ct(i){let e,t,l,n;function o(f,a){return f[17].isDeprecated?Il:Cl}let s=o(i),r=s(i);function c(){return i[11](i[17])}return{c(){e=D("div"),r.c(),t=R(),this.h()},l(f){e=C(f,"DIV",{class:!0});var a=y(e);r.l(a),t=q(a),a.forEach(u),this.h()},h(){P(e,"class","comp-select")},m(f,a){b(f,e,a),r.m(e,null),E(e,t),l||(n=X(e,"click",c),l=!0)},p(f,a){i=f,s===(s=o(i))&&r?r.p(i,a):(r.d(1),r=s(i),r&&(r.c(),r.m(e,t)))},d(f){f&&u(e),r.d(),l=!1,n()}}}function Vl(i){let e,t,l,n,o,s,r,c,f,a,h,d,k,I,j,M,z,v,S,A,Q;function p(_){i[10](_)}let g={placeholder:"Search..."};i[0]!==void 0&&(g.value=i[0]),c=new $e({props:g}),ie.push(()=>oe(c,"value",p));let V=i[3],$=[];for(let _=0;_<V.length;_+=1)$[_]=ct(ot(i,V,_));return{c(){e=D("div"),t=D("div"),l=R(),n=D("h2"),o=Y("Select New Trigger"),s=R(),r=D("div"),U(c.$$.fragment),a=R(),h=D("hr"),d=R(),k=D("div");for(let _=0;_<$.length;_+=1)$[_].c();I=R(),j=D("hr"),M=R(),z=D("div"),v=Y("Cancel"),this.h()},l(_){e=C(_,"DIV",{class:!0});var T=y(e);t=C(T,"DIV",{}),y(t).forEach(u),l=q(T),n=C(T,"H2",{class:!0});var G=y(n);o=F(G,"Select New Trigger"),G.forEach(u),s=q(T),r=C(T,"DIV",{class:!0});var W=y(r);le(c.$$.fragment,W),W.forEach(u),T.forEach(u),a=q(_),h=C(_,"HR",{}),d=q(_),k=C(_,"DIV",{class:!0});var N=y(k);for(let re=0;re<$.length;re+=1)$[re].l(N);N.forEach(u),I=q(_),j=C(_,"HR",{}),M=q(_),z=C(_,"DIV",{class:!0});var pe=y(z);v=F(pe,"Cancel"),pe.forEach(u),this.h()},h(){P(n,"class","modal-header svelte-187gm9u"),P(r,"class","search-bar"),P(e,"class","modal-header-wrapper"),P(k,"class","triggers"),P(z,"class","cancel")},m(_,T){b(_,e,T),E(e,t),E(e,l),E(e,n),E(n,o),E(e,s),E(e,r),x(c,r,null),b(_,a,T),b(_,h,T),b(_,d,T),b(_,k,T);for(let G=0;G<$.length;G+=1)$[G]&&$[G].m(k,null);b(_,I,T),b(_,j,T),b(_,M,T),b(_,z,T),E(z,v),S=!0,A||(Q=X(z,"click",i[12]),A=!0)},p(_,T){const G={};if(!f&&T&1&&(f=!0,G.value=_[0],fe(()=>f=!1)),c.$set(G),T&24){V=_[3];let W;for(W=0;W<V.length;W+=1){const N=ot(_,V,W);$[W]?$[W].p(N,T):($[W]=ct(N),$[W].c(),$[W].m(k,null))}for(;W<$.length;W+=1)$[W].d(1);$.length=V.length}},i(_){S||(L(c.$$.fragment,_),S=!0)},o(_){B(c.$$.fragment,_),S=!1},d(_){_&&u(e),te(c),_&&u(a),_&&u(h),_&&u(d),_&&u(k),Ve($,_),_&&u(I),_&&u(j),_&&u(M),_&&u(z),A=!1,Q()}}}function yl(i){let e,t,l,n,o=i[1].name+"",s,r,c,f,a,h,d,k,I,j,M,z,v,S=[],A=new Map,Q,p,g,V,$,_,T;document.title=e="ProSkillAPI Dynamic Editor - "+i[1].name;let G=i[1].triggers;const W=H=>H[20].id;for(let H=0;H<G.length;H+=1){let O=rt(i,G,H),w=W(O);A.set(w,S[H]=at(w,O))}let N=i[1].triggers.length==0&&ft();function pe(H){i[13](H)}let re={$$slots:{default:[Vl]},$$scope:{ctx:i}};return i[2]!==void 0&&(re.open=i[2]),g=new Me({props:re}),ie.push(()=>oe(g,"open",pe)),{c(){t=R(),l=D("div"),n=D("h2"),s=Y(o),r=R(),c=D("a"),f=Y("edit"),h=R(),d=D("div"),k=D("span"),I=Y("new_label"),j=R(),M=D("hr"),z=R(),v=D("div");for(let H=0;H<S.length;H+=1)S[H].c();Q=R(),N&&N.c(),p=R(),U(g.$$.fragment),this.h()},l(H){Zt("svelte-r5m1v8",document.head).forEach(u),t=q(H),l=C(H,"DIV",{class:!0});var w=y(l);n=C(w,"H2",{class:!0});var K=y(n);s=F(K,o),r=q(K),c=C(K,"A",{class:!0,title:!0,href:!0});var J=y(c);f=F(J,"edit"),J.forEach(u),h=q(K),d=C(K,"DIV",{class:!0,title:!0});var ne=y(d);k=C(ne,"SPAN",{class:!0});var me=y(k);I=F(me,"new_label"),me.forEach(u),ne.forEach(u),K.forEach(u),j=q(w),M=C(w,"HR",{}),w.forEach(u),z=q(H),v=C(H,"DIV",{class:!0});var ve=y(v);for(let we=0;we<S.length;we+=1)S[we].l(ve);Q=q(ve),N&&N.l(ve),ve.forEach(u),p=q(H),le(g.$$.fragment,H),this.h()},h(){P(c,"class","material-symbols-rounded edit-skill chip svelte-187gm9u"),P(c,"title","Edit"),P(c,"href",a="/skill/"+i[1].name+"/edit"),P(k,"class","material-symbols-rounded"),P(d,"class","add-trigger chip svelte-187gm9u"),P(d,"title","Add Trigger"),P(n,"class","svelte-187gm9u"),P(l,"class","header svelte-187gm9u"),P(v,"class","container svelte-187gm9u")},m(H,O){b(H,t,O),b(H,l,O),E(l,n),E(n,s),E(n,r),E(n,c),E(c,f),E(n,h),E(n,d),E(d,k),E(k,I),E(l,j),E(l,M),b(H,z,O),b(H,v,O);for(let w=0;w<S.length;w+=1)S[w]&&S[w].m(v,null);E(v,Q),N&&N.m(v,null),b(H,p,O),x(g,H,O),$=!0,_||(T=X(d,"click",i[9]),_=!0)},p(H,[O]){(!$||O&2)&&e!==(e="ProSkillAPI Dynamic Editor - "+H[1].name)&&(document.title=e),(!$||O&2)&&o!==(o=H[1].name+"")&&ee(s,o),(!$||O&2&&a!==(a="/skill/"+H[1].name+"/edit"))&&P(c,"href",a),O&98&&(G=H[1].triggers,_e(),S=vt(S,O,W,1,H,G,A,v,gt,at,Q,rt),de()),H[1].triggers.length==0?N||(N=ft(),N.c(),N.m(v,null)):N&&(N.d(1),N=null);const w={};O&8388621&&(w.$$scope={dirty:O,ctx:H}),!V&&O&4&&(V=!0,w.open=H[2],fe(()=>V=!1)),g.$set(w)},i(H){if(!$){for(let O=0;O<G.length;O+=1)L(S[O]);L(g.$$.fragment,H),$=!0}},o(H){for(let O=0;O<S.length;O+=1)B(S[O]);B(g.$$.fragment,H),$=!1},d(H){H&&u(t),H&&u(l),H&&u(z),H&&u(v);for(let O=0;O<S.length;O+=1)S[O].d();N&&N.d(),H&&u(p),te(g,H),_=!1,T()}}}function Sl(i,e,t){let{data:l}=e,n,o=!1,s="",r,c,f={};pt(()=>{c=Ce.triggers.subscribe(S=>t(8,f=S));let v;v=Ce.initialized.subscribe(S=>{S&&(v&&v(),h())})}),mt(()=>{c&&c()});const a=v=>{n.triggers.push(v.detail),h(),setTimeout(()=>t(2,o=!1))},h=()=>{t(1,n.triggers=[...n.triggers],n),d()},d=()=>Ne.set([...Ie(Ne)]),k=()=>t(2,o=!0);function I(v){s=v,t(0,s)}const j=v=>a({detail:v.clone()}),M=()=>t(2,o=!1);function z(v){o=v,t(2,o)}return i.$$set=v=>{"data"in v&&t(7,l=v.data)},i.$$.update=()=>{i.$$.dirty&128&&l&&t(1,n=l.data),i.$$.dirty&257&&t(3,r=Object.keys(f).filter(v=>v.toLowerCase().includes(s.toLowerCase())).sort((v,S)=>(f[v].component.new().isDeprecated?0:-1)-(f[S].component.new().isDeprecated?0:-1)).map(v=>f[v].component.new()))},[s,n,o,r,a,h,d,l,f,k,I,j,M,z]}class Rl extends ut{constructor(e){super(),_t(this,e,Sl,yl,dt,{data:7})}}export{Rl as component,Ml as universal};
