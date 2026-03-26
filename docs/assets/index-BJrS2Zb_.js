(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ao=()=>{};var ki={};/**
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
 */const As={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const p=function(n,e){if(!n)throw Ye(e)},Ye=function(n){return new Error("Firebase Database ("+As.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Ms=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Mo=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Gn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,f=r>>2,d=(r&3)<<4|a>>4;let u=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(u=64)),i.push(t[f],t[d],t[u],t[m])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ms(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Mo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new ko;const u=r<<2|a>>4;if(i.push(u),c!==64){const m=a<<4&240|c>>2;if(i.push(m),d!==64){const g=c<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ko extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ks=function(n){const e=Ms(n);return Gn.encodeByteArray(e,!0)},Dt=function(n){return ks(n).replace(/\./g,"")},Tn=function(n){try{return Gn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xo(n){return xs(void 0,n)}function xs(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Po(t)||(n[t]=xs(n[t],e[t]));return n}function Po(n){return n!=="__proto__"}/**
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
 */function Do(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Oo=()=>Do().__FIREBASE_DEFAULTS__,Lo=()=>{if(typeof process>"u"||typeof ki>"u")return;const n=ki.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fo=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Tn(n[1]);return e&&JSON.parse(e)},Ps=()=>{try{return Ao()||Oo()||Lo()||Fo()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Bo=n=>{var e,t;return(t=(e=Ps())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Wo=n=>{const e=Bo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Ds=()=>{var n;return(n=Ps())===null||n===void 0?void 0:n.config};/**
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
 */class en{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function zn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Uo(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ho(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Dt(JSON.stringify(t)),Dt(JSON.stringify(o)),""].join(".")}const st={};function Vo(){const n={prod:[],emulator:[]};for(const e of Object.keys(st))st[e]?n.emulator.push(e):n.prod.push(e);return n}function $o(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let xi=!1;function Go(n,e){if(typeof window>"u"||typeof document>"u"||!zn(window.location.host)||st[n]===e||st[n]||xi)return;st[n]=e;function t(u){return`__firebase__banner__${u}`}const i="__firebase__banner",r=Vo().prod.length>0;function o(){const u=document.getElementById(i);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,m){u.setAttribute("width","24"),u.setAttribute("id",m),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{xi=!0,o()},u}function f(u,m){u.setAttribute("id",m),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function d(){const u=$o(i),m=t("text"),g=document.getElementById(m)||document.createElement("span"),k=t("learnmore"),w=document.getElementById(k)||document.createElement("a"),ne=t("preprendIcon"),ie=document.getElementById(ne)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const se=u.element;a(se),f(w,k);const Ze=c();l(ie,ne),se.append(ie,g,w,Ze),document.body.appendChild(se)}r?(g.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function zo(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Os(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zo())}function jo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qo(){return As.NODE_ADMIN===!0}function Yo(){try{return typeof indexedDB=="object"}catch{return!1}}function Ko(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Qo="FirebaseError";class Et extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Qo,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Xo(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Et(s,a,i)}}function Xo(n,e){return n.replace(Jo,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Jo=/\{\$([^}]+)}/g;/**
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
 */function ht(n){return JSON.parse(n)}function V(n){return JSON.stringify(n)}/**
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
 */const Fs=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=ht(Tn(r[0])||""),t=ht(Tn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Zo=function(n){const e=Fs(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ea=function(n){const e=Fs(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ye(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ge(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Pi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ot(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Lt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Di(r)&&Di(o)){if(!Lt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Di(n){return n!==null&&typeof n=="object"}/**
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
 */function ta(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class na{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const u=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(u<<1|u>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,f;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),f=1518500249):(c=r^o^a,f=1859775393):d<60?(c=r&o|a&(r|o),f=2400959708):(c=r^o^a,f=3395469782);const u=(s<<5|s>>>27)+c+l+f+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=u}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function jn(n,e){return`${n} failed: ${e} argument `}/**
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
 */const ia=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,p(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},tn=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Ke(n){return n&&n._delegate?n._delegate:n}class ut{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ae="[DEFAULT]";/**
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
 */class sa{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new en;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oa(e))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ae){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ae){return this.instances.has(e)}getOptions(e=Ae){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ra(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ae){return this.component?this.component.multipleInstances?e:Ae:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ra(n){return n===Ae?void 0:n}function oa(n){return n.instantiationMode==="EAGER"}/**
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
 */class aa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const la={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},ca=O.INFO,ha={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},ua=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=ha[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bs{constructor(e){this.name=e,this._logLevel=ca,this._logHandler=ua,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?la[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const da=(n,e)=>e.some(t=>n instanceof t);let Oi,Li;function fa(){return Oi||(Oi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _a(){return Li||(Li=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ws=new WeakMap,Nn=new WeakMap,Us=new WeakMap,pn=new WeakMap,qn=new WeakMap;function pa(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ce(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ws.set(t,n)}).catch(()=>{}),qn.set(e,n),e}function ma(n){if(Nn.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Nn.set(n,e)}let Rn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Nn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Us.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ce(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ga(n){Rn=n(Rn)}function ya(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(mn(this),e,...t);return Us.set(i,e.sort?e.sort():[e]),Ce(i)}:_a().includes(n)?function(...e){return n.apply(mn(this),e),Ce(Ws.get(this))}:function(...e){return Ce(n.apply(mn(this),e))}}function va(n){return typeof n=="function"?ya(n):(n instanceof IDBTransaction&&ma(n),da(n,fa())?new Proxy(n,Rn):n)}function Ce(n){if(n instanceof IDBRequest)return pa(n);if(pn.has(n))return pn.get(n);const e=va(n);return e!==n&&(pn.set(n,e),qn.set(e,n)),e}const mn=n=>qn.get(n);function Ca(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Ce(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ce(o.result),l.oldVersion,l.newVersion,Ce(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ea=["get","getKey","getAll","getAllKeys","count"],wa=["put","add","delete","clear"],gn=new Map;function Fi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(gn.get(e))return gn.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=wa.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ea.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return gn.set(e,r),r}ga(n=>({...n,get:(e,t,i)=>Fi(e,t)||n.get(e,t,i),has:(e,t)=>!!Fi(e,t)||n.has(e,t)}));/**
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
 */class ba{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ia(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Ia(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const An="@firebase/app",Bi="0.13.2";/**
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
 */const me=new Bs("@firebase/app"),Sa="@firebase/app-compat",Ta="@firebase/analytics-compat",Na="@firebase/analytics",Ra="@firebase/app-check-compat",Aa="@firebase/app-check",Ma="@firebase/auth",ka="@firebase/auth-compat",xa="@firebase/database",Pa="@firebase/data-connect",Da="@firebase/database-compat",Oa="@firebase/functions",La="@firebase/functions-compat",Fa="@firebase/installations",Ba="@firebase/installations-compat",Wa="@firebase/messaging",Ua="@firebase/messaging-compat",Ha="@firebase/performance",Va="@firebase/performance-compat",$a="@firebase/remote-config",Ga="@firebase/remote-config-compat",za="@firebase/storage",ja="@firebase/storage-compat",qa="@firebase/firestore",Ya="@firebase/ai",Ka="@firebase/firestore-compat",Qa="firebase",Xa="11.10.0";/**
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
 */const Mn="[DEFAULT]",Ja={[An]:"fire-core",[Sa]:"fire-core-compat",[Na]:"fire-analytics",[Ta]:"fire-analytics-compat",[Aa]:"fire-app-check",[Ra]:"fire-app-check-compat",[Ma]:"fire-auth",[ka]:"fire-auth-compat",[xa]:"fire-rtdb",[Pa]:"fire-data-connect",[Da]:"fire-rtdb-compat",[Oa]:"fire-fn",[La]:"fire-fn-compat",[Fa]:"fire-iid",[Ba]:"fire-iid-compat",[Wa]:"fire-fcm",[Ua]:"fire-fcm-compat",[Ha]:"fire-perf",[Va]:"fire-perf-compat",[$a]:"fire-rc",[Ga]:"fire-rc-compat",[za]:"fire-gcs",[ja]:"fire-gcs-compat",[qa]:"fire-fst",[Ka]:"fire-fst-compat",[Ya]:"fire-vertex","fire-js":"fire-js",[Qa]:"fire-js-all"};/**
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
 */const Ft=new Map,Za=new Map,kn=new Map;function Wi(n,e){try{n.container.addComponent(e)}catch(t){me.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Bt(n){const e=n.name;if(kn.has(e))return me.debug(`There were multiple attempts to register component ${e}.`),!1;kn.set(e,n);for(const t of Ft.values())Wi(t,n);for(const t of Za.values())Wi(t,n);return!0}function el(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tl(n){return n==null?!1:n.settings!==void 0}/**
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
 */const nl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ee=new Ls("app","Firebase",nl);/**
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
 */class il{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}}/**
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
 */const sl=Xa;function Hs(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Mn,automaticDataCollectionEnabled:!0},e),s=i.name;if(typeof s!="string"||!s)throw Ee.create("bad-app-name",{appName:String(s)});if(t||(t=Ds()),!t)throw Ee.create("no-options");const r=Ft.get(s);if(r){if(Lt(t,r.options)&&Lt(i,r.config))return r;throw Ee.create("duplicate-app",{appName:s})}const o=new aa(s);for(const l of kn.values())o.addComponent(l);const a=new il(t,i,o);return Ft.set(s,a),a}function rl(n=Mn){const e=Ft.get(n);if(!e&&n===Mn&&Ds())return Hs();if(!e)throw Ee.create("no-app",{appName:n});return e}function Ue(n,e,t){var i;let s=(i=Ja[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),me.warn(a.join(" "));return}Bt(new ut(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ol="firebase-heartbeat-database",al=1,dt="firebase-heartbeat-store";let yn=null;function Vs(){return yn||(yn=Ca(ol,al,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(dt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ee.create("idb-open",{originalErrorMessage:n.message})})),yn}async function ll(n){try{const t=(await Vs()).transaction(dt),i=await t.objectStore(dt).get($s(n));return await t.done,i}catch(e){if(e instanceof Et)me.warn(e.message);else{const t=Ee.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});me.warn(t.message)}}}async function Ui(n,e){try{const i=(await Vs()).transaction(dt,"readwrite");await i.objectStore(dt).put(e,$s(n)),await i.done}catch(t){if(t instanceof Et)me.warn(t.message);else{const i=Ee.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});me.warn(i.message)}}}function $s(n){return`${n.name}!${n.options.appId}`}/**
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
 */const cl=1024,hl=30;class ul{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fl(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Hi();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>hl){const o=_l(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){me.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Hi(),{heartbeatsToSend:i,unsentEntries:s}=dl(this._heartbeatsCache.heartbeats),r=Dt(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return me.warn(t),""}}}function Hi(){return new Date().toISOString().substring(0,10)}function dl(n,e=cl){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Vi(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Vi(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class fl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yo()?Ko().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ll(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ui(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ui(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vi(n){return Dt(JSON.stringify({version:2,heartbeats:n})).length}function _l(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function pl(n){Bt(new ut("platform-logger",e=>new ba(e),"PRIVATE")),Bt(new ut("heartbeat",e=>new ul(e),"PRIVATE")),Ue(An,Bi,n),Ue(An,Bi,"esm2017"),Ue("fire-js","")}pl("");var ml="firebase",gl="11.10.0";/**
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
 */Ue(ml,gl,"app");var $i={};const Gi="@firebase/database",zi="1.0.20";/**
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
 */let Gs="";function yl(n){Gs=n}/**
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
 */class vl{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),V(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ht(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Cl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ye(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const zs=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vl(e)}}catch{}return new Cl},ke=zs("localStorage"),El=zs("sessionStorage");/**
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
 */const He=new Bs("@firebase/database"),wl=function(){let n=1;return function(){return n++}}(),js=function(n){const e=ia(n),t=new na;t.update(e);const i=t.digest();return Gn.encodeByteArray(i)},wt=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=wt.apply(null,i):typeof i=="object"?e+=V(i):e+=i,e+=" "}return e};let rt=null,ji=!0;const bl=function(n,e){p(!0,"Can't turn on custom loggers persistently."),He.logLevel=O.VERBOSE,rt=He.log.bind(He)},Y=function(...n){if(ji===!0&&(ji=!1,rt===null&&El.get("logging_enabled")===!0&&bl()),rt){const e=wt.apply(null,n);rt(e)}},bt=function(n){return function(...e){Y(n,...e)}},xn=function(...n){const e="FIREBASE INTERNAL ERROR: "+wt(...n);He.error(e)},ge=function(...n){const e=`FIREBASE FATAL ERROR: ${wt(...n)}`;throw He.error(e),new Error(e)},J=function(...n){const e="FIREBASE WARNING: "+wt(...n);He.warn(e)},Il=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&J("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qs=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Sl=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ze="[MIN_NAME]",Pe="[MAX_NAME]",Qe=function(n,e){if(n===e)return 0;if(n===ze||e===Pe)return-1;if(e===ze||n===Pe)return 1;{const t=qi(n),i=qi(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Tl=function(n,e){return n===e?0:n<e?-1:1},et=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+V(e))},Yn=function(n){if(typeof n!="object"||n===null)return V(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=V(e[i]),t+=":",t+=Yn(n[e[i]]);return t+="}",t},Ys=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Z(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ks=function(n){p(!qs(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const f=c.join("");let d="";for(l=0;l<64;l+=8){let u=parseInt(f.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},Nl=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Rl=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Al(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Ml=new RegExp("^-?(0*)\\d{1,10}$"),kl=-2147483648,xl=2147483647,qi=function(n){if(Ml.test(n)){const e=Number(n);if(e>=kl&&e<=xl)return e}return null},Xe=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw J("Exception was thrown by user callback.",t),e},Math.floor(0))}},Pl=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ot=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Dl{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,tl(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){J(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ol{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Y("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',J(e)}}class Pt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Pt.OWNER="owner";/**
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
 */const Kn="5",Qs="v",Xs="s",Js="r",Zs="f",er=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,tr="ls",nr="p",Pn="ac",ir="websocket",sr="long_polling";/**
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
 */class rr{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ke.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ke.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ll(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function or(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let i;if(e===ir)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===sr)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ll(n)&&(t.ns=n.namespace);const s=[];return Z(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Fl{constructor(){this.counters_={}}incrementCounter(e,t=1){ye(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return xo(this.counters_)}}/**
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
 */const vn={},Cn={};function Qn(n){const e=n.toString();return vn[e]||(vn[e]=new Fl),vn[e]}function Bl(n,e){const t=n.toString();return Cn[t]||(Cn[t]=e()),Cn[t]}/**
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
 */class Wl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Xe(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Yi="start",Ul="close",Hl="pLPCommand",Vl="pRTLPCB",ar="id",lr="pw",cr="ser",$l="cb",Gl="seg",zl="ts",jl="d",ql="dframe",hr=1870,ur=30,Yl=hr-ur,Kl=25e3,Ql=3e4;class We{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bt(e),this.stats_=Qn(t),this.urlFn=l=>(this.appCheckToken&&(l[Pn]=this.appCheckToken),or(t,sr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Wl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ql)),Sl(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xn((...r)=>{const[o,a,l,c,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Yi)this.id=a,this.password=l;else if(o===Ul)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Yi]="t",i[cr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[$l]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Qs]=Kn,this.transportSessionId&&(i[Xs]=this.transportSessionId),this.lastSessionId&&(i[tr]=this.lastSessionId),this.applicationId&&(i[nr]=this.applicationId),this.appCheckToken&&(i[Pn]=this.appCheckToken),typeof location<"u"&&location.hostname&&er.test(location.hostname)&&(i[Js]=Zs);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){We.forceAllow_=!0}static forceDisallow(){We.forceDisallow_=!0}static isAvailable(){return We.forceAllow_?!0:!We.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Nl()&&!Rl()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=V(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ks(t),s=Ys(i,Yl);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[ql]="t",i[ar]=e,i[lr]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=V(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Xn{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wl(),window[Hl+this.uniqueCallbackIdentifier]=e,window[Vl+this.uniqueCallbackIdentifier]=t,this.myIFrame=Xn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Y("frame writing exception"),a.stack&&Y(a.stack),Y(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Y("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ar]=this.myID,e[lr]=this.myPW,e[cr]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ur+i.length<=hr;){const o=this.pendingSegs.shift();i=i+"&"+Gl+s+"="+o.seg+"&"+zl+s+"="+o.ts+"&"+jl+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Kl)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Y("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Xl=16384,Jl=45e3;let Wt=null;typeof MozWebSocket<"u"?Wt=MozWebSocket:typeof WebSocket<"u"&&(Wt=WebSocket);class ae{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bt(this.connId),this.stats_=Qn(t),this.connURL=ae.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Qs]=Kn,typeof location<"u"&&location.hostname&&er.test(location.hostname)&&(o[Js]=Zs),t&&(o[Xs]=t),i&&(o[tr]=i),s&&(o[Pn]=s),r&&(o[nr]=r),or(e,ir,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ke.set("previous_websocket_failure",!0);try{let i;qo(),this.mySock=new Wt(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ae.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Wt!==null&&!ae.forceDisallow_}static previouslyFailed(){return ke.isInMemoryStorage||ke.get("previous_websocket_failure")===!0}markConnectionHealthy(){ke.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=ht(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=V(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Ys(t,Xl);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Jl))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ae.responsesRequiredToBeHealthy=2;ae.healthyTimeout=3e4;/**
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
 */class ft{static get ALL_TRANSPORTS(){return[We,ae]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ae&&ae.isAvailable();let i=t&&!ae.previouslyFailed();if(e.webSocketOnly&&(t||J("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ae];else{const s=this.transports_=[];for(const r of ft.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);ft.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ft.globalTransportInitialized_=!1;/**
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
 */const Zl=6e4,ec=5e3,tc=10*1024,nc=100*1024,En="t",Ki="d",ic="s",Qi="r",sc="e",Xi="o",Ji="a",Zi="n",es="p",rc="h";class oc{constructor(e,t,i,s,r,o,a,l,c,f){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bt("c:"+this.id+":"),this.transportManager_=new ft(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ot(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(En in e){const t=e[En];t===Ji?this.upgradeIfSecondaryHealthy_():t===Qi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Xi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=et("t",e),i=et("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:es,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ji,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=et("t",e),i=et("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=et(En,e);if(Ki in e){const i=e[Ki];if(t===rc){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Zi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===ic?this.onConnectionShutdown_(i):t===Qi?this.onReset_(i):t===sc?xn("Server Error: "+i):t===Xi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Kn!==i&&J("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),ot(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Zl))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ot(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ec))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:es,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ke.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class dr{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class fr{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Ut extends fr{static getInstance(){return new Ut}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Os()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ts=32,ns=768;class P{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function x(){return new P("")}function S(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ie(n){return n.pieces_.length-n.pieceNum_}function L(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new P(n.pieces_,e)}function _r(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function ac(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function pr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function mr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new P(e,0)}function $(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof P)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new P(t,0)}function N(n){return n.pieceNum_>=n.pieces_.length}function K(n,e){const t=S(n),i=S(e);if(t===null)return e;if(t===i)return K(L(n),L(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Jn(n,e){if(Ie(n)!==Ie(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function le(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ie(n)>Ie(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class lc{constructor(e,t){this.errorPrefix_=t,this.parts_=pr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=tn(this.parts_[i]);gr(this)}}function cc(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=tn(e),gr(n)}function hc(n){const e=n.parts_.pop();n.byteLength_-=tn(e),n.parts_.length>0&&(n.byteLength_-=1)}function gr(n){if(n.byteLength_>ns)throw new Error(n.errorPrefix_+"has a key path longer than "+ns+" bytes ("+n.byteLength_+").");if(n.parts_.length>ts)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ts+") or object contains a cycle "+Me(n))}function Me(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Zn extends fr{static getInstance(){return new Zn}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const tt=1e3,uc=60*5*1e3,is=30*1e3,dc=1.3,fc=3e4,_c="server_kill",ss=3;class pe extends dr{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pe.nextPersistentConnectionId_++,this.log_=bt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=tt,this.maxReconnectDelay_=uc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ut.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(V(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new en,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;pe.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ye(e,"w")){const i=Ge(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();J(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ea(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=is)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Zo(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+V(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):xn("Unrecognized action received from server: "+V(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=tt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=tt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>fc&&(this.reconnectDelay_=tt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+pe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,u]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Y("getToken() completed but was canceled"):(Y("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,a=new oc(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,m=>{J(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(_c)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&J(d),l())}}}interrupt(e){Y("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Y("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pi(this.interruptReasons_)&&(this.reconnectDelay_=tt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Yn(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new P(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Y("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ss&&(this.reconnectDelay_=is,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Y("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ss&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Gs.replace(/\./g,"-")]=1,Os()?e["framework.cordova"]=1:jo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ut.getInstance().currentlyOnline();return Pi(this.interruptReasons_)&&e}}pe.nextPersistentConnectionId_=0;pe.nextConnectionId_=0;/**
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
 */class T{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new T(e,t)}}/**
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
 */class nn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new T(ze,e),s=new T(ze,t);return this.compare(i,s)!==0}minPost(){return T.MIN}}/**
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
 */let At;class yr extends nn{static get __EMPTY_NODE(){return At}static set __EMPTY_NODE(e){At=e}compare(e,t){return Qe(e.name,t.name)}isDefinedOn(e){throw Ye("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return T.MIN}maxPost(){return new T(Pe,At)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new T(e,At)}toString(){return".key"}}const Ve=new yr;/**
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
 */class Mt{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class z{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??z.RED,this.left=s??X.EMPTY_NODE,this.right=r??X.EMPTY_NODE}copy(e,t,i,s,r){return new z(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return X.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return X.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}z.RED=!0;z.BLACK=!1;class pc{copy(e,t,i,s,r){return this}insert(e,t,i){return new z(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class X{constructor(e,t=X.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new X(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,z.BLACK,null,null))}remove(e){return new X(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,z.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Mt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Mt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Mt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Mt(this.root_,null,this.comparator_,!0,e)}}X.EMPTY_NODE=new pc;/**
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
 */function mc(n,e){return Qe(n.name,e.name)}function ei(n,e){return Qe(n,e)}/**
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
 */let Dn;function gc(n){Dn=n}const vr=function(n){return typeof n=="number"?"number:"+Ks(n):"string:"+n},Cr=function(n){if(n.isLeafNode()){const e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ye(e,".sv"),"Priority must be a string or number.")}else p(n===Dn||n.isEmpty(),"priority of unexpected type.");p(n===Dn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let rs;class G{static set __childrenNodeConstructor(e){rs=e}static get __childrenNodeConstructor(){return rs}constructor(e,t=G.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Cr(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new G(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:G.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return N(e)?this:S(e)===".priority"?this.priorityNode_:G.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:G.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=S(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(p(i!==".priority"||Ie(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,G.__childrenNodeConstructor.EMPTY_NODE.updateChild(L(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+vr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ks(this.value_):e+=this.value_,this.lazyHash_=js(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===G.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof G.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=G.VALUE_TYPE_ORDER.indexOf(t),r=G.VALUE_TYPE_ORDER.indexOf(i);return p(s>=0,"Unknown leaf type: "+t),p(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}G.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Er,wr;function yc(n){Er=n}function vc(n){wr=n}class Cc extends nn{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Qe(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return T.MIN}maxPost(){return new T(Pe,new G("[PRIORITY-POST]",wr))}makePost(e,t){const i=Er(e);return new T(t,new G("[PRIORITY-POST]",i))}toString(){return".priority"}}const H=new Cc;/**
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
 */const Ec=Math.log(2);class wc{constructor(e){const t=r=>parseInt(Math.log(r)/Ec,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ht=function(n,e,t,i){n.sort(e);const s=function(l,c){const f=c-l;let d,u;if(f===0)return null;if(f===1)return d=n[l],u=t?t(d):d,new z(u,d.node,z.BLACK,null,null);{const m=parseInt(f/2,10)+l,g=s(l,m),k=s(m+1,c);return d=n[m],u=t?t(d):d,new z(u,d.node,z.BLACK,g,k)}},r=function(l){let c=null,f=null,d=n.length;const u=function(g,k){const w=d-g,ne=d;d-=g;const ie=s(w+1,ne),se=n[w],Ze=t?t(se):se;m(new z(Ze,se.node,k,null,ie))},m=function(g){c?(c.left=g,c=g):(f=g,c=g)};for(let g=0;g<l.count;++g){const k=l.nextBitIsOne(),w=Math.pow(2,l.count-(g+1));k?u(w,z.BLACK):(u(w,z.BLACK),u(w,z.RED))}return f},o=new wc(n.length),a=r(o);return new X(i||e,a)};/**
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
 */let wn;const Be={};class _e{static get Default(){return p(Be&&H,"ChildrenNode.ts has not been loaded"),wn=wn||new _e({".priority":Be},{".priority":H}),wn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ge(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof X?t:null}hasIndex(e){return ye(this.indexSet_,e.toString())}addIndex(e,t){p(e!==Ve,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(T.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Ht(i,e.getCompare()):a=Be;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const f=Object.assign({},this.indexes_);return f[l]=a,new _e(f,c)}addToIndexes(e,t){const i=Ot(this.indexes_,(s,r)=>{const o=Ge(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),s===Be)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(T.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ht(a,o.getCompare())}else return Be;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new T(e.name,a))),l.insert(e,e.node)}});return new _e(i,this.indexSet_)}removeFromIndexes(e,t){const i=Ot(this.indexes_,s=>{if(s===Be)return s;{const r=t.get(e.name);return r?s.remove(new T(e.name,r)):s}});return new _e(i,this.indexSet_)}}/**
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
 */let nt;class v{static get EMPTY_NODE(){return nt||(nt=new v(new X(ei),null,_e.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Cr(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||nt}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?nt:t}}getChild(e){const t=S(e);return t===null?this:this.getImmediateChild(t).getChild(L(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new T(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?nt:this.priorityNode_;return new v(s,o,r)}}updateChild(e,t){const i=S(e);if(i===null)return t;{p(S(e)!==".priority"||Ie(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(L(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(H,(o,a)=>{t[o]=a.val(e),i++,r&&v.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+vr(this.getPriority().val())+":"),this.forEachChild(H,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":js(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new T(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new T(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new T(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,T.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,T.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===It?-1:0}withIndex(e){if(e===Ve||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ve||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(H),s=t.getIterator(H);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ve?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bc extends v{constructor(){super(new X(ei),v.EMPTY_NODE,_e.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const It=new bc;Object.defineProperties(T,{MIN:{value:new T(ze,v.EMPTY_NODE)},MAX:{value:new T(Pe,It)}});yr.__EMPTY_NODE=v.EMPTY_NODE;G.__childrenNodeConstructor=v;gc(It);vc(It);/**
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
 */const Ic=!0;function j(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new G(t,j(e))}if(!(n instanceof Array)&&Ic){const t=[];let i=!1;if(Z(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=j(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new T(o,l)))}}),t.length===0)return v.EMPTY_NODE;const r=Ht(t,mc,o=>o.name,ei);if(i){const o=Ht(t,H.getCompare());return new v(r,j(e),new _e({".priority":o},{".priority":H}))}else return new v(r,j(e),_e.Default)}else{let t=v.EMPTY_NODE;return Z(n,(i,s)=>{if(ye(n,i)&&i.substring(0,1)!=="."){const r=j(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(j(e))}}yc(j);/**
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
 */class Sc extends nn{constructor(e){super(),this.indexPath_=e,p(!N(e)&&S(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Qe(e.name,t.name):r}makePost(e,t){const i=j(e),s=v.EMPTY_NODE.updateChild(this.indexPath_,i);return new T(t,s)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,It);return new T(Pe,e)}toString(){return pr(this.indexPath_,0).join("/")}}/**
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
 */class Tc extends nn{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Qe(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return T.MIN}maxPost(){return T.MAX}makePost(e,t){const i=j(e);return new T(t,i)}toString(){return".value"}}const Nc=new Tc;/**
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
 */function br(n){return{type:"value",snapshotNode:n}}function je(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function _t(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function pt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Rc(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class ti{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(_t(t,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(je(t,i)):o.trackChildChange(pt(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(H,(s,r)=>{t.hasChild(s)||i.trackChildChange(_t(s,r))}),t.isLeafNode()||t.forEachChild(H,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(pt(s,r,o))}else i.trackChildChange(je(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class mt{constructor(e){this.indexedFilter_=new ti(e.getIndex()),this.index_=e.getIndex(),this.startPost_=mt.getStartPost_(e),this.endPost_=mt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new T(t,i))||(i=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=v.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(H,(o,a)=>{r.matches(new T(o,a))||(s=s.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Ac{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new mt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new T(t,i))||(i=v.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(u,m)=>d(m,u)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const l=new T(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let u=s.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=s.getChildAfterChild(this.index_,u,this.reverse_);const m=u==null?1:o(u,l);if(f&&!i.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(pt(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(_t(t,d));const k=a.updateImmediateChild(t,v.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(je(u.name,u.node)),k.updateImmediateChild(u.name,u.node)):k}}else return i.isEmpty()?e:f&&o(c,l)>=0?(r!=null&&(r.trackChildChange(_t(c.name,c.node)),r.trackChildChange(je(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,v.EMPTY_NODE)):e}}/**
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
 */class ni{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=H}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ze}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===H}copy(){const e=new ni;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Mc(n){return n.loadsAllData()?new ti(n.getIndex()):n.hasLimit()?new Ac(n):new mt(n)}function os(n){const e={};if(n.isDefault())return e;let t;if(n.index_===H?t="$priority":n.index_===Nc?t="$value":n.index_===Ve?t="$key":(p(n.index_ instanceof Sc,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=V(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=V(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+V(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=V(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+V(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function as(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==H&&(e.i=n.index_.toString()),e}/**
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
 */class Vt extends dr{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=bt("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Vt.getListenId_(e,i),a={};this.listens_[o]=a;const l=os(e._queryParams);this.restRequest_(r+".json",l,(c,f)=>{let d=f;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),Ge(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",s(u,null)}})}unlisten(e,t){const i=Vt.getListenId_(e,t);delete this.listens_[i]}get(e){const t=os(e._queryParams),i=e._path.toString(),s=new en;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ta(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ht(a.responseText)}catch{J("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&J("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class kc{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function $t(){return{value:null,children:new Map}}function Ir(n,e,t){if(N(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=S(e);n.children.has(i)||n.children.set(i,$t());const s=n.children.get(i);e=L(e),Ir(s,e,t)}}function On(n,e,t){n.value!==null?t(e,n.value):xc(n,(i,s)=>{const r=new P(e.toString()+"/"+i);On(s,r,t)})}function xc(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class Pc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Z(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const ls=10*1e3,Dc=30*1e3,Oc=5*60*1e3;class Lc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Pc(e);const i=ls+(Dc-ls)*Math.random();ot(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Z(e,(s,r)=>{r>0&&ye(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),ot(this.reportStats_.bind(this),Math.floor(Math.random()*2*Oc))}}/**
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
 */var ce;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ce||(ce={}));function Sr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ii(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function si(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Gt{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ce.ACK_USER_WRITE,this.source=Sr()}operationForChild(e){if(N(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new P(e));return new Gt(x(),t,this.revert)}}else return p(S(this.path)===e,"operationForChild called for unrelated child."),new Gt(L(this.path),this.affectedTree,this.revert)}}/**
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
 */class gt{constructor(e,t){this.source=e,this.path=t,this.type=ce.LISTEN_COMPLETE}operationForChild(e){return N(this.path)?new gt(this.source,x()):new gt(this.source,L(this.path))}}/**
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
 */class De{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ce.OVERWRITE}operationForChild(e){return N(this.path)?new De(this.source,x(),this.snap.getImmediateChild(e)):new De(this.source,L(this.path),this.snap)}}/**
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
 */class yt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ce.MERGE}operationForChild(e){if(N(this.path)){const t=this.children.subtree(new P(e));return t.isEmpty()?null:t.value?new De(this.source,x(),t.value):new yt(this.source,x(),t)}else return p(S(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yt(this.source,L(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Se{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(N(e))return this.isFullyInitialized()&&!this.filtered_;const t=S(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Fc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Bc(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Rc(o.childName,o.snapshotNode))}),it(n,s,"child_removed",e,i,t),it(n,s,"child_added",e,i,t),it(n,s,"child_moved",r,i,t),it(n,s,"child_changed",e,i,t),it(n,s,"value",e,i,t),s}function it(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Uc(n,a,l)),o.forEach(a=>{const l=Wc(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Wc(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Uc(n,e,t){if(e.childName==null||t.childName==null)throw Ye("Should only compare child_ events.");const i=new T(e.childName,e.snapshotNode),s=new T(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function sn(n,e){return{eventCache:n,serverCache:e}}function at(n,e,t,i){return sn(new Se(e,t,i),n.serverCache)}function Tr(n,e,t,i){return sn(n.eventCache,new Se(e,t,i))}function zt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Oe(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let bn;const Hc=()=>(bn||(bn=new X(Tl)),bn);class B{static fromObject(e){let t=new B(null);return Z(e,(i,s)=>{t=t.set(new P(i),s)}),t}constructor(e,t=Hc()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:x(),value:this.value};if(N(e))return null;{const i=S(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(L(e),t);return r!=null?{path:$(new P(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(N(e))return this;{const t=S(e),i=this.children.get(t);return i!==null?i.subtree(L(e)):new B(null)}}set(e,t){if(N(e))return new B(t,this.children);{const i=S(e),r=(this.children.get(i)||new B(null)).set(L(e),t),o=this.children.insert(i,r);return new B(this.value,o)}}remove(e){if(N(e))return this.children.isEmpty()?new B(null):new B(null,this.children);{const t=S(e),i=this.children.get(t);if(i){const s=i.remove(L(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new B(null):new B(this.value,r)}else return this}}get(e){if(N(e))return this.value;{const t=S(e),i=this.children.get(t);return i?i.get(L(e)):null}}setTree(e,t){if(N(e))return t;{const i=S(e),r=(this.children.get(i)||new B(null)).setTree(L(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new B(this.value,o)}}fold(e){return this.fold_(x(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_($(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,x(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(N(e))return null;{const r=S(e),o=this.children.get(r);return o?o.findOnPath_(L(e),$(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,x(),t)}foreachOnPath_(e,t,i){if(N(e))return this;{this.value&&i(t,this.value);const s=S(e),r=this.children.get(s);return r?r.foreachOnPath_(L(e),$(t,s),i):new B(null)}}foreach(e){this.foreach_(x(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_($(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class he{constructor(e){this.writeTree_=e}static empty(){return new he(new B(null))}}function lt(n,e,t){if(N(e))return new he(new B(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=K(s,e);return r=r.updateChild(o,t),new he(n.writeTree_.set(s,r))}else{const s=new B(t),r=n.writeTree_.setTree(e,s);return new he(r)}}}function cs(n,e,t){let i=n;return Z(t,(s,r)=>{i=lt(i,$(e,s),r)}),i}function hs(n,e){if(N(e))return he.empty();{const t=n.writeTree_.setTree(e,new B(null));return new he(t)}}function Ln(n,e){return Fe(n,e)!=null}function Fe(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(K(t.path,e)):null}function us(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(H,(i,s)=>{e.push(new T(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new T(i,s.value))}),e}function we(n,e){if(N(e))return n;{const t=Fe(n,e);return t!=null?new he(new B(t)):new he(n.writeTree_.subtree(e))}}function Fn(n){return n.writeTree_.isEmpty()}function qe(n,e){return Nr(x(),n.writeTree_,e)}function Nr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Nr($(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild($(n,".priority"),i)),t}}/**
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
 */function rn(n,e){return kr(e,n)}function Vc(n,e,t,i,s){p(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=lt(n.visibleWrites,e,t)),n.lastWriteId=i}function $c(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Gc(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&zc(a,i.path)?s=!1:le(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return jc(n),!0;if(i.snap)n.visibleWrites=hs(n.visibleWrites,i.path);else{const a=i.children;Z(a,l=>{n.visibleWrites=hs(n.visibleWrites,$(i.path,l))})}return!0}else return!1}function zc(n,e){if(n.snap)return le(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&le($(n.path,t),e))return!0;return!1}function jc(n){n.visibleWrites=Rr(n.allWrites,qc,x()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function qc(n){return n.visible}function Rr(n,e,t){let i=he.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)le(t,o)?(a=K(t,o),i=lt(i,a,r.snap)):le(o,t)&&(a=K(o,t),i=lt(i,x(),r.snap.getChild(a)));else if(r.children){if(le(t,o))a=K(t,o),i=cs(i,a,r.children);else if(le(o,t))if(a=K(o,t),N(a))i=cs(i,x(),r.children);else{const l=Ge(r.children,S(a));if(l){const c=l.getChild(L(a));i=lt(i,x(),c)}}}else throw Ye("WriteRecord should have .snap or .children")}}return i}function Ar(n,e,t,i,s){if(!i&&!s){const r=Fe(n.visibleWrites,e);if(r!=null)return r;{const o=we(n.visibleWrites,e);if(Fn(o))return t;if(t==null&&!Ln(o,x()))return null;{const a=t||v.EMPTY_NODE;return qe(o,a)}}}else{const r=we(n.visibleWrites,e);if(!s&&Fn(r))return t;if(!s&&t==null&&!Ln(r,x()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(le(c.path,e)||le(e,c.path))},a=Rr(n.allWrites,o,e),l=t||v.EMPTY_NODE;return qe(a,l)}}}function Yc(n,e,t){let i=v.EMPTY_NODE;const s=Fe(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(H,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=we(n.visibleWrites,e);return t.forEachChild(H,(o,a)=>{const l=qe(we(r,new P(o)),a);i=i.updateImmediateChild(o,l)}),us(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=we(n.visibleWrites,e);return us(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Kc(n,e,t,i,s){p(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=$(e,t);if(Ln(n.visibleWrites,r))return null;{const o=we(n.visibleWrites,r);return Fn(o)?s.getChild(t):qe(o,s.getChild(t))}}function Qc(n,e,t,i){const s=$(e,t),r=Fe(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=we(n.visibleWrites,s);return qe(o,i.getNode().getImmediateChild(t))}else return null}function Xc(n,e){return Fe(n.visibleWrites,e)}function Jc(n,e,t,i,s,r,o){let a;const l=we(n.visibleWrites,e),c=Fe(l,x());if(c!=null)a=c;else if(t!=null)a=qe(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],d=o.getCompare(),u=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=u.getNext();for(;m&&f.length<s;)d(m,i)!==0&&f.push(m),m=u.getNext();return f}else return[]}function Zc(){return{visibleWrites:he.empty(),allWrites:[],lastWriteId:-1}}function jt(n,e,t,i){return Ar(n.writeTree,n.treePath,e,t,i)}function ri(n,e){return Yc(n.writeTree,n.treePath,e)}function ds(n,e,t,i){return Kc(n.writeTree,n.treePath,e,t,i)}function qt(n,e){return Xc(n.writeTree,$(n.treePath,e))}function eh(n,e,t,i,s,r){return Jc(n.writeTree,n.treePath,e,t,i,s,r)}function oi(n,e,t){return Qc(n.writeTree,n.treePath,e,t)}function Mr(n,e){return kr($(n.treePath,e),n.writeTree)}function kr(n,e){return{treePath:n,writeTree:e}}/**
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
 */class th{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,pt(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,_t(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,je(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,pt(i,e.snapshotNode,s.oldSnap));else throw Ye("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class nh{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const xr=new nh;class ai{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Se(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return oi(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Oe(this.viewCache_),r=eh(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function ih(n){return{filter:n}}function sh(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function rh(n,e,t,i,s){const r=new th;let o,a;if(t.type===ce.OVERWRITE){const c=t;c.source.fromUser?o=Bn(n,e,c.path,c.snap,i,s,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!N(c.path),o=Yt(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===ce.MERGE){const c=t;c.source.fromUser?o=ah(n,e,c.path,c.children,i,s,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Wn(n,e,c.path,c.children,i,s,a,r))}else if(t.type===ce.ACK_USER_WRITE){const c=t;c.revert?o=hh(n,e,c.path,i,s,r):o=lh(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===ce.LISTEN_COMPLETE)o=ch(n,e,t.path,i,r);else throw Ye("Unknown operation type: "+t.type);const l=r.getChanges();return oh(e,o,l),{viewCache:o,changes:l}}function oh(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=zt(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(br(zt(e)))}}function Pr(n,e,t,i,s,r){const o=e.eventCache;if(qt(i,t)!=null)return e;{let a,l;if(N(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Oe(e),f=c instanceof v?c:v.EMPTY_NODE,d=ri(i,f);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=jt(i,Oe(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=S(t);if(c===".priority"){p(Ie(t)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const d=ds(i,t,f,l);d!=null?a=n.filter.updatePriority(f,d):a=o.getNode()}else{const f=L(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=ds(i,t,o.getNode(),l);u!=null?d=o.getNode().getImmediateChild(c).updateChild(f,u):d=o.getNode().getImmediateChild(c)}else d=oi(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,f,s,r):a=o.getNode()}}return at(e,a,o.isFullyInitialized()||N(t),n.filter.filtersNodes())}}function Yt(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const f=o?n.filter:n.filter.getIndexedFilter();if(N(t))c=f.updateFullNode(l.getNode(),i,null);else if(f.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(t,i);c=f.updateFullNode(l.getNode(),m,null)}else{const m=S(t);if(!l.isCompleteForPath(t)&&Ie(t)>1)return e;const g=L(t),w=l.getNode().getImmediateChild(m).updateChild(g,i);m===".priority"?c=f.updatePriority(l.getNode(),w):c=f.updateChild(l.getNode(),m,w,g,xr,null)}const d=Tr(e,c,l.isFullyInitialized()||N(t),f.filtersNodes()),u=new ai(s,d,r);return Pr(n,d,t,s,u,a)}function Bn(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const f=new ai(s,e,r);if(N(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=at(e,c,!0,n.filter.filtersNodes());else{const d=S(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=at(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=L(t),m=a.getNode().getImmediateChild(d);let g;if(N(u))g=i;else{const k=f.getCompleteChild(d);k!=null?_r(u)===".priority"&&k.getChild(mr(u)).isEmpty()?g=k:g=k.updateChild(u,i):g=v.EMPTY_NODE}if(m.equals(g))l=e;else{const k=n.filter.updateChild(a.getNode(),d,g,u,f,o);l=at(e,k,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function fs(n,e){return n.eventCache.isCompleteForChild(e)}function ah(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const f=$(t,l);fs(e,S(f))&&(a=Bn(n,a,f,c,s,r,o))}),i.foreach((l,c)=>{const f=$(t,l);fs(e,S(f))||(a=Bn(n,a,f,c,s,r,o))}),a}function _s(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Wn(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;N(t)?c=i:c=new B(null).setTree(t,i);const f=e.serverCache.getNode();return c.children.inorderTraversal((d,u)=>{if(f.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),g=_s(n,m,u);l=Yt(n,l,new P(d),g,s,r,o,a)}}),c.children.inorderTraversal((d,u)=>{const m=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!f.hasChild(d)&&!m){const g=e.serverCache.getNode().getImmediateChild(d),k=_s(n,g,u);l=Yt(n,l,new P(d),k,s,r,o,a)}}),l}function lh(n,e,t,i,s,r,o){if(qt(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(N(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Yt(n,e,t,l.getNode().getChild(t),s,r,a,o);if(N(t)){let c=new B(null);return l.getNode().forEachChild(Ve,(f,d)=>{c=c.set(new P(f),d)}),Wn(n,e,t,c,s,r,a,o)}else return e}else{let c=new B(null);return i.foreach((f,d)=>{const u=$(t,f);l.isCompleteForPath(u)&&(c=c.set(f,l.getNode().getChild(u)))}),Wn(n,e,t,c,s,r,a,o)}}function ch(n,e,t,i,s){const r=e.serverCache,o=Tr(e,r.getNode(),r.isFullyInitialized()||N(t),r.isFiltered());return Pr(n,o,t,i,xr,s)}function hh(n,e,t,i,s,r){let o;if(qt(i,t)!=null)return e;{const a=new ai(i,e,s),l=e.eventCache.getNode();let c;if(N(t)||S(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=jt(i,Oe(e));else{const d=e.serverCache.getNode();p(d instanceof v,"serverChildren would be complete if leaf node"),f=ri(i,d)}f=f,c=n.filter.updateFullNode(l,f,r)}else{const f=S(t);let d=oi(i,f,e.serverCache);d==null&&e.serverCache.isCompleteForChild(f)&&(d=l.getImmediateChild(f)),d!=null?c=n.filter.updateChild(l,f,d,L(t),a,r):e.eventCache.getNode().hasChild(f)?c=n.filter.updateChild(l,f,v.EMPTY_NODE,L(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=jt(i,Oe(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||qt(i,x())!=null,at(e,c,o,n.filter.filtersNodes())}}/**
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
 */class uh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new ti(i.getIndex()),r=Mc(i);this.processor_=ih(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(v.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),f=new Se(l,o.isFullyInitialized(),s.filtersNodes()),d=new Se(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=sn(d,f),this.eventGenerator_=new Fc(this.query_)}get query(){return this.query_}}function dh(n){return n.viewCache_.serverCache.getNode()}function fh(n){return zt(n.viewCache_)}function _h(n,e){const t=Oe(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!N(e)&&!t.getImmediateChild(S(e)).isEmpty())?t.getChild(e):null}function ps(n){return n.eventRegistrations_.length===0}function ph(n,e){n.eventRegistrations_.push(e)}function ms(n,e,t){const i=[];if(t){p(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function gs(n,e,t,i){e.type===ce.MERGE&&e.source.queryId!==null&&(p(Oe(n.viewCache_),"We should always have a full cache before handling merges"),p(zt(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=rh(n.processor_,s,e,t,i);return sh(n.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Dr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function mh(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(H,(r,o)=>{i.push(je(r,o))}),t.isFullyInitialized()&&i.push(br(t.getNode())),Dr(n,i,t.getNode(),e)}function Dr(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Bc(n.eventGenerator_,e,t,s)}/**
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
 */let Kt;class Or{constructor(){this.views=new Map}}function gh(n){p(!Kt,"__referenceConstructor has already been defined"),Kt=n}function yh(){return p(Kt,"Reference.ts has not been loaded"),Kt}function vh(n){return n.views.size===0}function li(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return p(r!=null,"SyncTree gave us an op for an invalid query."),gs(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(gs(o,e,t,i));return r}}function Lr(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=jt(t,s?i:null),l=!1;a?l=!0:i instanceof v?(a=ri(t,i),l=!1):(a=v.EMPTY_NODE,l=!1);const c=sn(new Se(a,l,!1),new Se(i,s,!1));return new uh(e,c)}return o}function Ch(n,e,t,i,s,r){const o=Lr(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),ph(o,t),mh(o,t)}function Eh(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Te(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(ms(c,t,i)),ps(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(ms(l,t,i)),ps(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Te(n)&&r.push(new(yh())(e._repo,e._path)),{removed:r,events:o}}function Fr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function be(n,e){let t=null;for(const i of n.views.values())t=t||_h(i,e);return t}function Br(n,e){if(e._queryParams.loadsAllData())return on(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Wr(n,e){return Br(n,e)!=null}function Te(n){return on(n)!=null}function on(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Qt;function wh(n){p(!Qt,"__referenceConstructor has already been defined"),Qt=n}function bh(){return p(Qt,"Reference.ts has not been loaded"),Qt}let Ih=1;class ys{constructor(e){this.listenProvider_=e,this.syncPointTree_=new B(null),this.pendingWriteTree_=Zc(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ur(n,e,t,i,s){return Vc(n.pendingWriteTree_,e,t,i,s),s?Tt(n,new De(Sr(),e,t)):[]}function xe(n,e,t=!1){const i=$c(n.pendingWriteTree_,e);if(Gc(n.pendingWriteTree_,e)){let r=new B(null);return i.snap!=null?r=r.set(x(),!0):Z(i.children,o=>{r=r.set(new P(o),!0)}),Tt(n,new Gt(i.path,r,t))}else return[]}function St(n,e,t){return Tt(n,new De(ii(),e,t))}function Sh(n,e,t){const i=B.fromObject(t);return Tt(n,new yt(ii(),e,i))}function Th(n,e){return Tt(n,new gt(ii(),e))}function Nh(n,e,t){const i=hi(n,t);if(i){const s=ui(i),r=s.path,o=s.queryId,a=K(r,e),l=new gt(si(o),a);return di(n,r,l)}else return[]}function Xt(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Wr(o,e))){const l=Eh(o,e,t,i);vh(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const f=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(u,m)=>Te(m));if(f&&!d){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const m=Mh(u);for(let g=0;g<m.length;++g){const k=m[g],w=k.query,ne=Gr(n,k);n.listenProvider_.startListening(ct(w),vt(n,w),ne.hashFn,ne.onComplete)}}}!d&&c.length>0&&!i&&(f?n.listenProvider_.stopListening(ct(e),null):c.forEach(u=>{const m=n.queryToTagMap.get(an(u));n.listenProvider_.stopListening(ct(u),m)}))}kh(n,c)}return a}function Hr(n,e,t,i){const s=hi(n,i);if(s!=null){const r=ui(s),o=r.path,a=r.queryId,l=K(o,e),c=new De(si(a),l,t);return di(n,o,c)}else return[]}function Rh(n,e,t,i){const s=hi(n,i);if(s){const r=ui(s),o=r.path,a=r.queryId,l=K(o,e),c=B.fromObject(t),f=new yt(si(a),l,c);return di(n,o,f)}else return[]}function Un(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(u,m)=>{const g=K(u,s);r=r||be(m,g),o=o||Te(m)});let a=n.syncPointTree_.get(s);a?(o=o||Te(a),r=r||be(a,x())):(a=new Or,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((m,g)=>{const k=be(g,x());k&&(r=r.updateImmediateChild(m,k))}));const c=Wr(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=an(e);p(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const m=xh();n.queryToTagMap.set(u,m),n.tagToQueryMap.set(m,u)}const f=rn(n.pendingWriteTree_,s);let d=Ch(a,e,t,f,r,l);if(!c&&!o&&!i){const u=Br(a,e);d=d.concat(Ph(n,e,u))}return d}function ci(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=K(o,e),c=be(a,l);if(c)return c});return Ar(s,e,r,t,!0)}function Ah(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,f)=>{const d=K(c,t);i=i||be(f,d)});let s=n.syncPointTree_.get(t);s?i=i||be(s,x()):(s=new Or,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new Se(i,!0,!1):null,a=rn(n.pendingWriteTree_,e._path),l=Lr(s,e,a,r?o.getNode():v.EMPTY_NODE,r);return fh(l)}function Tt(n,e){return Vr(e,n.syncPointTree_,null,rn(n.pendingWriteTree_,x()))}function Vr(n,e,t,i){if(N(n.path))return $r(n,e,t,i);{const s=e.get(x());t==null&&s!=null&&(t=be(s,x()));let r=[];const o=S(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,f=Mr(i,o);r=r.concat(Vr(a,l,c,f))}return s&&(r=r.concat(li(s,n,i,t))),r}}function $r(n,e,t,i){const s=e.get(x());t==null&&s!=null&&(t=be(s,x()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Mr(i,o),f=n.operationForChild(o);f&&(r=r.concat($r(f,a,l,c)))}),s&&(r=r.concat(li(s,n,i,t))),r}function Gr(n,e){const t=e.query,i=vt(n,t);return{hashFn:()=>(dh(e)||v.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Nh(n,t._path,i):Th(n,t._path);{const r=Al(s,t);return Xt(n,t,null,r)}}}}function vt(n,e){const t=an(e);return n.queryToTagMap.get(t)}function an(n){return n._path.toString()+"$"+n._queryIdentifier}function hi(n,e){return n.tagToQueryMap.get(e)}function ui(n){const e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new P(n.substr(0,e))}}function di(n,e,t){const i=n.syncPointTree_.get(e);p(i,"Missing sync point for query tag that we're tracking");const s=rn(n.pendingWriteTree_,e);return li(i,t,s,null)}function Mh(n){return n.fold((e,t,i)=>{if(t&&Te(t))return[on(t)];{let s=[];return t&&(s=Fr(t)),Z(i,(r,o)=>{s=s.concat(o)}),s}})}function ct(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(bh())(n._repo,n._path):n}function kh(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=an(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function xh(){return Ih++}function Ph(n,e,t){const i=e._path,s=vt(n,e),r=Gr(n,t),o=n.listenProvider_.startListening(ct(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)p(!Te(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,f,d)=>{if(!N(c)&&f&&Te(f))return[on(f).query];{let u=[];return f&&(u=u.concat(Fr(f).map(m=>m.query))),Z(d,(m,g)=>{u=u.concat(g)}),u}});for(let c=0;c<l.length;++c){const f=l[c];n.listenProvider_.stopListening(ct(f),vt(n,f))}}return o}/**
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
 */class fi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new fi(t)}node(){return this.node_}}class _i{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=$(this.path_,e);return new _i(this.syncTree_,t)}node(){return ci(this.syncTree_,this.path_)}}const Dh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},vs=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Oh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Lh(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Oh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},Lh=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&p(!1,"Unexpected increment value: "+i);const s=e.node();if(p(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Fh=function(n,e,t,i){return pi(e,new _i(t,n),i)},zr=function(n,e,t){return pi(n,new fi(e),t)};function pi(n,e,t){const i=n.getPriority().val(),s=vs(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=vs(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new G(a,j(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new G(s))),o.forEachChild(H,(a,l)=>{const c=pi(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class mi{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function gi(n,e){let t=e instanceof P?e:new P(e),i=n,s=S(t);for(;s!==null;){const r=Ge(i.node.children,s)||{children:{},childCount:0};i=new mi(s,i,r),t=L(t),s=S(t)}return i}function Je(n){return n.node.value}function jr(n,e){n.node.value=e,Hn(n)}function qr(n){return n.node.childCount>0}function Bh(n){return Je(n)===void 0&&!qr(n)}function ln(n,e){Z(n.node.children,(t,i)=>{e(new mi(t,n,i))})}function Yr(n,e,t,i){t&&e(n),ln(n,s=>{Yr(s,e,!0)})}function Wh(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Nt(n){return new P(n.parent===null?n.name:Nt(n.parent)+"/"+n.name)}function Hn(n){n.parent!==null&&Uh(n.parent,n.name,n)}function Uh(n,e,t){const i=Bh(t),s=ye(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Hn(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Hn(n))}/**
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
 */const Hh=/[\[\].#$\/\u0000-\u001F\u007F]/,Vh=/[\[\].#$\u0000-\u001F\u007F]/,In=10*1024*1024,Kr=function(n){return typeof n=="string"&&n.length!==0&&!Hh.test(n)},Qr=function(n){return typeof n=="string"&&n.length!==0&&!Vh.test(n)},$h=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qr(n)},Gh=function(n,e,t,i){yi(jn(n,"value"),e,t)},yi=function(n,e,t){const i=t instanceof P?new lc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Me(i));if(typeof e=="function")throw new Error(n+"contains a function "+Me(i)+" with contents = "+e.toString());if(qs(e))throw new Error(n+"contains "+e.toString()+" "+Me(i));if(typeof e=="string"&&e.length>In/3&&tn(e)>In)throw new Error(n+"contains a string greater than "+In+" utf8 bytes "+Me(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Z(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Kr(o)))throw new Error(n+" contains an invalid key ("+o+") "+Me(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cc(i,o),yi(n,a,i),hc(i)}),s&&r)throw new Error(n+' contains ".value" child '+Me(i)+" in addition to actual children.")}},Xr=function(n,e,t,i){if(!Qr(t))throw new Error(jn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zh=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Xr(n,e,t)},jh=function(n,e){if(S(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},qh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!$h(t))throw new Error(jn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Yh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vi(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Jn(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Jr(n,e,t){vi(n,t),Zr(n,i=>Jn(i,e))}function de(n,e,t){vi(n,t),Zr(n,i=>le(i,e)||le(e,i))}function Zr(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Kh(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Kh(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();rt&&Y("event: "+t.toString()),Xe(i)}}}/**
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
 */const Qh="repo_interrupt",Xh=25;class Jh{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$t(),this.transactionQueueTree_=new mi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Zh(n,e,t){if(n.stats_=Qn(n.repoInfo_),n.forceRestClient_||Pl())n.server_=new Vt(n.repoInfo_,(i,s,r,o)=>{Cs(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Es(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{V(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new pe(n.repoInfo_,e,(i,s,r,o)=>{Cs(n,i,s,r,o)},i=>{Es(n,i)},i=>{tu(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Bl(n.repoInfo_,()=>new Lc(n.stats_,n.server_)),n.infoData_=new kc,n.infoSyncTree_=new ys({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=St(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ei(n,"connected",!1),n.serverSyncTree_=new ys({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);de(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function eu(n){const t=n.infoData_.getNode(new P(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ci(n){return Dh({timestamp:eu(n)})}function Cs(n,e,t,i,s){n.dataUpdateCount++;const r=new P(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Ot(t,c=>j(c));o=Rh(n.serverSyncTree_,r,l,s)}else{const l=j(t);o=Hr(n.serverSyncTree_,r,l,s)}else if(i){const l=Ot(t,c=>j(c));o=Sh(n.serverSyncTree_,r,l)}else{const l=j(t);o=St(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=hn(n,r)),de(n.eventQueue_,a,o)}function Es(n,e){Ei(n,"connected",e),e===!1&&su(n)}function tu(n,e){Z(e,(t,i)=>{Ei(n,t,i)})}function Ei(n,e,t){const i=new P("/.info/"+e),s=j(t);n.infoData_.updateSnapshot(i,s);const r=St(n.infoSyncTree_,i,s);de(n.eventQueue_,i,r)}function eo(n){return n.nextWriteId_++}function nu(n,e,t){const i=Ah(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=j(s).withIndex(e._queryParams.getIndex());Un(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=St(n.serverSyncTree_,e._path,r);else{const a=vt(n.serverSyncTree_,e);o=Hr(n.serverSyncTree_,e._path,r,a)}return de(n.eventQueue_,e._path,o),Xt(n.serverSyncTree_,e,t,null,!0),r},s=>(cn(n,"get for query "+V(e)+" failed: "+s),Promise.reject(new Error(s))))}function iu(n,e,t,i,s){cn(n,"set",{path:e.toString(),value:t,priority:i});const r=Ci(n),o=j(t,i),a=ci(n.serverSyncTree_,e),l=zr(o,a,r),c=eo(n),f=Ur(n.serverSyncTree_,e,l,c,!0);vi(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(u,m)=>{const g=u==="ok";g||J("set at "+e+" failed: "+u);const k=xe(n.serverSyncTree_,c,!g);de(n.eventQueue_,e,k),au(n,s,u,m)});const d=ro(n,e);hn(n,d),de(n.eventQueue_,d,[])}function su(n){cn(n,"onDisconnectEvents");const e=Ci(n),t=$t();On(n.onDisconnect_,x(),(s,r)=>{const o=Fh(s,r,n.serverSyncTree_,e);Ir(t,s,o)});let i=[];On(t,x(),(s,r)=>{i=i.concat(St(n.serverSyncTree_,s,r));const o=ro(n,s);hn(n,o)}),n.onDisconnect_=$t(),de(n.eventQueue_,x(),i)}function ru(n,e,t){let i;S(e._path)===".info"?i=Un(n.infoSyncTree_,e,t):i=Un(n.serverSyncTree_,e,t),Jr(n.eventQueue_,e._path,i)}function ws(n,e,t){let i;S(e._path)===".info"?i=Xt(n.infoSyncTree_,e,t):i=Xt(n.serverSyncTree_,e,t),Jr(n.eventQueue_,e._path,i)}function ou(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Qh)}function cn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Y(t,...e)}function au(n,e,t,i){e&&Xe(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function to(n,e,t){return ci(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function wi(n,e=n.transactionQueueTree_){if(e||un(n,e),Je(e)){const t=io(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&lu(n,Nt(e),t)}else qr(e)&&ln(e,t=>{wi(n,t)})}function lu(n,e,t){const i=t.map(c=>c.currentWriteId),s=to(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const f=t[c];p(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const d=K(e,f.path);r=r.updateChild(d,f.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{cn(n,"transaction put response",{path:l.toString(),status:c});let f=[];if(c==="ok"){const d=[];for(let u=0;u<t.length;u++)t[u].status=2,f=f.concat(xe(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&d.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();un(n,gi(n.transactionQueueTree_,e)),wi(n,n.transactionQueueTree_),de(n.eventQueue_,e,f);for(let u=0;u<d.length;u++)Xe(d[u])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{J("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}hn(n,e)}},o)}function hn(n,e){const t=no(n,e),i=Nt(t),s=io(n,t);return cu(n,s,i),i}function cu(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=K(t,l.path);let f=!1,d;if(p(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,d=l.abortReason,s=s.concat(xe(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Xh)f=!0,d="maxretry",s=s.concat(xe(n.serverSyncTree_,l.currentWriteId,!0));else{const u=to(n,l.path,o);l.currentInputSnapshot=u;const m=e[a].update(u.val());if(m!==void 0){yi("transaction failed: Data returned ",m,l.path);let g=j(m);typeof m=="object"&&m!=null&&ye(m,".priority")||(g=g.updatePriority(u.getPriority()));const w=l.currentWriteId,ne=Ci(n),ie=zr(g,u,ne);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=ie,l.currentWriteId=eo(n),o.splice(o.indexOf(w),1),s=s.concat(Ur(n.serverSyncTree_,l.path,ie,l.currentWriteId,l.applyLocally)),s=s.concat(xe(n.serverSyncTree_,w,!0))}else f=!0,d="nodata",s=s.concat(xe(n.serverSyncTree_,l.currentWriteId,!0))}de(n.eventQueue_,t,s),s=[],f&&(e[a].status=2,function(u){setTimeout(u,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}un(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Xe(i[a]);wi(n,n.transactionQueueTree_)}function no(n,e){let t,i=n.transactionQueueTree_;for(t=S(e);t!==null&&Je(i)===void 0;)i=gi(i,t),e=L(e),t=S(e);return i}function io(n,e){const t=[];return so(n,e,t),t.sort((i,s)=>i.order-s.order),t}function so(n,e,t){const i=Je(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);ln(e,s=>{so(n,s,t)})}function un(n,e){const t=Je(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,jr(e,t.length>0?t:void 0)}ln(e,i=>{un(n,i)})}function ro(n,e){const t=Nt(no(n,e)),i=gi(n.transactionQueueTree_,e);return Wh(i,s=>{Sn(n,s)}),Sn(n,i),Yr(i,s=>{Sn(n,s)}),t}function Sn(n,e){const t=Je(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(xe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?jr(e,void 0):t.length=r+1,de(n.eventQueue_,Nt(e),s);for(let o=0;o<i.length;o++)Xe(i[o])}}/**
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
 */function hu(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function uu(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):J(`Invalid query segment '${t}' in query '${n}'`)}return e}const bs=function(n,e){const t=du(n),i=t.namespace;t.domain==="firebase.com"&&ge(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&ge("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Il();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new rr(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new P(t.pathString)}},du=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let f=n.indexOf("/");f===-1&&(f=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(f,d)),f<d&&(s=hu(n.substring(f,d)));const u=uu(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=i}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class fu{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+V(this.snapshot.exportVal())}}class _u{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class oo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class bi{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return N(this._path)?null:_r(this._path)}get ref(){return new ve(this._repo,this._path)}get _queryIdentifier(){const e=as(this._queryParams),t=Yn(e);return t==="{}"?"default":t}get _queryObject(){return as(this._queryParams)}isEqual(e){if(e=Ke(e),!(e instanceof bi))return!1;const t=this._repo===e._repo,i=Jn(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+ac(this._path)}}class ve extends bi{constructor(e,t){super(e,t,new ni,!1)}get parent(){const e=mr(this._path);return e===null?null:new ve(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ct{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new P(e),i=Jt(this.ref,e);return new Ct(this._node.getChild(t),i,H)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Ct(s,Jt(this.ref,i),H)))}hasChild(e){const t=new P(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ee(n,e){return n=Ke(n),n._checkNotDeleted("ref"),e!==void 0?Jt(n._root,e):n._root}function Jt(n,e){return n=Ke(n),S(n._path)===null?zh("child","path",e):Xr("child","path",e),new ve(n._repo,$(n._path,e))}function $e(n,e){n=Ke(n),jh("set",n._path),Gh("set",e,n._path);const t=new en;return iu(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function pu(n){n=Ke(n);const e=new oo(()=>{}),t=new dn(e);return nu(n._repo,n,t).then(i=>new Ct(i,new ve(n._repo,n._path),n._queryParams.getIndex()))}class dn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new fu("value",this,new Ct(e.snapshotNode,new ve(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new _u(this,e,t):null}matches(e){return e instanceof dn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function mu(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(f,d)=>{ws(n._repo,n,a),l(f,d)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new oo(t,r||void 0),a=new dn(o);return ru(n._repo,n,a),()=>ws(n._repo,n,a)}function Rt(n,e,t,i){return mu(n,"value",e,t,i)}gh(ve);wh(ve);/**
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
 */const gu="FIREBASE_DATABASE_EMULATOR_HOST",Vn={};let yu=!1;function vu(n,e,t,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=zn(r);n.repoInfo_=new rr(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function Cu(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||ge("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Y("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=bs(r,s),a=o.repoInfo,l;typeof process<"u"&&$i&&(l=$i[gu]),l?(r=`http://${l}?ns=${a.namespace}`,o=bs(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Ol(n.name,n.options,e);qh("Invalid Firebase Database URL",o),N(o.path)||ge("Database URL must point to the root of a Firebase Database (not including a child path).");const f=wu(a,n,c,new Dl(n,t));return new bu(f,n)}function Eu(n,e){const t=Vn[e];(!t||t[n.key]!==n)&&ge(`Database ${e}(${n.repoInfo_}) has already been deleted.`),ou(n),delete t[n.key]}function wu(n,e,t,i){let s=Vn[e.name];s||(s={},Vn[e.name]=s);let r=s[n.toURLString()];return r&&ge("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Jh(n,yu,t,i),s[n.toURLString()]=r,r}class bu{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Zh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ve(this._repo,x())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Eu(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ge("Cannot call "+e+" on a deleted database.")}}function Iu(n=rl(),e){const t=el(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Wo("database");i&&Su(t,...i)}return t}function Su(n,e,t,i={}){n=Ke(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Lt(i,r.repoInfo_.emulatorOptions))return;ge("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&ge('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Pt(Pt.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:Ho(i.mockUserToken,n.app.options.projectId);o=new Pt(a)}zn(e)&&(Uo(e),Go("Database",!0)),vu(r,s,i,o)}/**
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
 */function Tu(n){yl(sl),Bt(new ut("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Cu(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Ue(Gi,zi,n),Ue(Gi,zi,"esm2017")}pe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};pe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Tu();var Ii={};(function n(e,t,i,s){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;try{var _=new OffscreenCanvas(1,1),h=_.getContext("2d");h.fillRect(0,0,1,1);var y=_.transferToImageBitmap();h.createPattern(y,"no-repeat")}catch{return!1}return!0}();function l(){}function c(_){var h=t.exports.Promise,y=h!==void 0?h:e.Promise;return typeof y=="function"?new y(_):(_(l,l),null)}var f=function(_,h){return{transform:function(y){if(_)return y;if(h.has(y))return h.get(y);var E=new OffscreenCanvas(y.width,y.height),b=E.getContext("2d");return b.drawImage(y,0,0),h.set(y,E),E},clear:function(){h.clear()}}}(a,new Map),d=function(){var _=Math.floor(16.666666666666668),h,y,E={},b=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(h=function(I){var R=Math.random();return E[R]=requestAnimationFrame(function C(A){b===A||b+_-1<A?(b=A,delete E[R],I()):E[R]=requestAnimationFrame(C)}),R},y=function(I){E[I]&&cancelAnimationFrame(E[I])}):(h=function(I){return setTimeout(I,_)},y=function(I){return clearTimeout(I)}),{frame:h,cancel:y}}(),u=function(){var _,h,y={};function E(b){function I(R,C){b.postMessage({options:R||{},callback:C})}b.init=function(C){var A=C.transferControlToOffscreen();b.postMessage({canvas:A},[A])},b.fire=function(C,A,D){if(h)return I(C,null),h;var W=Math.random().toString(36).slice(2);return h=c(function(F){function U(q){q.data.callback===W&&(delete y[W],b.removeEventListener("message",U),h=null,f.clear(),D(),F())}b.addEventListener("message",U),I(C,W),y[W]=U.bind(null,{data:{callback:W}})}),h},b.reset=function(){b.postMessage({reset:!0});for(var C in y)y[C](),delete y[C]}}return function(){if(_)return _;if(!i&&r){var b=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{_=new Worker(URL.createObjectURL(new Blob([b])))}catch(I){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",I),null}E(_)}return _}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(_,h){return h?h(_):_}function k(_){return _!=null}function w(_,h,y){return g(_&&k(_[h])?_[h]:m[h],y)}function ne(_){return _<0?0:Math.floor(_)}function ie(_,h){return Math.floor(Math.random()*(h-_))+_}function se(_){return parseInt(_,16)}function Ze(_){return _.map(lo)}function lo(_){var h=String(_).replace(/[^0-9a-f]/gi,"");return h.length<6&&(h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]),{r:se(h.substring(0,2)),g:se(h.substring(2,4)),b:se(h.substring(4,6))}}function co(_){var h=w(_,"origin",Object);return h.x=w(h,"x",Number),h.y=w(h,"y",Number),h}function ho(_){_.width=document.documentElement.clientWidth,_.height=document.documentElement.clientHeight}function uo(_){var h=_.getBoundingClientRect();_.width=h.width,_.height=h.height}function fo(_){var h=document.createElement("canvas");return h.style.position="fixed",h.style.top="0px",h.style.left="0px",h.style.pointerEvents="none",h.style.zIndex=_,h}function _o(_,h,y,E,b,I,R,C,A){_.save(),_.translate(h,y),_.rotate(I),_.scale(E,b),_.arc(0,0,1,R,C,A),_.restore()}function po(_){var h=_.angle*(Math.PI/180),y=_.spread*(Math.PI/180);return{x:_.x,y:_.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:_.startVelocity*.5+Math.random()*_.startVelocity,angle2D:-h+(.5*y-Math.random()*y),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:_.color,shape:_.shape,tick:0,totalTicks:_.ticks,decay:_.decay,drift:_.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:_.gravity*3,ovalScalar:.6,scalar:_.scalar,flat:_.flat}}function mo(_,h){h.x+=Math.cos(h.angle2D)*h.velocity+h.drift,h.y+=Math.sin(h.angle2D)*h.velocity+h.gravity,h.velocity*=h.decay,h.flat?(h.wobble=0,h.wobbleX=h.x+10*h.scalar,h.wobbleY=h.y+10*h.scalar,h.tiltSin=0,h.tiltCos=0,h.random=1):(h.wobble+=h.wobbleSpeed,h.wobbleX=h.x+10*h.scalar*Math.cos(h.wobble),h.wobbleY=h.y+10*h.scalar*Math.sin(h.wobble),h.tiltAngle+=.1,h.tiltSin=Math.sin(h.tiltAngle),h.tiltCos=Math.cos(h.tiltAngle),h.random=Math.random()+2);var y=h.tick++/h.totalTicks,E=h.x+h.random*h.tiltCos,b=h.y+h.random*h.tiltSin,I=h.wobbleX+h.random*h.tiltCos,R=h.wobbleY+h.random*h.tiltSin;if(_.fillStyle="rgba("+h.color.r+", "+h.color.g+", "+h.color.b+", "+(1-y)+")",_.beginPath(),o&&h.shape.type==="path"&&typeof h.shape.path=="string"&&Array.isArray(h.shape.matrix))_.fill(yo(h.shape.path,h.shape.matrix,h.x,h.y,Math.abs(I-E)*.1,Math.abs(R-b)*.1,Math.PI/10*h.wobble));else if(h.shape.type==="bitmap"){var C=Math.PI/10*h.wobble,A=Math.abs(I-E)*.1,D=Math.abs(R-b)*.1,W=h.shape.bitmap.width*h.scalar,F=h.shape.bitmap.height*h.scalar,U=new DOMMatrix([Math.cos(C)*A,Math.sin(C)*A,-Math.sin(C)*D,Math.cos(C)*D,h.x,h.y]);U.multiplySelf(new DOMMatrix(h.shape.matrix));var q=_.createPattern(f.transform(h.shape.bitmap),"no-repeat");q.setTransform(U),_.globalAlpha=1-y,_.fillStyle=q,_.fillRect(h.x-W/2,h.y-F/2,W,F),_.globalAlpha=1}else if(h.shape==="circle")_.ellipse?_.ellipse(h.x,h.y,Math.abs(I-E)*h.ovalScalar,Math.abs(R-b)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI):_o(_,h.x,h.y,Math.abs(I-E)*h.ovalScalar,Math.abs(R-b)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI);else if(h.shape==="star")for(var M=Math.PI/2*3,Q=4*h.scalar,re=8*h.scalar,oe=h.x,fe=h.y,Ne=5,ue=Math.PI/Ne;Ne--;)oe=h.x+Math.cos(M)*re,fe=h.y+Math.sin(M)*re,_.lineTo(oe,fe),M+=ue,oe=h.x+Math.cos(M)*Q,fe=h.y+Math.sin(M)*Q,_.lineTo(oe,fe),M+=ue;else _.moveTo(Math.floor(h.x),Math.floor(h.y)),_.lineTo(Math.floor(h.wobbleX),Math.floor(b)),_.lineTo(Math.floor(I),Math.floor(R)),_.lineTo(Math.floor(E),Math.floor(h.wobbleY));return _.closePath(),_.fill(),h.tick<h.totalTicks}function go(_,h,y,E,b){var I=h.slice(),R=_.getContext("2d"),C,A,D=c(function(W){function F(){C=A=null,R.clearRect(0,0,E.width,E.height),f.clear(),b(),W()}function U(){i&&!(E.width===s.width&&E.height===s.height)&&(E.width=_.width=s.width,E.height=_.height=s.height),!E.width&&!E.height&&(y(_),E.width=_.width,E.height=_.height),R.clearRect(0,0,E.width,E.height),I=I.filter(function(q){return mo(R,q)}),I.length?C=d.frame(U):F()}C=d.frame(U),A=F});return{addFettis:function(W){return I=I.concat(W),D},canvas:_,promise:D,reset:function(){C&&d.cancel(C),A&&A()}}}function Si(_,h){var y=!_,E=!!w(h||{},"resize"),b=!1,I=w(h,"disableForReducedMotion",Boolean),R=r&&!!w(h||{},"useWorker"),C=R?u():null,A=y?ho:uo,D=_&&C?!!_.__confetti_initialized:!1,W=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,F;function U(M,Q,re){for(var oe=w(M,"particleCount",ne),fe=w(M,"angle",Number),Ne=w(M,"spread",Number),ue=w(M,"startVelocity",Number),Eo=w(M,"decay",Number),wo=w(M,"gravity",Number),bo=w(M,"drift",Number),Ni=w(M,"colors",Ze),Io=w(M,"ticks",Number),Ri=w(M,"shapes"),So=w(M,"scalar"),To=!!w(M,"flat"),Ai=co(M),Mi=oe,_n=[],No=_.width*Ai.x,Ro=_.height*Ai.y;Mi--;)_n.push(po({x:No,y:Ro,angle:fe,spread:Ne,startVelocity:ue,color:Ni[Mi%Ni.length],shape:Ri[ie(0,Ri.length)],ticks:Io,decay:Eo,gravity:wo,drift:bo,scalar:So,flat:To}));return F?F.addFettis(_n):(F=go(_,_n,A,Q,re),F.promise)}function q(M){var Q=I||w(M,"disableForReducedMotion",Boolean),re=w(M,"zIndex",Number);if(Q&&W)return c(function(ue){ue()});y&&F?_=F.canvas:y&&!_&&(_=fo(re),document.body.appendChild(_)),E&&!D&&A(_);var oe={width:_.width,height:_.height};C&&!D&&C.init(_),D=!0,C&&(_.__confetti_initialized=!0);function fe(){if(C){var ue={getBoundingClientRect:function(){if(!y)return _.getBoundingClientRect()}};A(ue),C.postMessage({resize:{width:ue.width,height:ue.height}});return}oe.width=oe.height=null}function Ne(){F=null,E&&(b=!1,e.removeEventListener("resize",fe)),y&&_&&(document.body.contains(_)&&document.body.removeChild(_),_=null,D=!1)}return E&&!b&&(b=!0,e.addEventListener("resize",fe,!1)),C?C.fire(M,oe,Ne):U(M,oe,Ne)}return q.reset=function(){C&&C.reset(),F&&F.reset()},q}var fn;function Ti(){return fn||(fn=Si(null,{useWorker:!0,resize:!0})),fn}function yo(_,h,y,E,b,I,R){var C=new Path2D(_),A=new Path2D;A.addPath(C,new DOMMatrix(h));var D=new Path2D;return D.addPath(A,new DOMMatrix([Math.cos(R)*b,Math.sin(R)*b,-Math.sin(R)*I,Math.cos(R)*I,y,E])),D}function vo(_){if(!o)throw new Error("path confetti are not supported in this browser");var h,y;typeof _=="string"?h=_:(h=_.path,y=_.matrix);var E=new Path2D(h),b=document.createElement("canvas"),I=b.getContext("2d");if(!y){for(var R=1e3,C=R,A=R,D=0,W=0,F,U,q=0;q<R;q+=2)for(var M=0;M<R;M+=2)I.isPointInPath(E,q,M,"nonzero")&&(C=Math.min(C,q),A=Math.min(A,M),D=Math.max(D,q),W=Math.max(W,M));F=D-C,U=W-A;var Q=10,re=Math.min(Q/F,Q/U);y=[re,0,0,re,-Math.round(F/2+C)*re,-Math.round(U/2+A)*re]}return{type:"path",path:h,matrix:y}}function Co(_){var h,y=1,E="#000000",b='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof _=="string"?h=_:(h=_.text,y="scalar"in _?_.scalar:y,b="fontFamily"in _?_.fontFamily:b,E="color"in _?_.color:E);var I=10*y,R=""+I+"px "+b,C=new OffscreenCanvas(I,I),A=C.getContext("2d");A.font=R;var D=A.measureText(h),W=Math.ceil(D.actualBoundingBoxRight+D.actualBoundingBoxLeft),F=Math.ceil(D.actualBoundingBoxAscent+D.actualBoundingBoxDescent),U=2,q=D.actualBoundingBoxLeft+U,M=D.actualBoundingBoxAscent+U;W+=U+U,F+=U+U,C=new OffscreenCanvas(W,F),A=C.getContext("2d"),A.font=R,A.fillStyle=E,A.fillText(h,q,M);var Q=1/y;return{type:"bitmap",bitmap:C.transferToImageBitmap(),matrix:[Q,0,0,Q,-W*Q/2,-F*Q/2]}}t.exports=function(){return Ti().apply(this,arguments)},t.exports.reset=function(){Ti().reset()},t.exports.create=Si,t.exports.shapeFromPath=vo,t.exports.shapeFromText=Co})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Ii,!1);const Nu=Ii.exports;Ii.exports.create;let Re=0;const Ru={apiKey:"AIza...",authDomain:"solvesync-6f45a.firebaseapp.com",databaseURL:"https://solvesync-6f45a-default-rtdb.firebaseio.com",projectId:"solvesync-6f45a",storageBucket:"solvesync-6f45a.appspot.com",messagingSenderId:"...",appId:"..."},Au=Hs(Ru),te=Iu(Au),Le=document.getElementById("answer-input"),Zt=document.getElementById("student-work"),Is=document.getElementById("clear-btn"),Mu=document.getElementById("connection-status"),ku=document.getElementById("status-dot"),Ss=document.getElementById("math-problem"),Ts=document.getElementById("submit-btn"),kt=document.getElementById("chalkboard"),xt=document.getElementById("streak-num"),Ns=document.getElementById("next-btn"),Rs=document.getElementById("high-score-num");Rt(ee(te,".info/connected"),n=>{n.val()===!0&&(Mu.innerText="CLOUD_SYNC_ACTIVE",ku.style.background="#22c55e")});Rt(ee(te,"activeProblem"),n=>{const e=n.val();Ss&&(Ss.innerText=e||"Select a category below to start!")});Rt(ee(te,"worldRecord"),n=>{const e=n.val()||0;Rs&&(Rs.innerText=e)});Le&&Zt&&(Le.addEventListener("input",n=>{$e(ee(te,"currentWork"),n.target.value)}),Rt(ee(te,"currentWork"),n=>{Zt.innerText=n.val()||"READY_FOR_INPUT"}));Is&&Is.addEventListener("click",()=>{$e(ee(te,"currentWork"),""),Le.value=""});let $n="add";document.querySelectorAll(".cat-btn").forEach(n=>{n.addEventListener("click",e=>{$n=e.target.getAttribute("data-type"),ao($n)})});Ns&&Ns.addEventListener("click",()=>{ao($n)});function ao(n){let e=Math.floor(Math.random()*20)+1,t=Math.floor(Math.random()*10)+1,i,s;if(n==="add")i=`${e} + ${t} = ?`,s=e+t;else if(n==="sub")i=`${e+t} - ${t} = ?`,s=e;else if(n==="mult")i=`${e} × ${t} = ?`,s=e*t;else if(n==="alg"){let r=Math.floor(Math.random()*20)+2,o=Math.floor(Math.random()*5)+2,a=Math.floor(Math.random()*10)+2,l=o*r/a;if(l%1!==0){let c=Math.floor(Math.random()*20)+1,f=o*r+c;i=`Solve for x: ${o}x + ${c} = ${f}`,s=r}else i=`Solve for x: (${o}x) / ${a} = ${l}`,s=r}else if(n==="div"){let r=Math.floor(Math.random()*50)+10,o=Math.floor(Math.random()*20)+2;i=`Solve: ${r*o} ÷ ${o} = ?`,s=r}$e(ee(te,"activeProblem"),i),$e(ee(te,"correctAnswer"),s),$e(ee(te,"currentWork"),""),Le&&(Le.value="")}Ts&&Ts.addEventListener("click",()=>{const n=Le.value.trim(),e=Number(n);Rt(ee(te,"correctAnswer"),t=>{const i=Number(t.val());e===i&&n!==""?(Re+=1,xt&&(xt.innerText=Re),pu(Jt(ee(te),"worldRecord")).then(s=>{const r=s.val()||0;Re>r&&($e(ee(te,"worldRecord"),Re),console.log("🏆 NEW WORLD RECORD!"))}),Nu({particleCount:150,spread:70,origin:{y:.6},colors:["#22d3ee","#f8fafc","#334155"]}),kt.classList.add("success-glow"),Zt.style.color="var(--accent-cyan)",Re>=3&&(kt.style.boxShadow="0 0 50px var(--accent-cyan)"),setTimeout(()=>{alert(`CORRECT! 🚀 STREAK: ${Re}`),kt.classList.remove("success-glow"),Le.value=""},500)):(Re=0,xt&&(xt.innerText="0"),kt.style.boxShadow="none",Zt.style.color="var(--danger-red)",alert("TRY AGAIN... ❌ STREAK RESET"))},{onlyOnce:!0})});
