import{S as ve,i as he,s as _e,C as Se,D as $e,m as p,h as d,n as c,b as R,E as o,B as q,F as ht,k as h,q as A,a as V,w as Pe,l as _,r as M,c as P,x as Ne,G as Ze,y as Ae,H as J,u as _t,f as B,t as x,z as Me,I as Oe,J as pe,K as ue,L as pt,e as Je,d as Ke,M as mt,N as gt,O as kt,P as wt,Q as Qe,p as Xe,R as oe,T as xe,g as et,U as bt,V as me}from"../../chunks/index-99ca3454.js";import{w as Re}from"../../chunks/index-0dbe317b.js";function Et(i){let e,t,s;return{c(){e=Se("svg"),t=Se("g"),s=Se("path"),this.h()},l(f){e=$e(f,"svg",{viewBox:!0,class:!0});var n=p(e);t=$e(n,"g",{fill:!0});var l=p(t);s=$e(l,"path",{d:!0}),p(s).forEach(d),l.forEach(d),n.forEach(d),this.h()},h(){c(s,"d","M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"),c(t,"fill","currentColor"),c(e,"viewBox","0 0 30 34"),c(e,"class","logo-3oeRIY svelte-evyltu")},m(f,n){R(f,e,n),o(e,t),o(t,s)},p:q,i:q,o:q,d(f){f&&d(e)}}}class Ct extends ve{constructor(e){super(),he(this,e,null,Et,_e,{})}}const Ve=Re(!1),ge=Re(!0),ft=Re(!1),fe=["Honor Guard","Assassin","Archer"],tt=["Particle Blast","Poison Dart","Storm"],It=()=>Ve.set(!ht(Ve)),yt=()=>{ge.set(!0)},zt=()=>{ge.set(!1)},vt=i=>{ft.set(i)},Dt="https://6jgex7frk0.execute-api.us-west-2.amazonaws.com/default/haste-uploader",St=i=>typeof i!="string"?Promise.reject(new Error('You cannot send that. Please include a "content" argument that is a valid string.')):i===""?Promise.reject(new Error("You cannot send nothing.")):fetch(Dt,{method:"POST",body:i,headers:{"Content-Type":"text/plain"}}).then(t=>t.json()).then(t=>{if(!t.url)throw t.error?new Error(t.error):new Error("Did not receive hastebin key.");return t.url});function st(i,e,t){const s=i.slice();return s[4]=e[t],s}function lt(i){let e,t=i[4]+"",s;return{c(){e=h("option"),s=A(t),this.h()},l(f){e=_(f,"OPTION",{});var n=p(e);s=M(n,t),n.forEach(d),this.h()},h(){e.__value=i[4],e.value=e.__value},m(f,n){R(f,e,n),o(e,s)},p:q,d(f){f&&d(e)}}}function $t(i){let e,t,s,f,n,l,r,u,a,g,y,m,D,H,G,S,b,E,$,k,O,z,C,v,w,F,U,Y,Z,T,te,ee,we,K,Q,be,Ee,W,Ce,ae=i[0]?"Class":"Skill",ne,ce,se,Ie,He;y=new Ct({});let le=i[1],L=[];for(let I=0;I<le.length;I+=1)L[I]=lt(st(i,le,I));return{c(){e=h("div"),t=h("div"),s=h("h1"),f=A("ProSkillAPI"),n=V(),l=h("h2"),r=A("Dynamic Editor"),u=V(),a=h("div"),g=h("a"),Pe(y.$$.fragment),m=V(),D=h("a"),H=h("img"),S=V(),b=h("a"),E=h("img"),k=V(),O=h("a"),z=h("span"),C=A("help"),v=V(),w=h("nav"),F=h("div"),U=h("span"),Y=A("menu"),Z=V(),T=h("label"),te=A(`Server
    `),ee=h("select");for(let I=0;I<L.length;I+=1)L[I].c();we=V(),K=h("div"),Q=h("div"),be=A("Import"),Ee=V(),W=h("div"),Ce=A("Share "),ne=A(ae),this.h()},l(I){e=_(I,"DIV",{id:!0,class:!0});var j=p(e);t=_(j,"DIV",{class:!0});var N=p(t);s=_(N,"H1",{class:!0});var ie=p(s);f=M(ie,"ProSkillAPI"),ie.forEach(d),n=P(N),l=_(N,"H2",{class:!0});var Be=p(l);r=M(Be,"Dynamic Editor"),Be.forEach(d),N.forEach(d),u=P(j),a=_(j,"DIV",{class:!0});var X=p(a);g=_(X,"A",{class:!0,href:!0,title:!0});var Le=p(g);Ne(y.$$.fragment,Le),Le.forEach(d),m=P(X),D=_(X,"A",{class:!0,href:!0,title:!0});var Ge=p(D);H=_(Ge,"IMG",{src:!0,class:!0}),Ge.forEach(d),S=P(X),b=_(X,"A",{class:!0,href:!0,title:!0});var Ue=p(b);E=_(Ue,"IMG",{src:!0,class:!0}),Ue.forEach(d),k=P(X),O=_(X,"A",{class:!0,href:!0,title:!0});var Fe=p(O);z=_(Fe,"SPAN",{class:!0});var Te=p(z);C=M(Te,"help"),Te.forEach(d),Fe.forEach(d),X.forEach(d),j.forEach(d),v=P(I),w=_(I,"NAV",{class:!0});var re=p(w);F=_(re,"DIV",{class:!0});var je=p(F);U=_(je,"SPAN",{class:!0});var qe=p(U);Y=M(qe,"menu"),qe.forEach(d),je.forEach(d),Z=P(re),T=_(re,"LABEL",{class:!0});var ye=p(T);te=M(ye,`Server
    `),ee=_(ye,"SELECT",{class:!0});var We=p(ee);for(let De=0;De<L.length;De+=1)L[De].l(We);We.forEach(d),ye.forEach(d),we=P(re),K=_(re,"DIV",{class:!0});var de=p(K);Q=_(de,"DIV",{class:!0,title:!0});var Ye=p(Q);be=M(Ye,"Import"),Ye.forEach(d),Ee=P(de),W=_(de,"DIV",{class:!0,title:!0});var ze=p(W);Ce=M(ze,"Share "),ne=M(ze,ae),ze.forEach(d),de.forEach(d),re.forEach(d),this.h()},h(){c(s,"class","accent svelte-153kga6"),c(l,"class","svelte-153kga6"),c(t,"class","home svelte-153kga6"),c(g,"class","social discord svelte-153kga6"),c(g,"href","https://discord.gg/RhTyRReKyP"),c(g,"title","Join our Discord"),Ze(H.src,G="/github-mark-white.svg")||c(H,"src",G),c(H,"class","svelte-153kga6"),c(D,"class","social github svelte-153kga6"),c(D,"href","https://github.com/promcteam/proskillapi"),c(D,"title","Check out our GitHub"),Ze(E.src,$="/spigot.png")||c(E,"src",$),c(E,"class","svelte-153kga6"),c(b,"class","social spigot svelte-153kga6"),c(b,"href","https://www.spigotmc.org/resources/proskillapi-create-custom-races-classes-skills-spells-with-an-easy-online-editor.91913/"),c(b,"title","Check out our resource on Spigot"),c(z,"class","material-symbols-rounded"),c(O,"class","social wiki svelte-153kga6"),c(O,"href","https://promcteam.com/wiki/index.php?title=Proskillapi:Proskillapi"),c(O,"title","Wiki"),c(a,"class","socials svelte-153kga6"),c(e,"id","header"),c(e,"class","svelte-153kga6"),c(U,"class","material-symbols-rounded svelte-153kga6"),c(F,"class","chip hamburger svelte-153kga6"),c(ee,"class","svelte-153kga6"),c(T,"class","server svelte-153kga6"),c(Q,"class","chip import svelte-153kga6"),c(Q,"title","Import Data"),c(W,"class","chip share svelte-153kga6"),c(W,"title",ce="Share "+(i[0]?"Class":"Skill")),c(K,"class","socials svelte-153kga6"),c(w,"class","svelte-153kga6")},m(I,j){R(I,e,j),o(e,t),o(t,s),o(s,f),o(t,n),o(t,l),o(l,r),o(e,u),o(e,a),o(a,g),Ae(y,g,null),o(a,m),o(a,D),o(D,H),o(a,S),o(a,b),o(b,E),o(a,k),o(a,O),o(O,z),o(z,C),R(I,v,j),R(I,w,j),o(w,F),o(F,U),o(U,Y),o(w,Z),o(w,T),o(T,te),o(T,ee);for(let N=0;N<L.length;N+=1)L[N].m(ee,null);o(w,we),o(w,K),o(K,Q),o(Q,be),o(K,Ee),o(K,W),o(W,Ce),o(W,ne),se=!0,Ie||(He=[J(F,"click",It),J(Q,"click",i[3]),J(W,"click",i[2])],Ie=!0)},p(I,[j]){if(j&2){le=I[1];let N;for(N=0;N<le.length;N+=1){const ie=st(I,le,N);L[N]?L[N].p(ie,j):(L[N]=lt(ie),L[N].c(),L[N].m(ee,null))}for(;N<L.length;N+=1)L[N].d(1);L.length=le.length}(!se||j&1)&&ae!==(ae=I[0]?"Class":"Skill")&&_t(ne,ae),(!se||j&1&&ce!==(ce="Share "+(I[0]?"Class":"Skill")))&&c(W,"title",ce)},i(I){se||(B(y.$$.fragment,I),se=!0)},o(I){x(y.$$.fragment,I),se=!1},d(I){I&&d(e),Me(y),I&&d(v),I&&d(w),Oe(L,I),Ie=!1,pe(He)}}}function Vt(i,e,t){let s;return ue(i,ge,r=>t(0,s=r)),[s,["1.19","1.18","1.17","1.16"],()=>{St("Skill data will go here!").then(r=>{console.log(r),navigator.clipboard.writeText(r),window.open(r)}).catch(r=>{console.error(r)})},()=>{console.log("Clicked open"),vt(!0)}]}class Pt extends ve{constructor(e){super(),he(this,e,Vt,$t,_e,{})}}const rt=(i,{delay:e=0,duration:t=500})=>{const s=getComputedStyle(i).maxWidth,f=getComputedStyle(i).minWidth,n=s.match(/([\d.]+)(.*)/),l=f.match(/([\d.]+)(.*)/);if(!n)return{delay:e,duration:t,css:g=>`max-width: ${g*100}%`};const r=Number.parseFloat(n[1]),u=l&&l[1]?Number.parseFloat(l[1]):100,a=l&&l[2]?l[2]:"%";return{delay:e,duration:t,css:g=>`max-width: ${g*r}${n[2]}; min-width: ${g*u}${a};`}};function Nt(i){const e=i-1;return e*e*e+1}function ke(i,{delay:e=0,duration:t=400,easing:s=Nt,x:f=0,y:n=0,opacity:l=0}={}){const r=getComputedStyle(i),u=+r.opacity,a=r.transform==="none"?"":r.transform,g=u*(1-l);return{delay:e,duration:t,easing:s,css:(y,m)=>`
			transform: ${a} translate(${(1-y)*f}px, ${(1-y)*n}px);
			opacity: ${u-g*m}`}}function At(i){let e,t,s,f,n,l,r,u,a,g,y,m,D,H,G,S,b,E,$;return{c(){e=h("div"),t=h("div"),s=h("div"),f=h("div"),n=h("div"),l=A("Import from URL"),r=V(),u=h("div"),a=h("span"),g=A("OR"),y=V(),m=h("div"),D=h("div"),H=A("Upload File"),G=V(),S=h("div"),b=A("Import"),this.h()},l(k){e=_(k,"DIV",{class:!0});var O=p(e);t=_(O,"DIV",{class:!0});var z=p(t);s=_(z,"DIV",{class:!0});var C=p(s);f=_(C,"DIV",{class:!0});var v=p(f);n=_(v,"DIV",{});var w=p(n);l=M(w,"Import from URL"),w.forEach(d),v.forEach(d),r=P(C),u=_(C,"DIV",{class:!0});var F=p(u);a=_(F,"SPAN",{class:!0});var U=p(a);g=M(U,"OR"),U.forEach(d),F.forEach(d),y=P(C),m=_(C,"DIV",{class:!0});var Y=p(m);D=_(Y,"DIV",{});var Z=p(D);H=M(Z,"Upload File"),Z.forEach(d),Y.forEach(d),C.forEach(d),G=P(z),S=_(z,"DIV",{class:!0});var T=p(S);b=M(T,"Import"),T.forEach(d),z.forEach(d),O.forEach(d),this.h()},h(){c(f,"class","option svelte-znfs7o"),c(a,"class","svelte-znfs7o"),c(u,"class","or svelte-znfs7o"),c(m,"class","option svelte-znfs7o"),c(s,"class","options svelte-znfs7o"),c(S,"class","button svelte-znfs7o"),c(t,"class","modal-content svelte-znfs7o"),c(e,"class","backdrop svelte-znfs7o")},m(k,O){R(k,e,O),o(e,t),o(t,s),o(s,f),o(f,n),o(n,l),o(s,r),o(s,u),o(u,a),o(a,g),o(s,y),o(s,m),o(m,D),o(D,H),o(t,G),o(t,S),o(S,b),E||($=[J(t,"click",i[1]),J(e,"click",i[0])],E=!0)},p:q,i:q,o:q,d(k){k&&d(e),E=!1,pe($)}}}function Mt(i){return[()=>vt(!1),s=>s.stopPropagation()]}class Ot extends ve{constructor(e){super(),he(this,e,Mt,At,_e,{})}}const{window:at}=wt;function it(i,e,t){const s=i.slice();return s[12]=e[t],s[11]=t,s}function ot(i,e,t){const s=i.slice();return s[9]=e[t],s[11]=t,s}function nt(i){let e,t,s,f,n,l,r,u,a,g,y,m,D,H;function G(E,$){return E[3]?Ht:Rt}let S=G(i),b=S(i);return{c(){e=h("div"),t=h("div"),s=h("div"),f=A("Classes"),n=V(),l=h("div"),r=A("Skills"),u=V(),a=h("hr"),g=V(),b.c(),this.h()},l(E){e=_(E,"DIV",{id:!0,style:!0,class:!0});var $=p(e);t=_($,"DIV",{id:!0,class:!0});var k=p(t);s=_(k,"DIV",{class:!0});var O=p(s);f=M(O,"Classes"),O.forEach(d),n=P(k),l=_(k,"DIV",{class:!0});var z=p(l);r=M(z,"Skills"),z.forEach(d),k.forEach(d),u=P($),a=_($,"HR",{}),g=P($),b.l($),$.forEach(d),this.h()},h(){c(s,"class","classes svelte-z4zwgn"),c(l,"class","skills svelte-z4zwgn"),c(t,"id","type-selector"),c(t,"class","svelte-z4zwgn"),Qe(t,"c-selected",i[3]),c(e,"id","sidebar"),Xe(e,"height",i[1]+"px"),c(e,"class","svelte-z4zwgn")},m(E,$){R(E,e,$),o(e,t),o(t,s),o(s,f),o(t,n),o(t,l),o(l,r),o(e,u),o(e,a),o(e,g),b.m(e,null),i[8](e),m=!0,D||(H=[J(s,"click",yt),J(l,"click",zt)],D=!0)},p(E,$){(!m||$&8)&&Qe(t,"c-selected",E[3]),S===(S=G(E))&&b?b.p(E,$):(b.d(1),b=S(E),b&&(b.c(),B(b,1),b.m(e,null))),(!m||$&2)&&Xe(e,"height",E[1]+"px")},i(E){m||(B(b),oe(()=>{y||(y=xe(e,rt,{},!0)),y.run(1)}),m=!0)},o(E){y||(y=xe(e,rt,{},!1)),y.run(0),m=!1},d(E){E&&d(e),b.d(),i[8](null),E&&y&&y.end(),D=!1,pe(H)}}}function Rt(i){let e,t,s,f,n=tt,l=[];for(let r=0;r<n.length;r+=1)l[r]=ct(it(i,n,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=V(),t=h("div"),s=A("+ New Skill"),this.h()},l(r){for(let a=0;a<l.length;a+=1)l[a].l(r);e=P(r),t=_(r,"DIV",{class:!0});var u=p(t);s=M(u,"+ New Skill"),u.forEach(d),this.h()},h(){c(t,"class","sidebar-entry svelte-z4zwgn")},m(r,u){for(let a=0;a<l.length;a+=1)l[a].m(r,u);R(r,e,u),R(r,t,u),o(t,s)},p(r,u){if(i=r,u&0){n=tt;let a;for(a=0;a<n.length;a+=1){const g=it(i,n,a);l[a]?(l[a].p(g,u),B(l[a],1)):(l[a]=ct(g),l[a].c(),B(l[a],1),l[a].m(e.parentNode,e))}for(;a<l.length;a+=1)l[a].d(1);l.length=n.length}},i(r){for(let u=0;u<n.length;u+=1)B(l[u]);f||oe(()=>{f=me(t,ke,{x:-100,duration:500,delay:200+100*(fe.length+1)}),f.start()})},o:q,d(r){Oe(l,r),r&&d(e),r&&d(t)}}}function Ht(i){let e,t,s,f,n=fe,l=[];for(let r=0;r<n.length;r+=1)l[r]=dt(ot(i,n,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=V(),t=h("div"),s=A("+ New Class"),this.h()},l(r){for(let a=0;a<l.length;a+=1)l[a].l(r);e=P(r),t=_(r,"DIV",{class:!0});var u=p(t);s=M(u,"+ New Class"),u.forEach(d),this.h()},h(){c(t,"class","sidebar-entry svelte-z4zwgn")},m(r,u){for(let a=0;a<l.length;a+=1)l[a].m(r,u);R(r,e,u),R(r,t,u),o(t,s)},p(r,u){if(i=r,u&0){n=fe;let a;for(a=0;a<n.length;a+=1){const g=ot(i,n,a);l[a]?(l[a].p(g,u),B(l[a],1)):(l[a]=dt(g),l[a].c(),B(l[a],1),l[a].m(e.parentNode,e))}for(;a<l.length;a+=1)l[a].d(1);l.length=n.length}},i(r){for(let u=0;u<n.length;u+=1)B(l[u]);f||oe(()=>{f=me(t,ke,{x:-100,duration:500,delay:200+100*(fe.length+1)}),f.start()})},o:q,d(r){Oe(l,r),r&&d(e),r&&d(t)}}}function ct(i){let e,t=i[12]+"",s,f;return{c(){e=h("div"),s=A(t),this.h()},l(n){e=_(n,"DIV",{class:!0});var l=p(e);s=M(l,t),l.forEach(d),this.h()},h(){c(e,"class","sidebar-entry svelte-z4zwgn")},m(n,l){R(n,e,l),o(e,s)},p:q,i(n){f||oe(()=>{f=me(e,ke,{x:-100,duration:500,delay:200+100*i[11]}),f.start()})},o:q,d(n){n&&d(e)}}}function dt(i){let e,t=i[9]+"",s,f;return{c(){e=h("div"),s=A(t),this.h()},l(n){e=_(n,"DIV",{class:!0});var l=p(e);s=M(l,t),l.forEach(d),this.h()},h(){c(e,"class","sidebar-entry svelte-z4zwgn")},m(n,l){R(n,e,l),o(e,s)},p:q,i(n){f||oe(()=>{f=me(e,ke,{x:-100,duration:500,delay:200+100*i[11]}),f.start()})},o:q,d(n){n&&d(e)}}}function ut(i){let e,t;return e=new Ot({}),{c(){Pe(e.$$.fragment)},l(s){Ne(e.$$.fragment,s)},m(s,f){Ae(e,s,f),t=!0},i(s){t||(B(e.$$.fragment,s),t=!0)},o(s){x(e.$$.fragment,s),t=!1},d(s){Me(e,s)}}}function Bt(i){let e,t,s,f,n,l,r,u,a,g,y,m,D,H,G,S,b,E,$;e=new Pt({});let k=i[2]&&nt(i);const O=i[7].default,z=pt(O,i,i[6],null);let C=i[4]&&ut();return{c(){Pe(e.$$.fragment),t=V(),k&&k.c(),s=V(),f=h("div"),n=h("div"),z&&z.c(),l=V(),r=h("div"),u=h("div"),a=h("span"),g=A("cloud_download"),y=V(),m=h("div"),D=h("span"),H=A("save"),G=V(),C&&C.c(),S=Je(),this.h()},l(v){Ne(e.$$.fragment,v),t=P(v),k&&k.l(v),s=P(v),f=_(v,"DIV",{id:!0,class:!0});var w=p(f);n=_(w,"DIV",{class:!0});var F=p(n);z&&z.l(F),F.forEach(d),w.forEach(d),l=P(v),r=_(v,"DIV",{id:!0,class:!0});var U=p(r);u=_(U,"DIV",{class:!0,title:!0});var Y=p(u);a=_(Y,"SPAN",{class:!0});var Z=p(a);g=M(Z,"cloud_download"),Z.forEach(d),Y.forEach(d),y=P(U),m=_(U,"DIV",{class:!0,title:!0});var T=p(m);D=_(T,"SPAN",{class:!0});var te=p(D);H=M(te,"save"),te.forEach(d),T.forEach(d),U.forEach(d),G=P(v),C&&C.l(v),S=Je(),this.h()},h(){c(n,"class","content svelte-z4zwgn"),c(f,"id","body"),c(f,"class","svelte-z4zwgn"),c(a,"class","material-symbols-rounded svelte-z4zwgn"),c(u,"class","button backup svelte-z4zwgn"),c(u,"title","Backup All Data"),c(D,"class","material-symbols-rounded svelte-z4zwgn"),c(m,"class","button save svelte-z4zwgn"),c(m,"title","Save"),c(r,"id","floating-buttons"),c(r,"class","svelte-z4zwgn")},m(v,w){Ae(e,v,w),R(v,t,w),k&&k.m(v,w),R(v,s,w),R(v,f,w),o(f,n),z&&z.m(n,null),R(v,l,w),R(v,r,w),o(r,u),o(u,a),o(a,g),o(r,y),o(r,m),o(m,D),o(D,H),R(v,G,w),C&&C.m(v,w),R(v,S,w),b=!0,E||($=[J(at,"scroll",i[5]),J(at,"resize",i[5])],E=!0)},p(v,[w]){v[2]?k?(k.p(v,w),w&4&&B(k,1)):(k=nt(v),k.c(),B(k,1),k.m(s.parentNode,s)):k&&(et(),x(k,1,1,()=>{k=null}),Ke()),z&&z.p&&(!b||w&64)&&mt(z,O,v,v[6],b?kt(O,v[6],w,null):gt(v[6]),null),v[4]?C?w&16&&B(C,1):(C=ut(),C.c(),B(C,1),C.m(S.parentNode,S)):C&&(et(),x(C,1,1,()=>{C=null}),Ke())},i(v){b||(B(e.$$.fragment,v),B(k),B(z,v),B(C),b=!0)},o(v){x(e.$$.fragment,v),x(k),x(z,v),x(C),b=!1},d(v){Me(e,v),v&&d(t),k&&k.d(v),v&&d(s),v&&d(f),z&&z.d(v),v&&d(l),v&&d(r),v&&d(G),C&&C.d(v),v&&d(S),E=!1,pe($)}}}function Lt(i,e,t){let s,f,n;ue(i,Ve,m=>t(2,s=m)),ue(i,ge,m=>t(3,f=m)),ue(i,ft,m=>t(4,n=m));let{$$slots:l={},$$scope:r}=e,u,a=200;const g=()=>{if(!u)return;const D=u.getBoundingClientRect().y,H=window.innerHeight;t(1,a=H-D)};function y(m){bt[m?"unshift":"push"](()=>{u=m,t(0,u)})}return i.$$set=m=>{"$$scope"in m&&t(6,r=m.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&u&&g()},[u,a,s,f,n,g,r,l,y]}class Ft extends ve{constructor(e){super(),he(this,e,Lt,Bt,_e,{})}}export{Ft as default};
