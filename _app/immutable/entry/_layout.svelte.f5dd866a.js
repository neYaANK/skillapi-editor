import{S as oe,i as ce,s as fe,y as j,z as W,A as Z,g as L,d as U,B as J,k as I,q as B,a as T,l as C,m as P,r as R,h as m,c as O,n as p,b as M,C as h,D as Ue,E as z,F as ae,G as ht,w as Ae,H as vt,I as x,J as $e,K as _e,L as pt,M as mt,N as gt,O as bt,P as le,Q as De,R as Se,T as Q,U as ne,V as Vt,u as ge,e as ee,W as Nt,v as se,f as re,X as qe,Y as Te,Z as we,p as He,_ as Ft,o as kt,$ as At,a0 as $t,a1 as Oe,a2 as ie,a3 as Ge,a4 as qt,a5 as Ie,a6 as Ce,a7 as Ye}from"../chunks/index.1ee62562.js";import{s as wt,l as Tt,a as Et,g as ve,f as pe,b as me,c as ze,d as Ee,P as Ne,e as de,u as yt,h as he,i as ke,j as Dt,k as St,m as It,n as Ot,o as zt,r as Lt,T as Mt,p as Bt,q as Pe,t as Rt,v as Ve,w as Ut,x as Fe,y as Ht,z as Gt,A as Yt,B as jt,C as je,D as We,E as Wt,F as Zt,G as Jt}from"../chunks/store.67b942d2.js";import{M as Ct}from"../chunks/Modal.b494ef9a.js";import{j as ue}from"../chunks/singletons.6e30b944.js";const Pt="https://6jgex7frk0.execute-api.us-west-2.amazonaws.com/default/haste-uploader",Xt=s=>typeof s!="string"?Promise.reject(new Error('You cannot send that. Please include a "content" argument that is a valid string.')):s===""?Promise.reject(new Error("You cannot send nothing.")):fetch(Pt,{method:"POST",body:s,headers:{"Content-Type":"text/plain"}}).then(l=>l.json()).then(l=>{if(!l.url)throw l.error?new Error(l.error):new Error("Did not receive hastebin key.");return l.url}),Kt=async s=>(s.url&&s.url.includes("astebin.com")&&!s.url.includes("raw")&&(s.url=s.url.replace("astebin.com","astebin.com/raw")),await(await fetch(`${Pt}?${s.id?"id="+s.id:"url="+s.url}`)).text());function Qt(s){let e,l,t,r,a,n,_,u,o,d,f,y,b,w,i,c,v,k,$,q,N,S,D,F;return{c(){e=I("div"),l=I("div"),t=I("div"),r=B("Upload File"),a=T(),n=I("label"),_=B("Select File"),u=T(),o=I("input"),d=T(),f=I("div"),y=I("span"),b=B("OR"),w=T(),i=I("div"),c=I("div"),v=B("Import from URL"),k=T(),$=I("input"),q=T(),N=I("div"),S=B("Import"),this.h()},l(E){e=C(E,"DIV",{class:!0});var g=P(e);l=C(g,"DIV",{class:!0});var V=P(l);t=C(V,"DIV",{});var H=P(t);r=R(H,"Upload File"),H.forEach(m),a=O(V),n=C(V,"LABEL",{for:!0,class:!0});var G=P(n);_=R(G,"Select File"),G.forEach(m),u=O(V),o=C(V,"INPUT",{id:!0,type:!0,class:!0}),V.forEach(m),d=O(g),f=C(g,"DIV",{class:!0});var Y=P(f);y=C(Y,"SPAN",{class:!0});var X=P(y);b=R(X,"OR"),X.forEach(m),Y.forEach(m),w=O(g),i=C(g,"DIV",{class:!0});var A=P(i);c=C(A,"DIV",{});var K=P(c);v=R(K,"Import from URL"),K.forEach(m),k=O(A),$=C(A,"INPUT",{class:!0}),q=O(A),N=C(A,"DIV",{class:!0});var te=P(N);S=R(te,"Import"),te.forEach(m),A.forEach(m),g.forEach(m),this.h()},h(){p(n,"for","file-upload"),p(n,"class","button"),p(o,"id","file-upload"),p(o,"type","file"),p(o,"class","hidden svelte-8b3mcy"),o.multiple=!0,p(l,"class","option svelte-8b3mcy"),p(y,"class","svelte-8b3mcy"),p(f,"class","or svelte-8b3mcy"),p($,"class","svelte-8b3mcy"),p(N,"class","button"),p(i,"class","option svelte-8b3mcy"),p(e,"class","options svelte-8b3mcy")},m(E,g){M(E,e,g),h(e,l),h(l,t),h(t,r),h(l,a),h(l,n),h(n,_),h(l,u),h(l,o),h(e,d),h(e,f),h(f,y),h(y,b),h(e,w),h(e,i),h(i,c),h(c,v),h(i,k),h(i,$),Ue($,s[1]),h(i,q),h(i,N),h(N,S),D||(F=[z(o,"change",s[4]),z($,"input",s[5]),z(N,"click",s[3])],D=!0)},p(E,g){g&2&&$.value!==E[1]&&Ue($,E[1])},d(E){E&&m(e),D=!1,ae(F)}}}function xt(s){let e,l;return e=new Ct({props:{open:!0,$$slots:{default:[Qt]},$$scope:{ctx:s}}}),e.$on("close",s[2]),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){Z(e,t,r),l=!0},p(t,[r]){const a={};r&67&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function el(s,e,l){let t,r;const a=()=>{l(1,t=l(0,r=void 0)),wt(!1)},n=()=>{t&&(t.startsWith("http")||l(1,t="https://"+t),Kt({url:t}).then(o=>{a(),Tt(o)}).catch(o=>{console.error(o)}))};function _(){r=this.files,l(0,r)}function u(){t=this.value,l(1,t)}return s.$$.update=()=>{if(s.$$.dirty&1&&r&&r.length>0)for(const o of r)o.name.indexOf(".yml")!=-1&&(Et(o),a())},[r,t,a,n,_,u]}class tl extends oe{constructor(e){super(),ce(this,e,el,xt,fe,{})}}function Ze(s){let e,l,t,r,a,n,_,u,o,d,f,y,b,w=s[2]instanceof Ne&&Je(s);return{c(){e=I("div"),w&&w.c(),l=T(),t=I("div"),r=I("span"),a=B("save"),_=T(),u=I("div"),o=I("span"),d=B("delete"),this.h()},l(i){e=C(i,"DIV",{class:!0});var c=P(e);w&&w.l(c),l=O(c),t=C(c,"DIV",{class:!0,title:!0});var v=P(t);r=C(v,"SPAN",{class:!0});var k=P(r);a=R(k,"save"),k.forEach(m),v.forEach(m),_=O(c),u=C(c,"DIV",{class:!0,title:!0});var $=P(u);o=C($,"SPAN",{class:!0});var q=P(o);d=R(q,"delete"),q.forEach(m),$.forEach(m),c.forEach(m),this.h()},h(){p(r,"class","material-symbols-rounded svelte-3z97ns"),p(t,"class","download svelte-3z97ns"),p(t,"title",n="Save "+(s[2].triggers?"Skill":"Class")),p(o,"class","material-symbols-rounded svelte-3z97ns"),p(u,"class","delete svelte-3z97ns"),p(u,"title",f="Delete "+(s[2].triggers?"Skill":"Class")),p(e,"class","buttons svelte-3z97ns")},m(i,c){M(i,e,c),w&&w.m(e,null),h(e,l),h(e,t),h(t,r),h(r,a),h(e,_),h(e,u),h(u,o),h(o,d),y||(b=[z(t,"click",$e(_e(s[12]))),z(u,"click",$e(_e(s[13])))],y=!0)},p(i,c){i[2]instanceof Ne?w?w.p(i,c):(w=Je(i),w.c(),w.m(e,l)):w&&(w.d(1),w=null),c&4&&n!==(n="Save "+(i[2].triggers?"Skill":"Class"))&&p(t,"title",n),c&4&&f!==(f="Delete "+(i[2].triggers?"Skill":"Class"))&&p(u,"title",f)},d(i){i&&m(e),w&&w.d(),y=!1,ae(b)}}}function Je(s){let e,l,t,r;return{c(){e=I("a"),l=I("span"),t=B("edit"),this.h()},l(a){e=C(a,"A",{href:!0,class:!0,title:!0});var n=P(e);l=C(n,"SPAN",{class:!0});var _=P(l);t=R(_,"edit"),_.forEach(m),n.forEach(m),this.h()},h(){p(l,"class","material-symbols-rounded"),p(e,"href",r="/skill/"+s[2].name+"/edit"),p(e,"class","edit svelte-3z97ns"),p(e,"title","Edit Skill")},m(a,n){M(a,e,n),h(e,l),h(l,t)},p(a,n){n&4&&r!==(r="/skill/"+a[2].name+"/edit")&&p(e,"href",r)},d(a){a&&m(e)}}}function ll(s){let e,l,t=s[2].name+"",r,a,n,_,u,o,d,f,y,b,w;return{c(){e=I("h3"),l=B("Do you really want to delete "),r=B(t),a=B("?"),n=T(),_=I("div"),u=I("div"),o=B("Cancel"),d=T(),f=I("div"),y=B("Delete"),this.h()},l(i){e=C(i,"H3",{});var c=P(e);l=R(c,"Do you really want to delete "),r=R(c,t),a=R(c,"?"),c.forEach(m),n=O(i),_=C(i,"DIV",{class:!0});var v=P(_);u=C(v,"DIV",{class:!0});var k=P(u);o=R(k,"Cancel"),k.forEach(m),d=O(v),f=C(v,"DIV",{class:!0});var $=P(f);y=R($,"Delete"),$.forEach(m),v.forEach(m),this.h()},h(){p(u,"class","button svelte-3z97ns"),p(f,"class","button modal-delete svelte-3z97ns"),p(_,"class","buttons modal-buttons svelte-3z97ns")},m(i,c){M(i,e,c),h(e,l),h(e,r),h(e,a),M(i,n,c),M(i,_,c),h(_,u),h(u,o),h(_,d),h(_,f),h(f,y),b||(w=[z(u,"click",s[15]),z(f,"click",s[16])],b=!0)},p(i,c){c&4&&t!==(t=i[2].name+"")&&ge(r,t)},d(i){i&&m(e),i&&m(n),i&&m(_),b=!1,ae(w)}}}function sl(s){let e,l,t,r,a,n,_,u,o,d,f;const y=s[10].default,b=ht(y,s,s[18],null);let w=s[2]&&Ze(s);function i(v){s[17](v)}let c={$$slots:{default:[ll]},$$scope:{ctx:s}};return s[4]!==void 0&&(c.open=s[4]),_=new Ct({props:c}),Ae.push(()=>vt(_,"open",i)),{c(){e=I("div"),b&&b.c(),l=T(),w&&w.c(),n=T(),j(_.$$.fragment),this.h()},l(v){e=C(v,"DIV",{class:!0,draggable:!0});var k=P(e);b&&b.l(k),l=O(k),w&&w.l(k),k.forEach(m),n=O(v),W(_.$$.fragment,v),this.h()},h(){p(e,"class","sidebar-entry svelte-3z97ns"),p(e,"draggable",t=!!s[2]),x(e,"over",s[3]),x(e,"active",s[2]&&s[5]===s[2]),x(e,"in-folder",!!ve(s[2]))},m(v,k){M(v,e,k),b&&b.m(e,null),h(e,l),w&&w.m(e,null),M(v,n,k),Z(_,v,k),o=!0,d||(f=[z(e,"dragstart",s[7]),z(e,"drop",$e(_e(s[8]))),z(e,"dragover",_e(s[9])),z(e,"dragleave",s[14]),z(e,"click",s[11])],d=!0)},p(v,[k]){s=v,b&&b.p&&(!o||k&262144)&&pt(b,y,s,s[18],o?gt(y,s[18],k,null):mt(s[18]),null),s[2]?w?w.p(s,k):(w=Ze(s),w.c(),w.m(e,null)):w&&(w.d(1),w=null),(!o||k&4&&t!==(t=!!s[2]))&&p(e,"draggable",t),(!o||k&8)&&x(e,"over",s[3]),(!o||k&36)&&x(e,"active",s[2]&&s[5]===s[2]),(!o||k&4)&&x(e,"in-folder",!!ve(s[2]));const $={};k&262164&&($.$$scope={dirty:k,ctx:s}),!u&&k&16&&(u=!0,$.open=s[4],bt(()=>u=!1)),_.$set($)},i(v){o||(L(b,v),le(()=>{o&&(a&&a.end(1),r=De(e,pe,{x:s[1]==="left"?-100:100,duration:500,delay:s[6]?0:s[0]}),r.start())}),L(_.$$.fragment,v),o=!0)},o(v){U(b,v),r&&r.invalidate(),a=Se(e,me,{}),U(_.$$.fragment,v),o=!1},d(v){v&&m(e),b&&b.d(v),w&&w.d(),v&&a&&a.end(),v&&m(n),J(_,v),d=!1,ae(f)}}}function rl(s,e,l){let t,r;Q(s,ze,S=>l(5,t=S)),Q(s,Ee,S=>l(6,r=S));let{$$slots:a={},$$scope:n}=e,{delay:_=0}=e,{direction:u="left"}=e,{data:o=void 0}=e,d=!1,f=!1;const y=S=>{if(!o){S.preventDefault();return}de.set(o)},b=()=>{const S=ne(de);let D;o&&(D=ve(o));const F=ve(S);if(F&&F.remove(S),D){D.add(S),l(3,d=!1),yt();return}S instanceof he&&(ne(ke)?Dt(S):St(S),S.parent=void 0),l(3,d=!1)},w=()=>{const S=ne(de);o!==S&&l(3,d=!0)};function i(S){Vt.call(this,s,S)}const c=()=>It(o),v=()=>l(4,f=!0),k=()=>l(3,d=!1),$=()=>l(4,f=!1),q=()=>Ot(o);function N(S){f=S,l(4,f)}return s.$$set=S=>{"delay"in S&&l(0,_=S.delay),"direction"in S&&l(1,u=S.direction),"data"in S&&l(2,o=S.data),"$$scope"in S&&l(18,n=S.$$scope)},[_,u,o,d,f,t,r,y,b,w,a,i,c,v,k,$,q,N,n]}class be extends oe{constructor(e){super(),ce(this,e,rl,sl,fe,{delay:0,direction:1,data:2})}}const Xe=(s,{delay:e=0,duration:l=500})=>{const r=getComputedStyle(s).width.match(/([\d.]+)(.*)/);if(!r)return{delay:e,duration:l,css:n=>`max-width: unset; width: ${n*100}%;`};const a=Number.parseFloat(r[1]);return{delay:e,duration:l,css:n=>`max-width: unset; width: ${n*a}${r[2]}; min-width: unset;`}};ue.disable_scroll_handling;const ye=ue.goto;ue.invalidate;ue.invalidateAll;ue.preload_data;ue.preload_code;ue.before_navigate;ue.after_navigate;function Ke(s,e,l){const t=s.slice();return t[16]=e[l],t[18]=l,t}function Qe(s){let e,l=[],t=new Map,r,a,n=s[0].data;const _=u=>u[16].key;for(let u=0;u<n.length;u+=1){let o=Ke(s,n,u),d=_(o);t.set(d,l[u]=xe(d,o))}return{c(){e=I("div");for(let u=0;u<l.length;u+=1)l[u].c();this.h()},l(u){e=C(u,"DIV",{class:!0});var o=P(e);for(let d=0;d<l.length;d+=1)l[d].l(o);o.forEach(m),this.h()},h(){p(e,"class","folder-content svelte-h6frfb")},m(u,o){M(u,e,o);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null);a=!0},p(u,o){o&1&&(n=u[0].data,se(),l=qe(l,o,_,1,u,n,t,e,Te,xe,null,Ke),re())},i(u){if(!a){for(let o=0;o<n.length;o+=1)L(l[o]);le(()=>{a&&(r||(r=we(e,me,{},!0)),r.run(1))}),a=!0}},o(u){for(let o=0;o<l.length;o+=1)U(l[o]);r||(r=we(e,me,{},!1)),r.run(0),a=!1},d(u){u&&m(e);for(let o=0;o<l.length;o+=1)l[o].d();u&&r&&r.end()}}}function al(s){let e,l;function t(){return s[15](s[16])}return e=new be({props:{data:s[16],$$slots:{default:[il]},$$scope:{ctx:s}}}),e.$on("click",t),{c(){j(e.$$.fragment)},l(r){W(e.$$.fragment,r)},m(r,a){Z(e,r,a),l=!0},p(r,a){s=r;const n={};a&1&&(n.data=s[16]),a&524289&&(n.$$scope={dirty:a,ctx:s}),e.$set(n)},i(r){l||(L(e.$$.fragment,r),l=!0)},o(r){U(e.$$.fragment,r),l=!1},d(r){J(e,r)}}}function nl(s){let e,l;return e=new Le({props:{folder:s[16]}}),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){Z(e,t,r),l=!0},p(t,r){const a={};r&1&&(a.folder=t[16]),e.$set(a)},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function il(s){let e=s[16].name+"",l,t;return{c(){l=B(e),t=T()},l(r){l=R(r,e),t=O(r)},m(r,a){M(r,l,a),M(r,t,a)},p(r,a){a&1&&e!==(e=r[16].name+"")&&ge(l,e)},d(r){r&&m(l),r&&m(t)}}}function xe(s,e){let l,t,r,a,n;const _=[nl,al],u=[];function o(d,f){return d[16].isFolder?0:1}return t=o(e),r=u[t]=_[t](e),{key:s,first:null,c(){l=ee(),r.c(),a=ee(),this.h()},l(d){l=ee(),r.l(d),a=ee(),this.h()},h(){this.first=l},m(d,f){M(d,l,f),u[t].m(d,f),M(d,a,f),n=!0},p(d,f){e=d;let y=t;t=o(e),t===y?u[t].p(e,f):(se(),U(u[y],1,1,()=>{u[y]=null}),re(),r=u[t],r?r.p(e,f):(r=u[t]=_[t](e),r.c()),L(r,1),r.m(a.parentNode,a))},i(d){n||(L(r),n=!0)},o(d){U(r),n=!1},d(d){d&&m(l),u[t].d(d),d&&m(a)}}}function ol(s){let e,l,t,r,a,n,_,u,o,d,f,y,b,w,i,c,v,k,$,q,N,S,D,F,E=s[0].open&&Qe(s);return{c(){e=I("div"),l=I("span"),t=B("folder"),r=T(),a=I("span"),n=T(),_=I("div"),u=I("span"),o=B("add"),d=T(),f=I("div"),y=I("span"),b=B("edit"),w=T(),i=I("div"),c=I("span"),v=B("delete"),q=T(),E&&E.c(),N=ee(),this.h()},l(g){e=C(g,"DIV",{class:!0,draggable:!0});var V=P(e);l=C(V,"SPAN",{class:!0});var H=P(l);t=R(H,"folder"),H.forEach(m),r=O(V),a=C(V,"SPAN",{class:!0,contenteditable:!0}),P(a).forEach(m),n=O(V),_=C(V,"DIV",{class:!0,title:!0});var G=P(_);u=C(G,"SPAN",{class:!0});var Y=P(u);o=R(Y,"add"),Y.forEach(m),G.forEach(m),d=O(V),f=C(V,"DIV",{class:!0,title:!0});var X=P(f);y=C(X,"SPAN",{class:!0});var A=P(y);b=R(A,"edit"),A.forEach(m),X.forEach(m),w=O(V),i=C(V,"DIV",{class:!0,title:!0});var K=P(i);c=C(K,"SPAN",{class:!0});var te=P(c);v=R(te,"delete"),te.forEach(m),K.forEach(m),V.forEach(m),q=O(g),E&&E.l(g),N=ee(),this.h()},h(){p(l,"class","material-symbols-rounded folder-icon svelte-h6frfb"),p(a,"class","name svelte-h6frfb"),p(a,"contenteditable","false"),s[0].name===void 0&&le(()=>s[12].call(a)),p(u,"class","material-symbols-rounded svelte-h6frfb"),p(_,"class","icon add svelte-h6frfb"),p(_,"title","Add Folder"),p(y,"class","material-symbols-rounded svelte-h6frfb"),p(f,"class","icon svelte-h6frfb"),p(f,"title","Rename"),p(c,"class","material-symbols-rounded svelte-h6frfb"),p(i,"class","icon delete svelte-h6frfb"),p(i,"title","Delete Folder"),p(e,"class","folder svelte-h6frfb"),p(e,"draggable","true"),x(e,"over",s[2])},m(g,V){M(g,e,V),h(e,l),h(l,t),h(e,r),h(e,a),s[11](a),s[0].name!==void 0&&(a.textContent=s[0].name),h(e,n),h(e,_),h(_,u),h(u,o),h(e,d),h(e,f),h(f,y),h(y,b),h(e,w),h(e,i),h(i,c),h(c,v),M(g,q,V),E&&E.m(g,V),M(g,N,V),S=!0,D||(F=[z(a,"blur",function(){Nt(s[1].contentEditable="false")&&(s[1].contentEditable="false").apply(this,arguments)}),z(a,"input",s[12]),z(a,"keydown",s[5]),z(_,"click",s[7]),z(f,"click",s[4]),z(i,"click",s[6]),z(e,"dragstart",s[8]),z(e,"drop",$e(_e(s[9]))),z(e,"dragover",_e(s[10])),z(e,"dragleave",s[13]),z(e,"click",s[14])],D=!0)},p(g,[V]){s=g,V&1&&s[0].name!==a.textContent&&(a.textContent=s[0].name),(!S||V&4)&&x(e,"over",s[2]),s[0].open?E?(E.p(s,V),V&1&&L(E,1)):(E=Qe(s),E.c(),L(E,1),E.m(N.parentNode,N)):E&&(se(),U(E,1,1,()=>{E=null}),re())},i(g){S||(le(()=>{S&&($&&$.end(1),k=De(e,me,{duration:s[3]?0:400}),k.start())}),L(E),S=!0)},o(g){k&&k.invalidate(),$=Se(e,me,{}),U(E),S=!1},d(g){g&&m(e),s[11](null),g&&$&&$.end(),g&&m(q),E&&E.d(g),g&&m(N),D=!1,ae(F)}}}function cl(s,e,l){let t;Q(s,Ee,$=>l(3,t=$));let{folder:r}=e,a,n=$=>{$&&$.stopPropagation(),l(1,a.contentEditable="true",a),a.focus(),setTimeout(()=>{const q=document.createRange();q.setStart(a,0),q.setEnd(a,1);const N=window.getSelection();N.removeAllRanges(),N.addRange(q)},1)};const _=$=>{$.key=="Enter"&&($.preventDefault(),$.stopPropagation(),a.blur())},u=$=>{$.stopPropagation(),zt(r)},o=$=>{$.stopPropagation(),r.createFolder(),l(0,r.open=!0,r),yt()};let d=!1;const f=()=>{de.set(r)},y=()=>{l(2,d=!1);const $=ne(de);if(!$||r.data.includes($))return;const q=ve($);q&&q.remove($),$ instanceof he&&(Lt($),$.parent=r),r.add($)},b=()=>{r!==ne(de)&&l(2,d=!0)};function w($){Ae[$?"unshift":"push"](()=>{a=$,l(1,a)})}function i(){r.name=this.textContent,l(0,r)}const c=()=>l(2,d=!1),v=()=>l(0,r.open=!r.open,r),k=$=>ye(`/${$.isClass?"class":"skill"}/${$.name}${$.isClass?"/edit":""}`);return s.$$set=$=>{"folder"in $&&l(0,r=$.folder)},[r,a,d,t,n,_,u,o,f,y,b,w,i,c,v,k]}class Le extends oe{constructor(e){super(),ce(this,e,cl,ol,fe,{folder:0})}}function et(s,e,l){const t=s.slice();return t[35]=e[l],t[31]=l,t}function tt(s,e,l){const t=s.slice();return t[35]=e[l],t}function lt(s,e,l){const t=s.slice();return t[29]=e[l],t[31]=l,t}function st(s,e,l){const t=s.slice();return t[32]=e[l],t}function fl(s){let e,l,t=[],r=new Map,a,n,_,u,o,d=s[8],f=[];for(let i=0;i<d.length;i+=1)f[i]=rt(tt(s,d,i));const y=i=>U(f[i],1,1,()=>{f[i]=null});let b=s[9].filter(s[18]);const w=i=>i[35].key;for(let i=0;i<b.length;i+=1){let c=et(s,b,i),v=w(c);r.set(v,t[i]=at(v,c))}return n=new be({props:{delay:200+100*(s[9].length+1),direction:"right",$$slots:{default:[_l]},$$scope:{ctx:s}}}),{c(){e=I("div");for(let i=0;i<f.length;i+=1)f[i].c();l=T();for(let i=0;i<t.length;i+=1)t[i].c();a=T(),j(n.$$.fragment),this.h()},l(i){e=C(i,"DIV",{class:!0});var c=P(e);for(let v=0;v<f.length;v+=1)f[v].l(c);l=O(c);for(let v=0;v<t.length;v+=1)t[v].l(c);a=O(c),W(n.$$.fragment,c),c.forEach(m),this.h()},h(){p(e,"class","items svelte-sqaw72")},m(i,c){M(i,e,c);for(let v=0;v<f.length;v+=1)f[v]&&f[v].m(e,null);h(e,l);for(let v=0;v<t.length;v+=1)t[v]&&t[v].m(e,null);h(e,a),Z(n,e,null),o=!0},p(i,c){if(c[0]&256){d=i[8];let k;for(k=0;k<d.length;k+=1){const $=tt(i,d,k);f[k]?(f[k].p($,c),L(f[k],1)):(f[k]=rt($),f[k].c(),L(f[k],1),f[k].m(e,l))}for(se(),k=d.length;k<f.length;k+=1)y(k);re()}c[0]&514&&(b=i[9].filter(i[18]),se(),t=qe(t,c,w,1,i,b,r,e,Te,at,a,et),re());const v={};c[0]&512&&(v.delay=200+100*(i[9].length+1)),c[1]&256&&(v.$$scope={dirty:c,ctx:i}),n.$set(v)},i(i){if(!o){for(let c=0;c<d.length;c+=1)L(f[c]);for(let c=0;c<b.length;c+=1)L(t[c]);L(n.$$.fragment,i),le(()=>{o&&(u&&u.end(1),_=De(e,pe,{x:100}),_.start())}),o=!0}},o(i){f=f.filter(Boolean);for(let c=0;c<f.length;c+=1)U(f[c]);for(let c=0;c<t.length;c+=1)U(t[c]);U(n.$$.fragment,i),_&&_.invalidate(),u=Se(e,pe,{x:100}),o=!1},d(i){i&&m(e),Oe(f,i);for(let c=0;c<t.length;c+=1)t[c].d();J(n),i&&u&&u.end()}}}function ul(s){let e,l,t=[],r=new Map,a,n,_,u,o,d=s[6],f=[];for(let i=0;i<d.length;i+=1)f[i]=nt(st(s,d,i));const y=i=>U(f[i],1,1,()=>{f[i]=null});let b=s[7].filter(s[14]);const w=i=>i[29].key;for(let i=0;i<b.length;i+=1){let c=lt(s,b,i),v=w(c);r.set(v,t[i]=it(v,c))}return n=new be({props:{delay:200+100*(s[7].length+1),$$slots:{default:[vl]},$$scope:{ctx:s}}}),{c(){e=I("div");for(let i=0;i<f.length;i+=1)f[i].c();l=T();for(let i=0;i<t.length;i+=1)t[i].c();a=T(),j(n.$$.fragment),this.h()},l(i){e=C(i,"DIV",{class:!0});var c=P(e);for(let v=0;v<f.length;v+=1)f[v].l(c);l=O(c);for(let v=0;v<t.length;v+=1)t[v].l(c);a=O(c),W(n.$$.fragment,c),c.forEach(m),this.h()},h(){p(e,"class","items svelte-sqaw72")},m(i,c){M(i,e,c);for(let v=0;v<f.length;v+=1)f[v]&&f[v].m(e,null);h(e,l);for(let v=0;v<t.length;v+=1)t[v]&&t[v].m(e,null);h(e,a),Z(n,e,null),o=!0},p(i,c){if(c[0]&64){d=i[6];let k;for(k=0;k<d.length;k+=1){const $=st(i,d,k);f[k]?(f[k].p($,c),L(f[k],1)):(f[k]=nt($),f[k].c(),L(f[k],1),f[k].m(e,l))}for(se(),k=d.length;k<f.length;k+=1)y(k);re()}c[0]&129&&(b=i[7].filter(i[14]),se(),t=qe(t,c,w,1,i,b,r,e,Te,it,a,lt),re());const v={};c[0]&128&&(v.delay=200+100*(i[7].length+1)),c[1]&256&&(v.$$scope={dirty:c,ctx:i}),n.$set(v)},i(i){if(!o){for(let c=0;c<d.length;c+=1)L(f[c]);for(let c=0;c<b.length;c+=1)L(t[c]);L(n.$$.fragment,i),le(()=>{o&&(u&&u.end(1),_=De(e,pe,{x:-100}),_.start())}),o=!0}},o(i){f=f.filter(Boolean);for(let c=0;c<f.length;c+=1)U(f[c]);for(let c=0;c<t.length;c+=1)U(t[c]);U(n.$$.fragment,i),_&&_.invalidate(),u=Se(e,pe,{x:-100}),o=!1},d(i){i&&m(e),Oe(f,i);for(let c=0;c<t.length;c+=1)t[c].d();J(n),i&&u&&u.end()}}}function rt(s){let e,l;return e=new Le({props:{folder:s[35]}}),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){Z(e,t,r),l=!0},p(t,r){const a={};r[0]&256&&(a.folder=t[35]),e.$set(a)},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function dl(s){let e=s[35].name+"",l;return{c(){l=B(e)},l(t){l=R(t,e)},m(t,r){M(t,l,r)},p(t,r){r[0]&514&&e!==(e=t[35].name+"")&&ge(l,e)},d(t){t&&m(l)}}}function at(s,e){let l,t,r;function a(){return e[19](e[35])}return t=new be({props:{data:e[35],direction:"right",delay:200+100*e[31],$$slots:{default:[dl]},$$scope:{ctx:e}}}),t.$on("click",a),{key:s,first:null,c(){l=ee(),j(t.$$.fragment),this.h()},l(n){l=ee(),W(t.$$.fragment,n),this.h()},h(){this.first=l},m(n,_){M(n,l,_),Z(t,n,_),r=!0},p(n,_){e=n;const u={};_[0]&514&&(u.data=e[35]),_[0]&514&&(u.delay=200+100*e[31]),_[0]&514|_[1]&256&&(u.$$scope={dirty:_,ctx:e}),t.$set(u)},i(n){r||(L(t.$$.fragment,n),r=!0)},o(n){U(t.$$.fragment,n),r=!1},d(n){n&&m(l),J(t,n)}}}function _l(s){let e,l,t,r,a,n,_,u;return{c(){e=I("div"),l=I("span"),t=B("New Skill"),r=T(),a=I("span"),n=B("New Folder"),this.h()},l(o){e=C(o,"DIV",{class:!0});var d=P(e);l=C(d,"SPAN",{class:!0});var f=P(l);t=R(f,"New Skill"),f.forEach(m),r=O(d),a=C(d,"SPAN",{class:!0});var y=P(a);n=R(y,"New Folder"),y.forEach(m),d.forEach(m),this.h()},h(){p(l,"class","svelte-sqaw72"),p(a,"class","new-folder svelte-sqaw72"),p(e,"class","new svelte-sqaw72")},m(o,d){M(o,e,d),h(e,l),h(l,t),h(e,r),h(e,a),h(a,n),_||(u=[z(l,"click",s[20]),z(a,"click",s[21])],_=!0)},p:ie,d(o){o&&m(e),_=!1,ae(u)}}}function nt(s){let e,l;return e=new Le({props:{folder:s[32]}}),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){Z(e,t,r),l=!0},p(t,r){const a={};r[0]&64&&(a.folder=t[32]),e.$set(a)},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function hl(s){let e=s[29].name+"",l;return{c(){l=B(e)},l(t){l=R(t,e)},m(t,r){M(t,l,r)},p(t,r){r[0]&129&&e!==(e=t[29].name+"")&&ge(l,e)},d(t){t&&m(l)}}}function it(s,e){let l,t,r;function a(){return e[15](e[29])}return t=new be({props:{data:e[29],delay:200+100*e[31],$$slots:{default:[hl]},$$scope:{ctx:e}}}),t.$on("click",a),{key:s,first:null,c(){l=ee(),j(t.$$.fragment),this.h()},l(n){l=ee(),W(t.$$.fragment,n),this.h()},h(){this.first=l},m(n,_){M(n,l,_),Z(t,n,_),r=!0},p(n,_){e=n;const u={};_[0]&129&&(u.data=e[29]),_[0]&129&&(u.delay=200+100*e[31]),_[0]&129|_[1]&256&&(u.$$scope={dirty:_,ctx:e}),t.$set(u)},i(n){r||(L(t.$$.fragment,n),r=!0)},o(n){U(t.$$.fragment,n),r=!1},d(n){n&&m(l),J(t,n)}}}function vl(s){let e,l,t,r,a,n,_,u;return{c(){e=I("div"),l=I("span"),t=B("New Class"),r=T(),a=I("span"),n=B("New Folder"),this.h()},l(o){e=C(o,"DIV",{class:!0});var d=P(e);l=C(d,"SPAN",{class:!0});var f=P(l);t=R(f,"New Class"),f.forEach(m),r=O(d),a=C(d,"SPAN",{class:!0});var y=P(a);n=R(y,"New Folder"),y.forEach(m),d.forEach(m),this.h()},h(){p(l,"class","svelte-sqaw72"),p(a,"class","new-folder svelte-sqaw72"),p(e,"class","new svelte-sqaw72")},m(o,d){M(o,e,d),h(e,l),h(l,t),h(e,r),h(e,a),h(a,n),_||(u=[z(l,"click",s[16]),z(a,"click",s[17])],_=!0)},p:ie,d(o){o&&m(e),_=!1,ae(u)}}}function pl(s){let e=!1,l=()=>{e=!1},t,r,a,n,_,u,o,d,f,y,b,w=`calc(${s[3]}px - 6rem + min(3.5rem, ${s[4]}px))`,i,c,v;le(s[11]),le(s[12]);function k(D){s[13](D)}let $={left:"Classes",right:"Skills",color:"#111",inline:!1};s[5]!==void 0&&($.data=s[5]),n=new Mt({props:$}),Ae.push(()=>vt(n,"data",k));const q=[ul,fl],N=[];function S(D,F){return D[5]?0:1}return f=S(s),y=N[f]=q[f](s),{c(){r=I("div"),a=I("div"),j(n.$$.fragment),u=T(),o=I("hr"),d=T(),y.c(),this.h()},l(D){r=C(D,"DIV",{id:!0,class:!0});var F=P(r);a=C(F,"DIV",{class:!0});var E=P(a);W(n.$$.fragment,E),u=O(E),o=C(E,"HR",{class:!0}),E.forEach(m),d=O(F),y.l(F),F.forEach(m),this.h()},h(){p(o,"class","svelte-sqaw72"),p(a,"class","type-wrap svelte-sqaw72"),p(r,"id","sidebar"),p(r,"class","svelte-sqaw72"),He(r,"--height",w)},m(D,F){M(D,r,F),h(r,a),Z(n,a,null),h(a,u),h(a,o),h(r,d),N[f].m(r,null),i=!0,c||(v=[z(window,"resize",s[11]),z(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(l,100),s[12]()}),z(r,"introend",s[22]),z(r,"outroend",s[23]),Ft(Bt.call(null,r)),z(r,"outclick",s[10])],c=!0)},p(D,F){F[0]&16&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,D[4]),t=setTimeout(l,100));const E={};!_&&F[0]&32&&(_=!0,E.data=D[5],bt(()=>_=!1)),n.$set(E);let g=f;f=S(D),f===g?N[f].p(D,F):(se(),U(N[g],1,1,()=>{N[g]=null}),re(),y=N[f],y?y.p(D,F):(y=N[f]=q[f](D),y.c()),L(y,1),y.m(r,null)),F[0]&24&&w!==(w=`calc(${D[3]}px - 6rem + min(3.5rem, ${D[4]}px))`)&&He(r,"--height",w)},i(D){i||(L(n.$$.fragment,D),L(y),le(()=>{i&&(b||(b=we(r,Xe,{},!0)),b.run(1))}),i=!0)},o(D){U(n.$$.fragment,D),U(y),b||(b=we(r,Xe,{},!1)),b.run(0),i=!1},d(D){D&&m(r),J(n),N[f].d(),D&&b&&b.end(),c=!1,ae(v)}}}function ml(s,e,l){let t,r,a,n,_;Q(s,ke,A=>l(5,t=A)),Q(s,Pe,A=>l(6,r=A)),Q(s,Rt,A=>l(7,a=A)),Q(s,Ve,A=>l(8,n=A)),Q(s,Ut,A=>l(9,_=A));let u=[],o,d,f=[],y=[],b,w,i;const c=(A,K)=>{A instanceof Array&&A.forEach(te=>c(te,K)),A instanceof he?c(A.data,K):(A instanceof Yt||A instanceof Ne)&&K.push(A)},v=A=>{ne(ke)?(u=A||ne(Pe),l(0,f=[]),c(u,f)):(u=A||ne(Ve),l(1,y=[]),c(u,y))};kt(()=>{o=Pe.subscribe(v),d=Ve.subscribe(v)}),At(v),$t(()=>{o&&o(),d&&d()});const k=A=>{b<500&&(A.detail.stopPropagation(),jt())};function $(){l(2,b=window.innerWidth),l(3,w=window.innerHeight)}function q(){l(4,i=window.pageYOffset)}function N(A){t=A,ke.set(t)}return[f,y,b,w,i,t,r,a,n,_,k,$,q,N,A=>!f.includes(A),A=>{Fe.set(!1),ye(`/class/${A.name}/edit`)},()=>Ht(),()=>Dt(new he),A=>!y.includes(A),A=>{Fe.set(!1),ye(`/skill/${A.name}`)},()=>Gt(),()=>St(new he),()=>Ee.set(!0),()=>Ee.set(!1)]}class gl extends oe{constructor(e){super(),ce(this,e,ml,pl,fe,{},null,[-1,-1])}}function ot(s,e,l){const t=s.slice();return t[7]=e[l],t}function ct(s){let e,l=s[7]+"",t;return{c(){e=I("option"),t=B(l),this.h()},l(r){e=C(r,"OPTION",{});var a=P(e);t=R(a,l),a.forEach(m),this.h()},h(){e.__value=s[7].substring(2),e.value=e.__value},m(r,a){M(r,e,a),h(e,t)},p:ie,d(r){r&&m(e)}}}function ft(s){let e,l,t=s[1]==="class"?"Class":"Skill",r,a,n,_;return{c(){e=I("div"),l=B("Share "),r=B(t),this.h()},l(u){e=C(u,"DIV",{class:!0,title:!0});var o=P(e);l=R(o,"Share "),r=R(o,t),o.forEach(m),this.h()},h(){p(e,"class","chip share svelte-1oi5qao"),p(e,"title",a="Share "+(s[1]==="class"?"Class":"Skill"))},m(u,o){M(u,e,o),h(e,l),h(e,r),n||(_=z(e,"click",s[3]),n=!0)},p(u,o){o&2&&t!==(t=u[1]==="class"?"Class":"Skill")&&ge(r,t),o&2&&a!==(a="Share "+(u[1]==="class"?"Class":"Skill"))&&p(e,"title",a)},d(u){u&&m(e),n=!1,_()}}}function ut(s){let e,l;return e=new gl({}),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){Z(e,t,r),l=!0},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function bl(s){let e,l,t,r,a,n,_,u,o,d,f,y,b,w,i,c,v,k,$=je,q=[];for(let D=0;D<$.length;D+=1)q[D]=ct(ot(s,$,D));let N=s[1]&&ft(s),S=s[2]&&ut();return{c(){e=I("div"),l=I("nav"),t=I("div"),r=I("span"),a=B("menu"),n=T(),_=I("label"),u=B(`Server
    `),o=I("select");for(let D=0;D<q.length;D+=1)q[D].c();d=T(),f=I("div"),y=I("div"),b=B("Import"),w=T(),N&&N.c(),i=T(),S&&S.c(),this.h()},l(D){e=C(D,"DIV",{class:!0});var F=P(e);l=C(F,"NAV",{class:!0});var E=P(l);t=C(E,"DIV",{class:!0});var g=P(t);r=C(g,"SPAN",{class:!0});var V=P(r);a=R(V,"menu"),V.forEach(m),g.forEach(m),n=O(E),_=C(E,"LABEL",{class:!0});var H=P(_);u=R(H,`Server
    `),o=C(H,"SELECT",{class:!0});var G=P(o);for(let A=0;A<q.length;A+=1)q[A].l(G);G.forEach(m),H.forEach(m),d=O(E),f=C(E,"DIV",{class:!0});var Y=P(f);y=C(Y,"DIV",{class:!0,title:!0});var X=P(y);b=R(X,"Import"),X.forEach(m),w=O(Y),N&&N.l(Y),Y.forEach(m),i=O(E),S&&S.l(E),E.forEach(m),F.forEach(m),this.h()},h(){p(r,"class","material-symbols-rounded"),p(t,"class","chip hamburger svelte-1oi5qao"),p(o,"class","svelte-1oi5qao"),s[0]===void 0&&le(()=>s[6].call(o)),p(_,"class","server svelte-1oi5qao"),p(y,"class","chip import svelte-1oi5qao"),p(y,"title","Import Data"),p(f,"class","transfer svelte-1oi5qao"),p(l,"class","svelte-1oi5qao"),p(e,"class","nav-wrap svelte-1oi5qao")},m(D,F){M(D,e,F),h(e,l),h(l,t),h(t,r),h(r,a),h(l,n),h(l,_),h(_,u),h(_,o);for(let E=0;E<q.length;E+=1)q[E]&&q[E].m(o,null);Ge(o,s[0],!0),h(l,d),h(l,f),h(f,y),h(y,b),h(f,w),N&&N.m(f,null),h(l,i),S&&S.m(l,null),c=!0,v||(k=[z(t,"click",s[5]),z(o,"change",s[6]),z(y,"click",s[4])],v=!0)},p(D,[F]){if(F&0){$=je;let E;for(E=0;E<$.length;E+=1){const g=ot(D,$,E);q[E]?q[E].p(g,F):(q[E]=ct(g),q[E].c(),q[E].m(o,null))}for(;E<q.length;E+=1)q[E].d(1);q.length=$.length}F&1&&Ge(o,D[0]),D[1]?N?N.p(D,F):(N=ft(D),N.c(),N.m(f,null)):N&&(N.d(1),N=null),D[2]?S?F&4&&L(S,1):(S=ut(),S.c(),L(S,1),S.m(l,null)):S&&(se(),U(S,1,1,()=>{S=null}),re())},i(D){c||(L(S),c=!0)},o(D){U(S),c=!1},d(D){D&&m(e),Oe(q,D),N&&N.d(),S&&S.d(),v=!1,ae(k)}}}function kl(s,e,l){let t,r,a;Q(s,We,d=>l(0,t=d)),Q(s,Wt,d=>l(1,r=d)),Q(s,Fe,d=>l(2,a=d));const n=()=>{let d=ne(ze);if(!d)return;let f=d.serializeYaml().toString();Xt(f).then(y=>{var b;(b=navigator==null?void 0:navigator.clipboard)==null||b.writeText(y),window.open(y)}).catch(y=>console.error(y))},_=()=>{wt(!0)},u=d=>{d.stopPropagation(),Zt()};function o(){t=qt(this),We.set(t)}return[t,r,a,n,_,u,o]}class $l extends oe{constructor(e){super(),ce(this,e,kl,bl,fe,{})}}function wl(s){let e,l,t;return{c(){e=Ie("svg"),l=Ie("g"),t=Ie("path"),this.h()},l(r){e=Ce(r,"svg",{viewBox:!0,class:!0});var a=P(e);l=Ce(a,"g",{fill:!0});var n=P(l);t=Ce(n,"path",{d:!0}),P(t).forEach(m),n.forEach(m),a.forEach(m),this.h()},h(){p(t,"d","M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"),p(l,"fill","currentColor"),p(e,"viewBox","0 0 30 34"),p(e,"class","logo-3oeRIY svelte-evyltu")},m(r,a){M(r,e,a),h(e,l),h(l,t)},p:ie,i:ie,o:ie,d(r){r&&m(e)}}}class El extends oe{constructor(e){super(),ce(this,e,null,wl,fe,{})}}function yl(s){let e,l,t,r,a,n,_,u,o,d,f,y,b,w,i,c,v,k,$,q,N,S,D,F,E,g;return f=new El({}),{c(){e=I("div"),l=I("div"),t=I("h1"),r=B("ProSkillAPI"),a=T(),n=I("h2"),_=B("Dynamic Editor"),u=T(),o=I("div"),d=I("a"),j(f.$$.fragment),y=T(),b=I("a"),w=I("img"),c=T(),v=I("a"),k=I("img"),q=T(),N=I("a"),S=I("span"),D=B("help"),this.h()},l(V){e=C(V,"DIV",{id:!0,class:!0});var H=P(e);l=C(H,"DIV",{class:!0});var G=P(l);t=C(G,"H1",{class:!0});var Y=P(t);r=R(Y,"ProSkillAPI"),Y.forEach(m),a=O(G),n=C(G,"H2",{class:!0});var X=P(n);_=R(X,"Dynamic Editor"),X.forEach(m),G.forEach(m),u=O(H),o=C(H,"DIV",{class:!0});var A=P(o);d=C(A,"A",{class:!0,href:!0,title:!0});var K=P(d);W(f.$$.fragment,K),K.forEach(m),y=O(A),b=C(A,"A",{class:!0,href:!0,title:!0});var te=P(b);w=C(te,"IMG",{src:!0,class:!0}),te.forEach(m),c=O(A),v=C(A,"A",{class:!0,href:!0,title:!0});var Me=P(v);k=C(Me,"IMG",{src:!0,class:!0}),Me.forEach(m),q=O(A),N=C(A,"A",{class:!0,href:!0,title:!0});var Be=P(N);S=C(Be,"SPAN",{class:!0});var Re=P(S);D=R(Re,"help"),Re.forEach(m),Be.forEach(m),A.forEach(m),H.forEach(m),this.h()},h(){p(t,"class","accent svelte-n9c92r"),p(n,"class","svelte-n9c92r"),p(l,"class","home svelte-n9c92r"),p(d,"class","social discord svelte-n9c92r"),p(d,"href","https://discord.gg/6UzkTe6RvW"),p(d,"title","Join our Discord"),Ye(w.src,i="/github-mark-white.svg")||p(w,"src",i),p(w,"class","svelte-n9c92r"),p(b,"class","social github svelte-n9c92r"),p(b,"href","https://github.com/promcteam/proskillapi"),p(b,"title","Check out our GitHub"),Ye(k.src,$="/spigot.png")||p(k,"src",$),p(k,"class","svelte-n9c92r"),p(v,"class","social spigot svelte-n9c92r"),p(v,"href","https://www.spigotmc.org/resources/proskillapi-create-custom-races-classes-skills-spells-with-an-easy-online-editor.91913/"),p(v,"title","Check out our resource on Spigot"),p(S,"class","material-symbols-rounded"),p(N,"class","social wiki svelte-n9c92r"),p(N,"href","https://promcteam.com/wiki/index.php?title=Proskillapi:Proskillapi"),p(N,"title","Wiki"),p(o,"class","socials svelte-n9c92r"),p(e,"id","header"),p(e,"class","svelte-n9c92r")},m(V,H){M(V,e,H),h(e,l),h(l,t),h(t,r),h(l,a),h(l,n),h(n,_),h(e,u),h(e,o),h(o,d),Z(f,d,null),h(o,y),h(o,b),h(b,w),h(o,c),h(o,v),h(v,k),h(o,q),h(o,N),h(N,S),h(S,D),F=!0,E||(g=z(l,"click",s[0]),E=!0)},p:ie,i(V){F||(L(f.$$.fragment,V),F=!0)},o(V){U(f.$$.fragment,V),F=!1},d(V){V&&m(e),J(f),E=!1,g()}}}function Dl(s){return[()=>ye("/")]}class Sl extends oe{constructor(e){super(),ce(this,e,Dl,yl,fe,{})}}function dt(s){let e,l;return e=new tl({}),{c(){j(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){Z(e,t,r),l=!0},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function _t(s){let e,l,t,r;return{c(){e=I("div"),l=B("Drop to Import"),this.h()},l(a){e=C(a,"DIV",{class:!0});var n=P(e);l=R(n,"Drop to Import"),n.forEach(m),this.h()},h(){p(e,"class","dragging svelte-8v0iul")},m(a,n){M(a,e,n),h(e,l),t||(r=z(e,"dragleave",s[4]),t=!0)},p:ie,d(a){a&&m(e),t=!1,r()}}}function Il(s){let e,l,t,r,a,n,_,u,o,d,f,y,b,w,i,c,v,k,$,q,N;e=new Sl({}),t=new $l({});const S=s[6].default,D=ht(S,s,s[5],null);let F=s[2]&&dt(),E=s[0]&&_t(s);return{c(){j(e.$$.fragment),l=T(),j(t.$$.fragment),r=T(),a=I("div"),n=I("div"),D&&D.c(),_=T(),u=I("div"),o=I("div"),d=I("span"),f=B("cloud_download"),y=T(),b=I("div"),w=I("span"),i=B("save"),c=T(),F&&F.c(),v=T(),E&&E.c(),k=ee(),this.h()},l(g){W(e.$$.fragment,g),l=O(g),W(t.$$.fragment,g),r=O(g),a=C(g,"DIV",{id:!0,class:!0});var V=P(a);n=C(V,"DIV",{id:!0,class:!0});var H=P(n);D&&D.l(H),H.forEach(m),V.forEach(m),_=O(g),u=C(g,"DIV",{id:!0,class:!0});var G=P(u);o=C(G,"DIV",{class:!0,title:!0});var Y=P(o);d=C(Y,"SPAN",{class:!0});var X=P(d);f=R(X,"cloud_download"),X.forEach(m),Y.forEach(m),y=O(G),b=C(G,"DIV",{class:!0,title:!0});var A=P(b);w=C(A,"SPAN",{class:!0});var K=P(w);i=R(K,"save"),K.forEach(m),A.forEach(m),G.forEach(m),c=O(g),F&&F.l(g),v=O(g),E&&E.l(g),k=ee(),this.h()},h(){p(n,"id","body"),p(n,"class","svelte-8v0iul"),x(n,"centered",!s[1]),p(a,"id","body-container"),p(a,"class","svelte-8v0iul"),x(a,"empty",!s[1]),p(d,"class","material-symbols-rounded svelte-8v0iul"),p(o,"class","button backup svelte-8v0iul"),p(o,"title","Backup All Data"),p(w,"class","material-symbols-rounded svelte-8v0iul"),p(b,"class","button save svelte-8v0iul"),p(b,"title","Save"),p(u,"id","floating-buttons"),p(u,"class","svelte-8v0iul")},m(g,V){Z(e,g,V),M(g,l,V),Z(t,g,V),M(g,r,V),M(g,a,V),h(a,n),D&&D.m(n,null),M(g,_,V),M(g,u,V),h(u,o),h(o,d),h(d,f),h(u,y),h(u,b),h(b,w),h(w,i),M(g,c,V),F&&F.m(g,V),M(g,v,V),E&&E.m(g,V),M(g,k,V),$=!0,q||(N=[z(o,"click",s[3]),z(b,"click",s[7])],q=!0)},p(g,[V]){D&&D.p&&(!$||V&32)&&pt(D,S,g,g[5],$?gt(S,g[5],V,null):mt(g[5]),null),(!$||V&2)&&x(n,"centered",!g[1]),(!$||V&2)&&x(a,"empty",!g[1]),g[2]?F?V&4&&L(F,1):(F=dt(),F.c(),L(F,1),F.m(v.parentNode,v)):F&&(se(),U(F,1,1,()=>{F=null}),re()),g[0]?E?E.p(g,V):(E=_t(g),E.c(),E.m(k.parentNode,k)):E&&(E.d(1),E=null)},i(g){$||(L(e.$$.fragment,g),L(t.$$.fragment,g),L(D,g),L(F),$=!0)},o(g){U(e.$$.fragment,g),U(t.$$.fragment,g),U(D,g),U(F),$=!1},d(g){J(e,g),g&&m(l),J(t,g),g&&m(r),g&&m(a),D&&D.d(g),g&&m(_),g&&m(u),g&&m(c),F&&F.d(g),g&&m(v),E&&E.d(g),g&&m(k),q=!1,ae(N)}}}function Cl(s,e,l){let t,r;Q(s,ze,b=>l(1,t=b)),Q(s,Jt,b=>l(2,r=b));let{$$slots:a={},$$scope:n}=e,_=!1;kt(()=>{document.addEventListener("dragover",o),document.addEventListener("drop",f)}),$t(()=>{document.removeEventListener("dragover",o),document.removeEventListener("drop",f)});const u=()=>{alert("This feature isn't implemented yet")},o=b=>{var w,i,c;((i=(w=b.dataTransfer)==null?void 0:w.types)==null?void 0:i.length)>0&&((c=b.dataTransfer)==null?void 0:c.types[0])=="Files"&&(b.dataTransfer.dropEffect="copy",b.stopPropagation(),b.preventDefault(),l(0,_=!0))},d=()=>{setTimeout(()=>l(0,_=!1),50)},f=b=>{l(0,_=!1);for(let w=0;w<b.dataTransfer.files.length;w++){const i=b.dataTransfer.files[w];i.name.indexOf(".yml")!=-1&&Et(i)}b.stopPropagation(),b.preventDefault()},y=()=>It();return s.$$set=b=>{"$$scope"in b&&l(5,n=b.$$scope)},[_,t,r,u,d,n,a,y]}class Al extends oe{constructor(e){super(),ce(this,e,Cl,Il,fe,{})}}export{Al as default};
