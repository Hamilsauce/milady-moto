import{d as Zo,r as ta,u as ea,c as Rn,F as na,a as sa,b as ia,e as k,o as xn,w as Rt,v as xt}from"./index.ea22829b.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ra=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},qi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|l>>6,b=l&63;c||(b=64,o||(p=64)),s.push(n[h],n[d],n[p],n[b])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Hi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ra(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||l==null||d==null)throw Error();const p=r<<2|a>>4;if(s.push(p),l!==64){const b=a<<4&240|l>>2;if(s.push(b),d!==64){const I=l<<6&192|d;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},oa=function(e){const t=Hi(e);return qi.encodeByteArray(t,!0)},Be=function(e){return oa(e).replace(/\./g,"")},aa=function(e){try{return qi.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function ca(){try{return typeof indexedDB=="object"}catch{return!1}}function la(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}function ha(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=()=>ha().__FIREBASE_DEFAULTS__,fa=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},da=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&aa(e[1]);return t&&JSON.parse(t)},Ki=()=>{try{return ua()||fa()||da()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},pa=e=>{var t,n;return(n=(t=Ki())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ga=e=>{const t=pa(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},ma=()=>{var e;return(e=Ki())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Be(JSON.stringify(n)),Be(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="FirebaseError";class Kt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=wa,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gi.prototype.create)}}class Gi{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Ea(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Kt(i,a,s)}}function Ea(e,t){return e.replace(Ta,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Ta=/\{\$([^}]+)}/g;function Gn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Zs(r)&&Zs(o)){if(!Gn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Zs(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){return e&&e._delegate?e._delegate:e}class re{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new ya;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Sa(t))try{this.getOrInitializeService({instanceIdentifier:wt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=wt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=wt){return this.instances.has(t)}getOptions(t=wt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ba(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=wt){return this.component?this.component.multipleInstances?t:wt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ba(e){return e===wt?void 0:e}function Sa(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ia(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(S||(S={}));const Ca={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Da=S.INFO,_a={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},Na=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=_a[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zi{constructor(t){this.name=t,this._logLevel=Da,this._logHandler=Na,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in S))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ca[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...t),this._logHandler(this,S.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...t),this._logHandler(this,S.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,S.INFO,...t),this._logHandler(this,S.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,S.WARN,...t),this._logHandler(this,S.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...t),this._logHandler(this,S.ERROR,...t)}}const ka=(e,t)=>t.some(n=>e instanceof n);let ti,ei;function Ra(){return ti||(ti=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xa(){return ei||(ei=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wi=new WeakMap,zn=new WeakMap,Qi=new WeakMap,On=new WeakMap,gs=new WeakMap;function Oa(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(ut(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Wi.set(n,e)}).catch(()=>{}),gs.set(t,e),t}function La(e){if(zn.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});zn.set(e,t)}let Wn={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return zn.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Qi.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ma(e){Wn=e(Wn)}function Pa(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Ln(this),t,...n);return Qi.set(s,t.sort?t.sort():[t]),ut(s)}:xa().includes(e)?function(...t){return e.apply(Ln(this),t),ut(Wi.get(this))}:function(...t){return ut(e.apply(Ln(this),t))}}function Fa(e){return typeof e=="function"?Pa(e):(e instanceof IDBTransaction&&La(e),ka(e,Ra())?new Proxy(e,Wn):e)}function ut(e){if(e instanceof IDBRequest)return Oa(e);if(On.has(e))return On.get(e);const t=Fa(e);return t!==e&&(On.set(e,t),gs.set(t,e)),t}const Ln=e=>gs.get(e);function Va(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=ut(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ut(o.result),c.oldVersion,c.newVersion,ut(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ua=["get","getKey","getAll","getAllKeys","count"],Ba=["put","add","delete","clear"],Mn=new Map;function ni(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Mn.get(t))return Mn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Ba.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ua.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Mn.set(t,r),r}Ma(e=>({...e,get:(t,n,s)=>ni(t,n)||e.get(t,n,s),has:(t,n)=>!!ni(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ja(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ja(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Qn="@firebase/app",si="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new zi("@firebase/app"),Ha="@firebase/app-compat",qa="@firebase/analytics-compat",Ka="@firebase/analytics",Ga="@firebase/app-check-compat",za="@firebase/app-check",Wa="@firebase/auth",Qa="@firebase/auth-compat",Xa="@firebase/database",Ya="@firebase/database-compat",Ja="@firebase/functions",Za="@firebase/functions-compat",tc="@firebase/installations",ec="@firebase/installations-compat",nc="@firebase/messaging",sc="@firebase/messaging-compat",ic="@firebase/performance",rc="@firebase/performance-compat",oc="@firebase/remote-config",ac="@firebase/remote-config-compat",cc="@firebase/storage",lc="@firebase/storage-compat",hc="@firebase/firestore",uc="@firebase/firestore-compat",fc="firebase",dc="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="[DEFAULT]",pc={[Qn]:"fire-core",[Ha]:"fire-core-compat",[Ka]:"fire-analytics",[qa]:"fire-analytics-compat",[za]:"fire-app-check",[Ga]:"fire-app-check-compat",[Wa]:"fire-auth",[Qa]:"fire-auth-compat",[Xa]:"fire-rtdb",[Ya]:"fire-rtdb-compat",[Ja]:"fire-fn",[Za]:"fire-fn-compat",[tc]:"fire-iid",[ec]:"fire-iid-compat",[nc]:"fire-fcm",[sc]:"fire-fcm-compat",[ic]:"fire-perf",[rc]:"fire-perf-compat",[oc]:"fire-rc",[ac]:"fire-rc-compat",[cc]:"fire-gcs",[lc]:"fire-gcs-compat",[hc]:"fire-fst",[uc]:"fire-fst-compat","fire-js":"fire-js",[fc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new Map,Yn=new Map;function gc(e,t){try{e.container.addComponent(t)}catch(n){At.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function je(e){const t=e.name;if(Yn.has(t))return At.debug(`There were multiple attempts to register component ${t}.`),!1;Yn.set(t,e);for(const n of $e.values())gc(n,e);return!0}function mc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ft=new Gi("app","Firebase",yc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=dc;function Xi(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Xn,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw ft.create("bad-app-name",{appName:String(i)});if(n||(n=ma()),!n)throw ft.create("no-options");const r=$e.get(i);if(r){if(Gn(n,r.options)&&Gn(s,r.config))return r;throw ft.create("duplicate-app",{appName:i})}const o=new Aa(i);for(const c of Yn.values())o.addComponent(c);const a=new vc(n,s,o);return $e.set(i,a),a}function Ec(e=Xn){const t=$e.get(e);if(!t&&e===Xn)return Xi();if(!t)throw ft.create("no-app",{appName:e});return t}function Mt(e,t,n){var s;let i=(s=pc[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),At.warn(a.join(" "));return}je(new re(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="firebase-heartbeat-database",Ic=1,oe="firebase-heartbeat-store";let Pn=null;function Yi(){return Pn||(Pn=Va(Tc,Ic,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(oe)}}}).catch(e=>{throw ft.create("idb-open",{originalErrorMessage:e.message})})),Pn}async function bc(e){try{return(await Yi()).transaction(oe).objectStore(oe).get(Ji(e))}catch(t){if(t instanceof Kt)At.warn(t.message);else{const n=ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});At.warn(n.message)}}}async function ii(e,t){try{const s=(await Yi()).transaction(oe,"readwrite");return await s.objectStore(oe).put(t,Ji(e)),s.done}catch(n){if(n instanceof Kt)At.warn(n.message);else{const s=ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});At.warn(s.message)}}}function Ji(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=1024,Ac=30*24*60*60*1e3;class Cc{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _c(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ri();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Ac}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ri(),{heartbeatsToSend:n,unsentEntries:s}=Dc(this._heartbeatsCache.heartbeats),i=Be(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ri(){return new Date().toISOString().substring(0,10)}function Dc(e,t=Sc){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),oi(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),oi(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _c{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ca()?la().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ii(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ii(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function oi(e){return Be(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(e){je(new re("platform-logger",t=>new $a(t),"PRIVATE")),je(new re("heartbeat",t=>new Cc(t),"PRIVATE")),Mt(Qn,si,e),Mt(Qn,si,"esm2017"),Mt("fire-js","")}Nc("");var kc="firebase",Rc="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt(kc,Rc,"app");var xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,ms=ms||{},y=xc||self;function He(){}function on(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ve(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Oc(e){return Object.prototype.hasOwnProperty.call(e,Fn)&&e[Fn]||(e[Fn]=++Lc)}var Fn="closure_uid_"+(1e9*Math.random()>>>0),Lc=0;function Mc(e,t,n){return e.call.apply(e.bind,arguments)}function Pc(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function G(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?G=Mc:G=Pc,G.apply(null,arguments)}function Re(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function j(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function yt(){this.s=this.s,this.o=this.o}var Fc=0;yt.prototype.s=!1;yt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Fc!=0)&&Oc(this)};yt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ys(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function ai(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(on(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}z.prototype.h=function(){this.defaultPrevented=!0};var Vc=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{y.addEventListener("test",He,t),y.removeEventListener("test",He,t)}catch{}return e}();function qe(e){return/^[\s\xa0]*$/.test(e)}var ci=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Vn(e,t){return e<t?-1:e>t?1:0}function an(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function st(e){return an().indexOf(e)!=-1}function vs(e){return vs[" "](e),e}vs[" "]=He;function Uc(e){var t=jc;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Bc=st("Opera"),Vt=st("Trident")||st("MSIE"),tr=st("Edge"),Jn=tr||Vt,er=st("Gecko")&&!(an().toLowerCase().indexOf("webkit")!=-1&&!st("Edge"))&&!(st("Trident")||st("MSIE"))&&!st("Edge"),$c=an().toLowerCase().indexOf("webkit")!=-1&&!st("Edge");function nr(){var e=y.document;return e?e.documentMode:void 0}var Ke;t:{var Un="",Bn=function(){var e=an();if(er)return/rv:([^\);]+)(\)|;)/.exec(e);if(tr)return/Edge\/([\d\.]+)/.exec(e);if(Vt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if($c)return/WebKit\/(\S+)/.exec(e);if(Bc)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Bn&&(Un=Bn?Bn[1]:""),Vt){var $n=nr();if($n!=null&&$n>parseFloat(Un)){Ke=String($n);break t}}Ke=Un}var jc={};function Hc(){return Uc(function(){let e=0;const t=ci(String(Ke)).split("."),n=ci("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Vn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Vn(i[2].length==0,r[2].length==0)||Vn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Zn;if(y.document&&Vt){var li=nr();Zn=li||parseInt(Ke,10)||void 0}else Zn=void 0;var qc=Zn;function ae(e,t){if(z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(er){t:{try{vs(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Kc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ae.X.h.call(this)}}j(ae,z);var Kc={2:"touch",3:"pen",4:"mouse"};ae.prototype.h=function(){ae.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var we="closure_listenable_"+(1e6*Math.random()|0),Gc=0;function zc(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++Gc,this.ba=this.ea=!1}function cn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ws(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function sr(e){const t={};for(const n in e)t[n]=e[n];return t}const hi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ir(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<hi.length;r++)n=hi[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ln(e){this.src=e,this.g={},this.h=0}ln.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=es(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new zc(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function ts(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Zi(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(cn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function es(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var Es="closure_lm_"+(1e6*Math.random()|0),jn={};function rr(e,t,n,s,i){if(s&&s.once)return ar(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)rr(e,t[r],n,s,i);return null}return n=bs(n),e&&e[we]?e.N(t,n,ve(s)?!!s.capture:!!s,i):or(e,t,n,!1,s,i)}function or(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=ve(i)?!!i.capture:!!i,a=Is(e);if(a||(e[Es]=a=new ln(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Wc(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Vc||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(lr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Wc(){function e(n){return t.call(e.src,e.listener,n)}const t=Qc;return e}function ar(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)ar(e,t[r],n,s,i);return null}return n=bs(n),e&&e[we]?e.O(t,n,ve(s)?!!s.capture:!!s,i):or(e,t,n,!0,s,i)}function cr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)cr(e,t[r],n,s,i);else s=ve(s)?!!s.capture:!!s,n=bs(n),e&&e[we]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=es(r,n,s,i),-1<n&&(cn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Is(e))&&(t=e.g[t.toString()],e=-1,t&&(e=es(t,n,s,i)),(n=-1<e?t[e]:null)&&Ts(n))}function Ts(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[we])ts(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(lr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Is(t))?(ts(n,e),n.h==0&&(n.src=null,t[Es]=null)):cn(e)}}}function lr(e){return e in jn?jn[e]:jn[e]="on"+e}function Qc(e,t){if(e.ba)e=!0;else{t=new ae(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Ts(e),e=n.call(s,t)}return e}function Is(e){return e=e[Es],e instanceof ln?e:null}var Hn="__closure_events_fn_"+(1e9*Math.random()>>>0);function bs(e){return typeof e=="function"?e:(e[Hn]||(e[Hn]=function(t){return e.handleEvent(t)}),e[Hn])}function V(){yt.call(this),this.i=new ln(this),this.P=this,this.I=null}j(V,yt);V.prototype[we]=!0;V.prototype.removeEventListener=function(e,t,n,s){cr(this,e,t,n,s)};function $(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new z(t,e);else if(t instanceof z)t.target=t.target||e;else{var i=t;t=new z(s,e),ir(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=xe(o,s,!0,t)&&i}if(o=t.g=e,i=xe(o,s,!0,t)&&i,i=xe(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=xe(o,s,!1,t)&&i}V.prototype.M=function(){if(V.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)cn(n[s]);delete e.g[t],e.h--}}this.I=null};V.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};V.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function xe(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ts(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ss=y.JSON.stringify;function Xc(){var e=fr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Yc{constructor(){this.h=this.g=null}add(t,n){const s=hr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var hr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Jc,e=>e.reset());class Jc{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Zc(e){y.setTimeout(()=>{throw e},0)}function ur(e,t){ns||tl(),ss||(ns(),ss=!0),fr.add(e,t)}var ns;function tl(){var e=y.Promise.resolve(void 0);ns=function(){e.then(el)}}var ss=!1,fr=new Yc;function el(){for(var e;e=Xc();){try{e.h.call(e.g)}catch(n){Zc(n)}var t=hr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ss=!1}function hn(e,t){V.call(this),this.h=e||1,this.g=t||y,this.j=G(this.lb,this),this.l=Date.now()}j(hn,V);g=hn.prototype;g.ca=!1;g.R=null;g.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),$(this,"tick"),this.ca&&(As(this),this.start()))}};g.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function As(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}g.M=function(){hn.X.M.call(this),As(this),delete this.g};function Cs(e,t,n){if(typeof e=="function")n&&(e=G(e,n));else if(e&&typeof e.handleEvent=="function")e=G(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:y.setTimeout(e,t||0)}function dr(e){e.g=Cs(()=>{e.g=null,e.i&&(e.i=!1,dr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class nl extends yt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:dr(this)}M(){super.M(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(e){yt.call(this),this.h=e,this.g={}}j(ce,yt);var ui=[];function pr(e,t,n,s){Array.isArray(n)||(n&&(ui[0]=n.toString()),n=ui);for(var i=0;i<n.length;i++){var r=rr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function gr(e){ws(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ts(t)},e),e.g={}}ce.prototype.M=function(){ce.X.M.call(this),gr(this)};ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function un(){this.g=!0}un.prototype.Aa=function(){this.g=!1};function sl(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var h=l[0];l=l[1];var d=h.split("_");o=2<=d.length&&d[1]=="type"?o+(h+"="+l+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function il(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Lt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+ol(e,n)+(s?" "+s:"")})}function rl(e,t){e.info(function(){return"TIMEOUT: "+t})}un.prototype.info=function(){};function ol(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ss(n)}catch{return t}}var Nt={},fi=null;function fn(){return fi=fi||new V}Nt.Pa="serverreachability";function mr(e){z.call(this,Nt.Pa,e)}j(mr,z);function le(e){const t=fn();$(t,new mr(t))}Nt.STAT_EVENT="statevent";function yr(e,t){z.call(this,Nt.STAT_EVENT,e),this.stat=t}j(yr,z);function W(e){const t=fn();$(t,new yr(t,e))}Nt.Qa="timingevent";function vr(e,t){z.call(this,Nt.Qa,e),this.size=t}j(vr,z);function Ee(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}var dn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},wr={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ds(){}Ds.prototype.h=null;function di(e){return e.h||(e.h=e.i())}function Er(){}var Te={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function _s(){z.call(this,"d")}j(_s,z);function Ns(){z.call(this,"c")}j(Ns,z);var is;function pn(){}j(pn,Ds);pn.prototype.g=function(){return new XMLHttpRequest};pn.prototype.i=function(){return{}};is=new pn;function Ie(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new ce(this),this.O=al,e=Jn?125:void 0,this.T=new hn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Tr}function Tr(){this.i=null,this.g="",this.h=!1}var al=45e3,rs={},Ge={};g=Ie.prototype;g.setTimeout=function(e){this.O=e};function os(e,t,n){e.K=1,e.v=mn(lt(t)),e.s=n,e.P=!0,Ir(e,null)}function Ir(e,t){e.F=Date.now(),be(e),e.A=lt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),kr(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Tr,e.g=Yr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new nl(G(e.La,e,e.g),e.N)),pr(e.S,e.g,"readystatechange",e.ib),t=e.H?sr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),le(),sl(e.j,e.u,e.A,e.m,e.U,e.s)}g.ib=function(e){e=e.target;const t=this.L;t&&ot(e)==3?t.l():this.La(e)};g.La=function(e){try{if(e==this.g)t:{const h=ot(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>h)&&(h!=3||Jn||this.g&&(this.h.h||this.g.fa()||yi(this.g)))){this.I||h!=4||t==7||(t==8||0>=d?le(3):le(2)),gn(this);var n=this.g.aa();this.Y=n;e:if(br(this)){var s=yi(this.g);e="";var i=s.length,r=ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Et(this),Zt(this);var o="";break e}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,il(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qe(a)){var l=a;break e}}l=null}if(n=l)Lt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,as(this,n);else{this.i=!1,this.o=3,W(12),Et(this),Zt(this);break t}}this.P?(Sr(this,h,o),Jn&&this.i&&h==3&&(pr(this.S,this.T,"tick",this.hb),this.T.start())):(Lt(this.j,this.m,o,null),as(this,o)),h==4&&Et(this),this.i&&!this.I&&(h==4?zr(this.l,this):(this.i=!1,be(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,W(12)):(this.o=0,W(13)),Et(this),Zt(this)}}}catch{}finally{}};function br(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Sr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=cl(e,n),i==Ge){t==4&&(e.o=4,W(14),s=!1),Lt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==rs){e.o=4,W(15),Lt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Lt(e.j,e.m,i,null),as(e,i);br(e)&&i!=Ge&&i!=rs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,W(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ps(t),t.K=!0,W(11))):(Lt(e.j,e.m,n,"[Invalid Chunked Response]"),Et(e),Zt(e))}g.hb=function(){if(this.g){var e=ot(this.g),t=this.g.fa();this.C<t.length&&(gn(this),Sr(this,e,t),this.i&&e!=4&&be(this))}};function cl(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Ge:(n=Number(t.substring(n,s)),isNaN(n)?rs:(s+=1,s+n>t.length?Ge:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,Et(this)};function be(e){e.V=Date.now()+e.O,Ar(e,e.O)}function Ar(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ee(G(e.gb,e),t)}function gn(e){e.B&&(y.clearTimeout(e.B),e.B=null)}g.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(rl(this.j,this.A),this.K!=2&&(le(),W(17)),Et(this),this.o=2,Zt(this)):Ar(this,this.V-e)};function Zt(e){e.l.G==0||e.I||zr(e.l,e)}function Et(e){gn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,As(e.T),gr(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function as(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||cs(n.h,e))){if(!e.J&&cs(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Qe(n),wn(n);else break t;Ms(n),W(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ee(G(n.cb,n),6e3));if(1>=Or(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Tt(n,11)}else if((e.J||n.g==e)&&Qe(n),!qe(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const h=l[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const d=l[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const b=e.g;if(b){const I=b.g?b.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var r=s.h;r.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ks(r,r.h),r.h=null))}if(s.D){const _=b.g?b.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,D(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Xr(s,s.H?s.ka:null,s.V),o.J){Lr(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(gn(a),be(a)),s.g=o}else Kr(s);0<n.i.length&&En(n)}else l[0]!="stop"&&l[0]!="close"||Tt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Tt(n,7):Ls(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}le(4)}catch{}}function ll(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(on(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function hl(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(on(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Cr(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(on(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=hl(e),s=ll(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var Dr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ul(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function bt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof bt){this.h=t!==void 0?t:e.h,ze(this,e.j),this.s=e.s,this.g=e.g,We(this,e.m),this.l=e.l,t=e.i;var n=new he;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),pi(this,n),this.o=e.o}else e&&(n=String(e).match(Dr))?(this.h=!!t,ze(this,n[1]||"",!0),this.s=Yt(n[2]||""),this.g=Yt(n[3]||"",!0),We(this,n[4]),this.l=Yt(n[5]||"",!0),pi(this,n[6]||"",!0),this.o=Yt(n[7]||"")):(this.h=!!t,this.i=new he(null,this.h))}bt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Jt(t,gi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Jt(t,gi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Jt(n,n.charAt(0)=="/"?pl:dl,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Jt(n,ml)),e.join("")};function lt(e){return new bt(e)}function ze(e,t,n){e.j=n?Yt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function We(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function pi(e,t,n){t instanceof he?(e.i=t,yl(e.i,e.h)):(n||(t=Jt(t,gl)),e.i=new he(t,e.h))}function D(e,t,n){e.i.set(t,n)}function mn(e){return D(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Yt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Jt(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,fl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function fl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var gi=/[#\/\?@]/g,dl=/[#\?:]/g,pl=/[#\?]/g,gl=/[#\?@]/g,ml=/#/g;function he(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function vt(e){e.g||(e.g=new Map,e.h=0,e.i&&ul(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=he.prototype;g.add=function(e,t){vt(this),this.i=null,e=Gt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function _r(e,t){vt(e),t=Gt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Nr(e,t){return vt(e),t=Gt(e,t),e.g.has(t)}g.forEach=function(e,t){vt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};g.oa=function(){vt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};g.W=function(e){vt(this);let t=[];if(typeof e=="string")Nr(this,e)&&(t=t.concat(this.g.get(Gt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return vt(this),this.i=null,e=Gt(this,e),Nr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function kr(e,t,n){_r(e,t),0<n.length&&(e.i=null,e.g.set(Gt(e,t),ys(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Gt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function yl(e,t){t&&!e.j&&(vt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(_r(this,s),kr(this,i,n))},e)),e.j=t}var vl=class{constructor(e,t){this.h=e,this.g=t}};function Rr(e){this.l=e||wl,y.PerformanceNavigationTiming?(e=y.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(y.g&&y.g.Ga&&y.g.Ga()&&y.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wl=10;function xr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Or(e){return e.h?1:e.g?e.g.size:0}function cs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ks(e,t){e.g?e.g.add(t):e.h=t}function Lr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Rr.prototype.cancel=function(){if(this.i=Mr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Mr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ys(e.i)}function Rs(){}Rs.prototype.stringify=function(e){return y.JSON.stringify(e,void 0)};Rs.prototype.parse=function(e){return y.JSON.parse(e,void 0)};function El(){this.g=new Rs}function Tl(e,t,n){const s=n||"";try{Cr(e,function(i,r){let o=i;ve(i)&&(o=Ss(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Il(e,t){const n=new un;if(y.Image){const s=new Image;s.onload=Re(Oe,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Re(Oe,n,s,"TestLoadImage: error",!1,t),s.onabort=Re(Oe,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Re(Oe,n,s,"TestLoadImage: timeout",!1,t),y.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Oe(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Se(e){this.l=e.ac||null,this.j=e.jb||!1}j(Se,Ds);Se.prototype.g=function(){return new yn(this.l,this.j)};Se.prototype.i=function(e){return function(){return e}}({});function yn(e,t){V.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=xs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}j(yn,V);var xs=0;g=yn.prototype;g.open=function(e,t){if(this.readyState!=xs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ue(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||y).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ae(this)),this.readyState=xs};g.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ue(this)),this.g&&(this.readyState=3,ue(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof y.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pr(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Pr(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}g.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ae(this):ue(this),this.readyState==3&&Pr(this)}};g.Va=function(e){this.g&&(this.response=this.responseText=e,Ae(this))};g.Ua=function(e){this.g&&(this.response=e,Ae(this))};g.ga=function(){this.g&&Ae(this)};function Ae(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ue(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ue(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(yn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var bl=y.JSON.parse;function x(e){V.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fr,this.K=this.L=!1}j(x,V);var Fr="",Sl=/^https?$/i,Al=["POST","PUT"];g=x.prototype;g.Ka=function(e){this.L=e};g.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():is.g(),this.C=this.u?di(this.u):di(is),this.g.onreadystatechange=G(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){mi(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=y.FormData&&e instanceof y.FormData,!(0<=Zi(Al,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Br(this),0<this.B&&((this.K=Cl(this.g))?(this.g.timeout=this.B,this.g.ontimeout=G(this.qa,this)):this.A=Cs(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){mi(this,r)}};function Cl(e){return Vt&&Hc()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.qa=function(){typeof ms<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$(this,"timeout"),this.abort(8))};function mi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Vr(e),vn(e)}function Vr(e){e.D||(e.D=!0,$(e,"complete"),$(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,$(this,"complete"),$(this,"abort"),vn(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vn(this,!0)),x.X.M.call(this)};g.Ha=function(){this.s||(this.F||this.v||this.l?Ur(this):this.fb())};g.fb=function(){Ur(this)};function Ur(e){if(e.h&&typeof ms<"u"&&(!e.C[1]||ot(e)!=4||e.aa()!=2)){if(e.v&&ot(e)==4)Cs(e.Ha,0,e);else if($(e,"readystatechange"),ot(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Dr)[1]||null;if(!i&&y.self&&y.self.location){var r=y.self.location.protocol;i=r.substr(0,r.length-1)}s=!Sl.test(i?i.toLowerCase():"")}n=s}if(n)$(e,"complete"),$(e,"success");else{e.m=6;try{var o=2<ot(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Vr(e)}}finally{vn(e)}}}}function vn(e,t){if(e.g){Br(e);const n=e.g,s=e.C[0]?He:null;e.g=null,e.C=null,t||$(e,"ready");try{n.onreadystatechange=s}catch{}}}function Br(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(y.clearTimeout(e.A),e.A=null)}function ot(e){return e.g?e.g.readyState:0}g.aa=function(){try{return 2<ot(this)?this.g.status:-1}catch{return-1}};g.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),bl(t)}};function yi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Fr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Ea=function(){return this.m};g.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $r(e){let t="";return ws(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Os(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=$r(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):D(e,t,n))}function Xt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function jr(e){this.Ca=0,this.i=[],this.j=new un,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Xt("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Xt("baseRetryDelayMs",5e3,e),this.bb=Xt("retryDelaySeedMs",1e4,e),this.$a=Xt("forwardChannelMaxRetries",2,e),this.ta=Xt("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Rr(e&&e.concurrentRequestLimit),this.Fa=new El,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}g=jr.prototype;g.ma=8;g.G=1;function Ls(e){if(Hr(e),e.G==3){var t=e.U++,n=lt(e.F);D(n,"SID",e.I),D(n,"RID",t),D(n,"TYPE","terminate"),Ce(e,n),t=new Ie(e,e.j,t,void 0),t.K=2,t.v=mn(lt(n)),n=!1,y.navigator&&y.navigator.sendBeacon&&(n=y.navigator.sendBeacon(t.v.toString(),"")),!n&&y.Image&&(new Image().src=t.v,n=!0),n||(t.g=Yr(t.l,null),t.g.da(t.v)),t.F=Date.now(),be(t)}Qr(e)}function wn(e){e.g&&(Ps(e),e.g.cancel(),e.g=null)}function Hr(e){wn(e),e.u&&(y.clearTimeout(e.u),e.u=null),Qe(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&y.clearTimeout(e.m),e.m=null)}function En(e){xr(e.h)||e.m||(e.m=!0,ur(e.Ja,e),e.C=0)}function Dl(e,t){return Or(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Ee(G(e.Ja,e,t),Wr(e,e.C)),e.C++,!0)}g.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Ie(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=sr(r),ir(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=qr(this,i,t),n=lt(this.F),D(n,"RID",e),D(n,"CVER",22),this.D&&D(n,"X-HTTP-Session-Id",this.D),Ce(this,n),r&&(this.N?t="headers="+encodeURIComponent(String($r(r)))+"&"+t:this.o&&Os(n,this.o,r)),ks(this.h,i),this.Ya&&D(n,"TYPE","init"),this.O?(D(n,"$req",t),D(n,"SID","null"),i.Z=!0,os(i,n,null)):os(i,n,t),this.G=2}}else this.G==3&&(e?vi(this,e):this.i.length==0||xr(this.h)||vi(this))};function vi(e,t){var n;t?n=t.m:n=e.U++;const s=lt(e.F);D(s,"SID",e.I),D(s,"RID",n),D(s,"AID",e.T),Ce(e,s),e.o&&e.s&&Os(s,e.o,e.s),n=new Ie(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=qr(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),ks(e.h,n),os(n,s,t)}function Ce(e,t){e.ia&&ws(e.ia,function(n,s){D(t,s,n)}),e.l&&Cr({},function(n,s){D(t,s,n)})}function qr(e,t,n){n=Math.min(e.i.length,n);var s=e.l?G(e.l.Ra,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const h=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{Tl(h,o,"req"+l+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Kr(e){e.g||e.u||(e.Z=1,ur(e.Ia,e),e.A=0)}function Ms(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Ee(G(e.Ia,e),Wr(e,e.A)),e.A++,!0)}g.Ia=function(){if(this.u=null,Gr(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Ee(G(this.eb,this),e)}};g.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,W(10),wn(this),Gr(this))};function Ps(e){e.B!=null&&(y.clearTimeout(e.B),e.B=null)}function Gr(e){e.g=new Ie(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=lt(e.sa);D(t,"RID","rpc"),D(t,"SID",e.I),D(t,"CI",e.L?"0":"1"),D(t,"AID",e.T),D(t,"TYPE","xmlhttp"),Ce(e,t),e.o&&e.s&&Os(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=mn(lt(t)),n.s=null,n.P=!0,Ir(n,e)}g.cb=function(){this.v!=null&&(this.v=null,wn(this),Ms(this),W(19))};function Qe(e){e.v!=null&&(y.clearTimeout(e.v),e.v=null)}function zr(e,t){var n=null;if(e.g==t){Qe(e),Ps(e),e.g=null;var s=2}else if(cs(e.h,t))n=t.D,Lr(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=fn(),$(s,new vr(s,n)),En(e)}else Kr(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&Dl(e,t)||s==2&&Ms(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Tt(e,5);break;case 4:Tt(e,10);break;case 3:Tt(e,6);break;default:Tt(e,2)}}}function Wr(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Tt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=G(e.kb,e);n||(n=new bt("//www.google.com/images/cleardot.gif"),y.location&&y.location.protocol=="http"||ze(n,"https"),mn(n)),Il(n.toString(),s)}else W(2);e.G=0,e.l&&e.l.va(t),Qr(e),Hr(e)}g.kb=function(e){e?(this.j.info("Successfully pinged google.com"),W(2)):(this.j.info("Failed to ping google.com"),W(1))};function Qr(e){if(e.G=0,e.la=[],e.l){const t=Mr(e.h);(t.length!=0||e.i.length!=0)&&(ai(e.la,t),ai(e.la,e.i),e.h.i.length=0,ys(e.i),e.i.length=0),e.l.ua()}}function Xr(e,t,n){var s=n instanceof bt?lt(n):new bt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),We(s,s.m);else{var i=y.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new bt(null,void 0);s&&ze(r,s),t&&(r.g=t),i&&We(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&D(s,n,t),D(s,"VER",e.ma),Ce(e,s),s}function Yr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new x(new Se({jb:!0})):new x(e.ra),t.Ka(e.H),t}function Jr(){}g=Jr.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Ra=function(){};function Xe(){if(Vt&&!(10<=Number(qc)))throw Error("Environmental error: no available transport.")}Xe.prototype.g=function(e,t){return new J(e,t)};function J(e,t){V.call(this),this.g=new jr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!qe(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!qe(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new zt(this)}j(J,V);J.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;W(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Xr(e,null,e.V),En(e)};J.prototype.close=function(){Ls(this.g)};J.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ss(e),e=n);t.i.push(new vl(t.ab++,e)),t.G==3&&En(t)};J.prototype.M=function(){this.g.l=null,delete this.j,Ls(this.g),delete this.g,J.X.M.call(this)};function Zr(e){_s.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}j(Zr,_s);function to(){Ns.call(this),this.status=1}j(to,Ns);function zt(e){this.g=e}j(zt,Jr);zt.prototype.xa=function(){$(this.g,"a")};zt.prototype.wa=function(e){$(this.g,new Zr(e))};zt.prototype.va=function(e){$(this.g,new to)};zt.prototype.ua=function(){$(this.g,"b")};Xe.prototype.createWebChannel=Xe.prototype.g;J.prototype.send=J.prototype.u;J.prototype.open=J.prototype.m;J.prototype.close=J.prototype.close;dn.NO_ERROR=0;dn.TIMEOUT=8;dn.HTTP_ERROR=6;wr.COMPLETE="complete";Er.EventType=Te;Te.OPEN="a";Te.CLOSE="b";Te.ERROR="c";Te.MESSAGE="d";V.prototype.listen=V.prototype.N;x.prototype.listenOnce=x.prototype.O;x.prototype.getLastError=x.prototype.Oa;x.prototype.getLastErrorCode=x.prototype.Ea;x.prototype.getStatus=x.prototype.aa;x.prototype.getResponseJson=x.prototype.Sa;x.prototype.getResponseText=x.prototype.fa;x.prototype.send=x.prototype.da;x.prototype.setWithCredentials=x.prototype.Ka;var _l=function(){return new Xe},Nl=function(){return fn()},qn=dn,kl=wr,Rl=Nt,wi={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},xl=Se,Le=Er,Ol=x;const Ei="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}H.UNAUTHENTICATED=new H(null),H.GOOGLE_CREDENTIALS=new H("google-credentials-uid"),H.FIRST_PARTY=new H("first-party-uid"),H.MOCK_USER=new H("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wt="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new zi("@firebase/firestore");function Ti(){return Ct.logLevel}function m(e,...t){if(Ct.logLevel<=S.DEBUG){const n=t.map(Fs);Ct.debug(`Firestore (${Wt}): ${e}`,...n)}}function Dt(e,...t){if(Ct.logLevel<=S.ERROR){const n=t.map(Fs);Ct.error(`Firestore (${Wt}): ${e}`,...n)}}function ls(e,...t){if(Ct.logLevel<=S.WARN){const n=t.map(Fs);Ct.warn(`Firestore (${Wt}): ${e}`,...n)}}function Fs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e="Unexpected state"){const t=`FIRESTORE (${Wt}) INTERNAL ASSERTION FAILED: `+e;throw Dt(t),new Error(t)}function L(e,t){e||E()}function C(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends Kt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ll{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(H.UNAUTHENTICATED))}shutdown(){}}class Ml{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Pl{constructor(t){this.t=t,this.currentUser=H.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new St;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new St,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new St)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(L(typeof s.accessToken=="string"),new eo(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new H(t)}}class Fl{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=H.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(L(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Vl{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Fl(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(H.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ul{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bl{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(L(typeof n.token=="string"),this.A=n.token,new Ul(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=$l(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function A(e,t){return e<t?-1:e>t?1:0}function Ut(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return F.fromMillis(Date.now())}static fromDate(t){return F.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new F(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?A(this.nanoseconds,t.nanoseconds):A(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.timestamp=t}static fromTimestamp(t){return new N(t)}static min(){return new N(new F(0,0))}static max(){return new N(new F(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,n,s){n===void 0?n=0:n>t.length&&E(),s===void 0?s=t.length-n:s>t.length-n&&E(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return fe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof fe?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class R extends fe{construct(t,n,s){return new R(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new v(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new R(n)}static emptyPath(){return new R([])}}const jl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends fe{construct(t,n,s){return new K(t,n,s)}static isValidIdentifier(t){return jl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new K(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new v(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new v(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new v(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new K(n)}static emptyPath(){return new K([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(R.fromString(t))}static fromName(t){return new w(R.fromString(t).popFirst(5))}static empty(){return new w(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&R.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return R.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new R(t.slice()))}}function Hl(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=N.fromTimestamp(s===1e9?new F(n+1,0):new F(n,s));return new pt(i,w.empty(),t)}function ql(e){return new pt(e.readTime,e.key,-1)}class pt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new pt(N.min(),w.empty(),-1)}static max(){return new pt(N.max(),w.empty(),-1)}}function Kl(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:A(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==Gl)throw e;m("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new u((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof u?n:u.resolve(n)}catch(n){return u.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):u.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):u.reject(n)}static resolve(t){return new u((n,s)=>{n(t)})}static reject(t){return new u((n,s)=>{s(t)})}static waitFor(t){return new u((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=u.resolve(!1);for(const s of t)n=n.next(i=>i?u.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new u((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(t[l]).next(h=>{o[l]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,n){return new u((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function Tn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}io.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ye{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ye("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ye&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function De(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ro(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(e){return e==null}function Je(e){return e===0&&1/e==-1/0}function Ql(e){return typeof e=="number"&&Number.isInteger(e)&&!Je(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new ht(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new ht(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return A(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Xl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _t(e){if(L(!!e),typeof e=="string"){let t=0;const n=Xl.exec(e);if(L(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:U(e.seconds),nanos:U(e.nanos)}}function U(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function de(e){return typeof e=="string"?ht.fromBase64String(e):ht.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ze(e){const t=_t(e.mapValue.fields.__local_write_time__.timestampValue);return new F(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Yl(e)?4:Jl(e)?9007199254740991:10:E()}function rt(e,t){if(e===t)return!0;const n=Bt(e);if(n!==Bt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ze(e).isEqual(Ze(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=_t(s.timestampValue),o=_t(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return de(s.bytesValue).isEqual(de(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return U(s.geoPointValue.latitude)===U(i.geoPointValue.latitude)&&U(s.geoPointValue.longitude)===U(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return U(s.integerValue)===U(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=U(s.doubleValue),o=U(i.doubleValue);return r===o?Je(r)===Je(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Ut(e.arrayValue.values||[],t.arrayValue.values||[],rt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ii(r)!==Ii(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!rt(r[a],o[a])))return!1;return!0}(e,t);default:return E()}}function pe(e,t){return(e.values||[]).find(n=>rt(n,t))!==void 0}function $t(e,t){if(e===t)return 0;const n=Bt(e),s=Bt(t);if(n!==s)return A(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return A(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=U(i.integerValue||i.doubleValue),a=U(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return bi(e.timestampValue,t.timestampValue);case 4:return bi(Ze(e),Ze(t));case 5:return A(e.stringValue,t.stringValue);case 6:return function(i,r){const o=de(i),a=de(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=A(o[c],a[c]);if(l!==0)return l}return A(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=A(U(i.latitude),U(r.latitude));return o!==0?o:A(U(i.longitude),U(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=$t(o[c],a[c]);if(l)return l}return A(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===Me.mapValue&&r===Me.mapValue)return 0;if(i===Me.mapValue)return 1;if(r===Me.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let h=0;h<a.length&&h<l.length;++h){const d=A(a[h],l[h]);if(d!==0)return d;const p=$t(o[a[h]],c[l[h]]);if(p!==0)return p}return A(a.length,l.length)}(e.mapValue,t.mapValue);default:throw E()}}function bi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return A(e,t);const n=_t(e),s=_t(t),i=A(n.seconds,s.seconds);return i!==0?i:A(n.nanos,s.nanos)}function jt(e){return hs(e)}function hs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=_t(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?de(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=hs(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${hs(s.fields[a])}`;return r+"}"}(e.mapValue):E();var t,n}function us(e){return!!e&&"integerValue"in e}function Us(e){return!!e&&"arrayValue"in e}function Ve(e){return!!e&&"mapValue"in e}function te(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return De(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=te(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=te(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Jl(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,n){this.position=t,this.inclusive=n}}function Si(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=$t(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ai(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{}class P extends oo{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new eh(t,n,s):n==="array-contains"?new ih(t,s):n==="in"?new rh(t,s):n==="not-in"?new oh(t,s):n==="array-contains-any"?new ah(t,s):new P(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new nh(t,s):new sh(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($t(n,this.value)):n!==null&&Bt(this.value)===Bt(n)&&this.matchesComparison($t(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return E()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class gt extends oo{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new gt(t,n)}matches(t){return ao(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function ao(e){return e.op==="and"}function Zl(e){return th(e)&&ao(e)}function th(e){for(const t of e.filters)if(t instanceof gt)return!1;return!0}function co(e){if(e instanceof P)return e.field.canonicalString()+e.op.toString()+jt(e.value);{const t=e.filters.map(n=>co(n)).join(",");return`${e.op}(${t})`}}function lo(e,t){return e instanceof P?function(n,s){return s instanceof P&&n.op===s.op&&n.field.isEqual(s.field)&&rt(n.value,s.value)}(e,t):e instanceof gt?function(n,s){return s instanceof gt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&lo(r,s.filters[o]),!0):!1}(e,t):void E()}function ho(e){return e instanceof P?function(t){return`${t.field.canonicalString()} ${t.op} ${jt(t.value)}`}(e):e instanceof gt?function(t){return t.op.toString()+" {"+t.getFilters().map(ho).join(" ,")+"}"}(e):"Filter"}class eh extends P{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class nh extends P{constructor(t,n){super(t,"in",n),this.keys=uo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class sh extends P{constructor(t,n){super(t,"not-in",n),this.keys=uo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function uo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class ih extends P{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Us(n)&&pe(n.arrayValue,this.value)}}class rh extends P{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&pe(this.value.arrayValue,n)}}class oh extends P{constructor(t,n){super(t,"not-in",n)}matches(t){if(pe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!pe(this.value.arrayValue,n)}}class ah extends P{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Us(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>pe(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,n="asc"){this.field=t,this.dir=n}}function ch(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,n){this.comparator=t,this.root=n||B.EMPTY}insert(t,n){return new X(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,B.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,B.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pe(this.root,t,this.comparator,!0)}}class Pe{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class B{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:B.RED,this.left=i!=null?i:B.EMPTY,this.right=r!=null?r:B.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new B(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return B.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();const t=this.left.check();if(t!==this.right.check())throw E();return t+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(e,t,n,s,i){return this}insert(e,t,n){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ci(this.data.getIterator())}getIteratorFrom(t){return new Ci(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Q)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Q(this.comparator);return n.data=t,n}}class Ci{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.fields=t,t.sort(K.comparator)}static empty(){return new it([])}unionWith(t){let n=new Q(K.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new it(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ut(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.value=t}static empty(){return new et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Ve(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=te(n)}setAll(t){let n=K.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=te(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Ve(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return rt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Ve(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){De(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new et(te(this.value))}}function fo(e){const t=[];return De(e.fields,(n,s)=>{const i=new K([n]);if(Ve(s)){const r=fo(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new it(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new tt(t,0,N.min(),N.min(),N.min(),et.empty(),0)}static newFoundDocument(t,n,s,i){return new tt(t,1,n,N.min(),s,i,0)}static newNoDocument(t,n){return new tt(t,2,n,N.min(),N.min(),et.empty(),0)}static newUnknownDocument(t,n){return new tt(t,3,n,N.min(),N.min(),et.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(N.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Di(e,t=null,n=[],s=[],i=null,r=null,o=null){return new lh(e,t,n,s,i,r,o)}function Bs(e){const t=C(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>co(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Vs(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>jt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>jt(s)).join(",")),t.ft=n}return t.ft}function $s(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ch(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!lo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ai(e.startAt,t.startAt)&&Ai(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function hh(e,t,n,s,i,r,o,a){return new In(e,t,n,s,i,r,o,a)}function uh(e){return new In(e)}function _i(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function fh(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function dh(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function ph(e){return e.collectionGroup!==null}function Pt(e){const t=C(e);if(t.dt===null){t.dt=[];const n=dh(t),s=fh(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new ee(n)),t.dt.push(new ee(K.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new ee(K.keyField(),r))}}}return t.dt}function Ht(e){const t=C(e);if(!t._t)if(t.limitType==="F")t._t=Di(t.path,t.collectionGroup,Pt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Pt(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new ee(r.field,o))}const s=t.endAt?new tn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new tn(t.startAt.position,t.startAt.inclusive):null;t._t=Di(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t._t}function fs(e,t,n){return new In(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function po(e,t){return $s(Ht(e),Ht(t))&&e.limitType===t.limitType}function go(e){return`${Bs(Ht(e))}|lt:${e.limitType}`}function Ni(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>ho(s)).join(", ")}]`),Vs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>jt(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>jt(s)).join(",")),`Target(${n})`}(Ht(e))}; limitType=${e.limitType})`}function mo(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):w.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of Pt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Si(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Pt(n),s)||n.endAt&&!function(i,r,o){const a=Si(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Pt(n),s))}(e,t)}function gh(e){return(t,n)=>{let s=!1;for(const i of Pt(e)){const r=mh(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function mh(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?$t(a,c):E()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return E()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Je(t)?"-0":t}}function vo(e){return{integerValue:""+e}}function yh(e,t){return Ql(t)?vo(t):yo(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this._=void 0}}function vh(e,t,n){return e instanceof en?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof ge?Eo(e,t):e instanceof me?To(e,t):function(s,i){const r=wo(s,i),o=ki(r)+ki(s.gt);return us(r)&&us(s.gt)?vo(o):yo(s.yt,o)}(e,t)}function wh(e,t,n){return e instanceof ge?Eo(e,t):e instanceof me?To(e,t):n}function wo(e,t){return e instanceof nn?us(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class en extends bn{}class ge extends bn{constructor(t){super(),this.elements=t}}function Eo(e,t){const n=Io(t);for(const s of e.elements)n.some(i=>rt(i,s))||n.push(s);return{arrayValue:{values:n}}}class me extends bn{constructor(t){super(),this.elements=t}}function To(e,t){let n=Io(t);for(const s of e.elements)n=n.filter(i=>!rt(i,s));return{arrayValue:{values:n}}}class nn extends bn{constructor(t,n){super(),this.yt=t,this.gt=n}}function ki(e){return U(e.integerValue||e.doubleValue)}function Io(e){return Us(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Eh(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof ge&&s instanceof ge||n instanceof me&&s instanceof me?Ut(n.elements,s.elements,rt):n instanceof nn&&s instanceof nn?rt(n.gt,s.gt):n instanceof en&&s instanceof en}(e.transform,t.transform)}class Th{constructor(t,n){this.version=t,this.transformResults=n}}class at{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new at}static exists(t){return new at(void 0,t)}static updateTime(t){return new at(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ue(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Sn{}function bo(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ao(e.key,at.none()):new _e(e.key,e.data,at.none());{const n=e.data,s=et.empty();let i=new Q(K.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new kt(e.key,s,new it(i.toArray()),at.none())}}function Ih(e,t,n){e instanceof _e?function(s,i,r){const o=s.value.clone(),a=xi(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof kt?function(s,i,r){if(!Ue(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=xi(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(So(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ne(e,t,n,s){return e instanceof _e?function(i,r,o,a){if(!Ue(i.precondition,r))return o;const c=i.value.clone(),l=Oi(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof kt?function(i,r,o,a){if(!Ue(i.precondition,r))return o;const c=Oi(i.fieldTransforms,a,r),l=r.data;return l.setAll(So(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(i,r,o){return Ue(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function bh(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=wo(s.transform,i||null);r!=null&&(n===null&&(n=et.empty()),n.set(s.field,r))}return n||null}function Ri(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ut(n,s,(i,r)=>Eh(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class _e extends Sn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kt extends Sn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function So(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function xi(e,t,n){const s=new Map;L(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,wh(o,a,n[i]))}return s}function Oi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,vh(r,o,t))}return s}class Ao extends Sn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sh extends Sn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O,T;function Ah(e){switch(e){default:return E();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Ch(e){if(e===void 0)return Dt("GRPC error has no .code"),f.UNKNOWN;switch(e){case O.OK:return f.OK;case O.CANCELLED:return f.CANCELLED;case O.UNKNOWN:return f.UNKNOWN;case O.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case O.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case O.INTERNAL:return f.INTERNAL;case O.UNAVAILABLE:return f.UNAVAILABLE;case O.UNAUTHENTICATED:return f.UNAUTHENTICATED;case O.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case O.NOT_FOUND:return f.NOT_FOUND;case O.ALREADY_EXISTS:return f.ALREADY_EXISTS;case O.PERMISSION_DENIED:return f.PERMISSION_DENIED;case O.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case O.ABORTED:return f.ABORTED;case O.OUT_OF_RANGE:return f.OUT_OF_RANGE;case O.UNIMPLEMENTED:return f.UNIMPLEMENTED;case O.DATA_LOSS:return f.DATA_LOSS;default:return E()}}(T=O||(O={}))[T.OK=0]="OK",T[T.CANCELLED=1]="CANCELLED",T[T.UNKNOWN=2]="UNKNOWN",T[T.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",T[T.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",T[T.NOT_FOUND=5]="NOT_FOUND",T[T.ALREADY_EXISTS=6]="ALREADY_EXISTS",T[T.PERMISSION_DENIED=7]="PERMISSION_DENIED",T[T.UNAUTHENTICATED=16]="UNAUTHENTICATED",T[T.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",T[T.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",T[T.ABORTED=10]="ABORTED",T[T.OUT_OF_RANGE=11]="OUT_OF_RANGE",T[T.UNIMPLEMENTED=12]="UNIMPLEMENTED",T[T.INTERNAL=13]="INTERNAL",T[T.UNAVAILABLE=14]="UNAVAILABLE",T[T.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){De(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return ro(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new X(w.comparator);function sn(){return Dh}const Co=new X(w.comparator);function Fe(...e){let t=Co;for(const n of e)t=t.insert(n.key,n);return t}function Do(e){let t=Co;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function It(){return se()}function _o(){return se()}function se(){return new Qt(e=>e.toString(),(e,t)=>e.isEqual(t))}const _h=new X(w.comparator),Nh=new Q(w.comparator);function q(...e){let t=Nh;for(const n of e)t=t.add(n);return t}const kh=new Q(A);function Rh(){return kh}class xh{constructor(t,n){this.databaseId=t,this.wt=n}}function ds(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Oh(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Lh(e,t){return ds(e,t.toTimestamp())}function Ft(e){return L(!!e),N.fromTimestamp(function(t){const n=_t(t);return new F(n.seconds,n.nanos)}(e))}function No(e,t){return function(n){return new R(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Mh(e){const t=R.fromString(e);return L(Hh(t)),t}function ps(e,t){return No(e.databaseId,t.path)}function Ph(e){const t=Mh(e);return t.length===4?R.emptyPath():Vh(t)}function Fh(e){return new R(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Vh(e){return L(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Li(e,t,n){return{name:ps(e,t),fields:n.value.mapValue.fields}}function Uh(e,t){let n;if(t instanceof _e)n={update:Li(e,t.key,t.value)};else if(t instanceof Ao)n={delete:ps(e,t.key)};else if(t instanceof kt)n={update:Li(e,t.key,t.data),updateMask:jh(t.fieldMask)};else{if(!(t instanceof Sh))return E();n={verify:ps(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof en)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ge)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof me)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof nn)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw E()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Lh(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:E()}(e,t.precondition)),n}function Bh(e,t){return e&&e.length>0?(L(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?Ft(s.updateTime):Ft(i);return r.isEqual(N.min())&&(r=Ft(i)),new Th(r,s.transformResults||[])}(n,t))):[]}function $h(e){let t=Ph(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){L(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=function(h){const d=ko(h);return d instanceof gt&&Zl(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(d){return new ee(Ot(d.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(h)));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Vs(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new tn(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new tn(p,d)}(n.endAt)),hh(t,i,o,r,a,"F",c,l)}function ko(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ot(t.unaryFilter.field);return P.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ot(t.unaryFilter.field);return P.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ot(t.unaryFilter.field);return P.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ot(t.unaryFilter.field);return P.create(r,"!=",{nullValue:"NULL_VALUE"});default:return E()}}(e):e.fieldFilter!==void 0?function(t){return P.create(Ot(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return gt.create(t.compositeFilter.filters.map(n=>ko(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return E()}}(t.compositeFilter.op))}(e):E()}function Ot(e){return K.fromServerFormat(e.fieldPath)}function jh(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Hh(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Ih(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ne(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ne(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=_o();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=bo(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(N.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),q())}isEqual(t){return this.batchId===t.batchId&&Ut(this.mutations,t.mutations,(n,s)=>Ri(n,s))&&Ut(this.baseMutations,t.baseMutations,(n,s)=>Ri(n,s))}}class js{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){L(t.mutations.length===s.length);let i=_h;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new js(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t){this.ie=t}}function zh(e){const t=$h({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?fs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.Je=new Qh}addToCollectionParentIndex(t,n){return this.Je.add(n),u.resolve()}getCollectionParents(t,n){return u.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return u.resolve()}deleteFieldIndex(t,n){return u.resolve()}getDocumentsMatchingTarget(t,n){return u.resolve(null)}getIndexType(t,n){return u.resolve(0)}getFieldIndexes(t,n){return u.resolve([])}getNextCollectionGroupToUpdate(t){return u.resolve(null)}getMinOffset(t,n){return u.resolve(pt.min())}getMinOffsetFromCollectionGroup(t,n){return u.resolve(pt.min())}updateCollectionGroup(t,n,s){return u.resolve()}updateIndexEntries(t,n){return u.resolve()}}class Qh{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new Q(R.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new Q(R.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new qt(0)}static vn(){return new qt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.changes=new Qt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,tt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?u.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&ne(s.mutation,i,it.empty(),F.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,q()).next(()=>s))}getLocalViewOfDocuments(t,n,s=q()){const i=It();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=Fe();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=It();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,q()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=sn();const o=se(),a=se();return n.forEach((c,l)=>{const h=s.get(l.key);i.has(l.key)&&(h===void 0||h.mutation instanceof kt)?r=r.insert(l.key,l):h!==void 0&&(o.set(l.key,h.mutation.getFieldMask()),ne(h.mutation,l,h.mutation.getFieldMask(),F.now()))}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((l,h)=>o.set(l,h)),n.forEach((l,h)=>{var d;return a.set(l,new Yh(h,(d=o.get(l))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const s=se();let i=new X((o,a)=>o-a),r=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let h=s.get(c)||it.empty();h=a.applyToLocalView(l,h),s.set(c,h);const d=(i.get(a.batchId)||q()).add(c);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,h=c.value,d=_o();h.forEach(p=>{if(!r.has(p)){const b=bo(n.get(p),s.get(p));b!==null&&d.set(p,b),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,d))}return u.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return w.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ph(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):u.resolve(It());let a=-1,c=r;return o.next(l=>u.forEach(l,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(h)?u.resolve():this.remoteDocumentCache.getEntry(t,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(t,l,r)).next(()=>this.computeViews(t,c,l,q())).next(h=>({batchId:a,changes:Do(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let i=Fe();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=Fe();return this.indexManager.getCollectionParents(t,i).next(o=>u.forEach(o,a=>{const c=function(l,h){return new In(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(l=>{l.forEach((h,d)=>{r=r.insert(h,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,tt.newInvalidDocument(l)))});let o=Fe();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&ne(l.mutation,c,it.empty(),F.now()),mo(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return u.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ft(s.createTime)}),u.resolve()}getNamedQuery(t,n){return u.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:zh(s.bundledQuery),readTime:Ft(s.readTime)}}(n)),u.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this.overlays=new X(w.comparator),this.es=new Map}getOverlay(t,n){return u.resolve(this.overlays.get(n))}getOverlays(t,n){const s=It();return u.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.oe(t,n,r)}),u.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),u.resolve()}getOverlaysForCollection(t,n,s){const i=It(),r=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return u.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new X((l,h)=>l-h);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let h=r.get(l.largestBatchId);h===null&&(h=It(),r=r.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=It(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,h)=>a.set(l,h)),!(a.size()>=i)););return u.resolve(a)}oe(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Kh(n,s));let r=this.es.get(n);r===void 0&&(r=q(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.ns=new Q(M.ss),this.rs=new Q(M.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new M(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new M(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new w(new R([])),s=new M(n,t),i=new M(n,t+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new w(new R([])),s=new M(n,t),i=new M(n,t+1);let r=q();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new M(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class M{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return w.comparator(t.key,n.key)||A(t._s,n._s)}static os(t,n){return A(t._s,n._s)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Q(M.ss)}checkEmpty(t){return u.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qh(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new M(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return u.resolve(o)}lookupMutationBatch(t,n){return u.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return u.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return u.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return u.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new M(n,0),i=new M(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),u.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Q(A);return n.forEach(i=>{const r=new M(i,0),o=new M(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),u.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;w.isDocumentKey(r)||(r=r.child(""));const o=new M(new w(r),0);let a=new Q(A);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c._s)),!0)},o),u.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){L(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return u.forEach(n.mutations,i=>{const r=new M(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new M(n,0),i=this.gs.firstAfterOrEqual(s);return u.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,u.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t){this.Es=t,this.docs=new X(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return u.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(t,n){let s=sn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():tt.newInvalidDocument(i))}),u.resolve(s)}getAllFromCollection(t,n,s){let i=sn();const r=new w(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Kl(ql(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return u.resolve(i)}getAllFromCollectionGroup(t,n,s,i){E()}As(t,n){return u.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new su(this)}getSize(t){return u.resolve(this.size)}}class su extends Xh{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(s)}),u.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t){this.persistence=t,this.Rs=new Qt(n=>Bs(n),$s),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Hs,this.targetCount=0,this.vs=qt.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,i)=>n(i)),u.resolve()}getLastRemoteSnapshotVersion(t){return u.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return u.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),u.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),u.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new qt(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,u.resolve()}updateTargetData(t,n){return this.Dn(n),u.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,u.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),u.waitFor(r).next(()=>i)}getTargetCount(t){return u.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return u.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),u.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),u.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),u.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return u.resolve(s)}containsKey(t,n){return u.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new io(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new iu(this),this.indexManager=new Wh,this.remoteDocumentCache=function(s){return new nu(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new Gh(n),this.Ns=new Zh(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new tu,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new eu(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){m("MemoryPersistence","Starting transaction:",t);const i=new ou(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(t,n){return u.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class ou extends zl{constructor(t){super(),this.currentSequenceNumber=t}}class qs{constructor(t){this.persistence=t,this.Fs=new Hs,this.$s=null}static Bs(t){return new qs(t)}get Ls(){if(this.$s)return this.$s;throw E()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),u.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),u.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),u.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return u.forEach(this.Ls,s=>{const i=w.fromPath(s);return this.qs(t,i).next(r=>{r||n.removeEntry(i,N.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return u.or([()=>u.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=i}static Ci(t,n){let s=q(),i=q();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ks(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.ki(t,n).next(r=>r||this.Oi(t,n,i,s)).next(r=>r||this.Mi(t,n))}ki(t,n){if(_i(n))return u.resolve(null);let s=Ht(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fs(n,null,"F"),s=Ht(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=q(...r);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(t,fs(n,null,"F")):this.Bi(t,l,n,c)}))})))}Oi(t,n,s,i){return _i(n)||i.isEqual(N.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(t,n):(Ti()<=S.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ni(n)),this.Bi(t,o,n,Hl(i,-1)))})}Fi(t,n){let s=new Q(gh(t));return n.forEach((i,r)=>{mo(t,r)&&(s=s.add(r))}),s}$i(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(t,n){return Ti()<=S.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",Ni(n)),this.Ni.getDocumentsMatchingQuery(t,n,pt.min())}Bi(t,n,s,i){return this.Ni.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t,n,s,i){this.persistence=t,this.Li=n,this.yt=i,this.qi=new X(A),this.Ui=new Qt(r=>Bs(r),$s),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jh(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function lu(e,t,n,s){return new cu(e,t,n,s)}async function Ro(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=q();for(const l of i){o.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}for(const l of r){a.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function hu(e,t){const n=C(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const h=c.batch,d=h.keys();let p=u.resolve();return d.forEach(b=>{p=p.next(()=>l.getEntry(a,b)).next(I=>{const _=c.docVersions.get(b);L(_!==null),I.version.compareTo(_)<0&&(h.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),l.addEntry(I)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=q();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function uu(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function fu(e,t){const n=C(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}class Mi{constructor(){this.activeTargetIds=Rh()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class du{constructor(){this.Lr=new Mi,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Mi,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{Ur(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,i,r){const o=this.ho(t,n);m("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(t,o,a,s).then(c=>(m("RestConnection","Received: ",c),c),c=>{throw ls("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,i,r,o){return this.ao(t,n,s,i,r)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Wt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ho(t,n){const s=gu[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,i){return new Promise((r,o)=>{const a=new Ol;a.setWithCredentials(!0),a.listenOnce(kl.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case qn.NO_ERROR:const l=a.getResponseJson();m("Connection","XHR received:",JSON.stringify(l)),r(l);break;case qn.TIMEOUT:m("Connection",'RPC "'+t+'" timed out'),o(new v(f.DEADLINE_EXCEEDED,"Request time out"));break;case qn.HTTP_ERROR:const h=a.getStatus();if(m("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const b=function(I){const _=I.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(_)>=0?_:f.UNKNOWN}(p.status);o(new v(b,p.message))}else o(new v(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(f.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{m("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}wo(t,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=_l(),o=Nl(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new xl({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");m("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let h=!1,d=!1;const p=new mu({Hr:I=>{d?m("Connection","Not sending because WebChannel is closed:",I):(h||(m("Connection","Opening WebChannel transport."),l.open(),h=!0),m("Connection","WebChannel sending:",I),l.send(I))},Jr:()=>l.close()}),b=(I,_,Y)=>{I.listen(_,nt=>{try{Y(nt)}catch(Z){setTimeout(()=>{throw Z},0)}})};return b(l,Le.EventType.OPEN,()=>{d||m("Connection","WebChannel transport opened.")}),b(l,Le.EventType.CLOSE,()=>{d||(d=!0,m("Connection","WebChannel transport closed"),p.io())}),b(l,Le.EventType.ERROR,I=>{d||(d=!0,ls("Connection","WebChannel transport errored:",I),p.io(new v(f.UNAVAILABLE,"The operation could not be completed")))}),b(l,Le.EventType.MESSAGE,I=>{var _;if(!d){const Y=I.data[0];L(!!Y);const nt=Y,Z=nt.error||((_=nt[0])===null||_===void 0?void 0:_.error);if(Z){m("Connection","WebChannel received error:",Z);const Xs=Z.status;let kn=function(Jo){const Js=O[Jo];if(Js!==void 0)return Ch(Js)}(Xs),Ys=Z.message;kn===void 0&&(kn=f.INTERNAL,Ys="Unknown error status: "+Xs+" with message "+Z.message),d=!0,p.io(new v(kn,Ys)),l.close()}else m("Connection","WebChannel received:",Y),p.ro(Y)}}),b(o,Rl.STAT_EVENT,I=>{I.stat===wi.PROXY?m("Connection","Detected buffering proxy"):I.stat===wi.NOPROXY&&m("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function Kn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(e){return new xh(e,!0)}class xo{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&m("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t,n,s,i,r,o,a,c){this.Hs=t,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new xo(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Dt(n.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{t(()=>{const i=new v(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return m("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wu extends vu{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=Bh(t.writeResults,t.commitTime),s=Ft(t.commitTime);return this.listener.Zo(s,n)}return L(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Fh(this.yt),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Uh(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(f.UNKNOWN,i.toString())})}_o(t,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(f.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class Tu{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Dt(n),this.ou=!1):m("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{ke(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=C(a);c._u.add(4),await Ne(c),c.gu.set("Unknown"),c._u.delete(4),await Cn(c)}(this))})}),this.gu=new Tu(s,i)}}async function Cn(e){if(ke(e))for(const t of e.wu)await t(!0)}async function Ne(e){for(const t of e.wu)await t(!1)}function ke(e){return C(e)._u.size===0}async function Oo(e,t,n){if(!Tn(t))throw t;e._u.add(1),await Ne(e),e.gu.set("Offline"),n||(n=()=>uu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Cn(e)})}function Lo(e,t){return t().catch(n=>Oo(e,n,t))}async function Dn(e){const t=C(e),n=mt(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;bu(t);)try{const i=await fu(t.localStore,s);if(i===null){t.fu.length===0&&n.Fo();break}s=i.batchId,Su(t,i)}catch(i){await Oo(t,i)}Mo(t)&&Po(t)}function bu(e){return ke(e)&&e.fu.length<10}function Su(e,t){e.fu.push(t);const n=mt(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Mo(e){return ke(e)&&!mt(e).No()&&e.fu.length>0}function Po(e){mt(e).start()}async function Au(e){mt(e).eu()}async function Cu(e){const t=mt(e);for(const n of e.fu)t.Xo(n.mutations)}async function Du(e,t,n){const s=e.fu.shift(),i=js.from(s,t,n);await Lo(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Dn(e)}async function _u(e,t){t&&mt(e).Yo&&await async function(n,s){if(i=s.code,Ah(i)&&i!==f.ABORTED){const r=n.fu.shift();mt(n).Mo(),await Lo(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Dn(n)}var i}(e,t),Mo(e)&&Po(e)}async function Fi(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const s=ke(n);n._u.add(3),await Ne(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Cn(n)}async function Nu(e,t){const n=C(e);t?(n._u.delete(2),await Cn(n)):t||(n._u.add(2),await Ne(n),n.gu.set("Unknown"))}function mt(e){return e.Iu||(e.Iu=function(t,n,s){const i=C(t);return i.su(),new wu(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(e.datastore,e.asyncQueue,{Yr:Au.bind(null,e),Zr:_u.bind(null,e),tu:Cu.bind(null,e),Zo:Du.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await Dn(e)):(await e.Iu.stop(),e.fu.length>0&&(m("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new St,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Gs(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fo(e,t){if(Dt("AsyncQueue",`${t}: ${e}`),Tn(e))return new v(f.UNAVAILABLE,`${t}: ${e}`);throw e}class ku{constructor(){this.queries=new Qt(t=>go(t),po),this.onlineState="Unknown",this.Ru=new Set}}function Ru(e){e.Ru.forEach(t=>{t.next()})}class xu{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Qt(a=>go(a),po),this.rc=new Map,this.oc=new Set,this.uc=new X(w.comparator),this.cc=new Map,this.ac=new Hs,this.hc={},this.lc=new Map,this.fc=qt.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Ou(e,t,n){const s=Fu(e);try{const i=await function(r,o){const a=C(r),c=F.now(),l=o.reduce((p,b)=>p.add(b.key),q());let h,d;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let b=sn(),I=q();return a.Gi.getEntries(p,l).next(_=>{b=_,b.forEach((Y,nt)=>{nt.isValidDocument()||(I=I.add(Y))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,b)).next(_=>{h=_;const Y=[];for(const nt of o){const Z=bh(nt,h.get(nt.key).overlayedDocument);Z!=null&&Y.push(new kt(nt.key,Z,fo(Z.value.mapValue),at.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,Y,o)}).next(_=>{d=_;const Y=_.applyToLocalDocumentSet(h,I);return a.documentOverlayCache.saveOverlays(p,_.batchId,Y)})}).then(()=>({batchId:d.batchId,changes:Do(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new X(A)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(s,i.batchId,n),await _n(s,i.changes),await Dn(s.remoteStore)}catch(i){const r=Fo(i,"Failed to persist write");n.reject(r)}}function Vi(e,t,n){const s=C(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=C(r);a.onlineState=o;let c=!1;a.queries.forEach((l,h)=>{for(const d of h.listeners)d.bu(o)&&(c=!0)}),c&&Ru(a)}(s.eventManager,t),i.length&&s.sc.Wo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Lu(e,t){const n=C(e),s=t.batch.batchId;try{const i=await hu(n.localStore,t);Uo(n,s,null),Vo(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await _n(n,i)}catch(i){await so(i)}}async function Mu(e,t,n){const s=C(e);try{const i=await function(r,o){const a=C(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(h=>(L(h!==null),l=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,t);Uo(s,t,n),Vo(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await _n(s,i)}catch(i){await so(i)}}function Vo(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function Uo(e,t,n){const s=C(e);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.hc[s.currentUser.toKey()]=i}}async function _n(e,t,n){const s=C(e),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,t,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const h=Ks.Ci(c.targetId,l);r.push(h)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,c){const l=C(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>u.forEach(c,d=>u.forEach(d.Si,p=>l.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>u.forEach(d.Di,p=>l.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Tn(h))throw h;m("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=l.qi.get(d),b=p.snapshotVersion,I=p.withLastLimboFreeSnapshotVersion(b);l.qi=l.qi.insert(d,I)}}}(s.localStore,r))}async function Pu(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){m("SyncEngine","User change. New user:",t.toKey());const s=await Ro(n.localStore,t);n.currentUser=t,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new v(f.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await _n(n,s.ji)}}function Fu(e){const t=C(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Lu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Mu.bind(null,t),t}class Vu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=An(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return lu(this.persistence,new au,t.initialUser,this.yt)}yc(t){return new ru(qs.Bs,this.yt)}gc(t){return new du}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Uu{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Vi(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pu.bind(null,this.syncEngine),await Nu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ku}createDatastore(t){const n=An(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new yu(i));var i;return function(r,o,a,c){return new Eu(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Vi(this.syncEngine,a,0),o=Pi.C()?new Pi:new pu,new Iu(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,l){const h=new xu(s,i,r,o,a,c);return l&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=C(t);m("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ne(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(e,t,n){if(!n)throw new v(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Bu(e,t,n,s){if(t===!0&&s===!0)throw new v(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ui(e){if(!w.isDocumentKey(e))throw new v(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Bi(e){if(w.isDocumentKey(e))throw new v(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function zs(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":E()}function $o(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zs(e);throw new v(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new Map;class ji{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new v(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Bu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ji({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ji(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ll;switch(n.type){case"gapi":const s=n.client;return new Vl(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new v(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=$i.get(t);n&&(m("ComponentProvider","Removing Datastore"),$i.delete(t),n.terminate())}(this),Promise.resolve()}}function $u(e,t,n,s={}){var i;const r=(e=$o(e,Nn))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&ls("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=H.MOCK_USER;else{o=va(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new v(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new H(c)}e._authCredentials=new Ml(new eo(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ct(this.firestore,t,this._key)}}class Ws{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ws(this.firestore,t,this._query)}}class dt extends Ws{constructor(t,n,s){super(t,n,uh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ct(this.firestore,null,new w(t))}withConverter(t){return new dt(this.firestore,t,this._path)}}function ju(e,t,...n){if(e=ie(e),Bo("collection","path",t),e instanceof Nn){const s=R.fromString(t,...n);return Bi(s),new dt(e,null,s)}{if(!(e instanceof ct||e instanceof dt))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(R.fromString(t,...n));return Bi(s),new dt(e.firestore,null,s)}}function Hu(e,t,...n){if(e=ie(e),arguments.length===1&&(t=no.R()),Bo("doc","path",t),e instanceof Nn){const s=R.fromString(t,...n);return Ui(s),new ct(e,null,new w(s))}{if(!(e instanceof ct||e instanceof dt))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(R.fromString(t,...n));return Ui(s),new ct(e.firestore,e instanceof dt?e.converter:null,new w(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=H.UNAUTHENTICATED,this.clientId=no.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{m("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(m("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new St;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Fo(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Ku(e,t){e.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Ro(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Gu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await zu(e);m("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>Fi(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Fi(t.remoteStore,r)),e.onlineComponents=t}async function zu(e){return e.offlineComponents||(m("FirestoreClient","Using default OfflineComponentProvider"),await Ku(e,new Vu)),e.offlineComponents}async function Wu(e){return e.onlineComponents||(m("FirestoreClient","Using default OnlineComponentProvider"),await Gu(e,new Uu)),e.onlineComponents}function Qu(e){return Wu(e).then(t=>t.syncEngine)}class Xu{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new xo(this,"async_queue_retry"),this.Wc=()=>{const n=Kn();n&&m("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Kn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=Kn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new St;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Tn(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Dt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=Gs.createAndSchedule(this,t,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&E()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class jo extends Nn{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new Xu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ho(this),this._firestoreClient.terminate()}}function Yu(e,t){const n=typeof e=="object"?e:Ec(),s=typeof e=="string"?e:t||"(default)",i=mc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=ga("firestore");r&&$u(i,...r)}return i}function Ju(e){return e._firestoreClient||Ho(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ho(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Wl(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new qu(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ye(ht.fromBase64String(t))}catch(n){throw new v(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ye(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return A(this._lat,t._lat)||A(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=/^__.*__$/;class tf{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new kt(t,this.data,this.fieldMask,n,this.fieldTransforms):new _e(t,this.data,n,this.fieldTransforms)}}function zo(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class Qs{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Qs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.ua(t),i}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return rn(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(zo(this.sa)&&Zu.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class ef{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=s||An(t)}da(t,n,s,i=!1){return new Qs({sa:t,methodName:n,fa:s,path:K.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function nf(e){const t=e._freezeSettings(),n=An(e._databaseId);return new ef(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sf(e,t,n,s,i,r={}){const o=e.da(r.merge||r.mergeFields?2:0,t,n,i);Yo("Data must be an object, but it was:",o,s);const a=Qo(s,o);let c,l;if(r.merge)c=new it(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const d of r.mergeFields){const p=rf(t,d,n);if(!o.contains(p))throw new v(f.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);cf(h,p)||h.push(p)}c=new it(h),l=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,l=o.fieldTransforms;return new tf(new et(a),c,l)}function Wo(e,t){if(Xo(e=ie(e)))return Yo("Unsupported field value:",t,e),Qo(e,t);if(e instanceof Ko)return function(n,s){if(!zo(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Wo(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=ie(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yh(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=F.fromDate(n);return{timestampValue:ds(s.yt,i)}}if(n instanceof F){const i=new F(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ds(s.yt,i)}}if(n instanceof Go)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ye)return{bytesValue:Oh(s.yt,n._byteString)};if(n instanceof ct){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:No(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${zs(n)}`)}(e,t)}function Qo(e,t){const n={};return ro(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):De(e,(s,i)=>{const r=Wo(i,t.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Xo(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof F||e instanceof Go||e instanceof ye||e instanceof ct||e instanceof Ko)}function Yo(e,t,n){if(!Xo(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=zs(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function rf(e,t,n){if((t=ie(t))instanceof qo)return t._internalPath;if(typeof t=="string")return af(e,t);throw rn("Field path arguments must be of type string or ",e,!1,void 0,n)}const of=new RegExp("[~\\*/\\[\\]]");function af(e,t,n){if(t.search(of)>=0)throw rn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new qo(...t.split("."))._internalPath}catch{throw rn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function rn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new v(f.INVALID_ARGUMENT,a+e+c)}function cf(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}function hf(e,t){const n=$o(e.firestore,jo),s=Hu(e),i=lf(e.converter,t);return uf(n,[sf(nf(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,at.exists(!1))]).then(()=>s)}function uf(e,t){return function(n,s){const i=new St;return n.asyncQueue.enqueueAndForget(async()=>Ou(await Qu(n),s,i)),i.promise}(Ju(e),t)}(function(e,t=!0){(function(n){Wt=n})(wc),je(new re("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new jo(new Pl(n.getProvider("auth-internal")),new Bl(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new v(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ye(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Mt(Ei,"3.8.0",e),Mt(Ei,"3.8.0","esm2017")})();const ff={apiKey:"AIzaSyDkAf6TexWWlmXaccIiy3BQ5iFBXEBAkxo",authDomain:"my-lady-8b48f.firebaseapp.com",projectId:"my-lady-8b48f",storageBucket:"my-lady-8b48f.appspot.com",messagingSenderId:"921457340252",appId:"1:921457340252:web:4ed71b5b2844f0ca4e5b99"};Xi(ff);const df=Yu(),pf={class:"shipping-form-view"},gf=k("h1",null,"Have jersey",-1),mf={class:"shipping-form-container"},yf={class:"shipping-form"},vf={class:"form-group"},wf=k("label",{for:"shipping-name"},"Name",-1),Ef={class:"form-group"},Tf=k("label",{for:"shipping-street-address1"},"Address1",-1),If={class:"form-group"},bf=k("label",{for:"shipping-city"},"City",-1),Sf={class:"form-group"},Af=k("label",{for:"shipping-state"},"State",-1),Cf={class:"form-group"},Df=k("label",{for:"shipping-zip"},"Zip",-1),_f={class:"form-group"},Nf=k("label",{for:"shipping-country"},"Country",-1),Rf=Zo({__name:"VIPView",setup(e){const t=ta({name:"",address1:"",city:"",state:"",zip:"",country:""}),n=ea(),s=()=>{console.log("HANDLE SUBMIT"),hf(ju(df,"tester1"),t.value),Object.assign(t.value,{name:"",address1:"",city:"",state:"",zip:"",country:""})};return(i,r)=>(xn(),Rn("div",pf,[gf,(xn(!0),Rn(na,null,sa(ia(n).user.mi777Balance,o=>(xn(),Rn("div",mf,[k("form",yf,[k("div",vf,[wf,Rt(k("input",{"onUpdate:modelValue":r[0]||(r[0]=a=>t.value.name=a),type:"text",name:"shipping-name",id:"shipping-name"},null,512),[[xt,t.value.name]])]),k("div",Ef,[Tf,Rt(k("input",{"onUpdate:modelValue":r[1]||(r[1]=a=>t.value.address1=a),type:"text",name:"shipping-street-address1",id:"shipping-street-address1"},null,512),[[xt,t.value.address1]])]),k("div",If,[bf,Rt(k("input",{"onUpdate:modelValue":r[2]||(r[2]=a=>t.value.city=a),type:"text",name:"shipping-city",id:"shipping-city"},null,512),[[xt,t.value.city]])]),k("div",Sf,[Af,Rt(k("input",{"onUpdate:modelValue":r[3]||(r[3]=a=>t.value.state=a),type:"text",name:"shipping-state",id:"shipping-state"},null,512),[[xt,t.value.state]])]),k("div",Cf,[Df,Rt(k("input",{"onUpdate:modelValue":r[4]||(r[4]=a=>t.value.zip=a),type:"text",name:"shipping-zip",id:"shipping-zip"},null,512),[[xt,t.value.zip]])]),k("div",_f,[Nf,Rt(k("input",{"onUpdate:modelValue":r[5]||(r[5]=a=>t.value.country=a),type:"text",name:"shipping-country",id:"shipping-country"},null,512),[[xt,t.value.country]])]),k("div",{class:"form-group"},[k("input",{onClick:s,type:"button",name:"shipping-submit",id:"shipping-submit",value:"Submit"})])])]))),256))]))}});export{Rf as default};
