var st=Object.defineProperty;var ct=(t,e,n)=>e in t?st(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var N=(t,e,n)=>(ct(t,typeof e!="symbol"?e+"":e,n),n);import*as O from"https://cdn.jsdelivr.net/npm/d3@7/+esm";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function E(){}function Q(t){return t()}function q(){return Object.create(null)}function I(t){t.forEach(Q)}function X(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function dt(t){return Object.keys(t).length===0}function u(t,e){t.appendChild(e)}function Z(t,e,n){t.insertBefore(e,n||null)}function F(t){t.parentNode&&t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function ft(t){return document.createTextNode(t)}function $(){return ft(" ")}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ut(t){return Array.from(t.childNodes)}let j;function P(t){j=t}function ht(){if(!j)throw new Error("Function called outside component initialization");return j}function mt(t){ht().$$.on_mount.push(t)}const A=[],G=[];let C=[];const W=[],gt=Promise.resolve();let K=!1;function pt(){K||(K=!0,gt.then(tt))}function V(t){C.push(t)}const H=new Set;let T=0;function tt(){if(T!==0)return;const t=j;do{try{for(;T<A.length;){const e=A[T];T++,P(e),xt(e.$$)}}catch(e){throw A.length=0,T=0,e}for(P(null),A.length=0,T=0;G.length;)G.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];H.has(n)||(H.add(n),n())}C.length=0}while(A.length);for(;W.length;)W.pop()();K=!1,H.clear(),P(t)}function xt(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}function yt(t){const e=[],n=[];C.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),C=e}const B=new Set;let wt;function et(t,e){t&&t.i&&(B.delete(t),t.i(e))}function _t(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),wt.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function bt(t){t&&t.c()}function nt(t,e,n){const{fragment:i,after_update:a}=t.$$;i&&i.m(e,n),V(()=>{const c=t.$$.on_mount.map(Q).filter(X);t.$$.on_destroy?t.$$.on_destroy.push(...c):I(c),t.$$.on_mount=[]}),a.forEach(V)}function rt(t,e){const n=t.$$;n.fragment!==null&&(yt(n.after_update),I(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){t.$$.dirty[0]===-1&&(A.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(t,e,n,i,a,c,h=null,_=[-1]){const l=j;P(t);const r=t.$$={fragment:null,ctx:[],props:c,update:E,not_equal:a,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:q(),dirty:_,skip_bound:!1,root:e.target||l.$$.root};h&&h(r.root);let s=!1;if(r.ctx=n?n(t,e.props||{},(d,g,...m)=>{const p=m.length?m[0]:g;return r.ctx&&a(r.ctx[d],r.ctx[d]=p)&&(!r.skip_bound&&r.bound[d]&&r.bound[d](p),s&&$t(t,d)),g}):[],r.update(),s=!0,I(r.before_update),r.fragment=i?i(r.ctx):!1,e.target){if(e.hydrate){const d=ut(e.target);r.fragment&&r.fragment.l(d),d.forEach(F)}else r.fragment&&r.fragment.c();e.intro&&et(t.$$.fragment),nt(t,e.target,e.anchor),tt()}P(l)}class ot{constructor(){N(this,"$$");N(this,"$$set")}$destroy(){rt(this,1),this.$destroy=E}$on(e,n){if(!X(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const vt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(vt);const at="",lt=[{name:"World Lingo",children:[{name:"German"},{name:"English"}]},{name:"Computer Lingo",children:[{name:"Rust"},{name:"Typescript"},{name:"Javascript"},{name:"[ASP] clingo"},{name:"Python"},{name:"C#"},{name:"C"},{name:"Java"},{name:"MIPS"},{name:"WASM"},{name:"C++"},{name:"Lua"}]},{name:"IDEs",children:[{name:"VS Code (my beloved ❤)"},{name:"Rider (C#)"},{name:"IntelliJ (Java)"},{name:"Android Studio"},{name:"Jupyter Notebook"},{name:"vim (rarely)"},{name:"Arduino"}]},{name:"Creative Tools",children:[{name:"Design & Drawing",children:[{name:"HTML5"},{name:"Figma"},{name:"Krita"},{name:"paint.NET"},{name:"Excalidraw"},{name:"Aseprite"}]},{name:"Textprocessing",children:[{name:"Markdown"},{name:"LaTeX"},{name:"Typst.app"}]},{name:"Video",children:[{name:"Kdenlive"}]},{name:"Audio",children:[{name:"FL-Studio"},{name:"Audacity"}]},{name:"3D",children:[{name:"Blender"},{name:"MagicaVoxel"}]}]},{name:"Game Dev",children:[]},{name:"Coding Stuffs",children:[]}],kt={name:at,children:lt},Et=Object.freeze(Object.defineProperty({__proto__:null,children:lt,default:kt,name:at},Symbol.toStringTag,{value:"Module"}));function Lt(t){let e;return{c(){e=y("div"),e.innerHTML="",f(e,"id","knowledge-chart"),f(e,"class","w-full h-auto flex items-center justify-center")},m(n,i){Z(n,e,i)},p:E,i:E,o:E,d(n){n&&F(e)}}}const z=900,R=10,Mt=10,St=10,D=5,J=20;function Tt(t){const e=O.hierarchy(Et),n=(z-Mt-D)/(1+e.height),i=O.tree().nodeSize([J,n]),a=O.linkHorizontal().x(r=>r.y).y(r=>r.x),c=O.create("svg").attr("width",z).attr("height",J).attr("viewBox",[-D,-R,z,J]).attr("style","max-width: 100%; height: auto; font: 10px sans-serif; user-select: none;"),h=c.append("g").attr("fill","none").attr("stroke","#888").attr("stroke-opacity",.4).attr("stroke-width",2),_=c.append("g").attr("cursor","pointer").attr("pointer-events","all");function l(r,s){const d=r!=null&&r.altKey?2500:500,g=e.descendants().reverse(),m=e.links();i(e);let p=e,L=e;e.eachBefore(o=>{o.x<p.x&&(p=o),o.x>L.x&&(L=o)});const w=L.x-p.x+R+St,v=c.transition().duration(d).attr("height",w).attr("viewBox",[-D,p.x-R,z,w]).tween("resize",window.ResizeObserver?null:()=>()=>c.dispatch("toggle")),k=_.selectAll("g").data(g,o=>o.id),M=k.enter().append("g").attr("transform",o=>`translate(${s.y0},${s.x0})`).attr("fill-opacity",0).attr("stroke-opacity",0).on("click",(o,x)=>{x.children=x.children?null:x._children,l(o,x)});M.append("circle").attr("r",5).attr("fill",o=>o._children?"#555":"#999").attr("stroke-width",10),M.append("text").attr("dy","0.20em").attr("x",o=>o._children?-10:10).attr("text-anchor",o=>o._children?"end":"start").text(o=>o.data.name).attr("stroke-linejoin","round").attr("font-size","1.5em").attr("font-weight","bold").attr("fill","white").attr("paint-order","stroke"),k.merge(M).transition(v).attr("transform",o=>`translate(${o.y},${o.x})`).attr("fill-opacity",1).attr("stroke-opacity",1),k.exit().transition(v).remove().attr("transform",o=>`translate(${s.y},${s.x})`).attr("fill-opacity",0).attr("stroke-opacity",0);const b=h.selectAll("path").data(m,o=>o.target.id),S=b.enter().append("path").attr("d",o=>{const x={x:s.x0,y:s.y0};return a({source:x,target:x})});b.merge(S).transition(v).attr("d",a),b.exit().transition(v).remove().attr("d",o=>{const x={x:s.x,y:s.y};return a({source:x,target:x})}),e.eachBefore(o=>{o.x0=o.x,o.y0=o.y})}return e.x0=n/2,e.y0=0,e.descendants().forEach((r,s)=>{r.id=s,r._children=r.children,r.depth&&r.data.name.length!==7&&(r.children=null)}),l(null,e),mt(()=>{document.getElementById("knowledge-chart").append(c.node())}),[]}class At extends ot{constructor(e){super(),it(this,e,Tt,Lt,Y,{})}}const Ct="/assets/logo-DsbQiqC0.png";function Pt(t){let e,n,i,a,c,h,_,l,r,s,d,g,m,p,L,w,v,k,M,b,S;return w=new At({}),{c(){e=y("main"),n=y("section"),n.innerHTML=`<div class="mt-32 relative flex flex-col items-center justify-center h-fade-in"><div class="relative flex flex-col items-center flex-nowrap justify-center text-center font-black text-8xl w-fit animate-text drop-shadow-lg"><img class="object-center h-64 w-64 rounded-3xl" src="${Ct}" alt="me using puter"/> <p class="absolute right-[17.5rem] top-1 font-semibold text-2xl rotate-3"><b class="underline">POV</b>: me coding</p> <h1 class="p-8 hover:text-glitch text-glitch-duration-ultra_slow">Hia, I&#39;m <b class="text-9xl tracking-wider underline underline-offset-8">Hafi</b>!</h1> <p class="font-semibold text-2xl w-4/5">Just some average cat trying to fill the freetime 🕐<br/>with some delightful ✨ problem solving<br/>using Technology 🖥️</p></div></div> <canvas id="bg_glitch" class="absolute top-0 left-0 w-screen h-screen -z-10"></canvas>`,i=$(),a=y("div"),c=$(),h=y("section"),h.innerHTML='<div class="w-full h-full flex items-center justify-center"><h1 class="font-extrabold text-2xl">Introduction<h1></h1></h1></div>',_=$(),l=y("section"),l.innerHTML='<div class="w-full h-full flex items-center justify-center"><h1 class="font-extrabold text-2xl">My Path<h1></h1></h1></div>',r=$(),s=y("section"),s.innerHTML='<div class="w-full h-full flex items-center justify-center"><h1 class="font-extrabold text-2xl">Under construction<h1></h1></h1></div>',d=$(),g=y("section"),m=y("div"),p=y("h1"),p.textContent="🗃️ Tech Knowledgebase 🗃️",L=$(),bt(w.$$.fragment),v=$(),k=y("div"),M=$(),b=y("footer"),f(n,"id","hero"),f(n,"class","snap-start w-full h-[90vh] bg-transparent select-none"),f(a,"class","w-full h-16 bg-gradient-to-b from-main to-main2"),f(h,"id","introduction"),f(h,"class","bg-main2 snap-start w-full h-96"),f(l,"id","path"),f(l,"class","bg-neutral-900 snap-start w-full h-96"),f(s,"id","path2"),f(s,"class","bg-neutral-900 snap-start w-full h-96"),f(p,"class","font-extrabold pb-8 text-2xl"),f(m,"class","w-full h-full pb-8 flex flex-col items-center justify-center"),f(g,"id","knowledgebase"),f(g,"class","bg-neutral-900 snap-start w-full h-fit"),f(k,"class","w-full h-16 bg-gradient-to-b from-main2 bg-neutral-700"),f(b,"id","footer"),f(b,"class","bg-neutral-700 snap-start w-full h-60"),f(e,"class","w-full snap-y text-mainfont")},m(o,x){Z(o,e,x),u(e,n),u(e,i),u(e,a),u(e,c),u(e,h),u(e,_),u(e,l),u(e,r),u(e,s),u(e,d),u(e,g),u(g,m),u(m,p),u(m,L),nt(w,m,null),u(e,v),u(e,k),u(e,M),u(e,b),S=!0},p:E,i(o){S||(et(w.$$.fragment,o),S=!0)},o(o){_t(w.$$.fragment,o),S=!1},d(o){o&&F(e),rt(w)}}}class jt extends ot{constructor(e){super(),it(this,e,null,Pt,Y,{})}}new jt({target:document.getElementById("app")});window.addEventListener("load",Ot,!1);function Ot(){var t=document.getElementById("bg_glitch");let e=n=>{const i=window.devicePixelRatio;n.width=window.innerWidth-17*i,n.height=window.innerHeight*i,n.style.width=n.width/i+"px",n.style.height=n.height/i+"px",U(n)};e(t),window.addEventListener("resize",()=>e(t)),U(t)}function U(t){var e=t.getContext("2d");const n=[];function i(l,r,s){return{x:l,y:r,speed:s}}function a(l){e.fillStyle="white",e.fillRect(l.x,l.y,2,2)}function c(l){l.x-=l.speed,l.x<0&&(l.x=t.width)}function h(){e.clearRect(0,0,t.width,t.height),n.forEach(l=>{c(l),a(l)}),requestAnimationFrame(h)}function _(l,r,s,d,g){const m=(l-r)/(s-r);return d+m*(g-d)}for(let l=0;l<500;l++){const r=Math.random()*t.width,s=Math.random()*t.height,d=Math.random()*2+.2;s>t.height/2?Math.random()<_(s,t.height/2,t.height,.7,0)&&n.push(i(r,s,d)):n.push(i(r,s,d))}h()}
