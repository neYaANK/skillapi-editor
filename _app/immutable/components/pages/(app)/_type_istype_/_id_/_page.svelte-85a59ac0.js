import{S as Me,i as Oe,s as Re,k as N,a as M,q as z,e as le,l as A,m as y,c as O,h as p,r as J,n as H,p as je,b as V,C as k,E as X,I as te,f as b,u as _e,g as U,t as T,d as x,P as Fe,F as pe,aa as Ke,N as ee,X as L,a2 as me,Y as se,Z as oe,w as j,x as Y,y as F,$ as ie,z as K,a3 as fe,T as Le,O as Be,v as $e,ai as Xe,H as be,J as ke,R as Ye}from"../../../../../chunks/index-e7d75b57.js";import{b as Q,I as ae,J as we,K as de,L as Ee,M as Ze,S as Ge,N as Qe}from"../../../../../chunks/store-310fecc0.js";import{s as De,M as ze}from"../../../../../chunks/squish-60d93c0b.js";import{T as Je}from"../../../../../chunks/Toggle-2c9de46f.js";function Ie(o,e,t){const s=o.slice();return s[20]=e[t],s[21]=e,s[22]=t,s}function Se(o,e,t){const s=o.slice();return s[23]=e[t],s[24]=e,s[25]=t,s}function Ue(o){let e,t,s;return{c(){e=N("span"),t=z("expand_less"),this.h()},l(l){e=A(l,"SPAN",{class:!0});var a=y(e);t=J(a,"expand_less"),a.forEach(p),this.h()},h(){H(e,"class","material-symbols-rounded svelte-1fueshd")},m(l,a){V(l,e,a),k(e,t)},i(l){l&&(s||ee(()=>{s=Be(e,o[7],{duration:400}),s.start()}))},o:fe,d(l){l&&p(e)}}}function xe(o){let e,t,s;return{c(){e=N("span"),t=z("expand_more"),this.h()},l(l){e=A(l,"SPAN",{class:!0});var a=y(e);t=J(a,"expand_more"),a.forEach(p),this.h()},h(){H(e,"class","material-symbols-rounded svelte-1fueshd")},m(l,a){V(l,e,a),k(e,t)},i(l){l&&(s||ee(()=>{s=Be(e,o[7],{duration:400}),s.start()}))},o:fe,d(l){l&&p(e)}}}function Pe(o){let e,t,s,l,a,r,u=o[0].components,n=[];for(let i=0;i<u.length;i+=1)n[i]=Ve(Se(o,u,i));const _=i=>T(n[i],1,1,()=>{n[i]=null});return{c(){e=N("div");for(let i=0;i<n.length;i+=1)n[i].c();t=M(),s=N("div"),l=z("+ Add Component"),this.h()},l(i){e=A(i,"DIV",{class:!0});var h=y(e);for(let D=0;D<n.length;D+=1)n[D].l(h);t=O(h),s=A(h,"DIV",{class:!0});var c=y(s);l=J(c,"+ Add Component"),c.forEach(p),h.forEach(p),this.h()},h(){H(s,"class","chip svelte-1fueshd"),H(e,"class","children svelte-1fueshd")},m(i,h){V(i,e,h);for(let c=0;c<n.length;c+=1)n[c].m(e,null);k(e,t),k(e,s),k(s,l),r=!0},p(i,h){if(h&3){u=i[0].components;let c;for(c=0;c<u.length;c+=1){const D=Se(i,u,c);n[c]?(n[c].p(D,h),b(n[c],1)):(n[c]=Ve(D),n[c].c(),b(n[c],1),n[c].m(e,t))}for(U(),c=u.length;c<n.length;c+=1)_(c);x()}},i(i){if(!r){for(let h=0;h<u.length;h+=1)b(n[h]);i&&ee(()=>{a||(a=L(e,Q,{},!0)),a.run(1)}),r=!0}},o(i){n=n.filter(Boolean);for(let h=0;h<n.length;h+=1)T(n[h]);i&&(a||(a=L(e,Q,{},!1)),a.run(0)),r=!1},d(i){i&&p(e),me(n,i),i&&a&&a.end()}}}function Ve(o){let e,t,s,l,a;function r(n){o[9](n,o[23],o[24],o[25])}let u={skill:o[1]};return o[23]!==void 0&&(u.component=o[23]),t=new We({props:u}),se.push(()=>oe(t,"component",r)),t.$on("update",o[10]),{c(){e=N("span"),j(t.$$.fragment)},l(n){e=A(n,"SPAN",{});var _=y(e);Y(t.$$.fragment,_),_.forEach(p)},m(n,_){V(n,e,_),F(t,e,null),a=!0},p(n,_){o=n;const i={};_&2&&(i.skill=o[1]),!s&&_&1&&(s=!0,i.component=o[23],ie(()=>s=!1)),t.$set(i)},i(n){a||(b(t.$$.fragment,n),n&&ee(()=>{l||(l=L(e,Q,{},!0)),l.run(1)}),a=!0)},o(n){T(t.$$.fragment,n),n&&(l||(l=L(e,Q,{},!1)),l.run(0)),a=!1},d(n){n&&p(e),K(t),n&&l&&l.end()}}}function Ce(o){let e,t,s,l,a,r,u,n,_,i,h,c;return{c(){e=N("div"),t=N("div"),s=z("content_copy"),a=M(),r=N("div"),u=z("delete"),this.h()},l(D){e=A(D,"DIV",{class:!0});var f=y(e);t=A(f,"DIV",{class:!0,title:!0});var g=y(t);s=J(g,"content_copy"),g.forEach(p),a=O(f),r=A(f,"DIV",{class:!0,title:!0});var v=y(r);u=J(v,"delete"),v.forEach(p),f.forEach(p),this.h()},h(){H(t,"class","side-button copy material-symbols-rounded svelte-1fueshd"),H(t,"title","Copy"),H(r,"class","side-button delete material-symbols-rounded svelte-1fueshd"),H(r,"title","Delete"),H(e,"class","side-buttons svelte-1fueshd")},m(D,f){V(D,e,f),k(e,t),k(t,s),k(e,a),k(e,r),k(r,u),i=!0,h||(c=[X(t,"click",te(o[14])),X(r,"click",te(o[15]))],h=!0)},p:fe,i(D){i||(ee(()=>{l||(l=L(t,Q,{},!0)),l.run(1)}),ee(()=>{n||(n=L(r,Q,{},!0)),n.run(1)}),ee(()=>{_||(_=L(e,De,{duration:300},!0)),_.run(1)}),i=!0)},o(D){l||(l=L(t,Q,{},!1)),l.run(0),n||(n=L(r,Q,{},!1)),n.run(0),_||(_=L(e,De,{duration:300},!1)),_.run(0),i=!1},d(D){D&&p(e),D&&l&&l.end(),D&&n&&n.end(),D&&_&&_.end(),h=!1,pe(c)}}}function Ne(o){let e,t;return e=new ze({props:{width:"70%",$$slots:{default:[lt]},$$scope:{ctx:o}}}),e.$on("close",o[19]),{c(){j(e.$$.fragment)},l(s){Y(e.$$.fragment,s)},m(s,l){F(e,s,l),t=!0},p(s,l){const a={};l&67108865&&(a.$$scope={dirty:l,ctx:s}),e.$set(a)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){K(e,s)}}}function Ae(o){let e,t,s,l;return e=new Ee({props:{label:"Mana",$$slots:{default:[et]},$$scope:{ctx:o}}}),s=new Ee({props:{label:"Cooldown",$$slots:{default:[tt]},$$scope:{ctx:o}}}),{c(){j(e.$$.fragment),t=M(),j(s.$$.fragment)},l(a){Y(e.$$.fragment,a),t=O(a),Y(s.$$.fragment,a)},m(a,r){F(e,a,r),V(a,t,r),F(s,a,r),l=!0},p(a,r){const u={};r&67108865&&(u.$$scope={dirty:r,ctx:a}),e.$set(u);const n={};r&67108865&&(n.$$scope={dirty:r,ctx:a}),s.$set(n)},i(a){l||(b(e.$$.fragment,a),b(s.$$.fragment,a),l=!0)},o(a){T(e.$$.fragment,a),T(s.$$.fragment,a),l=!1},d(a){K(e,a),a&&p(t),K(s,a)}}}function et(o){let e,t,s;function l(r){o[16](r)}let a={};return o[0].mana!==void 0&&(a.data=o[0].mana),e=new Je({props:a}),se.push(()=>oe(e,"data",l)),{c(){j(e.$$.fragment)},l(r){Y(e.$$.fragment,r)},m(r,u){F(e,r,u),s=!0},p(r,u){const n={};!t&&u&1&&(t=!0,n.data=r[0].mana,ie(()=>t=!1)),e.$set(n)},i(r){s||(b(e.$$.fragment,r),s=!0)},o(r){T(e.$$.fragment,r),s=!1},d(r){K(e,r)}}}function tt(o){let e,t,s;function l(r){o[17](r)}let a={};return o[0].cooldown!==void 0&&(a.data=o[0].cooldown),e=new Je({props:a}),se.push(()=>oe(e,"data",l)),{c(){j(e.$$.fragment)},l(r){Y(e.$$.fragment,r)},m(r,u){F(e,r,u),s=!0},p(r,u){const n={};!t&&u&1&&(t=!0,n.data=r[0].cooldown,ie(()=>t=!1)),e.$set(n)},i(r){s||(b(e.$$.fragment,r),s=!0)},o(r){T(e.$$.fragment,r),s=!1},d(r){K(e,r)}}}function Te(o){let e,t,s,l;function a(n){o[18](n,o[20])}var r=o[20].component;function u(n){let _={color:!0};return n[20].data!==void 0&&(_.data=n[20].data),{props:_}}return r&&(e=$e(r,u(o)),se.push(()=>oe(e,"data",a))),{c(){e&&j(e.$$.fragment),s=le()},l(n){e&&Y(e.$$.fragment,n),s=le()},m(n,_){e&&F(e,n,_),V(n,s,_),l=!0},p(n,_){o=n;const i={};if(!t&&_&1&&(t=!0,i.data=o[20].data,ie(()=>t=!1)),r!==(r=o[20].component)){if(e){U();const h=e;T(h.$$.fragment,1,0,()=>{K(h,1)}),x()}r?(e=$e(r,u(o)),se.push(()=>oe(e,"data",a)),j(e.$$.fragment),b(e.$$.fragment,1),F(e,s.parentNode,s)):e=null}else r&&e.$set(i)},i(n){l||(e&&b(e.$$.fragment,n),l=!0)},o(n){e&&T(e.$$.fragment,n),l=!1},d(n){n&&p(s),e&&K(e,n)}}}function lt(o){let e,t=o[0].name+"",s,l,a,r,u,n,_,i=o[0]instanceof ae&&Ae(o),h=o[0].data,c=[];for(let f=0;f<h.length;f+=1)c[f]=Te(Ie(o,h,f));const D=f=>T(c[f],1,1,()=>{c[f]=null});return{c(){e=N("h2"),s=z(t),l=M(),a=N("hr"),r=M(),u=N("div"),i&&i.c(),n=M();for(let f=0;f<c.length;f+=1)c[f].c();this.h()},l(f){e=A(f,"H2",{});var g=y(e);s=J(g,t),g.forEach(p),l=O(f),a=A(f,"HR",{}),r=O(f),u=A(f,"DIV",{class:!0});var v=y(u);i&&i.l(v),n=O(v);for(let q=0;q<c.length;q+=1)c[q].l(v);v.forEach(p),this.h()},h(){H(u,"class","component-entry svelte-1fueshd")},m(f,g){V(f,e,g),k(e,s),V(f,l,g),V(f,a,g),V(f,r,g),V(f,u,g),i&&i.m(u,null),k(u,n);for(let v=0;v<c.length;v+=1)c[v].m(u,null);_=!0},p(f,g){if((!_||g&1)&&t!==(t=f[0].name+"")&&_e(s,t),f[0]instanceof ae?i?(i.p(f,g),g&1&&b(i,1)):(i=Ae(f),i.c(),b(i,1),i.m(u,n)):i&&(U(),T(i,1,1,()=>{i=null}),x()),g&1){h=f[0].data;let v;for(v=0;v<h.length;v+=1){const q=Ie(f,h,v);c[v]?(c[v].p(q,g),b(c[v],1)):(c[v]=Te(q),c[v].c(),b(c[v],1),c[v].m(u,null))}for(U(),v=h.length;v<c.length;v+=1)D(v);x()}},i(f){if(!_){b(i);for(let g=0;g<h.length;g+=1)b(c[g]);_=!0}},o(f){T(i),c=c.filter(Boolean);for(let g=0;g<c.length;g+=1)T(c[g]);_=!1},d(f){f&&p(e),f&&p(l),f&&p(a),f&&p(r),f&&p(u),i&&i.d(),me(c,f)}}}function nt(o){let e,t,s,l,a,r,u,n=o[5]()+"",_,i,h=o[0].name+"",c,D,f,g,v,q,R,Z,G;function W(E,$){return E[3]?xe:Ue}let B=W(o),w=B(o),P=!o[3]&&Pe(o),I=!o[3]&&Ce(o),m=o[2]&&Ne(o);return{c(){e=N("div"),t=N("div"),w.c(),s=M(),l=N("div"),a=M(),r=N("div"),u=N("span"),_=z(n),i=z(": "),c=z(h),D=M(),P&&P.c(),g=M(),I&&I.c(),v=M(),m&&m.c(),q=le(),this.h()},l(E){e=A(E,"DIV",{class:!0});var $=y(e);t=A($,"DIV",{draggable:!0,class:!0});var d=y(t);w.l(d),s=O(d),l=A(d,"DIV",{class:!0}),y(l).forEach(p),a=O(d),r=A(d,"DIV",{class:!0});var S=y(r);u=A(S,"SPAN",{class:!0});var C=y(u);_=J(C,n),C.forEach(p),i=J(S,": "),c=J(S,h),S.forEach(p),D=O(d),P&&P.l(d),d.forEach(p),g=O($),I&&I.l($),$.forEach(p),v=O(E),m&&m.l(E),q=le(),this.h()},h(){H(l,"class","corner svelte-1fueshd"),H(u,"class","svelte-1fueshd"),H(r,"class","name svelte-1fueshd"),H(t,"draggable","true"),H(t,"class","comp-body svelte-1fueshd"),je(t,"--comp-color",o[6]()),H(e,"class","wrapper svelte-1fueshd")},m(E,$){V(E,e,$),k(e,t),w.m(t,null),k(t,s),k(t,l),k(t,a),k(t,r),k(r,u),k(u,_),k(r,i),k(r,c),k(t,D),P&&P.m(t,null),k(e,g),I&&I.m(e,null),V(E,v,$),m&&m.m(E,$),V(E,q,$),R=!0,Z||(G=[X(l,"click",te(o[8])),X(t,"dragstart",te(o[11])),X(t,"dragend",o[12]),X(t,"click",te(o[13]))],Z=!0)},p(E,[$]){B!==(B=W(E))&&(w.d(1),w=B(E),w&&(w.c(),b(w,1),w.m(t,s))),(!R||$&1)&&h!==(h=E[0].name+"")&&_e(c,h),E[3]?P&&(U(),T(P,1,1,()=>{P=null}),x()):P?(P.p(E,$),$&8&&b(P,1)):(P=Pe(E),P.c(),b(P,1),P.m(t,null)),E[3]?I&&(U(),T(I,1,1,()=>{I=null}),x()):I?(I.p(E,$),$&8&&b(I,1)):(I=Ce(E),I.c(),b(I,1),I.m(e,null)),E[2]?m?(m.p(E,$),$&4&&b(m,1)):(m=Ne(E),m.c(),b(m,1),m.m(q.parentNode,q)):m&&(U(),T(m,1,1,()=>{m=null}),x())},i(E){R||(b(w),b(P),f&&f.end(1),b(I),b(m),R=!0)},o(E){T(P),f=Fe(t,Q,{}),T(I),T(m),R=!1},d(E){E&&p(e),w.d(),P&&P.d(),E&&f&&f.end(),I&&I.d(),E&&p(v),m&&m.d(E),E&&p(q),Z=!1,pe(G)}}}function st(o,e,t){let{skill:s}=e,{component:l}=e;const a=Ke();let r=!1,u=!1;const n=()=>l instanceof ae?"Trigger":l instanceof we?"Condition":"???",_=()=>l instanceof ae?"#0083ef":l instanceof we?"#feac00":"orange";function i(w,{duration:P}){return{duration:P,css:I=>`transform: rotate(${180-Ze(I)*180}deg);`}}const h=()=>t(3,u=!u);function c(w,P,I,m){I[m]=w,t(0,l)}function D(w){Le.call(this,o,w)}const f=()=>de.set(l),g=()=>de.set(void 0),v=()=>t(2,r=!0),q=()=>console.log("clicked copy"),R=()=>{s.removeComponent(l),a("update")};function Z(w){o.$$.not_equal(l.mana,w)&&(l.mana=w,t(0,l))}function G(w){o.$$.not_equal(l.cooldown,w)&&(l.cooldown=w,t(0,l))}function W(w,P){o.$$.not_equal(P.data,w)&&(P.data=w,t(0,l))}const B=()=>t(2,r=!1);return o.$$set=w=>{"skill"in w&&t(1,s=w.skill),"component"in w&&t(0,l=w.component)},[l,s,r,u,a,n,_,i,h,c,D,f,g,v,q,R,Z,G,W,B]}class We extends Me{constructor(e){super(),Oe(this,e,st,nt,Re,{skill:1,component:0})}}function He(o,e,t){const s=o.slice();return s[11]=e[t],s}function qe(o){let e,t,s;return t=new We({props:{skill:o[0],component:o[11]}}),t.$on("update",o[5]),{c(){e=N("div"),j(t.$$.fragment),this.h()},l(l){e=A(l,"DIV",{class:!0});var a=y(e);Y(t.$$.fragment,a),a.forEach(p),this.h()},h(){H(e,"class","widget svelte-ov7l51")},m(l,a){V(l,e,a),F(t,e,null),s=!0},p(l,a){const r={};a&1&&(r.skill=l[0]),a&1&&(r.component=l[11]),t.$set(r)},i(l){s||(b(t.$$.fragment,l),s=!0)},o(l){T(t.$$.fragment,l),s=!1},d(l){l&&p(e),K(t)}}}function ye(o){let e,t;return e=new ze({props:{$$slots:{default:[ot]},$$scope:{ctx:o}}}),e.$on("close",o[10]),{c(){j(e.$$.fragment)},l(s){Y(e.$$.fragment,s)},m(s,l){F(e,s,l),t=!0},p(s,l){const a={};l&16384&&(a.$$scope={dirty:l,ctx:s}),e.$set(a)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){K(e,s)}}}function ot(o){let e,t,s,l,a,r,u;return r=new Ge({props:{data:Object.values(Qe).map(at),display:it}}),r.$on("select",o[3]),{c(){e=N("h2"),t=z("Select New Trigger"),s=M(),l=N("hr"),a=M(),j(r.$$.fragment),this.h()},l(n){e=A(n,"H2",{class:!0});var _=y(e);t=J(_,"Select New Trigger"),_.forEach(p),s=O(n),l=A(n,"HR",{}),a=O(n),Y(r.$$.fragment,n),this.h()},h(){H(e,"class","modal-header svelte-ov7l51")},m(n,_){V(n,e,_),k(e,t),V(n,s,_),V(n,l,_),V(n,a,_),F(r,n,_),u=!0},p:fe,i(n){u||(b(r.$$.fragment,n),u=!0)},o(n){T(r.$$.fragment,n),u=!1},d(n){n&&p(e),n&&p(s),n&&p(l),n&&p(a),K(r,n)}}}function rt(o){let e,t,s,l,a=o[0].name+"",r,u,n,_,i,h,c,D,f,g,v,q,R,Z,G,W,B,w,P;document.title=e="ProSkillAPI Dynamic Editor - "+o[0].name;let I=o[0].triggers,m=[];for(let d=0;d<I.length;d+=1)m[d]=qe(He(o,I,d));const E=d=>T(m[d],1,1,()=>{m[d]=null});let $=o[1]&&ye(o);return{c(){t=M(),s=N("div"),l=N("h2"),r=z(a),u=M(),n=N("div"),_=N("span"),i=z("delete"),h=z(`
    Drag components here to delete`),c=M(),D=N("hr"),f=M(),g=N("div");for(let d=0;d<m.length;d+=1)m[d].c();v=M(),q=N("div"),R=N("span"),Z=z("variables"),G=M(),$&&$.c(),W=le(),this.h()},l(d){Xe("svelte-r5m1v8",document.head).forEach(p),t=O(d),s=A(d,"DIV",{class:!0});var C=y(s);l=A(C,"H2",{class:!0});var ne=y(l);r=J(ne,a),ne.forEach(p),u=O(C),n=A(C,"DIV",{class:!0});var ce=y(n);_=A(ce,"SPAN",{class:!0});var he=y(_);i=J(he,"delete"),he.forEach(p),h=J(ce,`
    Drag components here to delete`),ce.forEach(p),C.forEach(p),c=O(d),D=A(d,"HR",{}),f=O(d),g=A(d,"DIV",{class:!0});var re=y(g);for(let ue=0;ue<m.length;ue+=1)m[ue].l(re);v=O(re),q=A(re,"DIV",{class:!0,title:!0});var ge=y(q);R=A(ge,"SPAN",{class:!0});var ve=y(R);Z=J(ve,"variables"),ve.forEach(p),ge.forEach(p),re.forEach(p),G=O(d),$&&$.l(d),W=le(),this.h()},h(){H(l,"class","svelte-ov7l51"),H(_,"class","material-symbols-rounded svelte-ov7l51"),H(n,"class","delete-zone svelte-ov7l51"),be(n,"hovered",o[2]),H(s,"class","header svelte-ov7l51"),H(R,"class","material-symbols-rounded svelte-ov7l51"),H(q,"class","add-trigger chip svelte-ov7l51"),H(q,"title","Add Trigger"),H(g,"class","container svelte-ov7l51")},m(d,S){V(d,t,S),V(d,s,S),k(s,l),k(l,r),k(s,u),k(s,n),k(n,_),k(_,i),k(n,h),V(d,c,S),V(d,D,S),V(d,f,S),V(d,g,S);for(let C=0;C<m.length;C+=1)m[C].m(g,null);k(g,v),k(g,q),k(q,R),k(R,Z),V(d,G,S),$&&$.m(d,S),V(d,W,S),B=!0,w||(P=[X(n,"dragover",ke(o[7])),X(n,"dragleave",o[8]),X(n,"drop",te(ke(o[4]))),X(q,"click",o[9])],w=!0)},p(d,[S]){if((!B||S&1)&&e!==(e="ProSkillAPI Dynamic Editor - "+d[0].name)&&(document.title=e),(!B||S&1)&&a!==(a=d[0].name+"")&&_e(r,a),(!B||S&4)&&be(n,"hovered",d[2]),S&33){I=d[0].triggers;let C;for(C=0;C<I.length;C+=1){const ne=He(d,I,C);m[C]?(m[C].p(ne,S),b(m[C],1)):(m[C]=qe(ne),m[C].c(),b(m[C],1),m[C].m(g,v))}for(U(),C=I.length;C<m.length;C+=1)E(C);x()}d[1]?$?($.p(d,S),S&2&&b($,1)):($=ye(d),$.c(),b($,1),$.m(W.parentNode,W)):$&&(U(),T($,1,1,()=>{$=null}),x())},i(d){if(!B){for(let S=0;S<I.length;S+=1)b(m[S]);b($),B=!0}},o(d){m=m.filter(Boolean);for(let S=0;S<m.length;S+=1)T(m[S]);T($),B=!1},d(d){d&&p(t),d&&p(s),d&&p(c),d&&p(D),d&&p(f),d&&p(g),me(m,d),d&&p(G),$&&$.d(d),d&&p(W),w=!1,pe(P)}}}const at=o=>new o,it=o=>o.name;function ft(o,e,t){let{data:s}=e,l=s.data,a=!1,r=!1;const u=f=>{l.triggers.push(f.detail),t(0,l.triggers=[...l.triggers],l),setTimeout(()=>t(1,a=!1))},n=()=>{const f=Ye(de);t(2,r=!1),l.removeComponent(f),t(0,l.triggers=[...l.triggers],l)},_=()=>{t(0,l.triggers=[...l.triggers],l)},i=()=>t(2,r=!0),h=()=>t(2,r=!1),c=()=>t(1,a=!0),D=()=>t(1,a=!1);return o.$$set=f=>{"data"in f&&t(6,s=f.data)},[l,a,r,u,n,_,s,i,h,c,D]}class pt extends Me{constructor(e){super(),Oe(this,e,ft,rt,Re,{data:6})}}export{pt as default};
