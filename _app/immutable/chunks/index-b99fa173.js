function b(){}const K=t=>t;function kt(t,e){for(const n in e)t[n]=e[n];return t}function dt(t){return t()}function lt(){return Object.create(null)}function S(t){t.forEach(dt)}function N(t){return typeof t=="function"}function St(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let F;function te(t,e){return F||(F=document.createElement("a")),F.href=e,t===F.href}function At(t){return Object.keys(t).length===0}function nt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ee(t){let e;return nt(t,n=>e=n)(),e}function ne(t,e,n){t.$$.on_destroy.push(nt(e,n))}function ie(t,e,n,i){if(t){const s=_t(t,e,n,i);return t[0](s)}}function _t(t,e,n,i){return t[1]&&i?kt(n.ctx.slice(),t[1](i(e))):n.ctx}function se(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function re(t,e,n,i,s,c){if(s){const r=_t(e,n,i,c);t.p(r,s)}}function oe(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ce(t){return t&&N(t.destroy)?t.destroy:b}const ht=typeof window<"u";let Q=ht?()=>window.performance.now():()=>Date.now(),it=ht?t=>requestAnimationFrame(t):b;const j=new Set;function pt(t){j.forEach(e=>{e.c(t)||(j.delete(e),e.f())}),j.size!==0&&it(pt)}function V(t){let e;return j.size===0&&it(pt),{promise:new Promise(n=>{j.add(e={c:t,f:n})}),abort(){j.delete(e)}}}let X=!1;function Nt(){X=!0}function Ct(){X=!1}function Mt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:Mt(1,s,h=>e[n[h]].claim_order,a))-1;i[l]=n[f]+1;const d=f+1;n[d]=l,s=Math.max(d,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const f=a<c.length?c[a]:null;t.insertBefore(r[l],f)}}function mt(t,e){t.appendChild(e)}function gt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function jt(t){const e=rt("style");return zt(gt(t),e),e.sheet}function zt(t,e){return mt(t.head||t,e),e.sheet}function Tt(t,e){if(X){for(Dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ae(t,e,n){X&&!n?Tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function st(t){t.parentNode&&t.parentNode.removeChild(t)}function le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function rt(t){return document.createElement(t)}function Rt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ot(t){return document.createTextNode(t)}function ue(){return ot(" ")}function fe(){return ot("")}function ut(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function de(t){return function(e){return e.preventDefault(),t.call(this,e)}}function _e(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function he(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function pe(t){return t===""?null:+t}function qt(t){return Array.from(t.childNodes)}function Pt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function yt(t,e,n,i,s=!1){Pt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function bt(t,e,n,i){return yt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function me(t,e,n){return bt(t,e,n,rt)}function ge(t,e,n){return bt(t,e,n,Rt)}function Bt(t,e){return yt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>ot(e),!0)}function ye(t){return Bt(t," ")}function be(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function we(t,e){t.value=e??""}function $e(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function xe(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Ot(t){for(const e of t.options)if(!e.disabled)return e}function ve(t){const e=t.querySelector(":checked")||Ot(t);return e&&e.__value}let I;function Lt(){if(I===void 0){I=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{I=!0}}return I}function Ee(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=rt("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Lt();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=ut(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=ut(i.contentWindow,"resize",e),e()}),mt(t,i),()=>{(s||c&&i.contentWindow)&&c(),st(i)}}function ke(t,e,n){t.classList[n?"add":"remove"](e)}function wt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Se(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function Ae(t,e){return new t(e)}const G=new Map;let J=0;function Wt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ht(t,e){const n={stylesheet:jt(e),rules:{}};return G.set(t,n),n}function P(t,e,n,i,s,c,r,o=0){const l=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=l){const g=e+(n-e)*c(m);a+=m*100+`%{${r(g,1-g)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,d=`__svelte_${Wt(f)}_${o}`,h=gt(t),{stylesheet:u,rules:_}=G.get(h)||Ht(h,t);_[d]||(_[d]=!0,u.insertRule(`@keyframes ${d} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${i}ms linear ${s}ms 1 both`,J+=1,d}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),J-=s,J||Ft())}function Ft(){it(()=>{J||(G.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&st(e)}),G.clear())})}function Ne(t,e,n,i){if(!e)return b;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return b;const{delay:c=0,duration:r=300,easing:o=K,start:l=Q()+c,end:a=l+r,tick:f=b,css:d}=n(t,{from:e,to:s},i);let h=!0,u=!1,_;function p(){d&&(_=P(t,0,1,r,c,o,d)),c||(u=!0)}function m(){d&&B(t,_),h=!1}return V(g=>{if(!u&&g>=l&&(u=!0),u&&g>=a&&(f(1,0),m()),!h)return!1;if(u){const $=g-l,w=0+1*o($/r);f(w,1-w)}return!0}),p(),f(0,1),m}function Ce(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,It(t,s)}}function It(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let O;function q(t){O=t}function L(){if(!O)throw new Error("Function called outside component initialization");return O}function Me(t){L().$$.before_update.push(t)}function De(t){L().$$.on_mount.push(t)}function je(t){L().$$.after_update.push(t)}function ze(t){L().$$.on_destroy.push(t)}function Te(){const t=L();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=wt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Re(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const D=[],ft=[];let z=[];const tt=[],$t=Promise.resolve();let et=!1;function xt(){et||(et=!0,$t.then(vt))}function qe(){return xt(),$t}function T(t){z.push(t)}function Pe(t){tt.push(t)}const Z=new Set;let C=0;function vt(){if(C!==0)return;const t=O;do{try{for(;C<D.length;){const e=D[C];C++,q(e),Ut(e.$$)}}catch(e){throw D.length=0,C=0,e}for(q(null),D.length=0,C=0;ft.length;)ft.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];Z.has(n)||(Z.add(n),n())}z.length=0}while(D.length);for(;tt.length;)tt.pop()();et=!1,Z.clear(),q(t)}function Ut(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}function Gt(t){const e=[],n=[];z.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),z=e}let R;function ct(){return R||(R=Promise.resolve(),R.then(()=>{R=null})),R}function A(t,e,n){t.dispatchEvent(wt(`${e?"intro":"outro"}${n}`))}const U=new Set;let k;function Be(){k={r:0,c:[],p:k}}function Oe(){k.r||S(k.c),k=k.p}function Et(t,e){t&&t.i&&(U.delete(t),t.i(e))}function Jt(t,e,n,i){if(t&&t.o){if(U.has(t))return;U.add(t),k.c.push(()=>{U.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const at={duration:0};function Le(t,e,n){const i={direction:"in"};let s=e(t,n,i),c=!1,r,o,l=0;function a(){r&&B(t,r)}function f(){const{delay:h=0,duration:u=300,easing:_=K,tick:p=b,css:m}=s||at;m&&(r=P(t,0,1,u,h,_,m,l++)),p(0,1);const g=Q()+h,$=g+u;o&&o.abort(),c=!0,T(()=>A(t,!0,"start")),o=V(w=>{if(c){if(w>=$)return p(1,0),A(t,!0,"end"),a(),c=!1;if(w>=g){const x=_((w-g)/u);p(x,1-x)}}return c})}let d=!1;return{start(){d||(d=!0,B(t),N(s)?(s=s(i),ct().then(f)):f())},invalidate(){d=!1},end(){c&&(a(),c=!1)}}}function We(t,e,n){const i={direction:"out"};let s=e(t,n,i),c=!0,r;const o=k;o.r+=1;function l(){const{delay:a=0,duration:f=300,easing:d=K,tick:h=b,css:u}=s||at;u&&(r=P(t,1,0,f,a,d,u));const _=Q()+a,p=_+f;T(()=>A(t,!1,"start")),V(m=>{if(c){if(m>=p)return h(0,1),A(t,!1,"end"),--o.r||S(o.c),!1;if(m>=_){const g=d((m-_)/f);h(1-g,g)}}return c})}return N(s)?ct().then(()=>{s=s(i),l()}):l(),{end(a){a&&s.tick&&s.tick(1,0),c&&(r&&B(t,r),c=!1)}}}function He(t,e,n,i){const s={direction:"both"};let c=e(t,n,s),r=i?0:1,o=null,l=null,a=null;function f(){a&&B(t,a)}function d(u,_){const p=u.b-r;return _*=Math.abs(p),{a:r,b:u.b,d:p,duration:_,start:u.start,end:u.start+_,group:u.group}}function h(u){const{delay:_=0,duration:p=300,easing:m=K,tick:g=b,css:$}=c||at,w={start:Q()+_,b:u};u||(w.group=k,k.r+=1),o||l?l=w:($&&(f(),a=P(t,r,u,p,_,m,$)),u&&g(0,1),o=d(w,p),T(()=>A(t,u,"start")),V(x=>{if(l&&x>l.start&&(o=d(l,p),l=null,A(t,o.b,"start"),$&&(f(),a=P(t,r,o.b,o.duration,0,m,c.css))),o){if(x>=o.end)g(r=o.b,1-r),A(t,o.b,"end"),l||(o.b?f():--o.group.r||S(o.group.c)),o=null;else if(x>=o.start){const W=x-o.start;r=o.a+o.d*m(W/o.duration),g(r,1-r)}}return!!(o||l)}))}return{run(u){N(c)?ct().then(()=>{c=c(s),h(u)}):h(u)},end(){f(),o=l=null}}}const Fe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Kt(t,e){Jt(t,1,1,()=>{e.delete(t.key)})}function Ie(t,e){t.f(),Kt(t,e)}function Ue(t,e,n,i,s,c,r,o,l,a,f,d){let h=t.length,u=c.length,_=h;const p={};for(;_--;)p[t[_].key]=_;const m=[],g=new Map,$=new Map,w=[];for(_=u;_--;){const y=d(s,c,_),v=n(y);let E=r.get(v);E?i&&w.push(()=>E.p(y,e)):(E=a(v,y),E.c()),g.set(v,m[_]=E),v in p&&$.set(v,Math.abs(_-p[v]))}const x=new Set,W=new Set;function Y(y){Et(y,1),y.m(o,f),r.set(y.key,y),f=y.first,u--}for(;h&&u;){const y=m[u-1],v=t[h-1],E=y.key,H=v.key;y===v?(f=y.first,h--,u--):g.has(H)?!r.has(E)||x.has(E)?Y(y):W.has(H)?h--:$.get(E)>$.get(H)?(W.add(E),Y(y)):(x.add(H),h--):(l(v,r),h--)}for(;h--;){const y=t[h];g.has(y.key)||l(y,r)}for(;u;)Y(m[u-1]);return S(w),m}function Ge(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Je(t){t&&t.c()}function Ke(t,e){t&&t.l(e)}function Qt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||T(()=>{const r=t.$$.on_mount.map(dt).filter(N);t.$$.on_destroy?t.$$.on_destroy.push(...r):S(r),t.$$.on_mount=[]}),c.forEach(T)}function Vt(t,e){const n=t.$$;n.fragment!==null&&(Gt(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Xt(t,e){t.$$.dirty[0]===-1&&(D.push(t),xt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qe(t,e,n,i,s,c,r,o=[-1]){const l=O;q(t);const a=t.$$={fragment:null,ctx:[],props:c,update:b,not_equal:s,bound:lt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:lt(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(d,h,...u)=>{const _=u.length?u[0]:h;return a.ctx&&s(a.ctx[d],a.ctx[d]=_)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](_),f&&Xt(t,d)),h}):[],a.update(),f=!0,S(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Nt();const d=qt(e.target);a.fragment&&a.fragment.l(d),d.forEach(st)}else a.fragment&&a.fragment.c();e.intro&&Et(t.$$.fragment),Qt(t,e.target,e.anchor,e.customElement),Ct(),vt()}q(l)}class Ve{$destroy(){Vt(this,1),this.$destroy=b}$on(e,n){if(!N(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!At(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const M=[];function Yt(t,e){return{subscribe:Zt(t,e).subscribe}}function Zt(t,e=b){let n;const i=new Set;function s(o){if(St(t,o)&&(t=o,n)){const l=!M.length;for(const a of i)a[1](),M.push(a,t);if(l){for(let a=0;a<M.length;a+=2)M[a][0](M[a+1]);M.length=0}}}function c(o){s(o(t))}function r(o,l=b){const a=[o,l];return i.add(a),i.size===1&&(n=e(s)||b),o(t),()=>{i.delete(a),i.size===0&&n&&(n(),n=null)}}return{set:s,update:c,subscribe:r}}function Xe(t,e,n){const i=!Array.isArray(t),s=i?[t]:t,c=e.length<2;return Yt(n,r=>{let o=!1;const l=[];let a=0,f=b;const d=()=>{if(a)return;f();const u=e(i?l[0]:l,r);c?r(u):f=N(u)?u:b},h=s.map((u,_)=>nt(u,p=>{l[_]=p,a&=~(1<<_),o&&d()},()=>{a|=1<<_}));return o=!0,d(),function(){S(h),f()}})}export{Pe as $,Vt as A,qe as B,Zt as C,Tt as D,we as E,ut as F,S as G,ie as H,ke as I,_e as J,de as K,re as L,oe as M,se as N,T as O,Le as P,We as Q,ne as R,Ve as S,ee as T,Re as U,N as V,Ue as W,Kt as X,He as Y,Ge as Z,ce as _,ue as a,Me as a0,ze as a1,le as a2,b as a3,xe as a4,ve as a5,Rt as a6,ge as a7,te as a8,K as a9,Te as aa,Fe as ab,Ee as ac,Ce as ad,It as ae,Ne as af,Ie as ag,Xe as ah,Se as ai,pe as aj,ae as b,ye as c,Oe as d,fe as e,Et as f,Be as g,st as h,Qe as i,je as j,rt as k,me as l,qt as m,he as n,De as o,$e as p,ot as q,Bt as r,St as s,Jt as t,be as u,ft as v,Ae as w,Je as x,Ke as y,Qt as z};
