import{c as Dt,q as Et,d as wt,h as Ze,b as Pt,M as Nt,P as Ct,N as Tt,O as qt,Q as rt,i as pt,e as Ot}from"../chunks/store.6e97e2cf.js";import{I as ft,S as Ce,i as Oe,s as Be,w as P,M as N,y as v,a as L,z as k,c as R,A as w,b as I,N as C,g,d as b,B as T,h as c,H as Ke,k as Q,l as X,m as Y,n as _e,G as _t,a6 as Bt,q as ne,r as le,Q as $t,C as z,E as xe,u as It,e as we,v as Xe,f as Je,o as yt,a5 as At,a0 as Ht,a1 as Vt,X as Mt,a8 as Qe,a7 as St,a9 as zt}from"../chunks/index.50037c78.js";import{r as mt}from"../chunks/index.ade5cbd2.js";import{M as Lt,L as Ft,S as Ye,A as ce,x as Gt}from"../chunks/AttributeInput.f3c2872d.js";import{P as y,T as et}from"../chunks/Toggle.f2310ec7.js";const Ut=!1;async function Wt({params:n}){const t=n.id;let a,l;if(n.type=="class"){for(const i of ft(wt))if(l||(l=i),i.name==t){a=i;break}}else if(n.type=="skill"){for(const i of ft(Ze))if(l||(l=i),i.name==t){a=i;break}}if(a)return Dt.set(a),Et.set(n.type=="class"),{data:a};throw l?mt(302,`/${n.type}/${l.name}`):mt(302,"/")}const An=Object.freeze(Object.defineProperty({__proto__:null,load:Wt,ssr:Ut},Symbol.toStringTag,{value:"Module"}));function jt(n){let t,a,l;function i(e){n[2](e)}let s={};return n[0].material!==void 0&&(s.selected=n[0].material),t=new Lt({props:s}),P.push(()=>N(t,"selected",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.selected=e[0].material,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function Kt(n){let t,a,l;function i(e){n[4](e)}let s={};return n[0].lore!==void 0&&(s.value=n[0].lore),t=new Ft({props:s}),P.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].lore,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function Qt(n){let t,a,l,i,s,e,r;t=new y({props:{label:"Icon",tooltip:"[icon] The item that represents the "+n[1]+" in GUIs",$$slots:{default:[jt]},$$scope:{ctx:n}}});function p($){n[3]($)}let D={label:"CustomModelData",type:"number",intMode:!0,tooltip:"[icon-data] The CustomModelData of the item that represents the "+n[1]+" in GUIs"};return n[0].customModelData!==void 0&&(D.value=n[0].customModelData),l=new y({props:D}),P.push(()=>N(l,"value",p)),e=new y({props:{label:"Icon Lore",tooltip:"[icon-lore]"+n[1]=="class"?"The item's lore description":'The description shown for the item in skill trees. Include values of mechanics such as damage dealt using their "Icon Key" values',$$slots:{default:[Kt]},$$scope:{ctx:n}}}),{c(){v(t.$$.fragment),a=L(),v(l.$$.fragment),s=L(),v(e.$$.fragment)},l($){k(t.$$.fragment,$),a=R($),k(l.$$.fragment,$),s=R($),k(e.$$.fragment,$)},m($,q){w(t,$,q),I($,a,q),w(l,$,q),I($,s,q),w(e,$,q),r=!0},p($,[q]){const M={};q&2&&(M.tooltip="[icon] The item that represents the "+$[1]+" in GUIs"),q&33&&(M.$$scope={dirty:q,ctx:$}),t.$set(M);const B={};q&2&&(B.tooltip="[icon-data] The CustomModelData of the item that represents the "+$[1]+" in GUIs"),!i&&q&1&&(i=!0,B.value=$[0].customModelData,C(()=>i=!1)),l.$set(B);const S={};q&2&&(S.tooltip="[icon-lore]"+$[1]=="class"?"The item's lore description":'The description shown for the item in skill trees. Include values of mechanics such as damage dealt using their "Icon Key" values'),q&33&&(S.$$scope={dirty:q,ctx:$}),e.$set(S)},i($){r||(g(t.$$.fragment,$),g(l.$$.fragment,$),g(e.$$.fragment,$),r=!0)},o($){b(t.$$.fragment,$),b(l.$$.fragment,$),b(e.$$.fragment,$),r=!1},d($){T(t,$),$&&c(a),T(l,$),$&&c(s),T(e,$)}}}function Xt(n,t,a){let l;Ke(n,Pt,p=>a(1,l=p));let{icon:i}=t;function s(p){n.$$.not_equal(i.material,p)&&(i.material=p,a(0,i))}function e(p){n.$$.not_equal(i.customModelData,p)&&(i.customModelData=p,a(0,i))}function r(p){n.$$.not_equal(i.lore,p)&&(i.lore=p,a(0,i))}return n.$$set=p=>{"icon"in p&&a(0,i=p.icon)},[i,l,s,e,r]}class Rt extends Ce{constructor(t){super(),Oe(this,t,Xt,Qt,Be,{icon:0})}}function ct(n,t,a){const l=n.slice();return l[3]=t[a],l[5]=a,l}function gt(n){let t,a=n[3]+"",l,i,s,e;function r(){return n[2](n[5])}return{c(){t=Q("div"),l=ne(a),i=L(),this.h()},l(p){t=X(p,"DIV",{class:!0});var D=Y(t);l=le(D,a),i=R(D),D.forEach(c),this.h()},h(){_e(t,"class","entry svelte-wejg12"),$t(t,"selected",n[0]&Math.pow(2,n[5]))},m(p,D){I(p,t,D),z(t,l),z(t,i),s||(e=xe(t,"click",r),s=!0)},p(p,D){n=p,D&2&&a!==(a=n[3]+"")&&It(l,a),D&1&&$t(t,"selected",n[0]&Math.pow(2,n[5]))},d(p){p&&c(t),s=!1,e()}}}function Jt(n){let t,a=n[1],l=[];for(let i=0;i<a.length;i+=1)l[i]=gt(ct(n,a,i));return{c(){t=Q("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){t=X(i,"DIV",{class:!0});var s=Y(t);for(let e=0;e<l.length;e+=1)l[e].l(s);s.forEach(c),this.h()},h(){_e(t,"class","input svelte-wejg12")},m(i,s){I(i,t,s);for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(t,null)},p(i,[s]){if(s&3){a=i[1];let e;for(e=0;e<a.length;e+=1){const r=ct(i,a,e);l[e]?l[e].p(r,s):(l[e]=gt(r),l[e].c(),l[e].m(t,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=a.length}},i:_t,o:_t,d(i){i&&c(t),Bt(l,i)}}}function Yt(n,t,a){let{value:l=273}=t,{data:i}=t;const s=e=>a(0,l=l^Math.pow(2,e));return n.$$set=e=>{"value"in e&&a(0,l=e.value),"data"in e&&a(1,i=e.data)},[l,i,s]}class Zt extends Ce{constructor(t){super(),Oe(this,t,Yt,Jt,Be,{value:0,data:1})}}function bt(n,t,a){const l=n.slice();return l[22]=t[a],l[23]=t,l[24]=a,l}function dt(n){let t,a,l,i,s,e,r,p,D,$,q,M,B,S,G,A,W,U,E,j,h,H,O,m,f,K,V,ae,Z,ge,re,F=[],be=new Map,se,J,$e,te,ie,pe,x,fe,oe,de,he,ue,ve;function ye(o){n[3](o)}let Ae={label:"Name",tooltip:"The name of the class. This should not contain color codes"};n[0].name!==void 0&&(Ae.value=n[0].name),t=new y({props:Ae}),P.push(()=>N(t,"value",ye));function He(o){n[4](o)}let Ve={label:"Prefix",tooltip:"The prefix given to players who profess as the class which can contain color codes"};n[0].prefix!==void 0&&(Ve.value=n[0].prefix),i=new y({props:Ve}),P.push(()=>N(i,"value",He));function ze(o){n[5](o)}let Fe={label:"Action Bar",tooltip:"The format for the action bar. Leave blank to use the default formatting"};n[0].actionBar!==void 0&&(Fe.value=n[0].actionBar),r=new y({props:Fe}),P.push(()=>N(r,"value",ze));function Ge(o){n[6](o)}let Ue={label:"Group",tooltip:'A class group are things such as "race", "class", and "trade". Different groups can be professed through at the same time, one class from each group'};n[0].group!==void 0&&(Ue.value=n[0].group),$=new y({props:Ue}),P.push(()=>N($,"value",Ge));function We(o){n[7](o)}let u={label:"Mana Name",tooltip:"The name the class uses for mana"};n[0].manaName!==void 0&&(u.value=n[0].manaName),B=new y({props:u}),P.push(()=>N(B,"value",We));function d(o){n[8](o)}let Te={label:"Max Level",type:"number",intMode:!0,tooltip:"The maximum level the class can reach. If this class turns into other classes, this will also be the level it can profess into those classes"};n[0].maxLevel!==void 0&&(Te.value=n[0].maxLevel),A=new y({props:Te}),P.push(()=>N(A,"value",d)),E=new y({props:{label:"Parent",tooltip:"The class that turns into this one. For example, if Fighter turns into Knight, then Knight would have its parent as Fighter",$$slots:{default:[xt]},$$scope:{ctx:n}}}),h=new y({props:{label:"Permission",tooltip:'Whether the class requires a permission to be professed as. The permission would be "skillapi.class.'+n[0].name.toLowerCase()+'"',$$slots:{default:[en]},$$scope:{ctx:n}}}),O=new y({props:{label:"Exp Sources",tooltip:'The experience sources the class goes up from. Most of these only work if "use-exp-orbs" is enabled in the config.yml',$$slots:{default:[tn]},$$scope:{ctx:n}}}),f=new y({props:{label:"Health",tooltip:"The amount of health the class has",$$slots:{default:[nn]},$$scope:{ctx:n}}}),V=new y({props:{label:"Mana",tooltip:"The amount of mana the class has",$$slots:{default:[ln]},$$scope:{ctx:n}}});let me=n[0].attributes;const qe=o=>o[22].name;for(let o=0;o<me.length;o+=1){let _=bt(n,me,o),ee=qe(_);be.set(ee,F[o]=ht(ee,_))}function je(o){n[16](o)}let Ie={label:"Mana Regen",type:"number",tooltip:"The amount of mana the class regenerates at each interval. The interval is in the config.yml and by default is once every second. If you want to regen a decimal amount per second, increase the interval"};n[0].manaRegen!==void 0&&(Ie.value=n[0].manaRegen),J=new y({props:Ie}),P.push(()=>N(J,"value",je)),ie=new y({props:{label:"Skill Tree",tooltip:"The type of skill tree to use",$$slots:{default:[sn]},$$scope:{ctx:n}}}),x=new y({props:{label:"Skills",tooltip:"The skills the class is able to use",$$slots:{default:[on]},$$scope:{ctx:n}}});function Me(o){n[19](o)}let Se={};return n[0].icon!==void 0&&(Se.icon=n[0].icon),oe=new Rt({props:Se}),P.push(()=>N(oe,"icon",Me)),ue=new y({props:{label:"Unusable items",tooltip:"[blacklist] The types of items that the class cannot use",$$slots:{default:[un]},$$scope:{ctx:n}}}),{c(){v(t.$$.fragment),l=L(),v(i.$$.fragment),e=L(),v(r.$$.fragment),D=L(),v($.$$.fragment),M=L(),v(B.$$.fragment),G=L(),v(A.$$.fragment),U=L(),v(E.$$.fragment),j=L(),v(h.$$.fragment),H=L(),v(O.$$.fragment),m=L(),v(f.$$.fragment),K=L(),v(V.$$.fragment),ae=L(),Z=Q("div"),ge=ne("Drag & Drop your attributes file to use your custom attributes"),re=L();for(let o=0;o<F.length;o+=1)F[o].c();se=L(),v(J.$$.fragment),te=L(),v(ie.$$.fragment),pe=L(),v(x.$$.fragment),fe=L(),v(oe.$$.fragment),he=L(),v(ue.$$.fragment),this.h()},l(o){k(t.$$.fragment,o),l=R(o),k(i.$$.fragment,o),e=R(o),k(r.$$.fragment,o),D=R(o),k($.$$.fragment,o),M=R(o),k(B.$$.fragment,o),G=R(o),k(A.$$.fragment,o),U=R(o),k(E.$$.fragment,o),j=R(o),k(h.$$.fragment,o),H=R(o),k(O.$$.fragment,o),m=R(o),k(f.$$.fragment,o),K=R(o),k(V.$$.fragment,o),ae=R(o),Z=X(o,"DIV",{class:!0});var _=Y(Z);ge=le(_,"Drag & Drop your attributes file to use your custom attributes"),_.forEach(c),re=R(o);for(let ee=0;ee<F.length;ee+=1)F[ee].l(o);se=R(o),k(J.$$.fragment,o),te=R(o),k(ie.$$.fragment,o),pe=R(o),k(x.$$.fragment,o),fe=R(o),k(oe.$$.fragment,o),he=R(o),k(ue.$$.fragment,o),this.h()},h(){_e(Z,"class","info svelte-1alyshk")},m(o,_){w(t,o,_),I(o,l,_),w(i,o,_),I(o,e,_),w(r,o,_),I(o,D,_),w($,o,_),I(o,M,_),w(B,o,_),I(o,G,_),w(A,o,_),I(o,U,_),w(E,o,_),I(o,j,_),w(h,o,_),I(o,H,_),w(O,o,_),I(o,m,_),w(f,o,_),I(o,K,_),w(V,o,_),I(o,ae,_),I(o,Z,_),z(Z,ge),I(o,re,_);for(let ee=0;ee<F.length;ee+=1)F[ee]&&F[ee].m(o,_);I(o,se,_),w(J,o,_),I(o,te,_),w(ie,o,_),I(o,pe,_),w(x,o,_),I(o,fe,_),w(oe,o,_),I(o,he,_),w(ue,o,_),ve=!0},p(o,_){const ee={};!a&&_&1&&(a=!0,ee.value=o[0].name,C(()=>a=!1)),t.$set(ee);const Le={};!s&&_&1&&(s=!0,Le.value=o[0].prefix,C(()=>s=!1)),i.$set(Le);const Re={};!p&&_&1&&(p=!0,Re.value=o[0].actionBar,C(()=>p=!1)),r.$set(Re);const De={};!q&&_&1&&(q=!0,De.value=o[0].group,C(()=>q=!1)),$.$set(De);const Ee={};!S&&_&1&&(S=!0,Ee.value=o[0].manaName,C(()=>S=!1)),B.$set(Ee);const Pe={};!W&&_&1&&(W=!0,Pe.value=o[0].maxLevel,C(()=>W=!1)),A.$set(Pe);const Ne={};_&33554435&&(Ne.$$scope={dirty:_,ctx:o}),E.$set(Ne);const ke={};_&1&&(ke.tooltip='Whether the class requires a permission to be professed as. The permission would be "skillapi.class.'+o[0].name.toLowerCase()+'"'),_&33554433&&(ke.$$scope={dirty:_,ctx:o}),h.$set(ke);const tt={};_&33554433&&(tt.$$scope={dirty:_,ctx:o}),O.$set(tt);const nt={};_&33554433&&(nt.$$scope={dirty:_,ctx:o}),f.$set(nt);const lt={};_&33554433&&(lt.$$scope={dirty:_,ctx:o}),V.$set(lt),_&1&&(me=o[0].attributes,Xe(),F=Ht(F,_,qe,1,o,me,be,se.parentNode,Vt,ht,se,bt),Je());const it={};!$e&&_&1&&($e=!0,it.value=o[0].manaRegen,C(()=>$e=!1)),J.$set(it);const at={};_&33554433&&(at.$$scope={dirty:_,ctx:o}),ie.$set(at);const st={};_&33554437&&(st.$$scope={dirty:_,ctx:o}),x.$set(st);const ot={};!de&&_&1&&(de=!0,ot.icon=o[0].icon,C(()=>de=!1)),oe.$set(ot);const ut={};_&33554433&&(ut.$$scope={dirty:_,ctx:o}),ue.$set(ut)},i(o){if(!ve){g(t.$$.fragment,o),g(i.$$.fragment,o),g(r.$$.fragment,o),g($.$$.fragment,o),g(B.$$.fragment,o),g(A.$$.fragment,o),g(E.$$.fragment,o),g(h.$$.fragment,o),g(O.$$.fragment,o),g(f.$$.fragment,o),g(V.$$.fragment,o);for(let _=0;_<me.length;_+=1)g(F[_]);g(J.$$.fragment,o),g(ie.$$.fragment,o),g(x.$$.fragment,o),g(oe.$$.fragment,o),g(ue.$$.fragment,o),ve=!0}},o(o){b(t.$$.fragment,o),b(i.$$.fragment,o),b(r.$$.fragment,o),b($.$$.fragment,o),b(B.$$.fragment,o),b(A.$$.fragment,o),b(E.$$.fragment,o),b(h.$$.fragment,o),b(O.$$.fragment,o),b(f.$$.fragment,o),b(V.$$.fragment,o);for(let _=0;_<F.length;_+=1)b(F[_]);b(J.$$.fragment,o),b(ie.$$.fragment,o),b(x.$$.fragment,o),b(oe.$$.fragment,o),b(ue.$$.fragment,o),ve=!1},d(o){T(t,o),o&&c(l),T(i,o),o&&c(e),T(r,o),o&&c(D),T($,o),o&&c(M),T(B,o),o&&c(G),T(A,o),o&&c(U),T(E,o),o&&c(j),T(h,o),o&&c(H),T(O,o),o&&c(m),T(f,o),o&&c(K),T(V,o),o&&c(ae),o&&c(Z),o&&c(re);for(let _=0;_<F.length;_+=1)F[_].d(o);o&&c(se),T(J,o),o&&c(te),T(ie,o),o&&c(pe),T(x,o),o&&c(fe),T(oe,o),o&&c(he),T(ue,o)}}}function xt(n){let t,a,l;function i(e){n[10](e)}let s={id:"parent",data:n[1].filter(n[9]),display:pn};return n[0].parent!==void 0&&(s.selected=n[0].parent),t=new Ye({props:s}),P.push(()=>N(t,"selected",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};r&3&&(p.data=e[1].filter(e[9])),!a&&r&1&&(a=!0,p.selected=e[0].parent,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function en(n){let t,a,l;function i(e){n[11](e)}let s={};return n[0].permission!==void 0&&(s.data=n[0].permission),t=new et({props:s}),P.push(()=>N(t,"data",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.data=e[0].permission,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function tn(n){let t,a,l;function i(e){n[12](e)}let s={data:Gt};return n[0].expSources!==void 0&&(s.value=n[0].expSources),t=new Zt({props:s}),P.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].expSources,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function nn(n){let t,a,l;function i(e){n[13](e)}let s={};return n[0].health!==void 0&&(s.value=n[0].health),t=new ce({props:s}),P.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].health,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function ln(n){let t,a,l;function i(e){n[14](e)}let s={};return n[0].mana!==void 0&&(s.value=n[0].mana),t=new ce({props:s}),P.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].mana,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function an(n){let t,a,l;function i(e){n[15](e,n[22],n[23],n[24])}let s={};return n[22]!==void 0&&(s.value=n[22]),t=new ce({props:s}),P.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){n=e;const p={};!a&&r&1&&(a=!0,p.value=n[22],C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function ht(n,t){let a,l,i;return l=new y({props:{label:rt(t[22].name),tooltip:"The amount of "+t[22].name+" the class has",$$slots:{default:[an]},$$scope:{ctx:t}}}),{key:n,first:null,c(){a=we(),v(l.$$.fragment),this.h()},l(s){a=we(),k(l.$$.fragment,s),this.h()},h(){this.first=a},m(s,e){I(s,a,e),w(l,s,e),i=!0},p(s,e){t=s;const r={};e&1&&(r.label=rt(t[22].name)),e&1&&(r.tooltip="The amount of "+t[22].name+" the class has"),e&33554433&&(r.$$scope={dirty:e,ctx:t}),l.$set(r)},i(s){i||(g(l.$$.fragment,s),i=!0)},o(s){b(l.$$.fragment,s),i=!1},d(s){s&&c(a),T(l,s)}}}function sn(n){let t,a,l,i,s,e,r,p,D,$,q,M,B,S,G,A,W;return{c(){t=Q("select"),a=Q("option"),l=ne("Custom"),i=Q("option"),s=ne("Requirement"),e=Q("option"),r=ne("Basic Horizontal"),p=Q("option"),D=ne("Basic Vertical"),$=Q("option"),q=ne("Level Horizontal"),M=Q("option"),B=ne("Level Vertical"),S=Q("option"),G=ne("Flood"),this.h()},l(U){t=X(U,"SELECT",{id:!0});var E=Y(t);a=X(E,"OPTION",{});var j=Y(a);l=le(j,"Custom"),j.forEach(c),i=X(E,"OPTION",{});var h=Y(i);s=le(h,"Requirement"),h.forEach(c),e=X(E,"OPTION",{});var H=Y(e);r=le(H,"Basic Horizontal"),H.forEach(c),p=X(E,"OPTION",{});var O=Y(p);D=le(O,"Basic Vertical"),O.forEach(c),$=X(E,"OPTION",{});var m=Y($);q=le(m,"Level Horizontal"),m.forEach(c),M=X(E,"OPTION",{});var f=Y(M);B=le(f,"Level Vertical"),f.forEach(c),S=X(E,"OPTION",{});var K=Y(S);G=le(K,"Flood"),K.forEach(c),E.forEach(c),this.h()},h(){a.__value="Custom",a.value=a.__value,i.__value="Requirement",i.value=i.__value,e.__value="Basic Horizontal",e.value=e.__value,p.__value="Basic Vertical",p.value=p.__value,$.__value="Level Horizontal",$.value=$.__value,M.__value="Level Vertical",M.value=M.__value,S.__value="Flood",S.value=S.__value,_e(t,"id","skill-tree"),n[0].skillTree===void 0&&Mt(()=>n[17].call(t))},m(U,E){I(U,t,E),z(t,a),z(a,l),z(t,i),z(i,s),z(t,e),z(e,r),z(t,p),z(p,D),z(t,$),z($,q),z(t,M),z(M,B),z(t,S),z(S,G),Qe(t,n[0].skillTree,!0),A||(W=xe(t,"change",n[17]),A=!0)},p(U,E){E&1&&Qe(t,U[0].skillTree)},d(U){U&&c(t),A=!1,W()}}}function on(n){let t,a,l;function i(e){n[18](e)}let s={id:"skills",data:n[2],multiple:"true",display:fn,placeholder:"No Skills"};return n[0].skills!==void 0&&(s.selected=n[0].skills),t=new Ye({props:s}),P.push(()=>N(t,"selected",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};r&4&&(p.data=e[2]),!a&&r&1&&(a=!0,p.selected=e[0].skills,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function un(n){let t,a,l;function i(e){n[20](e)}let s={multiple:!0};return n[0].unusableItems!==void 0&&(s.selected=n[0].unusableItems),t=new Lt({props:s}),P.push(()=>N(t,"selected",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.selected=e[0].unusableItems,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function rn(n){let t,a,l=n[0]&&dt(n);return{c(){l&&l.c(),t=we()},l(i){l&&l.l(i),t=we()},m(i,s){l&&l.m(i,s),I(i,t,s),a=!0},p(i,[s]){i[0]?l?(l.p(i,s),s&1&&g(l,1)):(l=dt(i),l.c(),g(l,1),l.m(t.parentNode,t)):l&&(Xe(),b(l,1,1,()=>{l=null}),Je())},i(i){a||(g(l),a=!0)},o(i){b(l),a=!1},d(i){l&&l.d(i),i&&c(t)}}}const pn=n=>n.name,fn=n=>n.name;function _n(n,t,a){let l,i;Ke(n,wt,f=>a(1,l=f)),Ke(n,Ze,f=>a(2,i=f));let{data:s}=t,e;yt(()=>{e=Nt.subscribe(f=>{const K=[];a(0,s.attributes=s.attributes.filter(V=>f!=null&&f.includes(V.name)?(K.push(V.name),!0):!1),s),f=f.filter(V=>!K.includes(V));for(const V of f)s.attributes.push(new Ct(V,0,0))})}),At(()=>{e&&e()});function r(f){n.$$.not_equal(s.name,f)&&(s.name=f,a(0,s))}function p(f){n.$$.not_equal(s.prefix,f)&&(s.prefix=f,a(0,s))}function D(f){n.$$.not_equal(s.actionBar,f)&&(s.actionBar=f,a(0,s))}function $(f){n.$$.not_equal(s.group,f)&&(s.group=f,a(0,s))}function q(f){n.$$.not_equal(s.manaName,f)&&(s.manaName=f,a(0,s))}function M(f){n.$$.not_equal(s.maxLevel,f)&&(s.maxLevel=f,a(0,s))}const B=f=>f!==s;function S(f){n.$$.not_equal(s.parent,f)&&(s.parent=f,a(0,s))}function G(f){n.$$.not_equal(s.permission,f)&&(s.permission=f,a(0,s))}function A(f){n.$$.not_equal(s.expSources,f)&&(s.expSources=f,a(0,s))}function W(f){n.$$.not_equal(s.health,f)&&(s.health=f,a(0,s))}function U(f){n.$$.not_equal(s.mana,f)&&(s.mana=f,a(0,s))}function E(f,K,V,ae){V[ae]=f,a(0,s)}function j(f){n.$$.not_equal(s.manaRegen,f)&&(s.manaRegen=f,a(0,s))}function h(){s.skillTree=St(this),a(0,s)}function H(f){n.$$.not_equal(s.skills,f)&&(s.skills=f,a(0,s))}function O(f){n.$$.not_equal(s.icon,f)&&(s.icon=f,a(0,s))}function m(f){n.$$.not_equal(s.unusableItems,f)&&(s.unusableItems=f,a(0,s))}return n.$$set=f=>{"data"in f&&a(0,s=f.data)},n.$$.update=()=>{n.$$.dirty&1&&(s!=null&&s.name&&Tt(),qt())},[s,l,i,r,p,D,$,q,M,B,S,G,A,W,U,E,j,h,H,O,m]}class $n extends Ce{constructor(t){super(),Oe(this,t,_n,rn,Be,{data:0})}}function vt(n){let t,a,l,i,s,e,r,p,D,$,q,M,B,S,G,A,W,U,E,j,h,H,O,m,f,K,V,ae,Z,ge,re,F,be,se,J,$e,te,ie,pe,x,fe;function oe(u){n[2](u)}let de={label:"Name",tooltip:"The name of the skill. This should not contain color codes"};n[0].name!==void 0&&(de.value=n[0].name),t=new y({props:de}),P.push(()=>N(t,"value",oe));function he(u){n[3](u)}let ue={label:"Type",tooltip:'The flavor text describing the skill such as "AOE utility" or whatever you want it to be'};n[0].type!==void 0&&(ue.value=n[0].type),i=new y({props:ue}),P.push(()=>N(i,"value",he));function ve(u){n[4](u)}let ye={label:"Max Level",type:"number",tooltip:"The maximum level the skill can reach"};n[0].maxLevel!==void 0&&(ye.value=n[0].maxLevel),r=new y({props:ye}),P.push(()=>N(r,"value",ve)),$=new y({props:{label:"Skill Requirement",tooltip:"The skill that needs to be upgraded before this one can be unlocked",$$slots:{default:[mn]},$$scope:{ctx:n}}});function Ae(u){n[7](u)}let He={label:"Skill Req Level",type:"number",intMode:!0,tooltip:"The level that the required skill needs to reach before this one can be unlocked"};n[0].skillReqLevel!==void 0&&(He.value=n[0].skillReqLevel),M=new y({props:He}),P.push(()=>N(M,"value",Ae)),G=new y({props:{label:"Permission",tooltip:'Whether this skill requires a permission to unlock. The permission would be "skillapi.skill.'+n[0].name+'"',$$slots:{default:[cn]},$$scope:{ctx:n}}}),W=new y({props:{label:"Level Req",tooltip:"The class level the player needs to be before unlocking or upgrading this skill",$$slots:{default:[gn]},$$scope:{ctx:n}}}),E=new y({props:{label:"Cost",tooltip:"The amount of skill points needed to unlock and upgrade this skill",$$slots:{default:[bn]},$$scope:{ctx:n}}}),h=new y({props:{label:"Cooldown",tooltip:"The time in seconds before the skill can be cast again (only works with the Cast trigger)",$$slots:{default:[dn]},$$scope:{ctx:n}}}),O=new y({props:{label:"Cooldown Message",tooltip:"Whether to send a message when attempting to run the skill while in cooldown",$$slots:{default:[hn]},$$scope:{ctx:n}}}),f=new y({props:{label:"Mana",tooltip:"The amount of mana it takes to cast the skill (only works with the Cast trigger)",$$slots:{default:[vn]},$$scope:{ctx:n}}}),V=new y({props:{label:"Min Spent",tooltip:"The amount of skill points that need to be spent before upgrading this skill",$$slots:{default:[kn]},$$scope:{ctx:n}}});function Ve(u){n[15](u)}let ze={label:"Cast Message",tooltip:"The message to display to players around the caster when the skill is cast. The radius of the area is in the config.yml options"};n[0].castMessage!==void 0&&(ze.value=n[0].castMessage),Z=new y({props:ze}),P.push(()=>N(Z,"value",Ve));function Fe(u){n[16](u)}let Ge={label:"Combo",tooltip:'The click combo to assign the skill (if enabled). Use L, R, S, LS, RS, P, Q and F for the types of clicks separated by spaces. For example, "L L R R" would work for 4 click combos.'};n[0].combo!==void 0&&(Ge.value=n[0].combo),F=new y({props:Ge}),P.push(()=>N(F,"value",Fe)),J=new y({props:{label:"Indicator",tooltip:'What sort of display to use for cast previews. This applies to the "hover bar" in the casting bars setup',$$slots:{default:[wn]},$$scope:{ctx:n}}});function Ue(u){n[18](u)}let We={};return n[0].icon!==void 0&&(We.icon=n[0].icon),te=new Rt({props:We}),P.push(()=>N(te,"icon",Ue)),x=new y({props:{label:"Incompatible",tooltip:"List of skills that must not be upgraded in order to upgrade this skill",$$slots:{default:[Tn]},$$scope:{ctx:n}}}),{c(){v(t.$$.fragment),l=L(),v(i.$$.fragment),e=L(),v(r.$$.fragment),D=L(),v($.$$.fragment),q=L(),v(M.$$.fragment),S=L(),v(G.$$.fragment),A=L(),v(W.$$.fragment),U=L(),v(E.$$.fragment),j=L(),v(h.$$.fragment),H=L(),v(O.$$.fragment),m=L(),v(f.$$.fragment),K=L(),v(V.$$.fragment),ae=L(),v(Z.$$.fragment),re=L(),v(F.$$.fragment),se=L(),v(J.$$.fragment),$e=L(),v(te.$$.fragment),pe=L(),v(x.$$.fragment)},l(u){k(t.$$.fragment,u),l=R(u),k(i.$$.fragment,u),e=R(u),k(r.$$.fragment,u),D=R(u),k($.$$.fragment,u),q=R(u),k(M.$$.fragment,u),S=R(u),k(G.$$.fragment,u),A=R(u),k(W.$$.fragment,u),U=R(u),k(E.$$.fragment,u),j=R(u),k(h.$$.fragment,u),H=R(u),k(O.$$.fragment,u),m=R(u),k(f.$$.fragment,u),K=R(u),k(V.$$.fragment,u),ae=R(u),k(Z.$$.fragment,u),re=R(u),k(F.$$.fragment,u),se=R(u),k(J.$$.fragment,u),$e=R(u),k(te.$$.fragment,u),pe=R(u),k(x.$$.fragment,u)},m(u,d){w(t,u,d),I(u,l,d),w(i,u,d),I(u,e,d),w(r,u,d),I(u,D,d),w($,u,d),I(u,q,d),w(M,u,d),I(u,S,d),w(G,u,d),I(u,A,d),w(W,u,d),I(u,U,d),w(E,u,d),I(u,j,d),w(h,u,d),I(u,H,d),w(O,u,d),I(u,m,d),w(f,u,d),I(u,K,d),w(V,u,d),I(u,ae,d),w(Z,u,d),I(u,re,d),w(F,u,d),I(u,se,d),w(J,u,d),I(u,$e,d),w(te,u,d),I(u,pe,d),w(x,u,d),fe=!0},p(u,d){const Te={};!a&&d&1&&(a=!0,Te.value=u[0].name,C(()=>a=!1)),t.$set(Te);const me={};!s&&d&1&&(s=!0,me.value=u[0].type,C(()=>s=!1)),i.$set(me);const qe={};!p&&d&1&&(p=!0,qe.value=u[0].maxLevel,C(()=>p=!1)),r.$set(qe);const je={};d&2097155&&(je.$$scope={dirty:d,ctx:u}),$.$set(je);const Ie={};!B&&d&1&&(B=!0,Ie.value=u[0].skillReqLevel,C(()=>B=!1)),M.$set(Ie);const Me={};d&1&&(Me.tooltip='Whether this skill requires a permission to unlock. The permission would be "skillapi.skill.'+u[0].name+'"'),d&2097153&&(Me.$$scope={dirty:d,ctx:u}),G.$set(Me);const Se={};d&2097153&&(Se.$$scope={dirty:d,ctx:u}),W.$set(Se);const o={};d&2097153&&(o.$$scope={dirty:d,ctx:u}),E.$set(o);const _={};d&2097153&&(_.$$scope={dirty:d,ctx:u}),h.$set(_);const ee={};d&2097153&&(ee.$$scope={dirty:d,ctx:u}),O.$set(ee);const Le={};d&2097153&&(Le.$$scope={dirty:d,ctx:u}),f.$set(Le);const Re={};d&2097153&&(Re.$$scope={dirty:d,ctx:u}),V.$set(Re);const De={};!ge&&d&1&&(ge=!0,De.value=u[0].castMessage,C(()=>ge=!1)),Z.$set(De);const Ee={};!be&&d&1&&(be=!0,Ee.value=u[0].combo,C(()=>be=!1)),F.$set(Ee);const Pe={};d&2097153&&(Pe.$$scope={dirty:d,ctx:u}),J.$set(Pe);const Ne={};!ie&&d&1&&(ie=!0,Ne.icon=u[0].icon,C(()=>ie=!1)),te.$set(Ne);const ke={};d&2097155&&(ke.$$scope={dirty:d,ctx:u}),x.$set(ke)},i(u){fe||(g(t.$$.fragment,u),g(i.$$.fragment,u),g(r.$$.fragment,u),g($.$$.fragment,u),g(M.$$.fragment,u),g(G.$$.fragment,u),g(W.$$.fragment,u),g(E.$$.fragment,u),g(h.$$.fragment,u),g(O.$$.fragment,u),g(f.$$.fragment,u),g(V.$$.fragment,u),g(Z.$$.fragment,u),g(F.$$.fragment,u),g(J.$$.fragment,u),g(te.$$.fragment,u),g(x.$$.fragment,u),fe=!0)},o(u){b(t.$$.fragment,u),b(i.$$.fragment,u),b(r.$$.fragment,u),b($.$$.fragment,u),b(M.$$.fragment,u),b(G.$$.fragment,u),b(W.$$.fragment,u),b(E.$$.fragment,u),b(h.$$.fragment,u),b(O.$$.fragment,u),b(f.$$.fragment,u),b(V.$$.fragment,u),b(Z.$$.fragment,u),b(F.$$.fragment,u),b(J.$$.fragment,u),b(te.$$.fragment,u),b(x.$$.fragment,u),fe=!1},d(u){T(t,u),u&&c(l),T(i,u),u&&c(e),T(r,u),u&&c(D),T($,u),u&&c(q),T(M,u),u&&c(S),T(G,u),u&&c(A),T(W,u),u&&c(U),T(E,u),u&&c(j),T(h,u),u&&c(H),T(O,u),u&&c(m),T(f,u),u&&c(K),T(V,u),u&&c(ae),T(Z,u),u&&c(re),T(F,u),u&&c(se),T(J,u),u&&c($e),T(te,u),u&&c(pe),T(x,u)}}}function mn(n){let t,a,l;function i(e){n[6](e)}let s={data:n[1].filter(n[5]),display:In};return n[0].skillReq!==void 0&&(s.selected=n[0].skillReq),t=new Ye({props:s}),P.push(()=>N(t,"selected",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};r&3&&(p.data=e[1].filter(e[5])),!a&&r&1&&(a=!0,p.selected=e[0].skillReq,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function cn(n){let t,a,l;function i(e){n[8](e)}let s={};return n[0].permission!==void 0&&(s.data=n[0].permission),t=new et({props:s}),P.push(()=>N(t,"data",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.data=e[0].permission,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function gn(n){let t,a,l;function i(e){n[9](e)}let s={};return n[0].levelReq!==void 0&&(s.value=n[0].levelReq),t=new ce({props:s}),P.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].levelReq,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function bn(n){let t,a,l;function i(e){n[10](e)}let s={};return n[0].cost!==void 0&&(s.value=n[0].cost),t=new ce({props:s}),P.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].cost,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function dn(n){let t,a,l;function i(e){n[11](e)}let s={};return n[0].cooldown!==void 0&&(s.value=n[0].cooldown),t=new ce({props:s}),P.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].cooldown,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function hn(n){let t,a,l;function i(e){n[12](e)}let s={};return n[0].cooldownMessage!==void 0&&(s.value=n[0].cooldownMessage),t=new et({props:s}),P.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].cooldownMessage,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function vn(n){let t,a,l;function i(e){n[13](e)}let s={};return n[0].mana!==void 0&&(s.value=n[0].mana),t=new ce({props:s}),P.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].mana,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function kn(n){let t,a,l;function i(e){n[14](e)}let s={};return n[0].minSpent!==void 0&&(s.value=n[0].minSpent),t=new ce({props:s}),P.push(()=>N(t,"value",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.value=e[0].minSpent,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function wn(n){let t,a,l,i,s,e,r,p,D;return{c(){t=Q("select"),a=Q("option"),l=ne("2D"),i=Q("option"),s=ne("3D"),e=Q("option"),r=ne("None"),this.h()},l($){t=X($,"SELECT",{});var q=Y(t);a=X(q,"OPTION",{});var M=Y(a);l=le(M,"2D"),M.forEach(c),i=X(q,"OPTION",{});var B=Y(i);s=le(B,"3D"),B.forEach(c),e=X(q,"OPTION",{});var S=Y(e);r=le(S,"None"),S.forEach(c),q.forEach(c),this.h()},h(){a.__value="2D",a.value=a.__value,i.__value="3D",i.value=i.__value,e.__value="None",e.value=e.__value,n[0].indicator===void 0&&Mt(()=>n[17].call(t))},m($,q){I($,t,q),z(t,a),z(a,l),z(t,i),z(i,s),z(t,e),z(e,r),Qe(t,n[0].indicator,!0),p||(D=xe(t,"change",n[17]),p=!0)},p($,q){q&1&&Qe(t,$[0].indicator)},d($){$&&c(t),p=!1,D()}}}function Tn(n){let t,a,l;function i(e){n[20](e)}let s={multiple:!0,data:n[1].filter(n[19]),display:Mn};return n[0].incompatible!==void 0&&(s.selected=n[0].incompatible),t=new Ye({props:s}),P.push(()=>N(t,"selected",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};r&3&&(p.data=e[1].filter(e[19])),!a&&r&1&&(a=!0,p.selected=e[0].incompatible,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function qn(n){let t,a,l=n[0]&&vt(n);return{c(){l&&l.c(),t=we()},l(i){l&&l.l(i),t=we()},m(i,s){l&&l.m(i,s),I(i,t,s),a=!0},p(i,[s]){i[0]?l?(l.p(i,s),s&1&&g(l,1)):(l=vt(i),l.c(),g(l,1),l.m(t.parentNode,t)):l&&(Xe(),b(l,1,1,()=>{l=null}),Je())},i(i){a||(g(l),a=!0)},o(i){b(l),a=!1},d(i){l&&l.d(i),i&&c(t)}}}const In=n=>n.name,Mn=n=>n.name;function Sn(n,t,a){let l;Ke(n,Ze,m=>a(1,l=m));let{data:i}=t;function s(m){n.$$.not_equal(i.name,m)&&(i.name=m,a(0,i))}function e(m){n.$$.not_equal(i.type,m)&&(i.type=m,a(0,i))}function r(m){n.$$.not_equal(i.maxLevel,m)&&(i.maxLevel=m,a(0,i))}const p=m=>m!==i;function D(m){n.$$.not_equal(i.skillReq,m)&&(i.skillReq=m,a(0,i))}function $(m){n.$$.not_equal(i.skillReqLevel,m)&&(i.skillReqLevel=m,a(0,i))}function q(m){n.$$.not_equal(i.permission,m)&&(i.permission=m,a(0,i))}function M(m){n.$$.not_equal(i.levelReq,m)&&(i.levelReq=m,a(0,i))}function B(m){n.$$.not_equal(i.cost,m)&&(i.cost=m,a(0,i))}function S(m){n.$$.not_equal(i.cooldown,m)&&(i.cooldown=m,a(0,i))}function G(m){n.$$.not_equal(i.cooldownMessage,m)&&(i.cooldownMessage=m,a(0,i))}function A(m){n.$$.not_equal(i.mana,m)&&(i.mana=m,a(0,i))}function W(m){n.$$.not_equal(i.minSpent,m)&&(i.minSpent=m,a(0,i))}function U(m){n.$$.not_equal(i.castMessage,m)&&(i.castMessage=m,a(0,i))}function E(m){n.$$.not_equal(i.combo,m)&&(i.combo=m,a(0,i))}function j(){i.indicator=St(this),a(0,i)}function h(m){n.$$.not_equal(i.icon,m)&&(i.icon=m,a(0,i))}const H=m=>m!==i;function O(m){n.$$.not_equal(i.incompatible,m)&&(i.incompatible=m,a(0,i))}return n.$$set=m=>{"data"in m&&a(0,i=m.data)},n.$$.update=()=>{n.$$.dirty&1&&(i!=null&&i.name&&Tt(),qt())},[i,l,s,e,r,p,D,$,q,M,B,S,G,A,W,U,E,j,h,H,O]}class Ln extends Ce{constructor(t){super(),Oe(this,t,Sn,qn,Be,{data:0})}}function kt(n){let t,a,l;return{c(){t=Q("a"),a=ne("auto_fix"),this.h()},l(i){t=X(i,"A",{href:!0,class:!0});var s=Y(t);a=le(s,"auto_fix"),s.forEach(c),this.h()},h(){_e(t,"href",l="/skill/"+n[0].data.name),_e(t,"class","material-symbols-rounded chip edit-skill svelte-191pm8d")},m(i,s){I(i,t,s),z(t,a)},p(i,s){s&1&&l!==(l="/skill/"+i[0].data.name)&&_e(t,"href",l)},d(i){i&&c(t)}}}function Rn(n){let t,a,l;function i(e){n[2](e)}let s={};return n[0].data!==void 0&&(s.data=n[0].data),t=new Ln({props:s}),P.push(()=>N(t,"data",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.data=e[0].data,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function Dn(n){let t,a,l;function i(e){n[1](e)}let s={};return n[0].data!==void 0&&(s.data=n[0].data),t=new $n({props:s}),P.push(()=>N(t,"data",i)),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,r){const p={};!a&&r&1&&(a=!0,p.data=e[0].data,C(()=>a=!1)),t.$set(p)},i(e){l||(g(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){T(t,e)}}}function En(n){var U,E,j;let t,a,l,i=((E=(U=n[0])==null?void 0:U.data)==null?void 0:E.name)+"",s,e,r,p,D,$,q,M,B;document.title=t="ProSkillAPI Dynamic Editor - "+n[0].data.name;let S=((j=n[0])==null?void 0:j.data)instanceof pt&&kt(n);const G=[Dn,Rn],A=[];function W(h,H){var O;return((O=h[0])==null?void 0:O.data)instanceof Ot?0:1}return q=W(n),M=A[q]=G[q](n),{c(){a=L(),l=Q("h1"),s=ne(i),e=L(),S&&S.c(),r=L(),p=Q("hr"),D=L(),$=Q("div"),M.c(),this.h()},l(h){zt("svelte-ufhrov",document.head).forEach(c),a=R(h),l=X(h,"H1",{class:!0});var O=Y(l);s=le(O,i),e=R(O),S&&S.l(O),O.forEach(c),r=R(h),p=X(h,"HR",{}),D=R(h),$=X(h,"DIV",{class:!0});var m=Y($);M.l(m),m.forEach(c),this.h()},h(){_e(l,"class","svelte-191pm8d"),_e($,"class","container svelte-191pm8d")},m(h,H){I(h,a,H),I(h,l,H),z(l,s),z(l,e),S&&S.m(l,null),I(h,r,H),I(h,p,H),I(h,D,H),I(h,$,H),A[q].m($,null),B=!0},p(h,[H]){var m,f,K;(!B||H&1)&&t!==(t="ProSkillAPI Dynamic Editor - "+h[0].data.name)&&(document.title=t),(!B||H&1)&&i!==(i=((f=(m=h[0])==null?void 0:m.data)==null?void 0:f.name)+"")&&It(s,i),((K=h[0])==null?void 0:K.data)instanceof pt?S?S.p(h,H):(S=kt(h),S.c(),S.m(l,null)):S&&(S.d(1),S=null);let O=q;q=W(h),q===O?A[q].p(h,H):(Xe(),b(A[O],1,1,()=>{A[O]=null}),Je(),M=A[q],M?M.p(h,H):(M=A[q]=G[q](h),M.c()),g(M,1),M.m($,null))},i(h){B||(g(M),B=!0)},o(h){b(M),B=!1},d(h){h&&c(a),h&&c(l),S&&S.d(),h&&c(r),h&&c(p),h&&c(D),h&&c($),A[q].d()}}}function Pn(n,t,a){let{data:l}=t;function i(e){n.$$.not_equal(l.data,e)&&(l.data=e,a(0,l))}function s(e){n.$$.not_equal(l.data,e)&&(l.data=e,a(0,l))}return n.$$set=e=>{"data"in e&&a(0,l=e.data)},[l,i,s]}class Hn extends Ce{constructor(t){super(),Oe(this,t,Pn,En,Be,{data:0})}}export{Hn as component,An as universal};
