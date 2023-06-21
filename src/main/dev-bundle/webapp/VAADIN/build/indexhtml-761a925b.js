import{p as b,C as fe,_ as E,a as Yo,h as m,s as de,c as S,L as D,r as xo,b as So,n as Dt}from"./ConnectionIndicator-81121820.js";window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.themeEditor=!1;window.Vaadin.featureFlags.sideNavComponent=!0;function Ge(t){return t=t||[],Array.isArray(t)?t:[t]}function F(t){return`[Vaadin.Router] ${t}`}function Jo(t){if(typeof t!="object")return String(t);const e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(t)}`:e}const Ke="module",Ye="nomodule",bt=[Ke,Ye];function jt(t){if(!t.match(/.+\.[m]?js$/))throw new Error(F(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function Co(t){if(!t||!z(t.path))throw new Error(F('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=t.bundle,o=["component","redirect","bundle"];if(!ee(t.action)&&!Array.isArray(t.children)&&!ee(t.children)&&!Je(e)&&!o.some(n=>z(t[n])))throw new Error(F(`Expected route config "${t.path}" to include either "${o.join('", "')}" or "action" function but none found.`));if(e)if(z(e))jt(e);else if(bt.some(n=>n in e))bt.forEach(n=>n in e&&jt(e[n]));else throw new Error(F('Expected route bundle to include either "'+Ye+'" or "'+Ke+'" keys, or both'));t.redirect&&["bundle","component"].forEach(n=>{n in t&&console.warn(F(`Route config "${t.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function zt(t){Ge(t).forEach(e=>Co(e))}function Ft(t,e){let o=document.head.querySelector('script[src="'+t+'"][async]');return o||(o=document.createElement("script"),o.setAttribute("src",t),e===Ke?o.setAttribute("type",Ke):e===Ye&&o.setAttribute(Ye,""),o.async=!0),new Promise((n,r)=>{o.onreadystatechange=o.onload=i=>{o.__dynamicImportLoaded=!0,n(i)},o.onerror=i=>{o.parentNode&&o.parentNode.removeChild(o),r(i)},o.parentNode===null?document.head.appendChild(o):o.__dynamicImportLoaded&&n()})}function Xo(t){return z(t)?Ft(t):Promise.race(bt.filter(e=>e in t).map(e=>Ft(t[e],e)))}function we(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:t==="go",detail:e}))}function Je(t){return typeof t=="object"&&!!t}function ee(t){return typeof t=="function"}function z(t){return typeof t=="string"}function ko(t){const e=new Error(F(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}const he=new class{};function Qo(t){const e=t.port,o=t.protocol,i=o==="http:"&&e==="80"||o==="https:"&&e==="443"?t.hostname:t.host;return`${o}//${i}`}function Ut(t){if(t.defaultPrevented||t.button!==0||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const o=t.composedPath?t.composedPath():t.path||[];for(let l=0;l<o.length;l++){const a=o[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Qo(e))!==window.location.origin)return;const{pathname:r,search:i,hash:s}=e;we("go",{pathname:r,search:i,hash:s})&&(t.preventDefault(),t&&t.type==="click"&&window.scrollTo(0,0))}const Zo={activate(){window.document.addEventListener("click",Ut)},inactivate(){window.document.removeEventListener("click",Ut)}},en=/Trident/.test(navigator.userAgent);en&&!ee(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var o=document.createEvent("Event");return o.initEvent(t,!!e.bubbles,!!e.cancelable),o.state=e.state||null,o},window.PopStateEvent.prototype=window.Event.prototype);function Bt(t){if(t.state==="vaadin-router-ignore")return;const{pathname:e,search:o,hash:n}=window.location;we("go",{pathname:e,search:o,hash:n})}const tn={activate(){window.addEventListener("popstate",Bt)},inactivate(){window.removeEventListener("popstate",Bt)}};var ge=Ro,on=xt,nn=ln,rn=Ao,sn=No,$o="/",Io="./",an=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function xt(t,e){for(var o=[],n=0,r=0,i="",s=e&&e.delimiter||$o,l=e&&e.delimiters||Io,a=!1,d;(d=an.exec(t))!==null;){var p=d[0],v=d[1],u=d.index;if(i+=t.slice(r,u),r=u+p.length,v){i+=v[1],a=!0;continue}var f="",Ne=t[r],oe=d[2],Re=d[3],at=d[4],M=d[5];if(!a&&i.length){var B=i.length-1;l.indexOf(i[B])>-1&&(f=i[B],i=i.slice(0,B))}i&&(o.push(i),i="",a=!1);var ne=f!==""&&Ne!==void 0&&Ne!==f,re=M==="+"||M==="*",lt=M==="?"||M==="*",H=f||s,Oe=Re||at;o.push({name:oe||n++,prefix:f,delimiter:H,optional:lt,repeat:re,partial:ne,pattern:Oe?dn(Oe):"[^"+G(H)+"]+?"})}return(i||r<t.length)&&o.push(i+t.substr(r)),o}function ln(t,e){return Ao(xt(t,e))}function Ao(t){for(var e=new Array(t.length),o=0;o<t.length;o++)typeof t[o]=="object"&&(e[o]=new RegExp("^(?:"+t[o].pattern+")$"));return function(n,r){for(var i="",s=r&&r.encode||encodeURIComponent,l=0;l<t.length;l++){var a=t[l];if(typeof a=="string"){i+=a;continue}var d=n?n[a.name]:void 0,p;if(Array.isArray(d)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(d.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var v=0;v<d.length;v++){if(p=s(d[v],a),!e[l].test(p))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(v===0?a.prefix:a.delimiter)+p}continue}if(typeof d=="string"||typeof d=="number"||typeof d=="boolean"){if(p=s(String(d),a),!e[l].test(p))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+p+'"');i+=a.prefix+p;continue}if(a.optional){a.partial&&(i+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return i}}function G(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function dn(t){return t.replace(/([=!:$/()])/g,"\\$1")}function To(t){return t&&t.sensitive?"":"i"}function cn(t,e){if(!e)return t;var o=t.source.match(/\((?!\?)/g);if(o)for(var n=0;n<o.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}function hn(t,e,o){for(var n=[],r=0;r<t.length;r++)n.push(Ro(t[r],e,o).source);return new RegExp("(?:"+n.join("|")+")",To(o))}function pn(t,e,o){return No(xt(t,o),e,o)}function No(t,e,o){o=o||{};for(var n=o.strict,r=o.start!==!1,i=o.end!==!1,s=G(o.delimiter||$o),l=o.delimiters||Io,a=[].concat(o.endsWith||[]).map(G).concat("$").join("|"),d=r?"^":"",p=t.length===0,v=0;v<t.length;v++){var u=t[v];if(typeof u=="string")d+=G(u),p=v===t.length-1&&l.indexOf(u[u.length-1])>-1;else{var f=u.repeat?"(?:"+u.pattern+")(?:"+G(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?d+=G(u.prefix)+"("+f+")?":d+="(?:"+G(u.prefix)+"("+f+"))?":d+=G(u.prefix)+"("+f+")"}}return i?(n||(d+="(?:"+s+")?"),d+=a==="$"?"$":"(?="+a+")"):(n||(d+="(?:"+s+"(?="+a+"))?"),p||(d+="(?="+s+"|"+a+")")),new RegExp(d,To(o))}function Ro(t,e,o){return t instanceof RegExp?cn(t,e):Array.isArray(t)?hn(t,e,o):pn(t,e,o)}ge.parse=on;ge.compile=nn;ge.tokensToFunction=rn;ge.tokensToRegExp=sn;const{hasOwnProperty:un}=Object.prototype,wt=new Map;wt.set("|false",{keys:[],pattern:/(?:)/});function qt(t){try{return decodeURIComponent(t)}catch{return t}}function mn(t,e,o,n,r){o=!!o;const i=`${t}|${o}`;let s=wt.get(i);if(!s){const d=[];s={keys:d,pattern:ge(t,d,{end:o,strict:t===""})},wt.set(i,s)}const l=s.pattern.exec(e);if(!l)return null;const a=Object.assign({},r);for(let d=1;d<l.length;d++){const p=s.keys[d-1],v=p.name,u=l[d];(u!==void 0||!un.call(a,v))&&(p.repeat?a[v]=u?u.split(p.delimiter).map(qt):[]:a[v]=u&&qt(u))}return{path:l[0],keys:(n||[]).concat(s.keys),params:a}}function Oo(t,e,o,n,r){let i,s,l=0,a=t.path||"";return a.charAt(0)==="/"&&(o&&(a=a.substr(1)),o=!0),{next(d){if(t===d)return{done:!0};const p=t.__children=t.__children||t.children;if(!i&&(i=mn(a,e,!p,n,r),i))return{done:!1,value:{route:t,keys:i.keys,params:i.params,path:i.path}};if(i&&p)for(;l<p.length;){if(!s){const u=p[l];u.parent=t;let f=i.path.length;f>0&&e.charAt(f)==="/"&&(f+=1),s=Oo(u,e.substr(f),o,i.keys,i.params)}const v=s.next(d);if(!v.done)return{done:!1,value:v.value};s=null,l++}return{done:!0}}}}function vn(t){if(ee(t.route.action))return t.route.action(t)}function gn(t,e){let o=e;for(;o;)if(o=o.parent,o===t)return!0;return!1}function fn(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`;const o=(t.route||{}).path;return o&&(e+=` Resolution had failed on route: '${o}'`),e}function yn(t,e){const{route:o,path:n}=e;if(o&&!o.__synthetic){const r={path:n,route:o};if(!t.chain)t.chain=[];else if(o.parent){let i=t.chain.length;for(;i--&&t.chain[i].route&&t.chain[i].route!==o.parent;)t.chain.pop()}t.chain.push(r)}}class Ee{constructor(e,o={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=o.baseUrl||"",this.errorHandler=o.errorHandler,this.resolveRoute=o.resolveRoute||vn,this.context=Object.assign({resolver:this},o.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){zt(e);const o=[...Ge(e)];this.root.__children=o}addRoutes(e){return zt(e),this.root.__children.push(...Ge(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const o=Object.assign({},this.context,z(e)?{pathname:e}:e),n=Oo(this.root,this.__normalizePathname(o.pathname),this.baseUrl),r=this.resolveRoute;let i=null,s=null,l=o;function a(d,p=i.value.route,v){const u=v===null&&i.value.route;return i=s||n.next(u),s=null,!d&&(i.done||!gn(p,i.value.route))?(s=i,Promise.resolve(he)):i.done?Promise.reject(ko(o)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},o,i.value),yn(l,i.value),Promise.resolve(r(l)).then(f=>f!=null&&f!==he?(l.result=f.result||f,l):a(d,p,f)))}return o.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(d=>{const p=fn(l);if(d?console.warn(p):d=new Error(p),d.context=d.context||l,d instanceof DOMException||(d.code=d.code||500),this.errorHandler)return l.result=this.errorHandler(d),l;throw d})}static __createUrl(e,o){return new URL(e,o)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const o=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,o).href;if(n.slice(0,o.length)===o)return n.slice(o.length)}}Ee.pathToRegexp=ge;const{pathToRegexp:Ht}=Ee,Wt=new Map;function Po(t,e,o){const n=e.name||e.component;if(n&&(t.has(n)?t.get(n).push(e):t.set(n,[e])),Array.isArray(o))for(let r=0;r<o.length;r++){const i=o[r];i.parent=e,Po(t,i,i.__children||i.children)}}function Gt(t,e){const o=t.get(e);if(o&&o.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return o&&o[0]}function Kt(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function bn(t,e={}){if(!(t instanceof Ee))throw new TypeError("An instance of Resolver is expected");const o=new Map;return(n,r)=>{let i=Gt(o,n);if(!i&&(o.clear(),Po(o,t.root,t.root.__children),i=Gt(o,n),!i))throw new Error(`Route "${n}" not found`);let s=Wt.get(i.fullPath);if(!s){let a=Kt(i),d=i.parent;for(;d;){const f=Kt(d);f&&(a=f.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),d=d.parent}const p=Ht.parse(a),v=Ht.tokensToFunction(p),u=Object.create(null);for(let f=0;f<p.length;f++)z(p[f])||(u[p[f].name]=!0);s={toPath:v,keys:u},Wt.set(a,s),i.fullPath=a}let l=s.toPath(r,e)||"/";if(e.stringifyQueryParams&&r){const a={},d=Object.keys(r);for(let v=0;v<d.length;v++){const u=d[v];s.keys[u]||(a[u]=r[u])}const p=e.stringifyQueryParams(a);p&&(l+=p.charAt(0)==="?"?p:`?${p}`)}return l}}let Yt=[];function wn(t){Yt.forEach(e=>e.inactivate()),t.forEach(e=>e.activate()),Yt=t}const _n=t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&e!=="none"},En=(t,e)=>{const o=()=>{t.removeEventListener("animationend",o),e()};t.addEventListener("animationend",o)};function Jt(t,e){return t.classList.add(e),new Promise(o=>{if(_n(t)){const n=t.getBoundingClientRect(),r=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;t.setAttribute("style",`position: absolute; ${r}`),En(t,()=>{t.classList.remove(e),t.removeAttribute("style"),o()})}else t.classList.remove(e),o()})}const xn=256;function pt(t){return t!=null}function Sn(t){const e=Object.assign({},t);return delete e.next,e}function j({pathname:t="",search:e="",hash:o="",chain:n=[],params:r={},redirectFrom:i,resolver:s},l){const a=n.map(d=>d.route);return{baseUrl:s&&s.baseUrl||"",pathname:t,search:e,hash:o,routes:a,route:l||a.length&&a[a.length-1]||null,params:r,redirectFrom:i,getUrl:(d={})=>Be(K.pathToRegexp.compile(Lo(a))(Object.assign({},r,d)),s)}}function Xt(t,e){const o=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:o}}}function Cn(t,e){e.location=j(t);const o=t.chain.map(n=>n.route).indexOf(t.route);return t.chain[o].element=e,e}function Ue(t,e,o){if(ee(t))return t.apply(o,e)}function Qt(t,e,o){return n=>{if(n&&(n.cancel||n.redirect))return n;if(o)return Ue(o[t],e,o)}}function kn(t,e){if(!Array.isArray(t)&&!Je(t))throw new Error(F(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];const o=Ge(t);for(let n=0;n<o.length;n++)Co(o[n]),e.__children.push(o[n])}function De(t){if(t&&t.length){const e=t[0].parentNode;for(let o=0;o<t.length;o++)e.removeChild(t[o])}}function Be(t,e){const o=e.__effectiveBaseUrl;return o?e.constructor.__createUrl(t.replace(/^\//,""),o).pathname:t}function Lo(t){return t.map(e=>e.path).reduce((e,o)=>o.length?e.replace(/\/$/,"")+"/"+o.replace(/^\//,""):e,"")}class K extends Ee{constructor(e,o){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&Ee.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},o)),this.resolveRoute=s=>this.__resolveRoute(s);const i=K.NavigationTrigger;K.setTriggers.apply(K,Object.keys(i).map(s=>i[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=j({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const o=e.route;let n=Promise.resolve();ee(o.children)&&(n=n.then(()=>o.children(Sn(e))).then(i=>{!pt(i)&&!ee(o.children)&&(i=o.children),kn(i,o)}));const r={redirect:i=>Xt(e,i),component:i=>{const s=document.createElement(i);return this.__createdByRouter.set(s,!0),s}};return n.then(()=>{if(this.__isLatestRender(e))return Ue(o.action,[e,r],o)}).then(i=>{if(pt(i)&&(i instanceof HTMLElement||i.redirect||i===he))return i;if(z(o.redirect))return r.redirect(o.redirect);if(o.bundle)return Xo(o.bundle).then(()=>{},()=>{throw new Error(F(`Bundle not found: ${o.bundle}. Check if the file name is correct`))})}).then(i=>{if(pt(i))return i;if(z(o.component))return r.component(o.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,o=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),o||this.__onNavigationEvent(),this.ready}render(e,o){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},z(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then(i=>this.__fullyResolveChain(i)).then(i=>{if(this.__isLatestRender(i)){const s=this.__previousContext;if(i===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=j(i),o&&this.__updateBrowserHistory(i,n===1),we("location-changed",{router:this,location:this.location}),i.__skipAttach)return this.__copyUnchangedElements(i,s),this.__previousContext=i,this.location;this.__addAppearingContent(i,s);const l=this.__animateIfNeeded(i);return this.__runOnAfterEnterCallbacks(i),this.__runOnAfterLeaveCallbacks(i,s),l.then(()=>{if(this.__isLatestRender(i))return this.__removeDisappearingContent(),this.__previousContext=i,this.location})}}).catch(i=>{if(n===this.__lastStartedRenderId)throw o&&this.__updateBrowserHistory(r),De(this.__outlet&&this.__outlet.children),this.location=j(Object.assign(r,{resolver:this})),we("error",Object.assign({router:this,error:i},r)),i}),this.ready}__fullyResolveChain(e,o=e){return this.__findComponentContextAfterAllRedirects(o).then(n=>{const i=n!==o?n:e,l=Be(Lo(n.chain),n.resolver)===n.pathname,a=(d,p=d.route,v)=>d.next(void 0,p,v).then(u=>u===null||u===he?l?d:p.parent!==null?a(d,p.parent,u):u:u);return a(n).then(d=>{if(d===null||d===he)throw ko(i);return d&&d!==he&&d!==n?this.__fullyResolveChain(i,d):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const o=e.result;return o instanceof HTMLElement?(Cn(e,o),Promise.resolve(e)):o.redirect?this.__redirect(o.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):o instanceof Error?Promise.reject(o):Promise.reject(new Error(F(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Jo(o)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(o=>o===this.__previousContext||o===e?o:this.__fullyResolveChain(o))}__runOnBeforeCallbacks(e){const o=this.__previousContext||{},n=o.chain||[],r=e.chain;let i=Promise.resolve();const s=()=>({cancel:!0}),l=a=>Xt(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,r.length)&&!(n[a].route!==r[a].route||n[a].path!==r[a].path&&n[a].element!==r[a].element||!this.__isReusableElement(n[a].element,r[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,o.result),e.__skipAttach){for(let a=r.length-1;a>=0;a--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:s},n[a]);for(let a=0;a<r.length;a++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:s,redirect:l},r[a]),n[a].element.location=j(e,n[a].route)}else for(let a=n.length-1;a>=e.__divergedChainIndex;a--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:s},n[a])}if(!e.__skipAttach)for(let a=0;a<r.length;a++)a<e.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=j(e,n[a].route)):(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:s,redirect:l},r[a]),r[a].element&&(r[a].element.location=j(e,r[a].route)));return i.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,o,n,r){const i=j(o);return e.then(s=>{if(this.__isLatestRender(o))return Qt("onBeforeLeave",[i,n,this],r.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(e,o,n,r){const i=j(o,r.route);return e.then(s=>{if(this.__isLatestRender(o))return Qt("onBeforeEnter",[i,n,this],r.element)(s)})}__isReusableElement(e,o){return e&&o?this.__createdByRouter.get(e)&&this.__createdByRouter.get(o)?e.localName===o.localName:e===o:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,o,n){if(o>xn)throw new Error(F(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(o||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(F(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:o="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==o||window.location.hash!==n){const i=r?"replaceState":"pushState";window.history[i](null,document.title,e+o+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,o){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const i=o&&o.chain[r].element;if(i)if(i.parentNode===n)e.chain[r].element=i,n=i;else break}return n}__addAppearingContent(e,o){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,o);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(i=>this.__addedByRouter.get(i)&&i!==e.result);let r=n;for(let i=e.__divergedChainIndex;i<e.chain.length;i++){const s=e.chain[i].element;s&&(r.appendChild(s),this.__addedByRouter.set(s,!0),r===n&&this.__appearingContent.push(s),r=s)}}__removeDisappearingContent(){this.__disappearingContent&&De(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(De(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,o){if(o)for(let n=o.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=o.chain[n].element;if(r)try{const i=j(e);Ue(r.onAfterLeave,[i,{},o.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&De(r.children)}}}__runOnAfterEnterCallbacks(e){for(let o=e.__divergedChainIndex;o<e.chain.length&&this.__isLatestRender(e);o++){const n=e.chain[o].element||{},r=j(e,e.chain[o].route);Ue(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const o=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],i=e.chain;let s;for(let l=i.length;l>0;l--)if(i[l-1].route.animate){s=i[l-1].route.animate;break}if(o&&n&&s){const l=Je(s)&&s.leave||"leaving",a=Je(s)&&s.enter||"entering";r.push(Jt(o,l)),r.push(Jt(n,a))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:o,search:n,hash:r}=e?e.detail:window.location;z(this.__normalizePathname(o))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:o,search:n,hash:r},!0))}static setTriggers(...e){wn(e)}urlForName(e,o){return this.__urlForName||(this.__urlForName=bn(this)),Be(this.__urlForName(e,o),this)}urlForPath(e,o){return Be(K.pathToRegexp.compile(e)(o),this)}static go(e){const{pathname:o,search:n,hash:r}=z(e)?this.__createUrl(e,"http://a"):e;return we("go",{pathname:o,search:n,hash:r})}}const $n=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,qe=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function In(){function t(){return!0}return Mo(t)}function An(){try{return Tn()?!0:Nn()?qe?!Rn():!In():!1}catch{return!1}}function Tn(){return localStorage.getItem("vaadin.developmentmode.force")}function Nn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Rn(){return!!(qe&&Object.keys(qe).map(e=>qe[e]).filter(e=>e.productionMode).length>0)}function Mo(t,e){if(typeof t!="function")return;const o=$n.exec(t.toString());if(o)try{t=new Function(o[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return t(e)}window.Vaadin=window.Vaadin||{};const Zt=function(t,e){if(window.Vaadin.developmentMode)return Mo(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=An());function On(){}const Pn=function(){if(typeof Zt=="function")return Zt(On)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Pn();K.NavigationTrigger={POPSTATE:tn,CLICK:Zo};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ln=(t,e)=>(customElements.define(t,e),e),Mn=(t,e)=>{const{kind:o,elements:n}=e;return{kind:o,elements:n,finisher(r){customElements.define(t,r)}}},L=t=>e=>typeof e=="function"?Ln(t,e):Mn(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(t){return b({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vn=({finisher:t,descriptor:e})=>(o,n)=>{var r;if(n!==void 0){const i=o.constructor;e!==void 0&&Object.defineProperty(o,n,e(n)),t==null||t(i,n)}else{const i=(r=o.originalKey)!==null&&r!==void 0?r:o.key,s=e!=null?{kind:"method",placement:"prototype",key:i,descriptor:e(o.key)}:{...o,key:i};return t!=null&&(s.finisher=function(l){t(l,i)}),s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ae(t,e){return Vn({descriptor:o=>{const n={get(){var r,i;return(i=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(e){const r=typeof o=="symbol"?Symbol():`__${o}`;n.get=function(){var i,s;return this[r]===void 0&&(this[r]=(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null),this[r]}}return n}})}const xe=window;xe.Vaadin=xe.Vaadin||{};xe.Vaadin.registrations=xe.Vaadin.registrations||[];xe.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.18"});class eo extends Error{}const ye=window.document.body,w=window;class Dn{constructor(e){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,this.navigation="",ye.$=ye.$||[],this.config=e||{},w.Vaadin=w.Vaadin||{},w.Vaadin.Flow=w.Vaadin.Flow||{},w.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const o=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||o&&o.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,w.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,w.Vaadin.connectionState.loadingFinished(),!w.Vaadin.listener&&(w.Vaadin.listener={},document.addEventListener("click",e=>{e.target&&(e.target.hasAttribute("router-link")?this.navigation="link":e.composedPath().some(o=>o.nodeName==="A")&&(this.navigation="client"))},{capture:!0}))}get action(){return async e=>{if(this.pathname=e.pathname,w.Vaadin.connectionState.online)try{await this.flowInit()}catch(o){if(o instanceof eo)return w.Vaadin.connectionState.state=fe.CONNECTION_LOST,this.offlineStubAction();throw o}else return this.offlineStubAction();return this.container.onBeforeEnter=(o,n)=>this.flowNavigate(o,n),this.container.onBeforeLeave=(o,n)=>this.flowLeave(o,n),this.container}}async flowLeave(e,o){const{connectionState:n}=w.Vaadin;return this.pathname===e.pathname||!this.isFlowClientLoaded()||n.offline?Promise.resolve({}):new Promise(r=>{this.loadingStarted(),this.container.serverConnected=i=>{r(o&&i?o.prevent():{}),this.loadingFinished()},ye.$server.leaveNavigation(this.getFlowRoutePath(e),this.getFlowRouteQuery(e))})}async flowNavigate(e,o){return this.response?new Promise(n=>{this.loadingStarted(),this.container.serverConnected=(r,i)=>{o&&r?n(o.prevent()):o&&o.redirect&&i?n(o.redirect(i.pathname)):(this.container.style.display="",n(this.container)),this.loadingFinished()},ye.$server.connectClient(this.getFlowRoutePath(e),this.getFlowRouteQuery(e),this.appShellTitle,history.state,this.navigation),this.navigation="history"}):Promise.resolve(this.container)}getFlowRoutePath(e){return decodeURIComponent(e.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(e){return e.search&&e.search.substring(1)||""}async flowInit(){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi();const{pushScript:e,appConfig:o}=this.response;typeof e=="string"&&await this.loadScript(e);const{appId:n}=o;await(await E(()=>import("./FlowBootstrap-feff2646.js"),[],import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(n),await this.config.imports());const i=`flow-container-${n.toLowerCase()}`,s=document.querySelector(i);s?this.container=s:(this.container=document.createElement(i),this.container.id=n),ye.$[n]=this.container;const l=await E(()=>import("./FlowClient-d5d5e377.js"),[],import.meta.url);await this.flowInitClient(l),this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(e){return new Promise((o,n)=>{const r=document.createElement("script");r.onload=()=>o(),r.onerror=n,r.src=e,document.body.appendChild(r)})}injectAppIdScript(e){const o=e.substring(0,e.lastIndexOf("-")),n=document.createElement("script");n.type="module",n.setAttribute("data-app-id",o),document.body.append(n)}async flowInitClient(e){return e.init(),new Promise(o=>{const n=setInterval(()=>{Object.keys(w.Vaadin.Flow.clients).filter(i=>i!=="TypeScript").reduce((i,s)=>i||w.Vaadin.Flow.clients[s].isActive(),!1)||(clearInterval(n),o())},5)})}async flowInitUi(){const e=w.Vaadin&&w.Vaadin.TypeScript&&w.Vaadin.TypeScript.initial;return e?(w.Vaadin.TypeScript.initial=void 0,Promise.resolve(e)):new Promise((o,n)=>{const i=new XMLHttpRequest,s=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}`;i.open("GET",s),i.onerror=()=>n(new eo(`Invalid server response when initializing Flow UI.
        ${i.status}
        ${i.responseText}`)),i.onload=()=>{const l=i.getResponseHeader("content-type");l&&l.indexOf("application/json")!==-1?o(JSON.parse(i.responseText)):i.onerror()},i.send()})}addConnectionIndicator(){Yo.create(),w.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){w.Vaadin.connectionState.state=fe.RECONNECTING;const e=new XMLHttpRequest;e.open("HEAD","sw.js"),e.onload=()=>{w.Vaadin.connectionState.state=fe.CONNECTED},e.onerror=()=>{w.Vaadin.connectionState.state=fe.CONNECTION_LOST},setTimeout(()=>e.send(),50)}}),w.addEventListener("offline",()=>{this.isFlowClientLoaded()||(w.Vaadin.connectionState.state=fe.CONNECTION_LOST)})}async offlineStubAction(){const e=document.createElement("iframe"),o="./offline-stub.html";e.setAttribute("src",o),e.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let n;const r=()=>{n!==void 0&&(w.Vaadin.connectionState.removeStateChangeListener(n),n=void 0)};return e.onBeforeEnter=(i,s,l)=>{n=()=>{w.Vaadin.connectionState.online&&(r(),l.render(i,!1))},w.Vaadin.connectionState.addStateChangeListener(n)},e.onBeforeLeave=(i,s,l)=>{r()},e}isFlowClientLoaded(){return this.response!==void 0}}const{serverSideRoutes:jn}=new Dn({imports:()=>E(()=>import("./generated-flow-imports-9e411ee7.js"),["./generated-flow-imports-9e411ee7.js","./ConnectionIndicator-81121820.js"],import.meta.url)}),zn=[...jn],Fn=new K(document.querySelector("#outlet"));Fn.setRoutes(zn);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),o=new WeakMap,n=typeof DOMException=="object"?Error:DOMException,r=Object.defineProperty,i=Array.prototype.forEach,s=/@import.+?;?$/gm;function l(c){var h=c.replace(s,"");return h!==c&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),h.trim()}function a(c){return"isConnected"in c?c.isConnected:document.contains(c)}function d(c){return c.filter(function(h,g){return c.indexOf(h)===g})}function p(c,h){return c.filter(function(g){return h.indexOf(g)===-1})}function v(c){c.parentNode.removeChild(c)}function u(c){return c.shadowRoot||o.get(c)}var f=["addRule","deleteRule","insertRule","removeRule"],Ne=CSSStyleSheet,oe=Ne.prototype;oe.replace=function(){return Promise.reject(new n("Can't call replace on non-constructed CSSStyleSheets."))},oe.replaceSync=function(){throw new n("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function Re(c){return typeof c=="object"?ie.isPrototypeOf(c)||oe.isPrototypeOf(c):!1}function at(c){return typeof c=="object"?oe.isPrototypeOf(c):!1}var M=new WeakMap,B=new WeakMap,ne=new WeakMap,re=new WeakMap;function lt(c,h){var g=document.createElement("style");return ne.get(c).set(h,g),B.get(c).push(h),g}function H(c,h){return ne.get(c).get(h)}function Oe(c,h){ne.get(c).delete(h),B.set(c,B.get(c).filter(function(g){return g!==h}))}function Nt(c,h){requestAnimationFrame(function(){h.textContent=M.get(c).textContent,re.get(c).forEach(function(g){return h.sheet[g.method].apply(h.sheet,g.args)})})}function Pe(c){if(!M.has(c))throw new TypeError("Illegal invocation")}function dt(){var c=this,h=document.createElement("style");e.body.appendChild(h),M.set(c,h),B.set(c,[]),ne.set(c,new WeakMap),re.set(c,[])}var ie=dt.prototype;ie.replace=function(h){try{return this.replaceSync(h),Promise.resolve(this)}catch(g){return Promise.reject(g)}},ie.replaceSync=function(h){if(Pe(this),typeof h=="string"){var g=this;M.get(g).textContent=l(h),re.set(g,[]),B.get(g).forEach(function(T){T.isConnected()&&Nt(g,H(g,T))})}},r(ie,"cssRules",{configurable:!0,enumerable:!0,get:function(){return Pe(this),M.get(this).sheet.cssRules}}),r(ie,"media",{configurable:!0,enumerable:!0,get:function(){return Pe(this),M.get(this).sheet.media}}),f.forEach(function(c){ie[c]=function(){var h=this;Pe(h);var g=arguments;re.get(h).push({method:c,args:g}),B.get(h).forEach(function(O){if(O.isConnected()){var I=H(h,O).sheet;I[c].apply(I,g)}});var T=M.get(h).sheet;return T[c].apply(T,g)}}),r(dt,Symbol.hasInstance,{configurable:!0,value:Re});var Rt={childList:!0,subtree:!0},Ot=new WeakMap;function se(c){var h=Ot.get(c);return h||(h=new Mt(c),Ot.set(c,h)),h}function Pt(c){r(c.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return se(this).sheets},set:function(h){se(this).update(h)}})}function ct(c,h){for(var g=document.createNodeIterator(c,NodeFilter.SHOW_ELEMENT,function(O){return u(O)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),T=void 0;T=g.nextNode();)h(u(T))}var Le=new WeakMap,ae=new WeakMap,Me=new WeakMap;function Go(c,h){return h instanceof HTMLStyleElement&&ae.get(c).some(function(g){return H(g,c)})}function Lt(c){var h=Le.get(c);return h instanceof Document?h.body:h}function ht(c){var h=document.createDocumentFragment(),g=ae.get(c),T=Me.get(c),O=Lt(c);T.disconnect(),g.forEach(function(I){h.appendChild(H(I,c)||lt(I,c))}),O.insertBefore(h,null),T.observe(O,Rt),g.forEach(function(I){Nt(I,H(I,c))})}function Mt(c){var h=this;h.sheets=[],Le.set(h,c),ae.set(h,[]),Me.set(h,new MutationObserver(function(g,T){if(!document){T.disconnect();return}g.forEach(function(O){t||i.call(O.addedNodes,function(I){I instanceof Element&&ct(I,function(le){se(le).connect()})}),i.call(O.removedNodes,function(I){I instanceof Element&&(Go(h,I)&&ht(h),t||ct(I,function(le){se(le).disconnect()}))})})}))}if(Mt.prototype={isConnected:function(){var c=Le.get(this);return c instanceof Document?c.readyState!=="loading":a(c.host)},connect:function(){var c=Lt(this);Me.get(this).observe(c,Rt),ae.get(this).length>0&&ht(this),ct(c,function(h){se(h).connect()})},disconnect:function(){Me.get(this).disconnect()},update:function(c){var h=this,g=Le.get(h)===document?"Document":"ShadowRoot";if(!Array.isArray(c))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+g+": Iterator getter is not callable.");if(!c.every(Re))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+g+": Failed to convert value to 'CSSStyleSheet'");if(c.some(at))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+g+": Can't adopt non-constructed stylesheets");h.sheets=c;var T=ae.get(h),O=d(c),I=p(T,O);I.forEach(function(le){v(H(le,h)),Oe(le,h)}),ae.set(h,O),h.isConnected()&&O.length>0&&ht(h)}},window.CSSStyleSheet=dt,Pt(Document),"ShadowRoot"in window){Pt(ShadowRoot);var Vt=Element.prototype,Ko=Vt.attachShadow;Vt.attachShadow=function(h){var g=Ko.call(this,h);return h.mode==="closed"&&o.set(this,g),g}}var Ve=se(document);Ve.isConnected()?Ve.connect():document.addEventListener("DOMContentLoaded",Ve.connect.bind(Ve))})();/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vo=Symbol.for(""),Un=t=>{if((t==null?void 0:t.r)===Vo)return t==null?void 0:t._$litStatic$},Bn=t=>{if(t._$litStatic$!==void 0)return t._$litStatic$;throw new Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)},je=(t,...e)=>({_$litStatic$:e.reduce((o,n,r)=>o+Bn(n)+t[r+1],t[0]),r:Vo}),to=new Map,qn=t=>(e,...o)=>{const n=o.length;let r,i;const s=[],l=[];let a=0,d=!1,p;for(;a<n;){for(p=e[a];a<n&&(i=o[a],(r=Un(i))!==void 0);)p+=r+e[++a],d=!0;a!==n&&l.push(i),s.push(p),a++}if(a===n&&s.push(e[n]),d){const v=s.join("$$lit$$");e=to.get(v),e===void 0&&(s.raw=s,to.set(v,e=s)),o=l}return t(e,...o)},Hn=qn(m),Wn="modulepreload",Gn=function(t){return"/"+t},oo={},_=function(t,e,o){if(!e||e.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(e.map(r=>{if(r=Gn(r),r in oo)return;oo[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(o)for(let a=n.length-1;a>=0;a--){const d=n[a];if(d.href===r&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${s}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":Wn,i||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),i)return new Promise((a,d)=>{l.addEventListener("load",a),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};function Kn(t){var e;const o=[];for(;t&&t.parentNode;){const n=Yn(t);if(n.nodeId!==-1){if((e=n.element)!=null&&e.tagName.startsWith("FLOW-CONTAINER-"))break;o.push(n)}t=t.parentElement?t.parentElement:t.parentNode.host}return o.reverse()}function Yn(t){const e=window.Vaadin;if(e&&e.Flow){const{clients:o}=e.Flow,n=Object.keys(o);for(const r of n){const i=o[r];if(i.getNodeId){const s=i.getNodeId(t);if(s>=0)return{nodeId:s,uiId:i.getUIId(),element:t}}}}return{nodeId:-1,uiId:-1,element:void 0}}function Jn(t,e){if(t.contains(e))return!0;let o=e;const n=e.ownerDocument;for(;o&&o!==n&&o!==t;)o=o.parentNode||(o instanceof ShadowRoot?o.host:null);return o===t}const Xn=(t,e)=>{const o=t[e];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((n,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};var $=(t=>(t.text="text",t.checkbox="checkbox",t.range="range",t.color="color",t))($||{});const U={lumoSize:["--lumo-size-xs","--lumo-size-s","--lumo-size-m","--lumo-size-l","--lumo-size-xl"],lumoSpace:["--lumo-space-xs","--lumo-space-s","--lumo-space-m","--lumo-space-l","--lumo-space-xl"],lumoBorderRadius:["0","--lumo-border-radius-m","--lumo-border-radius-l"],lumoFontSize:["--lumo-font-size-xxs","--lumo-font-size-xs","--lumo-font-size-s","--lumo-font-size-m","--lumo-font-size-l","--lumo-font-size-xl","--lumo-font-size-xxl","--lumo-font-size-xxxl"],lumoTextColor:["--lumo-header-text-color","--lumo-body-text-color","--lumo-secondary-text-color","--lumo-tertiary-text-color","--lumo-disabled-text-color","--lumo-primary-text-color","--lumo-error-text-color","--lumo-success-text-color"],basicBorderSize:["0px","1px","2px","3px"]},Qn=Object.freeze(Object.defineProperty({__proto__:null,presets:U},Symbol.toStringTag,{value:"Module"})),be={textColor:{propertyName:"color",displayName:"Text color",editorType:$.color,presets:U.lumoTextColor},fontSize:{propertyName:"font-size",displayName:"Font size",editorType:$.range,presets:U.lumoFontSize,icon:"font"},fontWeight:{propertyName:"font-weight",displayName:"Bold",editorType:$.checkbox,checkedValue:"bold"},fontStyle:{propertyName:"font-style",displayName:"Italic",editorType:$.checkbox,checkedValue:"italic"}},ce={backgroundColor:{propertyName:"background-color",displayName:"Background color",editorType:$.color},borderColor:{propertyName:"border-color",displayName:"Border color",editorType:$.color},borderWidth:{propertyName:"border-width",displayName:"Border width",editorType:$.range,presets:U.basicBorderSize,icon:"square"},borderRadius:{propertyName:"border-radius",displayName:"Border radius",editorType:$.range,presets:U.lumoBorderRadius,icon:"square"},padding:{propertyName:"padding",displayName:"Padding",editorType:$.range,presets:U.lumoSpace,icon:"square"},gap:{propertyName:"gap",displayName:"Spacing",editorType:$.range,presets:U.lumoSpace,icon:"square"}},Zn={height:{propertyName:"height",displayName:"Size",editorType:$.range,presets:U.lumoSize,icon:"square"},paddingInline:{propertyName:"padding-inline",displayName:"Padding",editorType:$.range,presets:U.lumoSpace,icon:"square"}},er={iconColor:{propertyName:"color",displayName:"Icon color",editorType:$.color,presets:U.lumoTextColor},iconSize:{propertyName:"font-size",displayName:"Icon size",editorType:$.range,presets:U.lumoFontSize,icon:"font"}},tr=Object.freeze(Object.defineProperty({__proto__:null,fieldProperties:Zn,iconProperties:er,shapeProperties:ce,textProperties:be},Symbol.toStringTag,{value:"Module"}));function Do(t){const e=t.charAt(0).toUpperCase()+t.slice(1);return{tagName:t,displayName:e,elements:[{selector:t,displayName:"Element",properties:[ce.backgroundColor,ce.borderColor,ce.borderWidth,ce.borderRadius,ce.padding,be.textColor,be.fontSize,be.fontWeight,be.fontStyle]}]}}const or=Object.freeze(Object.defineProperty({__proto__:null,createGenericMetadata:Do},Symbol.toStringTag,{value:"Module"})),nr=t=>Xn(Object.assign({"./components/defaults.ts":()=>_(()=>Promise.resolve().then(()=>tr),void 0),"./components/generic.ts":()=>_(()=>Promise.resolve().then(()=>or),void 0),"./components/presets.ts":()=>_(()=>Promise.resolve().then(()=>Qn),void 0),"./components/vaadin-app-layout.ts":()=>_(()=>E(()=>import("./vaadin-app-layout-37492a04-ecd6da09.js"),["./vaadin-app-layout-37492a04-ecd6da09.js","./ConnectionIndicator-81121820.js"],import.meta.url),[]),"./components/vaadin-avatar.ts":()=>_(()=>E(()=>import("./vaadin-avatar-7047be31-e8bab66c.js"),["./vaadin-avatar-7047be31-e8bab66c.js","./ConnectionIndicator-81121820.js"],import.meta.url),[]),"./components/vaadin-big-decimal-field.ts":()=>_(()=>E(()=>import("./vaadin-big-decimal-field-b42c1de1-829bfb2e.js"),["./vaadin-big-decimal-field-b42c1de1-829bfb2e.js","./vaadin-text-field-e82c445d-54d61ccf.js","./ConnectionIndicator-81121820.js"],import.meta.url),["assets/vaadin-big-decimal-field-b42c1de1.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-button.ts":()=>_(()=>E(()=>import("./vaadin-button-79ad9d5f-ccfd9037.js"),["./vaadin-button-79ad9d5f-ccfd9037.js","./ConnectionIndicator-81121820.js"],import.meta.url),[]),"./components/vaadin-checkbox-group.ts":()=>_(()=>E(()=>import("./vaadin-checkbox-group-a9a9e85d-2980a288.js"),["./vaadin-checkbox-group-a9a9e85d-2980a288.js","./vaadin-text-field-e82c445d-54d61ccf.js","./ConnectionIndicator-81121820.js","./vaadin-checkbox-13797fc9-94e97661.js"],import.meta.url),["assets/vaadin-checkbox-group-a9a9e85d.js","assets/vaadin-text-field-e82c445d.js","assets/vaadin-checkbox-13797fc9.js"]),"./components/vaadin-checkbox.ts":()=>_(()=>E(()=>import("./vaadin-checkbox-13797fc9-94e97661.js"),["./vaadin-checkbox-13797fc9-94e97661.js","./ConnectionIndicator-81121820.js"],import.meta.url),[]),"./components/vaadin-combo-box.ts":()=>_(()=>E(()=>import("./vaadin-combo-box-9046f78f-d906ff7f.js"),["./vaadin-combo-box-9046f78f-d906ff7f.js","./vaadin-text-field-e82c445d-54d61ccf.js","./ConnectionIndicator-81121820.js"],import.meta.url),["assets/vaadin-combo-box-9046f78f.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-email-field.ts":()=>_(()=>E(()=>import("./vaadin-email-field-da851bcb-feb764fe.js"),["./vaadin-email-field-da851bcb-feb764fe.js","./vaadin-text-field-e82c445d-54d61ccf.js","./ConnectionIndicator-81121820.js"],import.meta.url),["assets/vaadin-email-field-da851bcb.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-horizontal-layout.ts":()=>_(()=>E(()=>import("./vaadin-horizontal-layout-f7b1ab51-dd66abeb.js"),["./vaadin-horizontal-layout-f7b1ab51-dd66abeb.js","./ConnectionIndicator-81121820.js"],import.meta.url),[]),"./components/vaadin-integer-field.ts":()=>_(()=>E(()=>import("./vaadin-integer-field-6e2954cf-9d123527.js"),["./vaadin-integer-field-6e2954cf-9d123527.js","./vaadin-text-field-e82c445d-54d61ccf.js","./ConnectionIndicator-81121820.js"],import.meta.url),["assets/vaadin-integer-field-6e2954cf.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-menu-bar.ts":()=>_(()=>E(()=>import("./vaadin-menu-bar-be33385c-bccb1cfc.js"),["./vaadin-menu-bar-be33385c-bccb1cfc.js","./ConnectionIndicator-81121820.js"],import.meta.url),[]),"./components/vaadin-number-field.ts":()=>_(()=>E(()=>import("./vaadin-number-field-31df11f5-53b3c6f3.js"),["./vaadin-number-field-31df11f5-53b3c6f3.js","./vaadin-text-field-e82c445d-54d61ccf.js","./ConnectionIndicator-81121820.js"],import.meta.url),["assets/vaadin-number-field-31df11f5.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-password-field.ts":()=>_(()=>E(()=>import("./vaadin-password-field-49ffb113-e32a2247.js"),["./vaadin-password-field-49ffb113-e32a2247.js","./vaadin-text-field-e82c445d-54d61ccf.js","./ConnectionIndicator-81121820.js"],import.meta.url),["assets/vaadin-password-field-49ffb113.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-progress-bar.ts":()=>_(()=>E(()=>import("./vaadin-progress-bar-3b53bb70-0e080e76.js"),["./vaadin-progress-bar-3b53bb70-0e080e76.js","./ConnectionIndicator-81121820.js"],import.meta.url),[]),"./components/vaadin-radio-group.ts":()=>_(()=>E(()=>import("./vaadin-radio-group-4a6e2cf4-aea3a5d8.js"),["./vaadin-radio-group-4a6e2cf4-aea3a5d8.js","./vaadin-text-field-e82c445d-54d61ccf.js","./ConnectionIndicator-81121820.js"],import.meta.url),["assets/vaadin-radio-group-4a6e2cf4.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-scroller.ts":()=>_(()=>E(()=>import("./vaadin-scroller-35e68818-fa11834d.js"),["./vaadin-scroller-35e68818-fa11834d.js","./ConnectionIndicator-81121820.js"],import.meta.url),[]),"./components/vaadin-select.ts":()=>_(()=>E(()=>import("./vaadin-select-5d6ab45b-95f0f8d2.js"),["./vaadin-select-5d6ab45b-95f0f8d2.js","./vaadin-text-field-e82c445d-54d61ccf.js","./ConnectionIndicator-81121820.js"],import.meta.url),["assets/vaadin-select-5d6ab45b.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-split-layout.ts":()=>_(()=>E(()=>import("./vaadin-split-layout-10c9713b-aebd05b0.js"),["./vaadin-split-layout-10c9713b-aebd05b0.js","./ConnectionIndicator-81121820.js"],import.meta.url),[]),"./components/vaadin-text-area.ts":()=>_(()=>E(()=>import("./vaadin-text-area-41c5f60c-102dd795.js"),["./vaadin-text-area-41c5f60c-102dd795.js","./vaadin-text-field-e82c445d-54d61ccf.js","./ConnectionIndicator-81121820.js"],import.meta.url),["assets/vaadin-text-area-41c5f60c.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-text-field.ts":()=>_(()=>E(()=>import("./vaadin-text-field-e82c445d-54d61ccf.js"),["./vaadin-text-field-e82c445d-54d61ccf.js","./ConnectionIndicator-81121820.js"],import.meta.url),[]),"./components/vaadin-time-picker.ts":()=>_(()=>E(()=>import("./vaadin-time-picker-2fa5314f-50b3a567.js"),["./vaadin-time-picker-2fa5314f-50b3a567.js","./vaadin-text-field-e82c445d-54d61ccf.js","./ConnectionIndicator-81121820.js"],import.meta.url),["assets/vaadin-time-picker-2fa5314f.js","assets/vaadin-text-field-e82c445d.js"]),"./components/vaadin-vertical-layout.ts":()=>_(()=>E(()=>import("./vaadin-vertical-layout-ff73c403-66e7cec6.js"),["./vaadin-vertical-layout-ff73c403-66e7cec6.js","./ConnectionIndicator-81121820.js"],import.meta.url),[]),"./components/vaadin-virtual-list.ts":()=>_(()=>E(()=>import("./vaadin-virtual-list-62d4499a-3450ff8c.js"),["./vaadin-virtual-list-62d4499a-3450ff8c.js","./ConnectionIndicator-81121820.js"],import.meta.url),[])}),`./components/${t}.ts`);class rr{constructor(e=nr){this.loader=e,this.metadata={}}async getMetadata(e){var o;const n=(o=e.element)==null?void 0:o.localName;if(!n)return null;if(!n.startsWith("vaadin-"))return Do(n);let r=this.metadata[n];if(r)return r;try{r=(await this.loader(n)).default,this.metadata[n]=r}catch{console.warn(`Failed to load metadata for component: ${n}`)}return r||null}}const ir=new rr,He={crosshair:de`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
   <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
   <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
   <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
   <path d="M9 12l6 0"></path>
   <path d="M12 9l0 6"></path>
</svg>`,square:de`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="currentColor" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
</svg>`,font:de`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 20l3 0"></path>
   <path d="M14 20l7 0"></path>
   <path d="M6.9 15l6.9 0"></path>
   <path d="M10.2 6.3l5.8 13.7"></path>
   <path d="M5 20l6 -16l2 0l7 16"></path>
</svg>`,undo:de`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1"></path>
</svg>`,redo:de`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1"></path>
</svg>`,cross:de`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M18 6l-12 12"></path>
   <path d="M6 6l12 12"></path>
</svg>`};var Se=(t=>(t.disabled="disabled",t.enabled="enabled",t.missing_theme="missing_theme",t))(Se||{}),P=(t=>(t.local="local",t.global="global",t))(P||{});function ut(t,e){return`${t}|${e}`}class Y{constructor(e){this._properties={},this._metadata=e}get metadata(){return this._metadata}get properties(){return Object.values(this._properties)}getPropertyValue(e,o){return this._properties[ut(e,o)]||null}updatePropertyValue(e,o,n,r){if(!n){delete this._properties[ut(e,o)];return}let i=this.getPropertyValue(e,o);i?(i.value=n,i.modified=r||!1):(i={elementSelector:e,propertyName:o,value:n,modified:r||!1},this._properties[ut(e,o)]=i)}addPropertyValues(e){e.forEach(o=>{this.updatePropertyValue(o.elementSelector,o.propertyName,o.value,o.modified)})}getPropertyValuesForElement(e){return this.properties.filter(o=>o.elementSelector===e)}static combine(...e){if(e.length<2)throw new Error("Must provide at least two themes");const o=new Y(e[0].metadata);return e.forEach(n=>o.addPropertyValues(n.properties)),o}static fromServerRules(e,o,n){const r=new Y(e);return e.elements.forEach(i=>{const s=ue(i,o),l=n.find(a=>a.selector===s);l&&i.properties.forEach(a=>{const d=l.properties[a.propertyName];d&&r.updatePropertyValue(i.selector,a.propertyName,d,!0)})}),r}}function ue(t,e){const o=t.selector;if(e.themeScope==="global")return o;if(!e.localClassName)throw new Error("Can not build local scoped selector without instance class name");const n=o.match(/^[\w\d-_]+/),r=n&&n[0];if(!r)throw new Error(`Selector does not start with a tag name: ${o}`);return`${r}.${e.localClassName}${o.substring(r.length,o.length)}`}function sr(t,e,o,n){const r=ue(t,e),i={[o]:n};return o==="border-width"&&(parseInt(n)>0?i["border-style"]="solid":i["border-style"]=""),{selector:r,properties:i}}function ar(t){const e=Object.entries(t.properties).map(([o,n])=>`${o}: ${n};`).join(" ");return`${t.selector} { ${e} }`}let ze,no="";function St(t){ze||(ze=new CSSStyleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets,ze]),no+=t.cssText,ze.replaceSync(no)}const jo=S`
  .editor-row {
    display: flex;
    align-items: baseline;
    padding: var(--theme-editor-section-horizontal-padding);
    gap: 10px;
  }

  .editor-row > .label {
    flex: 0 0 auto;
    width: 120px;
  }

  .editor-row > .editor {
    flex: 1 1 0;
  }
`,ro="__vaadin-theme-editor-measure-element",io=/((::before)|(::after))$/,so=/::part\(([\w\d_-]+)\)$/;St(S`
  .__vaadin-theme-editor-measure-element {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  }
`);async function lr(t){const e=new Y(t),o=document.createElement(t.tagName);o.classList.add(ro),document.body.append(o),t.setupElement&&await t.setupElement(o);const n={themeScope:P.local,localClassName:ro};try{t.elements.forEach(r=>{ao(o,r,n,!0);let i=ue(r,n);const s=i.match(io);i=i.replace(io,"");const l=i.match(so),a=i.replace(so,"");let d=document.querySelector(a);if(d&&l){const u=`[part~="${l[1]}"]`;d=d.shadowRoot.querySelector(u)}if(!d)return;d.style.transition="none";const p=s?s[1]:null,v=getComputedStyle(d,p);r.properties.forEach(u=>{const f=v.getPropertyValue(u.propertyName)||u.defaultValue||"";e.updatePropertyValue(r.selector,u.propertyName,f)}),ao(o,r,n,!1)})}finally{try{t.cleanupElement&&await t.cleanupElement(o)}finally{o.remove()}}return e}function ao(t,e,o,n){if(e.stateAttribute){if(e.stateElementSelector){const r=ue({...e,selector:e.stateElementSelector},o);t=document.querySelector(r)}t&&(n?t.setAttribute(e.stateAttribute,""):t.removeAttribute(e.stateAttribute))}}function lo(t){return t.trim()}function dr(t){const e=t.element;if(!e)return null;const o=e.querySelector("label");if(o&&o.textContent)return lo(o.textContent);const n=e.textContent;return n?lo(n):null}class cr{constructor(){this._localClassNameMap=new Map}get stylesheet(){return this.ensureStylesheet(),this._stylesheet}add(e){this.ensureStylesheet(),this._stylesheet.replaceSync(e)}clear(){this.ensureStylesheet(),this._stylesheet.replaceSync("")}previewLocalClassName(e,o){if(!e)return;const n=this._localClassNameMap.get(e);n&&(e.classList.remove(n),e.overlayClass=null),o?(e.classList.add(o),e.overlayClass=o,this._localClassNameMap.set(e,o)):this._localClassNameMap.delete(e)}ensureStylesheet(){this._stylesheet||(this._stylesheet=new CSSStyleSheet,this._stylesheet.replaceSync(""),document.adoptedStyleSheets=[...document.adoptedStyleSheets,this._stylesheet])}}const Z=new cr;class hr{constructor(e){this.pendingRequests={},this.requestCounter=0,this.globalUiId=this.getGlobalUiId(),this.wrappedConnection=e;const o=this.wrappedConnection.onMessage;this.wrappedConnection.onMessage=n=>{n.command==="themeEditorResponse"?this.handleResponse(n.data):o.call(this.wrappedConnection,n)}}sendRequest(e,o){const n=(this.requestCounter++).toString(),r=o.uiId??this.globalUiId;return new Promise((i,s)=>{this.wrappedConnection.send(e,{...o,requestId:n,uiId:r}),this.pendingRequests[n]={resolve:i,reject:s}})}handleResponse(e){const o=this.pendingRequests[e.requestId];if(!o){console.warn("Received response for unknown request");return}delete this.pendingRequests[e.requestId],e.code==="ok"?o.resolve(e):o.reject(e)}loadComponentMetadata(e){return this.sendRequest("themeEditorComponentMetadata",{nodeId:e.nodeId})}setLocalClassName(e,o){return this.sendRequest("themeEditorLocalClassName",{nodeId:e.nodeId,className:o})}setCssRules(e){return this.sendRequest("themeEditorRules",{rules:e})}loadRules(e){return this.sendRequest("themeEditorLoadRules",{selectors:e})}markAsUsed(){return this.sendRequest("themeEditorMarkAsUsed",{})}undo(e){return this.sendRequest("themeEditorHistory",{undo:e})}redo(e){return this.sendRequest("themeEditorHistory",{redo:e})}openCss(e){return this.sendRequest("themeEditorOpenCss",{selector:e})}getGlobalUiId(){const e=window.Vaadin;if(e&&e.Flow){const{clients:o}=e.Flow,n=Object.keys(o);for(const r of n){const i=o[r];if(i.getNodeId)return i.getUIId()}}return-1}}const A={index:-1,entries:[]};class pr{constructor(e){this.api=e}get allowUndo(){return A.index>=0}get allowRedo(){return A.index<A.entries.length-1}get allowedActions(){return{allowUndo:this.allowUndo,allowRedo:this.allowRedo}}push(e,o,n){const r={requestId:e,execute:o,rollback:n};if(A.index++,A.entries=A.entries.slice(0,A.index),A.entries.push(r),o)try{o()}catch(i){console.error("Execute history entry failed",i)}return this.allowedActions}async undo(){if(!this.allowUndo)return this.allowedActions;const e=A.entries[A.index];A.index--;try{await this.api.undo(e.requestId),e.rollback&&e.rollback()}catch(o){console.error("Undo failed",o)}return this.allowedActions}async redo(){if(!this.allowRedo)return this.allowedActions;A.index++;const e=A.entries[A.index];try{await this.api.redo(e.requestId),e.execute&&e.execute()}catch(o){console.error("Redo failed",o)}return this.allowedActions}static clear(){A.entries=[],A.index=-1}}var ur=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,X=(t,e,o,n)=>{for(var r=n>1?void 0:n?mr(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(r=(n?s(e,o,r):s(r))||r);return n&&r&&ur(e,o,r),r};class vr extends CustomEvent{constructor(e,o,n){super("theme-property-value-change",{bubbles:!0,composed:!0,detail:{element:e,property:o,value:n}})}}class V extends D{constructor(){super(...arguments),this.value=""}static get styles(){return[jo,S`
        :host {
          display: block;
        }

        .editor-row .label .modified {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: orange;
          border-radius: 3px;
          margin-left: 3px;
        }
      `]}update(e){super.update(e),(e.has("propertyMetadata")||e.has("theme"))&&this.updateValueFromTheme()}render(){var e;return m`
      <div class="editor-row">
        <div class="label">
          ${this.propertyMetadata.displayName}
          ${(e=this.propertyValue)!=null&&e.modified?m`<span class="modified"></span>`:null}
        </div>
        <div class="editor">${this.renderEditor()}</div>
      </div>
    `}updateValueFromTheme(){var e;this.propertyValue=this.theme.getPropertyValue(this.elementMetadata.selector,this.propertyMetadata.propertyName),this.value=((e=this.propertyValue)==null?void 0:e.value)||""}dispatchChange(e){this.dispatchEvent(new vr(this.elementMetadata,this.propertyMetadata,e))}}X([b({})],V.prototype,"elementMetadata",2);X([b({})],V.prototype,"propertyMetadata",2);X([b({})],V.prototype,"theme",2);X([C()],V.prototype,"propertyValue",2);X([C()],V.prototype,"value",2);class Xe{constructor(e){if(this._values=[],this._rawValues={},e){const o=e.propertyName,n=e.presets??[];this._values=(n||[]).map(i=>i.startsWith("--")?`var(${i})`:i);const r=document.createElement("div");r.style.borderStyle="solid",r.style.visibility="hidden",document.body.append(r);try{this._values.forEach(i=>{r.style.setProperty(o,i);const s=getComputedStyle(r);this._rawValues[i]=s.getPropertyValue(o).trim()})}finally{r.remove()}}}get values(){return this._values}get rawValues(){return this._rawValues}tryMapToRawValue(e){return this._rawValues[e]??e}tryMapToPreset(e){return this.findPreset(e)??e}findPreset(e){const o=e&&e.trim();return this.values.find(n=>this._rawValues[n]===o)}}class co extends CustomEvent{constructor(e){super("change",{detail:{value:e}})}}let Qe=class extends D{constructor(){super(...arguments),this.value="",this.showClearButton=!1}static get styles(){return S`
      :host {
        display: inline-block;
        width: 100%;
        position: relative;
      }

      input {
        width: 100%;
        box-sizing: border-box;
        padding: 0.25rem 0.375rem;
        color: inherit;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;
        border: none;
      }

      button {
        display: none;
        position: absolute;
        right: 4px;
        top: 4px;
        padding: 0;
        line-height: 0;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      button svg {
        width: 16px;
        height: 16px;
      }

      button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      :host(.show-clear-button) input {
        padding-right: 20px;
      }

      :host(.show-clear-button) button {
        display: block;
      }
    `}update(t){super.update(t),t.has("showClearButton")&&(this.showClearButton?this.classList.add("show-clear-button"):this.classList.remove("show-clear-button"))}render(){return m`
      <input class="input" .value=${this.value} @change=${this.handleInputChange} />
      <button @click=${this.handleClearClick}>${He.cross}</button>
    `}handleInputChange(t){const e=t.target;this.dispatchEvent(new co(e.value))}handleClearClick(){this.dispatchEvent(new co(""))}};X([b({})],Qe.prototype,"value",2);X([b({})],Qe.prototype,"showClearButton",2);Qe=X([L("vaadin-dev-tools-theme-text-input")],Qe);var gr=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,it=(t,e,o,n)=>{for(var r=n>1?void 0:n?fr(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(r=(n?s(e,o,r):s(r))||r);return n&&r&&gr(e,o,r),r};class yr extends CustomEvent{constructor(e){super("class-name-change",{detail:{value:e}})}}let Ce=class extends D{constructor(){super(...arguments),this.editedClassName="",this.invalid=!1}static get styles(){return[jo,S`
        .editor-row {
          padding-top: 0;
        }

        .editor-row .editor .error {
          display: inline-block;
          color: var(--dev-tools-red-color);
          margin-top: 4px;
        }
      `]}update(t){super.update(t),t.has("className")&&(this.editedClassName=this.className,this.invalid=!1)}render(){return m` <div class="editor-row local-class-name">
      <div class="label">CSS class name</div>
      <div class="editor">
        <vaadin-dev-tools-theme-text-input
          type="text"
          .value=${this.editedClassName}
          @change=${this.handleInputChange}
        ></vaadin-dev-tools-theme-text-input>
        ${this.invalid?m`<br /><span class="error">Please enter a valid CSS class name</span>`:null}
      </div>
    </div>`}handleInputChange(t){this.editedClassName=t.detail.value;const e=/^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/;this.invalid=!this.editedClassName.match(e),!this.invalid&&this.editedClassName!==this.className&&this.dispatchEvent(new yr(this.editedClassName))}};it([b({})],Ce.prototype,"className",2);it([C()],Ce.prototype,"editedClassName",2);it([C()],Ce.prototype,"invalid",2);Ce=it([L("vaadin-dev-tools-theme-class-name-editor")],Ce);var br=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,st=(t,e,o,n)=>{for(var r=n>1?void 0:n?wr(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(r=(n?s(e,o,r):s(r))||r);return n&&r&&br(e,o,r),r};class _r extends CustomEvent{constructor(e){super("scope-change",{detail:{value:e}})}}St(S`
  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] {
    --lumo-primary-color-50pct: rgba(255, 255, 255, 0.5);
    z-index: 100000 !important;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector']::part(overlay) {
    background: #333;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item {
    color: rgba(255, 255, 255, 0.8);
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item::part(content) {
    font-size: 13px;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item .title {
    color: rgba(255, 255, 255, 0.95);
    font-weight: bold;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item::part(checkmark) {
    margin: 6px;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item::part(checkmark)::before {
    color: rgba(255, 255, 255, 0.95);
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`);let ke=class extends D{constructor(){super(...arguments),this.value=P.local}static get styles(){return S`
      vaadin-select {
        --lumo-primary-color-50pct: rgba(255, 255, 255, 0.5);
        width: 100px;
      }

      vaadin-select::part(input-field) {
        background: rgba(0, 0, 0, 0.2);
      }

      vaadin-select vaadin-select-value-button,
      vaadin-select::part(toggle-button) {
        color: var(--dev-tools-text-color);
      }

      vaadin-select:hover vaadin-select-value-button,
      vaadin-select:hover::part(toggle-button) {
        color: var(--dev-tools-text-color-emphasis);
      }

      vaadin-select vaadin-select-item {
        font-size: 13px;
      }
    `}update(t){var e;super.update(t),t.has("metadata")&&((e=this.select)==null||e.requestContentUpdate())}render(){return m` <vaadin-select
      theme="small vaadin-dev-tools-theme-scope-selector"
      .value=${this.value}
      .renderer=${this.selectRenderer.bind(this)}
      @value-changed=${this.handleValueChange}
    ></vaadin-select>`}selectRenderer(t){var e;const o=((e=this.metadata)==null?void 0:e.displayName)||"Component",n=`${o}s`;xo(m`
        <vaadin-list-box>
          <vaadin-item value=${P.local} label="Local">
            <span class="title">Local</span>
            <br />
            <span>Edit styles for this ${o}</span>
          </vaadin-item>
          <vaadin-item value=${P.global} label="Global">
            <span class="title">Global</span>
            <br />
            <span>Edit styles for all ${n}</span>
          </vaadin-item>
        </vaadin-list-box>
      `,t)}handleValueChange(t){const e=t.detail.value;e!==this.value&&this.dispatchEvent(new _r(e))}};st([b({})],ke.prototype,"value",2);st([b({})],ke.prototype,"metadata",2);st([Ae("vaadin-select")],ke.prototype,"select",2);ke=st([L("vaadin-dev-tools-theme-scope-selector")],ke);var Er=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,Sr=(t,e,o,n)=>{for(var r=n>1?void 0:n?xr(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(r=(n?s(e,o,r):s(r))||r);return n&&r&&Er(e,o,r),r};let ho=class extends V{static get styles(){return[V.styles,S`
        .editor-row {
          align-items: center;
        }
      `]}handleInputChange(t){const e=t.target.checked?this.propertyMetadata.checkedValue:"";this.dispatchChange(e||"")}renderEditor(){const t=this.value===this.propertyMetadata.checkedValue;return m` <input type="checkbox" .checked=${t} @change=${this.handleInputChange} /> `}};ho=Sr([L("vaadin-dev-tools-theme-checkbox-property-editor")],ho);var Cr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,$r=(t,e,o,n)=>{for(var r=n>1?void 0:n?kr(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(r=(n?s(e,o,r):s(r))||r);return n&&r&&Cr(e,o,r),r};let po=class extends V{handleInputChange(t){this.dispatchChange(t.detail.value)}renderEditor(){var t;return m`
      <vaadin-dev-tools-theme-text-input
        .value=${this.value}
        .showClearButton=${((t=this.propertyValue)==null?void 0:t.modified)||!1}
        @change=${this.handleInputChange}
      ></vaadin-dev-tools-theme-text-input>
    `}};po=$r([L("vaadin-dev-tools-theme-text-property-editor")],po);var Ir=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,Ct=(t,e,o,n)=>{for(var r=n>1?void 0:n?Ar(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(r=(n?s(e,o,r):s(r))||r);return n&&r&&Ir(e,o,r),r};let Ze=class extends V{constructor(){super(...arguments),this.selectedPresetIndex=-1,this.presets=new Xe}static get styles(){return[V.styles,S`
        :host {
          --preset-count: 3;
          --slider-bg: #fff;
          --slider-border: #333;
        }

        .editor-row {
          align-items: center;
        }

        .editor-row > .editor {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .editor-row .input {
          flex: 0 0 auto;
          width: 80px;
        }

        .slider-wrapper {
          flex: 1 1 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .icon {
          width: 20px;
          height: 20px;
          color: #aaa;
        }

        .icon.prefix > svg {
          transform: scale(0.75);
        }

        .slider {
          flex: 1 1 0;
          -webkit-appearance: none;
          background: linear-gradient(to right, #666, #666 2px, transparent 2px);
          background-size: calc((100% - 13px) / (var(--preset-count) - 1)) 8px;
          background-position: 5px 50%;
          background-repeat: repeat-x;
        }

        .slider::-webkit-slider-runnable-track {
          width: 100%;
          box-sizing: border-box;
          height: 16px;
          background-image: linear-gradient(#666, #666);
          background-size: calc(100% - 12px) 2px;
          background-repeat: no-repeat;
          background-position: 6px 50%;
        }

        .slider::-moz-range-track {
          width: 100%;
          box-sizing: border-box;
          height: 16px;
          background-image: linear-gradient(#666, #666);
          background-size: calc(100% - 12px) 2px;
          background-repeat: no-repeat;
          background-position: 6px 50%;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border: 2px solid var(--slider-border);
          border-radius: 50%;
          background: var(--slider-bg);
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border: 2px solid var(--slider-border);
          border-radius: 50%;
          background: var(--slider-bg);
          cursor: pointer;
        }

        .custom-value {
          opacity: 0.5;
        }

        .custom-value:hover,
        .custom-value:focus-within {
          opacity: 1;
        }

        .custom-value:not(:hover, :focus-within) {
          --slider-bg: #333;
          --slider-border: #666;
        }
      `]}update(t){t.has("propertyMetadata")&&(this.presets=new Xe(this.propertyMetadata)),super.update(t)}renderEditor(){var t;const e={"slider-wrapper":!0,"custom-value":this.selectedPresetIndex<0},o=this.presets.values.length;return m`
      <div class=${So(e)}>
        ${null}
        <input
          type="range"
          class="slider"
          style="--preset-count: ${o}"
          step="1"
          min="0"
          .max=${(o-1).toString()}
          .value=${this.selectedPresetIndex}
          @input=${this.handleSliderInput}
          @change=${this.handleSliderChange}
        />
        ${null}
      </div>
      <vaadin-dev-tools-theme-text-input
        class="input"
        .value=${this.value}
        .showClearButton=${((t=this.propertyValue)==null?void 0:t.modified)||!1}
        @change=${this.handleValueChange}
      ></vaadin-dev-tools-theme-text-input>
    `}handleSliderInput(t){const e=t.target,o=parseInt(e.value),n=this.presets.values[o];this.selectedPresetIndex=o,this.value=this.presets.rawValues[n]}handleSliderChange(){this.dispatchChange(this.value)}handleValueChange(t){this.value=t.detail.value,this.updateSliderValue(),this.dispatchChange(this.value)}dispatchChange(t){const e=this.presets.tryMapToPreset(t);super.dispatchChange(e)}updateValueFromTheme(){var t;super.updateValueFromTheme(),this.value=this.presets.tryMapToRawValue(((t=this.propertyValue)==null?void 0:t.value)||""),this.updateSliderValue()}updateSliderValue(){const t=this.presets.findPreset(this.value);this.selectedPresetIndex=t?this.presets.values.indexOf(t):-1}};Ct([C()],Ze.prototype,"selectedPresetIndex",2);Ct([C()],Ze.prototype,"presets",2);Ze=Ct([L("vaadin-dev-tools-theme-range-property-editor")],Ze);const me=(t,e=0,o=1)=>t>o?o:t<e?e:t,R=(t,e=0,o=Math.pow(10,e))=>Math.round(o*t)/o,zo=({h:t,s:e,v:o,a:n})=>{const r=(200-e)*o/100;return{h:R(t),s:R(r>0&&r<200?e*o/100/(r<=100?r:200-r)*100:0),l:R(r/2),a:R(n,2)}},_t=t=>{const{h:e,s:o,l:n}=zo(t);return`hsl(${e}, ${o}%, ${n}%)`},mt=t=>{const{h:e,s:o,l:n,a:r}=zo(t);return`hsla(${e}, ${o}%, ${n}%, ${r})`},Tr=({h:t,s:e,v:o,a:n})=>{t=t/360*6,e=e/100,o=o/100;const r=Math.floor(t),i=o*(1-e),s=o*(1-(t-r)*e),l=o*(1-(1-t+r)*e),a=r%6;return{r:R([o,s,i,i,l,o][a]*255),g:R([l,o,o,s,i,i][a]*255),b:R([i,i,l,o,o,s][a]*255),a:R(n,2)}},Nr=t=>{const{r:e,g:o,b:n,a:r}=Tr(t);return`rgba(${e}, ${o}, ${n}, ${r})`},Rr=t=>{const e=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(t);return e?Or({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):{h:0,s:0,v:0,a:1}},Or=({r:t,g:e,b:o,a:n})=>{const r=Math.max(t,e,o),i=r-Math.min(t,e,o),s=i?r===t?(e-o)/i:r===e?2+(o-t)/i:4+(t-e)/i:0;return{h:R(60*(s<0?s+6:s)),s:R(r?i/r*100:0),v:R(r/255*100),a:n}},Pr=(t,e)=>{if(t===e)return!0;for(const o in t)if(t[o]!==e[o])return!1;return!0},Lr=(t,e)=>t.replace(/\s/g,"")===e.replace(/\s/g,""),uo={},Fo=t=>{let e=uo[t];return e||(e=document.createElement("template"),e.innerHTML=t,uo[t]=e),e},kt=(t,e,o)=>{t.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:o}))};let pe=!1;const Et=t=>"touches"in t,Mr=t=>pe&&!Et(t)?!1:(pe||(pe=Et(t)),!0),mo=(t,e)=>{const o=Et(e)?e.touches[0]:e,n=t.el.getBoundingClientRect();kt(t.el,"move",t.getMove({x:me((o.pageX-(n.left+window.pageXOffset))/n.width),y:me((o.pageY-(n.top+window.pageYOffset))/n.height)}))},Vr=(t,e)=>{const o=e.keyCode;o>40||t.xy&&o<37||o<33||(e.preventDefault(),kt(t.el,"move",t.getMove({x:o===39?.01:o===37?-.01:o===34?.05:o===33?-.05:o===35?1:o===36?-1:0,y:o===40?.01:o===38?-.01:0},!0)))};class $t{constructor(e,o,n,r){const i=Fo(`<div role="slider" tabindex="0" part="${o}" ${n}><div part="${o}-pointer"></div></div>`);e.appendChild(i.content.cloneNode(!0));const s=e.querySelector(`[part=${o}]`);s.addEventListener("mousedown",this),s.addEventListener("touchstart",this),s.addEventListener("keydown",this),this.el=s,this.xy=r,this.nodes=[s.firstChild,s]}set dragging(e){const o=e?document.addEventListener:document.removeEventListener;o(pe?"touchmove":"mousemove",this),o(pe?"touchend":"mouseup",this)}handleEvent(e){switch(e.type){case"mousedown":case"touchstart":if(e.preventDefault(),!Mr(e)||!pe&&e.button!=0)return;this.el.focus(),mo(this,e),this.dragging=!0;break;case"mousemove":case"touchmove":e.preventDefault(),mo(this,e);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":Vr(this,e);break}}style(e){e.forEach((o,n)=>{for(const r in o)this.nodes[n].style.setProperty(r,o[r])})}}class Dr extends $t{constructor(e){super(e,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}update({h:e}){this.h=e,this.style([{left:`${e/360*100}%`,color:_t({h:e,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",`${R(e)}`)}getMove(e,o){return{h:o?me(this.h+e.x*360,0,360):360*e.x}}}class jr extends $t{constructor(e){super(e,"saturation",'aria-label="Color"',!0)}update(e){this.hsva=e,this.style([{top:`${100-e.v}%`,left:`${e.s}%`,color:_t(e)},{"background-color":_t({h:e.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${R(e.s)}%, Brightness ${R(e.v)}%`)}getMove(e,o){return{s:o?me(this.hsva.s+e.x*100,0,100):e.x*100,v:o?me(this.hsva.v-e.y*100,0,100):Math.round(100-e.y*100)}}}const zr=':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',Fr="[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}",Ur="[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}",Fe=Symbol("same"),vt=Symbol("color"),vo=Symbol("hsva"),gt=Symbol("update"),go=Symbol("parts"),et=Symbol("css"),tt=Symbol("sliders");let Br=class extends HTMLElement{static get observedAttributes(){return["color"]}get[et](){return[zr,Fr,Ur]}get[tt](){return[jr,Dr]}get color(){return this[vt]}set color(t){if(!this[Fe](t)){const e=this.colorModel.toHsva(t);this[gt](e),this[vt]=t}}constructor(){super();const t=Fo(`<style>${this[et].join("")}</style>`),e=this.attachShadow({mode:"open"});e.appendChild(t.content.cloneNode(!0)),e.addEventListener("move",this),this[go]=this[tt].map(o=>new o(e))}connectedCallback(){if(this.hasOwnProperty("color")){const t=this.color;delete this.color,this.color=t}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(t,e,o){const n=this.colorModel.fromAttr(o);this[Fe](n)||(this.color=n)}handleEvent(t){const e=this[vo],o={...e,...t.detail};this[gt](o);let n;!Pr(o,e)&&!this[Fe](n=this.colorModel.fromHsva(o))&&(this[vt]=n,kt(this,"color-changed",{value:n}))}[Fe](t){return this.color&&this.colorModel.equal(t,this.color)}[gt](t){this[vo]=t,this[go].forEach(e=>e.update(t))}};class qr extends $t{constructor(e){super(e,"alpha",'aria-label="Alpha" aria-valuemin="0" aria-valuemax="1"',!1)}update(e){this.hsva=e;const o=mt({...e,a:0}),n=mt({...e,a:1}),r=e.a*100;this.style([{left:`${r}%`,color:mt(e)},{"--gradient":`linear-gradient(90deg, ${o}, ${n}`}]);const i=R(r);this.el.setAttribute("aria-valuenow",`${i}`),this.el.setAttribute("aria-valuetext",`${i}%`)}getMove(e,o){return{a:o?me(this.hsva.a+e.x):e.x}}}const Hr=`[part=alpha]{flex:0 0 24px}[part=alpha]::after{display:block;content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;background-image:var(--gradient);box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part^=alpha]{background-color:#fff;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><rect x="8" width="8" height="8"/><rect y="8" width="8" height="8"/></svg>')}[part=alpha-pointer]{top:50%}`;class Wr extends Br{get[et](){return[...super[et],Hr]}get[tt](){return[...super[tt],qr]}}const Gr={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Rr,fromHsva:Nr,equal:Lr,fromAttr:t=>t};class Kr extends Wr{get colorModel(){return Gr}}/**
* @license
* Copyright (c) 2017 - 2023 Vaadin Ltd.
* This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/function Yr(t){const e=[];for(;t;){if(t.nodeType===Node.DOCUMENT_NODE){e.push(t);break}if(t.nodeType===Node.DOCUMENT_FRAGMENT_NODE){e.push(t),t=t.host;continue}if(t.assignedSlot){t=t.assignedSlot;continue}t=t.parentNode}return e}const ft={start:"top",end:"bottom"},yt={start:"left",end:"right"},fo=new ResizeObserver(t=>{setTimeout(()=>{t.forEach(e=>{e.target.__overlay&&e.target.__overlay._updatePosition()})})}),Jr=t=>class extends t{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1},requiredVerticalSpace:{type:Number,value:0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=Yr(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,o){if(this.__removeUpdatePositionEventListeners(),o&&(o.__overlay=null,fo.unobserve(o),e&&(this.__addUpdatePositionEventListeners(),o.__overlay=this,fo.observe(o))),e){const n=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(r=>{this.__margins[r]=parseInt(n[r],10)})),this.setAttribute("dir",n.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),o=this.__shouldAlignStartVertically(e);this.style.justifyContent=o?"flex-start":"flex-end";const n=this.__isRTL,r=this.__shouldAlignStartHorizontally(e,n),i=!n&&r||n&&!r;this.style.alignItems=i?"flex-start":"flex-end";const s=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,s,this.noVerticalOverlap,ft,this,o),a=this.__calculatePositionInOneDimension(e,s,this.noHorizontalOverlap,yt,this,r);Object.assign(this.style,l,a),this.toggleAttribute("bottom-aligned",!o),this.toggleAttribute("top-aligned",o),this.toggleAttribute("end-aligned",!i),this.toggleAttribute("start-aligned",i)}__shouldAlignStartHorizontally(e,o){const n=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const r=Math.min(window.innerWidth,document.documentElement.clientWidth),i=!o&&this.horizontalAlign==="start"||o&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,n,r,this.__margins,i,this.noHorizontalOverlap,yt)}__shouldAlignStartVertically(e){const o=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const n=Math.min(window.innerHeight,document.documentElement.clientHeight),r=this.verticalAlign==="top";return this.__shouldAlignStart(e,o,n,this.__margins,r,this.noVerticalOverlap,ft)}__shouldAlignStart(e,o,n,r,i,s,l){const a=n-e[s?l.end:l.start]-r[l.end],d=e[s?l.start:l.end]-r[l.start],p=i?a:d,v=p>(i?d:a)||p>o;return i===v}__adjustBottomProperty(e,o,n){let r;if(e===o.end){if(o.end===ft.end){const i=Math.min(window.innerHeight,document.documentElement.clientHeight);if(n>i&&this.__oldViewportHeight){const s=this.__oldViewportHeight-i;r=n-s}this.__oldViewportHeight=i}if(o.end===yt.end){const i=Math.min(window.innerWidth,document.documentElement.clientWidth);if(n>i&&this.__oldViewportWidth){const s=this.__oldViewportWidth-i;r=n-s}this.__oldViewportWidth=i}}return r}__calculatePositionInOneDimension(e,o,n,r,i,s){const l=s?r.start:r.end,a=s?r.end:r.start,d=parseFloat(i.style[l]||getComputedStyle(i)[l]),p=this.__adjustBottomProperty(l,r,d),v=o[s?r.start:r.end]-e[n===s?r.end:r.start],u=p?`${p}px`:`${d+v*(s?-1:1)}px`;return{[l]:u,[a]:""}}};var Xr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,te=(t,e,o,n)=>{for(var r=n>1?void 0:n?Qr(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(r=(n?s(e,o,r):s(r))||r);return n&&r&&Xr(e,o,r),r};class Zr extends CustomEvent{constructor(e){super("color-picker-change",{detail:{value:e}})}}const Uo=S`
  :host {
    --preview-size: 24px;
    --preview-color: rgba(0, 0, 0, 0);
  }

  .preview {
    --preview-bg-size: calc(var(--preview-size) / 2);
    --preview-bg-pos: calc(var(--preview-size) / 4);

    width: var(--preview-size);
    height: var(--preview-size);
    padding: 0;
    position: relative;
    overflow: hidden;
    background: none;
    border: solid 2px #888;
    border-radius: 4px;
    box-sizing: content-box;
  }

  .preview::before,
  .preview::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .preview::before {
    content: '';
    background: white;
    background-image: linear-gradient(45deg, #666 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #666 75%), linear-gradient(45deg, transparent 75%, #666 75%),
      linear-gradient(45deg, #666 25%, transparent 25%);
    background-size: var(--preview-bg-size) var(--preview-bg-size);
    background-position: 0 0, 0 0, calc(var(--preview-bg-pos) * -1) calc(var(--preview-bg-pos) * -1),
      var(--preview-bg-pos) var(--preview-bg-pos);
  }

  .preview::after {
    content: '';
    background-color: var(--preview-color);
  }
`;let $e=class extends D{constructor(){super(...arguments),this.commitValue=!1}static get styles(){return[Uo,S`
        #toggle {
          display: block;
        }
      `]}update(t){super.update(t),t.has("value")&&this.overlay&&this.overlay.requestContentUpdate()}firstUpdated(){this.overlay=document.createElement("vaadin-dev-tools-color-picker-overlay"),this.overlay.renderer=this.renderOverlayContent.bind(this),this.overlay.owner=this,this.overlay.positionTarget=this.toggle,this.overlay.noVerticalOverlap=!0,this.overlay.addEventListener("vaadin-overlay-escape-press",this.handleOverlayEscape.bind(this)),this.overlay.addEventListener("vaadin-overlay-close",this.handleOverlayClose.bind(this)),this.append(this.overlay)}render(){const t=this.value||"rgba(0, 0, 0, 0)";return m` <button
      id="toggle"
      class="preview"
      style="--preview-color: ${t}"
      @click=${this.open}
    ></button>`}open(){this.commitValue=!1,this.overlay.opened=!0,this.overlay.style.zIndex="1000000";const t=this.overlay.shadowRoot.querySelector('[part="overlay"]');t.style.background="#333"}renderOverlayContent(t){const e=getComputedStyle(this.toggle,"::after").getPropertyValue("background-color");xo(m` <div>
        <vaadin-dev-tools-color-picker-overlay-content
          .value=${e}
          .presets=${this.presets}
          @color-changed=${this.handleColorChange.bind(this)}
        ></vaadin-dev-tools-color-picker-overlay-content>
      </div>`,t)}handleColorChange(t){this.commitValue=!0,this.dispatchEvent(new Zr(t.detail.value)),t.detail.close&&(this.overlay.opened=!1,this.handleOverlayClose())}handleOverlayEscape(){this.commitValue=!1}handleOverlayClose(){const t=this.commitValue?"color-picker-commit":"color-picker-cancel";this.dispatchEvent(new CustomEvent(t))}};te([b({})],$e.prototype,"value",2);te([b({})],$e.prototype,"presets",2);te([Ae("#toggle")],$e.prototype,"toggle",2);$e=te([L("vaadin-dev-tools-color-picker")],$e);let ot=class extends D{static get styles(){return[Uo,S`
        :host {
          display: block;
          padding: 12px;
        }

        .picker::part(saturation),
        .picker::part(hue) {
          margin-bottom: 10px;
        }

        .picker::part(hue),
        .picker::part(alpha) {
          flex: 0 0 20px;
        }

        .picker::part(saturation),
        .picker::part(hue),
        .picker::part(alpha) {
          border-radius: 3px;
        }

        .picker::part(saturation-pointer),
        .picker::part(hue-pointer),
        .picker::part(alpha-pointer) {
          width: 20px;
          height: 20px;
        }

        .swatches {
          display: grid;
          grid-template-columns: repeat(6, var(--preview-size));
          grid-column-gap: 10px;
          grid-row-gap: 6px;
          margin-top: 16px;
        }
      `]}render(){return m` <div>
      <vaadin-dev-tools-rgba-string-color-picker
        class="picker"
        .color=${this.value}
        @color-changed=${this.handlePickerChange}
      ></vaadin-dev-tools-rgba-string-color-picker>
      ${this.renderSwatches()}
    </div>`}renderSwatches(){if(!this.presets||this.presets.length===0)return;const t=this.presets.map(e=>m` <button
        class="preview"
        style="--preview-color: ${e}"
        @click=${()=>this.selectPreset(e)}
      ></button>`);return m` <div class="swatches">${t}</div>`}handlePickerChange(t){this.dispatchEvent(new CustomEvent("color-changed",{detail:{value:t.detail.value}}))}selectPreset(t){this.dispatchEvent(new CustomEvent("color-changed",{detail:{value:t,close:!0}}))}};te([b({})],ot.prototype,"value",2);te([b({})],ot.prototype,"presets",2);ot=te([L("vaadin-dev-tools-color-picker-overlay-content")],ot);customElements.whenDefined("vaadin-overlay").then(()=>{const t=customElements.get("vaadin-overlay");class e extends Jr(t){}customElements.define("vaadin-dev-tools-color-picker-overlay",e)});customElements.define("vaadin-dev-tools-rgba-string-color-picker",Kr);var ei=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,oi=(t,e,o,n)=>{for(var r=n>1?void 0:n?ti(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(r=(n?s(e,o,r):s(r))||r);return n&&r&&ei(e,o,r),r};let yo=class extends V{constructor(){super(...arguments),this.presets=new Xe}static get styles(){return[V.styles,S`
        .editor-row {
          align-items: center;
        }

        .editor-row > .editor {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `]}update(t){t.has("propertyMetadata")&&(this.presets=new Xe(this.propertyMetadata)),super.update(t)}renderEditor(){var t;return m`
      <vaadin-dev-tools-color-picker
        .value=${this.value}
        .presets=${this.presets.values}
        @color-picker-change=${this.handleColorPickerChange}
        @color-picker-commit=${this.handleColorPickerCommit}
        @color-picker-cancel=${this.handleColorPickerCancel}
      ></vaadin-dev-tools-color-picker>
      <vaadin-dev-tools-theme-text-input
        .value=${this.value}
        .showClearButton=${((t=this.propertyValue)==null?void 0:t.modified)||!1}
        @change=${this.handleInputChange}
      ></vaadin-dev-tools-theme-text-input>
    `}handleInputChange(t){this.value=t.detail.value,this.dispatchChange(this.value)}handleColorPickerChange(t){this.value=t.detail.value}handleColorPickerCommit(){this.dispatchChange(this.value)}handleColorPickerCancel(){this.updateValueFromTheme()}dispatchChange(t){const e=this.presets.tryMapToPreset(t);super.dispatchChange(e)}updateValueFromTheme(){var t;super.updateValueFromTheme(),this.value=this.presets.tryMapToRawValue(((t=this.propertyValue)==null?void 0:t.value)||"")}};yo=oi([L("vaadin-dev-tools-theme-color-property-editor")],yo);var ni=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,It=(t,e,o,n)=>{for(var r=n>1?void 0:n?ri(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(r=(n?s(e,o,r):s(r))||r);return n&&r&&ni(e,o,r),r};class ii extends CustomEvent{constructor(e){super("open-css",{detail:{element:e}})}}let nt=class extends D{static get styles(){return S`
      .section .header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        padding: 0.4rem var(--theme-editor-section-horizontal-padding);
        color: var(--dev-tools-text-color-emphasis);
        background-color: rgba(0, 0, 0, 0.2);
      }

      .section .property-list .property-editor:not(:last-child) {
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
      }

      .section .header .open-css {
        all: initial;
        font-family: inherit;
        font-size: var(--dev-tools-font-size-small);
        line-height: 1;
        white-space: nowrap;
        background-color: rgba(255, 255, 255, 0.12);
        color: var(--dev-tools-text-color);
        font-weight: 600;
        padding: 0.25rem 0.375rem;
        border-radius: 0.25rem;
      }

      .section .header .open-css:hover {
        color: var(--dev-tools-text-color-emphasis);
      }
    `}render(){const t=this.metadata.elements.map(e=>this.renderSection(e));return m` <div>${t}</div> `}renderSection(t){const e=t.properties.map(o=>this.renderPropertyEditor(t,o));return m`
      <div class="section" data-testid=${t==null?void 0:t.displayName}>
        <div class="header">
          <span> ${t.displayName} </span>
          <button class="open-css" @click=${()=>this.handleOpenCss(t)}>Edit CSS</button>
        </div>
        <div class="property-list">${e}</div>
      </div>
    `}handleOpenCss(t){this.dispatchEvent(new ii(t))}renderPropertyEditor(t,e){let o;switch(e.editorType){case $.checkbox:o=je`vaadin-dev-tools-theme-checkbox-property-editor`;break;case $.range:o=je`vaadin-dev-tools-theme-range-property-editor`;break;case $.color:o=je`vaadin-dev-tools-theme-color-property-editor`;break;default:o=je`vaadin-dev-tools-theme-text-property-editor`}return Hn` <${o}
          class="property-editor"
          .elementMetadata=${t}
          .propertyMetadata=${e}
          .theme=${this.theme}
          data-testid=${e.propertyName}
        >
        </${o}>`}};It([b({})],nt.prototype,"metadata",2);It([b({})],nt.prototype,"theme",2);nt=It([L("vaadin-dev-tools-theme-property-list")],nt);var si=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,li=(t,e,o,n)=>{for(var r=n>1?void 0:n?ai(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(r=(n?s(e,o,r):s(r))||r);return n&&r&&si(e,o,r),r};let rt=class extends D{render(){return m`<div
      tabindex="-1"
      @mousemove=${this.onMouseMove}
      @click=${this.onClick}
      @keydown=${this.onKeyDown}
    ></div>`}onClick(t){const e=this.getTargetElement(t);this.dispatchEvent(new CustomEvent("shim-click",{detail:{target:e}}))}onMouseMove(t){const e=this.getTargetElement(t);this.dispatchEvent(new CustomEvent("shim-mousemove",{detail:{target:e}}))}onKeyDown(t){this.dispatchEvent(new CustomEvent("shim-keydown",{detail:{originalEvent:t}}))}getTargetElement(t){this.style.display="none";const e=document.elementFromPoint(t.clientX,t.clientY);return this.style.display="",e}};rt.shadowRootOptions={...D.shadowRootOptions,delegatesFocus:!0};rt.styles=[S`
      div {
        pointer-events: auto;
        background: rgba(255, 255, 255, 0);
        position: fixed;
        inset: 0px;
        z-index: 1000000;
      }
    `];rt=li([L("vaadin-dev-tools-shim")],rt);const Bo=S`
  .popup {
    width: auto;
    position: fixed;
    background-color: var(--dev-tools-background-color-active-blurred);
    color: var(--dev-tools-text-color-primary);
    padding: 0.1875rem 0.75rem 0.1875rem 1rem;
    background-clip: padding-box;
    border-radius: var(--dev-tools-border-radius);
    overflow: hidden;
    margin: 0.5rem;
    width: 30rem;
    max-width: calc(100% - 1rem);
    max-height: calc(100vh - 1rem);
    flex-shrink: 1;
    background-color: var(--dev-tools-background-color-active);
    color: var(--dev-tools-text-color);
    transition: var(--dev-tools-transition-duration);
    transform-origin: bottom right;
    display: flex;
    flex-direction: column;
    box-shadow: var(--dev-tools-box-shadow);
    outline: none;
  }
`;var di=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,Te=(t,e,o,n)=>{for(var r=n>1?void 0:n?ci(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(r=(n?s(e,o,r):s(r))||r);return n&&r&&di(e,o,r),r};let J=class extends D{constructor(){super(...arguments),this.active=!1,this.components=[],this.selected=0}connectedCallback(){super.connectedCallback();const t=new CSSStyleSheet;t.replaceSync(`
    .vaadin-dev-tools-highlight-overlay {
      pointer-events: none;
      position: absolute;
      z-index: 10000;
      background: rgba(158,44,198,0.25);
    }`),document.adoptedStyleSheets=[...document.adoptedStyleSheets,t],this.overlayElement=document.createElement("div"),this.overlayElement.classList.add("vaadin-dev-tools-highlight-overlay")}render(){var t;return this.active?(this.style.display="block",m`
      <vaadin-dev-tools-shim
        @shim-click=${this.shimClick}
        @shim-mousemove=${this.shimMove}
        @shim-keydown=${this.shimKeydown}
      ></vaadin-dev-tools-shim>
      <div class="window popup component-picker-info">${(t=this.options)==null?void 0:t.infoTemplate}</div>
      <div class="window popup component-picker-components-info">
        <div>
          ${this.components.map((e,o)=>m`<div class=${o===this.selected?"selected":""}>
                ${e.element.tagName.toLowerCase()}
              </div>`)}
        </div>
      </div>
    `):(this.style.display="none",null)}open(t){this.options=t,this.active=!0,this.dispatchEvent(new CustomEvent("component-picker-opened",{}))}close(){this.active=!1,this.dispatchEvent(new CustomEvent("component-picker-closed",{}))}update(t){var e;if(super.update(t),(t.has("selected")||t.has("components"))&&this.highlight((e=this.components[this.selected])==null?void 0:e.element),t.has("active")){const o=t.get("active"),n=this.active;!o&&n?requestAnimationFrame(()=>this.shim.focus()):o&&!n&&this.highlight(void 0)}}shimKeydown(t){const e=t.detail.originalEvent;if(e.key==="Escape")this.close(),t.stopPropagation(),t.preventDefault();else if(e.key==="ArrowUp"){let o=this.selected-1;o<0&&(o=this.components.length-1),this.selected=o}else e.key==="ArrowDown"?this.selected=(this.selected+1)%this.components.length:e.key==="Enter"&&(this.pickSelectedComponent(),t.stopPropagation(),t.preventDefault())}shimMove(t){const e=t.detail.target;this.components=Kn(e),this.selected=this.components.length-1}shimClick(t){this.pickSelectedComponent()}pickSelectedComponent(){const t=this.components[this.selected];if(t&&this.options)try{this.options.pickCallback(t)}catch(e){console.error("Pick callback failed",e)}this.close()}highlight(t){if(this.highlighted!==t)if(t){const e=t.getBoundingClientRect(),o=getComputedStyle(t);this.overlayElement.style.top=`${e.top}px`,this.overlayElement.style.left=`${e.left}px`,this.overlayElement.style.width=`${e.width}px`,this.overlayElement.style.height=`${e.height}px`,this.overlayElement.style.borderRadius=o.borderRadius,document.body.append(this.overlayElement)}else this.overlayElement.remove();this.highlighted=t}};J.styles=[Bo,S`
      .component-picker-info {
        left: 1em;
        bottom: 1em;
      }

      .component-picker-components-info {
        right: 3em;
        bottom: 1em;
      }

      .component-picker-components-info .selected {
        font-weight: bold;
      }
    `];Te([C()],J.prototype,"active",2);Te([C()],J.prototype,"components",2);Te([C()],J.prototype,"selected",2);Te([Ae("vaadin-dev-tools-shim")],J.prototype,"shim",2);J=Te([L("vaadin-dev-tools-component-picker")],J);const hi=Object.freeze(Object.defineProperty({__proto__:null,get ComponentPicker(){return J}},Symbol.toStringTag,{value:"Module"}));var pi=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,Q=(t,e,o,n)=>{for(var r=n>1?void 0:n?ui(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(r=(n?s(e,o,r):s(r))||r);return n&&r&&pi(e,o,r),r};St(S`
  .vaadin-theme-editor-highlight {
    outline: solid 2px #9e2cc6;
    outline-offset: 3px;
  }
`);let W=class extends D{constructor(){super(...arguments),this.expanded=!1,this.themeEditorState=Se.enabled,this.context=null,this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null}static get styles(){return S`
      :host {
        animation: fade-in var(--dev-tools-transition-duration) ease-in;
        --theme-editor-section-horizontal-padding: 0.75rem;
        display: flex;
        flex-direction: column;
        max-height: 400px;
      }

      .notice {
        padding: var(--theme-editor-section-horizontal-padding);
      }

      .notice a {
        color: var(--dev-tools-text-color-emphasis);
      }

      .header {
        flex: 0 0 auto;
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
      }

      .header .picker-row {
        padding: var(--theme-editor-section-horizontal-padding);
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;
      }

      .picker {
        flex: 1 1 0;
        min-width: 0;
        display: flex;
        align-items: center;
      }

      .picker button {
        min-width: 0;
        display: inline-flex;
        align-items: center;
        padding: 0;
        line-height: 20px;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      .picker button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      .picker svg,
      .picker .component-type {
        flex: 0 0 auto;
        margin-right: 4px;
      }

      .picker .instance-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #e5a2fce5;
      }

      .picker .instance-name-quote {
        color: #e5a2fce5;
      }

      .picker .no-selection {
        font-style: italic;
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .property-list {
        flex: 1 1 auto;
        overflow-y: auto;
      }

      .link-button {
        all: initial;
        font-family: inherit;
        font-size: var(--dev-tools-font-size-small);
        line-height: 1;
        white-space: nowrap;
        color: inherit;
        font-weight: 600;
        text-decoration: underline;
      }

      .link-button:focus,
      .link-button:hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      .icon-button {
        padding: 0;
        line-height: 0;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      .icon-button:disabled {
        opacity: 0.5;
      }

      .icon-button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }
    `}firstUpdated(){this.api=new hr(this.connection),this.history=new pr(this.api),this.historyActions=this.history.allowedActions,this.api.markAsUsed(),document.addEventListener("vaadin-theme-updated",()=>{Z.clear(),this.refreshTheme()})}update(t){var e,o;super.update(t),t.has("expanded")&&(this.expanded?this.highlightElement((e=this.context)==null?void 0:e.component.element):this.removeElementHighlight((o=this.context)==null?void 0:o.component.element))}disconnectedCallback(){var t;super.disconnectedCallback(),this.removeElementHighlight((t=this.context)==null?void 0:t.component.element)}render(){var t,e,o;return this.themeEditorState===Se.missing_theme?this.renderMissingThemeNotice():m`
      <div class="header">
        <div class="picker-row">
          ${this.renderPicker()}
          <div class="actions">
            ${(t=this.context)!=null&&t.metadata?m` <vaadin-dev-tools-theme-scope-selector
                  .value=${this.context.scope}
                  .metadata=${this.context.metadata}
                  @scope-change=${this.handleScopeChange}
                ></vaadin-dev-tools-theme-scope-selector>`:null}
            <button
              class="icon-button"
              data-testid="undo"
              ?disabled=${!((e=this.historyActions)!=null&&e.allowUndo)}
              @click=${this.handleUndo}
            >
              ${He.undo}
            </button>
            <button
              class="icon-button"
              data-testid="redo"
              ?disabled=${!((o=this.historyActions)!=null&&o.allowRedo)}
              @click=${this.handleRedo}
            >
              ${He.redo}
            </button>
          </div>
        </div>
        ${this.renderLocalClassNameEditor()}
      </div>
      ${this.renderPropertyList()}
    `}renderMissingThemeNotice(){return m`
      <div class="notice">
        It looks like you have not set up a custom theme yet. Theme editor requires an existing theme to work with.
        Please check our
        <a href="https://vaadin.com/docs/latest/styling/custom-theme/creating-custom-theme" target="_blank"
          >documentation</a
        >
        on how to set up a custom theme.
      </div>
    `}renderPropertyList(){if(!this.context)return null;if(!this.context.metadata){const t=this.context.component.element.localName;return m`
        <div class="notice">Styling <code>&lt;${t}&gt;</code> components is not supported at the moment.</div>
      `}if(this.context.scope===P.local&&!this.context.accessible){const t=this.context.metadata.displayName;return m`
        <div class="notice">
          The selected ${t} can not be styled locally. Currently, theme editor only supports styling
          instances that are assigned to a local variable, like so:
          <pre><code>Button saveButton = new Button("Save");</code></pre>
          If you want to modify the code so that it satisfies this requirement,
          <button class="link-button" @click=${this.handleShowComponent}>click here</button>
          to open it in your IDE. Alternatively you can choose to style all ${t}s by selecting "Global" from
          the scope dropdown above.
        </div>
      `}return m` <vaadin-dev-tools-theme-property-list
      class="property-list"
      .metadata=${this.context.metadata}
      .theme=${this.effectiveTheme}
      @theme-property-value-change=${this.handlePropertyChange}
      @open-css=${this.handleOpenCss}
    ></vaadin-dev-tools-theme-property-list>`}handleShowComponent(){if(!this.context)return;const t=this.context.component,e={nodeId:t.nodeId,uiId:t.uiId};this.connection.sendShowComponentCreateLocation(e)}async handleOpenCss(t){if(!this.context)return;await this.ensureLocalClassName();const e={themeScope:this.context.scope,localClassName:this.context.localClassName},o=ue(t.detail.element,e);await this.api.openCss(o)}renderPicker(){var t;let e;if((t=this.context)!=null&&t.metadata){const o=this.context.scope===P.local?this.context.metadata.displayName:`All ${this.context.metadata.displayName}s`,n=m`<span class="component-type">${o}</span>`,r=this.context.scope===P.local?dr(this.context.component):null,i=r?m` <span class="instance-name-quote">"</span><span class="instance-name">${r}</span
            ><span class="instance-name-quote">"</span>`:null;e=m`${n} ${i}`}else e=m`<span class="no-selection">Pick an element to get started</span>`;return m`
      <div class="picker">
        <button @click=${this.pickComponent}>${He.crosshair} ${e}</button>
      </div>
    `}renderLocalClassNameEditor(){var t;const e=((t=this.context)==null?void 0:t.scope)===P.local&&this.context.accessible;if(!this.context||!e)return null;const o=this.context.localClassName||this.context.suggestedClassName;return m` <vaadin-dev-tools-theme-class-name-editor
      .className=${o}
      @class-name-change=${this.handleClassNameChange}
    >
    </vaadin-dev-tools-theme-class-name-editor>`}async handleClassNameChange(t){if(!this.context)return;const e=this.context.localClassName,o=t.detail.value;if(e){const n=this.context.component.element;this.context.localClassName=o;const r=await this.api.setLocalClassName(this.context.component,o);this.historyActions=this.history.push(r.requestId,()=>Z.previewLocalClassName(n,o),()=>Z.previewLocalClassName(n,e))}else this.context={...this.context,suggestedClassName:o}}async pickComponent(){var t;this.removeElementHighlight((t=this.context)==null?void 0:t.component.element),this.pickerProvider().open({infoTemplate:m`
        <div>
          <h3>Locate the component to style</h3>
          <p>Use the mouse cursor to highlight components in the UI.</p>
          <p>Use arrow down/up to cycle through and highlight specific components under the cursor.</p>
          <p>Click the primary mouse button to select the component.</p>
        </div>
      `,pickCallback:async e=>{var o;const n=await ir.getMetadata(e);if(!n){this.context={component:e,scope:((o=this.context)==null?void 0:o.scope)||P.local},this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null;return}this.highlightElement(e.element),this.refreshComponentAndTheme(e,n)}})}handleScopeChange(t){this.context&&this.refreshTheme({...this.context,scope:t.detail.value})}async handlePropertyChange(t){if(!this.context||!this.baseTheme||!this.editedTheme)return;const{element:e,property:o,value:n}=t.detail;this.editedTheme.updatePropertyValue(e.selector,o.propertyName,n,!0),this.effectiveTheme=Y.combine(this.baseTheme,this.editedTheme),await this.ensureLocalClassName();const r={themeScope:this.context.scope,localClassName:this.context.localClassName},i=sr(e,r,o.propertyName,n);try{const s=await this.api.setCssRules([i]);this.historyActions=this.history.push(s.requestId);const l=ar(i);Z.add(l)}catch(s){console.error("Failed to update property value",s)}}async handleUndo(){this.historyActions=await this.history.undo(),await this.refreshComponentAndTheme()}async handleRedo(){this.historyActions=await this.history.redo(),await this.refreshComponentAndTheme()}async ensureLocalClassName(){if(!this.context||this.context.scope===P.global||this.context.localClassName)return;if(!this.context.localClassName&&!this.context.suggestedClassName)throw new Error("Cannot assign local class name for the component because it does not have a suggested class name");const t=this.context.component.element,e=this.context.suggestedClassName;this.context.localClassName=e;const o=await this.api.setLocalClassName(this.context.component,e);this.historyActions=this.history.push(o.requestId,()=>Z.previewLocalClassName(t,e),()=>Z.previewLocalClassName(t))}async refreshComponentAndTheme(t,e){var o,n,r;if(t=t||((o=this.context)==null?void 0:o.component),e=e||((n=this.context)==null?void 0:n.metadata),!t||!e)return;const i=await this.api.loadComponentMetadata(t);Z.previewLocalClassName(t.element,i.className),await this.refreshTheme({scope:((r=this.context)==null?void 0:r.scope)||P.local,metadata:e,component:t,localClassName:i.className,suggestedClassName:i.suggestedClassName,accessible:i.accessible})}async refreshTheme(t){const e=t||this.context;if(!e||!e.metadata)return;if(e.scope===P.local&&!e.accessible){this.context=e,this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null;return}let o=new Y(e.metadata);if(!(e.scope===P.local&&!e.localClassName)){const r={themeScope:e.scope,localClassName:e.localClassName},i=e.metadata.elements.map(l=>ue(l,r)),s=await this.api.loadRules(i);o=Y.fromServerRules(e.metadata,r,s.rules)}const n=await lr(e.metadata);this.context=e,this.baseTheme=n,this.editedTheme=o,this.effectiveTheme=Y.combine(n,this.editedTheme)}highlightElement(t){t&&t.classList.add("vaadin-theme-editor-highlight")}removeElementHighlight(t){t&&t.classList.remove("vaadin-theme-editor-highlight")}};Q([b({})],W.prototype,"expanded",2);Q([b({})],W.prototype,"themeEditorState",2);Q([b({})],W.prototype,"pickerProvider",2);Q([b({})],W.prototype,"connection",2);Q([C()],W.prototype,"historyActions",2);Q([C()],W.prototype,"context",2);Q([C()],W.prototype,"effectiveTheme",2);W=Q([L("vaadin-dev-tools-theme-editor")],W);var mi=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,o=[],n=0;n<t.rangeCount;n++)o.push(t.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||o.forEach(function(r){t.addRange(r)}),e&&e.focus()}},bo={"text/plain":"Text","text/html":"Url",default:"Text"},vi="Copy to clipboard: #{key}, Enter";function gi(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function fi(t,e){var o,n,r,i,s,l,a=!1;e||(e={}),o=e.debug||!1;try{r=mi(),i=document.createRange(),s=document.getSelection(),l=document.createElement("span"),l.textContent=t,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(p){if(p.stopPropagation(),e.format)if(p.preventDefault(),typeof p.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var v=bo[e.format]||bo.default;window.clipboardData.setData(v,t)}else p.clipboardData.clearData(),p.clipboardData.setData(e.format,t);e.onCopy&&(p.preventDefault(),e.onCopy(p.clipboardData))}),document.body.appendChild(l),i.selectNodeContents(l),s.addRange(i);var d=document.execCommand("copy");if(!d)throw new Error("copy command was unsuccessful");a=!0}catch(p){o&&console.error("unable to copy using execCommand: ",p),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),a=!0}catch(v){o&&console.error("unable to copy using clipboardData: ",v),o&&console.error("falling back to prompt"),n=gi("message"in e?e.message:vi),window.prompt(n,t)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(i):s.removeAllRanges()),l&&document.body.removeChild(l),r()}return a}const At=1e3,Tt=(t,e)=>{const o=Array.from(t.querySelectorAll(e.join(", "))),n=Array.from(t.querySelectorAll("*")).filter(r=>r.shadowRoot).flatMap(r=>Tt(r.shadowRoot,e));return[...o,...n]};let wo=!1;const Ie=(t,e)=>{wo||(window.addEventListener("message",r=>{r.data==="validate-license"&&window.location.reload()},!1),wo=!0);const o=t._overlayElement;if(o){if(o.shadowRoot){const r=o.shadowRoot.querySelector("slot:not([name])");if(r&&r.assignedElements().length>0){Ie(r.assignedElements()[0],e);return}}Ie(o,e);return}const n=e.messageHtml?e.messageHtml:`${e.message} <p>Component: ${e.product.name} ${e.product.version}</p>`.replace(/https:([^ ]*)/g,"<a href='https:$1'>https:$1</a>");t.isConnected&&(t.outerHTML=`<no-license style="display:flex;align-items:center;text-align:center;justify-content:center;"><div>${n}</div></no-license>`)},_e={},_o={},ve={},qo={},q=t=>`${t.name}_${t.version}`,Eo=t=>{const{cvdlName:e,version:o}=t.constructor,n={name:e,version:o},r=t.tagName.toLowerCase();_e[e]=_e[e]??[],_e[e].push(r);const i=ve[q(n)];i&&setTimeout(()=>Ie(t,i),At),ve[q(n)]||qo[q(n)]||_o[q(n)]||(_o[q(n)]=!0,window.Vaadin.devTools.checkLicense(n))},yi=t=>{qo[q(t)]=!0,console.debug("License check ok for",t)},Ho=t=>{const e=t.product.name;ve[q(t.product)]=t,console.error("License check failed for",e);const o=_e[e];(o==null?void 0:o.length)>0&&Tt(document,o).forEach(n=>{setTimeout(()=>Ie(n,ve[q(t.product)]),At)})},bi=t=>{const e=t.message,o=t.product.name;t.messageHtml=`No license found. <a target=_blank onclick="javascript:window.open(this.href);return false;" href="${e}">Go here to start a trial or retrieve your license.</a>`,ve[q(t.product)]=t,console.error("No license found when checking",o);const n=_e[o];(n==null?void 0:n.length)>0&&Tt(document,n).forEach(r=>{setTimeout(()=>Ie(r,ve[q(t.product)]),At)})},wi=()=>{window.Vaadin.devTools.createdCvdlElements.forEach(t=>{Eo(t)}),window.Vaadin.devTools.createdCvdlElements={push:t=>{Eo(t)}}};var N=(t=>(t.ACTIVE="active",t.INACTIVE="inactive",t.UNAVAILABLE="unavailable",t.ERROR="error",t))(N||{});const Wo=class extends Object{constructor(t){super(),this.status="unavailable",t&&(this.webSocket=new WebSocket(t),this.webSocket.onmessage=e=>this.handleMessage(e),this.webSocket.onerror=e=>this.handleError(e),this.webSocket.onclose=e=>{this.status!=="error"&&this.setStatus("unavailable"),this.webSocket=void 0}),setInterval(()=>{this.webSocket&&self.status!=="error"&&this.status!=="unavailable"&&this.webSocket.send("")},Wo.HEARTBEAT_INTERVAL)}onHandshake(){}onReload(){}onUpdate(t,e){}onConnectionError(t){}onStatusChange(t){}onMessage(t){console.error("Unknown message received from the live reload server:",t)}handleMessage(t){let e;try{e=JSON.parse(t.data)}catch(o){this.handleError(`[${o.name}: ${o.message}`);return}e.command==="hello"?(this.setStatus("active"),this.onHandshake()):e.command==="reload"?this.status==="active"&&this.onReload():e.command==="update"?this.status==="active"&&this.onUpdate(e.path,e.content):e.command==="license-check-ok"?yi(e.data):e.command==="license-check-failed"?Ho(e.data):e.command==="license-check-nokey"?bi(e.data):this.onMessage(e)}handleError(t){console.error(t),this.setStatus("error"),t instanceof Event&&this.webSocket?this.onConnectionError(`Error in WebSocket connection to ${this.webSocket.url}`):this.onConnectionError(t)}setActive(t){!t&&this.status==="active"?this.setStatus("inactive"):t&&this.status==="inactive"&&this.setStatus("active")}setStatus(t){this.status!==t&&(this.status=t,this.onStatusChange(t))}send(t,e){const o=JSON.stringify({command:t,data:e});this.webSocket?this.webSocket.readyState!==WebSocket.OPEN?this.webSocket.addEventListener("open",()=>this.webSocket.send(o)):this.webSocket.send(o):console.error(`Unable to send message ${t}. No websocket is available`)}setFeature(t,e){this.send("setFeature",{featureId:t,enabled:e})}sendTelemetry(t){this.send("reportTelemetry",{browserData:t})}sendLicenseCheck(t){this.send("checkLicense",t)}sendShowComponentCreateLocation(t){this.send("showComponentCreateLocation",t)}sendShowComponentAttachLocation(t){this.send("showComponentAttachLocation",t)}};let We=Wo;We.HEARTBEAT_INTERVAL=18e4;var _i=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,k=(t,e,o,n)=>{for(var r=n>1?void 0:n?Ei(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(r=(n?s(e,o,r):s(r))||r);return n&&r&&_i(e,o,r),r};const x=class extends D{constructor(){super(),this.expanded=!1,this.messages=[],this.notifications=[],this.frontendStatus=N.UNAVAILABLE,this.javaStatus=N.UNAVAILABLE,this.tabs=[{id:"log",title:"Log",render:()=>this.renderLog(),activate:this.activateLog},{id:"info",title:"Info",render:()=>this.renderInfo()},{id:"features",title:"Feature Flags",render:()=>this.renderFeatures()}],this.activeTab="log",this.serverInfo={flowVersion:"",vaadinVersion:"",javaVersion:"",osVersion:"",productName:""},this.features=[],this.unreadErrors=!1,this.componentPickActive=!1,this.themeEditorState=Se.disabled,this.nextMessageId=1,this.transitionDuration=0,this.disableLiveReloadTimeout=null,window.Vaadin.Flow&&this.tabs.push({id:"code",title:"Code",render:()=>this.renderCode()})}static get styles(){return[S`
        :host {
          --dev-tools-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
            'Helvetica Neue', sans-serif;
          --dev-tools-font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
            monospace;

          --dev-tools-font-size: 0.8125rem;
          --dev-tools-font-size-small: 0.75rem;

          --dev-tools-text-color: rgba(255, 255, 255, 0.8);
          --dev-tools-text-color-secondary: rgba(255, 255, 255, 0.65);
          --dev-tools-text-color-emphasis: rgba(255, 255, 255, 0.95);
          --dev-tools-text-color-active: rgba(255, 255, 255, 1);

          --dev-tools-background-color-inactive: rgba(45, 45, 45, 0.25);
          --dev-tools-background-color-active: rgba(45, 45, 45, 0.98);
          --dev-tools-background-color-active-blurred: rgba(45, 45, 45, 0.85);

          --dev-tools-border-radius: 0.5rem;
          --dev-tools-box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.4);

          --dev-tools-blue-hsl: 206, 100%, 70%;
          --dev-tools-blue-color: hsl(var(--dev-tools-blue-hsl));
          --dev-tools-green-hsl: 145, 80%, 42%;
          --dev-tools-green-color: hsl(var(--dev-tools-green-hsl));
          --dev-tools-grey-hsl: 0, 0%, 50%;
          --dev-tools-grey-color: hsl(var(--dev-tools-grey-hsl));
          --dev-tools-yellow-hsl: 38, 98%, 64%;
          --dev-tools-yellow-color: hsl(var(--dev-tools-yellow-hsl));
          --dev-tools-red-hsl: 355, 100%, 68%;
          --dev-tools-red-color: hsl(var(--dev-tools-red-hsl));

          /* Needs to be in ms, used in JavaScript as well */
          --dev-tools-transition-duration: 180ms;

          all: initial;

          direction: ltr;
          cursor: default;
          font: normal 400 var(--dev-tools-font-size) / 1.125rem var(--dev-tools-font-family);
          color: var(--dev-tools-text-color);
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;

          position: fixed;
          z-index: 20000;
          pointer-events: none;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
        }

        .dev-tools {
          pointer-events: auto;
          display: flex;
          align-items: center;
          position: fixed;
          z-index: inherit;
          right: 0.5rem;
          bottom: 0.5rem;
          min-width: 1.75rem;
          height: 1.75rem;
          max-width: 1.75rem;
          border-radius: 0.5rem;
          padding: 0.375rem;
          box-sizing: border-box;
          background-color: var(--dev-tools-background-color-inactive);
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
          color: var(--dev-tools-text-color);
          transition: var(--dev-tools-transition-duration);
          white-space: nowrap;
          line-height: 1rem;
        }

        .dev-tools:hover,
        .dev-tools.active {
          background-color: var(--dev-tools-background-color-active);
          box-shadow: var(--dev-tools-box-shadow);
        }

        .dev-tools.active {
          max-width: calc(100% - 1rem);
        }

        .dev-tools .dev-tools-icon {
          flex: none;
          pointer-events: none;
          display: inline-block;
          width: 1rem;
          height: 1rem;
          fill: #fff;
          transition: var(--dev-tools-transition-duration);
          margin: 0;
        }

        .dev-tools.active .dev-tools-icon {
          opacity: 0;
          position: absolute;
          transform: scale(0.5);
        }

        .dev-tools .status-blip {
          flex: none;
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          z-index: 20001;
          background: var(--dev-tools-grey-color);
          position: absolute;
          top: -1px;
          right: -1px;
        }

        .dev-tools .status-description {
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0 0.25rem;
        }

        .dev-tools.error {
          background-color: hsla(var(--dev-tools-red-hsl), 0.15);
          animation: bounce 0.5s;
          animation-iteration-count: 2;
        }

        .switch {
          display: inline-flex;
          align-items: center;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
          position: absolute;
        }

        .switch .slider {
          display: block;
          flex: none;
          width: 28px;
          height: 18px;
          border-radius: 9px;
          background-color: rgba(255, 255, 255, 0.3);
          transition: var(--dev-tools-transition-duration);
          margin-right: 0.5rem;
        }

        .switch:focus-within .slider,
        .switch .slider:hover {
          background-color: rgba(255, 255, 255, 0.35);
          transition: none;
        }

        .switch input:focus-visible ~ .slider {
          box-shadow: 0 0 0 2px var(--dev-tools-background-color-active), 0 0 0 4px var(--dev-tools-blue-color);
        }

        .switch .slider::before {
          content: '';
          display: block;
          margin: 2px;
          width: 14px;
          height: 14px;
          background-color: #fff;
          transition: var(--dev-tools-transition-duration);
          border-radius: 50%;
        }

        .switch input:checked + .slider {
          background-color: var(--dev-tools-green-color);
        }

        .switch input:checked + .slider::before {
          transform: translateX(10px);
        }

        .switch input:disabled + .slider::before {
          background-color: var(--dev-tools-grey-color);
        }

        .window.hidden {
          opacity: 0;
          transform: scale(0);
          position: absolute;
        }

        .window.visible {
          transform: none;
          opacity: 1;
          pointer-events: auto;
        }

        .window.visible ~ .dev-tools {
          opacity: 0;
          pointer-events: none;
        }

        .window.visible ~ .dev-tools .dev-tools-icon,
        .window.visible ~ .dev-tools .status-blip {
          transition: none;
          opacity: 0;
        }

        .window {
          border-radius: var(--dev-tools-border-radius);
          overflow: hidden;
          margin: 0.5rem;
          width: 30rem;
          max-width: calc(100% - 1rem);
          max-height: calc(100vh - 1rem);
          flex-shrink: 1;
          background-color: var(--dev-tools-background-color-active);
          color: var(--dev-tools-text-color);
          transition: var(--dev-tools-transition-duration);
          transform-origin: bottom right;
          display: flex;
          flex-direction: column;
          box-shadow: var(--dev-tools-box-shadow);
          outline: none;
        }

        .window-toolbar {
          display: flex;
          flex: none;
          align-items: center;
          padding: 0.375rem;
          white-space: nowrap;
          order: 1;
          background-color: rgba(0, 0, 0, 0.2);
          gap: 0.5rem;
        }

        .tab {
          color: var(--dev-tools-text-color-secondary);
          font: inherit;
          font-size: var(--dev-tools-font-size-small);
          font-weight: 500;
          line-height: 1;
          padding: 0.25rem 0.375rem;
          background: none;
          border: none;
          margin: 0;
          border-radius: 0.25rem;
          transition: var(--dev-tools-transition-duration);
        }

        .tab:hover,
        .tab.active {
          color: var(--dev-tools-text-color-active);
        }

        .tab.active {
          background-color: rgba(255, 255, 255, 0.12);
        }

        .tab.unreadErrors::after {
          content: '•';
          color: hsl(var(--dev-tools-red-hsl));
          font-size: 1.5rem;
          position: absolute;
          transform: translate(0, -50%);
        }

        .ahreflike {
          font-weight: 500;
          color: var(--dev-tools-text-color-secondary);
          text-decoration: underline;
          cursor: pointer;
        }

        .ahreflike:hover {
          color: var(--dev-tools-text-color-emphasis);
        }

        .button {
          all: initial;
          font-family: inherit;
          font-size: var(--dev-tools-font-size-small);
          line-height: 1;
          white-space: nowrap;
          background-color: rgba(0, 0, 0, 0.2);
          color: inherit;
          font-weight: 600;
          padding: 0.25rem 0.375rem;
          border-radius: 0.25rem;
        }

        .button:focus,
        .button:hover {
          color: var(--dev-tools-text-color-emphasis);
        }

        .minimize-button {
          flex: none;
          width: 1rem;
          height: 1rem;
          color: inherit;
          background-color: transparent;
          border: 0;
          padding: 0;
          margin: 0 0 0 auto;
          opacity: 0.8;
        }

        .minimize-button:hover {
          opacity: 1;
        }

        .minimize-button svg {
          max-width: 100%;
        }

        .message.information {
          --dev-tools-notification-color: var(--dev-tools-blue-color);
        }

        .message.warning {
          --dev-tools-notification-color: var(--dev-tools-yellow-color);
        }

        .message.error {
          --dev-tools-notification-color: var(--dev-tools-red-color);
        }

        .message {
          display: flex;
          padding: 0.1875rem 0.75rem 0.1875rem 2rem;
          background-clip: padding-box;
        }

        .message.log {
          padding-left: 0.75rem;
        }

        .message-content {
          margin-right: 0.5rem;
          -webkit-user-select: text;
          -moz-user-select: text;
          user-select: text;
        }

        .message-heading {
          position: relative;
          display: flex;
          align-items: center;
          margin: 0.125rem 0;
        }

        .message.log {
          color: var(--dev-tools-text-color-secondary);
        }

        .message:not(.log) .message-heading {
          font-weight: 500;
        }

        .message.has-details .message-heading {
          color: var(--dev-tools-text-color-emphasis);
          font-weight: 600;
        }

        .message-heading::before {
          position: absolute;
          margin-left: -1.5rem;
          display: inline-block;
          text-align: center;
          font-size: 0.875em;
          font-weight: 600;
          line-height: calc(1.25em - 2px);
          width: 14px;
          height: 14px;
          box-sizing: border-box;
          border: 1px solid transparent;
          border-radius: 50%;
        }

        .message.information .message-heading::before {
          content: 'i';
          border-color: currentColor;
          color: var(--dev-tools-notification-color);
        }

        .message.warning .message-heading::before,
        .message.error .message-heading::before {
          content: '!';
          color: var(--dev-tools-background-color-active);
          background-color: var(--dev-tools-notification-color);
        }

        .features-tray {
          padding: 0.75rem;
          flex: auto;
          overflow: auto;
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          user-select: text;
        }

        .features-tray p {
          margin-top: 0;
          color: var(--dev-tools-text-color-secondary);
        }

        .features-tray .feature {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 0.5em;
        }

        .message .message-details {
          font-weight: 400;
          color: var(--dev-tools-text-color-secondary);
          margin: 0.25rem 0;
        }

        .message .message-details[hidden] {
          display: none;
        }

        .message .message-details p {
          display: inline;
          margin: 0;
          margin-right: 0.375em;
          word-break: break-word;
        }

        .message .persist {
          color: var(--dev-tools-text-color-secondary);
          white-space: nowrap;
          margin: 0.375rem 0;
          display: flex;
          align-items: center;
          position: relative;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        .message .persist::before {
          content: '';
          width: 1em;
          height: 1em;
          border-radius: 0.2em;
          margin-right: 0.375em;
          background-color: rgba(255, 255, 255, 0.3);
        }

        .message .persist:hover::before {
          background-color: rgba(255, 255, 255, 0.4);
        }

        .message .persist.on::before {
          background-color: rgba(255, 255, 255, 0.9);
        }

        .message .persist.on::after {
          content: '';
          order: -1;
          position: absolute;
          width: 0.75em;
          height: 0.25em;
          border: 2px solid var(--dev-tools-background-color-active);
          border-width: 0 0 2px 2px;
          transform: translate(0.05em, -0.05em) rotate(-45deg) scale(0.8, 0.9);
        }

        .message .dismiss-message {
          font-weight: 600;
          align-self: stretch;
          display: flex;
          align-items: center;
          padding: 0 0.25rem;
          margin-left: 0.5rem;
          color: var(--dev-tools-text-color-secondary);
        }

        .message .dismiss-message:hover {
          color: var(--dev-tools-text-color);
        }

        .notification-tray {
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
          margin: 0.5rem;
          flex: none;
        }

        .window.hidden + .notification-tray {
          margin-bottom: 3rem;
        }

        .notification-tray .message {
          pointer-events: auto;
          background-color: var(--dev-tools-background-color-active);
          color: var(--dev-tools-text-color);
          max-width: 30rem;
          box-sizing: border-box;
          border-radius: var(--dev-tools-border-radius);
          margin-top: 0.5rem;
          transition: var(--dev-tools-transition-duration);
          transform-origin: bottom right;
          animation: slideIn var(--dev-tools-transition-duration);
          box-shadow: var(--dev-tools-box-shadow);
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }

        .notification-tray .message.animate-out {
          animation: slideOut forwards var(--dev-tools-transition-duration);
        }

        .notification-tray .message .message-details {
          max-height: 10em;
          overflow: hidden;
        }

        .message-tray {
          flex: auto;
          overflow: auto;
          max-height: 20rem;
          user-select: text;
        }

        .message-tray .message {
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          padding-left: 2.25rem;
        }

        .message-tray .message.warning {
          background-color: hsla(var(--dev-tools-yellow-hsl), 0.09);
        }

        .message-tray .message.error {
          background-color: hsla(var(--dev-tools-red-hsl), 0.09);
        }

        .message-tray .message.error .message-heading {
          color: hsl(var(--dev-tools-red-hsl));
        }

        .message-tray .message.warning .message-heading {
          color: hsl(var(--dev-tools-yellow-hsl));
        }

        .message-tray .message + .message {
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .message-tray .dismiss-message,
        .message-tray .persist {
          display: none;
        }

        .info-tray {
          padding: 0.75rem;
          position: relative;
          flex: auto;
          overflow: auto;
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          user-select: text;
        }

        .info-tray dl {
          margin: 0;
          display: grid;
          grid-template-columns: max-content 1fr;
          column-gap: 0.75rem;
          position: relative;
        }

        .info-tray dt {
          grid-column: 1;
          color: var(--dev-tools-text-color-emphasis);
        }

        .info-tray dt:not(:first-child)::before {
          content: '';
          width: 100%;
          position: absolute;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.1);
          margin-top: -0.375rem;
        }

        .info-tray dd {
          grid-column: 2;
          margin: 0;
        }

        .info-tray :is(dt, dd):not(:last-child) {
          margin-bottom: 0.75rem;
        }

        .info-tray dd + dd {
          margin-top: -0.5rem;
        }

        .info-tray .live-reload-status::before {
          content: '•';
          color: var(--status-color);
          width: 0.75rem;
          display: inline-block;
          font-size: 1rem;
          line-height: 0.5rem;
        }

        .info-tray .copy {
          position: fixed;
          z-index: 1;
          top: 0.5rem;
          right: 0.5rem;
        }

        .info-tray .switch {
          vertical-align: -4px;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0%);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0%);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
        }

        @keyframes bounce {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.5);
            background-color: hsla(var(--dev-tools-red-hsl), 1);
          }
          100% {
            transform: scale(1);
          }
        }

        @supports (backdrop-filter: blur(1px)) {
          .dev-tools,
          .window,
          .notification-tray .message {
            backdrop-filter: blur(8px);
          }
          .dev-tools:hover,
          .dev-tools.active,
          .window,
          .notification-tray .message {
            background-color: var(--dev-tools-background-color-active-blurred);
          }
        }
      `,Bo]}static get isActive(){const t=window.sessionStorage.getItem(x.ACTIVE_KEY_IN_SESSION_STORAGE);return t===null||t!=="false"}static notificationDismissed(t){const e=window.localStorage.getItem(x.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE);return e!==null&&e.includes(t)}elementTelemetry(){let t={};try{const e=localStorage.getItem("vaadin.statistics.basket");if(!e)return;t=JSON.parse(e)}catch{return}this.frontendConnection&&this.frontendConnection.sendTelemetry(t)}openWebSocketConnection(){this.frontendStatus=N.UNAVAILABLE,this.javaStatus=N.UNAVAILABLE;const t=l=>this.log("error",l),e=()=>{this.showSplashMessage("Reloading…");const l=window.sessionStorage.getItem(x.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE),a=l?parseInt(l,10)+1:1;window.sessionStorage.setItem(x.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE,a.toString()),window.sessionStorage.setItem(x.TRIGGERED_KEY_IN_SESSION_STORAGE,"true"),window.location.reload()},o=(l,a)=>{let d=document.head.querySelector(`style[data-file-path='${l}']`);d?(this.log("information","Hot update of "+l),d.textContent=a,document.dispatchEvent(new CustomEvent("vaadin-theme-updated"))):e()},n=new We(this.getDedicatedWebSocketUrl());n.onHandshake=()=>{this.log("log","Vaadin development mode initialized"),x.isActive||n.setActive(!1),this.elementTelemetry()},n.onConnectionError=t,n.onReload=e,n.onUpdate=o,n.onStatusChange=l=>{this.frontendStatus=l},n.onMessage=l=>this.handleFrontendMessage(l),this.frontendConnection=n;let r;this.backend===x.SPRING_BOOT_DEVTOOLS&&this.springBootLiveReloadPort?(r=new We(this.getSpringBootWebSocketUrl(window.location)),r.onHandshake=()=>{x.isActive||r.setActive(!1)},r.onReload=e,r.onConnectionError=t):this.backend===x.JREBEL||this.backend===x.HOTSWAP_AGENT?r=n:r=new We(void 0);const i=r.onStatusChange;r.onStatusChange=l=>{i(l),this.javaStatus=l};const s=r.onHandshake;r.onHandshake=()=>{s(),this.backend&&this.log("information",`Java live reload available: ${x.BACKEND_DISPLAY_NAME[this.backend]}`)},this.javaConnection=r,this.backend||this.showNotification("warning","Java live reload unavailable","Live reload for Java changes is currently not set up. Find out how to make use of this functionality to boost your workflow.","https://vaadin.com/docs/latest/flow/configuration/live-reload","liveReloadUnavailable")}handleFrontendMessage(t){if((t==null?void 0:t.command)==="serverInfo")this.serverInfo=t.data;else if((t==null?void 0:t.command)==="featureFlags")this.features=t.data.features;else if((t==null?void 0:t.command)==="themeEditorState"){const e=!!window.Vaadin.Flow;this.themeEditorState=t.data,e&&this.themeEditorState!==Se.disabled&&(this.tabs.push({id:"theme-editor",title:"Theme Editor (Free Preview)",render:()=>this.renderThemeEditor()}),this.requestUpdate())}else console.error("Unknown message from front-end connection:",JSON.stringify(t))}getDedicatedWebSocketUrl(){function t(o){const n=document.createElement("div");return n.innerHTML=`<a href="${o}"/>`,n.firstChild.href}if(this.url===void 0)return;const e=t(this.url);if(!e.startsWith("http://")&&!e.startsWith("https://")){console.error("The protocol of the url should be http or https for live reload to work.");return}return`${e.replace(/^http/,"ws")}?v-r=push&debug_window`}getSpringBootWebSocketUrl(t){const{hostname:e}=t,o=t.protocol==="https:"?"wss":"ws";if(e.endsWith("gitpod.io")){const n=e.replace(/.*?-/,"");return`${o}://${this.springBootLiveReloadPort}-${n}`}else return`${o}://${e}:${this.springBootLiveReloadPort}`}connectedCallback(){if(super.connectedCallback(),this.catchErrors(),this.disableEventListener=e=>this.demoteSplashMessage(),document.body.addEventListener("focus",this.disableEventListener),document.body.addEventListener("click",this.disableEventListener),this.openWebSocketConnection(),window.sessionStorage.getItem(x.TRIGGERED_KEY_IN_SESSION_STORAGE)){const e=new Date,o=`${`0${e.getHours()}`.slice(-2)}:${`0${e.getMinutes()}`.slice(-2)}:${`0${e.getSeconds()}`.slice(-2)}`;this.showSplashMessage(`Page reloaded at ${o}`),window.sessionStorage.removeItem(x.TRIGGERED_KEY_IN_SESSION_STORAGE)}this.transitionDuration=parseInt(window.getComputedStyle(this).getPropertyValue("--dev-tools-transition-duration"),10);const t=window;t.Vaadin=t.Vaadin||{},t.Vaadin.devTools=Object.assign(this,t.Vaadin.devTools),wi(),document.documentElement.addEventListener("vaadin-overlay-outside-click",e=>{const o=e,n=o.target.owner;n&&Jn(this,n)||o.detail.sourceEvent.composedPath().includes(this)&&e.preventDefault()})}format(t){return t.toString()}catchErrors(){const t=window.Vaadin.ConsoleErrors;t&&t.forEach(e=>{this.log("error",e.map(o=>this.format(o)).join(" "))}),window.Vaadin.ConsoleErrors={push:e=>{this.log("error",e.map(o=>this.format(o)).join(" "))}}}disconnectedCallback(){this.disableEventListener&&(document.body.removeEventListener("focus",this.disableEventListener),document.body.removeEventListener("click",this.disableEventListener)),super.disconnectedCallback()}toggleExpanded(){this.notifications.slice().forEach(t=>this.dismissNotification(t.id)),this.expanded=!this.expanded,this.expanded&&this.root.focus()}showSplashMessage(t){this.splashMessage=t,this.splashMessage&&(this.expanded?this.demoteSplashMessage():setTimeout(()=>{this.demoteSplashMessage()},x.AUTO_DEMOTE_NOTIFICATION_DELAY))}demoteSplashMessage(){this.splashMessage&&this.log("log",this.splashMessage),this.showSplashMessage(void 0)}checkLicense(t){this.frontendConnection?this.frontendConnection.sendLicenseCheck(t):Ho({message:"Internal error: no connection",product:t})}log(t,e,o,n){const r=this.nextMessageId;for(this.nextMessageId+=1,this.messages.push({id:r,type:t,message:e,details:o,link:n,dontShowAgain:!1,deleted:!1});this.messages.length>x.MAX_LOG_ROWS;)this.messages.shift();this.requestUpdate(),this.updateComplete.then(()=>{const i=this.renderRoot.querySelector(".message-tray .message:last-child");this.expanded&&i?(setTimeout(()=>i.scrollIntoView({behavior:"smooth"}),this.transitionDuration),this.unreadErrors=!1):t==="error"&&(this.unreadErrors=!0)})}showNotification(t,e,o,n,r){if(r===void 0||!x.notificationDismissed(r)){if(this.notifications.filter(s=>s.persistentId===r).filter(s=>!s.deleted).length>0)return;const i=this.nextMessageId;this.nextMessageId+=1,this.notifications.push({id:i,type:t,message:e,details:o,link:n,persistentId:r,dontShowAgain:!1,deleted:!1}),n===void 0&&setTimeout(()=>{this.dismissNotification(i)},x.AUTO_DEMOTE_NOTIFICATION_DELAY),this.requestUpdate()}else this.log(t,e,o,n)}dismissNotification(t){const e=this.findNotificationIndex(t);if(e!==-1&&!this.notifications[e].deleted){const o=this.notifications[e];if(o.dontShowAgain&&o.persistentId&&!x.notificationDismissed(o.persistentId)){let n=window.localStorage.getItem(x.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE);n=n===null?o.persistentId:`${n},${o.persistentId}`,window.localStorage.setItem(x.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE,n)}o.deleted=!0,this.log(o.type,o.message,o.details,o.link),setTimeout(()=>{const n=this.findNotificationIndex(t);n!==-1&&(this.notifications.splice(n,1),this.requestUpdate())},this.transitionDuration)}}findNotificationIndex(t){let e=-1;return this.notifications.some((o,n)=>o.id===t?(e=n,!0):!1),e}toggleDontShowAgain(t){const e=this.findNotificationIndex(t);if(e!==-1&&!this.notifications[e].deleted){const o=this.notifications[e];o.dontShowAgain=!o.dontShowAgain,this.requestUpdate()}}setActive(t){var e,o;(e=this.frontendConnection)==null||e.setActive(t),(o=this.javaConnection)==null||o.setActive(t),window.sessionStorage.setItem(x.ACTIVE_KEY_IN_SESSION_STORAGE,t?"true":"false")}getStatusColor(t){return t===N.ACTIVE?"var(--dev-tools-green-color)":t===N.INACTIVE?"var(--dev-tools-grey-color)":t===N.UNAVAILABLE?"var(--dev-tools-yellow-hsl)":t===N.ERROR?"var(--dev-tools-red-color)":"none"}renderMessage(t){return m`
      <div
        class="message ${t.type} ${t.deleted?"animate-out":""} ${t.details||t.link?"has-details":""}"
      >
        <div class="message-content">
          <div class="message-heading">${t.message}</div>
          <div class="message-details" ?hidden="${!t.details&&!t.link}">
            ${t.details?m`<p>${t.details}</p>`:""}
            ${t.link?m`<a class="ahreflike" href="${t.link}" target="_blank">Learn more</a>`:""}
          </div>
          ${t.persistentId?m`<div
                class="persist ${t.dontShowAgain?"on":"off"}"
                @click=${()=>this.toggleDontShowAgain(t.id)}
              >
                Don’t show again
              </div>`:""}
        </div>
        <div class="dismiss-message" @click=${()=>this.dismissNotification(t.id)}>Dismiss</div>
      </div>
    `}render(){return m` <div
        class="window ${this.expanded&&!this.componentPickActive?"visible":"hidden"}"
        tabindex="0"
        @keydown=${t=>t.key==="Escape"&&this.expanded&&this.toggleExpanded()}
      >
        <div class="window-toolbar">
          ${this.tabs.map(t=>m`<button
                class=${So({tab:!0,active:this.activeTab===t.id,unreadErrors:t.id==="log"&&this.unreadErrors})}
                id="${t.id}"
                @click=${()=>{this.activeTab=t.id,t.activate&&t.activate.call(this)}}
              >
                ${t.title}
              </button> `)}
          <button class="minimize-button" title="Minimize" @click=${()=>this.toggleExpanded()}>
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff" opacity=".8">
                <path
                  d="m7.25 1.75c0-.41421.33579-.75.75-.75h3.25c2.0711 0 3.75 1.67893 3.75 3.75v6.5c0 2.0711-1.6789 3.75-3.75 3.75h-6.5c-2.07107 0-3.75-1.6789-3.75-3.75v-3.25c0-.41421.33579-.75.75-.75s.75.33579.75.75v3.25c0 1.2426 1.00736 2.25 2.25 2.25h6.5c1.2426 0 2.25-1.0074 2.25-2.25v-6.5c0-1.24264-1.0074-2.25-2.25-2.25h-3.25c-.41421 0-.75-.33579-.75-.75z"
                />
                <path
                  d="m2.96967 2.96967c.29289-.29289.76777-.29289 1.06066 0l5.46967 5.46967v-2.68934c0-.41421.33579-.75.75-.75.4142 0 .75.33579.75.75v4.5c0 .4142-.3358.75-.75.75h-4.5c-.41421 0-.75-.3358-.75-.75 0-.41421.33579-.75.75-.75h2.68934l-5.46967-5.46967c-.29289-.29289-.29289-.76777 0-1.06066z"
                />
              </g>
            </svg>
          </button>
        </div>
        ${this.tabs.map(t=>this.activeTab===t.id?t.render():Dt)}
      </div>

      <div class="notification-tray">${this.notifications.map(t=>this.renderMessage(t))}</div>
      <vaadin-dev-tools-component-picker
        .active=${this.componentPickActive}
        @component-picker-opened=${()=>{this.componentPickActive=!0}}
        @component-picker-closed=${()=>{this.componentPickActive=!1}}
      ></vaadin-dev-tools-component-picker>
      <div
        class="dev-tools ${this.splashMessage?"active":""}${this.unreadErrors?" error":""}"
        @click=${()=>this.toggleExpanded()}
      >
        ${this.unreadErrors?m`<svg
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="dev-tools-icon error"
            >
              <clipPath id="a"><path d="m0 0h16v16h-16z" /></clipPath>
              <g clip-path="url(#a)">
                <path
                  d="m6.25685 2.09894c.76461-1.359306 2.72169-1.359308 3.4863 0l5.58035 9.92056c.7499 1.3332-.2135 2.9805-1.7432 2.9805h-11.1606c-1.529658 0-2.4930857-1.6473-1.743156-2.9805z"
                  fill="#ff5c69"
                />
                <path
                  d="m7.99699 4c-.45693 0-.82368.37726-.81077.834l.09533 3.37352c.01094.38726.32803.69551.71544.69551.38741 0 .70449-.30825.71544-.69551l.09533-3.37352c.0129-.45674-.35384-.834-.81077-.834zm.00301 8c.60843 0 1-.3879 1-.979 0-.5972-.39157-.9851-1-.9851s-1 .3879-1 .9851c0 .5911.39157.979 1 .979z"
                  fill="#fff"
                />
              </g>
            </svg>`:m`<svg
              fill="none"
              height="17"
              viewBox="0 0 16 17"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              class="dev-tools-icon logo"
            >
              <g fill="#fff">
                <path
                  d="m8.88273 5.97926c0 .04401-.0032.08898-.00801.12913-.02467.42848-.37813.76767-.8117.76767-.43358 0-.78704-.34112-.81171-.76928-.00481-.04015-.00801-.08351-.00801-.12752 0-.42784-.10255-.87656-1.14434-.87656h-3.48364c-1.57118 0-2.315271-.72849-2.315271-2.21758v-1.26683c0-.42431.324618-.768314.748261-.768314.42331 0 .74441.344004.74441.768314v.42784c0 .47924.39576.81265 1.11293.81265h3.41538c1.5542 0 1.67373 1.156 1.725 1.7679h.03429c.05095-.6119.17048-1.7679 1.72468-1.7679h3.4154c.7172 0 1.0145-.32924 1.0145-.80847l-.0067-.43202c0-.42431.3227-.768314.7463-.768314.4234 0 .7255.344004.7255.768314v1.26683c0 1.48909-.6181 2.21758-2.1893 2.21758h-3.4836c-1.04182 0-1.14437.44872-1.14437.87656z"
                />
                <path
                  d="m8.82577 15.1648c-.14311.3144-.4588.5335-.82635.5335-.37268 0-.69252-.2249-.83244-.5466-.00206-.0037-.00412-.0073-.00617-.0108-.00275-.0047-.00549-.0094-.00824-.0145l-3.16998-5.87318c-.08773-.15366-.13383-.32816-.13383-.50395 0-.56168.45592-1.01879 1.01621-1.01879.45048 0 .75656.22069.96595.6993l2.16882 4.05042 2.17166-4.05524c.2069-.47379.513-.69448.9634-.69448.5603 0 1.0166.45711 1.0166 1.01879 0 .17579-.0465.35029-.1348.50523l-3.1697 5.8725c-.00503.0096-.01006.0184-.01509.0272-.00201.0036-.00402.0071-.00604.0106z"
                />
              </g>
            </svg>`}

        <span
          class="status-blip"
          style="background: linear-gradient(to right, ${this.getStatusColor(this.frontendStatus)} 50%, ${this.getStatusColor(this.javaStatus)} 50%)"
        ></span>
        ${this.splashMessage?m`<span class="status-description">${this.splashMessage}</span></div>`:Dt}
      </div>`}renderLog(){return m`<div class="message-tray">${this.messages.map(t=>this.renderMessage(t))}</div>`}activateLog(){this.unreadErrors=!1,this.updateComplete.then(()=>{const t=this.renderRoot.querySelector(".message-tray .message:last-child");t&&t.scrollIntoView()})}renderCode(){return m`<div class="info-tray">
      <div>
        <select id="locationType">
          <option value="create" selected>Create</option>
          <option value="attach">Attach</option>
        </select>
        <button
          class="button pick"
          @click=${async()=>{await _(()=>Promise.resolve().then(()=>hi),void 0),this.componentPicker.open({infoTemplate:m`
                <div>
                  <h3>Locate a component in source code</h3>
                  <p>Use the mouse cursor to highlight components in the UI.</p>
                  <p>Use arrow down/up to cycle through and highlight specific components under the cursor.</p>
                  <p>
                    Click the primary mouse button to open the corresponding source code line of the highlighted
                    component in your IDE.
                  </p>
                </div>
              `,pickCallback:t=>{const e={nodeId:t.nodeId,uiId:t.uiId};this.renderRoot.querySelector("#locationType").value==="create"?this.frontendConnection.sendShowComponentCreateLocation(e):this.frontendConnection.sendShowComponentAttachLocation(e)}})}}
        >
          Find component in code
        </button>
      </div>
      </div>
    </div>`}renderInfo(){return m`<div class="info-tray">
      <button class="button copy" @click=${this.copyInfoToClipboard}>Copy</button>
      <dl>
        <dt>${this.serverInfo.productName}</dt>
        <dd>${this.serverInfo.vaadinVersion}</dd>
        <dt>Flow</dt>
        <dd>${this.serverInfo.flowVersion}</dd>
        <dt>Java</dt>
        <dd>${this.serverInfo.javaVersion}</dd>
        <dt>OS</dt>
        <dd>${this.serverInfo.osVersion}</dd>
        <dt>Browser</dt>
        <dd>${navigator.userAgent}</dd>
        <dt>
          Live reload
          <label class="switch">
            <input
              id="toggle"
              type="checkbox"
              ?disabled=${this.liveReloadDisabled||(this.frontendStatus===N.UNAVAILABLE||this.frontendStatus===N.ERROR)&&(this.javaStatus===N.UNAVAILABLE||this.javaStatus===N.ERROR)}
              ?checked="${this.frontendStatus===N.ACTIVE||this.javaStatus===N.ACTIVE}"
              @change=${t=>this.setActive(t.target.checked)}
            />
            <span class="slider"></span>
          </label>
        </dt>
        <dd class="live-reload-status" style="--status-color: ${this.getStatusColor(this.javaStatus)}">
          Java ${this.javaStatus} ${this.backend?`(${x.BACKEND_DISPLAY_NAME[this.backend]})`:""}
        </dd>
        <dd class="live-reload-status" style="--status-color: ${this.getStatusColor(this.frontendStatus)}">
          Front end ${this.frontendStatus}
        </dd>
      </dl>
    </div>`}renderFeatures(){return m`<div class="features-tray">
      ${this.features.map(t=>m`<div class="feature">
          <label class="switch">
            <input
              class="feature-toggle"
              id="feature-toggle-${t.id}"
              type="checkbox"
              ?checked=${t.enabled}
              @change=${e=>this.toggleFeatureFlag(e,t)}
            />
            <span class="slider"></span>
            ${t.title}
          </label>
          <a class="ahreflike" href="${t.moreInfoLink}" target="_blank">Learn more</a>
        </div>`)}
    </div>`}renderThemeEditor(){return m` <vaadin-dev-tools-theme-editor
      .expanded=${this.expanded}
      .themeEditorState=${this.themeEditorState}
      .pickerProvider=${()=>this.componentPicker}
      .connection=${this.frontendConnection}
    ></vaadin-dev-tools-theme-editor>`}copyInfoToClipboard(){const t=this.renderRoot.querySelectorAll(".info-tray dt, .info-tray dd"),e=Array.from(t).map(o=>(o.localName==="dd"?": ":`
`)+o.textContent.trim()).join("").replace(/^\n/,"");fi(e),this.showNotification("information","Environment information copied to clipboard",void 0,void 0,"versionInfoCopied")}toggleFeatureFlag(t,e){const o=t.target.checked;this.frontendConnection?(this.frontendConnection.setFeature(e.id,o),this.showNotification("information",`“${e.title}” ${o?"enabled":"disabled"}`,e.requiresServerRestart?"This feature requires a server restart":void 0,void 0,`feature${e.id}${o?"Enabled":"Disabled"}`)):this.log("error",`Unable to toggle feature ${e.title}: No server connection available`)}};let y=x;y.MAX_LOG_ROWS=1e3;y.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE="vaadin.live-reload.dismissedNotifications";y.ACTIVE_KEY_IN_SESSION_STORAGE="vaadin.live-reload.active";y.TRIGGERED_KEY_IN_SESSION_STORAGE="vaadin.live-reload.triggered";y.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE="vaadin.live-reload.triggeredCount";y.AUTO_DEMOTE_NOTIFICATION_DELAY=5e3;y.HOTSWAP_AGENT="HOTSWAP_AGENT";y.JREBEL="JREBEL";y.SPRING_BOOT_DEVTOOLS="SPRING_BOOT_DEVTOOLS";y.BACKEND_DISPLAY_NAME={HOTSWAP_AGENT:"HotswapAgent",JREBEL:"JRebel",SPRING_BOOT_DEVTOOLS:"Spring Boot Devtools"};k([b({type:String})],y.prototype,"url",2);k([b({type:Boolean,attribute:!0})],y.prototype,"liveReloadDisabled",2);k([b({type:String})],y.prototype,"backend",2);k([b({type:Number})],y.prototype,"springBootLiveReloadPort",2);k([b({type:Boolean,attribute:!1})],y.prototype,"expanded",2);k([b({type:Array,attribute:!1})],y.prototype,"messages",2);k([b({type:String,attribute:!1})],y.prototype,"splashMessage",2);k([b({type:Array,attribute:!1})],y.prototype,"notifications",2);k([b({type:String,attribute:!1})],y.prototype,"frontendStatus",2);k([b({type:String,attribute:!1})],y.prototype,"javaStatus",2);k([C()],y.prototype,"tabs",2);k([C()],y.prototype,"activeTab",2);k([C()],y.prototype,"serverInfo",2);k([C()],y.prototype,"features",2);k([C()],y.prototype,"unreadErrors",2);k([Ae(".window")],y.prototype,"root",2);k([Ae("vaadin-dev-tools-component-picker")],y.prototype,"componentPicker",2);k([C()],y.prototype,"componentPickActive",2);k([C()],y.prototype,"themeEditorState",2);customElements.get("vaadin-dev-tools")===void 0&&customElements.define("vaadin-dev-tools",y);export{be as F,U as T,ce as U,er as f,Zn as g,$ as y};
