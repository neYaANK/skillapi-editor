var ae=Object.defineProperty;var ce=(i,e,t)=>e in i?ae(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var l=(i,e,t)=>(ce(i,typeof e!="symbol"?e+"":e,t),t);import{w as f,j as R,k as he}from"./singletons.a48a70c9.js";import{U as a}from"./index.d2395b4a.js";const _={INT:/^-?[0-9]+$/,FLOAT:/^-?[0-9]+\.[0-9]+$/,SPACE:/^( +)/},D=i=>{i=i.replace(/\r\n/g,`
`).replace(/\n *\n/g,`
`).replace(/ +\n/g,`
`);const e=new m,t=0,s=i.split(`
`);return e.parse(s,t,0),e},N=i=>{const e=i.match(_.SPACE);return e?e[1].length:0};class me{constructor(e){l(this,"data");l(this,"set",e=>this.data=e);l(this,"get",()=>this.data);this.data=e}}class m{constructor(e){l(this,"key");l(this,"data",{});l(this,"put",(e,t)=>{this.data[e]=t});l(this,"has",e=>this.data[e]!==void 0);l(this,"get",(e,t,s)=>((this.data[e]=="[]"||this.data[e]==" []")&&(this.data[e]=JSON.parse(this.data[e].trim())),this.has(e)?s?s(this.data[e]):this.data[e]:t));l(this,"getKeys",()=>Object.keys(this.data));l(this,"remove",e=>{delete this.data[e]});l(this,"parse",(e,t,s,n)=>{for(n&&(this.key=n);t<e.length&&N(e[t])>=s;){for(;t<e.length&&(N(e[t])!=s||e[t].replace(/ /g,"").charAt(0)=="#"||e[t].indexOf(":")==-1);)t++;if(t==e.length)return t;let o=e[t].substring(s,e[t].indexOf(":"));if(o==="loaded"){t++;continue}if(o.match(/^["'].*["']$/)&&(o=o.substring(1,o.length-1)),!this.key&&!n&&(this.key=o),e[t].indexOf(": {}")==e[t].length-4&&e[t].length>=4)this.data[o]={};else if(t<e.length-1&&e[t+1].charAt(s)=="-"&&e[t+1].charAt(s+1)==" "&&N(e[t+1])==s){const r=[];for(;++t<e.length&&e[t].charAt(s)=="-";){let c=e[t].substring(s+2);(c.charAt(0)=="'"||c.charAt(0)=='"')&&(c=c.substring(1,c.length-1).replace(/\\(['"])/,p=>p.replace("\\",""))),r.push(c)}this.data[o]=r,t--}else if(t<e.length-1&&N(e[t+1])>s){t++;const r=N(e[t]),c=new m;t=c.parse(e,t,r,o)-1,this.data[o]=c}else{let r=e[t].substring(e[t].indexOf(":")+2);r.charAt(0)=="'"||r.charAt(0)=='"'?r=r.substring(1,r.length-1):isNaN(r)||(_.INT.test(r)?r=parseInt(r):r=parseFloat(r)),typeof r=="string"&&(r=="false"?r=!1:r=="true"?r=!0:r=r.replace(/\\(['"])/,c=>c.replace("\\",""))),this.data[o]=r}do t++;while(t<e.length&&e[t].replace(/ /g,"").charAt(0)=="#")}return Object.keys(this.data).length==1&&this.key&&this.data[this.key]instanceof m&&(this.data=this.data[this.key].data),t});l(this,"toString",()=>this.toYaml(this.key||this.data.name?"'"+(this.key||this.data.name)+"'":void 0,this.data));l(this,"toYaml",(e,t,s=new me("a"),n="")=>{if(t instanceof m)return t.toYaml("'"+(e??t.key)+"'",t.data,s,n);let o="";e&&(o+=n+e+`:
`,n+="  ");for(const r of Object.keys(t)){const c=t[r];let p="";if(c!=null){if(c instanceof Object)if(Object.keys(c).includes("toYaml"))if(c instanceof m){o+=c.toYaml("'"+r+"'",c.data,s,n);continue}else p=c.toYaml(n);else c instanceof Array&&(p=this.convertArray(r,s,n,c));else{const h=JSON.stringify(c);p=n+r+": "+h+`
`}p&&(o+=p.replaceAll(/(\\)?'/g,"\\'").replaceAll(/((\\)?")/g,h=>h.length==1?"'":h).replaceAll(/\\"/g,'"'))}}return o});l(this,"nextChar",e=>/z+/.test(e)?e.replaceAll(/z/g,"a")+"a":e.substring(0,e.length-1)+String.fromCharCode(e.charCodeAt(e.length-1)+1));this.key=e}convertArray(e,t,s,n){if(e!="attributes"){let o=s+e+":";if(["string","number"].includes(typeof n[0]))n.length>0?(o+=`
`,n.forEach(r=>o+=s+"- "+JSON.stringify(r)+`
`)):o+=` []
`;else if(e==="components"||e==="children")if(n.length==0)o+=` {}
`;else return o+=`
`,n.forEach(r=>{const c=t.get();t.set(this.nextChar(t.get())),o+=this.toYaml(r.name+"-"+c,r.toYamlObj(),t,s+"  ")}),o.replaceAll(/'/g,'"');else o+=` []
`;return o}else return this.toYaml(e,n,t,s)}}class u{constructor(e,t,s){l(this,"name");l(this,"base");l(this,"scale");l(this,"toYaml",(e="")=>e+this.name.toLowerCase()+"-base: "+this.base+`
`+e+this.name.toLowerCase()+"-scale: "+this.scale+`
`);this.name=e,this.base=t,this.scale=s}}class d{constructor(e){l(this,"key",{});l(this,"isFolder",!0);l(this,"open",!1);l(this,"name","Folder");l(this,"data",[]);l(this,"parent");l(this,"updateParent",e=>{this.parent=e});l(this,"add",e=>{this.data.includes(e)||(e instanceof d&&(E(e,this.data),qe(e),e.parent=this),this.data.push(e),this.sort())});l(this,"remove",e=>{this.data=this.data.filter(t=>t!=e),this.sort()});l(this,"sort",()=>{this.data=this.data.sort((e,t)=>{let s=0;return e instanceof d&&(t instanceof d||(s=-100)),e.name.localeCompare(t.name)+s}),Y()});l(this,"createFolder",()=>{const e=new d;E(e,this.data),this.data.push(e),this.sort(),e.updateParent(this)});l(this,"deleteFolder",e=>{this.data=this.data.filter(t=>t!=e)});l(this,"contains",e=>{if(this.data.includes(e))return!0;for(const t of this.data.filter(s=>s instanceof d))if(t.contains(e))return!0;return!1});l(this,"getContainingFolder",e=>{if(this.data.includes(e))return this;for(const t of this.data.filter(s=>s instanceof d)){if(t.data.includes(e))return t;{const s=t.getContainingFolder(e);if(!s)continue;return s}}});e&&(this.data=e,e.forEach(t=>{t instanceof d&&t.isFolder&&t.updateParent(this)}))}}const W=i=>i.replace("_"," ").toLowerCase().replace(/^(.)|\s(.)/g,e=>e.toUpperCase()),ee=i=>(i=i.replace("_"," "),i.substring(0,1).toUpperCase()+i.substring(1).toLowerCase()),k=i=>i.sort((e,t)=>e.name.localeCompare(t.name)),fe=(i,e)=>{let t=e;localStorage.getItem(i)===null&&localStorage.setItem(i,JSON.stringify(e)),t=JSON.parse(localStorage.getItem(i));const{subscribe:s,set:n,update:o}=f(t);return{subscribe:s,set:r=>(localStorage.setItem(i,JSON.stringify(r)),n(r)),update:o}};class te{}l(te,"new",()=>{throw new Error("'new' method not implemented")});class ue extends te{constructor(t,s){super();l(this,"type");l(this,"name");l(this,"description");l(this,"components",f([]));l(this,"data",[]);l(this,"isParent",!0);l(this,"id",{});l(this,"setComponents",t=>{this.components.set([...t])});l(this,"contains",t=>{const s=a(this.components);if(s.includes(t))return!0;for(const n of s)if(n.contains(t))return!0;return!1});l(this,"addComponent",(t,s=-1)=>{const n=a(this.components);s==-1?n.push(t):n.splice(s,0,t),this.setComponents(n)});l(this,"removeComponent",t=>{const s=a(this.components);if(s.includes(t)){s.splice(s.indexOf(t),1),this.setComponents(s);return}for(const n of s)n.contains(t)&&n.removeComponent(t)});this.type=t,this.name=s.name,this.description=s.description??"",this.setComponents(s.components||[]),this.data=s.data||[]}toYamlObj(){const t=new m(this.name);return t.put("type",this.type),t}}const w=class{};let g=w;g.triggers=f({});g.targets=f({});g.conditions=f({});g.mechanics=f({});g.initialized=f(!1);g.getTriggerByName=i=>{var e;return(e=Object.values(a(w.triggers)).find(t=>t.name.toLowerCase()===i.toLowerCase()))==null?void 0:e.component};g.getTargetByName=i=>{var e;return(e=Object.values(a(w.targets)).find(t=>t.name.toLowerCase()===i.toLowerCase()))==null?void 0:e.component};g.getConditionByName=i=>{var e;return(e=Object.values(a(w.conditions)).find(t=>t.name.toLowerCase()===i.toLowerCase()))==null?void 0:e.component};g.getMechanicByName=i=>{var e;return(e=Object.values(a(w.mechanics)).find(t=>t.name.toLowerCase()===i.toLowerCase()))==null?void 0:e.component};g.deserializeComponents=i=>{if(!i||!(i instanceof m))return[];const e=[],t=i.getKeys();for(const s of t){let n;const o=i.get(s),r=o.get("type");if(r==="trigger"){const c=w.getTriggerByName(s.split("-")[0]);c&&(n=c.new())}else if(r==="target"){const c=w.getTargetByName(s.split("-")[0]);c&&(n=c.new())}else if(r==="condition"){const c=w.getConditionByName(s.split("-")[0]);c&&(n=c.new())}else if(r==="mechanic"){const c=w.getMechanicByName(s.split("-")[0]);c&&(n=c.new())}n&&(n.deserialize(o),e.push(n))}return e};const B=class extends ue{constructor(t){super("trigger",t);l(this,"mana",!1);l(this,"cooldown",!1);l(this,"clone",()=>new B({name:this.name,components:[...a(this.components)],mana:this.mana,cooldown:this.cooldown,data:[...this.data]}));this.mana=t.mana||!1,this.cooldown=t.cooldown||!1}toYamlObj(){const t=super.toYamlObj(),s=this.getData();s.getKeys().length>0&&t.put("data",s);const n=a(this.components);return n.length>0&&t.put("children",n),t}getData(){const t=new m("data");return this.name!="Cast"&&this.name!="Initialize"&&this.name!="Cleanup"&&(t.put("mana",this.mana),t.put("cooldown",this.cooldown)),this.data.filter(s=>s.meetsRequirements(this)).forEach(s=>{const n=s.getData();Object.keys(n).forEach(o=>t.put(o,n[o]))}),t}getRawData(){const t=new m("data");return this.name!="Cast"&&this.name!="Initialize"&&this.name!="Cleanup"&&(t.put("mana",this.mana),t.put("cooldown",this.cooldown)),this.data.forEach(s=>{const n=s.getData();Object.keys(n).forEach(o=>t.put(o,n[o]))}),t}deserialize(t){const s=t.get("data");s&&(this.mana=s.get("mana",!1),this.cooldown=s.get("cooldown",!1),this.data.forEach(n=>n.deserialize(s))),this.setComponents(t.get("children",[],n=>g.deserializeComponents(n)))}};let I=B;l(I,"new",()=>new B({name:"null"}));class y{constructor(e){this.isSkill=!0,this.key={},this.type="Dynamic",this.maxLevel=5,this.skillReqLevel=0,this.permission=!1,this.levelReq=new u("level",1,0),this.cost=new u("cost",1,0),this.cooldown=new u("cooldown",0,0),this.cooldownMessage=!0,this.mana=new u("mana",0,0),this.minSpent=new u("points-spent-req",0,0),this.castMessage="&6{player} &2has cast &6{skill}",this.combo="",this.indicator="2D",this.icon={material:"Pumpkin",customModelData:0,lore:["&d{name} &7({level}/{max})","&2Type: &6{type}","","{req:level}Level: {attr:level}","{req:cost}Cost: {attr:cost}","","&2Mana: {attr:mana}","&2Cooldown: {attr:cooldown}"]},this.incompatible=[],this.triggers=[],this.skillReqStr="",this.incompStr=[],this.removeComponent=t=>{if(t instanceof I&&this.triggers.includes(t)){this.triggers.splice(this.triggers.indexOf(t),1);return}for(const s of this.triggers)s.contains(t)&&s.removeComponent(t);this.triggers=[...this.triggers]},this.serializeYaml=()=>{var n;const t=new m(this.name),s=new m;return s.put("name",this.name),s.put("type",this.type),s.put("max-level",this.maxLevel),s.put("skill-req",(n=this.skillReq)==null?void 0:n.name),s.put("skill-req-lvl",this.skillReqLevel),s.put("needs-permission",this.permission),s.put("cooldown-message",this.cooldownMessage),s.put("msg",this.castMessage),s.put("combo",this.combo),s.put("indicator",this.indicator),s.put("icon",this.icon.material),s.put("icon-data",this.icon.customModelData),s.put("icon-lore",this.icon.lore),s.put("attributes",[this.levelReq,this.cost,this.cooldown,this.mana,this.minSpent]),s.put("incompatible",this.incompatible.map(o=>o.name)),s.put("components",this.triggers),t.data=s.data,t},this.load=t=>{this.name=t.get("name",this.name),this.type=t.get("type",this.type),this.maxLevel=t.get("max-level",this.maxLevel),this.skillReqStr=t.get("skill-req",this.skillReqStr),this.skillReqLevel=t.get("skill-req-lvl",this.skillReqLevel),this.permission=t.get("needs-permission",this.permission),this.cooldownMessage=t.get("cooldown-message",this.cooldownMessage),this.castMessage=t.get("msg",this.castMessage),this.combo=t.get("combo",this.combo),this.indicator=t.get("indicator",this.indicator);const s=t.get("attributes");this.levelReq=new u("level",s.get("level-base"),s.get("level-scale")),this.cost=new u("cost",s.get("cost-base"),s.get("cost-scale")),this.cooldown=new u("cooldown",s.get("cooldown-base"),s.get("cooldown-scale")),this.mana=new u("mana",s.get("mana-base"),s.get("mana-scale")),this.minSpent=new u("points-spent-req",s.get("points-spent-req-base"),s.get("points-spent-req-scale")),this.icon.material=t.get("icon",this.icon.material,ee),this.icon.customModelData=t.get("icon-data",this.icon.customModelData),this.icon.lore=t.get("icon-lore",this.icon.lore),this.incompStr=t.get("incompatible",this.incompStr);let n;n=g.initialized.subscribe(o=>{o&&(this.triggers=t.get("components",this.triggers,r=>g.deserializeComponents(r)),n&&n())})},this.postLoad=()=>{this.skillReq=L(this.skillReqStr),this.incompatible=this.incompStr.map(t=>L(t)).filter(t=>!!t)},this.name=e?e.name:"Skill",e!=null&&e.type&&(this.type=e.type),e!=null&&e.maxLevel&&(this.maxLevel=e.maxLevel),e!=null&&e.skillReq&&(this.skillReq=e.skillReq),e!=null&&e.skillReqLevel&&(this.skillReqLevel=e.skillReqLevel),e!=null&&e.permission&&(this.permission=e.permission),e!=null&&e.levelReq&&(this.levelReq=e.levelReq),e!=null&&e.cost&&(this.cost=e.cost),e!=null&&e.cooldown&&(this.cooldown=e.cooldown),e!=null&&e.cooldownMessage&&(this.cooldownMessage=e.cooldownMessage),e!=null&&e.mana&&(this.mana=e.mana),e!=null&&e.minSpent&&(this.minSpent=e.minSpent),e!=null&&e.castMessage&&(this.castMessage=e.castMessage),e!=null&&e.combo&&(this.combo=e.combo),e!=null&&e.indicator&&(this.indicator=e.indicator),e!=null&&e.icon&&(this.icon=e.icon),e!=null&&e.incompatible&&(this.incompatible=e.incompatible),e!=null&&e.triggers&&(this.triggers=e.triggers)}}R.disable_scroll_handling;const x=R.goto;R.invalidate;R.invalidateAll;R.preload_data;R.preload_code;R.before_navigate;R.after_navigate;const pe=i=>{const e=[],t=D(i);let s;if(t.key&&!t.data[t.key]){const n=t.key;return n==="loaded"||(s=new y({name:n}),s.load(t),e.push(s)),e}for(const n in t.data)n!="loaded"&&t.data[n]instanceof m&&(s=new y({name:n}),s.load(t.data[n]),e.push(s));return e},se=(i,e,t,s,n)=>{let o=e;{const h=localStorage.getItem(i);h&&(o=t(h),n&&n(o))}const{subscribe:r,set:c,update:p}=f(o);return{subscribe:r,set:h=>(s&&(h=s(h)),c(h)),update:p}},b=se("skillData",[],i=>k(pe(i)),i=>(ie(i),k(i))),L=i=>{for(const e of a(b))if(e.name==i)return e},S=se("skillFolders",[],i=>JSON.parse(i,(t,s)=>{if(/\d+/.test(t)){if(typeof s=="string")return L(s);const n=new d(s.data);return n.name=s.name,n}return s}),i=>{const e=JSON.stringify(i,(t,s)=>s instanceof y||s instanceof y?s.name:t==="parent"?void 0:s);return localStorage.setItem("skillFolders",e),k(i)}),U=i=>!!L(i),X=i=>{const e=a(b),t=new y({name:i||"Skill "+(e.length+1)});return e.push(t),b.set(e),t},Me=i=>{const e=a(S);e.includes(i)||(E(i,e),e.push(i),e.sort((t,s)=>t.name.localeCompare(s.name)),S.set(e))},ge=i=>{const e=a(S).filter(t=>t!=i);S.set(e)},de=i=>{const e=a(b).filter(s=>s!=i),t=a(q);b.set(e),t instanceof y&&(e.length===0?x("/"):e.find(s=>s===a(q))||x(`/skill/${e[0].name}`))},M=()=>b.set(k(a(b))),ke=()=>{S.set(k(a(S))),M()},H=i=>{const e=D(i);let t;if(e.key&&!e.data[e.key]){const s=e.key;t=U(s)?L(s):X(s),t.load(e),M();return}for(const s in e.data)s!="loaded"&&e.data[s]instanceof m&&!U(s)&&(t=U(s)?L(s):X(s),t.load(e.data[s]));M()},we=i=>{var t;const e=(t=i.target)==null?void 0:t.result;e&&H(e)},$=f(!1);let K;const ie=i=>{a($)&&K&&clearTimeout(K),$.set(!0),K=setTimeout(()=>{const e=i||a(b),t=new m;t.put("loaded",!1),e.forEach(s=>t.put(s.name,s.serializeYaml())),localStorage.setItem("skillData",t.toString()),$.set(!1)},2e3)};a(b).forEach(i=>i.postLoad());class O{constructor(e){this.isClass=!0,this.key={},this.prefix="",this.group="class",this.manaName="&2Mana",this.maxLevel=40,this.parentStr="",this.permission=!1,this.expSources=273,this.manaRegen=1,this.health=new u("health",20,1),this.mana=new u("mana",20,1),this.attributes=[],this.skillTree="Requirement",this.skills=[],this.icon={material:"Pumpkin",customModelData:0},this.unusableItems=[],this.actionBar="",this.updateAttributes=t=>{const s=[];this.attributes=this.attributes.filter(n=>t!=null&&t.includes(n.name)?(s.push(n.name),!0):!1),t=t.filter(n=>!s.includes(n));for(const n of t)this.attributes.push(new u(n,0,0))},this.serializeYaml=()=>{var n;const t=new m(this.name),s=new m;return s.put("name",this.name),s.put("action-bar",this.actionBar),s.put("prefix",this.prefix),s.put("group",this.group),s.put("mana",this.manaName),s.put("max-level",this.maxLevel),s.put("parent",((n=this.parent)==null?void 0:n.name)||""),s.put("needs-permission",this.permission),s.put("attributes",[this.health,this.mana,...this.attributes]),s.put("mana-regen",this.manaRegen),s.put("tree",this.skillTree.toUpperCase().replace(/ /g,"_")),s.put("blacklist",this.unusableItems),s.put("skills",this.skills.map(o=>o.name)),s.put("icon",this.icon.material),s.put("icon-data",this.icon.customModelData),s.put("icon-lore",this.icon.lore),s.put("exp-source",this.expSources),t.data=s.data,t},this.updateParent=t=>{this.parentStr&&(this.parent=t.find(s=>s.name===this.parentStr))},this.load=t=>{this.name=t.get("name",this.name),this.actionBar=t.get("action-bar",this.actionBar),this.prefix=t.get("prefix",this.prefix),this.group=t.get("group",this.group),this.maxLevel=t.get("max-level",this.maxLevel),this.parentStr=t.get("parent",this.parentStr),this.permission=t.get("needs-permission",this.permission),this.attributes=t.get("attributes",this.attributes,s=>{const n=[],o=s.get("health-base",20),r=s.get("health-scale",1),c=s.get("mana-base",20),p=s.get("mana-scale",1);this.health=new u("health",o,r),this.mana=new u("mana",c,p),s.remove("health-base"),s.remove("health-scale"),s.remove("mana-base"),s.remove("mana-scale");const h={};return Object.keys(s.data).forEach(J=>{const P=J.split("-"),A=W(P[0]);h[A]||(h[A]=new u(A,0,0));const V=h[A];P[1]=="base"&&(V.base=Number.parseFloat(s.data[J])),P[1]=="scale"&&(V.scale=Number.parseFloat(s.data[J]))}),n.push(...Object.values(h)),n}),this.manaRegen=t.get("mana-regen",this.manaRegen),this.skillTree=t.get("tree",this.skillTree,W),this.unusableItems=t.get("blacklist",this.unusableItems),this.skills=t.get("skills",this.skills,s=>s.map(n=>L(n)).filter(n=>!!n)),this.icon.material=t.get("icon",this.icon.material,ee),this.icon.customModelData=t.get("icon-data",this.icon.customModelData),this.icon.lore=t.get("icon-lore",this.icon.lore),this.expSources=t.get("exp-source",this.expSources)},this.name=e?e.name:"Class",this.prefix=e!=null&&e.prefix?e.prefix:"&6"+this.name,e!=null&&e.group&&(this.group=e.group),e!=null&&e.manaName&&(this.manaName=e.manaName),e!=null&&e.maxLevel&&(this.maxLevel=e.maxLevel),e!=null&&e.parent&&(this.parent=e.parent),e!=null&&e.permission&&(this.permission=e.permission),e!=null&&e.expSources&&(this.expSources=e.expSources),e!=null&&e.health&&(this.health=e.health),e!=null&&e.mana&&(this.mana=e.mana),e!=null&&e.manaRegen&&(this.manaRegen=e.manaRegen),e!=null&&e.attributes&&(this.attributes=e.attributes),e!=null&&e.skillTree&&(this.skillTree=e.skillTree),e!=null&&e.skills&&(this.skills=e.skills),e!=null&&e.icon&&(this.icon=e.icon),e!=null&&e.unusableItems&&(this.unusableItems=e.unusableItems),e!=null&&e.actionBar&&(this.actionBar=e.actionBar)}}const be=i=>{const e=[],t=D(i);let s;if(t.key&&!t.data[t.key]){const n=t.key;return n==="loaded"||(s=new O({name:n}),s.load(t),e.push(s)),e}for(const n in t.data)n!="loaded"&&t.data[n]instanceof m&&(s=new O({name:n}),s.load(t.data[n]),e.push(s));return e},ne=(i,e,t,s,n)=>{let o=e;{const h=localStorage.getItem(i);h&&(o=t(h),n&&n(o))}const{subscribe:r,set:c,update:p}=f(o);return{subscribe:r,set:h=>(s&&(h=s(h)),c(h)),update:p}},C=ne("classData",[],i=>k(be(i)),i=>(oe(i),i.forEach(e=>e.updateParent(i)),k(i)),i=>i.forEach(e=>e.updateParent(i))),T=i=>{for(const e of a(C))if(e.name==i)return e},v=ne("classFolders",[],i=>JSON.parse(i,(t,s)=>{if(s){if(/\d+/.test(t)){if(typeof s=="string")return T(s);const n=new d(s.data);return n.name=s.name,n}return s}}),i=>{const e=JSON.stringify(i,(t,s)=>s instanceof O||s instanceof y?s.name:t==="parent"?void 0:s);return localStorage.setItem("classFolders",e),k(i)}),Z=i=>a(C).forEach(e=>e.updateAttributes(i)),G=i=>!!T(i),j=i=>{const e=a(C),t=new O({name:i||"Class "+(e.length+1)});return e.push(t),C.set(e),t},Te=i=>{const e=a(v);e.includes(i)||(E(i,e),e.push(i),e.sort((t,s)=>t.name.localeCompare(s.name)),v.set(e))},Se=i=>{const e=a(v).filter(t=>t!=i);v.set(e)},Ce=i=>{const e=a(C).filter(s=>s!=i),t=a(q);C.set(e),t instanceof O&&(e.length===0?x("/"):e.find(s=>s===a(q))||x(`/class/${e[0].name}/edit`))},z=()=>C.set(k(a(C))),ve=()=>{v.set(k(a(v))),z()},Q=i=>{const e=D(i);let t;if(e.key&&!e.data[e.key]){const s=e.key;t=G(s)?T(s):j(s),t.load(e),z();return}for(const s in e.data)s!="loaded"&&e.data[s]instanceof m&&!G(s)&&(t=G(s)?T(s):j(s),t.load(e.data[s]));z()},ye=i=>{var t;const e=(t=i.target)==null?void 0:t.result;e&&Q(e)},oe=i=>{const e=i||a(C),t=new m;t.put("loaded",!1),e.forEach(s=>t.put(s.name,s.serializeYaml())),localStorage.setItem("classData",t.toString())},Oe=(()=>{let i=["vitality","spirit","intelligence","dexterity","strength"];{const n=localStorage.getItem("attribs");n&&(i=n.split(","),Z(i))}const{subscribe:e,set:t,update:s}=f(i);return{subscribe:e,set:n=>(localStorage.setItem("attribs",n.join(",")),Z(n),t(n)),update:s}})(),re=i=>{const e=D(i),t=Object.keys(e.data);Oe.set(t)},q=f(void 0),Re=he(q,i=>i instanceof O?"class":"skill"),ze=f(),Ee=f(),F=fe("sidebarOpen",!0),Be=f(!0),le=f(!0),Le=f(!1),Ye=()=>{a(F)&&(a(Re)=="class"?z():M(),Y())},Je=()=>F.set(!a(F)),Pe=()=>F.set(!1),Ue=i=>Le.set(i),E=(i,e)=>{const t=i.name;let s=1;for(;e.filter(n=>n instanceof d&&n.name==i.name).length>=1;)i.name=t+" ("+s+++")"},$e=i=>{i.parent?(i.parent.deleteFolder(i),Y()):a(le)?Se(i):ge(i)},Ke=i=>{var e;i&&((e=Ne(i))==null||e.remove(i),i instanceof O?Ce(i):i instanceof y&&de(i),Y())},Y=()=>{a(F)&&(a(le)?ve():ke())},Ge=()=>{oe(),ie()},qe=i=>{const e=a(v),t=a(S);e.includes(i)&&v.set(e.filter(s=>s!=i)),t.includes(i)&&S.set(t.filter(s=>s!=i))},Ne=i=>{if(i instanceof d)return i.parent;const e=i instanceof O?a(v):a(S);for(const t of e){const s=t.getContainingFolder(i);if(s)return s}},Fe=i=>{var t;const e=(t=i.target)==null?void 0:t.result;e&&(e.indexOf("global:")>=0?re(e):e.indexOf("components:")>=0||e.indexOf("group:")==-1&&e.indexOf("combo:")==-1&&e.indexOf("skills:")==-1?H(e):Q(e),document.activeElement.blur())},He=i=>{i.indexOf("global:")>=0?re(i):i.indexOf("components:")>=0||i.indexOf("group:")==-1&&i.indexOf("combo:")==-1&&i.indexOf("skills:")==-1?H(i.replace(`loaded: false
`,"")):Q(i.replace(`loaded: false
`,""))},Qe=i=>{const e=new FileReader;i.name.indexOf("skills")==0?e.onload=we:i.name.indexOf("classes")==0?e.onload=ye:e.onload=Fe,e.readAsText(i)},Ve=i=>{const e=i||a(q);e&&De(e.name+".yml",e.serializeYaml().toString())},De=(i,e)=>{const t=new Blob([e],{type:"text/plain;charset=utf-8"}),s=document.createElement("a");s.href=URL.createObjectURL(t),s.download=i,s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)};export{Re as A,Je as B,u as C,T as D,L as E,I as F,$ as G,Le as H,Ee as I,ue as J,Oe as K,Ye as L,Ge as M,W as N,fe as O,y as P,g as R,m as Y,Qe as a,q as b,Be as c,ze as d,d as e,Te as f,Ne as g,Me as h,le as i,Ve as j,Ke as k,He as l,$e as m,x as n,v as o,C as p,S as q,qe as r,Ue as s,b as t,Y as u,F as v,j as w,X as x,O as y,Pe as z};
