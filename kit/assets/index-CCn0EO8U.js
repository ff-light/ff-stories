(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();function B(r,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(s=(o<3?n(s):o>3?n(e,t,s):n(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s}let Uo;const La="fast-kernel";try{if(document.currentScript)Uo=document.currentScript.getAttribute(La);else{const r=document.getElementsByTagName("script");Uo=r[r.length-1].getAttribute(La)}}catch{Uo="isolate"}let Jr;switch(Uo){case"share":Jr=Object.freeze({updateQueue:1,observable:2,contextEvent:3,elementRegistry:4});break;case"share-v2":Jr=Object.freeze({updateQueue:1.2,observable:2.2,contextEvent:3.2,elementRegistry:4.2});break;default:const r=`-${Math.random().toString(36).substring(2,8)}`;Jr=Object.freeze({updateQueue:`1.2${r}`,observable:`2.2${r}`,contextEvent:`3.2${r}`,elementRegistry:`4.2${r}`});break}var ve;(function(r){r[r.needsArrayObservation=1101]="needsArrayObservation",r[r.onlySetDOMPolicyOnce=1201]="onlySetDOMPolicyOnce",r[r.bindingInnerHTMLRequiresTrustedTypes=1202]="bindingInnerHTMLRequiresTrustedTypes",r[r.twoWayBindingRequiresObservables=1203]="twoWayBindingRequiresObservables",r[r.hostBindingWithoutHost=1204]="hostBindingWithoutHost",r[r.unsupportedBindingBehavior=1205]="unsupportedBindingBehavior",r[r.directCallToHTMLTagNotAllowed=1206]="directCallToHTMLTagNotAllowed",r[r.onlySetTemplatePolicyOnce=1207]="onlySetTemplatePolicyOnce",r[r.cannotSetTemplatePolicyAfterCompilation=1208]="cannotSetTemplatePolicyAfterCompilation",r[r.blockedByDOMPolicy=1209]="blockedByDOMPolicy",r[r.missingElementDefinition=1401]="missingElementDefinition",r[r.noRegistrationForContext=1501]="noRegistrationForContext",r[r.noFactoryForResolver=1502]="noFactoryForResolver",r[r.invalidResolverStrategy=1503]="invalidResolverStrategy",r[r.cannotAutoregisterDependency=1504]="cannotAutoregisterDependency",r[r.cannotResolveKey=1505]="cannotResolveKey",r[r.cannotConstructNativeFunction=1506]="cannotConstructNativeFunction",r[r.cannotJITRegisterNonConstructor=1507]="cannotJITRegisterNonConstructor",r[r.cannotJITRegisterIntrinsic=1508]="cannotJITRegisterIntrinsic",r[r.cannotJITRegisterInterface=1509]="cannotJITRegisterInterface",r[r.invalidResolver=1510]="invalidResolver",r[r.invalidKey=1511]="invalidKey",r[r.noDefaultResolver=1512]="noDefaultResolver",r[r.cyclicDependency=1513]="cyclicDependency",r[r.connectUpdateRequiresController=1514]="connectUpdateRequiresController"})(ve||(ve={}));const sr=r=>typeof r=="function",Sr=r=>typeof r=="string",au=()=>{};var Xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},za={},_a;function lu(){return _a||(_a=1,(function(){if(!(typeof globalThis<"u"))if(typeof Xs<"u")Xs.globalThis=Xs;else if(typeof self<"u")self.globalThis=self;else if(typeof window<"u")window.globalThis=window;else{const e=new Function("return this")();e.globalThis=e}})(),(function(){"requestIdleCallback"in globalThis||(globalThis.requestIdleCallback=function(t,i){const o=Date.now();return setTimeout(()=>{t({didTimeout:i?.timeout?Date.now()-o>=i.timeout:!1,timeRemaining:()=>0})},1)},globalThis.cancelIdleCallback=function(t){clearTimeout(t)})})()),za}lu();const yc={configurable:!1,enumerable:!1,writable:!1};globalThis.FAST===void 0&&Reflect.defineProperty(globalThis,"FAST",Object.assign({value:Object.create(null)},yc));const oe=globalThis.FAST;if(oe.getById===void 0){const r=Object.create(null);Reflect.defineProperty(oe,"getById",Object.assign({value(e,t){let i=r[e];return i===void 0&&(i=t?r[e]=t():null),i}},yc))}oe.error===void 0&&Object.assign(oe,{warn(){},error(r){return new Error(`Error ${r}`)},addMessages(){}});const gt=Object.freeze([]);function Un(){const r=new Map;return Object.freeze({register(e){return r.has(e.type)?!1:(r.set(e.type,e),!0)},getByType(e){return r.get(e)},getForInstance(e){if(e!=null)return r.get(e.constructor)}})}function vc(){const r=new WeakMap;return function(e){let t=r.get(e);if(t===void 0){let i=Reflect.getPrototypeOf(e);for(;t===void 0&&i!==null;)t=r.get(i),i=Reflect.getPrototypeOf(i);t=t===void 0?[]:t.slice(0),r.set(e,t)}return t}}function ai(r){r.prototype.toJSON=au}const qe=Object.freeze({none:0,attribute:1,booleanAttribute:2,property:3,content:4,tokenList:5,event:6}),Ga=r=>r,cu=globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("fast-html",{createHTML:Ga}):{createHTML:Ga};let jo=Object.freeze({createHTML(r){return cu.createHTML(r)},protect(r,e,t,i){return i}});const du=jo,ri=Object.freeze({get policy(){return jo},setPolicy(r){if(jo!==du)throw oe.error(ve.onlySetDOMPolicyOnce);jo=r},setAttribute(r,e,t){t==null?r.removeAttribute(e):r.setAttribute(e,t)},setBooleanAttribute(r,e,t){t?r.setAttribute(e,""):r.removeAttribute(e)}});class rs{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.subject=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){const t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const i=t.indexOf(e);i!==-1&&t.splice(i,1)}}notify(e){const t=this.spillover,i=this.subject;if(t===void 0){const o=this.sub1,s=this.sub2;o!==void 0&&o.handleChange(i,e),s!==void 0&&s.handleChange(i,e)}else for(let o=0,s=t.length;o<s;++o)t[o].handleChange(i,e)}}class xc{constructor(e){this.subscribers={},this.subjectSubscribers=null,this.subject=e}notify(e){var t,i;(t=this.subscribers[e])===null||t===void 0||t.notify(e),(i=this.subjectSubscribers)===null||i===void 0||i.notify(e)}subscribe(e,t){var i,o;let s;t?s=(i=this.subscribers[t])!==null&&i!==void 0?i:this.subscribers[t]=new rs(this.subject):s=(o=this.subjectSubscribers)!==null&&o!==void 0?o:this.subjectSubscribers=new rs(this.subject),s.subscribe(e)}unsubscribe(e,t){var i,o;t?(i=this.subscribers[t])===null||i===void 0||i.unsubscribe(e):(o=this.subjectSubscribers)===null||o===void 0||o.unsubscribe(e)}}const Kt=oe.getById(Jr.updateQueue,()=>{const r=[],e=[],t=globalThis.requestAnimationFrame;let i=!0;function o(){if(e.length)throw e.shift()}function s(c){try{c.call()}catch(l){if(i)e.push(l),setTimeout(o,0);else throw r.length=0,l}}function n(){let l=0;for(;l<r.length;)if(s(r[l]),l++,l>1024){for(let d=0,u=r.length-l;d<u;d++)r[d]=r[d+l];r.length-=l,l=0}r.length=0}function a(c){r.push(c),r.length<2&&(i?t(n):n())}return Object.freeze({enqueue:a,next:()=>new Promise(a),process:n,setMode:c=>i=c})}),Is=Object.freeze({unknown:void 0,coupled:1}),Q=oe.getById(Jr.observable,()=>{const r=Kt.enqueue,e=/(:|&&|\|\||if|\?\.)/,t=new WeakMap;let i,o=l=>{throw oe.error(ve.needsArrayObservation)};function s(l){var d;let u=(d=l.$fastController)!==null&&d!==void 0?d:t.get(l);return u===void 0&&(Array.isArray(l)?u=o(l):t.set(l,u=new xc(l))),u}const n=vc();class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return i!==void 0&&i.watch(d,this.name),d[this.field]}setValue(d,u){const p=this.field,h=d[p];if(h!==u){d[p]=u;const f=d[this.callback];sr(f)&&f.call(d,h,u),s(d).notify(this.name)}}}class c extends rs{constructor(d,u,p=!1){super(d,u),this.expression=d,this.isVolatileBinding=p,this.needsRefresh=!0,this.needsQueue=!0,this.isAsync=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}setMode(d){this.isAsync=this.needsQueue=d}bind(d){this.controller=d;const u=this.observe(d.source,d.context);return!d.isBound&&this.requiresUnbind(d)&&d.onUnbind(this),u}requiresUnbind(d){return d.sourceLifetime!==Is.coupled||this.first!==this.last||this.first.propertySource!==d.source}unbind(d){this.dispose()}observe(d,u){this.needsRefresh&&this.last!==null&&this.dispose();const p=i;i=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let h;try{h=this.expression(d,u)}finally{i=p}return h}disconnect(){this.dispose()}dispose(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=this.isAsync}}watch(d,u){const p=this.last,h=s(d),f=p===null?this.first:{};if(f.propertySource=d,f.propertyName=u,f.notifier=h,h.subscribe(this,u),p!==null){if(!this.needsRefresh){let g;i=void 0,g=p.propertySource[p.propertyName],i=this,d===g&&(this.needsRefresh=!0)}p.next=f}this.last=f}handleChange(){this.needsQueue?(this.needsQueue=!1,r(this)):this.isAsync||this.call()}call(){this.last!==null&&(this.needsQueue=this.isAsync,this.notify(this))}*records(){let d=this.first;for(;d!==void 0;)yield d,d=d.next}}return ai(c),Object.freeze({setArrayObserverFactory(l){o=l},getNotifier:s,track(l,d){i&&i.watch(l,d)},trackVolatile(){i&&(i.needsRefresh=!0)},notify(l,d){s(l).notify(d)},defineProperty(l,d){Sr(d)&&(d=new a(d)),n(l).push(d),Reflect.defineProperty(l,d.name,{enumerable:!0,get(){return d.getValue(this)},set(u){d.setValue(this,u)}})},getAccessors:n,binding(l,d,u=this.isVolatileBinding(l)){return new c(l,d,u)},isVolatileBinding(l){return e.test(l.toString())}})});function $(r,e){Q.defineProperty(r,e)}function fo(r,e,t){return Object.assign({},t,{get(){return Q.trackVolatile(),t.get.apply(this)}})}const Ra=oe.getById(Jr.contextEvent,()=>{let r=null;return{get(){return r},set(e){r=e}}}),ro=Object.freeze({default:{index:0,length:0,get event(){return ro.getEvent()},eventDetail(){return this.event.detail},eventTarget(){return this.event.target}},getEvent(){return Ra.get()},setEvent(r){Ra.set(r)}});class Xt{constructor(e,t,i){this.index=e,this.removed=t,this.addedCount=i}adjustTo(e){let t=this.index;const i=e.length;return t>i?t=i-this.addedCount:t<0&&(t=i+this.removed.length+t-this.addedCount),this.index=t<0?0:t,this}}class Oa{constructor(e){this.sorted=e}}const uu=Object.freeze({reset:1,splice:2,optimized:3}),wc=new Xt(0,gt,0);wc.reset=!0;const pu=[wc];var zt;(function(r){r[r.leave=0]="leave",r[r.update=1]="update",r[r.add=2]="add",r[r.delete=3]="delete"})(zt||(zt={}));function hu(r,e,t,i,o,s){const n=s-o+1,a=t-e+1,c=new Array(n);let l,d;for(let u=0;u<n;++u)c[u]=new Array(a),c[u][0]=u;for(let u=0;u<a;++u)c[0][u]=u;for(let u=1;u<n;++u)for(let p=1;p<a;++p)r[e+p-1]===i[o+u-1]?c[u][p]=c[u-1][p-1]:(l=c[u-1][p]+1,d=c[u][p-1]+1,c[u][p]=l<d?l:d);return c}function fu(r){let e=r.length-1,t=r[0].length-1,i=r[e][t];const o=[];for(;e>0||t>0;){if(e===0){o.push(zt.add),t--;continue}if(t===0){o.push(zt.delete),e--;continue}const s=r[e-1][t-1],n=r[e-1][t],a=r[e][t-1];let c;n<a?c=n<s?n:s:c=a<s?a:s,c===s?(s===i?o.push(zt.leave):(o.push(zt.update),i=s),e--,t--):c===n?(o.push(zt.delete),e--,i=n):(o.push(zt.add),t--,i=a)}return o.reverse()}function gu(r,e,t){for(let i=0;i<t;++i)if(r[i]!==e[i])return i;return t}function mu(r,e,t){let i=r.length,o=e.length,s=0;for(;s<t&&r[--i]===e[--o];)s++;return s}function bu(r,e,t,i){return e<t||i<r?-1:e===t||i===r?0:r<t?e<i?e-t:i-t:i<e?i-r:e-r}function yu(r,e,t,i,o,s){let n=0,a=0;const c=Math.min(t-e,s-o);if(e===0&&o===0&&(n=gu(r,i,c)),t===r.length&&s===i.length&&(a=mu(r,i,c-n)),e+=n,o+=n,t-=a,s-=a,t-e===0&&s-o===0)return gt;if(e===t){const f=new Xt(e,[],0);for(;o<s;)f.removed.push(i[o++]);return[f]}else if(o===s)return[new Xt(e,[],t-e)];const l=fu(hu(r,e,t,i,o,s)),d=[];let u,p=e,h=o;for(let f=0;f<l.length;++f)switch(l[f]){case zt.leave:u!==void 0&&(d.push(u),u=void 0),p++,h++;break;case zt.update:u===void 0&&(u=new Xt(p,[],0)),u.addedCount++,p++,u.removed.push(i[h]),h++;break;case zt.add:u===void 0&&(u=new Xt(p,[],0)),u.addedCount++,p++;break;case zt.delete:u===void 0&&(u=new Xt(p,[],0)),u.removed.push(i[h]),h++;break}return u!==void 0&&d.push(u),d}function vu(r,e){let t=!1,i=0;for(let o=0;o<e.length;o++){const s=e[o];if(s.index+=i,t)continue;const n=bu(r.index,r.index+r.removed.length,s.index,s.index+s.addedCount);if(n>=0){e.splice(o,1),o--,i-=s.addedCount-s.removed.length,r.addedCount+=s.addedCount-n;const a=r.removed.length+s.removed.length-n;if(!r.addedCount&&!a)t=!0;else{let c=s.removed;if(r.index<s.index){const l=r.removed.slice(0,s.index-r.index);l.push(...c),c=l}if(r.index+r.removed.length>s.index+s.addedCount){const l=r.removed.slice(s.index+s.addedCount-r.index);c.push(...l)}r.removed=c,s.index<r.index&&(r.index=s.index)}}else if(r.index<s.index){t=!0,e.splice(o,0,r),o++;const a=r.addedCount-r.removed.length;s.index+=a,i+=a}}t||e.push(r)}function xu(r,e){let t=[];const i=[];for(let o=0,s=e.length;o<s;o++)vu(e[o],i);for(let o=0,s=i.length;o<s;++o){const n=i[o];if(n.addedCount===1&&n.removed.length===1){n.removed[0]!==r[n.index]&&t.push(n);continue}t=t.concat(yu(r,n.index,n.index+n.addedCount,n.removed,0,n.removed.length))}return t}let Sc=Object.freeze({support:uu.optimized,normalize(r,e,t){return r===void 0?t===void 0?gt:xu(e,t):pu},pop(r,e,t,i){const o=r.length>0,s=t.apply(r,i);return o&&e.addSplice(new Xt(r.length,[s],0)),s},push(r,e,t,i){const o=t.apply(r,i);return e.addSplice(new Xt(r.length-i.length,[],i.length).adjustTo(r)),o},reverse(r,e,t,i){const o=t.apply(r,i);r.sorted++;const s=[];for(let n=r.length-1;n>=0;n--)s.push(n);return e.addSort(new Oa(s)),o},shift(r,e,t,i){const o=r.length>0,s=t.apply(r,i);return o&&e.addSplice(new Xt(0,[s],0)),s},sort(r,e,t,i){const o=new Map;for(let a=0,c=r.length;a<c;++a){const l=o.get(r[a])||[];o.set(r[a],[...l,a])}const s=t.apply(r,i);r.sorted++;const n=[];for(let a=0,c=r.length;a<c;++a){const l=o.get(r[a]);n.push(l[0]),o.set(r[a],l.splice(1))}return e.addSort(new Oa(n)),s},splice(r,e,t,i){const o=t.apply(r,i);return e.addSplice(new Xt(+i[0],o,i.length>2?i.length-2:0).adjustTo(r)),o},unshift(r,e,t,i){const o=t.apply(r,i);return e.addSplice(new Xt(0,[],i.length).adjustTo(r)),o}});function Sn(r,e,t,i=!0){Reflect.defineProperty(r,e,{value:t,enumerable:!1,writable:i})}class wu extends rs{get strategy(){return this._strategy}set strategy(e){this._strategy=e}get lengthObserver(){let e=this._lengthObserver;if(e===void 0){const t=this.subject;this._lengthObserver=e={length:t.length,handleChange(){this.length!==t.length&&(this.length=t.length,Q.notify(e,"length"))}},this.subscribe(e)}return e}get sortObserver(){let e=this._sortObserver;if(e===void 0){const t=this.subject;this._sortObserver=e={sorted:t.sorted,handleChange(){this.sorted!==t.sorted&&(this.sorted=t.sorted,Q.notify(e,"sorted"))}},this.subscribe(e)}return e}constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.sorts=void 0,this.needsQueue=!0,this._strategy=null,this._lengthObserver=void 0,this._sortObserver=void 0,this.call=this.flush,Sn(e,"$fastController",this)}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.enqueue()}addSort(e){this.sorts===void 0?this.sorts=[e]:this.sorts.push(e),this.enqueue()}reset(e){this.oldCollection=e,this.enqueue()}flush(){var e;const t=this.splices,i=this.sorts,o=this.oldCollection;t===void 0&&o===void 0&&i===void 0||(this.needsQueue=!0,this.splices=void 0,this.sorts=void 0,this.oldCollection=void 0,i!==void 0?this.notify(i):this.notify(((e=this._strategy)!==null&&e!==void 0?e:Sc).normalize(o,this.subject,t)))}enqueue(){this.needsQueue&&(this.needsQueue=!1,Kt.enqueue(this))}}let Fa=!1;const Ic=Object.freeze({sorted:0,enable(){if(Fa)return;Fa=!0,Q.setArrayObserverFactory(e=>new wu(e));const r=Array.prototype;r.$fastPatch||(Sn(r,"$fastPatch",1),Sn(r,"sorted",0),[r.pop,r.push,r.reverse,r.shift,r.sort,r.splice,r.unshift].forEach(e=>{r[e.name]=function(...t){var i;const o=this.$fastController;return o===void 0?e.apply(this,t):((i=o.strategy)!==null&&i!==void 0?i:Sc)[e.name](this,o,e,t)}}))}});class go{constructor(e,t,i=!1){this.evaluate=e,this.policy=t,this.isVolatile=i}}class Su extends go{createObserver(e){return Q.binding(this.evaluate,e,this.isVolatile)}}function ks(r,e,t=Q.isVolatileBinding(r)){return new Su(r,e,t)}class kc extends go{createObserver(){return this}bind(e){return this.evaluate(e.source,e.context)}}ai(kc);function jn(r,e){return new kc(r,e)}function Ma(r){return sr(r)?ks(r):r instanceof go?r:jn(()=>r)}const Us=Un(),Yn=Object.freeze({getForInstance:Us.getForInstance,getByType:Us.getByType,define(r){return Us.register({type:r}),r}});function js(r,e,t){e.source.style.setProperty(r.targetAspect,t.bind(e))}class In{constructor(e,t){this.dataBinding=e,this.targetAspect=t}createCSS(e){return e(this),`var(${this.targetAspect})`}addedCallback(e){var t;const i=e.source;if(!i.$cssBindings){i.$cssBindings=new Map;const s=i.setAttribute;i.setAttribute=(n,a)=>{s.call(i,n,a),n==="style"&&i.$cssBindings.forEach((c,l)=>js(l,c.controller,c.observer))}}const o=(t=e[this.targetAspect])!==null&&t!==void 0?t:e[this.targetAspect]=this.dataBinding.createObserver(this,this);o.controller=e,e.source.$cssBindings.set(this,{controller:e,observer:o})}connectedCallback(e){js(this,e,e[this.targetAspect])}removedCallback(e){e.source.$cssBindings&&e.source.$cssBindings.delete(this)}handleChange(e,t){js(this,t.controller,t)}}Yn.define(In);let Ta;function $c(r){return r.map(e=>e instanceof ft?$c(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}class ft{get strategy(){return this._strategy===null&&this.withStrategy(Ta),this._strategy}constructor(e){this.styles=e,this.targets=new WeakSet,this._strategy=null,this.behaviors=e.map(t=>t instanceof ft?t.behaviors:null).reduce((t,i)=>i===null?t:t===null?i:t.concat(i),null)}addStylesTo(e){this.strategy.addStylesTo(e),this.targets.add(e)}removeStylesFrom(e){this.strategy.removeStylesFrom(e),this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}withStrategy(e){return this._strategy=new e($c(this.styles)),this}static setDefaultStrategy(e){Ta=e}static normalize(e){return e===void 0?void 0:Array.isArray(e)?new ft(e):e instanceof ft?e:new ft([e])}}ft.supportsAdoptedStyleSheets=Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype;const Iu=`${Math.random().toString(36).substring(2,8)}`;let ku=0;const Ba=()=>`--v${Iu}${++ku}`;function Pc(r,e){const t=[];let i="";const o=[],s=n=>{o.push(n)};for(let n=0,a=r.length-1;n<a;++n){i+=r[n];let c=e[n];sr(c)?c=new In(ks(c),Ba()).createCSS(s):c instanceof go?c=new In(c,Ba()).createCSS(s):Yn.getForInstance(c)!==void 0&&(c=c.createCSS(s)),c instanceof ft||c instanceof CSSStyleSheet?(i.trim()!==""&&(t.push(i),i=""),t.push(c)):i+=c}return i+=r[r.length-1],i.trim()!==""&&t.push(i),{styles:t,behaviors:o}}const H=((r,...e)=>{const{styles:t,behaviors:i}=Pc(r,e),o=new ft(t);return i.length?o.withBehaviors(...i):o});class Cc{constructor(e,t){this.behaviors=t,this.css="";const i=e.reduce((o,s)=>(Sr(s)?this.css+=s:o.push(s),o),[]);i.length&&(this.styles=new ft(i))}createCSS(e){return this.behaviors.forEach(e),this.styles&&e(this),this.css}addedCallback(e){e.addStyles(this.styles)}removedCallback(e){e.removeStyles(this.styles)}}Yn.define(Cc);H.partial=(r,...e)=>{const{styles:t,behaviors:i}=Pc(r,e);return new Cc(t,i)};const qn=`fast-${Math.random().toString(36).substring(2,8)}`,Yo=`${qn}{`,Ki=`}${qn}`,$u=Ki.length;let Pu=0;const Kn=()=>`${qn}-${++Pu}`,Wn=Object.freeze({interpolation:r=>`${Yo}${r}${Ki}`,attribute:r=>`${Kn()}="${Yo}${r}${Ki}"`,comment:r=>`<!--${Yo}${r}${Ki}-->`}),$s=Object.freeze({parse(r,e){const t=r.split(Yo);if(t.length===1)return null;const i=[];for(let o=0,s=t.length;o<s;++o){const n=t[o],a=n.indexOf(Ki);let c;if(a===-1)c=n;else{const l=n.substring(0,a);i.push(e[l]),c=n.substring(a+$u)}c!==""&&i.push(c)}return i}}),Ys=Un(),Wt=Object.freeze({getForInstance:Ys.getForInstance,getByType:Ys.getByType,define(r,e){return e=e||{},e.type=r,Ys.register(e),r},assignAspect(r,e){if(!e){r.aspectType=qe.content;return}switch(r.sourceAspect=e,e[0]){case":":r.targetAspect=e.substring(1),r.aspectType=r.targetAspect==="classList"?qe.tokenList:qe.property;break;case"?":r.targetAspect=e.substring(1),r.aspectType=qe.booleanAttribute;break;case"@":r.targetAspect=e.substring(1),r.aspectType=qe.event;break;default:r.targetAspect=e,r.aspectType=qe.attribute;break}}});class Zn{constructor(e){this.options=e}createHTML(e){return Wn.attribute(e(this))}createBehavior(){return this}}ai(Zn);class Cu extends Zn{get id(){return this._id}set id(e){this._id=e,this._controllerProperty=`${e}-c`}bind(e){const t=e.targets[this.targetNodeId];t[this._controllerProperty]=e,this.updateTarget(e.source,this.computeNodes(t)),this.observe(t),e.onUnbind(this)}unbind(e){const t=e.targets[this.targetNodeId];this.updateTarget(e.source,gt),this.disconnect(t),t[this._controllerProperty]=null}getSource(e){return e[this._controllerProperty].source}updateTarget(e,t){e[this.options.property]=t}computeNodes(e){let t=this.getNodes(e);return"filter"in this.options&&(t=t.filter(this.options.filter)),t}}const Da=/fe-b\$\$start\$\$(\d+)\$\$(.+)\$\$fe-b/,Va=/fe-b\$\$end\$\$(\d+)\$\$(.+)\$\$fe-b/,Ha=/fe-repeat\$\$start\$\$(\d+)\$\$fe-repeat/,Xa=/fe-repeat\$\$end\$\$(\d+)\$\$fe-repeat/,Ua=/^(?:.{0,1000})fe-eb\$\$start\$\$(.+?)\$\$fe-eb/,ja=/fe-eb\$\$end\$\$(.{0,1000})\$\$fe-eb(?:.{0,1000})$/;function Ya(r){return r&&r.nodeType===Node.COMMENT_NODE}const et=Object.freeze({attributeMarkerName:"data-fe-b",compactAttributeMarkerName:"data-fe-c",attributeBindingSeparator:" ",contentBindingStartMarker(r,e){return`fe-b$$start$$${r}$$${e}$$fe-b`},contentBindingEndMarker(r,e){return`fe-b$$end$$${r}$$${e}$$fe-b`},repeatStartMarker(r){return`fe-repeat$$start$$${r}$$fe-repeat`},repeatEndMarker(r){return`fe-repeat$$end$$${r}$$fe-repeat`},isContentBindingStartMarker(r){return Da.test(r)},isContentBindingEndMarker(r){return Va.test(r)},isRepeatViewStartMarker(r){return Ha.test(r)},isRepeatViewEndMarker(r){return Xa.test(r)},isElementBoundaryStartMarker(r){return Ya(r)&&Ua.test(r.data.trim())},isElementBoundaryEndMarker(r){return Ya(r)&&ja.test(r.data)},parseAttributeBinding(r){const e=r.getAttribute(this.attributeMarkerName);return e===null?e:e.split(this.attributeBindingSeparator).map(t=>parseInt(t))},parseEnumeratedAttributeBinding(r){const e=[],t=this.attributeMarkerName.length+1,i=`${this.attributeMarkerName}-`;for(const o of r.getAttributeNames())if(o.startsWith(i)){const s=Number(o.slice(t));if(!Number.isNaN(s))e.push(s);else throw oe.error(1601,{name:o,expectedFormat:`${i}<number>`})}return e.length===0?null:e},parseCompactAttributeBinding(r){const e=`${this.compactAttributeMarkerName}-`,t=r.getAttributeNames().find(c=>c.startsWith(e));if(!t)return null;const o=t.slice(e.length).split("-"),s=parseInt(o[0],10),n=parseInt(o[1],10);if(o.length!==2||Number.isNaN(s)||Number.isNaN(n)||s<0||n<1)throw oe.error(1604,{name:t,expectedFormat:`${this.compactAttributeMarkerName}-{index}-{count}`});const a=[];for(let c=0;c<n;c++)a.push(s+c);return a},parseContentBindingStartMarker(r){return Wa(Da,r)},parseContentBindingEndMarker(r){return Wa(Va,r)},parseRepeatStartMarker(r){return qa(Ha,r)},parseRepeatEndMarker(r){return qa(Xa,r)},parseElementBoundaryStartMarker(r){return Ka(Ua,r.trim())},parseElementBoundaryEndMarker(r){return Ka(ja,r)}});function qa(r,e){const t=r.exec(e);return t===null?t:parseInt(t[1])}function Ka(r,e){const t=r.exec(e);return t===null?t:t[1]}function Wa(r,e){const t=r.exec(e);return t===null?t:[parseInt(t[1]),t[2]]}const is=Symbol.for("fe-hydration");function Si(r){return r[is]===is}const $o="defer-hydration";class Ec extends Error{constructor(e,t,i){super(e),this.factories=t,this.node=i}}function Jn(r){return r.nodeType===Node.COMMENT_NODE}function Ac(r){return r.nodeType===Node.TEXT_NODE}function Nc(r,e){const t=document.createRange();return t.setStart(r,0),t.setEnd(e,Jn(e)||Ac(e)?e.data.length:e.childNodes.length),t}function Eu(r){return r instanceof DocumentFragment&&"mode"in r}function Au(r,e,t){const i=Nc(r,e),o=i.commonAncestorContainer,s=_u(t),n=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT+NodeFilter.SHOW_COMMENT+NodeFilter.SHOW_TEXT,{acceptNode(d){return i.comparePoint(d,0)===0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a={},c={};let l=n.currentNode=r;for(;l!==null;){switch(l.nodeType){case Node.ELEMENT_NODE:{Nu(l,t,a,s);break}case Node.COMMENT_NODE:{Lu(l,n,t,a,c,s);break}}l=n.nextNode()}return i.detach(),{targets:a,boundaries:c}}function Nu(r,e,t,i){var o,s;const n=(s=(o=et.parseAttributeBinding(r))!==null&&o!==void 0?o:et.parseEnumeratedAttributeBinding(r))!==null&&s!==void 0?s:et.parseCompactAttributeBinding(r);if(n!==null){for(const a of n){const c=e[a+i];if(!c)throw new Ec(`HydrationView was unable to successfully target factory on ${r.nodeName} inside ${r.getRootNode().host.nodeName}. This likely indicates a template mismatch between SSR rendering and hydration.`,e,r);os(c,r,t)}r.removeAttribute(et.attributeMarkerName)}}function Lu(r,e,t,i,o,s){if(et.isElementBoundaryStartMarker(r)){zu(r,e);return}if(et.isContentBindingStartMarker(r.data)){const n=et.parseContentBindingStartMarker(r.data);if(n===null)return;const[a,c]=n,l=t[a+s],d=[];let u=e.nextSibling();r.data="";const p=u;for(;u!==null;){if(Jn(u)){const h=et.parseContentBindingEndMarker(u.data);if(h&&h[1]===c)break}d.push(u),u=e.nextSibling()}if(u===null){const h=r.getRootNode();throw new Error(`Error hydrating Comment node inside "${Eu(h)?h.host.nodeName:h.nodeName}".`)}if(u.data="",d.length===1&&Ac(d[0]))os(l,d[0],i);else{u!==p&&u.previousSibling!==null&&(o[l.targetNodeId]={first:p,last:u.previousSibling});const h=u.parentNode.insertBefore(document.createTextNode(""),u);os(l,h,i)}}}function zu(r,e){const t=et.parseElementBoundaryStartMarker(r.data);let i=e.nextSibling();for(;i!==null;){if(Jn(i)){const o=et.parseElementBoundaryEndMarker(i.data);if(o&&o===t)break}i=e.nextSibling()}}function _u(r){let e=0;for(let t=0,i=r.length;t<i&&r[t].targetNodeId==="h";++t)e++;return e}function os(r,e,t){if(r.targetNodeId===void 0)throw new Error("Factory could not be target to the node");t[r.targetNodeId]=e}var Lc;function kn(r,e){const t=r.parentNode;let i=r,o;for(;i!==e;){if(o=i.nextSibling,!o)throw new Error(`Unmatched first/last child inside "${e.getRootNode().host.nodeName}".`);t.removeChild(i),i=o}t.removeChild(e)}class zc{constructor(){this.index=0,this.length=0}get event(){return ro.getEvent()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}eventDetail(){return this.event.detail}eventTarget(){return this.event.target}}class mo extends zc{constructor(e,t,i){super(),this.fragment=e,this.factories=t,this.targets=i,this.behaviors=null,this.unbindables=[],this.source=null,this.isBound=!1,this.sourceLifetime=Is.unknown,this.context=this,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const i=e.parentNode;let o=this.firstChild,s;for(;o!==t;)s=o.nextSibling,i.insertBefore(o,e),o=s;i.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let i=this.firstChild,o;for(;i!==t;)o=i.nextSibling,e.appendChild(i),i=o;e.appendChild(t)}dispose(){kn(this.firstChild,this.lastChild),this.unbind()}onUnbind(e){this.unbindables.push(e)}bind(e,t=this){if(this.source===e)return;let i=this.behaviors;if(i===null){this.source=e,this.context=t,this.behaviors=i=new Array(this.factories.length);const o=this.factories;for(let s=0,n=o.length;s<n;++s){const a=o[s].createBehavior();a.bind(this),i[s]=a}}else{this.source!==null&&this.evaluateUnbindables(),this.isBound=!1,this.source=e,this.context=t;for(let o=0,s=i.length;o<s;++o)i[o].bind(this)}this.isBound=!0}unbind(){!this.isBound||this.source===null||(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}evaluateUnbindables(){const e=this.unbindables;for(let t=0,i=e.length;t<i;++t)e[t].unbind(this);e.length=0}static disposeContiguousBatch(e){if(e.length!==0){kn(e[0].firstChild,e[e.length-1].lastChild);for(let t=0,i=e.length;t<i;++t)e[t].unbind()}}}ai(mo);Q.defineProperty(mo.prototype,"index");Q.defineProperty(mo.prototype,"length");const Kr={unhydrated:"unhydrated",hydrating:"hydrating",hydrated:"hydrated"};class Gu extends Error{constructor(e,t,i,o){super(e),this.factory=t,this.fragment=i,this.templateString=o}}class Ru extends zc{get hydrationStage(){return this._hydrationStage}get targets(){return this._targets}get bindingViewBoundaries(){return this._bindingViewBoundaries}constructor(e,t,i,o){super(),this.firstChild=e,this.lastChild=t,this.sourceTemplate=i,this.hostBindingTarget=o,this[Lc]=is,this.context=this,this.source=null,this.isBound=!1,this.sourceLifetime=Is.unknown,this.unbindables=[],this.fragment=null,this.behaviors=null,this._hydrationStage=Kr.unhydrated,this._bindingViewBoundaries={},this._targets={},this.factories=i.compile().factories}insertBefore(e){if(this.fragment!==null)if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const i=e.parentNode;let o=this.firstChild,s;for(;o!==t;)s=o.nextSibling,i.insertBefore(o,e),o=s;i.insertBefore(t,e)}}appendTo(e){this.fragment!==null&&e.appendChild(this.fragment)}remove(){const e=this.fragment||(this.fragment=document.createDocumentFragment()),t=this.lastChild;let i=this.firstChild,o;for(;i!==t;){if(o=i.nextSibling,!o)throw new Error(`Unmatched first/last child inside "${t.getRootNode().host.nodeName}".`);e.appendChild(i),i=o}e.appendChild(t)}bind(e,t=this){var i;if(this.hydrationStage!==Kr.hydrated&&(this._hydrationStage=Kr.hydrating),this.source===e)return;let o=this.behaviors;if(o===null){this.source=e,this.context=t;try{const{targets:n,boundaries:a}=Au(this.firstChild,this.lastChild,this.factories);this._targets=n,this._bindingViewBoundaries=a}catch(n){if(n instanceof Ec){let a=this.sourceTemplate.html;typeof a!="string"&&(a=a.innerHTML),n.templateString=a}throw n}this.behaviors=o=new Array(this.factories.length);const s=this.factories;for(let n=0,a=s.length;n<a;++n){const c=s[n];if(c.targetNodeId==="h"&&this.hostBindingTarget&&os(c,this.hostBindingTarget,this._targets),c.targetNodeId in this.targets){const l=c.createBehavior();l.bind(this),o[n]=l}else{let l=this.sourceTemplate.html;typeof l!="string"&&(l=l.innerHTML);const d=((i=this.firstChild)===null||i===void 0?void 0:i.getRootNode()).host,u=d?.nodeName||"unknown",p=c,h=[`HydrationView was unable to successfully target bindings inside "<${u.toLowerCase()}>".`,`
Mismatch Details:`,`  - Expected target node ID: "${c.targetNodeId}"`,`  - Available target IDs: [${Object.keys(this.targets).join(", ")||"none"}]`];throw c.targetTagName&&h.push(`  - Expected tag name: "${c.targetTagName}"`),p.sourceAspect&&h.push(`  - Source aspect: "${p.sourceAspect}"`),p.aspectType!==void 0&&h.push(`  - Aspect type: ${p.aspectType}`),h.push(`
This usually means:`,"  1. The server-rendered HTML doesn't match the client template","  2. The hydration markers are missing or corrupted","  3. The DOM structure was modified before hydration",`
Template: ${l.slice(0,200)}${l.length>200?"...":""}`),new Gu(h.join(`
`),c,Nc(this.firstChild,this.lastChild).cloneContents(),l)}}}else{this.source!==null&&this.evaluateUnbindables(),this.isBound=!1,this.source=e,this.context=t;for(let s=0,n=o.length;s<n;++s)o[s].bind(this)}this.isBound=!0,this._hydrationStage=Kr.hydrated}unbind(){!this.isBound||this.source===null||(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}dispose(){kn(this.firstChild,this.lastChild),this.unbind()}onUnbind(e){this.unbindables.push(e)}evaluateUnbindables(){const e=this.unbindables;for(let t=0,i=e.length;t<i;++t)e[t].unbind(this);e.length=0}}Lc=is;ai(Ru);function Ou(r){return r.create!==void 0}function Fu(r,e,t,i){if(t==null&&(t=""),Ou(t)){r.textContent="";let o=r.$fastView;if(o===void 0)if(Si(i)&&Si(t)&&i.bindingViewBoundaries[this.targetNodeId]!==void 0&&i.hydrationStage!==Kr.hydrated){const s=i.bindingViewBoundaries[this.targetNodeId];o=t.hydrate(s.first,s.last)}else o=t.create();else r.$fastTemplate!==t&&(o.isComposed&&(o.remove(),o.unbind()),o=t.create());o.isComposed?o.needsBindOnly&&(o.needsBindOnly=!1,o.bind(i.source,i.context)):(o.isComposed=!0,o.bind(i.source,i.context),o.insertBefore(r),r.$fastView=o,r.$fastTemplate=t)}else{const o=r.$fastView;o!==void 0&&o.isComposed&&(o.isComposed=!1,o.remove(),o.needsBindOnly?o.needsBindOnly=!1:o.unbind()),r.textContent=t}}function Mu(r,e,t){var i;const o=`${this.id}-t`,s=(i=r[o])!==null&&i!==void 0?i:r[o]={v:0,cv:Object.create(null)},n=s.cv;let a=s.v;const c=r[e];if(t!=null&&t.length){const l=t.split(/\s+/);for(let d=0,u=l.length;d<u;++d){const p=l[d];p!==""&&(n[p]=a,c.add(p))}}if(s.v=a+1,a!==0){a-=1;for(const l in n)n[l]===a&&c.remove(l)}}const Tu={[qe.attribute]:ri.setAttribute,[qe.booleanAttribute]:ri.setBooleanAttribute,[qe.property]:(r,e,t)=>r[e]=t,[qe.content]:Fu,[qe.tokenList]:Mu,[qe.event]:()=>{}};class yi{constructor(e){this.dataBinding=e,this.updateTarget=null,this.aspectType=qe.content}createHTML(e){return Wn.interpolation(e(this))}createBehavior(){var e;if(this.updateTarget===null){const t=Tu[this.aspectType],i=(e=this.dataBinding.policy)!==null&&e!==void 0?e:this.policy;if(!t)throw oe.error(ve.unsupportedBindingBehavior);this.data=`${this.id}-d`,this.updateTarget=i.protect(this.targetTagName,this.aspectType,this.targetAspect,t)}return this}bind(e){var t;const i=e.targets[this.targetNodeId],o=Si(e)&&e.hydrationStage&&e.hydrationStage!==Kr.hydrated;switch(this.aspectType){case qe.event:i[this.data]=e,i.addEventListener(this.targetAspect,this,this.dataBinding.options);break;case qe.content:e.onUnbind(this);default:{const s=(t=i[this.data])!==null&&t!==void 0?t:i[this.data]=this.dataBinding.createObserver(this,this);if(s.target=i,s.controller=e,o&&(this.aspectType===qe.attribute||this.aspectType===qe.booleanAttribute)){s.bind(e);break}this.updateTarget(i,this.targetAspect,s.bind(e),e);break}}}unbind(e){const i=e.targets[this.targetNodeId].$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}handleEvent(e){const t=e.currentTarget[this.data];if(t.isBound){ro.setEvent(e);const i=this.dataBinding.evaluate(t.source,t.context);ro.setEvent(null),i!==!0&&e.preventDefault()}}handleChange(e,t){const i=t.controller;if(!i.isBound)return;const o=t.target;this.updateTarget(o,this.targetAspect,t.bind(i),i)}}Wt.define(yi,{aspected:!0});const _c=(r,e)=>`${r}.${e}`,Za={},tr={index:0,node:null};function Ja(r){r.startsWith("fast-")||oe.warn(ve.hostBindingWithoutHost,{name:r})}const Bu=new Proxy(document.createElement("div"),{get(r,e){Ja(e);const t=Reflect.get(r,e);return sr(t)?t.bind(r):t},set(r,e,t){return Ja(e),Reflect.set(r,e,t)}});class Du{constructor(e,t,i){this.fragment=e,this.directives=t,this.policy=i,this.proto=null,this.nodeIds=new Set,this.descriptors={},this.factories=[]}addFactory(e,t,i,o,s){var n,a;this.nodeIds.has(i)||(this.nodeIds.add(i),this.addTargetDescriptor(t,i,o)),e.id=(n=e.id)!==null&&n!==void 0?n:Kn(),e.targetNodeId=i,e.targetTagName=s,e.policy=(a=e.policy)!==null&&a!==void 0?a:this.policy,this.factories.push(e)}freeze(){return this.proto=Object.create(null,this.descriptors),this}addTargetDescriptor(e,t,i){const o=this.descriptors;if(t==="r"||t==="h"||o[t])return;if(!o[e]){const n=e.lastIndexOf("."),a=e.substring(0,n),c=parseInt(e.substring(n+1),10);this.addTargetDescriptor(a,e,c)}let s=Za[t];if(!s){const n=`_${t}`;Za[t]=s={get(){var a;return(a=this[n])!==null&&a!==void 0?a:this[n]=this[e].childNodes[i]}}}o[t]=s}createView(e){const t=this.fragment.cloneNode(!0),i=Object.create(this.proto);i.r=t,i.h=e??Bu;for(const o of this.nodeIds)Reflect.get(i,o);return new mo(t,this.factories,i)}}function Gc(r,e,t,i,o,s=!1){const n=t.attributes,a=r.directives;for(let c=0,l=n.length;c<l;++c){const d=n[c],u=d.value,p=$s.parse(u,a);let h=null;p===null?s&&(h=new yi(jn(()=>u,r.policy)),Wt.assignAspect(h,d.name)):h=bo.aggregate(p,r.policy),h!==null&&(t.removeAttributeNode(d),c--,l--,r.addFactory(h,e,i,o,t.tagName))}}function Vu(r,e,t,i,o){const s=$s.parse(e.textContent,r.directives);if(s===null)return tr.node=e.nextSibling,tr.index=o+1,tr;let n,a=n=e;for(let c=0,l=s.length;c<l;++c){const d=s[c];c!==0&&(o++,i=_c(t,o),n=a.parentNode.insertBefore(document.createTextNode(""),a.nextSibling)),Sr(d)?n.textContent=d:(n.textContent=" ",Wt.assignAspect(d),r.addFactory(d,t,i,o,null)),a=n}return tr.index=o+1,tr.node=a.nextSibling,tr}function Rc(r,e,t){let i=0,o=e.firstChild;for(;o;){const s=Hu(r,t,o,i);o=s.node,i=s.index}}function Hu(r,e,t,i){const o=_c(e,i);switch(t.nodeType){case 1:Gc(r,e,t,o,i),Rc(r,t,o);break;case 3:return Vu(r,t,e,o,i);case 8:{const s=$s.parse(t.data,r.directives);s!==null&&r.addFactory(bo.aggregate(s),e,o,i,null);break}}return tr.index=i+1,tr.node=t.nextSibling,tr}function Xu(r,e){return r&&r.nodeType===8&&$s.parse(r.data,e)!==null}const Qa="TEMPLATE",bo={compile(r,e,t=ri.policy){let i;if(Sr(r)){i=document.createElement(Qa),i.innerHTML=t.createHTML(r);const n=i.content.firstElementChild;n!==null&&n.tagName===Qa&&(i=n)}else i=r;!i.content.firstChild&&!i.content.lastChild&&i.content.appendChild(document.createComment(""));const o=document.adoptNode(i.content),s=new Du(o,e,t);return Gc(s,"",i,"h",0,!0),(Xu(o.firstChild,e)||o.childNodes.length===1&&Object.keys(e).length>0)&&o.insertBefore(document.createComment(""),o.firstChild),Rc(s,o,"r"),tr.node=null,s.freeze()},setDefaultStrategy(r){this.compile=r},aggregate(r,e=ri.policy){if(r.length===1)return r[0];let t,i=!1,o;const s=r.length,n=r.map(l=>Sr(l)?()=>l:(t=l.sourceAspect||t,i=i||l.dataBinding.isVolatile,o=o||l.dataBinding.policy,l.dataBinding.evaluate)),a=(l,d)=>{let u="";for(let p=0;p<s;++p)u+=n[p](l,d);return u},c=new yi(ks(a,o??e,i));return Wt.assignAspect(c,t),c}};class Oc extends Zn{bind(e){e.source[this.options]=e.targets[this.targetNodeId]}}Wt.define(Oc);const te=r=>new Oc(r),el="boolean",tl="reflect",ss=Object.freeze({locate:vc()}),Uu={toView(r){return r?"true":"false"},fromView(r){return!(r==null||r==="false"||r===!1||r===0)}};function rl(r){if(r==null)return null;const e=r*1;return isNaN(e)?null:e}const ce={toView(r){const e=rl(r);return e&&e.toString()},fromView:rl};class ns{constructor(e,t,i=t.toLowerCase(),o=tl,s){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=i,this.mode=o,this.converter=s,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,o===el&&s===void 0&&(this.converter=Uu)}setValue(e,t){const i=e[this.fieldName],o=this.converter;o!==void 0&&(t=o.fromView(t)),i!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,t),e.$fastController.notify(this.name))}getValue(e){return Q.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,i=this.guards;i.has(e)||t==="fromView"||Kt.enqueue(()=>{i.add(e);const o=e[this.fieldName];switch(t){case tl:const s=this.converter;ri.setAttribute(e,this.attribute,s!==void 0?s.toView(o):o);break;case el:ri.setBooleanAttribute(e,this.attribute,o);break}i.delete(e)})}static collect(e,...t){const i=[];t.push(ss.locate(e));for(let o=0,s=t.length;o<s;++o){const n=t[o];if(n!==void 0)for(let a=0,c=n.length;a<c;++a){const l=n[a];Sr(l)?i.push(new ns(e,l)):i.push(new ns(e,l.property,l.attribute,l.mode,l.converter))}}return i}}function S(r,e){let t;function i(o,s){arguments.length>1&&(t.property=s),ss.locate(o.constructor).push(t)}if(arguments.length>1){t={},i(r,e);return}return t=r===void 0?{}:r,i}var ju=function(r,e,t,i){function o(s){return s instanceof t?s:new t(function(n){n(s)})}return new(t||(t=Promise))(function(s,n){function a(d){try{l(i.next(d))}catch(u){n(u)}}function c(d){try{l(i.throw(d))}catch(u){n(u)}}function l(d){d.done?s(d.value):o(d.value).then(a,c)}l((i=i.apply(r,e||[])).next())})};const il={mode:"open"},ol={},qs=new Set,Wi=oe.getById(Jr.elementRegistry,()=>Un()),Yu={deferAndHydrate:"defer-and-hydrate"};class Ee{get isDefined(){return this.platformDefined}constructor(e,t=e.definition){var i;this.platformDefined=!1,Sr(t)&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template,this.templateOptions=t.templateOptions,this.registry=(i=t.registry)!==null&&i!==void 0?i:customElements;const o=e.prototype,s=ns.collect(e,t.attributes),n=new Array(s.length),a={},c={};for(let l=0,d=s.length;l<d;++l){const u=s[l];n[l]=u.attribute,a[u.name]=u,c[u.attribute]=u,Q.defineProperty(o,u)}Reflect.defineProperty(e,"observedAttributes",{value:n,enumerable:!0}),this.attributes=s,this.propertyLookup=a,this.attributeLookup=c,this.shadowOptions=t.shadowOptions===void 0?il:t.shadowOptions===null?void 0:Object.assign(Object.assign({},il),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?ol:Object.assign(Object.assign({},ol),t.elementOptions),this.styles=ft.normalize(t.styles),Wi.register(this),Q.defineProperty(Ee.isRegistered,this.name),Ee.isRegistered[this.name]=this.type}define(e=this.registry){var t,i;const o=this.type;return e.get(this.name)||(this.platformDefined=!0,e.define(this.name,o,this.elementOptions),(i=(t=this.lifecycleCallbacks)===null||t===void 0?void 0:t.elementDidDefine)===null||i===void 0||i.call(t,this.name)),this}static compose(e,t){return qs.has(e)||Wi.getByType(e)?new Ee(class extends e{},t):new Ee(e,t)}static registerBaseType(e){qs.add(e)}static composeAsync(e,t){return new Promise(i=>{(qs.has(e)||Wi.getByType(e))&&i(new Ee(class extends e{},t));const o=new Ee(e,t);Q.getNotifier(o).subscribe({handleChange:()=>{var s,n;(n=(s=o.lifecycleCallbacks)===null||s===void 0?void 0:s.templateDidUpdate)===null||n===void 0||n.call(s,o.name),i(o)}},"template")})}}Ee.isRegistered={};Ee.getByType=Wi.getByType;Ee.getForInstance=Wi.getForInstance;Ee.registerAsync=r=>ju(void 0,void 0,void 0,function*(){return new Promise(e=>{Ee.isRegistered[r]&&e(Ee.isRegistered[r]),Q.getNotifier(Ee.isRegistered).subscribe({handleChange:()=>e(Ee.isRegistered[r])},r)})});Q.defineProperty(Ee.prototype,"template");const qu=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,Ku=Object.create(null);class Ir{constructor(e,t=Ku){this.html=e,this.factories=t}createHTML(e){const t=this.factories;for(const i in t)e(t[i]);return this.html}}Ir.empty=new Ir("");Wt.define(Ir);function Wu(r,e,t,i=Wt.getForInstance(r)){if(i.aspected){const o=qu.exec(e);o!==null&&Wt.assignAspect(r,o[2])}return r.createHTML(t)}class Ps{constructor(e,t={},i){this.policy=i,this.result=null,this.html=e,this.factories=t}compile(){return this.result===null&&(this.result=bo.compile(this.html,this.factories,this.policy)),this.result}create(e){return this.compile().createView(e)}inline(){return new Ir(Sr(this.html)?this.html:this.html.innerHTML,this.factories)}withPolicy(e){if(this.result)throw oe.error(ve.cannotSetTemplatePolicyAfterCompilation);if(this.policy)throw oe.error(ve.onlySetTemplatePolicyOnce);return this.policy=e,this}render(e,t,i){const o=this.create(i);return o.bind(e),o.appendTo(t),o}static create(e,t,i){let o="";const s=Object.create(null),n=a=>{var c;const l=(c=a.id)!==null&&c!==void 0?c:a.id=Kn();return s[l]=a,l};for(let a=0,c=e.length-1;a<c;++a){const l=e[a];let d=t[a],u;if(o+=l,sr(d))d=new yi(ks(d));else if(d instanceof go)d=new yi(d);else if(!(u=Wt.getForInstance(d))){const p=d;d=new yi(jn(()=>p))}o+=Wu(d,l,n,u)}return new Ps(o+e[e.length-1],s,i)}}ai(Ps);const ie=((r,...e)=>{if(Array.isArray(r)&&Array.isArray(r.raw))return Ps.create(r,e);throw oe.error(ve.directCallToHTMLTagNotAllowed)});ie.partial=r=>new Ir(r);const sl=Object.freeze({positioning:!1,recycle:!0});function Zu(r,e,t,i){r.context.parent=i.source,r.context.parentContext=i.context,r.bind(e[t])}function Ju(r,e,t,i){r.context.parent=i.source,r.context.parentContext=i.context,r.context.length=e.length,r.context.index=t,r.bind(e[t])}function nl(r){return r.nodeType===Node.COMMENT_NODE}class al extends Error{constructor(e,t){super(e),this.propertyBag=t}}class Qu{constructor(e){this.directive=e,this.items=null,this.itemsObserver=null,this.bindView=Zu,this.views=[],this.itemsBindingObserver=e.dataBinding.createObserver(this,e),this.templateBindingObserver=e.templateBinding.createObserver(this,e),e.options.positioning&&(this.bindView=Ju)}bind(e){this.location=e.targets[this.directive.targetNodeId],this.controller=e,this.items=this.itemsBindingObserver.bind(e),this.template=this.templateBindingObserver.bind(e),this.observeItems(!0),Si(this.template)&&Si(e)&&e.hydrationStage!==Kr.hydrated?this.hydrateViews(this.template):this.refreshAllViews(),e.onUnbind(this)}unbind(){this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews()}handleChange(e,t){if(t===this.itemsBindingObserver)this.items=this.itemsBindingObserver.bind(this.controller),this.observeItems(),this.refreshAllViews();else if(t===this.templateBindingObserver)this.template=this.templateBindingObserver.bind(this.controller),this.refreshAllViews(!0);else if(t[0])t[0].reset?this.refreshAllViews():t[0].sorted?this.updateSortedViews(t):this.updateSplicedViews(t);else return}observeItems(e=!1){if(!this.items){this.items=gt;return}const t=this.itemsObserver,i=this.itemsObserver=Q.getNotifier(this.items),o=t!==i;o&&t!==null&&t.unsubscribe(this),(o||e)&&i.subscribe(this)}updateSortedViews(e){const t=this.views;for(let i=0,o=e.length;i<o;++i){const s=e[i].sorted.slice(),n=s.slice().sort();for(let a=0,c=s.length;a<c;++a){const l=s.find(d=>s[a]===n[d]);if(l!==a){const d=n.splice(l,1);n.splice(a,0,...d);const u=t[a],p=u?u.firstChild:this.location;t[l].remove(),t[l].insertBefore(p);const h=t.splice(l,1);t.splice(a,0,...h)}}}}updateSplicedViews(e){const t=this.views,i=this.bindView,o=this.items,s=this.template,n=this.controller,a=this.directive.options.recycle,c=[];let l=0,d=0;for(let u=0,p=e.length;u<p;++u){const h=e[u],f=h.removed;let g=0,m=h.index;const b=m+h.addedCount,x=t.splice(h.index,f.length),y=d=c.length+x.length;for(;m<b;++m){const C=t[m],N=C?C.firstChild:this.location;let v;a&&d>0?(g<=y&&x.length>0?(v=x[g],g++):(v=c[l],l++),d--):v=s.create(),t.splice(m,0,v),i(v,o,m,n),v.insertBefore(N)}x[g]&&c.push(...x.slice(g))}for(let u=l,p=c.length;u<p;++u)c[u].dispose();if(this.directive.options.positioning)for(let u=0,p=t.length;u<p;++u){const h=t[u].context;h.length=p,h.index=u}}refreshAllViews(e=!1){const t=this.items,i=this.template,o=this.location,s=this.bindView,n=this.controller;let a=t.length,c=this.views,l=c.length;if((a===0||e||!this.directive.options.recycle)&&(mo.disposeContiguousBatch(c),l=0),l===0){this.views=c=new Array(a);for(let d=0;d<a;++d){const u=i.create();s(u,t,d,n),c[d]=u,u.insertBefore(o)}}else{let d=0;for(;d<a;++d)if(d<l){const p=c[d];if(!p){const h=new XMLSerializer;throw new al(`View is null or undefined inside "${this.location.getRootNode().host.nodeName}".`,{index:d,hydrationStage:this.controller.hydrationStage,itemsLength:a,viewsState:c.map(f=>f?"hydrated":"empty"),viewTemplateString:h.serializeToString(i.create().fragment),rootNodeContent:h.serializeToString(this.location.getRootNode())})}s(p,t,d,n)}else{const p=i.create();s(p,t,d,n),c.push(p),p.insertBefore(o)}const u=c.splice(d,l-d);for(d=0,a=u.length;d<a;++d)u[d].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,i=e.length;t<i;++t){const o=e[t];if(!o){const s=new XMLSerializer;throw new al(`View is null or undefined inside "${this.location.getRootNode().host.nodeName}".`,{index:t,hydrationStage:this.controller.hydrationStage,viewsState:e.map(n=>n?"hydrated":"empty"),rootNodeContent:s.serializeToString(this.location.getRootNode())})}o.unbind()}}hydrateViews(e){if(!this.items)return;this.views=new Array(this.items.length);let t=this.location.previousSibling;for(;t!==null;){if(!nl(t)){t=t.previousSibling;continue}const i=et.parseRepeatEndMarker(t.data);if(i===null){t=t.previousSibling;continue}t.data="";const o=t.previousSibling;if(!o)throw new Error(`Error when hydrating inside "${this.location.getRootNode().host.nodeName}": end should never be null.`);let s=o,n=0;for(;s!==null;){if(nl(s)){if(et.isRepeatViewEndMarker(s.data))n++;else if(et.isRepeatViewStartMarker(s.data))if(n)n--;else{if(et.parseRepeatStartMarker(s.data)!==i)throw new Error(`Error when hydrating inside "${this.location.getRootNode().host.nodeName}": Mismatched start and end markers.`);s.data="",t=s.previousSibling,s=s.nextSibling;const a=e.hydrate(s,o);this.views[i]=a,this.bindView(a,this.items,i,this.controller);break}}s=s.previousSibling}if(!s)throw new Error(`Error when hydrating inside "${this.location.getRootNode().host.nodeName}": start should never be null.`)}}}class Fc{createHTML(e){return Wn.comment(e(this))}constructor(e,t,i){this.dataBinding=e,this.templateBinding=t,this.options=i,Ic.enable()}createBehavior(){return new Qu(this)}}Wt.define(Fc);function Xr(r,e,t=sl){const i=Ma(r),o=Ma(e);return new Fc(i,o,Object.assign(Object.assign({},sl),t))}const ll="slotchange";class Mc extends Cu{observe(e){e.addEventListener(ll,this)}disconnect(e){e.removeEventListener(ll,this)}getNodes(e){return e.assignedNodes(this.options)}handleEvent(e){const t=e.currentTarget;this.updateTarget(this.getSource(t),this.computeNodes(t))}}Wt.define(Mc);function yo(r){return Sr(r)&&(r={property:r}),new Mc(r)}const ep=()=>null;function cl(r){return r===void 0?ep:sr(r)?r:()=>r}function Wr(r,e,t){const i=sr(r)?r:()=>r,o=cl(e),s=cl(t);return(n,a)=>i(n,a)?o(n,a):s(n,a)}class tp extends MutationObserver{constructor(e){function t(i){this.callback.call(null,i.filter(o=>this.observedNodes.has(o.target)))}super(t),this.callback=e,this.observedNodes=new Set}observe(e,t){this.observedNodes.add(e),super.observe(e,t)}unobserve(e){this.observedNodes.delete(e),this.observedNodes.size<1&&this.disconnect()}}const rp={bubbles:!0,composed:!0,cancelable:!0},qo="isConnected",Tc=new WeakMap;function Zi(r){var e,t;return(t=(e=r.shadowRoot)!==null&&e!==void 0?e:Tc.get(r))!==null&&t!==void 0?t:null}let dl;var Ye;(function(r){r[r.connecting=0]="connecting",r[r.connected=1]="connected",r[r.disconnecting=2]="disconnecting",r[r.disconnected=3]="disconnected"})(Ye||(Ye={}));class Yt extends xc{get isConnected(){return Q.track(this,qo),this.stage===Ye.connected}get context(){var e,t;return(t=(e=this.view)===null||e===void 0?void 0:e.context)!==null&&t!==void 0?t:ro.default}get isBound(){var e,t;return(t=(e=this.view)===null||e===void 0?void 0:e.isBound)!==null&&t!==void 0?t:!1}get sourceLifetime(){var e;return(e=this.view)===null||e===void 0?void 0:e.sourceLifetime}get template(){var e;if(this._template===null){const t=this.definition;this.source.resolveTemplate?this._template=this.source.resolveTemplate():t.template&&(this._template=(e=t.template)!==null&&e!==void 0?e:null)}return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get shadowOptions(){return this._shadowRootOptions}set shadowOptions(e){if(this._shadowRootOptions===void 0&&e!==void 0){this._shadowRootOptions=e;let t=this.source.shadowRoot;t?this.hasExistingShadowRoot=!0:(t=this.source.attachShadow(e),e.mode==="closed"&&Tc.set(this.source,t))}}get mainStyles(){var e;if(this._mainStyles===null){const t=this.definition;this.source.resolveStyles?this._mainStyles=this.source.resolveStyles():t.styles&&(this._mainStyles=(e=t.styles)!==null&&e!==void 0?e:null)}return this._mainStyles}set mainStyles(e){this._mainStyles!==e&&(this._mainStyles!==null&&this.removeStyles(this._mainStyles),this._mainStyles=e,this.needsInitialization||this.addStyles(e))}constructor(e,t){super(e),this.boundObservables=null,this.needsInitialization=!0,this.hasExistingShadowRoot=!1,this._template=null,this.stage=Ye.disconnected,this.guardBehaviorConnection=!1,this.behaviors=null,this.behaviorsConnected=!1,this._mainStyles=null,this.$fastController=this,this.view=null,this.source=e,this.definition=t,this.shadowOptions=t.shadowOptions;const i=Q.getAccessors(e);if(i.length>0){const o=this.boundObservables=Object.create(null);for(let s=0,n=i.length;s<n;++s){const a=i[s].name,c=e[a];c!==void 0&&(delete e[a],o[a]=c)}}}onUnbind(e){var t;(t=this.view)===null||t===void 0||t.onUnbind(e)}addBehavior(e){var t,i;const o=(t=this.behaviors)!==null&&t!==void 0?t:this.behaviors=new Map,s=(i=o.get(e))!==null&&i!==void 0?i:0;s===0?(o.set(e,1),e.addedCallback&&e.addedCallback(this),e.connectedCallback&&!this.guardBehaviorConnection&&(this.stage===Ye.connected||this.stage===Ye.connecting)&&e.connectedCallback(this)):o.set(e,s+1)}removeBehavior(e,t=!1){const i=this.behaviors;if(i===null)return;const o=i.get(e);o!==void 0&&(o===1||t?(i.delete(e),e.disconnectedCallback&&this.stage!==Ye.disconnected&&e.disconnectedCallback(this),e.removedCallback&&e.removedCallback(this)):i.set(e,o-1))}addStyles(e){var t;if(!e)return;const i=this.source;if(e instanceof HTMLElement)((t=Zi(i))!==null&&t!==void 0?t:this.source).append(e);else if(!e.isAttachedTo(i)){const o=e.behaviors;if(e.addStylesTo(i),o!==null)for(let s=0,n=o.length;s<n;++s)this.addBehavior(o[s])}}removeStyles(e){var t;if(!e)return;const i=this.source;if(e instanceof HTMLElement)((t=Zi(i))!==null&&t!==void 0?t:i).removeChild(e);else if(e.isAttachedTo(i)){const o=e.behaviors;if(e.removeStylesFrom(i),o!==null)for(let s=0,n=o.length;s<n;++s)this.removeBehavior(o[s])}}connect(){this.stage===Ye.disconnected&&(this.stage=Ye.connecting,this.bindObservables(),this.connectBehaviors(),this.needsInitialization?(this.renderTemplate(this.template),this.addStyles(this.mainStyles),this.needsInitialization=!1):this.view!==null&&this.view.bind(this.source),this.stage=Ye.connected,Q.notify(this,qo))}bindObservables(){if(this.boundObservables!==null){const e=this.source,t=this.boundObservables,i=Object.keys(t);for(let o=0,s=i.length;o<s;++o){const n=i[o];e[n]=t[n]}this.boundObservables=null}}connectBehaviors(){if(this.behaviorsConnected===!1){const e=this.behaviors;if(e!==null){this.guardBehaviorConnection=!0;for(const t of e.keys())t.connectedCallback&&t.connectedCallback(this);this.guardBehaviorConnection=!1}this.behaviorsConnected=!0}}disconnectBehaviors(){if(this.behaviorsConnected===!0){const e=this.behaviors;if(e!==null)for(const t of e.keys())t.disconnectedCallback&&t.disconnectedCallback(this);this.behaviorsConnected=!1}}disconnect(){this.stage===Ye.connected&&(this.stage=Ye.disconnecting,Q.notify(this,qo),this.view!==null&&this.view.unbind(),this.disconnectBehaviors(),this.stage=Ye.disconnected)}onAttributeChangedCallback(e,t,i){const o=this.definition.attributeLookup[e];o!==void 0&&o.onAttributeChangedCallback(this.source,i)}emit(e,t,i){return this.stage===Ye.connected?this.source.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},rp),i))):!1}renderTemplate(e){var t;const i=this.source,o=(t=Zi(i))!==null&&t!==void 0?t:i;if(this.view!==null)this.view.dispose(),this.view=null;else if(!this.needsInitialization||this.hasExistingShadowRoot){this.hasExistingShadowRoot=!1;for(let s=o.firstChild;s!==null;s=o.firstChild)o.removeChild(s)}e&&(this.view=e.render(i,o,i),this.view.sourceLifetime=Is.coupled)}static forCustomElement(e,t=!1){const i=e.$fastController;if(i!==void 0&&!t)return i;const o=Ee.getForInstance(e);if(o===void 0)throw oe.error(ve.missingElementDefinition);return Q.getNotifier(o).subscribe({handleChange:()=>{Yt.forCustomElement(e,!0),e.$fastController.connect()}},"template"),Q.getNotifier(o).subscribe({handleChange:()=>{Yt.forCustomElement(e,!0),e.$fastController.connect()}},"shadowOptions"),e.$fastController=new dl(e,o)}static setStrategy(e){dl=e}}ai(Yt);Yt.setStrategy(Yt);function as(r){var e;return"adoptedStyleSheets"in r?r:(e=Zi(r))!==null&&e!==void 0?e:r.getRootNode()}class Cs{constructor(e){const t=Cs.styleSheetCache;this.sheets=e.map(i=>{if(i instanceof CSSStyleSheet)return i;let o=t.get(i);return o===void 0&&(o=new CSSStyleSheet,o.replaceSync(i),t.set(i,o)),o})}addStylesTo(e){Bc(as(e),this.sheets)}removeStylesFrom(e){Dc(as(e),this.sheets)}}Cs.styleSheetCache=new Map;let ip=0;const op=()=>`fast-${++ip}`;function ul(r){return r===document?document.body:r}class sp{constructor(e){this.styles=e,this.styleClass=op()}addStylesTo(e){e=ul(as(e));const t=this.styles,i=this.styleClass;for(let o=0;o<t.length;o++){const s=document.createElement("style");s.innerHTML=t[o],s.className=i,e.append(s)}}removeStylesFrom(e){e=ul(as(e));const t=e.querySelectorAll(`.${this.styleClass}`);for(let i=0,o=t.length;i<o;++i)e.removeChild(t[i])}}let Bc=(r,e)=>{r.adoptedStyleSheets=[...r.adoptedStyleSheets,...e]},Dc=(r,e)=>{r.adoptedStyleSheets=r.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(ft.supportsAdoptedStyleSheets){try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Bc=(r,e)=>{r.adoptedStyleSheets.push(...e)},Dc=(r,e)=>{for(const t of e){const i=r.adoptedStyleSheets.indexOf(t);i!==-1&&r.adoptedStyleSheets.splice(i,1)}}}catch{}ft.setDefaultStrategy(Cs)}else ft.setDefaultStrategy(sp);const Ks="needs-hydration";class me extends Yt{get shadowOptions(){return super.shadowOptions}set shadowOptions(e){super.shadowOptions=e,(this.hasExistingShadowRoot||e!==void 0&&!this.template)&&this.definition.templateOptions===Yu.deferAndHydrate&&(this.source.toggleAttribute($o,!0),this.source.toggleAttribute(Ks,!0))}addHydratingInstance(){if(!me.hydratingInstances)return;const e=this.definition.name;let t=me.hydratingInstances.get(e);t||(t=new Set,me.hydratingInstances.set(e,t)),t.add(this.source)}static config(e){return me.lifecycleCallbacks=e,this}static hydrationObserverHandler(e){for(const t of e)t.target.hasAttribute($o)||(me.hydrationObserver.unobserve(t.target),t.target.$fastController.connect())}static checkHydrationComplete(e){var t,i,o;if(e.didTimeout){me.idleCallbackId=requestIdleCallback(me.checkHydrationComplete,{timeout:50});return}if(((t=me.hydratingInstances)===null||t===void 0?void 0:t.size)===0){try{(o=(i=me.lifecycleCallbacks).hydrationComplete)===null||o===void 0||o.call(i)}catch{}Yt.setStrategy(Yt)}}connect(){var e,t,i,o,s,n,a;if(this.needsHydration=(n=this.needsHydration)!==null&&n!==void 0?n:this.source.hasAttribute(Ks),this.needsHydration&&this.addHydratingInstance(),this.source.hasAttribute($o)){this.addHydratingInstance(),me.hydrationObserver.observe(this.source,{attributeFilter:[$o]});return}if(!this.needsHydration){super.connect(),this.removeHydratingInstance();return}if(this.stage===Ye.disconnected){if(!me.hydrationStarted){me.hydrationStarted=!0;try{(t=(e=me.lifecycleCallbacks).hydrationStarted)===null||t===void 0||t.call(e)}catch{}}try{(o=(i=me.lifecycleCallbacks).elementWillHydrate)===null||o===void 0||o.call(i,this.source)}catch{}if(this.stage=Ye.connecting,this.bindObservables(),this.connectBehaviors(),this.template)if(Si(this.template)){const c=this.source,l=(a=Zi(c))!==null&&a!==void 0?a:c;let d=l.firstChild,u=l.lastChild;c.shadowRoot===null&&(et.isElementBoundaryStartMarker(d)&&(d.data="",d=d.nextSibling),et.isElementBoundaryEndMarker(u)&&(u.data="",u=u.previousSibling)),this.view=this.template.hydrate(d,u,c),(s=this.view)===null||s===void 0||s.bind(this.source)}else this.renderTemplate(this.template);this.addStyles(this.mainStyles),this.stage=Ye.connected,this.source.removeAttribute(Ks),this.needsInitialization=this.needsHydration=!1,this.removeHydratingInstance(),Q.notify(this,qo)}}removeHydratingInstance(){var e,t;if(!me.hydratingInstances)return;try{(t=(e=me.lifecycleCallbacks).elementDidHydrate)===null||t===void 0||t.call(e,this.source)}catch{}const i=this.definition.name,o=me.hydratingInstances.get(i);o&&(o.delete(this.source),o.size||me.hydratingInstances.delete(i),me.idleCallbackId&&cancelIdleCallback(me.idleCallbackId),me.idleCallbackId=requestIdleCallback(me.checkHydrationComplete,{timeout:50}))}disconnect(){super.disconnect(),me.hydrationObserver.unobserve(this.source)}static install(){Yt.setStrategy(me)}}me.hydrationObserver=new tp(me.hydrationObserverHandler);me.lifecycleCallbacks={};me.hydrationStarted=!1;me.idleCallbackId=null;me.hydratingInstances=new Map;function Vc(r){const e=class extends r{constructor(){super(),Yt.forCustomElement(this)}$emit(t,i,o){return this.$fastController.emit(t,i,o)}connectedCallback(){this.$fastController.connect()}disconnectedCallback(){this.$fastController.disconnect()}attributeChangedCallback(t,i,o){this.$fastController.onAttributeChangedCallback(t,i,o)}};return Ee.registerBaseType(e),e}function np(r,e){return sr(r)?Ee.compose(r,e):Ee.compose(this,r)}function ap(r,e){return sr(r)?new Promise(t=>{Ee.composeAsync(r,e).then(i=>{t(i)})}).then(t=>t.define().type):new Promise(t=>{Ee.composeAsync(this,r).then(i=>{t(i)})}).then(t=>t.define().type)}function lp(r,e){return sr(r)?Ee.compose(r,e).define().type:Ee.compose(this,r).define().type}function cp(r){return Vc(r)}const nr=Object.assign(Vc(HTMLElement),{from:cp,define:lp,compose:np,defineAsync:ap});function Qn(r){return r?typeof r=="string"?new Ir(r):"inline"in r?r.inline():r:Ir.empty}class ea{}function ta(r){return ie` <slot name="end" ${te("end")}>${Qn(r.end)}</slot> `.inline()}function ra(r){return ie` <slot name="start" ${te("start")}>${Qn(r.start)}</slot> `.inline()}function ia(r,...e){const t=ss.locate(r);e.forEach(i=>{Object.getOwnPropertyNames(i.prototype).forEach(s=>{s!=="constructor"&&Object.defineProperty(r.prototype,s,Object.getOwnPropertyDescriptor(i.prototype,s))}),ss.locate(i).forEach(s=>t.push(s))})}const yt=Object.freeze({prefix:"fluent",shadowRootMode:"open",registry:globalThis.customElements}),dp=":host([hidden]){display:none}";function li(r){return`${dp}:host{display:${r}}`}const qt="var(--colorNeutralForeground1)",Hc="var(--colorNeutralForeground1Hover)",up="var(--colorNeutralForeground1Pressed)",ls="var(--colorNeutralForeground2)",pp="var(--colorNeutralForeground2Hover)",hp="var(--colorNeutralForeground2Pressed)",pl="var(--colorNeutralForeground2BrandHover)",hl="var(--colorNeutralForeground2BrandPressed)",xr="var(--colorNeutralForeground3)",fp="var(--colorNeutralForeground3Hover)",gp="var(--colorNeutralForeground3Pressed)",Xc="var(--colorNeutralForeground4)",Ue="var(--colorNeutralForegroundDisabled)",mp="var(--colorCompoundBrandForeground1Hover)",Qr="var(--colorNeutralForegroundOnBrand)",oa="var(--colorNeutralForegroundInverted)",bp="var(--colorNeutralForegroundInvertedHover)",yp="var(--colorNeutralForegroundInvertedPressed)",vp="var(--colorNeutralForegroundStaticInverted)",Uc="var(--colorBrandForeground1)",xp="var(--colorBrandForeground2)",wp="var(--colorNeutralForeground1Static)",or="var(--colorNeutralBackground1)",jc="var(--colorNeutralBackground1Hover)",Sp="var(--colorNeutralBackground1Pressed)",fl="var(--colorNeutralBackground1Selected)",cs="var(--colorNeutralBackground3)",Ip="var(--colorNeutralBackground4)",kp="var(--colorNeutralBackground5)",$p="var(--colorNeutralBackgroundInverted)",Pp="var(--colorSubtleBackground)",Yc="var(--colorSubtleBackgroundHover)",$n="var(--colorSubtleBackgroundPressed)",Gt="var(--colorTransparentBackground)",gl="var(--colorTransparentBackgroundHover)",ml="var(--colorTransparentBackgroundPressed)",Es="var(--colorNeutralBackgroundDisabled)",bl="var(--colorBackgroundOverlay)",qc="var(--colorBrandBackground)",Cp="var(--colorBrandBackgroundHover)",Ep="var(--colorBrandBackgroundPressed)",yl="var(--colorCompoundBrandBackground)",Pn="var(--colorCompoundBrandBackgroundHover)",Cn="var(--colorCompoundBrandBackgroundPressed)",Ap="var(--colorBrandBackground2)",ei="var(--colorNeutralStrokeAccessible)",ds="var(--colorNeutralStrokeAccessibleHover)",io="var(--colorNeutralStrokeAccessiblePressed)",oo="var(--colorNeutralStroke1)",us="var(--colorNeutralStroke1Hover)",Kc="var(--colorNeutralStroke1Pressed)",ps="var(--colorNeutralStroke2)",Np="var(--colorNeutralStroke3)",Lp="var(--colorBrandStroke2)",As="var(--colorCompoundBrandStroke)",Wc="var(--colorCompoundBrandStrokePressed)",Or="var(--colorNeutralStrokeDisabled)",Et="var(--colorTransparentStroke)",hs="var(--colorTransparentStrokeInteractive)",zp="var(--colorStrokeFocus1)",so="var(--colorStrokeFocus2)",_p="var(--colorPaletteRedBackground1)",Gp="var(--colorPaletteRedBackground3)",Rp="var(--colorPaletteRedBorder1)",Op="var(--colorPaletteRedBorder2)",Fp="var(--colorPaletteRedForeground1)",Zc="var(--colorPaletteRedForeground3)",Mp="var(--colorPaletteGreenBackground1)",Tp="var(--colorPaletteGreenBackground3)",Bp="var(--colorPaletteGreenBorder2)",Dp="var(--colorPaletteGreenForeground1)",Vp="var(--colorPaletteGreenForeground2)",Hp="var(--colorPaletteGreenForeground3)",Xp="var(--colorPaletteDarkOrangeBackground1)",Up="var(--colorPaletteDarkOrangeBackground3)",jp="var(--colorPaletteDarkOrangeBorder1)",Yp="var(--colorPaletteDarkOrangeForeground1)",Jc="var(--colorPaletteDarkOrangeForeground3)",qp="var(--colorPaletteYellowBackground1)",Kp="var(--colorPaletteYellowBackground3)",Wp="var(--colorPaletteYellowBorder1)",sa="var(--colorPaletteYellowForeground2)",Zp="var(--borderRadiusNone)",na="var(--borderRadiusSmall)",pt="var(--borderRadiusMedium)",Jp="var(--borderRadiusLarge)",ii="var(--borderRadiusCircular)",ee="var(--fontFamilyBase)",vo="var(--fontSizeBase100)",Rt="var(--fontSizeBase200)",mt="var(--fontSizeBase300)",Ot="var(--fontSizeBase400)",no="var(--fontSizeBase500)",aa="var(--fontSizeBase600)",Qc="var(--fontSizeHero700)",ed="var(--fontSizeHero800)",td="var(--fontSizeHero900)",rd="var(--fontSizeHero1000)",nt="var(--fontWeightRegular)",Ae="var(--fontWeightSemibold)",Ci="var(--fontWeightBold)",xo="var(--lineHeightBase100)",Zt="var(--lineHeightBase200)",bt="var(--lineHeightBase300)",ar="var(--lineHeightBase400)",la="var(--lineHeightBase500)",id="var(--lineHeightBase600)",od="var(--lineHeightHero700)",sd="var(--lineHeightHero800)",nd="var(--lineHeightHero900)",ad="var(--lineHeightHero1000)",ca="var(--shadow2)",da="var(--shadow4)",Qp="var(--shadow64)",Ut="var(--strokeWidthThin)",ua="var(--strokeWidthThick)",Ur="var(--strokeWidthThicker)",rr="var(--spacingHorizontalXXS)",ao="var(--spacingHorizontalXS)",wo="var(--spacingHorizontalSNudge)",ld="var(--spacingHorizontalS)",Zr="var(--spacingHorizontalMNudge)",Ei="var(--spacingHorizontalM)",eh="var(--spacingHorizontalL)",th="var(--spacingHorizontalXL)",rh="var(--spacingHorizontalXXL)",ih="var(--spacingVerticalXXS)",cd="var(--spacingVerticalXS)",En="var(--spacingVerticalSNudge)",Ko="var(--spacingVerticalS)",oh="var(--spacingVerticalMNudge)",sh="var(--spacingVerticalL)",dd="var(--durationUltraFast)",nh="var(--durationFaster)",Ns="var(--durationNormal)",vl="var(--durationGentle)",ah="var(--durationSlow)",fs="var(--curveAccelerateMid)",lh="var(--curveDecelerateMax)",gs="var(--curveDecelerateMid)",pa="var(--curveEasyEase)",ch="var(--curveLinear)";function xl(r,e){if("requestIdleCallback"in globalThis)return globalThis.requestIdleCallback(r,e);const t=Date.now();return setTimeout(()=>{r({didTimeout:e?.timeout?Date.now()-t>=e.timeout:!1,timeRemaining:()=>0})},e?.timeout??1)}function dh(r,e,t){const i=t?.timeout??50,o=t?.idleCallback??!1,s=":scope > :not(:defined)",n=a=>{if(r.querySelector(s)===null||a&&a.timeRemaining()<=0){o?xl(e,{timeout:i}):e();return}xl(n,{timeout:i})};n()}const Po={submit:"submit",reset:"reset"},uh=`${yt.prefix}-button`,ph=H`
  ${li("inline-flex")}

  :host {
    --icon-spacing: ${wo};
    position: relative;
    contain: layout style;
    vertical-align: middle;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    text-align: center;
    text-decoration-line: none;
    margin: 0;
    min-height: 32px;
    outline-style: none;
    background-color: ${or};
    color: ${qt};
    border: ${Ut} solid ${oo};
    padding: 0 ${Ei};
    min-width: 96px;
    border-radius: ${pt};
    font-size: ${mt};
    font-family: ${ee};
    font-weight: ${Ae};
    line-height: ${bt};
    transition-duration: ${nh};
    transition-property: background, border, color;
    transition-timing-function: ${pa};
    cursor: pointer;
    user-select: none;
  }

  .content {
    display: inherit;
  }

  :host(:hover) {
    background-color: ${jc};
    color: ${Hc};
    border-color: ${us};
  }

  :host(:hover:active) {
    background-color: ${Sp};
    border-color: ${Kc};
    color: ${up};
    outline-style: none;
  }

  :host(:focus-visible) {
    border-color: ${Et};
    outline: ${ua} solid ${Et};
    box-shadow: ${da}, 0 0 0 2px ${so};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    :host {
      transition-duration: 0.01ms;
    }
  }

  ::slotted(svg) {
    font-size: 20px;
    height: 20px;
    width: 20px;
    fill: currentColor;
  }

  ::slotted([slot='start']) {
    margin-inline-end: var(--icon-spacing);
  }

  ::slotted([slot='end']),
  [slot='end'] {
    flex-shrink: 0;
    margin-inline-start: var(--icon-spacing);
  }

  :host([icon-only]) {
    min-width: 32px;
    max-width: 32px;
  }

  :host([size='small']) {
    --icon-spacing: ${ao};
    min-height: 24px;
    min-width: 64px;
    padding: 0 ${ld};
    border-radius: ${na};
    font-size: ${Rt};
    line-height: ${Zt};
    font-weight: ${nt};
  }

  :host([size='small'][icon-only]) {
    min-width: 24px;
    max-width: 24px;
  }

  :host([size='large']) {
    min-height: 40px;
    border-radius: ${Jp};
    padding: 0 ${eh};
    font-size: ${Ot};
    line-height: ${ar};
  }

  :host([size='large'][icon-only]) {
    min-width: 40px;
    max-width: 40px;
  }

  :host([size='large']) ::slotted(svg) {
    font-size: 24px;
    height: 24px;
    width: 24px;
  }

  :host(:is([shape='circular'], [shape='circular']:focus-visible)) {
    border-radius: ${ii};
  }

  :host(:is([shape='square'], [shape='square']:focus-visible)) {
    border-radius: ${Zp};
  }

  :host([appearance='primary']) {
    background-color: ${qc};
    color: ${Qr};
    border-color: transparent;
  }

  :host([appearance='primary']:hover) {
    background-color: ${Cp};
  }

  :host([appearance='primary']:is(:hover, :hover:active):not(:focus-visible)) {
    border-color: transparent;
  }

  :host([appearance='primary']:is(:hover, :hover:active)) {
    color: ${Qr};
  }

  :host([appearance='primary']:hover:active) {
    background-color: ${Ep};
  }

  :host([appearance='primary']:focus-visible) {
    border-color: ${Qr};
    box-shadow: ${ca}, 0 0 0 2px ${so};
  }

  :host([appearance='outline']) {
    background-color: ${Gt};
  }

  :host([appearance='outline']:hover) {
    background-color: ${gl};
  }

  :host([appearance='outline']:hover:active) {
    background-color: ${ml};
  }

  :host([appearance='subtle']) {
    background-color: ${Pp};
    color: ${ls};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover) {
    background-color: ${Yc};
    color: ${pp};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover:active) {
    background-color: ${$n};
    color: ${hp};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover) ::slotted(svg) {
    fill: ${pl};
  }

  :host([appearance='subtle']:hover:active) ::slotted(svg) {
    fill: ${hl};
  }

  :host([appearance='transparent']) {
    background-color: ${Gt};
    color: ${ls};
  }

  :host([appearance='transparent']:hover) {
    background-color: ${gl};
    color: ${pl};
  }

  :host([appearance='transparent']:hover:active) {
    background-color: ${ml};
    color: ${hl};
  }

  :host(:is([appearance='transparent'], [appearance='transparent']:is(:hover, :active))) {
    border-color: transparent;
  }
`,hh=H`
  ${ph}

  :host(:is(:disabled, [disabled], [disabled-focusable], [appearance]:disabled, [appearance][disabled], [appearance][disabled-focusable])),
  :host(:is(:disabled, [disabled], [disabled-focusable], [appearance]:disabled, [appearance][disabled], [appearance][disabled-focusable]):hover),
  :host(:is(:disabled, [disabled], [disabled-focusable], [appearance]:disabled, [appearance][disabled], [appearance][disabled-focusable]):hover:active) {
    background-color: ${Es};
    border-color: ${Or};
    color: ${Ue};
    cursor: not-allowed;
  }

  :host([appearance='primary']:is(:disabled, [disabled], [disabled-focusable])),
  :host([appearance='primary']:is(:disabled, [disabled], [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
  }

  :host([appearance='outline']:is(:disabled, [disabled], [disabled-focusable])),
  :host([appearance='outline']:is(:disabled, [disabled], [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${Gt};
  }

  :host([appearance='subtle']:is(:disabled, [disabled], [disabled-focusable])),
  :host([appearance='subtle']:is(:disabled, [disabled], [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${Gt};
    border-color: transparent;
  }

  :host([appearance='transparent']:is(:disabled, [disabled], [disabled-focusable])),
  :host([appearance='transparent']:is(:disabled, [disabled], [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
    background-color: ${Gt};
  }

  @media (forced-colors: active) {
    :host {
      background-color: ButtonFace;
      color: ButtonText;
    }

    :host(:is(:hover, :focus-visible)) {
      border-color: Highlight !important;
    }

    :host([appearance='primary']:not(:is(:hover, :focus-visible))) {
      background-color: Highlight;
      color: HighlightText;
      forced-color-adjust: none;
    }

    :host(
        :is(
            :disabled,
            [disabled],
            [disabled-focusable],
            [appearance]:disabled,
            [appearance][disabled],
            [appearance][disabled-focusable]
          )
      ) {
      background-color: ButtonFace;
      color: GrayText;
      border-color: ButtonText;
    }
  }
`;function fh(r={}){return ie`
    <template
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @keypress="${(e,t)=>e.keypressHandler(t.event)}"
    >
      ${ra(r)}
      <span class="content" part="content">
        <slot ${yo("defaultSlottedContent")}></slot>
      </span>
      ${ta(r)}
    </template>
  `}const gh=fh(),mh={name:uh,registry:yt.registry,styles:hh,template:gh};function Ls(r){const e=r.ownerDocument;r?.isConnected&&r?.hasAttribute("autofocus")&&r?.checkVisibility?.({contentVisibilityAuto:!0,visibilityProperty:!0})&&[null,r,e.body,e.documentElement].includes(e.activeElement)&&Kt.enqueue(()=>{r.focus()})}const Ia=class Ia extends nr{disabledChanged(){this.setTabIndex()}disabledFocusableChanged(e,t){this.elementInternals&&(this.elementInternals.ariaDisabled=`${!!t}`)}get form(){return this.elementInternals.form}get labels(){return Object.freeze(Array.from(this.elementInternals.labels))}typeChanged(e,t){t!==Po.submit&&(this.formSubmissionFallbackControl?.remove(),this.shadowRoot?.querySelector('slot[name="internal"]')?.remove())}clickHandler(e){if(e&&this.disabledFocusable){e.stopImmediatePropagation();return}return this.press(),!0}connectedCallback(){super.connectedCallback(),this.elementInternals.ariaDisabled=`${!!this.disabledFocusable}`,this.setTabIndex(),Ls(this)}constructor(){super(),this.disabledFocusable=!1,this.elementInternals=this.attachInternals(),this.elementInternals.role="button"}createAndInsertFormSubmissionFallbackControl(){const e=this.formSubmissionFallbackControlSlot??document.createElement("slot");e.setAttribute("name","internal"),this.shadowRoot?.appendChild(e),this.formSubmissionFallbackControlSlot=e;const t=this.formSubmissionFallbackControl??document.createElement("button");t.style.display="none",t.setAttribute("type","submit"),t.setAttribute("slot","internal"),this.formNoValidate&&t.toggleAttribute("formnovalidate",!0),this.elementInternals.form?.id&&t.setAttribute("form",this.elementInternals.form.id),this.name&&t.setAttribute("name",this.name),this.value&&t.setAttribute("value",this.value),this.formAction&&t.setAttribute("formaction",this.formAction??""),this.formEnctype&&t.setAttribute("formenctype",this.formEnctype??""),this.formMethod&&t.setAttribute("formmethod",this.formMethod??""),this.formTarget&&t.setAttribute("formtarget",this.formTarget??""),this.append(t),this.formSubmissionFallbackControl=t}formDisabledCallback(e){this.disabled=e}keypressHandler(e){if(e&&this.disabledFocusable){e.stopImmediatePropagation();return}if(e.key==="Enter"||e.key===" "){this.click();return}return!0}press(){switch(this.type){case Po.reset:{this.resetForm();break}case Po.submit:{this.submitForm();break}}}resetForm(){this.elementInternals.form?.reset()}setTabIndex(){if(this.disabled){this.removeAttribute("tabindex");return}this.tabIndex=Number(this.getAttribute("tabindex")??0)<0?-1:0}submitForm(){if(!(!this.elementInternals.form||this.disabled||this.type!==Po.submit)){if(!this.name&&!this.formAction&&!this.formEnctype&&!this.formAttribute&&!this.formMethod&&!this.formNoValidate&&!this.formTarget){this.elementInternals.form.requestSubmit();return}try{this.elementInternals.setFormValue(this.value??""),this.elementInternals.form.requestSubmit(this)}catch{this.createAndInsertFormSubmissionFallbackControl(),this.elementInternals.setFormValue(null),this.elementInternals.form.requestSubmit(this.formSubmissionFallbackControl)}}}};Ia.formAssociated=!0;let at=Ia;B([$],at.prototype,"defaultSlottedContent",void 0);B([S({mode:"boolean"})],at.prototype,"disabled",void 0);B([S({attribute:"disabled-focusable",mode:"boolean"})],at.prototype,"disabledFocusable",void 0);B([S({attribute:"formaction"})],at.prototype,"formAction",void 0);B([S({attribute:"form"})],at.prototype,"formAttribute",void 0);B([S({attribute:"formenctype"})],at.prototype,"formEnctype",void 0);B([S({attribute:"formmethod"})],at.prototype,"formMethod",void 0);B([S({attribute:"formnovalidate",mode:"boolean"})],at.prototype,"formNoValidate",void 0);B([S({attribute:"formtarget"})],at.prototype,"formTarget",void 0);B([S],at.prototype,"name",void 0);B([S],at.prototype,"type",void 0);B([S],at.prototype,"value",void 0);class Ai extends at{constructor(){super(...arguments),this.iconOnly=!1}}B([S],Ai.prototype,"appearance",void 0);B([S],Ai.prototype,"shape",void 0);B([S],Ai.prototype,"size",void 0);B([S({attribute:"icon-only",mode:"boolean"})],Ai.prototype,"iconOnly",void 0);ia(Ai,ea);CSS.supports("anchor-name: --a");const ud=CSS.supports("selector(:state(g))"),wl=new Map;function we(r){return wl.get(r)??wl.set(r,ud?`:state(${r})`:`[state--${r}]`).get(r)}function Ii(r,e,t){if(!(!e||!r)){if(!ud){r.shadowRoot.host.toggleAttribute(`state--${e}`,t);return}if(t??!r.states.has(e)){r.states.add(e);return}r.states.delete(e)}}const Ws=new WeakMap;function bh(r,e){if(!r||!e)return!1;if(Ws.has(r))return Ws.get(r).has(e);const t=new Set(Object.values(r));return Ws.set(r,t),t.has(e)}function yh(r,e="",t="",i,o=""){Ii(r,`${o}${e}`,!1),(!i||bh(i,t))&&Ii(r,`${o}${t}`,!0)}we("active");we("bad-input");const rt=we("checked");we("custom-error");we("description");we("disabled");const Ht=":is([disabled], :disabled)";we("error");we("flip-block");we("focus-visible");we("has-message");we("indeterminate");we("multiple");we("open");we("pattern-mismatch");we("placeholder-shown");we("pressed");we("range-overflow");we("range-underflow");we("required");we("selected");we("step-mismatch");we("submenu");we("too-long");we("too-short");we("type-mismatch");we("user-invalid");we("valid");we("value-missing");const ka=class ka extends nr{constructor(){super(...arguments),this.initialValue="on",this._keydownPressed=!1,this.dirtyChecked=!1,this.elementInternals=this.attachInternals(),this._validationFallbackMessage="",this._value=this.initialValue}get checked(){return Q.track(this,"checked"),!!this._checked}set checked(e){this._checked=e,this.setFormValue(e?this.value:null),this.setValidity(),this.setAriaChecked(),Ii(this.elementInternals,"checked",e),Q.notify(this,"checked")}disabledChanged(e,t){this.disabled?this.removeAttribute("tabindex"):this.tabIndex=Number(this.getAttribute("tabindex")??0)<0?-1:0,this.elementInternals.ariaDisabled=this.disabled?"true":"false",Ii(this.elementInternals,"disabled",this.disabled)}disabledAttributeChanged(e,t){this.disabled=!!t}initialCheckedChanged(e,t){this.dirtyChecked||(this.checked=!!t)}initialValueChanged(e,t){this._value=t}requiredChanged(e,t){this.elementInternals&&(this.setValidity(),this.elementInternals.ariaRequired=this.required?"true":"false")}get form(){return this.elementInternals.form}get labels(){return Object.freeze(Array.from(this.elementInternals.labels))}get validationMessage(){if(this.elementInternals?.validationMessage)return this.elementInternals.validationMessage;if(!this._validationFallbackMessage){const e=document.createElement("input");e.type="checkbox",e.required=!0,e.checked=!1,this._validationFallbackMessage=e.validationMessage}return this._validationFallbackMessage}get validity(){return this.elementInternals.validity}get value(){return Q.track(this,"value"),this._value}set value(e){this._value=e,this.elementInternals&&(this.setFormValue(e),this.setValidity()),Q.notify(this,"value")}get willValidate(){return this.elementInternals.willValidate}checkValidity(){return this.elementInternals.checkValidity()}clickHandler(e){if(this.disabled)return;this.dirtyChecked=!0;const t=this.checked;return this.toggleChecked(),t!==this.checked&&(this.$emit("change"),this.$emit("input")),!0}connectedCallback(){super.connectedCallback(),this.disabled=!!this.disabledAttribute,this.setAriaChecked(),this.setValidity(),Ls(this)}inputHandler(e){return this.setFormValue(this.value),this.setValidity(),!0}keydownHandler(e){if(e.key!==" ")return!0;this._keydownPressed=!0}keyupHandler(e){if(!this._keydownPressed||e.key!==" ")return!0;this._keydownPressed=!1,this.click()}formResetCallback(){this.checked=this.initialChecked??!1,this.dirtyChecked=!1,this.setValidity()}reportValidity(){return this.elementInternals.reportValidity()}setAriaChecked(e=this.checked){this.elementInternals&&(this.elementInternals.ariaChecked=e?"true":"false")}setFormValue(e,t){this.elementInternals?.setFormValue(e,e??t)}setCustomValidity(e){this.elementInternals.setValidity({customError:!0},e),this.setValidity()}setValidity(e,t,i){if(this.elementInternals){if(this.disabled||!this.required){this.elementInternals.setValidity({});return}this.elementInternals.setValidity({valueMissing:!!this.required&&!this.checked,...e},t??this.validationMessage,i)}}toggleChecked(e=!this.checked){this.checked=e}};ka.formAssociated=!0;let Jt=ka;B([$],Jt.prototype,"disabled",void 0);B([S({attribute:"disabled",mode:"boolean"})],Jt.prototype,"disabledAttribute",void 0);B([S({attribute:"form"})],Jt.prototype,"formAttribute",void 0);B([S({attribute:"checked",mode:"boolean"})],Jt.prototype,"initialChecked",void 0);B([S({attribute:"value",mode:"fromView"})],Jt.prototype,"initialValue",void 0);B([S],Jt.prototype,"name",void 0);B([S({mode:"boolean"})],Jt.prototype,"required",void 0);class zs extends Jt{indeterminateChanged(e,t){this.setAriaChecked(),Ii(this.elementInternals,"indeterminate",t)}constructor(){super(),this.elementInternals.role="checkbox"}setAriaChecked(e=this.checked){if(this.indeterminate){this.elementInternals.ariaChecked="mixed";return}super.setAriaChecked(e)}toggleChecked(e=!this.checked){this.indeterminate=!1,super.toggleChecked(e)}}B([$],zs.prototype,"indeterminate",void 0);B([S],zs.prototype,"shape",void 0);B([S],zs.prototype,"size",void 0);function vh(r,e="-dialog"){return r?.nodeType!==Node.ELEMENT_NODE?!1:r.tagName.toLowerCase().endsWith(e)}`${yt.prefix}`;const xh={horizontal:"horizontal",vertical:"vertical"},wh={start:"start"},Sh={medium:"medium"},Oi={nonModal:"non-modal",modal:"modal",inline:"inline"},Ih=`${yt.prefix}-drawer`;class At extends nr{constructor(){super(...arguments),this.position=wh.start,this.size=Sh.medium,this.emitToggle=()=>{this.$emit("toggle",{oldState:this.dialog.open?"closed":"open",newState:this.dialog.open?"open":"closed"})},this.emitBeforeToggle=()=>{this.$emit("beforetoggle",{oldState:this.dialog.open?"open":"closed",newState:this.dialog.open?"closed":"open"})}}get dialogDescribedby(){if(this.dialog)return this.ariaDescribedby}get dialogLabel(){if(this.dialog)return this.ariaLabel}get dialogLabelledby(){if(this.dialog)return this.ariaLabelledby}get dialogModal(){if(this.dialog&&this.type===Oi.modal)return!0}get dialogRole(){return this.dialog&&this.type===Oi.modal?"dialog":this.role}connectedCallback(){super.connectedCallback(),Kt.enqueue(()=>{this.type=this.type??Oi.modal})}show(){Kt.enqueue(()=>{this.emitBeforeToggle(),this.type===Oi.inline||this.type===Oi.nonModal?this.dialog.show():this.dialog.showModal(),this.querySelector("[autofocus]")?.focus?.(),this.emitToggle()})}hide(){this.emitBeforeToggle(),this.dialog.close(),this.emitToggle()}clickHandler(e){return this.dialog.open&&e.target===this.dialog&&this.hide(),!0}cancelHandler(){this.hide()}}B([S],At.prototype,"type",void 0);B([S({attribute:"aria-labelledby"})],At.prototype,"ariaLabelledby",void 0);B([S({attribute:"aria-describedby"})],At.prototype,"ariaDescribedby",void 0);B([S],At.prototype,"position",void 0);B([$],At.prototype,"role",void 0);B([S({attribute:"size"})],At.prototype,"size",void 0);B([$],At.prototype,"dialog",void 0);B([fo],At.prototype,"dialogDescribedby",null);B([fo],At.prototype,"dialogLabel",null);B([fo],At.prototype,"dialogLabelledby",null);B([fo],At.prototype,"dialogModal",null);B([fo],At.prototype,"dialogRole",null);const kh=H`
  ${li("block")}

  :host {
    --dialog-backdrop: ${bl};
  }

  :host([type='non-modal']) dialog[open]::backdrop {
    display: none;
  }

  :host([type='non-modal']) dialog {
    position: fixed;
    top: 0;
    bottom: 0;
  }

  :host([type='inline']) {
    height: 100%;
    width: fit-content;
  }

  :host([type='inline']) dialog[open] {
    box-shadow: none;
    position: relative;
  }

  :host([size='small']) dialog {
    width: 320px;
    max-width: 320px;
  }

  :host([size='large']) dialog {
    width: 940px;
    max-width: 940px;
  }

  :host([size='full']) dialog {
    width: 100%;
    max-width: 100%;
  }

  :host([position='end']) dialog {
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  dialog {
    background: ${or};
    border-radius: 0;
    border: ${Ut} solid ${Et};
    border-inline-end-color: ${Et};
    border-inline-start-color: var(--drawer-separator, ${Et});
    box-shadow: ${Qp};
    box-sizing: border-box;
    color: ${qt};
    font-family: ${ee};
    font-size: ${mt};
    font-weight: ${nt};
    height: 100%;
    line-height: ${bt};
    margin-inline-end: auto;
    margin-inline-start: 0;
    max-height: 100vh;
    max-width: calc(100vw - ${rh});
    outline: none;
    padding: 0;
    bottom: 0;
    top: 0;
    width: var(--drawer-width, 592px);
    z-index: var(--drawer-elevation, 1000);
  }

  dialog::backdrop {
    background: var(--dialog-backdrop);
  }

  @layer animations {
    /* Disable animations for reduced motion */
    @media (prefers-reduced-motion: no-preference) {
      dialog {
        transition: display allow-discrete, opacity, overlay allow-discrete, transform;
        transition-duration: ${vl};
        transition-timing-function: ${gs};
      }

      /* Exit styles for dialog */
      :host dialog:not([open]) {
        transform: translateX(-100%);
        transition-timing-function: ${fs};
      }
      :host([position='end']) dialog:not([open]) {
        transform: translateX(100%);
        transition-timing-function: ${fs};
      }

      dialog[open] {
        transform: translateX(0);
      }

      dialog::backdrop {
        transition: display allow-discrete, opacity, overlay allow-discrete, scale;
        transition-duration: ${vl};
        transition-timing-function: ${gs};
        background: var(--dialog-backdrop, ${bl});
        opacity: 0;
      }

      dialog[open]::backdrop {
        opacity: 1;
      }

      dialog::backdrop {
        transition-timing-function: ${ch};
      }
    }

    @starting-style {
      dialog[open] {
        transform: translateX(-100%);
      }
      :host([position='end']) dialog[open] {
        transform: translateX(100%);
      }
      dialog[open]::backdrop {
        opacity: 0;
      }
    }
  }
`;function $h(){return ie`
    <dialog
      class="dialog"
      part="dialog"
      aria-describedby="${r=>r.dialogDescribedby}"
      aria-labelledby="${r=>r.dialogLabelledby}"
      aria-label="${r=>r.dialogLabel}"
      aria-modal="${r=>r.dialogModal}"
      role="${r=>r.dialogRole}"
      size="${r=>r.size}"
      position="${r=>r.position}"
      @click="${(r,e)=>r.clickHandler(e.event)}"
      @cancel="${r=>r.cancelHandler()}"
      ${te("dialog")}
    >
      <slot></slot>
    </dialog>
  `}const Ph=$h(),Ch={name:Ih,registry:yt.registry,styles:kh,template:Ph};class Eh extends nr{clickHandler(e){if(!e.defaultPrevented){const t=this.parentElement;vh(t,"-drawer")&&t.hide()}return!0}}const Ah=`${yt.prefix}-drawer-body`;H.partial`
  font-family: ${ee};
  font-size: ${mt};
  line-height: ${bt};
  font-weight: ${nt};
`;H.partial`
  font-family: ${ee};
  font-size: ${mt};
  line-height: ${bt};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${mt};
  line-height: ${bt};
  font-weight: ${Ci};
`;H.partial`
  font-family: ${ee};
  font-size: ${Ot};
  line-height: ${ar};
  font-weight: ${nt};
`;H.partial`
  font-family: ${ee};
  font-size: ${Rt};
  line-height: ${Zt};
  font-weight: ${nt};
`;H.partial`
  font-family: ${ee};
  font-size: ${Rt};
  line-height: ${Zt};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${Rt};
  line-height: ${Zt};
  font-weight: ${Ci};
`;H.partial`
  font-family: ${ee};
  font-size: ${vo};
  line-height: ${xo};
  font-weight: ${nt};
`;H.partial`
  font-family: ${ee};
  font-size: ${vo};
  line-height: ${xo};
  font-weight: ${Ae};
`;const Nh=H.partial`
  font-family: ${ee};
  font-size: ${no};
  line-height: ${la};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${Ot};
  line-height: ${ar};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${Ot};
  line-height: ${ar};
  font-weight: ${Ci};
`;H.partial`
  font-family: ${ee};
  font-size: ${ed};
  line-height: ${sd};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${Qc};
  line-height: ${od};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${aa};
  line-height: ${id};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${td};
  line-height: ${nd};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${rd};
  line-height: ${ad};
  font-weight: ${Ae};
`;const Lh=H`
  ${li("grid")}
  :host {
    box-sizing: border-box;
    grid-template-rows: min-content auto min-content;
    position: relative;
    height: 100%;
    padding: ${th};
    max-height: 100svh;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${Nh}
  }

  .footer {
    display: flex;
    justify-content: flex-start;
    gap: ${Ei};
  }

  ::slotted([slot='title']) {
    font: inherit;
    padding: 0;
    margin: 0;
  }
`;function zh(){return ie`
    <div class="header" part="header">
      <slot name="title"></slot>
      <slot name="close" @click="${(r,e)=>r.clickHandler(e.event)}"></slot>
    </div>
    <div class="content" part="content">
      <slot></slot>
    </div>
    <div class="footer" part="footer">
      <slot name="footer"></slot>
    </div>
  `}const _h=zh(),Gh={name:Ah,registry:yt.registry,styles:Lh,template:_h};let Rh=0;function ha(r="id-"){const e=`${r}${Rh++}`;return document.getElementById(e)?ha(r):e}var Fi={AUTHOR_TABINDEX:"data-fg-ati"},Oh={NONE:"none"};function Zs(r,e){return r.contains(e)}function Fh(){return"focusgroup"in(globalThis?.HTMLElement?.prototype??{})||"focusGroup"in(globalThis?.HTMLElement?.prototype??{})}function Mh(r,e,t){const i="forward",o="backward",s="block",n="inline";if(Th(r.composedPath()[0]))return r.key==="Tab"?r.shiftKey?o:i:null;if(r.shiftKey||r.ctrlKey||r.metaKey)return null;const{writingMode:a,direction:c}=window.getComputedStyle(e),l=!a.startsWith("horizontal-"),d=c==="rtl",u=l?s:n,p=l?n:s,h=l?a.endsWith("-rl")!==d:d,f=l&&d,g={ArrowUp:{axis:p,dir:f?i:o},ArrowDown:{axis:p,dir:f?o:i},ArrowLeft:{axis:u,dir:h?i:o},ArrowRight:{axis:u,dir:h?o:i},Home:{dir:"start"},End:{dir:"end"}}[r.key];return!g||t&&g.axis&&g.axis!==t?null:g.dir}function Th(r){return r?.nodeType===Node.ELEMENT_NODE&&(["INPUT","TEXTAREA","SELECT"].includes(r.nodeName)&&!["checkbox","radio"].includes(r.getAttribute("type"))||r.isContentEditable||["AUDIO","VIDEO"].includes(r.nodeName)&&r.hasAttribute("controls")||["IFRAME","OBJECT"].includes(r.nodeName))}globalThis.__FOCUSGROUP_POLYFILL__??={o:new Set,b:!1};var Bh=globalThis.__FOCUSGROUP_POLYFILL__,Dh=Bh.o;function Js(){for(const r of Dh)r.takeRecords()}var Vh=class{#e;#t;#r=null;#o=void 0;#s=!1;#u=!0;#a;#n=null;#i=!1;#c=null;#d=new AbortController;#g;#l;constructor(r,e,t={}){if(Fh()||!r)return;this.#e=r,this.#t=e,this.#g=t.decorateOwner,this.#l=t.decorateItem,this.#h(t.definition),this.#g?.(this.#e,this.#r),this.#m();const i={signal:this.#d.signal};this.#e.addEventListener("keydown",this.#f.bind(this),i),this.#e.addEventListener("focusin",this.#b.bind(this),i),this.#e.addEventListener("focusout",this.#y.bind(this),i)}disconnect(){this.#S(),this.#d.abort(),this.#t?.disconnect?.(),this.#e=null}update(r={}){if(this.#e){if(r.definition!==void 0&&(this.#h(r.definition),this.#g?.(this.#e,this.#r)),r.authorTabindexChanges)for(const e of r.authorTabindexChanges)e.setAttribute(Fi.AUTHOR_TABINDEX,e.getAttribute("tabindex")??"none");this.#p(),this.#m()}}#h(r){this.#r=r?.behavior??null,this.#s=r?.wrap??!1,this.#o=r?.axis,this.#u=r?.memory??!0,this.#u||(this.#n=null)}#m(){if(!this.#r||this.#r===Oh.NONE){this.#p();return}this.#t.decorate?.();for(const{element:e,segmentBoundary:t}of this.#t.items())this.#l?.(e,this.#r),e.setAttribute(Fi.AUTHOR_TABINDEX,e.getAttribute("tabindex")??"none"),e.tabIndex=t?0:-1;(!this.#n?.isConnected||!(this.#t.isItem?.(this.#n)??this.#t.contains(this.#n)))&&(this.#n=null);const r=this.#n??this.#t.start??this.#t.first?.()??null;r&&(r.tabIndex=0,this.#a=r,this.#S(),this.#v(r)),this.#t.flush?.()}#p(){this.#S();let r=!1;for(const{element:e}of this.#t.items()){r=!0,this.#l?.(e,null);const t=e.getAttribute(Fi.AUTHOR_TABINDEX);t&&(t==="none"?e.removeAttribute("tabindex"):e.setAttribute("tabindex",t),e.removeAttribute(Fi.AUTHOR_TABINDEX))}this.#t.undecorate?.(),r&&this.#t.flush?.()}#f(r){const e=r.composedPath()[0];if(r.defaultPrevented||e===this.#e||!this.#t.contains(e))return;let t;switch(Mh(r,e,this.#o)){case"start":t=this.#t.first();break;case"end":t=this.#t.last();break;case"forward":t=this.#t.next(e),!t&&this.#s&&(t=this.#t.first());break;case"backward":t=this.#t.previous(e),!t&&this.#s&&(t=this.#t.last());break}t&&t!==e&&(this.#I(e,t,!0),this.#n=t,r.preventDefault())}#b(r){const e=r.composedPath()[0];if(e===this.#e&&this.#i&&(!r.relatedTarget||!Zs(this.#e,r.relatedTarget))){const i=this.#n||this.#a;this.#S(),i&&i.focus(),r.stopPropagation();return}if(!this.#t.contains(e))return;this.#i&&this.#S();const t=this.#n;if(this.#n=e,t!==e&&e.tabIndex<0){const i=t??this.#a;i&&this.#I(i,e)}}#y(r){if(!r.relatedTarget||!Zs(this.#e,r.relatedTarget)){const i=this.#u?this.#n||this.#a:this.#a;i&&this.#v(i)}if(r.relatedTarget&&Zs(this.#e,r.relatedTarget)||this.#u||!this.#a)return;const e=this.#n;this.#n=null;const t=this.#t.start??this.#t.first?.()??null;if(e!==this.#a||t!==this.#a){for(const{element:i,segmentBoundary:o}of this.#t.items())i.tabIndex=o?0:-1;t&&(t.tabIndex=0,this.#a=t),this.#t.flush?.()}}#v(r){const e=(r.assignedSlot??r).getRootNode(),t=e instanceof ShadowRoot&&e.host.hasAttribute(Fi.AUTHOR_TABINDEX);this.#i||!t||(this.#c=this.#e.getAttribute("tabindex"),this.#e.tabIndex=0,this.#i=!0,Js())}#S(){this.#i&&(this.#c!==null?this.#e.setAttribute("tabindex",this.#c):this.#e.removeAttribute("tabindex"),this.#i=!1,this.#c=null,this.#t.flush?.(),Js())}#I(r,e,t=!1){e.tabIndex=0,t&&e.focus(),r.tabIndex=this.#t.sameSegment?.(r,e)??!0?-1:0,this.#S(),Js()}};class Hh{constructor(e,t){this.getItems=e,this.getStart=t}get start(){return this.getStart?.()??null}first(){return this.getItems()[0]??null}last(){const e=this.getItems();return e[e.length-1]??null}next(e){const t=this.getItems(),i=t.indexOf(e);return i===-1?null:t[i+1]??null}previous(e){const t=this.getItems(),i=t.indexOf(e);return i<=0?null:t[i-1]??null}*items(){for(const e of this.getItems())yield{element:e}}contains(e){return this.getItems().includes(e)}}const Xh=`${yt.prefix}-switch`,Uh=H`
  ${li("inline-flex")}

  :host {
    box-sizing: border-box;
    align-items: center;
    flex-direction: row;
    outline: none;
    user-select: none;
    contain: content;
    padding: 0 ${rr};
    width: 40px;
    height: 20px;
    background-color: ${Gt};
    border: 1px solid ${ei};
    border-radius: ${ii};
  }

  :host(:enabled) {
    cursor: pointer;
  }

  :host(:hover) {
    background: none;
    border-color: ${ds};
  }
  :host(:active) {
    border-color: ${io};
  }
  :host(${Ht}),
  :host([readonly]) {
    border: 1px solid ${Or};
    background-color: none;
    pointer: default;
  }
  :host(${rt}) {
    background: ${yl};
    border-color: ${yl};
  }
  :host(${rt}:hover) {
    background: ${Pn};
    border-color: ${Pn};
  }
  :host(${rt}:active) {
    background: ${Cn};
    border-color: ${Cn};
  }
  :host(${rt}${Ht}) {
    background: ${Es};
    border-color: ${Or};
  }
  .checked-indicator {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    margin-inline-start: 0;
    background-color: ${xr};
    transition-duration: ${Ns};
    transition-timing-function: ${pa};
    transition-property: margin-inline-start;
  }
  :host(${rt}) .checked-indicator {
    background-color: ${oa};
    margin-inline-start: calc(100% - 14px);
  }
  :host(${rt}:hover) .checked-indicator {
    background: ${bp};
  }
  :host(${rt}:active) .checked-indicator {
    background: ${yp};
  }
  :host(:hover) .checked-indicator {
    background-color: ${fp};
  }
  :host(:active) .checked-indicator {
    background-color: ${gp};
  }
  :host(${Ht}) .checked-indicator,
  :host([readonly]) .checked-indicator {
    background: ${Ue};
  }
  :host(${rt}${Ht}) .checked-indicator {
    background: ${Ue};
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:not([slot='input']):focus-visible) {
    border-color: ${Et};
    outline: ${ua} solid ${Et};
    outline-offset: 1px;
    box-shadow: ${da}, 0 0 0 2px ${so};
  }

  @media (forced-colors: active) {
    :host {
      border-color: InactiveBorder;
    }
    :host(${rt}),
    :host(${rt}:active),
    :host(${rt}:hover) {
      background: Highlight;
      border-color: Highlight;
    }
    .checked-indicator,
    :host(:hover) .checked-indicator,
    :host(:active) .checked-indicator {
      background-color: ActiveCaption;
    }
    :host(${rt}) .checked-indicator,
    :host(${rt}:hover) .checked-indicator,
    :host(${rt}:active) .checked-indicator {
      background-color: ButtonFace;
    }
    :host(${Ht}) .checked-indicator,
    :host(${rt}${Ht}) .checked-indicator {
      background-color: GrayText;
    }
  }
`;function jh(r={}){return ie`
    <template
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @input="${(e,t)=>e.inputHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
      @keyup="${(e,t)=>e.keyupHandler(t.event)}"
    >
      <slot name="switch">${Qn(r.switch)}</slot>
    </template>
  `}const Yh=jh({switch:'<span class="checked-indicator" part="checked-indicator"></span>'}),qh={name:Xh,registry:yt.registry,styles:Uh,template:Yh};class Kh extends Jt{constructor(){super(),this.elementInternals.role="switch"}}function Sl(r,e="-tab"){return r?.nodeType!==Node.ELEMENT_NODE?!1:r.tagName.toLowerCase().endsWith(e)}const Wh=`${yt.prefix}-tab`,Zh=H`
  ${li("inline-flex")}

  :host {
    position: relative;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    justify-content: center;
    line-height: ${bt};
    font-family: ${ee};
    font-size: ${mt};
    color: ${ls};
    fill: currentcolor;
    grid-row: 1;
    padding: ${Ei} ${Zr};
    border-radius: ${pt};
    gap: 4px;
  }

  :host .tab-content {
    display: inline-flex;
    flex-direction: column;
    padding: 0 2px;
    grid-column: 3;
  }

  :host([aria-selected='true']) {
    color: ${qt};
    font-weight: ${Ae};
  }

  /* adds hidden textContent to prevent shifting ui on bold / unbolding of text */
  :host .tab-content::after {
    content: var(--textContent);
    visibility: hidden;
    height: 0;
    line-height: ${bt};
    font-weight: ${Ae};
  }

  :host([aria-selected='true'])::after {
    background-color: ${As};
    border-radius: ${ii};
    content: '';
    inset: 0;
    position: absolute;
    z-index: 2;
  }

  :host([aria-selected='false']:hover)::after {
    background-color: ${us};
    border-radius: ${ii};
    content: '';
    inset: 0;
    position: absolute;
    z-index: 1;
  }

  /*
   * TODO: Remove '(text-size-adjust: auto)' after this bug is fixed:
   * https://bugs.webkit.org/show_bug.cgi?id=298646
   * Also remove the same trick from tablist.styles.ts.
   * Using '@supports (text-size-adjust: auto)' here to exclude Safari 26 from
   * using CSS Anchor Positioning here because it crashes.
   */
  @supports (anchor-name: --a) and (text-size-adjust: auto) {
    :host([aria-selected='true'])::after {
      background-color: transparent;
    }

    :host([aria-selected='true']:hover)::after {
      background-color: ${us};
    }
  }

  :host([aria-selected='true'][disabled])::after {
    background-color: ${Ue};
  }

  ::slotted([slot='start']) {
    grid-column: 2;
  }

  ::slotted([slot='end']) {
    grid-column: -1;
  }

  ::slotted([slot='start']),
  ::slotted([slot='end']) {
    display: flex;
  }
  :host([disabled]) {
    cursor: not-allowed;
    fill: ${Ue};
    color: ${Ue};
    pointer-events: none;
  }

  :host([disabled]:hover)::after {
    background-color: unset;
  }

  :host(:focus) {
    outline: none;
  }

  :host(:focus-visible) {
    border-radius: ${na};
    box-shadow: 0 0 0 3px ${so};
    outline: 1px solid ${zp};
  }

  @media (forced-colors: active) {
    :host([aria-selected='true'])::after {
      background-color: Highlight;
    }
  }
`;function Jh(r={}){return ie`
    <template slot="tab" role="tab">
      ${ra(r)}
      <span class="tab-content"><slot></slot></span>
      ${ta(r)}
    </template>
  `}const Qh=Jh({}),pd={name:Wh,registry:yt.registry,styles:Zh,template:Qh};class _s extends nr{disabledChanged(e,t){this.setDisabledSideEffect(t)}constructor(){super(),this.elementInternals=this.attachInternals(),this.elementInternals.role="tab"}connectedCallback(){super.connectedCallback(),this.slot||="tab",this.setDisabledSideEffect(this.disabled),this.styles&&this.$fastController.removeStyles(this.styles),this.styles=H`
      :host {
        --textContent: '${this.textContent}';
      }
    `,this.$fastController.addStyles(this.styles),Ls(this)}setDisabledSideEffect(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"),this.tabIndex=e&&this.getAttribute("aria-selected")!=="true"?-1:0}}B([S({mode:"boolean"})],_s.prototype,"disabled",void 0);ia(_s,ea);const ef={transparent:"transparent"},Co=xh,tf=`${yt.prefix}-tablist`,rf=H`
  ${li("flex")}

  :host {
    --tabPaddingInline: ${Zr};
    --tabPaddingBlock: ${Ei};
    --tabIndicatorInsetInline: var(--tabPaddingInline);
    --tabIndicatorInsetBlock: 0;
    box-sizing: border-box;
    color: ${ls};
    flex-direction: row;
    position: relative;
  }

  :host([size='small']) {
    --tabPaddingBlock: ${En};
    --tabPaddingInline: ${wo};
  }

  :host([size='large']) {
    --tabPaddingBlock: ${sh};
    --tabPaddingInline: ${Zr};
  }

  :host([orientation='vertical']) {
    --tabPaddingBlock: ${Ko};
    --tabIndicatorInsetBlock: ${Ko};
    --_col-start-width: 0px;
    display: grid;
    grid-template-columns: ${Zr} var(--_col-start-width) 1fr auto ${Zr};
  }

  :host(:has([slot='start'])) {
    --_col-start-width: 24px;
  }

  @scope {
    :scope:has([slot='start']) {
      --_col-start-width: 24px;
    }
  }

  :host([orientation='vertical'][size='small']) {
    --tabPaddingBlock: ${ih};
    --tabIndicatorInsetBlock: ${En};
  }

  :host([orientation='vertical'][size='large']) {
    --tabPaddingBlock: ${Ko};
    --tabIndicatorInsetBlock: ${oh};
  }

  ::slotted([slot='tab']) {
    padding-inline: var(--tabPaddingInline);
    padding-block: var(--tabPaddingBlock);
  }

  :host([orientation='vertical']) ::slotted([role='tab']) {
    justify-content: flex-start;
    display: grid;
    gap: 0;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    grid-row: unset;
    padding-inline: 0;
  }

  :host ::slotted([slot='tab'])::after {
    height: ${Ur};
    margin-block-start: auto;
  }

  :host([orientation='vertical']) ::slotted([slot='tab'])::after {
    width: ${Ur};
    height: unset;
    margin-block-start: unset;
  }

  /* ::before adds a secondary indicator placeholder that appears right after click on the active tab */
  :host ::slotted([slot='tab'])::before {
    height: ${Ur};
    border-radius: ${ii};
    content: '';
    inset-inline: var(--tabIndicatorInsetInline);
    inset-block: var(--tabIndicatorInsetBlock);
    position: absolute;
    margin-top: auto;
  }

  :host ::slotted([slot='tab'])::before {
    inset-inline: var(--tabIndicatorInsetInline);
    inset-block: var(--tabIndicatorInsetBlock);
  }

  :host ::slotted([slot='tab'][aria-selected='true'])::before {
    background-color: ${Ue};
  }

  :host ::slotted([slot='tab'][aria-selected='false']:hover)::after {
    height: ${Ur};
    margin-block-start: auto;
    transform-origin: left;
  }

  :host([orientation='vertical']) ::slotted([slot='tab'])::before,
  :host([orientation='vertical']) ::slotted([slot='tab'][aria-selected='false']:hover)::after {
    height: unset;
    width: ${Ur};
    margin-inline-end: auto;
    transform-origin: top;
  }

  :host([size='small']) ::slotted([slot='tab']) {
    font-size: ${mt};
    line-height: ${bt};
  }

  :host([size='large']) ::slotted([slot='tab']) {
    font-size: ${Ot};
    line-height: ${ar};
  }

  /* horizontal spacing for indicator */
  :host ::slotted([slot='tab'])::after,
  :host ::slotted([slot='tab'])::before,
  :host ::slotted([slot='tab']:hover)::after {
    inset-inline: var(--tabIndicatorInsetInline);
  }

  :host([orientation='vertical']) ::slotted([slot='tab'])::after,
  :host([orientation='vertical']) ::slotted([slot='tab'])::before,
  :host([orientation='vertical']) ::slotted([slot='tab']:hover)::after {
    inset-inline: 0;
    inset-block: var(--tabIndicatorInsetBlock);
  }

  /* disabled styles */
  :host([disabled]) {
    cursor: not-allowed;
    color: ${Ue};
  }

  :host([disabled]) ::slotted([slot='tab']) {
    pointer-events: none;
    cursor: not-allowed;
    color: ${Ue};
  }

  :host([disabled]) ::slotted([slot='tab']:after) {
    background-color: ${Ue};
  }

  :host([disabled]) ::slotted([slot='tab'][aria-selected='true'])::after {
    background-color: ${Ue};
  }

  :host([disabled]) ::slotted([slot='tab']:hover):before {
    content: unset;
  }

  :host([appearance='subtle']) ::slotted([slot='tab']:hover) {
    background-color: ${Yc};
    color: ${Hc};
    fill: ${mp};
  }

  :host([appearance='subtle']) ::slotted([slot='tab']:active) {
    background-color: ${$n};
    fill: ${$n};
    color: ${qt};
  }

  /*
   * TODO: Remove '(text-size-adjust: auto)' after this bug is fixed:
   * https://bugs.webkit.org/show_bug.cgi?id=298646
   * Also remove the same trick from tab.styles.ts.
   * Using '@supports (text-size-adjust: auto)' here to exclude Safari 26.0 from
   * using CSS Anchor Positioning here because it crashes.
   */
  @supports (anchor-name: --a) and (text-size-adjust: auto) {
    ::slotted([slot='tab'][aria-selected='true']) {
      anchor-name: --tab;
    }

    :host::after {
      background-color: ${As};
      content: '';
      inline-size: 100%;
      inset-block: auto anchor(end);
      inset-inline: anchor(center) auto;
      position: fixed;
      position-anchor: --tab;
      transform: translateX(-50%);
      transition-property: inset-inline, width;
      transition-duration: ${ah};
      transition-timing-function: ${lh};
      z-index: 3;

      /* These styles should be in sync with tab.styles.ts’s :host::after */
      border-radius: ${ii};
      width: calc(anchor-size() - var(--tabIndicatorInsetInline) * 2);
      height: ${Ur};
    }

    :host(:dir(rtl))::after {
      transform: translateX(50%);
    }

    :host([orientation='vertical'])::after {
      inset-block: anchor(center) auto;
      inset-inline: anchor(start) auto;
      transform: translateY(-50%);
      transition-property: inset-block, height;

      /* These styles should be in sync with #vertical-tab-highlight above */
      width: ${Ur};
      height: calc(anchor-size() - var(--tabIndicatorInsetBlock) * 2);
    }

    :host([disabled])::after {
      background-color: ${Ue};
    }
  }
`,of=ie`
  <template
    role="tablist"
    focusgroup="tablist inline block"
    @click="${(r,e)=>r.handleClick(e.event)}"
    @focusin="${(r,e)=>r.handleFocusIn(e.event)}"
  >
    <slot name="tab" ${yo("slottedTabs")}></slot>
  </template>
`,hd={name:tf,registry:yt.registry,styles:rf,template:of};class Ni extends nr{disabledChanged(e,t){this.elementInternals&&Ii(this.elementInternals,"disabled",t),this.setTabs({forceDisabled:!0})}orientationChanged(e,t){this.elementInternals&&(this.elementInternals.ariaOrientation=t??Co.horizontal,yh(this.elementInternals,e,t,Co)),this.setTabs()}activeidChanged(e,t){this.tabs?.length>0&&this.changeTab(e,t)}slottedTabsChanged(e,t){this.tabs=t?.filter(i=>Sl(i))??[]}tabsChanged(e,t){this.tabs?.length>0&&this.setTabs({connectToPanel:!0})}setTabs({connectToPanel:e=!1,forceDisabled:t=!1}={}){if(!this.tabs)return;const i=this.getRootNode();let o="";for(const s of this.tabs){if(s.slot!=="tab")continue;s.id||=ha("tab-"),t?s.disabled=this.disabled:s.disabled=s.disabled||this.disabled,!o&&!s.disabled&&(o=s.id);const n=this.activeid===s.id;if(s.toggleAttribute("focusgroupstart",n),s.setAttribute("aria-selected",n.toString()),e){const a=s.getAttribute("aria-controls")??"",c=i.getElementById(a);a&&c&&(c.role??="tabpanel",c.hidden=this.activeid!==s.id,this.tabPanelMap.set(s,c))}}this.disabled||(this.activeid?this.changeTab(void 0,this.activeid):o&&(this.activeid=o))}handleFocusIn(e){this.activeid=e.target.id}handleClick(e){e.isTrusted||(this.activeid=e.target.id)}changeTab(e,t){const i=this.getRootNode(),o=e?i.getElementById(e):null,s=i.getElementById(t);if(!Sl(s)||s.disabled||!this.contains(s))return;if(o){o.setAttribute("aria-selected","false");const a=this.tabPanelMap.get(o);a&&(a.hidden=!0)}s.setAttribute("aria-selected","true");const n=this.tabPanelMap.get(s);n&&(n.hidden=!1),this.activetab=s,this.change()}constructor(){super(),this.elementInternals=this.attachInternals(),this.disabled=!1,this.orientation=Co.horizontal,this.tabs=[],this.tabPanelMap=new WeakMap,this.change=()=>{this.$emit("change",this.activetab)},this.elementInternals.role="tablist",this.elementInternals.ariaOrientation=this.orientation??Co.horizontal}connectedCallback(){super.connectedCallback(),dh(this,()=>{this.setTabs()},{})}}B([S({mode:"boolean"})],Ni.prototype,"disabled",void 0);B([S],Ni.prototype,"orientation",void 0);B([S],Ni.prototype,"activeid",void 0);B([$],Ni.prototype,"slottedTabs",void 0);B([$],Ni.prototype,"tabs",void 0);class Gs extends Ni{constructor(){super(...arguments),this.appearance=ef.transparent}disconnectedCallback(){this.fg?.disconnect(),super.disconnectedCallback()}tabsChanged(e,t){super.tabsChanged(e,t),this.fgItems??=new Hh(()=>this.tabs?.filter(i=>(i.getAttribute("aria-selected")==="true"||!i.disabled)&&!i.hidden)??[],()=>this.activetab??null),this.fg?this.fg.update():this.fg=new Vh(this,this.fgItems,{definition:{behavior:"tablist",axis:void 0,memory:!1,wrap:!0}})}}B([S],Gs.prototype,"appearance",void 0);B([S],Gs.prototype,"size",void 0);const sf={text:"text"},nf=["date","datetime-local","email","month","number","password","search","tel","text","time","url","week"];`${yt.prefix}`;const af=H`
  ${li("block")}

  :host {
    font-family: ${ee};
    font-size: ${mt};
    font-weight: ${nt};
    line-height: ${bt};
    max-width: 400px;
  }
  .label {
    display: flex;
    color: ${qt};
    padding-bottom: ${cd};
    flex-shrink: 0;
    padding-inline-end: ${ao};
  }

  .label[hidden],
  :host(:empty) .label {
    display: none;
  }

  .root {
    align-items: center;
    background-color: ${or};
    border: ${Ut} solid ${oo};
    border-bottom-color: ${ei};
    border-radius: ${pt};
    box-sizing: border-box;
    height: 32px;
    display: inline-flex;
    flex-direction: row;
    gap: ${rr};
    padding: 0 ${Zr};
    position: relative;
    width: 100%;
  }

  :has(.control:user-invalid) {
    border-color: ${Op};
  }

  .root::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: -1px;
    bottom: 0px;
    right: -1px;
    height: max(2px, ${pt});
    border-radius: 0 0 ${pt} ${pt};
    border-bottom: 2px solid ${As};
    clip-path: inset(calc(100% - 2px) 1px 0px);
    transform: scaleX(0);
    transition-property: transform;
    transition-duration: ${dd};
    transition-delay: ${fs};
  }
  .control {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: ${qt};
    border-radius: ${pt};
    background: ${Gt};
    font-family: ${ee};
    font-weight: ${nt};
    font-size: ${mt};
    border: none;
    vertical-align: center;
  }
  .control:focus-visible {
    outline: 0;
    border: 0;
  }
  .control::placeholder {
    color: ${Xc};
  }
  :host ::slotted([slot='start']),
  :host ::slotted([slot='end']) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${xr};
    font-size: ${no};
  }
  :host ::slotted([slot='start']) {
    padding-right: ${rr};
  }
  :host ::slotted([slot='end']) {
    padding-left: ${rr};
    gap: ${ao};
  }
  :host(:hover) .root {
    border-color: ${us};
    border-bottom-color: ${ds};
  }
  :host(:active) .root {
    border-color: ${Kc};
  }
  :host(:focus-within) .root {
    outline: transparent solid 2px;
    border-bottom: 0;
  }
  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${Ns};
    transition-delay: ${gs};
  }
  :host(:focus-within:active) .root:after {
    border-bottom-color: ${Wc};
  }
  :host([appearance='outline']:focus-within) .root {
    border: ${Ut} solid ${oo};
  }
  :host(:focus-within) .control {
    color: ${qt};
  }
  :host(${Ht}) .root {
    background: ${Gt};
    border: ${Ut} solid ${Or};
  }
  :host(${Ht}) .control::placeholder,
  :host(${Ht}) ::slotted([slot='start']),
  :host(${Ht}) ::slotted([slot='end']) {
    color: ${Ue};
  }
  ::selection {
    color: ${oa};
    background-color: ${$p};
  }
  :host([control-size='small']) .control {
    font-size: ${Rt};
    font-weight: ${nt};
    line-height: ${Zt};
  }
  :host([control-size='small']) .root {
    height: 24px;
    gap: ${rr};
    padding: 0 ${wo};
  }
  :host([control-size='small']) ::slotted([slot='start']),
  :host([control-size='small']) ::slotted([slot='end']) {
    font-size: ${Ot};
  }
  :host([control-size='large']) .control {
    font-size: ${Ot};
    font-weight: ${nt};
    line-height: ${ar};
  }
  :host([control-size='large']) .root {
    height: 40px;
    gap: ${ld};
    padding: 0 ${Ei};
  }
  :host([control-size='large']) ::slotted([slot='start']),
  :host([control-size='large']) ::slotted([slot='end']) {
    font-size: ${aa};
  }
  :host([appearance='underline']) .root {
    background: ${Gt};
    border: 0;
    border-radius: 0;
    border-bottom: ${Ut} solid ${ei};
  }
  :host([appearance='underline']:hover) .root {
    border-bottom-color: ${ds};
  }
  :host([appearance='underline']:active) .root {
    border-bottom-color: ${io};
  }
  :host([appearance='underline']:focus-within) .root {
    border: 0;
    border-bottom-color: ${io};
  }
  :host([appearance='underline']${Ht}) .root {
    border-bottom-color: ${Or};
  }
  :host([appearance='filled-lighter']) .root,
  :host([appearance='filled-darker']) .root {
    border: ${Ut} solid ${Et};
    box-shadow: ${ca};
  }
  :host([appearance='filled-lighter']) .root {
    background: ${or};
  }
  :host([appearance='filled-darker']) .root {
    background: ${cs};
  }
  :host([appearance='filled-lighter']:hover) .root,
  :host([appearance='filled-darker']:hover) .root {
    border-color: ${hs};
  }
  :host([appearance='filled-lighter']:active) .root,
  :host([appearance='filled-darker']:active) .root {
    border-color: ${hs};
    background: ${cs};
  }
`,$a=class $a extends nr{constructor(){super(...arguments),this.type=sf.text,this.dirtyValue=!1,this.elementInternals=this.attachInternals()}currentValueChanged(e,t){this.value=t}defaultSlottedNodesChanged(e,t){Kt.enqueue(()=>{this.controlLabel&&(this.controlLabel.hidden=!t?.some(i=>i.nodeType===Node.ELEMENT_NODE||i.nodeType===Node.TEXT_NODE&&!!i.textContent?.trim()))})}initialValueChanged(){this.dirtyValue||(this.value=this.initialValue)}readOnlyChanged(){this.$fastController.isConnected&&(this.elementInternals.ariaReadOnly=`${!!this.readOnly}`)}requiredChanged(e,t){this.$fastController.isConnected&&(this.elementInternals.ariaRequired=`${!!t}`)}controlChanged(e,t){Kt.enqueue(()=>{this.$fastController.isConnected&&this.setValidity()})}get validity(){return this.elementInternals.validity}get validationMessage(){return this.elementInternals.validationMessage||this.control.validationMessage}get value(){return Q.track(this,"value"),this.currentValue}set value(e){this.currentValue=e,this.elementInternals&&this.control&&(this.control.value=e??"",this.setFormValue(e),this.setValidity(),Q.notify(this,"value"))}get willValidate(){return this.elementInternals.willValidate}get form(){return this.elementInternals.form}changeHandler(e){return this.setValidity(),this.$emit("change",e,{bubbles:!0,composed:!0}),!0}checkValidity(){return this.elementInternals.checkValidity()}clickHandler(e){return e.target===this&&this.control?.click(),!0}connectedCallback(){super.connectedCallback(),this.setFormValue(this.value),this.setValidity(),Ls(this)}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}implicitSubmit(){if(!this.elementInternals.form)return;if(this.elementInternals.form.elements.length===1){this.elementInternals.form.requestSubmit();return}const e=[...this.elementInternals.form.elements],t=e.find(o=>o.getAttribute("type")==="submit");if(t){t.click();return}e.filter(o=>nf.includes(o.getAttribute("type")??"")).length>1||this.elementInternals.form.requestSubmit()}inputHandler(e){return this.dirtyValue=!0,this.value=this.control.value,!0}keydownHandler(e){return e.key==="Enter"&&this.implicitSubmit(),!0}select(){this.control.select(),this.$emit("select")}setCustomValidity(e){this.elementInternals.setValidity({customError:!0},e),this.reportValidity()}reportValidity(){return this.elementInternals.reportValidity()}setFormValue(e,t){this.elementInternals?.setFormValue(e,e??t)}setValidity(e,t,i){if(this.elementInternals&&this.control){if(this.disabled){this.elementInternals.setValidity({});return}this.elementInternals.setValidity(e??this.control.validity,t??this.validationMessage,i??this.control)}}};$a.formAssociated=!0;let Ne=$a;B([S],Ne.prototype,"autocomplete",void 0);B([S({attribute:"current-value"})],Ne.prototype,"currentValue",void 0);B([$],Ne.prototype,"defaultSlottedNodes",void 0);B([S],Ne.prototype,"dirname",void 0);B([S({mode:"boolean"})],Ne.prototype,"disabled",void 0);B([S({attribute:"form"})],Ne.prototype,"formAttribute",void 0);B([S({attribute:"value",mode:"fromView"})],Ne.prototype,"initialValue",void 0);B([S],Ne.prototype,"list",void 0);B([S({converter:ce})],Ne.prototype,"maxlength",void 0);B([S({converter:ce})],Ne.prototype,"minlength",void 0);B([S({mode:"boolean"})],Ne.prototype,"multiple",void 0);B([S],Ne.prototype,"name",void 0);B([S],Ne.prototype,"pattern",void 0);B([S],Ne.prototype,"placeholder",void 0);B([S({attribute:"readonly",mode:"boolean"})],Ne.prototype,"readOnly",void 0);B([S({mode:"boolean"})],Ne.prototype,"required",void 0);B([S({converter:ce})],Ne.prototype,"size",void 0);B([S({converter:{fromView:r=>typeof r=="string"?["true",""].includes(r.trim().toLowerCase()):null,toView:r=>r.toString()}})],Ne.prototype,"spellcheck",void 0);B([S],Ne.prototype,"type",void 0);B([$],Ne.prototype,"control",void 0);B([$],Ne.prototype,"controlLabel",void 0);class Rs extends Ne{}B([S],Rs.prototype,"appearance",void 0);B([S({attribute:"control-size"})],Rs.prototype,"controlSize",void 0);ia(Rs,ea);const lf="adoptedStyleSheets"in document,cf="CSSScopeRule"in window,Qs=new Map,en=new Map,Ji=new Map,tn=new Map,Mi=new CSSStyleSheet;function df(r,e=document){if(!(!e||!gf(e))){if(!lf||e instanceof HTMLElement&&!e.shadowRoot&&!cf){const t=e===document?document.documentElement:e;xf(r,t);return}[document,document.documentElement,document.body].includes(e)?mf(r):bf(r,e)}}const uf=/^[a-zA-Z_-][a-zA-Z0-9_-]*$/;function pf(r){return uf.test(r)?r:""}const hf=/(;|{|}|\/\*|\*\/|@import|url\s*\(|expression\s*\(|javascript:)/i;function ff(r){return hf.test(r)?"":r}function fa(r){return Qs.has(r)||Qs.set(r,Object.keys(r).reduce((e,t)=>{const i=pf(t),o=ff(r[t].toString());return i&&o?`${e}--${i}:${o};`:e},"")),Qs.get(r)}function gf(r){return[document,document.documentElement].includes(r)||r instanceof HTMLElement&&!!r.closest("body")}function mf(r){if(r===null){document.adoptedStyleSheets.includes(Mi)&&Mi.replaceSync("");return}Mi.replaceSync(`
    html {
      ${fa(r)}
    }
  `),document.adoptedStyleSheets.includes(Mi)||document.adoptedStyleSheets.push(Mi)}function bf(r,e){if(r===null){e.shadowRoot&&Ji.has(e)?Ji.get(e).replaceSync(""):(delete e.dataset.fluentTheme,Il(e));return}e.shadowRoot?yf(e).replaceSync(`
      :host {
        ${fa(r)}
      }
    `):(e.dataset.fluentTheme=vf(r),Il(e))}function yf(r){if(!Ji.has(r)){const e=new CSSStyleSheet;Ji.set(r,e),r.shadowRoot?.adoptedStyleSheets.push(e)}return Ji.get(r)}function vf(r){if(!en.has(r)){const e=ha("fluent-theme-"),t=new CSSStyleSheet;en.set(r,e),t.replaceSync(`
      @scope ([data-fluent-theme="${e}"]) {
        :scope {
          ${fa(r)}
        }
      }
    `),document.adoptedStyleSheets.push(t)}return en.get(r)}function xf(r,e){let t;if(r===null){if(!tn.has(e))return;t=tn.get(e)}else tn.set(e,r),t=r;for(const[i,o]of Object.entries(t))r===null?e.style.removeProperty(`--${i}`):e.style.setProperty(`--${i}`,o.toString())}const{userAgent:wf}=navigator,Sf=/\bAppleWebKit\/[\d+\.]+\b/.test(wf);function Il(r){if(!Sf)return;const e="visibility",t="hidden",i=r.style.getPropertyValue(e);r.style.setProperty(e,t),Kt.process(),r.style.setProperty(e,i)}const Me=Object.freeze({prefix:"ff",shadowRootMode:"open",registry:customElements});class kl extends Error{constructor(e){super(e),Object.setPrototypeOf(this,new.target.prototype)}}class ms extends Error{constructor(e){super(e),Object.setPrototypeOf(this,new.target.prototype)}}new TextEncoder;const If={};function ga(r,e,t){If[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(o){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:o,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}ga("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);ga("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);ga("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,o=t;return Number.isInteger(t)&&Math.abs(t)>2**32?o=$l(String(t)):typeof t=="bigint"&&(o=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(o=$l(o)),o+="n"),i+=` It must be ${e}. Received ${o}`,i},RangeError);function $l(r){let e="",t=r.length;const i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}(function(){const r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){const i=t*16;for(let o=0;o<16;++o)e[i+o]=r[t]+r[o]}return e})();function Pl(r){if(typeof r!="function")return!1;const e=Object.getOwnPropertyDescriptor(r,"prototype");return e?!e.writable:!1}function ki(r){return typeof r=="string"||typeof r=="symbol"||typeof r=="number"}const fd=Symbol("SyostSyost");function kf(r){return r&&r instanceof Array&&fd in r}class Mr extends nr{elementInternals=this.attachInternals();#e;#t;get resourceUrn(){return this.#e}set resourceUrn(e){if(this.#e)throw new ms("resourceUrn can't be reset");this.#e=e}get resourceId(){return this.#t}set resourceId(e){if(this.#t!==void 0)throw new ms("resourceId can't be reset");this.#t=e}connectedCallback(){super.connectedCallback?.()}disconnectedCallback(){super.disconnectedCallback?.()}}var $f=Object.defineProperty,ma=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&$f(e,t,o),o};class Os extends Rs{#e;get resourceId(){return this.#e}set resourceId(e){if(this.#e)throw new ms("ResourceId can't be resetted");this.#e=e}constructor(){super()}#t=!0;get fixated(){return Q.track(this,"fixated"),this.#t}set fixated(e){this.#t!==e&&(this.#t=e,Q.notify(this,"fixated"))}set customLogic(e){e(this)}indicator;#r=null;get fixator(){return this.#r}set fixator(e){this.#r=e}keydownHandler(e){return e.key==="Escape"&&this.#o(),super.keydownHandler(e)}formResetCallback(){this.value=this.initialValue,this.ValueCleaned()}#o(){this.formResetCallback(),this.buttons="both"}inputHandler(e){return super.inputHandler(e),this.initialValue===this.value?(this.dirtyValue=!1,this.elementInternals.states.delete("dirty")):this.elementInternals.states.add("dirty"),!0}changeHandler(e){return this.setValidity(),this.validity.valid&&this.#s(),this.$emit("change",e,{bubbles:!0,composed:!0}),!0}initialValueChanged(){super.initialValueChanged(),this.dirtyValue||this.$emit("change",null,{bubbles:!0,composed:!0})}async#s(e=!0){if(!(!this.$fastController.isConnected||this.manual&&e))return this.value===this.initialValue?(this.ValueCleaned(),!1):(this.fixated=this.#r?await this.#r(this.value,this):!0,this.fixated&&(this.initialValue=this.value,this.ValueCleaned()),this.$emit("fixated",{fixated:this.fixated},{bubbles:!0,composed:!0}),this.fixated)}ValueCleaned(){this.dirtyValue=!1,this.elementInternals.states.delete("dirty")}Fixate(){return this.#s(!1)}currentValueChanged(e,t){}}ma([S({mode:"boolean"})],Os.prototype,"manual");ma([S],Os.prototype,"buttons");ma([S({converter:ce})],Os.prototype,"progress");const Cl=Symbol("TokenRegistry");function Li(r){return new Proxy(r,{get:(t,i)=>i===Cl?!0:t[i],set:(t,i,o)=>{if(t.hasOwnProperty(i))throw new Error("Tokens can not be redefined.");if(typeof o!="symbol"&&!o[Cl])throw new Error("TokenRegistry may contain only symbols or other TokenRegistries.");return t[i]=o,!0}})}const Pf={$CREATE:Symbol("$CREATE"),$DELETE:Symbol("$DELETE")},Cf=Li(Pf),Ef={PropertyChanged:Symbol("PropertyChanged"),PropertyChangedCommitting:Symbol("PropertyChangedCommitting"),PropertyChangedCommitted:Symbol("PropertyChangedCommitted"),NotPropertyChangedCommitted:Symbol("NotPropertyChangedCommitted"),CollectionChanged:Symbol("CollectionChanged"),Action:Symbol("Action"),Creating:Symbol("Creating"),Created:Symbol("Created"),NotCreated:Symbol("NotCreated"),ApplyingChanges:Symbol("ApplyingChanges"),ChangesApplied:Symbol("ChangesApplied"),NotApplied:Symbol("NotApplied"),Change:Symbol("ChangeRequest"),Deleting:Symbol("Deleting"),Deleted:Symbol("Deleted"),NotDeleted:Symbol("NotDeleted"),OperationFailed:Symbol("OperationFailed")},Af=Li(Ef),Nf={ActionMessage:Symbol("Messenger.ActionMessage"),ActionMessageWithCargo:Symbol("Messenger.ActionMessageWithCargo"),StateChangedMessage:Symbol("Messenger.StateChangedMessage"),DataMessage:Symbol("Messenger.DataMessage"),NotificationMessage:Symbol("Messenger.NotificationMessage"),CallAsyncMethodMessage:Symbol("Messenger.CallAsyncMethodMessage"),CallMethodMessage:Symbol("Messenger.CallMethodMessage"),PropertyChangedMessage:Symbol("Messenger.PropertyChangedMessage"),SetPropertyMessage:Symbol("Messenger.SetPropertyMessage"),GetPropertyMessage:Symbol("Messenger.GetPropertyMessage"),EventMessage:Symbol("Messenger.EventMessage"),CargoMessage:Symbol("Messenger.CargoMessage")},Lf=Li(Nf),zf={Anyone:Symbol("General.Anyone"),None:Symbol("General.None"),Primary:Symbol("General.Primary")},_f=Li(zf),Gf={History:Symbol("Router.History"),Router:Symbol("Router"),InitEventToken:Symbol("Router.InitEventToken"),RouteMissingEventToken:Symbol("Router.RouteMissing")},Rf=Li(Gf),Of={ProxyTarget:Symbol("Proxy target identity"),DISymbol:Symbol("Dependancy Injection Service"),A:Cf,E:Af,Messenger:Lf,General:_f,R:Rf},J=Li(Of),Nr=Symbol("disposeAdds");function Tr(r){const e=r.prototype.Dispose;r.prototype.Dispose=function(){if(this.Dispose?.finished)return!0;let t;if(e&&(t=e.apply(this)),this.Dispose[Nr]instanceof Array)for(let i of this.Dispose[Nr])i&&i.Dispose&&i.Dispose();return this.Dispose.finished=!0,t},r.prototype.Dispose.Add=function(t){return t.Dispose===void 0?!1:(Nr in r.prototype.Dispose?r.prototype.Dispose[Nr].push(t):r.prototype.Dispose[Nr]=[t],!0)}}Tr.From=function(r,e){return typeof r=="function"&&(e=r),"Add"in e||(e.Add=function(t){return t.Dispose===void 0?!1:(Nr in e.Dispose?e.Dispose[Nr].push(t):e.Dispose[Nr]=[t],!0)}),typeof r=="function"?{Dispose:e}:(r.Dispose=e,r)};var Ff=Object.getOwnPropertyDescriptor,Mf=(r,e,t,i)=>{for(var o=i>1?void 0:i?Ff(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(o)||o);return o};let Tf=class{sender;args;constructor(e,t){this.sender=e,this.args=t}#e=!1;preventDefault(){this.#e=!0}get isDefaultPrevented(){return this.#e}};const gd=Symbol("ILiteEvent");function lo(r){return r&&r[gd]}function Bf(r){r.prototype[gd]=!0,r.prototype.Once=function(e,t=J.General.Anyone,i=J.General.None,o=J.General.None){let s=(a,c,l)=>{n.Dispose(),e(a,c,l)};const n=this.On(s,t,i,o);return n},r.prototype.On=function(e,t=J.General.Anyone,i=J.General.None,o=J.General.None){Df(this);const s=(...d)=>e.apply(this,d),n=ki(t),a=ki(i);let c=[];n&&a?c[0]=[t,i]:!n&&a?t.forEach(d=>c.push([d,i])):n&&!a?i.forEach(d=>c.push([t,d])):t.forEach(d=>i.forEach(u=>c.push([d,u]))),c.forEach(d=>{if(!this._hs.has(d[0]))return this._hs.set(d[0],new Map([[d[1],[[o,s]]]]));if(!this._hs.get(d[0]).has(d[1]))return this._hs.get(d[0]).set(d[1],[[o,s]]);let u=this._hs.get(d[0]).get(d[1]),p=0,h=!1;for(let f of u){if(f[0]===o)h=!0;else if(h){p++;break}else if(o===J.General.Primary||o!==J.General.None&&typeof f[0]!="symbol"&&f[0]>o)break;p++}u.splice(p,0,[o,s])}),c.forEach(d=>d[fd]=!0),this._hr.set(s,c.length===1?c[0]:c);const l={Dispose:()=>{if(l.Dispose.finished)return!0;const d=this._hr.get(s);if(!this._hr.delete(s))throw new Error("[MUST NOT BE HITTED]: Handler not found in reverse map");return kf(d)?El(this,d[0],d[1],s):d.forEach(p=>El(this,p[0],p[1],s)),l.Dispose.finished=!0,!1}};return l},r.prototype.FireEvent=function(e,t=J.General.Anyone,i=J.General.None){return Vf.call(this,new Tf(this,e),t,i)},r.prototype.Dispose=function(){this._hs?.clear(),this._hr?.clear()},Tr(r)}function Df(r){r.hasOwnProperty("_hs")||(Object.defineProperty(r,"_hs",{value:new Map,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(r,"_hr",{value:new Map,writable:!0,enumerable:!1,configurable:!0}))}function El(r,e,t,i){const o=r._hs?.get(e)?.get(t);let s=0;if(o){if(!o.find(n=>(s++,n[1]===i)))throw new Error("[MUST NOT BE HITTED]: Handler not found");o.splice(s-1,1),o.length===0&&r._hs.get(e).delete(t),r._hs.get(e).size===0&&r._hs.delete(e)}}function Vf(r,e=J.General.Anyone,t=J.General.None){let i=[],o=[e,t],s=[e,J.General.None],n=[J.General.Anyone,t],a=[J.General.Anyone,J.General.None];e!==J.General.Anyone&&t!==J.General.None?i=cr.call(this,o[0],o[1]).concat(cr.call(this,s[0],s[1])).concat(cr.call(this,n[0],n[1])).concat(cr.call(this,a[0],a[1])):e!==J.General.Anyone&&t===J.General.None?i=cr.call(this,s[0],s[1]).concat(cr.call(this,a[0],a[1])):e===J.General.Anyone&&t!==J.General.None?i=cr.call(this,n[0],n[1]).concat(cr.call(this,a[0],a[1])):i=cr.call(this,a[0],a[1]);let c;for(let l of i)if(c=l[1]instanceof WeakRef?l[1].deref():l[1],c&&c(r,e,t),r.isDefaultPrevented)return!0;return!1}function cr(r,e){const t=this._hs?.get(r);if(!t)return[];const i=t.get(e);if(!i)return[];for(let o=0;o<i.length;o++){let s=i[o][1];s instanceof WeakRef&&(s=s.deref()),s===void 0&&(i.splice(o,1),console.warn(`${/class (\S{1,})/.exec(this.constructor.toString())[1]} LiteEvent.#takeHandlers: handler for [${r.toString()}, ${e.toString()}] was removed from the list`),o--)}return i.length===0&&t.delete(e),t.size===0&&this._hs.delete(r),i}let oi=class{FireEvent(r,e,t){throw new Error("FireEvent must be implemented by decorator")}On(r,e,t,i){throw new Error("On must be implemented by decorator")}Once(r,e,t,i){throw new Error("Once must be implemented by decorator")}Off(r,e){throw new Error("Off must be implemented by decorator")}Dispose(){return!1}};oi=Mf([Bf],oi);function An(r,e,...t){return r==null?e:typeof r!="function"?r:Object.hasOwn(r,"prototype")?r.call(e,e,...t):r.call(e,...t)}var br=(r=>(r[r.Children=1]="Children",r[r.Splice=2]="Splice",r[r.Sort=4]="Sort",r[r.Reset=8]="Reset",r[r.Any=15]="Any",r))(br||{});function bs(r,e,t=15){let i=r.$fastController;i===void 0&&(Ic.enable(),i=Q.getNotifier(r));const o={handleChange:(n,a)=>{(t===15||!a[0]&&t&1||a[0].reset&&t&8||a[0].sorted&&t&4||t&2)&&e(r,a)}};i.subscribe(o);const s=Tr.From(()=>{i.unsubscribe(o),s.Dispose.finished=!0});return s}function kr(r,e,t){let i=r[e];const o={handleChange:()=>t(i,r[e])};return Q.getNotifier(r).subscribe(o,e),Tr.From(()=>(Q.getNotifier(r).unsubscribe(o,e),!0))}function Hf(r,e,t,i,o){let s,n;const a=new Promise((c,l)=>{s=kr(r,e,(d,u)=>u===void 0||u===i?(clearTimeout(n),s.Dispose(),c(u)):!1),t>-1&&(n=setTimeout(()=>{const d=`Timeout: Property ${e.toString()} has not been ${i===void 0?"changed":`set to ${i}`} in ${t} ms.`;if(s?.Dispose(),l(d),o)throw new Error(d)},t))});return a.Dispose=()=>(clearTimeout(n),s?.Dispose()),a}var Xf=Object.getOwnPropertyDescriptor,md=r=>{throw TypeError(r)},Uf=(r,e,t,i)=>{for(var o=i>1?void 0:i?Xf(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(o)||o);return o},ba=(r,e,t)=>e.has(r)||md("Cannot "+t),U=(r,e,t)=>(ba(r,e,"read from private field"),t?t.call(r):e.get(r)),ut=(r,e,t)=>e.has(r)?md("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),Fe=(r,e,t,i)=>(ba(r,e,"write to private field"),e.set(r,t),t),Qe=(r,e,t)=>(ba(r,e,"access private method"),t),jf=(r,e,t,i)=>({set _(o){Fe(r,e,o)},get _(){return U(r,e,i)}}),pi,ji,hi,Yi,fr,Tt,Pt,Wo,Xe,ir,Ar,Lr,Bt,bd,yd,vd,Vt,co,uo;const rn=Symbol("ChainedProperty_Break");let ti=class{constructor(r,e,t,i){if(ut(this,Xe),ut(this,pi),ut(this,ji),ut(this,hi),ut(this,Yi),ut(this,fr),ut(this,Tt),ut(this,Pt,[]),ut(this,Wo),ut(this,Ar,!1),ut(this,Lr),ut(this,Bt,0),ut(this,Vt,0),ut(this,uo,o=>{for(let s=o;s<U(this,Pt).length;s++)U(this,Pt)[s]&&U(this,Pt)[s][1]&&U(this,Pt)[s][3]?.Dispose();U(this,Pt).splice(o)}),Fe(this,Wo,!!t),Fe(this,fr,An(r,i,i)),!U(this,fr))throw Error("No suitable object!");if(Fe(this,Tt,An(e,U(this,fr))),!U(this,Tt))throw Error("No property name!");if(ki(U(this,Tt)))this.Dispose.Add?.(Qe(this,Xe,bd).call(this,U(this,fr),U(this,Tt))),this.Owner=U(this,fr),this.Name=U(this,Tt);else if(U(this,Tt)instanceof Array)if(U(this,Tt).length>0)Qe(this,Xe,co).call(this,U(this,fr),U(this,Tt));else throw Error("No property name!");else throw Error("Invalid property name!")}get Owner(){return Q.track(this,"Owner"),U(this,pi)}set Owner(r){U(this,pi)!==r&&(U(this,pi),Fe(this,pi,r),Fe(this,ji,r),Q.notify(this,"Owner"))}get Name(){return Q.track(this,"Name"),U(this,hi)}set Name(r){U(this,hi)!==r&&(U(this,hi),Fe(this,hi,r),Fe(this,Yi,r),Q.notify(this,"Name"))}get Value(){return Q.track(this,"Value"),U(this,Ar)?void 0:U(this,ji)[U(this,Yi)]}set Value(r){U(this,Ar)||U(this,Wo)||(U(this,ji)[U(this,Yi)]=r)}get IsBroken(){return Q.track(this,"IsBroken"),U(this,Ar)}set IsBroken(r){U(this,Ar)!==r&&(U(this,Ar),Fe(this,Ar,r),Q.notify(this,"IsBroken"))}get BrokenLink(){return U(this,Lr)}get BrokenReason(){return U(this,Bt)}Dispose(){return U(this,uo).call(this,0),this.IsBroken=void 0,this.Owner=void 0,this.Name=void 0,this.Value=void 0,!0}};pi=new WeakMap;ji=new WeakMap;hi=new WeakMap;Yi=new WeakMap;fr=new WeakMap;Tt=new WeakMap;Pt=new WeakMap;Wo=new WeakMap;Xe=new WeakSet;ir=function(r,e){this.ValueChanged?.(r,e),Q.notify(this,"Value")};Ar=new WeakMap;Lr=new WeakMap;Bt=new WeakMap;bd=function(r,e){return lo(r)?r.On(t=>Qe(this,Xe,ir).call(this,t.args.OldValue,t.args.NewValue),J.E.PropertyChanged,e):kr(r,e,Qe(this,Xe,ir).bind(this))};yd=function(r,e,t,i){if(i===-1){const d=(u,p)=>{U(this,uo).call(this,t+1),Fe(this,Vt,t+1),Qe(this,Xe,co).call(this,p,U(this,Pt)[t][2])};return lo(r)?r.On(u=>d(u.args.OldValue,u.args.NewValue),J.E.PropertyChanged,e):kr(r,e,d)}let o;const s=d=>{d?.at(i)!==o&&(o=d?.at(i),U(this,uo).call(this,t+1),Fe(this,Vt,t+1),Qe(this,Xe,co).call(this,o,U(this,Pt)[t][2]))};let n;const a=(d,u)=>{d!==u&&(n?.Dispose(),u&&(n=bs(u,s,br.Splice|br.Reset)),s(u))},c=lo(r)?r.On(d=>a(d.args.OldValue,d.args.NewValue),J.E.PropertyChanged,e):kr(r,e,a);c.Dispose?.Add(Tr.From(()=>n?.Dispose()));const l=r[e];if(l)if(Array.isArray(l))n=bs(l,s,br.Splice|br.Reset),s(l);else throw new Error("Property value present and it's not an array!");return c};vd=function(r,e,t){if(t===-1)return lo(r)?r.On(l=>Qe(this,Xe,ir).call(this,l.args.OldValue,l.args.NewValue),J.E.PropertyChanged,e):kr(r,e,Qe(this,Xe,ir).bind(this));let i;const o=l=>{if(l?.at(t)===i)return;const d=i;i=l?.at(t),Qe(this,Xe,ir).call(this,d,i)};let s;const n=(l,d)=>{l!==d&&(s?.Dispose(),d&&(s=bs(d,o,br.Splice|br.Reset)),o(d))},a=lo(r)?r.On(l=>n(l.args.OldValue,l.args.NewValue),J.E.PropertyChanged,e):kr(r,e,n);a.Dispose?.Add(Tr.From(()=>s?.Dispose()));const c=r[e];if(c)if(Array.isArray(c))s=bs(c,o,br.Splice|br.Reset),o(c);else throw new Error("Property value present and it's not an array!");return a};Vt=new WeakMap;co=function(r,e){let t,i;const o=e instanceof Array,s=o?e[0]:e,n=o&&e.length>1?e.slice(1):null;let a=n;const c=U(this,Vt)?U(this,Pt)[U(this,Vt)-1][0]:U(this,Tt)[0];if(!r)return Fe(this,Lr,c),Fe(this,Bt,U(this,Bt)|1),this.IsBroken=!0,!1;if(t=An(s,U(this,fr),r),!t)return U(this,Pt).splice(U(this,Vt)),this.IsBroken=!0,Fe(this,Lr,c),Fe(this,Bt,U(this,Bt)|(s===rn?4:2)),Qe(this,Xe,ir).call(this),!1;if(t instanceof Array)switch(t.length){case 0:return this.IsBroken=!0,Fe(this,Lr,c),Fe(this,Bt,U(this,Bt)|(s===rn?4:2)),Qe(this,Xe,ir).call(this),!1;case 1:t=t[0];break;default:const d=t.slice(1);t=t[0],a=a===null?d.length!==0?d:null:a.concat(d)}if(!ki(t))return this.IsBroken=!0,Fe(this,Lr,c),Fe(this,Bt,U(this,Bt)|(s===rn?4:2)),Qe(this,Xe,ir).call(this),!1;let l=-1;if(typeof t=="string"){const d=t.indexOf("[");if(d!==-1){const u=t.indexOf("]");l=parseInt(t.substring(d+1,u)),t=t.substring(0,d)}}if(a!==null){const d=Qe(this,Xe,yd).call(this,r,t,U(this,Vt),l);if(U(this,Pt)[U(this,Vt)]=l===-1?[t,r,n,d]:[t,r,n,d,l],d===null)throw new Error("MUST NOT BE HITTED");return i=r[t],l!==-1&&(i=i[l]),jf(this,Vt)._++,Qe(this,Xe,co).call(this,i,a)}else{const d=Qe(this,Xe,vd).call(this,r,t,l);if(U(this,Pt)[U(this,Vt)]=[t,r,null,d],this.Owner=r,this.Name=t,d===null)throw new Error("MUST NOT BE HITTED");return Fe(this,Lr,void 0),Qe(this,Xe,ir).call(this,void 0,r[t]),this.IsBroken=!1,!0}};uo=new WeakMap;ti=Uf([Tr],ti);function Yf(r){const e=r.prototype.Once;r.prototype.Once=function(o,s,n=J.General.Anyone,a=J.General.None,c=J.General.None){if(!o)return e.call(this,s,n,a,c);if(ki(s))return e.call(this,o,s,n,a);const l=new ti(this,o),d=(...p)=>{l.Dispose(),s.apply(this,p)};let u;return kr(l,"Value",(p,h)=>(u?.Dispose(),u=h?.Once(d,n,a,c))),l.Value&&(u=l.Value.Once(d,n,a,c)),{Dispose:()=>{u?.Dispose(),l.Dispose()}}};const t=r.prototype.On;r.prototype.On=function(o,s,n=J.General.Anyone,a=J.General.None,c=J.General.None){if(!o)return t.call(this,s,n,a,c);if(ki(s))return t.call(this,o,s,n,a);const l=new ti(this,o);let d;return kr(l,"Value",(u,p)=>(d?.Dispose(),d=p?.On(s,n,a,c))),l.Value&&(d=l.Value.On(s,n,a,c)),{Dispose:()=>{d?.Dispose(),l.Dispose()}}};const i=r.prototype.FireEvent;r.prototype.FireEvent=function(o,s,n=J.General.Anyone,a=J.General.None){if(!o)return i.call(this,s,n,a);if(!(o instanceof Array||typeof o=="string"||typeof o=="function"))return i.call(this,o,s,n);const c=new ti(this,o);c.Value&&c.Value.FireEvent(s,n,a),c.Dispose()}}function qf(r){const e=r.prototype.OnPropertyChanged;r.prototype.OnPropertyChanged=function(i,o){if(!o)return e.apply(this,i);if((!i||typeof i=="string")&&o)return e.apply(this,i,o);const s=new ti(this,i),n=kr(s,"Value",(a,c)=>o(s.Name,a,c));return{Dispose:()=>n?.Dispose()&&s.Dispose()}};const t=r.prototype.NextValueOf;r.prototype.NextValueOf=function(i,o,s,n){if(typeof i=="string")return t.apply(this,i,o,s,n);const a=new ti(this,i),{promise:c,resolve:l,reject:d}=Promise.withResolvers(),u=Hf(a,"Value",o,s,n);return u.then(p=>(a.Dispose(),l(p))).catch(p=>(a.Dispose(),d(p))),c.Dispose=()=>u?.Dispose()&&a.Dispose(),c}}function Kf(r,e,t,i){let o,s;const n=new Promise((a,c)=>{o=this.Once(l=>t===void 0||l.args.NewValue===t?(clearTimeout(s),o.Dispose(),a(l.args.NewValue)):!1,J.E.PropertyChanged,r),e>-1&&(s=setTimeout(()=>{const l=`Timeout: Property ${r.toString()} has not been ${t===void 0?"changed":`set to ${t}`} in ${e} ms.`;if(o?.Dispose(),c(l),i)throw new Error(l)},e))});return n.Dispose=()=>(clearTimeout(s),o?.Dispose()),n}var Wf=Object.getOwnPropertyDescriptor,Zf=(r,e,t,i)=>{for(var o=i>1?void 0:i?Wf(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(o)||o);return o};let Nn=class extends oi{FireEvent(r,e,t,i){return super.FireEvent.apply(this,arguments)}Once(r,e,t,i,o){return super.Once.apply(this,arguments)}On(r,e,t,i,o){return super.On.apply(this,arguments)}constructor(r){super(),r&&Nn.With(this,r)}PropertyChanged(r,e,t){this.FireEvent({PropertyName:r,OldValue:e,NewValue:t},J.E.PropertyChanged,r)}NextValueOf=Kf;OnPropertyChanged(r,e){return typeof r=="string"?this.On(t=>e?.call(this,t.args.PropertyName,t.args.OldValue,t.args.NewValue,t.args.Callback),J.E.PropertyChanged,r):r?this.On(t=>r.call(this,t.args.PropertyName,t.args.OldValue,t.args.NewValue,t.args.Callback),J.E.PropertyChanged):this.On(t=>e?.call(this,t.args.PropertyName,t.args.OldValue,t.args.NewValue,t.args.Callback),J.E.PropertyChanged)}static With(r,e){if(!e)return r;for(let t in e)"_"+t in r&&(r["_"+t]=e[t]);return r}static From(r){return r?this.With(new this,r):null}};Nn=Zf([Yf,qf],Nn);const xd=new ArrayBuffer(8);new Float64Array(xd);new Int32Array(xd);const Jf={};var Qf=Object.defineProperty,eg=Object.getOwnPropertyDescriptor,wd=r=>{throw TypeError(r)},tg=(r,e,t)=>e in r?Qf(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,rg=(r,e,t,i)=>{for(var o=i>1?void 0:i?eg(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(o)||o);return o},Al=(r,e,t)=>tg(r,typeof e!="symbol"?e+"":e,t),Sd=(r,e,t)=>e.has(r)||wd("Cannot "+t),Nl=(r,e,t)=>(Sd(r,e,"read from private field"),e.get(r)),ig=(r,e,t)=>e.has(r)?wd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),Ll=(r,e,t,i)=>(Sd(r,e,"write to private field"),e.set(r,t),t),fi;let Ln=class{constructor(r,e,t,i){ig(this,fi,null),Al(this,"Disable"),Al(this,"Enable"),this.Disable=()=>(Nl(this,fi)?.Dispose(),Ll(this,fi,null)),this.Enable=()=>{if(this.Dispose.finished)throw new Error("Receiver is disposed");Ll(this,fi,e.On(r,t,i,J.General.None))}}get IsEnabled(){return Nl(this,fi)!=null}Dispose(){return this.Disable(),!0}};fi=new WeakMap;Ln=rg([Tr],Ln);class zn{static _events=new oi;static Send(e,t,i,o){return new Promise((s,n)=>{let a=null,c=null;a=setTimeout(()=>{n({errmessage:"Timeout: NO receivers has been registered for this Message",message:e,token:t,option:i,responseTimeout:o})},10),o&&(c=setTimeout(()=>n(`Timeout: NO response for ${o} ms. Message rejected.`),o));const l=d=>{c&&clearTimeout(c),s(d)};zn._events.FireEvent([e,l,a],t,i)})}static Receive(e,t,i){const o=n=>{clearTimeout(n.args[2]);const a=e(n.args[0]);a instanceof Promise&&a.then(c=>n.args[1](c)),n.args[1](a)},s=new Ln(o,zn._events,t,i);return s.Enable(),s}}var Dt=(r=>(r[r.Singleton=0]="Singleton",r[r.Transient=1]="Transient",r[r.Scoped=2]="Scoped",r))(Dt||{});class og extends oi{#e=new Map;#t=new Map;#r=new Map;#o=new Map;#s=new Map;constructor(){super()}RegisterArgs(e,t){this.#e.set(e,t)}ResolveArgsFor(e){return this.#e?.get(e)?.map(t=>this.Resolve(t))??[]}Register(e,t,i){switch(i){case Dt.Singleton:if(this.#u(e))throw new Error(`Service with token ${String(e)} has been already registered`);this.#n(e,t),this.FireEvent([e,t]);break;case Dt.Transient:if(this.#o.has(e))throw new Error(`Service with token ${String(e)} has been already registered`);this.#o.set(e,t);break;case Dt.Scoped:throw new kl("Scoped services are not implemented yet.")}}Resolve(e){if(!e)return null;let t=this.#r.get(e);if(t)return t;t=this.#t.get(e);let i=Dt.Singleton;if(t||(t=this.#o.get(e),i=Dt.Transient),t||(t=this.#s.get(e),i=Dt.Scoped),!t)return null;const o=this.#a(t);if(i===Dt.Singleton&&this.#r.set(e,o),i===Dt.Scoped)throw new kl("Scoped services are not implemented yet.");return o}#u(e){return this.#r.has(e)||this.#t.has(e)}#a(e){const t=!Pl(e)&&e instanceof Function?e():e;return new t(...this.ResolveArgsFor(t[J.DISymbol]))}#n(e,t){Pl(t)?this.#t.set(e,t):this.#r.set(e,t)}Wait(e){return new Promise((t,i)=>{const o=this.Resolve(e);if(o){t(o);return}let s=setTimeout(()=>{console.warn(`Timeout: Service ${String(e)} has not been registered yet.`),n.Dispose?.(),i(`Timeout: Service ${String(e)} has not been registered yet.`)},Jf.Settings.DI.WaitTimeout);const n=this.Once(()=>(clearTimeout(s),t(this.Resolve(e))),e)})}}const Id=new og;function sg(r,e){return e.indexOf(r)===0?e.substring(r.length).replace(/\/\//g,"/"):e}function ng(r){return r?"#!":"#"}function ag(r){const e=location.href;return r==="#!"&&e.indexOf("#")>-1&&e.indexOf("#!")<0?"":e.split(r)[1]||""}class lg{Back(){history.back()}Forward(){history.forward()}get Length(){return history.length}ReplaceLocation(e){history.replaceState(null,"",e)}}const zl=window.location;function cg(r){return r.replace(/^(#)?(\/)?/,"#/")}function dg(r){return r.replace(/^(#(!)?)?(\/)?/,"#!/")}class ug extends lg{#e;#t;constructor(e=!1){super(),this.#e=ng(e),this.#t=e?dg:cg}Navigate(e){zl.hash=this.#t(e)}Replace(e){this.ReplaceLocation(this.#t(e))}Normalize(e){return e.indexOf(this.#e)<0?e:e.split(this.#e)[1]}#r;OnChange(e){this.#r=e,window.addEventListener("hashchange",this.#r)}Off(){this.#r&&(window.removeEventListener("hashchange",this.#r),this.#r=void 0)}get Current(){return ag(this.#e)}NormalizeCurrent(e){const t=zl.pathname;this.ReplaceLocation(e+this.#e+sg(e,t))}}const Qi=Symbol("History.ChangeEventToken"),_l=Symbol("History.BackEventToken");class pg extends oi{#e=!1;#t;#r;#o;get Current(){return this.#o}#s=[];get LocationStack(){return this.#s}#u="initial";Start(){if(this.#e)return;this.#e=!0;const e=new ug;this.#t=e,this.#r=e.Length,this.#o=e.Current,this.#s=[{url:e.Current,historyLength:e.Length}],this.#u="initial",e.OnChange(this.#n.bind(this))}OnChange(e){return this.On(e,Qi)}Off(){this.#e&&(this.#t?.Off?.(),this.#e=!1,this.#s.length=0,this.#u="initial")}Replace(e){this.#a(e,!0),this.#t.Replace(e),this.#s.length>0&&this.#s.splice(this.#s.length-1,1,{url:this.#o,historyLength:this.#t.Length})}Navigate(e,t=!0){this.#a(e,!1),this.#t.Navigate(e),!(t||!this.#s.length)&&this.#s.splice(this.#s.length===1?0:this.#s.length-2,1,{url:this.#o,historyLength:this.#t.Length})}#a(e,t){if(e=this.#t.Normalize(e),this.#o===e||this.#o===decodeURIComponent(e))return!0;if(this.#o=e,this.#r=this.#t.Length,t)return!1;this.FireEvent({url:e,isBack:!1},Qi)}#n(e){const t=this.#t.Current;if(t===null||this.#o===t||this.#o===decodeURIComponent(t))return!0;const i=this.#t.Length,o=this.#i(t,i);this.#r=i,this.#o=t,o?this.#s.length>0&&this.#s.pop():this.#s.push({url:t,historyLength:i}),this.#u=o?"back":"forward",this.FireEvent({url:t,isBack:o},Qi)}#i(e,t){return this.#s[this.#s.length-1]?!!(t<this.#r||t===this.#r&&this.#s.slice(0,-1).some(s=>s.url===e)):!1}}function kd(r){let e=r.split("?")[1]||"",t={},i=e.split(/&|=/),o=i.length;for(let s=0;s<o;s+=2)i[s]!==""&&(t[decodeURIComponent(i[s])]=decodeURIComponent(i[s+1]));return t}function Gl(r){return r.replace(/(\?.*)|(#.*)/g,"")}const hg=/\((.*?)\)/g,fg=/(\(\?)?:\w+/g,gg=/\*\w+/g,mg=/[\-{}\[\]+?.,\\\^$|#\s]/g;function bg(r,e){return e?r:"([^/]+)"}class yg{get Route(){return this.#e}#e;get Owner(){return this.#t}#t;#r;constructor(e,t,i,o){this.#e=e instanceof RegExp?e:this.#o(e,i),this.#r=t,this.#t=o}#o(e,t){return new RegExp("^"+e.replace(mg,"\\$&").replace(hg,"(?:$1)?").replace(fg,bg).replace(gg,"(.*?)")+"$",t?"i":"")}Callback(e,t,i){let o,s,n=kd(e);if(n._back=t,e=Gl(e),o=this.#e.exec(e)?.slice(1)||[],s=o.length,i)for(let a=0;a<s;a++)typeof o[a]<"u"&&(o[a]=decodeURIComponent(o[a]));o.push(n),this.#r.apply(null,o)}WorksWith(e,t,i){return this.#e.test(Gl(e))?(this.Callback(e,t,i),!0):!1}}class vg extends oi{#e;get Routes(){return this.#e}#t=[];#r=[];#o;#s;get Path(){return this.#s}#u;get Params(){return this.#u}#a;constructor(e,t={}){super(),this.#e=[],this.#o=t.ignoreCase!==!1,this.#a=e,e.Start(),e.OnChange(o=>this.#c(...Object.values(o.args)));var i={URL:e.Current||"/"};this.FireEvent(i,J.R.InitEventToken),this.#c(i.URL)}Route(e,t,i){this.#e.push(new yg(e,t,this.#o,i))}RemoveRoute(e){if(typeof e=="symbol"){this.#e=this.#e.filter(t=>t.Owner!==e);return}this.#e=this.#e.filter(t=>e instanceof RegExp?!t.Route.source||t.Route.source!==e.source||t.Route.flags!==e.flags:t.Route.source!==new RegExp("^"+e.replace(/[-{}\[\]+?.,\\^$|#\s]/g,"\\$&").replace(/\((.*?)\)/g,"(?:$1)?").replace(/(\(\?)?:\w+/g,"([^/]+)").replace(/\*\w+/g,"(.*?)")+"$",this.#o?"i":"").source)}Navigate(e,t=!0){this.#a.Navigate(e,t)}Replace(e){this.#a.Replace(e)}Use(e,t={}){this.#t.push({middleware:e,options:t}),this.#t.sort((i,o)=>(i.options.order??100)-(o.options.order??100))}#n(e){return this.#i(e,0)}async#i(e,t){const i=this.#t[t];if(i)try{if(!i.options.condition||i.options.condition(e)?await i.middleware(e):!1)return;await this.#i(e,t+1)}catch(o){throw e.error=o,o}}#c(e,t){e||(e="/");const i=kd(e);this.#s=e,this.#u=i;const o={URL:e,params:i,isBack:t};this.FireEvent(o,t?_l:Qi),this.#d(e);const s={url:e,params:{},queryParams:i,isBack:t??!1};this.#n(s).then(()=>{let n=!1;for(let a=0;a<this.#e.length;a++)if(this.#e[a].WorksWith(e,t,!1)){s.route=this.#e[a],n=!0;break}n||this.FireEvent(o,J.R.RouteMissingEventToken)}).catch(n=>{s.error=n,console.error("Router error:",n)})}OnChange(e){return this.On(e,Qi)}OnBack(e){this.On(e,_l)}register(e,t,i=0,o=Symbol()){this.#r.push({segment:e,handler:t,level:i,owner:o})}unregister(e){let t=this.#r.length;for(;t--;)this.#r[t].owner===e&&this.#r.splice(t,1)}restore(){this.#d(this.Path??"/")}async#d(e){const t=e.replace(/^\//,"").split("/").filter(Boolean);for(let i=0;i<t.length;i++){const o=t[i],s=t.slice(i+1).join("/"),n=this.#r.filter(a=>a.level===i&&this.#g(a.segment,o));for(const a of n)await a.handler(o,s)}}#g(e,t){return typeof e=="string"?e===t:e.test(t)}MapRoute(e,t,i){this.Route(e,t,i)}Dispose(){return this.#a.Off(),this.#e.length=0,this.#t.length=0,this.#r.length=0,super.Dispose?.()}}const on=new Map;"metadata"in Reflect||(Reflect.metadata=function(r,e){return function(t){Reflect.defineMetadata(r,e,t)}},Reflect.defineMetadata=function(r,e,t){let i=on.get(t);i===void 0&&on.set(t,i=new Map),i.set(r,e)},Reflect.getOwnMetadata=function(r,e){const t=on.get(e);if(t!==void 0)return t.get(r)});const Rl="annotation:paramtypes",xg="design:paramtypes",qr=Object.freeze({getDesignParamTypes:r=>{var e;return(e=Reflect.getOwnMetadata(xg,r))!==null&&e!==void 0?e:gt},getAnnotationParamTypes:r=>{var e;return(e=Reflect.getOwnMetadata(Rl,r))!==null&&e!==void 0?e:gt},getOrCreateAnnotationParamTypes(r){let e=this.getAnnotationParamTypes(r);return e===gt&&Reflect.defineMetadata(Rl,e=[],r),e}}),Ol=new Map,Zo="context-request";let sn;const $t=Object.freeze({eventType:Zo,for(r){let e=Ol.get(r);return e===void 0&&(e=$t.create(r),Ol.set(r,e)),e},create(r,e){const t=function(i,o,s){if(i==null||new.target!==void 0)throw oe.error(ve.noRegistrationForContext,{name:t.name});if(o)$t.defineProperty(i,o,t);else{const n=qr.getOrCreateAnnotationParamTypes(i);n[s]=t}};return t.$isInterface=!0,t.initialValue=e,Reflect.defineProperty(t,"name",{value:r}),t.handle=(i,o)=>$t.handle(i,o,t),t.provide=(i,o)=>$t.provide(i,t,o),t.get=i=>$t.get(i,t),t.request=(i,o,s)=>$t.request(i,t,o,s),t.toString=()=>`Context<${t.name}>`,t},setDefaultRequestStrategy(r){sn=r},get(r,e){var t;let i;return sn(r,e,o=>i=o,!1),(t=i)!==null&&t!==void 0?t:e.initialValue},request(r,e,t,i=!1){sn(r,e,t,i)},dispatch(r,e,t,i=!1){r.dispatchEvent(new wg(e,t,i))},provide(r,e,t){$t.handle(r,i=>{i.stopImmediatePropagation(),i.callback(t)},e)},handle(r,e,t){t?r.addEventListener(Zo,i=>{i.context===t&&e(i)}):r.addEventListener(Zo,e)},defineProperty(r,e,t){const i=Symbol.for(`fast:di:${e}`);Reflect.defineProperty(r,e,{get:function(){var o;return(o=this[i])!==null&&o!==void 0?o:this[i]=$t.get(this,t)}})}});$t.setDefaultRequestStrategy($t.dispatch);class wg extends Event{constructor(e,t,i){super(Zo,{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.multiple=i}}var ya=function(r,e,t,i){function o(s){return s instanceof t?s:new t(function(n){n(s)})}return new(t||(t=Promise))(function(s,n){function a(d){try{l(i.next(d))}catch(u){n(u)}}function c(d){try{l(i.throw(d))}catch(u){n(u)}}function l(d){d.done?s(d.value):o(d.value).then(a,c)}l((i=i.apply(r,e||[])).next())})};class Sg{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(he.instance,e)}singleton(e){return this.registerResolver(he.singleton,e)}transient(e){return this.registerResolver(he.transient,e)}callback(e){return this.registerResolver(he.callback,e)}cachedCallback(e){return this.registerResolver(he.callback,$d(e))}aliasTo(e){return this.registerResolver(he.alias,e)}registerResolver(e,t){const{container:i,key:o}=this;return this.container=this.key=void 0,i.registerResolver(o,new _t(o,e,t))}}function Ti(r){const e=r.slice(),t=Object.keys(r),i=t.length;let o;for(let s=0;s<i;++s)o=t[s],Pd(o)||(e[o]=r[o]);return e}const Ig=Object.freeze({none(r){throw oe.error(ve.noDefaultResolver,{key:r})},singleton(r){return new _t(r,he.singleton,r)},transient(r){return new _t(r,he.transient,r)}}),nn=Object.freeze({default:Object.freeze({parentLocator:()=>null,asyncRegistrationLocator:()=>ya(void 0,void 0,void 0,function*(){return null}),responsibleForOwnerRequests:!1,defaultResolver:Ig.singleton})});function kg(r,e){const t=typeof r=="function"?r:e,i=typeof r=="string"?r:r&&"friendlyName"in r&&r.friendlyName||dn,o=typeof r=="string"?!1:r&&"respectConnection"in r&&r.respectConnection||!1,s=function(n,a,c){if(n==null||new.target!==void 0)throw oe.error(ve.noRegistrationForContext,{name:s.name});if(a)Ze.defineProperty(n,a,s,o);else{const l=qr.getOrCreateAnnotationParamTypes(n);l[c]=s}};return s.$isInterface=!0,Reflect.defineProperty(s,"name",{value:i??dn}),t!=null&&(s.register=function(n,a){return t(new Sg(n,a??s))}),s.toString=function(){return`DIContext<${s.name}>`},s}const Fl=new Map;let Ml=null,Tl=0;const Ze=Object.freeze({installAsContextRequestStrategy(r){$t.setDefaultRequestStrategy((e,t,i)=>{const o=Ze.findResponsibleContainer(e,r);i(o.get(t))})},createContainer(r){return new eo(null,Object.assign({},nn.default,r))},findResponsibleContainer(r,e){const t=r.$$container$$;return t&&t.responsibleForOwnerRequests?t:Ze.findParentContainer(r,e)},findParentContainer(r,e){if(Tl<1)return e?e():Ze.getOrCreateDOMContainer();let t;return $t.dispatch(r,$g,i=>t=i),t??(e?e():Ze.getOrCreateDOMContainer())},getOrCreateDOMContainer(r,e){if(!r)return Ml||(Ml=new eo(typeof window<"u"?window:null,Object.assign({},nn.default,e,{parentLocator:()=>null})));let t=r.$$container$$;return t===void 0&&(Tl++,t=new eo(r,Object.assign({},nn.default,e,{parentLocator:Ze.findParentContainer}))),t},getDependencies(r){let e=Fl.get(r);if(e===void 0){const t=r.inject;if(t===void 0){const i=qr.getDesignParamTypes(r),o=qr.getAnnotationParamTypes(r);if(i===gt)if(o===gt){const s=Object.getPrototypeOf(r);typeof s=="function"&&s!==Function.prototype?e=Ti(Ze.getDependencies(s)):e=[]}else e=Ti(o);else if(o===gt)e=Ti(i);else{e=Ti(i);let s=o.length,n;for(let l=0;l<s;++l)n=o[l],n!==void 0&&(e[l]=n);const a=Object.keys(o);s=a.length;let c;for(let l=0;l<s;++l)c=a[l],Pd(c)||(e[c]=o[c])}}else e=Ti(t);Fl.set(r,e)}return e},defineProperty(r,e,t,i=!1){const o=Symbol.for(`fast:di:${e}`);Reflect.defineProperty(r,e,{get:function(){let s=this[o];if(s===void 0&&(s=(this instanceof Node?Ze.findResponsibleContainer(this):Ze.getOrCreateDOMContainer()).get(t),this[o]=s,i)){const a=this.$fastController;if(!a)throw oe.error(ve.connectUpdateRequiresController);const c=()=>{const d=Ze.findResponsibleContainer(this).get(t),u=this[o];d!==u&&(this[o]=s,a.notify(e))};a.subscribe({handleChange:c},"isConnected")}return s}})},createContext:kg,inject(...r){return function(e,t,i){if(typeof i=="number"){const o=qr.getOrCreateAnnotationParamTypes(e),s=r[0];s!==void 0&&(o[i]=s)}else if(t)Ze.defineProperty(e,t,r[0]);else{const o=i?qr.getOrCreateAnnotationParamTypes(i.value):qr.getOrCreateAnnotationParamTypes(e);let s;for(let n=0;n<r.length;++n)s=r[n],s!==void 0&&(o[n]=s)}}},transient(r){return r.register=function(t){return ys.transient(r,r).register(t)},r.registerInRequestor=!1,r},singleton(r,e=Pg){return r.register=function(i){return ys.singleton(r,r).register(i)},r.registerInRequestor=e.scoped,r}}),_n=Ze.createContext("Container"),$g=_n;Ze.inject;const Pg={scoped:!1};var he;(function(r){r[r.instance=0]="instance",r[r.singleton=1]="singleton",r[r.transient=2]="transient",r[r.callback=3]="callback",r[r.array=4]="array",r[r.alias=5]="alias"})(he||(he={}));class _t{constructor(e,t,i){this.key=e,this.strategy=t,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolveAsync(e,t){switch(this.strategy){case he.singleton:{if(this.resolving)throw oe.error(ve.cyclicDependency,{name:this.state.name});return this.resolving=!0,e.getFactory(this.state).constructAsync(t).then(i=>(this.state=i,this.strategy=he.instance,this.resolving=!1,i))}case he.transient:{const i=e.getFactory(this.state);if(i===null)throw oe.error(ve.noFactoryForResolver,{key:this.key});return i.constructAsync(t)}default:return Promise.resolve(this.resolve(e,t))}}resolve(e,t){switch(this.strategy){case he.instance:return this.state;case he.singleton:{if(this.resolving)throw oe.error(ve.cyclicDependency,{name:this.state.name});return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=he.instance,this.resolving=!1,this.state}case he.transient:{const i=e.getFactory(this.state);if(i===null)throw oe.error(ve.noFactoryForResolver,{key:this.key});return i.construct(t)}case he.callback:return this.state(e,t,this);case he.array:return this.state[0].resolve(e,t);case he.alias:return t.get(this.state);default:throw oe.error(ve.invalidResolverStrategy,{strategy:this.strategy})}}getFactory(e){var t,i,o;switch(this.strategy){case he.singleton:case he.transient:return e.getFactory(this.state);case he.alias:return(o=(i=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||i===void 0?void 0:i.call(t,e))!==null&&o!==void 0?o:null;default:return null}}}function Cg(r){return this.get(r)}function Eg(r,e){return e(r)}class Ag{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}constructAsync(e,t){return ya(this,void 0,void 0,function*(){const i=yield Promise.all(this.dependencies.map(o=>e.getAsync(o)));return this.constructCore(i,t)})}construct(e,t){const i=this.dependencies.map(Cg,e);return this.constructCore(i,t)}constructCore(e,t){let i;return t===void 0?i=new this.Type(...e):i=new this.Type(...e,...t),this.transformers===null?i:this.transformers.reduce(Eg,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const Ng={$isResolver:!0,resolve(r,e){return e},resolveAsync:function(r,e){return Promise.resolve(e)}};function Jo(r){return typeof r.register=="function"}function Lg(r){return Jo(r)&&typeof r.registerInRequestor=="boolean"}function an(r){return Lg(r)&&r.registerInRequestor}function zg(r){return r.prototype!==void 0}const _g=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),ln=new Map;class eo{get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.isHandlingContextRequests=!1,this.resolvers=new Map,this.resolvers.set(_n,Ng),e&&(e.$$container$$=this,"addEventListener"in e&&$t.handle(e,i=>{if(this.isHandlingContextRequests)try{const o=this.get(i.context);i.stopImmediatePropagation(),i.callback(o)}catch{}else i.context===_n&&i.composedPath()[0]!==this.owner&&(i.stopImmediatePropagation(),i.callback(this))}))}handleContextRequests(e){this.isHandlingContextRequests=e}register(...e){if(++this.registerDepth===100)throw oe.error(ve.cannotAutoregisterDependency);let t,i,o,s,n;for(let a=0,c=e.length;a<c;++a)if(t=e[a],!!Dl(t))if(Jo(t))t.register(this);else if(zg(t))ys.singleton(t,t).register(this);else for(i=Object.keys(t),s=0,n=i.length;s<n;++s)o=t[i[s]],Dl(o)&&(Jo(o)?o.register(this):this.register(o));return--this.registerDepth,this}registerResolver(e,t){Bi(e);const i=this.resolvers,o=i.get(e);return o==null?i.set(e,t):o instanceof _t&&o.strategy===he.array?o.state.push(t):i.set(e,new _t(e,he.array,[o,t])),t}registerTransformer(e,t){const i=this.getResolver(e);if(i==null)return!1;if(i.getFactory){const o=i.getFactory(this);return o==null?!1:(o.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Bi(e),e.resolve!==void 0)return e;let i=this,o;for(;i!=null;)if(o=i.resolvers.get(e),o==null){if(i.parent==null){const s=an(e)?this:i;return t?this.jitRegister(e,s):null}i=i.parent}else return o;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}getAsync(e){return ya(this,void 0,void 0,function*(){if(Bi(e),e.$isResolver)return e.resolveAsync(this,this);let t=this,i;for(;t!=null;)if(i=t.resolvers.get(e),i==null){if(t.parent==null){const o=yield this.config.asyncRegistrationLocator(e);if(!o)throw oe.error(ve.cannotResolveKey,{key:e});const s=an(e)?this:t;return i=o.register(s),i.resolveAsync(t,this)}t=t.parent}else return i.resolveAsync(t,this);throw oe.error(ve.cannotResolveKey,{key:e})})}get(e){if(Bi(e),e.$isResolver)return e.resolve(this,this);let t=this,i;for(;t!=null;)if(i=t.resolvers.get(e),i==null){if(t.parent==null){const o=an(e)?this:t;return i=this.jitRegister(e,o),i.resolve(t,this)}t=t.parent}else return i.resolve(t,this);throw oe.error(ve.cannotResolveKey,{key:e})}getAll(e,t=!1){Bi(e);const i=this;let o=i,s;if(t){let n=gt;for(;o!=null;)s=o.resolvers.get(e),s!=null&&(n=n.concat(Bl(s,o,i))),o=o.parent;return n}else for(;o!=null;)if(s=o.resolvers.get(e),s==null){if(o=o.parent,o==null)return gt}else return Bl(s,o,i);return gt}getFactory(e){let t=ln.get(e);if(t===void 0){if(Gg(e))throw oe.error(ve.cannotConstructNativeFunction,{name:e.name});ln.set(e,t=new Ag(e,Ze.getDependencies(e)))}return t}registerFactory(e,t){ln.set(e,t)}createChild(e){return new eo(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw oe.error(ve.cannotJITRegisterNonConstructor,{value:e});if(_g.has(e.name))throw oe.error(ve.cannotJITRegisterIntrinsic,{value:e.name});if(Jo(e)){const i=e.register(t);if(!(i instanceof Object)||i.resolve==null){const o=t.resolvers.get(e);if(o!=null)return o;throw oe.error(ve.invalidResolver)}return i}else{if(e.$isInterface)throw oe.error(ve.cannotJITRegisterInterface,{value:e.name});{const i=this.config.defaultResolver(e,t);return t.resolvers.set(e,i),i}}}}const cn=new WeakMap;function $d(r){return function(e,t,i){if(cn.has(i))return cn.get(i);const o=r(e,t,i);return cn.set(i,o),o}}const ys=Object.freeze({instance(r,e){return new _t(r,he.instance,e)},singleton(r,e){return new _t(r,he.singleton,e)},transient(r,e){return new _t(r,he.transient,e)},callback(r,e){return new _t(r,he.callback,e)},cachedCallback(r,e){return new _t(r,he.callback,$d(e))},aliasTo(r,e){return new _t(e,he.alias,r)}});function Bi(r){if(r==null)throw oe.error(ve.invalidKey)}function Bl(r,e,t){if(r instanceof _t&&r.strategy===he.array){const i=r.state;let o=i.length;const s=new Array(o);for(;o--;)s[o]=i[o].resolve(e,t);return s}return[r.resolve(e,t)]}const dn="(anonymous)";function Dl(r){return typeof r=="object"&&r!==null||typeof r=="function"}const Gg=(function(){const r=new WeakMap;let e=!1,t="",i=0;return function(o){return e=r.get(o),e===void 0&&(t=o.toString(),i=t.length,e=i>=29&&i<=100&&t.charCodeAt(i-1)===125&&t.charCodeAt(i-2)<=32&&t.charCodeAt(i-3)===93&&t.charCodeAt(i-4)===101&&t.charCodeAt(i-5)===100&&t.charCodeAt(i-6)===111&&t.charCodeAt(i-7)===99&&t.charCodeAt(i-8)===32&&t.charCodeAt(i-9)===101&&t.charCodeAt(i-10)===118&&t.charCodeAt(i-11)===105&&t.charCodeAt(i-12)===116&&t.charCodeAt(i-13)===97&&t.charCodeAt(i-14)===110&&t.charCodeAt(i-15)===88,r.set(o,e)),e}})(),Eo={};function Pd(r){switch(typeof r){case"number":return r>=0&&(r|0)===r;case"string":{const e=Eo[r];if(e!==void 0)return e;const t=r.length;if(t===0)return Eo[r]=!1;let i=0;for(let o=0;o<t;++o)if(i=r.charCodeAt(o),o===0&&i===48&&t>1||i<48||i>57)return Eo[r]=!1;return Eo[r]=!0}default:return!1}}const{instance:Rg}=ys,Cd=new pg;Id.Register(J.R.History,Cd,Dt.Singleton);const Ed=new vg(Cd);Id.Register(J.R.Router,Ed,Dt.Singleton);const Og=Ze.createContext("DIRouter"),Fg=Ze.getOrCreateDOMContainer(document.body);Fg.register(Rg(Og,Ed));function Mg(r){return typeof r=="string"}const Tg={},Bg=Tg.hasOwnProperty,Dg=Bg.toString;Dg.call(Object);const Vg=r=>r.nodeType!==Node.TEXT_NODE||!!r.nodeValue?.trim().length;function Hg(r){return r?typeof r=="string"?new Ir(r):"inline"in r?r.inline():r:Ir.empty}const Xg=":host([hidden]){display:none}";function Ad(r){return`${Xg}:host{display:${r}}`}const Vl=bo.compile;bo.compile=(r,e,t=ri.policy)=>{if(Mg(r)){let i=document.createElement("TEMPLATE");i.innerHTML=t.createHTML(r),t.type==="svg"&&i.content.replaceChildren(...i.content.firstChild.childNodes);const o=i.content.firstElementChild;return o!==null&&o.tagName==="TEMPLATE"&&(i=o),Vl(i,e,t)}return Vl(r,e,t)};function Ug(r){return ie` <slot name="indicator" ${te("indicator")}>${Hg(r.indicator)}</slot> `.inline()}function jg(r={}){return ie`
    <template
      @beforeinput="${(e,t)=>e.beforeinputHandler(t.event)}"
      @focusin="${(e,t)=>e.focusinHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"      
    >
      <label part="label" for="control" class="label" ${te("controlLabel")}>
        <slot ${yo({property:"defaultSlottedNodes",filter:Vg})}></slot>
      </label>
      <div class="root" part="root">
        ${ra(r)}
        <input
          class="control"
          part="control"
          id="control"
          @change="${(e,t)=>e.changeHandler(t.event)}"
          @input="${(e,t)=>e.inputHandler(t.event)}"
          ?autofocus="${e=>e.autofocus}"
          autocomplete="${e=>e.autocomplete}"
          ?disabled="${e=>e.disabled}"
          list="${e=>e.list}"
          maxlength="${e=>e.maxlength}"
          minlength="${e=>e.minlength}"
          ?multiple="${e=>e.multiple}"
          name="${e=>e.name}"
          pattern="${e=>e.pattern}"
          placeholder="${e=>e.placeholder}"
          ?readonly="${e=>e.readOnly}"
          ?required="${e=>e.required}"
          size="${e=>e.size}"
          spellcheck="${e=>e.spellcheck}"
          type="${e=>e.type}"
          value="${e=>e.initialValue}"
          ${te("control")}
        />
        ${ta(r)}
        ${Ug(r)}        
      </div>
    </template>
  `}const Yg=jg(),qg=H`  

  :host(:state(dirty)) .root {
    border-top-color: orange;
    border-top-width: 2px;
    /* outline: 1px solid #0014ff80; */
     /* #ffa50080; */
  }

  .control {
    font-size: initial;
  }
  
  
`,Kg=Os.compose({name:`${Me.prefix}-text-input`,template:Yg,styles:[af,qg],shadowOptions:{delegatesFocus:!0}});Kg.define(Me.registry);const Nd=CSS.supports("selector(:state(g))"),Hl=new Map;function Br(r){return Hl.get(r)??Hl.set(r,Nd?`:state(${r})`:`[state--${r}]`).get(r)}function Ao(r,e,t){if(e){if(!Nd){r.shadowRoot.host.toggleAttribute(`state--${e}`,t);return}if(t??!r.states.has(e)){r.states.add(e);return}r.states.delete(e)}}const Wg=["horizontal-around","horizontal-left","horizontal-right","vertical-around","vertical-left","vertical-right","vertical-top","vertical-bottom"],Zg=Object.freeze({none:"none",visible:"visible",shy:"shy"});var Jg=Object.defineProperty,vt=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Jg(e,t,o),o};class lt extends nr{elementInternals=this.attachInternals();#e;#t=null;get resourceId(){return this.#e}set resourceId(e){if(this.#e)throw new ms("resourceId can't be reset");this.#e=e}constructor(){super(),this.spinStep=1,this.min=void 0,this.max=void 0,this.arrowsPosition="horizontal-around",this.arrows="shy",this.disabled=!1,this.readonly=!1,this.required=!1,this.elementInternals.role="spinbutton"}_syncControlValue(){const e=this.control??this.shadowRoot?.querySelector("input.control");if(!e)return;this.control=e;const t=Number.isFinite(this.value)?String(this.value):"";e.value!==t&&(e.value=t)}_dispatchChange(){this.$emit("change",{value:this.value},{bubbles:!0,composed:!0})}_dispatchInput(){this.$emit("input",{value:this.value},{bubbles:!0,composed:!0})}stepUp(){if(this.disabled||this.readonly)return;const e=Number.isFinite(this.value)?this.value:0,t=this.max??Number.POSITIVE_INFINITY,i=Math.min(e+this.spinStep,t);i!==this.value&&(this.value=i,this._syncControlValue(),this._dispatchChange(),this._dispatchInput())}stepDown(){if(this.disabled||this.readonly)return;const e=Number.isFinite(this.value)?this.value:0,t=this.min??Number.NEGATIVE_INFINITY,i=Math.max(e-this.spinStep,t);i!==this.value&&(this.value=i,this._syncControlValue(),this._dispatchChange(),this._dispatchInput())}stepUpStart(e){e.preventDefault(),this.stepUp(),this.#t=setInterval(()=>this.stepUp(),200)}stepDownStart(e){e.preventDefault(),this.stepDown(),this.#t=setInterval(()=>this.stepDown(),200)}stepStop(){this.#t&&(clearInterval(this.#t),this.#t=null)}inputHandler(e){const t=this.control??this.shadowRoot?.querySelector("input.control");if(!t)return!0;const i=t.value,o=Number.isFinite(this.value)?this.value:0;if(i==="-"||i==="."||i==="-.")return!0;const s=i===""?0:Number(i);if(isNaN(s))t.value=String(o);else{const n=this.min??Number.NEGATIVE_INFINITY,a=this.max??Number.POSITIVE_INFINITY,c=Math.min(Math.max(s,n),a);this.value=c,this._syncControlValue(),this._dispatchInput()}return!0}keydownHandler(e){if(this.disabled||this.readonly)return!0;switch(e.key){case"ArrowUp":e.preventDefault(),this.stepUp();break;case"ArrowDown":e.preventDefault(),this.stepDown();break;case"Home":e.preventDefault(),this.min!=null&&(this.value=this.min,this._syncControlValue(),this._dispatchChange(),this._dispatchInput());break;case"End":e.preventDefault(),this.max!=null&&(this.value=this.max,this._syncControlValue(),this._dispatchChange(),this._dispatchInput());break}return!0}changeHandler(e){const t=this.control;if(!t)return!0;const i=Number(t.value);let o;if(isNaN(i)||t.value==="")o=this.min!=null?this.min:0;else{const s=this.min??Number.NEGATIVE_INFINITY,n=this.max??Number.POSITIVE_INFINITY;o=Math.min(Math.max(i,s),n)}return o!==this.value&&(this.value=o),this._syncControlValue(),this._dispatchChange(),!0}#r(e){Wg.forEach(t=>Ao(this.elementInternals,t,!1)),e&&Ao(this.elementInternals,e,!0)}#o(){const e=this.arrows??Zg.shy;["arrows-none","arrows-visible","arrows-shy"].forEach(t=>Ao(this.elementInternals,t,!1)),Ao(this.elementInternals,`arrows-${e}`,!0)}connectedCallback(){super.connectedCallback(),this.#r(this.arrowsPosition),this.#o();const e=this.shadowRoot?.querySelector("input.control");e&&(this.control=e,this._syncControlValue()),requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector("input.control");t&&(this.control=t),this._syncControlValue()})}controlChanged(e,t){this._syncControlValue()}valueChanged(e,t){const i=this.shadowRoot?.querySelector("input.control");i&&(this.control=i),this._syncControlValue()}arrowsChanged(){this.#o()}arrowsPositionChanged(){this.#r(this.arrowsPosition)}minChanged(){this.#s()}maxChanged(){this.#s()}#s(){if(!Number.isFinite(this.value))return;const e=this.min??Number.NEGATIVE_INFINITY,t=this.max??Number.POSITIVE_INFINITY,i=Math.min(Math.max(this.value,e),t);i!==this.value&&(this.value=i,this._syncControlValue(),this._dispatchChange(),this._dispatchInput())}disconnectedCallback(){this.stepStop(),super.disconnectedCallback()}}vt([$],lt.prototype,"control");vt([S({converter:ce})],lt.prototype,"value");vt([S({attribute:"spin-step",converter:ce})],lt.prototype,"spinStep");vt([S({converter:ce})],lt.prototype,"min");vt([S({converter:ce})],lt.prototype,"max");vt([S({attribute:"arrows-position"})],lt.prototype,"arrowsPosition");vt([S],lt.prototype,"arrows");vt([S],lt.prototype,"appearance");vt([S({attribute:"control-size"})],lt.prototype,"controlSize");vt([S],lt.prototype,"placeholder");vt([S({mode:"boolean"})],lt.prototype,"disabled");vt([S({mode:"boolean"})],lt.prototype,"readonly");vt([S({mode:"boolean"})],lt.prototype,"required");vt([S],lt.prototype,"name");function Qg(){return ie`
    <template>
      <div class="root" part="root">
        <!-- Horizontal decrement arrow (left side positions) -->
        <fluent-button icon-only
          class="arrow arrow-step-down"
          part="arrow arrow-step-down"
          appearance="subtle"
          ?size=${r=>r.controlSize}
          ?disabled=${r=>r.disabled}
          ?hidden=${r=>r.readonly||r.arrows==="none"}
          @mousedown="${(r,e)=>r.stepDownStart(e.event)}"
          @mouseup="${r=>r.stepStop()}"
          @mouseleave="${r=>r.stepStop()}"
          tabindex="-1"
          aria-label="Decrement"
          type="button"
        >
          <slot name="arrow-step-down">
            <span class="arrow-icon" aria-hidden="true">❬</span>
          </slot>
        </fluent-button>

        <!-- Horizontal increment arrow (right side / horizontal positioning) -->
        <fluent-button icon-only
          class="arrow arrow-step-up"
          part="arrow arrow-step-up"
          appearance="subtle"
          ?size=${r=>r.controlSize}
          ?disabled=${r=>r.disabled}
          ?hidden=${r=>r.readonly||r.arrows==="none"}
          @mousedown="${(r,e)=>r.stepUpStart(e.event)}"
          @mouseup="${r=>r.stepStop()}"
          @mouseleave="${r=>r.stepStop()}"
          tabindex="-1"
          aria-label="Increment"
          type="button"
        >
          <slot name="arrow-step-up">
            <span class="arrow-icon" aria-hidden="true">❭</span>
          </slot>
        </fluent-button>

        <input
          class="control"
          part="control"
          type="text"
          inputmode="numeric"
          value="${r=>r.getAttribute("value")??r.value??""}"
          ?disabled="${r=>r.disabled}"
          ?readonly="${r=>r.readonly}"
          ?required="${r=>r.required}"
          placeholder="${r=>r.placeholder}"
          name="${r=>r.name}"
          @input="${(r,e)=>r.inputHandler(e.event)}"
          @change="${(r,e)=>r.changeHandler(e.event)}"
          @keydown="${(r,e)=>r.keydownHandler(e.event)}"
          autocomplete="off"
          ${te("control")}
        />
      </div>
    </template>
  `}const em=Qg(),Xl=Br("horizontal-around"),No=Br("horizontal-left"),Lo=Br("horizontal-right"),di=Br("vertical-around"),Cr=Br("vertical-left"),Er=Br("vertical-right"),dr=Br("vertical-top"),ur=Br("vertical-bottom"),tm=H`
  ${Ad("inline-flex")}

  :host {
    box-sizing: border-box;
    outline: none;
    font-family: ${ee};
    font-size: ${mt};
    font-weight: ${nt};
    line-height: ${bt};
    max-width: var(--320pbu, 320px);
  }

  .root {
    display: grid;
    align-items: stretch;
    box-sizing: border-box;
    width: 100%;
    gap: 0;
    border-radius: ${pt};
    border: ${Ut} solid ${oo};
    border-bottom-color: ${ei};
    background: ${or};    
    position: relative;
    transition: border-color 0.15s ease, background-color 0.15s ease;
  }

  .root::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: -1px;
    right: -1px;
    bottom: 0;
    height: max(2px, ${pt});
    border-radius: 0 0 ${pt} ${pt};
    border-bottom: 2px solid ${As};
    clip-path: inset(calc(100% - 2px) 1px 0px);
    transform: scaleX(0);
    transition-property: transform;
    transition-duration: ${dd};
    transition-timing-function: ${fs};
  }

  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-duration: ${Ns};
    transition-timing-function: ${gs};
  }

  :host(:focus-within:active) .root::after {
    border-bottom-color: ${Wc};
  }

  :host([disabled]) .root {
    border-color: ${Or};
    background: ${Es};
    cursor: not-allowed;
  }

  :host(:state(disabled)) .control {
    color: ${Ue};
  }

  /* ── Arrow position layouts ── */

  /* horizontal-around: ◀ | input | ▶ */
  :host([arrows-position='horizontal-around']) .root {
    grid-template-columns: auto 1fr auto;
  }
  :host([arrows-position='horizontal-around']) .arrow-step-down {
    grid-column: 1; grid-row: 1;
  }
  :host(:is(${Xl}, [arrows-position='horizontal-around'])) .control {
    grid-column: 2; grid-row: 1;
  }
  :host(:is(${Xl}, [arrows-position='horizontal-around'])) .arrow-step-up {
    grid-column: 3; grid-row: 1;
  }

  /* horizontal-left: ◀ | ▶ | input */
  :host(:is(${No}, [arrows-position='horizontal-left'])) .root {
    grid-template-columns: auto auto 1fr;
  }
  :host(:is(${No}, [arrows-position='horizontal-left'])) .arrow-step-down {
    grid-column: 1; grid-row: 1;
  }
  :host(:is(${No}, [arrows-position='horizontal-left'])) .arrow-step-up {
    grid-column: 2; grid-row: 1;
  }
  :host(:is(${No}, [arrows-position='horizontal-left'])) .control {
    grid-column: 3; grid-row: 1;
  }

  /* horizontal-right: input | ◀ | ▶ */
  :host(:is(${Lo}, [arrows-position='horizontal-right'])) .root {
    grid-template-columns: 1fr auto auto;
  }
  :host(:is(${Lo}, [arrows-position='horizontal-right'])) .control {
    grid-column: 1; grid-row: 1;
  }
  :host(:is(${Lo}, [arrows-position='horizontal-right'])) .arrow-step-down {
    grid-column: 2; grid-row: 1;
  }
  :host(:is(${Lo}, [arrows-position='horizontal-right'])) .arrow-step-up {
    grid-column: 3; grid-row: 1;
  }

  /* vertical-around: ▲ | input | ▼ */
  :host(:is(${di}, [arrows-position='vertical-around'])) .root {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }
  :host(:is(${di}, [arrows-position='vertical-around'])) .arrow-step-up {
    grid-column: 1; grid-row: 1;
  }
  :host(:is(${di}, [arrows-position='vertical-around'])) .control {
    grid-column: 1; grid-row: 2;
  }
  :host(:is(${di}, [arrows-position='vertical-around'])) .arrow-step-down {
    grid-column: 1; grid-row: 3;
  }

  /* vertical-left: ▲/▼ stacked left, input right */
  :host(:is(${Cr}, [arrows-position='vertical-left'])) .root {
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
  }
  :host(:is(${Cr}, [arrows-position='vertical-left'])) .arrow-step-up {
    grid-column: 1; grid-row: 1;
  }
  :host(:is(${Cr}, [arrows-position='vertical-left'])) .arrow-step-down {
    grid-column: 1; grid-row: 2;
  }
  :host(:is(${Cr}, [arrows-position='vertical-left'])) .control {
    grid-column: 2; grid-row: 1 / -1;
  }

  /* vertical-right: input left, ▲/▼ stacked right */
  :host(:is(${Er}, [arrows-position='vertical-right'])) .root {
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr 1fr;
  }
  :host(:is(${Er}, [arrows-position='vertical-right'])) .control {
    grid-column: 1; grid-row: 1 / -1;
  }
  :host(:is(${Er}, [arrows-position='vertical-right'])) .arrow-step-up {
    grid-column: 2; grid-row: 1;
  }
  :host(:is(${Er}, [arrows-position='vertical-right'])) .arrow-step-down {
    grid-column: 2; grid-row: 2;
  }

  /* vertical-top: arrows stacked above the input */
  :host(:is(${dr}, [arrows-position='vertical-top'])) .root {
    grid-template-rows: auto 1fr;
  }  
  :host(:is(${dr}, [arrows-position='vertical-top'])) .arrow-step-up {
    grid-column: 2; grid-row: 1;
  }
  :host(:is(${dr}, [arrows-position='vertical-top'])) .arrow-step-down {
    grid-column: 1; grid-row: 1;
  }
  :host(:is(${dr}, [arrows-position='vertical-top'])) .control {
    grid-column: 1 / span 2; grid-row: 2;
  }

  /* vertical-bottom: input above arrows stacked below */
  :host(:is(${ur}, [arrows-position='vertical-bottom'])) .root {
    grid-template-rows: 1fr auto;
  }
  :host(:is(${ur}, [arrows-position='vertical-bottom'])) .control {
    grid-column: 1 / span 2; grid-row: 1;
  }
  :host(:is(${ur}, [arrows-position='vertical-bottom'])) .arrow-step-up {
    grid-column: 2; grid-row: 2;
  }
  :host(:is(${ur}, [arrows-position='vertical-bottom'])) .arrow-step-down {
    grid-column: 1; grid-row: 2;
  }

  /* ── Arrow buttons ── */
  .arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    opacity: 0;
    transition: opacity 0.15s ease;
    border: none;    
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;    
    user-select: none;
    outline: none;
  }

  .arrow[icon-only] {
    min-width: var(--19pbu, 19px);
    max-width: none;

    min-height: var(--14pbu, 14px);
    max-height: var(--44pbu, 44px);
  }

  :host([arrows='none']) .arrow {
    display: none;
  }

  :host(:state(arrows-visible)) .arrow {
    opacity: 1;
  }

  :host(:state(arrows-shy)) .root:hover .arrow,
  :host(:state(arrows-shy):focus-within) .arrow {
    opacity: 1;
  }

  /* ── Arrow sizing by control-size ── */
  :host([control-size='small']) .arrow {
    width: var(--19pbu, 19px);
    height: var(--28pbu, 28px);
    font-size: ${Rt};
    border-radius: ${na};
  }

  :host(:is(:not([control-size]), [control-size=''], [control-size='medium'])) .arrow {
    width: var(--23pbu, 23px);
    height: var(--34pbu, 34px);
    font-size: ${Ot};
    border-radius: ${pt};
  }

  :host([control-size='large']) .arrow {
    width: var(--29pbu, 29px);
    height: var(--44pbu, 44px);
    font-size: ${no};
    border-radius: ${pt};
  }

  /* ── Arrow sizing by control-size ── */
  :host([control-size='small']:is(${Cr}, ${Er}, ${dr}, ${ur})) .arrow {
    height: var(--14pbu, 14px);
  }

  :host(:is(:not([control-size]), [control-size=''], [control-size='medium']):is(${Cr}, ${Er}, ${dr}, ${ur})) .arrow {
    height: var(--17pbu, 17px);
  }

  :host([control-size='large']:is(${Cr}, ${Er}, ${dr}, ${ur})) .arrow {
    height: var(--22pbu, 22px);
  }  

  :host(${di}) .arrow {
    width: 100%;
    height: var(--17pbu, 17px);
  }

  :host(${dr}, ${ur}) .arrow {
    width: 50%;
  }
  
  
  /* ── Icon rotation for vertical modes ──
   * Default slot icons: ◀ (step-down) and ▶ (step-up).
   * Vertical modes need ▲ (step-up) and ▼ (step-down).
   * Rotate the default horizontal arrows to achieve this. */
  :host(:is(${di}, ${Cr}, ${Er}, ${dr}, ${ur})) .arrow .arrow-icon {
    transform: rotate(-90deg);
  }

  .arrow-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    font-size: inherit;
    transition: transform 0.15s ease;
  }

  /* ── Input control ── */
  .control {
    appearance: none;
    border: none;
    background: ${Gt};
    color: ${qt};
    box-sizing: border-box;
    width: var(--48pbu, 48px);
    min-width: var(--24pbu, 24px);
    text-align: center;
    padding: 0;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    border-radius: ${pt};
  }

  .control:focus-visible {
    outline: 0;
    border: 0;
  }

  .control::placeholder {
    color: ${Xc};
  }

  /* ── Control sizing ── */
  :host([control-size='small']) .control {
    font-size: ${mt};
    line-height: ${bt};
    padding-block: ${cd};
    padding-inline: ${wo};
  }

  :host(:is(:not([control-size]), [control-size=''], [control-size='medium'])) .control {
    font-size: ${Ot};
    line-height: ${ar};
    padding-block: ${En};
    padding-inline: ${Zr};
  }

  :host([control-size='large']) .control {
    font-size: ${no};
    line-height: ${la};
    padding-block: ${Ko};
    padding-inline: ${Ei};
  }

  /* ── States ── */

  /* Disabled — hide arrows entirely */
  :host([disabled]) .arrow {
    opacity: 0 !important;
    pointer-events: none;
  }

  :host([disabled]) .control::placeholder {
    color: ${Ue};
  }

  :host(:state(disabled)) .control {
    color: ${Ue};
    cursor: not-allowed;
  }

  /* Readonly — hide arrows, default cursor */
  :host([readonly]) .arrow {
    display: none;
  }

  :host([readonly]) .control {
    cursor: default;
  }

  /* Focus-within — apply focus ring to root */
  :host(:focus-within) .root {
  }

  /* Invalid state */
  :host(:state(invalid)) .root {
    border-color: ${ei};
  }

  /* ── Appearance variants ── */
  :host([appearance='filled-lighter']) .root,
  :host([appearance='filled-darker']) .root {
    border: ${Ut} solid ${Et};
    box-shadow: ${ca};
  }

  :host([appearance='filled-lighter']) .root {
    background: ${or};
  }

  :host([appearance='filled-darker']) .root {
    background: ${cs};
  }

  :host([appearance='filled-lighter']:hover) .root,
  :host([appearance='filled-darker']:hover) .root {
    border-color: ${hs};
  }

  :host([appearance='filled-lighter']:active) .root,
  :host([appearance='filled-darker']:active) .root {
    border-color: ${hs};
    background: ${cs};
  }

  :host([appearance='underline']) .root {
    background: ${Gt};
    border: 0;
    border-radius: 0;
    border-bottom: ${Ut} solid ${ei};
  }

  :host([appearance='underline']:hover) .root {
    border-bottom-color: ${ds};
  }

  :host([appearance='underline']:active) .root {
    border-bottom-color: ${io};
  }

  :host([appearance='underline']:focus-within) .root {
    border: 0;
    border-bottom-color: ${io};
  }
`,rm=lt.compose({name:"n-input",template:em,styles:tm,shadowOptions:{delegatesFocus:!0}});rm.define(Me.registry);var im=Object.defineProperty,Ld=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&im(e,t,o),o};class va extends zs{#e=-1;get state(){return Q.track(this,"state"),this.#e}set state(e){e==null||this.#e===e||(this.#e=e,this.#t(e))}#t(e){switch(e){case-1:this.elementInternals.states.add("up"),this.elementInternals.states.add("left"),this.elementInternals.states.delete("right"),this.elementInternals.states.delete("down");break;case 1:this.elementInternals.states.delete("up"),this.elementInternals.states.delete("left"),this.elementInternals.states.add("right"),this.elementInternals.states.add("down");break}this.checked=e===1,Q.notify(this,"state"),this.$emit("change"),this.$emit("input")}constructor(){super(),this.elementInternals.role="switch"}clickHandler(e,t){if(!this.disabled)return e.preventDefault(),e.stopPropagation(),this.dirtyChecked=!0,this.state=t??(this.state===1?-1:1),!0}keydownHandler(e){if(e.key!==" "&&e.key!=="ArrowRight"&&e.key!=="ArrowLeft"&&e.key!=="ArrowUp"&&e.key!=="ArrowDown")return!0;e.preventDefault(),e.stopPropagation(),this._keydownPressed=!0}keyupHandler(e){if(!this._keydownPressed||e.key!==" "&&e.key!=="ArrowRight"&&e.key!=="ArrowLeft"&&e.key!=="ArrowUp"&&e.key!=="ArrowDown")return!0;this._keydownPressed=!1;let t;e.key===" "?t=this.#e===1?-1:1:e.key==="ArrowRight"||e.key==="ArrowDown"?t=1:t=-1,this.clickHandler(e,t)}connectedCallback(){super.connectedCallback?.(),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}initialCheckedChanged(e,t){this.dirtyChecked||(this.checked=!!t,this.state=this.checked?1:-1)}}Ld([S({attribute:"title-left"})],va.prototype,"titleLeft");Ld([S({attribute:"title-right"})],va.prototype,"titleRight");const om=ie`
    <template      
      @input="${(r,e)=>r.inputHandler(e.event)}"
      @keydown="${(r,e)=>r.keydownHandler(e.event)}"
      @keyup="${(r,e)=>r.keyupHandler(e.event)}"
    >
      <div class="checked-indicator" part="checked-indicator"></div>
      <div class="hover left-indicator" part="hover left-indicator" title="${r=>r.titleLeft}" @click="${(r,e)=>r.clickHandler(e.event,-1)}">
        <slot name="l"></slot>
      </div>
      <div class="hover right-indicator" part="hover right-indicator" title="${r=>r.titleRight}" @click="${(r,e)=>r.clickHandler(e.event,1)}">
        <slot name="r"></slot>
      </div>
    </template>
  `;class sm{listenerCache=new WeakMap;query;constructor(e){this.query=e}connectedCallback(e){const{query:t}=this;let i=this.listenerCache.get(e);i||(i=this.constructListener(e),this.listenerCache.set(e,i)),i.bind(t)(),t.addEventListener("change",i)}disconnectedCallback(e){const t=this.listenerCache.get(e);t&&this.query.removeEventListener("change",t)}}class So extends sm{styles;constructor(e,t){super(e),this.styles=t}static with(e){return t=>new So(e,t)}constructListener(e){let t=!1;const i=this.styles;return function(){const{matches:s}=this;s&&!t?(e.addStyles(i),t=s):!s&&t&&(e.removeStyles(i),t=s)}}removedCallback(e){e.removeStyles(this.styles)}}const nm=So.with(window.matchMedia("(forced-colors)"));So.with(window.matchMedia("(prefers-color-scheme: dark)"));So.with(window.matchMedia("(prefers-color-scheme: light)"));H.partial`
  ${Ad("inline-flex")} :host {
    position: relative;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    font-family: ${ee};
    font-weight: ${Ae};
    font-size: ${Rt};
    line-height: ${Zt};
    min-width: 20px;
    height: 20px;
    padding-inline: calc(${ao} + ${rr});
    border-radius: ${ii};
    border-color: ${Et};
    background-color: ${qc};
    color: ${Qr};
    contain: content;
  }

  ::slotted(svg) {
    font-size: 12px;
  }

  :host(:not([appearance='ghost']))::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-style: solid;
    border-width: ${Ut};
    border-color: inherit;
    border-radius: inherit;
  }
`;H.partial`
  :host([size='tiny']) {
    width: 6px;
    height: 6px;
    font-size: 4px;
    line-height: 4px;
    padding-inline: 0;
    min-width: unset;
  }
  :host([size='tiny']) ::slotted(svg) {
    font-size: 6px;
  }
  :host([size='extra-small']) {
    width: 10px;
    height: 10px;
    font-size: 6px;
    line-height: 6px;
    padding-inline: 0;
    min-width: unset;
  }
  :host([size='extra-small']) ::slotted(svg) {
    font-size: 10px;
  }
  :host([size='small']) {
    min-width: 16px;
    height: 16px;
    font-size: ${vo};
    line-height: ${xo};
    padding-inline: calc(${rr} + ${rr});
  }
  :host([size='small']) ::slotted(svg) {
    font-size: 12px;
  }
  :host([size='large']) {
    min-width: 24px;
    height: 24px;
    font-size: ${Rt};
    line-height: ${Zt};
    padding-inline: calc(${ao} + ${rr});
  }
  :host([size='large']) ::slotted(svg) {
    font-size: 16px;
  }
  :host([size='extra-large']) {
    min-width: 32px;
    height: 32px;
    font-size: ${Rt};
    line-height: ${Zt};
    padding-inline: calc(${wo} + ${rr});
  }
  :host([size='extra-large']) ::slotted(svg) {
    font-size: 20px;
  }
`;H.partial`
  :host([color='danger']) {
    background-color: ${Gp};
    color: ${Qr};
  }

  :host([color='important']) {
    background-color: ${qt};
    color: ${or};
  }

  :host([color='informative']) {
    background-color: ${kp};
    color: ${xr};
  }

  :host([color='severe']) {
    background-color: ${Up};
    color: ${Qr};
  }

  :host([color='subtle']) {
    background-color: ${or};
    color: ${qt};
  }

  :host([color='success']) {
    background-color: ${Tp};
    color: ${Qr};
  }

  :host([color='warning']) {
    background-color: ${Kp};
    color: ${wp};
  }
`;H.partial`
  :host([appearance='ghost']) {
    color: ${Uc};
    background-color: initial;
  }

  :host([appearance='ghost'][color='danger']) {
    color: ${Zc};
  }

  :host([appearance='ghost'][color='important']) {
    color: ${qt};
  }

  :host([appearance='ghost'][color='informative']) {
    color: ${xr};
  }

  :host([appearance='ghost'][color='severe']) {
    color: ${Jc};
  }

  :host([appearance='ghost'][color='subtle']) {
    color: ${oa};
  }

  :host([appearance='ghost'][color='success']) {
    color: ${Hp};
  }

  :host([appearance='ghost'][color='warning']) {
    color: ${sa};
  }
`;H.partial`
  :host([appearance='outline']) {
    border-color: currentColor;
    color: ${Uc};
    background-color: initial;
  }

  :host([appearance='outline'][color='danger']) {
    color: ${Zc};
  }

  :host([appearance='outline'][color='important']) {
    color: ${xr};
    border-color: ${ei};
  }

  :host([appearance='outline'][color='informative']) {
    color: ${xr};
    border-color: ${ps};
  }

  :host([appearance='outline'][color='severe']) {
    color: ${Jc};
  }

  :host([appearance='outline'][color='subtle']) {
    color: ${vp};
  }

  :host([appearance='outline'][color='success']) {
    color: ${Vp};
  }

  :host([appearance='outline'][color='warning']) {
    color: ${sa};
  }
`;H.partial`
  :host([appearance='tint']) {
    background-color: ${Ap};
    color: ${xp};
    border-color: ${Lp};
  }

  :host([appearance='tint'][color='danger']) {
    background-color: ${_p};
    color: ${Fp};
    border-color: ${Rp};
  }

  :host([appearance='tint'][color='important']) {
    background-color: ${xr};
    color: ${or};
    border-color: ${Et};
  }

  :host([appearance='tint'][color='informative']) {
    background-color: ${Ip};
    color: ${xr};
    border-color: ${ps};
  }

  :host([appearance='tint'][color='severe']) {
    background-color: ${Xp};
    color: ${Yp};
    border-color: ${jp};
  }

  :host([appearance='tint'][color='subtle']) {
    background-color: ${or};
    color: ${xr};
    border-color: ${ps};
  }

  :host([appearance='tint'][color='success']) {
    background-color: ${Mp};
    color: ${Dp};
    border-color: ${Bp};
  }

  :host([appearance='tint'][color='warning']) {
    background-color: ${qp};
    color: ${sa};
    border-color: ${Wp};
  }
`;H.partial`
  font-family: ${ee};
  font-size: ${mt};
  line-height: ${bt};
  font-weight: ${nt};
`;H.partial`
  font-family: ${ee};
  font-size: ${mt};
  line-height: ${bt};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${mt};
  line-height: ${bt};
  font-weight: ${Ci};
`;H.partial`
  font-family: ${ee};
  font-size: ${Ot};
  line-height: ${ar};
  font-weight: ${nt};
`;H.partial`
  font-family: ${ee};
  font-size: ${Rt};
  line-height: ${Zt};
  font-weight: ${nt};
`;H.partial`
  font-family: ${ee};
  font-size: ${Rt};
  line-height: ${Zt};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${Rt};
  line-height: ${Zt};
  font-weight: ${Ci};
`;H.partial`
  font-family: ${ee};
  font-size: ${vo};
  line-height: ${xo};
  font-weight: ${nt};
`;H.partial`
  font-family: ${ee};
  font-size: ${vo};
  line-height: ${xo};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${no};
  line-height: ${la};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${Ot};
  line-height: ${ar};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${Ot};
  line-height: ${ar};
  font-weight: ${Ci};
`;H.partial`
  font-family: ${ee};
  font-size: ${ed};
  line-height: ${sd};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${Qc};
  line-height: ${od};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${aa};
  line-height: ${id};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${td};
  line-height: ${nd};
  font-weight: ${Ae};
`;H.partial`
  font-family: ${ee};
  font-size: ${rd};
  line-height: ${ad};
  font-weight: ${Ae};
`;const am=H.partial`
  :host {
    --sz: 1;
  }

  :host([size='xs']) { 
    --sz: 0.6; 
    font-size: var(--fontSizeBase300);
  }
  :host([size='small']) { 
    --sz: 0.75; 
    font-size: var(--fontSizeBase400);
  }
  :host([size='large']) { 
    --sz: 1.25; 
    font-size: var(--fontSizeBase600);
  }
  :host([size='xl']) { 
    --sz: 1.5;
    font-size: var(--fontSizeBase700);
  }
`,lm=H`  
  ${am}

  :host {
    display: block;

    box-sizing: border-box;
    align-items: center;
    outline: none;
    user-select: none;
    contain: content;    
    background-color: ${Gt};
    border: var(--1pbu, 1px) solid ${Np};
    border-radius: var(--borderRadiusMNudge, calc(var(--3pbu, 3px) * var(--sz, 1)));
    position: relative;

    width: calc(var(--64pbu, 64px) * var(--sz, 1)) !important;
    height: calc(var(--32pbu, 32px) * var(--sz, 1)) !important;

    color: var(--colorNeutralForeground2);
    font-size: var(--fontSizeBase500);
    font-weight: var(--fontWeightMedium);    
    overflow: hidden;
  }

 
  :host([vertical]) {
    width: calc(var(--32pbu, 32px) * var(--sz, 1)) !important;
    height: calc(var(--64pbu, 64px) * var(--sz, 1)) !important;
  }

  :host(:enabled) {
    cursor: pointer;
  }

  :host(:hover) {
    background: none;
    border-color: ${ps};
  }
  :host(:active) {
    border-color: ${oo};
  }
  :host(:disabled),
  :host([readonly]) {
    border: calc(var(--1pbu, 1px) * var(--sz, 1)) solid ${Or};
    background-color: none;
    pointer: default;
  }


  :host(:state(checked)) {
    border-color: ${fl};
  }
  :host(:state(checked):hover) {
    border-color: ${Pn};
  }
  :host(:state(checked):active) {
    border-color: ${Cn};
  }
  :host(:state(checked):disabled) {
    background: ${Es};
    border-color: ${Or};
  }

  .checked-indicator,
  .left-indicator,
  .right-indicator {
    height: calc(var(--32pbu, 32px) * var(--sz, 1)) !important;
    width: calc(var(--32pbu, 32px) * var(--sz, 1)) !important;
    border-radius: var(--borderRadiusMNudge, calc(var(--3pbu, 3px) * var(--sz, 1)));
    transition-duration: ${Ns};
    transition-timing-function: ${pa};
    transition-property: margin-inline-start;     
  }

  .checked-indicator {
    margin-inline-start: 0;
    background-color: ${fl};
  }

  .left-indicator,
  .right-indicator {
    position: absolute;
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: center;  
  }

  .left-indicator:hover,
  .right-indicator:hover {
    background-color: ${jc};
  } 

  .left-indicator {
    left: 0; top: 0;
  }

  .right-indicator {
    right: 0; bottom: 0;
  }
  

  
  :host(:active) .checked-indicator {
  }

  :host(:disabled) .checked-indicator,
  :host([readonly]) .checked-indicator,
  :host(:disabled) .hover,
  :host([readonly]) .hover
  {
    background: ${Ue};
  }

  :host(:state(checked):disabled) .checked-indicator,
  :host(:state(checked):disabled) .hover {
    background: ${Ue};
  }

  :host(:state(right)) .checked-indicator,
  :host(:state(down)) .checked-indicator  
  {
    margin-inline-start: calc(100% - calc(var(--32pbu, 32px) * var(--sz, 1))) !important;
  }  
  :host([vertical]):host(:state(right)) .checked-indicator,
  :host([vertical]):host(:state(down)) .checked-indicator
  {
    margin-top: calc(var(--32pbu, 32px) * var(--sz, 1)) !important;
  }   



  :host(:focus-visible) {
    outline: none;
  }

  :host(:not([slot='input']):focus-visible) {
    border-color: ${Et};
    outline: ${ua} solid ${Et};
    outline-offset: calc(var(--1pbu, 1px) * var(--sz, 1));
    box-shadow: ${da}, 0 0 0 calc(var(--2pbu, 2px) * var(--sz, 1)) ${so};
  }
`.withBehaviors(nm(H`
    :host {
      border-color: InactiveBorder;
    }
    :host(:state(checked)),
    :host(:state(checked):active),
    :host(:state(checked):hover) {
      background: Highlight;
      border-color: Highlight;
    }
    .checked-indicator,
    :host(:hover) .checked-indicator,
    :host(:active) .checked-indicator {
      background-color: ActiveCaption;
    }
    :host(:state(checked)) .checked-indicator,
    :host(:state(checked):hover) .checked-indicator,
    :host(:state(checked):active) .checked-indicator {
      background-color: ButtonFace;
    }
    :host(:disabled) .checked-indicator,
    :host(:state(checked):disabled) .checked-indicator {
      background-color: GrayText;
    }
  `)),cm=va.compose({name:`${Me.prefix}-switch`,template:om,styles:lm});cm.define(Me.registry);const k={2:"#050505",4:"#0a0a0a",6:"#0f0f0f",8:"#141414",10:"#1a1a1a",12:"#1f1f1f",14:"#242424",16:"#292929",18:"#2e2e2e",20:"#333333",22:"#383838",24:"#3d3d3d",26:"#424242",30:"#4d4d4d",32:"#525252",34:"#575757",36:"#5c5c5c",38:"#616161",40:"#666666",42:"#6b6b6b",44:"#707070",46:"#757575",60:"#999999",68:"#adadad",70:"#b3b3b3",74:"#bdbdbd",78:"#c7c7c7",82:"#d1d1d1",84:"#d6d6d6",86:"#dbdbdb",88:"#e0e0e0",90:"#e6e6e6",92:"#ebebeb",94:"#f0f0f0",96:"#f5f5f5",98:"#fafafa",99:"#fcfcfc"},Je={5:"rgba(255, 255, 255, 0.05)",10:"rgba(255, 255, 255, 0.1)",20:"rgba(255, 255, 255, 0.2)",40:"rgba(255, 255, 255, 0.4)",50:"rgba(255, 255, 255, 0.5)",60:"rgba(255, 255, 255, 0.6)",70:"rgba(255, 255, 255, 0.7)",80:"rgba(255, 255, 255, 0.8)"},Lt={5:"rgba(0, 0, 0, 0.05)",10:"rgba(0, 0, 0, 0.1)",20:"rgba(0, 0, 0, 0.2)",30:"rgba(0, 0, 0, 0.3)",40:"rgba(0, 0, 0, 0.4)",50:"rgba(0, 0, 0, 0.5)"},dm={50:"rgba(26, 26, 26, 0.5)"},um={70:"rgba(31, 31, 31, 0.7)"},Ul={50:"rgba(36, 36, 36, 0.5)",80:"rgba(36, 36, 36, 0.8)"},W="#ffffff",Qo="#000000",pm={shade50:"#130204",shade40:"#230308",shade30:"#420610",shade20:"#590815",shade10:"#690a19",primary:"#750b1c",tint10:"#861b2c",tint20:"#962f3f",tint30:"#ac4f5e",tint40:"#d69ca5",tint50:"#e9c7cd",tint60:"#f9f0f2"},zd={shade50:"#200205",shade40:"#3b0509",shade30:"#6e0811",shade20:"#960b18",shade10:"#b10e1c",primary:"#c50f1f",tint10:"#cc2635",tint20:"#d33f4c",tint30:"#dc626d",tint40:"#eeacb2",tint50:"#f6d1d5",tint60:"#fdf3f4"},hm={shade50:"#210809",shade40:"#3f1011",shade30:"#751d1f",shade20:"#9f282b",shade10:"#bc2f32",primary:"#d13438",tint10:"#d7494c",tint20:"#dc5e62",tint30:"#e37d80",tint40:"#f1bbbc",tint50:"#f8dadb",tint60:"#fdf6f6"},fm={shade50:"#230900",shade40:"#411200",shade30:"#7a2101",shade20:"#a62d01",shade10:"#c43501",primary:"#da3b01",tint10:"#de501c",tint20:"#e36537",tint30:"#e9835e",tint40:"#f4bfab",tint50:"#f9dcd1",tint60:"#fdf6f3"},gm={shade50:"#200d03",shade40:"#3d1805",shade30:"#712d09",shade20:"#9a3d0c",shade10:"#b6480e",primary:"#ca5010",tint10:"#d06228",tint20:"#d77440",tint30:"#df8e64",tint40:"#efc4ad",tint50:"#f7dfd2",tint60:"#fdf7f4"},mm={shade50:"#271002",shade40:"#4a1e04",shade30:"#8a3707",shade20:"#bc4b09",shade10:"#de590b",primary:"#f7630c",tint10:"#f87528",tint20:"#f98845",tint30:"#faa06b",tint40:"#fdcfb4",tint50:"#fee5d7",tint60:"#fff9f5"},bm={shade50:"#291600",shade40:"#4d2a00",shade30:"#8f4e00",shade20:"#c26a00",shade10:"#e67e00",primary:"#ff8c00",tint10:"#ff9a1f",tint20:"#ffa83d",tint30:"#ffba66",tint40:"#ffddb3",tint50:"#ffedd6",tint60:"#fffaf5"},ym={shade50:"#251a00",shade40:"#463100",shade30:"#835b00",shade20:"#b27c00",shade10:"#d39300",primary:"#eaa300",tint10:"#edad1c",tint20:"#efb839",tint30:"#f2c661",tint40:"#f9e2ae",tint50:"#fcefd3",tint60:"#fefbf4"},vm={shade50:"#282400",shade40:"#4c4400",shade30:"#817400",shade20:"#c0ad00",shade10:"#e4cc00",primary:"#fde300",tint10:"#fde61e",tint20:"#fdea3d",tint30:"#feee66",tint40:"#fef7b2",tint50:"#fffad6",tint60:"#fffef5"},xm={shade50:"#1f1900",shade40:"#3a2f00",shade30:"#6c5700",shade20:"#937700",shade10:"#ae8c00",primary:"#c19c00",tint10:"#c8a718",tint20:"#d0b232",tint30:"#dac157",tint40:"#ecdfa5",tint50:"#f5eece",tint60:"#fdfbf2"},wm={shade50:"#181202",shade40:"#2e2103",shade30:"#553e06",shade20:"#745408",shade10:"#89640a",primary:"#986f0b",tint10:"#a47d1e",tint20:"#b18c34",tint30:"#c1a256",tint40:"#e0cea2",tint50:"#efe4cb",tint60:"#fbf8f2"},Sm={shade50:"#170e07",shade40:"#2b1a0e",shade30:"#50301a",shade20:"#6c4123",shade10:"#804d29",primary:"#8e562e",tint10:"#9c663f",tint20:"#a97652",tint30:"#bb8f6f",tint40:"#ddc3b0",tint50:"#edded3",tint60:"#faf7f4"},Im={shade50:"#0c1501",shade40:"#162702",shade30:"#294903",shade20:"#376304",shade10:"#427505",primary:"#498205",tint10:"#599116",tint20:"#6ba02b",tint30:"#85b44c",tint40:"#bdd99b",tint50:"#dbebc7",tint60:"#f6faf0"},km={shade50:"#002111",shade40:"#003d20",shade30:"#00723b",shade20:"#009b51",shade10:"#00b85f",primary:"#00cc6a",tint10:"#19d279",tint20:"#34d889",tint30:"#5ae0a0",tint40:"#a8f0cd",tint50:"#cff7e4",tint60:"#f3fdf8"},$m={shade50:"#031a02",shade40:"#063004",shade30:"#0b5a08",shade20:"#0e7a0b",shade10:"#11910d",primary:"#13a10e",tint10:"#27ac22",tint20:"#3db838",tint30:"#5ec75a",tint40:"#a7e3a5",tint50:"#cef0cd",tint60:"#f2fbf2"},_d={shade50:"#031403",shade40:"#052505",shade30:"#094509",shade20:"#0c5e0c",shade10:"#0e700e",primary:"#107c10",tint10:"#218c21",tint20:"#359b35",tint30:"#54b054",tint40:"#9fd89f",tint50:"#c9eac9",tint60:"#f1faf1"},Pm={shade50:"#021102",shade40:"#032003",shade30:"#063b06",shade20:"#085108",shade10:"#0a5f0a",primary:"#0b6a0b",tint10:"#1a7c1a",tint20:"#2d8e2d",tint30:"#4da64d",tint40:"#9ad29a",tint50:"#c6e7c6",tint60:"#f0f9f0"},Cm={shade50:"#001d1f",shade40:"#00373a",shade30:"#00666d",shade20:"#008b94",shade10:"#00a5af",primary:"#00b7c3",tint10:"#18bfca",tint20:"#32c8d1",tint30:"#58d3db",tint40:"#a6e9ed",tint50:"#cef3f5",tint60:"#f2fcfd"},Em={shade50:"#001516",shade40:"#012728",shade30:"#02494c",shade20:"#026467",shade10:"#037679",primary:"#038387",tint10:"#159195",tint20:"#2aa0a4",tint30:"#4cb4b7",tint40:"#9bd9db",tint50:"#c7ebec",tint60:"#f0fafa"},Am={shade50:"#000f12",shade40:"#001b22",shade30:"#00333f",shade20:"#004555",shade10:"#005265",primary:"#005b70",tint10:"#0f6c81",tint20:"#237d92",tint30:"#4496a9",tint40:"#94c8d4",tint50:"#c3e1e8",tint60:"#eff7f9"},Nm={shade50:"#001322",shade40:"#002440",shade30:"#004377",shade20:"#005ba1",shade10:"#006cbf",primary:"#0078d4",tint10:"#1a86d9",tint20:"#3595de",tint30:"#5caae5",tint40:"#a9d3f2",tint50:"#d0e7f8",tint60:"#f3f9fd"},Lm={shade50:"#000c16",shade40:"#00172a",shade30:"#002c4e",shade20:"#003b6a",shade10:"#00467e",primary:"#004e8c",tint10:"#125e9a",tint20:"#286fa8",tint30:"#4a89ba",tint40:"#9abfdc",tint50:"#c7dced",tint60:"#f0f6fa"},zm={shade50:"#0d1126",shade40:"#182047",shade30:"#2c3c85",shade20:"#3c51b4",shade10:"#4760d5",primary:"#4f6bed",tint10:"#637cef",tint20:"#778df1",tint30:"#93a4f4",tint40:"#c8d1fa",tint50:"#e1e6fc",tint60:"#f7f9fe"},_m={shade50:"#00061d",shade40:"#000c36",shade30:"#001665",shade20:"#001e89",shade10:"#0023a2",primary:"#0027b4",tint10:"#173bbd",tint20:"#3050c6",tint30:"#546fd2",tint40:"#a3b2e8",tint50:"#ccd5f3",tint60:"#f2f4fc"},Gm={shade50:"#120f25",shade40:"#221d46",shade30:"#3f3682",shade20:"#5649b0",shade10:"#6656d1",primary:"#7160e8",tint10:"#8172eb",tint20:"#9184ee",tint30:"#a79cf1",tint40:"#d2ccf8",tint50:"#e7e4fb",tint60:"#f9f8fe"},Rm={shade50:"#0f0717",shade40:"#1c0e2b",shade30:"#341a51",shade20:"#46236e",shade10:"#532982",primary:"#5c2e91",tint10:"#6b3f9e",tint20:"#7c52ab",tint30:"#9470bd",tint40:"#c6b1de",tint50:"#e0d3ed",tint60:"#f7f4fb"},Om={shade50:"#160418",shade40:"#29072e",shade30:"#4c0d55",shade20:"#671174",shade10:"#7a1589",primary:"#881798",tint10:"#952aa4",tint20:"#a33fb1",tint30:"#b55fc1",tint40:"#d9a7e0",tint50:"#eaceef",tint60:"#faf2fb"},Fm={shade50:"#1f091d",shade40:"#3a1136",shade30:"#6d2064",shade20:"#932b88",shade10:"#af33a1",primary:"#c239b3",tint10:"#c94cbc",tint20:"#d161c4",tint30:"#da7ed0",tint40:"#edbbe7",tint50:"#f5daf2",tint60:"#fdf5fc"},Mm={shade50:"#1c0b1f",shade40:"#35153a",shade30:"#63276d",shade20:"#863593",shade10:"#9f3faf",primary:"#b146c2",tint10:"#ba58c9",tint20:"#c36bd1",tint30:"#cf87da",tint40:"#e6bfed",tint50:"#f2dcf5",tint60:"#fcf6fd"},Tm={shade50:"#24091b",shade40:"#441232",shade30:"#80215d",shade20:"#ad2d7e",shade10:"#cd3595",primary:"#e43ba6",tint10:"#e750b0",tint20:"#ea66ba",tint30:"#ef85c8",tint40:"#f7c0e3",tint50:"#fbddf0",tint60:"#fef6fb"},Bm={shade50:"#1f0013",shade40:"#390024",shade30:"#6b0043",shade20:"#91005a",shade10:"#ac006b",primary:"#bf0077",tint10:"#c71885",tint20:"#ce3293",tint30:"#d957a8",tint40:"#eca5d1",tint50:"#f5cee6",tint60:"#fcf2f9"},Dm={shade50:"#13000c",shade40:"#240017",shade30:"#43002b",shade20:"#5a003b",shade10:"#6b0045",primary:"#77004d",tint10:"#87105d",tint20:"#98246f",tint30:"#ad4589",tint40:"#d696c0",tint50:"#e9c4dc",tint60:"#faf0f6"},Vm={shade50:"#141313",shade40:"#252323",shade30:"#444241",shade20:"#5d5958",shade10:"#6e6968",primary:"#7a7574",tint10:"#8a8584",tint20:"#9a9594",tint30:"#afabaa",tint40:"#d7d4d4",tint50:"#eae8e8",tint60:"#faf9f9"},Hm={shade50:"#0f0e0e",shade40:"#1c1b1a",shade30:"#343231",shade20:"#474443",shade10:"#54514f",primary:"#5d5a58",tint10:"#706d6b",tint20:"#84817e",tint30:"#9e9b99",tint40:"#cecccb",tint50:"#e5e4e3",tint60:"#f8f8f8"},Xm={shade50:"#111314",shade40:"#1f2426",shade30:"#3b4447",shade20:"#505c60",shade10:"#5f6d71",primary:"#69797e",tint10:"#79898d",tint20:"#89989d",tint30:"#a0adb2",tint40:"#cdd6d8",tint50:"#e4e9ea",tint60:"#f8f9fa"},Um={shade50:"#090a0b",shade40:"#111315",shade30:"#202427",shade20:"#2b3135",shade10:"#333a3f",primary:"#394146",tint10:"#4d565c",tint20:"#626c72",tint30:"#808a90",tint40:"#bcc3c7",tint50:"#dbdfe1",tint60:"#f6f7f8"},be={red:hm,green:_d,darkOrange:fm,yellow:vm,berry:Fm,lightGreen:$m,marigold:ym},Rr={darkRed:pm,cranberry:zd,pumpkin:gm,peach:bm,gold:xm,brass:wm,brown:Sm,forest:Im,seafoam:km,darkGreen:Pm,lightTeal:Cm,teal:Em,steel:Am,blue:Nm,royalBlue:Lm,cornflower:zm,navy:_m,lavender:Gm,purple:Rm,grape:Om,lilac:Mm,pink:Tm,magenta:Bm,plum:Dm,beige:Vm,mink:Hm,platinum:Xm,anchor:Um},fe={cranberry:zd,green:_d,orange:mm},Gd=["red","green","darkOrange","yellow","berry","lightGreen","marigold"],Rd=["darkRed","cranberry","pumpkin","peach","gold","brass","brown","forest","seafoam","darkGreen","lightTeal","teal","steel","blue","royalBlue","cornflower","navy","lavender","purple","grape","lilac","pink","magenta","plum","beige","mink","platinum","anchor"],xt={success:"green",warning:"orange",danger:"cranberry"},Io=Gd.reduce((r,e)=>{const t=e.slice(0,1).toUpperCase()+e.slice(1),i={[`colorPalette${t}Background1`]:be[e].tint60,[`colorPalette${t}Background2`]:be[e].tint40,[`colorPalette${t}Background3`]:be[e].primary,[`colorPalette${t}Foreground1`]:be[e].shade10,[`colorPalette${t}Foreground2`]:be[e].shade30,[`colorPalette${t}Foreground3`]:be[e].primary,[`colorPalette${t}BorderActive`]:be[e].primary,[`colorPalette${t}Border1`]:be[e].tint40,[`colorPalette${t}Border2`]:be[e].primary};return Object.assign(r,i)},{});Io.colorPaletteYellowForeground1=be.yellow.shade30;Io.colorPaletteRedForegroundInverted=be.red.tint20;Io.colorPaletteGreenForegroundInverted=be.green.tint20;Io.colorPaletteYellowForegroundInverted=be.yellow.tint40;const jm=Rd.reduce((r,e)=>{const t=e.slice(0,1).toUpperCase()+e.slice(1),i={[`colorPalette${t}Background2`]:Rr[e].tint40,[`colorPalette${t}Foreground2`]:Rr[e].shade30,[`colorPalette${t}BorderActive`]:Rr[e].primary};return Object.assign(r,i)},{}),Ym={...Io,...jm},zi=Object.entries(xt).reduce((r,[e,t])=>{const i=e.slice(0,1).toUpperCase()+e.slice(1),o={[`colorStatus${i}Background1`]:fe[t].tint60,[`colorStatus${i}Background2`]:fe[t].tint40,[`colorStatus${i}Background3`]:fe[t].primary,[`colorStatus${i}Foreground1`]:fe[t].shade10,[`colorStatus${i}Foreground2`]:fe[t].shade30,[`colorStatus${i}Foreground3`]:fe[t].primary,[`colorStatus${i}ForegroundInverted`]:fe[t].tint30,[`colorStatus${i}BorderActive`]:fe[t].primary,[`colorStatus${i}Border1`]:fe[t].tint40,[`colorStatus${i}Border2`]:fe[t].primary};return Object.assign(r,o)},{});zi.colorStatusDangerBackground3Hover=fe[xt.danger].shade10;zi.colorStatusDangerBackground3Pressed=fe[xt.danger].shade20;zi.colorStatusWarningForeground1=fe[xt.warning].shade20;zi.colorStatusWarningForeground3=fe[xt.warning].shade20;zi.colorStatusWarningBorder2=fe[xt.warning].shade20;const qm=r=>({colorNeutralForeground1:k[14],colorNeutralForeground1Hover:k[14],colorNeutralForeground1Pressed:k[14],colorNeutralForeground1Selected:k[14],colorNeutralForeground2:k[26],colorNeutralForeground2Hover:k[14],colorNeutralForeground2Pressed:k[14],colorNeutralForeground2Selected:k[14],colorNeutralForeground2BrandHover:r[80],colorNeutralForeground2BrandPressed:r[70],colorNeutralForeground2BrandSelected:r[80],colorNeutralForeground3:k[38],colorNeutralForeground3Hover:k[26],colorNeutralForeground3Pressed:k[26],colorNeutralForeground3Selected:k[26],colorNeutralForeground3BrandHover:r[80],colorNeutralForeground3BrandPressed:r[70],colorNeutralForeground3BrandSelected:r[80],colorNeutralForeground4:k[44],colorNeutralForeground5:k[38],colorNeutralForeground5Hover:k[14],colorNeutralForeground5Pressed:k[14],colorNeutralForeground5Selected:k[14],colorNeutralForegroundDisabled:k[74],colorNeutralForegroundInvertedDisabled:Je[40],colorBrandForegroundLink:r[70],colorBrandForegroundLinkHover:r[60],colorBrandForegroundLinkPressed:r[40],colorBrandForegroundLinkSelected:r[70],colorNeutralForeground2Link:k[26],colorNeutralForeground2LinkHover:k[14],colorNeutralForeground2LinkPressed:k[14],colorNeutralForeground2LinkSelected:k[14],colorCompoundBrandForeground1:r[80],colorCompoundBrandForeground1Hover:r[70],colorCompoundBrandForeground1Pressed:r[60],colorBrandForeground1:r[80],colorBrandForeground2:r[70],colorBrandForeground2Hover:r[60],colorBrandForeground2Pressed:r[30],colorNeutralForeground1Static:k[14],colorNeutralForegroundStaticInverted:W,colorNeutralForegroundInverted:W,colorNeutralForegroundInvertedHover:W,colorNeutralForegroundInvertedPressed:W,colorNeutralForegroundInvertedSelected:W,colorNeutralForegroundInverted2:W,colorNeutralForegroundOnBrand:W,colorNeutralForegroundInvertedLink:W,colorNeutralForegroundInvertedLinkHover:W,colorNeutralForegroundInvertedLinkPressed:W,colorNeutralForegroundInvertedLinkSelected:W,colorBrandForegroundInverted:r[100],colorBrandForegroundInvertedHover:r[110],colorBrandForegroundInvertedPressed:r[100],colorBrandForegroundOnLight:r[80],colorBrandForegroundOnLightHover:r[70],colorBrandForegroundOnLightPressed:r[50],colorBrandForegroundOnLightSelected:r[60],colorNeutralBackground1:W,colorNeutralBackground1Hover:k[96],colorNeutralBackground1Pressed:k[88],colorNeutralBackground1Selected:k[92],colorNeutralBackground2:k[98],colorNeutralBackground2Hover:k[94],colorNeutralBackground2Pressed:k[86],colorNeutralBackground2Selected:k[90],colorNeutralBackground3:k[96],colorNeutralBackground3Hover:k[92],colorNeutralBackground3Pressed:k[84],colorNeutralBackground3Selected:k[88],colorNeutralBackground4:k[94],colorNeutralBackground4Hover:k[98],colorNeutralBackground4Pressed:k[96],colorNeutralBackground4Selected:W,colorNeutralBackground5:k[92],colorNeutralBackground5Hover:k[96],colorNeutralBackground5Pressed:k[94],colorNeutralBackground5Selected:k[98],colorNeutralBackground6:k[90],colorNeutralBackground7:"#00000000",colorNeutralBackground7Hover:k[92],colorNeutralBackground7Pressed:k[84],colorNeutralBackground7Selected:"#00000000",colorNeutralBackground8:k[99],colorNeutralBackgroundInverted:k[16],colorNeutralBackgroundInvertedHover:k[24],colorNeutralBackgroundInvertedPressed:k[12],colorNeutralBackgroundInvertedSelected:k[22],colorNeutralBackgroundStatic:k[20],colorNeutralBackgroundAlpha:Je[50],colorNeutralBackgroundAlpha2:Je[80],colorSubtleBackground:"transparent",colorSubtleBackgroundHover:k[96],colorSubtleBackgroundPressed:k[88],colorSubtleBackgroundSelected:k[92],colorSubtleBackgroundLightAlphaHover:Je[70],colorSubtleBackgroundLightAlphaPressed:Je[50],colorSubtleBackgroundLightAlphaSelected:"transparent",colorSubtleBackgroundInverted:"transparent",colorSubtleBackgroundInvertedHover:Lt[10],colorSubtleBackgroundInvertedPressed:Lt[30],colorSubtleBackgroundInvertedSelected:Lt[20],colorTransparentBackground:"transparent",colorTransparentBackgroundHover:"transparent",colorTransparentBackgroundPressed:"transparent",colorTransparentBackgroundSelected:"transparent",colorNeutralBackgroundDisabled:k[94],colorNeutralBackgroundDisabled2:W,colorNeutralBackgroundInvertedDisabled:Je[10],colorNeutralStencil1:k[90],colorNeutralStencil2:k[98],colorNeutralStencil1Alpha:Lt[10],colorNeutralStencil2Alpha:Lt[5],colorBackgroundOverlay:Lt[40],colorScrollbarOverlay:Lt[50],colorBrandBackground:r[80],colorBrandBackgroundHover:r[70],colorBrandBackgroundPressed:r[40],colorBrandBackgroundSelected:r[60],colorCompoundBrandBackground:r[80],colorCompoundBrandBackgroundHover:r[70],colorCompoundBrandBackgroundPressed:r[60],colorBrandBackgroundStatic:r[80],colorBrandBackground2:r[160],colorBrandBackground2Hover:r[150],colorBrandBackground2Pressed:r[130],colorBrandBackground3Static:r[60],colorBrandBackground4Static:r[40],colorBrandBackgroundInverted:W,colorBrandBackgroundInvertedHover:r[160],colorBrandBackgroundInvertedPressed:r[140],colorBrandBackgroundInvertedSelected:r[150],colorNeutralCardBackground:k[98],colorNeutralCardBackgroundHover:W,colorNeutralCardBackgroundPressed:k[96],colorNeutralCardBackgroundSelected:k[92],colorNeutralCardBackgroundDisabled:k[94],colorNeutralStrokeAccessible:k[38],colorNeutralStrokeAccessibleHover:k[34],colorNeutralStrokeAccessiblePressed:k[30],colorNeutralStrokeAccessibleSelected:r[80],colorNeutralStroke1:k[82],colorNeutralStroke1Hover:k[78],colorNeutralStroke1Pressed:k[70],colorNeutralStroke1Selected:k[74],colorNeutralStroke2:k[88],colorNeutralStroke3:k[94],colorNeutralStroke4:k[92],colorNeutralStroke4Hover:k[88],colorNeutralStroke4Pressed:k[84],colorNeutralStroke4Selected:k[92],colorNeutralStrokeSubtle:k[88],colorNeutralStrokeOnBrand:W,colorNeutralStrokeOnBrand2:W,colorNeutralStrokeOnBrand2Hover:W,colorNeutralStrokeOnBrand2Pressed:W,colorNeutralStrokeOnBrand2Selected:W,colorBrandStroke1:r[80],colorBrandStroke2:r[140],colorBrandStroke2Hover:r[120],colorBrandStroke2Pressed:r[80],colorBrandStroke2Contrast:r[140],colorCompoundBrandStroke:r[80],colorCompoundBrandStrokeHover:r[70],colorCompoundBrandStrokePressed:r[60],colorNeutralStrokeDisabled:k[88],colorNeutralStrokeDisabled2:k[92],colorNeutralStrokeInvertedDisabled:Je[40],colorTransparentStroke:"transparent",colorTransparentStrokeInteractive:"transparent",colorTransparentStrokeDisabled:"transparent",colorNeutralStrokeAlpha:Lt[5],colorNeutralStrokeAlpha2:Je[20],colorStrokeFocus1:W,colorStrokeFocus2:Qo,colorNeutralShadowAmbient:"rgba(0,0,0,0.12)",colorNeutralShadowKey:"rgba(0,0,0,0.14)",colorNeutralShadowAmbientLighter:"rgba(0,0,0,0.06)",colorNeutralShadowKeyLighter:"rgba(0,0,0,0.07)",colorNeutralShadowAmbientDarker:"rgba(0,0,0,0.20)",colorNeutralShadowKeyDarker:"rgba(0,0,0,0.24)",colorBrandShadowAmbient:"rgba(0,0,0,0.30)",colorBrandShadowKey:"rgba(0,0,0,0.25)"}),Od={borderRadiusNone:"0",borderRadiusSmall:"2px",borderRadiusMedium:"4px",borderRadiusLarge:"6px",borderRadiusXLarge:"8px",borderRadius2XLarge:"12px",borderRadius3XLarge:"16px",borderRadius4XLarge:"24px",borderRadius5XLarge:"32px",borderRadius6XLarge:"40px",borderRadiusCircular:"10000px"},Fd={curveAccelerateMax:"cubic-bezier(0.9,0.1,1,0.2)",curveAccelerateMid:"cubic-bezier(1,0,1,1)",curveAccelerateMin:"cubic-bezier(0.8,0,0.78,1)",curveDecelerateMax:"cubic-bezier(0.1,0.9,0.2,1)",curveDecelerateMid:"cubic-bezier(0,0,0,1)",curveDecelerateMin:"cubic-bezier(0.33,0,0.1,1)",curveEasyEaseMax:"cubic-bezier(0.8,0,0.2,1)",curveEasyEase:"cubic-bezier(0.33,0,0.67,1)",curveLinear:"cubic-bezier(0,0,1,1)"},Md={durationUltraFast:"50ms",durationFaster:"100ms",durationFast:"150ms",durationNormal:"200ms",durationGentle:"250ms",durationSlow:"300ms",durationSlower:"400ms",durationUltraSlow:"500ms"},Td={fontSizeBase100:"10px",fontSizeBase200:"12px",fontSizeBase300:"14px",fontSizeBase400:"16px",fontSizeBase500:"20px",fontSizeBase600:"24px",fontSizeHero700:"28px",fontSizeHero800:"32px",fontSizeHero900:"40px",fontSizeHero1000:"68px"},Bd={lineHeightBase100:"14px",lineHeightBase200:"16px",lineHeightBase300:"20px",lineHeightBase400:"22px",lineHeightBase500:"28px",lineHeightBase600:"32px",lineHeightHero700:"36px",lineHeightHero800:"40px",lineHeightHero900:"52px",lineHeightHero1000:"92px"},Dd={fontWeightRegular:400,fontWeightMedium:500,fontWeightSemibold:600,fontWeightBold:700},Vd={fontFamilyBase:"'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",fontFamilyMonospace:"Consolas, 'Courier New', Courier, monospace",fontFamilyNumeric:"Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif"},_e={none:"0",xxs:"2px",xs:"4px",sNudge:"6px",s:"8px",mNudge:"10px",m:"12px",l:"16px",xl:"20px",xxl:"24px",xxxl:"32px"},Hd={spacingHorizontalNone:_e.none,spacingHorizontalXXS:_e.xxs,spacingHorizontalXS:_e.xs,spacingHorizontalSNudge:_e.sNudge,spacingHorizontalS:_e.s,spacingHorizontalMNudge:_e.mNudge,spacingHorizontalM:_e.m,spacingHorizontalL:_e.l,spacingHorizontalXL:_e.xl,spacingHorizontalXXL:_e.xxl,spacingHorizontalXXXL:_e.xxxl},Xd={spacingVerticalNone:_e.none,spacingVerticalXXS:_e.xxs,spacingVerticalXS:_e.xs,spacingVerticalSNudge:_e.sNudge,spacingVerticalS:_e.s,spacingVerticalMNudge:_e.mNudge,spacingVerticalM:_e.m,spacingVerticalL:_e.l,spacingVerticalXL:_e.xl,spacingVerticalXXL:_e.xxl,spacingVerticalXXXL:_e.xxxl},Ud={strokeWidthThin:"1px",strokeWidthThick:"2px",strokeWidthThicker:"3px",strokeWidthThickest:"4px"};function vs(r,e,t=""){return{[`shadow2${t}`]:`0 0 2px ${r}, 0 1px 2px ${e}`,[`shadow4${t}`]:`0 0 2px ${r}, 0 2px 4px ${e}`,[`shadow8${t}`]:`0 0 2px ${r}, 0 4px 8px ${e}`,[`shadow16${t}`]:`0 0 2px ${r}, 0 8px 16px ${e}`,[`shadow28${t}`]:`0 0 8px ${r}, 0 14px 28px ${e}`,[`shadow64${t}`]:`0 0 8px ${r}, 0 32px 64px ${e}`}}const Km=r=>{const e=qm(r);return{...Od,...Td,...Bd,...Vd,...Dd,...Ud,...Hd,...Xd,...Md,...Fd,...e,...Ym,...zi,...vs(e.colorNeutralShadowAmbient,e.colorNeutralShadowKey),...vs(e.colorBrandShadowAmbient,e.colorBrandShadowKey,"Brand")}},jd={10:"#061724",20:"#082338",30:"#0a2e4a",40:"#0c3b5e",50:"#0e4775",60:"#0f548c",70:"#115ea3",80:"#0f6cbd",90:"#2886de",100:"#479ef5",110:"#62abf5",120:"#77b7f7",130:"#96c6fa",140:"#b4d6fa",150:"#cfe4fa",160:"#ebf3fc"},lr=Gd.reduce((r,e)=>{const t=e.slice(0,1).toUpperCase()+e.slice(1),i={[`colorPalette${t}Background1`]:be[e].shade40,[`colorPalette${t}Background2`]:be[e].shade30,[`colorPalette${t}Background3`]:be[e].primary,[`colorPalette${t}Foreground1`]:be[e].tint30,[`colorPalette${t}Foreground2`]:be[e].tint40,[`colorPalette${t}Foreground3`]:be[e].tint20,[`colorPalette${t}BorderActive`]:be[e].tint30,[`colorPalette${t}Border1`]:be[e].primary,[`colorPalette${t}Border2`]:be[e].tint20};return Object.assign(r,i)},{});lr.colorPaletteRedForeground3=be.red.tint30;lr.colorPaletteRedBorder2=be.red.tint30;lr.colorPaletteGreenForeground3=be.green.tint40;lr.colorPaletteGreenBorder2=be.green.tint40;lr.colorPaletteDarkOrangeForeground3=be.darkOrange.tint30;lr.colorPaletteDarkOrangeBorder2=be.darkOrange.tint30;lr.colorPaletteRedForegroundInverted=be.red.primary;lr.colorPaletteGreenForegroundInverted=be.green.primary;lr.colorPaletteYellowForegroundInverted=be.yellow.shade30;const xa=Rd.reduce((r,e)=>{const t=e.slice(0,1).toUpperCase()+e.slice(1),i={[`colorPalette${t}Background2`]:Rr[e].shade30,[`colorPalette${t}Foreground2`]:Rr[e].tint40,[`colorPalette${t}BorderActive`]:Rr[e].tint30};return Object.assign(r,i)},{});xa.colorPaletteDarkRedBackground2=Rr.darkRed.shade20;xa.colorPalettePlumBackground2=Rr.plum.shade20;const Wm={...lr,...xa},Dr=Object.entries(xt).reduce((r,[e,t])=>{const i=e.slice(0,1).toUpperCase()+e.slice(1),o={[`colorStatus${i}Background1`]:fe[t].shade40,[`colorStatus${i}Background2`]:fe[t].shade30,[`colorStatus${i}Background3`]:fe[t].primary,[`colorStatus${i}Foreground1`]:fe[t].tint30,[`colorStatus${i}Foreground2`]:fe[t].tint40,[`colorStatus${i}Foreground3`]:fe[t].tint20,[`colorStatus${i}BorderActive`]:fe[t].tint30,[`colorStatus${i}ForegroundInverted`]:fe[t].shade10,[`colorStatus${i}Border1`]:fe[t].primary,[`colorStatus${i}Border2`]:fe[t].tint20};return Object.assign(r,o)},{});Dr.colorStatusDangerBackground3Hover=fe[xt.danger].shade10;Dr.colorStatusDangerBackground3Pressed=fe[xt.danger].shade20;Dr.colorStatusDangerForeground3=fe[xt.danger].tint40;Dr.colorStatusDangerBorder2=fe[xt.danger].tint30;Dr.colorStatusSuccessForeground3=fe[xt.success].tint40;Dr.colorStatusSuccessBorder2=fe[xt.success].tint40;Dr.colorStatusWarningForegroundInverted=fe[xt.warning].shade20;const Zm=Km(jd),Jm=r=>({colorNeutralForeground1:W,colorNeutralForeground1Hover:W,colorNeutralForeground1Pressed:W,colorNeutralForeground1Selected:W,colorNeutralForeground2:k[84],colorNeutralForeground2Hover:W,colorNeutralForeground2Pressed:W,colorNeutralForeground2Selected:W,colorNeutralForeground2BrandHover:r[100],colorNeutralForeground2BrandPressed:r[90],colorNeutralForeground2BrandSelected:r[100],colorNeutralForeground3:k[68],colorNeutralForeground3Hover:k[84],colorNeutralForeground3Pressed:k[84],colorNeutralForeground3Selected:k[84],colorNeutralForeground3BrandHover:r[100],colorNeutralForeground3BrandPressed:r[90],colorNeutralForeground3BrandSelected:r[100],colorNeutralForeground4:k[60],colorNeutralForeground5:k[68],colorNeutralForeground5Hover:W,colorNeutralForeground5Pressed:W,colorNeutralForeground5Selected:W,colorNeutralForegroundDisabled:k[36],colorNeutralForegroundInvertedDisabled:Je[40],colorBrandForegroundLink:r[100],colorBrandForegroundLinkHover:r[110],colorBrandForegroundLinkPressed:r[90],colorBrandForegroundLinkSelected:r[100],colorNeutralForeground2Link:k[84],colorNeutralForeground2LinkHover:W,colorNeutralForeground2LinkPressed:W,colorNeutralForeground2LinkSelected:W,colorCompoundBrandForeground1:r[100],colorCompoundBrandForeground1Hover:r[110],colorCompoundBrandForeground1Pressed:r[90],colorBrandForeground1:r[100],colorBrandForeground2:r[110],colorBrandForeground2Hover:r[130],colorBrandForeground2Pressed:r[160],colorNeutralForeground1Static:k[14],colorNeutralForegroundStaticInverted:W,colorNeutralForegroundInverted:k[14],colorNeutralForegroundInvertedHover:k[14],colorNeutralForegroundInvertedPressed:k[14],colorNeutralForegroundInvertedSelected:k[14],colorNeutralForegroundInverted2:k[14],colorNeutralForegroundOnBrand:W,colorNeutralForegroundInvertedLink:W,colorNeutralForegroundInvertedLinkHover:W,colorNeutralForegroundInvertedLinkPressed:W,colorNeutralForegroundInvertedLinkSelected:W,colorBrandForegroundInverted:r[80],colorBrandForegroundInvertedHover:r[70],colorBrandForegroundInvertedPressed:r[60],colorBrandForegroundOnLight:r[80],colorBrandForegroundOnLightHover:r[70],colorBrandForegroundOnLightPressed:r[50],colorBrandForegroundOnLightSelected:r[60],colorNeutralBackground1:k[16],colorNeutralBackground1Hover:k[24],colorNeutralBackground1Pressed:k[12],colorNeutralBackground1Selected:k[22],colorNeutralBackground2:k[12],colorNeutralBackground2Hover:k[20],colorNeutralBackground2Pressed:k[8],colorNeutralBackground2Selected:k[18],colorNeutralBackground3:k[8],colorNeutralBackground3Hover:k[16],colorNeutralBackground3Pressed:k[4],colorNeutralBackground3Selected:k[14],colorNeutralBackground4:k[4],colorNeutralBackground4Hover:k[12],colorNeutralBackground4Pressed:Qo,colorNeutralBackground4Selected:k[10],colorNeutralBackground5:Qo,colorNeutralBackground5Hover:k[8],colorNeutralBackground5Pressed:k[2],colorNeutralBackground5Selected:k[6],colorNeutralBackground6:k[20],colorNeutralBackground7:"#00000000",colorNeutralBackground7Hover:k[10],colorNeutralBackground7Pressed:k[4],colorNeutralBackground7Selected:"#00000000",colorNeutralBackground8:k[16],colorNeutralBackgroundInverted:W,colorNeutralBackgroundInvertedHover:k[96],colorNeutralBackgroundInvertedPressed:k[88],colorNeutralBackgroundInvertedSelected:k[92],colorNeutralBackgroundStatic:k[24],colorNeutralBackgroundAlpha:dm[50],colorNeutralBackgroundAlpha2:um[70],colorSubtleBackground:"transparent",colorSubtleBackgroundHover:k[22],colorSubtleBackgroundPressed:k[18],colorSubtleBackgroundSelected:k[20],colorSubtleBackgroundLightAlphaHover:Ul[80],colorSubtleBackgroundLightAlphaPressed:Ul[50],colorSubtleBackgroundLightAlphaSelected:"transparent",colorSubtleBackgroundInverted:"transparent",colorSubtleBackgroundInvertedHover:Lt[10],colorSubtleBackgroundInvertedPressed:Lt[30],colorSubtleBackgroundInvertedSelected:Lt[20],colorTransparentBackground:"transparent",colorTransparentBackgroundHover:"transparent",colorTransparentBackgroundPressed:"transparent",colorTransparentBackgroundSelected:"transparent",colorNeutralBackgroundDisabled:k[8],colorNeutralBackgroundDisabled2:k[16],colorNeutralBackgroundInvertedDisabled:Je[10],colorNeutralStencil1:k[34],colorNeutralStencil2:k[20],colorNeutralStencil1Alpha:Je[10],colorNeutralStencil2Alpha:Je[5],colorBackgroundOverlay:Lt[50],colorScrollbarOverlay:Je[60],colorBrandBackground:r[70],colorBrandBackgroundHover:r[80],colorBrandBackgroundPressed:r[40],colorBrandBackgroundSelected:r[60],colorCompoundBrandBackground:r[100],colorCompoundBrandBackgroundHover:r[110],colorCompoundBrandBackgroundPressed:r[90],colorBrandBackgroundStatic:r[80],colorBrandBackground2:r[20],colorBrandBackground2Hover:r[40],colorBrandBackground2Pressed:r[10],colorBrandBackground3Static:r[60],colorBrandBackground4Static:r[40],colorBrandBackgroundInverted:W,colorBrandBackgroundInvertedHover:r[160],colorBrandBackgroundInvertedPressed:r[140],colorBrandBackgroundInvertedSelected:r[150],colorNeutralCardBackground:k[20],colorNeutralCardBackgroundHover:k[24],colorNeutralCardBackgroundPressed:k[18],colorNeutralCardBackgroundSelected:k[22],colorNeutralCardBackgroundDisabled:k[8],colorNeutralStrokeAccessible:k[68],colorNeutralStrokeAccessibleHover:k[74],colorNeutralStrokeAccessiblePressed:k[70],colorNeutralStrokeAccessibleSelected:r[100],colorNeutralStroke1:k[40],colorNeutralStroke1Hover:k[46],colorNeutralStroke1Pressed:k[42],colorNeutralStroke1Selected:k[44],colorNeutralStroke2:k[32],colorNeutralStroke3:k[24],colorNeutralStroke4:k[24],colorNeutralStroke4Hover:k[18],colorNeutralStroke4Pressed:k[14],colorNeutralStroke4Selected:k[24],colorNeutralStrokeSubtle:k[4],colorNeutralStrokeOnBrand:k[16],colorNeutralStrokeOnBrand2:W,colorNeutralStrokeOnBrand2Hover:W,colorNeutralStrokeOnBrand2Pressed:W,colorNeutralStrokeOnBrand2Selected:W,colorBrandStroke1:r[100],colorBrandStroke2:r[50],colorBrandStroke2Hover:r[50],colorBrandStroke2Pressed:r[30],colorBrandStroke2Contrast:r[50],colorCompoundBrandStroke:r[100],colorCompoundBrandStrokeHover:r[110],colorCompoundBrandStrokePressed:r[90],colorNeutralStrokeDisabled:k[26],colorNeutralStrokeDisabled2:k[24],colorNeutralStrokeInvertedDisabled:Je[40],colorTransparentStroke:"transparent",colorTransparentStrokeInteractive:"transparent",colorTransparentStrokeDisabled:"transparent",colorNeutralStrokeAlpha:Je[10],colorNeutralStrokeAlpha2:Je[20],colorStrokeFocus1:Qo,colorStrokeFocus2:W,colorNeutralShadowAmbient:"rgba(0,0,0,0.24)",colorNeutralShadowKey:"rgba(0,0,0,0.28)",colorNeutralShadowAmbientLighter:"rgba(0,0,0,0.12)",colorNeutralShadowKeyLighter:"rgba(0,0,0,0.14)",colorNeutralShadowAmbientDarker:"rgba(0,0,0,0.40)",colorNeutralShadowKeyDarker:"rgba(0,0,0,0.48)",colorBrandShadowAmbient:"rgba(0,0,0,0.30)",colorBrandShadowKey:"rgba(0,0,0,0.25)"}),Qm=r=>{const e=Jm(r);return{...Od,...Td,...Bd,...Vd,...Dd,...Ud,...Hd,...Xd,...Md,...Fd,...e,...Wm,...Dr,...vs(e.colorNeutralShadowAmbient,e.colorNeutralShadowKey),...vs(e.colorBrandShadowAmbient,e.colorBrandShadowKey,"Brand")}},eb=Qm(jd);var tb=Object.defineProperty,Yd=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&tb(e,t,o),o};const rb={light:{"--ff-scene-editor-ink":"#203a34","--ff-scene-editor-muted":"#60736b","--ff-scene-editor-line":"#cbd7d0","--ff-scene-editor-panel":"#f7faf5","--ff-scene-editor-background":"#f4f7f1","--ff-scene-editor-accent":"#176d5d","--ff-scene-editor-signal":"#c9573f","--ff-scene-editor-surface":"#ffffff","--ff-scene-editor-surface-alt":"#edf3ee","--ff-scene-editor-hover":"#e4eee7","--ff-scene-editor-focus":"#176d5d","--ff-scene-editor-disabled":"#e3e9e4","--ff-scene-editor-shadow":"0 4px 14px rgba(32, 58, 52, 0.14)","--ff-hex-item-color":"#203a34","--ff-hex-item-background":"#ffffff","--ff-hex-item-border-color":"#176d5d","--ff-hex-item-text-stroke-color":"#ffffff","--ff-hex-item-text-stroke-width":"1px"},dark:{"--ff-scene-editor-ink":"#e3ede7","--ff-scene-editor-muted":"#a3b5ab","--ff-scene-editor-line":"#455c50","--ff-scene-editor-panel":"#1c2a24","--ff-scene-editor-background":"#111a16","--ff-scene-editor-accent":"#70bea1","--ff-scene-editor-signal":"#ff947a","--ff-scene-editor-surface":"#22332a","--ff-scene-editor-surface-alt":"#293b31","--ff-scene-editor-hover":"#35493e","--ff-scene-editor-focus":"#70bea1","--ff-scene-editor-disabled":"#2b3831","--ff-scene-editor-shadow":"0 4px 14px rgba(0, 0, 0, 0.32)","--ff-hex-item-color":"#e3ede7","--ff-hex-item-background":"#20332b","--ff-hex-item-border-color":"#70bea1","--ff-hex-item-text-stroke-color":"#111a16","--ff-hex-item-text-stroke-width":"1px"}};class wa extends nr{#e="ff_theme_preference";constructor(){super()}connectedCallback(){super.connectedCallback?.();const e=this.ownerDocument.defaultView;let t=null;try{t=e?.localStorage.getItem(this.#e)??null}catch(s){console.warn("Failed to read theme from storage:",s)}const i=this.theme==="light"||this.theme==="dark"?this.theme:null,o=e?.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";this.theme=t==="light"||t==="dark"?t:i??o,this.#t(!1)}disconnectedCallback(){super.disconnectedCallback?.()}#t(e=!0){const t=this.theme==="dark"?"dark":"light",i=this.ownerDocument.documentElement;df(t==="light"?Zm:eb),i.dataset.theme=t,i.style.setProperty("color-scheme",t);for(const[o,s]of Object.entries(rb[t]))i.style.setProperty(o,s);e&&this.#r(t)}toggleTheme(){this.theme=this.theme==="light"?"dark":"light",this.#t()}#r(e){try{localStorage.setItem(this.#e,e)}catch(t){console.warn("Failed to save theme to storage:",t)}}}Yd([S({mode:"boolean"})],wa.prototype,"vertical");Yd([S],wa.prototype,"theme");function ib(){return ie`
    <template
      @click="${r=>r.toggleTheme()}"
      :class.dark="${r=>r.theme==="dark"}"
    >
      <div class="switcher">
        <span class="icon">☀️</span>
        <fluent-switch name="switch" ?checked="${r=>r.theme==="dark"}"></fluent-switch>
        <span class="icon">🌙</span>
      </div>
    </template>
  `}const ob=ib(),sb=H`
  :host {
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
  }

  :host([vertical]) {
    flex-direction: column;
  }

  .switcher {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    user-select: none;
  }

  :host([vertical]) .switcher {
    flex-direction: column;
    gap: 0.75rem;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    transition: opacity 0.3s ease;
  }

  .icon[hidden] {
    opacity: 0;
    display: none;
  }

  .toggle-track {
    position: relative;
    width: 2.5rem;
    height: 1.25rem;
    background-color: var(--colorNeutralStroke1, #d1d1d1);
    border-radius: 1rem;
    transition: background-color 0.3s ease;
    padding: 0.15rem;
    box-sizing: border-box;
  }

  :host([vertical]) .toggle-track {
    width: 1.25rem;
    height: 2.5rem;
  }

  .toggle-thumb {
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: white;
    border-radius: 50%;
    top: 0.15rem;
    left: 0.15rem;
    transition: left 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  :host([vertical]) .toggle-thumb {
    top: 0.15rem;
    left: 0.15rem;
  }

  :host(.dark) .toggle-track {
    background-color: var(--colorCompoundBrandBackground, #0078d4);
  }

  :host(.dark) .toggle-thumb {
    left: 1.35rem;
  }

  :host([vertical].dark) .toggle-thumb {
    top: 1.35rem;
    left: 0.15rem;
  }
`,nb=wa.compose({name:`${Me.prefix}-theme-switcher`,template:ob,styles:sb});Me.registry.get("fluent-switch")||Kh.define(qh);nb.define(Me.registry);const po="ff-hex-item-position-input",si="ff-hex-item-layout-mode-change",Gn="ff-hex-item-lock-change",ab=["auto","fixed"],lb=["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left"],cb=["number","string"],db=["px","%"],ub=["none","hex","square","circle"],pb=["r","c","offsetX","offsetY","icon","label","layoutMode","labelType","labelPosition","labelRadius","shape","fillEnabled","size","sizeUnit","iconSize","iconSizeUnit","labelFontSize","textColor","textStrokeEnabled","textStrokeColor","textStrokeWidth","fillColor","borderColor","borderWidth","zIndex"];function yr(r){return typeof r=="string"&&pb.includes(r)}function Ge(r){return db.some(e=>e===r)}function mr(r){return lb.some(e=>e===r)}function jt(r){return cb.some(e=>e===r)}function zr(r){return ub.some(e=>e===r)}function Ct(r){return ab.some(e=>e===r)}var hb=Object.defineProperty,Re=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&hb(e,t,o),o};const fb={fromView(r){return r!=="false"},toView(r){return r?null:"false"}},gb={fromView(r){return r??""},toView(r){return typeof r=="string"&&r.length>0?r:null}},mb={fromView(r){if(r===null)return 1;const e=Number(r);return Number.isFinite(e)&&e>=0?e:1},toView(r){return Number.isFinite(r)&&r>=0?String(r):"1"}};class Z extends Mr{#e=!0;#t=!0;#r=!0;constructor(){super(),this.r=0,this.c=0,this.offsetX=0,this.offsetY=0,this.s=null,this.sPercent=null,this.iconSize=null,this.iconSizeUnit="px",this.labelFontSize=null,this.icon="❔",this.labelType="number",this.label="",this.labelPosition="bottom",this.labelRadius=null,this.shape="hex",this.fillEnabled=!0,this.textStrokeEnabled=!1,this.textStrokeColor="",this.textStrokeWidth=1,this.groupId="",this.layoutMode="fixed",this.locked=!1,this.#r=!1,this.#t=!1,this.#e=!1,this.syncTextSizing()}getOuterRadius(e){return typeof this.sPercent=="number"&&Number.isFinite(this.sPercent)&&this.sPercent>0?e*this.sPercent/100:typeof this.s=="number"&&Number.isFinite(this.s)&&this.s>0?this.s:e}get accessibleLabel(){return[this.icon,this.label].filter(Boolean).join(" ")}rChanged(e,t){const i=this.normalizeCoordinate(t);if(i!==t){this.r=i;return}this.notifyPositionInputChanged()}cChanged(e,t){const i=this.normalizeCoordinate(t);if(i!==t){this.c=i;return}this.notifyPositionInputChanged()}offsetXChanged(e,t){if(t===null){this.offsetX=0;return}this.notifyPositionInputChanged()}offsetYChanged(e,t){if(t===null){this.offsetY=0;return}this.notifyPositionInputChanged()}sChanged(){this.notifyPositionInputChanged()}sPercentChanged(){this.notifyPositionInputChanged()}labelChanged(e,t){const i=this.normalizeLabel(t,this.getEffectiveLabelType());i!==t&&(this.label=i)}labelTypeChanged(e,t){if(this.#t)return;const i=jt(t)?t:"number";i!==t&&(this.labelType=i);const o=this.normalizeLabel(this.label,i);o!==this.label&&(this.label=o),this.getAttribute("label-type")!==i&&this.setAttribute("label-type",i)}labelPositionChanged(e,t){mr(t)||(this.labelPosition="bottom")}labelRadiusChanged(e,t){if(t!==null&&(!Number.isFinite(t)||t<0)){this.labelRadius=null;return}if(t===null){this.style.removeProperty("--ff-hex-item-label-radius"),this.style.removeProperty("--ff-hex-item-label-diagonal-offset");return}this.style.setProperty("--ff-hex-item-label-radius",`${t}px`),this.style.setProperty("--ff-hex-item-label-diagonal-offset",`${t/Math.SQRT2}px`)}shapeChanged(e,t){if(!this.#e){if(!zr(t)){this.shape="hex";return}this.getAttribute("shape")!==t&&this.setAttribute("shape",t)}}groupIdChanged(){this.notifyPositionInputChanged()}layoutModeChanged(e,t){if(!Ct(t)){this.layoutMode="fixed",queueMicrotask(()=>{const i=this.layoutMode;this.getAttribute("layout-mode")!==i&&this.setAttribute("layout-mode",i)});return}this.notifyLayoutModeChanged()}lockedChanged(e,t){this.isConnected&&this.dispatchEvent(new CustomEvent(Gn,{bubbles:!0,composed:!0}))}iconSizeChanged(){this.syncTextSizing()}iconSizeUnitChanged(e,t){if(!Ge(t)){this.iconSizeUnit="px";return}this.syncTextSizing()}labelFontSizeChanged(){this.syncTextSizing()}textStrokeColorChanged(){this.#r||this.syncTextStrokeStyles()}textStrokeWidthChanged(e,t){if(!this.#r){if(!Number.isFinite(t)||t<0){this.textStrokeWidth=1;return}this.syncTextStrokeStyles()}}syncTextSizing(){if(typeof this.iconSize=="number"&&Number.isFinite(this.iconSize)&&this.iconSize>=0){const e=this.iconSizeUnit==="%"?`calc(var(--ff-hex-item-radius) * ${this.iconSize/100})`:`${this.iconSize}px`;this.style.setProperty("--ff-hex-item-icon-size",e)}else this.style.removeProperty("--ff-hex-item-icon-size");typeof this.labelFontSize=="number"&&Number.isFinite(this.labelFontSize)&&this.labelFontSize>=0?this.style.setProperty("--ff-hex-item-label-font-size",`${this.labelFontSize}px`):this.style.removeProperty("--ff-hex-item-label-font-size")}syncTextStrokeStyles(){this.textStrokeColor?this.style.setProperty("--ff-hex-item-text-stroke-color",this.textStrokeColor):this.style.removeProperty("--ff-hex-item-text-stroke-color");const e=Number.isFinite(this.textStrokeWidth)&&this.textStrokeWidth>=0?this.textStrokeWidth:1;this.style.setProperty("--ff-hex-item-text-stroke-width",`${e}px`)}normalizeCoordinate(e){return typeof e=="number"&&Number.isInteger(e)?e:0}normalizeLabel(e,t){const i=e??"";return t==="number"?i.replace(/\D/g,"").slice(0,2):i}getEffectiveLabelType(){const e=this.getAttribute("label-type");return e!==null?jt(e)?e:"number":jt(this.labelType)?this.labelType:"number"}notifyPositionInputChanged(){this.isConnected&&this.dispatchEvent(new CustomEvent(po,{bubbles:!0,composed:!0}))}notifyLayoutModeChanged(){this.isConnected&&this.dispatchEvent(new CustomEvent(si,{bubbles:!0,composed:!0}))}}Re([S({converter:ce})],Z.prototype,"r");Re([S({converter:ce})],Z.prototype,"c");Re([S({attribute:"offset-x",converter:ce})],Z.prototype,"offsetX");Re([S({attribute:"offset-y",converter:ce})],Z.prototype,"offsetY");Re([S({converter:ce})],Z.prototype,"s");Re([S({attribute:"s-percent",converter:ce})],Z.prototype,"sPercent");Re([S({attribute:"icon-size",converter:ce})],Z.prototype,"iconSize");Re([S({attribute:"icon-size-unit"})],Z.prototype,"iconSizeUnit");Re([S({attribute:"label-font-size",converter:ce})],Z.prototype,"labelFontSize");Re([S],Z.prototype,"icon");Re([S({attribute:"label-type",mode:"fromView"})],Z.prototype,"labelType");Re([S],Z.prototype,"label");Re([S({attribute:"label-position"})],Z.prototype,"labelPosition");Re([S({attribute:"label-radius",converter:ce})],Z.prototype,"labelRadius");Re([S({mode:"fromView"})],Z.prototype,"shape");Re([S({attribute:"fill-enabled",converter:fb})],Z.prototype,"fillEnabled");Re([S({attribute:"text-stroke-enabled",mode:"boolean"})],Z.prototype,"textStrokeEnabled");Re([S({attribute:"text-stroke-color",converter:gb})],Z.prototype,"textStrokeColor");Re([S({attribute:"text-stroke-width",mode:"fromView",converter:mb})],Z.prototype,"textStrokeWidth");Re([S({attribute:"group-id"})],Z.prototype,"groupId");Re([S({attribute:"layout-mode",mode:"reflect"})],Z.prototype,"layoutMode");Re([S({mode:"boolean"})],Z.prototype,"locked");const bb=H`
    :host {
        --ff-hex-item-radius: var(--ff-tri-layer-step, 48px);
        box-sizing: border-box;
        display: block;
        position: absolute;
        left: var(--ff-hex-item-x, 0px);
        top: var(--ff-hex-item-y, 0px);
        width: calc(var(--ff-hex-item-radius) * 2);
        height: calc(var(--ff-hex-item-radius) * 1.7320508075688772);
        transform: translate(-50%, -50%);
        z-index: var(--ff-hex-item-z-index, auto);
        cursor: var(--ff-scene-interaction-cursor, grab);
        user-select: none;
        -webkit-user-select: none;
        transition: left 500ms cubic-bezier(0.22, 0.61, 0.36, 1), top 500ms cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    :host([hidden]) {
        display: none;
    }

    :host([data-scene-editor-hidden]) {
        visibility: hidden;
        pointer-events: none;
    }

    :host([data-dragging]) {
        cursor: var(--ff-scene-interaction-cursor, grabbing);
        z-index: 2147483646;
        transition: none;
    }

    :host([data-drag-cancelled]) {
        transition: none;
    }

    :host([data-selected]) {
        filter: drop-shadow(0 0 var(--1pbu, 1px) rgba(255, 255, 255, 0.95))
            drop-shadow(0 0 var(--5pbu, 5px) var(--ff-hex-item-selection-color, #176d5d));
    }

    .hexagon {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
    }

    :host([data-highlight-fixed]) .hexagon {
        filter: drop-shadow(0 0 var(--4pbu, 4px) var(--ff-scene-editor-accent, #176d5d));
    }

    :host([data-highlight-static]) .hexagon {
        filter: drop-shadow(0 0 var(--4pbu, 4px) var(--ff-scene-editor-signal, #c9573f));
    }

    :host([data-highlight-fixed][data-highlight-static]) .hexagon {
        filter: drop-shadow(0 0 var(--3pbu, 3px) var(--ff-scene-editor-accent, #176d5d))
            drop-shadow(0 0 var(--6pbu, 6px) var(--ff-scene-editor-signal, #c9573f));
    }

    .shape {
        box-sizing: border-box;
        position: absolute;
        inset: 0;
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .shape polygon,
    .shape rect,
    .shape circle {
        fill: var(--ff-hex-item-background, Canvas);
        stroke: var(--ff-hex-item-border-color, currentColor);
        stroke-width: var(--ff-hex-item-border-width, var(--2pbu, 2px));
        vector-effect: non-scaling-stroke;
    }

    .shape .hex-shape {
        display: block;
    }

    .shape .square-shape,
    .shape .circle-shape {
        display: none;
    }

    :host([shape="none"]) .shape {
        display: none;
    }

    :host([shape="none"]) .shape polygon,
    :host([shape="none"]) .shape rect,
    :host([shape="none"]) .shape circle {
        display: none;
    }

    :host([shape="square"]) .shape .hex-shape,
    :host([shape="square"]) .shape .circle-shape,
    :host([shape="circle"]) .shape .hex-shape,
    :host([shape="circle"]) .shape .square-shape {
        display: none;
    }

    :host([shape="square"]) .shape .square-shape,
    :host([shape="circle"]) .shape .circle-shape {
        display: block;
    }

    :host([fill-enabled="false"]) .shape polygon,
    :host([fill-enabled="false"]) .shape rect,
    :host([fill-enabled="false"]) .shape circle {
        fill: none;
    }

    .content {
                --_ff-hex-item-label-radius: var(
                    --ff-hex-item-label-radius,
                    calc(var(--ff-hex-item-label-radius, 12px) * 0.7071067811865476 + 2px)
                );
                --_ff-hex-item-label-diagonal-offset: var(
                    --ff-hex-item-label-diagonal-offset,
                    calc(var(--_ff-hex-item-label-radius) * 0.7071067811865476)
                );
        box-sizing: border-box;
        position: absolute;
        inset: 0;
        z-index: 1;
        display: grid;
        grid-template-columns:
            minmax(0, 1fr)
            calc(var(--_ff-hex-item-label-radius) - var(--_ff-hex-item-label-diagonal-offset))
            var(--_ff-hex-item-label-diagonal-offset)
            var(--_ff-hex-item-label-diagonal-offset)
            calc(var(--_ff-hex-item-label-radius) - var(--_ff-hex-item-label-diagonal-offset))
            minmax(0, 1fr);
        grid-template-rows:
            minmax(0, 1fr)
            calc(var(--_ff-hex-item-label-radius) - var(--_ff-hex-item-label-diagonal-offset))
            var(--_ff-hex-item-label-diagonal-offset)
            var(--_ff-hex-item-label-diagonal-offset)
            calc(var(--_ff-hex-item-label-radius) - var(--_ff-hex-item-label-diagonal-offset))
            minmax(0, 1fr);
        align-items: center;
        justify-items: center;
            justify-content: center;
            align-content: center;
        color: var(--ff-hex-item-color, CanvasText);
        font-family: var(--fontFamilyBase, sans-serif);
        line-height: 1;
        text-align: center;
    }

    .icon-area {
        box-sizing: border-box;
        position: absolute;
        display: grid;
        top: 50%;
        left: 50%;
        width: var(--ff-hex-item-icon-area-size, 2.25em);
        height: var(--ff-hex-item-icon-area-size, 2.25em);
        aspect-ratio: 1;
        transform: translate(-50%, -50%);
        place-items: center;
    }

    .icon {
        display: grid;
        width: 100%;
        height: 100%;
        min-width: 0;
        min-height: 0;
        place-items: center;
        overflow: hidden;
        font-size: var(--ff-hex-item-icon-size, 1.1em);
        line-height: 1;
    }

    .label {
            display: block;
            grid-column: 3 / 5;
            grid-row: 6;
            align-self: start;
            justify-self: center;
        min-width: 0;
        width: max-content;
        max-width: none;
        font-size: var(--ff-hex-item-label-font-size, 0.8em);
        font-weight: 600;
        line-height: 1.1;
        overflow-wrap: normal;
        word-break: normal;
        white-space: normal;
    }

    :host([label-position="top"]) .label {
        grid-row: 1;
        align-self: end;
    }

    :host([label-position="top-right"]) .label {
        grid-column: 5;
        grid-row: 2;
        align-self: end;
        justify-self: start;
        text-align: left;
    }

    :host([label-position="right"]) .label {
        grid-column: 6;
        grid-row: 3 / 5;
        align-self: center;
        justify-self: start;
        text-align: left;
    }

    :host([label-position="bottom-right"]) .label {
        grid-column: 5;
        grid-row: 5;
        align-self: start;
        justify-self: start;
        text-align: left;
    }

    :host([label-position="bottom-left"]) .label {
        grid-column: 2;
        grid-row: 5;
        align-self: start;
        justify-self: end;
        text-align: right;
    }

    :host([label-position="left"]) .label {
        grid-column: 1;
        grid-row: 3 / 5;
        align-self: center;
        justify-self: end;
        text-align: right;
    }

    :host([label-position="top-left"]) .label {
        grid-column: 2;
        grid-row: 2;
        align-self: end;
        justify-self: end;
        text-align: right;
    }
    :host([text-stroke-enabled]) .icon,
    :host([text-stroke-enabled]) .label {
        -webkit-text-stroke-color: var(--ff-hex-item-text-stroke-color, var(--ff-scene-editor-item-text-stroke-color, var(--ff-scene-editor-background, Canvas)));
        -webkit-text-stroke-width: var(--ff-hex-item-text-stroke-width, var(--ff-scene-editor-item-text-stroke-width, var(--1pbu, 1px)));
    }

    @media (prefers-reduced-motion: reduce) {
        :host {
            transition: none;
        }
    }
`,yb=ie`
    <div class="hexagon" role="img" aria-label="${r=>r.accessibleLabel}">
        <svg class="shape" viewBox="0 0 100 86.6025403784" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <polygon class="hex-shape" points="25,0 75,0 100,43.3012701892 75,86.6025403784 25,86.6025403784 0,43.3012701892"></polygon>
            <rect class="square-shape" x="6.6987298108" y="0" width="86.6025403784" height="86.6025403784"></rect>
            <circle class="circle-shape" cx="50" cy="43.3012701892" r="43.3012701892"></circle>
        </svg>
        <span class="content">
            <span class="icon-area"><span class="icon">${r=>r.icon}</span></span>
            <span class="label">${r=>r.label}</span>
        </span>
    </div>
`,vb=Z.compose({name:"ff-hex-item",template:yb,styles:bb,shadowOptions:{mode:"open"}});vb.define(Me.registry);const Fs=Math.sqrt(3);function xb(r,e){if(!Number.isFinite(r))throw new RangeError("value must be a finite number.");if(!Number.isFinite(e)||e<=0)throw new RangeError("modulus must be a positive finite number.");return(r%e+e)%e}function _(r,e,t,i=0,o=0){return Vr(r),{x:r*(t+e/2)+i,y:r*Fs*e/2+o}}function wb(r,e,t){Vr(r);const i=2*t/(r*Fs);return{r:i,c:e/r-i/2}}const Sb=[{r:0,c:1},{r:1,c:0},{r:1,c:-1},{r:0,c:-1},{r:-1,c:0},{r:-1,c:1}],Ib=[{r:1,c:1},{r:2,c:-1},{r:1,c:-2},{r:-1,c:-1},{r:-2,c:1},{r:-1,c:2}];function Qt(r){return Sb.map(e=>({r:r.r+e.r,c:r.c+e.c}))}function wr(r){return Ib.map(e=>({r:r.r+e.r,c:r.c+e.c}))}function qd(r,e){Vr(r);const t=Ms(e),i=[],o=new Map;for(const n of t){const a=Qt(n);i.push(`${a.map((c,l)=>{const d=_(r,c.r,c.c);return`${l===0?"M":"L"} ${d.x} ${d.y}`}).join(" ")} Z`);for(let c=0;c<a.length;c++){const l=a[c],d=a[(c+1)%a.length],u=`${l.r},${l.c}`,p=`${d.r},${d.c}`,h=u<p?`${u}|${p}`:`${p}|${u}`,f=o.get(h);f?f.count++:o.set(h,{start:l,end:d,count:1})}}const s=Array.from(o.values()).filter(n=>n.count===1).map(n=>{const a=_(r,n.start.r,n.start.c),c=_(r,n.end.r,n.end.c);return`M ${a.x} ${a.y} L ${c.x} ${c.y}`});return{fillPath:i.join(" "),borderPath:s.join(" ")}}function Kd(r,e){Vr(r);const t=Ms(e).map(s=>_(r,s.r,s.c)),i=Wd(t);if(i.length===0)return{fillPath:"",borderPath:""};if(i.length===1){const s=r*.12,{x:n,y:a}=i[0],c=`M ${n-s} ${a} a ${s} ${s} 0 1 0 ${s*2} 0 a ${s} ${s} 0 1 0 ${-s*2} 0`;return{fillPath:c,borderPath:c}}const o=`${i.map((s,n)=>`${n===0?"M":"L"} ${s.x} ${s.y}`).join(" ")}${i.length>2?" Z":""}`;return{fillPath:i.length>2?o:"",borderPath:o}}function vi(r,e,t,i){if(Vr(r),!Number.isFinite(e)||!Number.isFinite(t))return null;let o=null,s=Number.POSITIVE_INFINITY;for(const n of Ms(i)){const a=_(r,n.r,n.c),c=(a.x-e)**2+(a.y-t)**2;c>=s||(o=n,s=c)}return o}function to(r,e,t,i){if(Vr(r),!Number.isFinite(e)||!Number.isFinite(t))return null;const o={x:e,y:t};let s=null,n=Number.POSITIVE_INFINITY;for(const c of i){if(!Number.isInteger(c?.r)||!Number.isInteger(c?.c))continue;const l=_(r,c.r,c.c),d=xi(o,l);d>=n||(s={r:c.r,c:c.c},n=d)}if(!s)return null;const a=Qt(s).map(c=>_(r,c.r,c.c));return Zd(o,a)?s:null}function vr(r,e,t,i){if(Vr(r),!Number.isFinite(t.x)||!Number.isFinite(t.y))return null;const o=Ms(i);if(o.length===0)return null;const s=e==="hex"?o.map(n=>Qt(n).map(a=>_(r,a.r,a.c))):[Wd(o.map(n=>_(r,n.r,n.c)))];return s.some(n=>Zd(t,n))?{x:t.x,y:t.y}:kb(t,s)}function Ms(r){const e=new Map;for(const t of r??[])!Number.isInteger(t?.r)||!Number.isInteger(t?.c)||e.set(`${t.r},${t.c}`,{r:t.r,c:t.c});return Array.from(e.values())}function Wd(r){const e=Array.from(new Map(r.map(o=>[`${o.x},${o.y}`,o])).values()).sort((o,s)=>o.x-s.x||o.y-s.y);if(e.length<=2)return e;const t=[];for(const o of e){for(;t.length>=2;){const s=t[t.length-2],n=t[t.length-1];if((n.x-s.x)*(o.y-n.y)-(n.y-s.y)*(o.x-n.x)>0)break;t.pop()}t.push(o)}const i=[];for(let o=e.length-1;o>=0;o--){const s=e[o];for(;i.length>=2;){const n=i[i.length-2],a=i[i.length-1];if((a.x-n.x)*(s.y-a.y)-(a.y-n.y)*(s.x-a.x)>0)break;i.pop()}i.push(s)}return t.pop(),i.pop(),[...t,...i]}function Zd(r,e){if(e.length===0)return!1;if(e.length===1)return xi(r,e[0])<=1e-12;if(e.length===2)return xi(r,Rn(r,e[0],e[1]))<=1e-12;let t=!1;for(let i=0,o=e.length-1;i<e.length;o=i++){const s=e[i],n=e[o],a=Rn(r,n,s);if(xi(r,a)<=1e-12)return!0;s.y>r.y!=n.y>r.y&&r.x<(n.x-s.x)*(r.y-s.y)/(n.y-s.y)+s.x&&(t=!t)}return t}function kb(r,e){let t=null,i=Number.POSITIVE_INFINITY;for(const o of e){if(o.length===1){const s=xi(r,o[0]);s<i&&(t=o[0],i=s);continue}for(let s=0;s<o.length;s++){const n=o[s],a=o[(s+1)%o.length],c=Rn(r,n,a),l=xi(r,c);l>=i||(t=c,i=l)}}return t}function Rn(r,e,t){const i=t.x-e.x,o=t.y-e.y,s=i*i+o*o,n=s===0?0:Math.max(0,Math.min(1,((r.x-e.x)*i+(r.y-e.y)*o)/s));return{x:e.x+n*i,y:e.y+n*o}}function xi(r,e){return(r.x-e.x)**2+(r.y-e.y)**2}function Ce(r,e){const t=$i(r),i=$i(e),o=[],s=new Map;for(let n=0;n<t;n++){const a=xb(n,2)-Math.floor(n/2),c=n%2===0?Math.ceil(i/2):Math.floor(i/2);for(let l=0;l<c;l++){const d={r:n,c:a+l*3};o.push(d);for(const u of Qt(d))s.set(`${u.r},${u.c}`,u)}}return{centers:o,vertices:Array.from(s.values())}}function Fr(r,e,t,i,o,s){const n=$i(t),a=$i(i);if(!Number.isInteger(r)||!Number.isInteger(e))return!1;if(o==="tri")return r>=0&&e>=0&&r<n&&e<a;const{centers:c,vertices:l}=Ce(n,a);return s==="center"?zo(c,r,e):s==="vertex"?zo(l,r,e):zo(c,r,e)||zo(l,r,e)}function xs(r,e,t,i,o,s,n){if(Vr(r),!Number.isFinite(e)||!Number.isFinite(t))return null;const a=$i(i),c=$i(o);if(s==="hex"){const b=Ce(a,c),x=n==="center"?b.centers:n==="vertex"?b.vertices:[...b.centers,...b.vertices];let y=null,C=Number.POSITIVE_INFINITY;for(const N of x){const v=_(r,N.r,N.c),P=(v.x-e)**2+(v.y-t)**2;P<C&&(y=N,C=P)}return y}const l=wb(r,e,t),d=1;let u=null,p=Number.POSITIVE_INFINITY;const h=(b,x)=>{const y=_(r,b,x),C=(y.x-e)**2+(y.y-t)**2;C<p&&(u={r:b,c:x},p=C)};for(let b=0;b<d;b++){const x=un(l.r,d,b,a);if(x!==null)for(let y=0;y<d;y++){if(!Fr(x,y,a,c,s,n))continue;const C=e/r-x/2,N=un(C,d,y,c);N!==null&&h(x,N)}}if(u===null)return null;const f=Math.sqrt(p)*2/(Fs*r),g=Math.max(0,Math.floor(l.r-f)-1),m=Math.min(a-1,Math.ceil(l.r+f)+1);for(let b=g;b<=m;b++)for(let x=0;x<d;x++){if(!Fr(b,x,a,c,s,n))continue;const y=e/r-b/2,C=un(y,d,x,c);C!==null&&h(b,C)}return u}function ht(r,e,t,i){if(!Number.isFinite(e)||e<=0||!Number.isFinite(i)||i<=0||!Number.isFinite(r.x)||!Number.isFinite(r.y)||!Number.isFinite(t.x)||!Number.isFinite(t.y))return 0;const o=jl(r,e),s=jl(t,i),n=Math.max(e,i),a=$b(o,s,Number.EPSILON*n*n*32),c=3*Fs*i*i/2;return Math.min(1,Math.max(0,Pb(a)/c))}function Vr(r){if(!Number.isFinite(r)||r<=0)throw new RangeError("step must be a positive finite number.")}function $i(r){return Number.isFinite(r)?Math.max(0,Math.floor(r)):0}function zo(r,e,t){return r.some(i=>i.r===e&&i.c===t)}function un(r,e,t,i){if(!Number.isFinite(r)||i<=t)return null;const o=Math.floor((i-1-t)/e),s=Math.max(0,Math.min(o,Math.round((r-t)/e)));return t+s*e}function jl(r,e){return Array.from({length:6},(t,i)=>{const o=i*Math.PI/3;return{x:r.x+e*Math.cos(o),y:r.y+e*Math.sin(o)}})}function $b(r,e,t){let i=r;for(let o=0;o<e.length;o++){const s=e[o],n=e[(o+1)%e.length],a=i;if(i=[],a.length===0)return i;let c=a[a.length-1],l=Yl(c,s,n,t);for(const d of a){const u=Yl(d,s,n,t);u?(l||i.push(ql(c,d,s,n)),i.push(d)):l&&i.push(ql(c,d,s,n)),c=d,l=u}}return i}function Yl(r,e,t,i){return On(t.x-e.x,t.y-e.y,r.x-e.x,r.y-e.y)>=-i}function ql(r,e,t,i){const o=i.x-t.x,s=i.y-t.y,n=On(o,s,r.x-t.x,r.y-t.y),a=On(o,s,e.x-t.x,e.y-t.y),c=n-a,l=c===0?0:n/c;return{x:r.x+l*(e.x-r.x),y:r.y+l*(e.y-r.y)}}function Pb(r){let e=0;for(let t=0;t<r.length;t++){const i=r[t],o=r[(t+1)%r.length];e+=i.x*o.y-i.y*o.x}return Math.abs(e)/2}function On(r,e,t,i){return r*i-e*t}const ws="position-change",Pi="items-layout",_r="placements-change",Fn="callout-state-change",Jd="group-edit-request",Sa=Object.freeze({1:"🚗",2:"👤",3:"👥",4:"🚆",5:"🏢",6:"🏙️",7:"✉️",8:"⚡",9:"💻",10:"📡"}),Gr="vertical-column",Mn="items-occupancy-change";var Cb=Object.defineProperty,De=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Cb(e,t,o),o};const Kl=Math.sqrt(3),pn="data-ff-tri-layer-items-data",Di="data-ff-scene-restoring",_o="data-ff-scene-placement-id",Go="data-ff-scene-placement-group-id";function Eb(r){const e={id:r.id,r:r.r,c:r.c};return Object.prototype.hasOwnProperty.call(r,"itemProperties")&&Object.assign(e,{itemProperties:r.itemProperties===void 0?void 0:gi(r.itemProperties)}),e}function Tn(r){return yr(r)&&r!=="r"&&r!=="c"&&r!=="layoutMode"}function gi(r){const e={};for(const[t,i]of Object.entries(r??{}))i==null||!Tn(t)||Object.assign(e,{[t]:i});return e}const Te=class Bn extends Mr{#e=null;#t=[];#r=new Set;#o=new Set;#s=-1;#u=-1;#a=new WeakMap;#n=new WeakMap;#i=new WeakMap;#c=new WeakMap;#d=null;#g=!1;#l=!1;#h=!1;#m=!1;#p=null;#f=e=>{if(this.locked||this.hasAttribute(Di)||this.#e||e.isPrimary===!1||e.button!==0)return;const t=this.findItemFromEvent(e);if(!t)return;const i=this.clientPointToLayerPoint(e.clientX,e.clientY),o=this.readItemPosition(t);this.#e={pointerId:e.pointerId,item:t,startPosition:o,grabOffsetX:o.x-i.x,grabOffsetY:o.y-i.y,clientX:e.clientX,clientY:e.clientY,desiredX:o.x,desiredY:o.y,visualX:o.x,visualY:o.y,candidate:null,previewItem:null,previewX:0,previewY:0,previewSite:null},this.ownerDocument.addEventListener("keydown",this.#I,!0),this.updateDragVisual(this.#e,e.clientX,e.clientY),t.setAttribute("data-dragging",""),this.setPointerCapture(e.pointerId),e.preventDefault()};#b=e=>{const t=this.#e;if(!(!t||t.pointerId!==e.pointerId)){if(this.hasAttribute(Di)){this.cancelActiveDrag();return}e.preventDefault(),this.updateDragVisual(t,e.clientX,e.clientY)}};#y=e=>{const t=this.#e;if(!(!t||t.pointerId!==e.pointerId)){if(this.hasAttribute(Di)){this.cancelActiveDrag();return}e.preventDefault(),this.commitDrag(t,e.clientX,e.clientY)}};#v=e=>{this.#e?.pointerId===e.pointerId&&this.cancelActiveDrag()};#S=e=>{const t=e.target;!(t instanceof Z)||t.parentElement!==this||(t.locked&&this.#e?.item===t&&this.cancelActiveDrag(),!(this.hasAttribute(Di)||this.#l)&&(this.refreshLayout(),this.notifyOccupancyChanged()))};#I=e=>{e.key!=="Escape"||!this.#e||(e.preventDefault(),e.stopPropagation(),this.cancelActiveDrag())};#$=()=>{this.refreshAssignedItems(),this.refreshLayout()};#E=()=>{this.#l||(this.refreshLayout(),this.notifyOccupancyChanged())};#P=e=>{const t=e.target;t instanceof Z&&t.layoutMode==="fixed"&&t.hasAttribute("data-unplaced")&&(t.removeAttribute("data-unplaced"),t.removeAttribute("aria-hidden"),t.hidden=!1,t.tabIndex=0,t.style.removeProperty("visibility")),this.#l||(this.refreshLayout(),this.notifyOccupancyChanged())};constructor(){super(),this.step=16,this.rows=58,this.columns=51,this.mode="tri",this.dragSnap="free",this.snapTarget="any",this.groupMode="any",this.rebound=!1,this.locked=!1,this._groups=[],this.groups=this._groups,this._defaultItemProperties={},this.defaultItemProperties=this._defaultItemProperties,this._itemsData=[],this._items=[],this.items=this._items,this._unplacedItemsCount=0,this.unplacedItemsCount=this._unplacedItemsCount}get itemsData(){return this._itemsData}isGeneratedItem(e){return e.parentElement===this&&this.#a.has(e)}isItemPropertyInherited(e,t){if(e.parentElement!==this)return!1;const i=this.#a.get(e)?.itemProperties,o=this.#c.get(e);return!Object.prototype.hasOwnProperty.call(i??{},t)&&!Object.prototype.hasOwnProperty.call(o??{},t)}getOccupancySnapshot(){const e=[];for(const t of this.getHexItems()){if(!Ct(t.layoutMode)||t.hasAttribute("data-unplaced"))continue;const i=this.readItemPosition(t),o=t.getOuterRadius(this.effectiveStep);!Number.isInteger(i.r)||!Number.isInteger(i.c)||![i.x,i.y,o].every(Number.isFinite)||o<=0||e.push({...i,radius:o,layoutMode:t.layoutMode,groupId:t.groupId,locked:t.locked,generated:this.#a.has(t)})}return e}setCalloutDecorations(e){const t=this.calloutDecorationsElement;if(!t||(t.replaceChildren(),this.hidden))return;const i=this.effectiveStep;for(const o of e){const{centroid:s,lineStart:n,lineEnd:a}=o;if(![s.x,s.y,n.x,n.y,a.x,a.y].every(Number.isFinite))continue;const c=a.x-n.x,l=a.y-n.y,d=c*c+l*l;if(!Number.isFinite(d)||d<=0)continue;const u=n.x+c/2,p=n.y+l/2;if(![u,p].every(Number.isFinite))continue;const h=this._groups.find(x=>x.id===o.groupId);if(!h?.callout)continue;const f=this.ownerDocument.createElementNS("http://www.w3.org/2000/svg","g");f.dataset.groupId=h.id;const g=h.borderColor||"#176d5d",m=this.ownerDocument.createElementNS("http://www.w3.org/2000/svg","line");m.dataset.calloutConnector="",m.dataset.groupId=h.id,m.setAttribute("x1",String(s.x)),m.setAttribute("y1",String(s.y)),m.setAttribute("x2",String(u)),m.setAttribute("y2",String(p)),m.setAttribute("stroke",g),m.setAttribute("stroke-width",String(Math.max(1,i*.06))),m.setAttribute("fill","none"),m.setAttribute("vector-effect","non-scaling-stroke"),m.setAttribute("pointer-events","none");const b=this.ownerDocument.createElementNS("http://www.w3.org/2000/svg","line");b.dataset.calloutUnderline="",b.dataset.groupId=h.id,b.setAttribute("x1",String(n.x)),b.setAttribute("y1",String(n.y)),b.setAttribute("x2",String(a.x)),b.setAttribute("y2",String(a.y)),b.setAttribute("stroke",g),b.setAttribute("stroke-width",String(Math.max(1.5,i*.1))),b.setAttribute("stroke-linecap","round"),b.setAttribute("vector-effect","non-scaling-stroke"),b.setAttribute("pointer-events","none"),f.append(m,b),t.append(f)}}setActiveCalloutGroupIds(e){this.#r=new Set(e)}set itemsData(e){this._itemsData=Array.isArray(e)?e.map(t=>({...t,...t.itemProperties===void 0?{}:{itemProperties:gi(t.itemProperties)}})):[],this.syncItemsData()}setItemPropertyOverrides(e,t){this.locked||e.parentElement!==this||(this.#n.has(e)||this.#n.set(e,this.captureSlotItemProperties(e)),this.#c.set(e,gi(t)),this.applyItemPropertyCascade(e,this.#i.get(e)))}updateItemPropertyOverrides(e,t){if(this.locked||e.parentElement!==this)return;const i={...this.#c.get(e)??{}};for(const[o,s]of Object.entries(t))Tn(o)&&(s==null?delete i[o]:Object.assign(i,{[o]:s}));this.setItemPropertyOverrides(e,i),this.notifyOccupancyChanged()}getItemLabelRadiusSources(e){if(e.parentElement!==this)return null;let t=this.#n.get(e);return t||(t=this.captureSlotItemProperties(e),this.#n.set(e,t)),{slotBase:t.labelRadius,explicitOverride:this.#c.get(e)?.labelRadius??null}}removeItems(e){if(this.locked)return 0;const t=new Set(this.getDirectHexItems()),i=new Set(e.filter(s=>s instanceof Z&&t.has(s)));if(i.size===0)return 0;const o=new Set(this.#t.filter(s=>i.has(s.item)));for(const s of i)s.remove();if(o.size>0){const s=new Set(Array.from(o,n=>n.data));this._itemsData=this._itemsData.filter(n=>!s.has(n)),this.#t=this.#t.filter(n=>!o.has(n)),this.#g=!0}return this.refreshAssignedItems(),this.refreshLayout(),this.notifyOccupancyChanged(),i.size}LayoutItems(e){return this.layoutItems(!1,e)}LayoutItemsByPlacements(e){return this.layoutItems(!0,e)}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerdown",this.#f),this.addEventListener("pointermove",this.#b),this.addEventListener("pointerup",this.#y),this.addEventListener("pointercancel",this.#v),this.addEventListener("lostpointercapture",this.#v),this.addEventListener(po,this.#E),this.addEventListener(si,this.#P),this.addEventListener(Gn,this.#S),this.#d=this.shadowRoot?.querySelector("slot")??null,this.#d?.addEventListener("slotchange",this.#$),this.refreshAssignedItems(),this.refreshLayout()}disconnectedCallback(){this.cancelActiveDrag(),this.#d?.removeEventListener("slotchange",this.#$),this.#d=null,this.removeEventListener("pointerdown",this.#f),this.removeEventListener("pointermove",this.#b),this.removeEventListener("pointerup",this.#y),this.removeEventListener("pointercancel",this.#v),this.removeEventListener("lostpointercapture",this.#v),this.removeEventListener(po,this.#E),this.removeEventListener(si,this.#P),this.removeEventListener(Gn,this.#S),super.disconnectedCallback()}groupsChanged(e,t){this._groups=Array.isArray(t)?t:[],this.locked||this.initializePendingItemPositions(),this.refreshLayout()}itemsChanged(e,t){this.#h||(this._items=Array.isArray(t)?t.filter(i=>i instanceof Z):[],this.#l||this.refreshLayout())}itemsSlotChanged(e,t){if(this.#h)return;const i=Array.isArray(t)?t.filter(o=>o instanceof Z):[];this._items=i,this.#h=!0,this.items=i,this.#h=!1,this.#l||this.refreshLayout()}stepChanged(e,t){if(t===null||!Number.isFinite(t)||t<=0){this.step=16;return}this.refreshLayout()}rowsChanged(e,t){if(t===null||!Number.isFinite(t)||t<0){this.rows=1;return}if(!Number.isInteger(t)){this.rows=Math.floor(t);return}this.refreshLayout()}columnsChanged(e,t){if(t===null||!Number.isFinite(t)||t<0){this.columns=1;return}if(!Number.isInteger(t)){this.columns=Math.floor(t);return}this.refreshLayout()}modeChanged(e,t){if(t!=="tri"&&t!=="hex"){this.mode="tri";return}this.refreshLayout()}dragSnapChanged(e,t){if(t!=="free"&&t!=="live"){this.dragSnap="free";return}this.refreshLayout()}snapTargetChanged(e,t){if(t!=="any"&&t!=="center"&&t!=="vertex"){this.snapTarget="any";return}this.refreshLayout()}groupModeChanged(e,t){if(t!=="any"&&t!=="group"){this.groupMode="any";return}this.refreshLayout()}reboundChanged(){this.refreshLayout()}lockedChanged(e,t){t&&this.cancelActiveDrag()}defaultItemPropertiesChanged(){for(const e of this.getHexItems())this.applyItemPropertyCascade(e,this.#i.get(e));this.refreshLayout(),this.notifyOccupancyChanged()}get effectiveStep(){return typeof this.step=="number"&&Number.isFinite(this.step)&&this.step>0?this.step:16}get effectiveRows(){return typeof this.rows=="number"&&Number.isFinite(this.rows)?Math.max(0,Math.floor(this.rows)):1}get effectiveColumns(){return typeof this.columns=="number"&&Number.isFinite(this.columns)?Math.max(0,Math.floor(this.columns)):1}getDirectHexItems(){return Array.from(this.children).filter(e=>e instanceof Z)}clearPlacementAssociation(e){e.removeAttribute(_o),e.removeAttribute(Go)}setPlacementAssociation(e,t,i){e.setAttribute(_o,i),e.setAttribute(Go,t)}getHexItems(){const e=this.getDirectHexItems();return(e.length!==this._items.length||e.some((t,i)=>t!==this._items[i]))&&this.refreshAssignedItems(),e}refreshAssignedItems(){const e=this.getDirectHexItems();this._items=e,this.#h=!0,this.items=e,this.#h=!1}syncItemsData(){const e=this.#t,t=new Map;for(const a of e){const c=`${a.data.typeId}\0${a.data.groupId}`,l=t.get(c)??[];l.push(a),t.set(c,l)}const i=new Map,o=[],s=[];this.#l=!0;try{this._itemsData.forEach((a,c)=>{const l=`${a.typeId}\0${a.groupId}`;let u=t.get(l)?.shift();const p=!u;if(!u){const f=this.ownerDocument.createElement("ff-hex-item"),g=typeof a.r=="number"&&Number.isInteger(a.r),m=typeof a.c=="number"&&Number.isInteger(a.c),b=this.getInitialItemPosition(a.groupId),x=this._groups.find(y=>y.id===a.groupId);u={data:a,item:f,index:c,initialPositionPending:!!a.groupId&&(!g||!m)&&(!x||this.getValidGroupCenters(x).length===0)},f.r=g?a.r:b.r,f.c=m?a.c:b.c,f.setAttribute(pn,""),s.push(f)}const h=i.get(l)??0;i.set(l,h+1),u.data=a,u.index=c,!p&&!u.item.locked&&u.item.layoutMode!=="fixed"&&(typeof a.r=="number"&&Number.isInteger(a.r)&&(u.item.r=a.r),typeof a.c=="number"&&Number.isInteger(a.c)&&(u.item.c=a.c)),this.configureGeneratedItem(u,h,p),o.push(u)})}finally{this.#l=!1}const n=new Set(o.map(a=>a.item));for(const a of e)n.has(a.item)||a.item.remove();if(s.length>0){const a=this.ownerDocument.createDocumentFragment();for(const c of s)a.append(c);this.append(a)}this.orderGeneratedItems(o),this.#t=o;for(const a of o)this.#a.set(a.item,a.data),this.applyItemPropertyCascade(a.item,this.#i.get(a.item));this.refreshAssignedItems(),this.#g=!0,this.isConnected&&(this.refreshLayout(),this.notifyOccupancyChanged())}configureGeneratedItem(e,t,i){const{item:o,data:s,index:n}=e,a=Sa[s.typeId]??"",c=this._groups.find(u=>u.id===s.groupId),l=t===0?"":`-${t}`,d=`mock-${encodeURIComponent(s.groupId)}-${s.typeId}${l}`;o.setAttribute(pn,""),(i||o.layoutMode!=="fixed")&&o.setAttribute("layout-mode","auto"),(i||!o.dataset.node)&&(o.dataset.node=d),o.dataset.typeId=String(s.typeId),o.dataset.value=String(s.value),o.setAttribute("role","option"),o.setAttribute("tabindex","0"),o.setAttribute("aria-selected","false"),o.setAttribute("aria-label",`${c?.name??s.groupId}, type ${s.typeId}, value ${s.value}, ${a}`),o.setAttribute("group-id",s.groupId),o.setAttribute("shape","hex"),o.setAttribute("icon",a),o.setAttribute("label",String(s.value)),o.setAttribute("label-position","right"),o.setAttribute("s-percent","100"),o.setAttribute("fill-enabled","false"),o.setAttribute("icon-size","12"),o.setAttribute("icon-size-unit","px"),o.labelRadius=null,o.setAttribute("label-font-size","10"),o.textStrokeEnabled=!1,o.textStrokeColor="",o.textStrokeWidth=1,o.style.removeProperty("--ff-hex-item-color"),o.style.removeProperty("--ff-hex-item-background"),o.style.removeProperty("--ff-hex-item-border-color"),o.style.setProperty("--ff-hex-item-border-width","0px"),o.style.setProperty("--ff-hex-item-z-index",String(n+6)),this.#n.delete(o),this.#i.delete(o)}captureSlotItemProperties(e){const t=Ge(e.iconSizeUnit)?e.iconSizeUnit:"px";return{offsetX:e.offsetX,offsetY:e.offsetY,icon:e.icon,label:e.label,labelType:e.labelType,labelPosition:e.labelPosition,labelRadius:e.labelRadius,shape:e.shape,fillEnabled:e.fillEnabled,size:e.sPercent??e.s,sizeUnit:typeof e.sPercent=="number"?"%":"px",iconSize:e.iconSize,iconSizeUnit:t,labelFontSize:e.labelFontSize,textColor:e.style.getPropertyValue("--ff-hex-item-color").trim(),textStrokeEnabled:e.textStrokeEnabled,textStrokeColor:e.style.getPropertyValue("--ff-hex-item-text-stroke-color").trim()||e.textStrokeColor,textStrokeWidth:this.readItemStyleNumber(e,"--ff-hex-item-text-stroke-width")??e.textStrokeWidth,fillColor:e.style.getPropertyValue("--ff-hex-item-background").trim(),borderColor:e.style.getPropertyValue("--ff-hex-item-border-color").trim(),borderWidth:this.readItemStyleNumber(e,"--ff-hex-item-border-width"),zIndex:this.readItemStyleNumber(e,"--ff-hex-item-z-index")}}readItemStyleNumber(e,t){const i=Number.parseFloat(e.style.getPropertyValue(t));return Number.isFinite(i)?i:null}applyPlacementSlotProperties(e,t){if(this.hasAttribute(Di))return;const i=gi(t);this.#i.set(e,i),this.applyItemPropertyCascade(e,i)}applyItemPropertyCascade(e,t){const i=this.#l;this.#l=!0;try{this.applyResolvedItemProperties(e,this.resolveItemProperties(e,t))}finally{this.#l=i}}resolveItemProperties(e,t){let i=this.#n.get(e);i||(i=this.captureSlotItemProperties(e),this.#n.set(e,i));const o={...i};return this.applyItemPropertyBag(o,this.defaultItemProperties),this.applyItemPropertyBag(o,t),this.applyItemPropertyBag(o,this.#a.get(e)?.itemProperties),this.applyItemPropertyBag(o,this.#c.get(e)),o}applyItemPropertyBag(e,t){const i=gi(t),o=Object.prototype.hasOwnProperty.call(i,"size"),s=Object.prototype.hasOwnProperty.call(i,"sizeUnit"),n=Ge(e.sizeUnit)?e.sizeUnit:"px",a=Ge(i.sizeUnit)?i.sizeUnit:n;if(o&&typeof i.size=="number")e.size=i.size;else if(!o&&s&&typeof e.size=="number"&&n!==a){const p=n==="%"?this.effectiveStep*e.size/100:e.size,h=a==="%"?p/this.effectiveStep*100:p;Number.isFinite(h)&&(e.size=h)}s&&(e.sizeUnit=a);const c=Object.prototype.hasOwnProperty.call(i,"iconSize"),l=Object.prototype.hasOwnProperty.call(i,"iconSizeUnit"),d=Ge(e.iconSizeUnit)?e.iconSizeUnit:"px",u=Ge(i.iconSizeUnit)?i.iconSizeUnit:d;if(c&&typeof i.iconSize=="number")e.iconSize=i.iconSize;else if(!c&&l&&typeof e.iconSize=="number"&&d!==u){const p=this.getOuterRadiusForProperties(e),h=d==="%"?p*e.iconSize/100:e.iconSize,f=u==="%"?h/p*100:h;Number.isFinite(f)&&(e.iconSize=f)}l&&(e.iconSizeUnit=u);for(const[p,h]of Object.entries(i))!Tn(p)||p==="size"||p==="sizeUnit"||p==="iconSize"||p==="iconSizeUnit"||Object.assign(e,{[p]:h})}applyResolvedItemProperties(e,t){this.setItemSize(e,typeof t.size=="number"?t.size:null,Ge(t.sizeUnit)?t.sizeUnit:"px"),e.iconSize=typeof t.iconSize=="number"?t.iconSize:null,e.iconSizeUnit=Ge(t.iconSizeUnit)?t.iconSizeUnit:"px";for(const i of Object.keys(t))i==="size"||i==="sizeUnit"||i==="iconSize"||i==="iconSizeUnit"||this.setSlotItemProperty(e,i,t[i])}getOuterRadiusForProperties(e){if(typeof e.size!="number"||!Number.isFinite(e.size))return this.effectiveStep;const t=e.sizeUnit==="%"?this.effectiveStep*e.size/100:e.size;return Number.isFinite(t)&&t>0?t:this.effectiveStep}setItemSize(e,t,i){i==="%"?(e.s=null,e.sPercent=t):(e.sPercent=null,e.s=t)}setSlotItemProperty(e,t,i){switch(t){case"offsetX":e.offsetX=typeof i=="number"?i:null;break;case"offsetY":e.offsetY=typeof i=="number"?i:null;break;case"icon":typeof i=="string"&&(e.icon=i);break;case"label":typeof i=="string"&&(e.label=i);break;case"labelType":typeof i=="string"&&jt(i)&&(e.labelType=i);break;case"labelPosition":typeof i=="string"&&mr(i)&&(e.labelPosition=i);break;case"labelRadius":e.labelRadius=typeof i=="number"?i:null;break;case"shape":typeof i=="string"&&zr(i)&&(e.shape=i);break;case"fillEnabled":typeof i=="boolean"&&e.setAttribute("fill-enabled",String(i));break;case"textStrokeEnabled":typeof i=="boolean"&&(e.textStrokeEnabled=i);break;case"size":case"sizeUnit":case"iconSize":case"iconSizeUnit":break;case"labelFontSize":e.labelFontSize=typeof i=="number"?i:null;break;case"textColor":e.style.setProperty("--ff-hex-item-color",typeof i=="string"?i:"");break;case"textStrokeColor":e.textStrokeColor=typeof i=="string"?i:"";break;case"textStrokeWidth":e.textStrokeWidth=typeof i=="number"?i:1;break;case"fillColor":e.style.setProperty("--ff-hex-item-background",typeof i=="string"?i:"");break;case"borderColor":e.style.setProperty("--ff-hex-item-border-color",typeof i=="string"?i:"");break;case"borderWidth":typeof i=="number"?e.style.setProperty("--ff-hex-item-border-width",`${i}px`):e.style.removeProperty("--ff-hex-item-border-width");break;case"zIndex":typeof i=="number"?e.style.setProperty("--ff-hex-item-z-index",String(i)):e.style.removeProperty("--ff-hex-item-z-index");break}}orderGeneratedItems(e){const t=Array.from(this.children),i=n=>n instanceof Z&&n.hasAttribute(pn),o=t.filter(n=>!i(n));let s=o.length>0?o[o.length-1].nextSibling:t.find(i)??null;for(const n of e)n.item!==s&&this.insertBefore(n.item,s),s=n.item.nextSibling}getInitialItemPosition(e){const t=this._groups.find(s=>s.id===e),i=t?this.getValidGroupCenters(t):[],o=this.getGroupCentroid(i);return o?vi(this.effectiveStep,o.x,o.y,i)??i[0]??{r:0,c:0}:{r:0,c:0}}initializePendingItemPositions(){const e=this.#l;this.#l=!0;try{for(const t of this.#t){if(!t.initialPositionPending||t.item.parentElement!==this)continue;if(t.item.locked||t.item.layoutMode!=="auto"){t.initialPositionPending=!1;continue}const i=this._groups.find(a=>a.id===t.data.groupId),o=i?this.getValidGroupCenters(i):[],s=this.getGroupCentroid(o);if(!s)continue;const n=vi(this.effectiveStep,s.x,s.y,o)??o[0];n&&(typeof t.data.r=="number"&&Number.isInteger(t.data.r)||(t.item.r=n.r),typeof t.data.c=="number"&&Number.isInteger(t.data.c)||(t.item.c=n.c),t.initialPositionPending=!1)}}finally{this.#l=e}}layoutItems(e,t,i){if(this.locked)return 0;if(this.isConnected&&t?.emitLayoutEvent!==!1&&t?.sceneCoordinated!==!0){const D=this.parentElement?.coordinateItemsLayoutFromLayer?.(this,e?"placements":"all",t?.groupId,t?.reassignAutoItems===!0);if(D){const K={...D,layout:e?"placements":"all"};return t?.onLayoutResult?.(K),this.dispatchLayoutEvent(K),K.unplacedCount}}if(e&&t?.sceneCoordinated===!0&&this.#m)return this._unplacedItemsCount;const o=this.getHexItems(),s=new Map(this.#t.map(w=>[w.item,w])),n=new Map(o.map((w,D)=>[w,D])),a=this.parentElement,c=a?.localName==="ff-scene"?Array.from(a.children).filter(w=>w.localName==="ff-items-layer").indexOf(this):-1,l=o.filter(w=>w.locked||Ct(w.layoutMode)&&w.layoutMode==="fixed"),d=o.filter(w=>Ct(w.layoutMode)&&w.layoutMode==="auto"),u=t?.activeCalloutGroupIds??this.#r,p=new Map;if(e||i!==void 0||u.size>0)for(const w of this._groups){if(!w||typeof w.id!="string"||w.id.length===0||p.has(w.id)||t?.groupId!==void 0&&w.id!==t.groupId)continue;const D=this.mode==="hex"&&!!w.callout&&u.has(w.id);if(!e&&i===void 0&&!D)continue;const K=this.getValidGroupPlacements(w,u);(K.length>0||D)&&p.set(w.id,K)}if(e)for(const w of o){if(i!==void 0&&!i.has(w)||t?.groupId!==void 0&&w.groupId!==t.groupId)continue;if(t?.reassignAutoItems===!0&&s.has(w)&&!w.locked&&w.layoutMode==="auto"&&p.has(w.groupId)){this.clearPlacementAssociation(w);continue}const D=w.getAttribute(_o);if(D===null){this.clearPlacementAssociation(w);continue}const K=p.get(w.groupId);(w.layoutMode!=="auto"||w.getAttribute(Go)!==w.groupId||!K?.some(ye=>ye.id===D))&&this.clearPlacementAssociation(w)}else for(const w of o)i!==void 0&&!i.has(w)||t?.groupId!==void 0&&w.groupId!==t.groupId||this.clearPlacementAssociation(w);const h=i!==void 0?d.filter(w=>!w.locked&&i.has(w)&&(t?.groupId===void 0||w.groupId===t.groupId)):e?d.filter(w=>!w.locked&&p.has(w.groupId)&&(t?.groupId===void 0||w.groupId===t.groupId)):d.filter(w=>!w.locked&&(t?.groupId===void 0||w.groupId===t.groupId)),f=new Set(h),g=i!==void 0?d.filter(w=>!f.has(w)):e?d.filter(w=>w.locked||!p.has(w.groupId)||t?.groupId!==void 0&&w.groupId!==t.groupId):t?.groupId===void 0?[]:d.filter(w=>w.groupId!==t.groupId),m=new Set(g);for(const w of o)i!==void 0&&!i.has(w)||!e&&t?.groupId!==void 0&&w.layoutMode==="auto"&&w.groupId!==t.groupId||m.has(w)||this.#i.delete(w);if(i===void 0)for(const w of g){const D=this._groups.find(ye=>ye.id===w.groupId),K=D?this.getValidGroupPlacements(D,u).find(ye=>ye.r===w.r&&ye.c===w.c):void 0;K?.itemProperties===void 0?this.#i.delete(w):this.#i.set(w,gi(K.itemProperties))}for(const w of o)this.applyItemPropertyCascade(w,this.#i.get(w));const b=new Set,x=[],y=[],C=e||i!==void 0||t?.groupId!==void 0?[...new Set([...l,...g])]:l;for(const w of C){if(w.hasAttribute("data-unplaced"))continue;const D=this.readItemPosition(w);if(Number.isInteger(D.r)&&Number.isInteger(D.c)){b.add(`${D.r},${D.c}`);const K={x:D.x,y:D.y,radius:w.getOuterRadius(this.effectiveStep)};x.push(K),w.layoutMode==="auto"&&!w.locked&&y.push(K)}}for(const w of t?.occupancy??[]){if(!Number.isInteger(w.r)||!Number.isInteger(w.c)||![w.x,w.y,w.radius].every(Number.isFinite)||w.radius<=0)continue;b.add(`${w.r},${w.c}`);const D={x:w.x,y:w.y,radius:w.radius};x.push(D),w.layoutMode==="auto"&&!w.locked&&y.push(D)}let N=0,v=0;const P=[],L=(w,D)=>{const K=w.dataset.node?.trim()||w.id.trim()||`item-${(n.get(w)??0)+1}`,ye=typeof w.label=="string"?w.label.trim():"",Ie=n.get(w);P.push({itemKey:K,label:ye||null,reason:D,...c>=0&&Ie!==void 0?{sceneLayerIndex:c,layerItemIndex:Ie}:{}})},O=new Set,V=new Map,ge=this.#l;this.#l=!0;try{for(const w of h)this.markItemUnplaced(w);for(const w of this._groups){if(!w||typeof w.id!="string"||w.id.length===0||O.has(w.id))continue;const D=p.get(w.id);if(e&&!D)continue;O.add(w.id);const K=this.getOrderedAutoItems(w.id,h,s,n);if(K.length===0)continue;const ye=this.getValidGroupCenters(w),Ie=this.getGroupCentroid(ye);if(!Ie){v+=K.length;for(const I of K)L(I,"group-centers-unavailable");continue}const je=this.mode==="hex"&&u.has(w.id)?w.callout:void 0,X=D?this.createPlacementSpotLayout(D,je,w,t?.reassignAutoItems===!0):null,se=X?[]:ye.slice().sort((I,z)=>{const Y=_(this.effectiveStep,I.r,I.c),M=_(this.effectiveStep,z.r,z.c),q=(Y.x-Ie.x)**2+(Y.y-Ie.y)**2,ae=(M.x-Ie.x)**2+(M.y-Ie.y)**2;return q-ae||I.r-z.r||I.c-z.c}),xe=new Set,ke=new Set(b),Oe=y.slice(),E=new Set,A=new Set;if(X)for(const I of K){const z=I.getAttribute(_o);if(!z||I.getAttribute(Go)!==w.id)continue;const Y=X.spots.find(ae=>ae.placementId===z);if(!Y){this.clearPlacementAssociation(I);continue}if(E.add(I),A.has(Y.key)){v++,L(I,"duplicate-placement");continue}A.add(Y.key);const M=this.createItemFootprint(I,Y.center,Y.itemProperties);if(b.has(Y.key)||y.some(ae=>this.footprintsOverlap(M,ae))){v++,L(I,"placement-occupied");continue}je?.point?.r===Y.center.r&&je?.point?.c===Y.center.c&&!V.has(I)&&(V.set(I,I.style.transition),I.style.transition="none"),I.r=Y.center.r,I.c=Y.center.c,xe.add(Y.key),this.applyPlacementSlotProperties(I,Y.itemProperties),I.hidden=!1,I.style.removeProperty("visibility"),I.tabIndex=0,I.removeAttribute("aria-hidden"),I.removeAttribute("data-unplaced"),b.add(Y.key),x.push(M),y.push(M),je||(ke.add(Y.key),Oe.push(M)),N++}for(let I=0;I<K.length;I++){const z=K[I];if(E.has(z))continue;const Y=X&&je?this.findNextCalloutPlacementSpot(X,xe,z,b,y):X?this.findNextPlacementSpot(X,xe,z,b,y,ke,Oe):null,M=X?Y?.center:se.find(Le=>{const ue=`${Le.r},${Le.c}`;if(b.has(ue))return!1;const Pe=this.createItemFootprint(z,Le);return!x.some(Ke=>this.footprintsOverlap(Pe,Ke))});if(!M){if(X){const ue=K.slice(I).filter(Pe=>!E.has(Pe));v+=ue.length;for(const Pe of ue)L(Pe,"no-available-placement");break}v++,L(z,"no-available-center");continue}Y&&xe.add(Y.key),je?.point?.r===M.r&&je?.point?.c===M.c&&!V.has(z)&&(V.set(z,z.style.transition),z.style.transition="none"),z.r=M.r,z.c=M.c,Y&&(this.applyPlacementSlotProperties(z,Y.itemProperties),t?.reassignAutoItems===!0&&s.has(z)&&this.setPlacementAssociation(z,z.groupId,Y.placementId)),z.hidden=!1,z.style.removeProperty("visibility"),z.tabIndex=0,z.removeAttribute("aria-hidden"),z.removeAttribute("data-unplaced");const ae=`${M.r},${M.c}`;b.add(ae);const Ve=this.createItemFootprint(z,M);x.push(Ve),y.push(Ve),X&&!je&&(ke.add(ae),Oe.push(Ve)),N++}}for(const w of h)O.has(w.groupId)||(this.markItemUnplaced(w),v++,L(w,"group-unavailable"))}finally{this.#l=ge}this._unplacedItemsCount=e||i!==void 0?d.filter(w=>w.hasAttribute("data-unplaced")).length:v,this.unplacedItemsCount=this._unplacedItemsCount,this.refreshLayout();for(const[w,D]of V)w.getBoundingClientRect(),w.style.transition=D;const re=this.#g;this.#g=!1;const T=i===void 0?v:this._unplacedItemsCount,j={placedCount:N,unplacedCount:T,itemsDataChanged:re,layout:e?"placements":"all",unplacedItems:P};return t?.onLayoutResult?.(j),t?.emitLayoutEvent!==!1?(this.dispatchLayoutEvent(j),j.unplacedCount):v}dispatchLayoutEvent(e){const t=new CustomEvent(Pi,{detail:e,bubbles:!0,composed:!0});if(this.dispatchEvent(t),!e.itemsDataChanged)return;const i=this.parentElement?.localName==="ff-scene"?this.parentElement:null,o=i?Array.from(i.children).filter(s=>s instanceof Bn):[this];for(const s of o)for(const n of s.#t)n.item.parentElement===s&&s.applyItemPropertyCascade(n.item,s.#i.get(n.item))}getOrderedAutoItems(e,t,i,o){return t.filter(s=>s.groupId===e).slice().sort((s,n)=>{const a=i.get(s),c=i.get(n);return a&&c?c.data.value-a.data.value||a.index-c.index:a?-1:c?1:(o.get(s)??0)-(o.get(n)??0)})}getValidGroupCenters(e){const t=new Map;for(const i of Array.isArray(e.centers)?e.centers:[])!Number.isInteger(i?.r)||!Number.isInteger(i?.c)||!Fr(i.r,i.c,this.effectiveRows,this.effectiveColumns,this.mode,"center")||t.set(`${i.r},${i.c}`,{r:i.r,c:i.c});return Array.from(t.values())}getValidGroupPlacements(e,t=this.#r){const i=this.mode==="hex"&&!!e.callout&&t.has(e.id),o=[];if(i&&e.callout?.mixedMode){for(const d of e.placements??[])o.push({placementList:"group",placement:d});for(const d of e.callout.placements??[])o.push({placementList:"callout",placement:d})}else if(i)for(const d of e.callout?.placements??[])o.push({placementList:"callout",placement:d});else for(const d of e.placements??[])o.push({placementList:"group",placement:d});const s=new Set,n=new Set,a=[],c=new Set(this.getValidGroupCenters(e).map(d=>`${d.r},${d.c}`)),l=new Set(this.mode==="hex"?Ce(this.effectiveRows,this.effectiveColumns).centers.map(d=>`${d.r},${d.c}`):[]);for(const{placementList:d,placement:u}of o){if(!u||typeof u.id!="string"||u.id.length===0||!Number.isInteger(u.r)||!Number.isInteger(u.c))continue;const p=`${u.r},${u.c}`;!(d==="callout"?l:c).has(p)||s.has(u.id)||n.has(p)||(s.add(u.id),n.add(p),a.push(Eb(u)))}return a}createPlacementSpotLayout(e,t,i,o=!1){const s=e.map(h=>({key:`${h.r},${h.c}`,placementId:h.id,center:{r:h.r,c:h.c},point:_(this.effectiveStep,h.r,h.c),...h.itemProperties===void 0?{}:{itemProperties:{...h.itemProperties}}}));if(s.length===0)return{spots:s,vertical:!1,start:null,calloutOrder:null};const n=s[0].point,a=s[s.length-1].point,c=Math.atan2(Math.abs(a.y-n.y),Math.abs(a.x-n.x))*180/Math.PI,l=t?.algorithm??Gr,d=t?l==="vertical-column":c>45;let u=null;if(t)if(t.mixedMode&&i)if(o&&(l==="vertical-column"||l==="horizontal-column"))u=this.orderCalloutPlacementSpots(s,t,l);else{const h=new Set((i.placements??[]).map(b=>b.id)),f=new Set((t.placements??[]).map(b=>b.id)),g=s.filter(b=>h.has(b.placementId)),m=s.filter(b=>f.has(b.placementId)&&!h.has(b.placementId));u=[...g,...this.orderCalloutPlacementSpots(m,t,l)]}else u=this.orderCalloutPlacementSpots(s,t,l);const p=t?u?.[0]??null:s.slice().sort((h,f)=>this.comparePlacementSpots(h,f,d))[0]??null;return{spots:s,vertical:d,start:p,calloutOrder:u}}createPlacementSpotTraversal(e,t,i,o,s){const{start:n}=e;if(!n)return[];const a=new Map(e.spots.map(f=>[f.key,f])),c=f=>{if(o.has(f.key))return!0;const g=this.createItemFootprint(t,f.center,f.itemProperties);return s.some(m=>this.footprintsOverlap(g,m))},l=f=>{const g=wr(f);return e.vertical?g:[g[0],...g.slice(1).reverse()]},d=!i.has(n.key)&&c(n),u=[],p=[],h=new Set;if(d){const f=l(n.center).map(m=>a.get(`${m.r},${m.c}`)).filter(m=>m!==void 0),g=f.filter(m=>i.has(m.key));if(g.length>0)for(const m of g)p.push(m),h.add(m.key);else{const m=f.find(b=>!c(b));return m?[m]:[]}}else p.push(n),h.add(n.key);for(let f=0;f<p.length;f++){const g=p[f];u.push(g);for(const m of l(g.center)){const b=a.get(`${m.r},${m.c}`);!b||h.has(b.key)||!i.has(b.key)&&c(b)||(h.add(b.key),p.push(b))}}return u}orderCalloutPlacementSpots(e,t,i){if(i!=="swarm")return e.slice().sort((a,c)=>this.comparePlacementSpots(a,c,i==="vertical-column"));const o=e.find(a=>a.center.r===t.point.r&&a.center.c===t.point.c),s=_(this.effectiveStep,t.point.r,t.point.c),n=e.filter(a=>a!==o).slice().sort((a,c)=>{const l=(a.point.x-s.x)**2+(a.point.y-s.y)**2,d=(c.point.x-s.x)**2+(c.point.y-s.y)**2;return l-d||a.center.r-c.center.r||a.center.c-c.center.c});return o?[o,...n]:n}findNextCalloutPlacementSpot(e,t,i,o,s){for(const n of e.calloutOrder??[]){if(t.has(n.key)||o.has(n.key))continue;const a=this.createItemFootprint(i,n.center,n.itemProperties);if(!s.some(c=>this.footprintsOverlap(a,c)))return n}return null}findNextPlacementSpot(e,t,i,o,s,n,a){const c=this.createPlacementSpotTraversal(e,i,t,n,a);for(const l of c){if(t.has(l.key)||o.has(l.key))continue;const d=this.createItemFootprint(i,l.center,l.itemProperties);if(!s.some(u=>this.footprintsOverlap(d,u)))return l}return null}comparePlacementSpots(e,t,i){const o=i?e.point.y:e.point.x,s=i?t.point.y:t.point.x,n=i?e.point.x:e.point.y,a=i?t.point.x:t.point.y;return o-s||n-a||e.center.r-t.center.r||e.center.c-t.center.c}getGroupCentroid(e){if(e.length===0)return null;const t=e.reduce((i,o)=>{const s=_(this.effectiveStep,o.r,o.c);return{x:i.x+s.x,y:i.y+s.y}},{x:0,y:0});return{x:t.x/e.length,y:t.y/e.length}}createItemFootprint(e,t,i){const o=this.createPositionSnapshot(t.r,t.c,this.numberOrZero(e.offsetX),this.numberOrZero(e.offsetY)),s=i===void 0?e.getOuterRadius(this.effectiveStep):this.getOuterRadiusForProperties(this.resolveItemProperties(e,i));return{x:o.x,y:o.y,radius:s}}footprintsOverlap(e,t){const i={x:e.x,y:e.y},o={x:t.x,y:t.y};return Math.max(ht(i,e.radius,o,t.radius),ht(o,t.radius,i,e.radius))>1e-8}markItemUnplaced(e){e.hidden=!0,e.style.visibility="hidden",e.tabIndex=-1,e.setAttribute("aria-hidden","true"),e.setAttribute("data-unplaced","")}notifyOccupancyChanged(){this.dispatchSceneUpdateEvent(new CustomEvent(Mn,{bubbles:!0,composed:!0}))}dispatchSceneUpdateEvent(e){const t=this.parentElement,i=t?.localName==="ff-scene"?Array.from(t.children).filter(s=>s instanceof Bn):[];i.includes(this)||i.push(this);const o=i.map(s=>s.#m);for(const s of i)s.#m=!0;try{this.dispatchEvent(e)}finally{i.forEach((s,n)=>{s.#m=o[n]??!1})}}refreshLayout(){if(!this.isConnected)return;this.locked||this.initializePendingItemPositions();const e=this.getHexItems(),t=this.effectiveStep,i=this.effectiveRows,o=this.effectiveColumns,s=this.mode==="hex"?Ce(i,o):null;let n=t;for(const f of e)n=Math.max(n,f.getOuterRadius(t));const a=i>0&&o>0;let c=a?t*(o-1+(i-1)/2):0;const l=t*Kl/2;let d=a?l*(i-1):0;if(s){c=0,d=0;for(const f of s.centers){const g=_(t,f.r,f.c);c=Math.max(c,g.x),d=Math.max(d,g.y)}}const u=n+(s?1:0),p=n*Kl/2+(s?1:0);this.style.setProperty("--ff-tri-layer-step",`${t}px`),this.style.setProperty("--ff-tri-layer-row-height",`${l}px`),this.style.setProperty("--ff-tri-layer-grid-period",`${l*2}px`),this.style.setProperty("--ff-tri-layer-half-step",`${t/2}px`),this.style.setProperty("--ff-tri-layer-padding-x",`${u}px`),this.style.setProperty("--ff-tri-layer-padding-y",`${p}px`),this.style.setProperty("--ff-tri-layer-surface-width",`${Math.max(1,c+1)}px`),this.style.setProperty("--ff-tri-layer-surface-height",`${Math.max(1,d+1)}px`),this.style.setProperty("--ff-tri-layer-width",`${Math.max(1,c+u*2+1)}px`),this.style.setProperty("--ff-tri-layer-height",`${Math.max(1,d+p*2+1)}px`);for(const f of e)this.renderItemFromAttributes(f);const h=this.#e;if(!h){this.clearSnapGhost();return}if(!e.includes(h.item)){this.cancelActiveDrag();return}this.updateDragVisual(h,h.clientX,h.clientY)}renderItemFromAttributes(e){const t=this.readItemPosition(e);this.renderItemAt(e,t.x,t.y)}renderItemAt(e,t,i){const o=Number.parseFloat(this.style.getPropertyValue("--ff-tri-layer-padding-x")),s=Number.parseFloat(this.style.getPropertyValue("--ff-tri-layer-padding-y"));e.style.setProperty("--ff-hex-item-radius",`${e.getOuterRadius(this.effectiveStep)}px`),e.style.setProperty("--ff-hex-item-x",`${t+(Number.isFinite(o)?o:0)}px`),e.style.setProperty("--ff-hex-item-y",`${i+(Number.isFinite(s)?s:0)}px`)}readItemPosition(e){return this.createPositionSnapshot(this.numberOrZero(e.r),this.numberOrZero(e.c),this.numberOrZero(e.offsetX),this.numberOrZero(e.offsetY))}createPositionSnapshot(e,t,i,o){const s=_(this.effectiveStep,e,t,i,o);return{r:e,c:t,offsetX:i,offsetY:o,x:s.x,y:s.y}}createPositionChange(e,t,i){return{item:e,old:{r:t.r,c:t.c,offsetX:t.offsetX,offsetY:t.offsetY},new:{r:i.r,c:i.c,offsetX:i.offsetX,offsetY:i.offsetY},x:i.x,y:i.y}}numberOrZero(e){return typeof e=="number"&&Number.isFinite(e)?e:0}clientPointToLayerPoint(e,t){const i=this.surface,o=i?.getBoundingClientRect()??this.getBoundingClientRect(),s=i?this.ownerDocument.defaultView?.getComputedStyle(i):void 0,n=Number.parseFloat(this.style.getPropertyValue("--ff-tri-layer-surface-width")),a=Number.parseFloat(this.style.getPropertyValue("--ff-tri-layer-surface-height")),c=Number.parseFloat(s?.width??""),l=Number.parseFloat(s?.height??""),d=Number.isFinite(n)&&n>0?n:c,u=Number.isFinite(a)&&a>0?a:l,p=o.width>0&&Number.isFinite(d)&&d>0?d/o.width:1,h=o.height>0&&Number.isFinite(u)&&u>0?u/o.height:1;return{x:(e-o.left)*p,y:(t-o.top)*h}}findItemFromEvent(e){const t=e.composedPath().find(i=>i instanceof Z);return t&&!t.locked&&this.getDirectHexItems().includes(t)?t:null}getGroupCentersForItem(e){if(!e.groupId)return null;const t=this._groups.find(i=>i.id===e.groupId);return t?.callout&&e.layoutMode==="auto"&&this.#r.has(t.id)&&this.mode==="hex"?Ce(this.effectiveRows,this.effectiveColumns).centers:this.groupMode!=="group"?null:t?this.getValidGroupCenters(t):[]}getEligibleHexVertexKeys(){const e=this.effectiveRows,t=this.effectiveColumns;return(e!==this.#s||t!==this.#u)&&(this.#o=new Set(Ce(e,t).vertices.map(i=>`${i.r},${i.c}`)),this.#s=e,this.#u=t),this.#o}getEligibleGroupVertices(e){const t=this.getEligibleHexVertexKeys(),i=new Map;for(const o of e)for(const s of Qt(o)){const n=`${s.r},${s.c}`;t.has(n)&&i.set(n,s)}return Array.from(i.values())}getEligibleSitesForItem(e,t=this.getGroupCentersForItem(e)){if(t!==null){if(this.mode!=="hex"||this.dragSnap!=="live"||this.snapTarget==="center")return t;const o=this.getEligibleGroupVertices(t);return this.snapTarget==="vertex"?o:[...t,...o]}if(this.mode==="hex"){const o=Ce(this.effectiveRows,this.effectiveColumns);return this.snapTarget==="center"?o.centers:this.snapTarget==="vertex"?o.vertices:[...o.centers,...o.vertices]}const i=[];for(let o=0;o<this.effectiveRows;o++)for(let s=0;s<this.effectiveColumns;s++)i.push({r:o,c:s});return i}findNearestSiteForItem(e,t,i){const o=this.getGroupCentersForItem(e);if(o===null)return xs(this.effectiveStep,t,i,this.effectiveRows,this.effectiveColumns,this.mode,this.snapTarget);let s=null,n=Number.POSITIVE_INFINITY;for(const a of this.getEligibleSitesForItem(e,o)){const c=_(this.effectiveStep,a.r,a.c),l=(c.x-t)**2+(c.y-i)**2;l>=n||(s={r:a.r,c:a.c},n=l)}return s}updateDragVisual(e,t,i){e.clientX=t,e.clientY=i;const o=this.clientPointToLayerPoint(t,i);e.desiredX=o.x+e.grabOffsetX,e.desiredY=o.y+e.grabOffsetY;const s=this.getGroupCentersForItem(e.item);if(s!==null){const n=vr(this.effectiveStep,this.mode,{x:e.desiredX,y:e.desiredY},s);e.desiredX=n?.x??e.startPosition.x,e.desiredY=n?.y??e.startPosition.y}e.candidate=this.dragSnap==="live"?this.findNearestSiteForItem(e.item,e.desiredX,e.desiredY):null,e.candidate?this.renderSnapGhost(e.item,e.candidate):this.clearSnapGhost(),e.visualX=e.desiredX,e.visualY=e.desiredY,this.renderItemAt(e.item,e.visualX,e.visualY),this.updateReboundPreview(e)}renderSnapGhost(e,t){const i=this.snapGhostElement;if(!i||!this.surface)return;const o=_(this.effectiveStep,t.r,t.c);if(i.parentElement!==this.surface&&this.surface.append(i),i.style.removeProperty("display"),this.#p!==e){const s=this.ownerDocument.defaultView?.getComputedStyle(e),n=["--ff-hex-item-border-color","--ff-hex-item-border-width","--ff-hex-item-background","--ff-hex-item-color"];for(const a of n){const c=s?.getPropertyValue(a)||e.style.getPropertyValue(a);c&&i.style.setProperty(a,c)}this.#p=e}i.dataset.shape=e.shape,i.dataset.fillEnabled=String(e.fillEnabled),i.style.setProperty("--ff-tri-layer-ghost-x",`${o.x}px`),i.style.setProperty("--ff-tri-layer-ghost-y",`${o.y}px`),i.style.setProperty("--ff-tri-layer-ghost-radius",`${e.getOuterRadius(this.effectiveStep)}px`),this.snapGhostIconElement&&(this.snapGhostIconElement.textContent=e.icon),this.snapGhostLabelElement&&(this.snapGhostLabelElement.textContent=e.label)}clearSnapGhost(){this.#p=null;const e=this.snapGhostElement;e&&(e.remove(),e.style.removeProperty("--ff-tri-layer-ghost-x"),e.style.removeProperty("--ff-tri-layer-ghost-y"),e.style.removeProperty("--ff-tri-layer-ghost-radius"),delete e.dataset.shape,delete e.dataset.fillEnabled,e.style.removeProperty("--ff-hex-item-border-color"),e.style.removeProperty("--ff-hex-item-border-width"),e.style.removeProperty("--ff-hex-item-background"),e.style.removeProperty("--ff-hex-item-color"),this.snapGhostIconElement&&(this.snapGhostIconElement.textContent=""),this.snapGhostLabelElement&&(this.snapGhostLabelElement.textContent=""))}updateReboundPreview(e){if(!this.rebound){this.restoreReboundPreview(e);return}const t=e.item.getOuterRadius(this.effectiveStep),i=e.visualX-e.startPosition.x,o=e.visualY-e.startPosition.y;let s=null,n=0,a=0,c=null,l=0;for(const d of this.getHexItems()){if(d===e.item||d.hasAttribute("data-unplaced"))continue;const u=this.readItemPosition(d),p=u.x-e.visualX,h=u.y-e.visualY,f=Math.hypot(p,h),g=t+d.getOuterRadius(this.effectiveStep),m=g-f;if(m<=l)continue;const b=Math.hypot(i,o),x=f>0?p/f:b>0?i/b:1,y=f>0?h/f:b>0?o/b:0,C=e.visualX+x*g,N=e.visualY+y*g;let v=C,P=N,L=null;if(this.dragSnap==="live"){const O=e.candidate?_(this.effectiveStep,e.candidate.r,e.candidate.c):{x:e.visualX,y:e.visualY};if(L=this.findNearestFreeSite(C,N,e.item,d,O),!L)continue;const V=_(this.effectiveStep,L.r,L.c);v=V.x,P=V.y}else{const O=this.getGroupCentersForItem(d);if(O!==null){const V=vr(this.effectiveStep,this.mode,{x:v,y:P},O);if(!V)continue;v=V.x,P=V.y}}s=d,n=v,a=P,c=L,l=m}if(!s){this.restoreReboundPreview(e);return}e.previewItem&&e.previewItem!==s&&this.restoreReboundPreview(e),e.previewItem=s,e.previewX=n,e.previewY=a,e.previewSite=c,s.setAttribute("data-rebound-preview",""),this.renderItemAt(s,n,a)}findNearestFreeSite(e,t,i,o,s){const n=this.getEligibleSitesForItem(o),a=o.getOuterRadius(this.effectiveStep),c=i.getOuterRadius(this.effectiveStep),l=this.getHexItems().filter(p=>p!==i&&p!==o&&!p.hasAttribute("data-unplaced"));let d=null,u=Number.POSITIVE_INFINITY;for(const p of n){const h=_(this.effectiveStep,p.r,p.c);if(Math.hypot(h.x-s.x,h.y-s.y)<a+c||l.some(g=>{const m=this.readItemPosition(g);return Math.hypot(h.x-m.x,h.y-m.y)<a+g.getOuterRadius(this.effectiveStep)}))continue;const f=(h.x-e)**2+(h.y-t)**2;f>=u||(d=p,u=f)}return d}restoreReboundPreview(e){const t=e.previewItem;e.previewItem=null,e.previewSite=null,t&&(t.removeAttribute("data-rebound-preview"),this.renderItemFromAttributes(t))}commitDrag(e,t,i){if(this.#e!==e)return;if(this.locked){this.cancelActiveDrag();return}if(!this.getDirectHexItems().includes(e.item)){this.cancelActiveDrag();return}this.updateDragVisual(e,t,i);const o=this.dragSnap==="live"?e.candidate:this.findNearestSiteForItem(e.item,e.desiredX,e.desiredY),s=[];if(o){const n=this.readItemPosition(e.item),a=_(this.effectiveStep,o.r,o.c),c=this.dragSnap==="free"?e.desiredX-a.x:0,l=this.dragSnap==="free"?e.desiredY-a.y:0,d=this.createPositionSnapshot(o.r,o.c,c,l);let u=null;if(e.previewItem&&this.getHexItems().includes(e.previewItem)){const p=e.previewSite??(this.dragSnap==="free"?this.findNearestSiteForItem(e.previewItem,e.previewX,e.previewY):null);if(p&&!(p.r===o.r&&p.c===o.c)){const h=_(this.effectiveStep,p.r,p.c),f=e.previewX-h.x,g=e.previewY-h.y;u={item:e.previewItem,position:p,offsetX:f,offsetY:g,oldPosition:this.readItemPosition(e.previewItem),newPosition:this.createPositionSnapshot(p.r,p.c,f,g)}}}this.#l=!0;try{const p=this.positionsDiffer(n,d),h=!!(u&&this.positionsDiffer(u.oldPosition,u.newPosition));p&&(e.item.layoutMode="fixed"),h&&u&&(u.item.layoutMode="fixed"),this.applyPosition(e.item,o,c,l),u&&this.applyPosition(u.item,u.position,u.offsetX,u.offsetY),s.push(this.createPositionChange(e.item,n,d)),h&&u&&s.push(this.createPositionChange(u.item,u.oldPosition,u.newPosition))}finally{this.#l=!1}}this.#e=null,this.ownerDocument.removeEventListener("keydown",this.#I,!0),this.hasPointerCapture(e.pointerId)&&this.releasePointerCapture(e.pointerId),e.item.removeAttribute("data-dragging"),this.restoreReboundPreview(e),this.clearSnapGhost(),this.refreshLayout(),s.length>0&&this.dispatchSceneUpdateEvent(new CustomEvent(ws,{detail:{changes:s},bubbles:!0,composed:!0}))}applyPosition(e,t,i,o){e.r=t.r,e.c=t.c,e.offsetX=i,e.offsetY=o}positionsDiffer(e,t){return e.r!==t.r||e.c!==t.c||e.offsetX!==t.offsetX||e.offsetY!==t.offsetY}cancelActiveDrag(){const e=this.#e;this.#e=null,this.ownerDocument.removeEventListener("keydown",this.#I,!0),e&&(e.item.removeAttribute("data-dragging"),this.restoreReboundPreview(e),this.hasPointerCapture(e.pointerId)&&this.releasePointerCapture(e.pointerId)),this.clearSnapGhost(),this.refreshLayout()}};De([S({converter:ce})],Te.prototype,"step");De([S({converter:ce})],Te.prototype,"rows");De([S({converter:ce})],Te.prototype,"columns");De([S],Te.prototype,"mode");De([S({attribute:"drag-snap"})],Te.prototype,"dragSnap");De([S({attribute:"snap-target"})],Te.prototype,"snapTarget");De([S({attribute:"group-mode"})],Te.prototype,"groupMode");De([S({mode:"boolean"})],Te.prototype,"rebound");De([S({mode:"boolean"})],Te.prototype,"locked");De([$],Te.prototype,"groups");De([$],Te.prototype,"defaultItemProperties");De([$],Te.prototype,"items");De([$],Te.prototype,"unplacedItemsCount");De([$],Te.prototype,"itemsSlot");De([$],Te.prototype,"surface");De([$],Te.prototype,"snapGhostElement");De([$],Te.prototype,"snapGhostIconElement");De([$],Te.prototype,"snapGhostLabelElement");De([$],Te.prototype,"calloutDecorationsElement");let Ab=Te;const Nb=H`
    :host {
        pointer-events: none;
        display: block;
        position: relative;
        width: var(--ff-tri-layer-width, fit-content);
        height: var(--ff-tri-layer-height, fit-content);
        overflow: visible;
        touch-action: none;
    }

    :host([hidden]) {
        display: none;
    }

    .callout-overlay {
        position: absolute;
        inset: 0;
        display: block;
        width: 100%;
        height: 100%;
        overflow: visible;
        z-index: 0;
        pointer-events: none;
    }

    .surface {
        position: absolute;
        left: var(--ff-tri-layer-padding-x, 48px);
        top: var(--ff-tri-layer-padding-y, 41.569px);
        width: var(--ff-tri-layer-surface-width, 1px);
        height: var(--ff-tri-layer-surface-height, 1px);
        background-image:
            radial-gradient(circle at 1px 1px, var(--ff-tri-layer-node-color, rgba(98, 112, 120, 0.45)) var(--ff-tri-layer-node-size, 1px), transparent calc(var(--ff-tri-layer-node-size, 1px) + 0.5px)),
            radial-gradient(circle at 1px 1px, var(--ff-tri-layer-node-color, rgba(98, 112, 120, 0.45)) var(--ff-tri-layer-node-size, 1px), transparent calc(var(--ff-tri-layer-node-size, 1px) + 0.5px));
        background-size: var(--ff-tri-layer-step, 48px) var(--ff-tri-layer-grid-period, 83.138px);
        background-position:
            0 0,
            var(--ff-tri-layer-half-step, 24px) var(--ff-tri-layer-row-height, 41.569px);
    }

    :host([mode="hex"]) .surface {
        background-image: none;
    }

    .snap-ghost {
        box-sizing: border-box;
        position: absolute;
        left: var(--ff-tri-layer-ghost-x, 0px);
        top: var(--ff-tri-layer-ghost-y, 0px);
        z-index: 0;
        width: calc(var(--ff-tri-layer-ghost-radius, var(--ff-tri-layer-step, 48px)) * 2);
        height: calc(var(--ff-tri-layer-ghost-radius, var(--ff-tri-layer-step, 48px)) * 1.7320508075688772);
        transform: translate(-50%, -50%);
        opacity: 0.72;
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
    }

    .snap-ghost .hexagon {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
    }

    .snap-ghost .shape {
        box-sizing: border-box;
        position: absolute;
        inset: 0;
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .snap-ghost .shape polygon,
    .snap-ghost .shape rect,
    .snap-ghost .shape circle {
        fill: var(--ff-hex-item-background, Canvas);
        stroke: var(--ff-hex-item-border-color, currentColor);
        stroke-width: var(--ff-hex-item-border-width, 2px);
        vector-effect: non-scaling-stroke;
    }

    .snap-ghost .shape .hex-shape {
        display: block;
    }

    .snap-ghost .shape .square-shape,
    .snap-ghost .shape .circle-shape {
        display: none;
    }

    .snap-ghost[data-shape="none"] .shape {
        display: none;
    }

    .snap-ghost[data-shape="none"] .shape polygon,
    .snap-ghost[data-shape="none"] .shape rect,
    .snap-ghost[data-shape="none"] .shape circle {
        display: none;
    }

    .snap-ghost[data-shape="square"] .shape .hex-shape,
    .snap-ghost[data-shape="square"] .shape .circle-shape,
    .snap-ghost[data-shape="circle"] .shape .hex-shape,
    .snap-ghost[data-shape="circle"] .shape .square-shape {
        display: none;
    }

    .snap-ghost[data-shape="square"] .shape .square-shape,
    .snap-ghost[data-shape="circle"] .shape .circle-shape {
        display: block;
    }

    .snap-ghost[data-fill-enabled="false"] .shape polygon,
    .snap-ghost[data-fill-enabled="false"] .shape rect,
    .snap-ghost[data-fill-enabled="false"] .shape circle {
        fill: none;
    }

    .snap-ghost .content {
        position: relative;
        z-index: 1;
        display: flex;
        max-width: 75%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2px;
        color: var(--ff-hex-item-color, CanvasText);
        font-family: var(--fontFamilyBase, sans-serif);
        line-height: 1;
        text-align: center;
        white-space: nowrap;
    }

    .snap-ghost .icon {
        font-size: 1.1em;
    }

    .snap-ghost .label {
        font-size: 0.8em;
        font-weight: 600;
    }

    slot {
        position: absolute;
        inset: 0;
        display: block;
        overflow: visible;
        z-index: 1;
        pointer-events: none;
    }

    ::slotted(ff-hex-item) {
        pointer-events: auto;
    }

    :host([locked]) ::slotted(ff-hex-item) {
        pointer-events: none;
    }
`,Lb=ie`
    <div class="surface" ${te("surface")}></div>
    <svg class="callout-overlay" aria-hidden="true" focusable="false">
        <g class="callout-decorations" ${te("calloutDecorationsElement")}></g>
    </svg>
    <slot ${yo("itemsSlot")}></slot>
    <div class="snap-ghost" aria-hidden="true" style="display: none" ${te("snapGhostElement")}>
        <div class="hexagon">
            <svg class="shape" viewBox="0 0 100 86.6025403784" preserveAspectRatio="none" focusable="false">
                <polygon class="hex-shape" points="25,0 75,0 100,43.3012701892 75,86.6025403784 25,86.6025403784 0,43.3012701892"></polygon>
                <rect class="square-shape" x="6.6987298108" y="0" width="86.6025403784" height="86.6025403784"></rect>
                <circle class="circle-shape" cx="50" cy="43.3012701892" r="43.3012701892"></circle>
            </svg>
            <span class="content">
                <span class="icon" ${te("snapGhostIconElement")}></span>
                <span class="label" ${te("snapGhostLabelElement")}></span>
            </span>
        </div>
    </div>
`,zb=Ab.compose({name:"ff-items-layer",template:Lb,styles:Nb,shadowOptions:{mode:"open"}});zb.define(Me.registry);var _b=Object.defineProperty,wt=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&_b(e,t,o),o};const Wl="http://www.w3.org/2000/svg",Gb=Math.sqrt(3);class ct extends Mr{#e=null;#t=null;#r=!1;#o=new Map;#s=null;#u=new Set;#a=new Set;#n=-1;#i=-1;#c=new Map;#d=e=>{if(this.locked||this.#e||e.isPrimary===!1||e.button!==0)return;const t=this.#D(e);if(!t)return;const i=this.#O(e.clientX,e.clientY),o=_(this.#p,t.r,t.c);this.#e={pointerId:e.pointerId,placementId:t.id,startPlacement:this.#C(t),grabOffsetX:o.x-i.x,grabOffsetY:o.y-i.y,desiredX:o.x,desiredY:o.y,visualX:o.x,visualY:o.y},this.ownerDocument.addEventListener("keydown",this.#m,!0),this.setPointerCapture(e.pointerId),e.preventDefault()};#g=e=>{const t=this.#e;!t||t.pointerId!==e.pointerId||(e.preventDefault(),this.#M(t,e.clientX,e.clientY))};#l=e=>{const t=this.#e;!t||t.pointerId!==e.pointerId||(e.preventDefault(),this.#X(t,e.clientX,e.clientY))};#h=e=>{this.#e?.pointerId===e.pointerId&&this.#z()};#m=e=>{e.key!=="Escape"||!this.#e||(e.preventDefault(),e.stopPropagation(),this.#z())};constructor(){super(),this.groupId="",this.placementList="group",this.locked=!1,this.step=16,this.rows=58,this.columns=51,this.mode="tri",this.dragSnap="free",this.snapTarget="any",this._group=null,this.group=this._group,this._placements=[],this.placements=this._placements,this._occupiedPlacements=[],this.occupiedPlacements=this._occupiedPlacements}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerdown",this.#d),this.addEventListener("pointermove",this.#g),this.addEventListener("pointerup",this.#l),this.addEventListener("pointercancel",this.#h),this.addEventListener("lostpointercapture",this.#h),this.#w()}disconnectedCallback(){this.#z(),this.removeEventListener("pointerdown",this.#d),this.removeEventListener("pointermove",this.#g),this.removeEventListener("pointerup",this.#l),this.removeEventListener("pointercancel",this.#h),this.removeEventListener("lostpointercapture",this.#h),super.disconnectedCallback()}groupChanged(e,t){this._group=t??null,t?(this.groupId=t.id,this.#_(this.#A(t)??[],!0)):this.#w()}lockedChanged(e,t){t&&this.#z()}groupIdChanged(){this.#w()}placementsChanged(e,t){if(this.#r)return;const i=this.#x(t);this._placements=i,this._group&&this.#N(this._group,i),this.#w()}placementListChanged(e,t){if(t!=="group"&&t!=="callout"){this.placementList="group";return}this._group&&this.#_(this.#A(this._group)??[],!0)}occupiedPlacementsChanged(e,t){this._occupiedPlacements=this.#x(t)}setCalloutGuide(e,t){this.#t=e&&t&&[e.x,e.y,t.x,t.y].every(Number.isFinite)?{centroid:{...e},point:{...t}}:null,this.#G()}refreshCoordinateTransforms(){const e=this.#L(),t=`translate(${e.x} ${e.y})`,i=this.placementShapesElement,o=this.calloutGuidesElement;(!i||i.getAttribute("transform")===t)&&(!o||o.getAttribute("transform")===t)||this.#w()}setAutoItemPlacementCenters(e){const t=new Map;if(this._group&&this.mode==="hex"){const i=this.#v();for(const o of e){if(!Number.isInteger(o?.r)||!Number.isInteger(o?.c))continue;const s=`${o.r},${o.c}`;i.has(s)&&t.set(s,{r:o.r,c:o.c})}}this.#c.size===t.size&&Array.from(t.keys()).every(i=>this.#c.has(i))||(this.#c=t,this.#w())}setSelectedPlacementId(e){const t=typeof e=="string"&&e.length>0?e:null;if(this.#s!==t){this.#s=t;for(const[i,o]of this.#o)i===t?o.cell.dataset.selected="":delete o.cell.dataset.selected}}stepChanged(e,t){if(t===null||!Number.isFinite(t)||t<=0){this.step=16;return}this.#w()}rowsChanged(e,t){if(t===null||!Number.isFinite(t)||t<0){this.rows=58;return}if(!Number.isInteger(t)){this.rows=Math.floor(t);return}this.#w()}columnsChanged(e,t){if(t===null||!Number.isFinite(t)||t<0){this.columns=51;return}if(!Number.isInteger(t)){this.columns=Math.floor(t);return}this.#w()}modeChanged(e,t){if(t!=="tri"&&t!=="hex"){this.mode="tri";return}this.#w()}dragSnapChanged(e,t){if(t!=="free"&&t!=="live"){this.dragSnap="free";return}this.#w()}snapTargetChanged(e,t){if(t!=="any"&&t!=="center"&&t!=="vertex"){this.snapTarget="center";return}this.#w()}get#p(){return typeof this.step=="number"&&Number.isFinite(this.step)&&this.step>0?this.step:16}get#f(){return typeof this.rows=="number"&&Number.isFinite(this.rows)?Math.max(0,Math.floor(this.rows)):58}get#b(){return typeof this.columns=="number"&&Number.isFinite(this.columns)?Math.max(0,Math.floor(this.columns)):51}#y(){const e=Array.isArray(this._group?.centers)?this._group.centers:[],t=new Map,i=this.mode==="hex"?this.#v():null;if(this.placementList==="callout"&&this._group?.callout&&this.mode==="hex")return Ce(this.#f,this.#b).centers;for(const o of e){if(!Number.isInteger(o?.r)||!Number.isInteger(o?.c))continue;const s=`${o.r},${o.c}`;(i?i.has(s):Fr(o.r,o.c,this.#f,this.#b,this.mode,"center"))&&t.set(s,{r:o.r,c:o.c})}return Array.from(t.values())}#v(){const e=this.#f,t=this.#b;if(e!==this.#n||t!==this.#i){const i=Ce(e,t);this.#u=new Set(i.centers.map(o=>`${o.r},${o.c}`)),this.#a=new Set(i.vertices.map(o=>`${o.r},${o.c}`)),this.#n=e,this.#i=t}return this.#u}#S(){return this.#v(),this.#a}#I(e){const t=this.#S(),i=new Map;for(const o of e)for(const s of Qt(o)){const n=`${s.r},${s.c}`;t.has(n)&&i.set(n,s)}return Array.from(i.values())}#$(e=this.#y()){if(this._group||e.length>0){const i=this.#P(e);if(this.mode!=="hex"||this.dragSnap!=="live"||this.snapTarget==="center")return i;const o=this.#I(e);return this.snapTarget==="vertex"?o:[...i,...o]}if(this.mode==="hex"){const i=Ce(this.#f,this.#b);return this.snapTarget==="center"?i.centers:this.snapTarget==="vertex"?i.vertices:[...i.centers,...i.vertices]}const t=[];for(let i=0;i<this.#f;i++)for(let o=0;o<this.#b;o++)t.push({r:i,c:o});return t}#E(e=this.#y()){return this._group||e.length>0?this.mode!=="hex"?e:[...this.#P(e),...this.#I(e)]:this.#$(e)}#P(e){const t=new Map;for(const o of e)t.set(`${o.r},${o.c}`,{r:o.r,c:o.c});if(!this._group||this.mode!=="hex"||t.size===0)return Array.from(t.values());const i=this.#v();for(const[o,s]of this.#c)i.has(o)&&t.set(o,{...s});return Array.from(t.values())}#k(){const e=new Set(this.#E().map(s=>`${s.r},${s.c}`)),t=new Set,i=new Set,o=[];for(const s of this._placements){if(!s||typeof s.id!="string"||s.id.length===0||!Number.isInteger(s.r)||!Number.isInteger(s.c))continue;const n=`${s.r},${s.c}`;!e.has(n)||t.has(s.id)||i.has(n)||(t.add(s.id),i.add(n),o.push(this.#C(s)))}return o}#x(e){return Array.isArray(e)?e.filter(t=>t&&typeof t.id=="string").map(t=>this.#C(t)):[]}#C(e){const t={id:e.id,r:e.r,c:e.c};return Object.prototype.hasOwnProperty.call(e,"itemProperties")&&Object.assign(t,{itemProperties:e.itemProperties===void 0?void 0:{...e.itemProperties}}),t}#_(e,t){const i=this.#x(e);this._placements=i,this.#r=!0,this.placements=i,this.#r=!1,t&&this._group&&this.#N(this._group,i),this.#w()}#A(e){return this.placementList==="callout"?e.callout?.placements:e.placements}#N(e,t){this.placementList==="callout"?e.callout&&(e.callout.placements=this.#x(t)):e.placements=this.#x(t)}#w(){const e=this.placementShapesElement;if(!e)return;const t=this.#L();e.setAttribute("transform",`translate(${t.x} ${t.y})`);const i=this.#k(),o=new Set(i.map(a=>a.id));for(const[a,c]of this.#o)o.has(a)||(c.cell.remove(),this.#o.delete(a));const s=this.#p,n=[];for(const a of i){const c=this.#e,l=c?.placementId===a.id,d=l&&c?{x:c.visualX,y:c.visualY}:_(s,a.r,a.c);let u=this.#o.get(a.id);u||(u=this.#T(),this.#o.set(a.id,u)),this.#B(u,a,d,s,l),n.push(u.cell)}for(let a=0;a<n.length;a++){const c=n[a],l=e.children.item(a);c!==l&&e.insertBefore(c,l)}for(;e.childElementCount>n.length;)e.lastElementChild?.remove();this.#G()}#G(){const e=this.calloutGuidesElement;if(!e)return;e.replaceChildren();const t=this.#L();e.setAttribute("transform",`translate(${t.x} ${t.y})`);const i=this.#t;if(!i)return;const o=this.ownerDocument.createElementNS(Wl,"line");o.dataset.calloutGuide="",o.dataset.groupId=this._group?.id??this.groupId,o.setAttribute("x1",String(i.centroid.x)),o.setAttribute("y1",String(i.centroid.y)),o.setAttribute("x2",String(i.point.x)),o.setAttribute("y2",String(i.point.y)),o.setAttribute("stroke",this._group?.borderColor||"#176d5d"),o.setAttribute("stroke-width",String(Math.max(1,this.#p*.06))),o.setAttribute("stroke-dasharray",`${this.#p*.3} ${this.#p*.2}`),o.setAttribute("vector-effect","non-scaling-stroke"),o.setAttribute("pointer-events","none"),e.append(o)}#T(){const e=this.ownerDocument.createElementNS(Wl,"path");return e.setAttribute("class","placement-cell"),e.setAttribute("fill","#ffffff"),e.setAttribute("fill-opacity","0.78"),e.setAttribute("stroke","#176d5d"),e.setAttribute("stroke-linejoin","round"),e.setAttribute("vector-effect","non-scaling-stroke"),e.setAttribute("pointer-events","visiblePainted"),{cell:e}}#B(e,t,i,o,s){const{cell:n}=e,a=this.#R(o,i);n.getAttribute("d")!==a&&n.setAttribute("d",a),n.setAttribute("stroke-width",String(Math.max(1,o*.035))),n.dataset.groupId=this._group?.id??this.groupId,n.dataset.placementId=t.id,n.dataset.r=String(t.r),n.dataset.c=String(t.c),t.id===this.#s?n.dataset.selected="":delete n.dataset.selected,s?n.dataset.dragging="":delete n.dataset.dragging}#R(e,t){return`${Qt({r:0,c:0}).map(o=>_(e,o.r,o.c,t.x,t.y)).map((o,s)=>`${s===0?"M":"L"} ${o.x} ${o.y}`).join(" ")} Z`}#D(e){const t=e.composedPath().find(o=>o instanceof SVGElement&&o.classList.contains("placement-cell"));if(!t||t.dataset.groupId!==(this._group?.id??this.groupId))return null;const i=t.dataset.placementId;return this.#k().find(o=>o.id===i)??null}#O(e,t){const i=this.getBoundingClientRect(),o=this.#L(),s=this.offsetWidth>0&&i.width>0?i.width/this.offsetWidth:1,n=this.offsetHeight>0&&i.height>0?i.height/this.offsetHeight:1;return{x:(e-i.left)/s-o.x,y:(t-i.top)/n-o.y}}#L(){const e=this.ownerDocument.defaultView?.getComputedStyle(this),t=Number.parseFloat(e?.getPropertyValue("--ff-tri-layer-padding-x")??""),i=Number.parseFloat(e?.getPropertyValue("--ff-tri-layer-padding-y")??""),o=this.mode==="hex"?1:0;return{x:Number.isFinite(t)?t:this.#p+o,y:Number.isFinite(i)?i:this.#p*Gb/2+o}}#V(e,t=this.#k()){const i=new Set;for(const o of t)o.id!==e&&i.add(`${o.r},${o.c}`);for(const o of this._occupiedPlacements)!Number.isInteger(o.r)||!Number.isInteger(o.c)||i.add(`${o.r},${o.c}`);return i}#F(e,t,i,o=this.#$(),s=this.#k()){const n=this.#V(i,s);let a=null,c=Number.POSITIVE_INFINITY;for(const l of o){if(n.has(`${l.r},${l.c}`))continue;const d=_(this.#p,l.r,l.c),u=(d.x-e)**2+(d.y-t)**2;u>=c||(a=l,c=u)}return a}#M(e,t,i,o=this.#y(),s=this.#$(o),n=this.#k()){const a=this.#O(t,i),c={x:a.x+e.grabOffsetX,y:a.y+e.grabOffsetY},l=this.#P(o),d=o.length>0?vr(this.#p,this.mode,c,l):c;e.desiredX=d?.x??e.visualX,e.desiredY=d?.y??e.visualY;const u=this.dragSnap==="live"?this.#F(e.desiredX,e.desiredY,e.placementId,s,n):null,p=u&&this.dragSnap==="live"?_(this.#p,u.r,u.c):{x:e.desiredX,y:e.desiredY};return e.visualX=p.x,e.visualY=p.y,this.#H(e),{constrained:d,candidate:u}}#H(e){const t=this.#o.get(e.placementId);if(!t)return;const i=this.#p,o=this.#R(i,{x:e.visualX,y:e.visualY});t.cell.getAttribute("d")!==o&&t.cell.setAttribute("d",o),t.cell.dataset.dragging=""}#X(e,t,i){const o=this.#y(),s=this.#$(o),n=this.#k(),{constrained:a,candidate:c}=this.#M(e,t,i,o,s,n),l=a?this.dragSnap==="live"?c:this.#F(a.x,a.y,e.placementId,s,n):null,d=n.find(h=>h.id===e.placementId);let u=n;l&&d&&(l.r!==d.r||l.c!==d.c)?u=u.map(h=>h.id===e.placementId?{...this.#C(h),r:l.r,c:l.c}:this.#C(h)):u=u.map(h=>this.#C(h));const p=!!(l&&d&&(l.r!==d.r||l.c!==d.c));if(this.#e=null,this.ownerDocument.removeEventListener("keydown",this.#m,!0),this.hasPointerCapture(e.pointerId)&&this.releasePointerCapture(e.pointerId),p){const h=this._group,f=h?this.#A(h):void 0,g=!!(h&&l&&this.mode==="hex"&&this.dragSnap==="live"&&!o.some(x=>x.r===l.r&&x.c===l.c)),m=this.parentElement;this.#_(u,!1);const b=new CustomEvent(_r,{detail:{groupId:this._group?.id??this.groupId,placementList:this.placementList,placements:this.#x(u)},bubbles:!0,composed:!0});h&&this._group===h&&g&&m!==null&&m.localName==="ff-hex-group-layer"&&typeof m.refreshGroupOverlays=="function"?(this.#N(h,u),m.refreshGroupOverlays(),m.dispatchEvent(b)):(this.dispatchEvent(b),h&&this._group===h&&this.#A(h)===f&&this.#N(h,u))}else this.#w()}#z(){const e=this.#e;this.#e=null,this.ownerDocument.removeEventListener("keydown",this.#m,!0),e&&this.hasPointerCapture(e.pointerId)&&this.releasePointerCapture(e.pointerId),this.#w()}}wt([S({attribute:"group-id"})],ct.prototype,"groupId");wt([S({attribute:"placement-list"})],ct.prototype,"placementList");wt([S({attribute:"locked",mode:"boolean"})],ct.prototype,"locked");wt([S({converter:ce})],ct.prototype,"step");wt([S({converter:ce})],ct.prototype,"rows");wt([S({converter:ce})],ct.prototype,"columns");wt([S],ct.prototype,"mode");wt([S({attribute:"drag-snap"})],ct.prototype,"dragSnap");wt([S({attribute:"snap-target"})],ct.prototype,"snapTarget");wt([$],ct.prototype,"group");wt([$],ct.prototype,"placements");wt([$],ct.prototype,"occupiedPlacements");wt([$],ct.prototype,"placementShapesElement");wt([$],ct.prototype,"calloutGuidesElement");const Rb=H`
    :host {
        display: block;
        position: absolute;
        inset: 0;
        overflow: visible;
        pointer-events: none;
        touch-action: none;
    }

    :host([hidden]) {
        display: none;
    }

    .placement-overlay {
        position: absolute;
        inset: 0;
        display: block;
        width: 100%;
        height: 100%;
        overflow: visible;
        z-index: 1;
        pointer-events: none;
    }

    .placement-cell {
        fill: var(--ff-tri-layer-placement-fill, rgba(23, 109, 93, 0.14));
        stroke: var(--ff-tri-layer-placement-stroke, var(--ff-hex-item-selection-color, #176d5d));
        stroke-width: var(--ff-tri-layer-placement-stroke-width, 1.5px);
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
        pointer-events: visiblePainted;
        cursor: var(--ff-scene-interaction-cursor, grab);
        transition: fill 120ms ease, stroke 120ms ease, stroke-width 120ms ease, filter 120ms ease;
    }

    :host([locked]) .placement-cell {
        pointer-events: none;
        cursor: default;
    }

    .callout-guides,
    .callout-guides * {
        pointer-events: none;
    }

    .placement-cell:hover {
        fill: var(--ff-tri-layer-placement-hover-fill, rgba(23, 109, 93, 0.25));
        stroke-width: var(--ff-tri-layer-placement-hover-stroke-width, 2px);
    }

    .placement-cell:active,
    .placement-cell[data-dragging] {
        fill: var(--ff-tri-layer-placement-active-fill, rgba(23, 109, 93, 0.36));
        stroke-width: var(--ff-tri-layer-placement-active-stroke-width, 2.5px);
        cursor: var(--ff-scene-interaction-cursor, grabbing);
    }

    .placement-cell[data-selected] {
        fill: var(--ff-tri-layer-placement-selected-fill, rgba(23, 109, 93, 1));
        stroke: var(--ff-tri-layer-placement-selected-stroke, var(--ff-hex-item-selection-color, var(--accent)));
        stroke-width: var(--ff-tri-layer-placement-selected-stroke-width, 2px);
        filter: drop-shadow(0px 0px 2px var(--ff-tri-layer-placement-selected-halo, var(--accent)));
    }

    .placement-cell:focus-visible {
        stroke: var(--ff-tri-layer-placement-focus-color, var(--ff-hex-item-selection-color, #176d5d));
        stroke-width: var(--ff-tri-layer-placement-focus-stroke-width, 3px);
        filter: drop-shadow(0 0 2px var(--ff-tri-layer-placement-focus-halo, Canvas));
    }

    @media (prefers-reduced-motion: reduce) {
        .placement-cell {
            transition: none;
        }
    }
`,Ob=ie`
    <svg class="placement-overlay" aria-label="Placement cells" focusable="false">
        <g class="placement-shapes" ${te("placementShapesElement")}></g>
        <g class="callout-guides" ${te("calloutGuidesElement")}></g>
    </svg>
`,Fb=ct.compose({name:"ff-place-layer",template:Ob,styles:Rb,shadowOptions:{mode:"open"}});Fb.define(Me.registry);function Ss(r){const e=new Set;for(const l of r.eligibleCenters)Ql(l)&&e.add(wi(l));const t=[],i=new Set,o=new Map,s=new Map,n=r.groups??[];for(const l of n){if(!ec(l?.id))continue;i.has(l.id)||(i.add(l.id),t.push(l.id));let d=s.get(l.id);d||(d=new Set,s.set(l.id,d));for(const u of Array.isArray(l.centers)?l.centers:[]){if(!Ql(u))continue;const p=wi(u);if(!e.has(p)||d.has(p))continue;d.add(p);let h=o.get(p);h||(h=new Set,o.set(p,h)),h.add(l.id)}}const a=new Map(t.map((l,d)=>[l,d])),c=new Set;for(const l of n){if(!ec(l?.id))continue;const d=s.get(l.id);if(!d)continue;const u=new Set,p=new Set;for(const h of Array.isArray(l.placements)?l.placements:[]){if(!h||typeof h.id!="string"||h.id.length===0||!Number.isInteger(h.r)||!Number.isInteger(h.c))continue;const f=wi(h);!d.has(f)||u.has(h.id)||p.has(f)||(u.add(h.id),p.add(f),c.add(f))}}return{eligibleCenterKeys:e,groupOrder:t,groupOrderIndex:a,centerOwners:o,centerKeysByGroupId:s,placementKeys:c}}function ho(r){const{action:e,cell:t,index:i}=r,o=wi(t),s=i.centerOwners.get(o),n=s?.size??0,a=n===1?s?.values().next().value??null:null,c=(h,f,g,m,b)=>({action:e,cell:{r:t.r,c:t.c},valid:g===null,kind:h,reason:f,invalidReason:g,previousOwnerGroupId:m,nextOwnerGroupId:b}),l=(h,f=a)=>c("invalid",null,h,f,null);if(!i.eligibleCenterKeys.has(o))return l("invalid-cell",null);if(i.placementKeys.has(o))return l("placement-occupied");if(e==="add"){if(n>1)return l("multiply-owned",null);const h=Zl(i,t,a),f=Jl(i,h).groupId;return f?a===null?c("plus","add",null,null,f):c("exchange","exchange",null,a,f):l("no-adjacent-group",a)}if(n===0)return l("not-owned",null);if(n>1||a===null)return l("multiply-owned",null);if(wr(t).every(h=>(i.centerOwners.get(wi(h))?.size??0)>0))return l("interior-cell",a);const u=Zl(i,t,a);if(u.size===0)return c("remove","remove",null,a,null);const p=Jl(i,u);return p.tied?c("conflict",null,"contact-tie",a,null):p.groupId?c("transfer","transfer",null,a,p.groupId):l("no-adjacent-group",a)}function Zl(r,e,t){const i=new Map;for(const o of wr(e))for(const s of r.centerOwners.get(wi(o))??[])s!==t&&i.set(s,(i.get(s)??0)+1);return i}function Jl(r,e){let t=null,i=0,o=Number.POSITIVE_INFINITY,s=!1;for(const[n,a]of e){const c=r.groupOrderIndex.get(n);c!==void 0&&(a>i?(t=n,i=a,o=c,s=!1):a>0&&a===i&&(s=!0,c<o&&(t=n,o=c)))}return{groupId:t,tied:s}}function wi(r){return`${r.r},${r.c}`}function Ql(r){return Number.isInteger(r?.r)&&Number.isInteger(r?.c)}function ec(r){return typeof r=="string"&&r.length>0}var Mb=Object.defineProperty,St=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Mb(e,t,o),o};const pr="http://www.w3.org/2000/svg",tc=5,Tb=Math.sqrt(3);class dt extends Mr{#e=new Map;#t=null;#r=[];#o=new Set;#s=-1;#u=-1;#a=null;#n=null;#i=null;#c=[];#d=[];#g=new Set;#l=null;#h=null;#m=null;#p=null;#f=null;#b=null;#y=e=>{!this.canResolveGroupEdits()||this.isPlacementEvent(e)||e.isPrimary===!1||e.button!==0||(this.#n={pointerId:e.pointerId,startX:e.clientX,startY:e.clientY},this.setPointerCapture(e.pointerId))};#v=e=>{if(this.isPlacementEvent(e))return;const t=this.#n;t?.pointerId===e.pointerId&&Math.hypot(e.clientX-t.startX,e.clientY-t.startY)>tc&&(this.#n=null),this.canResolveGroupEdits()&&this.updatePreviewFromPointer(e.clientX,e.clientY)};#S=e=>{const t=this.#n;this.#n=null,!(!t||t.pointerId!==e.pointerId||Math.hypot(e.clientX-t.startX,e.clientY-t.startY)>tc||this.isPlacementEvent(e))&&this.requestGroupEdit(e.clientX,e.clientY)};#I=e=>{this.#n?.pointerId===e.pointerId&&(this.#n=null,this.clearPreview())};#$=()=>{this.clearPreview()};#E=e=>{if(e.target===this)return;if(this.placementsLocked){e.stopPropagation();return}const t=e.detail;if(!t||typeof t.groupId!="string"||!Array.isArray(t.placements))return;const i=this._groups.find(n=>n.id===t.groupId);if(!i)return;const o=t.placementList==="callout"?"callout":"group";if(o==="callout"&&!i.callout)return;e.stopPropagation();const s=this.normalizeGroupPlacements(i,t.placements,void 0,!0,o);this.setGroupPlacements(i,o,s),this.syncPlaceLayers(),this.dispatchEvent(new CustomEvent(_r,{detail:{groupId:i.id,placementList:o,placements:this.clonePlacements(s)},bubbles:!0,composed:!0}))};constructor(){super(),this._groups=[],this.step=16,this.rows=58,this.columns=51,this.mode="hex",this.dragSnap="free",this.snapTarget="center",this.locked=!1,this.showGroups=!1,this.showPlacements=!1,this.placementsLocked=!1,this.groupEditingEnabled=!1,this.groupEditAction=null,this.groups=this._groups}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerdown",this.#y),this.addEventListener("pointermove",this.#v),this.addEventListener("pointerup",this.#S),this.addEventListener("pointercancel",this.#I),this.addEventListener("lostpointercapture",this.#I),this.addEventListener("pointerleave",this.#$),this.addEventListener(_r,this.#E,!0),this.refreshLayer()}disconnectedCallback(){this.clearPointerState(),this.removeEventListener("pointerdown",this.#y),this.removeEventListener("pointermove",this.#v),this.removeEventListener("pointerup",this.#S),this.removeEventListener("pointercancel",this.#I),this.removeEventListener("lostpointercapture",this.#I),this.removeEventListener("pointerleave",this.#$),this.removeEventListener(_r,this.#E,!0),super.disconnectedCallback()}setSharedOccupancy(e){const t=Array.isArray(e)?e.filter(i=>i?.layoutMode==="fixed"&&Number.isInteger(i.r)&&Number.isInteger(i.c)&&[i.x,i.y,i.radius].every(Number.isFinite)&&i.radius>0).map(i=>({...i})):[];return this.fixedOccupancyEqual(this.#c,t)?!1:(this.#c=t,this.refreshLayer(!1),!0)}setCalloutState(e,t,i){this.#g=new Set(e),this.#d=Array.isArray(t)?t.filter(o=>o?.layoutMode==="auto"&&Number.isInteger(o.r)&&Number.isInteger(o.c)&&[o.x,o.y,o.radius].every(Number.isFinite)&&o.radius>0).map(o=>({...o})):[],this.updateGroupShapes(),this.syncPlaceLayers()}setCalloutPreview(e,t){this.#l=e&&t&&[t.x,t.y].every(Number.isFinite)?{groupId:e,point:{...t}}:null,e&&this.clearPreview(),this.updateGroupShapes()}setCalloutHoverGroup(e){const t=e!==null&&this._groups.some(i=>i?.id===e)?e:null;this.#h!==t&&(this.#h=t,this.updateGroupShapes())}setSelectedGroupId(e){const t=e!==null&&this._groups.some(i=>i?.id===e)?e:null;this.#m!==t&&(this.#m=t,this.updateGroupShapes())}setSelectedPlacement(e,t,i="group"){const o=typeof e=="string"&&e.length>0&&typeof t=="string"&&t.length>0,s=o?e:null,n=o?t:null,a=o?i:null;this.#f===s&&this.#b===n&&this.#p===a||(this.#f=s,this.#b=n,this.#p=a,this.syncPlaceLayers())}findGroupAtClientPoint(e,t){if(this.locked||!Number.isFinite(e)||!Number.isFinite(t))return null;const i=this.groupShapesElement,o=i?.ownerSVGElement;if(!i||!o)return null;const s=o.createSVGPoint();s.x=e,s.y=t;for(const n of this._groups){if(!n||typeof n.id!="string"||n.id.length===0)continue;const c=Array.from(i.children).find(u=>u instanceof SVGGElement&&u.dataset.groupId===n.id&&u.style.display!=="none"&&u.querySelector(".group-fill")!==null)?.querySelector(".group-fill"),l=c?.getScreenCTM();if(!c||!l)continue;const d=s.matrixTransform(l.inverse());if(c.isPointInFill(d))return n}return null}layoutSwarm(e,t){if(this.placementsLocked)return 0;const i=this.#k(e),o=this.#k(e,!0),s=this.#x(),n=[],a=new Set;let c=0;for(const l of this._groups){if(!l||typeof l.id!="string"||l.id.length===0||t!==void 0&&l.id!==t||a.has(l.id))continue;a.add(l.id);const d=!!l.callout&&(this.#g.has(l.id)||t===l.id)&&this.mode==="hex",u=d?"callout":"group",p=d&&l.callout?.mixedMode?this.getValidGroupPlacements(l,this.#x(),"group"):[],h=d?l.callout?.mixedMode?Math.max(0,o-p.length):o:i,f=d||t!==void 0?this.createPlacementOccupancy(l.id,!0,u):{centers:new Set(s.centers),footprints:[...s.footprints]};if(!d&&t===void 0&&l.callout)for(const x of this.getValidGroupPlacements(l,this.#x(),"callout"))this.addPlacementOccupancy({r:x.r,c:x.c},f);const g=[];if(d){const x=l.callout?.algorithm??Gr;g.push(...x==="swarm"?this.createCalloutSwarmPlacementCoordinates(l,h,f):this.createCalloutColumnPlacementCoordinates(l,h,f,x))}else{const x=this.getValidGroupCenters(l),y=this.getGroupCentroid(x),C=y?x.map(N=>{const v=_(this.effectiveStep,N.r,N.c);return{center:N,distance:(v.x-y.x)**2+(v.y-y.y)**2}}).sort((N,v)=>N.distance-v.distance||this.compareGroupCenters(N.center,v.center)).map(N=>N.center):[];for(const N of C){if(g.length>=h)break;this.isPlacementBlocked(N,f)||(g.push(N),this.addPlacementOccupancy(N,f))}}const m=this.getGroupPlacements(l,u),b=this.createGroupPlacements(l,g,m,u);if(this.groupPlacementsEqual(m,b)||n.push({groupId:l.id,placementList:u,placements:b}),this.setGroupPlacements(l,u,b),c+=d&&l.callout?.mixedMode?p.length+b.length:b.length,t===void 0)for(const x of[...l.placements??[],...l.callout?.placements??[]]){const y={r:x.r,c:x.c};this.isPlacementBlocked(y,s)||this.addPlacementOccupancy(y,s)}}this.syncPlaceLayers();for(const l of n)this.dispatchPlacementsChange(l.groupId,l.placementList,l.placements);return c}layoutColumn(e){if(this.placementsLocked||this.mode!=="hex")return 0;const t=this.#k(e),i=this.#k(e,!0),o=this.#x(),s=[],n=new Set;let a=0;for(const c of this._groups)a+=this.#P(c,t,i,o,n,s);this.syncPlaceLayers();for(const c of s)this.dispatchPlacementsChange(c.groupId,c.placementList,c.placements);return a}#P(e,t,i,o,s,n){if(!e||typeof e.id!="string"||e.id.length===0||s.has(e.id))return 0;s.add(e.id);const a=!!e.callout&&this.#g.has(e.id)&&this.mode==="hex",c=a?"callout":"group",l=a&&e.callout?.mixedMode?this.getValidGroupPlacements(e,this.#x(),"group"):[],d=a?e.callout?.mixedMode?Math.max(0,i-l.length):i:t,u=a?this.createPlacementOccupancy(e.id,!1,c):{centers:new Set(o.centers),footprints:[...o.footprints]};if(!a&&e.callout)for(const b of this.getValidGroupPlacements(e,this.#x(),"callout"))this.addPlacementOccupancy({r:b.r,c:b.c},u);const p=e.callout?.algorithm??Gr,h=a?p==="swarm"?this.createCalloutSwarmPlacementCoordinates(e,d,u):this.createCalloutColumnPlacementCoordinates(e,d,u,p):this.#C(e,d,u),f=this.getGroupPlacements(e,c),g=this.createGroupPlacements(e,h,f,c);this.groupPlacementsEqual(f,g)||n.push({groupId:e.id,placementList:c,placements:g}),this.setGroupPlacements(e,c,g);const m=a&&e.callout?.mixedMode?l.length+g.length:g.length;for(const b of[...e.placements??[],...e.callout?.placements??[]]){const x={r:b.r,c:b.c};o.centers.has(`${x.r},${x.c}`)||this.addPlacementOccupancy(x,o)}return m}updateGroupPlacements(e,t,i="group"){if(this.placementsLocked)return[];const o=this._groups.find(n=>n.id===e);if(!o||i==="callout"&&!o.callout)return[];const s=this.normalizeGroupPlacements(o,t,void 0,!1,i);return this.setGroupPlacements(o,i,s),this.syncPlaceLayers(),this.clonePlacements(s)}refreshGroupOverlays(){this.refreshGroupEditIndex(),this.updateGroupShapes(),this.syncPlaceLayers(),this.refreshPreviewFromStoredPointer()}groupsChanged(e,t){this._groups=Array.isArray(t)?t:[],this.refreshLayer()}stepChanged(e,t){if(t===null||!Number.isFinite(t)||t<=0){this.step=16;return}this.refreshLayer()}rowsChanged(e,t){if(t===null||!Number.isFinite(t)||t<0){this.rows=58;return}if(!Number.isInteger(t)){this.rows=Math.floor(t);return}this.refreshLayer()}columnsChanged(e,t){if(t===null||!Number.isFinite(t)||t<0){this.columns=51;return}if(!Number.isInteger(t)){this.columns=Math.floor(t);return}this.refreshLayer()}modeChanged(e,t){if(t!=="tri"&&t!=="hex"){this.mode="hex";return}this.refreshLayer()}dragSnapChanged(e,t){if(t!=="free"&&t!=="live"){this.dragSnap="free";return}this.syncPlaceLayers()}snapTargetChanged(e,t){if(t!=="any"&&t!=="center"&&t!=="vertex"){this.snapTarget="center";return}this.syncPlaceLayers()}lockedChanged(e,t){t&&this.clearPointerState(),this.refreshGroupEditIndex(),this.updateGroupShapes()}placementsLockedChanged(){this.syncPlaceLayers()}showGroupsChanged(){this.updateGroupShapes()}showPlacementsChanged(){this.syncPlaceLayers()}groupEditingEnabledChanged(){this.refreshGroupEditIndex(),this.canResolveGroupEdits()?this.updateGroupShapes():this.clearPreview()}groupEditActionChanged(e,t){if(t!==null&&t!=="add"&&t!=="remove"){this.groupEditAction=null;return}this.refreshGroupEditIndex(),this.canResolveGroupEdits()?this.updateGroupShapes():this.clearPreview()}get effectiveStep(){return typeof this.step=="number"&&Number.isFinite(this.step)&&this.step>0?this.step:16}get effectiveRows(){return typeof this.rows=="number"&&Number.isFinite(this.rows)?Math.max(0,Math.floor(this.rows)):58}get effectiveColumns(){return typeof this.columns=="number"&&Number.isFinite(this.columns)?Math.max(0,Math.floor(this.columns)):51}refreshEligibleCenterCache(){const e=this.effectiveRows,t=this.effectiveColumns;e===this.#s&&t===this.#u&&this.mode===this.#a||(this.#r=this.mode==="hex"?Ce(e,t).centers:[],this.#o=new Set(this.#r.map(i=>`${i.r},${i.c}`)),this.#s=e,this.#u=t,this.#a=this.mode)}refreshLayer(e=!0){const t=e?this.reconcileGroupPlacements():[];this.refreshGroupEditIndex(),this.updateGroupShapes(),this.isConnected&&this.syncPlaceLayers(),this.refreshPreviewFromStoredPointer();for(const i of t)this.dispatchPlacementsChange(i.groupId,i.placementList,i.placements)}updateGroupShapes(){const e=this.groupShapesElement;if(!e)return;const t=e.parentElement,i=this.#m!==null&&this._groups.some(n=>n?.id===this.#m),o=this.showGroups&&this._groups.length>0||this.canResolveGroupEdits()||this.#i!==null||this.#g.size>0||this.#l!==null||this.#h!==null||i;t?.toggleAttribute("data-visible",o),t instanceof SVGSVGElement&&(t.style.pointerEvents=this.canResolveGroupEdits()?"all":"none");const s=this.getCoordinatePadding();if(e.setAttribute("transform",`translate(${s.x} ${s.y})`),e.replaceChildren(),this.canResolveGroupEdits()){const n=this.createGroupEditHitArea();n&&e.append(n)}if(this.showGroups||this.#h!==null||i)for(const n of this._groups){if(!n||typeof n.id!="string"||n.id.length===0||!this.showGroups&&n.id!==this.#h&&n.id!==this.#m)continue;const a=this.getValidGroupCenters(n);if(a.length===0)continue;const c=this.mode==="hex"?qd(this.effectiveStep,a):Kd(this.effectiveStep,a);if(!c.fillPath&&!c.borderPath)continue;const l=this.ownerDocument.createElementNS(pr,"g");l.dataset.groupId=n.id,n.id===this.#m&&l.setAttribute("data-group-selected","true"),l.toggleAttribute("data-callout-hover",n.id===this.#h);const d=this.ownerDocument.createElementNS(pr,"title");if(d.textContent=n.name||n.id,l.append(d),c.fillPath){const u=this.ownerDocument.createElementNS(pr,"path");u.setAttribute("class","group-fill"),u.setAttribute("d",c.fillPath),u.setAttribute("fill",n.fillColor||"transparent"),u.setAttribute("fill-opacity","0.2"),l.append(u)}if(c.borderPath){const u=this.ownerDocument.createElementNS(pr,"path");u.setAttribute("class","group-border"),u.setAttribute("d",c.borderPath),u.setAttribute("stroke",n.borderColor||"transparent"),u.setAttribute("stroke-width",String(Number.isFinite(n.borderWidth)?Math.max(0,n.borderWidth):0)),l.append(u)}e.append(l)}if(this.#l){const n=this._groups.find(c=>c.id===this.#l?.groupId),a=n?this.getGroupCentroid(this.getValidGroupCenters(n)):null;n&&a&&e.append(this.createCalloutPreview(n,a,this.#l.point))}this.#i&&e.append(this.createPreviewElement(this.#i))}createCalloutPreview(e,t,i){const o=this.ownerDocument.createElementNS(pr,"line");return o.dataset.calloutPreview="",o.dataset.groupId=e.id,o.setAttribute("x1",String(t.x)),o.setAttribute("y1",String(t.y)),o.setAttribute("x2",String(i.x)),o.setAttribute("y2",String(i.y)),o.setAttribute("stroke",e.borderColor||"#176d5d"),o.setAttribute("stroke-width",String(Math.max(1,this.effectiveStep*.06))),o.setAttribute("stroke-dasharray",`${this.effectiveStep*.3} ${this.effectiveStep*.2}`),o.setAttribute("vector-effect","non-scaling-stroke"),o.setAttribute("pointer-events","none"),o}syncPlaceLayers(){if(!this.isConnected)return;const e=new Map;for(const l of this._groups)l&&typeof l.id=="string"&&l.id.length>0&&!e.has(l.id)&&e.set(l.id,l);const t=this.#x(),i=new Map;for(const l of this._groups)if(e.get(l.id)===l)for(const d of l.callout?["group","callout"]:["group"]){const u=this.placeLayerKey(l.id,d),p=this.getValidGroupPlacements(l,t,d);i.set(u,p);for(const h of p)this.addPlacementOccupancy({r:h.r,c:h.c},t)}const o=[];for(const[l,d]of i){const[u,p]=this.parsePlaceLayerKey(l);d.length&&o.push({groupId:u,placementList:p,placements:d})}const s=this.#c.map((l,d)=>({id:`fixed-${d}`,r:l.r,c:l.c})),n=[],a=new Set;for(const l of e.values())for(const d of l.callout?["group","callout"]:["group"]){const u=this.placeLayerKey(l.id,d);a.add(u);const p=this.getGroupPlacements(l,d),h=Array.isArray(p);let f=this.#e.get(u);f||(f=this.ownerDocument.createElement("ff-place-layer"),this.#e.set(u,f)),f.placementList=d,f.group=l,f.groupId=l.id,f.locked=this.placementsLocked,this.placementListsEqual(f.placements,p)||(f.placements=this.clonePlacements(p??[])),h||(d==="group"?delete l.placements:l.callout&&delete l.callout.placements);const g=[...s];for(const y of o)(y.groupId!==l.id||y.placementList!==d)&&g.push(...y.placements);this.placementListsEqual(f.occupiedPlacements,g)||(f.occupiedPlacements=g),f.step=this.effectiveStep,f.rows=this.effectiveRows,f.columns=this.effectiveColumns,f.mode=this.mode,f.setSelectedPlacementId(l.id===this.#f&&d===this.#p?this.#b:null),f.dragSnap=this.dragSnap,f.snapTarget=this.snapTarget,f.setAutoItemPlacementCenters(this.getUnlockedAutoItemPlacementCenters(l));const m=d==="callout"?this.getGroupCentroid(this.getValidGroupCenters(l)):null,b=d==="callout"?l.callout?.point:void 0,x=b&&Number.isInteger(b.r)&&Number.isInteger(b.c)?_(this.effectiveStep,b.r,b.c):null;f.setCalloutGuide(m,x),f.hidden=!this.showPlacements,f.refreshCoordinateTransforms(),n.push(f)}for(const[l,d]of this.#e)a.has(l)||(d.remove(),this.#e.delete(l));let c=this.firstElementChild;for(const l of n)l!==c&&this.insertBefore(l,c),c=l.nextElementSibling}placementListsEqual(e,t){return e===t?!0:!e||!t||e.length!==t.length?!1:e.every((i,o)=>{const s=t[o];return i?.id===s?.id&&i?.r===s?.r&&i?.c===s?.c&&this.placementPropertiesEqual(i?.itemProperties,s?.itemProperties)})}placeLayerKey(e,t){return`${e}:${t}`}parsePlaceLayerKey(e){const t=e.lastIndexOf(":");return[e.slice(0,t),e.slice(t+1)==="callout"?"callout":"group"]}refreshGroupEditIndex(){this.refreshEligibleCenterCache(),this.#t=this.canResolveGroupEdits()?Ss({groups:this._groups,eligibleCenters:this.#r}):null}getValidGroupCenters(e){this.refreshEligibleCenterCache();const t=new Map;for(const i of Array.isArray(e.centers)?e.centers:[]){if(!Number.isInteger(i?.r)||!Number.isInteger(i?.c))continue;const o=`${i.r},${i.c}`;(this.mode==="hex"?this.#o.has(o):Fr(i.r,i.c,this.effectiveRows,this.effectiveColumns,this.mode,"center"))&&t.set(o,{r:i.r,c:i.c})}return Array.from(t.values())}getEligiblePlacementCenters(e,t="group",i=!1){if(t!=="callout"||!e.callout||this.mode!=="hex")return this.getValidGroupCenters(e);this.refreshEligibleCenterCache();const o=this.#r.map(n=>({r:n.r,c:n.c}));if(!i)return o;const s=new Set(this.getValidGroupCenters(e).map(n=>`${n.r},${n.c}`));return o.filter(n=>!s.has(`${n.r},${n.c}`))}getUnlockedAutoItemPlacementCenters(e,t=this.getEligiblePlacementCenters(e,"group")){if(e.callout||this.mode!=="hex"||t.length===0)return[];this.refreshEligibleCenterCache();const i=new Set(t.map(s=>`${s.r},${s.c}`)),o=new Map;for(const s of this.#d){if(s.layoutMode!=="auto"||!s.generated||s.locked||s.groupId!==e.id)continue;const n=`${s.r},${s.c}`;i.has(n)||!this.#o.has(n)||o.set(n,{r:s.r,c:s.c})}return Array.from(o.values())}getEligibleGroupPlacementCenters(e,t="group"){const i=this.getEligiblePlacementCenters(e,t);if(t==="callout")return i;const o=this.getUnlockedAutoItemPlacementCenters(e,i);return o.length===0?i:[...i,...o]}canResolveGroupEdits(){return!this.locked&&this.groupEditingEnabled&&this.mode==="hex"&&this.groupEditAction!==null}isPlacementEvent(e){return e.composedPath().some(t=>t instanceof Element&&(t.localName==="ff-place-layer"||t.classList.contains("placement-cell")||t.hasAttribute("data-callout-placement")))}clientPointToLayerPoint(e,t){const i=this.getBoundingClientRect(),o=this.getCoordinatePadding(),s=this.offsetWidth>0&&i.width>0?i.width/this.offsetWidth:1,n=this.offsetHeight>0&&i.height>0?i.height/this.offsetHeight:1;return{x:(e-i.left)/s-o.x,y:(t-i.top)/n-o.y}}getCoordinatePadding(){const e=this.ownerDocument.defaultView?.getComputedStyle(this),t=Number.parseFloat(e?.getPropertyValue("--ff-tri-layer-padding-x")??""),i=Number.parseFloat(e?.getPropertyValue("--ff-tri-layer-padding-y")??""),o=this.mode==="hex"?1:0;return{x:Number.isFinite(t)?t:this.effectiveStep+o,y:Number.isFinite(i)?i:this.effectiveStep*Tb/2+o}}resolvePreview(e,t){const i=this.groupEditAction,o=this.#t;if(!i||!o)return null;const s=this.clientPointToLayerPoint(e,t),n=to(this.effectiveStep,s.x,s.y,this.#r);return n?ho({index:o,action:i,cell:n}):null}updatePreviewFromPointer(e,t){this.setPreview(this.resolvePreview(e,t))}requestGroupEdit(e,t){const i=this.resolvePreview(e,t);this.setPreview(i),!(!i?.valid||!i.reason)&&this.dispatchEvent(new CustomEvent(Jd,{detail:{action:i.action,cell:{...i.cell},nextOwnerGroupId:i.nextOwnerGroupId,previousOwnerGroupId:i.previousOwnerGroupId,reason:i.reason},bubbles:!0,composed:!0}))}setPreview(e){this.previewsEqual(this.#i,e)||(this.#i=e,e?(this.dataset.groupEditPreview=e.kind,this.dataset.groupEditCursor=e.kind):(delete this.dataset.groupEditPreview,delete this.dataset.groupEditCursor),this.updateGroupShapes())}refreshPreviewFromStoredPointer(){if(!this.#i||!this.canResolveGroupEdits())return;const e=this.#i.cell,t=this.groupEditAction,i=this.#t;this.setPreview(i&&t?ho({index:i,action:t,cell:e}):null)}clearPreview(){this.setPreview(null)}previewsEqual(e,t){return e===t||!!(e&&t&&e.action===t.action&&e.cell.r===t.cell.r&&e.cell.c===t.cell.c&&e.valid===t.valid&&e.kind===t.kind&&e.reason===t.reason&&e.invalidReason===t.invalidReason&&e.previousOwnerGroupId===t.previousOwnerGroupId&&e.nextOwnerGroupId===t.nextOwnerGroupId)}createPreviewElement(e){const t=this.effectiveStep,i=this.ownerDocument.createElementNS(pr,"g");i.setAttribute("class","group-cell-preview"),i.setAttribute("pointer-events","none"),i.dataset.previewKind=e.kind,i.dataset.action=e.action,i.dataset.r=String(e.cell.r),i.dataset.c=String(e.cell.c),e.reason&&(i.dataset.reason=e.reason),e.invalidReason&&(i.dataset.reason=e.invalidReason);const o=!e.valid,s=o?"#b42318":"#176d5d",n=this.ownerDocument.createElementNS(pr,"path");n.setAttribute("class","group-cell-preview-target"),n.setAttribute("d",this.createHexCellPath(e.cell)),n.setAttribute("fill",o?"rgba(180, 35, 24, 0.12)":"rgba(23, 109, 93, 0.12)"),n.setAttribute("stroke",s),n.setAttribute("stroke-width",String(Math.max(2,t*.05))),n.setAttribute("stroke-dasharray",`${Math.max(3,t*.14)} ${Math.max(2,t*.08)}`),n.setAttribute("stroke-linejoin","round"),n.setAttribute("vector-effect","non-scaling-stroke");const a=_(t,e.cell.r,e.cell.c),c=this.ownerDocument.createElementNS(pr,"text");return c.setAttribute("class","group-cell-preview-marker"),c.setAttribute("x",String(a.x)),c.setAttribute("y",String(a.y)),c.setAttribute("fill",s),c.setAttribute("font-size",String(t*.32)),c.setAttribute("font-weight","700"),c.setAttribute("text-anchor","middle"),c.setAttribute("dominant-baseline","central"),c.textContent={plus:"+",exchange:"<>",remove:"-",transfer:">",conflict:"!",invalid:"x"}[e.kind],i.append(n,c),i}createGroupEditHitArea(){if(this.#r.length===0)return null;let e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,o=Number.NEGATIVE_INFINITY;for(const n of this.#r)for(const a of Qt(n)){const c=_(this.effectiveStep,a.r,a.c);e=Math.min(e,c.x),t=Math.min(t,c.y),i=Math.max(i,c.x),o=Math.max(o,c.y)}const s=this.ownerDocument.createElementNS(pr,"rect");return s.setAttribute("class","group-edit-hit-area"),s.setAttribute("x",String(e)),s.setAttribute("y",String(t)),s.setAttribute("width",String(i-e)),s.setAttribute("height",String(o-t)),s.setAttribute("fill","transparent"),s.setAttribute("pointer-events","all"),s}createHexCellPath(e){const t=_(this.effectiveStep,e.r,e.c);return`${Qt({r:0,c:0}).map(o=>_(this.effectiveStep,o.r,o.c,t.x,t.y)).map((o,s)=>`${s===0?"M":"L"} ${o.x} ${o.y}`).join(" ")} Z`}clearPointerState(){const e=this.#n;this.#n=null,e&&this.hasPointerCapture(e.pointerId)&&this.releasePointerCapture(e.pointerId),this.clearPreview()}#k(e,t=!1){return Number.isFinite(e)?Math.max(t?0:1,Math.floor(e)):1}compareGroupCenters(e,t){return e.r-t.r||e.c-t.c}getGroupCentroid(e){if(e.length===0)return null;const t=e.reduce((i,o)=>{const s=_(this.effectiveStep,o.r,o.c);return{x:i.x+s.x,y:i.y+s.y}},{x:0,y:0});return{x:t.x/e.length,y:t.y/e.length}}createPlacementFootprint(e){return{..._(this.effectiveStep,e.r,e.c),radius:this.effectiveStep}}fixedOccupancyEqual(e,t){return e.length===t.length&&e.every((i,o)=>{const s=t[o];return i.r===s.r&&i.c===s.c&&i.offsetX===s.offsetX&&i.offsetY===s.offsetY&&i.x===s.x&&i.y===s.y&&i.radius===s.radius})}#x(){const e={centers:new Set,footprints:[]};for(const t of this.#c)e.centers.add(`${t.r},${t.c}`),e.footprints.push({x:t.x,y:t.y,radius:t.radius});return e}createPlacementOccupancy(e,t=!1,i="group"){const o=this.#x(),s={centers:new Set(o.centers),footprints:[...o.footprints]};if(t)for(const a of this.#d)a.groupId!==e&&(s.centers.add(`${a.r},${a.c}`),s.footprints.push({x:a.x,y:a.y,radius:a.radius}));const n=new Set;for(const a of this._groups)if(!(!a||typeof a.id!="string"||a.id.length===0||n.has(a.id))){n.add(a.id);for(const c of a.callout?["group","callout"]:["group"])if(!(a.id===e&&c===i))for(const l of this.getValidGroupPlacements(a,o,c)){const d={r:l.r,c:l.c};this.isPlacementBlocked(d,s)||this.addPlacementOccupancy(d,s)}}return s}isPlacementBlocked(e,t){if(t.centers.has(`${e.r},${e.c}`))return!0;const i=this.createPlacementFootprint(e);return t.footprints.some(o=>this.footprintsOverlap(i,o))}addPlacementOccupancy(e,t){t.centers.add(`${e.r},${e.c}`),t.footprints.push(this.createPlacementFootprint(e))}#C(e,t,i){if(t<=0)return[];const o=this.getValidGroupCenters(e);if(o.length===0)return[];const s=T=>`${T.r},${T.c}`,n=T=>i.centers.has(s(T)),a=new Map(o.map(T=>[s(T),T])),c=new Set(a.keys()),l=new Set;for(const T of this._groups)if(!(!T||typeof T.id!="string"||T.id.length===0||T.id===e.id))for(const j of this.getValidGroupCenters(T))l.add(s(j));const d=o.reduce((T,j)=>({minR:Math.min(T.minR,j.r),maxR:Math.max(T.maxR,j.r),minC:Math.min(T.minC,j.c),maxC:Math.max(T.maxC,j.c)}),{minR:Number.POSITIVE_INFINITY,maxR:Number.NEGATIVE_INFINITY,minC:Number.POSITIVE_INFINITY,maxC:Number.NEGATIVE_INFINITY}),u=d.maxR-d.minR>d.maxC-d.minC,p=o.map(T=>({center:T,point:_(this.effectiveStep,T.r,T.c)})).sort((T,j)=>{const w=u?T.point.y:T.point.x,D=u?j.point.y:j.point.x;return w-D||this.compareGroupCenters(T.center,j.center)}),h=p[0].point,f=p[p.length-1].point,g=f.x-h.x,m=f.y-h.y,b=Math.hypot(g,m),x=Math.max(this.effectiveStep,Math.abs(h.x),Math.abs(h.y),Math.abs(f.x),Math.abs(f.y)),y=16*Number.EPSILON*x,C=T=>{if(!Number.isFinite(b)||b===0)return 0;const j=_(this.effectiveStep,T.r,T.c);return Math.abs(g*(j.y-h.y)-m*(j.x-h.x))/b},N=T=>{let j,w=Number.POSITIVE_INFINITY;for(const D of T){const K=C(D);(!j||K<w-y)&&(j=D,w=K)}return j};u?d.minR:d.minC;const v=u?(d.minC+d.maxC)/2:(d.minR+d.maxR)/2,P=o.slice().sort((T,j)=>{const w=u?T.r:T.c,D=u?j.r:j.c,K=u?T.c:T.r,ye=u?j.c:j.r;return w-D||Math.abs(K-v)-Math.abs(ye-v)||this.compareGroupCenters(T,j)}).find(T=>{const j=s(T);return l.has(j)||n(T)?!1:new Set(wr(T).filter(D=>!c.has(s(D))).map(s)).size<=2});if(!P)return[];const L=new Set;for(const T of o)wr(T).some(j=>!c.has(s(j)))&&L.add(s(T));const O=T=>{const j=_(this.effectiveStep,T.r,T.c);return wr(T).map(w=>{const D=s(w),K=a.get(D);if(!K||l.has(D))return null;const ye=_(this.effectiveStep,w.r,w.c),Ie=(Math.atan2(ye.y-j.y,ye.x-j.x)+Math.PI*2)%(Math.PI*2);return{center:K,angle:Ie}}).filter(w=>w!==null).sort((w,D)=>D.angle-w.angle||this.compareGroupCenters(w.center,D.center)).map(w=>w.center)},V=[P],ge=new Set([s(P)]);this.addPlacementOccupancy(P,i);const re=[O(P)];for(;V.length<t&&re.length>0;){const T=re[re.length-1],j=[],w=[],D=[];for(const Ie of T){const je=s(Ie);if(!ge.has(je)){if(n(Ie)){D.push(Ie);continue}if(L.has(je)){w.push(Ie);continue}j.push(Ie)}}const K=N(j)??N(w)??N(D);if(!K){re.pop();continue}const ye=s(K);ge.add(ye),n(K)||(V.push(K),this.addPlacementOccupancy(K,i)),re.push(O(K))}return V}createCalloutSwarmPlacementCoordinates(e,t,i){const o=e.callout?.point;if(!o||t<=0)return[];const s=_(this.effectiveStep,o.r,o.c),n=this.getEligiblePlacementCenters(e,"callout",!0).map(c=>{const l=_(this.effectiveStep,c.r,c.c);return{center:c,distance:(l.x-s.x)**2+(l.y-s.y)**2}}).sort((c,l)=>c.distance-l.distance||this.compareGroupCenters(c.center,l.center)),a=[];for(const{center:c}of n){if(a.length>=t)break;this.isPlacementBlocked(c,i)||(a.push(c),this.addPlacementOccupancy(c,i))}return a}createCalloutColumnPlacementCoordinates(e,t,i,o){const s=e.callout?.point;if(!s||t<=0)return[];const n=_(this.effectiveStep,s.r,s.c),a=o==="vertical-column",c=this.getEligiblePlacementCenters(e,"callout",!0).filter(v=>!this.isPlacementBlocked(v,i)).map(v=>{const P=_(this.effectiveStep,v.r,v.c),L=a?P.y-n.y:P.x-n.x,O=Math.abs(a?P.x-n.x:P.y-n.y);return{center:v,primary:L,perpendicular:O}}),l=(v,P)=>v.perpendicular-P.perpendicular||Math.abs(v.primary)-Math.abs(P.primary)||v.center.r-P.center.r||v.center.c-P.center.c,d=c.filter(v=>v.primary<-1e-8).sort(l),u=c.filter(v=>v.primary>1e-8).sort(l),p=c.filter(v=>Math.abs(v.primary)<=1e-8).sort((v,P)=>{const L=v.perpendicular**2,O=P.perpendicular**2;return L-O||l(v,P)}),h=[],f=new Set;let g=0,m=0,b=0,x=0,y=0;const C=v=>{if(!v||h.length>=t)return!1;const P=`${v.center.r},${v.center.c}`;return f.has(P)||this.isPlacementBlocked(v.center,i)?!1:(f.add(P),h.push(v.center),this.addPlacementOccupancy(v.center,i),!0)},N=c.find(v=>v.center.r===s.r&&v.center.c===s.c);for(N?C(N):t%2===1&&C(p[b++]);h.length<t&&(g<d.length||m<u.length);)g<d.length&&(x<=y||m>=u.length)?(C(d[g])&&x++,g++):m<u.length&&(C(u[m])&&y++,m++);for(;h.length<t&&b<p.length;)C(p[b++]);if(h.length<t){const v=c.slice().sort(l);for(const P of v){if(h.length>=t)break;C(P)}}return h}getValidGroupPlacements(e,t,i="group"){const o=this.getGroupPlacements(e,i)??[];if(o.length===0)return[];const s=new Set(this.getEligibleGroupPlacementCenters(e,i).map(d=>`${d.r},${d.c}`)),n=new Set,a=t??this.#x(),c={centers:new Set(a.centers),footprints:[...a.footprints]},l=[];for(const d of o){if(!d||typeof d.id!="string"||d.id.length===0||!Number.isInteger(d.r)||!Number.isInteger(d.c))continue;const u=`${d.r},${d.c}`;if(!s.has(u)||n.has(d.id))continue;const p={r:d.r,c:d.c};this.isPlacementBlocked(p,c)||(n.add(d.id),l.push(this.clonePlacement(d)),this.addPlacementOccupancy(p,c))}return l}normalizeGroupPlacements(e,t,i=void 0,o=!1,s="group"){const n=i??this.createPlacementOccupancy(e.id,!1,s),a=new Set(this.getEligibleGroupPlacementCenters(e,s).map(h=>`${h.r},${h.c}`)),c=this.getGroupPlacements(e,s)??[],l=new Map(c.filter(h=>h&&typeof h.id=="string").map(h=>[h.id,h])),d=new Set,u=[],p=[];for(const h of Array.isArray(t)?t:[]){if(!h)continue;const f=typeof h.id=="string"?h.id:"",m=[{r:h.r,c:h.c},...f&&l.has(f)?[{r:l.get(f).r,c:l.get(f).c}]:[]].find(y=>Number.isInteger(y.r)&&Number.isInteger(y.c)&&a.has(`${y.r},${y.c}`)&&(o?!n.centers.has(`${y.r},${y.c}`):!this.isPlacementBlocked(y,n)));if(!m)continue;const b=f.length>0&&!d.has(f)?f:"";b&&d.add(b),u.push(m);const x={id:b,r:m.r,c:m.c};if(Object.prototype.hasOwnProperty.call(h,"itemProperties"))Object.assign(x,{itemProperties:h.itemProperties===void 0?void 0:{...h.itemProperties}});else{const y=l.get(b)?.itemProperties;y!==void 0&&(x.itemProperties={...y})}p.push(x),o?n.centers.add(`${m.r},${m.c}`):this.addPlacementOccupancy(m,n)}return this.createGroupPlacements(e,u,p,s)}reconcileGroupPlacements(){const e=this.#x(),t=[],i=new Set;for(const o of this._groups)if(!(!o||typeof o.id!="string"||o.id.length===0||i.has(o.id))){i.add(o.id);for(const s of o.callout?["group","callout"]:["group"]){const n=this.getGroupPlacements(o,s),a=this.normalizeGroupPlacements(o,n??[],e,!0,s);if(!(!Array.isArray(n)&&a.length===0)){this.groupPlacementsEqual(n,a)||t.push({groupId:o.id,placementList:s,placements:a}),this.setGroupPlacements(o,s,a);for(const c of a)this.addPlacementOccupancy({r:c.r,c:c.c},e)}}}return t}createGroupPlacements(e,t,i=this.getGroupPlacements(e,"group")??[],o="group"){const s=new Map((this.getGroupPlacements(e,o)??[]).filter(c=>c&&typeof c.id=="string").map(c=>[c.id,c])),n=new Set;for(const c of i)typeof c?.id=="string"&&c.id.length>0&&n.add(c.id);for(const c of this._groups)for(const l of[...c.placements??[],...c.callout?.placements??[]])typeof l.id=="string"&&l.id.length>0&&n.add(l.id);const a=new Set;return t.map((c,l)=>{const d=i[l];let u=typeof d?.id=="string"&&d.id.length>0&&!a.has(d.id)?d.id:"";u.length===0&&(u=this.createPlacementId(n)),n.add(u),a.add(u);const h=d!==void 0&&Object.prototype.hasOwnProperty.call(d,"itemProperties")?d.itemProperties:s.get(u)?.itemProperties;return{id:u,r:c.r,c:c.c,...h===void 0?{}:{itemProperties:{...h}}}})}getGroupPlacements(e,t){return t==="callout"?e.callout?.placements:e.placements}setGroupPlacements(e,t,i){t==="callout"?e.callout&&(e.callout.placements=i):e.placements=i}createPlacementId(e){const t=this.ownerDocument.defaultView?.crypto;if(typeof t?.randomUUID=="function"){const s=`placement-${t.randomUUID()}`;if(!e.has(s))return s}const i=Date.now().toString(36);let o=0;for(;;){const s=Math.random().toString(36).slice(2),n=`placement-${i}-${s}-${o++}`;if(!e.has(n))return n}}clonePlacement(e){const t={id:e.id,r:e.r,c:e.c};return Object.prototype.hasOwnProperty.call(e,"itemProperties")&&Object.assign(t,{itemProperties:e.itemProperties===void 0?void 0:{...e.itemProperties}}),t}groupPlacementsEqual(e,t){return Array.isArray(e)&&e.length===t.length&&e.every((i,o)=>i.id===t[o].id&&i.r===t[o].r&&i.c===t[o].c&&this.placementPropertiesEqual(i.itemProperties,t[o].itemProperties))}placementPropertiesEqual(e,t){if(e===void 0||t===void 0)return e===t;const i=Object.keys(e),o=Object.keys(t);return i.length===o.length&&i.every(s=>Object.prototype.hasOwnProperty.call(t,s)&&Object.is(e[s],t[s]))}dispatchPlacementsChange(e,t,i){this.dispatchEvent(new CustomEvent(_r,{detail:{groupId:e,placementList:t,placements:i.map(o=>this.clonePlacement(o))},bubbles:!0,composed:!0}))}footprintsOverlap(e,t){const i=e.x-t.x,o=e.y-t.y,s=e.radius+t.radius;if(i*i+o*o>=s*s)return!1;const n={x:e.x,y:e.y},a={x:t.x,y:t.y};return Math.max(ht(n,e.radius,a,t.radius),ht(a,t.radius,n,e.radius))>1e-8}clonePlacements(e){return Array.isArray(e)?e.filter(t=>t&&typeof t.id=="string").map(t=>this.clonePlacement(t)):[]}}St([S({converter:ce})],dt.prototype,"step");St([S({converter:ce})],dt.prototype,"rows");St([S({converter:ce})],dt.prototype,"columns");St([S],dt.prototype,"mode");St([S({attribute:"drag-snap"})],dt.prototype,"dragSnap");St([S({attribute:"snap-target"})],dt.prototype,"snapTarget");St([S({attribute:"locked",mode:"boolean"})],dt.prototype,"locked");St([S({attribute:"show-groups",mode:"boolean"})],dt.prototype,"showGroups");St([S({attribute:"show-placements",mode:"boolean"})],dt.prototype,"showPlacements");St([S({attribute:"placements-locked",mode:"boolean"})],dt.prototype,"placementsLocked");St([S({attribute:"group-editing-enabled",mode:"boolean"})],dt.prototype,"groupEditingEnabled");St([S({attribute:"group-edit-action"})],dt.prototype,"groupEditAction");St([$],dt.prototype,"groups");St([$],dt.prototype,"groupShapesElement");const Bb=H`
    :host {
        display: block;
        position: relative;
        width: var(--ff-tri-layer-width, fit-content);
        height: var(--ff-tri-layer-height, fit-content);
        overflow: visible;
        pointer-events: none;
    }

    :host([hidden]) {
        display: none;
    }

    .group-field {
        position: absolute;
        inset: 0;
        display: none;
        width: 100%;
        height: 100%;
        overflow: visible;
        z-index: 0;
        pointer-events: none;
    }

    .group-field[data-visible] {
        display: block;
    }

    .group-edit-hit-area {
        pointer-events: none;
    }

    :host([group-editing-enabled]) .group-edit-hit-area {
        pointer-events: all;
    }

    .group-fill {
        stroke: none;
    }

    .group-border {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
    }

    :where(g[data-group-selected="true"]:not([data-callout-hover])) > .group-border {
        stroke: var(--ff-tri-layer-group-selected-border, currentColor);
        stroke-width: var(--ff-tri-layer-group-selected-stroke-width, 2.75px);
        filter: drop-shadow(0 0 var(--1pbu, 1px) var(--ff-tri-layer-group-selected-halo, var(--background, Canvas)));
    }

    [data-callout-hover] > .group-fill {
        fill: var(--ff-tri-layer-callout-hover-fill, rgba(23, 109, 93, 0.24));
        fill-opacity: 0.55;
    }

    [data-callout-hover] > .group-border {
        stroke: var(--ff-tri-layer-callout-hover-border, #0b5d3b);
        stroke-width: var(--ff-tri-layer-callout-hover-stroke-width, 2.5px);
    }

    .group-shape {
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
        transition: stroke 120ms ease, stroke-width 120ms ease, filter 120ms ease;
    }

    .group-cell-preview {
        --ff-tri-layer-group-edit-preview-color: var(--ff-tri-layer-group-edit-color, #176d5d);
        --ff-tri-layer-group-edit-preview-fill: var(--ff-tri-layer-group-edit-fill, rgba(23, 109, 93, 0.18));
        --ff-tri-layer-group-edit-preview-dash: 5 3;
        color: var(--ff-tri-layer-group-edit-preview-color);
        fill: var(--ff-tri-layer-group-edit-preview-fill);
        stroke: var(--ff-tri-layer-group-edit-preview-color);
        stroke-width: var(--ff-tri-layer-group-edit-stroke-width, var(--2pbu, 2px));
        stroke-dasharray: var(--ff-tri-layer-group-edit-preview-dash);
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
        opacity: 0.88;
        pointer-events: none;
    }

    .group-cell-preview-target {
        fill: var(--ff-tri-layer-group-edit-preview-fill, rgba(23, 109, 93, 0.18));
        stroke: var(--ff-tri-layer-group-edit-preview-color, #176d5d);
        stroke-width: var(--ff-tri-layer-group-edit-target-width, 2.5px);
        stroke-dasharray: none;
        vector-effect: non-scaling-stroke;
    }

    .group-cell-preview-marker-background {
        fill: var(--ff-tri-layer-group-edit-marker-background, Canvas);
        stroke: var(--ff-tri-layer-group-edit-preview-color, #176d5d);
        stroke-width: 1.5px;
        vector-effect: non-scaling-stroke;
        filter: drop-shadow(0 var(--1pbu, 1px) var(--2pbu, 2px) rgba(25, 42, 35, 0.3));
    }

    .group-cell-preview-marker {
        fill: var(--ff-tri-layer-group-edit-preview-color, #176d5d);
        stroke: var(--ff-tri-layer-group-edit-marker-halo, Canvas);
        stroke-width: var(--2pbu, 2px);
        stroke-linejoin: round;
        paint-order: stroke fill;
        font-family: var(--fontFamilyBase, sans-serif);
        font-size: var(--ff-tri-layer-group-edit-marker-size, var(--12pbu, 12px));
        font-weight: 700;
        text-anchor: middle;
        dominant-baseline: central;
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
    }

    :is(.group-cell-preview, .group-cell-preview-target):is([data-preview-kind="plus"], [data-kind="plus"]),
    :host([data-group-edit-preview="plus"]) .group-cell-preview {
        --ff-tri-layer-group-edit-preview-color: var(--ff-tri-layer-group-edit-add, #176d5d);
        --ff-tri-layer-group-edit-preview-fill: rgba(23, 109, 93, 0.2);
        --ff-tri-layer-group-edit-preview-dash: 5 3;
    }

    :is(.group-cell-preview, .group-cell-preview-target):is([data-preview-kind="exchange"], [data-kind="exchange"]),
    :host([data-group-edit-preview="exchange"]) .group-cell-preview {
        --ff-tri-layer-group-edit-preview-color: var(--ff-tri-layer-group-edit-exchange, #3773a4);
        --ff-tri-layer-group-edit-preview-fill: rgba(55, 115, 164, 0.2);
        --ff-tri-layer-group-edit-preview-dash: 8 2 2 2;
    }

    :is(.group-cell-preview, .group-cell-preview-target):is([data-preview-kind="remove"], [data-kind="remove"]),
    :host([data-group-edit-preview="remove"]) .group-cell-preview {
        --ff-tri-layer-group-edit-preview-color: var(--ff-tri-layer-group-edit-remove, #b7514b);
        --ff-tri-layer-group-edit-preview-fill: rgba(183, 81, 75, 0.2);
        --ff-tri-layer-group-edit-preview-dash: 3 2;
    }

    :is(.group-cell-preview, .group-cell-preview-target):is([data-preview-kind="transfer"], [data-kind="transfer"]),
    :host([data-group-edit-preview="transfer"]) .group-cell-preview {
        --ff-tri-layer-group-edit-preview-color: var(--ff-tri-layer-group-edit-transfer, #9b6424);
        --ff-tri-layer-group-edit-preview-fill: rgba(155, 100, 36, 0.2);
        --ff-tri-layer-group-edit-preview-dash: 5 2;
    }

    :is(.group-cell-preview, .group-cell-preview-target):is([data-preview-kind="conflict"], [data-kind="conflict"]),
    :host([data-group-edit-preview="conflict"]) .group-cell-preview {
        --ff-tri-layer-group-edit-preview-color: var(--ff-tri-layer-group-edit-conflict, #795282);
        --ff-tri-layer-group-edit-preview-fill: rgba(121, 82, 130, 0.2);
        --ff-tri-layer-group-edit-preview-dash: 2 2;
    }

    :is(.group-cell-preview, .group-cell-preview-target):is([data-preview-kind="invalid"], [data-kind="invalid"]),
    :host([data-group-edit-preview="invalid"]) .group-cell-preview {
        --ff-tri-layer-group-edit-preview-color: var(--ff-tri-layer-group-edit-invalid, #8f3131);
        --ff-tri-layer-group-edit-preview-fill: rgba(143, 49, 49, 0.14);
        --ff-tri-layer-group-edit-preview-dash: 2 3;
    }

    :host([data-group-edit-preview]) .group-cell-preview {
        opacity: 1;
    }

    :host([data-group-edit-cursor]) {
        cursor: copy;
    }

    :host([data-group-edit-cursor="exchange"]) {
        cursor: alias;
    }

    :host([data-group-edit-cursor="transfer"]) {
        cursor: move;
    }

    :host([data-group-edit-cursor="remove"]),
    :host([data-group-edit-cursor="conflict"]),
    :host([data-group-edit-cursor="invalid"]) {
        cursor: not-allowed;
    }

    slot {
        position: absolute;
        inset: 0;
        display: block;
        overflow: visible;
        z-index: 1;
        pointer-events: none;
    }

    @media (prefers-reduced-motion: reduce) {
        .group-shape {
            transition: none;
        }
    }
`,Db=ie`
    <svg class="group-field" aria-hidden="true" focusable="false">
        <g class="group-shapes" ${te("groupShapesElement")}></g>
    </svg>
    <slot></slot>
`,Vb=dt.compose({name:"ff-hex-group-layer",template:Db,styles:Bb,shadowOptions:{mode:"open"}});Vb.define(Me.registry);var Hb=Object.defineProperty,$e=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Hb(e,t,o),o};const ui=Math.sqrt(3),Xb="http://www.w3.org/2000/svg",Ub={fromView(r){return(typeof r=="string"?[r]:Array.isArray(r)?r:[]).filter(t=>typeof t=="string").flatMap(t=>t.trim().split(/[\s,]+/)).filter(Boolean)},toView(r){return Array.isArray(r)?r.filter(e=>typeof e=="string").join(" "):""}};class Se extends Mr{#e=[];#t=null;#r=[];#o=null;#s=null;#u=16;#a=new Map;#n=new Map;#i=!1;#c=!1;#d=new Set;#g=[];#l=[];#h=[];#m=()=>{this.refreshAssignedLayers()};#p=()=>{this.refreshScene()};#f=()=>{this.refreshScene()};#b=e=>{this.updateSpotFromPointer(e)};#y=()=>{this.clearSpot()};constructor(){super(),this.step=16,this.rows=58,this.columns=51,this.mode="tri",this.fieldView="dot",this.spotView="dot",this.snapTarget="any",this.dragSnap="free",this.groupMode="any",this.showGroups=!1,this.showPlacements=!1,this.showHexOverlay=!0,this.showHexCoordinates=!1,this.groupEditingEnabled=!1,this.groupEditAction=null,this.rebound=!1,this._groups=[],this.groups=this._groups,this._defaultItemProperties={},this.defaultItemProperties=this._defaultItemProperties,this._layerOrder=[],this.layerOrder=this._layerOrder}connectedCallback(){super.connectedCallback(),this.#o=this.layersSlot??this.shadowRoot?.querySelector("slot")??null,this.#o?.addEventListener("slotchange",this.#m),this.sceneSurface?.addEventListener("pointermove",this.#b),this.sceneSurface?.addEventListener("pointerleave",this.#y),this.sceneSurface?.addEventListener("pointercancel",this.#y),this.addEventListener(ws,this.#f),this.addEventListener(Pi,this.#f),this.addEventListener(_r,this.#f),this.addEventListener(Mn,this.#f),this.refreshAssignedLayers()}disconnectedCallback(){this.#o?.removeEventListener("slotchange",this.#m),this.#o=null,this.sceneSurface?.removeEventListener("pointermove",this.#b),this.sceneSurface?.removeEventListener("pointerleave",this.#y),this.sceneSurface?.removeEventListener("pointercancel",this.#y),this.removeEventListener(ws,this.#f),this.removeEventListener(Pi,this.#f),this.removeEventListener(_r,this.#f),this.removeEventListener(Mn,this.#f),this.#s?.disconnect(),this.#s=null,this.clearSpot(),this.restoreLayerStyles(),this.#e=[],this.#t=null,this.#r=[],super.disconnectedCallback()}stepChanged(e,t){if(t===null||!Number.isFinite(t)||t<=0){this.step!==16&&(this.step=16);return}this.refreshScene()}rowsChanged(e,t){if(t===null||!Number.isFinite(t)||t<0){this.rows!==1&&(this.rows=1);return}if(!Number.isInteger(t)){this.rows=Math.floor(t);return}this.refreshScene()}columnsChanged(e,t){if(t===null||!Number.isFinite(t)||t<0){this.columns!==1&&(this.columns=1);return}if(!Number.isInteger(t)){this.columns=Math.floor(t);return}this.refreshScene()}modeChanged(e,t){if(t!=="tri"&&t!=="hex"){this.mode="tri";return}this.refreshScene()}fieldViewChanged(e,t){if(t!=="dot"&&t!=="full"&&t!=="spot"){this.fieldView="dot";return}this.refreshScene()}spotViewChanged(e,t){if(t!=="dot"&&t!=="full"){this.spotView="dot";return}this.refreshScene()}snapTargetChanged(e,t){if(t!=="any"&&t!=="center"&&t!=="vertex"){this.snapTarget="any";return}this.refreshScene()}dragSnapChanged(e,t){if(t!=="free"&&t!=="live"){this.dragSnap="free";return}this.refreshScene()}groupModeChanged(e,t){if(t!=="any"&&t!=="group"){this.groupMode="any";return}this.refreshScene()}groupsChanged(e,t){if(!Array.isArray(t)){this.groups=[];return}this._groups=t,this.refreshScene()}defaultItemPropertiesChanged(){this.refreshScene()}layoutSwarm(e,t){const i=this.#t;if(!i)return 0;const o=this.#i;this.#i=!0;try{return this.refreshScene(),t===void 0?i.layoutSwarm(e):i.layoutSwarm(e,t)}finally{this.#i=o}}layoutColumn(e){const t=this.#t;if(!t)return 0;const i=this.#i;this.#i=!0;try{return this.refreshScene(),t.layoutColumn(e)}finally{this.#i=i}}layoutItemsByPlacements(e,t={}){return this.coordinateItemsLayout("placements",e,!0,t.reassignAutoItems===!0).unplacedCount}layoutGroupItems(e){return this.coordinateItemsLayout("all",e).unplacedCount}refreshCalloutDecorations(){if(!this.isConnected)return;const e=this.refreshItemLayerCalloutDecorations();this.#t?.setCalloutState(Array.from(this.#d),this.#g,e)}coordinateItemsLayoutFromLayer(e,t,i,o=!1){return!this.isConnected||!e.isConnected||e.parentElement!==this||!this.#e.includes(e)||this.#i?null:this.coordinateItemsLayout(t,i,!1,o)}showGroupsChanged(){this.refreshScene()}showPlacementsChanged(){this.refreshScene()}showHexOverlayChanged(){this.refreshScene()}showHexCoordinatesChanged(){this.refreshScene()}groupEditingEnabledChanged(){this.refreshScene()}groupEditActionChanged(e,t){if(t!==null&&t!=="add"&&t!=="remove"){this.groupEditAction=null;return}this.refreshScene()}reboundChanged(){this.refreshScene()}layerOrderChanged(e,t){const i=this.normalizeLayerOrder(t);if(this._layerOrder=i,!this.layerOrdersEqual(t,i)){this.layerOrder=i;return}this.updateLayerStack(),this.refreshCalloutDecorations()}get effectiveStep(){return typeof this.step=="number"&&Number.isFinite(this.step)&&this.step>0?this.step:16}get effectiveRows(){return typeof this.rows=="number"&&Number.isFinite(this.rows)?Math.max(0,Math.floor(this.rows)):1}get effectiveColumns(){return typeof this.columns=="number"&&Number.isFinite(this.columns)?Math.max(0,Math.floor(this.columns)):1}refreshAssignedLayers(){const t=((this.#o??this.layersSlot)?.assignedElements()??[]).filter(n=>n instanceof HTMLElement&&(n.localName==="ff-items-layer"||n.localName==="ff-hex-group-layer")),i=t.filter(n=>n.localName==="ff-items-layer"),o=t.find(n=>n.localName==="ff-hex-group-layer")??null,s=new Set([...t,...this.hexFieldElement?[this.hexFieldElement]:[]]);this.restoreRemovedLayerStyles(s),this.#r=t,this.#e=i,this.#t=o,this.observeItemsLayers(),this.refreshScene()}observeItemsLayers(){const e=this.ownerDocument.defaultView?.MutationObserver;if(e){this.#s??=new e(this.#p),this.#s.disconnect();for(const t of this.#e)this.#s.observe(t,{childList:!0,attributes:!0,attributeFilter:["hidden","locked"]})}}refreshScene(){if(!(!this.isConnected||this.#c)){this.#c=!0;try{this.syncLayerSettings();const e=this.#e.map(l=>({layer:l,occupancy:l.getOccupancySnapshot()})),t=e.flatMap(({layer:l,occupancy:d})=>d.filter(u=>u.locked||u.layoutMode==="fixed").map(u=>u.locked&&u.layoutMode!=="fixed"?{...u,layoutMode:"fixed"}:u)),i=e.filter(({layer:l})=>!l.locked).flatMap(({occupancy:l})=>l.filter(d=>d.layoutMode==="auto"));this.#g=i;const o=new Map;for(const l of this.#e)if(!l.locked)for(const d of l.items??[])d.layoutMode!=="auto"||typeof d.groupId!="string"||o.set(d.groupId,(o.get(d.groupId)??0)+1);const s=new Set(this.groups.filter(l=>l.callout!==void 0&&l.callout.point!==null&&(o.get(l.id)??0)>l.callout.activationThreshold).map(l=>l.id)),n=s.size!==this.#d.size||Array.from(s).some(l=>!this.#d.has(l));this.#d=s;const a=Array.from(s);for(const l of this.#e)l.setActiveCalloutGroupIds(a);this.#t?.setSharedOccupancy(t),this.updateSceneGeometry();const c=this.refreshItemLayerCalloutDecorations();this.#t?.setCalloutState(a,i,c),n&&this.dispatchEvent(new CustomEvent(Fn,{detail:{activeGroupIds:a},bubbles:!0,composed:!0})),this.updateLayerStack()}finally{this.#c=!1}}}refreshItemLayerCalloutDecorations(){const e=this.#e.filter(o=>{if(o.hidden)return!1;const s=this.ownerDocument.defaultView?.getComputedStyle(o);return s?.display!=="none"&&s?.visibility!=="hidden"&&s?.visibility!=="collapse"}),t=[...e].sort((o,s)=>{const n=Number.parseFloat(o.style.zIndex),a=Number.parseFloat(s.style.zIndex);return Number.isFinite(n)&&Number.isFinite(a)&&n!==a?n-a:this.#e.indexOf(o)-this.#e.indexOf(s)})[0]??null;if(!this.#t||!t){for(const o of this.#e)o.setCalloutDecorations([]);return[]}const i=this.createCalloutLeaderGeometries(e,t);for(const o of this.#e)o.setCalloutDecorations(o===t?i:[]);return i.map(o=>o.leaderGeometry)}createCalloutLeaderGeometries(e,t){const i=this.effectiveStep,o=this.mode==="hex"?1:0,s=u=>{const p=this.getLayerItemRadius(u,i);return{x:this.readLayerPadding(u,"--ff-tri-layer-padding-x",p+o),y:this.readLayerPadding(u,"--ff-tri-layer-padding-y",p*ui/2+o)}},n=s(t),a=this.groups.filter(u=>u.callout&&this.#d.has(u.id)),c=new Set(a.map(u=>u.id)),l=e.flatMap(u=>{const p=s(u);return(u.items??[]).filter(f=>!f.hasAttribute("data-unplaced")&&!f.hasAttribute("data-scene-editor-hidden")&&!f.hidden&&f.style.visibility!=="hidden"&&f.layoutMode==="auto"&&typeof f.groupId=="string"&&c.has(f.groupId)).flatMap(f=>{const g=f.groupId;if(typeof g!="string"||g.length===0)return[];const m=Number.parseFloat(f.style.getPropertyValue("--ff-hex-item-x")),b=Number.parseFloat(f.style.getPropertyValue("--ff-hex-item-y")),x=m-p.x+n.x,y=b-p.y+n.y,C=f.getOuterRadius(i);if(![m,b,x,y,C].every(Number.isFinite)||C<=0)return[];const N=x-C,v=x+C,P=C*ui/2,L=y-P,O=y+C*ui/2;return[N,v,L,O].every(Number.isFinite)?[{groupId:g,left:N,right:v,top:L,bottom:O}]:[]})}),d=[];for(const u of a){const p=l.filter(O=>O.groupId===u.id);if(p.length===0)continue;const h=this.getCalloutGroupCentroid(u);if(!h)continue;let f=Number.POSITIVE_INFINITY,g=Number.NEGATIVE_INFINITY,m=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY;for(const O of p)f=Math.min(f,O.left),g=Math.max(g,O.right),m=Math.min(m,O.top),b=Math.max(b,O.bottom);const x=g-f,y=b-m,C=Math.max(2,i*.12),N={x:h.x+n.x,y:h.y+n.y};if(![f,g,m,b,x,y,C,N.x,N.y].every(Number.isFinite))continue;let v,P;if(x>=y){const O=m+y/2,V=N.y<O?m-C:b+C;v={x:f,y:V},P={x:g,y:V}}else{const O=f+x/2,V=N.x<O?f-C:g+C;v={x:V,y:m},P={x:V,y:b}}const L=b+C;[v.x,v.y,P.x,P.y,L].every(Number.isFinite)&&d.push({groupId:u.id,centroid:N,lineStart:v,lineEnd:P,leaderGeometry:{groupId:u.id,left:f-n.x,right:g-n.x,y:L-n.y}})}return d}getCalloutGroupCentroid(e){const t=new Map;for(const o of Array.isArray(e.centers)?e.centers:[])!Number.isInteger(o?.r)||!Number.isInteger(o?.c)||!Fr(o.r,o.c,this.effectiveRows,this.effectiveColumns,this.mode,"center")||t.set(`${o.r},${o.c}`,_(this.effectiveStep,o.r,o.c));if(t.size===0)return null;const i=Array.from(t.values()).reduce((o,s)=>({x:o.x+s.x,y:o.y+s.y}),{x:0,y:0});return{x:i.x/t.size,y:i.y/t.size}}coordinateItemsLayout(e,t,i=!0,o=!1){if(!this.isConnected||this.#i)return{placedCount:0,unplacedCount:0,itemsDataChanged:!1};this.#i=!0;try{this.refreshScene();const s=e==="placements"?this.layoutItemsByPlacementsCore(t,i,o):this.layoutAllItems(i,t);return i||this.refreshScene(),s}finally{this.#i=!1}}layoutAllItems(e=!0,t){const i=this.#e.flatMap(a=>a.getOccupancySnapshot().filter(c=>a.locked||c.locked||c.layoutMode==="fixed"||t!==void 0&&c.groupId!==t).map(c=>a.locked?{...c,locked:!0}:c)),o=[],s={placedCount:0,unplacedCount:0,itemsDataChanged:!1,unplacedItems:[]},n=e?[...this.#e].reverse().find(a=>!a.locked):void 0;for(const a of this.#e){if(a.locked)continue;const c=a===n;a.LayoutItems({occupancy:[...i,...o],...t===void 0?{}:{groupId:t},activeCalloutGroupIds:this.#d,emitLayoutEvent:c,sceneCoordinated:!0,onLayoutResult:l=>{s.itemsDataChanged=s.itemsDataChanged||l.itemsDataChanged,s.placedCount+=l.placedCount,s.unplacedCount+=l.unplacedCount;const d=s.unplacedItems??[];d.push(...l.unplacedItems??[]),s.unplacedItems=d,c&&(l.placedCount=s.placedCount,l.unplacedCount=s.unplacedCount,l.itemsDataChanged=s.itemsDataChanged,l.unplacedItems=d)}}),o.push(...a.getOccupancySnapshot().filter(l=>l.layoutMode==="auto"&&(t===void 0||l.groupId===t)))}return s}layoutItemsByPlacementsCore(e,t=!0,i=!1){const o=new Set(this._groups.filter(l=>l&&(this.#d.has(l.id)?Array.isArray(l.callout?.placements)&&l.callout.placements.length>0||l.callout?.mixedMode===!0&&Array.isArray(l.placements)&&l.placements.length>0:Array.isArray(l.placements)&&l.placements.length>0)).map(l=>l.id)),s=[];for(const l of this.#e)for(const d of l.getOccupancySnapshot())(l.locked||d.locked||d.layoutMode==="fixed"||!o.has(d.groupId)||e!==void 0&&d.groupId!==e)&&s.push(l.locked?{...d,locked:!0}:d);const n=[],a={placedCount:0,unplacedCount:0,itemsDataChanged:!1,unplacedItems:[]},c=t?[...this.#e].reverse().find(l=>!l.locked):void 0;for(const l of this.#e){if(l.locked)continue;const d=l===c;l.LayoutItemsByPlacements({occupancy:[...s,...n],...e===void 0?{}:{groupId:e},reassignAutoItems:i,emitLayoutEvent:d,sceneCoordinated:!0,onLayoutResult:u=>{a.itemsDataChanged=a.itemsDataChanged||u.itemsDataChanged,a.placedCount+=u.placedCount,a.unplacedCount+=u.unplacedCount;const p=a.unplacedItems??[];p.push(...u.unplacedItems??[]),a.unplacedItems=p,d&&(u.placedCount=a.placedCount,u.unplacedCount=a.unplacedCount,u.itemsDataChanged=a.itemsDataChanged,u.unplacedItems=p)}}),n.push(...l.getOccupancySnapshot().filter(u=>u.layoutMode==="auto"&&o.has(u.groupId)&&(e===void 0||u.groupId===e)))}return a}syncLayerSettings(){const e=this.effectiveStep,t=this.effectiveRows,i=this.effectiveColumns;for(const s of this.#e)s.step=e,s.rows=t,s.columns=i,s.mode=this.mode,s.dragSnap=this.dragSnap,s.snapTarget=this.snapTarget,s.groupMode=this.groupMode,s.rebound=this.rebound,s.defaultItemProperties=this.defaultItemProperties,s.groups=this._groups;const o=this.#t;o&&(o.step=e,o.rows=t,o.columns=i,o.mode=this.mode,o.dragSnap=this.dragSnap,o.snapTarget=this.snapTarget,o.groups=this._groups,o.showGroups=this.showGroups,o.showPlacements=this.showPlacements,o.groupEditingEnabled=this.groupEditingEnabled,o.groupEditAction=this.groupEditAction)}updateSceneGeometry(){const e=this.effectiveStep,t=this.effectiveRows,i=this.effectiveColumns,o=this.mode==="hex"?Ce(t,i):null,s=this.getMaximumItemRadius(e);this.#u=s;const n=t>0&&i>0;let a=n?e*(i-1+(t-1)/2):0;const c=this.finiteLength(e*ui/2,e);let l=n?c*(t-1):0;if(o){a=0,l=0;for(const b of o.centers){const x=_(e,b.r,b.c);a=Math.max(a,x.x),l=Math.max(l,x.y)}}Number.isFinite(a)||(a=0),Number.isFinite(l)||(l=0);const d=o?1:0,u=this.finiteLength(s+d,e+d),p=this.finiteLength(s*ui/2+d,c+d),h=this.finiteLength(a+1,1),f=this.finiteLength(l+1,1),g=this.finiteLength(a+u*2+1,1),m=this.finiteLength(l+p*2+1,1);this.style.setProperty("--ff-tri-layer-step",`${e}px`),this.style.setProperty("--ff-tri-layer-row-height",`${c}px`),this.style.setProperty("--ff-tri-layer-grid-period",`${this.finiteLength(c*2,c)}px`),this.style.setProperty("--ff-tri-layer-half-step",`${e/2}px`),this.style.setProperty("--ff-tri-layer-padding-x",`${u}px`),this.style.setProperty("--ff-tri-layer-padding-y",`${p}px`),this.style.setProperty("--ff-tri-layer-surface-width",`${h}px`),this.style.setProperty("--ff-tri-layer-surface-height",`${f}px`),this.style.setProperty("--ff-tri-layer-width",`${g}px`),this.style.setProperty("--ff-tri-layer-height",`${m}px`),this.sceneSurface&&(this.sceneSurface.style.width=`${g}px`,this.sceneSurface.style.height=`${m}px`),this.hexFieldElement&&(this.hexFieldElement.setAttribute("width",String(g)),this.hexFieldElement.setAttribute("height",String(m)),this.hexFieldElement.setAttribute("viewBox",`0 0 ${g} ${m}`)),this.hexCoordinateFieldElement&&(this.hexCoordinateFieldElement.setAttribute("width",String(g)),this.hexCoordinateFieldElement.setAttribute("height",String(m)),this.hexCoordinateFieldElement.setAttribute("viewBox",`0 0 ${g} ${m}`)),this.updateHexField(o,e,u,p),this.alignItemsLayers(e,u,p,d)}getMaximumItemRadius(e){let t=e;for(const i of this.#e)for(const o of i.items??[]){const s=o.getOuterRadius(e);Number.isFinite(s)&&s>t&&(t=s)}return this.finiteLength(t,e)}alignItemsLayers(e,t,i,o){for(const s of this.#e){const n=this.getLayerItemRadius(s,e),a=this.readLayerPadding(s,"--ff-tri-layer-padding-x",n+o),c=this.readLayerPadding(s,"--ff-tri-layer-padding-y",n*ui/2+o);this.setLayerTranslation(s,t-a,i-c)}}getLayerItemRadius(e,t){let i=t;for(const o of e.items??[]){const s=o.getOuterRadius(t);Number.isFinite(s)&&s>i&&(i=s)}return this.finiteLength(i,t)}readLayerPadding(e,t,i){const o=Number.parseFloat(e.style.getPropertyValue(t));return Number.isFinite(o)&&o>=0?o:i}setLayerTranslation(e,t,i){this.#a.has(e)||this.#a.set(e,e.style.transform);const o=this.#a.get(e)??"";if(Math.abs(t)<.01&&Math.abs(i)<.01){e.style.transform=o;return}const s=`translate(${t}px, ${i}px)`;e.style.transform=o&&o!=="none"?`${s} ${o}`:s}updateHexField(e,t,i,o){const s=this.hexFieldElement;if(!s)return;s.setAttribute("data-field-view",this.fieldView),s.setAttribute("data-spot-view",this.spotView),s.style.display=this.showHexOverlay&&this.mode==="hex"?"":"none",this.updateHexCoordinateLabels(e,t,i,o);const n=this.hexFieldVerticesElement,a=this.hexFieldCentersElement,c=this.hexFieldLinesElement;if(this.mode!=="hex"||!e||e.centers.length===0){n?.setAttribute("d",""),a?.setAttribute("d",""),c?.setAttribute("d",""),this.clearSpot();return}const l=this.readCssRadius("--ff-tri-layer-vertex-radius",t*.05),d=this.readCssRadius("--ff-tri-layer-center-radius",t*.1),u=[],p=[],h=[];for(const f of e.centers){const g=_(t,f.r,f.c,i,o);p.push(this.createCirclePath(g.x,g.y,d));const m=Qt(f).map(b=>_(t,b.r,b.c,i,o));h.push(`${m.map((b,x)=>`${x===0?"M":"L"} ${b.x} ${b.y}`).join(" ")} Z`)}for(const f of e.vertices){const g=_(t,f.r,f.c,i,o);u.push(this.createCirclePath(g.x,g.y,l))}n?.setAttribute("d",u.join(" ")),a?.setAttribute("d",p.join(" ")),c?.setAttribute("d",h.join(" ")),this.fieldView!=="spot"&&this.clearSpot()}updateHexCoordinateLabels(e,t,i,o){const s=this.hexCoordinateFieldElement,n=this.hexCoordinateLabelsElement,a=this.mode==="hex"&&e?e.centers:[],c=this.showHexCoordinates&&a.length>0;if(s&&(s.style.display=c?"block":"none"),!n||!c)return;let l=a.length!==this.#h.length;if(!l)for(let u=0;u<a.length;u++){const p=a[u];if(this.#h[u]!==`${p.r},${p.c}`){l=!0;break}}if(l){const u=this.ownerDocument.createDocumentFragment(),p=[],h=[];for(const f of a){const g=`${f.r},${f.c}`,m=this.ownerDocument.createElementNS(Xb,"text");m.setAttribute("data-cell-coordinate",g),m.setAttribute("data-r",String(f.r)),m.setAttribute("data-c",String(f.c)),m.setAttribute("text-anchor","middle"),m.setAttribute("dominant-baseline","middle"),m.setAttribute("fill","currentColor"),m.setAttribute("pointer-events","none"),m.textContent=g,u.appendChild(m),p.push(m),h.push(g)}n.replaceChildren(u),this.#l=p,this.#h=h}const d=String(Math.max(8,t*.55));for(let u=0;u<a.length;u++){const p=a[u],h=_(t,p.r,p.c,i,o),f=this.#l[u],g=String(h.x),m=String(h.y);f.getAttribute("x")!==g&&f.setAttribute("x",g),f.getAttribute("y")!==m&&f.setAttribute("y",m),f.getAttribute("font-size")!==d&&f.setAttribute("font-size",d)}}updateSpotFromPointer(e){const t=this.hexFieldElement;if(!t||this.mode!=="hex"||this.fieldView!=="spot"||!this.showHexOverlay){this.clearSpot();return}const i=t.getBoundingClientRect(),o=this.#u*3,s=o*2,n=t.width.baseVal.value,a=t.height.baseVal.value,c=i.width>0&&n>0?i.width/n:1,l=i.height>0&&a>0?i.height/a:1,d=(e.clientX-i.left)/c,u=(e.clientY-i.top)/l;if(![o,s,d,u].every(Number.isFinite)||o<=0){this.clearSpot();return}t.setAttribute("data-spot-active",""),t.style.setProperty("--ff-tri-layer-spot-x",`${d-o}px`),t.style.setProperty("--ff-tri-layer-spot-y",`${u-o}px`),t.style.setProperty("--ff-tri-layer-spot-diameter",`${s}px`)}clearSpot(){const e=this.hexFieldElement;e&&(e.removeAttribute("data-spot-active"),e.style.removeProperty("--ff-tri-layer-spot-x"),e.style.removeProperty("--ff-tri-layer-spot-y"),e.style.removeProperty("--ff-tri-layer-spot-diameter"))}readCssRadius(e,t){const i=Number.parseFloat(this.ownerDocument.defaultView?.getComputedStyle(this).getPropertyValue(e)??"");return Number.isFinite(i)&&i>0?i:t}createCirclePath(e,t,i){const o=i*2;return`M ${e-i} ${t} a ${i} ${i} 0 1 0 ${o} 0 a ${i} ${i} 0 1 0 ${-o} 0`}updateLayerStack(){const e=[];this.hexFieldElement&&e.push({element:this.hexFieldElement,tokens:["field","grid","hex-field","scene-field"],defaultOrder:-1}),this.#r.forEach((s,n)=>{const a=s.localName==="ff-hex-group-layer",c=[s.id,s.getAttribute("data-layer")??"",s.localName,...a?["group","groups","hex-group","ff-hex-group-layer"]:["item","items","ff-items-layer"]].filter(Boolean);e.push({element:s,tokens:c,defaultOrder:n})});const t=this._layerOrder,i=s=>{if(t.length===0)return s.defaultOrder;const n=t.findIndex(a=>s.tokens.includes(a));return n>=0?n:s.defaultOrder<0?-1:t.length+s.defaultOrder};e.sort((s,n)=>i(s)-i(n)||s.defaultOrder-n.defaultOrder);const o=new Set(e.map(s=>s.element));this.restoreRemovedLayerStyles(o),e.forEach((s,n)=>{this.#n.has(s.element)||this.#n.set(s.element,s.element.style.zIndex),s.element.style.zIndex=String(n)})}restoreRemovedLayerStyles(e){for(const[t,i]of this.#n)e.has(t)||(t.style.zIndex=i,this.#n.delete(t));for(const[t,i]of this.#a)e.has(t)||(t.style.transform=i,this.#a.delete(t))}restoreLayerStyles(){for(const[e,t]of this.#a)e.style.transform=t;for(const[e,t]of this.#n)e.style.zIndex=t;this.#a.clear(),this.#n.clear()}normalizeLayerOrder(e){if(!Array.isArray(e))return[];const t=new Set;for(const i of e){if(typeof i!="string")continue;const o=i.trim();o&&t.add(o)}return Array.from(t)}layerOrdersEqual(e,t){return Array.isArray(e)&&e.length===t.length&&e.every((i,o)=>i===t[o])}finiteLength(e,t){return Number.isFinite(e)&&e>0?e:t}}$e([S({converter:ce})],Se.prototype,"step");$e([S({converter:ce})],Se.prototype,"rows");$e([S({converter:ce})],Se.prototype,"columns");$e([S],Se.prototype,"mode");$e([S({attribute:"field-view"})],Se.prototype,"fieldView");$e([S({attribute:"spot-view"})],Se.prototype,"spotView");$e([S({attribute:"snap-target"})],Se.prototype,"snapTarget");$e([S({attribute:"drag-snap"})],Se.prototype,"dragSnap");$e([S({attribute:"group-mode"})],Se.prototype,"groupMode");$e([S({attribute:"show-groups",mode:"boolean"})],Se.prototype,"showGroups");$e([S({attribute:"show-placements",mode:"boolean"})],Se.prototype,"showPlacements");$e([S({attribute:"show-hex-overlay",mode:"boolean"})],Se.prototype,"showHexOverlay");$e([S({attribute:"show-hex-coordinates",mode:"boolean"})],Se.prototype,"showHexCoordinates");$e([S({attribute:"group-editing-enabled",mode:"boolean"})],Se.prototype,"groupEditingEnabled");$e([S({attribute:"group-edit-action"})],Se.prototype,"groupEditAction");$e([S({mode:"boolean"})],Se.prototype,"rebound");$e([S({attribute:"layer-order",converter:Ub})],Se.prototype,"layerOrder");$e([$],Se.prototype,"groups");$e([$],Se.prototype,"defaultItemProperties");$e([$],Se.prototype,"sceneSurface");$e([$],Se.prototype,"layersSlot");$e([$],Se.prototype,"hexFieldElement");$e([$],Se.prototype,"hexFieldVerticesElement");$e([$],Se.prototype,"hexFieldCentersElement");$e([$],Se.prototype,"hexFieldLinesElement");$e([$],Se.prototype,"hexCoordinateFieldElement");$e([$],Se.prototype,"hexCoordinateLabelsElement");const jb=H`
    :host {
        display: block;
        position: relative;
        width: var(--ff-tri-layer-width, fit-content);
        height: var(--ff-tri-layer-height, fit-content);
        overflow: visible;
        cursor: var(--ff-scene-interaction-cursor, auto);
    }

    :host([hidden]) {
        display: none;
    }

    .scene-surface {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        overflow: visible;
        isolation: isolate;
    }

    .hex-field {
        position: absolute;
        inset: 0;
        display: none;
        width: 100%;
        height: 100%;
        overflow: visible;
        z-index: 0;
        pointer-events: none;
    }

    .scene-surface > svg:not(.hex-field) {
        position: absolute;
        inset: 0;
        display: block;
        width: 100%;
        height: 100%;
        overflow: visible;
        z-index: 1;
        pointer-events: none;
    }

    .hex-field[data-field-view="dot"],
    .hex-field[data-field-view="full"],
    .hex-field[data-field-view="spot"][data-spot-active] {
        display: block;
    }

    .hex-field[data-field-view="spot"][data-spot-active] {
        mask-image: radial-gradient(circle closest-side, #000 0%, #000 65%, transparent 100%);
        mask-size: var(--ff-tri-layer-spot-diameter, 180px) var(--ff-tri-layer-spot-diameter, 180px);
        mask-position: var(--ff-tri-layer-spot-x, 0px) var(--ff-tri-layer-spot-y, 0px);
        mask-repeat: no-repeat;
        -webkit-mask-image: radial-gradient(circle closest-side, #000 0%, #000 65%, transparent 100%);
        -webkit-mask-size: var(--ff-tri-layer-spot-diameter, 180px) var(--ff-tri-layer-spot-diameter, 180px);
        -webkit-mask-position: var(--ff-tri-layer-spot-x, 0px) var(--ff-tri-layer-spot-y, 0px);
        -webkit-mask-repeat: no-repeat;
    }

    .hex-field path {
        display: none;
    }

    .scene-surface > svg:not(.hex-field) [data-cell-coordinate] {
        fill: var(--ff-scene-coordinate-color, var(--scene-editor-item-color, currentColor));
        stroke: var(--ff-scene-coordinate-halo, var(--scene-editor-item-text-stroke-color, Canvas));
        stroke-width: var(--ff-scene-coordinate-halo-width, var(--scene-editor-item-text-stroke-width, var(--1pbu, 1px)));
        stroke-linejoin: round;
        paint-order: stroke fill;
        font-family: var(--fontFamilyBase, "Aptos", sans-serif);
        font-size: var(--ff-scene-coordinate-font-size, clamp(6px, 0.55em, 9px));
        font-weight: 600;
        text-anchor: middle;
        dominant-baseline: central;
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
    }

    .hex-field[data-field-view="dot"] .hex-field-vertices,
    .hex-field[data-field-view="spot"][data-spot-active][data-spot-view="dot"] .hex-field-vertices,
    .hex-field[data-field-view="dot"] .hex-field-centers,
    .hex-field[data-field-view="spot"][data-spot-active][data-spot-view="dot"] .hex-field-centers {
        display: block;
        stroke: none;
    }

    .hex-field[data-field-view="dot"] .hex-field-vertices,
    .hex-field[data-field-view="spot"][data-spot-active][data-spot-view="dot"] .hex-field-vertices {
        fill: var(--ff-tri-layer-vertex-color, var(--ff-tri-layer-node-color, rgba(98, 112, 120, 0.45)));
    }

    .hex-field[data-field-view="dot"] .hex-field-centers,
    .hex-field[data-field-view="spot"][data-spot-active][data-spot-view="dot"] .hex-field-centers {
        fill: var(--ff-tri-layer-center-color, var(--ff-tri-layer-node-color, rgba(98, 112, 120, 0.45)));
    }

    .hex-field[data-field-view="full"] .hex-field-lines,
    .hex-field[data-field-view="spot"][data-spot-active][data-spot-view="full"] .hex-field-lines {
        display: block;
        fill: none;
        stroke: var(--ff-tri-layer-field-color, var(--ff-tri-layer-node-color, rgba(98, 112, 120, 0.45)));
        stroke-width: var(--ff-tri-layer-field-line-width, 1px);
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
    }

    slot {
        position: relative;
        display: grid;
        grid-template-columns: max-content;
        grid-template-rows: max-content;
        overflow: visible;
        z-index: 1;
    }

    ::slotted(*) {
        grid-area: 1 / 1;
        justify-self: start;
        align-self: start;
    }
`,Yb=ie`
    <div class="scene-surface" ${te("sceneSurface")}>
        <svg class="hex-field" aria-hidden="true" focusable="false" ${te("hexFieldElement")}>
            <path class="hex-field-vertices" ${te("hexFieldVerticesElement")}></path>
            <path class="hex-field-centers" ${te("hexFieldCentersElement")}></path>
            <path class="hex-field-lines" ${te("hexFieldLinesElement")}></path>
        </svg>
        <svg class="hex-field hex-coordinate-field" aria-hidden="true" focusable="false" ${te("hexCoordinateFieldElement")}>
            <g class="hex-cell-coordinates" pointer-events="none" ${te("hexCoordinateLabelsElement")}></g>
        </svg>
        <slot class="layers" ${te("layersSlot")}></slot>
    </div>
`,qb=Se.compose({name:"ff-scene",template:Yb,styles:jb,shadowOptions:{mode:"open"}});qb.define(Me.registry);const Dn="hex-properties-change",bi="hex-properties-action";var Kb=Object.defineProperty,Hr=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Kb(e,t,o),o};function Wb(r){return r==="backward"||r==="forward"||r==="bottom"||r==="top"}class $r extends Mr{constructor(){super(),this.mode="items",this.disabled=!1,this.layoutModeDisabled=!1,this.locked=!1,this._values={},this.values=this._values,this._mixedProperties=[],this.mixedProperties=this._mixedProperties,this._inheritedProperties=[],this.inheritedProperties=this._inheritedProperties,this._limits={},this.limits=this._limits}handleControlInput(e){if(this.disabled)return;const t=e.target;if(!(t instanceof HTMLInputElement)&&!(t instanceof HTMLSelectElement)&&!(t instanceof HTMLElement&&(t.localName==="n-input"||t.localName==="ff-text-input")))return;const i=t.name;if(!yr(i))return;let o;if(t instanceof HTMLInputElement&&t.type==="checkbox")o=t.checked;else if(t instanceof HTMLInputElement&&t.type==="number")o=Number.isFinite(t.valueAsNumber)?t.valueAsNumber:null;else if(t instanceof HTMLElement&&t.localName==="n-input"){if(!(e instanceof CustomEvent))return;const s=e.detail;if(typeof s!="object"||s===null||!("value"in s))return;if(s.value===null)o=null;else if(typeof s.value=="number"&&Number.isFinite(s.value))o=s.value;else return}else if(t instanceof HTMLElement&&t.localName==="ff-text-input"){const s=t.value;if(typeof s!="string")return;o=s}else if(this.mode!=="items"&&t instanceof HTMLSelectElement&&t.value==="null")o=null;else if(t instanceof HTMLInputElement||t instanceof HTMLSelectElement)o=t.value;else return;this.dispatchChange(i,o)}handleResetControlClick(e){if(this.disabled||this.mode==="defaults")return;const t=e.target;if(!(t instanceof Element))return;const i=t.closest("button[data-reset-property]");if(!i)return;const o=i.dataset.resetProperty;!yr(o)||o==="r"||o==="c"||o==="layoutMode"||i.disabled||this.dispatchChange(o,null)}handleControlClick(e){if(this.disabled)return;const t=e.target;if(!(t instanceof Element))return;if(t.closest("[data-item-lock]")){this.mode==="items"&&this.dispatchItemLockAction(!this.locked);return}if(t.closest("[data-delete-items]")&&this.mode==="items"){e.stopPropagation(),this.dispatchDeleteItemsAction();return}if(t.closest("[data-delete-placement]")&&this.mode==="slot"){e.stopPropagation(),this.dispatchDeletePlacementAction();return}const n=t.closest("[data-stack-action]")?.dataset.stackAction;if(Wb(n)){this.dispatchStackAction(n);return}const a=t.closest("[data-radius-unit]")?.dataset.radiusUnit;if(Ge(a)){this.dispatchChange("sizeUnit",a);return}const c=t.closest("[data-icon-size-unit]")?.dataset.iconSizeUnit;if(Ge(c)){this.dispatchChange("iconSizeUnit",c);return}const l=t.closest("[data-label-position]")?.dataset.labelPosition;if(mr(l)){this.dispatchChange("labelPosition",l);return}const d=t.closest("[data-label-type]")?.dataset.labelType;if(jt(d)){this.dispatchChange("labelType",d);return}const u=t.closest("[data-layout-mode]")?.dataset.layoutMode;if(Ct(u)){if(this.layoutModeDisabled)return;this.dispatchChange("layoutMode",u);return}const p=t.closest("[data-shape]")?.dataset.shape;if(zr(p)){this.dispatchChange("shape",p);return}const h=t.closest("[data-property][data-value]"),f=h?.dataset.property,g=h?.dataset.value;!yr(f)||g===void 0||f==="layoutMode"&&this.layoutModeDisabled||this.dispatchChange(f,this.parseControlValue(f,g))}parseControlValue(e,t){if(this.mode!=="items"&&t==="null")return null;switch(e){case"r":case"c":case"offsetX":case"offsetY":case"size":case"iconSize":case"labelFontSize":case"labelRadius":case"borderWidth":case"zIndex":{const i=Number(t);return Number.isFinite(i)?i:null}case"fillEnabled":return t==="true";default:return t}}dispatchChange(e,t){const i={property:e,value:t};this.dispatchEvent(new CustomEvent(Dn,{detail:i,bubbles:!0,composed:!0}))}dispatchStackAction(e){const t={action:"stack",value:e};this.dispatchEvent(new CustomEvent(bi,{detail:t,bubbles:!0,composed:!0}))}dispatchItemLockAction(e){const t={action:"item-lock",value:e};this.dispatchEvent(new CustomEvent(bi,{detail:t,bubbles:!0,composed:!0}))}dispatchDeletePlacementAction(){const e={action:"delete-placement"};this.dispatchEvent(new CustomEvent(bi,{detail:e,bubbles:!0,composed:!0}))}dispatchDeleteItemsAction(){const e={action:"delete-items"};this.dispatchEvent(new CustomEvent(bi,{detail:e,bubbles:!0,composed:!0}))}}Hr([S],$r.prototype,"mode");Hr([$],$r.prototype,"values");Hr([$],$r.prototype,"mixedProperties");Hr([$],$r.prototype,"inheritedProperties");Hr([S({mode:"boolean"})],$r.prototype,"disabled");Hr([S({attribute:"layout-mode-disabled",mode:"boolean"})],$r.prototype,"layoutModeDisabled");Hr([S({mode:"boolean"})],$r.prototype,"locked");Hr([$],$r.prototype,"limits");const Zb={r:"координату рядка",c:"координату стовпця",offsetX:"зсув X",offsetY:"зсув Y",shape:"форму",size:"радіус",sizeUnit:"одиницю вимірювання радіуса",iconSize:"розмір піктограми",iconSizeUnit:"одиницю вимірювання піктограми",icon:"піктограму",label:"підпис",labelType:"тип підпису",layoutMode:"режим компонування",labelPosition:"положення підпису",labelRadius:"відстань до підпису",labelFontSize:"розмір шрифту підпису",textColor:"колір тексту",fillColor:"колір заливки",fillEnabled:"параметр заливки",borderColor:"колір контуру",borderWidth:"товщину контуру",textStrokeEnabled:"параметр обведення тексту",textStrokeColor:"колір обведення тексту",textStrokeWidth:"товщину обведення тексту",zIndex:"індекс Z"},ne=(r,e)=>{if(r.mode!=="items")return!1;const t=r.mixedProperties;if(Array.isArray(t))return t.includes(e);if(t instanceof Set)return t.has(e);if(typeof t=="object"&&t!==null){const i=t.has;return typeof i=="function"?i.call(t,e):!!t[e]}return!1},He=(r,e)=>r.mode==="items"?r.inheritedProperties.includes(e):r.values[e]==null,Jb=r=>r!=="r"&&r!=="c"&&r!=="layoutMode",es=(r,e)=>{const t=r.values[e];return t==null?"":String(t)},Vn=(r,e)=>He(r,e)?"⬦":ne(r,e)?"•••":"",ot=(r,e,t)=>He(r,t)?`${e}, 🔗︎`:ne(r,t)?`${e}, змішані значення`:e,Qb=(r,e)=>r.mode!=="items"&&He(r,e)?"null":ne(r,e)?"":es(r,e),Ro=(r,e)=>{const t=r.values[e];return typeof t=="string"&&/^#[0-9a-f]{6}$/i.test(t)?t:"#aeb9b4"},ey=(r,e)=>{const t=r.values[e];return typeof t=="number"&&Number.isFinite(t)?t:null},Ft=(r,e,t)=>ie`
    <n-input        
        class="custom-property-input pb6 ${r}"
        control-size="small"
        arrows-position="vertical-right"
        name="${()=>r}"
        :value="${i=>ey(i,r)}"
        :min="${i=>i.limits[r]?.min??null}"
        :max="${i=>i.limits[r]?.max??null}"
        :spinStep="${i=>i.limits[r]?.step??t}"
        :placeholder="${i=>Vn(i,r)}"
        aria-label="${i=>ot(i,e,r)}"
        ?data-mixed="${i=>ne(i,r)}"
        ?disabled="${i=>i.disabled}"
        @input="${(i,o)=>i.handleControlInput(o.event)}"
    ></n-input>
`,ty=r=>ne(r,"fillEnabled")?"mixed":r.values.fillEnabled===!0?"true":"false",ry=r=>ne(r,"textStrokeEnabled")?"mixed":r.values.textStrokeEnabled===!0?"true":"false",qi=r=>Wr(e=>e.mode!=="defaults"&&Jb(r),ie`
        <button            
            class="property-reset-toggle"
            data-reset-property="${()=>r}"
            aria-pressed="${e=>He(e,r)}"
            aria-label="${()=>`Успадкувати ${Zb[r]}`}"
            title="${e=>He(e,r)?"Значення успадковується":"Успадкувати значення"}"
            ?disabled="${e=>e.disabled||He(e,r)}"
            @click="${(e,t)=>e.handleResetControlClick(t.event)}"
        >
            <span aria-hidden="true">🔗︎</span>
        </button>
    `),it=(r,e)=>ie`
    <div class="property-field-heading">
        <span>${()=>r}</span>
        ${qi(e)}
    </div>
`,iy=ie`
    <div class="property-panel" role="group" aria-label="Властивості шестикутного елемента">
        <section class="inspector-group" aria-labelledby="position-heading">
            <div class="property-control-row">
                <button
                    type="button"
                    class="item-lock-button"
                    data-item-lock
                    aria-label="${r=>r.locked?"Розблокувати елемент":"Заблокувати елемент"}"
                    title="${r=>r.locked?"Розблокувати елемент":"Заблокувати елемент"}"
                    aria-pressed="${r=>r.locked}"
                    ?disabled="${r=>r.disabled||r.mode!=="items"}"
                    @click="${(r,e)=>r.handleControlClick(e.event)}"
                ><span aria-hidden="true">${r=>r.locked?"🔒":"🔓"}</span></button>
                ${Wr(r=>r.mode==="slot"||r.mode==="items",ie`
                    <button
                        type="button"
                        class="square-btn btn-size-s selected-slot-delete"
                        ?data-delete-placement="${r=>r.mode==="slot"}"
                        ?data-delete-items="${r=>r.mode==="items"}"
                        aria-label="${r=>r.mode==="slot"?"Видалити вибрану комірку":"Видалити вибрані об’єкти"}"
                        ?disabled="${r=>r.disabled}"
                        @click="${(r,e)=>r.handleControlClick(e.event)}"
                    >🗑︎</button>
                `)}
            </div>
        </section>

        <section class="inspector-group" aria-labelledby="position-heading">
            <div class="label-control-row">                    
                    <h4 id="position-heading">Розташування</h4>
                    <div class="layout-mode-control segmented" role="group"  ?hidden="${r=>r.mode!=="items"}" aria-label="${r=>ot(r,"Режим компонування","layoutMode")}" ?data-mixed="${r=>ne(r,"layoutMode")}">
                        <button type="button" data-property="layoutMode" data-value="auto" aria-label="Автоматичне компонування" aria-pressed="${r=>r.values.layoutMode==="auto"}" ?disabled="${r=>r.disabled||r.layoutModeDisabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">авто</button>
                        <button type="button" data-property="layoutMode" data-value="fixed" aria-label="Фіксоване компонування" aria-pressed="${r=>r.values.layoutMode==="fixed"}" ?disabled="${r=>r.disabled||r.layoutModeDisabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">фіксовано</button>
                        <span class="unit-mixed" aria-hidden="true" ?hidden="${r=>!ne(r,"layoutMode")}">•••</span>
                    </div>
            </div>

            <div class="property-grid">
                ${Wr(r=>r.mode!=="defaults",ie`
                <label class="property-field">
                    <span>Рядок</span>
                    ${Ft("r","Координата рядка",1)}
                </label>
                <label class="property-field">
                    <span>Стовпець</span>
                    ${Ft("c","Координата стовпця",1)}
                </label>
                `)}
                <div class="property-field">
                    ${it("Зсув X","offsetX")}
                    <div class="property-control-row">
                        ${Ft("offsetX","Зсув X",.1)}
                    </div>
                </div>
                <div class="property-field">
                    ${it("Зсув Y","offsetY")}
                    <div class="property-control-row">
                        ${Ft("offsetY","Зсув Y",.1)}                        
                    </div>
                </div>
            </div>
        </section>

        <section class="inspector-group" aria-labelledby="shape-heading">
            <div class="property-grid">
                <div class="property-field gc-s2">
                    <div class="property-field-heading">
                        <h4 id="shape-heading">Форма</h4>
                        ${qi("shape")}
                    </div>
                    <div class="property-control-row">
                        <span class="color-input-wrap" ?data-mixed="${r=>ne(r,"shape")}">
                            <select
                                class="shape-control"
                                name="shape"
                                :value="${r=>Qb(r,"shape")}"
                                aria-label="${r=>ot(r,"Форма","shape")}"
                                ?disabled="${r=>r.disabled}"
                                @change="${(r,e)=>r.handleControlInput(e.event)}"
                            >
                                ${Wr(r=>r.mode!=="items",ie`
                                    <option value="null">🔗︎</option>
                                `)}
                                ${Wr(r=>ne(r,"shape"),ie`
                                    <option value="" disabled>•••</option>
                                `)}
                                <option value="none">без форми</option>
                                <option value="hex">шестикутник</option>
                                <option value="square">квадрат</option>
                                <option value="circle">коло</option>
                            </select>
                            <span class="mixed-dots" aria-hidden="true" ?hidden="${r=>!ne(r,"shape")}">•••</span>
                        </span>
                        
                    </div>
                </div>

                <div class="property-field gc-s2">
                    ${it("Радіус","size")}
                    <div class="property-control-row">
                        ${Ft("size","Радіус шестикутника",.5)}
                        <div class="unit-toggle segmented" role="group" aria-label="${r=>ot(r,"Одиниця радіуса","sizeUnit")}" ?data-mixed="${r=>ne(r,"sizeUnit")}">
                            <button type="button" data-property="sizeUnit" data-value="px" aria-pressed="${r=>r.values.sizeUnit==="px"}" ?disabled="${r=>r.disabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">px</button>
                            <button type="button" data-property="sizeUnit" data-value="%" aria-pressed="${r=>r.values.sizeUnit==="%"}" ?disabled="${r=>r.disabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">%r</button>
                            <span class="unit-mixed" aria-hidden="true" ?hidden="${r=>!ne(r,"sizeUnit")}">•••</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="inspector-group" aria-labelledby="shape-heading">
                <div class="property-grid">
                    <div class="property-field">
                        <div class="property-field-heading">
                            <h4 id="shape-icon">Піктограма</h4>
                            ${qi("icon")}
                        </div>                    
                        <div class="property-control-row">
                            <ff-text-input class="custom-property-input" type="text" name="icon" aria-label="${r=>ot(r,"Піктограма елемента","icon")}" :value="${r=>es(r,"icon")}" :placeholder="${r=>Vn(r,"icon")}" ?data-mixed="${r=>ne(r,"icon")}" ?disabled="${r=>r.disabled}" @input="${(r,e)=>r.handleControlInput(e.event)}">
                            </ff-text-input>
                        </div>
                    </div>
                                    
                    <div class="property-field gc-s2">
                        ${it("Розмір","iconSize")}
                        <div class="property-control-row">
                            ${Ft("iconSize","Розмір",.5)}
                            <div class="unit-toggle segmented" role="group" aria-label="${r=>ot(r,"Одиниця розміру піктограми, відсоток від радіуса","iconSizeUnit")}" ?data-mixed="${r=>ne(r,"iconSizeUnit")}">
                                <button type="button" data-property="iconSizeUnit" data-value="px" aria-pressed="${r=>r.values.iconSizeUnit==="px"}" ?disabled="${r=>r.disabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">px</button>
                                <button type="button" data-property="iconSizeUnit" data-value="%" aria-pressed="${r=>r.values.iconSizeUnit==="%"}" ?disabled="${r=>r.disabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">%</button>
                                <span class="unit-mixed" aria-hidden="true" ?hidden="${r=>!ne(r,"iconSizeUnit")}">•••</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="inspector-group label-position-group" aria-labelledby="text-position-heading">            
            <div class="property-grid gtc10">
                <div class="property-field label-editor gc-s6">                    
                    <div class="property-field-heading">
                        <h4 id="text-position-heading">Підпис</h4>
                        ${qi("label")}
                        <div class="property-control-row">
                            <div class="label-type-control segmented" role="group" aria-label="${r=>ot(r,"Тип підпису","labelType")}" ?data-mixed="${r=>ne(r,"labelType")}">
                                <button type="button" data-property="labelType" data-value="number" aria-label="Числовий підпис" aria-pressed="${r=>r.values.labelType==="number"}" ?disabled="${r=>r.disabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">число</button>
                                <button type="button" data-property="labelType" data-value="string" aria-label="Текстовий підпис" aria-pressed="${r=>r.values.labelType==="string"}" ?disabled="${r=>r.disabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">текст</button>
                                <span class="unit-mixed" aria-hidden="true" ?hidden="${r=>!ne(r,"labelType")}">•••</span>
                            </div>
                             ${qi("labelType")}
                        </div>        
                    </div>                    
                    
                    <div class="property-control-row">
                        <input
                            class="property-input"
                            type="text"
                            name="label"
                            maxlength="${r=>r.values.labelType==="number"?"2":null}"
                            inputmode="${r=>r.values.labelType==="number"?"numeric":"text"}"
                            aria-label="${r=>ot(r,"Підпис елемента","label")}"
                            :value="${r=>es(r,"label")}"
                            :placeholder="${r=>Vn(r,"label")}"
                            ?data-mixed="${r=>ne(r,"label")}"
                            ?disabled="${r=>r.disabled}"
                            @input="${(r,e)=>r.handleControlInput(e.event)}"
                        >
                    </div>
                </div>
               
                <div class="property-field gc-s3">
                    ${it("Розмір","labelFontSize")}
                    <div class="property-control-row">
                        ${Ft("labelFontSize","Розмір",.5)}                        
                    </div>
                </div>

                <div class="property-field label-radius-field">
                    ${it("Відстань","labelRadius")}
                    <div class="property-control-row">
                        ${Ft("labelRadius","Відстань від центру піктограми до найближчої точки підпису в пікселях",.5)}
                    </div>
                </div>

                <div class="property-field" style="grid-row: 3;">
                    ${it("Колір","textColor")}
                    <div class="property-control-row">
                        <span class="color-input-wrap" ?data-mixed="${r=>ne(r,"textColor")}" ?data-default="${r=>He(r,"textColor")}">
                            <input class="property-input color-input" type="color" name="textColor" aria-label="${r=>ot(r,"Колір тексту","textColor")}" :value="${r=>Ro(r,"textColor")}" ?disabled="${r=>r.disabled}" @input="${(r,e)=>r.handleControlInput(e.event)}">
                            <span class="mixed-dots" aria-hidden="true" ?hidden="${r=>!ne(r,"textColor")}">•••</span>
                            <span class="default-value" aria-hidden="true" ?hidden="${r=>!He(r,"textColor")}">⬦</span>
                        </span>
                    </div>
                </div>

                <div class="property-field" style="grid-row: 3; grid-column: 3 / span 8;"> 
                    <div class="property-grid">
                        <div class="property-field text-stroke-enabled-control" ?data-mixed="${r=>ne(r,"textStrokeEnabled")}" ?data-default="${r=>He(r,"textStrokeEnabled")}">
                            ${it("Обводка","textStrokeEnabled")}
                            <div class="property-control-row">
                                <input
                                    type="checkbox"
                                    name="textStrokeEnabled"
                                    aria-label="${r=>ot(r,"Обведення тексту ввімкнено","textStrokeEnabled")}"
                                    aria-checked="${r=>ry(r)}"
                                    :checked="${r=>r.values.textStrokeEnabled===!0}"
                                    :indeterminate="${r=>ne(r,"textStrokeEnabled")}"
                                    ?disabled="${r=>r.disabled}"
                                    @input="${(r,e)=>r.handleControlInput(e.event)}"
                                >
                                <span class="field-state" aria-hidden="true" ?hidden="${r=>!He(r,"textStrokeEnabled")}">⬦</span>
                                <span class="field-state mixed-state" aria-hidden="true" ?hidden="${r=>!ne(r,"textStrokeEnabled")}">•••</span>
                            </div>
                        </div>
                        <div class="property-field">
                            ${it("Колір","textStrokeColor")}
                            <div class="property-control-row">
                                <span class="color-input-wrap" ?data-mixed="${r=>ne(r,"textStrokeColor")}" ?data-default="${r=>He(r,"textStrokeColor")}">
                                    <input class="property-input color-input" type="color" name="textStrokeColor" aria-label="${r=>ot(r,"Колір обведення тексту","textStrokeColor")}" :value="${r=>Ro(r,"textStrokeColor")}" ?disabled="${r=>r.disabled}" @input="${(r,e)=>r.handleControlInput(e.event)}">
                                    <span class="mixed-dots" aria-hidden="true" ?hidden="${r=>!ne(r,"textStrokeColor")}">•••</span>
                                    <span class="default-value" aria-hidden="true" ?hidden="${r=>!He(r,"textStrokeColor")}">⬦</span>
                                </span>
                            </div>
                        </div>
                        <div class="property-field">
                            ${it("Товщина","textStrokeWidth")}
                            <div class="property-control-row">
                                ${Ft("textStrokeWidth","Товщина обведення тексту в пікселях",.25)}                                                    
                            </div>
                        </div>
                    </div>
                </div>

                                
                <div class="property-field label-position-field">
                    ${it("Положення","labelPosition")}
                    <div class="label-position-pad" role="group" aria-label="${r=>ot(r,"Положення підпису відносно піктограми","labelPosition")}" ?data-mixed="${r=>ne(r,"labelPosition")}">
                        <button type="button" class="pad-top-left" data-property="labelPosition" data-value="top-left" title="Угорі ліворуч" aria-label="Підпис ліворуч угорі від піктограми" aria-pressed="${r=>r.values.labelPosition==="top-left"}" ?disabled="${r=>r.disabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">↖</button>
                        <button type="button" class="pad-top" data-property="labelPosition" data-value="top" title="Угорі" aria-label="Підпис над піктограмою" aria-pressed="${r=>r.values.labelPosition==="top"}" ?disabled="${r=>r.disabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">↑</button>
                        <button type="button" class="pad-top-right" data-property="labelPosition" data-value="top-right" title="Угорі праворуч" aria-label="Підпис праворуч угорі від піктограми" aria-pressed="${r=>r.values.labelPosition==="top-right"}" ?disabled="${r=>r.disabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">↗</button>
                        <button type="button" class="pad-left" data-property="labelPosition" data-value="left" title="Ліворуч" aria-label="Підпис ліворуч від піктограми" aria-pressed="${r=>r.values.labelPosition==="left"}" ?disabled="${r=>r.disabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">←</button>
                        <span class="label-position-center" aria-hidden="true">${r=>r.mode==="items"&&ne(r,"labelPosition")?"•••":"•"}</span>
                        <button type="button" class="pad-right" data-property="labelPosition" data-value="right" title="Праворуч" aria-label="Підпис праворуч від піктограми" aria-pressed="${r=>r.values.labelPosition==="right"}" ?disabled="${r=>r.disabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">→</button>
                        <button type="button" class="pad-bottom-left" data-property="labelPosition" data-value="bottom-left" title="Унизу ліворуч" aria-label="Підпис ліворуч унизу від піктограми" aria-pressed="${r=>r.values.labelPosition==="bottom-left"}" ?disabled="${r=>r.disabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">↙</button>
                        <button type="button" class="pad-bottom" data-property="labelPosition" data-value="bottom" title="Унизу" aria-label="Підпис під піктограмою" aria-pressed="${r=>r.values.labelPosition==="bottom"}" ?disabled="${r=>r.disabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">↓</button>
                        <button type="button" class="pad-bottom-right" data-property="labelPosition" data-value="bottom-right" title="Унизу праворуч" aria-label="Підпис праворуч унизу від піктограми" aria-pressed="${r=>r.values.labelPosition==="bottom-right"}" ?disabled="${r=>r.disabled}" @click="${(r,e)=>r.handleControlClick(e.event)}">↘</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="inspector-group" aria-labelledby="appearance-heading">
            <h4 id="appearance-heading">Зовнішній вигляд</h4>
            <div class="property-grid">
                <div class="property-field">
                    ${it("Заливка","fillColor")}
                    <div class="property-control-row">
                        <span class="color-input-wrap" ?data-mixed="${r=>ne(r,"fillColor")}" ?data-default="${r=>He(r,"fillColor")}">
                            <input class="property-input color-input" type="color" name="fillColor" aria-label="${r=>ot(r,"Колір заливки","fillColor")}" :value="${r=>Ro(r,"fillColor")}" ?disabled="${r=>r.disabled}" @input="${(r,e)=>r.handleControlInput(e.event)}">
                            <span class="mixed-dots" aria-hidden="true" ?hidden="${r=>!ne(r,"fillColor")}">•••</span>
                            <span class="default-value" aria-hidden="true" ?hidden="${r=>!He(r,"fillColor")}">⬦</span>
                        </span>
                    </div>
                </div>
                <div class="property-field fill-enabled-control" ?data-mixed="${r=>ne(r,"fillEnabled")}" ?data-default="${r=>He(r,"fillEnabled")}">
                    ${it("Заливку ввімкнено","fillEnabled")}
                    <div class="property-control-row">
                        <input
                            type="checkbox"
                            name="fillEnabled"
                            aria-label="${r=>ot(r,"Заливку ввімкнено","fillEnabled")}"
                            aria-checked="${r=>ty(r)}"
                            :checked="${r=>r.values.fillEnabled===!0}"
                            :indeterminate="${r=>ne(r,"fillEnabled")}"
                            ?disabled="${r=>r.disabled}"
                            @input="${(r,e)=>r.handleControlInput(e.event)}"
                        >
                        <span class="field-state" aria-hidden="true" ?hidden="${r=>!He(r,"fillEnabled")}">⬦</span>
                        <span class="field-state mixed-state" aria-hidden="true" ?hidden="${r=>!ne(r,"fillEnabled")}">•••</span>
                    </div>
                </div>
                <div class="property-field">
                    ${it("Контур","borderColor")}
                    <div class="property-control-row">
                        <span class="color-input-wrap" ?data-mixed="${r=>ne(r,"borderColor")}" ?data-default="${r=>He(r,"borderColor")}">
                            <input class="property-input color-input" type="color" name="borderColor" aria-label="${r=>ot(r,"Колір контуру","borderColor")}" :value="${r=>Ro(r,"borderColor")}" ?disabled="${r=>r.disabled}" @input="${(r,e)=>r.handleControlInput(e.event)}">
                            <span class="mixed-dots" aria-hidden="true" ?hidden="${r=>!ne(r,"borderColor")}">•••</span>
                            <span class="default-value" aria-hidden="true" ?hidden="${r=>!He(r,"borderColor")}">⬦</span>
                        </span>
                    </div>
                </div>
                <div class="property-field">
                    ${it("Товщина контуру","borderWidth")}
                    <div class="property-control-row">
                        ${Ft("borderWidth","Товщина контуру",.5)}                                    
                    </div>
                </div>
            </div>
        </section>

        <section class="inspector-group z-order-group" aria-labelledby="z-index-heading">
            <div class="z-order-heading">
                <h4 id="z-index-heading">Індекс Z <strong aria-live="polite">${r=>ne(r,"zIndex")?"•••":es(r,"zIndex")||"—"}</strong></h4>
            </div>
            <div class="z-order-controls" role="group" aria-label="Дії порядку накладання">
                <button class="square-btn" data-stack-action="top" aria-label="Перемістити вибрані елементи на передній план" ?disabled="${r=>r.disabled||r.mode!=="items"}" @click="${(r,e)=>r.handleControlClick(e.event)}">⭱</button>
                <button class="square-btn" data-stack-action="forward" aria-label="Перемістити вибрані елементи вперед" ?disabled="${r=>r.disabled||r.mode!=="items"}" @click="${(r,e)=>r.handleControlClick(e.event)}">▲</button>
                <div class="property-control-row">${Ft("zIndex","Індекс Z",1)}</div>
                <button class="square-btn" data-stack-action="bottom" aria-label="Перемістити вибрані елементи на задній план" ?disabled="${r=>r.disabled||r.mode!=="items"}" @click="${(r,e)=>r.handleControlClick(e.event)}">⭳</button>
                <button class="square-btn" data-stack-action="backward" aria-label="Перемістити вибрані елементи назад" ?disabled="${r=>r.disabled||r.mode!=="items"}" @click="${(r,e)=>r.handleControlClick(e.event)}">▼</button>
            </div>
        </section>
    </div>
`,oy=H`
    :host {
        --btn-size-s-pbu: var(--28pbu);
        --btn-size-s-px: 28px;
        --btn-size-m-pbu: var(--32pbu);
        --btn-size-m-px: 32px;

        --hex-properties-ink: var(--ff-scene-editor-ink, var(--ff-neutral-foreground-rest, #203a34));
        --hex-properties-muted: var(--ff-scene-editor-muted, var(--ff-neutral-foreground-hint, #60736b));
        --hex-properties-line: var(--ff-scene-editor-line, var(--ff-neutral-stroke-rest, #cbd7d0));
        --hex-properties-panel: var(--ff-scene-editor-panel, var(--ff-neutral-layer-1, #f7faf5));
        --hex-properties-accent: var(--ff-scene-editor-accent, var(--ff-accent-foreground-rest, #176d5d));
        --hex-properties-signal: var(--ff-scene-editor-signal, var(--ff-error-foreground-rest, #c9573f));
        --hex-properties-focus: var(--ff-scene-editor-focus, var(--ff-focus-stroke-outer, #d58b38));
        --hex-properties-surface: var(--ff-scene-editor-surface, #ffffff);
        --hex-properties-surface-alt: var(--ff-scene-editor-surface-alt, #edf3ee);
        --hex-properties-hover: var(--ff-scene-editor-hover, #e4eee7);
        --hex-properties-disabled: var(--ff-scene-editor-disabled, #e3e9e4);
        --hex-properties-on-accent: var(--ff-scene-editor-surface, #ffffff);
        --focus: #d58b38;
        display: block;
        min-width: 0;
        color: var(--hex-properties-ink);
        font-family: var(--fontFamilyBase, "Aptos", sans-serif);
        font-size: var(--12pbu, 12px);
    }

    :host([compact][mode="slot"]) {
        container-name: hex-properties;
        container-type: inline-size;
    }

    :host-context(html[data-theme="dark"]) {
        --hex-properties-ink: var(--ff-scene-editor-ink, #e3ede7);
        --hex-properties-muted: var(--ff-scene-editor-muted, #a3b5ab);
        --hex-properties-line: var(--ff-scene-editor-line, #455c50);
        --hex-properties-panel: var(--ff-scene-editor-panel, #1c2a24);
        --hex-properties-accent: var(--ff-scene-editor-accent, #70bea1);
        --hex-properties-signal: var(--ff-scene-editor-signal, #ff947a);
        --hex-properties-surface: var(--ff-scene-editor-surface, #22332a);
        --hex-properties-surface-alt: var(--ff-scene-editor-surface-alt, #293b31);
        --hex-properties-hover: var(--ff-scene-editor-hover, #35493e);
        --hex-properties-disabled: var(--ff-scene-editor-disabled, #2b3831);
        --hex-properties-on-accent: var(--ff-scene-editor-background, #111a16);
    }

    :host([hidden]) {
        display: none;
    }

    .square-btn {
        width: var(--btn-size-m-pbu, --btn-size-m-px);
        min-width: var(--btn-size-m-pbu, --btn-size-m-px);
        max-width: var(--btn-size-m-pbu, --btn-size-m-px);
        height: var(--btn-size-m-pbu, --btn-size-m-px);
        min-height: var(--btn-size-m-pbu, --btn-size-m-px);
        max-height: var(--btn-size-m-pbu, --btn-size-m-px);

        white-space: nowrap;
        padding: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .btn-size-s {
        width: var(--btn-size-s-pbu, var(--btn-size-s-px));
        min-width: var(--btn-size-s-pbu, var(--btn-size-s-px));
        max-width: var(--btn-size-s-pbu, var(--btn-size-s-px));
        height: var(--btn-size-s-pbu, var(--btn-size-s-px));
        min-height: var(--btn-size-s-pbu, var(--btn-size-s-px));
        max-height: var(--btn-size-s-pbu, var(--btn-size-s-px));        
    }  
    
    .btn-size-m {
        width: var(--btn-size-m-pbu, --btn-size-m-px);
        min-width: var(--btn-size-m-pbu, --btn-size-m-px);
        max-width: var(--btn-size-m-pbu, --btn-size-m-px);
        height: var(--btn-size-m-pbu, --btn-size-m-px);
        min-height: var(--btn-size-m-pbu, --btn-size-m-px);
        max-height: var(--btn-size-m-pbu, --btn-size-m-px);        
    }     

    .property-panel {
        min-width: 0;
        color: var(--hex-properties-ink);
    }

    .inspector-group {
        min-width: 0;
        margin-top: var(--11pbu, 11px);
        padding-top: var(--9pbu, 9px);
        border-top: var(--1pbu, 1px) solid var(--hex-properties-line);

        gap: 4px;
        display: flex;
        flex-direction: column;        
    }

    .inspector-group:first-child {
        margin-top: 0;
        padding-top: 0;
        border-top: 0;
    }

    .inspector-group h4 {
        margin: 0 0 var(--7pbu, 7px);
        color: var(--hex-properties-ink);
        font-size: var(--11pbu, 11px);
        font-weight: 700;
        line-height: 1.3;
    }

    .inspector-heading-row {
        display: flex;
        min-width: 0;
        align-items: center;
        gap: var(--5pbu, 5px);
        margin-bottom: var(--7pbu, 7px);
    }

    .inspector-heading-row > h4 {
        min-width: 0;
        flex: 1;
        margin: 0;
    }

    .property-grid {
        display: grid;
        min-width: 0;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        align-items: start;
        justify-items: start;
        gap: var(--8pbu, 8px);
        width: fit-content;
    }

    .text-stroke-group {
        min-width: 0;
        grid-column: 1 / -1;
        padding-top: var(--8pbu, 8px);
        border-top: var(--1pbu, 1px) solid var(--hex-properties-line);
    }

    .text-stroke-group h5 {
        margin: 0 0 var(--7pbu, 7px);
        color: var(--hex-properties-ink);
        font-size: var(--10pbu, 10px);
        font-weight: 700;
        line-height: 1.3;
    }

    .property-field {
        display: flex;
        min-width: 0;
        flex-direction: column;
        gap: var(--4pbu, 4px);
        color: var(--hex-properties-muted);
        font-size: var(--11pbu, 11px);        
        line-height: 1.25;
    }

    .property-field-heading {
        display: flex;
        min-width: 0;
        align-items: center;
        gap: var(--5pbu, 5px);
        height: var(--12pbu, 12px);
        position: relative;
    }

    .property-field-heading > span {
        min-width: 0;
        flex: 1;
        overflow-wrap: break-word;
    }

    .property-field > span:first-child {
        overflow-wrap: anywhere;
    }

    .property-control-row {
        display: flex;
        min-width: 0;
        align-items: center;
        gap: var(--5pbu, 5px);
        justify-content: space-between;
    }

    .property-control-row > .property-input,
    .property-control-row > .color-input-wrap {
        flex: 1;
    }

    .custom-property-input {
        box-sizing: border-box;
        width: fit-content;
        /* max-width: none;
        min-width: 0; */
    }

    .property-control-row > .custom-property-input {
        /* flex: 1; */
    }

    .property-reset-toggle {
        display: grid;
        place-items: center;
        flex: 0 0 var(--24pbu, 24px);
        box-sizing: border-box;
        width: var(--24pbu, 24px);
        height: var(--16pbu, 16px);
        align-self: center;
        padding: 0;
        border: var(--1pbu, 1px) solid transparent;
        border-radius: var(--3pbu, 3px);
        color: var(--hex-properties-muted);
        background: transparent;
        cursor: pointer;
        line-height: 1;
        position: absolute;
        right: 0;
    }
    /* .property-reset-toggle > span {

    } */

    .property-reset-toggle[aria-pressed="true"] {
        color: var(--focus);
        background: var(--hex-properties-hover);
    }

    .property-reset-toggle[disabled] {
        cursor: default;
        opacity: 0.72;
    }

    :host([mode="items"]) .property-reset-toggle[aria-pressed="true"],
    :host([mode="slot"]) .property-reset-toggle[aria-pressed="true"] {
        opacity: 1;
    }

    .property-input,
    .shape-control {
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        min-height: var(--29pbu, 29px);
        padding: var(--4pbu, 4px) var(--6pbu, 6px);
        border: var(--1pbu, 1px) solid var(--hex-properties-line);
        border-radius: var(--3pbu, 3px);
        color: var(--hex-properties-ink);
        background: var(--hex-properties-surface);
        font: inherit;
        font-size: var(--12pbu, 12px);
        font-variant-numeric: tabular-nums;
    }

    .property-input::placeholder {
        color: var(--hex-properties-muted);
        opacity: 1;
        font-weight: 500;
    }

    .property-input:disabled,
    .shape-control:disabled {
        color: var(--hex-properties-muted);
        background: var(--hex-properties-disabled);
        cursor: default;
    }

    .property-input:focus-visible,
    .shape-control:focus-visible,
    button:focus-visible {
        outline: var(--3pbu, 3px) solid var(--hex-properties-focus);
        outline-offset: var(--1pbu, 1px);
    }

    .property-input[data-mixed] {
        border-style: dashed;
    }

    .custom-property-input[data-mixed]::part(root) {
        border-style: dashed;
    }

    .color-input-wrap {
        position: relative;
        display: block;
        width: 100%;
        min-width: 0;
    }

    .property-input.color-input {
        height: var(--30pbu, 30px);
        padding: var(--3pbu, 3px);
        cursor: pointer;
    }

    .property-input.color-input:disabled {
        cursor: default;
    }

    .mixed-dots,
    .default-value {
        position: absolute;
        inset: var(--1pbu, 1px);
        display: grid;
        place-items: center;
        border-radius: var(--3pbu, 3px);
        color: var(--hex-properties-muted);
        background: color-mix(in srgb, var(--hex-properties-surface) 88%, transparent);
        font-size: var(--11pbu, 11px);
        font-weight: 700;
        pointer-events: none;
    }

    .mixed-dots[hidden],
    .default-value[hidden],
    .unit-mixed[hidden],
    .field-state[hidden],
    .layout-mode-field[hidden] {
        display: none;
    }

    .segmented {
        box-sizing: border-box;
        display: inline-flex;
        width: max-content;
        max-width: 100%;
        flex-wrap: wrap;
        gap: var(--1pbu, 1px);
        padding: var(--2pbu, 2px);
        border: var(--1pbu, 1px) solid var(--hex-properties-line);
        border-radius: var(--4pbu, 4px);
        background: var(--hex-properties-surface-alt);
    }

    .segmented button,
    .z-order-controls button {
        box-sizing: border-box;
        min-width: var(--28pbu, 28px);
        min-height: var(--28pbu, 28px);
        padding: var(--4pbu, 4px) var(--7pbu, 7px);
        border: var(--1pbu, 1px) solid transparent;
        border-radius: var(--3pbu, 3px);
        color: var(--hex-properties-ink);
        background: transparent;
        font: inherit;
        font-size: var(--11pbu, 11px);
        font-weight: 600;
        line-height: 1.2;
        cursor: pointer;
    }

    button:hover:not(:disabled) {
        background: var(--hex-properties-hover);
    }

    .segmented button[aria-pressed="true"] {
        color: var(--hex-properties-on-accent);
        background: var(--hex-properties-accent);
    }

    .segmented button:disabled,
    .z-order-controls button:disabled,
    .label-position-pad button:disabled {
        cursor: default;
        opacity: 0.48;
    }

    .unit-toggle {
        align-items: center;
    }

    .unit-toggle button,
    .label-type-control button,
    .layout-mode-control button {
        min-height: var(--25pbu, 25px);
        padding: var(--3pbu, 3px) var(--6pbu, 6px);
        font-size: var(--10pbu, 10px);
    }

    .unit-mixed {
        display: grid;
        min-width: 2ch;
        place-items: center;
        color: var(--hex-properties-signal);
        font-size: var(--8pbu, 8px);
    }

    .label-control-row {
        display: grid;
        min-width: 0;
        grid-column: 1 / -1;
        grid-template-columns: minmax(0, 1fr) max-content max-content;
        align-items: end;
        gap: var(--8pbu, 8px);
    }

    .label-editor {
        min-width: 0;
    }

    .label-type-control,
    .layout-mode-control {
        align-items: center;
    }

    .label-position-control-row {
        display: flex;
        min-width: 0;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: var(--8pbu, 8px);
    }

    .label-position-pad {
        box-sizing: border-box;
        display: grid;
        width: max-content;
        max-width: 100%;
        grid-template-columns: repeat(3, 30px);
        grid-template-rows: repeat(3, 30px);
        gap: var(--2pbu, 2px);
        padding: var(--3pbu, 3px);
        border: var(--1pbu, 1px) solid var(--hex-properties-line);
        border-radius: var(--4pbu, 4px);
        background: var(--hex-properties-surface-alt);
    }

    .label-position-pad button,
    .label-position-center {
        box-sizing: border-box;
        display: grid;
        min-width: 0;
        min-height: 0;
        place-items: center;
        padding: 0;
        border: var(--1pbu, 1px) solid var(--hex-properties-line);
        border-radius: var(--3pbu, 3px);
        color: var(--hex-properties-ink);
        background: var(--hex-properties-surface);
        font: inherit;
        font-size: var(--17pbu, 17px);
        line-height: 1;
    }

    .label-position-center {
        overflow: hidden;
        color: var(--hex-properties-muted);
        font-size: var(--9pbu, 9px);
        font-weight: 700;
        text-align: center;
        overflow-wrap: anywhere;
    }

    .label-position-pad button[aria-pressed="true"] {
        color: var(--hex-properties-on-accent);
        background: var(--hex-properties-accent);
    }

    .pad-top-left { grid-area: 1 / 1; }
    .pad-top { grid-area: 1 / 2; }
    .pad-top-right { grid-area: 1 / 3; }
    .pad-left { grid-area: 2 / 1; }
    .label-position-center { grid-area: 2 / 2; }
    .pad-right { grid-area: 2 / 3; }
    .pad-bottom-left { grid-area: 3 / 1; }
    .pad-bottom { grid-area: 3 / 2; }
    .pad-bottom-right { grid-area: 3 / 3; }

    .label-position-pad[data-mixed] .label-position-center {
        color: var(--hex-properties-signal);
    }

    .fill-enabled-control,
    .text-stroke-enabled-control {
        min-height: var(--30pbu, 30px);
    }

    .fill-enabled-control input[type="checkbox"],
    .text-stroke-enabled-control input[type="checkbox"] {
        box-sizing: border-box;
        width: var(--16pbu, 16px);
        height: var(--16pbu, 16px);
        margin: 0;
        accent-color: var(--hex-properties-accent);
    }

    .fill-enabled-control input[type="checkbox"]:focus-visible,
    .text-stroke-enabled-control input[type="checkbox"]:focus-visible {
        outline: var(--3pbu, 3px) solid var(--hex-properties-focus);
        outline-offset: var(--1pbu, 1px);
    }

    .field-state {
        color: var(--hex-properties-muted);
        font-size: var(--9pbu, 9px);
        font-weight: 600;
    }

    .mixed-state {
        color: var(--hex-properties-signal);
    }

    .z-order-heading {
        display: flex;
        min-width: 0;
        align-items: center;
        justify-content: space-between;
        gap: var(--8pbu, 8px);
        margin-bottom: var(--7pbu, 7px);
    }

    .z-order-heading h4 {
        margin: 0;
    }

    .z-order-heading strong {
        min-width: 2ch;
        color: var(--hex-properties-accent);
        font-size: var(--12pbu, 12px);
        font-variant-numeric: tabular-nums;
        text-align: right;
    }

    .item-lock-button {
        box-sizing: border-box;
        display: grid;
        width: var(--28pbu, 28px);
        min-width: var(--28pbu, 28px);
        height: var(--28pbu, 28px);
        aspect-ratio: 1;
        place-items: center;
        padding: 0;
        border: var(--1pbu, 1px) solid var(--hex-properties-line);
        border-radius: var(--3pbu, 3px);
        color: var(--hex-properties-ink);
        background: var(--hex-properties-panel);
        font: inherit;
        font-size: var(--15pbu, 15px);
        line-height: 1;
        cursor: pointer;
    }

    .item-lock-button[aria-pressed="true"] {
        border-color: var(--hex-properties-accent);
        color: var(--hex-properties-on-accent);
        background: var(--hex-properties-accent);
    }

    .item-lock-button:disabled {
        cursor: default;
        opacity: 0.48;
    }

    .selected-slot-delete {
        box-sizing: border-box;
        display: grid;
        /* flex: 0 0 var(--28pbu, 28px); */
        aspect-ratio: 1;
        place-items: center;
        padding: 0;
        border: var(--1pbu, 1px) solid var(--hex-properties-signal);
        border-radius: var(--3pbu, 3px);
        color: var(--hex-properties-signal);
        background: var(--hex-properties-surface);
        font: inherit;
        font-size: var(--15pbu, 15px);
        line-height: 1;
        cursor: pointer;
    }

    .selected-slot-delete:hover:not(:disabled) {
        background: var(--hex-properties-hover);
    }

    .selected-slot-delete:disabled {
        cursor: default;
        opacity: 0.45;
    }

    .z-order-controls {
        display: flex;
        gap: var(--5pbu, 5px);
    }

    .z-order-controls button {
        border-color: var(--hex-properties-line);
        background: var(--hex-properties-panel);
    }

    :host([compact]) .inspector-group {
        margin-top: var(--6pbu, 6px);
        padding-top: var(--5pbu, 5px);
    }

    :host([compact]) .inspector-group:first-child {
        margin-top: 0;
        padding-top: 0;
        border-top: 0;
    }

    :host([compact]) .inspector-group h4 {
        margin-bottom: var(--4pbu, 4px);
        font-size: var(--10pbu, 10px);
        line-height: 1.2;
    }

    :host([compact]) .property-grid {
        column-gap: var(--6pbu, 6px);
        row-gap: var(--5pbu, 5px);
    }

    :host([compact]) .text-stroke-group {
        padding-top: var(--5pbu, 5px);
    }

    :host([compact]) .text-stroke-group h5 {
        margin-bottom: var(--4pbu, 4px);
    }

    :host([compact]) .property-field {
        gap: var(--3pbu, 3px);
        font-size: var(--10pbu, 10px);
        line-height: 1.2;
    }

    :host([compact]) .property-field-heading {
        gap: var(--3pbu, 3px);
    }

    :host([compact]) .property-control-row {
        gap: var(--3pbu, 3px);
    }

    :host([compact]) .property-input,
    :host([compact]) .shape-control {
        min-height: var(--24pbu, 24px);
        padding: 0 var(--2pbu, 2px);
        font-size: var(--11pbu, 11px);
    }

    :host([compact]) .property-input.color-input {
        height: var(--24pbu, 24px);
        width: var(--48pbu, 48px);
    }

    :host([compact]) .segmented {
        gap: 0;
        padding: var(--1pbu, 1px);
    }

    :host([compact]) .segmented button,
    :host([compact]) .z-order-controls button {
        min-width: var(--24pbu, 24px);
        min-height: var(--23pbu, 23px);
        padding: var(--2pbu, 2px) var(--5pbu, 5px);
        font-size: var(--10pbu, 10px);
    }

    :host([compact]) .unit-toggle button,
    :host([compact]) .label-type-control button,
    :host([compact]) .layout-mode-control button {
        min-height: var(--16pbu, 16px);
        padding: var(--2pbu, 2px) var(--4pbu, 4px);
        font-size: var(--9pbu, 9px);
    }

    :host([compact]) .label-control-row {
        gap: var(--5pbu, 5px);
    }

    :host([compact]) .label-position-pad {
        grid-template-columns: repeat(3, 25px);
        grid-template-rows: repeat(3, 25px);
        gap: var(--1pbu, 1px);
        padding: var(--2pbu, 2px);
    }

    :host([compact]) .label-position-control-row {
        gap: var(--5pbu, 5px);
    }

    :host([compact]) .label-position-pad button,
    :host([compact]) .label-position-center {
        font-size: var(--14pbu, 14px);
    }

    :host([compact]) .fill-enabled-control,
    :host([compact]) .text-stroke-enabled-control {
        min-height: var(--25pbu, 25px);
        align-items: center;
    }

    :host([compact]) .inspector-group[aria-labelledby="appearance-heading"] .property-grid {
        row-gap: var(--4pbu, 4px);
    }

    :host([compact]) .inspector-group[aria-labelledby="appearance-heading"] .text-stroke-group {
        padding-top: var(--4pbu, 4px);
    }

    :host([compact]) .inspector-group[aria-labelledby="appearance-heading"] .text-stroke-group h5 {
        margin-bottom: var(--3pbu, 3px);
    }

    :host([compact]) .z-order-group {
        margin-top: var(--6pbu, 6px);
        padding-top: var(--5pbu, 5px);
    }

    :host([compact]) .z-order-heading {
        gap: var(--5pbu, 5px);
        margin-bottom: var(--4pbu, 4px);
    }

    :host([compact]) .z-order-heading strong {
        font-size: var(--11pbu, 11px);
    }

    :host([compact]) .z-order-controls {
        gap: var(--3pbu, 3px);
    }

    @media (max-width: 380px) {
        .property-grid {
            grid-template-columns: minmax(0, 1fr);
        }

        .label-control-row {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        }

        .label-editor {
            grid-column: 1 / -1;
        }

        .layout-mode-field {
            grid-column: 1 / -1;
        }
    }

    @container hex-properties (max-width: 160px) {
        .property-grid {
            grid-template-columns: minmax(0, 1fr);
        }

        .label-control-row {
            grid-template-columns: minmax(0, 1fr);
        }

        .label-editor,
        .layout-mode-field {
            grid-column: 1 / -1;
        }

        :host([compact][mode="slot"]) .inspector-group:not(:first-child) {
            margin-top: var(--4pbu, 4px);
            padding-top: var(--4pbu, 4px);
        }

        :host([compact][mode="slot"]) .property-grid {
            grid-template-columns: minmax(0, 1fr);
            column-gap: var(--3pbu, 3px);
            row-gap: var(--3pbu, 3px);
        }

        :host([compact][mode="slot"]) .inspector-group h4 {
            margin-bottom: var(--3pbu, 3px);
        }

        :host([compact][mode="slot"]) .inspector-heading-row {
            gap: var(--2pbu, 2px);
            margin-bottom: var(--3pbu, 3px);
        }

        :host([compact][mode="slot"]) .inspector-heading-row > h4 {
            margin-bottom: 0;
        }

        :host([compact][mode="slot"]) .property-field {
            gap: var(--2pbu, 2px);
        }

        :host([compact][mode="slot"]) .property-control-row {
            flex-wrap: wrap;
            gap: var(--2pbu, 2px);
        }

        :host([compact][mode="slot"]) .property-control-row > .property-input,
        :host([compact][mode="slot"]) .property-control-row > .color-input-wrap {
            min-width: 0;
            max-width: 100%;
            flex: 1 1 var(--48pbu, 48px);
        }

        :host([compact][mode="slot"]) .property-input,
        :host([compact][mode="slot"]) .shape-control {
            min-height: var(--24pbu, 24px);
            padding: var(--2pbu, 2px) var(--4pbu, 4px);
            font-size: var(--10pbu, 10px);
        }

        :host([compact][mode="slot"]) .property-input.color-input {
            height: var(--25pbu, 25px);
        }

        :host([compact][mode="slot"]) .property-control-row > .custom-property-input {
            /* flex: 1 1 var(--48pbu, 48px); */
        }

        :host([compact][mode="slot"]) .segmented {
            width: 100%;
            max-width: 100%;
            justify-content: flex-start;
        }

        :host([compact][mode="slot"]) .inspector-group[aria-labelledby="appearance-heading"] .property-grid {
            row-gap: var(--2pbu, 2px);
        }

        :host([compact][mode="slot"]) .inspector-group[aria-labelledby="appearance-heading"] .text-stroke-group {
            padding-top: var(--3pbu, 3px);
        }

        :host([compact][mode="slot"]) .inspector-group[aria-labelledby="appearance-heading"] .text-stroke-group h5 {
            margin-bottom: var(--2pbu, 2px);
        }

        :host([compact][mode="slot"]) .z-order-group {
            margin-top: var(--4pbu, 4px);
            padding-top: var(--4pbu, 4px);
        }

        :host([compact][mode="slot"]) .z-order-heading {
            gap: var(--3pbu, 3px);
            margin-bottom: var(--3pbu, 3px);
        }
    }


    n-input::part(control) {
        width: var(--28pbu, 28px);
    }    
    
    .pb6 { padding-bottom: var(--6pbu, 6px); }

    .gc-s2 {
        grid-column: span 2;
    }

    .gc-s3 {
        grid-column: span 3;
    }    
    .gc-s6 {
        grid-column: span 6;
    }

    .gtc10 {
        grid-template-columns: repeat(10, minmax(0, 1fr));
    }

    .label-position-field {
        grid-row: 1 / span 3;
        grid-column: 7 / span 4;
    }

    

    .zIndex {
        width: var(--64pbu, 64px);
        min-width: var(--64pbu, 64px);
        max-width: var(--64pbu, 64px);
    }


`,sy=$r.compose({name:`${Me.prefix}-hex-properties`,template:iy,styles:oy,shadowOptions:{mode:"open"}}),rc=Me.registry;rc.get("ff-hex-properties")||sy.define(rc);const Hn="ff-kit-refresh-data";var ny=Object.defineProperty,R=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&ny(e,t,o),o};const hn="http://www.w3.org/2000/svg",Vi=96/25.4,ic={a4:[297,210],a3:[420,297]},fn="ff-tri-layer-scene",gn=1,Oo=512,mi=1e5,Fo=1e3,Mo=mi,oc=1e4,hr=32,F=1e4,To=100,sc=.02,Bo=100,jr=16*1024*1024,nc=8*1024*1024,ay=4096,ac="ff-scene-editor:last-scene:v1",ly=25,lc="data-ff-scene-restoring",Hi="data-ff-scene-placement-id",Xi="data-ff-scene-placement-group-id",cy="data-scene-editor-hidden",cc=5,dy=4,mn=".placement-cell, [data-placement-id], [data-placement-action]",Ui="--ff-scene-interaction-cursor",uy=.2,py=2.5,bn=.1,hy=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M6 26L25 7M13 7H25V19' fill='none' stroke='%23fff' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6 26L25 7M13 7H25V19' fill='none' stroke='%230b5d3b' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 25 7, crosshair`,dc=["r","c","size","sizeUnit","iconSize","iconSizeUnit","labelFontSize","offsetX","offsetY","icon","label","layoutMode","labelType","labelPosition","labelRadius","shape","fillEnabled","textColor","textStrokeEnabled","textStrokeColor","textStrokeWidth","fillColor","borderColor","borderWidth","zIndex"],fy={textColor:"--ff-hex-item-color",textStrokeColor:"--ff-hex-item-text-stroke-color",fillColor:"--ff-hex-item-background",borderColor:"--ff-hex-item-border-color"},yn="ff-tri-layer-scene-print",Do=[{fill:"rgba(31, 124, 109, 0.18)",border:"#1f7c6d"},{fill:"rgba(55, 115, 164, 0.18)",border:"#3773a4"},{fill:"rgba(182, 119, 41, 0.18)",border:"#9b6424"},{fill:"rgba(139, 91, 147, 0.18)",border:"#795282"},{fill:"rgba(183, 81, 75, 0.18)",border:"#a4514c"},{fill:"rgba(111, 143, 54, 0.18)",border:"#617c32"}];function gy(r){return r==="swarm"||r==="vertical-column"||r==="horizontal-column"}function We(r,e){if(typeof r!="object"||r===null||Array.isArray(r))throw new Error(`${e} must be an object.`);return r}function le(r,e){if(typeof r!="string")throw new Error(`${e} must be a string.`);return r}function vn(r,e){return r===null?null:le(r,e)}function Nt(r,e){if(typeof r!="number"||!Number.isFinite(r))throw new Error(`${e} must be a finite number.`);return r}function ze(r,e){if(typeof r!="boolean")throw new Error(`${e} must be a boolean.`);return r}function er(r,e,t){if(typeof r!="string"||!e.includes(r))throw new Error(`${t} has an unsupported value.`);return r}function Yr(r){return yr(r)&&r!=="r"&&r!=="c"&&r!=="layoutMode"}function Vo(r,e){if(r===void 0||e===void 0)return r===e;const t=Object.keys(r),i=Object.keys(e);return t.length===i.length&&t.every(o=>Object.prototype.hasOwnProperty.call(e,o)&&Object.is(r[o],e[o]))}function kt(r){const e={id:r.id,r:r.r,c:r.c};return Object.prototype.hasOwnProperty.call(r,"itemProperties")&&Object.assign(e,{itemProperties:r.itemProperties===void 0?void 0:{...r.itemProperties}}),e}function It(r){return{...r,centers:r.centers.map(e=>({...e})),...r.placements===void 0?{}:{placements:r.placements.map(e=>kt(e))},...r.callout===void 0?{}:{callout:{...r.callout,algorithm:r.callout.algorithm??Gr,point:r.callout.point?{...r.callout.point}:null,...r.callout.placements===void 0?{}:{placements:r.callout.placements.map(e=>kt(e))}}}}}function xn(){return{r:null,c:null,offsetX:null,offsetY:null,icon:null,label:null,labelType:null,labelPosition:null,labelRadius:null,shape:null,fillEnabled:null,size:null,sizeUnit:null,iconSize:null,iconSizeUnit:null,labelFontSize:null,textColor:null,textStrokeEnabled:null,textStrokeColor:null,textStrokeWidth:null,fillColor:null,borderColor:null,borderWidth:null,zIndex:null}}function wn(r,e){const t=We(r,e),i={};for(const[o,s]of Object.entries(t)){if(!Yr(o))throw new Error(`${e}.${o} is not a supported slot item property.`);if(s==null)continue;const n=`${e}.${o}`;switch(o){case"offsetX":case"offsetY":{const a=Nt(s,n);if(Math.abs(a)>F)throw new Error(`${n} must be within +/- ${F} pixels.`);i[o]=a;break}case"size":case"iconSize":case"labelRadius":case"labelFontSize":case"borderWidth":case"textStrokeWidth":{const a=Nt(s,n);if(a<0||a>F)throw new Error(`${n} must be between 0 and ${F}.`);i[o]=a;break}case"zIndex":{const a=Nt(s,n);if(!Number.isSafeInteger(a)||a<1||a>F)throw new Error(`${n} must be a safe integer between 1 and ${F}.`);i.zIndex=a;break}case"icon":case"label":case"textColor":case"textStrokeColor":case"fillColor":case"borderColor":i[o]=le(s,n);break;case"sizeUnit":case"iconSizeUnit":i[o]=er(s,["px","%"],n);break;case"labelType":{const a=le(s,n);if(!jt(a))throw new Error(`${n} is unsupported.`);i.labelType=a;break}case"labelPosition":{const a=le(s,n);if(!mr(a))throw new Error(`${n} is unsupported.`);i.labelPosition=a;break}case"shape":{const a=le(s,n);if(!zr(a))throw new Error(`${n} is unsupported.`);i.shape=a;break}case"fillEnabled":i.fillEnabled=ze(s,n);break;case"textStrokeEnabled":i.textStrokeEnabled=ze(s,n);break}}return i}function st(r,e,t){return e==="%"?t*r/100:r}function gr(r,e){return Number.isFinite(r)&&r>0?r:e}function uc(r,e,t,i){const o=t??r.unit;let s=r.value;if(typeof e=="number")s=e;else if(t&&t!==r.unit){const n=st(r.value,r.unit,i);s=t==="%"?n/i*100:n}return{value:s,pixels:st(s,o,i),unit:o}}function ts(r,e){let t={value:e,pixels:e,unit:"px"},i={value:12,pixels:12,unit:"px"};for(const o of r){const s=Ge(o?.sizeUnit)?o.sizeUnit:void 0;t=uc(t,o?.size,s,e);const n=gr(t.pixels,e),a=Ge(o?.iconSizeUnit)?o.iconSizeUnit:void 0;i=uc(i,o?.iconSize,a,n)}return{size:t,iconSize:i}}function pc(r){return r==="size"||r==="sizeUnit"||r==="iconSize"||r==="iconSizeUnit"}function hc(r,e,t,i,o){const s=ts([e,r],o);if(t==="size"||t==="sizeUnit"){if(t==="size"){if(typeof i!="number")return;r.size=i,r.sizeUnit=s.size.unit}else typeof i=="string"&&Ge(i)&&(r.size=i==="%"?s.size.pixels/o*100:s.size.pixels,r.sizeUnit=i);return}const n=gr(s.size.pixels,o);if(t==="iconSize"){if(typeof i!="number")return;r.iconSize=i,r.iconSizeUnit=s.iconSize.unit}else typeof i=="string"&&Ge(i)&&(r.iconSize=i==="%"?s.iconSize.pixels/n*100:s.iconSize.pixels,r.iconSizeUnit=i)}function Mt(r,e,t){const i=Number.isSafeInteger(e)&&e>0?e:1,o=Number.isSafeInteger(t)&&t>0?t:1,s=-Math.floor((i-1)/2),n=3*(Math.ceil(o/2)-1),a=Math.floor(o/2),c=i>1&&a>0?1+3*(a-1):Number.NEGATIVE_INFINITY,l=Math.max(n,c),d=r==="tri"?0:s,u=r==="tri"?o-1:l,p=r==="tri"?0:-1,h=r==="tri"?i-1:i,f=r==="tri"?0:d-1,g=r==="tri"?o-1:u+1;let m=null;return{minItemRow:p,maxItemRow:h,minItemColumn:f,maxItemColumn:g,minCenterColumn:d,maxCenterColumn:u,isGroupCenterValid(b,x){return!Number.isSafeInteger(b)||!Number.isSafeInteger(x)||b<0||b>=i?!1:r==="tri"?x>=0&&x<o:(m??=new Set(Ce(i,o).centers.map(y=>`${y.r},${y.c}`)),m.has(`${b},${x}`))},isItemPositionValid(b,x){return Number.isSafeInteger(b)&&b>=p&&b<=h&&Number.isSafeInteger(x)&&x>=f&&x<=g}}}function my(r){if(typeof r!="object"||r===null||Array.isArray(r))return!1;const e=r;return Number.isSafeInteger(e.r)&&Number.isSafeInteger(e.c)}function fc(r){return r===null||typeof r=="string"}function by(r){if(typeof r!="object"||r===null||Array.isArray(r))return!1;const e=r;return(e.action==="add"||e.action==="remove")&&(e.reason==="add"||e.reason==="exchange"||e.reason==="remove"||e.reason==="transfer")&&my(e.cell)&&fc(e.previousOwnerGroupId)&&fc(e.nextOwnerGroupId)}const yy={"group-centers-unavailable":"для групи не залишилося допустимих центрів","duplicate-placement":"позицію вже призначено іншому елементу","placement-occupied":"підготовлена позиція зайнята або перекривається іншим елементом","no-available-placement":"усі підготовлені позиції зайняті, перекриваються або вже використані","no-available-center":"усі допустимі центри групи зайняті або перекриваються","group-unavailable":"групу елемента не знайдено у сцені"};class G extends Mr{pickFile(){this.fileInputElement?.click()}_selectedSvgText="";_svgViewBox=null;_svgRegions=[];_contoursApplied=!1;_svgReady=Promise.resolve();_contextPanelResizeObserver=null;_layerResizeObserver=null;_groupShapesObserver=null;_layerStructureObserver=null;_layerIdCounter=0;_sceneItemKeys=new WeakMap;_observedGroupShapesElement=null;_applyFrame=0;_pendingSvgGroupAssignment=!1;_svgRequestId=0;_sceneLoadRequestId=0;_autosaveTimer=null;_autosaveEnabled=!1;_sceneRestoreInProgress=!1;_revertingSceneGridChange=!1;_sceneRestoreId=0;_sceneRestoreLockOwnerId=0;_sceneRestoreLayerLocks=new Map;_lastAutosavedScene=null;_preserveLoadedGroups=!1;_printCleanup=null;_groupSelectionPointerGesture=null;_scenePanGesture=null;_suppressedGroupSelectionPointerId=null;_createPointerLayer=null;_createPointerClient=null;_calloutPointerScene=null;_calloutPreviousCursor=null;_calloutThresholds=new Map;_calloutAlgorithms=new Map;_hiddenGroupIds=new Set;_collapsedGroupIds=new Set;_expandedCenterGroupIds=new Set;_expandedCalloutGroupIds=new Set;_handleDocumentClick=e=>{const t=e.composedPath();if(this.svgStatusHistoryOpen&&(t.some(s=>s instanceof Element&&this.shadowRoot?.contains(s)===!0&&s.closest("[data-status-history-trigger], [data-status-history-panel]")!==null)||(this.svgStatusHistoryOpen=!1)),!this.contextRowExpanded&&!this.mockDataPanelExpanded)return;const i=this.getOpenRibbonContextPanel();i&&t.includes(i)||this.isRibbonContextTriggerPath(t)||(this.contextRowExpanded=!1,this.mockDataPanelExpanded=!1,this.syncRibbonContextPanels())};_handleDocumentPointerDown=e=>{if(!this.contextRowExpanded&&!this.mockDataPanelExpanded)return;const t=e.composedPath(),i=this.getOpenRibbonContextPanel();if(!(i&&t.includes(i))){if(i&&this.isRibbonContextTriggerPath(t)){this.contextRowExpanded=!1,this.mockDataPanelExpanded=!1,this.syncRibbonContextPanels();return}this.contextRowExpanded=!1,this.mockDataPanelExpanded=!1,this.syncRibbonContextPanels()}};_handleRibbonContextKeydown=e=>{if(e.key!=="Escape"||!this.contextRowExpanded&&!this.mockDataPanelExpanded)return;e.preventDefault(),e.stopPropagation();const t=this.mockDataPanelExpanded?'[data-c-trigger="mockData"]':`[data-c-trigger="${this.activeControlGroup}"]`,i=this.shadowRoot?.querySelector(t);this.contextRowExpanded=!1,this.mockDataPanelExpanded=!1,this.syncRibbonContextPanels(),i?.focus()};_handleRibbonContextPositionChange=()=>{this.positionOpenRibbonContextPanel(),this.positionOpenCalloutSettingsPopover()};_handleCreatePointerDownCapture=e=>this.handleCreatePointerDownCapture(e);_handleScenePanPointerCancel=e=>this.handleScenePanPointerCancel(e);_handleCalloutPointerCapture=e=>{this.calloutPlacementPhase!==null&&e.stopPropagation()};_handleCalloutSceneClickCapture=e=>{this.calloutPlacementPhase!==null&&(this.handleCalloutSceneClick(e),e.stopImmediatePropagation())};_handleCalloutKeydown=e=>{e.key!=="Escape"||this.calloutPlacementPhase===null||(e.preventDefault(),e.stopPropagation(),this.cancelCalloutPlacement())};_handleCalloutStateChange=()=>this.refreshGroupInspector();_handleItemLayoutModeChange=()=>{this.syncItemHighlightMarkers(),this.refreshGroupInspector()};_handlePlacementChange=e=>this.handlePlacementChange(e);_handleLayerStructureMutation=e=>{this.refreshLayerSummaries(),e.some(t=>t.type==="childList")&&(this.syncSlottedItemSettings(!1),this.syncItemCategoryVisibility(),this.refreshGroupInspector(),this.scheduleSceneAutosave())};_handleCreateKeydown=e=>{e.key!=="Escape"||!this.createItemMode||(e.preventDefault(),this.exitCreateItemMode())};_handlePageHide=()=>this.flushSceneAutosave();constructor(){super(),this._defaultItemProperties={},this.defaultItemProperties=this._defaultItemProperties,this._editingDefaultItemProperties=!1,this.editingDefaultItemProperties=this._editingDefaultItemProperties,this._zoomScale=1,this.zoomScale=this._zoomScale,this._step=16,this._rows=58,this._columns=51,this._mode="hex",this._activeControlGroup="fieldView",this._contextRowExpanded=!1,this._mockDataPanelExpanded=!1,this.mockDataPanelExpanded=this._mockDataPanelExpanded,this._fieldView="spot",this._spotView="dot",this._spotRadius=3,this._centerRadius=1.6,this._centerColor="rgba(34, 83, 66, 0.42)",this._vertexRadius=.8,this._vertexColor="rgba(34, 83, 66, 0.42)",this._triNodeSize=1,this._triNodeColor="rgba(34, 83, 66, 0.42)",this._fieldLineWidth=.5,this._snapTarget="any",this._dragSnap="free",this._createItemMode=!1,this._createGhostVisible=!1,this._createGhostX=0,this._createGhostY=0,this._rebound=!1,this._groupMode="group",this._groupEditingEnabled=!1,this._selectedGroupId=null,this._calloutPlacementPhase=null,this.calloutPlacementPhase=this._calloutPlacementPhase,this._calloutPlacementGroupId=null,this.calloutPlacementGroupId=this._calloutPlacementGroupId,this._calloutHoveredGroupId=null,this.calloutHoveredGroupId=this._calloutHoveredGroupId,this._groupEditAction=null,this._groups=[],this._layerSummaries=[],this.layerSummaries=this._layerSummaries,this._primaryLayerId="",this.primaryLayerId=this._primaryLayerId,this._inspectorGroups=[],this.selectedGroupId=this._selectedGroupId,this._placementGroups=[],this._selectedPropertiesTarget="slot",this.selectedPropertiesTarget=this._selectedPropertiesTarget,this._selectedPlacementGroupId=null,this.selectedPlacementGroupId=this._selectedPlacementGroupId,this._selectedPlacementList=null,this.selectedPlacementList=this._selectedPlacementList,this._selectedPlacementId=null,this.selectedPlacementId=this._selectedPlacementId,this._selectedPlacementProperties=xn(),this.selectedPlacementProperties=this._selectedPlacementProperties,this._slotPropertiesDisabled=!0,this.slotPropertiesDisabled=this._slotPropertiesDisabled,this._activeInspectorTab="groups",this._showGroups=!0,this._groupLayerLocked=!1,this._showContourOverlay=!0,this._paperSize="a4",this.paperSize=this._paperSize,this._showPaperOutline=!0,this.showPaperOutline=this._showPaperOutline,this._showPlacements=!1,this._placementLayerLocked=!1,this._showHexOverlay=!0,this._showHexCoordinates=!1,this._showGeneratedItems=!0,this._showSlottedItems=!0,this._highlightFixedItems=!1,this.highlightFixedItems=this._highlightFixedItems,this._highlightStaticItems=!1,this.highlightStaticItems=this._highlightStaticItems,this._placementCount=10,this._svgFileName="",this._contourOffsetX=0,this._contourOffsetY=0,this._contourScale=1,this._canContinueLastScene=!1,this._sceneStartupVisible=!0,this._sceneOperationMessage=null,this.sceneOperationMessage=this._sceneOperationMessage,this._svgStatus="Контур SVG не завантажено.",this._svgStatusHistory=[this._svgStatus],this.svgStatusHistory=this._svgStatusHistory,this._svgStatusHistoryOpen=!1,this.svgStatusHistoryOpen=this._svgStatusHistoryOpen,this.svgStatus=this._svgStatus,this._itemsData=[],this._mockDataJson="[]",this._mockDataStatus="Тестові дані не згенеровано.",this._mockDataGenerated=!1,this.itemsData=this._itemsData,this._itemSettings=[],this._selectedKeys=[],this._selectionCount=0,this._selectionSummary="Елемент не вибрано.",this._editorValues={r:null,c:null,size:null,sizeUnit:null,iconSize:null,iconSizeUnit:null,labelRadius:null,labelFontSize:null,offsetX:null,offsetY:null,icon:null,label:null,layoutMode:null,labelType:null,labelPosition:null,shape:null,fillEnabled:null,textColor:null,textStrokeEnabled:null,textStrokeColor:null,textStrokeWidth:null,fillColor:null,borderColor:null,borderWidth:null,zIndex:null},this._positionReadouts=[],this._commitCount=0,this._lastCommit="Ще немає зафіксованих переміщень."}cloneSceneSlotProperties(e){const t={};for(const[i,o]of Object.entries(e??{}))o==null||!Yr(i)||Object.assign(t,{[i]:o});return t}get layer(){const e=this.getSceneItemsLayers();if(e.length===0)return null;const t=this.getSceneItemsLayerIdentities(e),i=t.layerById.get(this.primaryLayerId)??(this.itemsLayerElement&&e.includes(this.itemsLayerElement)?this.itemsLayerElement:null)??e.find(s=>!s.hidden)??e[0],o=t.idByLayer.get(i);return(this.itemsLayerElement!==i||this.primaryLayerId!==o||this._createPointerLayer!==i)&&this.setPrimaryItemsLayer(i,o),i}get primaryLayerVisible(){return this.layerSummaries.find(t=>t.primary)?.visible??(this.layer?!this.layer.hidden:!1)}get primaryLayerLocked(){return this.layerSummaries.find(t=>t.primary)?.locked??this.layer?.locked??!1}get primaryLayerName(){const e=this.layerSummaries.find(i=>i.primary);if(e)return e.name;const t=this.layer;return t?this.getItemsLayerName(t,this.getSceneItemsLayers().indexOf(t)):""}svgStatusChanged(e,t){const i=this.svgStatusHistory;e===t||i[i.length-1]===t||(this.svgStatusHistory=[...i,t])}defaultItemPropertiesChanged(e,t){const i=this.cloneSceneSlotProperties(t);if(this._defaultItemProperties=i,!Vo(t,i)){this.defaultItemProperties=i;return}this.syncSceneState(),this.sceneElement&&!this._sceneRestoreInProgress&&Kt.next().then(()=>this.syncSlottedItemSettings(!1,!0))}itemsDataChanged(e,t){this._itemsData=Array.isArray(t)?t.map(i=>({...i,...i.itemProperties===void 0?{}:{itemProperties:{...i.itemProperties}}})):[],this.mockDataJson=JSON.stringify(this._itemsData,null,2),this.mockDataGenerated=this._itemsData.length>0,this.mockDataGenerated||(this.mockDataStatus="Тестові дані не згенеровано."),this.syncItemsDataToLayer(),this._sceneRestoreInProgress||this.scheduleSceneAutosave()}syncItemsDataToLayer(){if(this._sceneRestoreInProgress)return;const e=this.layer;e&&(e.itemsData=this._itemsData)}editingDefaultItemPropertiesChanged(e,t){this._editingDefaultItemProperties=!!t}getSceneItemsLayers(){const e=this.sceneElement??this.shadowRoot?.querySelector("ff-scene");return e?Array.from(e.children).filter(t=>t.localName==="ff-items-layer"):[]}getSceneItemsLayerIdentities(e){const t=new Map,i=new Map,o=[];for(const n of e){const a=n.getAttribute("data-layer");if(a===null||!a.trim()){o.push(n);continue}if(i.has(a))throw new Error(`Multiple items layers resolve to the same identity "${a}".`);t.set(n,a),i.set(a,n)}const s=new Map;for(const n of o){const a=this.createSceneLayerId(new Set(i.keys()));t.set(n,a),i.set(a,n),s.set(n,a)}for(const[n,a]of s)n.setAttribute("data-layer",a);return{idByLayer:t,layerById:i}}getSceneItems(){return this.getSceneItemsLayers().flatMap(e=>{const t=new Set(e.items??[]);for(const i of Array.from(e.children))i instanceof Z&&t.add(i);return Array.from(t).filter(i=>i.parentElement===e)})}syncItemHighlightMarkers(){for(const e of this.getSceneItems())e.toggleAttribute("data-highlight-fixed",this.highlightFixedItems&&e.layoutMode==="fixed"),e.toggleAttribute("data-highlight-static",this.highlightStaticItems&&!e.hasAttribute("data-ff-tri-layer-items-data"))}syncItemCategoryVisibility(){for(const e of this.getSceneItems()){const i=e.hasAttribute("data-ff-tri-layer-items-data")?this.showGeneratedItems:this.showSlottedItems;e.toggleAttribute(cy,!i)}}syncSceneState(){const e=this.sceneElement;if(!e)return;Object.assign(e,{step:this.step,rows:this.rows,columns:this.columns,mode:this.mode,fieldView:this.fieldView,spotView:this.spotView,snapTarget:this.snapTarget,dragSnap:this.dragSnap,groupMode:this.groupMode,groups:this.groups,showGroups:this.showGroups,showPlacements:this.showPlacements,showHexOverlay:this.showHexOverlay,groupEditingEnabled:this.groupEditingEnabled,groupEditAction:this.groupEditAction,defaultItemProperties:this.defaultItemProperties,rebound:this.rebound}),e.style.setProperty("--ff-tri-layer-center-color",this.centerColor),e.style.setProperty("--ff-tri-layer-center-radius",`${this.centerRadius}px`),e.style.setProperty("--ff-tri-layer-spot-radius",String(this.spotRadius)),e.style.setProperty("--ff-tri-layer-vertex-color",this.vertexColor),e.style.setProperty("--ff-tri-layer-vertex-radius",`${this.vertexRadius}px`),e.style.setProperty("--ff-tri-layer-node-size",`${this.triNodeSize}px`),e.style.setProperty("--ff-tri-layer-node-color",this.triNodeColor),e.style.setProperty("--ff-tri-layer-field-line-width",`${this.fieldLineWidth}px`);const t=this.groupLayerElement;t&&Object.assign(t,{step:this.step,rows:this.rows,columns:this.columns,mode:this.mode,dragSnap:this.dragSnap,snapTarget:this.snapTarget,groups:this.groups,showGroups:this.showGroups,showPlacements:this.showPlacements,locked:this.groupLayerLocked,placementsLocked:this.placementLayerLocked,groupEditingEnabled:this.groupEditingEnabled,groupEditAction:this.groupEditAction}),t?.setSelectedGroupId(this.selectedGroupId);for(const i of this.getSceneItemsLayers())Object.assign(i,{defaultItemProperties:this.defaultItemProperties,step:this.step,rows:this.rows,columns:this.columns,mode:this.mode,dragSnap:this.dragSnap,snapTarget:this.snapTarget,groupMode:this.groupMode,rebound:this.rebound,groups:this.groups});this.scheduleSceneAutosave()}handleCreatePointerDownCapture(e){if(this._sceneRestoreInProgress)return;const t=this.layer;if(!this.createItemMode||!t||t.locked||this.layer!==t||e.currentTarget!==t)return;const i=e;if(i.button!==0||i.isPrimary===!1)return;const o=e.composedPath().find(s=>s instanceof Z);!o||o.parentElement!==t||!this.isItemEditable(o)||(e.stopPropagation(),o.dataset.node&&this.selectItem(this.getSceneItemKey(o),i.ctrlKey||i.metaKey))}exitCreateItemMode(){this.createItemMode=!1,this.createGhostVisible=!1}selectItem(e,t){if(this._sceneRestoreInProgress||!this.itemSettings.some(o=>o.key===e)||!this.isItemKeyEditable(e))return;const i=this.selectedPropertiesTarget==="items";this.clearPlacementSelectionForItemSelection(),this.selectedPropertiesTarget="items",t?this.selectedKeys.includes(e)?this.selectedKeys=this.selectedKeys.filter(o=>o!==e):this.selectedKeys=[...this.selectedKeys,e]:this.selectedKeys=i&&this.selectedKeys.length===1&&this.selectedKeys[0]===e?[]:[e],this.syncSelectionState()}syncSelectionState(){const e=this.getSelectableSelectedKeys();(e.length!==this.selectedKeys.length||e.some((a,c)=>a!==this.selectedKeys[c]))&&(this.selectedKeys=e);const t=new Set(e),i=this.getSceneItemsByKey(),o=this.itemSettings.filter(a=>t.has(a.key));this.selectionCount=o.length,this.selectionSummary=o.length===0?"Елемент не вибрано.":o.map(a=>a.name).join(" / ");const s=this.commonValue(o,"sizeUnit"),n=this.commonValue(o,"iconSizeUnit");this.editorValues={r:this.commonValue(o,"r"),c:this.commonValue(o,"c"),size:s===null?null:this.commonValue(o,"size"),sizeUnit:s,iconSize:n===null?null:this.commonValue(o,"iconSize"),iconSizeUnit:n,labelFontSize:this.commonValue(o,"labelFontSize"),offsetX:this.commonValue(o,"offsetX"),offsetY:this.commonValue(o,"offsetY"),icon:this.commonValue(o,"icon"),label:this.commonValue(o,"label"),layoutMode:this.commonValue(o,"layoutMode"),labelType:this.commonValue(o,"labelType"),labelPosition:this.commonValue(o,"labelPosition"),labelRadius:this.commonValue(o,"labelRadius"),shape:this.commonValue(o,"shape"),fillEnabled:this.commonValue(o,"fillEnabled"),textColor:this.commonValue(o,"textColor"),textStrokeEnabled:this.commonValue(o,"textStrokeEnabled"),textStrokeColor:this.commonValue(o,"textStrokeColor"),textStrokeWidth:this.commonValue(o,"textStrokeWidth"),fillColor:this.commonValue(o,"fillColor"),borderColor:this.commonValue(o,"borderColor"),borderWidth:this.commonValue(o,"borderWidth"),zIndex:this.commonValue(o,"zIndex")},this.fillEnabledInput&&(this.fillEnabledInput.checked=this.editorValues.fillEnabled===!0,this.fillEnabledInput.indeterminate=this.isInspectorMixed("fillEnabled"));for(const a of this.itemSettings){const c=i.get(a.key)??null,l=t.has(a.key);c?.toggleAttribute("data-selected",l),c?.setAttribute("aria-selected",String(l)),c?.setAttribute("aria-label",a.name)}}commonValue(e,t){const i=e[0];if(!i)return null;const o=i[t];return e.every(s=>Object.is(s[t],o))?o:null}getHexItem(e){return this.getSceneItemsByKey().get(e)??null}isInspectorMixed(e){return this.selectionCount>1&&this.editorValues[e]===null}editorInputValue(e){const t=this.editorValues[e];return t===null?"":String(t)}editorColorValue(e){const t=this.editorValues[e];if(typeof t=="string"&&/^#[0-9a-f]{6}$/i.test(t))return t;if(this.editingDefaultItemProperties){const s=this.defaultItemProperties[e];if(typeof s=="string"&&/^#[0-9a-f]{6}$/i.test(s))return s}const i=!this.editingDefaultItemProperties&&this.selectedKeys.length===1?this.getHexItem(this.selectedKeys[0]):null,o=this.ownerDocument.defaultView?.getComputedStyle(i??this.ownerDocument.documentElement).getPropertyValue(fy[e]).trim();return o&&/^#[0-9a-f]{6}$/i.test(o)?o:"#aeb9b4"}layoutSwarm(){if(this.placementLayerLocked)return;const t=(this.sceneElement??this.shadowRoot?.querySelector("ff-scene"))?.layoutSwarm(this.placementCount)??0;this.syncSceneState(),this.svgStatus=`Ройове компонування розмістило ${t} позицій у ${this.groups.length} групах.`}layoutColumn(){if(this.placementLayerLocked)return;const t=(this.sceneElement??this.shadowRoot?.querySelector("ff-scene"))?.layoutColumn(this.placementCount)??0;this.syncSceneState(),this.svgStatus=`Ланцюгова розкладка розмістила ${t} позицій у ${this.groups.length} групах.`}startCalloutPlacement(e){if(this.groupLayerLocked)return;if(this.calloutPlacementPhase!==null&&(e===void 0||this.calloutPlacementGroupId===e)){this.cancelCalloutPlacement();return}const t=e??this.selectedGroupId,i=t===null?null:this.groups.find(n=>n.id===t);if(!i)return;if(this.mode!=="hex"){this.svgStatus="Розміщення виноски доступне лише в режимі шестикутної сітки.";return}this.cancelCalloutPlacement(),this.exitCreateItemMode(),this._createPointerClient=null,this.clearCreateGhost();const o=this.sceneElement;if(!o)return;this._calloutPreviousCursor={value:o.style.getPropertyValue(Ui),priority:o.style.getPropertyPriority(Ui)},o.style.setProperty(Ui,hy),o.setAttribute("data-callout-placement",""),this._calloutPointerScene=o,o.addEventListener("click",this._handleCalloutSceneClickCapture,!0),o.addEventListener("pointerdown",this._handleCalloutPointerCapture,!0),o.addEventListener("pointerup",this._handleCalloutPointerCapture,!0),o.addEventListener("pointercancel",this._handleCalloutPointerCapture,!0);const s="place-anchor";this._calloutPlacementPhase=s,this.calloutPlacementPhase=s,this._calloutPlacementGroupId=i.id,this.calloutPlacementGroupId=this._calloutPlacementGroupId,this.syncCalloutPlacementAction(),this.setCalloutHoveredGroup(null),this.groupLayerElement?.setCalloutPreview(i.id,null),this.refreshGroupInspector()}cancelCalloutPlacement(){const e=this._calloutPointerScene;if(this._calloutPlacementPhase=null,this.calloutPlacementPhase=this._calloutPlacementPhase,this._calloutPlacementGroupId=null,this.calloutPlacementGroupId=null,this.syncCalloutPlacementAction(),this.setCalloutHoveredGroup(null),this.refreshGroupInspector(),this.groupLayerElement?.setCalloutPreview(null,null),!e){this._calloutPreviousCursor=null;return}e.removeEventListener("click",this._handleCalloutSceneClickCapture,!0),e.removeEventListener("pointerdown",this._handleCalloutPointerCapture,!0),e.removeEventListener("pointerup",this._handleCalloutPointerCapture,!0),e.removeEventListener("pointercancel",this._handleCalloutPointerCapture,!0),e.removeAttribute("data-callout-placement"),this._calloutPreviousCursor?.value?e.style.setProperty(Ui,this._calloutPreviousCursor.value,this._calloutPreviousCursor.priority):e.style.removeProperty(Ui),this._calloutPointerScene=null,this._calloutPreviousCursor=null}removeCallout(e){const t=this.groups.find(i=>i.id===e);t?.callout&&(this.calloutPlacementGroupId===e&&this.cancelCalloutPlacement(),this.selectedPlacementGroupId===e&&this.selectedPlacementList==="callout"&&this.clearSelectedPlacementState(),this._calloutThresholds.set(e,t.callout.activationThreshold??1),this._calloutAlgorithms.set(e,this.getCalloutAlgorithm(t)),this.groups=this.groups.map(i=>i.id===e?{...It(i),callout:void 0}:It(i)),this._expandedCalloutGroupIds.delete(e),this.syncSceneState(),this.refreshGroupInspector(),this.refreshPlacementGroups(e),this.scheduleSceneAutosave())}createCalloutForGroup(e){if(this.groupLayerLocked||this._sceneRestoreInProgress)return!1;if(this.mode!=="hex")return this.svgStatus="Створення виноски доступне лише в режимі шестикутної сітки.",!1;const t=this.groups.find(o=>o.id===e);if(!t)return!1;if(t.callout)return this.showCalloutManagement(e),!0;if(!this.findAvailableCalloutAnchor(t))return this.svgStatus=`Для групи «${t.name||t.id}» немає доступної комірки для якоря виноски.`,!1;const i={point:null,activationThreshold:this._calloutThresholds.get(e)??1,algorithm:this.getCalloutAlgorithm(t),mixedMode:!1,placements:[]};return this.groups=this.groups.map(o=>o.id===e?{...It(o),callout:i}:It(o)),this._expandedCalloutGroupIds.delete(e),this.syncSceneState(),this.refreshGroupInspector(),this.refreshPlacementGroups(e),this.startCalloutPlacement(e),this.scheduleSceneAutosave(),!0}showCalloutManagement(e){if(!this.groups.some(i=>i.id===e))return;this._expandedCalloutGroupIds.add(e);const t=this.getCalloutSettingsPopover(e);t&&!t.matches(":popover-open")&&(t.showPopover(),this.positionCalloutSettingsPopover(e,t)),this.shadowRoot?.querySelector(`[data-callout-settings-toggle][data-group-id="${e}"]`)?.setAttribute("aria-expanded","true")}toggleCalloutManagement(e){if(!this.groups.some(i=>i.id===e))return;const t=this.getCalloutSettingsPopover(e);if(t){if(t.matches(":popover-open")){t.hidePopover();return}this._expandedCalloutGroupIds.add(e),t.showPopover(),this.positionCalloutSettingsPopover(e,t)}}handleCalloutSettingsToggle(e,t){const i=t.currentTarget;i instanceof HTMLElement&&(i.matches(":popover-open")?(this._expandedCalloutGroupIds.add(e),this.positionCalloutSettingsPopover(e,i)):this._expandedCalloutGroupIds.delete(e),this.shadowRoot?.querySelector(`[data-callout-settings-toggle][data-group-id="${e}"]`)?.setAttribute("aria-expanded",String(i.matches(":popover-open"))))}getCalloutSettingsPopover(e){return Array.from(this.shadowRoot?.querySelectorAll("[data-callout-settings-popover]")??[]).find(t=>t.dataset.groupId===e)??null}positionOpenCalloutSettingsPopover(){const e=this.shadowRoot?.querySelectorAll("[data-callout-settings-popover]:popover-open")??[];for(const t of e){const i=t.dataset.groupId;i&&this.positionCalloutSettingsPopover(i,t)}}positionCalloutSettingsPopover(e,t){const i=Array.from(this.shadowRoot?.querySelectorAll("[data-callout-settings-toggle]")??[]).find(m=>m.dataset.groupId===e),o=this.ownerDocument.defaultView;if(!i||!o)return;const s=8,n=4;t.style.position="fixed",t.style.inset="auto",t.style.margin="0",t.style.maxWidth=`${Math.max(0,o.innerWidth-s*2)}px`,t.style.maxHeight=`${Math.max(0,o.innerHeight-s*2)}px`,t.style.overflowY="auto",t.style.zIndex="1000";const a=i.getBoundingClientRect(),c=t.getBoundingClientRect(),l=Math.max(s,o.innerWidth-s-c.width),d=a.left+c.width<=o.innerWidth-s?a.left:a.right-c.width,u=Math.min(Math.max(s,d),l),p=a.bottom+n,h=p+c.height<=o.innerHeight-s?p:a.top-n-c.height,f=Math.max(s,o.innerHeight-s-c.height),g=Math.min(Math.max(s,h),f);t.style.left=`${u}px`,t.style.top=`${g}px`}setCalloutMixedMode(e,t){const i=this.groups.find(o=>o.id===e);!i?.callout||typeof t!="boolean"||i.callout.mixedMode===t||(this.groups=this.groups.map(o=>o.id===e?{...It(o),callout:{...o.callout,mixedMode:t}}:It(o)),this.syncSceneState(),(this.sceneElement??this.shadowRoot?.querySelector("ff-scene"))?.layoutSwarm(this.placementCount,e),this.syncSceneState(),this.refreshGroupInspector(),this.refreshPlacementGroups(e),this.scheduleSceneAutosave())}handleCalloutMixedModeChange(e){const t=e.target;if(!(t instanceof HTMLInputElement)||!t.hasAttribute("data-callout-mixed-mode"))return;e.stopPropagation();const i=t.dataset.groupId??t.closest("[data-group-id]")?.dataset.groupId;i&&this.setCalloutMixedMode(i,t.checked)}handleCalloutThresholdChange(e){const t=e.target;if(!(t instanceof HTMLInputElement)||!t.hasAttribute("data-callout-threshold"))return;e.stopPropagation();const i=t.dataset.groupId??t.closest("[data-group-id]")?.dataset.groupId,o=this.groups.find(a=>a.id===i);if(!o)return;const s=o.callout?.activationThreshold??this._calloutThresholds.get(o.id)??1,n=t.valueAsNumber;if(!Number.isSafeInteger(n)||n<0){t.setAttribute("aria-invalid","true"),t.value=String(s),this.svgStatus="Некоректний поріг виноски не застосовано: введіть ціле число, не менше нуля.";return}t.removeAttribute("aria-invalid"),o.callout?(this.groups=this.groups.map(a=>a.id===o.id?{...It(a),callout:{...a.callout,activationThreshold:n}}:It(a)),this.syncSceneState(),this.scheduleSceneAutosave()):this._calloutThresholds.set(o.id,n),this.refreshGroupInspector()}handleCalloutAlgorithmChange(e){const t=e.target;if(!(t instanceof HTMLSelectElement)||!t.hasAttribute("data-callout-algorithm"))return;e.stopPropagation();const i=t.dataset.groupId??t.closest("[data-group-id]")?.dataset.groupId,o=this.groups.find(n=>n.id===i);if(!o)return;if(!gy(t.value)){t.setAttribute("aria-invalid","true"),t.value=this.getCalloutAlgorithm(o),this.svgStatus="Некоректний алгоритм виноски не застосовано.";return}if(t.removeAttribute("aria-invalid"),this.getCalloutAlgorithm(o)===t.value)return;if(!o.callout){this._calloutAlgorithms.set(o.id,t.value),this.refreshGroupInspector();return}const s=t.value;this.groups=this.groups.map(n=>n.id===o.id?{...It(n),callout:{...n.callout,algorithm:s}}:It(n)),this.syncSceneState(),(this.sceneElement??this.shadowRoot?.querySelector("ff-scene"))?.layoutSwarm(this.placementCount,o.id),this.syncSceneState(),this.refreshGroupInspector(),this.refreshPlacementGroups(o.id),this.scheduleSceneAutosave()}handleCalloutPointerMove(e){const t=this.calloutPlacementPhase;if(t===null){this.sceneElement?.refreshCalloutDecorations();return}const i=e;if(t==="select-group"){this.setCalloutHoveredGroup(this.findCalloutGroupAtClient(i.clientX,i.clientY));return}const o=this.calloutPlacementGroupId;if(o===null){this.cancelCalloutPlacement();return}const s=this.getLayerPointFromClient(i.clientX,i.clientY);this.groupLayerElement?.setCalloutPreview(o,s)}handleCalloutPointerLeave(e){if(this.calloutPlacementPhase===null)return;this.setCalloutHoveredGroup(null);const t=this.calloutPlacementGroupId;t!==null&&this.groupLayerElement?.setCalloutPreview(t,null)}handleCalloutSceneClick(e){this._suppressedGroupSelectionPointerId=null;const t=this.calloutPlacementPhase;if(t===null||(e.preventDefault(),e.stopPropagation(),this._sceneRestoreInProgress))return;const i=e;if(t==="select-group"){const l=this.findCalloutGroupAtClient(i.clientX,i.clientY);if(this.setCalloutHoveredGroup(l),l===null)return;this._calloutPlacementGroupId=l,this.calloutPlacementGroupId=l,this._calloutPlacementPhase="place-anchor",this.calloutPlacementPhase=this._calloutPlacementPhase,this.setCalloutHoveredGroup(null),this.groupLayerElement?.setCalloutPreview(l,this.getLayerPointFromClient(i.clientX,i.clientY)),this.refreshGroupInspector();return}const o=this.calloutPlacementGroupId;if(o===null){this.cancelCalloutPlacement();return}const s=this.groups.find(l=>l.id===o);if(!s){this.cancelCalloutPlacement();return}const n=this.resolveCalloutSite(i.clientX,i.clientY);if(!n)return;const a=s.callout?.activationThreshold??this._calloutThresholds.get(o)??1;this.groups=this.groups.map(l=>l.id===o?{...It(l),callout:{point:{...n},activationThreshold:a,algorithm:this.getCalloutAlgorithm(s),mixedMode:s.callout?.mixedMode??!1,placements:(s.callout?.placements??[]).map(d=>kt(d))}}:It(l)),this._calloutThresholds.delete(o),this._calloutAlgorithms.delete(o),this.cancelCalloutPlacement(),this.syncSceneState(),(this.sceneElement??this.shadowRoot?.querySelector("ff-scene"))?.layoutSwarm(this.placementCount,o),this.syncSceneState(),this.refreshGroupInspector(),this.refreshPlacementGroups(o),this.scheduleSceneAutosave()}setCalloutHoveredGroup(e){const t=this.calloutPlacementPhase==="select-group"&&e!==null&&this.groups.some(i=>i.id===e)?e:null;this._calloutHoveredGroupId=t,this.calloutHoveredGroupId=t,this.groupLayerElement?.setCalloutHoverGroup(t)}get svgReady(){return this._svgReady}get selectedGroupCalloutSettings(){return this.inspectorGroups?.find(e=>e.id===this.selectedGroupId)??null}get maxScenePixelValue(){return F}get maxSpotRadius(){return Bo}get maxRows(){return this.maxGridDimensionFor(this.columns)}get maxColumns(){return this.maxGridDimensionFor(this.rows)}get minItemRow(){return Mt(this.mode,this.rows,this.columns).minItemRow}get maxItemRow(){return Mt(this.mode,this.rows,this.columns).maxItemRow}get minItemColumn(){return Mt(this.mode,this.rows,this.columns).minItemColumn}get maxItemColumn(){return Mt(this.mode,this.rows,this.columns).maxItemColumn}get maxItemSize(){return this.editorValues.sizeUnit!=="%"||!Number.isFinite(this.step)||this.step<=0?F:F/this.step*100}get maxIconSize(){if(this.editorValues.iconSizeUnit!=="%")return F;let e=Number.MAX_VALUE;for(const t of this.getSelectedItemSettings()){const i=st(t.size,t.sizeUnit,this.step),o=gr(i,this.step);if(!Number.isFinite(o)||o<0)return F;if(o===0)continue;const s=F/o*100;Number.isFinite(s)&&(e=Math.min(e,s))}return e}get hexPropertiesLimits(){return{r:{min:this.minItemRow,max:this.maxItemRow,step:1},c:{min:this.minItemColumn,max:this.maxItemColumn,step:1},offsetX:{min:-this.maxScenePixelValue,max:this.maxScenePixelValue,step:.1},offsetY:{min:-this.maxScenePixelValue,max:this.maxScenePixelValue,step:.1},size:{min:1,max:this.maxItemSize,step:.5},iconSize:{min:0,max:this.maxIconSize,step:.5},labelRadius:{min:0,max:F,step:.5},labelFontSize:{min:0,max:this.maxScenePixelValue,step:.5},borderWidth:{min:0,max:this.maxScenePixelValue,step:.5},textStrokeWidth:{min:0,max:this.maxScenePixelValue,step:.5},zIndex:{min:1,max:this.maxScenePixelValue,step:1}}}get hexPropertiesMixedProperties(){return dc.filter(e=>this.isInspectorMixed(e))}get hexPropertiesInheritedProperties(){const e=this.getSelectedItemSettings();return dc.filter(t=>Yr(t)&&(e.length===0||e.every(i=>{const o=this.getHexItem(i.key),s=o?this.getItemsLayerForItem(o):null;return o!==null&&s?.isItemPropertyInherited(o,t)===!0})))}maxGridDimensionFor(e){const t=Number.isFinite(e)&&e>0?Math.floor(mi/e):Oo;return Math.max(1,Math.min(Oo,t))}getItemsLayerForItem(e){return this.getSceneItemsLayers().find(t=>t===e.parentElement)??null}isItemEditable(e){return this.isItemLayerEditable(e)&&!e.locked}isItemLayerEditable(e){const t=this.getItemsLayerForItem(e);return t!==null&&!t.locked}isItemSelectable(e){return this.isItemLayerEditable(e)}isItemKeyEditable(e){const t=this.getHexItem(e);return t!==null&&this.isItemEditable(t)}isItemKeySelectable(e){const t=this.getHexItem(e);return t!==null&&this.isItemSelectable(t)}getEditableSelectedKeys(){return this.selectedKeys.filter(e=>this.isItemKeyEditable(e))}getSelectableSelectedKeys(){return this.selectedKeys.filter(e=>this.isItemKeySelectable(e))}getSelectedItemSettings(){const e=new Set(this.getEditableSelectedKeys());return this.itemSettings.filter(t=>e.has(t.key))}getSelectedGeneratedItemKeys(){return this.getSelectedItemSettings().flatMap(e=>{const t=this.getHexItem(e.key),i=t?this.getItemsLayerForItem(t):null;return t&&i?.isGeneratedItem(t)?[e.key]:[]})}get selectedLayoutModeDisabled(){return this.getSelectedGeneratedItemKeys().length===0}reportInvalidNumericInput(e,t,i,o=!1){e.value!==""&&(this.svgStatus=`Некоректне значення поля «${e.name}»: ${t}.`,i!==void 0&&!(o&&e.validity.rangeUnderflow)&&(e.value=i===null?"":String(i)))}readBoundedPixelValue(e,t){const i=e.valueAsNumber;return!Number.isFinite(i)||i<=0||i>F?(this.reportInvalidNumericInput(e,`має бути більшим за 0 і не перевищувати ${F} пікселів`,t,!0),null):i}itemDimensionsWithinPixelLimit(e){return this.itemSettings.every(t=>{const i=st(t.size,t.sizeUnit,e),o=gr(i,e),s=st(t.iconSize,t.iconSizeUnit,o);return Number.isFinite(i)&&i>=0&&i<=F&&Number.isFinite(s)&&s>=0&&s<=F})}scenePositionsFitGrid(e,t,i=this.mode){const o=Mt(i,e,t);return this.groups.every(s=>s.centers.every(n=>o.isGroupCenterValid(n.r,n.c))&&(s.placements===void 0||s.placements.every(n=>o.isGroupCenterValid(n.r,n.c)))&&(!s.callout||i==="hex"&&(s.callout.point===null||o.isGroupCenterValid(s.callout.point.r,s.callout.point.c))))&&this.getSceneItems().every(s=>o.isItemPositionValid(s.r??0,s.c??0))}rejectSceneGridChange(e,t){this._revertingSceneGridChange=!0;try{e()}finally{this._revertingSceneGridChange=!1}this.syncSceneState(),this.svgStatus=t}rowsChanged(e,t){if(this._revertingSceneGridChange||this._sceneRestoreInProgress||e===t)return;const i=this.maxRows;if(!Number.isSafeInteger(t)||t<1||t>i){this.rejectSceneGridChange(()=>{this.rows=e},`Зміну кількості рядків відхилено: потрібне ціле число від 1 до ${i} з урахуванням обмежень сітки.`);return}if(!this.scenePositionsFitGrid(t,this.columns)){this.rejectSceneGridChange(()=>{this.rows=e},"Зміну кількості рядків відхилено: координати наявних груп або елементів виходять за межі сітки.");return}this._preserveLoadedGroups=!1,this.syncSceneState(),this.scheduleSvgApply(!0),this.scheduleSceneAutosave()}columnsChanged(e,t){if(this._revertingSceneGridChange||this._sceneRestoreInProgress||e===t)return;const i=this.maxColumns;if(!Number.isSafeInteger(t)||t<1||t>i){this.rejectSceneGridChange(()=>{this.columns=e},`Зміну кількості стовпців відхилено: потрібне ціле число від 1 до ${i} з урахуванням обмежень сітки.`);return}if(!this.scenePositionsFitGrid(this.rows,t)){this.rejectSceneGridChange(()=>{this.columns=e},"Зміну кількості стовпців відхилено: координати наявних груп або елементів виходять за межі сітки.");return}this._preserveLoadedGroups=!1,this.syncSceneState(),this.scheduleSvgApply(!0),this.scheduleSceneAutosave()}stepChanged(e,t){if(!(this._revertingSceneGridChange||this._sceneRestoreInProgress||e===t)){if(!Number.isSafeInteger(t)||t<1||t>F){this.rejectSceneGridChange(()=>{this.step=e},`Зміну кроку сітки відхилено: потрібне безпечне ціле число від 1 до ${F} пікселів.`);return}if(!this.itemDimensionsWithinPixelLimit(t)){this.rejectSceneGridChange(()=>{this.step=e},`Зміну кроку сітки відхилено: один з розмірів елемента перевищить ${F} пікселів.`);return}this._preserveLoadedGroups=!1,this.syncSceneState(),this.scheduleSvgApply(!0),this.scheduleSceneAutosave()}}setDimension(e){const t=e.currentTarget,i=t.valueAsNumber,o=t.name==="step"?this.step:t.name==="rows"?this.rows:t.name==="columns"?this.columns:void 0;if(!Number.isFinite(i)){this.reportInvalidNumericInput(t,"має бути скінченним числом",o);return}if(!Number.isSafeInteger(i)){this.reportInvalidNumericInput(t,"має бути безпечним цілим числом",o);return}if(i<1){this.reportInvalidNumericInput(t,"має бути більшим за 0",o);return}switch(t.name){case"step":if(i>F){this.reportInvalidNumericInput(t,`не може перевищувати ${F} пікселів`,this.step);return}if(!this.itemDimensionsWithinPixelLimit(i)){this.reportInvalidNumericInput(t,`перевищить ${F} пікселів для одного з розмірів елемента`,this.step);return}this.step=i;break;case"rows":if(i>this.maxRows){this.reportInvalidNumericInput(t,`не може перевищувати ${this.maxRows} рядків за поточної кількості стовпців та обмеження у ${mi} комірок`,this.rows);return}if(!this.scenePositionsFitGrid(i,this.columns)){this.reportInvalidNumericInput(t,"виключить координати наявної групи або елемента",this.rows);return}this.rows=i;break;case"columns":if(i>this.maxColumns){this.reportInvalidNumericInput(t,`не може перевищувати ${this.maxColumns} стовпців за поточної кількості рядків та обмеження у ${mi} комірок`,this.columns);return}if(!this.scenePositionsFitGrid(this.rows,i)){this.reportInvalidNumericInput(t,"виключить координати наявної групи або елемента",this.columns);return}this.columns=i;break;default:return}i!==o&&(this._preserveLoadedGroups=!1),this.syncSceneState(),i!==o&&t.name==="step"&&this.scheduleSvgApply(!0)}setMode(e){if(this.mode!==e&&!this.scenePositionsFitGrid(this.rows,this.columns,e)){const t=e==="tri"?"трикутної":"шестикутної";this.svgStatus=`Перехід до ${t} сітки не виконано: координати наявних груп або елементів не відповідають правилам цього режиму.`;return}this.mode!==e&&(this._preserveLoadedGroups=!1),this.mode=e,this.syncSceneState(),this.scheduleSvgApply(!0),this.updateCreateGhost()}modeChanged(e,t){if(!this._revertingSceneGridChange){if(t==="tri"&&this.calloutPlacementPhase!==null&&this.cancelCalloutPlacement(),!this._sceneRestoreInProgress&&t!==e){if(!this.scenePositionsFitGrid(this.rows,this.columns,t)){const i=t==="tri"?"трикутної":"шестикутної";this.rejectSceneGridChange(()=>{this.mode=e},`Перехід до ${i} сітки не виконано: координати наявних груп або елементів не відповідають правилам цього режиму.`);return}this._preserveLoadedGroups=!1}t==="tri"&&(this.groupEditingEnabled=!1,this.groupEditAction=null),this.syncSceneState(),this.scheduleSvgApply(!0),this.updateCreateGhost(),this._sceneRestoreInProgress||this.scheduleSceneAutosave()}}groupEditingEnabledChanged(e,t){if(t&&this.mode!=="hex"){this.groupEditingEnabled=!1;return}t||(this.groupEditAction=null),this.syncSceneState()}calloutPlacementPhaseChanged(){this.syncCalloutPlacementAction()}calloutPlacementGroupIdChanged(){this.syncCalloutPlacementAction()}syncCalloutPlacementAction(){const e=this.shadowRoot?.querySelector("[data-callout-action-start]");if(!e)return;const t=this.calloutPlacementPhase!==null&&this.calloutPlacementGroupId===this.selectedGroupId;e.setAttribute("aria-pressed",String(t));const i=this.selectedGroupId===null?null:this.groups.find(o=>o.id===this.selectedGroupId);e.setAttribute("aria-label",t?"Скасувати розміщення виноски":i?.callout?"Перемістити прив'язку виноски":"Створити прив'язку виноски")}selectedGroupIdChanged(e,t){if(t!==null&&Array.isArray(this.groups)&&!this.groups.some(i=>i.id===t)){this.selectedGroupId=null;return}this._selectedGroupId=t,this.calloutPlacementPhase!==null&&this.calloutPlacementGroupId!==t&&this.cancelCalloutPlacement(),this.syncCalloutPlacementAction(),this.groupLayerElement?.setSelectedGroupId(t),Array.isArray(this.groups)&&this.refreshGroupInspector()}selectControlGroup(e){const t=e==="dragSnap"||e==="rebound"?"movementArea":e;return this.mockDataPanelExpanded=!1,this.activeControlGroup=t,this.contextRowExpanded=this.hasContextControls,this.syncRibbonContextPanels(),!0}toggleMockDataPanel(){this.contextRowExpanded=!1,this.mockDataPanelExpanded=!this.mockDataPanelExpanded,this.syncRibbonContextPanels()}activeControlGroupChanged(){this.hasContextControls||(this.contextRowExpanded=!1),this.syncRibbonContextPanels()}contextRowExpandedChanged(e,t){t&&(this.mockDataPanelExpanded=!1),this.syncRibbonContextPanels()}mockDataPanelExpandedChanged(e,t){t&&(this.contextRowExpanded=!1),this.syncRibbonContextPanels()}getOpenRibbonContextPanel(){const e=this.mockDataPanelExpanded?"mockData":this.activeControlGroup;return!this.mockDataPanelExpanded&&(!this.contextRowExpanded||!this.hasContextControls)?null:this.shadowRoot?.querySelector(`.c-row[data-c-row="${e}"]`)??null}isRibbonContextTriggerPath(e){return e.some(t=>t instanceof Element&&this.shadowRoot?.contains(t)===!0&&t.matches("[data-c-trigger]"))}syncRibbonContextPanels(){if(!this.isConnected)return;const e=this.shadowRoot;if(!e)return;const t=this.contextRowExpanded&&this.hasContextControls;for(const i of e.querySelectorAll("[data-c-trigger]")){const o=i.dataset.cTrigger,s=o==="mockData"?this.mockDataPanelExpanded:t&&o===this.activeControlGroup;i.setAttribute("aria-expanded",String(s))}for(const i of e.querySelectorAll(".c-row[data-c-row]")){const o=i.dataset.cRow;if(!(o==="mockData"?this.mockDataPanelExpanded:t&&o===this.activeControlGroup)){typeof i.hidePopover=="function"&&i.matches(":popover-open")&&i.hidePopover(),i.hidden=!0;continue}i.hidden=!1,typeof i.showPopover=="function"&&!i.matches(":popover-open")&&i.showPopover(),this.positionRibbonContextPanel(i)}}positionOpenRibbonContextPanel(){const e=this.mockDataPanelExpanded?"mockData":this.activeControlGroup;if(!this.mockDataPanelExpanded&&(!this.contextRowExpanded||!this.hasContextControls))return;const t=this.shadowRoot?.querySelector(`.c-row[data-c-row="${e}"]`);t&&!t.hidden&&this.positionRibbonContextPanel(t)}positionRibbonContextPanel(e){const t=e.dataset.cRow,i=t?this.shadowRoot?.querySelector(`[data-c-trigger="${t}"]`):null,o=t==="mockData"?i?.closest(".mock-data-tools"):i?.closest(".c-control-anchor"),s=this.ownerDocument.defaultView;if(!i||!s)return;const n=8,a=4;e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.right="auto",e.style.bottom="auto",e.style.margin="0",e.style.maxWidth=`${Math.max(0,s.innerWidth-n*2)}px`,e.style.maxHeight=`${Math.max(0,s.innerHeight-n*2)}px`,e.style.overflowY="auto",e.style.zIndex="1000";const c=i.getBoundingClientRect(),l=o?.getBoundingClientRect(),d=e.getBoundingClientRect(),u=Math.max(n,s.innerWidth-n-d.width),p=c.left+d.width<=s.innerWidth-n?c.left:c.right-d.width,h=Math.min(Math.max(n,p),u),f=Math.max(n,s.innerHeight-n-d.height),g=(l?.bottom??c.bottom)+a,m=g+d.height<=s.innerHeight-n?g:c.top-a-d.height,b=Math.min(Math.max(n,m),f);e.style.left=`${h}px`,e.style.top=`${b}px`}get hasContextControls(){return this.activeControlGroup==="mode"||this.activeControlGroup==="contourOverlay"?!0:this.activeControlGroup==="fieldView"?this.mode==="tri"||this.mode==="hex"&&(this.fieldView==="dot"||this.fieldView==="full"||this.fieldView==="spot"):!1}setFieldView(e){this.fieldView=e,this.syncSceneState()}setSpotView(e){this.spotView=e,this.syncSceneState()}setSpotRadius(e){const t=e.currentTarget,i=t.valueAsNumber;if(!Number.isFinite(i)||i<=0||i>Bo){this.reportInvalidNumericInput(t,`має бути більшим за 0 і не перевищувати ${Bo}`,this.spotRadius,!0);return}this.spotRadius=i,this.syncSceneState()}setGridAppearance(e){const t=e.currentTarget,i=o=>/^#[\da-f]{6}$/i.test(o)?`rgba(${[1,3,5].map(n=>Number.parseInt(o.slice(n,n+2),16)).join(", ")}, 0.42)`:null;switch(t.name){case"centerRadius":{const o=this.readBoundedPixelValue(t,this.centerRadius);o!==null&&(this.centerRadius=o);break}case"centerColor":{const o=i(t.value);o!==null&&(this.centerColor=o);break}case"vertexRadius":{const o=this.readBoundedPixelValue(t,this.vertexRadius);o!==null&&(this.vertexRadius=o);break}case"vertexColor":{const o=i(t.value);o!==null&&(this.vertexColor=o);break}case"triNodeSize":{const o=this.readBoundedPixelValue(t,this.triNodeSize);o!==null&&(this.triNodeSize=o);break}case"triNodeColor":{const o=i(t.value);o!==null&&(this.triNodeColor=o);break}case"fieldLineWidth":{const o=this.readBoundedPixelValue(t,this.fieldLineWidth);o!==null&&(this.fieldLineWidth=o);break}}this.syncSceneState()}fieldViewChanged(){this.syncSceneState()}spotViewChanged(){this.syncSceneState()}snapTargetChanged(){this.syncSceneState(),this.updateCreateGhost()}dragSnapChanged(){this.syncSceneState(),this.updateCreateGhost()}groupModeChanged(){this.syncSceneState(),this.updateCreateGhost()}showGroupsChanged(){this.syncSceneState(),this.scheduleGroupVisibilityRestore()}showPlacementsChanged(){this.syncSceneState()}showHexOverlayChanged(){this.syncSceneState()}showGeneratedItemsChanged(){this.syncItemCategoryVisibility(),this.sceneElement?.refreshCalloutDecorations(),this.scheduleSceneAutosave()}showSlottedItemsChanged(){this.syncItemCategoryVisibility(),this.sceneElement?.refreshCalloutDecorations(),this.scheduleSceneAutosave()}highlightFixedItemsChanged(){this.syncItemHighlightMarkers(),this.scheduleSceneAutosave()}highlightStaticItemsChanged(){this.syncItemHighlightMarkers(),this.scheduleSceneAutosave()}reboundChanged(){this.syncSceneState()}groupsChanged(){this._pendingSvgGroupAssignment=!1;const e=new Set(this.groups.map(t=>t.id));for(const t of this._calloutThresholds.keys())e.has(t)||this._calloutThresholds.delete(t);for(const t of this._calloutAlgorithms.keys())e.has(t)||this._calloutAlgorithms.delete(t);for(const t of this._expandedCalloutGroupIds)e.has(t)||this._expandedCalloutGroupIds.delete(t);this.selectedGroupId!==null&&!e.has(this.selectedGroupId)&&(this.selectedGroupId=null),this.syncSceneState(),this.refreshGroupInspector(),this.refreshPlacementGroups(),this.scheduleGroupVisibilityRestore()}groupEditActionChanged(e,t){if(t!==null&&t!=="add"&&t!=="remove"){this.groupEditAction=null;return}this.syncSceneState()}setSnapTarget(e){this.snapTarget=e,this.syncSceneState(),this.updateCreateGhost()}toggleSnapTarget(e){if(this.dragSnap!=="live")return;const t=e==="center"?"vertex":"center",i=this.snapTarget==="any"||this.snapTarget===e;this.setSnapTarget(i?t:"any")}setDragSnap(e){this.dragSnap!=="live"&&e==="live"&&(this.snapTarget="center"),this.dragSnap=e,this.syncSceneState(),this.updateCreateGhost()}setGroupMode(e){this.groupMode=e,this.syncSceneState(),this.updateCreateGhost()}toggleGroupOverlay(){this.showGroups=!this.showGroups,this.syncSceneState(),this.updateCreateGhost()}toggleGroupLayerLock(){this._sceneRestoreInProgress||!this.groupLayerElement||(this.groupLayerLocked=!this.groupLayerLocked,this.groupLayerLocked&&(this.selectedGroupId=null,this.groupEditingEnabled=!1,this.groupEditAction=null,this.cancelCalloutPlacement()),this.syncSceneState(),this.scheduleSceneAutosave())}toggleGroupEditing(){if(!this.groupLayerLocked){if(this.mode!=="hex"){this.groupEditingEnabled=!1,this.groupEditAction=null,this.syncSceneState();return}this.groupEditingEnabled=!this.groupEditingEnabled,this.syncSceneState()}}selectGroup(e){}setGroupEditAction(e){this.groupLayerLocked||(e===null?this.groupEditAction=null:(e==="add"||e==="remove")&&this.mode==="hex"&&this.groupEditingEnabled?this.groupEditAction=e:this.groupEditAction=null,this.syncSceneState())}setGroupAddMode(){this.setGroupEditAction("add")}setGroupRemoveMode(){this.setGroupEditAction("remove")}togglePlacementOverlay(){this.showPlacements=!this.showPlacements,this.syncSceneState()}togglePlacementLayerLock(){this._sceneRestoreInProgress||!this.groupLayerElement||(this.placementLayerLocked=!this.placementLayerLocked,this.placementLayerLocked&&(this.clearSelectedPlacementState(),this.refreshPlacementGroups()),this.syncSceneState(),this.scheduleSceneAutosave())}toggleHexOverlay(){this.showHexOverlay=!this.showHexOverlay,this.syncSceneState()}toggleHexCoordinates(){this.showHexCoordinates=!this.showHexCoordinates}toggleGeneratedItems(){this.showGeneratedItems=!this.showGeneratedItems}toggleSlottedItems(){this.showSlottedItems=!this.showSlottedItems}toggleHighlightFixedItems(){this.highlightFixedItems=!this.highlightFixedItems}toggleHighlightStaticItems(){this.highlightStaticItems=!this.highlightStaticItems}toggleDashboard(){const e=this.dashboardDrawer;e&&(e.dialog.open?e.hide():e.show())}closeDashboard(){this.dashboardDrawer?.hide()}setPlacementCount(e){const t=e.target;if(!(t instanceof HTMLInputElement))return;const i=t.valueAsNumber;if(!Number.isSafeInteger(i)||i<1){this.svgStatus="Некоректну кількість позицій не застосовано: введіть додатне ціле число.",t.value=String(this.placementCount);return}this.placementCount=i}readLastScene(){const e=this.ownerDocument.defaultView;if(!e)return this._lastAutosavedScene=null,this.canContinueLastScene=!1,null;try{const t=e.localStorage.getItem(ac);if(t===null||new Blob([t]).size>jr)return this._lastAutosavedScene=null,this.canContinueLastScene=!1,null;const i=this.parseSceneDocument(JSON.parse(t));return this._lastAutosavedScene=t,this.canContinueLastScene=!0,i}catch{return this._lastAutosavedScene=null,this.canContinueLastScene=!1,null}}continueLastScene(){const e=++this._sceneLoadRequestId;this.sceneOperationMessage="Читання останньої сцени...",this._svgReady=this.continueLastSceneOperation(e)}waitForSceneOperationPaint(){const e=this.ownerDocument.defaultView;return e?typeof e.requestAnimationFrame!="function"?new Promise(t=>e.setTimeout(t,0)):new Promise(t=>{let i=!1,o;const s=()=>{i||(i=!0,o!==void 0&&e.clearTimeout(o),t())};o=e.setTimeout(s,100),e.requestAnimationFrame(()=>{e.requestAnimationFrame(s)})}):Promise.resolve()}async continueLastSceneOperation(e){try{if(await this.waitForSceneOperationPaint(),e!==this._sceneLoadRequestId)return;const t=this.readLastScene();if(!t||(this.sceneStartupVisible=!1,this._autosaveEnabled=this.isConnected,this.svgStatus="Відновлення останньої сцени...",this.sceneOperationMessage="Відновлення останньої сцени...",await this.waitForSceneOperationPaint(),e!==this._sceneLoadRequestId))return;await this.restoreScene(t,e),e===this._sceneLoadRequestId&&(this.svgStatus="Останню сцену відновлено.")}catch(t){e===this._sceneLoadRequestId&&(this.svgStatus=`Не вдалося відновити останню сцену: ${t instanceof Error?t.message:String(t)}`)}finally{e===this._sceneLoadRequestId&&(this.sceneOperationMessage=null)}}startNewScene(){this._sceneLoadRequestId++,this.sceneOperationMessage=null,this._sceneRestoreId++,this._sceneRestoreInProgress=!1,this.clearSceneRestoreAttributes(),this._sceneRestoreLayerLocks.clear(),this._sceneRestoreLockOwnerId=0,this.clearSelectedPlacementState(),this._autosaveEnabled=this.isConnected,this._lastAutosavedScene=null,this.sceneStartupVisible=!1,this.canContinueLastScene=!1;const e=this.ownerDocument.defaultView;this._autosaveTimer!==null&&e?.clearTimeout(this._autosaveTimer),this._autosaveTimer=null,this.exitCreateItemMode(),this._createPointerClient=null,this._preserveLoadedGroups=!1,this._svgRequestId++,this._applyFrame!==0&&cancelAnimationFrame(this._applyFrame),this._applyFrame=0,this._selectedSvgText="",this.clearSvgPreview(),this.svgFileName="",this.contourOffsetX=0,this.contourOffsetY=0,this.contourScale=1;const t=this.sceneElement??this.shadowRoot?.querySelector("ff-scene");let i=this.getSceneItemsLayers()[0]??null;if(!i&&t&&(i=this.ownerDocument.createElement("ff-items-layer"),t.append(i)),i){for(const s of this.getSceneItemsLayers())s.locked=!1,s.itemsData=[],s.removeItems(Array.from(s.children).filter(n=>n instanceof Z)),s!==i&&s.remove();i.hidden=!1,i.setAttribute("data-layer-name","Layer 1");const o=this.getSceneItemsLayerIdentities([i]).idByLayer.get(i);this.reorderSceneItemLayers([i]),this.syncSceneLayerOrder([i]),this.setPrimaryItemsLayer(i,o)}this.groups=[],this.itemSettings=[],this.step=16,this.rows=58,this.columns=51,this.mode="hex",this.fieldView="spot",this.spotView="dot",this.spotRadius=3,this.centerRadius=1.6,this.centerColor="rgba(34, 83, 66, 0.42)",this.vertexRadius=.8,this.vertexColor="rgba(34, 83, 66, 0.42)",this.triNodeSize=1,this.triNodeColor="rgba(34, 83, 66, 0.42)",this.fieldLineWidth=.5,this.snapTarget="any",this.dragSnap="free",this.rebound=!1,this.groupMode="group",this.groupEditingEnabled=!1,this.groupEditAction=null,this.selectedGroupId=null,this.showGroups=!0,this.groupLayerLocked=!1,this.showContourOverlay=!0,this.paperSize="a4",this.showPaperOutline=!0,this.showPlacements=!1,this.placementLayerLocked=!1,this.showHexOverlay=!0,this.showGeneratedItems=!0,this.showSlottedItems=!0,this.highlightFixedItems=!1,this.highlightStaticItems=!1,this.contextRowExpanded=!1,this.activeControlGroup="fieldView",this.activeInspectorTab="groups",this._hiddenGroupIds.clear(),this._collapsedGroupIds.clear(),this._expandedCenterGroupIds.clear(),this.positionReadouts=[],this.selectedKeys=[],this.defaultItemProperties={},this.editingDefaultItemProperties=!1,this.mockDataJson="[]",this.mockDataGenerated=!1,this.mockDataStatus="Тестові дані не згенеровано.",this.commitCount=0,this.lastCommit="Ще немає зафіксованих переміщень.",this._contoursApplied=!1,this.syncSelectionState(),this.refreshGroupInspector(),this.refreshPlacementGroups(),this.refreshLayerSummaries(),this.syncSceneState(),this.svgStatus="Створено нову сцену.",this._svgReady=Promise.resolve()}scheduleSceneAutosave(){if(!this._autosaveEnabled||!this.isConnected||this._sceneRestoreInProgress)return;const e=this.ownerDocument.defaultView;e&&(this._autosaveTimer!==null&&e.clearTimeout(this._autosaveTimer),this._autosaveTimer=e.setTimeout(()=>{this._autosaveTimer=null,this.flushSceneAutosave()},ly))}flushSceneAutosave(){const e=this.ownerDocument.defaultView;if(this._autosaveTimer!==null&&e?.clearTimeout(this._autosaveTimer),this._autosaveTimer=null,!(!this._autosaveEnabled||this._sceneRestoreInProgress||!e))try{const t=JSON.stringify(this.createSceneDocument());if(typeof t!="string")throw new Error("the scene could not be serialized.");if(new Blob([t]).size>jr)throw new Error(`scene exceeds the ${jr/(1024*1024)} MiB limit.`);if(this.parseSceneDocument(JSON.parse(t)),t===this._lastAutosavedScene)return;e.localStorage.setItem(ac,t),this._lastAutosavedScene=t,this.canContinueLastScene=!0}catch(t){this.svgStatus=`Не вдалося автоматично зберегти сцену: ${t instanceof Error?t.message:String(t)}`}}saveScene(){const e=this.ownerDocument.defaultView;if(!e){this.svgStatus="Не вдалося зберегти сцену: вікно документа недоступне.";return}try{const t=this.createSceneDocument(),i=JSON.stringify(t,null,2);this.parseSceneDocument(JSON.parse(i));const o=new Blob([i],{type:"application/json"});if(o.size>jr)throw new Error(`scene file exceeds the ${jr/(1024*1024)} MiB limit.`);const s=e.URL.createObjectURL(o),n=this.ownerDocument.createElement("a");n.href=s,n.download="ff-tri-layer-scene.ffscene.json",n.hidden=!0;const a=this.ownerDocument.body??this.ownerDocument.documentElement;try{a.append(n),n.click(),this.svgStatus=`Збережено ${n.download}.`}finally{n.remove(),e.setTimeout(()=>e.URL.revokeObjectURL(s),0)}}catch(t){this.svgStatus=`Не вдалося зберегти сцену: ${t instanceof Error?t.message:String(t)}`}}openSceneFilePicker(){this.shadowRoot?.querySelector("[data-scene-file-input]")?.click()}zoomIn(){this.setSceneZoomScale(this.zoomScale+bn)}zoomOut(){this.setSceneZoomScale(this.zoomScale-bn)}fitScene(){const e=this.getSceneViewport(),t=this.getSceneStage();if(!e||!t||e.clientWidth<=0||e.clientHeight<=0||t.offsetWidth<=0||t.offsetHeight<=0)return;const i=Math.min(e.clientWidth/t.offsetWidth,e.clientHeight/t.offsetHeight),o=Math.floor(i*10+1e-8)/10;this.setSceneZoomScale(o),e.scrollLeft=0,e.scrollTop=0}handleSceneWheel(e){const t=e;if(!t.ctrlKey||(e.preventDefault(),e.stopPropagation(),!Number.isFinite(t.deltaY)||t.deltaY===0))return;const i=this.getSceneViewport(),o=this.getSceneStage(),s=Number.isFinite(this.zoomScale)&&this.zoomScale>0?this.zoomScale:1,n=o?.getBoundingClientRect(),a=n?{x:(t.clientX-n.left)/s,y:(t.clientY-n.top)/s}:null,c=t.deltaY<0?1:-1,l=this.setSceneZoomScale(s+c*bn);if(!i||!o||!a)return;const d=o.getBoundingClientRect();i.scrollLeft+=d.left+a.x*l-t.clientX,i.scrollTop+=d.top+a.y*l-t.clientY}setSceneZoomScale(e){const t=Number.isFinite(e)?e:1,i=Math.round(t*10),o=Math.round(uy*10),s=Math.round(py*10),n=Math.min(s,Math.max(o,i))/10;return this._zoomScale=n,this.zoomScale=n,this.applySceneZoom(n),n}applySceneZoom(e){if(this._printCleanup)return;const t=this.getSceneStage();if(!t)return;t.style.transform=`scale(${e})`,t.style.transformOrigin="top left";const i=this.shadowRoot?.querySelector(".stage-content");if(!i)return;const o=this.ownerDocument.defaultView?.getComputedStyle(i),s=Number.parseFloat(o?.paddingLeft??"0")+Number.parseFloat(o?.paddingRight??"0"),n=Number.parseFloat(o?.paddingTop??"0")+Number.parseFloat(o?.paddingBottom??"0"),a=Number.isFinite(s)?s:0,c=Number.isFinite(n)?n:0;t.offsetWidth>0&&(i.style.width=`${Math.ceil(t.offsetWidth*e+a)}px`),t.offsetHeight>0&&(i.style.height=`${Math.ceil(t.offsetHeight*e+c)}px`)}getSceneViewport(){return this.shadowRoot?.querySelector(".stage-viewport")??null}handleScenePanPointerDown(e){const t=this.getSceneViewport();if(!t||this._scenePanGesture||e.button!==0||e.isPrimary===!1||this._sceneRestoreInProgress||this.sceneStartupVisible||this.createItemMode||this.groupEditingEnabled||this.groupEditAction!==null||this.calloutPlacementPhase!==null)return;const i=`${mn}, [data-group-id], [data-callout-action], [data-callout-connector], [data-callout-underline], [data-callout-group-id], .scene-startup-overlay, button, input, select, textarea`;e.composedPath().some(s=>s instanceof Z||s instanceof Element&&s.matches(i))||this.groupLayerElement?.findGroupAtClientPoint(e.clientX,e.clientY)||(this._scenePanGesture={pointerId:e.pointerId,viewport:t,startX:e.clientX,startY:e.clientY,startScrollLeft:t.scrollLeft,startScrollTop:t.scrollTop,didPan:!1},e.isTrusted&&t.setPointerCapture(e.pointerId),e.preventDefault())}handleScenePanPointerMove(e){const t=this._scenePanGesture;if(!t||t.pointerId!==e.pointerId)return;const i=e.clientX-t.startX,o=e.clientY-t.startY;!t.didPan&&Math.hypot(i,o)<=dy||(t.didPan=!0,t.viewport.scrollLeft=t.startScrollLeft-i,t.viewport.scrollTop=t.startScrollTop-o,e.preventDefault())}handleScenePanPointerUp(e){this.finishScenePanGesture(e.pointerId)}handleScenePanPointerCancel(e){this.finishScenePanGesture(e.pointerId)}finishScenePanGesture(e){const t=this._scenePanGesture;!t||t.pointerId!==e||(this._scenePanGesture=null,t.viewport.hasPointerCapture(e)&&t.viewport.releasePointerCapture(e))}getSceneStage(){return this.shadowRoot?.querySelector(".layer-stage")??null}syncPaperSizeLayer(){const e=this.shadowRoot?.querySelector(".paper-size-underlay"),t=this.getSceneStage();if(!e||!t)return;const[i,o]=ic[this.paperSize==="a3"?"a3":"a4"],s=i*Vi,n=o*Vi;e.setAttribute("width",String(s)),e.setAttribute("height",String(n)),e.setAttribute("viewBox",`0 0 ${s} ${n}`),e.style.left="0px",e.style.top="0px",e.style.width=`${s}px`,e.style.height=`${n}px`,t.style.setProperty("--ff-kit-paper-width",`${s}px`),t.style.setProperty("--ff-kit-paper-height",`${n}px`),e.querySelector(".paper-size-outline")?.setAttribute("d",`M ${s-.5} 0.5 V ${n-.5} H 0.5`)}printScene(){const e=this.ownerDocument.defaultView,t=this.shadowRoot?.querySelector(".stage-content"),i=this.shadowRoot?.querySelector(".layer-stage"),o=this.shadowRoot?.querySelector(".scene-artwork");if(!e||!t||!i||!o){this.svgStatus="Не вдалося надрукувати сцену: робоча область недоступна.";return}this._printCleanup?.();const[s,n]=ic[this.paperSize],a=s*Vi,c=n*Vi,l=o.offsetWidth,d=o.offsetHeight;if(l<=0||d<=0){this.svgStatus="Не вдалося надрукувати сцену: для робочої області не визначено розмір.";return}const u=this.classList.contains(yn),p=this.ownerDocument.createElement("style");p.setAttribute("data-ff-tri-layer-print",""),p.textContent=`
            @page { size: ${this.paperSize.toUpperCase()} landscape; margin: 0; }
            @media print {
                body * { display: none !important; }
                [data-ff-tri-layer-print-path] { display: block !important; }
            }
        `,(this.ownerDocument.head??this.ownerDocument.documentElement).append(p);const h=[];for(let L=this;L&&L!==this.ownerDocument.body;L=L.parentElement)h.push({element:L,previousValue:L.getAttribute("data-ff-tri-layer-print-path")}),L.setAttribute("data-ff-tri-layer-print-path","");const f=o.style.transform,g=o.style.transformOrigin,m=i.style.transform,b=i.style.transformOrigin,x=i.style.width,y=i.style.height,C=t.style.width,N=t.style.height,v=8*Vi;o.style.transform=`translate(${v}px, ${v}px)`,o.style.transformOrigin="top left",i.style.transform="none",i.style.transformOrigin="top left",i.style.width=`${a}px`,i.style.height=`${c}px`,t.style.width=`${a}px`,t.style.height=`${c}px`,this.classList.add(yn);const P=()=>{if(this._printCleanup===P){this._printCleanup=null,e.removeEventListener("afterprint",P),p.remove(),u||this.classList.remove(yn);for(const{element:L,previousValue:O}of h)O===null?L.removeAttribute("data-ff-tri-layer-print-path"):L.setAttribute("data-ff-tri-layer-print-path",O);o.style.transform=f,o.style.transformOrigin=g,i.style.transform=m,i.style.transformOrigin=b,i.style.width=x,i.style.height=y,t.style.width=C,t.style.height=N}};this._printCleanup=P,e.addEventListener("afterprint",P,{once:!0});try{e.print()}catch(L){P(),this.svgStatus=`Не вдалося надрукувати сцену: ${L instanceof Error?L.message:String(L)}`}}createSceneDocument(){const e=this.getSceneItemsLayers(),t=this.layer;if(!t)throw new Error("The items layer is not available.");if(e.length>hr)throw new Error(`The scene cannot contain more than ${hr} items layers.`);const i=this.getSceneItemsLayerIdentities(e),o=i.idByLayer.get(t),s=e.map((g,m)=>({id:i.idByLayer.get(g),name:this.getItemsLayerName(g,m),visible:!g.hidden,...g.locked?{locked:!0}:{}})),n=(this.sceneElement?.layerOrder.length??0)===0,c=!(e.length===1&&s[0].name==="Layer 1"&&s[0].visible&&!t.locked&&t===e[0]&&n),l=c?i.idByLayer:null,d=this.getSceneItems(),u=new Map;for(const g of e){const m=d.filter(b=>b.parentElement===g&&b.hasAttribute("data-ff-tri-layer-items-data"));for(const[b,x]of m.entries()){const y=g.itemsData[b];y&&u.set(x,y)}}const p={},h=new Set,f=d.map((g,m)=>{const b=this.createItemSettingsFromElement(g,m,g.dataset.node??`item-${m+1}`),x=g.dataset.node?.trim()||`item-${m+1}`;let y=x,C=2;for(;h.has(y);)y=`${x}-${C++}`;h.add(y);const N=g.getAttribute(Xi),v=g.getAttribute(Hi),P=N===null||v===null?void 0:this.groups.find(T=>T.id===N)?.placements?.find(T=>T.id===v)??this.groups.find(T=>T.id===N)?.callout?.placements?.find(T=>T.id===v),L=b.layoutMode==="auto"&&N!==null&&v!==null&&v.trim().length>0&&g.getAttribute("group-id")===N&&P!==void 0?P.id:void 0,V=(e.find(T=>T===g.parentElement)??null)?.getItemLabelRadiusSources(g)??null,ge=g.hasAttribute("data-ff-tri-layer-items-data")?"generated":"slotted",re=u.get(g);return ge==="generated"&&re?.itemProperties!==void 0&&(p[y]=this.cloneSceneSlotProperties(re.itemProperties)),{key:y,locked:b.locked,...l?{layerId:l.get(g.parentElement)}:{},origin:ge,...ge==="slotted"&&V!==null?{slotBaseLabelRadius:V.slotBase}:{},typeId:g.getAttribute("data-type-id"),value:g.getAttribute("data-value"),groupId:g.getAttribute("group-id"),...L===void 0?{}:{placementId:L},name:b.name,position:{r:b.r,c:b.c,offsetX:b.offsetX,offsetY:b.offsetY},content:{icon:b.icon,label:b.label,layoutMode:b.layoutMode,labelType:b.labelType,labelPosition:b.labelPosition,shape:b.shape,fillEnabled:b.fillEnabled},appearance:{size:b.size,sizeUnit:b.sizeUnit,iconSize:b.iconSize,iconSizeUnit:b.iconSizeUnit,labelRadius:V?.explicitOverride??null,labelFontSize:b.labelFontSize,textColor:b.textColor,textStrokeEnabled:b.textStrokeEnabled,textStrokeColor:b.textStrokeColor,textStrokeWidth:b.textStrokeWidth,fillColor:b.fillColor,borderColor:b.borderColor,borderWidth:b.borderWidth,zIndex:b.zIndex},unplaced:g.hasAttribute("data-unplaced")}});return{format:fn,version:gn,scene:{options:{step:this.step,rows:this.rows,columns:this.columns,mode:this.mode,fieldView:this.fieldView,spotView:this.spotView,spotRadius:this.spotRadius,centerRadius:this.centerRadius,centerColor:this.centerColor,vertexRadius:this.vertexRadius,vertexColor:this.vertexColor,triNodeSize:this.triNodeSize,triNodeColor:this.triNodeColor,fieldLineWidth:this.fieldLineWidth,snapTarget:this.snapTarget,dragSnap:this.dragSnap,rebound:this.rebound,groupMode:this.groupMode,showGroups:this.showGroups,groupLayerLocked:this.groupLayerLocked,showContourOverlay:this.showContourOverlay,paperSize:this.paperSize,showPaperOutline:this.showPaperOutline,showPlacements:this.showPlacements,placementLayerLocked:this.placementLayerLocked,showHexOverlay:this.showHexOverlay,showGeneratedItems:this.showGeneratedItems,showSlottedItems:this.showSlottedItems,highlightFixedItems:this.highlightFixedItems,highlightStaticItems:this.highlightStaticItems},contour:this._selectedSvgText&&this._svgViewBox?{source:this._selectedSvgText,fileName:this.svgFileName,applied:this._contoursApplied,offsetX:this.contourOffsetX,offsetY:this.contourOffsetY,scale:this.contourScale}:null,groups:this.groups.map(g=>({id:g.id,name:g.name,borderColor:g.borderColor,borderWidth:g.borderWidth,fillColor:g.fillColor,centers:g.centers.map(m=>({r:m.r,c:m.c})),placements:g.placements?.map(m=>kt(m)),...g.callout===void 0?{}:{callout:{...g.callout,algorithm:g.callout.algorithm??Gr,point:g.callout.point?{...g.callout.point}:null,mixedMode:g.callout.mixedMode??!1,placements:(g.callout.placements??[]).map(m=>kt(m))}}})),hiddenGroupIds:[...this._hiddenGroupIds],defaults:this.cloneSceneSlotProperties(this.defaultItemProperties),dataProperties:p,...c?{layers:s,primaryLayerId:o}:{},items:f}}}parseSceneDocument(e){const t=We(e,"Scene document");if(t.format!==fn)throw new Error(`Expected format "${fn}".`);if(t.version!==gn)throw new Error(`Unsupported scene version "${String(t.version)}"; supported version is ${gn}.`);const i=We(t.scene,"scene"),o=We(i.options,"scene.options"),s=er(o.mode,["tri","hex"],"scene.options.mode"),n=E=>{const A=Nt(o[E],`scene.options.${E}`);if(A<=0)throw new Error(`scene.options.${E} must be greater than zero.`);return A},a=E=>{const A=n(E);if(!Number.isSafeInteger(A))throw new Error(`scene.options.${E} must be a safe integer.`);return A},c=(E,A)=>{const I=n(E);if(I>A)throw new Error(`scene.options.${E} must not exceed ${A}.`);return I},l=(E,A,I)=>{const z=Nt(E,A);if(z<0||z>I)throw new Error(`${A} must be between 0 and ${I} pixels.`);return z},d=(E,A,I,z)=>{const Y=Nt(E,A);if(!Number.isSafeInteger(Y))throw new Error(`${A} must be a safe integer.`);if(Y<I||Y>z)throw new Error(`${A} must be within the active grid coordinate range (${I} to ${z}).`);return Y},u=(E,A)=>{const I=Nt(E,A);if(Math.abs(I)>F)throw new Error(`${A} must be within +/- ${F} pixels.`);return I},p=E=>{const A=n(E);if(!Number.isSafeInteger(A))throw new Error(`scene.options.${E} must be a safe integer.`);if(A>Oo)throw new Error(`scene.options.${E} must not exceed ${Oo}.`);return A},h=p("rows"),f=p("columns"),g=Mt(s,h,f);if(h*f>mi)throw new Error(`scene grid cannot exceed ${mi} cells.`);const m=a("step");if(m>F)throw new Error(`scene.options.step must not exceed ${F} pixels.`);const b={step:m,rows:h,columns:f,mode:s,fieldView:er(o.fieldView,["dot","full","spot"],"scene.options.fieldView"),spotView:er(o.spotView,["dot","full"],"scene.options.spotView"),spotRadius:c("spotRadius",Bo),centerRadius:c("centerRadius",F),centerColor:le(o.centerColor,"scene.options.centerColor"),vertexRadius:c("vertexRadius",F),vertexColor:le(o.vertexColor,"scene.options.vertexColor"),triNodeSize:c("triNodeSize",F),triNodeColor:le(o.triNodeColor,"scene.options.triNodeColor"),fieldLineWidth:c("fieldLineWidth",F),snapTarget:er(o.snapTarget,["any","center","vertex"],"scene.options.snapTarget"),dragSnap:er(o.dragSnap,["free","live"],"scene.options.dragSnap"),rebound:ze(o.rebound,"scene.options.rebound"),groupMode:er(o.groupMode,["any","group"],"scene.options.groupMode"),showGroups:ze(o.showGroups,"scene.options.showGroups"),groupLayerLocked:o.groupLayerLocked===void 0?!1:ze(o.groupLayerLocked,"scene.options.groupLayerLocked"),showContourOverlay:ze(o.showContourOverlay,"scene.options.showContourOverlay"),paperSize:o.paperSize===void 0?"a4":er(o.paperSize,["a4","a3"],"scene.options.paperSize"),showPaperOutline:o.showPaperOutline===void 0?!0:ze(o.showPaperOutline,"scene.options.showPaperOutline"),showPlacements:o.showPlacements===void 0?!1:ze(o.showPlacements,"scene.options.showPlacements"),placementLayerLocked:o.placementLayerLocked===void 0?!1:ze(o.placementLayerLocked,"scene.options.placementLayerLocked"),showHexOverlay:o.showHexOverlay===void 0?!0:ze(o.showHexOverlay,"scene.options.showHexOverlay"),showGeneratedItems:o.showGeneratedItems===void 0?!0:ze(o.showGeneratedItems,"scene.options.showGeneratedItems"),showSlottedItems:o.showSlottedItems===void 0?!0:ze(o.showSlottedItems,"scene.options.showSlottedItems"),highlightFixedItems:o.highlightFixedItems===void 0?!1:ze(o.highlightFixedItems,"scene.options.highlightFixedItems"),highlightStaticItems:o.highlightStaticItems===void 0?!1:ze(o.highlightStaticItems,"scene.options.highlightStaticItems")},x=i.defaults===void 0?{}:wn(i.defaults,"scene.defaults"),y=(E,A)=>{const I=ts(E,m);if(!Number.isFinite(I.size.pixels)||I.size.pixels>F)throw new Error(`${A}.size cannot exceed ${F} pixels after unit conversion.`);if(!Number.isFinite(I.iconSize.pixels)||I.iconSize.pixels>F)throw new Error(`${A}.iconSize cannot exceed ${F} pixels after unit conversion.`)};y([x],"scene.defaults");let C=null;if(i.contour!==null){const E=We(i.contour,"scene.contour"),A=le(E.source,"scene.contour.source");if(A.length>nc)throw new Error(`scene.contour.source cannot exceed ${nc} characters.`);const I=le(E.fileName,"scene.contour.fileName"),z=ze(E.applied,"scene.contour.applied"),Y=E.offsetX===void 0?0:u(E.offsetX,"scene.contour.offsetX"),M=E.offsetY===void 0?0:u(E.offsetY,"scene.contour.offsetY"),q=E.scale===void 0?1:Nt(E.scale,"scene.contour.scale");if(q<=0||q>To)throw new Error(`scene.contour.scale must be greater than zero and must not exceed ${To}.`);if(this.parseSvgContours(A).contours.length===0)throw new Error("scene.contour.source contains no contour paths.");C={source:A,fileName:I,applied:z,offsetX:Y,offsetY:M,scale:q}}if(!Array.isArray(i.groups))throw new Error("scene.groups must be an array.");if(i.groups.length>Fo)throw new Error(`scene.groups cannot contain more than ${Fo} groups.`);let N=0,v=0;const P=new Set,L=new Set,O=(E,A,I,z)=>{if(!Array.isArray(E))throw new Error(`${A} must be an array.`);if(v+=E.length,v>Mo)throw new Error(`scene.groups cannot contain more than ${Mo} total placements.`);return E.map((Y,M)=>{const q=`${A}[${M}]`,ae=We(Y,q),Ve=le(ae.id,`${q}.id`);if(!Ve.trim())throw new Error(`${q}.id cannot be empty.`);const Le=d(ae.r,`${q}.r`,0,h-1),ue=d(ae.c,`${q}.c`,g.minCenterColumn,g.maxCenterColumn),Pe=`${Le},${ue}`;if(!g.isGroupCenterValid(Le,ue)||!z&&!I.has(Pe))throw new Error(z?`${q} must refer to an eligible Hex grid center.`:`${q} must refer to an existing group center.`);if(P.has(Ve)||L.has(Pe))throw new Error(`${q} duplicates a placement id or cell.`);P.add(Ve),L.add(Pe);const Ke=ae.itemProperties===void 0?void 0:wn(ae.itemProperties,`${q}.itemProperties`);return Ke!==void 0&&y([x,Ke],`${q}.itemProperties`),{id:Ve,r:Le,c:ue,...Ke===void 0?{}:{itemProperties:Ke}}})},V=i.groups.map((E,A)=>{const I=`scene.groups[${A}]`,z=We(E,I),Y=l(z.borderWidth,`${I}.borderWidth`,F);if(!Array.isArray(z.centers))throw new Error(`${I}.centers must be an array.`);if(N+=z.centers.length,N>Mo)throw new Error(`scene.groups cannot contain more than ${Mo} total centers.`);const M=z.centers.map((Le,ue)=>{const Pe=`${I}.centers[${ue}]`,Ke=We(Le,Pe),tt=d(Ke.r,`${Pe}.r`,0,h-1),Pr=d(Ke.c,`${Pe}.c`,g.minCenterColumn,g.maxCenterColumn);if(!g.isGroupCenterValid(tt,Pr))throw new Error(`${Pe} must be an eligible ${s} grid center.`);return{r:tt,c:Pr}});let q,ae;if(z.callout!==void 0){if(s!=="hex")throw new Error(`${I}.callout is only supported in Hex mode.`);ae=We(z.callout,`${I}.callout`);let Le=null;if(ae.point!==null){const tt=We(ae.point,`${I}.callout.point`),Pr=d(tt.r,`${I}.callout.point.r`,0,h-1),_i=d(tt.c,`${I}.callout.point.c`,g.minCenterColumn,g.maxCenterColumn);if(!g.isGroupCenterValid(Pr,_i))throw new Error(`${I}.callout.point must be an eligible Hex grid center.`);Le={r:Pr,c:_i}}const ue=Nt(ae.activationThreshold,`${I}.callout.activationThreshold`);if(!Number.isSafeInteger(ue)||ue<0)throw new Error(`${I}.callout.activationThreshold must be a non-negative safe integer.`);const Pe=ae.algorithm===void 0?Gr:er(ae.algorithm,["swarm","vertical-column","horizontal-column"],`${I}.callout.algorithm`),Ke=ae.mixedMode===void 0?!1:ze(ae.mixedMode,`${I}.callout.mixedMode`);q={point:Le,activationThreshold:ue,algorithm:Pe,mixedMode:Ke,placements:[]}}let Ve;if(z.placements!==void 0){if(!q&&Array.isArray(z.placements)&&z.placements.length>M.length)throw new Error(`${I}.placements cannot contain more entries than group centers.`);const Le=new Set(M.map(Ke=>`${Ke.r},${Ke.c}`)),ue=!!q&&ae?.placements===void 0,Pe=O(z.placements,`${I}.placements`,Le,ue);ue&&q?q.placements=Pe:Ve=Pe}if(q&&ae?.placements!==void 0){const Le=new Set(M.map(ue=>`${ue.r},${ue.c}`));q.placements=O(ae.placements,`${I}.callout.placements`,Le,!0)}return{id:le(z.id,`${I}.id`),name:le(z.name,`${I}.name`),borderColor:le(z.borderColor,`${I}.borderColor`),borderWidth:Y,fillColor:le(z.fillColor,`${I}.fillColor`),centers:M,...Ve===void 0?{}:{placements:Ve},...q===void 0?{}:{callout:q}}});if(!Array.isArray(i.hiddenGroupIds))throw new Error("scene.hiddenGroupIds must be an array.");if(i.hiddenGroupIds.length>Fo)throw new Error(`scene.hiddenGroupIds cannot contain more than ${Fo} entries.`);const ge=i.hiddenGroupIds.map((E,A)=>le(E,`scene.hiddenGroupIds[${A}]`));let re,T;if(i.primaryLayerId!==void 0&&i.layers===void 0)throw new Error("scene.primaryLayerId requires scene.layers.");if(i.layers!==void 0){if(!Array.isArray(i.layers))throw new Error("scene.layers must be an array.");if(i.layers.length===0)throw new Error("scene.layers must contain at least one items layer.");if(i.layers.length>hr)throw new Error(`scene.layers cannot contain more than ${hr} items layers.`);const E=new Set;if(re=i.layers.map((A,I)=>{const z=`scene.layers[${I}]`,Y=We(A,z),M=le(Y.id,`${z}.id`);if(!M.trim())throw new Error(`${z}.id cannot be empty.`);if(E.has(M))throw new Error(`${z}.id duplicates another items layer identity.`);E.add(M);const q=le(Y.name,`${z}.name`);if(!q.trim())throw new Error(`${z}.name cannot be empty.`);return{id:M,name:q,visible:ze(Y.visible,`${z}.visible`),locked:Y.locked===void 0?!1:ze(Y.locked,`${z}.locked`)}}),T=le(i.primaryLayerId,"scene.primaryLayerId"),!E.has(T))throw new Error("scene.primaryLayerId must reference an identity in scene.layers.")}const j=new Set(re?.map(E=>E.id)??[]);if(!Array.isArray(i.items))throw new Error("scene.items must be an array.");if(i.items.length>oc)throw new Error(`scene.items cannot contain more than ${oc} items.`);const w=new Set,D=i.items.map((E,A)=>{const I=`scene.items[${A}]`,z=We(E,I),Y=le(z.key,`${I}.key`),M=z.locked===void 0?!1:ze(z.locked,`${I}.locked`),q=z.layerId===void 0?void 0:le(z.layerId,`${I}.layerId`);if(q!==void 0&&!q.trim())throw new Error(`${I}.layerId cannot be empty.`);if(q!==void 0&&re&&!j.has(q))throw new Error(`${I}.layerId references an unknown items layer identity.`);if(re&&re.length>1&&q===void 0)throw new Error(`${I}.layerId is required when scene.layers contains multiple layers.`);if(!Y.trim())throw new Error(`${I}.key cannot be empty.`);if(w.has(Y))throw new Error(`${I}.key duplicates another item key.`);w.add(Y);const ae=er(z.origin,["generated","slotted"],`${I}.origin`),Ve=vn(z.typeId,`${I}.typeId`),Le=vn(z.value,`${I}.value`),ue=vn(z.groupId,`${I}.groupId`);if(ae==="generated"){const Gi=Number(Ve);if(Ve===null||!Number.isInteger(Gi)||!Object.prototype.hasOwnProperty.call(Sa,Gi))throw new Error(`${I}.typeId is not a supported generated item type.`);if(Le===null||!Number.isFinite(Number(Le)))throw new Error(`${I}.value must be numeric for a generated item.`)}const Pe=We(z.position,`${I}.position`),Ke={r:d(Pe.r,`${I}.position.r`,g.minItemRow,g.maxItemRow),c:d(Pe.c,`${I}.position.c`,g.minItemColumn,g.maxItemColumn),offsetX:u(Pe.offsetX,`${I}.position.offsetX`),offsetY:u(Pe.offsetY,`${I}.position.offsetY`)},tt=We(z.content,`${I}.content`),Pr=tt.labelType===void 0?"number":le(tt.labelType,`${I}.content.labelType`);if(!jt(Pr))throw new Error(`${I}.content.labelType is unsupported.`);const _i=tt.layoutMode===void 0?ae==="generated"?"auto":"fixed":le(tt.layoutMode,`${I}.content.layoutMode`);if(!Ct(_i))throw new Error(`${I}.content.layoutMode is unsupported.`);const Pa=le(tt.labelPosition,`${I}.content.labelPosition`);if(!mr(Pa))throw new Error(`${I}.content.labelPosition is unsupported.`);const Ca=le(tt.shape,`${I}.content.shape`);if(!zr(Ca))throw new Error(`${I}.content.shape is unsupported.`);const Ea={icon:le(tt.icon,`${I}.content.icon`),label:le(tt.label,`${I}.content.label`),layoutMode:_i,labelType:Pr,labelPosition:Pa,shape:Ca,fillEnabled:ze(tt.fillEnabled,`${I}.content.fillEnabled`)},ci=z.placementId===void 0?void 0:le(z.placementId,`${I}.placementId`);if(ci!==void 0){if(!ci.trim())throw new Error(`${I}.placementId cannot be empty.`);if(Ea.layoutMode!=="auto")throw new Error(`${I}.placementId is only supported for auto-layout items.`);const Gi=ue===null?void 0:V.find(Ri=>Ri.id===ue);if(!Gi?.placements?.some(Ri=>Ri.id===ci)&&!Gi?.callout?.placements?.some(Ri=>Ri.id===ci))throw new Error(`${I}.placementId must reference a placement in its group.`)}const Be=We(z.appearance,`${I}.appearance`),Ts=le(Be.sizeUnit,`${I}.appearance.sizeUnit`);if(!Ge(Ts))throw new Error(`${I}.appearance.sizeUnit is unsupported.`);const Bs=le(Be.iconSizeUnit,`${I}.appearance.iconSizeUnit`);if(!Ge(Bs))throw new Error(`${I}.appearance.iconSizeUnit is unsupported.`);const Ds=Nt(Be.size,`${I}.appearance.size`),Vs=Nt(Be.iconSize,`${I}.appearance.iconSize`),tu=Be.labelRadius===void 0||Be.labelRadius===null?null:l(Be.labelRadius,`${I}.appearance.labelRadius`,F),Aa=z.slotBaseLabelRadius===void 0?void 0:z.slotBaseLabelRadius===null?null:l(z.slotBaseLabelRadius,`${I}.slotBaseLabelRadius`,F),ru=l(Be.labelFontSize,`${I}.appearance.labelFontSize`,F),iu=l(Be.borderWidth,`${I}.appearance.borderWidth`,F),ou=Be.textStrokeWidth===void 0?1:l(Be.textStrokeWidth,`${I}.appearance.textStrokeWidth`,F),ko=Nt(Be.zIndex,`${I}.appearance.zIndex`);if(Ds<0||Vs<0)throw new Error(`${I}.appearance sizes cannot be negative.`);if(!Number.isSafeInteger(ko)||ko<1||ko>F)throw new Error(`${I}.appearance.zIndex must be a safe integer between 1 and ${F}.`);const Hs=st(Ds,Ts,m);if(!Number.isFinite(Hs)||Hs>F)throw new Error(`${I}.appearance.size cannot exceed ${F} pixels after unit conversion.`);const su=gr(Hs,m),Na=st(Vs,Bs,su);if(!Number.isFinite(Na)||Na>F)throw new Error(`${I}.appearance.iconSize cannot exceed ${F} pixels after unit conversion.`);const nu={size:Ds,sizeUnit:Ts,iconSize:Vs,iconSizeUnit:Bs,labelRadius:tu,labelFontSize:ru,textColor:le(Be.textColor,`${I}.appearance.textColor`),textStrokeEnabled:Be.textStrokeEnabled===void 0?!1:ze(Be.textStrokeEnabled,`${I}.appearance.textStrokeEnabled`),textStrokeColor:Be.textStrokeColor===void 0?"":le(Be.textStrokeColor,`${I}.appearance.textStrokeColor`),textStrokeWidth:ou,fillColor:le(Be.fillColor,`${I}.appearance.fillColor`),borderColor:le(Be.borderColor,`${I}.appearance.borderColor`),borderWidth:iu,zIndex:ko};return{key:Y,locked:M,...q===void 0?{}:{layerId:q},origin:ae,...Aa===void 0?{}:{slotBaseLabelRadius:Aa},typeId:Ve,value:Le,groupId:ue,...ci===void 0?{}:{placementId:ci},name:le(z.name,`${I}.name`),position:Ke,content:Ea,appearance:nu,unplaced:ze(z.unplaced,`${I}.unplaced`)}}),K=i.dataProperties===void 0?{}:We(i.dataProperties,"scene.dataProperties"),ye=new Set(D.filter(E=>E.origin==="generated").map(E=>E.key)),Ie={};for(const[E,A]of Object.entries(K)){if(!ye.has(E))throw new Error(`scene.dataProperties.${E} must reference a generated scene item.`);Ie[E]=wn(A,`scene.dataProperties.${E}`)}for(const[E,A]of D.entries()){if(A.origin!=="generated")continue;const I=A.groupId===null?void 0:V.find(M=>M.id===A.groupId)?.placements?.find(M=>M.r===A.position.r&&M.c===A.position.c)??V.find(M=>M.id===A.groupId)?.callout?.placements?.find(M=>M.r===A.position.r&&M.c===A.position.c),z=[x,I?.itemProperties,Ie[A.key]];Ie[A.key]!==void 0&&y(z,`scene.dataProperties.${A.key}`);const Y={size:A.appearance.size,sizeUnit:A.appearance.sizeUnit,iconSize:A.appearance.iconSize,iconSizeUnit:A.appearance.iconSizeUnit};y([...z,Y],`scene.items[${E}].appearance`)}const je=new Map((re??[]).map(E=>[E.id,E])),X=(E,A)=>{const I={size:E.appearance.size,sizeUnit:E.appearance.sizeUnit,iconSize:E.appearance.iconSize,iconSizeUnit:E.appearance.iconSizeUnit},z=ts([x,Ie[E.key],A,I],m);return gr(z.size.pixels,m)},se=(E,A)=>{const I=D.find(z=>z.groupId===E.id&&z.position.r===A.r&&z.position.c===A.c);return I?X(I,A.itemProperties):gr(ts([x,A.itemProperties],m).size.pixels,m)},xe=(E,A)=>{const I=E.x-A.x,z=E.y-A.y,Y=E.radius+A.radius;if(I*I+z*z>=Y*Y)return!1;const M={x:E.x,y:E.y},q={x:A.x,y:A.y};return Math.max(ht(M,E.radius,q,A.radius),ht(q,A.radius,M,E.radius))>1e-8},ke=new Map;for(const E of D){if(E.content.layoutMode!=="auto"||E.groupId===null||E.placementId===void 0)continue;let A=ke.get(E.groupId);A||(A=new Map,ke.set(E.groupId,A)),A.set(E.placementId,(A.get(E.placementId)??0)+1)}const Oe=new Map;for(const E of D){if(E.unplaced||E.content.layoutMode!=="auto"||E.groupId===null)continue;let A=Oe.get(E.groupId);A||(A=new Map,Oe.set(E.groupId,A));const I=`${E.position.r},${E.position.c}`;A.set(I,(A.get(I)??0)+1)}for(const E of V)if(E.callout)for(const A of E.callout.placements??[]){const I=ke.get(E.id)?.get(A.id)??0;if(I>1)throw new Error(`scene.groups.${E.id}.callout.placements.${A.id} is claimed by multiple auto items.`);const Y={..._(m,A.r,A.c),radius:se(E,A)};for(const M of V)for(const q of[...M.placements??[],...M.callout?.placements??[]]){if(M.id===E.id&&q.id===A.id)continue;const ae=_(m,q.r,q.c);if(xe(Y,{...ae,radius:se(M,q)}))throw new Error(`scene.groups.${E.id}.callout.placements overlaps another placement.`)}for(const M of D){if(M.unplaced)continue;const q=M.layerId??T,ae=q===void 0?!1:je.get(q)?.locked??!1;if(!M.locked&&!ae&&M.groupId===E.id&&M.content.layoutMode==="auto"&&M.position.r===A.r&&M.position.c===A.c&&(M.placementId===A.id||M.placementId===void 0&&Oe.get(E.id)?.get(`${A.r},${A.c}`)===1)||ae&&!M.locked&&I===1&&Oe.get(E.id)?.get(`${A.r},${A.c}`)===1&&M.origin==="generated"&&M.content.layoutMode==="auto"&&M.groupId===E.id&&M.placementId===A.id&&M.position.r===A.r&&M.position.c===A.c)continue;const Ve=M.groupId===null?void 0:V.find(ue=>ue.id===M.groupId)?.placements?.find(ue=>ue.r===M.position.r&&ue.c===M.position.c)??V.find(ue=>ue.id===M.groupId)?.callout?.placements?.find(ue=>ue.r===M.position.r&&ue.c===M.position.c),Le=_(m,M.position.r,M.position.c,M.position.offsetX,M.position.offsetY);if(xe(Y,{...Le,radius:X(M,Ve?.itemProperties)}))throw new Error(`scene.groups.${E.id}.callout.placements overlaps an occupied item.`)}}return{options:b,contour:C,groups:V,hiddenGroupIds:ge,defaults:x,dataProperties:Ie,...re===void 0?{}:{layers:re,primaryLayerId:T},items:D}}parseSvgContours(e){const t=new DOMParser().parseFromString(e,"image/svg+xml");if(t.querySelector("parsererror"))throw new Error("The file is not valid SVG XML.");const i=t.documentElement;if(i.localName.toLowerCase()!=="svg")throw new Error("The document root must be <svg>.");const o=i.getAttribute("viewBox")||i.getAttribute("viewbox"),s=o?o.trim().split(/[\s,]+/).map(Number):[0,0,Number.parseFloat(i.getAttribute("width")??""),Number.parseFloat(i.getAttribute("height")??"")];if(s.length!==4||s.some(u=>!Number.isFinite(u))||s[2]<=0||s[3]<=0)throw new Error("SVG needs a valid viewBox or width and height.");const n={x:s[0],y:s[1],width:s[2],height:s[3]},a=i.querySelector('[id="features"]'),c=Array.from((a??i).querySelectorAll("path")),l=new Map,d=[];for(const[u,p]of c.entries()){const h=p.getAttribute("d")?.trim()??"";if(!h)continue;const f=p.getAttribute("id")?.trim()||`region-${u+1}`,g=l.get(f)??0;l.set(f,g+1);const m=[];for(let y=p.parentElement;y&&y!==i;y=y.parentElement)m.unshift(y);const b=m.map(y=>y.getAttribute("transform")).filter(y=>!!y),x=p.getAttribute("transform");x&&b.push(x),d.push({id:g===0?f:`${f}-${g+1}`,pathData:h,fillRule:p.getAttribute("fill-rule")==="evenodd"?"evenodd":"nonzero",transforms:b})}return{viewBox:n,contours:d}}createItemSettingsFromElement(e,t,i=this.getSceneItemKey(e,t)){const o=e.sPercent!==null?"%":"px",s=Ge(e.iconSizeUnit)?e.iconSizeUnit:"px",n=mr(e.labelPosition)?e.labelPosition:"bottom",a=jt(e.labelType)?e.labelType:"number",c=Ct(e.layoutMode)?e.layoutMode:"fixed",l=zr(e.shape)?e.shape:"hex",d=e.groupId,u=e.getAttribute("data-type-id")??"",p=e.label;return{key:i,locked:e.locked,name:e.getAttribute("aria-label")??`Type ${u}, group ${d}, value ${p}`,r:e.r??0,c:e.c??0,offsetX:e.offsetX??0,offsetY:e.offsetY??0,icon:e.icon,label:p,layoutMode:c,labelType:a,labelPosition:n,shape:l,fillEnabled:e.fillEnabled,size:(o==="%"?e.sPercent:e.s)??16,sizeUnit:o,iconSize:e.iconSize??12,iconSizeUnit:s,labelRadius:e.labelRadius,labelFontSize:e.labelFontSize??10,textColor:e.style.getPropertyValue("--ff-hex-item-color").trim(),textStrokeEnabled:e.textStrokeEnabled,textStrokeColor:e.style.getPropertyValue("--ff-hex-item-text-stroke-color").trim(),textStrokeWidth:this.readNumericStyle(e,"--ff-hex-item-text-stroke-width",e.textStrokeWidth),fillColor:e.style.getPropertyValue("--ff-hex-item-background").trim(),borderColor:e.style.getPropertyValue("--ff-hex-item-border-color").trim(),borderWidth:this.readNumericStyle(e,"--ff-hex-item-border-width",2),zIndex:this.readNumericStyle(e,"--ff-hex-item-z-index",t+1)}}readNumericAttribute(e,t,i){const o=e.getAttribute(t);if(o===null)return i;const s=Number(o);return Number.isFinite(s)?s:i}readNumericStyle(e,t,i){const o=Number.parseFloat(e.style.getPropertyValue(t));return Number.isFinite(o)?o:i}selectSvgFile(e){const t=e.currentTarget.files?.[0];if(!t)return;const i=++this._svgRequestId;this.svgStatus=`Loading ${t.name}: завантаження файлу SVG...`,this._svgReady=this.readSvgFile(t,i)}applySvgContours(){this.groupLayerLocked||(this._svgReady=this.applySelectedSvg())}async readSvgFile(e,t){try{const i=await e.text();if(t!==this._svgRequestId||(this._preserveLoadedGroups=!1,this._selectedSvgText=i,this.svgFileName=e.name,await this.prepareSelectedSvg(),t!==this._svgRequestId))return;this.svgStatus=`Файл ${e.name} завантажено. Застосуйте контури, щоб призначити групи шестикутної сітки.`,this.scheduleSceneAutosave()}catch(i){if(t!==this._svgRequestId)return;this.clearSvgPreview(),this.svgStatus=`Could not read ${e.name}: не вдалося прочитати файл SVG. ${i instanceof Error?i.message:String(i)}`}}clearSvgPreview(){this._contoursApplied=!1,this._svgViewBox=null,this._svgRegions=[],this.shadowRoot?.querySelector(".region-map-underlay")?.replaceChildren()}async prepareSelectedSvg(e=this._svgRequestId,t=!1){this.clearSvgPreview(),this._contoursApplied=t;const i=this.parseSvgContours(this._selectedSvgText);if(i.contours.length===0)throw new Error("No closed contour paths were found.");this._svgViewBox=i.viewBox,this.renderSvgContours(i.contours),await new Promise(o=>requestAnimationFrame(()=>o())),e===this._svgRequestId&&this.positionSvgUnderlay()}async applySelectedSvg(){const e=this._svgRequestId;if(!this._selectedSvgText){this.svgStatus="Спочатку виберіть файл SVG.";return}try{if(this.mode!=="hex"){this.svgStatus="Щоб застосувати контури, перейдіть у режим шестикутної сітки.";return}if((!this._svgViewBox||this._svgRegions.length===0)&&await this.prepareSelectedSvg(e),e!==this._svgRequestId||(await new Promise(t=>requestAnimationFrame(()=>t())),e!==this._svgRequestId))return;if(!this.positionSvgUnderlay())throw new Error("The grid layout is not ready.");if(e!==this._svgRequestId)return;this._preserveLoadedGroups=!1,this._contoursApplied=!0,this.assignSvgGroupsToGrid(),this.scheduleSceneAutosave()}catch(t){if(e!==this._svgRequestId)return;this.svgStatus=`Не вдалося застосувати контури з файлу ${this.svgFileName}: ${t instanceof Error?t.message:String(t)}`}}renderSvgContours(e){const t=this.shadowRoot?.querySelector(".region-map-underlay");if(!t)throw new Error("The SVG underlay is not available.");t.replaceChildren();const i=this._svgViewBox;if(!i)throw new Error("The SVG viewBox is not available.");t.setAttribute("viewBox",`${i.x} ${i.y} ${i.width} ${i.height}`),t.setAttribute("preserveAspectRatio","xMidYMid meet"),this._svgRegions=e.map((o,s)=>{const n=this.ownerDocument.createElementNS(hn,"g");n.setAttribute("data-region-id",o.id);let a=n;for(const d of o.transforms){const u=this.ownerDocument.createElementNS(hn,"g");u.setAttribute("transform",d),a.append(u),a=u}const c=this.ownerDocument.createElementNS(hn,"path"),l=Do[s%Do.length];return c.setAttribute("d",o.pathData),c.setAttribute("fill",l.fill),c.setAttribute("stroke",l.border),c.setAttribute("stroke-width","0.8"),c.setAttribute("fill-rule",o.fillRule),n.setAttribute("data-region-index",String(s)),a.append(c),t.append(n),{id:o.id,path:c}})}positionSvgUnderlay(){const e=this.sceneElement,t=this.shadowRoot?.querySelector(".region-map-underlay");if(!e||!t)return!1;const i=["--ff-tri-layer-width","--ff-tri-layer-height"].map(o=>Number.parseFloat(e.style.getPropertyValue(o)));return i.some(o=>!Number.isFinite(o)||o<=0)?!1:(t.style.left="0px",t.style.top="0px",t.style.width=`${i[0]}px`,t.style.height=`${i[1]}px`,t.style.transform=`translate(${this.contourOffsetX}px, ${this.contourOffsetY}px) scale(${this.contourScale})`,t.style.transformOrigin="top left",!0)}assignSvgGroupsToGrid(){if(this.mode!=="hex"){this._pendingSvgGroupAssignment=!1,this.groups=[],this.syncSceneState(),this.clearItemGroupIds(),this.svgStatus="Щоб застосувати контури, перейдіть у режим шестикутної сітки.";return}const e=this.sceneElement,t=this._svgViewBox;if(!e||!t)return;const i=Number.parseFloat(e.style.getPropertyValue("--ff-tri-layer-padding-x")),o=Number.parseFloat(e.style.getPropertyValue("--ff-tri-layer-padding-y")),s=Number.parseFloat(e.style.getPropertyValue("--ff-tri-layer-width")),n=Number.parseFloat(e.style.getPropertyValue("--ff-tri-layer-height")),a=e.sceneSurface?.getBoundingClientRect();if(!a||[i,o,s,n].some(m=>!Number.isFinite(m))||s<=0||n<=0||a.width<=0||a.height<=0)return;const c=a.width/s,l=a.height/n,d=Ce(this.rows,this.columns).centers,u=new Map(this.groups.map(m=>[m.id,m.placements])),p=new Map(this.groups.map(m=>[m.id,m])),h=this._svgRegions.map((m,b)=>{const x=Do[b%Do.length],y=p.get(m.id);return{id:m.id,name:m.id,borderColor:x.border,borderWidth:1,fillColor:x.fill,centers:[],...y?.callout===void 0?{}:{callout:{...y.callout,algorithm:y.callout.algorithm??Gr,point:y.callout.point?{...y.callout.point}:null,mixedMode:y.callout.mixedMode??!1,...y.callout.placements===void 0?{}:{placements:y.callout.placements.map(C=>kt(C))}}}}}),f=this._svgRegions.map(m=>m.path.getScreenCTM()?.inverse()??null);let g=0;for(const m of d){const b=_(this.step,m.r,m.c),x=new DOMPoint(a.left+(i+b.x)*c,a.top+(o+b.y)*l),y=this._svgRegions.findIndex((C,N)=>{const v=f[N];if(!v)return!1;const P=new DOMPoint(v.a*x.x+v.c*x.y+v.e,v.b*x.x+v.d*x.y+v.f);return this._svgRegions[N].path.isPointInFill(P)});y<0||(h[y].centers.push(m),g++)}for(const m of h){const b=u.get(m.id);if(!b)continue;const x=new Set(m.centers.map(C=>`${C.r},${C.c}`)),y=Mt(this.mode,this.rows,this.columns);m.placements=b.filter(C=>x.has(`${C.r},${C.c}`)&&y.isGroupCenterValid(C.r,C.c)).map(C=>kt(C))}this._pendingSvgGroupAssignment=!1,this.groups=h,this.syncSceneState(),this.syncItemGroupIds(h),this.applyGroupVisibility(),this.svgStatus=`Застосовано областей: ${h.length}; центрів шестикутної сітки призначено групам: ${g}.`}assignNeighboringSvgGroupCenters(e,t,i,o,s,n,a){const c=e.map(y=>y.centers.map(C=>({...C}))),l=new Set;for(const y of c)for(const C of y)l.add(`${C.r},${C.c}`);const d=new Map(t.map(y=>[`${y.r},${y.c}`,y])),u=new Map;for(const[y,C]of c.entries())for(const N of C)for(const v of wr(N)){const P=`${v.r},${v.c}`;if(l.has(P))continue;const L=d.get(P);if(!L)continue;const O=u.get(P);O?O.groupIndexes.add(y):u.set(P,{center:L,groupIndexes:new Set([y])})}const p=.7*this.step*Math.sqrt(3)/2,h=p**2,f=this.step*Math.sqrt(3),g=Math.max(f,Number.EPSILON),m=new Map,b=y=>{const C=m.get(y);if(C)return C;const N=new Map;m.set(y,N);const v=this._svgRegions[y]?.path,P=v?.getScreenCTM();if(!v||!P||![P.a,P.b,P.c,P.d,P.e,P.f].every(Number.isFinite))return N;const L=v.getTotalLength();if(!Number.isFinite(L)||L<=0)return N;const O=Math.hypot(P.a/n,P.b/a,P.c/n,P.d/a);if(!Number.isFinite(O)||O<=0)return N;const V=Math.min(ay,Math.max(1,Math.ceil(L*O/(p/4)))),ge=j=>{const w=v.getPointAtLength(j);return{x:(P.a*w.x+P.c*w.y+P.e-i.left)/n-o,y:(P.b*w.x+P.d*w.y+P.f-i.top)/a-s}},re=(j,w)=>{const D={start:j,end:w},K=Math.floor((Math.min(j.x,w.x)-f)/g),ye=Math.floor((Math.max(j.x,w.x)+f)/g),Ie=Math.floor((Math.min(j.y,w.y)-f)/g),je=Math.floor((Math.max(j.y,w.y)+f)/g);for(let X=Ie;X<=je;X++)for(let se=K;se<=ye;se++){const xe=`${se},${X}`;let ke=N.get(xe);ke||(ke=[],N.set(xe,ke)),ke.push(D)}};let T=ge(0);for(let j=1;j<=V;j++){const w=ge(L*j/V);re(T,w),T=w}return N};let x=0;for(const y of u.values()){const C=_(this.step,y.center.r,y.center.c),N=`${Math.floor(C.x/g)},${Math.floor(C.y/g)}`;let v=-1,P=Number.POSITIVE_INFINITY;for(let L=0;L<e.length;L++){if(!y.groupIndexes.has(L))continue;const O=b(L).get(N);if(!O)continue;let V=Number.POSITIVE_INFINITY;for(const ge of O){const re=ge.end.x-ge.start.x,T=ge.end.y-ge.start.y,j=re*re+T*T,w=j===0?0:Math.max(0,Math.min(1,((C.x-ge.start.x)*re+(C.y-ge.start.y)*T)/j)),D=C.x-(ge.start.x+w*re),K=C.y-(ge.start.y+w*T),ye=D*D+K*K;ye<V&&(V=ye)}V>=h&&V<P&&(P=V,v=L)}v<0||(e[v].centers.push(y.center),x++)}return x}syncItemGroupIds(e){const t=this.getSceneItemsLayers(),i=new Map;for(const o of this.getSceneItems()){const s=t.find(p=>p.isGeneratedItem(o));let n;if(s){const p=i.get(s)??0;i.set(s,p+1),n=s.itemsData[p]}const a=e.find(p=>p.centers.some(h=>h.r===o.r&&h.c===o.c)),c=o.getAttribute(Xi),l=o.getAttribute(Hi),d=a===void 0&&o.layoutMode==="auto"&&o.hasAttribute("data-ff-tri-layer-items-data")&&c!==null&&l!==null?e.find(p=>p.id===c&&p.callout?.placements?.some(h=>h.id===l&&h.r===o.r&&h.c===o.c)):void 0,u=a===void 0&&o.layoutMode==="auto"&&n!==void 0?e.find(p=>p.id===n.groupId&&p.callout?.placements?.some(h=>h.r===o.r&&h.c===o.c)):void 0;o.groupId=a?.id??d?.id??u?.id??""}}clearItemGroupIds(){this.syncItemGroupIds([])}scheduleSvgApply(e=!1){this._svgViewBox&&(e&&(this._pendingSvgGroupAssignment=!0),this._applyFrame===0&&(this._applyFrame=requestAnimationFrame(()=>{if(this._applyFrame=0,!!this.positionSvgUnderlay()){if(!this._contoursApplied||this._preserveLoadedGroups){this._pendingSvgGroupAssignment=!1;return}this._pendingSvgGroupAssignment&&this.assignSvgGroupsToGrid()}})))}async loadSceneFile(e){const t=e.currentTarget,i=t.files?.[0];if(!i)return;const o=++this._sceneLoadRequestId;this.sceneOperationMessage=`Читання файлу «${i.name}»...`,this.svgStatus=`Loading scene ${i.name}: завантаження сцени...`;try{if(i.size>jr)throw new Error(`scene file exceeds the ${jr/(1024*1024)} MiB limit.`);const s=await i.text();if(o!==this._sceneLoadRequestId||(this.sceneOperationMessage=`Перевірка файлу «${i.name}»...`,await this.waitForSceneOperationPaint(),o!==this._sceneLoadRequestId))return;const n=this.parseSceneDocument(JSON.parse(s));if(o!==this._sceneLoadRequestId||(this.sceneOperationMessage=`Відновлення сцени «${i.name}»...`,await this.waitForSceneOperationPaint(),o!==this._sceneLoadRequestId)||(this._svgReady=this.restoreScene(n,o),await this._svgReady,o!==this._sceneLoadRequestId))return;this.sceneStartupVisible=!1,this._autosaveEnabled=this.isConnected,this.scheduleSceneAutosave(),this.svgStatus=`Сцену ${i.name} завантажено.`}catch(s){if(o!==this._sceneLoadRequestId)return;this.svgStatus=`Не вдалося завантажити сцену ${i.name}: ${s instanceof Error?s.message:String(s)}`}finally{o===this._sceneLoadRequestId&&(t.value="",this.sceneOperationMessage=null)}}restoreScene(e,t){if(t!==this._sceneLoadRequestId)return Promise.resolve();this.applySceneRestoreLayerLocks(this._sceneRestoreId),this.clearSceneRestoreAttributes(),this._sceneRestoreLayerLocks.clear(),this._sceneRestoreLockOwnerId=0;const i=++this._sceneRestoreId;this._sceneRestoreInProgress=!0,this._autosaveTimer!==null&&(this.ownerDocument.defaultView?.clearTimeout(this._autosaveTimer),this._autosaveTimer=null);let o=!1;return this.restoreSceneContent(e,t,i).then(()=>{o=!0}).finally(()=>this.finishSceneRestore(i,t,o))}finishSceneRestore(e,t,i){e===this._sceneRestoreId&&(this.applySceneRestoreLayerLocks(e),this.clearSceneRestoreAttributes(),this._sceneRestoreInProgress=!1,this._sceneRestoreLockOwnerId===e&&(this._sceneRestoreLayerLocks.clear(),this._sceneRestoreLockOwnerId=0),i&&t===this._sceneLoadRequestId&&this.isConnected&&this._autosaveEnabled&&this.scheduleSceneAutosave())}applySceneRestoreLayerLocks(e){if(this._sceneRestoreLockOwnerId===e){for(const t of this._sceneRestoreLayerLocks.values())t.layer.locked=t.locked;this.refreshLayerSummaries()}}clearSceneRestoreAttributes(){const e=new Set(this.getSceneItemsLayers());for(const t of this._sceneRestoreLayerLocks.values())e.add(t.layer);for(const t of e)t.removeAttribute(lc)}async restoreSceneContent(e,t,i){const o=this.sceneElement??this.shadowRoot?.querySelector("ff-scene");if(!o)throw new Error("The scene element is not available.");const s=this.createSceneLayerRestorePlan(e),{layers:n,itemsByLayer:a}=s;this._sceneRestoreLayerLocks=this.createSceneLayerRestoreLockStates(s,e),this._sceneRestoreLockOwnerId=i;for(const m of new Set([...s.currentLayers,...n]))m.setAttribute(lc,"");this.clearSelectedPlacementState(),this.commitSceneLayerRestorePlan(s,o,e),this.exitCreateItemMode();const c=++this._svgRequestId;this._preserveLoadedGroups=!0,this._applyFrame!==0&&cancelAnimationFrame(this._applyFrame),this._applyFrame=0,this._selectedSvgText=e.contour?.source??"",this.svgFileName=e.contour?.fileName??"",this.contourOffsetX=e.contour?.offsetX??0,this.contourOffsetY=e.contour?.offsetY??0,this.contourScale=e.contour?.scale??1,this.clearSvgPreview();for(const m of n){const b=Array.from(m.children).filter(x=>x instanceof Z);m.itemsData=[],m.removeItems(b)}this.itemSettings=[],this.positionReadouts=[],this.selectedKeys=[],this.contextRowExpanded=!1,this.activeControlGroup="fieldView",this._collapsedGroupIds.clear(),this._expandedCenterGroupIds.clear(),this._hiddenGroupIds.clear();for(const m of e.hiddenGroupIds)this._hiddenGroupIds.add(m);const l=e.options;this.step=l.step,this.rows=l.rows,this.columns=l.columns,this.mode=l.mode,this.fieldView=l.fieldView,this.spotView=l.spotView,this.spotRadius=l.spotRadius,this.centerRadius=l.centerRadius,this.centerColor=l.centerColor,this.vertexRadius=l.vertexRadius,this.vertexColor=l.vertexColor,this.triNodeSize=l.triNodeSize,this.triNodeColor=l.triNodeColor,this.fieldLineWidth=l.fieldLineWidth,this.snapTarget=l.snapTarget,this.dragSnap=l.dragSnap,this.rebound=l.rebound,this.groupMode=l.groupMode,this.showGroups=l.showGroups,this.groupLayerLocked=l.groupLayerLocked,this.showContourOverlay=l.showContourOverlay,this.paperSize=l.paperSize,this.showPaperOutline=l.showPaperOutline,this.showPlacements=l.showPlacements,this.placementLayerLocked=l.placementLayerLocked,this.showHexOverlay=l.showHexOverlay,this.showGeneratedItems=l.showGeneratedItems,this.showSlottedItems=l.showSlottedItems,this.highlightFixedItems=l.highlightFixedItems,this.highlightStaticItems=l.highlightStaticItems,this.groupEditingEnabled=!1,this.groupEditAction=null,this.selectedGroupId=null,this.defaultItemProperties=this.cloneSceneSlotProperties(e.defaults),this.editingDefaultItemProperties=!1,this.groups=e.groups.map(m=>It(m)),this.syncSceneState();const d=e.items.filter(m=>m.origin==="generated"),u=m=>{const b=e.dataProperties?.[m.key];return{typeId:Number(m.typeId),value:Number(m.value),groupId:m.groupId??"",r:m.position.r,c:m.position.c,...b===void 0?{}:{itemProperties:{...b}}}},p=d.map(u),h=new Map;for(const m of n){const b=a.get(m)??[],x=new Map;for(const P of b){if(P.origin!=="slotted")continue;const L=this.ownerDocument.createElement("ff-hex-item");P.slotBaseLabelRadius!==void 0&&(L.labelRadius=P.slotBaseLabelRadius),x.set(P.key,L),m.append(L)}const C=b.filter(P=>P.origin==="generated").map(u);m.itemsData=C;const N=(m.items??[]).filter(P=>P.hasAttribute("data-ff-tri-layer-items-data"));let v=0;for(const P of b){const L=P.origin==="generated"?N[v++]:x.get(P.key);if(!L)throw new Error(`Could not recreate scene item "${P.key}".`);this.applySceneItem(L,P),m.append(L),h.set(P.key,L)}}if(this.selectedKeys=[],this.scheduleGroupVisibilityRestore(),e.contour&&(await this.prepareSelectedSvg(c,e.contour.applied),t!==this._sceneLoadRequestId)||(await Kt.next(),t!==this._sceneLoadRequestId))return;for(const m of e.items){const b=h.get(m.key);b&&this.applySceneItem(b,m)}const f=e.items.map((m,b)=>{const x=h.get(m.key);if(!x)throw new Error(`Could not recreate scene item "${m.key}".`);return this.createItemSettingsFromElement(x,b,m.key)});this.itemSettings=f,this.positionReadouts=f.map(({key:m,name:b,r:x,c:y,offsetX:C,offsetY:N})=>({key:m,name:b,r:x,c:y,offsetX:C,offsetY:N})),this.mockDataGenerated=p.length>0,this.mockDataJson=JSON.stringify(p,null,2);const g=d.filter(m=>m.unplaced).length;for(const m of n){const b=(a.get(m)??[]).filter(x=>x.origin==="generated");m.unplacedItemsCount=b.filter(x=>x.unplaced).length}this.mockDataStatus=p.length===0?"Тестові дані не згенеровано.":g>0?`Розміщено ${p.length-g} із ${p.length}; не розміщено ${g}, оскільки немає вільних центрів груп.`:`Розміщено ${p.length} із ${p.length}; усі записи поміщено.`,this.selectedKeys=[],this.syncSelectionState(),this.refreshGroupInspector(),this.refreshPlacementGroups(),this.applyGroupVisibility(),this.sceneElement?.refreshCalloutDecorations(),this.syncItemHighlightMarkers()}sceneItemPropertyOverrides(e){return{offsetX:e.position.offsetX,offsetY:e.position.offsetY,icon:e.content.icon,label:e.content.label,labelType:e.content.labelType,labelPosition:e.content.labelPosition,shape:e.content.shape,fillEnabled:e.content.fillEnabled,size:e.appearance.size,sizeUnit:e.appearance.sizeUnit,iconSize:e.appearance.iconSize,iconSizeUnit:e.appearance.iconSizeUnit,...e.appearance.labelRadius===null?{}:{labelRadius:e.appearance.labelRadius},labelFontSize:e.appearance.labelFontSize,textColor:e.appearance.textColor,textStrokeEnabled:e.appearance.textStrokeEnabled,textStrokeColor:e.appearance.textStrokeColor,textStrokeWidth:e.appearance.textStrokeWidth,fillColor:e.appearance.fillColor,borderColor:e.appearance.borderColor,borderWidth:e.appearance.borderWidth,zIndex:e.appearance.zIndex}}applySceneItem(e,t){e.dataset.node=t.key,t.typeId===null?e.removeAttribute("data-type-id"):e.setAttribute("data-type-id",t.typeId),t.value===null?e.removeAttribute("data-value"):e.setAttribute("data-value",t.value),t.groupId===null?e.removeAttribute("group-id"):e.setAttribute("group-id",t.groupId),e.locked=t.locked??!1,e.setAttribute("role","option"),e.setAttribute("aria-label",t.name),e.setAttribute("aria-selected","false"),e.removeAttribute("data-selected"),this.getSceneItemsLayers().find(o=>o===e.parentElement)?.setItemPropertyOverrides(e,this.sceneItemPropertyOverrides(t)),this.applyItemSettings({key:t.key,name:t.name,locked:t.locked??!1,...t.position,...t.content,...t.appearance}),t.placementId!==void 0&&t.groupId!==null?(e.setAttribute(Hi,t.placementId),e.setAttribute(Xi,t.groupId)):(e.removeAttribute(Hi),e.removeAttribute(Xi)),t.unplaced?(e.setAttribute("data-unplaced",""),e.setAttribute("aria-hidden","true"),e.hidden=!0,e.tabIndex=-1,e.style.visibility="hidden"):(e.removeAttribute("data-unplaced"),e.removeAttribute("aria-hidden"),e.hidden=!1,e.tabIndex=0,e.style.removeProperty("visibility"))}applyItemSettings(e){const t=this.getHexItem(e.key);!t||!this.isItemLayerEditable(t)||(t.layoutMode=e.layoutMode,t.r=e.r,t.c=e.c,t.offsetX=e.offsetX,t.offsetY=e.offsetY,t.icon=e.icon,t.labelType=e.labelType,t.label=e.label,t.labelPosition=e.labelPosition,t.shape=e.shape,t.fillEnabled=e.fillEnabled,e.fillEnabled?t.removeAttribute("fill-enabled"):t.setAttribute("fill-enabled","false"),e.sizeUnit==="%"?(t.s=null,t.sPercent=e.size):(t.sPercent=null,t.s=e.size),t.iconSize=e.iconSize,t.iconSizeUnit=e.iconSizeUnit,e.labelRadius!==null&&(t.labelRadius=e.labelRadius),t.labelFontSize=e.labelFontSize,t.setAttribute("aria-label",e.name),t.style.setProperty("--ff-hex-item-color",e.textColor),t.textStrokeEnabled=e.textStrokeEnabled,t.textStrokeColor=e.textStrokeColor,t.textStrokeWidth=e.textStrokeWidth,t.style.setProperty("--ff-hex-item-background",e.fillColor),t.style.setProperty("--ff-hex-item-border-color",e.borderColor),t.style.setProperty("--ff-hex-item-border-width",`${e.borderWidth}px`),t.style.setProperty("--ff-hex-item-z-index",String(e.zIndex)),t.locked=e.locked)}validGroupCenters(e){const t=Mt(this.mode,this.rows,this.columns);return(e.centers??[]).filter(i=>t.isGroupCenterValid(i.r,i.c))}validPlacementCenters(e,t="group"){return t==="callout"&&this.mode==="hex"?Ce(this.rows,this.columns).centers:this.validGroupCenters(e)}findAvailableCalloutAnchor(e){if(this.mode!=="hex")return null;const t=new Set(this.validGroupCenters(e).map(s=>`${s.r},${s.c}`)),i=this.getOccupiedPlacementCells(),o=this.getActiveFixedItems();return Ce(this.rows,this.columns).centers.find(s=>{const n=`${s.r},${s.c}`;return!t.has(n)&&!i.has(n)&&!this.isPlacementCenterBlockedByFixed(s,o)&&!this.isPlacementCenterBlockedByPlacementSlots(s)})??null}findCalloutGroupAtClient(e,t){if(this.mode!=="hex")return null;const i=this.getLayerPointFromClient(e,t);if(!i)return null;for(const o of this.groups){const s=this.validGroupCenters(o);if(s.length>0&&to(this.step,i.x,i.y,s))return o.id}return null}resolveCalloutSite(e,t){if(this.mode!=="hex")return null;const i=this.getLayerSurfaceMetrics(),o=this.getLayerPointFromClient(e,t,i);if(!i||!o)return null;const s=Ce(this.rows,this.columns).centers,n=to(this.step,o.x,o.y,s);if(!n)return null;if(!(o.x>=0&&o.x<i.surfaceWidth&&o.y>=0&&o.y<i.surfaceHeight)){const l=_(this.step,n.r,n.c);if(l.x<0||l.x>=i.surfaceWidth||l.y<0||l.y>=i.surfaceHeight)return null}const c=`${n.r},${n.c}`;return this.groups.some(l=>this.validGroupCenters(l).some(d=>d.r===n.r&&d.c===n.c))||this.getOccupiedPlacementCells().has(c)||this.isPlacementCenterBlockedByFixed(n,this.getActiveFixedItems())?null:(_(this.step,n.r,n.c),this.isPlacementCenterBlockedByPlacementSlots(n)?null:{r:n.r,c:n.c})}getActiveFixedItems(){return this.getSceneItems().filter(e=>(e.locked===!0||e.layoutMode==="fixed")&&!e.hasAttribute("data-unplaced"))}isPlacementCenterBlockedByFixed(e,t){const i=_(this.step,e.r,e.c);return t.some(o=>{if(o.r===e.r&&o.c===e.c)return!0;const s=_(this.step,typeof o.r=="number"&&Number.isFinite(o.r)?o.r:0,typeof o.c=="number"&&Number.isFinite(o.c)?o.c:0,typeof o.offsetX=="number"&&Number.isFinite(o.offsetX)?o.offsetX:0,typeof o.offsetY=="number"&&Number.isFinite(o.offsetY)?o.offsetY:0),n=o.getOuterRadius(this.step),a=i.x-s.x,c=i.y-s.y,l=this.step+n;return a*a+c*c>=l*l?!1:Math.max(ht(i,this.step,s,n),ht(s,n,i,this.step))>1e-8})}getOccupiedPlacementCells(e,t,i="group"){const o=new Set;for(const s of this.groups)for(const n of["group","callout"]){const a=n==="callout"?s.callout?.placements??[]:s.placements??[];for(const c of a)s.id===e&&n===i&&(t===void 0||c.id===t)||o.add(`${c.r},${c.c}`)}return o}isPlacementCenterBlockedByPlacementSlots(e){const t=_(this.step,e.r,e.c);for(const i of this.groups)for(const o of[...i.placements??[],...i.callout?.placements??[]]){if(!Number.isSafeInteger(o.r)||!Number.isSafeInteger(o.c))continue;const s=_(this.step,o.r,o.c),n=t.x-s.x,a=t.y-s.y,c=this.step*2;if(!(n*n+a*a>=c*c)&&Math.max(ht(t,this.step,s,this.step),ht(s,this.step,t,this.step))>1e-8)return!0}return!1}getCalloutAutoItemCount(e){return this.getSceneItemsLayers().filter(t=>!t.locked).reduce((t,i)=>t+(i.items??[]).filter(o=>o.layoutMode==="auto"&&o.groupId===e).length,0)}getCalloutAlgorithm(e){return e.callout?.algorithm??this._calloutAlgorithms.get(e.id)??Gr}refreshGroupInspector(){const e=new Set(this.groups.map(u=>u.id));for(const u of this._expandedCenterGroupIds)e.has(u)||this._expandedCenterGroupIds.delete(u);const t=this.getSceneItems(),i=this.getActiveFixedItems(),o=this.getOccupiedPlacementCells(),n=(this.mode==="hex"?Ce(this.rows,this.columns).centers:[]).some(u=>!o.has(`${u.r},${u.c}`)&&!this.isPlacementCenterBlockedByFixed(u,i)),a=new Map;for(const u of this.getSceneItemsLayers())a.set(u,u);const c=new Set;for(const u of t)(u.parentElement?a.get(u.parentElement):void 0)?.isGeneratedItem(u)&&c.add(u);const l=this.getSceneItemKeyMap(t),d=new Map;for(const u of this.groups)d.set(u.id,{members:[],slottedItems:[],generatedFixedItems:[],generatedAutoItems:[]});for(const[u,p]of t.entries()){if(typeof p.groupId!="string")continue;const h=d.get(p.groupId);if(!h)continue;const f=l.get(p)??p.dataset.node??`item-${u+1}`,g={key:f,icon:p.icon??"?",label:p.label?.trim()||f,selectable:this.isItemEditable(p)};h.members.push(g),c.has(p)?p.layoutMode==="fixed"?h.generatedFixedItems.push(g):h.generatedAutoItems.push(g):h.slottedItems.push(g)}this.inspectorGroups=this.groups.map(u=>({id:u.id,name:u.name?.trim()||u.id,color:u.fillColor||u.borderColor,selected:u.id===this.selectedGroupId,expanded:!this._collapsedGroupIds.has(u.id),centersExpanded:this._expandedCenterGroupIds.has(u.id),centers:u.centers.map(p=>({...p,groupId:u.id})),visible:!this._hiddenGroupIds.has(u.id),hasCallout:!!u.callout,calloutThreshold:u.callout?.activationThreshold??this._calloutThresholds.get(u.id)??1,calloutAlgorithm:this.getCalloutAlgorithm(u),calloutMixedMode:u.callout?.mixedMode??!1,calloutAnchor:u.callout?.point?{...u.callout.point}:null,calloutAnchorPlacement:u.callout?.point?{...u.callout.point}:null,calloutPlacements:(u.callout?.placements??[]).map((p,h)=>({...kt(p),groupId:u.id,placementList:"callout",number:h+1,selected:this.isPlacementSelected(u.id,p.id,"callout"),locked:this.placementLayerLocked})),calloutHasAvailableCell:n,calloutCanCreate:this.mode==="hex"&&!this.groupLayerLocked&&!u.callout,calloutExpanded:this._expandedCalloutGroupIds.has(u.id),calloutPlacing:this.calloutPlacementGroupId===u.id,calloutActive:!!(u.callout?.point&&this.getCalloutAutoItemCount(u.id)>u.callout.activationThreshold),...d.get(u.id)}))}findValidPlacement(e,t,i="group"){const o=this.groups.find(a=>a.id===e),n=(i==="callout"?o?.callout?.placements:o?.placements)?.find(a=>a.id===t);return!o||!n||!Number.isSafeInteger(n.r)||!Number.isSafeInteger(n.c)||!this.validPlacementCenters(o,i).some(a=>a.r===n.r&&a.c===n.c)?null:{group:o,placement:n}}setSelectedPlacementState(e,t,i="group"){this.clearItemSelectionForPlacementSelection(),this._selectedPlacementGroupId=e,this.selectedPlacementGroupId=e,this._selectedPlacementList=i,this.selectedPlacementList=i,this._selectedPlacementId=t.id,this.selectedPlacementId=t.id,this.groupLayerElement?.setSelectedPlacement(e,t.id,i),this._selectedPlacementProperties={...xn(),r:t.r,c:t.c,...t.itemProperties},this.selectedPlacementProperties=this._selectedPlacementProperties,this._slotPropertiesDisabled=!1,this.slotPropertiesDisabled=this._slotPropertiesDisabled,this.syncSelectedPlacementPropertiesEditor()}clearSelectedPlacementState(){this._selectedPlacementGroupId=null,this.selectedPlacementGroupId=this._selectedPlacementGroupId,this._selectedPlacementList=null,this.selectedPlacementList=this._selectedPlacementList,this._selectedPlacementId=null,this.selectedPlacementId=this._selectedPlacementId,this.groupLayerElement?.setSelectedPlacement(null,null),this._selectedPlacementProperties=xn(),this.selectedPlacementProperties=this._selectedPlacementProperties,this._slotPropertiesDisabled=!0,this.slotPropertiesDisabled=this._slotPropertiesDisabled,this.syncSelectedPlacementPropertiesEditor()}clearPlacementSelectionForItemSelection(){this.selectedPlacementGroupId===null&&this.selectedPlacementList===null&&this.selectedPlacementId===null||(this.clearSelectedPlacementState(),this.refreshPlacementGroups(),this.refreshGroupInspector())}clearItemSelectionForPlacementSelection(){this.selectedKeys.length!==0&&(this.selectedKeys=[],this.syncSelectionState())}syncSelectedPlacementPropertiesEditor(){const e=this.shadowRoot?.querySelector('ff-hex-properties[mode="slot"]');e&&(e.disabled=this.slotPropertiesDisabled,e.values=this._selectedPlacementProperties)}refreshSelectedPlacementState(){const e=this.selectedPlacementGroupId!==null&&this.selectedPlacementId!==null&&this.selectedPlacementList!==null?this.findValidPlacement(this.selectedPlacementGroupId,this.selectedPlacementId,this.selectedPlacementList):null;if(!e){this.clearSelectedPlacementState();return}this.setSelectedPlacementState(e.group.id,e.placement,this.selectedPlacementList??"group")}selectPlacement(e,t,i="group"){if(this.placementLayerLocked)return;const o=this.findValidPlacement(e,t,i);if(!o){(this.selectedPlacementGroupId!==null||this.selectedPlacementList!==null||this.selectedPlacementId!==null)&&(this.clearSelectedPlacementState(),this.refreshPlacementGroups(),this.refreshGroupInspector());return}if(this.selectedPropertiesTarget="slot",this.isPlacementSelected(e,t,i)){this.clearSelectedPlacementState(),this.refreshPlacementGroups(),this.refreshGroupInspector();return}this.setSelectedPlacementState(e,o.placement,i),this.refreshPlacementGroups(),this.refreshGroupInspector()}isPlacementSelected(e,t,i="group"){return this.selectedPlacementGroupId===e&&this.selectedPlacementList===i&&this.selectedPlacementId===t}refreshPlacementGroups(e){const t=e===void 0?void 0:this.groups.find(n=>n.id===e);if(e!==void 0&&!t){this.refreshSelectedPlacementState();return}this.refreshSelectedPlacementState();const i=this.getActiveFixedItems(),o=this.getOccupiedPlacementCells(),s=n=>({id:n.id,name:n.name?.trim()||n.id,placements:(n.placements??[]).map((a,c)=>({...a,groupId:n.id,placementList:"group",number:c+1,selected:this.isPlacementSelected(n.id,a.id,"group"),locked:this.placementLayerLocked})),hasAvailableCell:this.validPlacementCenters(n).some(a=>!o.has(`${a.r},${a.c}`)&&!this.isPlacementCenterBlockedByFixed(a,i))});if(t){const n=this.placementGroups.slice(),a=n.findIndex(l=>l.id===t.id),c=s(t);a<0?n.splice(this.groups.indexOf(t),0,c):n[a]=c,this.placementGroups=n;return}this.placementGroups=this.groups.map(s)}scheduleGroupVisibilityRestore(){const e=()=>{this.applyGroupVisibility(),this.sceneElement?.refreshCalloutDecorations()};e(),requestAnimationFrame(e)}applyGroupVisibility(){for(const t of this.getSceneItems()){const i=t.hasAttribute("data-unplaced")||t.getAttribute("aria-hidden")==="true"||t.groupId!==""&&this._hiddenGroupIds.has(t.groupId);t.hidden=i,t.style.display=i?"none":""}for(const t of Array.from(this.groupLayerElement?.querySelectorAll("ff-place-layer")??[])){const i=t.getAttribute("group-id");t.style.display=i!==null&&this._hiddenGroupIds.has(i)?"none":""}for(const t of Array.from(this.shadowRoot?.querySelectorAll(".region-map-underlay [data-region-id]")??[])){const i=t.getAttribute("data-region-id");t.style.display=i!==null&&this._hiddenGroupIds.has(i)?"none":""}const e=this.groupLayerElement?.groupShapesElement;for(const t of Array.from(e?.children??[])){if(!(t instanceof SVGGElement)||!t.hasAttribute("data-group-id"))continue;const i=t.getAttribute("data-group-id");t.style.display=i!==null&&this._hiddenGroupIds.has(i)?"none":""}}observeGroupShapes(){const e=this.groupLayerElement,t=e?.groupShapesElement,i=this.ownerDocument.defaultView?.MutationObserver;!e||!t||!i||(this._groupShapesObserver??=new i(()=>this.applyGroupVisibility()),t!==this._observedGroupShapesElement&&(this._groupShapesObserver.disconnect(),this._observedGroupShapesElement=t,this._groupShapesObserver.observe(e,{childList:!0}),this._groupShapesObserver.observe(t,{childList:!0,subtree:!0})))}handleGroupInspectorClick(e){const t=e.target;if(!(t instanceof Element)||this.groupLayerLocked&&t.closest('[data-group-action="visibility"], [data-group-center-action="add"], [data-group-center-action="remove"]')||t.closest("[data-placement-action]"))return!0;const i=t.closest("[data-group-center-action]");if(i){const c=i.getAttribute("data-group-id"),l=i.dataset.groupCenterAction;if(c&&l==="expand")this.toggleGroupCentersExpanded(c);else if(c&&l==="add")this.startGroupCenterAdd(c);else if(c&&l==="remove"){const d=i.getAttribute("data-r"),u=i.getAttribute("data-c"),p=d===null?Number.NaN:Number(d),h=u===null?Number.NaN:Number(u);Number.isInteger(p)&&Number.isInteger(h)&&this.removeGroupCenter(c,{r:p,c:h})}return!0}const o=t.closest("[data-group-action]"),s=o?.getAttribute("data-group-id");if(o&&s)return o.dataset.groupAction==="expand"?this.toggleGroupExpanded(s):o.dataset.groupAction==="visibility"?(this._hiddenGroupIds.has(s)?this._hiddenGroupIds.delete(s):this._hiddenGroupIds.add(s),this.refreshGroupInspector(),this.scheduleGroupVisibilityRestore(),this.scheduleSceneAutosave()):o.dataset.groupAction==="select"&&this.selectGroup(s),!0;const n=t.closest("[data-group-row]");if(!n||t.closest("button, input, select, textarea, a, label, [contenteditable='true'], [role='button']"))return!0;const a=n.getAttribute("data-group-id");return a&&this.toggleSelectedGroup(a),!0}startGroupCenterAdd(e){this.mode!=="hex"||!this.groupEditingEnabled||!this.groups.some(t=>t.id===e)||this.setGroupEditAction("add")}removeGroupCenter(e,t){const i=this.getUniqueGroup(e);if(this.mode!=="hex"||!this.groupEditingEnabled||!i||!i.centers.some(a=>a.r===t.r&&a.c===t.c))return;this.setGroupEditAction("remove");const o=ho({index:Ss({groups:this.groups,eligibleCenters:Ce(this.rows,this.columns).centers}),action:"remove",cell:t});if(!o.valid||o.reason===null||o.previousOwnerGroupId!==e){this.rejectGroupEdit(o.invalidReason??"the selected center cannot be removed");return}const s=this.getUniqueGroup(o.previousOwnerGroupId),n=o.nextOwnerGroupId===null?null:this.getUniqueGroup(o.nextOwnerGroupId);if(!s||o.nextOwnerGroupId!==null&&!n){this.rejectGroupEdit("a source or destination group is no longer unique");return}if(!this.groupLayerElement){this.rejectGroupEdit("the group layer is not available");return}this.applyGroupEdit({action:"remove",cell:o.cell,previousOwnerGroupId:o.previousOwnerGroupId,nextOwnerGroupId:o.nextOwnerGroupId,reason:o.reason},s,n)}toggleSelectedGroup(e){this.groupLayerLocked||this.groups.some(t=>t.id===e)&&(this.selectedGroupId=this.selectedGroupId===e?null:e)}toggleGroupCentersExpanded(e){this.groups.some(t=>t.id===e)&&(this._expandedCenterGroupIds.has(e)?this._expandedCenterGroupIds.delete(e):this._expandedCenterGroupIds.add(e),this.refreshGroupInspector())}toggleGroupExpanded(e){this.groups.some(t=>t.id===e)&&(this._collapsedGroupIds.has(e)?this._collapsedGroupIds.delete(e):this._collapsedGroupIds.add(e),this.refreshGroupInspector(),requestAnimationFrame(()=>{Array.from(this.shadowRoot?.querySelectorAll("[data-group-row]")??[]).find(i=>i.getAttribute("data-group-id")===e)?.scrollIntoView({block:"nearest",inline:"center"})}))}handleGroupSelectionChange(e){}getEditableGroupItemKeys(e){const t=this.getSceneItemKeyMap();return this.getSceneItems().filter(i=>i.getAttribute("group-id")===e&&this.isItemEditable(i)).map(i=>t.get(i)).filter(i=>i!==void 0)}toggleGroupSelection(e){const t=this.getEditableGroupItemKeys(e);if(t.length===0)return;this.clearPlacementSelectionForItemSelection(),this.selectedPropertiesTarget="items";const i=new Set(t),o=t.every(s=>this.selectedKeys.includes(s));this.selectedKeys=o?this.selectedKeys.filter(s=>!i.has(s)):Array.from(new Set([...this.selectedKeys,...t])),this.syncSelectionState()}isGroupSelected(e){const t=this.getEditableGroupItemKeys(e);return t.length>0&&t.every(i=>this.selectedKeys.includes(i))}getGroupItemCategoryKeys(e,t){const i=this.inspectorGroups.find(s=>s.id===e);return i?(t==="static"?i.slottedItems??[]:t==="fixed"?i.generatedFixedItems??[]:i.generatedAutoItems??[]).filter(s=>s.selectable&&this.isItemKeyEditable(s.key)).map(s=>s.key):[]}isGroupItemCategorySelected(e,t){const i=this.getGroupItemCategoryKeys(e,t);return i.length>0&&i.every(o=>this.selectedKeys.includes(o))}getGroupItemCategorySelectionLabel(e,t){const i=this.inspectorGroups.find(s=>s.id===e)?.name??e,o=t==="static"?"Статичні / слотовані":t==="fixed"?"Динамічні / фіксовані":"Динамічні / автоматичні";return this.isGroupItemCategorySelected(e,t)?`Зняти вибір з усіх об’єктів категорії «${o}» групи ${i}`:`Вибрати всі доступні об’єкти категорії «${o}» групи ${i}`}toggleGroupItemCategorySelection(e,t){const i=this.getGroupItemCategoryKeys(e,t);if(i.length===0)return;this.clearPlacementSelectionForItemSelection(),this.selectedPropertiesTarget="items";const o=new Set(i),s=i.every(n=>this.selectedKeys.includes(n));this.selectedKeys=s?this.selectedKeys.filter(n=>!o.has(n)):Array.from(new Set([...this.selectedKeys,...i])),this.syncSelectionState()}setContourTransform(e){const t=e.currentTarget,i=t.valueAsNumber;switch(t.name){case"contourOffsetX":if(!Number.isFinite(i)||Math.abs(i)>F){this.reportInvalidNumericInput(t,`має бути в межах +/- ${F} пікселів`,this.contourOffsetX);return}if(i===this.contourOffsetX)return;this.contourOffsetX=i;break;case"contourOffsetY":if(!Number.isFinite(i)||Math.abs(i)>F){this.reportInvalidNumericInput(t,`має бути в межах +/- ${F} пікселів`,this.contourOffsetY);return}if(i===this.contourOffsetY)return;this.contourOffsetY=i;break;case"contourScale":if(!Number.isFinite(i)||i<=0||i>To){this.reportInvalidNumericInput(t,`must be greater than 0 and at most ${To}`,this.contourScale);return}if(i===this.contourScale)return;this.contourScale=i;break;default:return}this._preserveLoadedGroups=!1,this.positionSvgUnderlay(),this.mode==="hex"&&this._contoursApplied&&this.scheduleSvgApply(!0),this.scheduleSceneAutosave()}toggleContourOverlay(){this.showContourOverlay=!this.showContourOverlay,this.scheduleSceneAutosave()}paperSizeChanged(e,t){this.syncPaperSizeLayer(),this.scheduleSceneAutosave()}setPaperSize(e){const t=e.target;!(t instanceof HTMLSelectElement)||t.value!=="a4"&&t.value!=="a3"||(this.paperSize=t.value)}togglePaperOutline(){this.showPaperOutline=!this.showPaperOutline,this.scheduleSceneAutosave()}toggleRebound(){this.rebound=!this.rebound,this.syncSceneState()}layoutPreparedItems(){const e=this.sceneElement??this.shadowRoot?.querySelector("ff-scene"),t=this.getSceneItemsLayers();if(!e||t.length===0){this.svgStatus="Шар елементів недоступний.";return}const i={},o=l=>{const d=l.detail;d?.layout==="placements"&&(i.detail=d)};e.addEventListener(Pi,o);let s=0;try{s=e.layoutItemsByPlacements(void 0,{reassignAutoItems:!0})}finally{e.removeEventListener(Pi,o)}const n=i.detail?.unplacedItems??[],a=this.getSceneItemsLayers().map(l=>Array.from(l.children).filter(d=>d instanceof Z)),c=n.map(({itemKey:l,label:d,reason:u,sceneLayerIndex:p,layerItemIndex:h})=>{const f=p!==void 0&&h!==void 0?a[p]?.[h]:void 0,g=f?this.getSceneItemKey(f):l;return`${d?.trim()?`${d.trim()} (${g})`:g}: ${yy[u]}`}).join("; ");this.scheduleSceneAutosave(),this.svgStatus=s>0?`Компонування позицій завершено; без місця залишилося елементів: ${s}.${c?` ${c}.`:""}`:"Компонування позицій завершено."}runPlacementLayout(e){e==="swarm"?this.layoutSwarm():this.layoutColumn()}handlePlacementClick(e){const t=e.target;if(!(t instanceof Element)||this.placementLayerLocked&&t.closest(".placement-row, [data-placement-action]"))return!0;const i=t.closest(".group-item-row[data-item-key]");if(i){const c=i.dataset.itemKey;if(c&&i.dataset.selectable==="true"){const l=e;this.selectItem(c,l.ctrlKey||l.metaKey)}return e.stopPropagation(),!0}const o=t.closest("[data-placement-action]");if(o){const c=o.dataset.groupId,l=o.dataset.placementList==="callout"?"callout":"group";switch(o.dataset.placementAction){case"swarm":this.runPlacementLayout("swarm");break;case"column":this.runPlacementLayout("column");break;case"add":c&&this.addGroupPlacement(c,l);break;case"remove":c&&o.dataset.placementId&&this.removeGroupPlacement(c,o.dataset.placementId,l);break}return!0}const s=t.closest(".placement-row");if(!s||t.closest("input, button"))return!0;const{groupId:n,placementId:a}=s.dataset;return n&&a&&this.selectPlacement(n,a,s.dataset.placementList==="callout"?"callout":"group"),!0}handlePlacementRowKeyDown(e){const t=e;if(t.key!=="Enter"&&t.key!==" ")return;const i=e.target;if(!(i instanceof Element)||i.closest("input, button"))return;if(this.placementLayerLocked&&i.closest(".placement-row")){t.preventDefault();return}const o=i.closest(".group-item-row[data-item-key]");if(o&&i===o){if(t.preventDefault(),t.repeat||o.dataset.selectable!=="true")return;const c=o.dataset.itemKey;c&&this.selectItem(c,t.ctrlKey||t.metaKey);return}const s=i.closest(".placement-row");if(!s||i!==s)return;const{groupId:n,placementId:a}=s.dataset;!n||!a||(t.preventDefault(),!t.repeat&&this.selectPlacement(n,a,s.dataset.placementList==="callout"?"callout":"group"))}deleteSelectedPlacement(){if(this.placementLayerLocked)return;const e=this.selectedPlacementGroupId,t=this.selectedPlacementList,i=this.selectedPlacementId;e===null||t===null||i===null||this.removeGroupPlacement(e,i,t)}preservePlacementItemAssociation(e,t){const i=this.getSceneItemsLayers().filter(o=>!o.locked).flatMap(o=>o.items).filter(o=>o.layoutMode==="auto"&&o.groupId===e&&o.r===t.r&&o.c===t.c&&!o.hasAttribute("data-unplaced"));i.length===1&&(i[0].setAttribute(Hi,t.id),i[0].setAttribute(Xi,e))}handlePlacementChange(e){if(this.placementLayerLocked)return;const t=e.target;if(!(t instanceof HTMLInputElement))return;if(t.hasAttribute("data-placement-count")){this.setPlacementCount(e);return}const i=t.closest(".placement-row"),o=i?.dataset.groupId,s=i?.dataset.placementId,n=i?.dataset.placementList==="callout"?"callout":"group",a=this.groups.find(y=>y.id===o),c=a?this.getPlacementsForGroup(a,n):void 0,l=c?.find(y=>y.id===s),d=i?.querySelector('[data-placement-coordinate="r"]'),u=i?.querySelector('[data-placement-coordinate="c"]');if(!a||!l||!d||!u)return;const p=d.valueAsNumber,h=u.valueAsNumber,f=Number.isSafeInteger(p)&&Number.isSafeInteger(h)&&this.validPlacementCenters(a,n).some(y=>y.r===p&&y.c===h),g=this.getOccupiedPlacementCells(a.id,s,n).has(`${p},${h}`),m=this.isPlacementCenterBlockedByFixed({r:p,c:h},this.getActiveFixedItems());if(!f||g||m){d.setAttribute("aria-invalid","true"),u.setAttribute("aria-invalid","true"),this.svgStatus="Зміни позиції не застосовано: координати мають відповідати вільній комірці групи.";return}if(d.removeAttribute("aria-invalid"),u.removeAttribute("aria-invalid"),l.r===p&&l.c===h)return;const x=this.replaceGroupPlacements(a.id,(c??[]).map(y=>y.id===s?{...y,r:p,c:h}:y)).find(y=>y.id===s);if(!x||x.r!==p||x.c!==h){d.setAttribute("aria-invalid","true"),u.setAttribute("aria-invalid","true"),this.svgStatus="Зміни позиції не застосовано: комірка перетинається із закріпленим елементом або іншою позицією.";return}this.preservePlacementItemAssociation(a.id,l)}handlePlacementsChange(e){if(this.placementLayerLocked)return;const t=e.detail;t&&typeof t.groupId=="string"&&Array.isArray(t.placements)&&this.mergeGroupPlacements(t.groupId,t.placements,t.placementList==="callout"?"callout":"group")}addGroupPlacement(e,t="group"){const i=this.groups.find(c=>c.id===e);if(!i||t==="callout"&&!i.callout)return;const o=this.findAvailablePlacementCell(i,t);if(!o){this.svgStatus=`У групі «${i.name||i.id}» немає доступних комірок для позицій.`;return}const s=new Set(this.groups.flatMap(c=>[...c.placements??[],...c.callout?.placements??[]]).map(c=>c.id)),n=this.createPlacementId(s);this.replaceGroupPlacements(i.id,[...this.getPlacementsForGroup(i,t)??[],{id:n,...o}],t).some(c=>c.id===n)||(this.svgStatus=`У групі «${i.name||i.id}» немає вільних комірок для позицій.`)}createPlacementId(e){const t=this.ownerDocument.defaultView?.crypto;if(typeof t?.randomUUID=="function"){const s=`placement-${t.randomUUID()}`;if(!e.has(s))return s}const i=Date.now().toString(36);let o=0;for(;;){const s=`placement-${i}-${Math.random().toString(36).slice(2)}-${o++}`;if(!e.has(s))return s}}removeGroupPlacement(e,t,i="group"){const o=this.groups.find(s=>s.id===e);o&&this.replaceGroupPlacements(o.id,(this.getPlacementsForGroup(o,i)??[]).filter(s=>s.id!==t),i)}updateGroupPlacementList(e,t,i="group"){return this.replaceGroupPlacements(e,t,i)}findAvailablePlacementCell(e,t="group"){const i=this.getOccupiedPlacementCells(),o=this.getActiveFixedItems();return this.validPlacementCenters(e,t).find(s=>!i.has(`${s.r},${s.c}`)&&!this.isPlacementCenterBlockedByFixed(s,o))??null}getPlacementsForGroup(e,t){return t==="callout"?e.callout?.placements:e.placements}setPlacementsForGroup(e,t,i){t==="callout"?e.callout&&(e.callout.placements=i):e.placements=i}replaceGroupPlacements(e,t,i="group"){if(this.placementLayerLocked)return[];const o=this.groupLayerElement;if(!o||!this.groups.some(n=>n.id===e))return[];const s=o.updateGroupPlacements(e,t,i);return this.mergeGroupPlacements(e,s,i),s}mergeGroupPlacements(e,t,i="group"){const o=this.groups.find(d=>d.id===e);if(!o||i==="callout"&&!o.callout)return;const s=this.getPlacementsForGroup(o,i),n=Array.isArray(s)&&s.length===t.length&&s.every((d,u)=>{const p=t[u];return d.id===p?.id&&d.r===p?.r&&d.c===p?.c&&Vo(d.itemProperties,p?.itemProperties)}),a=n?s:t.map(d=>kt(d));n||this.setPlacementsForGroup(o,i,a),this.refreshPlacementGroups(e),this.refreshGroupInspector(),this.commitCount+=1;const c=o.name?.trim()||o.id,l=a.map((d,u)=>`${u+1}: r${d.r} c${d.c}`).join(" | ");this.lastCommit=`${c}: ${l||"немає комірок для позицій"}`,this.scheduleSceneAutosave()}handleGroupEditRequest(e){if(this.groupLayerLocked)return;const t=e.detail;if(!by(t)){this.rejectGroupEdit("the request detail is invalid");return}if(this.mode!=="hex"||!this.groupEditingEnabled){this.rejectGroupEdit("group editing is disabled or the layer is not in Hex mode");return}if(this.groupEditAction!==t.action){this.rejectGroupEdit("the active edit action has changed");return}const i=ho({index:Ss({groups:this.groups,eligibleCenters:Ce(this.rows,this.columns).centers}),action:t.action,cell:t.cell});if(!i.valid||i.reason!==t.reason||i.previousOwnerGroupId!==t.previousOwnerGroupId||i.nextOwnerGroupId!==t.nextOwnerGroupId){this.rejectGroupEdit("the request no longer matches the current group-edit resolution");return}const o=t.previousOwnerGroupId===null?null:this.getUniqueGroup(t.previousOwnerGroupId),s=t.nextOwnerGroupId===null?null:this.getUniqueGroup(t.nextOwnerGroupId);if(t.previousOwnerGroupId!==null&&!o||t.nextOwnerGroupId!==null&&!s){this.rejectGroupEdit("a source or destination group is no longer unique");return}if(!this.groupLayerElement){this.rejectGroupEdit("the group layer is not available");return}this.applyGroupEdit(t,o,s)}getUniqueGroup(e){if(e===null||e.trim().length===0)return null;const t=this.groups.filter(i=>i.id===e);return t.length===1?t[0]:null}applyGroupEdit(e,t,i){let o;if(t)for(let s=t.centers.length-1;s>=0;s--){const n=t.centers[s];n.r===e.cell.r&&n.c===e.cell.c&&(o??=n,t.centers.splice(s,1))}i&&!i.centers.some(s=>s.r===e.cell.r&&s.c===e.cell.c)&&i.centers.push(o??{...e.cell}),this.groups=this.groups.map(s=>({...s,centers:s.centers.map(n=>({...n}))})),this.syncSceneState(),this.groupLayerElement?.refreshGroupOverlays(),this.refreshGroupInspector(),this.refreshPlacementGroups()}rejectGroupEdit(e){const t={"the selected center cannot be removed":"вибраний центр не можна вилучити","a source or destination group is no longer unique":"вихідну або цільову групу більше не можна однозначно визначити","the group layer is not available":"шар груп недоступний","the request detail is invalid":"дані запиту некоректні","group editing is disabled or the layer is not in Hex mode":"редагування груп вимкнено або вибрано не шестикутний режим","the active edit action has changed":"дію редагування змінено","the request no longer matches the current group-edit resolution":"запит більше не відповідає поточному стану редагування груп","invalid-cell":"вибрана комірка недоступна","placement-occupied":"комірка зайнята позицією","multiply-owned":"комірка належить кільком групам","no-adjacent-group":"поруч немає групи, до якої можна додати комірку","not-owned":"комірка не належить жодній групі","interior-cell":"внутрішню комірку групи не можна вилучити","contact-tie":"неможливо однозначно визначити сусідню групу"};this.svgStatus=`Редагування групи відхилено: ${t[e]??"запит не відповідає поточному стану"}.`}connectedCallback(){super.connectedCallback(),this.addEventListener(Fn,this._handleCalloutStateChange),this.addEventListener(si,this._handleItemLayoutModeChange),this.shadowRoot?.addEventListener("change",this._handlePlacementChange,!0),this.applySceneZoom(this.zoomScale),this.getSceneViewport()?.addEventListener("lostpointercapture",this._handleScenePanPointerCancel),this.ownerDocument.defaultView?.addEventListener("pagehide",this._handlePageHide),this.readLastScene(),this.syncPaperSizeLayer(),this._autosaveEnabled=!this.sceneStartupVisible,this.refreshLayerSummaries(),this.ownerDocument.addEventListener("click",this._handleDocumentClick,!0),this.ownerDocument.addEventListener("pointerdown",this._handleDocumentPointerDown,!0),this.ownerDocument.addEventListener("keydown",this._handleRibbonContextKeydown,!0),this.ownerDocument.defaultView?.addEventListener("scroll",this._handleRibbonContextPositionChange,!0),this.ownerDocument.defaultView?.addEventListener("resize",this._handleRibbonContextPositionChange),this.shadowRoot?.addEventListener("scroll",this._handleRibbonContextPositionChange,!0),this.ownerDocument.addEventListener("keydown",this._handleCreateKeydown,!0),this.ownerDocument.addEventListener("keydown",this._handleCalloutKeydown,!0),this.syncSceneState(),this._itemsData.length>0&&this.syncItemsDataToLayer(),this.syncSlottedItemSettings(!1),this.syncItemCategoryVisibility(),this.refreshGroupInspector(),this.refreshPlacementGroups(),this.observeGroupShapes(),this.scheduleGroupVisibilityRestore(),this.syncRibbonContextPanels();const t=this.shadowRoot?.querySelectorAll(".c-row[data-c-row]");if(t&&typeof ResizeObserver<"u"){this._contextPanelResizeObserver=new ResizeObserver(()=>{this.positionOpenRibbonContextPanel()});for(const s of t)this._contextPanelResizeObserver.observe(s)}const i=this.layer;this._createPointerLayer=i,i?.addEventListener("pointerdown",this._handleCreatePointerDownCapture,!0);const o=this.sceneElement?.sceneSurface;o&&typeof ResizeObserver<"u"&&(this._layerResizeObserver=new ResizeObserver(()=>{this.scheduleSvgApply(),this.applySceneZoom(this.zoomScale)}),this._layerResizeObserver.observe(o))}disconnectedCallback(){this.getSceneViewport()?.removeEventListener("lostpointercapture",this._handleScenePanPointerCancel);const t=this._scenePanGesture;t?.viewport.hasPointerCapture(t.pointerId)&&t.viewport.releasePointerCapture(t.pointerId),this._scenePanGesture=null,this.shadowRoot?.removeEventListener("change",this._handlePlacementChange,!0),this.cancelCalloutPlacement(),this.removeEventListener(Fn,this._handleCalloutStateChange),this.removeEventListener(si,this._handleItemLayoutModeChange),super.disconnectedCallback(),this.flushSceneAutosave(),this.ownerDocument.defaultView?.removeEventListener("pagehide",this._handlePageHide),this.ownerDocument.defaultView?.removeEventListener("scroll",this._handleRibbonContextPositionChange,!0),this.ownerDocument.defaultView?.removeEventListener("resize",this._handleRibbonContextPositionChange),this.shadowRoot?.removeEventListener("scroll",this._handleRibbonContextPositionChange,!0),this._autosaveEnabled=!1,this._svgRequestId++,this._sceneLoadRequestId++,this.sceneOperationMessage=null,this.finishSceneRestore(this._sceneRestoreId,this._sceneLoadRequestId,!1),this._sceneRestoreId++,this._layerStructureObserver?.disconnect(),this._printCleanup?.(),this.ownerDocument.removeEventListener("click",this._handleDocumentClick,!0),this.ownerDocument.removeEventListener("pointerdown",this._handleDocumentPointerDown,!0),this.ownerDocument.removeEventListener("keydown",this._handleRibbonContextKeydown,!0),this.ownerDocument.removeEventListener("keydown",this._handleCreateKeydown,!0),this.ownerDocument.removeEventListener("keydown",this._handleCalloutKeydown,!0),this._createPointerLayer?.removeEventListener("pointerdown",this._handleCreatePointerDownCapture,!0),this._createPointerLayer=null,this._groupShapesObserver?.disconnect(),this._observedGroupShapesElement=null,this._contextPanelResizeObserver?.disconnect(),this._contextPanelResizeObserver=null,this._layerResizeObserver?.disconnect(),this._layerResizeObserver=null,this.exitCreateItemMode(),this._createPointerClient=null,this._applyFrame!==0&&cancelAnimationFrame(this._applyFrame),this._applyFrame=0}findCreateGroup(e){for(const t of this.groups){const i=this.validGroupCenters(t);if(this.mode==="hex"){if(to(this.step,e.x,e.y,i))return t;continue}const o=vr(this.step,this.mode,e,i);if(o&&Math.hypot(o.x-e.x,o.y-e.y)<=1e-6)return t}return null}findCreateSite(e,t){if(this.groupMode==="group"&&t!==null){const i=this.groups.find(o=>o.id===t);return i?vi(this.step,e.x,e.y,this.validGroupCenters(i)):null}return xs(this.step,e.x,e.y,this.rows,this.columns,this.mode,this.snapTarget)}resolveCreatePlacement(e){const t=this.findCreateGroup(e),i=t?.id??null;let o=e;if(this.groupMode==="group"&&t){const p=vr(this.step,this.mode,e,this.validGroupCenters(t));if(!p)return null;o=p}const s=this.findCreateSite(o,i),n=Mt(this.mode,this.rows,this.columns);if(!s||!n.isItemPositionValid(s.r,s.c))return null;const a=_(this.step,s.r,s.c),c=this.dragSnap==="free"?o.x-a.x:0,l=this.dragSnap==="free"?o.y-a.y:0;if(Math.abs(c)>F||Math.abs(l)>F)return null;const d=Math.abs(c)<=sc?0:c,u=Math.abs(l)<=sc?0:l;return{...s,offsetX:d,offsetY:u,groupId:i}}updateCreateGhost(){if(!this.createItemMode||this.layer?.locked||this.dragSnap!=="live"||!this._createPointerClient){this.clearCreateGhost();return}const e=this.getLayerSurfaceMetrics(),t=this.getLayerPointFromClient(this._createPointerClient.clientX,this._createPointerClient.clientY,e),i=t&&e&&t.x>=0&&t.x<e.surfaceWidth&&t.y>=0&&t.y<e.surfaceHeight?this.resolveCreatePlacement(t):null,o=i?this.getStagePointForLattice(i.r,i.c):null;if(!o){this.clearCreateGhost();return}this.createGhostX=o.x,this.createGhostY=o.y,this.createGhostVisible=!0}clearCreateGhost(){this.createGhostVisible=!1}nextManualItemKey(e){const t=new Set(this.itemSettings.map(o=>o.key));for(const o of this.getSceneItems())o.dataset.node&&t.add(o.dataset.node);let i=1;for(;t.has(`manual-${i}`);)i++;return`manual-${i}`}createItemAtPointer(e){if(this._sceneRestoreInProgress)return;const t=this.layer;if(!t){this.svgStatus="Шар елементів недоступний.";return}if(t.locked){this.svgStatus="Основний шар елементів заблоковано.";return}const i=this.getLayerSurfaceMetrics(),o=this.getLayerPointFromClient(e.clientX,e.clientY,i);if(i&&o&&(o.x<0||o.x>=i.surfaceWidth||o.y<0||o.y>=i.surfaceHeight))return;const s=o?this.resolveCreatePlacement(o):null;if(!s){this.svgStatus="Для цього елемента немає доступної точки прив'язки.";return}const n=this.nextManualItemKey(t),a=`Manual item ${n.slice(7)}`,c=this.ownerDocument.createElement("ff-hex-item");c.dataset.node=n,c.setAttribute("role","option"),c.setAttribute("aria-label",a),c.setAttribute("aria-selected","false"),c.tabIndex=0,c.r=s.r,c.c=s.c,c.offsetX=s.offsetX,c.offsetY=s.offsetY,s.groupId!==null&&(c.groupId=s.groupId),t.append(c);const l=this.createItemSettingsFromElement(c,this.itemSettings.length),d=this.itemSettings.reduce((p,h)=>Math.max(p,h.zIndex),0)+1,u={...l,key:n,name:a,r:s.r,c:s.c,offsetX:s.offsetX,offsetY:s.offsetY,icon:c.icon||"❔",layoutMode:"fixed",labelType:"number",shape:"hex",size:this.step,sizeUnit:"px",zIndex:d};this.itemSettings=[...this.itemSettings,u],this.positionReadouts=[...this.positionReadouts,{key:n,name:a,r:u.r,c:u.c,offsetX:u.offsetX,offsetY:u.offsetY}],this.clearPlacementSelectionForItemSelection(),this.selectedPropertiesTarget="items",this.selectedKeys=[n],this.applyItemSettings(u),this.syncSelectionState(),this.syncSlottedItemSettings(!1),this.refreshGroupInspector(),this.scheduleGroupVisibilityRestore(),this.exitCreateItemMode(),this._createPointerClient=null,this.scheduleSceneAutosave()}toggleCreateItemMode(){this._sceneRestoreInProgress||!this.createItemMode&&this.layer?.locked||(this.createItemMode=!this.createItemMode,this.createItemMode?this.updateCreateGhost():this.clearCreateGhost())}handleCreatePointerMove(e){if(this._sceneRestoreInProgress)return;const t=e.composedPath().find(o=>o instanceof Z);if(t&&this.getSceneItemsLayers().some(o=>t.parentElement===o)){this._createPointerClient=null,this.clearCreateGhost();return}const i=e;this._createPointerClient={clientX:i.clientX,clientY:i.clientY},this.updateCreateGhost()}handleCreatePointerLeave(e){this._createPointerClient=null,this.clearCreateGhost()}setLabelType(e){this._sceneRestoreInProgress||!jt(e)||this.selectedKeys.length===0||(this.updateSelectedItemSettings({labelType:e}),this.syncSelectedLabels())}setLayoutMode(e){if(this._sceneRestoreInProgress||!Ct(e))return;const t=new Set(this.getSelectedGeneratedItemKeys());t.size!==0&&this.updateSelectedItemSettings({layoutMode:e},t)}updateSelectedItemSettings(e,t){if(this._sceneRestoreInProgress)return;const i=new Set(t??this.getEditableSelectedKeys());if(i.size===0)return;this.itemSettings=this.itemSettings.map(n=>i.has(n.key)?{...n,...e}:n);const o=new Map(this.itemSettings.map(n=>[n.key,n]));this.positionReadouts=this.positionReadouts.map(n=>{if(!i.has(n.key))return n;const a=o.get(n.key);return a?{...n,r:a.r,c:a.c,offsetX:a.offsetX,offsetY:a.offsetY}:n});for(const n of this.itemSettings)i.has(n.key)&&this.applyItemSettings(n);Object.prototype.hasOwnProperty.call(e,"layoutMode")&&this.syncItemHighlightMarkers();const s={};for(const[n,a]of Object.entries(e))a!==void 0&&Yr(n)&&Object.assign(s,{[n]:a});this.updateSelectedItemPropertyOverrides(s),this.syncSelectionState(),this.refreshGroupInspector(),this.scheduleGroupVisibilityRestore(),this.scheduleSceneAutosave()}syncSelectedLabels(){const e=new Set(this.getEditableSelectedKeys());this.itemSettings=this.itemSettings.map(t=>{if(!e.has(t.key))return t;const i=this.getHexItem(t.key);return i?{...t,label:i.label,labelType:i.labelType}:t}),this.syncSelectionState()}generateMockData(){this.requestDataRefresh()}requestDataRefresh(){this.dispatchEvent(new CustomEvent(Hn,{bubbles:!0,composed:!0}))}syncSlottedItemSettings(e,t=!1){const i=new Map(this.itemSettings.map(c=>[c.key,c])),o=[],s=this.getSceneItems(),n=this.getSceneItemKeyMap(s);for(const[c,l]of s.entries()){const d=n.get(l);if(!l.dataset.node||d===void 0)continue;const u=i.get(d),p=l.hasAttribute("data-ff-tri-layer-items-data");if(u&&!(e&&p)&&!t){o.push({...u,locked:l.locked,r:l.r??u.r,c:l.c??u.c,offsetX:l.offsetX??u.offsetX,offsetY:l.offsetY??u.offsetY,layoutMode:Ct(l.layoutMode)?l.layoutMode:u.layoutMode});continue}const h=this.createItemSettingsFromElement(l,c,d);o.push(h),p&&e&&this.applyItemSettings(h)}this.itemSettings=o,this.positionReadouts=o.map(({key:c,name:l,r:d,c:u,offsetX:p,offsetY:h})=>({key:c,name:l,r:d,c:u,offsetX:p,offsetY:h}));const a=new Set(o.map(c=>c.key));this.selectedKeys=this.selectedKeys.filter(c=>a.has(c)),this.syncSelectionState(),this.syncItemHighlightMarkers()}syncItemSettings(){for(const e of this.itemSettings)this.applyItemSettings(e);this.syncSelectionState(),this.refreshGroupInspector(),this.scheduleGroupVisibilityRestore(),this.scheduleSceneAutosave()}handleItemsLayout(e){const t=e.detail;if(!t)return;this.syncSlottedItemSettings(t.itemsDataChanged,t.layout==="placements");const i=this.getSceneItems().filter(a=>a.hasAttribute("data-ff-tri-layer-items-data"));if(t.itemsDataChanged&&(this.mockDataGenerated=i.length>0,this.mockDataGenerated||(this.mockDataStatus="Тестові дані не згенеровано.")),this.refreshGroupInspector(),this.scheduleGroupVisibilityRestore(),this.scheduleSceneAutosave(),!this.mockDataGenerated)return;const o=i.length,s=i.filter(a=>a.hasAttribute("data-unplaced")).length,n=o-s;this.mockDataStatus=s>0?`Розміщено ${n} із ${o}; не розміщено ${s}, оскільки немає вільних центрів груп.`:`Розміщено ${n} із ${o}; усі записи поміщено.`}setRadiusUnit(e){if(this._sceneRestoreInProgress)return;const t=new Set(this.getEditableSelectedKeys());if(t.size===0)return;const i=new Set;let o=!1;const s=this.itemSettings.map(n=>{if(!t.has(n.key)||n.sizeUnit===e)return n;const a=st(n.size,n.sizeUnit,this.step),c=e==="%"?a/this.step*100:a,l=st(c,e,this.step);return!Number.isFinite(a)||a<0||a>F||!Number.isFinite(c)||!Number.isFinite(l)||l<0||l>F?(o=!0,n):(i.add(n.key),{...n,size:c,sizeUnit:e})});if(o){this.svgStatus=`Некоректну одиницю розміру не застосовано: розмір кожного вибраного елемента після перетворення має бути не більшим за ${F} пікселів.`,this.syncSelectionState();return}if(i.size!==0){this.itemSettings=s,this.syncItemSettings();for(const n of this.itemSettings){if(!i.has(n.key))continue;const a=this.getHexItem(n.key),c=this.getSceneItemsLayers().find(l=>l===a?.parentElement);a&&c?.updateItemPropertyOverrides(a,{size:n.size,sizeUnit:n.sizeUnit})}}}setIconSizeUnit(e){if(this._sceneRestoreInProgress)return;const t=new Set(this.getEditableSelectedKeys());if(t.size===0)return;const i=new Set;let o=!1;const s=this.itemSettings.map(n=>{if(!t.has(n.key)||n.iconSizeUnit===e)return n;const a=st(n.size,n.sizeUnit,this.step),c=gr(a,this.step);if(!Number.isFinite(a)||a<0||a>F||!Number.isFinite(c)||c<=0)return o=!0,n;const l=st(n.iconSize,n.iconSizeUnit,c),d=e==="%"?l/c*100:l,u=st(d,e,c);return!Number.isFinite(l)||l<0||l>F||!Number.isFinite(d)||!Number.isFinite(u)||u<0||u>F?(o=!0,n):(i.add(n.key),{...n,iconSize:d,iconSizeUnit:e})});if(o){this.svgStatus=`Некоректну одиницю розміру піктограми не застосовано: розмір для кожного вибраного елемента після перетворення має бути не більшим за ${F} пікселів.`,this.syncSelectionState();return}if(i.size!==0){this.itemSettings=s,this.syncItemSettings();for(const n of this.itemSettings){if(!i.has(n.key))continue;const a=this.getHexItem(n.key),c=this.getSceneItemsLayers().find(l=>l===a?.parentElement);a&&c?.updateItemPropertyOverrides(a,{iconSize:n.iconSize,iconSizeUnit:n.iconSizeUnit})}}}handleItemInput(e){if(this._sceneRestoreInProgress)return;const t=e.target;if(t instanceof Element&&t.closest(".placement-panel"))return;if(t instanceof HTMLSelectElement){const n=t.name;if(e.type!=="change"||!yr(n))return;this.handleInspectorPropertyChange(n,t.value);return}if(!(t instanceof HTMLInputElement))return;const i=t,o=i.name;if(!yr(o))return;const s=i.type==="checkbox"?i.checked:i.type==="number"?i.valueAsNumber:i.value;this.handleInspectorPropertyChange(o,s,i)}handleHexPropertiesChange(e){this.handleHexPropertiesChangeForTarget(e,this.editingDefaultItemProperties)}handleSelectedItemPropertiesChange(e){this.handleHexPropertiesChangeForTarget(e,!1)}handleHexPropertiesChangeForTarget(e,t){if(this._sceneRestoreInProgress||e.type!==Dn)return;const i=e.detail;if(!(!i||!yr(i.property))){if(t){if(!Yr(i.property)||!this.isValidSlotPropertyValue(i.property,i.value)){this.svgStatus=`Некоректне значення властивості за замовчуванням «${i.property}» не застосовано: це значення не підтримується.`;return}const o={...this.defaultItemProperties},s=Object.prototype.hasOwnProperty.call(o,i.property);if(i.value===null||i.value===void 0){if(!s)return;delete o[i.property]}else if(pc(i.property))hc(o,void 0,i.property,i.value,this.step);else{if(s&&Object.is(o[i.property],i.value))return;Object.assign(o,{[i.property]:i.value})}if(Vo(this.defaultItemProperties,o))return;this.defaultItemProperties=o;return}if(this.selectionCount!==0){if((i.value===null||i.value===void 0)&&Yr(i.property)){const o={};Object.assign(o,{[i.property]:null}),this.updateSelectedItemPropertyOverrides(o),this.syncSlottedItemSettings(!1,!0),this.refreshGroupInspector(),this.scheduleGroupVisibilityRestore(),this.scheduleSceneAutosave();return}this.handleInspectorPropertyChange(i.property,i.value)}}}toggleDefaultItemProperties(){this._sceneRestoreInProgress||(this.editingDefaultItemProperties=!this.editingDefaultItemProperties)}updateSelectedItemPropertyOverrides(e){if(Object.keys(e).length===0)return;const t=new Set(this.getEditableSelectedKeys());for(const i of this.itemSettings){if(!t.has(i.key))continue;const o=this.getHexItem(i.key),s=this.getSceneItemsLayers().find(n=>n===o?.parentElement);o&&this.isItemEditable(o)&&s?.updateItemPropertyOverrides(o,e)}}handleSelectedPlacementPropertyChange(e){if(this.placementLayerLocked||this._sceneRestoreInProgress||e.type!==Dn||this.slotPropertiesDisabled||this.selectedPlacementGroupId===null||this.selectedPlacementList===null||this.selectedPlacementId===null)return;const t=e.detail;if(!t||!yr(t.property))return;const i=this.findValidPlacement(this.selectedPlacementGroupId,this.selectedPlacementId,this.selectedPlacementList);if(!i){this.refreshSelectedPlacementState();return}if(t.property==="r"||t.property==="c"){if(typeof t.value!="number"||!Number.isSafeInteger(t.value)){this.setSelectedPlacementState(i.group.id,i.placement,this.selectedPlacementList),this.svgStatus=`Некоректну позицію «${t.property}» не застосовано: значення має бути цілим числом.`;return}const n=this._selectedPlacementProperties.r,a=this._selectedPlacementProperties.c,c=t.property==="r"?t.value:typeof n=="number"&&Number.isSafeInteger(n)?n:i.placement.r,l=t.property==="c"?t.value:typeof a=="number"&&Number.isSafeInteger(a)?a:i.placement.c,d=Mt(this.mode,this.rows,this.columns),u=this.validPlacementCenters(i.group,this.selectedPlacementList),p=this.getOccupiedPlacementCells(i.group.id,i.placement.id,this.selectedPlacementList),h=this.getActiveFixedItems(),f=d.isGroupCenterValid(c,l)&&u.some(x=>x.r===c&&x.c===l);if(f&&!p.has(`${c},${l}`)&&!this.isPlacementCenterBlockedByFixed({r:c,c:l},h)){if(c===i.placement.r&&l===i.placement.c){this.setSelectedPlacementState(i.group.id,i.placement,this.selectedPlacementList);return}this.preservePlacementItemAssociation(i.group.id,i.placement),this.replaceGroupPlacements(i.group.id,(this.getPlacementsForGroup(i.group,this.selectedPlacementList)??[]).map(x=>x.id===i.placement.id?{...kt(x),r:c,c:l}:kt(x)),this.selectedPlacementList);return}const b=(t.property==="r"?t.value>=d.minItemRow&&t.value<=d.maxItemRow:t.value>=d.minItemColumn&&t.value<=d.maxItemColumn)&&u.some(x=>(t.property==="r"?x.r:x.c)===t.value&&!p.has(`${x.r},${x.c}`)&&!this.isPlacementCenterBlockedByFixed(x,h));if(!f&&b){this._selectedPlacementProperties={...this._selectedPlacementProperties,r:c,c:l},this.selectedPlacementProperties=this._selectedPlacementProperties,this.syncSelectedPlacementPropertiesEditor();return}this.setSelectedPlacementState(i.group.id,i.placement,this.selectedPlacementList),this.svgStatus=`Некоректну позицію «${t.property}» не застосовано: координата має відповідати вільній комірці позицій.`;return}if(!Yr(t.property)||!this.isValidSlotPropertyValue(t.property,t.value)){this.svgStatus=`Некоректне значення позиції «${t.property}» не застосовано: це значення не підтримується.`;return}const o={...i.placement.itemProperties??{}},s=Object.prototype.hasOwnProperty.call(o,t.property);if(t.value===null){if(!s)return;delete o[t.property]}else if(pc(t.property))hc(o,this.defaultItemProperties,t.property,t.value,this.step);else{if(s&&Object.is(o[t.property],t.value))return;Object.assign(o,{[t.property]:t.value})}Vo(i.placement.itemProperties,o)||this.replaceGroupPlacements(i.group.id,(this.getPlacementsForGroup(i.group,this.selectedPlacementList??"group")??[]).map(n=>n.id===i.placement.id?{...kt(n),itemProperties:Object.keys(o).length>0?o:void 0}:kt(n)),this.selectedPlacementList??"group")}handleSelectedPlacementPropertyAction(e){if(e.type!==bi)return;const t=e.detail;if(t){if(t.action==="delete-placement"){this.deleteSelectedPlacement();return}t.action}}isValidSlotPropertyValue(e,t){if(t===null)return!0;switch(e){case"offsetX":case"offsetY":case"size":case"iconSize":case"labelRadius":case"labelFontSize":case"borderWidth":case"textStrokeWidth":case"zIndex":{if(typeof t!="number"||!Number.isFinite(t)||e==="zIndex"&&!Number.isSafeInteger(t))return!1;const i=this.hexPropertiesLimits[e],o=i?.min??(e==="offsetX"||e==="offsetY"?-F:0),s=Math.min(i?.max??F,F);return t>=o&&t<=s}case"icon":case"label":case"textColor":case"textStrokeColor":case"fillColor":case"borderColor":return typeof t=="string";case"sizeUnit":case"iconSizeUnit":return typeof t=="string"&&Ge(t);case"labelType":return typeof t=="string"&&jt(t);case"labelPosition":return typeof t=="string"&&mr(t);case"shape":return typeof t=="string"&&zr(t);case"fillEnabled":case"textStrokeEnabled":return typeof t=="boolean"}}handleHexPropertiesAction(e){if(this._sceneRestoreInProgress||e.type!==bi)return;const t=e.detail;if(t){if(t.action==="delete-items"){this.editingDefaultItemProperties||this.deleteSelectedItems();return}if(t.action==="item-lock"){typeof t.value=="boolean"&&this.setSelectedItemsLocked(t.value);return}if(t.action==="stack")switch(t.value){case"backward":case"forward":case"bottom":case"top":this.moveSelectedItems(t.value);break}}}get selectedItemsLocked(){const e=new Set(this.selectedKeys);return this.itemSettings.some(t=>t.locked&&e.has(t.key))}setSelectedItemsLocked(e){const t=new Set(this.getSelectableSelectedKeys());if(t.size===0)return;let i=!1;if(this.itemSettings=this.itemSettings.map(o=>!t.has(o.key)||o.locked===e?o:(i=!0,{...o,locked:e})),!!i){for(const o of t){const s=this.getHexItem(o);s&&this.isItemLayerEditable(s)&&(s.locked=e)}this.syncSelectionState(),this.refreshGroupInspector(),this.scheduleSceneAutosave()}}handleInspectorPropertyChange(e,t,i){if(this._sceneRestoreInProgress||this.selectionCount===0)return;const o=typeof t=="number"?t:Number.NaN,s=Mt(this.mode,this.rows,this.columns),n=(a,c)=>{if(i){this.reportInvalidNumericInput(i,a,c);return}this.svgStatus=`Некоректне значення властивості «${e}»: ${a}.`,this.syncSelectionState()};switch(e){case"r":Number.isSafeInteger(o)&&o>=s.minItemRow&&o<=s.maxItemRow?this.updateSelectedItemSettings({r:o,layoutMode:"fixed"}):n(`має бути цілим числом від ${s.minItemRow} до ${s.maxItemRow}`,this.editorValues.r);break;case"c":Number.isSafeInteger(o)&&o>=s.minItemColumn&&o<=s.maxItemColumn?this.updateSelectedItemSettings({c:o,layoutMode:"fixed"}):n(`має бути цілим числом від ${s.minItemColumn} до ${s.maxItemColumn}`,this.editorValues.c);break;case"size":{const a=this.editorValues.sizeUnit??"px",c=st(o,a,this.step);Number.isFinite(o)&&o>0&&Number.isFinite(c)&&c<=F?this.updateSelectedItemSettings({size:o,sizeUnit:a}):n(`після перетворення не може перевищувати ${F} пікселів`,this.editorValues.size);break}case"iconSize":{const a=this.editorValues.iconSizeUnit??"px",c=this.getSelectedItemSettings();Number.isFinite(o)&&o>=0&&c.length>0&&c.every(d=>{const u=st(d.size,d.sizeUnit,this.step),p=gr(u,this.step),h=st(o,a,p);return Number.isFinite(p)&&p>=0&&Number.isFinite(h)&&h<=F})?this.updateSelectedItemSettings({iconSize:o,iconSizeUnit:a}):n(`після перетворення не може перевищувати ${F} пікселів для жодного вибраного елемента`,this.editorValues.iconSize);break}case"labelFontSize":Number.isFinite(o)&&o>=0&&o<=F?this.updateSelectedItemSettings({labelFontSize:o}):n(`має бути від 0 до ${F} пікселів`,this.editorValues.labelFontSize);break;case"labelRadius":Number.isFinite(o)&&o>=0&&o<=F?this.updateSelectedItemSettings({labelRadius:o}):n(`має бути від 0 до ${F} пікселів`,this.editorValues.labelRadius);break;case"offsetX":Number.isFinite(o)&&Math.abs(o)<=F?this.updateSelectedItemSettings({offsetX:o,layoutMode:"fixed"}):n(`має бути в межах +/- ${F} пікселів`,this.editorValues.offsetX);break;case"offsetY":Number.isFinite(o)&&Math.abs(o)<=F?this.updateSelectedItemSettings({offsetY:o,layoutMode:"fixed"}):n(`має бути в межах +/- ${F} пікселів`,this.editorValues.offsetY);break;case"icon":typeof t=="string"&&this.updateSelectedItemSettings({icon:t});break;case"label":typeof t=="string"&&(this.updateSelectedItemSettings({label:t}),this.syncSelectedLabels());break;case"textColor":typeof t=="string"&&this.updateSelectedItemSettings({textColor:t});break;case"textStrokeEnabled":typeof t=="boolean"&&this.updateSelectedItemSettings({textStrokeEnabled:t});break;case"textStrokeColor":typeof t=="string"&&this.updateSelectedItemSettings({textStrokeColor:t});break;case"textStrokeWidth":Number.isFinite(o)&&o>=0&&o<=F?this.updateSelectedItemSettings({textStrokeWidth:o}):n(`має бути від 0 до ${F} пікселів`,this.editorValues.textStrokeWidth);break;case"fillColor":typeof t=="string"&&this.updateSelectedItemSettings({fillColor:t,fillEnabled:!0});break;case"borderColor":typeof t=="string"&&this.updateSelectedItemSettings({borderColor:t});break;case"borderWidth":Number.isFinite(o)&&o>=0&&o<=F?this.updateSelectedItemSettings({borderWidth:o}):n(`має бути від 0 до ${F} пікселів`,this.editorValues.borderWidth);break;case"fillEnabled":typeof t=="boolean"&&this.updateSelectedItemSettings({fillEnabled:t});break;case"sizeUnit":typeof t=="string"&&Ge(t)&&this.setRadiusUnit(t);break;case"iconSizeUnit":typeof t=="string"&&Ge(t)&&this.setIconSizeUnit(t);break;case"labelType":typeof t=="string"&&jt(t)&&this.setLabelType(t);break;case"layoutMode":typeof t=="string"&&Ct(t)&&this.setLayoutMode(t);break;case"labelPosition":typeof t=="string"&&mr(t)&&this.updateSelectedItemSettings({labelPosition:t});break;case"shape":typeof t=="string"&&zr(t)&&this.updateSelectedItemSettings({shape:t});break;case"zIndex":{const a=this.hexPropertiesLimits.zIndex,c=a?.min??1,l=Math.min(a?.max??F,F);Number.isSafeInteger(o)&&o>=c&&o<=l?this.updateSelectedItemSettings({zIndex:o}):n(`must be a safe integer from ${c} to ${l}`,this.editorValues.zIndex);break}}}handleStackAction(e){if(this._sceneRestoreInProgress)return!0;const t=e.target;if(!(t instanceof Element))return!0;const i=t.closest("button[data-radius-unit]")?.dataset.radiusUnit;if(Ge(i))return this.setRadiusUnit(i),!0;const o=t.closest("button[data-icon-size-unit]")?.dataset.iconSizeUnit;if(Ge(o))return this.setIconSizeUnit(o),!0;const s=t.closest("button[data-label-position]")?.dataset.labelPosition;if(mr(s))return this.updateSelectedItemSettings({labelPosition:s}),!0;const n=t.closest("button[data-stack-action]")?.dataset.stackAction;return(n==="backward"||n==="forward"||n==="bottom"||n==="top")&&this.moveSelectedItems(n),!0}moveSelectedItems(e){if(this._sceneRestoreInProgress)return;const t=new Set(this.getEditableSelectedKeys());if(t.size===0)return;let i=this.itemSettings.filter(s=>this.isItemKeyEditable(s.key)).sort((s,n)=>s.zIndex-n.zIndex);if(e==="bottom")i=[...i.filter(s=>t.has(s.key)),...i.filter(s=>!t.has(s.key))];else if(e==="top")i=[...i.filter(s=>!t.has(s.key)),...i.filter(s=>t.has(s.key))];else if(e==="backward")for(let s=1;s<i.length;s++)t.has(i[s].key)&&!t.has(i[s-1].key)&&([i[s-1],i[s]]=[i[s],i[s-1]]);else for(let s=i.length-2;s>=0;s--)t.has(i[s].key)&&!t.has(i[s+1].key)&&([i[s],i[s+1]]=[i[s+1],i[s]]);const o=new Map(i.map((s,n)=>[s.key,n+1]));this.itemSettings=this.itemSettings.map(s=>{const n=o.get(s.key);return n===void 0?s:{...s,zIndex:n}});for(const s of this.itemSettings){if(!o.has(s.key))continue;const n=this.getHexItem(s.key);if(n?.style.setProperty("--ff-hex-item-z-index",String(s.zIndex)),!n||!t.has(s.key))continue;this.getSceneItemsLayers().find(c=>c===n.parentElement)?.updateItemPropertyOverrides(n,{zIndex:s.zIndex})}this.syncSelectionState(),this.scheduleSceneAutosave()}handleItemPointerDown(e){const t=e;if(t.isPrimary===!1||(this._groupSelectionPointerGesture=null,this._suppressedGroupSelectionPointerId=null,this._sceneRestoreInProgress||t.button!==0))return;const i=this.getHexItemFromEvent(e),o=i!==void 0&&this.isItemEditable(i),s=t.composedPath().some(n=>n instanceof Element&&n.matches(mn));!this.createItemMode&&!this.groupEditingEnabled&&this.groupEditAction===null&&this.calloutPlacementPhase===null&&!this.groupLayerElement?.locked&&(s||i!==void 0)&&(this._groupSelectionPointerGesture={pointerId:t.pointerId,startX:t.clientX,startY:t.clientY,movedBeyondClickSlop:!1,itemHit:i!==void 0,placementHit:s}),!(!i||!o)&&this.selectItem(this.getSceneItemKey(i),t.ctrlKey||t.metaKey)}handleGroupSelectionPointerMove(e){const t=e,i=this._groupSelectionPointerGesture;!i||i.pointerId!==t.pointerId||Math.hypot(t.clientX-i.startX,t.clientY-i.startY)>cc&&(i.movedBeyondClickSlop=!0)}handleGroupSelectionPointerUp(e){const t=e,i=this._groupSelectionPointerGesture;!i||i.pointerId!==t.pointerId||(this._groupSelectionPointerGesture=null,(i.movedBeyondClickSlop||Math.hypot(t.clientX-i.startX,t.clientY-i.startY)>cc||i.itemHit||i.placementHit)&&(this._suppressedGroupSelectionPointerId=t.pointerId))}handleGroupSelectionPointerCancel(e){const t=e;this._groupSelectionPointerGesture?.pointerId===t.pointerId&&(this._groupSelectionPointerGesture=null),this._suppressedGroupSelectionPointerId===t.pointerId&&(this._suppressedGroupSelectionPointerId=null)}handleGroupSelectionSceneClick(e){const t=this._suppressedGroupSelectionPointerId;if(this._suppressedGroupSelectionPointerId=null,t!==null&&e instanceof MouseEvent&&e.detail>0&&(!("pointerId"in e)||e.pointerId===t))return!0;if(this._sceneRestoreInProgress||this.createItemMode||this.groupEditingEnabled||this.groupEditAction!==null||this.calloutPlacementPhase!==null||this.groupLayerElement?.locked||!(e instanceof MouseEvent)||e.button!==0||e.composedPath().some(s=>s instanceof Z||s instanceof Element&&s.matches(`${mn}, [data-callout-connector], [data-callout-underline]`)))return!1;const o=this.groupLayerElement?.findGroupAtClientPoint(e.clientX,e.clientY);return o?(this.toggleSelectedGroup(o.id),!0):!1}handleItemClick(e){if(this._sceneRestoreInProgress)return;const t=this.getHexItemFromEvent(e);if(t&&!this.isItemEditable(t))return;if(this.createItemMode&&!t&&e instanceof MouseEvent){this.createItemAtPointer(e);return}if(e instanceof MouseEvent&&e.detail>0||!t?.dataset.node||!t)return;const o=e;this.selectItem(this.getSceneItemKey(t),o.ctrlKey||o.metaKey)}handleItemKeydown(e){if(this._sceneRestoreInProgress||e.key!=="Enter"&&e.key!==" ")return;const t=this.getHexItemFromEvent(e);!t?.dataset.node||!this.isItemEditable(t)||(e.preventDefault(),this.selectItem(this.getSceneItemKey(t),e.ctrlKey||e.metaKey))}getHexItemFromEvent(e){return e.composedPath().find(t=>t instanceof Z)}clearSelection(){this._sceneRestoreInProgress||(this.selectedPropertiesTarget="items",this.selectedKeys=[],this.syncSelectionState())}deleteSelectedItems(){if(this._sceneRestoreInProgress)return;const e=new Set(this.getEditableSelectedKeys());if(e.size===0)return;const t=this.getSceneItems(),i=this.getSceneItemKeyMap(t),o=t.filter(l=>e.has(i.get(l)??"")&&this.isItemEditable(l));if(o.length===0)return;const s=o.some(l=>l.hasAttribute("data-ff-tri-layer-items-data"));let n=0;for(const l of this.getSceneItemsLayers())n+=l.removeItems(o.filter(d=>d.parentElement===l));if(n===0)return;this.selectedKeys=this.selectedKeys.filter(l=>!e.has(l)),this.syncSlottedItemSettings(s),this.syncSelectionState(),this.refreshGroupInspector(),this.scheduleGroupVisibilityRestore();const a=this.getSceneItemsLayers().flatMap(l=>l.itemsData);this.mockDataJson=JSON.stringify(a,null,2),this.mockDataGenerated=a.length>0;const c=this.getSceneItems().filter(l=>l.hasAttribute("data-ff-tri-layer-items-data")&&l.hasAttribute("data-unplaced")).length;this.mockDataStatus=a.length===0?"Тестові дані не згенеровано.":c>0?`Розміщено ${a.length-c} із ${a.length}; не розміщено ${c}, оскільки немає вільних центрів груп.`:`Розміщено ${a.length} із ${a.length}; усі записи поміщено.`,this.scheduleSceneAutosave()}handlePositionChange(e){const i=(e.detail?.changes??[]).filter(a=>a.old.r!==a.new.r||a.old.c!==a.new.c||a.old.offsetX!==a.new.offsetX||a.old.offsetY!==a.new.offsetY);if(i.length===0)return;const o=new Map,s=new Map,n=this.getSceneItemKeyMap();for(const a of i){const c=n.get(a.item)??a.item.dataset.node;c&&(o.set(c,a.new),s.set(c,a.item.layoutMode))}this.positionReadouts=this.positionReadouts.map(a=>{const c=o.get(a.key);return c?{...a,...c}:a}),this.itemSettings=this.itemSettings.map(a=>{const c=o.get(a.key);return c?{...a,...c,layoutMode:s.get(a.key)??a.layoutMode}:a}),this.syncSelectionState(),this.refreshGroupInspector(),this.scheduleGroupVisibilityRestore(),this.commitCount+=1,this.lastCommit=i.map(a=>{const c=a.item.dataset.node??"node",{r:l,c:d,offsetX:u,offsetY:p}=a.new;return`${c}: рядок ${l}, стовпець ${d}, зсув ${u.toFixed(1)} / ${p.toFixed(1)} пікс.`}).join(" | "),this.scheduleSceneAutosave()}getLayerSurfaceMetrics(){const e=this.layer,t=this.shadowRoot?.querySelector(".layer-stage"),i=e?.surface;if(!e||!t||!i)return null;const o=i.getBoundingClientRect(),s=t.getBoundingClientRect(),n=this.ownerDocument.defaultView?.getComputedStyle(i),a=Number.parseFloat(n?.width??""),c=Number.parseFloat(n?.height??""),l=a>0?o.width/a:0,d=c>0?o.height/c:0,u=t.offsetWidth>0?s.width/t.offsetWidth:0,p=t.offsetHeight>0?s.height/t.offsetHeight:0;return[o.width,o.height,s.width,s.height,l,d,u,p].every(h=>Number.isFinite(h)&&h>0)?{surfaceBounds:o,stageBounds:s,surfaceWidth:a,surfaceHeight:c,surfaceScaleX:l,surfaceScaleY:d,stageScaleX:u,stageScaleY:p}:null}getLayerPointFromClient(e,t,i=this.getLayerSurfaceMetrics()){return!i||!Number.isFinite(e)||!Number.isFinite(t)?null:{x:(e-i.surfaceBounds.left)/i.surfaceScaleX,y:(t-i.surfaceBounds.top)/i.surfaceScaleY}}getStagePointForLattice(e,t){const i=this.getLayerSurfaceMetrics();if(!i)return null;const o=_(this.step,e,t);return{x:(i.surfaceBounds.left-i.stageBounds.left)/i.stageScaleX+o.x*i.surfaceScaleX/i.stageScaleX,y:(i.surfaceBounds.top-i.stageBounds.top)/i.stageScaleY+o.y*i.surfaceScaleY/i.stageScaleY}}handleItemsLayerClick(e){if(this._sceneRestoreInProgress)return;const t=e.target;if(!(t instanceof Element))return;const i=t.closest("[data-layer-action], [data-layer-name]");if(!i)return;const o=i.dataset.layerAction??(i.hasAttribute("data-layer-name")?"name":void 0);if(o==="add"){e.stopPropagation(),this.addItemsLayer();return}if(o==="move-up"||o==="move-down"||o==="remove"){const s=t.closest("[data-items-layer-id]")?.dataset.itemsLayerId;if(!s)return;e.stopPropagation(),o==="move-up"?this.moveItemsLayer(s,"up"):o==="move-down"?this.moveItemsLayer(s,"down"):this.removeItemsLayer(s);return}if(o==="primary"||o==="visibility"){const s=t.closest("[data-items-layer-id]")?.dataset.itemsLayerId,n=t.closest("input");s&&n&&(o==="primary"&&n.type==="radio"&&n.checked?this.selectItemsLayer(s):o==="visibility"&&n.type==="checkbox"&&this.setItemsLayerVisibility(s,n.checked)),e.stopPropagation();return}o==="name"&&e.stopPropagation()}handleItemsLayerChange(e){if(this._sceneRestoreInProgress)return;const t=e.target;if(!(t instanceof Element))return;const i=t.closest("[data-layer-action], [data-layer-name]");if(!i)return;const o=i.dataset.layerAction??(i.hasAttribute("data-layer-name")?"name":void 0);if(o!=="primary"&&o!=="visibility"&&o!=="name")return;const s=t.closest("[data-items-layer-id]")?.dataset.itemsLayerId;if(!s)return;const n=t.closest("input");if(n)if(o==="primary"){if(n.type!=="radio")return;e.stopPropagation(),this.selectItemsLayer(s)}else if(o==="visibility"){if(n.type!=="checkbox")return;e.stopPropagation(),this.setItemsLayerVisibility(s,n.checked)}else e.stopPropagation(),this.renameItemsLayer(s,n.value)}get maxItemsLayers(){return hr}get canAddItemsLayer(){return this.getSceneItemsLayers().length<hr}refreshLayerSummaries(){const e=this.getSceneItemsLayers(),t=new Map;let i=!0;try{for(const[s,n]of this.getSceneItemsLayerIdentities(e).idByLayer)t.set(s,n)}catch(s){i=!1,this.svgStatus=`Не вдалося оновити шари елементів: ${s instanceof Error?s.message:String(s)}`;for(const n of e)t.set(n,n.getAttribute("data-layer")??"")}const o=i?e.find(s=>t.get(s)===this.primaryLayerId)??(this.itemsLayerElement&&e.includes(this.itemsLayerElement)?this.itemsLayerElement:null)??e.find(s=>!s.hidden)??e[0]??null:null;for(const[s,n]of e.entries())n.getAttribute("data-layer-name")?.trim()||n.setAttribute("data-layer-name",`Layer ${s+1}`);if(o){const s=t.get(o);s&&this.setPrimaryItemsLayer(o,s)}this.layerSummaries=e.map((s,n)=>({id:t.get(s)??"",name:this.getItemsLayerName(s,n),primary:s===o,visible:!s.hidden,locked:s.locked,itemCount:Array.from(s.children).filter(a=>a instanceof Z).length,order:n,canRemove:e.length>1,canMoveUp:n>0,canMoveDown:n<e.length-1})),this._layerSummaries=this.layerSummaries,this.observeSceneLayers()}addItemsLayer(){if(this._sceneRestoreInProgress)return null;const e=this.sceneElement??this.shadowRoot?.querySelector("ff-scene"),t=this.getSceneItemsLayers();if(!e||t.length>=hr)return null;try{const i=this.getSceneItemsLayerIdentities(t),o=this.ownerDocument.createElement("ff-items-layer"),s=this.createSceneLayerId(new Set(i.layerById.keys())),n=new Set(t.map((l,d)=>this.getItemsLayerName(l,d)));let a=t.length+1;for(;n.has(`Layer ${a}`);)a++;o.setAttribute("data-layer",s),o.setAttribute("data-layer-name",`Layer ${a}`),e.append(o);const c=[...t,o];return this.reorderSceneItemLayers(c),this.setPrimaryItemsLayer(o,s),this.syncSceneLayerOrder(c),this.syncSceneState(),this.refreshLayerSummaries(),o}catch(i){return this.svgStatus=`Не вдалося додати шар елементів: ${i instanceof Error?i.message:String(i)}`,null}}renameItemsLayer(e,t){if(this._sceneRestoreInProgress)return!1;const i=this.getSceneItemsLayers(),o=this.getItemsLayerById(e);if(!o)return!1;const s=i.indexOf(o);return o.setAttribute("data-layer-name",t.trim()||`Layer ${s+1}`),this.refreshLayerSummaries(),this.scheduleSceneAutosave(),!0}selectItemsLayer(e){if(this._sceneRestoreInProgress)return!1;const t=this.getItemsLayerById(e);return t?(this.setPrimaryItemsLayer(t,e),this.refreshLayerSummaries(),this.syncSelectionState(),this.scheduleSceneAutosave(),!0):!1}setItemsLayerVisibility(e,t){if(this._sceneRestoreInProgress)return!1;const i=this.getItemsLayerById(e);return i?(i.hidden===!t||(i.hidden=!t,this.refreshLayerSummaries(),this.scheduleSceneAutosave()),!0):!1}togglePrimaryLayerVisibility(){this._sceneRestoreInProgress||!this.layer||this.setItemsLayerVisibility(this.primaryLayerId,!this.primaryLayerVisible)}togglePrimaryLayerLock(){if(this._sceneRestoreInProgress)return;const e=this.layer;if(!e)return;const t=e===this.itemsLayerElement,i=!e.locked;if(e.locked=i,i){const o=new Set;for(const[s,n]of this.getSceneItemKeyMap())s.parentElement===e&&o.add(n);this.selectedKeys=this.selectedKeys.filter(s=>!o.has(s)),t&&this.exitCreateItemMode()}this.syncSelectionState(),this.refreshGroupInspector(),this.refreshLayerSummaries(),this.scheduleSceneAutosave()}moveItemsLayer(e,t){if(this._sceneRestoreInProgress)return!1;const i=this.getSceneItemsLayers(),s=this.getSceneItemsLayerIdentities(i).layerById.get(e),n=s?i.indexOf(s):-1,a=n+(t==="up"?-1:1);if(n<0||a<0||a>=i.length)return!1;const c=i.slice();return[c[n],c[a]]=[c[a],c[n]],this.reorderSceneItemLayers(c),this.syncSceneLayerOrder(c),this.refreshLayerSummaries(),this.scheduleSceneAutosave(),!0}handleItemsLayerKeydown(e,t){if(this._sceneRestoreInProgress)return;const i=t.target;i instanceof Element&&i.closest("input, textarea, select, [contenteditable='true']")||t.key!=="ArrowUp"&&t.key!=="ArrowDown"||(t.preventDefault(),t.stopPropagation(),this.moveItemsLayer(e,t.key==="ArrowUp"?"up":"down"))}removeItemsLayer(e,t=!1){if(this._sceneRestoreInProgress)return!1;const i=this.getSceneItemsLayers();if(i.length<=1)return!1;const o=this.getSceneItemsLayerIdentities(i),s=o.layerById.get(e);if(!s||s.locked)return!1;const n=Array.from(s.children).filter(l=>l instanceof Z);if(n.length>0&&!t){const l=this.getItemsLayerName(s,i.indexOf(s)),d=`Remove layer "${l}" and its ${n.length} items?`;if(!this.ownerDocument.defaultView?.confirm(d))return this.svgStatus=`Видалення скасовано. Елементи шару «${l}» залишено.`,!1}const a=s===this.itemsLayerElement||e===this.primaryLayerId,c=i.filter(l=>l!==s);if(s.itemsData=[],s.removeItems(n),s.remove(),this.reorderSceneItemLayers(c),this.syncSceneLayerOrder(c),a){const l=c.find(d=>!d.hidden)??c[0];l.hidden&&(l.hidden=!1),this.setPrimaryItemsLayer(l,o.idByLayer.get(l))}return this.syncSceneState(),this.syncSlottedItemSettings(!1),this.refreshLayerSummaries(),!0}getItemsLayerName(e,t){return e.getAttribute("data-layer-name")?.trim()||`Layer ${t+1}`}createSceneLayerId(e){let t;do this._layerIdCounter+=1,t=`items-layer-${Date.now().toString(36)}-${this._layerIdCounter.toString(36)}`;while(e.has(t));return t}observeSceneLayers(){const e=this.ownerDocument.defaultView?.MutationObserver;if(!e)return;this._layerStructureObserver??=new e(this._handleLayerStructureMutation),this._layerStructureObserver.disconnect();const t=this.sceneElement??this.shadowRoot?.querySelector("ff-scene");if(t){this._layerStructureObserver.observe(t,{childList:!0,attributes:!0,attributeFilter:["data-layer","data-layer-name","hidden"]});for(const i of this.getSceneItemsLayers())this._layerStructureObserver.observe(i,{childList:!0})}}setPrimaryItemsLayer(e,t){const i=this.itemsLayerElement!==e;this._createPointerLayer!==e&&(this._createPointerLayer?.removeEventListener("pointerdown",this._handleCreatePointerDownCapture,!0),this._createPointerLayer=e,this.isConnected&&e.addEventListener("pointerdown",this._handleCreatePointerDownCapture,!0)),this._primaryLayerId=t,this.itemsLayerElement=e,this.primaryLayerId=t,i&&this._itemsData.length>0&&!this._sceneRestoreInProgress&&(e.itemsData=this._itemsData),i&&(this.selectedKeys=[],this.syncSelectionState())}getItemsLayerById(e){const t=this.getSceneItemsLayers();return this.getSceneItemsLayerIdentities(t).layerById.get(e)??null}reorderSceneItemLayers(e){const t=this.sceneElement??this.shadowRoot?.querySelector("ff-scene");if(!t)return;let i=0;const o=Array.from(t.childNodes).map(s=>s.nodeType===1&&s.localName==="ff-items-layer"?e[i++]??s:s);for(const s of this.getSceneItemsLayers())s.remove();for(const s of o)t.appendChild(s)}syncSceneLayerOrder(e){const t=this.sceneElement??this.shadowRoot?.querySelector("ff-scene");if(!t)return;if(e.length<2){t.layerOrder=[];return}const i=this.getSceneItemsLayerIdentities(e),o=Array.from(t.children).some(s=>s.localName==="ff-hex-group-layer");t.layerOrder=["field",...o?["group"]:[],...e.map(s=>i.idByLayer.get(s))]}planSceneItemsLayerIdentities(e){const t=new Map,i=new Map,o=[];for(const s of e){const n=s.getAttribute("data-layer");if(n===null||!n.trim()){o.push(s);continue}if(i.has(n))throw new Error(`Multiple items layers resolve to the same identity "${n}".`);t.set(s,n),i.set(n,s)}for(const s of o){const n=this.createSceneLayerId(new Set(i.keys()));t.set(s,n),i.set(n,s)}return{idByLayer:t,layerById:i}}createSceneLayerRestorePlan(e){const t=this.getSceneItemsLayers(),i=this.planSceneItemsLayerIdentities(t);let o,s,n,a;if(e.layers){if(s={idByLayer:new Map,layerById:new Map},o=e.layers.map(u=>{let p=i.layerById.get(u.id);return p||(p=this.ownerDocument.createElement("ff-items-layer"),p.setAttribute("data-layer",u.id),p.setAttribute("data-layer-name",u.name),p.hidden=!u.visible),s.idByLayer.set(p,u.id),s.layerById.set(u.id,p),p}),!e.primaryLayerId)throw new Error("scene.primaryLayerId is required when scene.layers is present.");a=e.primaryLayerId;const d=s.layerById.get(a);if(!d)throw new Error(`scene.primaryLayerId references an unknown items layer "${a}".`);n=d}else{if(t.length>hr)throw new Error(`The current scene cannot contain more than ${hr} items layers.`);if(t.length===0){const d=this.ownerDocument.createElement("ff-items-layer"),u=this.createSceneLayerId(new Set);d.setAttribute("data-layer",u),d.setAttribute("data-layer-name","Layer 1"),o=[d],s={idByLayer:new Map([[d,u]]),layerById:new Map([[u,d]])}}else o=t.slice(),s=i;n=o.find(d=>s.idByLayer.get(d)===this.primaryLayerId)??(o.includes(this.itemsLayerElement)?this.itemsLayerElement:null)??o.find(d=>!d.hidden)??o[0],a=s.idByLayer.get(n)}const c=e.items.filter(d=>d.layerId!==void 0).length;if(e.layers&&o.length>1&&c!==e.items.length)throw new Error("Every item must specify layerId when scene.layers contains multiple layers.");if(!e.layers&&c>0&&c<e.items.length&&o.length>1)throw new Error("Scene items cannot mix layerId ownership when multiple current layers are present.");const l=new Map(o.map(d=>[d,[]]));for(const d of e.items){const u=d.layerId??(e.layers?.length===1?e.layers[0].id:e.layers?void 0:a);if(u===void 0)throw new Error(`Scene item "${d.key}" is missing layerId for a multi-layer scene.`);const p=s.layerById.get(u);if(!p)throw new Error(`Scene item "${d.key}" references an unresolved layer "${u}".`);l.get(p).push(d)}return{currentLayers:t,layers:o,currentIdentities:i,identities:s,primaryLayer:n,primaryLayerId:a,itemsByLayer:l}}createSceneLayerRestoreLockStates(e,t){const i=new Map((t.layers??[]).map(s=>[s.id,s.locked??!1])),o=new Map;for(const s of e.currentLayers){const n=e.currentIdentities.idByLayer.get(s);o.set(n,{layerId:n,layer:s,locked:s.locked})}for(const s of e.layers){const n=e.identities.idByLayer.get(s);o.set(n,{layerId:n,layer:s,locked:i.get(n)??!1})}return o}commitSceneLayerRestorePlan(e,t,i){for(const o of new Set([...e.currentLayers,...e.layers]))o.locked=!1;for(const[o,s]of e.currentIdentities.idByLayer)o.setAttribute("data-layer",s);if(i.layers)i.layers.forEach((o,s)=>{const n=e.layers[s];n.setAttribute("data-layer",o.id),n.setAttribute("data-layer-name",o.name),n.hidden=!o.visible});else if(e.currentLayers.length===0){const o=e.layers[0];o.setAttribute("data-layer",e.identities.idByLayer.get(o)),o.setAttribute("data-layer-name","Layer 1")}for(const o of e.layers)o.parentElement!==t&&t.append(o);for(const o of e.currentLayers){const s=Array.from(o.children).filter(n=>n instanceof Z);o.itemsData=[],o.removeItems(s)}for(const o of e.currentLayers)e.layers.includes(o)||o.remove();this.reorderSceneItemLayers(e.layers),this.syncSceneLayerOrder(e.layers),this.setPrimaryItemsLayer(e.primaryLayer,e.primaryLayerId),this.refreshLayerSummaries()}getSceneItemKeyMap(e=this.getSceneItems()){const t=new Map;for(const[s,n]of e.entries()){const a=n.dataset.node??`item-${s}`;t.set(a,(t.get(a)??0)+1)}const i=new Set,o=new Map;for(const[s,n]of e.entries()){const a=n.dataset.node??`item-${s}`,c=n.parentElement?.localName==="ff-items-layer"?n.parentElement:null,l=c?.getAttribute("data-layer")??c?.id??"items-layer",d=this._sceneItemKeys.get(n);let u=d!==void 0&&d.node===n.dataset.node&&d.layerId===l?d.key:void 0;if(u===void 0||i.has(u)){let p=a;(t.get(a)??0)>1&&(p=`layer:${encodeURIComponent(l)}:${encodeURIComponent(a)}`),u=p;let h=2;for(;i.has(u);)u=`${p}#${h++}`;this._sceneItemKeys.set(n,{node:n.dataset.node,layerId:l,key:u})}i.add(u),o.set(n,u)}return o}getSceneItemKey(e,t){return this.getSceneItemKeyMap().get(e)??e.dataset.node??`item-${t??0}`}getSceneItemsByKey(){const e=this.getSceneItems(),t=this.getSceneItemKeyMap(e),i=new Map;for(const[o,s]of e.entries())i.set(t.get(s)??`item-${o}`,s);return i}}R([$],G.prototype,"step");R([$],G.prototype,"zoomScale");R([$],G.prototype,"rows");R([$],G.prototype,"columns");R([$],G.prototype,"mode");R([$],G.prototype,"activeControlGroup");R([$],G.prototype,"contextRowExpanded");R([$],G.prototype,"mockDataPanelExpanded");R([$],G.prototype,"fieldView");R([$],G.prototype,"spotView");R([$],G.prototype,"spotRadius");R([$],G.prototype,"centerRadius");R([$],G.prototype,"centerColor");R([$],G.prototype,"vertexRadius");R([$],G.prototype,"vertexColor");R([$],G.prototype,"triNodeSize");R([$],G.prototype,"triNodeColor");R([$],G.prototype,"fieldLineWidth");R([$],G.prototype,"snapTarget");R([$],G.prototype,"dragSnap");R([$],G.prototype,"createItemMode");R([$],G.prototype,"createGhostVisible");R([$],G.prototype,"createGhostX");R([$],G.prototype,"createGhostY");R([$],G.prototype,"rebound");R([$],G.prototype,"groupMode");R([$],G.prototype,"groupEditingEnabled");R([$],G.prototype,"selectedGroupId");R([$],G.prototype,"calloutPlacementGroupId");R([$],G.prototype,"calloutPlacementPhase");R([$],G.prototype,"calloutHoveredGroupId");R([$],G.prototype,"groupEditAction");R([$],G.prototype,"groups");R([$],G.prototype,"defaultItemProperties");R([$],G.prototype,"editingDefaultItemProperties");R([$],G.prototype,"layerSummaries");R([$],G.prototype,"primaryLayerId");R([$],G.prototype,"inspectorGroups");R([$],G.prototype,"placementGroups");R([$],G.prototype,"selectedPropertiesTarget");R([$],G.prototype,"selectedPlacementGroupId");R([$],G.prototype,"selectedPlacementList");R([$],G.prototype,"selectedPlacementId");R([$],G.prototype,"selectedPlacementProperties");R([$],G.prototype,"slotPropertiesDisabled");R([$],G.prototype,"activeInspectorTab");R([$],G.prototype,"showGroups");R([$],G.prototype,"groupLayerLocked");R([$],G.prototype,"showContourOverlay");R([$],G.prototype,"paperSize");R([$],G.prototype,"showPaperOutline");R([$],G.prototype,"showPlacements");R([$],G.prototype,"placementLayerLocked");R([$],G.prototype,"showHexOverlay");R([$],G.prototype,"showHexCoordinates");R([$],G.prototype,"showGeneratedItems");R([$],G.prototype,"showSlottedItems");R([$],G.prototype,"highlightFixedItems");R([$],G.prototype,"highlightStaticItems");R([$],G.prototype,"placementCount");R([$],G.prototype,"svgFileName");R([$],G.prototype,"contourOffsetX");R([$],G.prototype,"contourOffsetY");R([$],G.prototype,"contourScale");R([$],G.prototype,"canContinueLastScene");R([$],G.prototype,"sceneStartupVisible");R([$],G.prototype,"sceneOperationMessage");R([$],G.prototype,"svgStatus");R([$],G.prototype,"svgStatusHistory");R([$],G.prototype,"svgStatusHistoryOpen");R([$],G.prototype,"itemsData");R([$],G.prototype,"mockDataJson");R([$],G.prototype,"mockDataStatus");R([$],G.prototype,"mockDataGenerated");R([$],G.prototype,"positionReadouts");R([$],G.prototype,"itemSettings");R([$],G.prototype,"commitCount");R([$],G.prototype,"lastCommit");R([$],G.prototype,"selectedKeys");R([$],G.prototype,"selectionCount");R([$],G.prototype,"selectionSummary");R([$],G.prototype,"editorValues");R([$],G.prototype,"sceneElement");R([$],G.prototype,"groupLayerElement");R([$],G.prototype,"itemsLayerElement");R([$],G.prototype,"fillEnabledInput");R([$],G.prototype,"dashboardDrawer");R([$],G.prototype,"fileInputElement");const Qd=H`
    :host {
        --btn-size-s-pbu: var(--28pbu);
        --btn-size-s-px: 28px;
        --btn-size-m-pbu: var(--32pbu);
        --btn-size-m-px: 32px;

        display: block;
        container-name: scene-editor;
        container-type: inline-size;
        --scene-editor-item-color: var(--ff-hex-item-color, var(--ff-scene-editor-ink, #203a34));
        --scene-editor-item-background: var(--ff-scene-editor-surface, #ffffff);
        --scene-editor-item-border-color: var(--ff-hex-item-border-color, var(--ff-scene-editor-accent, #176d5d));
        --scene-editor-item-text-stroke-color: var(--ff-hex-item-text-stroke-color, var(--ff-scene-editor-background, #f4f7f1));
        --scene-editor-item-text-stroke-width: var(--ff-hex-item-text-stroke-width, var(--1pbu, 1px));
        color: var(--ff-scene-editor-ink, #203a34);
        font-family: var(--fontFamilyBase, "Aptos", sans-serif);
    }
    :host-context(html[data-theme="dark"]) {
        --scene-editor-item-color: var(--ff-hex-item-color, var(--ff-scene-editor-ink, #e3ede7));
        --scene-editor-item-background: var(--ff-scene-editor-surface, #22332a);
        --scene-editor-item-border-color: var(--ff-hex-item-border-color, var(--ff-scene-editor-accent, #70bea1));
        --scene-editor-item-text-stroke-color: var(--ff-hex-item-text-stroke-color, var(--ff-scene-editor-background, #111a16));
        --scene-editor-item-text-stroke-width: var(--ff-hex-item-text-stroke-width, var(--1pbu, 1px));
        color: var(--ff-scene-editor-ink, #e3ede7);
    }

    :host([hidden]) {
        display: none;
    }

    .workbench {
        --ink: var(--ff-scene-editor-ink, #203a34);
        --muted: var(--ff-scene-editor-muted, #60736b);
        --line: var(--ff-scene-editor-line, #cbd7d0);
        --panel: var(--ff-scene-editor-panel, #f7faf5);
        --background: var(--ff-scene-editor-background, #f4f7f1);
        --accent: var(--ff-scene-editor-accent, #176d5d);
        --accent-warm: var(--ff-scene-editor-accent-warm, #d4d367);
        --accent-attention: var(--ff-scene-editor-accent-attention, #dc7531);
        --signal: var(--ff-scene-editor-signal, #c9573f);
        --surface: var(--ff-scene-editor-surface, #ffffff);
        --surface-alt: var(--ff-scene-editor-surface-alt, #edf3ee);
        --hover: var(--ff-scene-editor-hover, #e4eee7);
        --focus: var(--ff-scene-editor-focus, #176d5d);
        --disabled: var(--ff-scene-editor-disabled, #e3e9e4);
        --shadow: var(--ff-scene-editor-shadow, 0 var(--4pbu, 4px) var(--14pbu, 14px) rgba(32, 58, 52, 0.14));
        --ff-hex-item-color: var(--scene-editor-item-color);
        --ff-hex-item-background: var(--scene-editor-item-background);
        --ff-hex-item-border-color: var(--scene-editor-item-border-color);
        --ff-scene-editor-item-text-stroke-color: var(--scene-editor-item-text-stroke-color);
        --ff-scene-editor-item-text-stroke-width: var(--scene-editor-item-text-stroke-width);
        width: 100%;
        position: relative;
        container-name: scene-editor;
        container-type: inline-size;
        color: var(--ink);
        background: var(--background);
        font-size: var(--14pbu, 14px);

        display: grid;
        grid-template-columns: minmax(var(--240pbu, 240px), 1fr) minmax(var(--320pbu, 320px), 6fr) minmax(var(--240pbu, 240px), 1fr);
        grid-template-rows: auto minmax(var(--320pbu, 320px), 1fr) auto;
        align-items: stretch;                
    }

    .kit-version {
        position: absolute;
        z-index: 5;
        top: var(--8pbu, 8px);
        left: var(--8pbu, 8px);
        box-sizing: border-box;
        max-width: calc(100% - var(--16pbu, 16px));
        overflow: hidden;
        color: var(--muted);
        font-size: var(--10pbu, 10px);
        font-weight: 400;
        line-height: 1.2;
        font-variant-numeric: tabular-nums;
        text-overflow: ellipsis;
        white-space: nowrap;
        pointer-events: none;
    }

  

    fluent-button {
        min-width: auto;
    }

    .square-btn {
        width: var(--btn-size-m-pbu, var(--btn-size-m-px));
        min-width: var(--btn-size-m-pbu, var(--btn-size-m-px));
        max-width: var(--btn-size-m-pbu, var(--btn-size-m-px));
        height: var(--btn-size-m-pbu, var(--btn-size-m-px));
        min-height: var(--btn-size-m-pbu, var(--btn-size-m-px));
        max-height: var(--btn-size-m-pbu, var(--btn-size-m-px));      
        max-height: none;

        white-space: nowrap;
        padding: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .half-square-btn {
        height: calc(var(--btn-size-m-pbu, var(--btn-size-m-px) / 2));
        min-height: calc(var(--btn-size-m-pbu, var(--btn-size-m-px) / 2));
    }    

    .btn-size-s {
        width: var(--btn-size-s-pbu, var(--btn-size-s-px));
        min-width: var(--btn-size-s-pbu, var(--btn-size-s-px));
        max-width: var(--btn-size-s-pbu, var(--btn-size-s-px));
        height: var(--btn-size-s-pbu, var(--btn-size-s-px));
        min-height: var(--btn-size-s-pbu, var(--btn-size-s-px));
        max-height: var(--btn-size-s-pbu, var(--btn-size-s-px));        
    }  
    
    .btn-size-m {
        width: var(--btn-size-m-pbu, var(--btn-size-m-px));
        min-width: var(--btn-size-m-pbu, var(--btn-size-m-px));
        max-width: var(--btn-size-m-pbu, var(--btn-size-m-px));
        height: var(--btn-size-m-pbu, var(--btn-size-m-px));
        min-height: var(--btn-size-m-pbu, var(--btn-size-m-px));
        max-height: var(--btn-size-m-pbu, var(--btn-size-m-px));      
    }     

    .outline-btn {
        border: none;
        background: transparent;
        color: var(--ink);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: var(--4pbu, 4px);
    }

    :host-context(html[data-theme="dark"]) .workbench {
            --ink: var(--ff-scene-editor-ink, #e3ede7);
            --muted: var(--ff-scene-editor-muted, #a3b5ab);
            --line: var(--ff-scene-editor-line, #455c50);
            --panel: var(--ff-scene-editor-panel, #1c2a24);
            --background: var(--ff-scene-editor-background, #111a16);
            --accent: var(--ff-scene-editor-accent, #70bea1);
            --signal: var(--ff-scene-editor-signal, #ff947a);
            --surface: var(--ff-scene-editor-surface, #22332a);
            --surface-alt: var(--ff-scene-editor-surface-alt, #293b31);
            --hover: var(--ff-scene-editor-hover, #35493e);
            --focus: var(--ff-scene-editor-focus, #70bea1);
            --disabled: var(--ff-scene-editor-disabled, #2b3831);
            --shadow: var(--ff-scene-editor-shadow, 0 var(--4pbu, 4px) var(--14pbu, 14px) rgba(0, 0, 0, 0.32));
    }

    #dashboard-shell {
      display: flex;
        align-items: center;
        justify-content: center;  
    }

    .section-heading,
    .panel-heading {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: var(--18pbu, 18px);
    }

    .eyebrow {
        margin: 0 0 var(--5pbu, 5px);
        color: var(--muted);
        font-size: var(--10pbu, 10px);
        font-weight: 700;
        line-height: 1.3;
        text-transform: uppercase;
    }

    h2,
    h3,
    p {
        margin-top: 0;
    }

    .dimension-control {
        display: inline-flex;
        align-items: center;
        gap: var(--4pbu, 4px);
        padding: var(--4pbu, 4px) var(--6pbu, 6px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--4pbu, 4px);
        color: var(--muted);
        background: var(--panel);
        font-size: var(--12pbu, 12px);
        white-space: nowrap;
    }

    .dimension-control input {
        box-sizing: border-box;
        width: var(--52pbu, 52px);
        height: var(--24pbu, 24px);
        padding: var(--2pbu, 2px) var(--3pbu, 3px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--3pbu, 3px);
        color: var(--ink);
        background: var(--surface);
        font: inherit;
        font-variant-numeric: tabular-nums;
    }

    .dimension-control input:focus-visible {
        outline: var(--3pbu, 3px) solid var(--focus);
        outline-offset: var(--1pbu, 1px);
    }

    .editor-header {
        min-height: var(--100pbu, 100px);
        position: relative;
        z-index: 4;
        display: flex;
        min-width: 0;
        align-items: flex-start;
        gap: var(--8pbu, 8px);
        padding: var(--8pbu, 8px);        
        background: var(--background);
        container-name: ribbon-controls;
        container-type: inline-size;
        grid-row: 1;
        grid-column: 2 / span 2;
        overflow: visible;
        box-sizing: border-box;
    }

    .dashboard-trigger {
        align-self: center;
        margin: 0 var(--8pbu, 8px);        
        box-sizing: border-box;
        display: grid;
        width: var(--96pbu, 96px);
        min-width: var(--96pbu, 96px);
        height: var(--64pbu, 64px);
        min-height: var(--64pbu, 64px);
        flex: 0 0 var(--96pbu, 96px);
        place-items: center;
        padding: 0;
        border: 0;
        background: transparent;
        transition: transform 120ms ease, background-color 120ms ease;
    }

    .dashboard-trigger:hover {
        /* background: var(--hover); */
        background: none;
        transform: scale(1.05);
    }

    .dashboard-trigger:focus-visible {
        outline: var(--3pbu, 3px) solid var(--focus);
        outline-offset: var(--4pbu, 4px);
    }

    .dashboard-trigger-art {
        display: block;
        width: var(--96pbu, 96px);
        height: auto;
        aspect-ratio: 131.40385 / 76.152977;
    }

    .dashboard-drawer {
        position: fixed;
        inset-block-start: 0;
        inset-inline-start: 0;
        z-index: 1000;
        width: 0;
        height: 0;
        overflow: visible;
        --drawer-width: min(var(--320pbu, 320px), calc(100vw - var(--16pbu, 16px)));
    }

    .dashboard-drawer::part(dialog) {
        box-sizing: border-box;
        max-height: 100dvh;
        padding: var(--12pbu, 12px);
        border-color: var(--line);
        border-radius: 0 var(--6pbu, 6px) var(--6pbu, 6px) 0;
        color: var(--ink);
        background: var(--panel);
        box-shadow: var(--shadow);
    }

    .dashboard-drawer-heading {
        display: flex;
        min-width: 0;
        align-items: center;
        justify-content: space-between;
        gap: var(--8pbu, 8px);
        color: var(--ink);
        font-size: var(--13pbu, 13px);
        font-weight: 700;
    }

    .dashboard-close {
        box-sizing: border-box;
        display: grid;
        width: var(--32pbu, 32px);
        min-width: var(--32pbu, 32px);
        height: var(--32pbu, 32px);
        min-height: var(--32pbu, 32px);
        place-items: center;
        padding: 0;
        border-color: var(--line);
        color: var(--ink);
        background: var(--surface);
        font-size: var(--20pbu, 20px);
        line-height: 1;
    }

    .dashboard-drawer ff-theme-switcher {
        max-width: 100%;
    }

    .dashboard-actions {
        display: grid;
        min-width: 0;
        grid-template-columns: minmax(0, 1fr);
        gap: var(--6pbu, 6px);
    }

    .dashboard-actions button {
        box-sizing: border-box;
        min-width: 0;
        min-height: var(--40pbu, 40px);
        padding: var(--8pbu, 8px) var(--10pbu, 10px);
        border-color: var(--line);
        color: var(--ink);
        background: var(--surface);
        font-size: var(--12pbu, 12px);
        text-align: left;
        white-space: normal;
        overflow-wrap: anywhere;
    }

    .dashboard-actions button:hover {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--hover);
    }

    @media (prefers-reduced-motion: reduce) {
        .dashboard-trigger {
            transition: none;
        }
    }

    .ribbon-viewport {
        box-sizing: border-box;
        flex: 1 1 auto;
        min-width: 0;
        max-width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        overscroll-behavior-x: contain;
        scrollbar-color: var(--line) var(--panel);
        scrollbar-width: auto;
        scroll-padding-inline: var(--6pbu, 6px);
        margin-bottom: var(--_15pbu, -15px);
    }

    .ribbon-viewport :focus-visible {
        scroll-margin-inline: var(--6pbu, 6px);
    }

    .ribbon-row {
        width: max-content;
        min-width: 100%;
        height: stretch;
        flex-wrap: nowrap;
        min-height: var(--88pbu, 88px);
    }

    .ribbon-row > *,
    .ribbon-row .ribbon-group {
        flex: 0 0 auto;
    }

    .ribbon-row .ribbon-group {
        max-width: none;
    }

    .ribbon-row .c-group {
        padding-top: 0;
        align-items: flex-start;
    }

    .ribbon-row,
    .c-row {
        display: flex;
        min-width: 0;
        align-items: stretch;
        
    }



    .c-row {
        position: fixed;
        z-index: 1000;
        inset: auto;
        margin: 0;
        width: max-content;
        max-width: calc(100vw - var(--16pbu, 16px));
        max-width: min(calc(100vw - var(--16pbu, 16px)), calc(100dvw - var(--16pbu, 16px)));
        max-height: calc(100vh - var(--16pbu, 16px));
        max-height: min(calc(100vh - var(--16pbu, 16px)), calc(100dvh - var(--16pbu, 16px)));
        box-sizing: border-box;
        align-items: flex-start;
        overflow: auto;
        overscroll-behavior: contain;
        padding: var(--8pbu, 8px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--4pbu, 4px);
        background: var(--panel);
        box-shadow: var(--shadow);
    }

    .c-row > * {
        box-sizing: border-box;
        min-width: 0;
        max-width: 100%;
    }

    .c-row[data-c-row="fieldView"] {
        flex-wrap: wrap;
    }

    .c-row[data-c-row="fieldView"] > .appearance-controls {
        flex: 1 1 100%;
        min-width: 0;
        max-width: 100%;
        flex-wrap: wrap;
    }

    .c-row[data-c-row="contourOverlay"] > .contour-transform-grid {
        min-width: 0;
        max-width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--112pbu, 112px)), 1fr));
    }

    .c-row > .control-group {
        gap: var(--4pbu, 4px);
        padding: var(--5pbu, 5px) var(--7pbu, 7px);
    }

    .c-row .dimension-control {
        gap: var(--3pbu, 3px);
        padding: var(--3pbu, 3px) var(--5pbu, 5px);
        font-size: var(--11pbu, 11px);
    }

    .c-row .dimension-control input {
        width: var(--48pbu, 48px);
        height: var(--22pbu, 22px);
    }

    .control-group {
        box-sizing: border-box;
        display: flex;
        min-width: 0;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: var(--5pbu, 5px);
        padding: var(--7pbu, 7px) var(--8pbu, 8px);
        /* border-left: var(--2pbu, 2px) solid var(--line); */
        /* background: var(--panel); */
    }

    .ribbon-group {
        flex: 0 1 auto;
        max-width: 100%;
        justify-content: center;
        padding: var(--5pbu, 5px) var(--8pbu, 8px);
        border: var(--1pbu, 1px) solid transparent;/* var(--line); */
        border-bottom-width: var(--2pbu, 2px);
        border-radius: var(--4pbu, 4px);
        cursor: pointer;
        transition: border-color 120ms ease, background-color 120ms ease;
    }

    .ribbon-group:hover {
        border-color: var(--accent);
    }

    .ribbon-group[data-active] {
        /* border-color: var(--accent); */
        color: var(--accent);
        background: var(--surface-alt);
        box-shadow: inset 0 0 0 var(--1pbu, 1px) color-mix(in srgb, var(--accent) 12%, transparent);
    }

    .ribbon-group[data-active] .control-label {
        color: var(--accent);
    }

    .control-group[hidden],
    .c-row[hidden],
    .appearance-controls[hidden] {
        display: none;
    }

    .appearance-controls {
        display: flex;
        min-width: 0;
        max-width: 100%;
        flex-wrap: wrap;
        align-items: stretch;
        gap: var(--6pbu, 6px);
    }

    .appearance-controls .control-group {
        box-sizing: border-box;
        width: fit-content;
    }

    .appearance-controls .property-field {
        /* width: 100%; */
    }

    .control-label {
        color: var(--muted);
        font-size: var(--12pbu, 12px);
    }




    .lbl-block {
        box-sizing: border-box;
        display: flex;
        min-width: 0;
        max-width: 100%;        
        align-items: center;
        gap: var(--8pbu, 8px);
        height: var(--32pbu, 32px);
        justify-content: center;
    }




   


    .group-inspector-controls {
        display: grid;
        min-width: 0;
        align-content: start;
        gap: var(--8pbu, 8px);
    }

    .group-edit-controls {        
        flex: 0 1 auto;
        max-width: 100%;
        border-left-color: var(--accent);
        display: flex;
        gap: var(--6pbu, 6px);
    }

    .group-inspector-controls > .group-list {
        min-width: 0;
        margin-top: 0;
        padding-top: var(--10pbu, 10px);
    }

    .group-list {
        height: calc(100vh - var(--140pbu, 140px));
        overflow: auto;    
    }    

    .group-list-heading {
        display: flex;
        min-width: 0;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: var(--8pbu, 8px);
        margin-bottom: var(--6pbu, 6px);
    }

    .group-list-heading h4 {
        min-width: 0;
        margin: 0;
    }

    .group-list-overlay-toggle {
        min-height: var(--28pbu, 28px);
        padding: var(--2pbu, 2px) var(--4pbu, 4px);
        font-size: var(--10pbu, 10px);
    }

    .group-accent {
        border-color: var(--line);
        border-left: var(--3pbu, 3px) solid var(--accent);
        border-radius: var(--4pbu, 4px);
        background: var(--panel);
        position: relative;
    }    

    .c-group {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: var(--12pbu, 12px);
        padding: var(--6pbu, 6px) var(--12pbu, 12px);
        border: var(--1pbu, 1px) solid transparent;
        white-space: nowrap;

        border-left-color: var(--accent);

        position: relative;
    }

    .c-group:nth-child(2) {
        grid-column: 2;
    }

    .c-group:nth-child(3) {
        grid-column: 1 / span 2;
    }

    .c-group.dividers > *
    {
        border-inline-start: var(--1pbu, 1px) solid var(--line);
        padding-left: var(--12pbu, 12px);
    }

    .c-group.dividers > *:first-child {
        border-inline-start: 0;
        /* padding-right: var(--6pbu, 6px); */
        padding-left: 0;
    }

    .c-group.dividers[data-movement-block] > .movement-subblocks:first-child {
        padding: 0;
        border: 0;
    }
    
    .c-group > sub:last-child {
        border-inline-start: 0;
        padding: 0 var(--8pbu, 8px);  
        
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        position: absolute;
        display: block;
        width: max-content;

        color: var(--muted);
        font-size: var(--11pbu, 11px);

        height: var(--16pbu, 16px);
        min-height: var(--16pbu, 16px);
        max-height: var(--16pbu, 16px);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--6pbu, 6px);
    }


    .item-inspector .c-group > .control-label {
        width: auto;
        flex: 0 0 auto;
    }


    /* .c-group > .switch-ctl {
        min-height: var(--28pbu, 28px);
        gap: var(--5pbu, 5px);
        padding: var(--2pbu, 2px) var(--4pbu, 4px);
        font-size: var(--11pbu, 11px);
    } */

    .control-ribbon [data-ribbon-group="contour"] .svg-file-picker {
        min-width: 0;
        max-width: 100%;
        /* flex: 1 1 var(--32pbu, 32px); */
    }

    .control-ribbon [data-ribbon-group="contour"] .contour-transform-grid {
        min-width: 0;
        /* flex: 1 1 100%; */
    }


    .c-group[data-control-strip="objects"] > * {
        box-sizing: border-box;
        min-width: 0;
        max-width: 100%;
    }

    .c-group[data-control-strip="objects"] .mock-data-tools {
        width: 100%;
        min-width: 0;
        max-width: 100%;
        padding: 0;
        border: 0;
        background: transparent;
    }

    .mock-data-toolbar {
        min-width: 0;
        max-width: 100%;
    }


    
    .c-group[data-control-strip="objects"] .create-item-toggle {
        box-sizing: border-box;
        min-width: 0;
        max-width: 100%;
        min-height: var(--32pbu, 32px);
        white-space: normal;
        overflow-wrap: anywhere;
    }

    .c-group[data-control-strip="objects"] .object-highlight-controls {
        min-width: 0;
        max-width: 100%;
        margin: 0;
        padding: 0;
        border: 0;
    }

    .c-group[data-control-strip="objects"] .object-highlight-controls > button {
        box-sizing: border-box;
        min-width: 0;
        max-width: 100%;
        min-height: var(--32pbu, 32px);
        white-space: normal;
        overflow-wrap: anywhere;
    }

    .c-group[data-control-strip="objects"] .inspector-header {
        display: flex;
        min-width: 0;
        max-width: 100%;
        flex-wrap: wrap;
        align-items: center;
    }

    .c-group[data-control-strip="objects"] .inspector-header > div {
        box-sizing: border-box;
        min-width: 0;
        flex: 1 1 100%;
    }

    .c-group[data-control-strip="objects"] .inspector-header h3 {
        overflow-wrap: anywhere;
    }

    .c-group[data-control-strip="objects"] .inspector-header > button {
        box-sizing: border-box;
        min-width: 0;
        max-width: 100%;
        min-height: var(--32pbu, 32px);
        flex: 1 1 var(--88pbu, 88px);
        white-space: normal;
        overflow-wrap: anywhere;
    }

    .c-group[data-control-strip="objects"] .mock-data-json > summary:focus-visible {
        outline: var(--3pbu, 3px) solid var(--focus);
        outline-offset: var(--2pbu, 2px);
    }


    .control-ribbon > .c-group[data-control-strip="paper"] .property-field {
        align-items: center;
        flex: 0 0 auto;
    }

    .control-ribbon > .c-group[data-control-strip="paper"] .paper-size-select {
        width: var(--64pbu, 64px);
        min-width: var(--64pbu, 64px);
        min-height: var(--28pbu, 28px);
    }

    .control-ribbon > .c-group[data-control-strip="objects"] .mock-data-tools {
        width: auto;
        flex: 1 1 100%;
        min-width: 0;
        max-width: 100%;
    }

    .mock-data-toolbar {
        width: 100%;
        gap: var(--4pbu, 4px);
    }

    .control-ribbon > .c-group[data-control-strip="objects"] .mock-data-status {
        flex: 1 1 var(--140pbu, 140px);
        max-width: 100%;
    }

    .control-ribbon > .c-group[data-control-strip="objects"] .mock-data-json {
        min-width: 0;
        max-width: 100%;
    }

    .control-ribbon > .c-group[data-control-strip="objects"] .mock-data-json summary {
        max-width: 100%;
        white-space: normal;
        overflow-wrap: anywhere;
    }

    .control-ribbon > .c-group[data-control-strip="objects"] .mock-data-json pre {
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        max-width: 100%;
    }

    .control-ribbon > .c-group[data-control-strip="objects"] .hex-overlay-toggle:not(input) {
        flex-wrap: wrap;
    }

    .control-ribbon > .c-group[data-control-strip="objects"] .hex-overlay-toggle:not(input) > span {
        min-width: 0;
        overflow-wrap: anywhere;
    }

    .control-ribbon > .c-group[data-control-strip="objects"] .object-highlight-controls {
        flex: 1 1 var(--180pbu, 180px);
    }

    .control-ribbon > .c-group[data-control-strip="objects"] .inspector-header {
        flex: 1 1 100%;
    }

    .item-inspector .c-group[data-control-strip="groups"] .group-edit-controls {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        min-width: 0;
        max-width: 100%;
        flex: 1 1;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--4pbu, 4px);
        padding: 0;
        border: 0;
        background: transparent;
    }


    .c-group[data-control-strip="layout"] input[data-placement-count] {
        box-sizing: border-box;
        width: var(--40pbu, 40px);
        min-width: 0;
        min-height: var(--28pbu, 28px);
        padding: var(--3pbu, 3px) var(--4pbu, 4px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--3pbu, 3px);
        color: var(--ink);
        background: var(--surface);
        font: inherit;
        font-size: var(--11pbu, 11px);
        font-variant-numeric: tabular-nums;
    }

    .c-group[data-control-strip="layout"] input[data-placement-count]:focus-visible {
        outline: var(--3pbu, 3px) solid var(--focus);
        outline-offset: var(--1pbu, 1px);
    }

    .group-edit-toggle {
        min-height: var(--30pbu, 30px);
        padding: var(--4pbu, 4px) var(--9pbu, 9px);
        color: var(--accent);
        font-size: var(--11pbu, 11px);
    }


    .group-edit-actions {
        display: flex;
        max-width: 100%;        
        gap: var(--6pbu, 6px);
    }

    .group-edit-actions button {
        min-height: var(--28pbu, 28px);
        padding: var(--4pbu, 4px) var(--7pbu, 7px);
        font-size: var(--11pbu, 11px);
    }

    .group-edit-actions button[data-group-edit-action="remove"][aria-pressed="true"] {
        border-color: var(--signal);
        color: var(--surface);
        background: var(--signal);
    }

    .group-edit-actions button[data-group-edit-action="remove"][aria-pressed="true"]:hover {
        background: var(--signal);
    }

    .group-edit-toggle:disabled,
    .group-edit-actions button:disabled {
        cursor: default;
        opacity: 0.45;
    }

    .ribbon-group-select {
        box-sizing: border-box;
        min-height: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        text-align: left;
    }

    .ribbon-group-select:hover {
        background: transparent;
    }

    .svg-controls {
        box-sizing: border-box;
        display: grid;
        min-width: 0;
        grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(var(--64pbu, 64px), auto);
        align-items: end;
        gap: var(--8pbu, 8px);
        padding: var(--9pbu, 9px);
        border: var(--1pbu, 1px) solid var(--line);
        border-left: var(--3pbu, 3px) solid var(--accent);
        border-radius: var(--4pbu, 4px);
        background: var(--panel);
        max-width: 100%;
    }

    .contour-transform-grid {
        display: grid;
        min-width: 0;
        grid-column: 1 / -1;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: var(--8pbu, 8px);
    }

    .ctf {
        min-width: 0;
    }

    .ctf input {
        box-sizing: border-box;
        min-height: var(--28pbu, 28px);
        padding: var(--4pbu, 4px) var(--6pbu, 6px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--3pbu, 3px);
        color: var(--ink);
        background: var(--surface);
        font: inherit;
        font-size: var(--11pbu, 11px);
        font-variant-numeric: tabular-nums;
    }

    .ctf input:focus-visible {
        outline: var(--3pbu, 3px) solid var(--focus);
        outline-offset: var(--1pbu, 1px);
    }

    .ctf input {
        width: 100%;
        min-width: 0;
    }

    .ctf > * {
        align-self: center;
        justify-self: center;
    }

    .svg-controls .major-action {
        grid-column: 1;
        align-self: center;
    }

    .scene-controls {
        flex: 0 0 auto;
    }

    .print-action {
        box-sizing: border-box;
        display: grid;
        width: var(--48pbu, 48px);
        min-width: var(--48pbu, 48px);
        height: var(--48pbu, 48px);
        min-height: var(--48pbu, 48px);
        place-items: center;
        padding: 0;
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--4pbu, 4px);
        color: var(--ink);
        background: var(--surface);
        font-size: var(--18pbu, 18px);
        line-height: 1;

        align-self: center;
        justify-self: end;
        
        position: absolute;
        right: var(--16pbu, 16px);
    }

    .print-action svg {
        display: block;
        width: var(--20pbu, 24px);
        height: var(--20pbu, 24px);
    }

    .print-action:hover {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--hover);
    }

    .control-ribbon > .c-group[data-control-strip="paper"] .print-action {
        position: static;
        right: auto;
        flex: 0 0 auto;
        align-self: center;
        margin: 0;
    }

    .svg-file-picker {
        display: flex;
        min-width: 0;
        grid-column: 1 / -1;
        flex-direction: row;
        gap: var(--3pbu, 3px);
        color: var(--muted);
        font-size: var(--10pbu, 10px);
        font-weight: 600;
    }

    .svg-file-picker input {
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        color: var(--ink);
        font: inherit;
        font-size: var(--10pbu, 10px);
    }

    .major-action {
        border-color: var(--accent-attention);
        background: var(--surface);
    }

    .major-action:hover {
        background: var(--accent-warm);
    }

    .major-action:disabled {
        cursor: default;
        opacity: 0.45;
    }

    .svg-file-name {
        grid-column: 2 / -1;
        align-self: center;
        min-width: var(--64pbu, 64px);
        max-width: var(--64pbu, 64px);
        width: var(--64pbu, 64px);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: var(--muted);
        font-size: var(--10pbu, 10px);
        overflow-wrap: anywhere;
    }

    .segmented {
        display: inline-flex;
        max-width: 100%;
        gap: var(--1pbu, 1px);
        padding: var(--2pbu, 2px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--4pbu, 4px);
        background: var(--surface-alt);
    }

    .svg-file-picker {
        gap: var(--4pbu, 4px);
        border: none;
        background: transparent;
    }

    button {        
        padding: var(--6pbu, 6px) var(--10pbu, 10px);
        border: var(--1pbu, 1px) solid transparent;
        border-radius: var(--3pbu, 3px);
        color: var(--ink);
        background: transparent;
        font: inherit;
        font-size: var(--12pbu, 12px);
        /* font-weight: 600; */
        cursor: pointer;
    }

    button:hover {
        background: var(--hover);
    }

    button:focus-visible,
    .stage-viewport:focus-visible {
        outline: var(--3pbu, 3px) solid var(--focus);
        outline-offset: var(--2pbu, 2px);
    }

    .segmented button[aria-pressed="true"] {
        color: var(--surface);
        background: var(--accent);
    }

    .switch-ctl {
        display: inline-flex;
        align-items: center;
        gap: var(--8pbu, 8px);
        padding: 0;
        width: fit-content;
        align-self: center;
        border: none;
    }

    .switch-ctl:hover {
        background: none;
    }

    button[data-hex-coordinates-toggle] {
        box-sizing: border-box;
        display: inline-grid;
        width: 16px;
        min-width: 16px;
        max-width: 16px;
        height: 16px;
        min-height: 16px;
        max-height: 16px;
        flex: 0 0 16px;
        aspect-ratio: 1;
        place-items: center;
        margin-inline-start: var(--4pbu, 4px);
        padding: 0;
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--3pbu, 3px);
        color: var(--muted);
        background: var(--surface);
        font-size: var(--10pbu, 10px);
        font-weight: 700;
        line-height: 1;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
    }

    button[data-hex-coordinates-toggle]:hover {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--hover);
    }

    button[data-hex-coordinates-toggle][aria-pressed="true"] {
        border-color: var(--accent);
        color: var(--surface);
        background: var(--accent);
    }

    button[data-hex-coordinates-toggle]:focus-visible {
        outline: var(--3pbu, 3px) solid var(--focus);
        outline-offset: var(--2pbu, 2px);
    }

    .switch-track,
    .primary-layer-visibility-track {
        box-sizing: border-box;
        display: inline-flex;
        width: var(--28pbu, 28px);
        height: var(--16pbu, 16px);
        flex: 0 0 var(--28pbu, 28px);
        align-items: center;
        padding: var(--2pbu, 2px);
        border-radius: var(--9pbu, 9px);
        background: var(--muted);
        transition: background-color 120ms ease;
    }

    .switch-track span,
    .primary-layer-visibility-track span {
        width: var(--12pbu, 12px);
        height: var(--12pbu, 12px);
        flex: 0 0 var(--12pbu, 12px);
        border-radius: 50%;
        background: var(--surface);
        transition: transform 120ms ease;
    }

    .switch-track span {
        width: var(--12pbu, 12px);
        height: var(--12pbu, 12px);
        flex: 0 0 var(--12pbu, 12px);
    }

    .switch-ctl[aria-pressed="true"] .switch-track,
    .primary-layer-visibility[aria-pressed="true"] .primary-layer-visibility-track {
        background: var(--accent);
    }

    .switch-ctl[aria-pressed="true"] .switch-track.warm {
        background: var(--accent-warm);
    }

    .switch-ctl[aria-pressed="true"] .switch-track.attention {
        background: var(--accent-attention);
    }

    .switch-ctl[aria-pressed="true"] .switch-track span,
    .primary-layer-visibility[aria-pressed="true"] .primary-layer-visibility-track span {
        transform: translateX(var(--12pbu, 12px));
    }

    .switch-track.vert {
        width: var(--18pbu, 18px);
        height: var(--32pbu, 32px);
        flex: 0 0 var(--18pbu, 18px);
        position: relative;
    }

    .switch-track.vert span {
        width: var(--14pbu, 14px);
        height: var(--14pbu, 14px);
        flex: 0 0 var(--14pbu, 14px);

        bottom: 2px;
        position: absolute;
    }

    .switch-ctl[aria-pressed="true"] .switch-track.vert span {
        transform: translateY(var(--_14pbu, -14px));
    }

    .surface-section {
        padding-top: 0;
        height: var(--840pbu, 840px);
    }

    .section-heading {
        align-items: center;
        padding: 0 var(--4pbu, 4px) var(--10pbu, 10px);
    }

    .section-heading .eyebrow,
    .panel-heading .eyebrow {
        margin-bottom: var(--3pbu, 3px);
    }

    .scene-status-row {
        box-sizing: border-box;
        display: flex;
        min-width: 0;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--8pbu, 8px);        
        position: relative;
        z-index: 20;
        grid-row: 3;
    }

    .scene-status-history {
        display: inline-flex;
        flex: 0 0 auto;
        order: -1;
        align-items: center;
    }

    .scene-status-row [data-status-history-trigger] {
        box-sizing: border-box;
        display: grid;
        width: var(--18pbu, 18px);
        min-width: var(--18pbu, 18px);
        max-width: var(--18pbu, 18px);
        height: var(--18pbu, 18px);
        min-height: var(--18pbu, 18px);
        max-height: var(--18pbu, 18px);
        flex: 0 0 var(--18pbu, 18px);
        order: -1;
        place-items: center;
        padding: 0;
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--4pbu, 4px);
        color: var(--ink);
        background: var(--surface);
        font: inherit;
        font-size: var(--11pbu, 11px);
        line-height: 1;
        cursor: pointer;
    }

    .scene-status-row [data-status-history-trigger]:hover,
    .scene-status-row [data-status-history-close]:hover {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--hover);
    }

    .scene-status-row [data-status-history-trigger][aria-expanded="true"] {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--surface-alt);
    }

    .scene-status-row [data-status-history-trigger]:focus-visible,
    .scene-status-row [data-status-history-close]:focus-visible {
        outline: var(--3pbu, 3px) solid var(--focus);
        outline-offset: var(--1pbu, 1px);
    }

    .scene-status-row [data-status-history-panel] {
        position: absolute;
        inset-inline-start: 0;
        inset-block-end: calc(100% + var(--6pbu, 6px));
        z-index: 1;
        box-sizing: border-box;
        display: flex;
        min-width: 0;
        width: max(var(--360pbu, 360px), calc(100vw - var(--16pbu, 16px)));
        max-width: calc(100% - var(--16pbu, 16px));
        max-height: max(var(--320pbu, 320px), calc(100vh - var(--32pbu, 32px)));
        flex-direction: column;
        gap: var(--6pbu, 6px);
        overflow: hidden;
        padding: var(--8pbu, 8px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--4pbu, 4px);
        color: var(--ink);
        background: var(--panel);
        box-shadow: var(--shadow);
    }

    .scene-status-row [data-status-history-panel][hidden] {
        display: none;
    }

    .scene-status-row [data-status-history-close] {
        box-sizing: border-box;
        display: grid;
        width: var(--32pbu, 32px);
        min-width: var(--32pbu, 32px);
        height: var(--32pbu, 32px);
        min-height: var(--32pbu, 32px);
        place-items: center;
        padding: 0;
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--4pbu, 4px);
        color: var(--ink);
        background: var(--surface);
        line-height: 1;
        cursor: pointer;
    }

    .scene-status-row [data-status-history-list] {
        box-sizing: border-box;
        min-height: 0;
        max-height: min(var(--280pbu, 280px), calc(100vh - var(--64pbu, 64px)));
        flex: 1 1 auto;
        overflow: auto;
        overscroll-behavior: contain;
        scrollbar-gutter: stable;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .scene-status-row [data-status-history-list] > li {
        overflow-wrap: anywhere;
    }

    .svg-status {
        flex: 1 1 var(--240pbu, 240px);
        min-width: 0;
        min-height: var(--17pbu, 17px);
        margin: 0 var(--4pbu, 4px);
        color: var(--muted);
        font-size: var(--11pbu, 11px);
        line-height: 1.4;
        overflow-wrap: anywhere;
        height: var(--16pbu, 16px);
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .mock-data-tools {
        box-sizing: border-box;
        display: flex;
        flex: 1 1 var(--260pbu, 260px);
        min-width: 0;
        flex-direction: column;
        gap: var(--6pbu, 6px);
        margin: 0;
        padding: var(--5pbu, 5px) var(--7pbu, 7px);
        border-left: var(--2pbu, 2px) solid var(--line);
        background: var(--panel);
    }

    .mock-data-toolbar {
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .mock-data-button {
        min-height: var(--30pbu, 30px);
        border-color: var(--accent);
        color: var(--surface);
        background: var(--accent);
    }

    .mock-data-button:hover {
        background: var(--accent);
    }

    .mock-data-refresh {
        box-sizing: border-box;
        display: grid;
        width: var(--32pbu, 32px);
        min-width: var(--32pbu, 32px);
        height: var(--32pbu, 32px);
        min-height: var(--32pbu, 32px);
        flex: 0 0 var(--32pbu, 32px);
        place-items: center;
        padding: 0;
    }

    .mock-data-refresh svg {
        display: block;
        width: var(--18pbu, 18px);
        height: var(--18pbu, 18px);
    }

    .create-item-toggle {
        min-height: var(--30pbu, 30px);
        padding: var(--4pbu, 4px) var(--8pbu, 8px);
        border-color: var(--line);
        color: var(--accent);
        background: var(--panel);
        font-size: var(--11pbu, 11px);
    }

    .primary-layer-controls {
        display: flex;
        min-width: 0;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--4pbu, 4px);
    }

    .primary-layer-controls button {
        box-sizing: border-box;
        min-height: var(--30pbu, 30px);
        border-color: var(--line);
        background: var(--panel);
        font-size: var(--11pbu, 11px);
    }

    .highlight-toggle {
        box-sizing: border-box;
        max-width: 100%;
        min-height: var(--30pbu, 30px);
        padding: var(--4pbu, 4px) var(--8pbu, 8px);
        border-color: var(--line);
        color: var(--ink);
        background: var(--surface-alt);
        font-size: var(--11pbu, 11px);
        line-height: 1.25;
        overflow-wrap: anywhere;
        white-space: normal;
    }

    .highlight-toggle:hover {
        border-color: var(--accent);
        background: var(--hover);
    }

    .highlight-toggle[aria-pressed="true"] {
        border-color: var(--accent);
        color: var(--surface);
        background: var(--accent);
    }

    .primary-layer-visibility {
        display: inline-flex;
        min-width: var(--78pbu, 78px);
        align-items: center;
        justify-content: center;
        gap: var(--6pbu, 6px);
        padding: var(--4pbu, 4px) var(--7pbu, 7px);
        white-space: nowrap;
    }

    .primary-layer-lock {
        display: inline-flex;
        width: var(--32pbu, 32px);
        min-width: var(--32pbu, 32px);
        height: var(--30pbu, 30px);
        align-items: center;
        justify-content: center;
        padding: var(--4pbu, 4px);
        font-size: var(--14pbu, 14px);
        line-height: 1;
    }

    .primary-layer-lock[aria-pressed="true"] {
        border-color: var(--accent);
        background: var(--surface-alt);
    }

    .create-item-toggle[aria-pressed="true"] {
        border-color: var(--accent);
        color: var(--surface);
        background: var(--accent);
    }

    .create-item-toggle[aria-pressed="true"]:hover {
        background: var(--accent);
    }

    .mock-data-status {
        min-width: 0;
        color: var(--muted);
        font-size: var(--11pbu, 11px);
        line-height: 1.4;
        overflow-wrap: anywhere;
    }

    .mock-data-json summary {
        width: fit-content;
        color: var(--muted);
        font-size: var(--11pbu, 11px);
        cursor: pointer;
    }

    .mock-data-json pre {
        box-sizing: border-box;
        max-height: var(--180pbu, 180px);
        margin: var(--6pbu, 6px) 0 0;
        padding: var(--8pbu, 8px) var(--10pbu, 10px);
        overflow: auto;
        border: var(--1pbu, 1px) solid var(--line);
        color: var(--ink);
        background: var(--surface);
        font-family: "Cascadia Code", Consolas, monospace;
        font-size: var(--11pbu, 11px);
        line-height: 1.45;
        white-space: pre;
    }

    h3 {
        margin-bottom: 0;
        font-size: var(--17pbu, 17px);
        line-height: 1.25;
    }



    .scene-column {
        display: flex;
        min-width: 0;
        flex-direction: column;
        padding: 0 var(--8pbu, 8px);     
        grid-row: 2;  
        grid-column: 2;
    }

    .scene-zoom {
        display: flex;
        flex: 0 0 auto;
        min-width: 0;
        align-items: center;
        justify-content: flex-end;
        gap: var(--2pbu, 2px);
        margin-left: auto;
        padding: var(--2pbu, 2px) var(--4pbu, 4px) var(--4pbu, 4px);
        white-space: nowrap;
    }

    .scene-zoom-value {
        min-width: var(--42pbu, 42px);
        color: var(--muted);
        font-size: var(--11pbu, 11px);
        font-variant-numeric: tabular-nums;
        text-align: center;
    }

    .scene-zoom button {
        box-sizing: border-box;
        display: inline-flex;
        width: var(--28pbu, 28px);
        height: var(--28pbu, 28px);
        min-height: var(--28pbu, 28px);
        align-items: center;
        justify-content: center;
        padding: 0;
        border-color: transparent;
        font-size: var(--16pbu, 16px);
        line-height: 1;
    }

    .scene-zoom button:hover {
        border-color: var(--line);
    }

    .scene-zoom button:disabled {
        cursor: default;
        opacity: 0.45;
    }

    .stage-viewport {
        box-sizing: border-box;
        position: relative;
        min-width: 0;
        height: var(--808pbu, 808px);
        min-height: var(--360pbu, 360px);
        overflow: auto;
        border: var(--1pbu, 1px) solid var(--line);
        background-color: var(--background);
        background-size: var(--24pbu, 24px) var(--24pbu, 24px);
        scrollbar-color: var(--muted) var(--surface-alt);

        grid-row: 2
    }

    .stage-content {
        box-sizing: border-box;
        width: max-content;
        min-height: 100%;
        /* padding: 16px; */
    }

    .layer-stage {
        position: relative;
        width: max-content;
        min-width: var(--ff-kit-paper-width, 0px);
        min-height: var(--ff-kit-paper-height, 0px);
        isolation: isolate;
        /* outline: var(--1pbu, 1px) dashed orange; */
    }

    .scene-artwork {
        position: relative;
        z-index: 1;
        width: max-content;
        transform: translate(8mm, 8mm);
        transform-origin: top left;
    }

    .create-item-ghost {
        z-index: 3;
        pointer-events: none;
        opacity: 0.65;
        transition: none;
        --ff-hex-item-border-width: 0.5px;
        --ff-hex-item-border-color: var(--accent);
        --ff-hex-item-color: var(--accent);
    }

    .scene-operation-overlay {
        box-sizing: border-box;
        position: absolute;
        z-index: 100;
        inset: 0;
        display: grid;
        place-items: center;
        padding: var(--16pbu, 16px);
        background: color-mix(in srgb, var(--background) 78%, transparent);
        backdrop-filter: blur(2px);
        cursor: wait;
    }

    .scene-operation-overlay[hidden] {
        display: none;
    }

    .scene-operation-card {
        box-sizing: border-box;
        display: flex;
        width: fit-content;
        max-width: min(100%, var(--360pbu, 360px));
        min-width: 0;
        align-items: center;
        gap: var(--12pbu, 12px);
        padding: var(--14pbu, 14px) var(--18pbu, 18px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--6pbu, 6px);
        color: var(--ink);
        background: var(--panel);
        box-shadow: var(--shadow);
        font-size: var(--14pbu, 14px);
        font-weight: 600;
        line-height: 1.4;
    }

    .scene-operation-card > span:last-child {
        min-width: 0;
        overflow-wrap: anywhere;
    }

    .scene-operation-spinner {
        box-sizing: border-box;
        display: block;
        width: var(--24pbu, 24px);
        height: var(--24pbu, 24px);
        flex: 0 0 var(--24pbu, 24px);
        border: var(--3pbu, 3px) solid var(--line);
        border-top-color: var(--accent);
        border-radius: 50%;
        animation: scene-operation-spin 0.8s linear infinite;
    }

    @keyframes scene-operation-spin {
        to { transform: rotate(360deg); }
    }

    @media (prefers-reduced-motion: reduce) {
        .scene-operation-spinner {
            animation: none;
        }
    }

    .scene-startup-overlay {
        box-sizing: border-box;
        position: absolute;
        z-index: 4;
        inset: 0;
        display: grid;
        place-items: center;
        padding: var(--16pbu, 16px);
        pointer-events: none;
    }

    .scene-startup-overlay[hidden] {
        display: none;
    }

    .scene-startup {
        box-sizing: border-box;
        display: flex;
        min-width: 0;
        max-width: min(100%, var(--360pbu, 360px));
        justify-content: center;
        padding: var(--7pbu, 7px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--6pbu, 6px);
        background: var(--panel);
        box-shadow: var(--shadow);
        pointer-events: auto;
    }

    .scene-startup button {
        box-sizing: border-box;
        min-width: min(var(--240pbu, 240px), 100%);
        min-height: var(--44pbu, 44px);
        padding: var(--10pbu, 10px) var(--16pbu, 16px);
        border-color: var(--accent);
        color: var(--surface);
        background: var(--accent);
        font-size: var(--14pbu, 14px);
        font-weight: 700;
        line-height: 1.25;
        overflow-wrap: anywhere;
        white-space: normal;
    }

    .scene-startup button:hover:not(:disabled) {
        border-color: var(--accent);
        color: var(--surface);
        background: var(--accent);
    }

    @media (max-width: 640px) {
        .contour-transform-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ctf:last-child {
            grid-column: 1 / -1;
        }

    }

    .paper-size-underlay {
        position: absolute;
        z-index: 0;
        display: block;
        overflow: visible;
        pointer-events: none;
    }

    .paper-size-underlay[data-hidden] {
        visibility: hidden;
    }

    .paper-size-outline {
        fill: none;
        stroke: var(--muted);
        stroke-width: 1.25px;
        stroke-dasharray: 8 6;
        vector-effect: non-scaling-stroke;
    }

    .region-map-underlay {
        position: absolute;
        z-index: 0;
        display: block;
        overflow: hidden;
        pointer-events: none;
    }

    .region-map-underlay[data-hidden] {
        visibility: hidden;
    }

    ff-scene {
        position: relative;
        z-index: 1;
        --ff-tri-layer-node-color: color-mix(in srgb, var(--accent) 42%, transparent);
        --ff-tri-layer-group-selected-border: var(--accent);
    }

    .telemetry {
        display: grid;
        grid-template-columns: minmax(var(--220pbu, 220px), 0.85fr) minmax(0, 1.4fr);
        gap: var(--20pbu, 20px);
        padding: var(--16pbu, 16px) 0 var(--24pbu, 24px);
        border-bottom: var(--1pbu, 1px) solid var(--line);
    }

    .event-panel {
        min-width: 0;
        padding-right: var(--16pbu, 16px);
        border-right: var(--1pbu, 1px) solid var(--line);
    }

    .panel-heading {
        align-items: center;
        margin-bottom: var(--10pbu, 10px);
    }

    .panel-heading h3 span {
        display: inline-block;
        min-width: 2ch;
        margin-left: var(--4pbu, 4px);
        color: var(--signal);
        font-variant-numeric: tabular-nums;
    }

    .event-marker {
        width: var(--10pbu, 10px);
        height: var(--10pbu, 10px);
        border-radius: 50%;
        background: var(--signal);
        box-shadow: 0 0 0 var(--4pbu, 4px) color-mix(in srgb, var(--signal) 13%, transparent);
    }

    .last-commit {
        display: block;
        min-height: var(--54pbu, 54px);
        padding: var(--9pbu, 9px) var(--10pbu, 10px);
        border-left: var(--3pbu, 3px) solid var(--signal);
        color: var(--ink);
        background: var(--panel);
        font-size: var(--12pbu, 12px);
        line-height: 1.5;
        overflow-wrap: anywhere;
    }

    .item-inspector {
        box-sizing: border-box;
        min-width: 0;
        min-height: var(--360pbu, 360px);
        overflow: auto;
        padding: var(--8pbu, 8px);
        /* border-left: 1px solid var(--line); */
        grid-column: 2;
        grid-row: 1 / span 3;        
    }

    .object-highlight-controls {
        display: flex;
        min-width: 0;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--4pbu, 4px);
        margin-bottom: var(--8pbu, 8px);
        padding-bottom: var(--8pbu, 8px);
        border-bottom: var(--1pbu, 1px) solid var(--line);
    }

    #groups-panel {
        container-name: groups-panel;
        container-type: inline-size;

        grid-row: 2 / span 2;
        grid-column: 1;

        /* border-top: var(--1pbu, 1px) solid var(--accent);   */
        
        display: flex;
        flex-direction: column;
        gap: var(--16pbu, 16px); 
        
        padding-top: 0;
    }

    #properties-panel {
        container-name: properties-panel;
        container-type: inline-size;
    
        grid-row: 2 / span 2;
        grid-column: 3;
    }    

    .item-inspector .control-group {
        box-sizing: border-box;
        display: flex;
        min-width: 0;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--6pbu, 6px) var(--10pbu, 10px);
        padding: var(--6pbu, 6px) 0;
        border: 0;
        border-bottom: var(--1pbu, 1px) solid var(--line);
        background: transparent;
    }

    .item-inspector .control-label {
        width: auto;        
    }


    ff-hex-properties {
        width: var(--216pbu, 216px);
    }

    .selected-slot-properties > ff-hex-properties[mode="slot"][compact] {
        box-sizing: border-box;
        min-width: 0;
        max-width: 100%;
    }

    .selected-slot-properties > ff-hex-properties[mode="slot"][compact] {
        display: block;
        width: 100%;
        overflow-wrap: anywhere;
    }

    .group-inspector-controls {
        align-self: start;
    }

    .group-inspector-controls > [data-callout-controls] {
        margin: 0;
    }

    .group-inspector-controls > ff-hex-properties[mode="slot"][compact],
    ff-hex-properties[mode="slot"][compact] {
        display: block;
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        max-width: 100%;
        margin: 0;
    }

    .item-inspector [data-callout-controls] {
        box-sizing: border-box;
        display: grid;
        width: 100%;
        min-width: 0;
        max-width: 100%;
        grid-template-columns: minmax(0, 1fr);
        align-items: stretch;
        gap: var(--6pbu, 6px);
        margin: var(--6pbu, 6px) 0 0;
        padding: 0;
    }

    .item-inspector .callout-management {
        box-sizing: border-box;
        min-width: 0;
        gap: var(--6pbu, 6px);
        margin-top: var(--6pbu, 6px);
        padding: var(--6pbu, 6px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--3pbu, 3px);
        background: var(--surface);
    }

    .item-inspector [data-callout-create] {
        box-sizing: border-box;
        padding: var(--4pbu, 4px) var(--4pbu, 4px);
        border-color: var(--accent);
        color: var(--accent);
        background: var(--surface-alt);
        font-size: var(--11pbu, 11px);
        text-align: left;
        white-space: nowrap;
        overflow-wrap: anywhere;
    }

    .item-inspector [data-callout-create]:hover:not(:disabled) {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--hover);
    }

    .item-inspector [data-callout-create]:focus-visible {
        outline: var(--2pbu, 2px) solid var(--focus);
        outline-offset: var(--1pbu, 1px);
    }

    .item-inspector [data-callout-create]:disabled {
        cursor: default;
        opacity: 0.45;
    }

    .item-inspector [data-group-list] [data-group-details-row] .group-callout-action {
        box-sizing: border-box;
        display: inline-flex;
        width: var(--24pbu, 24px);
        min-width: var(--24pbu, 24px);
        max-width: var(--24pbu, 24px);
        height: var(--24pbu, 24px);
        min-height: var(--24pbu, 24px);
        max-height: var(--24pbu, 24px);
        flex: 0 0 auto;
        align-items: center;
        justify-content: center;
        padding: 0;
        border: var(--1pbu, 1px) solid var(--accent);
        color: var(--accent);
        background: var(--surface-alt);
        font-size: var(--12pbu, 12px);
        line-height: 1;
    }

    .item-inspector [data-group-list] [data-group-details-row] .group-callout-action:hover:not(:disabled) {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--hover);
    }

    .item-inspector [data-group-list] [data-group-details-row] .group-callout-action:focus-visible {
        outline: var(--2pbu, 2px) solid var(--focus);
        outline-offset: var(--1pbu, 1px);
    }

    .item-inspector [data-group-list] [data-group-details-row] [data-callout-action-delete] {
        border-color: var(--signal);
        color: var(--signal);
        background: var(--surface);
    }

    .item-inspector [data-group-list] [data-group-details-row] [data-callout-action-delete]:hover:not(:disabled) {
        border-color: var(--signal);
        color: var(--signal);
        background: var(--hover);
    }

    .item-inspector [data-callout-actions] {
        display: flex;
        min-width: 0;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--4pbu, 4px);
    }

    .item-inspector [data-group-list] [data-group-details-row] .group-callout-action:disabled {
        cursor: default;
        opacity: 0.45;
    }

    .callout-anchor-position {
        min-width: 0;
        color: var(--muted);
        font-size: var(--10pbu, 10px);
        font-variant-numeric: tabular-nums;
        overflow-wrap: anywhere;
    }

    .callout-settings-popover {
        position: fixed;
        inset: auto;
        z-index: 1000;
        box-sizing: border-box;
        width: min(280px, calc(100vw - var(--16pbu, 16px)));
        max-width: min(calc(100vw - var(--16pbu, 16px)), calc(100dvw - var(--16pbu, 16px)));
        max-height: min(calc(100vh - var(--16pbu, 16px)), calc(100dvh - var(--16pbu, 16px)));
        overflow: auto;
        overscroll-behavior: contain;
        margin: 0;
        padding: var(--8pbu, 8px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--4pbu, 4px);
        color: var(--ink);
        background: var(--panel);
        box-shadow: var(--shadow);
    }

    .callout-settings-popover:not(:popover-open) {
        display: none;
    }

    .callout-settings-popover:popover-open {
        display: grid;
        gap: var(--6pbu, 6px);
    }

    .callout-settings {
        display: grid;
        min-width: 0;
        grid-template-columns: minmax(0, 1fr);
        gap: var(--5pbu, 5px);
    }

    .callout-group-name {
        min-width: 0;
        color: var(--muted);
        font-size: var(--11pbu, 11px);
        line-height: 1.35;
        overflow-wrap: anywhere;
    }

    .item-inspector [data-callout-controls] label {
        box-sizing: border-box;
        display: grid;
        min-width: 0;
        gap: var(--3pbu, 3px);
        color: var(--muted);
        font-size: var(--10pbu, 10px);
        font-weight: 700;
    }

    .item-inspector [data-callout-controls] .callout-mixed-mode {
        display: flex;
        min-width: 0;
        align-items: center;
        gap: var(--6pbu, 6px);
        color: var(--ink);
        font-size: var(--11pbu, 11px);
        font-weight: 400;
    }

    .item-inspector [data-callout-controls] .callout-mixed-mode input {
        flex: 0 0 auto;
        margin: 0;
    }

    .item-inspector [data-callout-controls] select,
    .item-inspector [data-callout-controls] input[type="number"] {
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
        min-width: 0;
        min-height: var(--30pbu, 30px);
        padding: var(--4pbu, 4px) var(--6pbu, 6px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--3pbu, 3px);
        color: var(--ink);
        background: var(--surface);
        font: inherit;
        font-size: var(--11pbu, 11px);
    }

    /* .item-inspector [data-callout-controls] select {
        width: 100%;
        max-width: 100%;
    } */

    .item-inspector [data-callout-controls] input[data-callout-threshold] {
        max-width: 100%;
        font-variant-numeric: tabular-nums;
    }

    .item-inspector [data-callout-controls] select:focus-visible,
    .item-inspector [data-callout-controls] input:focus-visible,
    .item-inspector [data-callout-controls] button:focus-visible {
        outline: var(--3pbu, 3px) solid var(--focus);
        outline-offset: var(--1pbu, 1px);
    }

    .item-inspector [data-callout-controls] button {
        box-sizing: border-box;
        min-width: 0;
        min-height: var(--28pbu, 28px);
        padding: var(--4pbu, 4px) var(--6pbu, 6px);
        border-color: var(--line);
        color: var(--ink);
        background: var(--surface);
        font-size: var(--11pbu, 11px);
        line-height: 1.25;
        white-space: normal;
        overflow-wrap: anywhere;
    }

    .item-inspector [data-callout-controls] button:hover:not(:disabled) {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--hover);
    }

    .item-inspector [data-callout-action-anchor] {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--surface-alt);
    }

    .item-inspector [data-callout-action-anchor][aria-pressed="true"] {
        color: var(--surface);
        background: var(--accent);
    }

    .item-inspector [data-callout-action-anchor][aria-pressed="true"]:hover:not(:disabled) {
        border-color: var(--accent);
        color: var(--surface);
        background: var(--accent);
    }

    .item-inspector [data-callout-controls] button:disabled {
        cursor: default;
        opacity: 0.45;
    }

    @media (max-width: 390px) {
        .item-inspector [data-callout-controls] {
            gap: var(--5pbu, 5px);
        }
    }


    @container groups-panel (max-width: 400px) {
        
        /* #groups-panel .group-details-interior {
            grid-template-columns: minmax(0, 1fr);
        } */

        .group-item-categories {
            /* padding-top: var(--6pbu, 6px);
            border-top: var(--1pbu, 1px) solid var(--line); */
        }

        .item-inspector [data-group-list] [data-group-details-row] .placement-row {
            grid-template-columns: auto minmax(0, 1fr);
        }
    }

    .item-inspector [data-apply-contours] {
        width: var(--32pbu, 32px);
    }

    .item-inspector table {
        width: 100%;
        min-width: 0;
        margin-top: var(--8pbu, 8px);
        table-layout: fixed;
        font-size: var(--11pbu, 11px);
    }

    .item-inspector table th,
    .item-inspector table td {
        box-sizing: border-box;
        min-width: 0;
        padding: var(--5pbu, 5px) var(--4pbu, 4px);
        line-height: 1.35;
        vertical-align: middle;
        overflow-wrap: anywhere;
    }

    .item-inspector table th:first-child,
    .item-inspector table td:first-child {
        width: 22%;
    }

    .item-inspector table th:nth-child(2),
    .item-inspector table td:nth-child(2) {
        width: 30%;
    }

    .item-inspector table th:nth-child(3),
    .item-inspector table td:nth-child(3) {
        width: var(--40pbu, 40px);
        text-align: center;
    }

    .item-inspector table th:nth-child(4),
    .item-inspector table td:nth-child(4) {
        width: var(--36pbu, 36px);
        text-align: center;
    }

    .item-inspector [data-group-list] table {
        width: 100%;
        min-width: 0;
        margin-top: var(--4pbu, 4px);
        table-layout: fixed;
    }

    .item-inspector [data-group-list] table th:first-child,
    .item-inspector [data-group-list] table td:first-child {
        width: auto;
        border-top: none;
    }

    .item-inspector [data-group-list] table th:nth-child(2),
    .item-inspector [data-group-list] table td:nth-child(2) {
        width: var(--38pbu, 38px);
        text-align: center;
    }

    .item-inspector [data-group-list] table th:nth-child(3),
    .item-inspector [data-group-list] table td:nth-child(3) {
        width: var(--58pbu, 58px);
        text-align: center;
    }

    .item-inspector table input[type="color"],
    .item-inspector table .group-color-swatch,
    .item-inspector table [data-color-swatch] {
        box-sizing: border-box;
        display: inline-block;
        flex: 0 0 var(--24pbu, 24px);
        width: var(--24pbu, 24px);
        min-width: var(--24pbu, 24px);
        height: var(--22pbu, 22px);
        padding: var(--2pbu, 2px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--3pbu, 3px);
        vertical-align: middle;
    }

    .item-inspector table button {
        box-sizing: border-box;
        display: inline-grid;
        width: var(--26pbu, 26px);
        min-width: var(--26pbu, 26px);
        min-height: var(--26pbu, 26px);
        place-items: center;
        padding: var(--3pbu, 3px);
        border: var(--1pbu, 1px) solid var(--line);
        background: var(--panel);
        line-height: 1;
    }

    .item-inspector table button[data-group-action="visibility"][aria-pressed="true"] {
        border: none;
        color: var(--surface);
    }

    .item-inspector table button[data-group-action="visibility"][aria-pressed="false"] {
        border-color: var(--line);
        color: var(--muted);
        background: var(--panel);
    }

    .item-inspector .group-list table tbody tr[data-group-selected="true"] > * {
        background: var(--surface-alt);
    }

    .item-inspector .group-list table tbody tr[data-group-selected="true"] > :first-child {
        box-shadow: inset var(--3pbu, 3px) 0 0 var(--accent);
        color: var(--accent);
    }

    .item-inspector [data-group-list] .group-expand {
        box-sizing: border-box;
        display: inline-grid;
        width: var(--26pbu, 26px);
        min-width: var(--26pbu, 26px);
        min-height: var(--26pbu, 26px);
        place-items: center;
        padding: 0;
        vertical-align: middle;
    }

    .item-inspector [data-group-list] [data-group-select] {
        box-sizing: border-box;
        width: var(--64pbu, 64px);
        min-width: 0;
        max-width: var(--64pbu, 64px);
        min-height: var(--26pbu, 26px);
        padding: var(--3pbu, 3px) var(--4pbu, 4px);
        text-align: left;
        vertical-align: middle;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .item-inspector [data-group-list] [data-group-select][aria-pressed="true"] {
        color: var(--accent);
    }

    .item-inspector [data-group-list] [data-group-row][data-group-selected="true"] [data-group-select]:hover:not(:disabled) {
        background: var(--surface-alt);
    }

    .item-inspector [data-group-list] [data-group-details-row] > td {
        padding: var(--6pbu, 6px);
        background: var(--panel);
    }

    .group-center-list {
        display: flex;
        min-width: 0;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--4pbu, 4px);
    }

    .group-center-row {
        box-sizing: border-box;
        display: flex;
        min-width: 0;
        max-width: 100%;
        flex: 1 1 var(--104pbu, 104px);
        align-items: center;
        justify-content: space-between;
        gap: var(--4pbu, 4px);
        padding: var(--3pbu, 3px) var(--4pbu, 4px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--3pbu, 3px);
        background: var(--surface);
        font-size: var(--10pbu, 10px);
        line-height: 1.3;
    }

    .group-center-row > span {
        min-width: 0;
        overflow-wrap: anywhere;
    }

    .item-inspector [data-group-list] .group-center-row [data-group-center-action="remove"] {
        box-sizing: border-box;
        display: inline-grid;
        width: var(--26pbu, 26px);
        min-width: var(--26pbu, 26px);
        min-height: var(--26pbu, 26px);
        flex: 0 0 var(--26pbu, 26px);
        place-items: center;
        padding: var(--3pbu, 3px);
        border-color: var(--line);
        color: var(--signal);
        background: var(--surface);
        font-size: var(--11pbu, 11px);
        line-height: 1;
    }

    .item-inspector [data-group-list] .group-center-list > [data-group-center-action="add"] {
        min-width: var(--28pbu, 28px);
        min-height: var(--28pbu, 28px);
        padding: var(--3pbu, 3px) var(--7pbu, 7px);
        border-color: var(--accent);
        color: var(--accent);
        background: var(--surface-alt);
        font-size: var(--11pbu, 11px);
    }

    .item-inspector [data-group-list] [data-group-center-action="remove"]:hover:not(:disabled) {
        border-color: var(--signal);
        color: var(--signal);
        background: var(--hover);
    }

    .item-inspector [data-group-list] [data-group-center-action="add"]:hover:not(:disabled) {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--hover);
    }

    .item-inspector [data-group-list] [data-group-center-action]:disabled {
        cursor: default;
        opacity: 0.45;
    }

    .group-center-empty {
        min-width: 0;
        flex: 1 1 100%;
        margin: 0;
        color: var(--muted);
        font-size: var(--10pbu, 10px);
        line-height: 1.35;
        overflow-wrap: anywhere;
    }

    .group-center-empty[hidden] {
        display: none;
    }

    .item-inspector [data-group-list] [data-group-details-row] .placement-list {
        display: grid;
        min-width: 0;
        flex: 1 1 100%;
        gap: 0;
        margin: var(--3pbu, 3px) 0 0;
        padding: 0;
        list-style: none;
    }

    .item-inspector [data-group-list] [data-group-details-row] .placement-row {
        box-sizing: border-box;
        display: grid;
        min-width: 0px;
        grid-template-columns: auto minmax(0px, 1fr);
        align-items: center;
        gap: var(--8pbu, 6px);
        padding: var(--2pbu, 2px) 0 var(--2pbu, 2px) var(--7pbu, 7px);
        /* border-top: 0px;
        border-bottom: var(--1pbu, 1px) solid var(--line); */
        color: var(--ink);
        font-size: var(--14pbu, 14px);
        cursor: pointer;
    }

    .item-inspector [data-group-list] [data-group-details-row] .callout-placement-list .placement-row {
        padding-left: var(--6pbu, 6px);
        font-size: var(--12pbu, 12px);
        white-space: nowrap;
        margin-left: var(--_6pbu, -6px);
    }    


    .item-inspector [data-group-list] [data-group-details-row] .placement-row[aria-disabled="true"] {
        cursor: default;
        opacity: 0.55;
    }

    .item-inspector [data-group-list] [data-group-details-row] .placement-row[data-selected] {
        background: var(--surface-alt);
        box-shadow: inset var(--2pbu, 2px) 0 0 var(--accent);
    }

    .item-inspector [data-group-list] [data-group-details-row] .placement-row:focus-visible {
        outline: var(--2pbu, 2px) solid var(--focus);
        outline-offset: var(--1pbu, 1px);
    }

    .item-inspector [data-group-list] [data-group-details-row] .placement-row-icon {
        color: var(--accent);
        font-size: var(--15pbu, 22px);
        line-height: 1;
    }

    .item-inspector [data-group-list] [data-group-details-row] .placement-row-coordinates {
        min-width: 0;
        color: var(--ink);
        font-variant-numeric: tabular-nums;
    }



    .item-inspector [data-group-list] [data-group-details-row] .placement-actions {
        display: flex;
        min-width: 0px;
        justify-content: space-between;
        gap: var(--4pbu, 4px);
        margin-top: var(--4pbu, 4px);
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        padding: 0 var(--2pbu, 2px);
    }


    .item-inspector [data-group-list] [data-group-details-row] [data-placement-action="add"] {
        box-sizing: border-box;
        min-width: var(--26pbu, 26px);
        min-height: var(--26pbu, 26px);        
        padding: var(--2pbu, 2px) var(--7pbu, 7px);
        border: var(--1pbu, 1px) solid var(--accent);
        color: var(--accent);
        background: var(--surface-alt);
        font-size: var(--11pbu, 11px);
        line-height: 1.2;
    }

    .item-inspector [data-group-list] [data-group-details-row] [data-placement-action="add"]:hover:not(:disabled) {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--hover);
    }

    .item-inspector [data-group-list] [data-group-details-row] [data-placement-action]:disabled {
        cursor: default;
        opacity: 0.45;
    }

    .callout-create-action {
        width: var(--26pbu, 26px);
        min-width: auto;
        min-height: auto;
        height: var(--26pbu, 26px);
        max-width: auto;
        max-height: auto;
    }

    .group-navigator .details-content {
        box-sizing: border-box;
        display: grid;
        width: 100%;
        min-width: 0;
        max-width: 100%;
        grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
        align-items: start;
        gap: var(--8pbu, 8px);
        margin-top: var(--4pbu, 4px);
        padding: var(--7pbu, 7px);
        border-top: var(--1pbu, 1px) solid var(--line);
        background: var(--panel);
    }

    .group-navigator .details-content > * {
        box-sizing: border-box;
        min-width: 0;
        max-width: 100%;
        overflow-wrap: anywhere;
    }

    .group-navigator .details-content :is(h4, h5, h6) {
        min-width: 0;
        margin: 0 0 var(--4pbu, 4px);
        color: var(--accent);
        font-size: var(--10pbu, 10px);
        font-weight: 700;
        line-height: 1.3;
        overflow-wrap: anywhere;
    }

    .group-navigator .details-content > :last-child > :is(section, article, div) + :is(section, article, div) {
        margin-block-start: var(--6pbu, 6px);
        padding-block-start: var(--6pbu, 6px);
        border-block-start: var(--1pbu, 1px) solid var(--line);
    }

    .group-navigator .details-content :is(ul, ol) {
        display: grid;
        min-width: 0;
        max-width: 100%;
        gap: var(--3pbu, 3px);
        margin: 0;
        padding: 0;
        font-size: var(--10pbu, 10px);
        line-height: 1.35;
        list-style: none;
    }

    .group-navigator .details-content :is(li, [role="listitem"]) {
        box-sizing: border-box;
        display: grid;
        min-width: 0;
        max-width: 100%;
        grid-template-columns: var(--22pbu, 22px) minmax(0, 1fr);
        align-items: start;
        gap: var(--5pbu, 5px);
        padding: var(--3pbu, 3px) var(--4pbu, 4px);
        border-bottom: var(--1pbu, 1px) solid var(--line);
        color: var(--ink);
        background: var(--surface);
        overflow-wrap: anywhere;
    }

    .group-navigator .details-content :is(li, [role="listitem"]) > :first-child {
        box-sizing: border-box;
        display: inline-grid;
        width: var(--20pbu, 20px);
        min-width: var(--20pbu, 20px);
        height: var(--20pbu, 20px);
        place-items: center;
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--3pbu, 3px);
        color: var(--accent);
        background: var(--surface-alt);
        font-size: var(--13pbu, 13px);
        line-height: 1;
    }

    .group-navigator .details-content :is(li, [role="listitem"]) > :not(:first-child) {
        grid-column: 2;
        min-width: 0;
        overflow-wrap: anywhere;
    }

    .group-navigator .details-content p {
        min-width: 0;
        margin: 0;
        color: var(--muted);
        font-size: var(--10pbu, 10px);
        line-height: 1.35;
        overflow-wrap: anywhere;
    }

    .group-navigator .details-content [hidden] {
        display: none;
    }

    .group-details-interior {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--8pbu, 8px);
    }

    .group-slot-list,
    .group-item-categories {
        box-sizing: border-box;
        min-width: 0;
        max-width: 100%;
        overflow-wrap: anywhere;
    }

    .group-item-categories {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: var(--6pbu, 6px);
        align-content: start;
    }

    .group-item-categories > [data-group-items-select],
    .group-item-category > h4 button {
        box-sizing: border-box;
        display: inline-flex;
        width: var(--22pbu, 22px);
        min-width: var(--22pbu, 22px);
        max-width: var(--22pbu, 22px);
        height: var(--22pbu, 22px);
        min-height: var(--22pbu, 22px);
        max-height: var(--22pbu, 22px);
        flex: 0 1 auto;
        align-items: center;
        justify-content: center;
        padding: var(--3pbu, 3px) var(--6pbu, 6px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--3pbu, 3px);
        color: var(--accent);
        background: var(--surface);
        font-family: inherit;
        font-size: var(--10pbu, 10px);
        line-height: 1.2;
        text-align: center;
        white-space: normal;
        overflow-wrap: anywhere;
        cursor: pointer;
    }

    .group-item-categories > [data-group-items-select] {
        grid-column: 1 / -1;
        justify-self: start;
    }

    .group-item-categories > [data-group-items-select]:hover:not(:disabled):not([aria-disabled="true"]),
    .group-item-category > h4 button:hover:not(:disabled):not([aria-disabled="true"]) {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--hover);
    }

    .group-item-categories > [data-group-items-select]:focus-visible,
    .group-item-category > h4 button:focus-visible {
        outline: var(--2pbu, 2px) solid var(--focus);
        outline-offset: var(--1pbu, 1px);
    }

    .group-item-categories > [data-group-items-select]:disabled,
    .group-item-categories > [data-group-items-select][aria-disabled="true"],
    .group-item-category > h4 button:disabled,
    .group-item-category > h4 button[aria-disabled="true"] {
        border-color: var(--line);
        color: var(--muted);
        background: var(--disabled);
        cursor: not-allowed;
        opacity: 0.65;
    }

    .group-item-category {
        box-sizing: border-box;
        min-width: 0;
        max-width: 100%;
        overflow-wrap: anywhere;
    }

    .group-item-category + .group-item-category {
        padding-top: var(--6pbu, 6px);
        /* border-top: var(--1pbu, 1px) solid var(--line); */
    }

    .group-item-category > h4 {
        display: flex;
        min-width: 0;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: var(--4pbu, 4px);
        margin: 0 0 var(--4pbu, 4px);
        color: var(--accent);
        font-size: var(--10pbu, 10px);
        font-weight: 700;
        line-height: 1.3;
        overflow-wrap: anywhere;
    }

    .group-item-list {
        display: grid;
        min-width: 0;
        max-width: 100%;
        gap: var(--3pbu, 3px);
        margin: 0;
        padding: 0;
        font-size: var(--10pbu, 10px);
        line-height: 1.35;
        list-style: none;
    }

    .group-item-list > li:not(.group-item-row) {
        min-width: 0;
        max-width: 100%;
        color: var(--muted);
        overflow-wrap: anywhere;
    }

    .group-item-list > li[hidden] {
        display: none;
    }

    .group-item-row {
        box-sizing: border-box;
        display: grid;
        min-width: 0;
        max-width: 100%;
        grid-template-columns: var(--22pbu, 22px) minmax(0, 1fr);
        align-items: center;
        gap: var(--5pbu, 5px);
        padding: var(--3pbu, 3px) var(--4pbu, 4px);
        /* border-bottom: var(--1pbu, 1px) solid var(--line); */
        color: var(--ink);
        /* background: var(--surface); */
        cursor: pointer;
        overflow-wrap: anywhere;
    }

    .group-item-row:hover:not(:disabled):not([disabled]):not([aria-disabled="true"]):not([data-selectable="false"]) {
        border-bottom-color: var(--accent);
        background: var(--hover);
    }

    .group-item-row[aria-pressed="true"],
    .group-item-row[data-selected] {
        border-bottom-color: var(--accent);
        background: var(--surface-alt);
        box-shadow: inset var(--2pbu, 2px) 0 0 var(--accent);
    }

    .group-item-row:focus-visible {
        outline: var(--2pbu, 2px) solid var(--focus);
        outline-offset: var(--1pbu, 1px);
    }

    .group-item-row:is(:disabled, [disabled], [aria-disabled="true"], [data-selectable="false"]) {
        border-bottom-color: var(--line);
        color: var(--muted);
        background: var(--surface);
        box-shadow: none;
        cursor: default;
        opacity: 0.45;
    }

    .group-item-row > :first-child {
        box-sizing: border-box;
        display: inline-grid;
        width: var(--20pbu, 20px);
        min-width: var(--20pbu, 20px);
        height: var(--20pbu, 20px);
        place-items: center;
        /* border: var(--1pbu, 1px) solid var(--line); */
        /* border-radius: var(--3pbu, 3px); */
        color: var(--accent);
        /* background: var(--surface-alt); */
        font-size: var(--13pbu, 13px);
        line-height: 1;
    }

    .group-item-row > :last-child {
        grid-column: 2;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .item-inspector .mock-data-tools {
        width: 100%;
        max-width: 100%;
        flex-basis: 100%;
    }

    .inspector-header {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto auto auto auto;
        align-items: start;
        gap: var(--5pbu, 5px);
    }

    .inspector-header .eyebrow {
        margin-bottom: var(--3pbu, 3px);
    }

    .inspector-header > div {
        min-width: 0;
    }

    .inspector-header h3 {
        font-size: var(--15pbu, 15px);
    }

    .selected-slot-heading {
        display: inline-flex;
        align-items: center;
        gap: var(--6pbu, 6px);
    }

    .default-properties-toggle {
        box-sizing: border-box;
        flex-shrink: 0;
        /* border-color: var(--accent);         */
    }

    .default-properties-toggle:hover {
        background: var(--surface-alt);
    }

    .default-properties-toggle[aria-pressed="true"] {
        color: var(--surface);
        background: var(--surface-alt);
    }

    .default-properties-toggle[aria-pressed="true"]:hover {
        background: var(--surface-alt);
    }

    .selection-count {
        display: inline-grid;
        min-width: var(--26pbu, 26px);
        height: var(--26pbu, 26px);
        place-items: center;
        border-radius: 50%;
        color: var(--surface);
        background: var(--accent);
        font-size: var(--11pbu, 11px);
        font-variant-numeric: tabular-nums;
    }

    .select-all {
        min-height: var(--26pbu, 26px);
        padding: var(--3pbu, 3px) var(--7pbu, 7px);
        border: var(--1pbu, 1px) solid var(--accent);
        color: var(--accent);
        background: var(--surface-alt);
        font-size: var(--10pbu, 10px);
        white-space: nowrap;
    }

    .select-all:hover {
        background: var(--hover);
    }

    .select-all:disabled {
        cursor: default;
        opacity: 0.45;
    }

    .clear-selection {
        min-height: var(--26pbu, 26px);
        padding: var(--3pbu, 3px) var(--7pbu, 7px);
        border: var(--1pbu, 1px) solid var(--line);
        background: var(--panel);
        font-size: var(--10pbu, 10px);
    }

    .clear-selection:disabled,
    .z-order-controls button:disabled,
    .delete-selected:disabled {
        cursor: default;
        opacity: 0.45;
    }

    .delete-selected {
        min-height: var(--26pbu, 26px);
        padding: var(--3pbu, 3px) var(--7pbu, 7px);
        border: var(--1pbu, 1px) solid var(--signal);
        color: var(--signal);
        background: var(--panel);
        font-size: var(--10pbu, 10px);
        white-space: nowrap;
    }

    .delete-selected:hover {
        background: var(--hover);
    }

    .selection-summary {
        min-height: var(--30pbu, 30px);
        margin: var(--8pbu, 8px) 0;
        color: var(--muted);
        font-size: var(--11pbu, 11px);
        line-height: 1.4;
        overflow-wrap: anywhere;
    }

    /* .inspector-group {
        margin-top: var(--11pbu, 11px);
        padding-top: var(--9pbu, 9px);
        border-top: var(--1pbu, 1px) solid var(--line);
    } */

    .inspector-group h4 {
        margin: 0 0 var(--7pbu, 7px);
        color: var(--ink);
        font-size: var(--11pbu, 11px);
        font-weight: 700;
    }


    .placement-toggle input[type="checkbox"]:focus-visible,
    .hex-overlay-toggle input[type="checkbox"]:focus-visible,
    .placement-toggle[type="checkbox"]:focus-visible,
    .hex-overlay-toggle[type="checkbox"]:focus-visible {
        outline: var(--3pbu, 3px) solid var(--focus);
        outline-offset: var(--1pbu, 1px);
    }

    .placement-toggle:not(input):hover,
    .hex-overlay-toggle:not(input):hover {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--hover);
    }

    .placement-toggle:not(input),
    .hex-overlay-toggle:not(input) {
        box-sizing: border-box;
        display: inline-flex;
        min-width: 0;
        max-width: 100%;
        min-height: var(--28pbu, 28px);
        align-items: center;
        gap: var(--6pbu, 6px);
        padding: var(--4pbu, 4px) var(--7pbu, 7px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--3pbu, 3px);
        color: var(--muted);
        background: var(--panel);
        font-size: var(--11pbu, 11px);
        line-height: 1.25;
        overflow-wrap: anywhere;
    }

    .placement-toggle input[type="checkbox"],
    .hex-overlay-toggle input[type="checkbox"] {
        width: var(--16pbu, 16px);
        height: var(--16pbu, 16px);
        flex: 0 0 auto;
        margin: 0;
        accent-color: var(--accent);
    }

    .placement-toggle[type="checkbox"],
    .hex-overlay-toggle[type="checkbox"] {
        width: var(--16pbu, 16px);
        height: var(--16pbu, 16px);
        accent-color: var(--accent);
    }

    .placement-toggle[aria-pressed="true"],
    .placement-toggle[aria-checked="true"],
    .hex-overlay-toggle[aria-pressed="true"],
    .hex-overlay-toggle[aria-checked="true"] {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--surface-alt);
    }

    .placement-toggle:disabled,
    .hex-overlay-toggle:disabled {
        cursor: default;
        opacity: 0.45;
    }

    .label-control-row {
        display: grid;
        grid-column: 1 / -1;
        grid-template-columns: minmax(0, 1fr) max-content max-content;
        align-items: end;
        gap: var(--8pbu, 8px);
    }

    .label-type-control,
    .layout-mode-control {
        width: max-content;
        max-width: 100%;
        align-items: center;
    }

    .label-type-control button,
    .layout-mode-control button {
        min-height: var(--25pbu, 25px);
        padding: var(--3pbu, 3px) var(--5pbu, 5px);
        font-size: var(--10pbu, 10px);
    }

    .unit-toggle {
        width: max-content;
        max-width: 100%;
        align-items: center;
    }

    .unit-toggle button {
        min-height: var(--25pbu, 25px);
        padding: var(--3pbu, 3px) var(--6pbu, 6px);
        font-size: var(--11pbu, 11px);
    }

    .unit-mixed {
        display: grid;
        min-width: 2ch;
        place-items: center;
        color: var(--signal);
        font-size: var(--8pbu, 8px);
    }

    .unit-mixed[hidden] {
        display: none;
    }

    .label-position-pad {
        box-sizing: border-box;
        display: grid;
        width: max-content;
        grid-template-columns: repeat(3, var(--28pbu, 28px));
        grid-template-rows: repeat(3, var(--28pbu, 28px));
        gap: var(--2pbu, 2px);
        padding: var(--3pbu, 3px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--4pbu, 4px);
        background: var(--surface-alt);
    }

    .label-position-pad button {
        box-sizing: border-box;
        display: grid;
        min-width: 0;
        min-height: 0;
        place-items: center;
        padding: 0;
        border: var(--1pbu, 1px) solid var(--line);
        background: var(--surface);
        font-size: var(--17pbu, 17px);
        line-height: 1;
    }

    .label-position-pad button[aria-pressed="true"] {
        color: var(--surface);
        background: var(--accent);
    }

    .label-position-pad button:disabled {
        cursor: default;
        opacity: 0.45;
    }

    .label-position-pad button[data-label-position="top-left"] {
        grid-area: 1 / 1;
    }

    .label-position-pad button[data-label-position="top"] {
        grid-area: 1 / 2;
    }

    .label-position-pad button[data-label-position="top-right"] {
        grid-area: 1 / 3;
    }

    .label-position-pad button[data-label-position="left"] {
        grid-area: 2 / 1;
    }

    .label-position-center {
        display: grid;
        place-items: center;
        grid-area: 2 / 2;
        color: var(--muted);
        font-size: var(--9pbu, 9px);
        font-weight: 700;
    }

    .label-position-pad button[data-label-position="right"] {
        grid-area: 2 / 3;
    }

    .label-position-pad button[data-label-position="bottom-left"] {
        grid-area: 3 / 1;
    }

    .label-position-pad button[data-label-position="bottom"] {
        grid-area: 3 / 2;
    }

    .label-position-pad button[data-label-position="bottom-right"] {
        grid-area: 3 / 3;
    }

    .label-position-pad[data-mixed] .label-position-center {
        color: var(--signal);
    }

    .property-field {
        display: flex;
        min-width: 0;
        flex-direction: column;
        gap: var(--4pbu, 4px);
        color: var(--muted);
        font-size: var(--12pbu, 12px);

        height: var(--54pbu, 54px);
        min-height: var(--54pbu, 54px);
        max-height: var(--54pbu, 54px);        
    }

    .property-field > span {
        padding: 0 var(--4pbu, 4px);
        white-space: nowrap;
    }

    .fill-enabled-control {
        box-sizing: border-box;
        display: flex;
        min-width: 0;
        min-height: var(--29pbu, 29px);
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: var(--8pbu, 8px);
    }

    .fill-enabled-control input[type="checkbox"] {
        box-sizing: border-box;
        flex: 0 0 auto;
        width: var(--16pbu, 16px);
        height: var(--16pbu, 16px);
        margin: 0;
        accent-color: var(--accent);
    }

    .property-input {
        box-sizing: border-box;
        width: auto;
        min-width: var(--24pbu, 24px);
        /* height: 29px; */
        padding: var(--4pbu, 4px) var(--6pbu, 6px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--3pbu, 3px);
        color: var(--ink);
        background: var(--surface);
        font: inherit;
        font-size: var(--12pbu, 12px);
        font-variant-numeric: tabular-nums;
    }

    .workbench input.input-48 {
        width: var(--48pbu, 48px);
    }

    .property-input::placeholder {
        color: var(--muted);
        opacity: 1;
    }

    .property-input:focus-visible,
    .clear-selection:focus-visible,
    .z-order-controls button:focus-visible {
        outline: var(--2pbu, 2px) solid var(--focus);
        outline-offset: var(--1pbu, 1px);
    }

    .property-input:disabled {
        background: var(--disabled);
        cursor: default;
    }

    .shape-control {
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        min-height: var(--29pbu, 29px);
        padding: var(--4pbu, 4px) var(--6pbu, 6px);
        border: var(--1pbu, 1px) solid var(--line);
        border-radius: var(--3pbu, 3px);
        color: var(--ink);
        background: var(--surface);
        font: inherit;
        font-size: var(--12pbu, 12px);
    }

    .shape-control:disabled {
        background: var(--disabled);
        cursor: default;
    }

    .color-input-wrap {
        position: relative;
        display: block;
        width: 100%;
    }

    .property-input.color-input {
        width: 100%;
        min-width: 0;
        height: var(--30pbu, 30px);
        padding: var(--3pbu, 3px);
        cursor: pointer;
    }

    .property-input.color-input:disabled {
        cursor: default;
    }

    .mixed-dots {
        position: absolute;
        inset: var(--1pbu, 1px);
        display: grid;
        place-items: center;
        border-radius: var(--3pbu, 3px);
        color: var(--muted);
        background: color-mix(in srgb, var(--surface) 78%, transparent);
        font-size: var(--13pbu, 13px);
        font-weight: 700;
        pointer-events: none;
    }

    .mixed-dots[hidden] {
        display: none;
    }

    .z-order-heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--7pbu, 7px);
    }

    .z-order-heading h4 {
        margin: 0;
    }

    .z-order-heading strong {
        min-width: 2ch;
        color: var(--accent);
        font-size: var(--12pbu, 12px);
        text-align: right;
        font-variant-numeric: tabular-nums;
    }

    .z-order-controls {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--5pbu, 5px);
    }

    .z-order-controls button {
        min-height: var(--29pbu, 29px);
        padding: var(--4pbu, 4px) var(--6pbu, 6px);
        border: var(--1pbu, 1px) solid var(--line);
        background: var(--panel);
        font-size: var(--10pbu, 10px);
    }

    .positions-panel {
        min-width: 0;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        font-size: var(--12pbu, 12px);
        font-variant-numeric: tabular-nums;
    }

    .group-row-controls {
        display: flex;
        min-width: 0;
        align-items: center;
        gap: var(--3pbu, 3px);
    }

    .group-expand {
        display: flex;
        flex: 1 1 auto;
        min-width: 0;
        align-items: center;
        gap: var(--4pbu, 4px);
        padding: var(--4pbu, 4px) var(--3pbu, 3px);
        text-align: left;
    }

    .group-expand > span:last-child {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .group-navigator-select[aria-pressed="true"] {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--surface-alt);
    }

    th,
    td {
        padding: var(--6pbu, 6px) var(--5pbu, 5px);
        border-bottom: var(--1pbu, 1px) solid var(--line);
        text-align: left;
        overflow-wrap: anywhere;
    }

    thead th {
        color: var(--muted);
        font-size: var(--10pbu, 10px);
        font-weight: 700;
    }

    tbody th {
        color: var(--ink);
        font-weight: 600;
    }

    th:first-child {
        width: 34%;
    }

    th:nth-child(2),
    td:nth-child(2) {
        width: 30%;
    }

    @container scene-editor (max-width: 720px) {
        .workbench {
            grid-template-columns: minmax(0, 1fr);
            grid-template-rows: auto auto auto auto auto auto;
        }

        .scene-column {
            display: contents;
        }

        #dashboard-shell,
        .editor-header,
        .stage-viewport,
        .scene-status-row,
        #properties-panel,
        #groups-panel {
            grid-column: 1;
        }

        #dashboard-shell {
            grid-row: 1;
        }

        .editor-header {
            grid-row: 2;
        }

        .stage-viewport {
            grid-row: 3;
            width: 100%;
        }

        .scene-status-row {
            grid-row: 4;
        }

        #properties-panel {
            grid-row: 5;
        }

        #groups-panel {
            grid-row: 6;
        }

        .item-inspector {
            height: auto;
            min-height: 0;
            padding: var(--12pbu, 12px) 0 0;
            border-top: var(--1pbu, 1px) solid var(--line);
            border-left: 0;
        }
    }

    @media (max-width: 720px) {
        .workbench {
            grid-template-columns: minmax(0, 1fr);
            grid-template-rows: auto auto auto auto auto auto;
        }

        .scene-column {
            display: contents;
        }

        #dashboard-shell,
        .editor-header,
        .stage-viewport,
        .scene-status-row,
        #properties-panel,
        #groups-panel {
            grid-column: 1;
        }

        #dashboard-shell {
            grid-row: 1;
        }

        .editor-header {
            grid-row: 2;
        }

        .stage-viewport {
            grid-row: 3;
            width: 100%;
        }

        .scene-status-row {
            grid-row: 4;
        }

        #properties-panel {
            grid-row: 5;
        }

        #groups-panel {
            grid-row: 6;
        }

        .item-inspector {
            height: auto;
            min-height: 0;
            padding: var(--12pbu, 12px) 0 0;
            border-top: var(--1pbu, 1px) solid var(--line);
            border-left: 0;
        }
    }

    @container ribbon-controls (max-width: 800px) {
        .control-ribbon {
            /* flex-wrap: wrap; */
        }
    }

    @container scene-editor (max-width: 600px) {
        .editor-header {
            gap: var(--6pbu, 6px);
            padding: var(--6pbu, 6px);
        }

        .dashboard-trigger {
            width: var(--44pbu, 44px);
            min-width: var(--44pbu, 44px);
            height: var(--44pbu, 44px);
            min-height: var(--44pbu, 44px);
            flex-basis: var(--44pbu, 44px);
        }

        .dashboard-drawer {
            --drawer-width: min(var(--320pbu, 320px), calc(100cqw - var(--12pbu, 12px)));
        }
    }

    @media (max-width: 600px) {
        .section-heading {
            align-items: flex-start;
            flex-direction: column;
        }

        .telemetry {
            grid-template-columns: minmax(0, 1fr);
        }

        .c-row > .control-group {
            flex: 1 1 calc(50% - var(--6pbu, 6px));
        }

        .c-row > .mock-data-tools {
            flex-basis: 100%;
        }

        .appearance-controls {
            flex: 1 1 100%;
        }

        .appearance-controls {
            min-width: 0;
        }

        .appearance-controls .control-group {
            flex: 1 1 calc(50% - var(--6pbu, 6px));
        }

        .svg-controls {
            flex-basis: 100%;
        }

        .placement-toggle:not(input),
        .hex-overlay-toggle:not(input) {
            min-height: var(--30pbu, 30px);
        }

        .event-panel {
            padding-right: 0;
            border-right: 0;
            border-bottom: var(--1pbu, 1px) solid var(--line);
            padding-bottom: var(--14pbu, 14px);
        }

        .stage-viewport {
            height: var(--430pbu, 430px);
            min-height: var(--320pbu, 320px);
        }

        .stage-content {
            padding: var(--24pbu, 24px);
        }
    }

    @media print {
        .kit-version {
            display: none !important;
        }

        :host(.ff-tri-layer-scene-print) {
            position: fixed !important;
            inset: 0 !important;
            z-index: 2147483647;
            display: block !important;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            margin: 0;
            overflow: visible;
            background: #fff;
        }

        :host(.ff-tri-layer-scene-print) .workbench {
            box-sizing: border-box;
            width: 100%;
            min-height: 0;
            margin: 0;
            padding: 0;
            overflow: visible;
            background: #fff;
        }

        :host(.ff-tri-layer-scene-print) .editor-header,
        :host(.ff-tri-layer-scene-print) .scene-startup-overlay,
        :host(.ff-tri-layer-scene-print) .dashboard-drawer,
        :host(.ff-tri-layer-scene-print) #dashboard-shell,
        :host(.ff-tri-layer-scene-print) .scene-status-row,
        :host(.ff-tri-layer-scene-print) .item-inspector,
        :host(.ff-tri-layer-scene-print) .telemetry {
            display: none !important;
        }

        :host(.ff-tri-layer-scene-print) .surface-section {
            margin: 0;
            padding: 0;
        }

        :host(.ff-tri-layer-scene-print) .workbench {
            display: block;
            width: 100%;
            margin: 0;
        }

        :host(.ff-tri-layer-scene-print) .scene-column {
            display: block;
            width: 100%;
            min-width: 0;
        }

        :host(.ff-tri-layer-scene-print) .stage-viewport {
            box-sizing: border-box;
            width: 100%;
            height: auto;
            min-height: 0;
            max-height: none;
            overflow: visible !important;
            border: 0;
            background: #fff;
        }

        :host(.ff-tri-layer-scene-print) .stage-content {
            box-sizing: border-box;
            min-height: 0;
            margin: 0;
            padding: 0;
            overflow: visible;
        }

        :host(.ff-tri-layer-scene-print) .create-item-ghost {
            display: none !important;
        }

        :host(.ff-tri-layer-scene-print) .layer-stage {
            transform-origin: top left;
        }
    }



    .segmented .square-btn {
        width: var(--28pbu, 28px);
        height: var(--28pbu, 28px);
    }

    .data-details-btn {
        position: absolute;
        bottom: var(--16pbu, 16px);
        line-height: 0;
        padding-bottom: var(--11pbu, 11px);        
    }    

    .fs16 { font-size: var(--16pbu, 16px); }    
    .fs20 { font-size: var(--20pbu, 20px); }    
    .fs22 { font-size: var(--22pbu, 22px); }
    
    .pb2 { padding-bottom: var(--2pbu, 2px); }
    .pb4 { padding-bottom: var(--4pbu, 4px); }
    .pb6 { padding-bottom: var(--6pbu, 6px); }
    .pb7 { padding-bottom: var(--7pbu, 7px); }

    .hide-show-btn  {
        align-self: center;
        background: var(--panel);
         color: var(--muted);
    }

    .hide-show-btn[aria-pressed="false"] {
        border-color: var(--line);
        color: var(--ink);
        background: var(--panel);        
    }

    .hide-show-btn > span {
        position: relative;       
    }

    .hide-show-btn[aria-pressed="false"] > span::after {
        display: inline-block;
        content: "✕";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }

    .lbl18 { 
        font-size: var(--18pbu, 18px);
        font-weight: normal;
        display: inline-block;
        height: var(--14pbu, 14px);
        line-height: 0.6;
    }

    .alsece {
        align-self: center;
    }

    .c-row {
        position: fixed;
        background: var(--panel);
        z-index: 1000;
    }

    .group-callout-action > span {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
    }

    .gc-s2 {
        grid-column: span 2;
    }
    
`,vy="0.0.8",xy={version:vy},Ho=r=>{const e=r.shadowRoot?.querySelector("[data-zoom-value]");e&&(e.textContent=`${Math.round(r.zoomScale*100)}%`)},gc=r=>r.startsWith("Loading scene ")?`Завантаження сцени ${r.slice(14).split(": ",1)[0]}...`:r.startsWith("Loading ")?`Завантаження SVG-файлу ${r.slice(8).split(": ",1)[0]}...`:r.startsWith("Could not read ")?r.replace(/^Could not read (.+): не вдалося прочитати файл SVG\.\s*/,"Не вдалося прочитати SVG-файл $1. "):r,eu=ie`
    <div class="workbench surface-layout" aria-busy="${r=>r.sceneOperationMessage!==null}">
        <span class="kit-version">v ${r=>xy.version}</span>
        <section id="dashboard-shell" ?inert="${r=>r.sceneOperationMessage!==null}">
            <button
                class="dashboard-trigger"
                type="button"
                aria-controls="dashboard-drawer"
                aria-expanded="false"
                aria-label="Відкрити панель редактора"
                title="Відкрити панель редактора"
                @click="${r=>r.toggleDashboard()}"
            >
                <svg
                    class="dashboard-trigger-art"
                    width="36"
                    height="20.86321754"
                    viewBox="0 0 131.40385 76.152977"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                >
                    <defs>
                        <linearGradient id="dashboard-trigger-art-gradient-stops">
                            <stop offset="0" style="stop-color:var(--accent);stop-opacity:1" />
                            <stop offset="1" style="stop-color:var(--accent);stop-opacity:0" />
                        </linearGradient>
                        <linearGradient
                            id="dashboard-trigger-art-gradient"
                            x1="156.7489"
                            y1="64.81958"
                            x2="156.7489"
                            y2="150.76228"
                            gradientUnits="userSpaceOnUse"
                            href="#dashboard-trigger-art-gradient-stops"
                        />
                    </defs>
                    <g transform="translate(-20.588408,-36.686648)">
                        <path
                            d="M 117.80737,64.951331 80.629387,86.41612 v 42.93016 l 37.177983,21.46479 36.89802,-21.30322 37.06017,21.39654
                                37.17799,-21.46479 V 86.509442 l -37.17799,-21.464789 -36.8986,21.303224 z"
                            transform="matrix(0.88598326,0,0,0.88598326,-50.84788,-20.859142)"
                            style="display:inline;opacity:1;fill:url(#dashboard-trigger-art-gradient);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3.16033;stroke-linecap:butt;stroke-dasharray:none;stroke-opacity:1;paint-order:normal"
                        />
                        <g
                            style="font-size:192px;letter-spacing:55px;white-space:pre;display:inline;fill:var(--ink);fill-opacity:1;stroke:var(--ink);stroke-width:7.55906"
                            transform="matrix(0.26458333,0,0,0.26458333,6.922164,-6.5303431)"
                        >
                            <path
                                d="m 149.90625,300.33008 q 11.01562,-9.49219 19.33594,-16.875 8.32031,-7.44141 14.35547,-13.30078
                                    6.03515,-5.91797 10.01953,-10.60547 3.98437,-4.6875 6.32812,-8.73047 2.40235,-4.10156 3.33985,-7.85156
                                    0.99609,-3.8086 0.99609,-7.85157 0,-1.99218 -0.52734,-3.86718 l 0.17578,-0.70313 q 2.46093,-0.70312
                                    4.86328,-0.70312 2.10937,0 3.86719,0.64453 1.8164,0.58594 3.10546,1.75781 1.34766,1.17188 2.10938,2.98828
                                    0.76172,1.81641 0.76172,4.16016 0,2.22656 -1.05469,4.80469 -0.99609,2.57812 -3.45703,5.91796
                                    -2.46094,3.33985 -6.50391,7.67579 -3.98437,4.27734 -10.01953,9.96093 -5.97656,5.6836 -14.12109,12.89063
                                    -8.08594,7.14844 -18.69141,16.23047 9.84375,13.94531 17.16797,24.02343 7.38281,10.07813 12.89063,17.05079
                                    5.5664,6.91406 9.55078,11.1914 3.98437,4.21875 7.03125,6.5625 3.04687,2.28516 5.44922,3.04688
                                    2.46093,0.76172 4.86328,0.76172 2.22656,0 4.74609,-0.46875 2.57813,-0.46875 5.44922,-1.46485
                                    l 1.64062,4.80469 q -3.04687,1.52344 -6.38671,2.87109 -3.28125,1.28907 -6.44532,2.22657
                                    -3.16406,0.99609 -5.91797,1.52343 -2.7539,0.58594 -4.6875,0.58594 -2.46093,0 -5.03906,-1.23047
                                    -2.57812,-1.23047 -5.80078,-4.10156 -3.22266,-2.87109 -7.26562,-7.5 -4.04297,-4.6875 -9.375,-11.54297
                                    -5.27344,-6.85547 -12.12891,-16.11328 -6.85547,-9.25781 -15.64453,-21.26953
                                    -1.23047,-1.69922 -2.51953,-3.33985 -1.23047,-1.69921 -2.51953,-3.45703 z m
                                    -15.99609,-49.62891 q 0,-2.7539 -0.41016,-4.6875 -0.35156,-1.99219 -1.40625,-3.22265
                                    -1.05469,-1.23047 -2.92969,-1.75782 -1.8164,-0.58593 -4.6875,-0.58593 -3.86718,0 -9.90234,0.8789
                                    l -0.58594,-4.86328 q 8.4961,-2.16797 14.41406,-3.22266 5.91797,-1.11328 9.90235,-1.11328
                                    3.92578,0 6.15234,1.05469 2.22656,0.99609 3.28125,3.04688 1.11328,1.99218 1.34766,4.92187
                                    0.23437,2.92969 0.23437,6.67969 0,0.99609 -0.11719,4.45312 -0.0586,3.45703 -0.23437,8.90625
                                    -0.11719,5.39063 -0.35156,12.53907 -0.23438,7.14843 -0.46875,15.58593 -0.23438,8.37891
                                    -0.52735,17.8125 -0.29297,9.375 -0.58593,19.33594 -0.29297,9.90234 -0.64454,20.15625
                                    -0.29296,10.19531 -0.58593,20.21484 l -13.88672,1.75782 -1.05469,-0.11719
                                    q 0.70313,-16.875 1.23047,-32.05078 0.58594,-15.23438 0.99609,-29.53125
                                    0.41016,-14.35547 0.58594,-28.1836 0.23438,-13.88671 0.23438,-28.00781 z"
                                style="font-size:240px;fill-opacity:1"
                            />
                            <path
                                d="m 299.94531,279.69336 q -1.64062,0 -2.90625,-0.65625 -1.26562,-0.70313 -2.15625,-1.78125
                                    -0.89062,-1.125 -1.35937,-2.53125 -0.46875,-1.45313 -0.46875,-2.95313 0,-2.10937 0.70312,-3.70312
                                    0.70313,-1.64063 1.82813,-2.71875 1.125,-1.125 2.48437,-1.64063 1.35938,-0.5625 2.67188,-0.5625
                                    1.59375,0 2.85937,0.60938 1.26563,0.5625 2.15625,1.59375 0.9375,1.03125 1.40625,2.39062
                                    0.51563,1.3125 0.51563,2.85938 0,1.64062 -0.5625,3.28125 -0.5625,1.59375 -1.59375,2.90625
                                    -0.98438,1.3125 -2.4375,2.10937 -1.40625,0.79688 -3.14063,0.79688 z m 4.07813,21.1875
                                    q -0.79688,5.34375 -1.35938,10.73437 -0.5625,5.34375 -0.9375,10.35938 -0.32812,5.01562 -0.51562,9.51562
                                    -0.14063,4.45313 -0.14063,8.0625 0,4.875 0.14063,8.39063 0.14062,3.46875 0.46875,5.85937
                                    0.32812,2.39063 0.79687,3.84375 0.51563,1.40625 1.21875,2.20313 0.75,0.75 1.6875,0.98437
                                    0.98438,0.23438 2.20313,0.23438 2.25,0 4.82812,-0.65625 2.625,-0.70313 5.29688,-1.92188
                                    l 0.89062,2.4375 q -1.6875,1.35938 -4.26562,2.76563 -2.53125,1.40625 -5.34375,2.57812
                                    -2.8125,1.17188 -5.53125,1.875 -2.67188,0.75 -4.64063,0.75 -1.3125,0 -2.39062,-0.23437
                                    -1.07813,-0.1875 -1.96875,-1.03125 -0.84375,-0.84375 -1.54688,-2.48438 -0.65625,-1.64062
                                    -1.125,-4.45312 -0.42187,-2.8125 -0.65625,-7.03125 -0.23437,-4.21875 -0.23437,-10.21875
                                    0,-3.51563 0.0469,-7.92188 0.0937,-4.45312 0.23438,-9.51562 0.14062,-5.10938 0.375,-10.73438
                                    0.23437,-5.67187 0.60937,-11.67187 0.0937,-1.3125 0.70313,-2.10938 0.60937,-0.84375 1.5,-1.26562
                                    0.89062,-0.46875 1.875,-0.60938 1.03125,-0.1875 1.875,-0.1875 3.14062,0 5.90625,1.45313 z"
                                style="font-family:Gabriola;-inkscape-font-specification:Gabriola;fill-opacity:1"
                            />
                            <path
                                d="m 378.35937,266.69727 -5.80078,-0.17579 q -0.17578,-7.08984 -0.17578,-12.59765
                                    0,-5.6836 0.52735,-9.72656 0.52734,-4.10157 2.16796,-6.73829 1.69922,-2.63671 4.86329,-3.86718
                                    3.22265,-1.23047 8.49609,-1.23047 3.33984,0 7.67578,0.17578 4.33594,0.17578 9.14063,0.35156
                                    4.80468,0.17578 9.84375,0.35156 5.09765,0.17579 9.84375,0.17579 7.96875,0 14.0625,0
                                    6.09375,-0.0586 10.83984,-0.11719 4.74609,-0.0586 8.32031,-0.17578 3.57422,-0.11719
                                    6.50391,-0.35157 2.98828,-0.23437 5.50781,-0.52734 2.57813,-0.35156 5.21484,-0.82031
                                    0.9961,2.8125 0.9961,4.6289 0,3.86719 -3.28125,5.91797 -3.22266,2.05078 -9.60938,2.05078
                                    -6.03515,0 -14.23828,-0.70312 -8.14453,-0.76172 -18.39844,-1.46484 -0.17578,8.67187
                                    -0.46875,18.51562 -0.23437,9.84375 -0.52734,20.39063 -0.29297,10.48828 -0.64453,21.5039
                                    -0.29297,10.95703 -0.64453,21.97266 -0.35156,10.95703 -0.70313,21.73828
                                    -0.29297,10.78125 -0.58593,20.85937 l -13.88672,1.75782 -1.05469,-0.11719
                                    q 0.46875,-11.19141 0.87891,-21.44531 0.41015,-10.3125 0.76171,-20.21485
                                    0.35157,-9.90234 0.64454,-19.74609 0.29296,-9.90234 0.46875,-20.33203
                                    0.17578,-10.42969 0.29296,-21.67969 0.11719,-11.30859 0.11719,-24.02344
                                    -3.33984,-0.11718 -6.79687,-0.17578 -3.45703,-0.11719 -7.03125,-0.11719 -3.57422,0
                                    -6.67969,0.11719 -3.10547,0.11719 -5.68359,0.82031 -2.57813,0.70313 -4.62891,2.22657
                                    -2.05078,1.46484 -3.45703,4.21875 -1.40625,2.69531 -2.16797,6.91406 -0.70313,4.21875
                                    -0.70313,10.3125 z"
                                style="font-size:240px;fill-opacity:1"
                            />
                        </g>
                    </g>
                </svg>
            </button>
            <fluent-drawer
                class="dashboard-drawer"
                id="dashboard-drawer"
                type="non-modal"
                position="start"
                aria-label="Панель редактора"
                ${te("dashboardDrawer")}
                @toggle="${r=>{const e=r.dashboardDrawer?.dialog.open??!1,t=r.shadowRoot?.querySelector(".dashboard-trigger"),i=e?"Закрити панель редактора":"Відкрити панель редактора";t?.setAttribute("aria-expanded",String(e)),t?.setAttribute("aria-label",i),t?.setAttribute("title",i)}}"
            >
                <fluent-drawer-body>
                    <div class="dashboard-drawer-heading">
                        <span>Панель редактора</span>
                        <button
                            class="dashboard-close"
                            type="button"
                            aria-label="Закрити панель редактора"
                            title="Закрити панель редактора"
                            @click="${r=>r.closeDashboard()}"
                        ><span aria-hidden="true">×</span></button>
                    </div>
                    <ff-theme-switcher></ff-theme-switcher>
                    <div class="dashboard-actions" role="group" aria-label="Дії зі сценою">
                        <button type="button" @click="${r=>r.openSceneFilePicker()}">Відкрити сцену</button>
                        <button type="button" @click="${r=>r.saveScene()}">Зберегти сцену</button>
                    </div>
                </fluent-drawer-body>
            </fluent-drawer>            
                    <input
                        type="file"
                        accept=".ffscene.json,application/json,.json"
                        aria-label="Вибрати файл сцени"
                        data-scene-file-input
                        hidden
                        @change="${(r,e)=>r.loadSceneFile(e.event)}"
                    >                    
        </section>

        <header class="editor-header controls" aria-label="Керування сценою" ?inert="${r=>r.sceneOperationMessage!==null}">
            <div class="ribbon-viewport">
            <div class="ribbon-row control-ribbon" role="group" aria-label="Основні параметри сцени">
                    <div class="c-group dividers" data-ribbon-group="mode" ?data-active="${r=>r.activeControlGroup==="mode"}" >
                        <div class="c-control-anchor">
                            <div class="property-field" @click="${r=>r.selectControlGroup("mode")}">
                                <button class="control-label ribbon-group-select" type="button" data-c-trigger="mode" aria-expanded="${r=>r.contextRowExpanded&&r.activeControlGroup==="mode"&&r.hasContextControls}" aria-controls="scene-mode-controls" @click="${r=>r.selectControlGroup("mode")}">Сітка</button>
                                <div class="segmented" role="group" aria-label="Тип сітки">
                                    <button class="square-btn fs20 pb4 btn-size-s" aria-pressed="${r=>r.mode==="tri"}" @click="${r=>r.setMode("tri")}" title="Трикутна сітка">△</button>
                                    <button class="square-btn fs20 pb4 btn-size-s" aria-pressed="${r=>r.mode==="hex"}" @click="${r=>r.setMode("hex")}" title="Гексагональна сітка">⬡</button>
                                </div>
                            </div>
                            <div class="c-row" id="scene-mode-controls" data-c-row="mode" role="group" aria-label="Контекстні параметри сітки" popover="manual" hidden>
                                <div class="control-group dimension-controls" role="group" aria-label="${r=>r.mode==="tri"?"Розміри трикутної сітки":"Розміри шестикутної сітки"}" title="${r=>r.mode==="tri"?"Розміри трикутної сітки":"Розміри шестикутної сітки"}" ?hidden="${r=>r.activeControlGroup!=="mode"}">
                                    <span class="control-label">${r=>r.mode==="tri"?"Параметри трикутної сітки":"Параметри шестикутної сітки"}</span>
                                    <label class="dimension-control">
                                        <span>крок</span>
                                        <input class="input-48" type="number" name="step" min="1" :max="${r=>r.maxScenePixelValue}" step="1" aria-label="Крок сітки в пікселях" :value="${r=>r.step}" @input="${(r,e)=>r.setDimension(e.event)}">
                                        <span>пікс.</span>
                                    </label>
                                    <label class="dimension-control">
                                        <span>рядки</span>
                                        <input class="input-48" type="number" name="rows" min="1" :max="${r=>r.maxRows}" step="1" aria-label="Кількість рядків сітки" :value="${r=>r.rows}" @input="${(r,e)=>r.setDimension(e.event)}">
                                    </label>
                                    <label class="dimension-control">
                                        <span>стовпці</span>
                                        <input class="input-48" type="number" name="columns" min="1" :max="${r=>r.maxColumns}" step="1" aria-label="Кількість стовпців сітки" :value="${r=>r.columns}" @input="${(r,e)=>r.setDimension(e.event)}">
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="c-control-anchor">                                     
                            <div class="property-field" @click="${(r,e)=>(e.event.stopPropagation(),r.selectControlGroup("fieldView"))}">
                                <button class="control-label ribbon-group-select" type="button" data-c-trigger="fieldView" aria-expanded="${r=>r.contextRowExpanded&&r.activeControlGroup==="fieldView"&&r.hasContextControls}" aria-controls="scene-field-view-controls" @click="${r=>r.selectControlGroup("fieldView")}">Поле</button>
                                <div class="segmented" role="group" aria-label="Вигляд поля">
                                    <button class="square-btn fs22 pb7 btn-size-s" ?disabled="${r=>r.mode!=="hex"}" aria-pressed="${r=>r.fieldView==="dot"}" @click="${r=>r.setFieldView("dot")}" title="Точки">⁙</button>
                                    <button class="square-btn fs22 pb6 btn-size-s" ?disabled="${r=>r.mode!=="hex"}" aria-pressed="${r=>r.fieldView==="full"}" @click="${r=>r.setFieldView("full")}" title="Гекси">⎔</button>
                                    <button class="square-btn btn-size-s" ?disabled="${r=>r.mode!=="hex"}" aria-pressed="${r=>r.fieldView==="spot"}" @click="${r=>r.setFieldView("spot")}" title="Софіт">🔆︎</button>
                                </div>
                            </div>
                            <div class="c-row" id="scene-field-view-controls" data-c-row="fieldView" role="group" aria-label="Контекстні параметри поля" popover="manual" hidden>
                                <div class="control-group spot-view-controls" ?hidden="${r=>r.activeControlGroup!=="fieldView"||r.mode!=="hex"||r.fieldView!=="spot"}">
                                    <span class="control-label">Вигляд ділянки</span>
                                    <div class="segmented" role="group" aria-label="Вигляд ділянки">
                                        <button class="square-btn fs22 pb7 btn-size-s" ?disabled="${r=>r.mode!=="hex"||r.fieldView!=="spot"}" aria-pressed="${r=>r.spotView==="dot"}" @click="${r=>r.setSpotView("dot")}">⁙</button>
                                        <button class="square-btn fs22 pb6 btn-size-s" ?disabled="${r=>r.mode!=="hex"||r.fieldView!=="spot"}" aria-pressed="${r=>r.spotView==="full"}" @click="${r=>r.setSpotView("full")}">⎔</button>
                                    </div>
                                </div>

                                <div class="control-group spot-radius-controls" ?hidden="${r=>r.activeControlGroup!=="fieldView"||r.mode!=="hex"||r.fieldView!=="spot"}">
                                    <span class="control-label">Радіус ділянки · r</span>
                                    <label class="dimension-control">
                                        <input class="input-48" type="number" name="spotRadius" min="0.1" :max="${r=>r.maxSpotRadius}" step="0.1" aria-label="Множник радіуса ділянки" :value="${r=>r.spotRadius}" ?disabled="${r=>r.mode!=="hex"||r.fieldView!=="spot"}" @input="${(r,e)=>r.setSpotRadius(e.event)}">
                                    </label>
                                </div>

                                <div class="appearance-controls" role="group" aria-label="Вигляд сітки" ?hidden="${r=>r.activeControlGroup!=="fieldView"||r.mode==="hex"&&r.fieldView==="spot"&&r.spotView!=="full"}">
                                    <div class="control-group hex-center-controls" role="group" aria-label="Вигляд центра шестикутника" ?hidden="${r=>r.activeControlGroup!=="fieldView"||r.mode!=="hex"||r.fieldView!=="dot"}">
                                        <span class="control-label">Центр шестикутника</span>
                                        <label class="property-field">
                                            <span>Радіус · пікс.</span>
                                            <input class="property-input input-48" type="number" name="centerRadius" min="0.1" :max="${r=>r.maxScenePixelValue}" step="0.1" aria-label="Радіус центра шестикутника в пікселях" :value="${r=>r.centerRadius}" ?disabled="${r=>r.mode!=="hex"}" @input="${(r,e)=>r.setGridAppearance(e.event)}">
                                        </label>
                                        <label class="property-field">
                                            <span>Колір</span>
                                            <input class="property-input color-input" type="color" name="centerColor" value="#225342" aria-label="Колір центра шестикутника" ?disabled="${r=>r.mode!=="hex"}" @input="${(r,e)=>r.setGridAppearance(e.event)}">
                                        </label>
                                    </div>

                                    <div class="control-group hex-vertex-controls" role="group" aria-label="Вигляд вершини шестикутника" ?hidden="${r=>r.activeControlGroup!=="fieldView"||r.mode!=="hex"||r.fieldView!=="dot"}">
                                        <span class="control-label">Вершина шестикутника</span>
                                        <label class="property-field">
                                            <span>Радіус · пікс.</span>
                                            <input class="property-input input-48" type="number" name="vertexRadius" min="0.1" :max="${r=>r.maxScenePixelValue}" step="0.1" aria-label="Радіус вершини шестикутника в пікселях" :value="${r=>r.vertexRadius}" ?disabled="${r=>r.mode!=="hex"}" @input="${(r,e)=>r.setGridAppearance(e.event)}">
                                        </label>
                                        <label class="property-field">
                                            <span>Колір</span>
                                            <input class="property-input color-input" type="color" name="vertexColor" value="#225342" aria-label="Колір вершини шестикутника" ?disabled="${r=>r.mode!=="hex"}" @input="${(r,e)=>r.setGridAppearance(e.event)}">
                                        </label>
                                    </div>

                                    <div class="control-group tri-vertex-controls" role="group" aria-label="Вигляд вершини трикутника" ?hidden="${r=>r.activeControlGroup!=="fieldView"||r.mode!=="tri"}">
                                        <span class="control-label">Вершина трикутника</span>
                                        <label class="property-field">
                                            <span>Радіус · пікс.</span>
                                            <input class="property-input input-48" type="number" name="triNodeSize" min="0.1" :max="${r=>r.maxScenePixelValue}" step="0.1" aria-label="Радіус вершини трикутника в пікселях" :value="${r=>r.triNodeSize}" ?disabled="${r=>r.mode!=="tri"}" @input="${(r,e)=>r.setGridAppearance(e.event)}">
                                        </label>
                                        <label class="property-field">
                                            <span>Колір</span>
                                            <input class="property-input color-input" type="color" name="triNodeColor" value="#225342" aria-label="Колір вершини трикутника" ?disabled="${r=>r.mode!=="tri"}" @input="${(r,e)=>r.setGridAppearance(e.event)}">
                                        </label>
                                    </div>

                                    <div class="control-group field-line-controls" role="group" aria-label="Вигляд повних ліній" ?hidden="${r=>r.activeControlGroup!=="fieldView"||r.mode!=="hex"||r.fieldView!=="full"&&!(r.fieldView==="spot"&&r.spotView==="full")}">
                                        <span class="control-label">Товщина ліній · пікс.</span>
                                        <label class="property-field">
                                            <input class="property-input input-48" type="number" name="fieldLineWidth" min="0.1" :max="${r=>r.maxScenePixelValue}" step="0.1" aria-label="Товщина повних ліній у пікселях" :value="${r=>r.fieldLineWidth}" ?disabled="${r=>r.mode!=="hex"||r.fieldView!=="full"&&!(r.fieldView==="spot"&&r.spotView==="full")}" @input="${(r,e)=>r.setGridAppearance(e.event)}">
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <sub>
                            <button class="switch-ctl" data-contour-overlay-toggle aria-label="${r=>r.showHexOverlay?"Приховати поле":"Показати поле"}" title="${r=>r.showHexOverlay?"Приховати поле":"Показати поле"}" aria-pressed="${r=>r.showHexOverlay}" @click="${(r,e)=>(e.event.stopPropagation(),r.toggleHexOverlay())}">
                                <span class="switch-track warm" aria-hidden="true"><span></span></span>
                            </button> 
                                <span>Сцена</span>
                                <button
                                    class="square-btn"
                                    type="button"
                                    data-hex-coordinates-toggle
                                    aria-label="Координати шестикутників"
                                    title="Показувати або приховувати координати шестикутників"
                                    aria-pressed="${r=>r.showHexCoordinates}"
                                    ?disabled="${r=>r.mode!=="hex"}"
                                    @click="${(r,e)=>(e.event.stopPropagation(),r.toggleHexCoordinates())}"
                                >#</button>
                        </sub>
                    </div>

                    <div class="c-group dividers" data-ribbon-group="movementArea" data-movement-block role="group" aria-label="Переміщення" ?data-active="${r=>r.activeControlGroup==="movementArea"}" @click="${r=>(r.selectControlGroup("movementArea"),!0)}">
                        
                            <div class="movement-subblock" data-movement-part="snap">
                                <span class="control-label">Прив’язка</span>
                                <div class="lbl-block">
                                    <button class="switch-ctl" type="button" aria-label="Прив’язка до вузлів" title="Прив’язка до вузлів" aria-pressed="${r=>r.dragSnap==="live"}" @click="${r=>r.setDragSnap(r.dragSnap==="live"?"free":"live")}">
                                        <span class="switch-track" aria-hidden="true"><span></span></span>
                                    </button>
                                    <div class="segmented" role="group" aria-label="Ціль прив’язки на шестикутній сітці">
                                        <button class="square-btn fs16 pb2 btn-size-s" type="button" ?disabled="${r=>r.dragSnap!=="live"}" aria-pressed="${r=>r.dragSnap==="live"&&r.snapTarget!=="vertex"}" @click="${r=>r.toggleSnapTarget("center")}" title="Центр" aria-label="Центр">⊙</button>
                                        <button class="square-btn fs22 pb4 btn-size-s" type="button" ?disabled="${r=>r.dragSnap!=="live"}" aria-pressed="${r=>r.dragSnap==="live"&&r.snapTarget!=="center"}" @click="${r=>r.toggleSnapTarget("vertex")}" title="Вершина" aria-label="Вершина">∠</button>
                                    </div>                                </div>
                            </div>

                            <div class="movement-subblock" data-movement-part="group">
                                <span class="control-label">В групі</span>
                                <div class="lbl-block">
                                    <button class="switch-ctl" type="button" aria-label="В межах групи" title="Переміщення об’єктів тільки в межах групи" aria-pressed="${r=>r.groupMode==="group"}" @click="${r=>r.setGroupMode(r.groupMode==="group"?"any":"group")}">
                                        <span class="switch-track" aria-hidden="true"><span></span></span>
                                    </button>
                                </div>
                            </div>

                            <div class="movement-subblock" data-movement-part="rebound">
                                <span class="control-label">Відскок</span>
                                <div class="lbl-block">
                                    <button class="switch-ctl" type="button" aria-pressed="${r=>r.rebound}" @click="${r=>r.toggleRebound()}">
                                        <span class="switch-track" aria-hidden="true"><span></span></span>
                                    </button>
                                </div>
                            </div>
                        
                        <sub><span>Перетаскування</span></sub>
                    </div>

                    <div class="c-group" data-ribbon-group="contour" data-control-strip="contour" role="group" aria-label="Керування контуром">
                        <div class="c-control-anchor">
                            <div class="property-field ctf">
                                <button class="control-label svg-file-name ribbon-group-select" type="button" data-c-trigger="contourOverlay" aria-expanded="${r=>r.contextRowExpanded&&r.activeControlGroup==="contourOverlay"&&r.hasContextControls}" aria-controls="scene-contour-controls" aria-label="Параметри контуру" @click="${r=>r.selectControlGroup("contourOverlay")}">${r=>r.svgFileName?r.svgFileName:"оберіть *.svg"}</button>
                                <fluent-button @click="${r=>(r.selectControlGroup("contourOverlay"),r.pickFile())}" appearance="outline" class="square-btn">📂</fluent-button>                            
                            </div>
                            <input style="display: none;" type="file" name="svgFile" accept=".svg,image/svg+xml" aria-label="Вибрати SVG-контур" data-svg-file-input ${te("fileInputElement")} @change="${(r,e)=>r.selectSvgFile(e.event)}" />
                        </div>

                            <div class="c-row" id="scene-contour-controls" data-c-row="contourOverlay" role="group" aria-label="Параметри контуру" popover="manual" hidden>
                                <div class="contour-transform-grid" role="group" aria-label="Перетворення контуру">
                                    <label class="property-field ctf">
                                        <span>Зсув X</span>
                                        <input class="property-input input-48" type="number" name="contourOffsetX" :min="${r=>-r.maxScenePixelValue}" :max="${r=>r.maxScenePixelValue}" step="1" aria-label="Зсув контуру по X у пікселях" :value="${r=>r.contourOffsetX}" @input="${(r,e)=>r.setContourTransform(e.event)}" @blur="${(r,e)=>r.setContourTransform(e.event)}">
                                    </label>
                                    <label class="property-field ctf">
                                        <span>Зсув Y</span>
                                        <input class="property-input input-48" type="number" name="contourOffsetY" :min="${r=>-r.maxScenePixelValue}" :max="${r=>r.maxScenePixelValue}" step="1" aria-label="Зсув контуру по Y у пікселях" :value="${r=>r.contourOffsetY}" @input="${(r,e)=>r.setContourTransform(e.event)}" @blur="${(r,e)=>r.setContourTransform(e.event)}">
                                    </label>
                                    <label class="property-field ctf">
                                        <span>Масштаб</span>
                                        <input class="property-input input-48" type="number" name="contourScale" min="0" step="0.1" aria-label="Масштаб контуру" :value="${r=>r.contourScale}" @input="${(r,e)=>r.setContourTransform(e.event)}" @blur="${(r,e)=>r.setContourTransform(e.event)}">
                                    </label>
                                </div>
                            </div>
                        <sub>
                            <button class="switch-ctl" data-contour-overlay-toggle type="button" aria-label="${r=>r.showContourOverlay?"Приховати контур":"Показати контур"}" title="${r=>r.showContourOverlay?"Приховати контур":"Показати контур"}" aria-pressed="${r=>r.showContourOverlay}" @click="${r=>r.toggleContourOverlay()}">
                                <span class="switch-track warm" aria-hidden="true"><span></span></span>
                            </button>
                            <span>Контур</span>
                        </sub>
                    </div>

                    <div class="c-group" data-control-strip="groups" role="group" aria-label="Керування групами">
                        <label class="property-field ctf">
                            <span>Нарізка</span>
                            <fluent-button class="major-action" appearance="primary" icon-only
                                data-apply-contours 
                                ?disabled="${r=>r.groupLayerLocked||r.mode!=="hex"||r.svgStatus.startsWith("Loading ")||r.svgStatus.startsWith("Could not load")||r.svgStatus.startsWith("Could not read")}" 
                                @click="${r=>r.applySvgContours()}" 
                                title="Автоматично нарізати групи по контурах">✂️</fluent-button>
                        </label>
                        <label class="property-field ctf">
                            <span>Редагування груп</span>
                            <div class="group-edit-controls" role="group" aria-label="Редагування груп">                                
                                <button class="switch-ctl group-edit-toggle" title="${r=>r.groupEditingEnabled?"Редагування груп увімкнено":"Редагування груп вимкнено"}" aria-pressed="${r=>r.groupEditingEnabled}" ?disabled="${r=>r.mode!=="hex"||r.groupLayerLocked}" @click="${(r,e)=>{e.event.stopPropagation(),r.toggleGroupEditing()}}">
                                    <span class="switch-track attention" aria-hidden="true"><span></span></span>
                                </button>
                                <div class="group-edit-actions segmented" role="group" aria-label="Дія для комірок групи">
                                       <button class="switch-ctl" data-group-edit-action="add" aria-pressed="${r=>r.groupEditAction==="add"}" ?disabled="${r=>r.mode!=="hex"||!r.groupEditingEnabled||r.groupLayerLocked}" @click="${(r,e)=>{e.event.stopPropagation(),r.groupEditAction=r.groupEditAction==="add"?null:"add"}}" title="Режим: Додавати комірки, обмінювати комірки">➕︎</button>
                                    <button data-group-edit-action="remove" aria-pressed="${r=>r.groupEditAction==="remove"}" ?disabled="${r=>r.mode!=="hex"||!r.groupEditingEnabled||r.groupLayerLocked}" @click="${(r,e)=>{e.event.stopPropagation(),r.groupEditAction=r.groupEditAction==="remove"?null:"remove"}}" title="Режим: Видаляти комірки">➖︎</button>
                                </div>
                            </div>
                        </label>
                            <sub>
                                <button class="switch-ctl" data-group-overlay-toggle type="button" title="Накладання груп" aria-label="${r=>r.showGroups?"Приховати групи":"Показати групи"}" aria-pressed="${r=>r.showGroups}" @click="${r=>r.toggleGroupOverlay()}">
                                    <span class="switch-track warm" aria-hidden="true"><span></span></span>                                    
                                </button>
                                <span>Групи</span>
                                <button class="primary-layer-lock" data-group-layer-lock aria-pressed="${r=>r.groupLayerLocked}" aria-label="${r=>`${r.groupLayerLocked?"Розблокувати":"Заблокувати"} шар «Групи»`}" title="${r=>`${r.groupLayerLocked?"Розблокувати":"Заблокувати"} шар «Групи»`}" @click="${r=>r.toggleGroupLayerLock()}">
                                    <span aria-hidden="true">${r=>r.groupLayerLocked?"🔒":"🔓"}</span>
                                </button>
                            </sub>
                        </div>  

                        <div class="c-group" data-control-strip="layout" role="group" aria-label="Редагування розкладки">
                            <label class="property-field ctf">
                                <span>Місць</span>
                                <input class="input-48" type="number" data-placement-count min="1" step="1" aria-label="Кількість комірок у групі" :value="${r=>r.placementCount}" ?disabled="${r=>r.placementLayerLocked}">
                            </label>
                            <div class="property-field ctf">
                                <span>Розкласти</span>
                                <div class="group-edit-actions" role="group">
                                    <fluent-button appearance="outline" class="square-btn major-action" ?disabled="${r=>r.placementLayerLocked}" @click="${r=>r.layoutSwarm()}" title="Розташувати комірки 'спіралью' (від центру групи, по спіралі)">🌀</fluent-button>
                                    <fluent-button appearance="outline" class="square-btn major-action" ?disabled="${r=>r.mode!=="hex"||r.placementLayerLocked}" @click="${r=>r.layoutColumn()}" title="Розташувати комірки 'ланцюгом' (умовним ланцюжном від краю до краю групи)">🔗</fluent-button>
                                </div>
                            </div>      
                            <sub>
                                <button class="switch-ctl" data-placement-overlay-toggle type="button" aria-label="${r=>r.showPlacements?"Приховати накладання розкладки":"Показати накладання розкладки"}"  title="${r=>r.showPlacements?"Приховати накладання розкладки":"Показати накладання розкладки"}" aria-pressed="${r=>r.showPlacements}" @click="${r=>r.togglePlacementOverlay()}">
                                    <span class="switch-track warm" aria-hidden="true"><span></span></span>                                    
                                </button>
                                <span>Місця</span>
                                <button class="primary-layer-lock" data-placement-layer-lock aria-pressed="${r=>r.placementLayerLocked}" aria-label="${r=>`${r.placementLayerLocked?"Розблокувати":"Заблокувати"} шар «Розташування»`}" title="${r=>`${r.placementLayerLocked?"Розблокувати":"Заблокувати"} шар «Розташування»`}" @click="${r=>r.togglePlacementLayerLock()}">
                                    <span aria-hidden="true">${r=>r.placementLayerLocked?"🔒":"🔓"}</span>
                                </button>
                            </sub>                          
                        </div>   

                        <div class="c-group" data-control-strip="objects" role="group" aria-label="Керування об’єктами">
                            <div class="property-field"> 
                                <span class="control-label">Динамічні</span>
                                <div class="lbl-block">
                                    <button class="switch-ctl" data-item-origin-toggle="generated" aria-label="${r=>`${r.showGeneratedItems?"Приховати":"Показати"} динамічні об’єкти`}" aria-pressed="${r=>r.showGeneratedItems}" @click="${r=>r.toggleGeneratedItems()}">
                                        <span class="switch-track vert" aria-hidden="true"><span></span></span>
                                    </button>
                                    <div class="mock-data-tools">
                                        <div class="mock-data-toolbar">
                                                <button class="square-btn major-action mock-data-refresh" type="button" aria-label="Оновити дані..." title="Оновити дані..." @click="${r=>r.requestDataRefresh()}">↻</button>
                                                <button class="square-btn half-square-btn data-details-btn" type="button" data-c-trigger="mockData" aria-label="Переглянути дані" title="Переглянути дані" aria-expanded="${r=>r.mockDataPanelExpanded}" aria-controls="mock-data-context-controls" @click="${r=>r.toggleMockDataPanel()}">⌄</button>
                                        </div>
                                        <div class="c-row" id="mock-data-context-controls" data-c-row="mockData" role="group" aria-label="Дані тестових об’єктів" popover="manual" hidden>
                                            <output class="mock-data-status" role="status" aria-live="polite">${r=>r.mockDataStatus}</output>
                                            <details class="mock-data-json">
                                                <summary>Згенерований JSON</summary>
                                                <pre aria-label="Згенерований JSON тестових даних">${r=>r.mockDataJson}</pre>
                                            </details>                                
                                        </div>
                                    </div>

                                    <button class="square-btn major-action" aria-label="Розкласти об’єкти за підготовленими комірками" title="Розкласти об’єкти за підготовленими комірками" @click="${r=>r.layoutPreparedItems()}">🍱</button>
                                    <button class="highlight-toggle" data-highlight-action="fixed" aria-label="Підсвітити фіксовані об’єкти" aria-pressed="${r=>r.highlightFixedItems}" @click="${r=>r.toggleHighlightFixedItems()}" title="Підсвітити фіксовані об’єкти">🌟︎</button>
                                    <button class="highlight-toggle" data-highlight-action="static" aria-label="Підсвітити статичні об’єкти" aria-pressed="${r=>r.highlightStaticItems}" @click="${r=>r.toggleHighlightStaticItems()}" title="Підсвітити статичні об’єкти">✧</button>

                                </div>
                            </div>



                            <label class="property-field"> 
                                <span class="control-label">Статичні</span>
                                <div class="lbl-block">
                                    <button class="switch-ctl" data-item-origin-toggle="slotted" aria-label="${r=>`${r.showSlottedItems?"Приховати":"Показати"} статичні об’єкти`}" aria-pressed="${r=>r.showSlottedItems}" @click="${r=>r.toggleSlottedItems()}">
                                        <span class="switch-track vert" aria-hidden="true"><span></span></span>
                                    </button>
                                    <button class="create-item-toggle" aria-pressed="${r=>r.createItemMode}" @click="${r=>r.toggleCreateItemMode()}" title="Додати новий статичний об’єкт">➕︎</button>                                    
                                </div>
                            </label>
                        
                            <sub>
                                <button class="switch-ctl" data-primary-layer-visibility aria-label="${r=>r.primaryLayerVisible?"Приховати шар об’єктів":"Показати шар об’єктів"}" aria-pressed="${r=>r.primaryLayerVisible}" @click="${r=>r.togglePrimaryLayerVisibility()}">
                                    <span class="switch-track warm primary-layer-visibility-track" aria-hidden="true"><span></span></span>
                                </button>
                                <span>Об'єкти</span>
                                <button class="primary-layer-lock" data-primary-layer-lock aria-pressed="${r=>r.primaryLayerLocked}" aria-label="${r=>`${r.primaryLayerLocked?"Розблокувати":"Заблокувати"} ${r.primaryLayerName}`}" title="${r=>`${r.primaryLayerLocked?"Розблокувати":"Заблокувати"} ${r.primaryLayerName}`}" @click="${r=>r.togglePrimaryLayerLock()}">
                                    <span aria-hidden="true">${r=>r.primaryLayerLocked?"🔒":"🔓"}</span>
                                </button>
                                <button class="default-properties-toggle primary-layer-lock" type="button" aria-label="Редагувати властивості за замовчуванням" title="Редагувати властивості за замовчуванням"
                                    aria-pressed="${r=>r.editingDefaultItemProperties}"
                                    @click="${(r,e)=>{e.event.stopPropagation(),r.toggleDefaultItemProperties()}}"
                                >⚙️</button>
                            </sub>                            
                        </div>
                        
                        <div class="c-group paper-size-controls" data-control-strip="paper" role="group" aria-label="Друк">
                            <div class="property-field ctf">
                                <span class="control-label">Пунктир</span>
                                <button class="switch-ctl" data-paper-outline-toggle type="button" aria-label="${r=>r.showPaperOutline?"Приховати контур паперу":"Показати контур паперу"}" title="${r=>r.showPaperOutline?"Приховати контур паперу":"Показати контур паперу"}" aria-pressed="${r=>r.showPaperOutline}" @click="${r=>r.togglePaperOutline()}">
                                    <span class="switch-track vert" aria-hidden="true"><span></span></span>
                                </button>
                            </div>                            
                            <label class="property-field ctf">
                                <span class="control-label">Папір</span>
                                <select class="property-input paper-size-select" aria-label="Типорозмір паперу" :value="${r=>r.paperSize}" @change="${(r,e)=>r.setPaperSize(e.event)}">
                                    <option value="a4">А4</option>
                                    <option value="a3">А3</option>
                                </select>
                            </label>
                            <button class="print-action" type="button" aria-label="Надрукувати сцену" title="Надрукувати сцену" @click="${r=>r.printScene()}">
                                <svg class="print-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M7 8V3h10v5" />
                                    <path d="M7 17H5a2 2 0 0 1-2-2v-4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4a2 2 0 0 1-2 2h-2" />
                                    <path d="M7 14h10v7H7z" />
                                    <path d="M18 11h.01" />
                                </svg>
                            </button>
                            <sub><span>Друк</span></sub>
                        </div>
                        </div>
                    </div>
        </header>
    <div class="scene-column" ?inert="${r=>r.sceneOperationMessage!==null}">
    <div class="stage-viewport" role="region" aria-label="Прокручувана поверхня сцени" tabindex="0"
                        @pointerdown="${(r,e)=>r.handleScenePanPointerDown(e.event)}"
                        @pointermove="${(r,e)=>r.handleScenePanPointerMove(e.event)}"
                        @pointerup="${(r,e)=>r.handleScenePanPointerUp(e.event)}"
                        @pointercancel="${(r,e)=>r.handleScenePanPointerCancel(e.event)}"
                        @wheel="${(r,e)=>(r.handleSceneWheel(e.event),Ho(r),!0)}">
                        <div class="scene-startup-overlay" ?hidden="${r=>!r.sceneStartupVisible}">
                            <div class="scene-startup" data-scene-startup role="group" aria-label="Початок роботи зі сценою">
                                <button
                                    type="button"
                                    aria-label="${r=>r.canContinueLastScene?"Продовжити останню сцену":"Нова сцена"}"
                                    @click="${r=>r.canContinueLastScene?r.continueLastScene():r.startNewScene()}"
                                >${r=>r.canContinueLastScene?"Продовжити останню":"Нова сцена"}</button>
                            </div>
                        </div>
                <div class="stage-content">
                    <div class="layer-stage">
                        <svg class="paper-size-underlay" aria-hidden="true" focusable="false" ?data-hidden="${r=>!r.showPaperOutline}">
                            <path class="paper-size-outline" d=""></path>
                        </svg>
                        <div class="scene-artwork">
                        <svg class="region-map-underlay" aria-hidden="true" ?data-hidden="${r=>!r.showContourOverlay}"></svg>
                    <ff-scene
                        :step="${r=>r.step}"
                        :rows="${r=>r.rows}"
                        :columns="${r=>r.columns}"
                        mode="${r=>r.mode}"
                        field-view="${r=>r.fieldView}"
                        spot-view="${r=>r.spotView}"
                        :groupEditingEnabled="${r=>r.groupEditingEnabled}"
                        :groupEditAction="${r=>r.groupEditAction}"
                        style="${r=>[`--ff-tri-layer-center-color: ${r.centerColor}`,`--ff-tri-layer-vertex-color: ${r.vertexColor}`,`--ff-tri-layer-center-radius: ${r.centerRadius}px`,`--ff-tri-layer-vertex-radius: ${r.vertexRadius}px`,`--ff-tri-layer-spot-radius: ${r.spotRadius}`,`--ff-tri-layer-node-size: ${r.triNodeSize}px`,`--ff-tri-layer-node-color: ${r.triNodeColor}`,`--ff-tri-layer-field-line-width: ${r.fieldLineWidth}px`].join("; ")}"
                        drag-snap="${r=>r.dragSnap}"
                        snap-target="${r=>r.snapTarget}"
                        group-mode="${r=>r.groupMode}"
                        :groups="${r=>r.groups}"
                        ?show-groups="${r=>r.showGroups}"
                        ?show-placements="${r=>r.showPlacements}"
                        ?show-hex-coordinates="${r=>r.showHexCoordinates}"
                        ?show-hex-overlay="${r=>r.showHexOverlay}"
                        ?rebound="${r=>r.rebound}"
                        ${te("sceneElement")}
                        role="listbox"
                        aria-label="${r=>r.mode==="tri"?"Трикутні об’єкти для вибору":"Шестикутні об’єкти для вибору"}"
                        aria-multiselectable="true"
                        @pointermove="${(r,e)=>{r.handleGroupSelectionPointerMove(e.event),r.handleCreatePointerMove(e.event),r.handleCalloutPointerMove(e.event)}}"
                        @pointerleave="${(r,e)=>{r.handleCreatePointerLeave(e.event),r.handleCalloutPointerLeave(e.event)}}"
                        @pointerdown="${(r,e)=>r.handleItemPointerDown(e.event)}"
                        @pointerup="${(r,e)=>r.handleGroupSelectionPointerUp(e.event)}"
                        @pointercancel="${(r,e)=>r.handleGroupSelectionPointerCancel(e.event)}"
                        @click="${(r,e)=>{if(r.calloutPlacementPhase!==null){r.handleCalloutSceneClick(e.event);return}r.handleGroupSelectionSceneClick(e.event)||r.handleItemClick(e.event)}}"
                        @keydown="${(r,e)=>r.handleItemKeydown(e.event)}"
                        @position-change="${(r,e)=>r.handlePositionChange(e.event)}"
                        @items-layout="${(r,e)=>r.handleItemsLayout(e.event)}"
                        @placements-change="${(r,e)=>r.handlePlacementsChange(e.event)}"
                        @group-edit-request="${(r,e)=>r.handleGroupEditRequest(e.event)}"
                    >
                        <ff-hex-group-layer ${te("groupLayerElement")}></ff-hex-group-layer>
                        <ff-items-layer ${te("itemsLayerElement")}></ff-items-layer>
                    </ff-scene>
                    <ff-hex-item
                        class="create-item-ghost"
                        icon="❔"
                        shape="hex"
                        aria-hidden="true"
                        ?hidden="${r=>!r.createGhostVisible}"
                        style="${r=>[`--ff-hex-item-x: ${r.createGhostX}px`,`--ff-hex-item-y: ${r.createGhostY}px`,`--ff-hex-item-radius: ${r.step}px`].join("; ")}"
                    ></ff-hex-item>
                        </div>
                    </div>
                </div>
                    </div>
                    <div class="scene-status-row" data-scene-status-row>
                        <div class="scene-status-history">
                            <button
                                type="button"
                                data-status-history-trigger
                                aria-label="${r=>`${r.svgStatusHistoryOpen?"Закрити":"Відкрити"} історію статусу сцени`}"
                                title="Історія статусу сцени"
                                aria-expanded="${r=>r.svgStatusHistoryOpen}"
                                aria-controls="scene-status-history-panel"
                                @click="${r=>r.svgStatusHistoryOpen=!r.svgStatusHistoryOpen}"
                            >◷</button>
                            <section
                                id="scene-status-history-panel"
                                data-status-history-panel
                                role="region"
                                aria-label="Історія статусу сцени"
                                ?hidden="${r=>!r.svgStatusHistoryOpen}"
                            >
                                <div class="panel-heading">
                                    <strong>Історія статусу</strong>
                                    <button
                                        type="button"
                                        data-status-history-close
                                        aria-label="Закрити історію статусу"
                                        title="Закрити історію статусу"
                                        @click="${r=>{r.svgStatusHistoryOpen=!1,r.shadowRoot?.querySelector("[data-status-history-trigger]")?.focus()}}"
                                    >×</button>
                                </div>
                                <ol data-status-history-list aria-label="Повідомлення статусу сцени">
                                    ${Xr(r=>r.svgStatusHistory,ie`
                                        <li>${r=>gc(r)}</li>
                                    `)}
                                </ol>
                            </section>
                        </div>
                        <p class="svg-status" data-svg-status role="status" aria-live="polite">${r=>gc(r.svgStatus)}</p>
                        <div class="scene-zoom" data-scene-zoom role="group" aria-label="Керування масштабом сцени">
                            <output class="scene-zoom-value" data-zoom-value aria-label="Рівень масштабу">${r=>`${Math.round(r.zoomScale*100)}%`}</output>
                            <button type="button" data-zoom-action="in" aria-label="Збільшити масштаб" title="Збільшити масштаб" ?disabled="${r=>r.zoomScale>=2.5}" @click="${r=>{r.zoomIn(),Ho(r)}}">+</button>
                            <button type="button" data-zoom-action="out" aria-label="Зменшити масштаб" title="Зменшити масштаб" ?disabled="${r=>r.zoomScale<=.2}" @click="${r=>{r.zoomOut(),Ho(r)}}">-</button>
                            <button type="button" data-zoom-action="fit" aria-label="Вписати сцену" title="Вписати сцену" @click="${r=>{r.fitScene(),Ho(r)}}">⤢</button>
                        </div>
                    </div>
                </div>

                <aside id="properties-panel" class="item-inspector" ?inert="${r=>r.sceneOperationMessage!==null}">
                    <section class="selected-slot-properties" data-selected-slot-properties aria-label="${r=>r.editingDefaultItemProperties?"Атрибути об’єктів за замовчуванням":r.selectedPropertiesTarget==="slot"?"Властивості вибраної комірки":"Властивості вибраних об’єктів"}">
                        <div class="selected-slot-heading">
                            <h4>${r=>r.editingDefaultItemProperties?"Атрибути за-замовчанням":r.selectedPropertiesTarget==="slot"?r.selectedPlacementGroupId!==null&&r.selectedPlacementId!==null?"Комірка":"ㅤ":"Об’єкт"}</h4>
                        </div>

                        <ff-hex-properties
                            mode="${r=>r.editingDefaultItemProperties?"defaults":r.selectedPropertiesTarget==="slot"?"slot":"items"}"
                            compact
                            :values="${r=>r.editingDefaultItemProperties?r.defaultItemProperties:r.selectedPropertiesTarget==="slot"?r.selectedPlacementProperties:r.editorValues}"
                            :mixedProperties="${r=>!r.editingDefaultItemProperties&&r.selectedPropertiesTarget==="items"?r.hexPropertiesMixedProperties:[]}"
                            :inheritedProperties="${r=>!r.editingDefaultItemProperties&&r.selectedPropertiesTarget==="items"?r.hexPropertiesInheritedProperties:[]}"
                            ?disabled="${r=>!r.editingDefaultItemProperties&&(r.selectedPropertiesTarget==="slot"?r.slotPropertiesDisabled||r.placementLayerLocked:r.selectionCount===0)}"
                            :layoutModeDisabled="${r=>r.selectedLayoutModeDisabled}"
                            ?locked="${r=>!r.editingDefaultItemProperties&&r.selectedPropertiesTarget==="items"&&r.selectedItemsLocked}"
                            :limits="${r=>r.hexPropertiesLimits}"
                            @hex-properties-change="${(r,e)=>r.editingDefaultItemProperties?r.handleHexPropertiesChange(e.event):r.selectedPropertiesTarget==="slot"?r.handleSelectedPlacementPropertyChange(e.event):r.handleSelectedItemPropertiesChange(e.event)}"
                            @hex-properties-action="${(r,e)=>r.editingDefaultItemProperties||r.selectedPropertiesTarget==="items"?r.handleHexPropertiesAction(e.event):r.handleSelectedPlacementPropertyAction(e.event)}"
                        ></ff-hex-properties>
                        <p class="selection-summary" role="status" aria-live="polite">${r=>r.editingDefaultItemProperties?`Параметри за замовчуванням застосовуються під час створення об’єктів і наступного розподілу; поточний вибір не змінено (${r.selectionCount}).`:r.selectedPropertiesTarget==="slot"?r.selectedPlacementGroupId!==null&&r.selectedPlacementId!==null?`Вибрана комірка ${r.selectedPlacementId} групи ${r.selectedPlacementGroupId}.`:"Немає вибраної комірки":r.selectionCount===0?"Немає вибраних об’єктів":r.selectionSummary}</p>

                                <span>${r=>r.editingDefaultItemProperties?"атрибути за-замовчанням":r.selectedPropertiesTarget==="slot"?r.selectedPlacementGroupId!==null&&r.selectedPlacementId!==null?`r.${r.selectedPlacementProperties.r}, c.${r.selectedPlacementProperties.c} · ${r.selectedPlacementGroupId}`:" ":"Властивості об’єктів"}</span>

                    </section>
                                                                                
                </aside>

                <aside
                    id="groups-panel"                    
                    class="item-inspector"
                    aria-label="Подання інспектора"
                    ?inert="${r=>r.sceneOperationMessage!==null}"
                    @input="${(r,e)=>r.handleItemInput(e.event)}"
                    @click="${(r,e)=>(r.handleGroupInspectorClick(e.event),r.handleStackAction(e.event))}"
                >
                  
                            <div class="inspector-group group-list" data-group-settings data-group-list @click="${(r,e)=>r.handlePlacementClick(e.event)}" @keydown="${(r,e)=>r.handlePlacementRowKeyDown(e.event)}">
                                <table aria-label="Групи шестикутників">
                                    <thead>
                                        <tr>
                                            <th scope="col">Група</th>
                                            <th scope="col">Колір</th>
                                            <th scope="col">Видно</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${Xr(r=>r.inspectorGroups,ie`
                                            <tr data-group-row data-group-id="${r=>r.id}" data-group-selected="${r=>r.selected?"true":"false"}">
                                                <th scope="row">
                                                    <button class="group-expand" type="button" data-group-center-action="expand" data-group-id="${r=>r.id}" aria-expanded="${r=>r.centersExpanded}" aria-label="${r=>`${r.centersExpanded?"Згорнути":"Розгорнути"} комірки групи ${r.name}`}">
                                                        <span aria-hidden="true">${r=>r.centersExpanded?"▾":"▸"}</span>
                                                    </button>
                                                    <button
                                                        class="group-list-select"
                                                        type="button"
                                                        data-group-select
                                                        data-group-id="${r=>r.id}"
                                                        ?disabled="${(r,e)=>e.parent.groupLayerLocked}"
                                                        aria-pressed="${r=>r.selected}"
                                                        aria-label="${r=>`${r.selected?"Зняти вибір із групи":"Вибрати групу"} ${r.name}`}"
                                                        @click="${(r,e)=>{e.event.stopPropagation(),e.parent.toggleSelectedGroup(r.id)}}"
                                                    >${r=>r.name}</button>
                                                </th>
                                                <td><span style="${r=>`display: inline-block; width: 1rem; height: 1rem; background-color: ${r.color}; border: 1px solid currentColor; vertical-align: middle;`}" role="img" aria-label="${r=>`Колір ${r.color}`}"></span></td>
                                                <td>
                                                    <button type="button" data-group-action="visibility" data-group-id="${r=>r.id}" ?disabled="${(r,e)=>e.parent.groupLayerLocked}" aria-label="${r=>`${r.visible?"Приховати":"Показати"} ${r.name}`}" aria-pressed="${r=>r.visible}">
                                                        <span aria-hidden="true">${r=>r.visible?"👁️":"🙈"}</span>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr class="group-details-row" data-group-details-row data-group-id="${r=>r.id}" ?hidden="${r=>!r.centersExpanded}">
                                                <td colspan="3">
                                                    <div class="group-details-interior">
                                                        <div class="group-slot-list">
                                                        ${Wr(r=>r.centersExpanded,ie`
                                                            <ul class="placement-list" aria-label="Комірки групи ${r=>r.name}">
                                                                ${Xr((r,e)=>e.parent.placementGroups.find(t=>t.id===r.id)?.placements??[],ie`
                                                                        <li
                                                                            class="placement-row"
                                                                            data-group-id="${r=>r.groupId}"
                                                                            data-placement-id="${r=>r.id}"
                                                                            data-placement-list="group"
                                                                            tabindex="0"
                                                                            aria-disabled="${r=>r.locked}"
                                                                            role="button"
                                                                            aria-pressed="${r=>r.selected}"
                                                                            aria-current="${r=>r.selected?"true":"false"}"
                                                                            aria-label="${r=>`Комірка ${r.id}, рядок ${r.r}, стовпець ${r.c}`}"
                                                                            ?data-selected="${r=>r.selected}"
                                                                        >
                                                                            <span class="placement-row-icon" aria-hidden="true">⬡</span>
                                                                            <span class="placement-row-coordinates">${r=>`r.${r.r}, c.${r.c}`}</span>
                                                                        </li>
                                                                    `)}
                                                                <li class="group-center-empty" ?hidden="${(r,e)=>(e.parent.placementGroups.find(i=>i.id===r.id)?.placements.length??0)>0}">Немає комірок.</li>
                                                            </ul>
                                                            <div class="placement-actions" data-group-placement-actions data-group-id="${r=>r.id}">
                                                                <button
                                                                    type="button"
                                                                    data-placement-action="add"
                                                                    data-group-id="${r=>r.id}"
                                                                    data-placement-list="group"
                                                                    ?disabled="${(r,e)=>e.parent.placementLayerLocked||!e.parent.placementGroups.find(t=>t.id===r.id)?.hasAvailableCell}"
                                                                    aria-label="Додати комірку до групи ${r=>r.name}"
                                                                    title="Додати комірку"
                                                                >➕︎</button>

                                                                <button
                                                                    class="callout-create-action"
                                                                    type="button"
                                                                    data-callout-create
                                                                    data-group-id="${r=>r.id}"
                                                                    ?disabled="${(r,e)=>r.hasCallout||!r.calloutCanCreate||!r.calloutHasAvailableCell||e.parent.groupLayerLocked||e.parent.mode!=="hex"}"
                                                                    aria-label="${r=>r.hasCallout?`Виноска для групи ${r.name} вже створена`:`Створити виноску для групи ${r.name}`}"
                                                                    title="${r=>r.hasCallout?"Виноску вже створено":"Створити виноску"}"
                                                                    @click="${(r,e)=>(e.event.stopPropagation(),e.parent.createCalloutForGroup(r.id))}"
                                                                >⚓︎➕︎</button>
                                                            </div>

                                                            ${Wr(r=>r.hasCallout,ie`
                                                                <section
                                                                    class="callout-management"
                                                                    data-callout-controls
                                                                    data-group-id="${r=>r.id}"
                                                                    role="group"
                                                                    aria-label="Позиції виноски групи ${r=>r.name}"
                                                                    ?data-active="${r=>r.calloutActive}"
                                                                >
                                                                    <div class="callout-actions" data-callout-actions role="group" aria-label="Дії з виноскою">
                                                                        <button
                                                                            class="square-btn group-callout-action callout-settings-toggle"
                                                                            type="button"
                                                                            data-callout-settings-toggle
                                                                            data-callout-management-toggle
                                                                            data-group-id="${r=>r.id}"
                                                                            aria-controls="${r=>`callout-settings-${encodeURIComponent(r.id)}`}"
                                                                            aria-haspopup="dialog"
                                                                            aria-expanded="${r=>r.calloutExpanded??!1}"
                                                                            aria-label="Налаштування виноски групи ${r=>r.name}"
                                                                            title="Налаштування виноски"
                                                                            ?disabled="${(r,e)=>e.parent.groupLayerLocked}"
                                                                            @click="${(r,e)=>{e.event.stopPropagation(),e.parent.toggleCalloutManagement(r.id)}}"
                                                                        ><span aria-hidden="true">⚙</span></button>
                                                                        <button
                                                                            class="square-btn group-callout-action"
                                                                            type="button"
                                                                            data-callout-action-anchor
                                                                            data-group-id="${r=>r.id}"
                                                                            aria-label="${r=>r.calloutPlacing?"Скасувати розміщення виноски":r.calloutAnchor?"Перемістити якір виноски":"Розмістити якір виноски"}"
                                                                            title="${r=>r.calloutPlacing?"Скасувати розміщення виноски":r.calloutAnchor?"Перемістити якір виноски":"Розмістити якір виноски"}"
                                                                            aria-pressed="${r=>r.calloutPlacing}"
                                                                            ?disabled="${(r,e)=>e.parent.groupLayerLocked||e.parent.mode!=="hex"}"
                                                                            @click="${(r,e)=>{e.event.stopPropagation(),e.parent.startCalloutPlacement(r.id)}}"
                                                                        ><span aria-hidden="true">${r=>r.calloutPlacing?"↩":"⚓︎⤏"}</span></button>
                                                                        <button
                                                                            class="square-btn group-callout-action"
                                                                            type="button"
                                                                            data-callout-action-delete
                                                                            data-group-id="${r=>r.id}"
                                                                            aria-label="Видалити виноску групи ${r=>r.name}"
                                                                            title="Видалити виноску"
                                                                            ?disabled="${(r,e)=>e.parent.groupLayerLocked}"
                                                                            @click="${(r,e)=>{e.event.stopPropagation(),e.parent.removeCallout(r.id)}}"
                                                                        ><span aria-hidden="true">🗑︎</span></button>

                                                                    </div>
                                                                    <div class="callout-anchor-position" aria-live="polite">${r=>{const e=r.calloutAnchorPlacement??r.calloutAnchor;return e?`Якір · r.${e.r}, c.${e.c}`:"Якір не розміщено"}}</div>
                                                                    <div
                                                                        id="${r=>`callout-settings-${encodeURIComponent(r.id)}`}"
                                                                        class="callout-settings-popover"
                                                                        data-callout-settings-popover
                                                                        data-group-id="${r=>r.id}"
                                                                        popover="manual"
                                                                        role="dialog"
                                                                        aria-label="Налаштування виноски групи ${r=>r.name}"
                                                                        @toggle="${(r,e)=>e.parent.handleCalloutSettingsToggle(r.id,e.event)}"
                                                                    >
                                                                        <div class="callout-settings">
                                                                            <label class="property-field">
                                                                                <span>Поріг</span>
                                                                                <input
                                                                                    class="property-input input-48"
                                                                                    type="number"
                                                                                    data-callout-threshold
                                                                                    data-group-id="${r=>r.id}"
                                                                                    min="0"
                                                                                    step="1"
                                                                                    aria-label="Поріг активації виноски"
                                                                                    :value="${r=>r.calloutThreshold}"
                                                                                    ?disabled="${(r,e)=>e.parent.groupLayerLocked}"
                                                                                    @input="${(r,e)=>e.parent.handleCalloutThresholdChange(e.event)}"
                                                                                >
                                                                            </label>
                                                                            <label class="property-field">
                                                                                <span>Алгоритм</span>
                                                                                <select
                                                                                    class="property-input"
                                                                                    data-callout-algorithm
                                                                                    data-group-id="${r=>r.id}"
                                                                                    aria-label="Алгоритм виноски"
                                                                                    :value="${r=>r.calloutAlgorithm}"
                                                                                    ?disabled="${(r,e)=>e.parent.groupLayerLocked}"
                                                                                    @change="${(r,e)=>e.parent.handleCalloutAlgorithmChange(e.event)}"
                                                                                >
                                                                                    <option value="swarm">Рій</option>
                                                                                    <option value="vertical-column">Ланцюг · вертикально</option>
                                                                                    <option value="horizontal-column">Ланцюг · горизонтально</option>
                                                                                </select>
                                                                            </label>
                                                                            <label class="callout-mixed-mode">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    data-callout-mixed-mode
                                                                                    data-group-id="${r=>r.id}"
                                                                                    ?checked="${r=>r.calloutMixedMode??!1}"
                                                                                    ?disabled="${(r,e)=>e.parent.groupLayerLocked}"
                                                                                    @change="${(r,e)=>e.parent.handleCalloutMixedModeChange(e.event)}"
                                                                                >
                                                                                <span>Змішано</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <ul class="placement-list callout-placement-list" aria-label="Позиції виноски групи ${r=>r.name}">
                                                                        ${Xr(r=>r.calloutPlacements??[],ie`
                                                                            <li
                                                                                class="placement-row"
                                                                                data-group-id="${r=>r.groupId}"
                                                                                data-placement-id="${r=>r.id}"
                                                                                data-placement-list="callout"
                                                                                tabindex="0"
                                                                                aria-disabled="${r=>r.locked}"
                                                                                role="button"
                                                                                aria-pressed="${r=>r.selected}"
                                                                                aria-current="${r=>r.selected?"true":"false"}"
                                                                                aria-label="${r=>`Позиція виноски ${r.number}, рядок ${r.r}, стовпець ${r.c}`}"
                                                                                ?data-selected="${r=>r.selected}"
                                                                            >
                                                                                <span class="placement-row-icon" aria-hidden="true">⬡</span>
                                                                                <span class="placement-row-coordinates">${r=>`r.${r.r}, c.${r.c}`}</span>
                                                                            </li>
                                                                        `)}
                                                                        <li class="group-center-empty" ?hidden="${r=>(r.calloutPlacements?.length??0)>0}">Немає позицій.</li>
                                                                    </ul>
                                                                    <div class="placement-actions">
                                                                        <button
                                                                            type="button"
                                                                            data-placement-action="add"
                                                                            data-group-id="${r=>r.id}"
                                                                            data-placement-list="callout"
                                                                            ?disabled="${(r,e)=>e.parent.placementLayerLocked||!r.calloutHasAvailableCell}"
                                                                            aria-label="Додати позицію до виноски групи ${r=>r.name}"
                                                                            title="Додати позицію"
                                                                        >➕︎</button>
                                                                    </div>
                                                                </section>
                                                            `)}
                                                        `)}
                                                        </div>
                                                        <div class="group-item-categories">
                                                            <button
                                                                class="group-navigator-select"
                                                                type="button"
                                                                ?disabled="${r=>!r.members.some(e=>e.selectable)}"
                                                                data-group-items-select
                                                                aria-pressed="${(r,e)=>e.parent.isGroupSelected(r.id)}"
                                                                aria-label="${(r,e)=>e.parent.isGroupSelected(r.id)?`Зняти вибір з усіх об’єктів групи ${r.name}`:`Вибрати всі доступні об’єкти групи ${r.name}`}"
                                                                title="${(r,e)=>e.parent.isGroupSelected(r.id)?`Зняти вибір з усіх об’єктів групи ${r.name}`:`Вибрати всі доступні об’єкти групи ${r.name}`}"
                                                                @click="${(r,e)=>{e.event.stopPropagation(),e.parent.toggleGroupSelection(r.id)}}"
                                                            >${(r,e)=>e.parent.isGroupSelected(r.id)?"☐":"🗹"}</button>
                                                            <section class="group-item-category" data-group-item-category="static" aria-label="Статичні та слотовані об’єкти">
                                                                <h4>Статичні
                                                                    <button
                                                                        class="group-navigator-select"
                                                                        type="button"
                                                                        data-group-item-category-select="static"
                                                                        ?disabled="${r=>!(r.slottedItems??[]).some(e=>e.selectable)}"
                                                                        aria-pressed="${(r,e)=>e.parent.isGroupItemCategorySelected(r.id,"static")}"
                                                                        aria-label="${(r,e)=>e.parent.getGroupItemCategorySelectionLabel(r.id,"static")}"
                                                                        title="${(r,e)=>e.parent.getGroupItemCategorySelectionLabel(r.id,"static")}"
                                                                        @click="${(r,e)=>{e.event.stopPropagation(),e.parent.toggleGroupItemCategorySelection(r.id,"static")}}"
                                                                    >${(r,e)=>e.parent.isGroupItemCategorySelected(r.id,"static")?"☐":"🗹"}</button>
                                                                </h4>
                                                                <ul class="group-item-list">
                                                                    <li ?hidden="${r=>(r.slottedItems?.length??0)>0}">Немає об’єктів.</li>
                                                                    ${Xr(r=>r.slottedItems??[],ie`
                                                                        <li
                                                                            class="group-item-row"
                                                                            title="${r=>r.key}"
                                                                            data-item-key="${r=>r.key}"
                                                                            data-selectable="${r=>r.selectable}"
                                                                            tabindex="${r=>r.selectable?"0":"-1"}"
                                                                            role="button"
                                                                            aria-disabled="${r=>!r.selectable}"
                                                                            aria-pressed="${(r,e)=>e.parentContext.parent.selectedKeys.includes(r.key)}"
                                                                            ?data-selected="${(r,e)=>e.parentContext.parent.selectedKeys.includes(r.key)}"
                                                                        >
                                                                            <span aria-hidden="true">${r=>r.icon}</span>
                                                                            <span>${r=>r.label||r.key}</span>
                                                                        </li>
                                                                    `)}
                                                                </ul>
                                                            </section>
                                                            <section class="group-item-category" data-group-item-category="fixed" aria-label="Фіксовані динамічні об’єкти">
                                                                <h4>Фіксовані
                                                                    <button
                                                                        class="group-navigator-select"
                                                                        type="button"
                                                                        data-group-item-category-select="fixed"
                                                                        ?disabled="${r=>!(r.generatedFixedItems??[]).some(e=>e.selectable)}"
                                                                        aria-pressed="${(r,e)=>e.parent.isGroupItemCategorySelected(r.id,"fixed")}"
                                                                        aria-label="${(r,e)=>e.parent.getGroupItemCategorySelectionLabel(r.id,"fixed")}"
                                                                        title="${(r,e)=>e.parent.getGroupItemCategorySelectionLabel(r.id,"fixed")}"
                                                                        @click="${(r,e)=>{e.event.stopPropagation(),e.parent.toggleGroupItemCategorySelection(r.id,"fixed")}}"
                                                                    >${(r,e)=>e.parent.isGroupItemCategorySelected(r.id,"fixed")?"☐":"🗹"}</button>
                                                                </h4>
                                                                <ul class="group-item-list">
                                                                    <li ?hidden="${r=>(r.generatedFixedItems?.length??0)>0}">Немає об’єктів.</li>
                                                                    ${Xr(r=>r.generatedFixedItems??[],ie`
                                                                        <li
                                                                            class="group-item-row"
                                                                            title="${r=>r.key}"
                                                                            data-item-key="${r=>r.key}"
                                                                            data-selectable="${r=>r.selectable}"
                                                                            tabindex="${r=>r.selectable?"0":"-1"}"
                                                                            role="button"
                                                                            aria-disabled="${r=>!r.selectable}"
                                                                            aria-pressed="${(r,e)=>e.parentContext.parent.selectedKeys.includes(r.key)}"
                                                                            ?data-selected="${(r,e)=>e.parentContext.parent.selectedKeys.includes(r.key)}"
                                                                        >
                                                                            <span aria-hidden="true">${r=>r.icon}</span>
                                                                            <span>${r=>r.label||r.key}</span>
                                                                        </li>
                                                                    `)}
                                                                </ul>
                                                            </section>
                                                            <section class="group-item-category" data-group-item-category="auto" aria-label="Автоматичні динамічні об’єкти">
                                                                <h4>Авто
                                                                    <button
                                                                        class="group-navigator-select"
                                                                        type="button"
                                                                        data-group-item-category-select="auto"
                                                                        ?disabled="${r=>!(r.generatedAutoItems??[]).some(e=>e.selectable)}"
                                                                        aria-pressed="${(r,e)=>e.parent.isGroupItemCategorySelected(r.id,"auto")}"
                                                                        aria-label="${(r,e)=>e.parent.getGroupItemCategorySelectionLabel(r.id,"auto")}"
                                                                        title="${(r,e)=>e.parent.getGroupItemCategorySelectionLabel(r.id,"auto")}"
                                                                        @click="${(r,e)=>{e.event.stopPropagation(),e.parent.toggleGroupItemCategorySelection(r.id,"auto")}}"
                                                                    >${(r,e)=>e.parent.isGroupItemCategorySelected(r.id,"auto")?"☐":"🗹"}</button>
                                                                </h4>
                                                                <ul class="group-item-list">
                                                                    <li ?hidden="${r=>(r.generatedAutoItems?.length??0)>0}">Немає об’єктів.</li>
                                                                    ${Xr(r=>r.generatedAutoItems??[],ie`
                                                                        <li
                                                                            class="group-item-row"
                                                                            title="${r=>r.key}"
                                                                            data-item-key="${r=>r.key}"
                                                                            data-selectable="${r=>r.selectable}"
                                                                            tabindex="${r=>r.selectable?"0":"-1"}"
                                                                            role="button"
                                                                            aria-disabled="${r=>!r.selectable}"
                                                                            aria-pressed="${(r,e)=>e.parentContext.parent.selectedKeys.includes(r.key)}"
                                                                            ?data-selected="${(r,e)=>e.parentContext.parent.selectedKeys.includes(r.key)}"
                                                                        >
                                                                            <span aria-hidden="true">${r=>r.icon}</span>
                                                                            <span>${r=>r.label||r.key}</span>
                                                                        </li>
                                                                    `)}
                                                                </ul>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        `)}
                                    </tbody>
                                </table>
                            </div>

                            
                </aside>
                <div
                    class="scene-operation-overlay"
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    ?hidden="${r=>r.sceneOperationMessage===null}"
                >
                    <div class="scene-operation-card">
                        <span class="scene-operation-spinner" aria-hidden="true"></span>
                        <span>${r=>r.sceneOperationMessage}</span>
                    </div>
                </div>
    </div>
`,wy=G.compose({name:"ff-kit",template:eu,styles:Qd,shadowOptions:{mode:"open"}}),ni=Me.registry;ni.get("fluent-button")||Ai.define(mh);ni.get("fluent-drawer")||At.define(Ch);ni.get("fluent-drawer-body")||Eh.define(Gh);ni.get("fluent-tab")||_s.define(pd);ni.get("fluent-tablist")||Gs.define(hd);ni.get("ff-kit")||wy.define(ni);var Sy=Object.defineProperty,pe=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Sy(e,t,o),o};const mc=Math.sqrt(3),Iy="data-ff-tri-layer-items-data",bc=5,Xo="http://www.w3.org/2000/svg";function ky(r){return`${r.r},${r.c}`}class de extends Mr{#e=null;#t=null;#r=null;#o=null;#s=null;#u=[];#a=null;#n=null;#i=!1;#c=[];#d=!1;#g=null;#l=e=>{if(this.#e||this.#t||e.isPrimary===!1||e.button!==0)return;this.#r=null;const t=this.findPlacementFromEvent(e);if(t){this.clearGroupCellHover();const a=this.createPlacementDragTargetSnapshot(t.groupId,t.placement.id);if(!a)return;const c=this.clientPointToLayerPoint(e.clientX,e.clientY),l=_(this.effectiveStep,a.placement.r,a.placement.c);this.#t={pointerId:e.pointerId,groupId:t.groupId,placementId:a.placement.id,startR:a.placement.r,startC:a.placement.c,targetSnapshot:a,cell:t.cell,label:t.label,startX:l.x,startY:l.y,grabOffsetX:l.x-c.x,grabOffsetY:l.y-c.y,clientX:e.clientX,clientY:e.clientY,desiredX:l.x,desiredY:l.y,visualX:l.x,visualY:l.y,candidate:{r:a.placement.r,c:a.placement.c}},t.cell.dataset.dragging="",this.ownerDocument.addEventListener("keydown",this.#b,!0),this.setPointerCapture(e.pointerId),e.preventDefault();return}const i=this.findItemFromEvent(e);if(!i){this.canResolveGroupEdits()&&(this.#r={pointerId:e.pointerId,startX:e.clientX,startY:e.clientY},this.updateGroupCellPreviewFromPointer(e.clientX,e.clientY));return}this.clearGroupCellHover();const o=this.clientPointToLayerPoint(e.clientX,e.clientY),s=this.readItemPosition(i),n={pointerId:e.pointerId,item:i,startX:s.x,startY:s.y,grabOffsetX:s.x-o.x,grabOffsetY:s.y-o.y,clientX:e.clientX,clientY:e.clientY,desiredX:s.x,desiredY:s.y,ghostCandidate:null,visualX:s.x,visualY:s.y,previewItem:null,previewX:0,previewY:0,previewSite:null};this.#e=n,this.ownerDocument.addEventListener("keydown",this.#b,!0),this.updateSpot(n),i.setAttribute("data-dragging",""),this.setPointerCapture(e.pointerId),e.preventDefault()};#h=e=>{const t=this.#t;if(t?.pointerId===e.pointerId){e.preventDefault(),this.updatePlacementDragVisual(t,e.clientX,e.clientY);return}const i=this.#e;if(i?.pointerId===e.pointerId){e.preventDefault(),this.updateDragVisual(i,e.clientX,e.clientY);return}const o=this.#r;o?.pointerId===e.pointerId&&Math.hypot(e.clientX-o.startX,e.clientY-o.startY)>bc&&(this.#r=null),this.canInteractWithGroups()&&this.updateGroupCellPreviewFromPointer(e.clientX,e.clientY)};#m=e=>{const t=this.#t;if(t?.pointerId===e.pointerId){e.preventDefault(),this.commitPlacementDrag(t,e.clientX,e.clientY);return}const i=this.#e;if(i?.pointerId===e.pointerId){e.preventDefault(),this.commitDrag(i,e.clientX,e.clientY);return}const o=this.#r;this.#r=null,!(!o||o.pointerId!==e.pointerId||Math.hypot(e.clientX-o.startX,e.clientY-o.startY)>bc||this.findItemFromEvent(e)||this.findPlacementFromEvent(e))&&this.handleGroupCellClick(e.clientX,e.clientY)};#p=e=>{if(this.#t?.pointerId===e.pointerId){e.preventDefault(),this.cancelActiveDrag();return}if(this.#r?.pointerId===e.pointerId){this.#r=null;return}this.#e?.pointerId===e.pointerId&&(e.preventDefault(),this.cancelActiveDrag())};#f=()=>{this.clearGroupCellHover()};#b=e=>{e.key!=="Escape"||!this.#e&&!this.#t||(e.preventDefault(),e.stopPropagation(),this.cancelActiveDrag())};#y=e=>{this.#i||this.refreshLayout()};#v=e=>{const t=e.target;t instanceof Z&&t.layoutMode==="fixed"&&t.hasAttribute("data-unplaced")&&(t.removeAttribute("data-unplaced"),t.removeAttribute("aria-hidden"),t.hidden=!1,t.tabIndex=0,t.style.removeProperty("visibility")),this.#i||this.refreshLayout()};constructor(){super(),this.step=16,this.rows=58,this.columns=51,this.mode="tri",this.fieldView="dot",this.spotView="dot",this.spotRadius=3,this.centerRadius=1.6,this.vertexRadius=.8,this.dragSnap="free",this.snapTarget="any",this.groupMode="any",this.groupEditingEnabled=!1,this.selectedGroupId=null,this.groupEditAction=null,this.showGroups=!1,this.showPlacements=!1,this.showHexOverlay=!0,this._groups=[],this._itemsData=[],this._unplacedItemsCount=0,this.rebound=!1}get itemsData(){return this._itemsData}set itemsData(e){this._itemsData=Array.isArray(e)?e.map(t=>({...t})):[],this.syncItemsData()}removeItems(e){const t=new Set;for(const n of e)n instanceof Z&&n.parentElement===this&&t.add(n);if(t.size===0)return 0;const i=this.getHexItems();this.isConnected&&i.some(n=>t.has(n))&&(this.#g=i.filter(n=>!t.has(n)));const o=new Set,s=new Set;for(const n of this.#c)t.has(n.item)&&(o.add(n.item),s.add(n.data));for(const n of t)n.remove();return o.size>0&&(this._itemsData=this._itemsData.filter(n=>!s.has(n)),this.#c=this.#c.filter(({item:n})=>!o.has(n)),this.#d=!0),this.refreshLayout(),t.size}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerdown",this.#l),this.addEventListener("pointermove",this.#h),this.addEventListener("pointerup",this.#m),this.addEventListener("pointerleave",this.#f),this.addEventListener("pointercancel",this.#p),this.addEventListener("lostpointercapture",this.#p),this.addEventListener(po,this.#y),this.addEventListener(si,this.#v),this.refreshLayout()}disconnectedCallback(){this.cancelActiveDrag(),this.clearGroupCellHover(),this.removeEventListener("pointerdown",this.#l),this.removeEventListener("pointermove",this.#h),this.removeEventListener("pointerup",this.#m),this.removeEventListener("pointerleave",this.#f),this.removeEventListener("pointercancel",this.#p),this.removeEventListener("lostpointercapture",this.#p),this.removeEventListener(po,this.#y),this.removeEventListener(si,this.#v),super.disconnectedCallback()}stepChanged(e,t){if(t===null||!Number.isFinite(t)||t<=0){this.step!==48&&(this.step=48);return}this.refreshLayout()}rowsChanged(e,t){if(t===null||!Number.isFinite(t)||t<0){this.rows=1;return}if(!Number.isInteger(t)){this.rows=Math.floor(t);return}this.refreshLayout()}columnsChanged(e,t){if(t===null||!Number.isFinite(t)||t<0){this.columns=1;return}if(!Number.isInteger(t)){this.columns=Math.floor(t);return}this.refreshLayout()}modeChanged(e,t){if(t!=="tri"&&t!=="hex"){this.mode="tri";return}this.refreshLayout()}fieldViewChanged(e,t){if(t!=="dot"&&t!=="full"&&t!=="spot"){this.fieldView="dot";return}this.refreshLayout()}spotViewChanged(e,t){if(t!=="dot"&&t!=="full"){this.spotView="dot";return}this.refreshLayout()}spotRadiusChanged(){this.#e&&this.updateSpot(this.#e)}centerRadiusChanged(e,t){if(t===null||!Number.isFinite(t)||t<=0){this.centerRadius!==3.2&&(this.centerRadius=3.2);return}this.refreshLayout()}vertexRadiusChanged(e,t){if(t===null||!Number.isFinite(t)||t<=0){this.vertexRadius!==1.4&&(this.vertexRadius=1.4);return}this.refreshLayout()}dragSnapChanged(e,t){if(t!=="free"&&t!=="live"){this.dragSnap="free";return}this.refreshLayout()}snapTargetChanged(e,t){if(t!=="any"&&t!=="center"&&t!=="vertex"){this.snapTarget="any";return}this.refreshLayout()}reboundChanged(){this.refreshLayout()}groupModeChanged(e,t){if(t!=="any"&&t!=="group"){this.groupMode="any";return}this.refreshLayout()}groupEditingEnabledChanged(e,t){if(this.resetGroupEditIndex(),!this.groupEditingEnabled){this.clearGroupCellHover();return}this.updateGroupCellPreviewFromStoredPointer()}selectedGroupIdChanged(){}groupEditActionChanged(e,t){if(t!==null&&t!=="add"&&t!=="remove"){this.groupEditAction=null;return}t===null&&(this.#r=null),this.resetGroupEditIndex(),this.updateGroupCellPreviewFromStoredPointer()}groupsChanged(){this.refreshLayout()}showGroupsChanged(){this.updateGroupOverlay(this.effectiveStep)}showPlacementsChanged(){!this.showPlacements&&this.#t&&this.cancelActiveDrag(),this.updatePlacementOverlay(this.effectiveStep)}showHexOverlayChanged(){this.refreshLayout()}itemsChanged(){const e=this.#g;this.#g=null;const t=this.getHexItems();e&&e.length===t.length&&e.every((i,o)=>i===t[o])||this.refreshLayout()}layoutSwarm(e){const t=this.normalizePlacementCount(e),i=this.getActiveFixedItems(),o=new Set,s=i.map(l=>this.readItemFootprint(l));for(const l of i)typeof l.r=="number"&&Number.isInteger(l.r)&&typeof l.c=="number"&&Number.isInteger(l.c)&&o.add(`${l.r},${l.c}`);const n=[],a=new Set;let c=0;for(const l of this.groups??[]){if(!l||typeof l.id!="string"||l.id.length===0||a.has(l.id))continue;a.add(l.id);const d=this.getValidGroupCenters(l),u=this.getGroupCentroid(d),p=u?d.map(g=>{const m=_(this.effectiveStep,g.r,g.c);return{center:g,distance:(m.x-u.x)**2+(m.y-u.y)**2}}).sort((g,m)=>g.distance-m.distance||this.compareGroupCenters(g.center,m.center)).map(g=>g.center):[],h=[];for(const g of p){if(h.length>=t)break;const m=`${g.r},${g.c}`;if(o.has(m))continue;const b=this.createPlacementFootprint(g);s.some(x=>this.footprintsOverlap(b,x))||(h.push(g),o.add(m),s.push(b))}const f=this.createGroupPlacements(l,h);this.groupPlacementsEqual(l.placements,f)||n.push({groupId:l.id,placements:f}),l.placements=f,c+=f.length}for(const l of n)this.dispatchPlacementsChange(l.groupId,l.placements);return c}layoutColumn(e){if(this.mode!=="hex")return 0;const t=this.normalizePlacementCount(e),i=this.getActiveFixedItems(),o=new Set;for(const c of i)typeof c.r=="number"&&Number.isInteger(c.r)&&typeof c.c=="number"&&Number.isInteger(c.c)&&o.add(`${c.r},${c.c}`);const s=[],n=new Set;let a=0;for(const c of this.groups??[]){if(!c||typeof c.id!="string"||c.id.length===0||n.has(c.id))continue;n.add(c.id);const l=this.createColumnPlacementCoordinates(c,t,i,o);for(const u of l)o.add(`${u.r},${u.c}`);const d=this.createGroupPlacements(c,l);this.groupPlacementsEqual(c.placements,d)||s.push({groupId:c.id,placements:d}),c.placements=d,a+=d.length}for(const c of s)this.dispatchPlacementsChange(c.groupId,c.placements);return a}updateGroupPlacements(e,t){const i=(this.groups??[]).find(s=>s.id===e);if(!i)return[];const o=this.normalizeGroupPlacements(i,t);return i.placements=o,this.updateGroupEditPlacementIndex(),this.updateGroupCellPreviewFromStoredPointer(),this.updatePlacementOverlay(this.effectiveStep),o.map(s=>({...s}))}refreshGroupOverlays(){const e=this.mode==="hex"?Ce(this.effectiveRows,this.effectiveColumns):null;this.updateGroupEditOwnershipIndex(e);const t=this.effectiveStep;this.updateGroupOverlay(t),this.updatePlacementOverlay(t),this.updateGroupCellPreviewFromStoredPointer()}LayoutItems(){return this.layoutItems(!1)}LayoutItemsByPlacements(){return this.layoutItems(!0)}layoutItems(e){const t=this.getDirectHexItems(),i=this.#c.filter(({item:v})=>v.parentElement===this),o=new Map;for(const v of i)o.set(v.item,v);const s=new Map;t.forEach((v,P)=>s.set(v,P));const n=t.filter(v=>Ct(v.layoutMode)&&v.layoutMode==="fixed"),a=t.filter(v=>Ct(v.layoutMode)&&v.layoutMode==="auto"),c=this.groups??[],l=new Map;if(e)for(const v of c){if(typeof v.id!="string"||v.id.length===0||l.has(v.id))continue;const P=this.getValidGroupPlacements(v);P.length>0&&l.set(v.id,P)}const d=e?a.filter(v=>l.has(v.groupId)):a,u=e?a.filter(v=>!l.has(v.groupId)):[],p=new Set,h=[],f=(v,P)=>{const L={x:v.x,y:v.y},O={x:P.x,y:P.y};return Math.max(ht(L,v.radius,O,P.radius),ht(O,P.radius,L,v.radius))>1e-8},g=(v,P)=>{const L=this.createPositionSnapshot(P.r,P.c,this.numberOrZero(v.offsetX),this.numberOrZero(v.offsetY));return{x:L.x,y:L.y,radius:v.getOuterRadius(this.effectiveStep)}},m=e?[...n,...u]:n;for(const v of m)if(!v.hasAttribute("data-unplaced")&&typeof v.r=="number"&&Number.isInteger(v.r)&&typeof v.c=="number"&&Number.isInteger(v.c)){p.add(`${v.r},${v.c}`);const P=this.readItemPosition(v);h.push({x:P.x,y:P.y,radius:v.getOuterRadius(this.effectiveStep)})}let b=0,x=0;const y=new Set,C=this.#i;this.#i=!0;try{for(const v of d)this.markDataItemUnplaced(v);for(const v of c){if(y.has(v.id)||e&&v.id.length===0)continue;const P=e?l.get(v.id):void 0;if(e&&!P)continue;y.add(v.id);const L=this.getOrderedAutoItems(v.id,d,o,s);if(L.length===0)continue;const O=this.getValidGroupCenters(v),V=this.getGroupCentroid(O);if(!V){x+=L.length;continue}const ge=e?P??[]:Array.isArray(v.placements)?this.getValidGroupPlacements(v):null,re=ge?new Map(ge.map((X,se)=>[`${X.r},${X.c}`,se])):null,w=(ge?ge.map(({r:X,c:se})=>({r:X,c:se})):O).map(X=>({center:X,point:_(this.effectiveStep,X.r,X.c)})).filter(({center:X})=>!p.has(`${X.r},${X.c}`)).map(X=>({...X,distance:(X.point.x-V.x)**2+(X.point.y-V.y)**2})).sort((X,se)=>re?(re.get(`${X.center.r},${X.center.c}`)??Number.MAX_SAFE_INTEGER)-(re.get(`${se.center.r},${se.center.c}`)??Number.MAX_SAFE_INTEGER):X.distance-se.distance||this.compareGroupCenters(X.center,se.center)),D=[],K=X=>{const xe=X.slice().sort((ke,Oe)=>re?(re.get(`${ke.center.r},${ke.center.c}`)??Number.MAX_SAFE_INTEGER)-(re.get(`${Oe.center.r},${Oe.center.c}`)??Number.MAX_SAFE_INTEGER):this.compareGroupCenters(ke.center,Oe.center)).map((ke,Oe)=>g(L[Oe],ke.center));for(let ke=0;ke<xe.length;ke++){const Oe=xe[ke];if(h.some(E=>f(Oe,E)))return!1;for(let E=ke+1;E<xe.length;E++)if(f(Oe,xe[E]))return!1}return!0},ye=ge&&ge.length>L.length?Math.floor((ge.length-L.length)/2):0,Ie=ye+Math.min(L.length,ge?.length??0),je=w.slice().sort((X,se)=>{if(re){const xe=re.get(`${X.center.r},${X.center.c}`)??Number.MAX_SAFE_INTEGER,ke=re.get(`${se.center.r},${se.center.c}`)??Number.MAX_SAFE_INTEGER,Oe=xe>=ye&&xe<Ie,E=ke>=ye&&ke<Ie;if(Oe!==E)return Oe?-1:1;if(Oe)return xe-ke}return X.distance-se.distance||this.compareGroupCenters(X.center,se.center)});for(const X of je){const se=[...D,X];if(K(se)&&(D.push(X),D.length===L.length))break}D.sort((X,se)=>re?(re.get(`${X.center.r},${X.center.c}`)??Number.MAX_SAFE_INTEGER)-(re.get(`${se.center.r},${se.center.c}`)??Number.MAX_SAFE_INTEGER):this.compareGroupCenters(X.center,se.center));for(let X=0;X<L.length;X++){const se=D[X]?.center;if(!se){x++;continue}const xe=L[X];xe.r=se.r,xe.c=se.c,xe.hidden=!1,xe.style.removeProperty("visibility"),xe.tabIndex=0,xe.removeAttribute("aria-hidden"),xe.removeAttribute("data-unplaced"),p.add(`${se.r},${se.c}`),h.push(g(xe,se)),b++}}for(const v of d)y.has(v.groupId)||(this.markDataItemUnplaced(v),x++);if(!e){const v=new Set(p);for(const P of a){if(!P.hasAttribute("data-unplaced"))continue;const L=c.find(V=>V.id===P.groupId);if(!L)continue;const O=this.getValidGroupCenters(L).find(V=>!v.has(`${V.r},${V.c}`));O&&(P.r=O.r,P.c=O.c,v.add(`${O.r},${O.c}`))}}}finally{this.#i=C}this.unplacedItemsCount=e?a.filter(v=>v.hasAttribute("data-unplaced")).length:x,this.refreshLayout();const N=this.#d;return this.#d=!1,this.dispatchEvent(new CustomEvent(Pi,{detail:{placedCount:b,unplacedCount:x,itemsDataChanged:N},bubbles:!0,composed:!0})),x}get effectiveStep(){return typeof this.step=="number"&&Number.isFinite(this.step)&&this.step>0?this.step:48}get effectiveCenterRadius(){return typeof this.centerRadius=="number"&&Number.isFinite(this.centerRadius)&&this.centerRadius>0?this.centerRadius:3.2}get effectiveVertexRadius(){return typeof this.vertexRadius=="number"&&Number.isFinite(this.vertexRadius)&&this.vertexRadius>0?this.vertexRadius:1.4}get effectiveRows(){return typeof this.rows=="number"&&Number.isFinite(this.rows)?Math.max(0,Math.floor(this.rows)):1}get effectiveColumns(){return typeof this.columns=="number"&&Number.isFinite(this.columns)?Math.max(0,Math.floor(this.columns)):1}normalizePlacementCount(e){return Number.isFinite(e)?Math.max(1,Math.floor(e)):1}getOrderedAutoItems(e,t,i,o){return t.filter(s=>s.groupId===e).slice().sort((s,n)=>{const a=i.get(s),c=i.get(n);return a&&c?c.data.value-a.data.value||a.index-c.index:a?-1:c?1:(o.get(s)??0)-(o.get(n)??0)})}getActiveFixedItems(){return this.getDirectHexItems().filter(e=>Ct(e.layoutMode)&&e.layoutMode==="fixed"&&!e.hasAttribute("data-unplaced"))}getGroupCentroid(e){if(e.length===0)return null;const t=e.reduce((i,o)=>{const s=_(this.effectiveStep,o.r,o.c);return{x:i.x+s.x,y:i.y+s.y}},{x:0,y:0});return{x:t.x/e.length,y:t.y/e.length}}createPlacementFootprint(e){return{..._(this.effectiveStep,e.r,e.c),radius:this.effectiveStep}}readItemFootprint(e){const t=this.readItemPosition(e);return{x:t.x,y:t.y,radius:e.getOuterRadius(this.effectiveStep)}}footprintsOverlap(e,t){const i={x:e.x,y:e.y},o={x:t.x,y:t.y};return Math.max(ht(i,e.radius,o,t.radius),ht(o,t.radius,i,e.radius))>1e-8}isPlacementCenterBlockedByFixed(e,t){for(const o of t)if(o.r===e.r&&o.c===e.c)return!0;const i=this.createPlacementFootprint(e);return t.some(o=>this.footprintsOverlap(i,this.readItemFootprint(o)))}createColumnPlacementCoordinates(e,t,i,o){const s=this.getValidGroupCenters(e),n=this.getGroupCentroid(s);if(!n)return[];const a=s.filter(y=>!o.has(`${y.r},${y.c}`)&&!this.isPlacementCenterBlockedByFixed(y,i));if(a.length===0)return[];const c=new Map(a.map(y=>[`${y.r},${y.c}`,y])),l=s.reduce((y,C)=>({minR:Math.min(y.minR,C.r),maxR:Math.max(y.maxR,C.r),minC:Math.min(y.minC,C.c),maxC:Math.max(y.maxC,C.c)}),{minR:Number.POSITIVE_INFINITY,maxR:Number.NEGATIVE_INFINITY,minC:Number.POSITIVE_INFINITY,maxC:Number.NEGATIVE_INFINITY}),d=l.maxR-l.minR>l.maxC-l.minC,u=new Map;for(const y of a){const C=`${y.r},${y.c}`;u.set(C,wr(y).filter(N=>c.has(`${N.r},${N.c}`)).length)}const p=y=>{const C=_(this.effectiveStep,y.r,y.c),N=Math.abs(d?C.x-n.x:C.y-n.y),v=(C.x-n.x)**2+(C.y-n.y)**2,P=u.get(`${y.r},${y.c}`)??0;return N**2*4+v*.15+(6-P)*this.effectiveStep**2*.5},h=(y,C)=>p(y)-p(C)||this.compareGroupCenters(y,C),f=a.sort(h)[0];if(!f)return[];const g=[f],m=new Set([`${f.r},${f.c}`]),b=new Map,x=y=>{for(const C of wr(y)){const N=`${C.r},${C.c}`,v=c.get(N);v&&!m.has(N)&&b.set(N,v)}};for(x(f);g.length<t&&b.size>0;){const y=Array.from(b.values()).sort(h)[0];if(!y)break;const C=`${y.r},${y.c}`;b.delete(C),!m.has(C)&&(g.push(y),m.add(C),x(y))}return g}createGroupPlacements(e,t,i=e.placements){const o=Array.isArray(i)?i:[],s=new Map;for(const l of o){if(!l||!Number.isInteger(l.r)||!Number.isInteger(l.c))continue;const d=`${l.r},${l.c}`;s.has(d)||s.set(d,l)}const n=t.map(l=>s.get(`${l.r},${l.c}`)),a=new Set;for(const l of o)typeof l?.id=="string"&&l.id.length>0&&a.add(l.id);for(const l of this.groups??[])for(const d of l.placements??[])typeof d.id=="string"&&d.id.length>0&&a.add(d.id);const c=new Set;return t.map((l,d)=>{const u=n[d];let p=typeof u?.id=="string"&&u.id.length>0&&!c.has(u.id)?u.id:"";return p.length===0&&(p=this.createPlacementId(a)),a.add(p),c.add(p),{id:p,r:l.r,c:l.c}})}createPlacementId(e){const t=this.ownerDocument.defaultView?.crypto;if(typeof t?.randomUUID=="function"){const s=`placement-${t.randomUUID()}`;if(!e.has(s))return s}const i=Date.now().toString(36);let o=0;for(;;){const s=Math.random().toString(36).slice(2),n=`placement-${i}-${s}-${o++}`;if(!e.has(n))return n}}normalizeGroupPlacements(e,t){const i=this.getActiveFixedItems(),o=new Set(this.getValidGroupCenters(e).map(d=>`${d.r},${d.c}`)),s=this.getOccupiedPlacementCells(e),n=new Set,a=new Set,c=[],l=[];for(const d of Array.isArray(t)?t:[]){if(!d||!Number.isInteger(d.r)||!Number.isInteger(d.c))continue;const u=`${d.r},${d.c}`;if(!o.has(u)||n.has(u)||s.has(u))continue;const p={r:d.r,c:d.c};if(this.isPlacementCenterBlockedByFixed(p,i))continue;const h=typeof d.id=="string"&&d.id.length>0&&!a.has(d.id)?d.id:"";h&&a.add(h),n.add(u),c.push(p),l.push({id:h,r:d.r,c:d.c})}return this.createGroupPlacements(e,c,l)}groupPlacementsEqual(e,t){return Array.isArray(e)&&e.length===t.length&&e.every((i,o)=>i.id===t[o].id&&i.r===t[o].r&&i.c===t[o].c)}dispatchPlacementsChange(e,t){this.dispatchEvent(new CustomEvent(_r,{detail:{groupId:e,placements:t.map(i=>({...i}))},bubbles:!0,composed:!0}))}getHexItems(){return(this.items??[]).filter(e=>e instanceof Z&&e.parentElement===this)}getDirectHexItems(){return Array.from(this.children).filter(e=>e instanceof Z)}syncItemsData(){const e=new Map;for(const s of this.#c){if(s.item.parentElement!==this)continue;const n=`${s.data.typeId}\0${s.data.groupId}`,a=e.get(n)??[];a.push(s),e.set(n,a)}const t=new Map,i=[],o=[];this._itemsData.forEach((s,n)=>{const a=`${s.typeId}\0${s.groupId}`,c=t.get(a)??0;t.set(a,c+1);const l=c===0?"":`-${c}`,d=e.get(a)?.shift(),u=d?.item??this.ownerDocument.createElement("ff-hex-item"),p=Sa[s.typeId]??"",h=(this.groups??[]).find(x=>x.id===s.groupId),f=`mock-${encodeURIComponent(s.groupId)}-${s.typeId}${l}`,g=typeof s.r=="number"&&Number.isInteger(s.r),m=typeof s.c=="number"&&Number.isInteger(s.c);let b=d?.initialPositionPending??!1;if(u.setAttribute(Iy,""),d)u.layoutMode!=="fixed"&&(g&&(u.r=s.r),m&&(u.c=s.c)),g&&m&&(b=!1);else{const x=this.getInitialItemPosition(s.groupId);u.setAttribute("layout-mode","auto"),u.r=g?s.r:x.r,u.c=m?s.c:x.c,u.setAttribute("tabindex","0"),u.setAttribute("aria-selected","false"),b=!!s.groupId&&(!g||!m)&&(!h||this.getValidGroupCenters(h).length===0)}u.dataset.node=f,u.dataset.typeId=String(s.typeId),u.dataset.value=String(s.value),u.setAttribute("role","option"),u.setAttribute("aria-label",`${h?.name??s.groupId}, type ${s.typeId}, value ${s.value}, ${p}`),u.setAttribute("group-id",s.groupId),u.setAttribute("shape","hex"),u.setAttribute("icon",p),u.setAttribute("label",String(s.value)),u.setAttribute("label-position","right"),u.setAttribute("s-percent","100"),u.setAttribute("fill-enabled","false"),u.setAttribute("icon-size","12"),u.setAttribute("icon-size-unit","px"),u.setAttribute("label-font-size","10"),u.style.setProperty("--ff-hex-item-color","#203a34"),u.style.setProperty("--ff-hex-item-background","#ffffff"),u.style.setProperty("--ff-hex-item-border-color","#176d5d"),u.style.setProperty("--ff-hex-item-border-width","0px"),u.style.setProperty("--ff-hex-item-z-index",String(n+6)),o.push(u),i.push({data:s,item:u,index:n,initialPositionPending:b})}),this.#c=i;for(const s of e.values())for(const{item:n}of s)n.remove();for(let s=o.length-1;s>=0;s--){const n=o[s],a=o[s+1]??null;(n.parentElement!==this||n.nextSibling!==a)&&this.insertBefore(n,a)}this.#d=!0,this.isConnected&&this.refreshLayout()}getInitialItemPosition(e){const t=(this.groups??[]).find(c=>c.id===e);if(!t)return{r:0,c:0};const i=this.getValidGroupCenters(t),o=this.getGroupCentroid(i);if(o)return vi(this.effectiveStep,o.x,o.y,i)??i[0]??{r:0,c:0};const s=Array.isArray(t.centers)?t.centers.filter(c=>Number.isInteger(c?.r)&&Number.isInteger(c?.c)):[],a=this.getGroupCentroid(s)??_(this.effectiveStep,0,0);return xs(this.effectiveStep,a.x,a.y,this.effectiveRows,this.effectiveColumns,this.mode,"center")??{r:0,c:0}}initializePendingItemPositions(){const e=this.#i;this.#i=!0;try{for(const t of this.#c){if(!t.initialPositionPending||t.item.parentElement!==this)continue;if(t.item.locked||t.item.layoutMode!=="auto"){t.initialPositionPending=!1;continue}const i=(this.groups??[]).find(a=>a.id===t.data.groupId),o=i?this.getValidGroupCenters(i):[],s=this.getGroupCentroid(o);if(!s)continue;const n=vi(this.effectiveStep,s.x,s.y,o)??o[0];n&&(typeof t.data.r=="number"&&Number.isInteger(t.data.r)||(t.item.r=n.r),typeof t.data.c=="number"&&Number.isInteger(t.data.c)||(t.item.c=n.c),t.initialPositionPending=!1)}}finally{this.#i=e}}markDataItemUnplaced(e){e.hidden=!0,e.style.visibility="hidden",e.tabIndex=-1,e.setAttribute("aria-hidden","true"),e.setAttribute("data-unplaced","")}compareGroupCenters(e,t){const i=_(this.effectiveStep,e.r,e.c),o=_(this.effectiveStep,t.r,t.c);return i.y-o.y||i.x-o.x||e.r-t.r||e.c-t.c}findItemFromEvent(e){const t=e.composedPath().find(i=>i instanceof Z);return t&&this.getHexItems().includes(t)?t:null}findPlacementFromEvent(e){const t=e.composedPath().find(c=>c instanceof SVGPathElement&&c.classList.contains("placement-cell")),i=t?.nextElementSibling,o=t?.dataset.groupId,s=t?.dataset.placementId;if(!t||!o||!s||!i||i.localName!=="text"||i.getAttribute("data-placement-id")!==s)return null;const n=(this.groups??[]).find(c=>c.id===o),a=n?this.getValidGroupPlacements(n).find(c=>c.id===s):void 0;return n&&a?{groupId:o,placement:a,cell:t,label:i}:null}refreshLayout(){if(!this.isConnected)return;this.initializePendingItemPositions();const e=this.effectiveStep,t=this.effectiveRows,i=this.effectiveColumns,o=this.getHexItems(),s=this.mode==="hex"?Ce(t,i):null;this.updateGroupEditOwnershipIndex(s);let n=e;for(const g of o)n=Math.max(n,g.getOuterRadius(e));const a=t>0&&i>0;let c=a?e*(i-1+(t-1)/2):0;const l=e*mc/2;let d=a?l*(t-1):0;if(s){c=0,d=0;for(const g of s.centers){const m=_(e,g.r,g.c);c=Math.max(c,m.x),d=Math.max(d,m.y)}}const u=n+(s?1:0),p=n*mc/2+(s?1:0);this.style.setProperty("--ff-tri-layer-step",`${e}px`),this.style.setProperty("--ff-tri-layer-row-height",`${l}px`),this.style.setProperty("--ff-tri-layer-grid-period",`${l*2}px`),this.style.setProperty("--ff-tri-layer-half-step",`${e/2}px`),this.style.setProperty("--ff-tri-layer-padding-x",`${u}px`),this.style.setProperty("--ff-tri-layer-padding-y",`${p}px`);const h=this.surface?.querySelector("slot");h&&(h.style.transform=`translate(${-u}px, ${-p}px)`),this.style.setProperty("--ff-tri-layer-surface-width",`${Math.max(1,c+1)}px`),this.style.setProperty("--ff-tri-layer-surface-height",`${Math.max(1,d+1)}px`),this.style.setProperty("--ff-tri-layer-width",`${Math.max(1,c+u*2+1)}px`),this.style.setProperty("--ff-tri-layer-height",`${Math.max(1,d+p*2+1)}px`),this.updateGroupCellPreviewFromStoredPointer(),this.updateHexFieldPaths(e,s),this.updateGroupOverlay(e),this.updatePlacementOverlay(e);for(const g of o)this.renderItemFromAttributes(g);const f=this.#e;if(!f){this.clearSpot();return}if(!o.includes(f.item)){this.cancelActiveDrag();return}this.updateDragVisual(f,f.clientX,f.clientY)}updateHexFieldPaths(e,t){const i=this.hexFieldElement;i?.setAttribute("data-field-view",this.fieldView),i?.setAttribute("data-spot-view",this.spotView),i&&(i.style.display=this.showHexOverlay?"":"none");const o=this.hexFieldVerticesElement,s=this.hexFieldCentersElement,n=this.hexFieldLinesElement;if(this.mode!=="hex"||!t||t.centers.length===0){o?.setAttribute("d",""),s?.setAttribute("d",""),n?.setAttribute("d","");return}const a=[],c=[],l=[],d=this.effectiveVertexRadius,u=this.effectiveCenterRadius,p=(h,f,g)=>{const m=g*2;return`M ${h-g} ${f} a ${g} ${g} 0 1 0 ${m} 0 a ${g} ${g} 0 1 0 ${-m} 0`};for(const h of t.centers){const f=_(e,h.r,h.c);c.push(p(f.x,f.y,u)),l.push(this.createHexCellPath(e,h))}for(const h of t.vertices){const f=_(e,h.r,h.c);a.push(p(f.x,f.y,d))}o?.setAttribute("d",a.join(" ")),s?.setAttribute("d",c.join(" ")),n?.setAttribute("d",l.join(" "))}updateGroupOverlay(e){const t=this.groupFieldElement,i=this.groupShapesElement;if(!t||!i)return;const o=this.groups??[],s=this.showGroups&&o.length>0;if(t.toggleAttribute("data-visible",s),i.replaceChildren(),!!s)for(const n of o){if(!n||typeof n.id!="string"||n.id.length===0)continue;const a=this.getValidGroupCenters(n);if(a.length===0)continue;const c=this.mode==="hex"?qd(e,a):Kd(e,a);if(!c.fillPath&&!c.borderPath)continue;const l=this.ownerDocument.createElementNS("http://www.w3.org/2000/svg","g");l.setAttribute("data-group-id",n.id);const d=this.ownerDocument.createElementNS("http://www.w3.org/2000/svg","title");if(d.textContent=n.name??n.id,l.append(d),c.fillPath){const u=this.ownerDocument.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("class","group-fill"),u.setAttribute("d",c.fillPath),u.setAttribute("fill",n.fillColor||"transparent"),u.setAttribute("fill-opacity","0.2"),l.append(u)}if(c.borderPath){const u=this.ownerDocument.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("class","group-border"),u.setAttribute("d",c.borderPath),u.setAttribute("stroke",n.borderColor||"transparent"),u.setAttribute("stroke-width",String(Number.isFinite(n.borderWidth)&&n.borderWidth>=0?n.borderWidth:0)),l.append(u)}i.append(l)}}updatePlacementOverlay(e){const t=this.placementOverlayElement,i=this.placementShapesElement;if(!t||!i)return;t.style.position="absolute",t.style.inset="0",t.style.width="100%",t.style.height="100%",t.style.overflow="visible",t.style.zIndex="0",t.style.pointerEvents="none";const o=this.groups??[],s=this.#t;let n=!1;const a=this.showPlacements&&o.some(l=>this.getValidGroupPlacements(l).length>0);if(t.toggleAttribute("data-visible",a),t.style.display=a?"block":"none",i.replaceChildren(),!a){s&&this.cancelActiveDrag();return}const c="http://www.w3.org/2000/svg";for(const l of o)this.getValidGroupPlacements(l).forEach((u,p)=>{const h=s?.groupId===l.id&&s.placementId===u.id,f=h&&s?{x:s.visualX,y:s.visualY}:_(e,u.r,u.c),g=this.ownerDocument.createElementNS(c,"path");g.setAttribute("class","placement-cell"),g.setAttribute("d",this.createHexCellPathAt(e,f)),g.setAttribute("fill","#ffffff"),g.setAttribute("fill-opacity","0.78"),g.setAttribute("stroke","#176d5d"),g.setAttribute("stroke-width",String(Math.max(1,e*.035))),g.setAttribute("stroke-linejoin","round"),g.setAttribute("vector-effect","non-scaling-stroke"),g.setAttribute("pointer-events","visiblePainted"),g.dataset.groupId=l.id,g.dataset.placementId=u.id,g.dataset.placementIndex=String(p+1),g.dataset.r=String(u.r),g.dataset.c=String(u.c),h&&(g.dataset.dragging="");const m=this.ownerDocument.createElementNS(c,"text");m.setAttribute("class","placement-label"),m.setAttribute("x",String(f.x)),m.setAttribute("y",String(f.y)),m.setAttribute("fill","#153d36"),m.setAttribute("font-size",String(Math.max(8,e*.3))),m.setAttribute("font-weight","600"),m.setAttribute("text-anchor","middle"),m.setAttribute("dominant-baseline","central"),m.setAttribute("pointer-events","none"),m.dataset.placementId=u.id,m.textContent=String(p+1),i.append(g,m),h&&s&&(s.cell=g,s.label=m,n=!0)});s&&!n&&this.cancelActiveDrag()}updatePlacementDragVisual(e,t,i,o=!1){e.clientX=t,e.clientY=i;const s=e.targetSnapshot,n=this.clientPointToLayerPoint(t,i),a={x:n.x+e.grabOffsetX,y:n.y+e.grabOffsetY},c=s.groupCenters.length>0?vr(this.effectiveStep,this.mode,a,s.groupCenters):null;if(!c){e.candidate=null,e.visualX=e.startX,e.visualY=e.startY,this.updatePlacementDragNodes(e);return}if(e.desiredX=c.x,e.desiredY=c.y,e.candidate=this.dragSnap==="live"||o?this.findNearestPlacementSite(s,e.desiredX,e.desiredY):null,this.dragSnap==="live"&&e.candidate){const l=_(this.effectiveStep,e.candidate.r,e.candidate.c);e.visualX=l.x,e.visualY=l.y}else e.visualX=e.desiredX,e.visualY=e.desiredY;this.updatePlacementDragNodes(e)}updatePlacementDragNodes(e){const t=this.placementShapesElement;return!t?.contains(e.cell)||!t.contains(e.label)?!1:(e.cell.setAttribute("d",this.createHexCellPathAt(this.effectiveStep,{x:e.visualX,y:e.visualY})),e.label.setAttribute("x",String(e.visualX)),e.label.setAttribute("y",String(e.visualY)),!0)}createPlacementDragTargetSnapshot(e,t){const i=(this.groups??[]).find(y=>y.id===e);if(!i)return null;const o=this.mode==="hex"?new Set(Ce(this.effectiveRows,this.effectiveColumns).centers.map(y=>`${y.r},${y.c}`)):null,s=new Map,n=y=>{const C=s.get(y);if(C)return C;const N=new Map;for(const P of Array.isArray(y.centers)?y.centers:[]){if(!Number.isInteger(P?.r)||!Number.isInteger(P?.c))continue;const L=`${P.r},${P.c}`;(o===null?Fr(P.r,P.c,this.effectiveRows,this.effectiveColumns,this.mode,"center"):o.has(L))&&N.set(L,{r:P.r,c:P.c})}const v=Array.from(N.values());return s.set(y,v),v},a=new Map,c=y=>{const C=a.get(y);if(C)return C;const N=new Set(n(y).map(O=>`${O.r},${O.c}`)),v=new Set,P=new Set,L=[];for(const O of Array.isArray(y.placements)?y.placements:[]){if(!O||typeof O.id!="string"||O.id.length===0||!Number.isInteger(O.r)||!Number.isInteger(O.c))continue;const V=`${O.r},${O.c}`;!N.has(V)||v.has(O.id)||P.has(V)||(v.add(O.id),P.add(V),L.push({id:O.id,r:O.r,c:O.c}))}return a.set(y,L),L},l=n(i),d=c(i),u=d.find(y=>y.id===t);if(!u||l.length===0)return null;const p=new Set(l.map(y=>`${y.r},${y.c}`)),h=new Set,f=new Set;for(const y of this.groups??[])for(const C of c(y)){if(y===i&&C.id===u.id)continue;const N=`${C.r},${C.c}`;h.add(N),y!==i&&f.add(N)}const g=this.effectiveStep,m=l.map(y=>{const C=_(g,y.r,y.c);return{...y,key:`${y.r},${y.c}`,x:C.x,y:C.y}}),b=this.getActiveFixedItems().map(y=>({r:y.r,c:y.c,footprint:this.readItemFootprint(y)})),x=new Set;for(const y of m){const C={x:y.x,y:y.y,radius:g};b.some(N=>N.r===y.r&&N.c===y.c||this.footprintsOverlap(C,N.footprint))&&x.add(y.key)}return{group:i,placements:d,placement:u,groupCenters:l,groupCenterKeys:p,sites:m,occupiedPlacementKeys:h,occupiedOtherGroupPlacementKeys:f,blockedSiteKeys:x}}findNearestPlacementSite(e,t,i){let o=null,s=Number.POSITIVE_INFINITY;for(const n of e.sites){if(e.occupiedPlacementKeys.has(n.key)||e.blockedSiteKeys.has(n.key))continue;const a=(n.x-t)**2+(n.y-i)**2;a>s||a===s&&o&&this.compareGroupCenters(n,o)>=0||(o=n,s=a)}return o}commitPlacementDrag(e,t,i){this.updatePlacementDragVisual(e,t,i,!0);const o=this.createPlacementDragTargetSnapshot(e.groupId,e.placementId),s=this.clientPointToLayerPoint(t,i),n={x:s.x+e.grabOffsetX,y:s.y+e.grabOffsetY},a=o?vr(this.effectiveStep,this.mode,n,o.groupCenters):null,c=o&&a?this.findNearestPlacementSite(o,a.x,a.y):null;let l=o?.placement??{r:e.startR,c:e.startC},d=null;if(o&&c&&(o.placement.r!==c.r||o.placement.c!==c.c)){const u=[],p=new Set,h=new Set;for(const g of o.placements){const m=g.id===e.placementId?{...g,r:c.r,c:c.c}:{...g},b=`${m.r},${m.c}`;!o.groupCenterKeys.has(b)||o.occupiedOtherGroupPlacementKeys.has(b)||o.blockedSiteKeys.has(b)||p.has(m.id)||h.has(b)||(p.add(m.id),h.add(b),u.push(m))}const f=u.find(g=>g.id===e.placementId);f&&f.r===c.r&&f.c===c.c&&(o.group.placements=u,this.updateGroupEditPlacementIndex(),l=f,d=u)}this.#t=null,this.ownerDocument.removeEventListener("keydown",this.#b,!0),this.hasPointerCapture(e.pointerId)&&this.releasePointerCapture(e.pointerId),this.updatePlacementDragCell(e,l),o&&d&&this.dispatchPlacementsChange(o.group.id,d)}updatePlacementDragCell(e,t){const i=_(this.effectiveStep,t.r,t.c);e.visualX=i.x,e.visualY=i.y,this.updatePlacementDragNodes(e)&&(e.cell.dataset.r=String(t.r),e.cell.dataset.c=String(t.c),delete e.cell.dataset.dragging)}createHexCellPath(e,t){return this.createHexCellPathAt(e,_(e,t.r,t.c))}createHexCellPathAt(e,t){return`${Qt({r:0,c:0}).map(o=>_(e,o.r,o.c,t.x,t.y)).map((o,s)=>`${s===0?"M":"L"} ${o.x} ${o.y}`).join(" ")} Z`}renderItemFromAttributes(e){const t=this.readItemPosition(e);this.renderItemAt(e,t.x,t.y)}renderItemAt(e,t,i){const o=Number.parseFloat(this.style.getPropertyValue("--ff-tri-layer-padding-x")),s=Number.parseFloat(this.style.getPropertyValue("--ff-tri-layer-padding-y"));e.style.setProperty("--ff-hex-item-radius",`${e.getOuterRadius(this.effectiveStep)}px`),e.style.setProperty("--ff-hex-item-x",`${t+(Number.isFinite(o)?o:0)}px`),e.style.setProperty("--ff-hex-item-y",`${i+(Number.isFinite(s)?s:0)}px`)}readItemPosition(e){return this.createPositionSnapshot(this.numberOrZero(e.r),this.numberOrZero(e.c),this.numberOrZero(e.offsetX),this.numberOrZero(e.offsetY))}createPositionSnapshot(e,t,i,o){const s=_(this.effectiveStep,e,t,i,o);return{r:e,c:t,offsetX:i,offsetY:o,x:s.x,y:s.y}}createPositionChange(e,t,i){return{item:e,old:{r:t.r,c:t.c,offsetX:t.offsetX,offsetY:t.offsetY},new:{r:i.r,c:i.c,offsetX:i.offsetX,offsetY:i.offsetY},x:i.x,y:i.y}}numberOrZero(e){return typeof e=="number"&&Number.isFinite(e)?e:0}clientPointToLayerPoint(e,t){const i=this.surface?.getBoundingClientRect()??this.getBoundingClientRect();return{x:e-i.left,y:t-i.top}}canInteractWithGroups(){return this.groupEditingEnabled&&this.mode==="hex"}canResolveGroupEdits(){return this.canInteractWithGroups()&&this.groupEditAction!==null}getGroupCellCenterAtClientPoint(e,t){if(!this.canInteractWithGroups())return null;const i=this.clientPointToLayerPoint(e,t);return to(this.effectiveStep,i.x,i.y,this.#u)}updateGroupEditOwnershipIndex(e){this.#u=e?.centers??[],this.resetGroupEditIndex()}resetGroupEditIndex(){if(!this.canResolveGroupEdits()){this.#a=null;return}this.#a=Ss({groups:this.groups,eligibleCenters:this.#u})}updateGroupEditPlacementIndex(){const e=this.#a;if(!e)return;const t=new Set;for(const i of this.groups??[]){if(!i||typeof i.id!="string"||i.id.length===0)continue;const o=e.centerKeysByGroupId.get(i.id);if(!o)continue;const s=new Set,n=new Set;for(const a of Array.isArray(i.placements)?i.placements:[]){if(!a||typeof a.id!="string"||a.id.length===0||!Number.isInteger(a.r)||!Number.isInteger(a.c))continue;const c=ky(a);!o.has(c)||s.has(a.id)||n.has(c)||(s.add(a.id),n.add(c),t.add(c))}}this.#a={...e,placementKeys:t}}updateGroupCellPreviewFromStoredPointer(){if(!this.canInteractWithGroups()){this.clearGroupCellHover();return}const e=this.#o;if(!e){this.setGroupCellPreview(null,"default");return}this.updateGroupCellPreviewFromPointer(e.x,e.y)}updateGroupCellPreviewFromPointer(e,t){if(!this.canInteractWithGroups()){this.clearGroupCellHover();return}this.#o={x:e,y:t};const i=this.groupEditAction;if(i===null){this.setGroupCellPreview(null,"default");return}const o=this.getGroupCellCenterAtClientPoint(e,t);if(!o){this.setGroupCellPreview(null,"default");return}const s=this.resolveGroupCellPreview(o,i);this.setGroupCellPreview(s,this.getGroupEditCursor(s))}resolveGroupCellPreview(e,t){const i=this.#a;return i?ho({index:i,action:t,cell:e}):null}getGroupEditCursor(e){return e?e.kind==="plus"?"copy":e.kind==="exchange"||e.kind==="transfer"?"move":e.kind==="remove"?"pointer":"not-allowed":"default"}setGroupCellPreview(e,t){const i=!this.groupCellPreviewsEqual(this.#s,e);this.#s=e,e?this.dataset.groupEditPreview=e.kind:delete this.dataset.groupEditPreview;const o=this.groupShapesElement;i&&o&&(o.querySelector(".group-cell-preview")?.remove(),e&&o.append(this.createGroupCellPreviewElement(this.effectiveStep,e))),this.updateGroupOverlayVisibility(),this.setGroupEditCursor(t)}groupCellPreviewsEqual(e,t){return e===t||!!(e&&t&&e.action===t.action&&e.cell.r===t.cell.r&&e.cell.c===t.cell.c&&e.valid===t.valid&&e.kind===t.kind&&e.reason===t.reason&&e.invalidReason===t.invalidReason&&e.previousOwnerGroupId===t.previousOwnerGroupId&&e.nextOwnerGroupId===t.nextOwnerGroupId)}setGroupEditCursor(e){if(e==="default"){delete this.dataset.groupEditCursor,this.surface?.style.removeProperty("cursor");return}this.dataset.groupEditCursor=e,this.surface&&(this.surface.style.cursor=e)}updateGroupOverlayVisibility(){const e=this.showGroups&&(this.groups??[]).length>0;this.groupFieldElement?.toggleAttribute("data-visible",e||this.#s!==null)}createGroupCellPreviewElement(e,t){const i=this.ownerDocument.createElementNS(Xo,"g");i.setAttribute("class","group-cell-preview"),i.setAttribute("pointer-events","none"),i.dataset.previewKind=t.kind,i.dataset.action=t.action,i.dataset.r=String(t.cell.r),i.dataset.c=String(t.cell.c),t.reason&&(i.dataset.reason=t.reason),t.invalidReason&&(i.dataset.reason=t.invalidReason),t.previousOwnerGroupId&&(i.dataset.previousOwnerGroupId=t.previousOwnerGroupId),t.nextOwnerGroupId&&(i.dataset.nextOwnerGroupId=t.nextOwnerGroupId),i.dataset.cursor=this.getGroupEditCursor(t);const o=_(e,t.cell.r,t.cell.c),s=!t.valid,n=s?"var(--ff-tri-layer-group-preview-invalid-color, #b42318)":"var(--ff-tri-layer-group-preview-color, #176d5d)",a=this.ownerDocument.createElementNS(Xo,"path");a.setAttribute("class","group-cell-preview-target"),a.setAttribute("d",this.createHexCellPath(e,t.cell)),a.setAttribute("fill",s?"var(--ff-tri-layer-group-preview-invalid-fill, rgba(180, 35, 24, 0.12))":"var(--ff-tri-layer-group-preview-fill, rgba(23, 109, 93, 0.12))"),a.setAttribute("stroke",n),a.setAttribute("stroke-width",String(Math.max(2,e*.05))),a.setAttribute("stroke-dasharray",`${Math.max(3,e*.14)} ${Math.max(2,e*.08)}`),a.setAttribute("stroke-linejoin","round"),a.setAttribute("vector-effect","non-scaling-stroke");const c=this.ownerDocument.createElementNS(Xo,"circle");c.setAttribute("class","group-cell-preview-marker-background"),c.setAttribute("cx",String(o.x)),c.setAttribute("cy",String(o.y)),c.setAttribute("r",String(e*.24)),c.setAttribute("fill","var(--ff-tri-layer-group-preview-marker-background, Canvas)"),c.setAttribute("stroke",n),c.setAttribute("stroke-width",String(Math.max(1.5,e*.04))),c.setAttribute("vector-effect","non-scaling-stroke");const l=this.ownerDocument.createElementNS(Xo,"text");return l.setAttribute("class","group-cell-preview-marker"),l.setAttribute("x",String(o.x)),l.setAttribute("y",String(o.y)),l.setAttribute("fill",n),l.setAttribute("font-size",String(e*.32)),l.setAttribute("font-weight","700"),l.setAttribute("text-anchor","middle"),l.setAttribute("dominant-baseline","central"),l.setAttribute("pointer-events","none"),l.textContent={plus:"+",exchange:"↔",remove:"−",transfer:"→",conflict:"!",invalid:"×"}[t.kind],i.append(a,c,l),i}clearGroupCellHover(){this.#r=null,this.#o=null,this.setGroupCellPreview(null,"default")}handleGroupCellClick(e,t){if(!this.canInteractWithGroups())return;const i=this.groupEditAction;if(i===null){this.setGroupCellPreview(null,"default");return}const o=this.#s;this.#o={x:e,y:t};const s=this.getGroupCellCenterAtClientPoint(e,t);if(!s){this.setGroupCellPreview(null,"default");return}const n=this.resolveGroupCellPreview(s,i);this.setGroupCellPreview(n,this.getGroupEditCursor(n)),!(!o||!n||!this.groupCellPreviewsEqual(o,n)||!n.valid||n.action!==i||n.cell.r!==s.r||n.cell.c!==s.c||!n.reason)&&this.dispatchEvent(new CustomEvent(Jd,{detail:{action:n.action,cell:{...n.cell},nextOwnerGroupId:n.nextOwnerGroupId,previousOwnerGroupId:n.previousOwnerGroupId,reason:n.reason},bubbles:!0,composed:!0}))}updateSpot(e){const t=this.hexFieldElement;if(!t)return;if(this.mode!=="hex"||this.fieldView!=="spot"){this.clearSpot();return}const i=e.item.getOuterRadius(this.effectiveStep),o=this.spotRadius,s=o!==null&&Number.isFinite(o)&&o>0?o:3,n=i*s,a=n*2;t.setAttribute("data-spot-active",""),t.style.setProperty("--ff-tri-layer-spot-x",`${e.desiredX-n}px`),t.style.setProperty("--ff-tri-layer-spot-y",`${e.desiredY-n}px`),t.style.setProperty("--ff-tri-layer-spot-diameter",`${a}px`)}clearSpot(){const e=this.hexFieldElement;e&&(e.removeAttribute("data-spot-active"),e.style.removeProperty("--ff-tri-layer-spot-x"),e.style.removeProperty("--ff-tri-layer-spot-y"),e.style.removeProperty("--ff-tri-layer-spot-diameter"))}updateDragVisual(e,t,i){e.clientX=t,e.clientY=i;const o=this.clientPointToLayerPoint(t,i);e.desiredX=o.x+e.grabOffsetX,e.desiredY=o.y+e.grabOffsetY;const s=this.getGroupCentersForItem(e.item);if(s!==null){const n=vr(this.effectiveStep,this.mode,{x:e.desiredX,y:e.desiredY},s);e.desiredX=n?.x??e.startX,e.desiredY=n?.y??e.startY}if(this.updateSpot(e),this.dragSnap==="live"){const n=this.findNearestSiteForItem(e.item,e.desiredX,e.desiredY);e.ghostCandidate=n,n?this.renderSnapGhost(e.item,n):this.clearSnapGhost()}else e.ghostCandidate=null,this.clearSnapGhost();e.visualX=e.desiredX,e.visualY=e.desiredY,this.renderItemAt(e.item,e.desiredX,e.desiredY),this.updateReboundPreview(e)}renderSnapGhost(e,t){const i=_(this.effectiveStep,t.r,t.c),o=this.snapGhostElement;if(o.parentElement!==this.surface&&this.surface.append(o),o.style.removeProperty("display"),this.#n!==e){const s=getComputedStyle(e),n=s.getPropertyValue("--ff-hex-item-border-color")||e.style.getPropertyValue("--ff-hex-item-border-color"),a=s.getPropertyValue("--ff-hex-item-border-width")||e.style.getPropertyValue("--ff-hex-item-border-width"),c=s.getPropertyValue("--ff-hex-item-background")||e.style.getPropertyValue("--ff-hex-item-background"),l=s.getPropertyValue("--ff-hex-item-color")||e.style.getPropertyValue("--ff-hex-item-color");n&&o.style.setProperty("--ff-hex-item-border-color",n),a&&o.style.setProperty("--ff-hex-item-border-width",a),c&&o.style.setProperty("--ff-hex-item-background",c),l&&o.style.setProperty("--ff-hex-item-color",l),this.#n=e}o.dataset.shape=e.shape,o.dataset.fillEnabled=String(e.fillEnabled),o.style.setProperty("--ff-tri-layer-ghost-x",`${i.x}px`),o.style.setProperty("--ff-tri-layer-ghost-y",`${i.y}px`),o.style.setProperty("--ff-tri-layer-ghost-radius",`${e.getOuterRadius(this.effectiveStep)}px`),this.snapGhostIconElement.textContent=e.icon,this.snapGhostLabelElement.textContent=e.label}clearSnapGhost(){this.#n=null;const e=this.snapGhostElement;e&&(e.remove(),e.style.removeProperty("--ff-tri-layer-ghost-x"),e.style.removeProperty("--ff-tri-layer-ghost-y"),e.style.removeProperty("--ff-tri-layer-ghost-radius"),delete e.dataset.shape,delete e.dataset.fillEnabled,e.style.removeProperty("--ff-hex-item-border-color"),e.style.removeProperty("--ff-hex-item-border-width"),e.style.removeProperty("--ff-hex-item-background"),e.style.removeProperty("--ff-hex-item-color"),this.snapGhostIconElement.textContent="",this.snapGhostLabelElement.textContent="")}updateReboundPreview(e){if(!this.rebound){this.restoreReboundPreview(e);return}const t=this.effectiveStep,i=e.item.getOuterRadius(t),o=e.visualX-e.startX,s=e.visualY-e.startY;let n=null,a=0,c=0,l=null,d=0;for(const u of this.getHexItems()){if(u===e.item)continue;const p=this.readItemPosition(u),h=p.x-e.visualX,f=p.y-e.visualY,g=Math.hypot(h,f),m=i+u.getOuterRadius(t),b=m-g;if(b<=d)continue;let x,y;if(g>0)x=h/g,y=f/g;else{const O=Math.hypot(o,s);x=O>0?o/O:1,y=O>0?s/O:0}const C=e.visualX+x*m,N=e.visualY+y*m;let v=C,P=N,L=null;if(this.dragSnap==="live"){const O=e.ghostCandidate?_(t,e.ghostCandidate.r,e.ghostCandidate.c):{x:e.visualX,y:e.visualY};if(L=this.findNearestFreeSite(C,N,e.item,u,O),!L)continue;const V=_(t,L.r,L.c);v=V.x,P=V.y}else{const O=this.getGroupCentersForItem(u);if(O!==null){const V=vr(t,this.mode,{x:v,y:P},O);if(!V)continue;v=V.x,P=V.y}}n=u,a=v,c=P,l=L,d=b}if(!n){this.restoreReboundPreview(e);return}e.previewItem&&e.previewItem!==n&&this.restoreReboundPreview(e),e.previewItem=n,e.previewX=a,e.previewY=c,e.previewSite=l,n.setAttribute("data-rebound-preview",""),this.renderItemAt(n,a,c)}findNearestFreeSite(e,t,i,o,s){const n=this.getGroupCentersForItem(o);let a;if(n!==null)a=n;else if(this.mode==="hex"){const f=Ce(this.effectiveRows,this.effectiveColumns);a=this.snapTarget==="center"?f.centers:this.snapTarget==="vertex"?f.vertices:[...f.centers,...f.vertices]}else{a=[];for(let f=0;f<this.effectiveRows;f++)for(let g=0;g<this.effectiveColumns;g++)a.push({r:f,c:g})}const c=this.effectiveStep,l=o.getOuterRadius(c),d=i.getOuterRadius(c),u=this.getHexItems().filter(f=>f!==i&&f!==o);let p=null,h=Number.POSITIVE_INFINITY;for(const f of a){const g=_(c,f.r,f.c);if(Math.hypot(g.x-s.x,g.y-s.y)<l+d)continue;let m=!1;for(const x of u){const y=this.readItemPosition(x);if(Math.hypot(g.x-y.x,g.y-y.y)<l+x.getOuterRadius(c)){m=!0;break}}if(m)continue;const b=(g.x-e)**2+(g.y-t)**2;b>=h||(p=f,h=b)}return p}getValidGroupCenters(e){if(!Array.isArray(e.centers))return[];const t=new Map;for(const i of e.centers)!Number.isInteger(i?.r)||!Number.isInteger(i?.c)||Fr(i.r,i.c,this.effectiveRows,this.effectiveColumns,this.mode,"center")&&t.set(`${i.r},${i.c}`,{r:i.r,c:i.c});return Array.from(t.values())}getValidGroupPlacements(e){if(!Array.isArray(e.placements))return[];const t=new Set(this.getValidGroupCenters(e).map(n=>`${n.r},${n.c}`)),i=new Set,o=new Set,s=[];for(const n of e.placements){if(!n||typeof n.id!="string"||n.id.length===0||!Number.isInteger(n.r)||!Number.isInteger(n.c))continue;const a=`${n.r},${n.c}`;!t.has(a)||i.has(n.id)||o.has(a)||(i.add(n.id),o.add(a),s.push({id:n.id,r:n.r,c:n.c}))}return s}getOccupiedPlacementCells(e,t){const i=new Set;for(const o of this.groups??[])for(const s of this.getValidGroupPlacements(o))o===e&&(t===void 0||s.id===t)||i.add(`${s.r},${s.c}`);return i}getGroupCentersForItem(e){if(this.groupMode!=="group"||!e.groupId)return null;const t=(this.groups??[]).find(i=>i.id===e.groupId);return t?this.getValidGroupCenters(t):[]}findNearestSiteForItem(e,t,i){const o=this.getGroupCentersForItem(e);return o!==null?vi(this.effectiveStep,t,i,o):xs(this.effectiveStep,t,i,this.effectiveRows,this.effectiveColumns,this.mode,this.snapTarget)}restoreReboundPreview(e){const t=e.previewItem;e.previewItem=null,e.previewSite=null,t&&(t.removeAttribute("data-rebound-preview"),this.renderItemFromAttributes(t))}commitDrag(e,t,i){this.updateDragVisual(e,t,i);const o=this.effectiveStep,s=this.dragSnap==="live"?e.ghostCandidate:this.findNearestSiteForItem(e.item,e.desiredX,e.desiredY),n=[];if(s){const a=this.readItemPosition(e.item),c=_(o,s.r,s.c),l=this.dragSnap==="free"?e.desiredX-c.x:0,d=this.dragSnap==="free"?e.desiredY-c.y:0,u=this.createPositionSnapshot(s.r,s.c,l,d);let p=null;if(e.previewItem&&this.getHexItems().includes(e.previewItem)){const h=e.previewSite??(this.dragSnap==="live"?null:this.findNearestSiteForItem(e.previewItem,e.previewX,e.previewY));if(h&&!(this.dragSnap==="live"&&h.r===s.r&&h.c===s.c)){const f=_(o,h.r,h.c),g=e.previewX-f.x,m=e.previewY-f.y;p={item:e.previewItem,position:h,offsetX:g,offsetY:m,oldPosition:this.readItemPosition(e.previewItem),newPosition:this.createPositionSnapshot(h.r,h.c,g,m)}}}this.#i=!0;try{const h=a.r!==u.r||a.c!==u.c||a.offsetX!==u.offsetX||a.offsetY!==u.offsetY,f=p!==null&&(p.oldPosition.r!==p.newPosition.r||p.oldPosition.c!==p.newPosition.c||p.oldPosition.offsetX!==p.newPosition.offsetX||p.oldPosition.offsetY!==p.newPosition.offsetY);h&&(e.item.layoutMode="fixed"),f&&p&&(p.item.layoutMode="fixed"),this.applyPosition(e.item,s,l,d),p&&this.applyPosition(p.item,p.position,p.offsetX,p.offsetY)}finally{this.#i=!1}n.push(this.createPositionChange(e.item,a,u)),p&&n.push(this.createPositionChange(p.item,p.oldPosition,p.newPosition))}this.#e=null,this.ownerDocument.removeEventListener("keydown",this.#b,!0),e.ghostCandidate=null,this.clearSnapGhost(),this.clearSpot(),e.item.removeAttribute("data-dragging"),e.previewItem?.removeAttribute("data-rebound-preview"),this.refreshLayout(),n.length>0&&this.dispatchEvent(new CustomEvent(ws,{detail:{changes:n},bubbles:!0,composed:!0}))}applyPosition(e,t,i,o){e.r=t.r,e.c=t.c,e.offsetX=i,e.offsetY=o}cancelActiveDrag(){this.ownerDocument.removeEventListener("keydown",this.#b,!0);const e=this.#t;this.#t=null;const t=this.#e;if(t&&(t.ghostCandidate=null),this.clearSnapGhost(),this.clearSpot(),e){const s=(this.groups??[]).find(a=>a.id===e.groupId),n=s?this.getValidGroupPlacements(s).find(a=>a.id===e.placementId):void 0;n?this.updatePlacementDragCell(e,n):(e.visualX=e.startX,e.visualY=e.startY,this.updatePlacementDragNodes(e)),e.cell.removeAttribute("data-dragging")}if(e&&this.hasPointerCapture(e.pointerId)&&this.releasePointerCapture(e.pointerId),!t)return;this.#e=null,t.item.setAttribute("data-drag-cancelled",""),t.item.removeAttribute("data-dragging"),this.renderItemFromAttributes(t.item),t.previewItem&&(t.previewItem.setAttribute("data-drag-cancelled",""),t.previewItem.removeAttribute("data-rebound-preview"),this.renderItemFromAttributes(t.previewItem)),this.hasPointerCapture(t.pointerId)&&this.releasePointerCapture(t.pointerId);const i=()=>{t.item.removeAttribute("data-drag-cancelled"),t.previewItem?.removeAttribute("data-drag-cancelled")},o=this.ownerDocument.defaultView;o?o.requestAnimationFrame(i):i()}}pe([S({converter:ce})],de.prototype,"step");pe([S({converter:ce})],de.prototype,"rows");pe([S({converter:ce})],de.prototype,"columns");pe([S],de.prototype,"mode");pe([S({attribute:"field-view"})],de.prototype,"fieldView");pe([S({attribute:"spot-view"})],de.prototype,"spotView");pe([S({attribute:"spot-radius",converter:ce})],de.prototype,"spotRadius");pe([S({attribute:"center-radius",converter:ce})],de.prototype,"centerRadius");pe([S({attribute:"vertex-radius",converter:ce})],de.prototype,"vertexRadius");pe([S({attribute:"drag-snap"})],de.prototype,"dragSnap");pe([S({attribute:"snap-target"})],de.prototype,"snapTarget");pe([S({attribute:"group-mode"})],de.prototype,"groupMode");pe([S({attribute:"group-editing-enabled",mode:"boolean"})],de.prototype,"groupEditingEnabled");pe([S({attribute:"selected-group-id"})],de.prototype,"selectedGroupId");pe([S({attribute:"group-edit-action"})],de.prototype,"groupEditAction");pe([S({attribute:"show-groups",mode:"boolean"})],de.prototype,"showGroups");pe([S({attribute:"show-placements",mode:"boolean"})],de.prototype,"showPlacements");pe([S({attribute:"show-hex-overlay",mode:"boolean"})],de.prototype,"showHexOverlay");pe([S({mode:"boolean"})],de.prototype,"rebound");pe([$],de.prototype,"groups");pe([$],de.prototype,"unplacedItemsCount");pe([$],de.prototype,"surface");pe([$],de.prototype,"items");pe([$],de.prototype,"hexFieldElement");pe([$],de.prototype,"hexFieldVerticesElement");pe([$],de.prototype,"hexFieldCentersElement");pe([$],de.prototype,"hexFieldLinesElement");pe([$],de.prototype,"groupFieldElement");pe([$],de.prototype,"groupShapesElement");pe([$],de.prototype,"placementOverlayElement");pe([$],de.prototype,"placementShapesElement");pe([$],de.prototype,"snapGhostElement");pe([$],de.prototype,"snapGhostIconElement");pe([$],de.prototype,"snapGhostLabelElement");const $y=H`
    :host {
        display: block;
        position: relative;
        width: var(--ff-tri-layer-width, fit-content);
        height: var(--ff-tri-layer-height, fit-content);
        touch-action: none;
    }

    .surface {
        position: absolute;
        left: var(--ff-tri-layer-padding-x, 48px);
        top: var(--ff-tri-layer-padding-y, 41.569px);
        width: var(--ff-tri-layer-surface-width, 1px);
        height: var(--ff-tri-layer-surface-height, 1px);
        background-image:
            radial-gradient(circle at 1px 1px, var(--ff-tri-layer-node-color, rgba(98, 112, 120, 0.45)) var(--ff-tri-layer-node-size, 1px), transparent calc(var(--ff-tri-layer-node-size, 1px) + 0.5px)),
            radial-gradient(circle at 1px 1px, var(--ff-tri-layer-node-color, rgba(98, 112, 120, 0.45)) var(--ff-tri-layer-node-size, 1px), transparent calc(var(--ff-tri-layer-node-size, 1px) + 0.5px));
        background-size: var(--ff-tri-layer-step, 48px) var(--ff-tri-layer-grid-period, 83.138px);
        background-position:
            0 0,
            var(--ff-tri-layer-half-step, 24px) var(--ff-tri-layer-row-height, 41.569px);
    }

    :host([mode="hex"]) .surface {
        background-image: none;
    }

    .hex-field {
        position: absolute;
        inset: 0;
        display: none;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
        pointer-events: none;
    }

    :host([mode="hex"]) .hex-field {
        overflow: visible;
    }

    .group-field {
        position: absolute;
        inset: 0;
        display: none;
        width: 100%;
        height: 100%;
        overflow: visible;
        z-index: 0;
        pointer-events: none;
    }

    .group-field[data-visible] {
        display: block;
    }

    .group-fill {
        stroke: none;
    }

    .group-border {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
    }

    .group-shape {
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
        transition: stroke 120ms ease, stroke-width 120ms ease, filter 120ms ease;
    }

    .group-cell-preview {
        --ff-tri-layer-group-edit-preview-color: var(--ff-tri-layer-group-edit-color, #176d5d);
        --ff-tri-layer-group-edit-preview-fill: var(--ff-tri-layer-group-edit-fill, rgba(23, 109, 93, 0.18));
        --ff-tri-layer-group-edit-preview-dash: 5 3;
        color: var(--ff-tri-layer-group-edit-preview-color);
        fill: var(--ff-tri-layer-group-edit-preview-fill);
        stroke: var(--ff-tri-layer-group-edit-preview-color);
        stroke-width: var(--ff-tri-layer-group-edit-stroke-width, 2px);
        stroke-dasharray: var(--ff-tri-layer-group-edit-preview-dash);
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
        opacity: 0.88;
        pointer-events: none;
    }

    .group-cell-preview-target {
        fill: var(--ff-tri-layer-group-edit-preview-fill, rgba(23, 109, 93, 0.18));
        stroke: var(--ff-tri-layer-group-edit-preview-color, #176d5d);
        stroke-width: var(--ff-tri-layer-group-edit-target-width, 2.5px);
        stroke-dasharray: none;
        vector-effect: non-scaling-stroke;
    }

    .group-cell-preview-marker-background {
        fill: var(--ff-tri-layer-group-edit-marker-background, Canvas);
        stroke: var(--ff-tri-layer-group-edit-preview-color, #176d5d);
        stroke-width: 1.5px;
        vector-effect: non-scaling-stroke;
        filter: drop-shadow(0 1px 2px rgba(25, 42, 35, 0.3));
    }

    .group-cell-preview-marker {
        fill: var(--ff-tri-layer-group-edit-preview-color, #176d5d);
        stroke: var(--ff-tri-layer-group-edit-marker-halo, Canvas);
        stroke-width: 2px;
        stroke-linejoin: round;
        paint-order: stroke fill;
        font-family: var(--fontFamilyBase, sans-serif);
        font-size: var(--ff-tri-layer-group-edit-marker-size, 12px);
        font-weight: 700;
        text-anchor: middle;
        dominant-baseline: central;
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
    }

    :is(.group-cell-preview, .group-cell-preview-target):is([data-preview-kind="plus"], [data-kind="plus"]),
    :host([data-group-edit-preview="plus"]) .group-cell-preview {
        --ff-tri-layer-group-edit-preview-color: var(--ff-tri-layer-group-edit-add, #176d5d);
        --ff-tri-layer-group-edit-preview-fill: rgba(23, 109, 93, 0.2);
        --ff-tri-layer-group-edit-preview-dash: 5 3;
    }

    :is(.group-cell-preview, .group-cell-preview-target):is([data-preview-kind="exchange"], [data-kind="exchange"]),
    :host([data-group-edit-preview="exchange"]) .group-cell-preview {
        --ff-tri-layer-group-edit-preview-color: var(--ff-tri-layer-group-edit-exchange, #3773a4);
        --ff-tri-layer-group-edit-preview-fill: rgba(55, 115, 164, 0.2);
        --ff-tri-layer-group-edit-preview-dash: 8 2 2 2;
    }

    :is(.group-cell-preview, .group-cell-preview-target):is([data-preview-kind="remove"], [data-kind="remove"]),
    :host([data-group-edit-preview="remove"]) .group-cell-preview {
        --ff-tri-layer-group-edit-preview-color: var(--ff-tri-layer-group-edit-remove, #b7514b);
        --ff-tri-layer-group-edit-preview-fill: rgba(183, 81, 75, 0.2);
        --ff-tri-layer-group-edit-preview-dash: 3 2;
    }

    :is(.group-cell-preview, .group-cell-preview-target):is([data-preview-kind="transfer"], [data-kind="transfer"]),
    :host([data-group-edit-preview="transfer"]) .group-cell-preview {
        --ff-tri-layer-group-edit-preview-color: var(--ff-tri-layer-group-edit-transfer, #9b6424);
        --ff-tri-layer-group-edit-preview-fill: rgba(155, 100, 36, 0.2);
        --ff-tri-layer-group-edit-preview-dash: 5 2;
    }

    :is(.group-cell-preview, .group-cell-preview-target):is([data-preview-kind="conflict"], [data-kind="conflict"]),
    :host([data-group-edit-preview="conflict"]) .group-cell-preview {
        --ff-tri-layer-group-edit-preview-color: var(--ff-tri-layer-group-edit-conflict, #795282);
        --ff-tri-layer-group-edit-preview-fill: rgba(121, 82, 130, 0.2);
        --ff-tri-layer-group-edit-preview-dash: 2 2;
    }

    :is(.group-cell-preview, .group-cell-preview-target):is([data-preview-kind="invalid"], [data-kind="invalid"]),
    :host([data-group-edit-preview="invalid"]) .group-cell-preview {
        --ff-tri-layer-group-edit-preview-color: var(--ff-tri-layer-group-edit-invalid, #8f3131);
        --ff-tri-layer-group-edit-preview-fill: rgba(143, 49, 49, 0.14);
        --ff-tri-layer-group-edit-preview-dash: 2 3;
    }

    :host([data-group-edit-preview]) .group-cell-preview {
        opacity: 1;
    }

    :host([data-group-edit-cursor]) {
        cursor: copy;
    }

    :host([data-group-edit-cursor="exchange"]) {
        cursor: alias;
    }

    :host([data-group-edit-cursor="transfer"]) {
        cursor: move;
    }

    :host([data-group-edit-cursor="remove"]),
    :host([data-group-edit-cursor="conflict"]),
    :host([data-group-edit-cursor="invalid"]) {
        cursor: not-allowed;
    }

    .placement-overlay {
        position: absolute;
        inset: 0;
        display: block;
        width: 100%;
        height: 100%;
        overflow: visible;
        z-index: 1;
        pointer-events: none;
    }

    .placement-cell {
        fill: var(--ff-tri-layer-placement-fill, rgba(23, 109, 93, 0.14));
        stroke: var(--ff-tri-layer-placement-stroke, var(--ff-hex-item-selection-color, #176d5d));
        stroke-width: var(--ff-tri-layer-placement-stroke-width, 1.5px);
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
        pointer-events: visiblePainted;
        cursor: grab;
        transition: fill 120ms ease, stroke 120ms ease, stroke-width 120ms ease, filter 120ms ease;
    }

    .placement-cell:hover {
        fill: var(--ff-tri-layer-placement-hover-fill, rgba(23, 109, 93, 0.25));
        stroke-width: var(--ff-tri-layer-placement-hover-stroke-width, 2px);
    }

    .placement-cell:active,
    .placement-cell[data-dragging] {
        fill: var(--ff-tri-layer-placement-active-fill, rgba(23, 109, 93, 0.36));
        stroke-width: var(--ff-tri-layer-placement-active-stroke-width, 2.5px);
        cursor: grabbing;
    }

    .placement-cell:focus-visible {
        stroke: var(--ff-tri-layer-placement-focus-color, var(--ff-hex-item-selection-color, #176d5d));
        stroke-width: var(--ff-tri-layer-placement-focus-stroke-width, 3px);
        filter: drop-shadow(0 0 2px var(--ff-tri-layer-placement-focus-halo, Canvas));
    }

    .placement-label {
        fill: var(--ff-tri-layer-placement-label-color, var(--ff-hex-item-color, CanvasText));
        stroke: var(--ff-tri-layer-placement-label-halo, Canvas);
        stroke-width: var(--ff-tri-layer-placement-label-halo-width, 3px);
        stroke-linejoin: round;
        paint-order: stroke fill;
        font-family: var(--fontFamilyBase, sans-serif);
        font-size: var(--ff-tri-layer-placement-label-size, 12px);
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        text-anchor: middle;
        dominant-baseline: central;
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
    }

    @media (prefers-reduced-motion: reduce) {
        .placement-cell {
            transition: none;
        }

        .group-shape {
            transition: none;
        }
    }

    .hex-field[data-field-view="dot"],
    .hex-field[data-field-view="full"] {
        display: block;
    }

    .hex-field[data-field-view="spot"][data-spot-active] {
        display: block;
        mask-image: radial-gradient(circle closest-side, #000 0%, #000 65%, transparent 100%);
        mask-size: var(--ff-tri-layer-spot-diameter, 180px) var(--ff-tri-layer-spot-diameter, 180px);
        mask-position: var(--ff-tri-layer-spot-x, 0px) var(--ff-tri-layer-spot-y, 0px);
        mask-repeat: no-repeat;
        -webkit-mask-image: radial-gradient(circle closest-side, #000 0%, #000 65%, transparent 100%);
        -webkit-mask-size: var(--ff-tri-layer-spot-diameter, 180px) var(--ff-tri-layer-spot-diameter, 180px);
        -webkit-mask-position: var(--ff-tri-layer-spot-x, 0px) var(--ff-tri-layer-spot-y, 0px);
        -webkit-mask-repeat: no-repeat;
    }

    .hex-field path {
        display: none;
    }

    .hex-field[data-field-view="dot"] .hex-field-vertices,
    .hex-field[data-field-view="spot"][data-spot-active][data-spot-view="dot"] .hex-field-vertices,
    .hex-field[data-field-view="dot"] .hex-field-centers,
    .hex-field[data-field-view="spot"][data-spot-active][data-spot-view="dot"] .hex-field-centers {
        display: block;
        stroke: none;
    }

    .hex-field[data-field-view="dot"] .hex-field-vertices,
    .hex-field[data-field-view="spot"][data-spot-active][data-spot-view="dot"] .hex-field-vertices {
        fill: var(--ff-tri-layer-vertex-color, var(--ff-tri-layer-node-color, rgba(98, 112, 120, 0.45)));
    }

    .hex-field[data-field-view="dot"] .hex-field-centers,
    .hex-field[data-field-view="spot"][data-spot-active][data-spot-view="dot"] .hex-field-centers {
        fill: var(--ff-tri-layer-center-color, var(--ff-tri-layer-node-color, rgba(98, 112, 120, 0.45)));
    }

    .hex-field[data-field-view="full"] .hex-field-lines,
    .hex-field[data-field-view="spot"][data-spot-active][data-spot-view="full"] .hex-field-lines {
        display: block;
        fill: none;
        stroke: var(--ff-tri-layer-field-color, var(--ff-tri-layer-node-color, rgba(98, 112, 120, 0.45)));
        stroke-width: var(--ff-tri-layer-field-line-width, 1px);
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
    }

    .snap-ghost {
        box-sizing: border-box;
        position: absolute;
        left: var(--ff-tri-layer-ghost-x, 0px);
        top: var(--ff-tri-layer-ghost-y, 0px);
        z-index: 0;
        width: calc(var(--ff-tri-layer-ghost-radius, var(--ff-tri-layer-step, 48px)) * 2);
        height: calc(var(--ff-tri-layer-ghost-radius, var(--ff-tri-layer-step, 48px)) * 1.7320508075688772);
        transform: translate(-50%, -50%);
        opacity: 0.72;
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
    }

    .snap-ghost .hexagon {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
    }

    .snap-ghost .shape {
        box-sizing: border-box;
        position: absolute;
        inset: 0;
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .snap-ghost .shape polygon,
    .snap-ghost .shape rect,
    .snap-ghost .shape circle {
        fill: var(--ff-hex-item-background, Canvas);
        stroke: var(--ff-hex-item-border-color, currentColor);
        stroke-width: var(--ff-hex-item-border-width, 2px);
        vector-effect: non-scaling-stroke;
    }

    .snap-ghost .shape .hex-shape {
        display: block;
    }

    .snap-ghost .shape .square-shape,
    .snap-ghost .shape .circle-shape {
        display: none;
    }

    .snap-ghost[data-shape="none"] .shape {
        display: none;
    }

    .snap-ghost[data-shape="none"] .shape polygon,
    .snap-ghost[data-shape="none"] .shape rect,
    .snap-ghost[data-shape="none"] .shape circle {
        display: none;
    }

    .snap-ghost[data-shape="square"] .shape .hex-shape,
    .snap-ghost[data-shape="square"] .shape .circle-shape,
    .snap-ghost[data-shape="circle"] .shape .hex-shape,
    .snap-ghost[data-shape="circle"] .shape .square-shape {
        display: none;
    }

    .snap-ghost[data-shape="square"] .shape .square-shape,
    .snap-ghost[data-shape="circle"] .shape .circle-shape {
        display: block;
    }

    .snap-ghost[data-fill-enabled="false"] .shape polygon,
    .snap-ghost[data-fill-enabled="false"] .shape rect,
    .snap-ghost[data-fill-enabled="false"] .shape circle {
        fill: none;
    }

    .snap-ghost .content {
        position: relative;
        z-index: 1;
        display: flex;
        max-width: 75%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2px;
        color: var(--ff-hex-item-color, CanvasText);
        font-family: var(--fontFamilyBase, sans-serif);
        line-height: 1;
        text-align: center;
        white-space: nowrap;
    }

    .snap-ghost .icon {
        font-size: 1.1em;
    }

    .snap-ghost .label {
        font-size: 0.8em;
        font-weight: 600;
    }

    slot {
        position: absolute;
        inset: 0;
        display: block;
        overflow: visible;
        z-index: 1;
        pointer-events: none;
    }

    ::slotted(ff-hex-item) {
        pointer-events: auto;
    }
`,Py=ie`
    <div class="surface" ${te("surface")}>
        <svg class="hex-field" aria-hidden="true" focusable="false" ${te("hexFieldElement")}>
            <path class="hex-field-vertices" ${te("hexFieldVerticesElement")}></path>
            <path class="hex-field-centers" ${te("hexFieldCentersElement")}></path>
            <path class="hex-field-lines" ${te("hexFieldLinesElement")}></path>
        </svg>
        <svg class="group-field" aria-hidden="true" focusable="false" ${te("groupFieldElement")}>
            <g class="group-shapes" ${te("groupShapesElement")}></g>
        </svg>
        <svg class="placement-overlay" aria-label="Placement cells" focusable="false" ${te("placementOverlayElement")}>
            <g class="placement-shapes" ${te("placementShapesElement")}></g>
        </svg>
        <slot ${yo("items")}></slot>
        <div class="snap-ghost" aria-hidden="true" style="display: none" ${te("snapGhostElement")}>
            <div class="hexagon">
                <svg class="shape" viewBox="0 0 100 86.6025403784" preserveAspectRatio="none" focusable="false">
                    <polygon class="hex-shape" points="25,0 75,0 100,43.3012701892 75,86.6025403784 25,86.6025403784 0,43.3012701892"></polygon>
                    <rect class="square-shape" x="6.6987298108" y="0" width="86.6025403784" height="86.6025403784"></rect>
                    <circle class="circle-shape" cx="50" cy="43.3012701892" r="43.3012701892"></circle>
                </svg>
                <span class="content">
                    <span class="icon" ${te("snapGhostIconElement")}></span>
                    <span class="label" ${te("snapGhostLabelElement")}></span>
                </span>
            </div>
        </div>
    </div>
`;de.compose({name:"ff-tri-layer",template:Py,styles:$y,shadowOptions:{mode:"open"}});const Cy=["UA43","UA05","UA07","UA12","UA14","UA18","UA21","UA23","UA26","UA30","UA35","UA09","UA46","UA48","UA51","UA53","UA56","UA59","UA61","UA63","UA65","UA68","UA71","UA77","UA74","UA32","UA40"],Ey=new Set(Cy);function Ay(r,e=Math.random){const t=new Set;return r.filter(o=>!Ey.has(o.id)||t.has(o.id)?!1:(t.add(o.id),!0)).flatMap(o=>{const s=Math.floor(e()*11),n=[1,2,3,4,5,6,7,8,9,10],a=[];for(let c=0;c<s;c+=1){const l=c+Math.floor(e()*(n.length-c)),d=n[l];[n[c],n[l]]=[n[l],n[c]];const u=e()<.8?1+Math.floor(e()*30):31+Math.floor(e()*69);a.push({typeId:d,value:u,groupId:o.id,itemProperties:{iconSize:16,iconSizeUnit:"px"}})}return a})}Me.registry.get("fluent-tab")||_s.define(pd);Me.registry.get("fluent-tablist")||Gs.define(hd);const Ny=1e3;class Ly extends G{refreshTimer=null;handleRefreshData=()=>{this.refreshTimer!==null&&clearTimeout(this.refreshTimer),this.refreshTimer=setTimeout(()=>{this.refreshTimer=null,this.createMockSceneData()},Ny)};connectedCallback(){super.connectedCallback(),this.addEventListener(Hn,this.handleRefreshData)}disconnectedCallback(){this.removeEventListener(Hn,this.handleRefreshData),this.refreshTimer!==null&&(clearTimeout(this.refreshTimer),this.refreshTimer=null),super.disconnectedCallback()}createMockSceneData(){this.itemsData=Ay(this.groups)}}const Xn="ff-hex-layer-tests";Me.registry.get(Xn)||Ly.compose({name:Xn,template:eu,styles:Qd}).define(Me.registry);document.querySelector(Xn)?.requestDataRefresh();
