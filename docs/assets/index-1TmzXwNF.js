(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Po=()=>{};var Oi={};/**
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
 */const Os={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const g=function(n,e){if(!n)throw Qe(e)},Qe=function(n){return new Error("Firebase Database ("+Os.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Ls=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Oo=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},jn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),i.push(t[u],t[h],t[d],t[_])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ls(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Oo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new Lo;const d=r<<2|a>>4;if(i.push(d),c!==64){const _=a<<4&240|c>>2;if(i.push(_),h!==64){const m=c<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Lo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fs=function(n){const e=Ls(n);return jn.encodeByteArray(e,!0)},Ft=function(n){return Fs(n).replace(/\./g,"")},xn=function(n){try{return jn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Fo(n){return $s(void 0,n)}function $s(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!$o(t)||(n[t]=$s(n[t],e[t]));return n}function $o(n){return n!=="__proto__"}/**
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
 */function Bo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wo=()=>Bo().__FIREBASE_DEFAULTS__,Uo=()=>{if(typeof process>"u"||typeof Oi>"u")return;const n=Oi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ho=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xn(n[1]);return e&&JSON.parse(e)},Bs=()=>{try{return Po()||Wo()||Uo()||Ho()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vo=n=>{var e,t;return(t=(e=Bs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Go=n=>{const e=Vo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Ws=()=>{var n;return(n=Bs())===null||n===void 0?void 0:n.config};/**
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
 */class sn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Yn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zo(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function qo(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ft(JSON.stringify(t)),Ft(JSON.stringify(o)),""].join(".")}const ot={};function jo(){const n={prod:[],emulator:[]};for(const e of Object.keys(ot))ot[e]?n.emulator.push(e):n.prod.push(e);return n}function Yo(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Li=!1;function Ko(n,e){if(typeof window>"u"||typeof document>"u"||!Yn(window.location.host)||ot[n]===e||ot[n]||Li)return;ot[n]=e;function t(d){return`__firebase__banner__${d}`}const i="__firebase__banner",r=jo().prod.length>0;function o(){const d=document.getElementById(i);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function l(d,_){d.setAttribute("width","24"),d.setAttribute("id",_),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function c(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Li=!0,o()},d}function u(d,_){d.setAttribute("id",_),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function h(){const d=Yo(i),_=t("text"),m=document.getElementById(_)||document.createElement("span"),w=t("learnmore"),E=document.getElementById(w)||document.createElement("a"),K=t("preprendIcon"),se=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const re=d.element;a(re),u(E,w);const tt=c();l(se,K),re.append(se,m,E,tt),document.body.appendChild(re)}r?(m.innerText="Preview backend disconnected.",se.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(se.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,m.innerText="Preview backend running in this workspace."),m.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function Qo(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Us(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qo())}function Xo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jo(){return Os.NODE_ADMIN===!0}function Zo(){try{return typeof indexedDB=="object"}catch{return!1}}function ea(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const ta="FirebaseError";class It extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=ta,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?na(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new It(s,a,i)}}function na(n,e){return n.replace(ia,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const ia=/\{\$([^}]+)}/g;/**
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
 */function dt(n){return JSON.parse(n)}function H(n){return JSON.stringify(n)}/**
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
 */const Vs=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=dt(xn(r[0])||""),t=dt(xn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},sa=function(n){const e=Vs(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ra=function(n){const e=Vs(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ce(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function qe(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Fi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function $t(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Bt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if($i(r)&&$i(o)){if(!Bt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function $i(n){return n!==null&&typeof n=="object"}/**
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
 */function oa(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class aa{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Kn(n,e){return`${n} failed: ${e} argument `}/**
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
 */const la=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,g(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rn=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Xe(n){return n&&n._delegate?n._delegate:n}class ft{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Me="[DEFAULT]";/**
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
 */class ca{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new sn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ua(e))try{this.getOrInitializeService({instanceIdentifier:Me})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Me){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Me){return this.instances.has(e)}getOptions(e=Me){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ha(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Me){return this.component?this.component.multipleInstances?e:Me:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ha(n){return n===Me?void 0:n}function ua(n){return n.instantiationMode==="EAGER"}/**
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
 */class da{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ca(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const fa={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},pa=O.INFO,_a={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},ma=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=_a[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gs{constructor(e){this.name=e,this._logLevel=pa,this._logHandler=ma,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const ga=(n,e)=>e.some(t=>n instanceof t);let Bi,Wi;function ya(){return Bi||(Bi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function va(){return Wi||(Wi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zs=new WeakMap,An=new WeakMap,qs=new WeakMap,yn=new WeakMap,Qn=new WeakMap;function Ca(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(be(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&zs.set(t,n)}).catch(()=>{}),Qn.set(e,n),e}function Ea(n){if(An.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});An.set(n,e)}let Mn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return An.get(n);if(e==="objectStoreNames")return n.objectStoreNames||qs.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return be(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ba(n){Mn=n(Mn)}function wa(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(vn(this),e,...t);return qs.set(i,e.sort?e.sort():[e]),be(i)}:va().includes(n)?function(...e){return n.apply(vn(this),e),be(zs.get(this))}:function(...e){return be(n.apply(vn(this),e))}}function Ia(n){return typeof n=="function"?wa(n):(n instanceof IDBTransaction&&Ea(n),ga(n,ya())?new Proxy(n,Mn):n)}function be(n){if(n instanceof IDBRequest)return Ca(n);if(yn.has(n))return yn.get(n);const e=Ia(n);return e!==n&&(yn.set(n,e),Qn.set(e,n)),e}const vn=n=>Qn.get(n);function Sa(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=be(o);return i&&o.addEventListener("upgradeneeded",l=>{i(be(o.result),l.oldVersion,l.newVersion,be(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ta=["get","getKey","getAll","getAllKeys","count"],Na=["put","add","delete","clear"],Cn=new Map;function Ui(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Cn.get(e))return Cn.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Na.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ta.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Cn.set(e,r),r}ba(n=>({...n,get:(e,t,i)=>Ui(e,t)||n.get(e,t,i),has:(e,t)=>!!Ui(e,t)||n.has(e,t)}));/**
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
 */class Ra{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xa(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function xa(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kn="@firebase/app",Hi="0.13.2";/**
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
 */const ye=new Gs("@firebase/app"),Aa="@firebase/app-compat",Ma="@firebase/analytics-compat",ka="@firebase/analytics",Da="@firebase/app-check-compat",Pa="@firebase/app-check",Oa="@firebase/auth",La="@firebase/auth-compat",Fa="@firebase/database",$a="@firebase/data-connect",Ba="@firebase/database-compat",Wa="@firebase/functions",Ua="@firebase/functions-compat",Ha="@firebase/installations",Va="@firebase/installations-compat",Ga="@firebase/messaging",za="@firebase/messaging-compat",qa="@firebase/performance",ja="@firebase/performance-compat",Ya="@firebase/remote-config",Ka="@firebase/remote-config-compat",Qa="@firebase/storage",Xa="@firebase/storage-compat",Ja="@firebase/firestore",Za="@firebase/ai",el="@firebase/firestore-compat",tl="firebase",nl="11.10.0";/**
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
 */const Dn="[DEFAULT]",il={[kn]:"fire-core",[Aa]:"fire-core-compat",[ka]:"fire-analytics",[Ma]:"fire-analytics-compat",[Pa]:"fire-app-check",[Da]:"fire-app-check-compat",[Oa]:"fire-auth",[La]:"fire-auth-compat",[Fa]:"fire-rtdb",[$a]:"fire-data-connect",[Ba]:"fire-rtdb-compat",[Wa]:"fire-fn",[Ua]:"fire-fn-compat",[Ha]:"fire-iid",[Va]:"fire-iid-compat",[Ga]:"fire-fcm",[za]:"fire-fcm-compat",[qa]:"fire-perf",[ja]:"fire-perf-compat",[Ya]:"fire-rc",[Ka]:"fire-rc-compat",[Qa]:"fire-gcs",[Xa]:"fire-gcs-compat",[Ja]:"fire-fst",[el]:"fire-fst-compat",[Za]:"fire-vertex","fire-js":"fire-js",[tl]:"fire-js-all"};/**
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
 */const Wt=new Map,sl=new Map,Pn=new Map;function Vi(n,e){try{n.container.addComponent(e)}catch(t){ye.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ut(n){const e=n.name;if(Pn.has(e))return ye.debug(`There were multiple attempts to register component ${e}.`),!1;Pn.set(e,n);for(const t of Wt.values())Vi(t,n);for(const t of sl.values())Vi(t,n);return!0}function rl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ol(n){return n==null?!1:n.settings!==void 0}/**
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
 */const al={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},we=new Hs("app","Firebase",al);/**
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
 */class ll{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw we.create("app-deleted",{appName:this._name})}}/**
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
 */const cl=nl;function js(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Dn,automaticDataCollectionEnabled:!0},e),s=i.name;if(typeof s!="string"||!s)throw we.create("bad-app-name",{appName:String(s)});if(t||(t=Ws()),!t)throw we.create("no-options");const r=Wt.get(s);if(r){if(Bt(t,r.options)&&Bt(i,r.config))return r;throw we.create("duplicate-app",{appName:s})}const o=new da(s);for(const l of Pn.values())o.addComponent(l);const a=new ll(t,i,o);return Wt.set(s,a),a}function hl(n=Dn){const e=Wt.get(n);if(!e&&n===Dn&&Ws())return js();if(!e)throw we.create("no-app",{appName:n});return e}function He(n,e,t){var i;let s=(i=il[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ye.warn(a.join(" "));return}Ut(new ft(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ul="firebase-heartbeat-database",dl=1,pt="firebase-heartbeat-store";let En=null;function Ys(){return En||(En=Sa(ul,dl,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(pt)}catch(t){console.warn(t)}}}}).catch(n=>{throw we.create("idb-open",{originalErrorMessage:n.message})})),En}async function fl(n){try{const t=(await Ys()).transaction(pt),i=await t.objectStore(pt).get(Ks(n));return await t.done,i}catch(e){if(e instanceof It)ye.warn(e.message);else{const t=we.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ye.warn(t.message)}}}async function Gi(n,e){try{const i=(await Ys()).transaction(pt,"readwrite");await i.objectStore(pt).put(e,Ks(n)),await i.done}catch(t){if(t instanceof It)ye.warn(t.message);else{const i=we.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ye.warn(i.message)}}}function Ks(n){return`${n.name}!${n.options.appId}`}/**
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
 */const pl=1024,_l=30;class ml{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yl(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zi();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>_l){const o=vl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ye.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zi(),{heartbeatsToSend:i,unsentEntries:s}=gl(this._heartbeatsCache.heartbeats),r=Ft(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ye.warn(t),""}}}function zi(){return new Date().toISOString().substring(0,10)}function gl(n,e=pl){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),qi(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),qi(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class yl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zo()?ea().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fl(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qi(n){return Ft(JSON.stringify({version:2,heartbeats:n})).length}function vl(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function Cl(n){Ut(new ft("platform-logger",e=>new Ra(e),"PRIVATE")),Ut(new ft("heartbeat",e=>new ml(e),"PRIVATE")),He(kn,Hi,n),He(kn,Hi,"esm2017"),He("fire-js","")}Cl("");var El="firebase",bl="11.10.0";/**
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
 */He(El,bl,"app");var ji={};const Yi="@firebase/database",Ki="1.0.20";/**
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
 */let Qs="";function wl(n){Qs=n}/**
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
 */class Il{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),H(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:dt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Sl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ce(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Xs=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Il(e)}}catch{}return new Sl},De=Xs("localStorage"),Tl=Xs("sessionStorage");/**
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
 */const Ve=new Gs("@firebase/database"),Nl=function(){let n=1;return function(){return n++}}(),Js=function(n){const e=la(n),t=new aa;t.update(e);const i=t.digest();return jn.encodeByteArray(i)},St=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=St.apply(null,i):typeof i=="object"?e+=H(i):e+=i,e+=" "}return e};let at=null,Qi=!0;const Rl=function(n,e){g(!0,"Can't turn on custom loggers persistently."),Ve.logLevel=O.VERBOSE,at=Ve.log.bind(Ve)},Y=function(...n){if(Qi===!0&&(Qi=!1,at===null&&Tl.get("logging_enabled")===!0&&Rl()),at){const e=St.apply(null,n);at(e)}},Tt=function(n){return function(...e){Y(n,...e)}},On=function(...n){const e="FIREBASE INTERNAL ERROR: "+St(...n);Ve.error(e)},ve=function(...n){const e=`FIREBASE FATAL ERROR: ${St(...n)}`;throw Ve.error(e),new Error(e)},te=function(...n){const e="FIREBASE WARNING: "+St(...n);Ve.warn(e)},xl=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&te("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zs=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Al=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},je="[MIN_NAME]",Le="[MAX_NAME]",Je=function(n,e){if(n===e)return 0;if(n===je||e===Le)return-1;if(e===je||n===Le)return 1;{const t=Xi(n),i=Xi(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Ml=function(n,e){return n===e?0:n<e?-1:1},nt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+H(e))},Xn=function(n){if(typeof n!="object"||n===null)return H(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=H(e[i]),t+=":",t+=Xn(n[e[i]]);return t+="}",t},er=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function ne(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const tr=function(n){g(!Zs(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},kl=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Dl=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Pl(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Ol=new RegExp("^-?(0*)\\d{1,10}$"),Ll=-2147483648,Fl=2147483647,Xi=function(n){if(Ol.test(n)){const e=Number(n);if(e>=Ll&&e<=Fl)return e}return null},Ze=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw te("Exception was thrown by user callback.",t),e},Math.floor(0))}},$l=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},lt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Bl{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ol(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){te(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Wl{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Y("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',te(e)}}class Lt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Lt.OWNER="owner";/**
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
 */const Jn="5",nr="v",ir="s",sr="r",rr="f",or=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ar="ls",lr="p",Ln="ac",cr="websocket",hr="long_polling";/**
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
 */class ur{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=De.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&De.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ul(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function dr(n,e,t){g(typeof e=="string","typeof type must == string"),g(typeof t=="object","typeof params must == object");let i;if(e===cr)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===hr)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ul(n)&&(t.ns=n.namespace);const s=[];return ne(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Hl{constructor(){this.counters_={}}incrementCounter(e,t=1){Ce(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Fo(this.counters_)}}/**
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
 */const bn={},wn={};function Zn(n){const e=n.toString();return bn[e]||(bn[e]=new Hl),bn[e]}function Vl(n,e){const t=n.toString();return wn[t]||(wn[t]=e()),wn[t]}/**
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
 */class Gl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ze(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ji="start",zl="close",ql="pLPCommand",jl="pRTLPCB",fr="id",pr="pw",_r="ser",Yl="cb",Kl="seg",Ql="ts",Xl="d",Jl="dframe",mr=1870,gr=30,Zl=mr-gr,ec=25e3,tc=3e4;class Ue{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Tt(e),this.stats_=Zn(t),this.urlFn=l=>(this.appCheckToken&&(l[Ln]=this.appCheckToken),dr(t,hr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Gl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tc)),Al(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ei((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ji)this.id=a,this.password=l;else if(o===zl)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ji]="t",i[_r]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Yl]=this.scriptTagHolder.uniqueCallbackIdentifier),i[nr]=Jn,this.transportSessionId&&(i[ir]=this.transportSessionId),this.lastSessionId&&(i[ar]=this.lastSessionId),this.applicationId&&(i[lr]=this.applicationId),this.appCheckToken&&(i[Ln]=this.appCheckToken),typeof location<"u"&&location.hostname&&or.test(location.hostname)&&(i[sr]=rr);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ue.forceAllow_=!0}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){return Ue.forceAllow_?!0:!Ue.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kl()&&!Dl()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=H(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Fs(t),s=er(i,Zl);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Jl]="t",i[fr]=e,i[pr]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=H(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ei{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Nl(),window[ql+this.uniqueCallbackIdentifier]=e,window[jl+this.uniqueCallbackIdentifier]=t,this.myIFrame=ei.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Y("frame writing exception"),a.stack&&Y(a.stack),Y(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Y("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fr]=this.myID,e[pr]=this.myPW,e[_r]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gr+i.length<=mr;){const o=this.pendingSegs.shift();i=i+"&"+Kl+s+"="+o.seg+"&"+Ql+s+"="+o.ts+"&"+Xl+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(ec)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Y("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const nc=16384,ic=45e3;let Ht=null;typeof MozWebSocket<"u"?Ht=MozWebSocket:typeof WebSocket<"u"&&(Ht=WebSocket);class le{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Tt(this.connId),this.stats_=Zn(t),this.connURL=le.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[nr]=Jn,typeof location<"u"&&location.hostname&&or.test(location.hostname)&&(o[sr]=rr),t&&(o[ir]=t),i&&(o[ar]=i),s&&(o[Ln]=s),r&&(o[lr]=r),dr(e,cr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,De.set("previous_websocket_failure",!0);try{let i;Jo(),this.mySock=new Ht(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){le.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ht!==null&&!le.forceDisallow_}static previouslyFailed(){return De.isInMemoryStorage||De.get("previous_websocket_failure")===!0}markConnectionHealthy(){De.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=dt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=H(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=er(t,nc);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ic))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}le.responsesRequiredToBeHealthy=2;le.healthyTimeout=3e4;/**
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
 */class _t{static get ALL_TRANSPORTS(){return[Ue,le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=le&&le.isAvailable();let i=t&&!le.previouslyFailed();if(e.webSocketOnly&&(t||te("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[le];else{const s=this.transports_=[];for(const r of _t.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);_t.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_t.globalTransportInitialized_=!1;/**
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
 */const sc=6e4,rc=5e3,oc=10*1024,ac=100*1024,In="t",Zi="d",lc="s",es="r",cc="e",ts="o",ns="a",is="n",ss="p",hc="h";class uc{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Tt("c:"+this.id+":"),this.transportManager_=new _t(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=lt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ac?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>oc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(In in e){const t=e[In];t===ns?this.upgradeIfSecondaryHealthy_():t===es?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ts&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=nt("t",e),i=nt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ss,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ns,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:is,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=nt("t",e),i=nt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=nt(In,e);if(Zi in e){const i=e[Zi];if(t===hc){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===is){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===lc?this.onConnectionShutdown_(i):t===es?this.onReset_(i):t===cc?On("Server Error: "+i):t===ts?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):On("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Jn!==i&&te("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),lt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):lt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ss,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(De.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class yr{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class vr{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){g(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Vt extends vr{static getInstance(){return new Vt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Us()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return g(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const rs=32,os=768;class D{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function k(){return new D("")}function T(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Te(n){return n.pieces_.length-n.pieceNum_}function L(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new D(n.pieces_,e)}function Cr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function dc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Er(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function br(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new D(e,0)}function V(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof D)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new D(t,0)}function R(n){return n.pieceNum_>=n.pieces_.length}function Q(n,e){const t=T(n),i=T(e);if(t===null)return e;if(t===i)return Q(L(n),L(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ti(n,e){if(Te(n)!==Te(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ce(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Te(n)>Te(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class fc{constructor(e,t){this.errorPrefix_=t,this.parts_=Er(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=rn(this.parts_[i]);wr(this)}}function pc(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=rn(e),wr(n)}function _c(n){const e=n.parts_.pop();n.byteLength_-=rn(e),n.parts_.length>0&&(n.byteLength_-=1)}function wr(n){if(n.byteLength_>os)throw new Error(n.errorPrefix_+"has a key path longer than "+os+" bytes ("+n.byteLength_+").");if(n.parts_.length>rs)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rs+") or object contains a cycle "+ke(n))}function ke(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class ni extends vr{static getInstance(){return new ni}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const it=1e3,mc=60*5*1e3,as=30*1e3,gc=1.3,yc=3e4,vc="server_kill",ls=3;class me extends yr{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=me.nextPersistentConnectionId_++,this.log_=Tt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=it,this.maxReconnectDelay_=mc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ni.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(H(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new sn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;me.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ce(e,"w")){const i=qe(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();te(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ra(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=as)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=sa(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+H(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):On("Unrecognized action received from server: "+H(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=it,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=it,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yc&&(this.reconnectDelay_=it),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+me.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){g(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Y("getToken() completed but was canceled"):(Y("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new uc(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,_=>{te(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(vc)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&te(h),l())}}}interrupt(e){Y("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Y("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fi(this.interruptReasons_)&&(this.reconnectDelay_=it,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Xn(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new D(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Y("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ls&&(this.reconnectDelay_=as,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Y("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ls&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Qs.replace(/\./g,"-")]=1,Us()?e["framework.cordova"]=1:Xo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vt.getInstance().currentlyOnline();return Fi(this.interruptReasons_)&&e}}me.nextPersistentConnectionId_=0;me.nextConnectionId_=0;/**
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
 */class N{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new N(e,t)}}/**
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
 */class on{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new N(je,e),s=new N(je,t);return this.compare(i,s)!==0}minPost(){return N.MIN}}/**
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
 */let kt;class Ir extends on{static get __EMPTY_NODE(){return kt}static set __EMPTY_NODE(e){kt=e}compare(e,t){return Je(e.name,t.name)}isDefinedOn(e){throw Qe("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return N.MIN}maxPost(){return new N(Le,kt)}makePost(e,t){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new N(e,kt)}toString(){return".key"}}const Ge=new Ir;/**
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
 */class Dt{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class z{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??z.RED,this.left=s??ee.EMPTY_NODE,this.right=r??ee.EMPTY_NODE}copy(e,t,i,s,r){return new z(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ee.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ee.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}z.RED=!0;z.BLACK=!1;class Cc{copy(e,t,i,s,r){return this}insert(e,t,i){return new z(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ee{constructor(e,t=ee.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ee(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,z.BLACK,null,null))}remove(e){return new ee(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,z.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Dt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Dt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Dt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Dt(this.root_,null,this.comparator_,!0,e)}}ee.EMPTY_NODE=new Cc;/**
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
 */function Ec(n,e){return Je(n.name,e.name)}function ii(n,e){return Je(n,e)}/**
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
 */let Fn;function bc(n){Fn=n}const Sr=function(n){return typeof n=="number"?"number:"+tr(n):"string:"+n},Tr=function(n){if(n.isLeafNode()){const e=n.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ce(e,".sv"),"Priority must be a string or number.")}else g(n===Fn||n.isEmpty(),"priority of unexpected type.");g(n===Fn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let cs;class G{static set __childrenNodeConstructor(e){cs=e}static get __childrenNodeConstructor(){return cs}constructor(e,t=G.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Tr(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new G(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:G.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return R(e)?this:T(e)===".priority"?this.priorityNode_:G.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:G.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=T(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(g(i!==".priority"||Te(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,G.__childrenNodeConstructor.EMPTY_NODE.updateChild(L(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Sr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=tr(this.value_):e+=this.value_,this.lazyHash_=Js(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===G.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof G.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=G.VALUE_TYPE_ORDER.indexOf(t),r=G.VALUE_TYPE_ORDER.indexOf(i);return g(s>=0,"Unknown leaf type: "+t),g(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}G.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Nr,Rr;function wc(n){Nr=n}function Ic(n){Rr=n}class Sc extends on{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Je(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return N.MIN}maxPost(){return new N(Le,new G("[PRIORITY-POST]",Rr))}makePost(e,t){const i=Nr(e);return new N(t,new G("[PRIORITY-POST]",i))}toString(){return".priority"}}const U=new Sc;/**
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
 */const Tc=Math.log(2);class Nc{constructor(e){const t=r=>parseInt(Math.log(r)/Tc,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Gt=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new z(d,h.node,z.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=s(l,_),w=s(_+1,c);return h=n[_],d=t?t(h):h,new z(d,h.node,z.BLACK,m,w)}},r=function(l){let c=null,u=null,h=n.length;const d=function(m,w){const E=h-m,K=h;h-=m;const se=s(E+1,K),re=n[E],tt=t?t(re):re;_(new z(tt,re.node,w,null,se))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const w=l.nextBitIsOne(),E=Math.pow(2,l.count-(m+1));w?d(E,z.BLACK):(d(E,z.BLACK),d(E,z.RED))}return u},o=new Nc(n.length),a=r(o);return new ee(i||e,a)};/**
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
 */let Sn;const We={};class _e{static get Default(){return g(We&&U,"ChildrenNode.ts has not been loaded"),Sn=Sn||new _e({".priority":We},{".priority":U}),Sn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=qe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ee?t:null}hasIndex(e){return Ce(this.indexSet_,e.toString())}addIndex(e,t){g(e!==Ge,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(N.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Gt(i,e.getCompare()):a=We;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new _e(u,c)}addToIndexes(e,t){const i=$t(this.indexes_,(s,r)=>{const o=qe(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),s===We)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(N.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Gt(a,o.getCompare())}else return We;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new N(e.name,a))),l.insert(e,e.node)}});return new _e(i,this.indexSet_)}removeFromIndexes(e,t){const i=$t(this.indexes_,s=>{if(s===We)return s;{const r=t.get(e.name);return r?s.remove(new N(e.name,r)):s}});return new _e(i,this.indexSet_)}}/**
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
 */let st;class v{static get EMPTY_NODE(){return st||(st=new v(new ee(ii),null,_e.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Tr(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||st}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?st:t}}getChild(e){const t=T(e);return t===null?this:this.getImmediateChild(t).getChild(L(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(g(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new N(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?st:this.priorityNode_;return new v(s,o,r)}}updateChild(e,t){const i=T(e);if(i===null)return t;{g(T(e)!==".priority"||Te(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(L(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(U,(o,a)=>{t[o]=a.val(e),i++,r&&v.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Sr(this.getPriority().val())+":"),this.forEachChild(U,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Js(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new N(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new N(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new N(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,N.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,N.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Nt?-1:0}withIndex(e){if(e===Ge||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ge||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(U),s=t.getIterator(U);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ge?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Rc extends v{constructor(){super(new ee(ii),v.EMPTY_NODE,_e.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const Nt=new Rc;Object.defineProperties(N,{MIN:{value:new N(je,v.EMPTY_NODE)},MAX:{value:new N(Le,Nt)}});Ir.__EMPTY_NODE=v.EMPTY_NODE;G.__childrenNodeConstructor=v;bc(Nt);Ic(Nt);/**
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
 */const xc=!0;function q(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new G(t,q(e))}if(!(n instanceof Array)&&xc){const t=[];let i=!1;if(ne(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=q(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new N(o,l)))}}),t.length===0)return v.EMPTY_NODE;const r=Gt(t,Ec,o=>o.name,ii);if(i){const o=Gt(t,U.getCompare());return new v(r,q(e),new _e({".priority":o},{".priority":U}))}else return new v(r,q(e),_e.Default)}else{let t=v.EMPTY_NODE;return ne(n,(i,s)=>{if(Ce(n,i)&&i.substring(0,1)!=="."){const r=q(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(q(e))}}wc(q);/**
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
 */class Ac extends on{constructor(e){super(),this.indexPath_=e,g(!R(e)&&T(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Je(e.name,t.name):r}makePost(e,t){const i=q(e),s=v.EMPTY_NODE.updateChild(this.indexPath_,i);return new N(t,s)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,Nt);return new N(Le,e)}toString(){return Er(this.indexPath_,0).join("/")}}/**
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
 */class Mc extends on{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Je(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return N.MIN}maxPost(){return N.MAX}makePost(e,t){const i=q(e);return new N(t,i)}toString(){return".value"}}const kc=new Mc;/**
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
 */function xr(n){return{type:"value",snapshotNode:n}}function Ye(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function mt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function gt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Dc(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class si{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(mt(t,a)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ye(t,i)):o.trackChildChange(gt(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(U,(s,r)=>{t.hasChild(s)||i.trackChildChange(mt(s,r))}),t.isLeafNode()||t.forEachChild(U,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(gt(s,r,o))}else i.trackChildChange(Ye(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class yt{constructor(e){this.indexedFilter_=new si(e.getIndex()),this.index_=e.getIndex(),this.startPost_=yt.getStartPost_(e),this.endPost_=yt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new N(t,i))||(i=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=v.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(U,(o,a)=>{r.matches(new N(o,a))||(s=s.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Pc{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new yt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new N(t,i))||(i=v.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;g(a.numChildren()===this.limit_,"");const l=new N(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!i.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(gt(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(mt(t,h));const w=a.updateImmediateChild(t,v.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Ye(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(mt(c.name,c.node)),r.trackChildChange(Ye(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,v.EMPTY_NODE)):e}}/**
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
 */class ri{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=U}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:je}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Le}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===U}copy(){const e=new ri;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Oc(n){return n.loadsAllData()?new si(n.getIndex()):n.hasLimit()?new Pc(n):new yt(n)}function hs(n){const e={};if(n.isDefault())return e;let t;if(n.index_===U?t="$priority":n.index_===kc?t="$value":n.index_===Ge?t="$key":(g(n.index_ instanceof Ac,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=H(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=H(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+H(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=H(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+H(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function us(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==U&&(e.i=n.index_.toString()),e}/**
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
 */class zt extends yr{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Tt("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=zt.getListenId_(e,i),a={};this.listens_[o]=a;const l=hs(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),qe(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=zt.getListenId_(e,t);delete this.listens_[i]}get(e){const t=hs(e._queryParams),i=e._path.toString(),s=new sn;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oa(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=dt(a.responseText)}catch{te("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&te("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Lc{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function qt(){return{value:null,children:new Map}}function Ar(n,e,t){if(R(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=T(e);n.children.has(i)||n.children.set(i,qt());const s=n.children.get(i);e=L(e),Ar(s,e,t)}}function $n(n,e,t){n.value!==null?t(e,n.value):Fc(n,(i,s)=>{const r=new D(e.toString()+"/"+i);$n(s,r,t)})}function Fc(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class $c{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ne(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const ds=10*1e3,Bc=30*1e3,Wc=5*60*1e3;class Uc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new $c(e);const i=ds+(Bc-ds)*Math.random();lt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;ne(e,(s,r)=>{r>0&&Ce(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),lt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Wc))}}/**
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
 */var he;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(he||(he={}));function Mr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function oi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ai(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class jt{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=he.ACK_USER_WRITE,this.source=Mr()}operationForChild(e){if(R(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new D(e));return new jt(k(),t,this.revert)}}else return g(T(this.path)===e,"operationForChild called for unrelated child."),new jt(L(this.path),this.affectedTree,this.revert)}}/**
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
 */class vt{constructor(e,t){this.source=e,this.path=t,this.type=he.LISTEN_COMPLETE}operationForChild(e){return R(this.path)?new vt(this.source,k()):new vt(this.source,L(this.path))}}/**
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
 */class Fe{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=he.OVERWRITE}operationForChild(e){return R(this.path)?new Fe(this.source,k(),this.snap.getImmediateChild(e)):new Fe(this.source,L(this.path),this.snap)}}/**
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
 */class Ct{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=he.MERGE}operationForChild(e){if(R(this.path)){const t=this.children.subtree(new D(e));return t.isEmpty()?null:t.value?new Fe(this.source,k(),t.value):new Ct(this.source,k(),t)}else return g(T(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ct(this.source,L(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ne{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(R(e))return this.isFullyInitialized()&&!this.filtered_;const t=T(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Hc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Vc(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Dc(o.childName,o.snapshotNode))}),rt(n,s,"child_removed",e,i,t),rt(n,s,"child_added",e,i,t),rt(n,s,"child_moved",r,i,t),rt(n,s,"child_changed",e,i,t),rt(n,s,"value",e,i,t),s}function rt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>zc(n,a,l)),o.forEach(a=>{const l=Gc(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Gc(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function zc(n,e,t){if(e.childName==null||t.childName==null)throw Qe("Should only compare child_ events.");const i=new N(e.childName,e.snapshotNode),s=new N(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function an(n,e){return{eventCache:n,serverCache:e}}function ct(n,e,t,i){return an(new Ne(e,t,i),n.serverCache)}function kr(n,e,t,i){return an(n.eventCache,new Ne(e,t,i))}function Yt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function $e(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Tn;const qc=()=>(Tn||(Tn=new ee(Ml)),Tn);class ${static fromObject(e){let t=new $(null);return ne(e,(i,s)=>{t=t.set(new D(i),s)}),t}constructor(e,t=qc()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:k(),value:this.value};if(R(e))return null;{const i=T(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(L(e),t);return r!=null?{path:V(new D(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(R(e))return this;{const t=T(e),i=this.children.get(t);return i!==null?i.subtree(L(e)):new $(null)}}set(e,t){if(R(e))return new $(t,this.children);{const i=T(e),r=(this.children.get(i)||new $(null)).set(L(e),t),o=this.children.insert(i,r);return new $(this.value,o)}}remove(e){if(R(e))return this.children.isEmpty()?new $(null):new $(null,this.children);{const t=T(e),i=this.children.get(t);if(i){const s=i.remove(L(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new $(null):new $(this.value,r)}else return this}}get(e){if(R(e))return this.value;{const t=T(e),i=this.children.get(t);return i?i.get(L(e)):null}}setTree(e,t){if(R(e))return t;{const i=T(e),r=(this.children.get(i)||new $(null)).setTree(L(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new $(this.value,o)}}fold(e){return this.fold_(k(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(V(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,k(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(R(e))return null;{const r=T(e),o=this.children.get(r);return o?o.findOnPath_(L(e),V(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,k(),t)}foreachOnPath_(e,t,i){if(R(e))return this;{this.value&&i(t,this.value);const s=T(e),r=this.children.get(s);return r?r.foreachOnPath_(L(e),V(t,s),i):new $(null)}}foreach(e){this.foreach_(k(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(V(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class ue{constructor(e){this.writeTree_=e}static empty(){return new ue(new $(null))}}function ht(n,e,t){if(R(e))return new ue(new $(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Q(s,e);return r=r.updateChild(o,t),new ue(n.writeTree_.set(s,r))}else{const s=new $(t),r=n.writeTree_.setTree(e,s);return new ue(r)}}}function fs(n,e,t){let i=n;return ne(t,(s,r)=>{i=ht(i,V(e,s),r)}),i}function ps(n,e){if(R(e))return ue.empty();{const t=n.writeTree_.setTree(e,new $(null));return new ue(t)}}function Bn(n,e){return Be(n,e)!=null}function Be(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Q(t.path,e)):null}function _s(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(U,(i,s)=>{e.push(new N(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new N(i,s.value))}),e}function Ie(n,e){if(R(e))return n;{const t=Be(n,e);return t!=null?new ue(new $(t)):new ue(n.writeTree_.subtree(e))}}function Wn(n){return n.writeTree_.isEmpty()}function Ke(n,e){return Dr(k(),n.writeTree_,e)}function Dr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Dr(V(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(V(n,".priority"),i)),t}}/**
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
 */function ln(n,e){return Fr(e,n)}function jc(n,e,t,i,s){g(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=ht(n.visibleWrites,e,t)),n.lastWriteId=i}function Yc(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Kc(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);g(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Qc(a,i.path)?s=!1:ce(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Xc(n),!0;if(i.snap)n.visibleWrites=ps(n.visibleWrites,i.path);else{const a=i.children;ne(a,l=>{n.visibleWrites=ps(n.visibleWrites,V(i.path,l))})}return!0}else return!1}function Qc(n,e){if(n.snap)return ce(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ce(V(n.path,t),e))return!0;return!1}function Xc(n){n.visibleWrites=Pr(n.allWrites,Jc,k()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Jc(n){return n.visible}function Pr(n,e,t){let i=ue.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)ce(t,o)?(a=Q(t,o),i=ht(i,a,r.snap)):ce(o,t)&&(a=Q(o,t),i=ht(i,k(),r.snap.getChild(a)));else if(r.children){if(ce(t,o))a=Q(t,o),i=fs(i,a,r.children);else if(ce(o,t))if(a=Q(o,t),R(a))i=fs(i,k(),r.children);else{const l=qe(r.children,T(a));if(l){const c=l.getChild(L(a));i=ht(i,k(),c)}}}else throw Qe("WriteRecord should have .snap or .children")}}return i}function Or(n,e,t,i,s){if(!i&&!s){const r=Be(n.visibleWrites,e);if(r!=null)return r;{const o=Ie(n.visibleWrites,e);if(Wn(o))return t;if(t==null&&!Bn(o,k()))return null;{const a=t||v.EMPTY_NODE;return Ke(o,a)}}}else{const r=Ie(n.visibleWrites,e);if(!s&&Wn(r))return t;if(!s&&t==null&&!Bn(r,k()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ce(c.path,e)||ce(e,c.path))},a=Pr(n.allWrites,o,e),l=t||v.EMPTY_NODE;return Ke(a,l)}}}function Zc(n,e,t){let i=v.EMPTY_NODE;const s=Be(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(U,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ie(n.visibleWrites,e);return t.forEachChild(U,(o,a)=>{const l=Ke(Ie(r,new D(o)),a);i=i.updateImmediateChild(o,l)}),_s(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ie(n.visibleWrites,e);return _s(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function eh(n,e,t,i,s){g(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=V(e,t);if(Bn(n.visibleWrites,r))return null;{const o=Ie(n.visibleWrites,r);return Wn(o)?s.getChild(t):Ke(o,s.getChild(t))}}function th(n,e,t,i){const s=V(e,t),r=Be(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ie(n.visibleWrites,s);return Ke(o,i.getNode().getImmediateChild(t))}else return null}function nh(n,e){return Be(n.visibleWrites,e)}function ih(n,e,t,i,s,r,o){let a;const l=Ie(n.visibleWrites,e),c=Be(l,k());if(c!=null)a=c;else if(t!=null)a=Ke(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let _=d.getNext();for(;_&&u.length<s;)h(_,i)!==0&&u.push(_),_=d.getNext();return u}else return[]}function sh(){return{visibleWrites:ue.empty(),allWrites:[],lastWriteId:-1}}function Kt(n,e,t,i){return Or(n.writeTree,n.treePath,e,t,i)}function li(n,e){return Zc(n.writeTree,n.treePath,e)}function ms(n,e,t,i){return eh(n.writeTree,n.treePath,e,t,i)}function Qt(n,e){return nh(n.writeTree,V(n.treePath,e))}function rh(n,e,t,i,s,r){return ih(n.writeTree,n.treePath,e,t,i,s,r)}function ci(n,e,t){return th(n.writeTree,n.treePath,e,t)}function Lr(n,e){return Fr(V(n.treePath,e),n.writeTree)}function Fr(n,e){return{treePath:n,writeTree:e}}/**
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
 */class oh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;g(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),g(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,gt(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,mt(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Ye(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,gt(i,e.snapshotNode,s.oldSnap));else throw Qe("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ah{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const $r=new ah;class hi{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ne(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ci(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$e(this.viewCache_),r=rh(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function lh(n){return{filter:n}}function ch(n,e){g(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function hh(n,e,t,i,s){const r=new oh;let o,a;if(t.type===he.OVERWRITE){const c=t;c.source.fromUser?o=Un(n,e,c.path,c.snap,i,s,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!R(c.path),o=Xt(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===he.MERGE){const c=t;c.source.fromUser?o=dh(n,e,c.path,c.children,i,s,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Hn(n,e,c.path,c.children,i,s,a,r))}else if(t.type===he.ACK_USER_WRITE){const c=t;c.revert?o=_h(n,e,c.path,i,s,r):o=fh(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===he.LISTEN_COMPLETE)o=ph(n,e,t.path,i,r);else throw Qe("Unknown operation type: "+t.type);const l=r.getChanges();return uh(e,o,l),{viewCache:o,changes:l}}function uh(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Yt(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(xr(Yt(e)))}}function Br(n,e,t,i,s,r){const o=e.eventCache;if(Qt(i,t)!=null)return e;{let a,l;if(R(t))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=$e(e),u=c instanceof v?c:v.EMPTY_NODE,h=li(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Kt(i,$e(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=T(t);if(c===".priority"){g(Te(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ms(i,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=L(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=ms(i,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=ci(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return ct(e,a,o.isFullyInitialized()||R(t),n.filter.filtersNodes())}}function Xt(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(R(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),_,null)}else{const _=T(t);if(!l.isCompleteForPath(t)&&Te(t)>1)return e;const m=L(t),E=l.getNode().getImmediateChild(_).updateChild(m,i);_===".priority"?c=u.updatePriority(l.getNode(),E):c=u.updateChild(l.getNode(),_,E,m,$r,null)}const h=kr(e,c,l.isFullyInitialized()||R(t),u.filtersNodes()),d=new hi(s,h,r);return Br(n,h,t,s,d,a)}function Un(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new hi(s,e,r);if(R(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ct(e,c,!0,n.filter.filtersNodes());else{const h=T(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=ct(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=L(t),_=a.getNode().getImmediateChild(h);let m;if(R(d))m=i;else{const w=u.getCompleteChild(h);w!=null?Cr(d)===".priority"&&w.getChild(br(d)).isEmpty()?m=w:m=w.updateChild(d,i):m=v.EMPTY_NODE}if(_.equals(m))l=e;else{const w=n.filter.updateChild(a.getNode(),h,m,d,u,o);l=ct(e,w,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function gs(n,e){return n.eventCache.isCompleteForChild(e)}function dh(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=V(t,l);gs(e,T(u))&&(a=Un(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=V(t,l);gs(e,T(u))||(a=Un(n,a,u,c,s,r,o))}),a}function ys(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Hn(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;R(t)?c=i:c=new $(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=ys(n,_,d);l=Xt(n,l,new D(h),m,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),w=ys(n,m,d);l=Xt(n,l,new D(h),w,s,r,o,a)}}),l}function fh(n,e,t,i,s,r,o){if(Qt(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(R(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Xt(n,e,t,l.getNode().getChild(t),s,r,a,o);if(R(t)){let c=new $(null);return l.getNode().forEachChild(Ge,(u,h)=>{c=c.set(new D(u),h)}),Hn(n,e,t,c,s,r,a,o)}else return e}else{let c=new $(null);return i.foreach((u,h)=>{const d=V(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Hn(n,e,t,c,s,r,a,o)}}function ph(n,e,t,i,s){const r=e.serverCache,o=kr(e,r.getNode(),r.isFullyInitialized()||R(t),r.isFiltered());return Br(n,o,t,i,$r,s)}function _h(n,e,t,i,s,r){let o;if(Qt(i,t)!=null)return e;{const a=new hi(i,e,s),l=e.eventCache.getNode();let c;if(R(t)||T(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Kt(i,$e(e));else{const h=e.serverCache.getNode();g(h instanceof v,"serverChildren would be complete if leaf node"),u=li(i,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=T(t);let h=ci(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,L(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,v.EMPTY_NODE,L(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Kt(i,$e(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Qt(i,k())!=null,ct(e,c,o,n.filter.filtersNodes())}}/**
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
 */class mh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new si(i.getIndex()),r=Oc(i);this.processor_=lh(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(v.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),u=new Ne(l,o.isFullyInitialized(),s.filtersNodes()),h=new Ne(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=an(h,u),this.eventGenerator_=new Hc(this.query_)}get query(){return this.query_}}function gh(n){return n.viewCache_.serverCache.getNode()}function yh(n){return Yt(n.viewCache_)}function vh(n,e){const t=$e(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!R(e)&&!t.getImmediateChild(T(e)).isEmpty())?t.getChild(e):null}function vs(n){return n.eventRegistrations_.length===0}function Ch(n,e){n.eventRegistrations_.push(e)}function Cs(n,e,t){const i=[];if(t){g(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Es(n,e,t,i){e.type===he.MERGE&&e.source.queryId!==null&&(g($e(n.viewCache_),"We should always have a full cache before handling merges"),g(Yt(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=hh(n.processor_,s,e,t,i);return ch(n.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Wr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Eh(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(U,(r,o)=>{i.push(Ye(r,o))}),t.isFullyInitialized()&&i.push(xr(t.getNode())),Wr(n,i,t.getNode(),e)}function Wr(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Vc(n.eventGenerator_,e,t,s)}/**
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
 */let Jt;class Ur{constructor(){this.views=new Map}}function bh(n){g(!Jt,"__referenceConstructor has already been defined"),Jt=n}function wh(){return g(Jt,"Reference.ts has not been loaded"),Jt}function Ih(n){return n.views.size===0}function ui(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return g(r!=null,"SyncTree gave us an op for an invalid query."),Es(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Es(o,e,t,i));return r}}function Hr(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Kt(t,s?i:null),l=!1;a?l=!0:i instanceof v?(a=li(t,i),l=!1):(a=v.EMPTY_NODE,l=!1);const c=an(new Ne(a,l,!1),new Ne(i,s,!1));return new mh(e,c)}return o}function Sh(n,e,t,i,s,r){const o=Hr(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Ch(o,t),Eh(o,t)}function Th(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Re(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Cs(c,t,i)),vs(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Cs(l,t,i)),vs(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Re(n)&&r.push(new(wh())(e._repo,e._path)),{removed:r,events:o}}function Vr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Se(n,e){let t=null;for(const i of n.views.values())t=t||vh(i,e);return t}function Gr(n,e){if(e._queryParams.loadsAllData())return cn(n);{const i=e._queryIdentifier;return n.views.get(i)}}function zr(n,e){return Gr(n,e)!=null}function Re(n){return cn(n)!=null}function cn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Zt;function Nh(n){g(!Zt,"__referenceConstructor has already been defined"),Zt=n}function Rh(){return g(Zt,"Reference.ts has not been loaded"),Zt}let xh=1;class bs{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $(null),this.pendingWriteTree_=sh(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qr(n,e,t,i,s){return jc(n.pendingWriteTree_,e,t,i,s),s?xt(n,new Fe(Mr(),e,t)):[]}function Pe(n,e,t=!1){const i=Yc(n.pendingWriteTree_,e);if(Kc(n.pendingWriteTree_,e)){let r=new $(null);return i.snap!=null?r=r.set(k(),!0):ne(i.children,o=>{r=r.set(new D(o),!0)}),xt(n,new jt(i.path,r,t))}else return[]}function Rt(n,e,t){return xt(n,new Fe(oi(),e,t))}function Ah(n,e,t){const i=$.fromObject(t);return xt(n,new Ct(oi(),e,i))}function Mh(n,e){return xt(n,new vt(oi(),e))}function kh(n,e,t){const i=fi(n,t);if(i){const s=pi(i),r=s.path,o=s.queryId,a=Q(r,e),l=new vt(ai(o),a);return _i(n,r,l)}else return[]}function en(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||zr(o,e))){const l=Th(o,e,t,i);Ih(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,_)=>Re(_));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=Oh(d);for(let m=0;m<_.length;++m){const w=_[m],E=w.query,K=Qr(n,w);n.listenProvider_.startListening(ut(E),Et(n,E),K.hashFn,K.onComplete)}}}!h&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(ut(e),null):c.forEach(d=>{const _=n.queryToTagMap.get(hn(d));n.listenProvider_.stopListening(ut(d),_)}))}Lh(n,c)}return a}function jr(n,e,t,i){const s=fi(n,i);if(s!=null){const r=pi(s),o=r.path,a=r.queryId,l=Q(o,e),c=new Fe(ai(a),l,t);return _i(n,o,c)}else return[]}function Dh(n,e,t,i){const s=fi(n,i);if(s){const r=pi(s),o=r.path,a=r.queryId,l=Q(o,e),c=$.fromObject(t),u=new Ct(ai(a),l,c);return _i(n,o,u)}else return[]}function Vn(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,_)=>{const m=Q(d,s);r=r||Se(_,m),o=o||Re(_)});let a=n.syncPointTree_.get(s);a?(o=o||Re(a),r=r||Se(a,k())):(a=new Ur,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((_,m)=>{const w=Se(m,k());w&&(r=r.updateImmediateChild(_,w))}));const c=zr(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=hn(e);g(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=Fh();n.queryToTagMap.set(d,_),n.tagToQueryMap.set(_,d)}const u=ln(n.pendingWriteTree_,s);let h=Sh(a,e,t,u,r,l);if(!c&&!o&&!i){const d=Gr(a,e);h=h.concat($h(n,e,d))}return h}function di(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Q(o,e),c=Se(a,l);if(c)return c});return Or(s,e,r,t,!0)}function Ph(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=Q(c,t);i=i||Se(u,h)});let s=n.syncPointTree_.get(t);s?i=i||Se(s,k()):(s=new Ur,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new Ne(i,!0,!1):null,a=ln(n.pendingWriteTree_,e._path),l=Hr(s,e,a,r?o.getNode():v.EMPTY_NODE,r);return yh(l)}function xt(n,e){return Yr(e,n.syncPointTree_,null,ln(n.pendingWriteTree_,k()))}function Yr(n,e,t,i){if(R(n.path))return Kr(n,e,t,i);{const s=e.get(k());t==null&&s!=null&&(t=Se(s,k()));let r=[];const o=T(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=Lr(i,o);r=r.concat(Yr(a,l,c,u))}return s&&(r=r.concat(ui(s,n,i,t))),r}}function Kr(n,e,t,i){const s=e.get(k());t==null&&s!=null&&(t=Se(s,k()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Lr(i,o),u=n.operationForChild(o);u&&(r=r.concat(Kr(u,a,l,c)))}),s&&(r=r.concat(ui(s,n,i,t))),r}function Qr(n,e){const t=e.query,i=Et(n,t);return{hashFn:()=>(gh(e)||v.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?kh(n,t._path,i):Mh(n,t._path);{const r=Pl(s,t);return en(n,t,null,r)}}}}function Et(n,e){const t=hn(e);return n.queryToTagMap.get(t)}function hn(n){return n._path.toString()+"$"+n._queryIdentifier}function fi(n,e){return n.tagToQueryMap.get(e)}function pi(n){const e=n.indexOf("$");return g(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new D(n.substr(0,e))}}function _i(n,e,t){const i=n.syncPointTree_.get(e);g(i,"Missing sync point for query tag that we're tracking");const s=ln(n.pendingWriteTree_,e);return ui(i,t,s,null)}function Oh(n){return n.fold((e,t,i)=>{if(t&&Re(t))return[cn(t)];{let s=[];return t&&(s=Vr(t)),ne(i,(r,o)=>{s=s.concat(o)}),s}})}function ut(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Rh())(n._repo,n._path):n}function Lh(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=hn(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Fh(){return xh++}function $h(n,e,t){const i=e._path,s=Et(n,e),r=Qr(n,t),o=n.listenProvider_.startListening(ut(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)g(!Re(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!R(c)&&u&&Re(u))return[cn(u).query];{let d=[];return u&&(d=d.concat(Vr(u).map(_=>_.query))),ne(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(ut(u),Et(n,u))}}return o}/**
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
 */class mi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new mi(t)}node(){return this.node_}}class gi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=V(this.path_,e);return new gi(this.syncTree_,t)}node(){return di(this.syncTree_,this.path_)}}const Bh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ws=function(n,e,t){if(!n||typeof n!="object")return n;if(g(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Wh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Uh(n[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Wh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:g(!1,"Unexpected server value: "+n)}},Uh=function(n,e,t){n.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&g(!1,"Unexpected increment value: "+i);const s=e.node();if(g(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Hh=function(n,e,t,i){return yi(e,new gi(t,n),i)},Xr=function(n,e,t){return yi(n,new mi(e),t)};function yi(n,e,t){const i=n.getPriority().val(),s=ws(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=ws(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new G(a,q(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new G(s))),o.forEachChild(U,(a,l)=>{const c=yi(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class vi{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Ci(n,e){let t=e instanceof D?e:new D(e),i=n,s=T(t);for(;s!==null;){const r=qe(i.node.children,s)||{children:{},childCount:0};i=new vi(s,i,r),t=L(t),s=T(t)}return i}function et(n){return n.node.value}function Jr(n,e){n.node.value=e,Gn(n)}function Zr(n){return n.node.childCount>0}function Vh(n){return et(n)===void 0&&!Zr(n)}function un(n,e){ne(n.node.children,(t,i)=>{e(new vi(t,n,i))})}function eo(n,e,t,i){t&&e(n),un(n,s=>{eo(s,e,!0)})}function Gh(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function At(n){return new D(n.parent===null?n.name:At(n.parent)+"/"+n.name)}function Gn(n){n.parent!==null&&zh(n.parent,n.name,n)}function zh(n,e,t){const i=Vh(t),s=Ce(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Gn(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Gn(n))}/**
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
 */const qh=/[\[\].#$\/\u0000-\u001F\u007F]/,jh=/[\[\].#$\u0000-\u001F\u007F]/,Nn=10*1024*1024,to=function(n){return typeof n=="string"&&n.length!==0&&!qh.test(n)},no=function(n){return typeof n=="string"&&n.length!==0&&!jh.test(n)},Yh=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),no(n)},Kh=function(n,e,t,i){Ei(Kn(n,"value"),e,t)},Ei=function(n,e,t){const i=t instanceof D?new fc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ke(i));if(typeof e=="function")throw new Error(n+"contains a function "+ke(i)+" with contents = "+e.toString());if(Zs(e))throw new Error(n+"contains "+e.toString()+" "+ke(i));if(typeof e=="string"&&e.length>Nn/3&&rn(e)>Nn)throw new Error(n+"contains a string greater than "+Nn+" utf8 bytes "+ke(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ne(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!to(o)))throw new Error(n+" contains an invalid key ("+o+") "+ke(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pc(i,o),Ei(n,a,i),_c(i)}),s&&r)throw new Error(n+' contains ".value" child '+ke(i)+" in addition to actual children.")}},io=function(n,e,t,i){if(!no(t))throw new Error(Kn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Qh=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),io(n,e,t)},Xh=function(n,e){if(T(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Jh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!to(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Yh(t))throw new Error(Kn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Zh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bi(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!ti(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function so(n,e,t){bi(n,t),ro(n,i=>ti(i,e))}function fe(n,e,t){bi(n,t),ro(n,i=>ce(i,e)||ce(e,i))}function ro(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(eu(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function eu(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();at&&Y("event: "+t.toString()),Ze(i)}}}/**
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
 */const tu="repo_interrupt",nu=25;class iu{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Zh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qt(),this.transactionQueueTree_=new vi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function su(n,e,t){if(n.stats_=Zn(n.repoInfo_),n.forceRestClient_||$l())n.server_=new zt(n.repoInfo_,(i,s,r,o)=>{Is(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ss(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{H(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new me(n.repoInfo_,e,(i,s,r,o)=>{Is(n,i,s,r,o)},i=>{Ss(n,i)},i=>{ou(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Vl(n.repoInfo_,()=>new Uc(n.stats_,n.server_)),n.infoData_=new Lc,n.infoSyncTree_=new bs({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Rt(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ii(n,"connected",!1),n.serverSyncTree_=new bs({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);fe(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function ru(n){const t=n.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function wi(n){return Bh({timestamp:ru(n)})}function Is(n,e,t,i,s){n.dataUpdateCount++;const r=new D(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=$t(t,c=>q(c));o=Dh(n.serverSyncTree_,r,l,s)}else{const l=q(t);o=jr(n.serverSyncTree_,r,l,s)}else if(i){const l=$t(t,c=>q(c));o=Ah(n.serverSyncTree_,r,l)}else{const l=q(t);o=Rt(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=fn(n,r)),fe(n.eventQueue_,a,o)}function Ss(n,e){Ii(n,"connected",e),e===!1&&cu(n)}function ou(n,e){ne(e,(t,i)=>{Ii(n,t,i)})}function Ii(n,e,t){const i=new D("/.info/"+e),s=q(t);n.infoData_.updateSnapshot(i,s);const r=Rt(n.infoSyncTree_,i,s);fe(n.eventQueue_,i,r)}function oo(n){return n.nextWriteId_++}function au(n,e,t){const i=Ph(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=q(s).withIndex(e._queryParams.getIndex());Vn(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Rt(n.serverSyncTree_,e._path,r);else{const a=Et(n.serverSyncTree_,e);o=jr(n.serverSyncTree_,e._path,r,a)}return fe(n.eventQueue_,e._path,o),en(n.serverSyncTree_,e,t,null,!0),r},s=>(dn(n,"get for query "+H(e)+" failed: "+s),Promise.reject(new Error(s))))}function lu(n,e,t,i,s){dn(n,"set",{path:e.toString(),value:t,priority:i});const r=wi(n),o=q(t,i),a=di(n.serverSyncTree_,e),l=Xr(o,a,r),c=oo(n),u=qr(n.serverSyncTree_,e,l,c,!0);bi(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||te("set at "+e+" failed: "+d);const w=Pe(n.serverSyncTree_,c,!m);fe(n.eventQueue_,e,w),du(n,s,d,_)});const h=uo(n,e);fn(n,h),fe(n.eventQueue_,h,[])}function cu(n){dn(n,"onDisconnectEvents");const e=wi(n),t=qt();$n(n.onDisconnect_,k(),(s,r)=>{const o=Hh(s,r,n.serverSyncTree_,e);Ar(t,s,o)});let i=[];$n(t,k(),(s,r)=>{i=i.concat(Rt(n.serverSyncTree_,s,r));const o=uo(n,s);fn(n,o)}),n.onDisconnect_=qt(),fe(n.eventQueue_,k(),i)}function hu(n,e,t){let i;T(e._path)===".info"?i=Vn(n.infoSyncTree_,e,t):i=Vn(n.serverSyncTree_,e,t),so(n.eventQueue_,e._path,i)}function Ts(n,e,t){let i;T(e._path)===".info"?i=en(n.infoSyncTree_,e,t):i=en(n.serverSyncTree_,e,t),so(n.eventQueue_,e._path,i)}function uu(n){n.persistentConnection_&&n.persistentConnection_.interrupt(tu)}function dn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Y(t,...e)}function du(n,e,t,i){e&&Ze(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function ao(n,e,t){return di(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function Si(n,e=n.transactionQueueTree_){if(e||pn(n,e),et(e)){const t=co(n,e);g(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&fu(n,At(e),t)}else Zr(e)&&un(e,t=>{Si(n,t)})}function fu(n,e,t){const i=t.map(c=>c.currentWriteId),s=ao(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];g(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Q(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{dn(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Pe(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();pn(n,Ci(n.transactionQueueTree_,e)),Si(n,n.transactionQueueTree_),fe(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ze(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{te("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}fn(n,e)}},o)}function fn(n,e){const t=lo(n,e),i=At(t),s=co(n,t);return pu(n,s,i),i}function pu(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Q(t,l.path);let u=!1,h;if(g(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Pe(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=nu)u=!0,h="maxretry",s=s.concat(Pe(n.serverSyncTree_,l.currentWriteId,!0));else{const d=ao(n,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){Ei("transaction failed: Data returned ",_,l.path);let m=q(_);typeof _=="object"&&_!=null&&Ce(_,".priority")||(m=m.updatePriority(d.getPriority()));const E=l.currentWriteId,K=wi(n),se=Xr(m,d,K);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=se,l.currentWriteId=oo(n),o.splice(o.indexOf(E),1),s=s.concat(qr(n.serverSyncTree_,l.path,se,l.currentWriteId,l.applyLocally)),s=s.concat(Pe(n.serverSyncTree_,E,!0))}else u=!0,h="nodata",s=s.concat(Pe(n.serverSyncTree_,l.currentWriteId,!0))}fe(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}pn(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Ze(i[a]);Si(n,n.transactionQueueTree_)}function lo(n,e){let t,i=n.transactionQueueTree_;for(t=T(e);t!==null&&et(i)===void 0;)i=Ci(i,t),e=L(e),t=T(e);return i}function co(n,e){const t=[];return ho(n,e,t),t.sort((i,s)=>i.order-s.order),t}function ho(n,e,t){const i=et(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);un(e,s=>{ho(n,s,t)})}function pn(n,e){const t=et(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Jr(e,t.length>0?t:void 0)}un(e,i=>{pn(n,i)})}function uo(n,e){const t=At(lo(n,e)),i=Ci(n.transactionQueueTree_,e);return Gh(i,s=>{Rn(n,s)}),Rn(n,i),eo(i,s=>{Rn(n,s)}),t}function Rn(n,e){const t=et(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(g(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Pe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Jr(e,void 0):t.length=r+1,fe(n.eventQueue_,At(e),s);for(let o=0;o<i.length;o++)Ze(i[o])}}/**
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
 */function _u(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function mu(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):te(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ns=function(n,e){const t=gu(n),i=t.namespace;t.domain==="firebase.com"&&ve(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&ve("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||xl();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ur(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new D(t.pathString)}},gu=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=_u(n.substring(u,h)));const d=mu(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class yu{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+H(this.snapshot.exportVal())}}class vu{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class fo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ti{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return R(this._path)?null:Cr(this._path)}get ref(){return new Ee(this._repo,this._path)}get _queryIdentifier(){const e=us(this._queryParams),t=Xn(e);return t==="{}"?"default":t}get _queryObject(){return us(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof Ti))return!1;const t=this._repo===e._repo,i=ti(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+dc(this._path)}}class Ee extends Ti{constructor(e,t){super(e,t,new ri,!1)}get parent(){const e=br(this._path);return e===null?null:new Ee(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new D(e),i=tn(this.ref,e);return new bt(this._node.getChild(t),i,U)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new bt(s,tn(this.ref,i),U)))}hasChild(e){const t=new D(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function X(n,e){return n=Xe(n),n._checkNotDeleted("ref"),e!==void 0?tn(n._root,e):n._root}function tn(n,e){return n=Xe(n),T(n._path)===null?Qh("child","path",e):io("child","path",e),new Ee(n._repo,V(n._path,e))}function Oe(n,e){n=Xe(n),Xh("set",n._path),Kh("set",e,n._path);const t=new sn;return lu(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function zn(n){n=Xe(n);const e=new fo(()=>{}),t=new _n(e);return au(n._repo,n,t).then(i=>new bt(i,new Ee(n._repo,n._path),n._queryParams.getIndex()))}class _n{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new yu("value",this,new bt(e.snapshotNode,new Ee(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new vu(this,e,t):null}matches(e){return e instanceof _n?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Cu(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(u,h)=>{Ts(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new fo(t,r||void 0),a=new _n(o);return hu(n._repo,n,a),()=>Ts(n._repo,n,a)}function Mt(n,e,t,i){return Cu(n,"value",e,t,i)}bh(Ee);Nh(Ee);/**
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
 */const Eu="FIREBASE_DATABASE_EMULATOR_HOST",qn={};let bu=!1;function wu(n,e,t,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=Yn(r);n.repoInfo_=new ur(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function Iu(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||ve("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Y("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ns(r,s),a=o.repoInfo,l;typeof process<"u"&&ji&&(l=ji[Eu]),l?(r=`http://${l}?ns=${a.namespace}`,o=Ns(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Wl(n.name,n.options,e);Jh("Invalid Firebase Database URL",o),R(o.path)||ve("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Tu(a,n,c,new Bl(n,t));return new Nu(u,n)}function Su(n,e){const t=qn[e];(!t||t[n.key]!==n)&&ve(`Database ${e}(${n.repoInfo_}) has already been deleted.`),uu(n),delete t[n.key]}function Tu(n,e,t,i){let s=qn[e.name];s||(s={},qn[e.name]=s);let r=s[n.toURLString()];return r&&ve("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new iu(n,bu,t,i),s[n.toURLString()]=r,r}class Nu{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(su(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ee(this._repo,k())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Su(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ve("Cannot call "+e+" on a deleted database.")}}function Ru(n=hl(),e){const t=rl(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Go("database");i&&xu(t,...i)}return t}function xu(n,e,t,i={}){n=Xe(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Bt(i,r.repoInfo_.emulatorOptions))return;ve("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&ve('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Lt(Lt.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:qo(i.mockUserToken,n.app.options.projectId);o=new Lt(a)}Yn(e)&&(zo(e),Ko("Database",!0)),wu(r,s,i,o)}/**
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
 */function Au(n){wl(cl),Ut(new ft("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Iu(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),He(Yi,Ki,n),He(Yi,Ki,"esm2017")}me.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};me.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Au();var Ni={};(function n(e,t,i,s){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;try{var p=new OffscreenCanvas(1,1),f=p.getContext("2d");f.fillRect(0,0,1,1);var y=p.transferToImageBitmap();f.createPattern(y,"no-repeat")}catch{return!1}return!0}();function l(){}function c(p){var f=t.exports.Promise,y=f!==void 0?f:e.Promise;return typeof y=="function"?new y(p):(p(l,l),null)}var u=function(p,f){return{transform:function(y){if(p)return y;if(f.has(y))return f.get(y);var b=new OffscreenCanvas(y.width,y.height),I=b.getContext("2d");return I.drawImage(y,0,0),f.set(y,b),b},clear:function(){f.clear()}}}(a,new Map),h=function(){var p=Math.floor(16.666666666666668),f,y,b={},I=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(f=function(S){var x=Math.random();return b[x]=requestAnimationFrame(function C(A){I===A||I+p-1<A?(I=A,delete b[x],S()):b[x]=requestAnimationFrame(C)}),x},y=function(S){b[S]&&cancelAnimationFrame(b[S])}):(f=function(S){return setTimeout(S,p)},y=function(S){return clearTimeout(S)}),{frame:f,cancel:y}}(),d=function(){var p,f,y={};function b(I){function S(x,C){I.postMessage({options:x||{},callback:C})}I.init=function(C){var A=C.transferControlToOffscreen();I.postMessage({canvas:A},[A])},I.fire=function(C,A,P){if(f)return S(C,null),f;var B=Math.random().toString(36).slice(2);return f=c(function(F){function W(j){j.data.callback===B&&(delete y[B],I.removeEventListener("message",W),f=null,u.clear(),P(),F())}I.addEventListener("message",W),S(C,B),y[B]=W.bind(null,{data:{callback:B}})}),f},I.reset=function(){I.postMessage({reset:!0});for(var C in y)y[C](),delete y[C]}}return function(){if(p)return p;if(!i&&r){var I=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{p=new Worker(URL.createObjectURL(new Blob([I])))}catch(S){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",S),null}b(p)}return p}}(),_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function m(p,f){return f?f(p):p}function w(p){return p!=null}function E(p,f,y){return m(p&&w(p[f])?p[f]:_[f],y)}function K(p){return p<0?0:Math.floor(p)}function se(p,f){return Math.floor(Math.random()*(f-p))+p}function re(p){return parseInt(p,16)}function tt(p){return p.map(po)}function po(p){var f=String(p).replace(/[^0-9a-f]/gi,"");return f.length<6&&(f=f[0]+f[0]+f[1]+f[1]+f[2]+f[2]),{r:re(f.substring(0,2)),g:re(f.substring(2,4)),b:re(f.substring(4,6))}}function _o(p){var f=E(p,"origin",Object);return f.x=E(f,"x",Number),f.y=E(f,"y",Number),f}function mo(p){p.width=document.documentElement.clientWidth,p.height=document.documentElement.clientHeight}function go(p){var f=p.getBoundingClientRect();p.width=f.width,p.height=f.height}function yo(p){var f=document.createElement("canvas");return f.style.position="fixed",f.style.top="0px",f.style.left="0px",f.style.pointerEvents="none",f.style.zIndex=p,f}function vo(p,f,y,b,I,S,x,C,A){p.save(),p.translate(f,y),p.rotate(S),p.scale(b,I),p.arc(0,0,1,x,C,A),p.restore()}function Co(p){var f=p.angle*(Math.PI/180),y=p.spread*(Math.PI/180);return{x:p.x,y:p.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:p.startVelocity*.5+Math.random()*p.startVelocity,angle2D:-f+(.5*y-Math.random()*y),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:p.color,shape:p.shape,tick:0,totalTicks:p.ticks,decay:p.decay,drift:p.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:p.gravity*3,ovalScalar:.6,scalar:p.scalar,flat:p.flat}}function Eo(p,f){f.x+=Math.cos(f.angle2D)*f.velocity+f.drift,f.y+=Math.sin(f.angle2D)*f.velocity+f.gravity,f.velocity*=f.decay,f.flat?(f.wobble=0,f.wobbleX=f.x+10*f.scalar,f.wobbleY=f.y+10*f.scalar,f.tiltSin=0,f.tiltCos=0,f.random=1):(f.wobble+=f.wobbleSpeed,f.wobbleX=f.x+10*f.scalar*Math.cos(f.wobble),f.wobbleY=f.y+10*f.scalar*Math.sin(f.wobble),f.tiltAngle+=.1,f.tiltSin=Math.sin(f.tiltAngle),f.tiltCos=Math.cos(f.tiltAngle),f.random=Math.random()+2);var y=f.tick++/f.totalTicks,b=f.x+f.random*f.tiltCos,I=f.y+f.random*f.tiltSin,S=f.wobbleX+f.random*f.tiltCos,x=f.wobbleY+f.random*f.tiltSin;if(p.fillStyle="rgba("+f.color.r+", "+f.color.g+", "+f.color.b+", "+(1-y)+")",p.beginPath(),o&&f.shape.type==="path"&&typeof f.shape.path=="string"&&Array.isArray(f.shape.matrix))p.fill(wo(f.shape.path,f.shape.matrix,f.x,f.y,Math.abs(S-b)*.1,Math.abs(x-I)*.1,Math.PI/10*f.wobble));else if(f.shape.type==="bitmap"){var C=Math.PI/10*f.wobble,A=Math.abs(S-b)*.1,P=Math.abs(x-I)*.1,B=f.shape.bitmap.width*f.scalar,F=f.shape.bitmap.height*f.scalar,W=new DOMMatrix([Math.cos(C)*A,Math.sin(C)*A,-Math.sin(C)*P,Math.cos(C)*P,f.x,f.y]);W.multiplySelf(new DOMMatrix(f.shape.matrix));var j=p.createPattern(u.transform(f.shape.bitmap),"no-repeat");j.setTransform(W),p.globalAlpha=1-y,p.fillStyle=j,p.fillRect(f.x-B/2,f.y-F/2,B,F),p.globalAlpha=1}else if(f.shape==="circle")p.ellipse?p.ellipse(f.x,f.y,Math.abs(S-b)*f.ovalScalar,Math.abs(x-I)*f.ovalScalar,Math.PI/10*f.wobble,0,2*Math.PI):vo(p,f.x,f.y,Math.abs(S-b)*f.ovalScalar,Math.abs(x-I)*f.ovalScalar,Math.PI/10*f.wobble,0,2*Math.PI);else if(f.shape==="star")for(var M=Math.PI/2*3,Z=4*f.scalar,oe=8*f.scalar,ae=f.x,pe=f.y,Ae=5,de=Math.PI/Ae;Ae--;)ae=f.x+Math.cos(M)*oe,pe=f.y+Math.sin(M)*oe,p.lineTo(ae,pe),M+=de,ae=f.x+Math.cos(M)*Z,pe=f.y+Math.sin(M)*Z,p.lineTo(ae,pe),M+=de;else p.moveTo(Math.floor(f.x),Math.floor(f.y)),p.lineTo(Math.floor(f.wobbleX),Math.floor(I)),p.lineTo(Math.floor(S),Math.floor(x)),p.lineTo(Math.floor(b),Math.floor(f.wobbleY));return p.closePath(),p.fill(),f.tick<f.totalTicks}function bo(p,f,y,b,I){var S=f.slice(),x=p.getContext("2d"),C,A,P=c(function(B){function F(){C=A=null,x.clearRect(0,0,b.width,b.height),u.clear(),I(),B()}function W(){i&&!(b.width===s.width&&b.height===s.height)&&(b.width=p.width=s.width,b.height=p.height=s.height),!b.width&&!b.height&&(y(p),b.width=p.width,b.height=p.height),x.clearRect(0,0,b.width,b.height),S=S.filter(function(j){return Eo(x,j)}),S.length?C=h.frame(W):F()}C=h.frame(W),A=F});return{addFettis:function(B){return S=S.concat(B),P},canvas:p,promise:P,reset:function(){C&&h.cancel(C),A&&A()}}}function xi(p,f){var y=!p,b=!!E(f||{},"resize"),I=!1,S=E(f,"disableForReducedMotion",Boolean),x=r&&!!E(f||{},"useWorker"),C=x?d():null,A=y?mo:go,P=p&&C?!!p.__confetti_initialized:!1,B=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,F;function W(M,Z,oe){for(var ae=E(M,"particleCount",K),pe=E(M,"angle",Number),Ae=E(M,"spread",Number),de=E(M,"startVelocity",Number),To=E(M,"decay",Number),No=E(M,"gravity",Number),Ro=E(M,"drift",Number),Mi=E(M,"colors",tt),xo=E(M,"ticks",Number),ki=E(M,"shapes"),Ao=E(M,"scalar"),Mo=!!E(M,"flat"),Di=_o(M),Pi=ae,gn=[],ko=p.width*Di.x,Do=p.height*Di.y;Pi--;)gn.push(Co({x:ko,y:Do,angle:pe,spread:Ae,startVelocity:de,color:Mi[Pi%Mi.length],shape:ki[se(0,ki.length)],ticks:xo,decay:To,gravity:No,drift:Ro,scalar:Ao,flat:Mo}));return F?F.addFettis(gn):(F=bo(p,gn,A,Z,oe),F.promise)}function j(M){var Z=S||E(M,"disableForReducedMotion",Boolean),oe=E(M,"zIndex",Number);if(Z&&B)return c(function(de){de()});y&&F?p=F.canvas:y&&!p&&(p=yo(oe),document.body.appendChild(p)),b&&!P&&A(p);var ae={width:p.width,height:p.height};C&&!P&&C.init(p),P=!0,C&&(p.__confetti_initialized=!0);function pe(){if(C){var de={getBoundingClientRect:function(){if(!y)return p.getBoundingClientRect()}};A(de),C.postMessage({resize:{width:de.width,height:de.height}});return}ae.width=ae.height=null}function Ae(){F=null,b&&(I=!1,e.removeEventListener("resize",pe)),y&&p&&(document.body.contains(p)&&document.body.removeChild(p),p=null,P=!1)}return b&&!I&&(I=!0,e.addEventListener("resize",pe,!1)),C?C.fire(M,ae,Ae):W(M,ae,Ae)}return j.reset=function(){C&&C.reset(),F&&F.reset()},j}var mn;function Ai(){return mn||(mn=xi(null,{useWorker:!0,resize:!0})),mn}function wo(p,f,y,b,I,S,x){var C=new Path2D(p),A=new Path2D;A.addPath(C,new DOMMatrix(f));var P=new Path2D;return P.addPath(A,new DOMMatrix([Math.cos(x)*I,Math.sin(x)*I,-Math.sin(x)*S,Math.cos(x)*S,y,b])),P}function Io(p){if(!o)throw new Error("path confetti are not supported in this browser");var f,y;typeof p=="string"?f=p:(f=p.path,y=p.matrix);var b=new Path2D(f),I=document.createElement("canvas"),S=I.getContext("2d");if(!y){for(var x=1e3,C=x,A=x,P=0,B=0,F,W,j=0;j<x;j+=2)for(var M=0;M<x;M+=2)S.isPointInPath(b,j,M,"nonzero")&&(C=Math.min(C,j),A=Math.min(A,M),P=Math.max(P,j),B=Math.max(B,M));F=P-C,W=B-A;var Z=10,oe=Math.min(Z/F,Z/W);y=[oe,0,0,oe,-Math.round(F/2+C)*oe,-Math.round(W/2+A)*oe]}return{type:"path",path:f,matrix:y}}function So(p){var f,y=1,b="#000000",I='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof p=="string"?f=p:(f=p.text,y="scalar"in p?p.scalar:y,I="fontFamily"in p?p.fontFamily:I,b="color"in p?p.color:b);var S=10*y,x=""+S+"px "+I,C=new OffscreenCanvas(S,S),A=C.getContext("2d");A.font=x;var P=A.measureText(f),B=Math.ceil(P.actualBoundingBoxRight+P.actualBoundingBoxLeft),F=Math.ceil(P.actualBoundingBoxAscent+P.actualBoundingBoxDescent),W=2,j=P.actualBoundingBoxLeft+W,M=P.actualBoundingBoxAscent+W;B+=W+W,F+=W+W,C=new OffscreenCanvas(B,F),A=C.getContext("2d"),A.font=x,A.fillStyle=b,A.fillText(f,j,M);var Z=1/y;return{type:"bitmap",bitmap:C.transferToImageBitmap(),matrix:[Z,0,0,Z,-B*Z/2,-F*Z/2]}}t.exports=function(){return Ai().apply(this,arguments)},t.exports.reset=function(){Ai().reset()},t.exports.create=xi,t.exports.shapeFromPath=Io,t.exports.shapeFromText=So})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Ni,!1);const wt=Ni.exports;Ni.exports.create;let ie=0;const Mu={apiKey:"AIzaSyCDKY-SQ4mOtNUMp124NgSUiZnV6vglW4A",authDomain:"solvesync-6f45a.firebaseapp.com",databaseURL:"https://solvesync-6f45a-default-rtdb.firebaseio.com",projectId:"solvesync-6f45a",storageBucket:"solvesync-6f45a.appspot.com",messagingSenderId:"...",appId:"..."},ku=js(Mu),J=Ru(ku),xe=document.getElementById("answer-input"),ge=document.getElementById("student-work"),Rs=document.getElementById("clear-btn"),Du=document.getElementById("connection-status"),Pu=document.getElementById("status-dot"),xs=document.getElementById("math-problem"),nn=document.getElementById("submit-btn"),As=document.getElementById("hint-btn"),Pt=document.getElementById("chalkboard"),Ot=document.getElementById("streak-num"),Ms=document.getElementById("next-btn"),ks=document.getElementById("high-score-num");let Ds=0;Mt(X(J,".info/connected"),n=>{n.val()===!0&&(Du.innerText="CLOUD_SYNC_ACTIVE",Pu.style.background="#22c55e")});Mt(X(J,"activeProblem"),n=>{const e=n.val();xs&&(xs.innerText=e||"Select a category below to start!")});Mt(X(J,"worldRecord"),n=>{const e=n.val()||0;ks&&(ks.innerText=e)});xe&&ge&&(xe.addEventListener("input",n=>{Oe(X(J,"currentWork"),n.target.value)}),Mt(X(J,"currentWork"),n=>{ge.innerText=n.val()||"READY_FOR_INPUT"}));Rs&&Rs.addEventListener("click",()=>{Oe(X(J,"currentWork"),""),xe.value=""});let ze="add";document.querySelectorAll(".cat-btn").forEach(n=>{n.addEventListener("click",e=>{const t=e.target.getAttribute("data-type");t&&(ze=t,Ri(ze))})});Ms&&Ms.addEventListener("click",()=>{ze||(ze="add"),Ri(ze),ge&&(ge.innerText="")});function Ri(n){let e=Math.floor(Math.random()*20)+1,t=Math.floor(Math.random()*10)+1,i="",s=0,r="";if(n==="add")i=`${e} + ${t} = ?`,s=e+t,r=`Simply add the two numbers together: ${e} + ${t} = ${s}`;else if(n==="sub")i=`${e+t} - ${t} = ?`,s=e,r=`Subtract ${t} from ${e+t} to find the difference: ${s}`;else if(n==="mult")i=`${e} × ${t} = ?`,s=e*t,r=`Multiply ${e} by ${t} to get ${s}`;else if(n==="div"){let o=Math.floor(Math.random()*50)+10,a=Math.floor(Math.random()*20)+2,l=o*a;i=`${l} ÷ ${a} = ?`,s=o,r=`Divide ${l} by ${a}. Think: what times ${a} equals ${l}? The answer is ${s}`}else if(n==="alg"){let o=Math.floor(Math.random()*15)+2,a=Math.floor(Math.random()*3);if(a===0){let l=Math.floor(Math.random()*5)+2,c=Math.floor(Math.random()*10)+1,u=l*(o+c);i=`Solve for x: ${l}(x + ${c}) = ${u}`,s=o,r=`1. Divide both sides by ${l}: (x + ${c}) = ${u/l}
2. Subtract ${c}: x = ${s}`}else if(a===1){let l=Math.floor(Math.random()*4)+1,c=l+(Math.floor(Math.random()*5)+2),u=Math.floor(Math.random()*20)+1,h=c*o+u-l*o;i=`Solve for x: ${c}x + ${u} = ${l}x + ${h}`,s=o,r=`1. Subtract ${l}x from both sides: ${c-l}x + ${u} = ${h}
2. Subtract ${u}: ${c-l}x = ${h-u}
3. Divide: x = ${s}`}else{let l=Math.floor(Math.random()*8)+3,c=Math.floor(Math.random()*6)+2,u=l*o/c;for(;u%1!==0;)o++,u=l*o/c;i=`Solve for x: (${l}x) / ${c} = ${u}`,s=o,r=`1. Multiply both sides by ${c}: ${l}x = ${u*c}
2. Divide by ${l}: x = ${s}`}}Oe(X(J,"activeSteps"),r),Oe(X(J,"activeProblem"),i),Oe(X(J,"correctAnswer"),s),Oe(X(J,"currentWork"),""),xe&&(xe.value="")}function Ps(n){const e=document.getElementById("math-bot"),t=document.getElementById("bot-bubble"),i=document.getElementById("cosmo-rocket"),s=document.getElementById("cosmo-bubble"),r=document.getElementById("chalkboard");if(n%5===0){if(!i||!s)return;i.style.transition="bottom 1s ease-out",i.style.bottom="120px",s.style.display="block",r&&r.classList.add("shake-screen"),setTimeout(()=>{wt({particleCount:60,spread:80,origin:{x:.5,y:.8},colors:["#4b5563","#ff4500"]}),setTimeout(()=>{i.style.transition="bottom 5s cubic-bezier(0.1, 0, 1, 1)",i.style.bottom="180%";const o=Date.now()+4500;(function a(){wt({particleCount:12,angle:270,spread:45,origin:{x:.5,y:.5},colors:["#ff4500","#ffa500","#ffff00"],gravity:2}),Date.now()<o&&requestAnimationFrame(a)})()},1500)},500),setTimeout(()=>{s.style.display="none",r&&r.classList.remove("shake-screen"),i.style.transition="none",i.style.bottom="-400px"},7500)}else if(n%3===0){if(!e||!t)return;e.style.bottom="80px",e.classList.add("bot-dancing"),t.style.display="block",setTimeout(()=>{e.style.bottom="-450px",t.style.display="none",e.classList.remove("bot-dancing")},4500)}}function Ou(){const n=document.getElementById("persistence-banner");n&&setTimeout(()=>{n.style.top="50px",n.style.opacity="1";const t=Date.now()+4e3;(function i(){wt({particleCount:3,angle:60,spread:55,origin:{x:0,y:.3},colors:["#f0abfc","#fbbf24","#ffffff"]}),wt({particleCount:3,angle:120,spread:55,origin:{x:1,y:.3},colors:["#f0abfc","#fbbf24","#ffffff"]}),Date.now()<t&&requestAnimationFrame(i)})(),setTimeout(()=>{n.style.top="20px",n.style.opacity="0",n.style.filter="blur(10px)",setTimeout(()=>{n.style.top="-100px",n.style.filter="blur(0px)"},1e3)},4e3)},8500)}nn&&nn.addEventListener("click",()=>{const n=xe.value.trim(),e=Number(n);Mt(X(J,"correctAnswer"),t=>{const i=Number(t.val());e===i&&n!==""?(ie+=1,Ot&&(Ot.innerText=ie),(ie>0&&ie%5===0||ie===3)&&Ps(ie),zn(tn(X(J),"worldRecord")).then(s=>{const r=s.val()||0;ie>r&&(Oe(X(J,"worldRecord"),ie),console.log("🏆 NEW WORLD RECORD!"))}),wt({particleCount:150,spread:70,origin:{y:.6},colors:["#22d3ee","#f8fafc","#334155"]}),Pt.classList.add("success-glow"),ge.style.color="var(--accent-cyan)",ie>=3&&(Pt.style.boxShadow="0 0 50px var(--accent-cyan)"),setTimeout(()=>{alert(`CORRECT! 🚀 STREAK: ${ie}`),Pt.classList.remove("success-glow"),xe.value="",Ri(ze)},500)):(ie=0,Ot&&(Ot.innerText="0"),Pt.style.boxShadow="none",ge.style.color="var(--danger-red)",alert("TRY AGAIN... ❌ STREAK RESET"))},{onlyOnce:!0})});nn&&nn.addEventListener("click",()=>{xe.value.trim()!==""&&(Ds++,Ds%10===0&&Ou())});As&&(ge.innerText="",As.addEventListener("click",n=>{n.stopPropagation();const e=X(J,"activeProblem"),t=X(J,"activeSteps");Promise.all([zn(e),zn(t)]).then(i=>{const s=i[0].val()||"",r=i[1].val()||"";if(s){let o=[];const a=s.match(/\d+/g)||["0","0","0","0"],l=s.toLowerCase(),c=u=>[Math.floor(u/2),Math.ceil(u/2)];if(l.includes("x")&&l.includes("=")){if(l.includes("(")&&l.includes("+")){const u=Number(a[0]),h=Number(a[1]),d=Number(a[2]),_=d/u;o.push(`Step 1: Identify Equation: ${u}(x + ${h}) = ${d}`),o.push(`Step 2: Divide BOTH sides by ${u}
    ${u}(x + ${h}) / ${u} = ${d} / ${u}
    Result: x + ${h} = ${_}`),o.push(`Step 3: Subtract ${h} from BOTH sides
    x + ${h} - ${h} = ${_} - ${h}`),o.push(`Step 4: x = ${_} - ${h}`),o.push(`Final Result: x = ${_-h}`)}else if(l.includes("/")){const u=Number(a[0]),h=Number(a[1]),d=Number(a[2]),_=d*h;o.push(`Step 1: Identify Equation: (${u}x) / ${h} = ${d}`),o.push(`Step 2: Multiply BOTH sides by (${h})
    (${h}) * ${u}x / ${h} = ${d} * (${h})
    Result: ${u}x = ${_}`),o.push(`Step 3: Divide BOTH sides by ${u}
    ${u}x / ${u} = ${_} / ${u}`),o.push(`Step 4: x = ${_} / ${u}`),o.push(`Final Result: x = ${_/u}`)}else if(l.match(/\d+x.*=.*\d+x/)){const u=Number(a[0]),h=Number(a[1]),d=Number(a[2]),_=Number(a[3]),m=u-d,w=_-h;o.push(`Step 1: ${u}x + ${h} = ${d}x + ${_}`),o.push(`Step 2: Subtract ${d}x from BOTH sides
    Result: ${m}x + ${h} = ${_}`),o.push(`Step 3: Subtract ${h} from BOTH sides
    Result: ${m}x = ${w}`),o.push(`Step 4: Divide BOTH sides by ${m}
    ${m}x / ${m} = ${w} / ${m}`),o.push(`Final Result: x = ${w/m}`)}}else if(l.includes("x")||l.includes("*")||l.includes("×")||l.includes("times")){const u=Number(a[0]),h=Number(a[1]),d=c(u),_=c(d[0]),m=c(d[1]);o.push(`Step 1: Identify ${u} x ${h}`),o.push(`Step 2: Break ${u} into parts
    ${u} = ${d[0]} + ${d[1]}`),o.push(`Step 3: Deep Break parts
    ${d[0]} = ${_[0]} + ${_[1]} and ${d[1]} = ${m[0]} + ${m[1]}`),o.push(`Step 4: Multiply all parts by ${h}
    (${_[0]}*${h}) + (${_[1]}*${h}) + (${m[0]}*${h}) + (${m[1]}*${h})`),o.push(`Step 5: Combine results
    ${_[0]*h} + ${_[1]*h} + ${m[0]*h} + ${m[1]*h} = ${u*h}`),o.push(`Final Total: ${u*h}`)}else if(l.includes("+")){const u=Number(a[0]),h=Number(a[1]),d=c(u),_=c(h);o.push(`Step 1: Align ${u} & ${h}`),o.push(`Step 2: ${u} = ${d[0]} + ${d[1]}`),o.push(`Step 3: ${h} = ${_[0]} + ${_[1]}`),o.push(`Step 4: ${d[0]} + ${d[1]} + ${_[0]} + ${_[1]} = ${u+h}`),o.push(`Final Total: ${u+h}`)}else if(l.includes("-")){const u=Number(a[0]),h=Number(a[1]),d=c(u),_=c(d[0]),m=c(d[1]);o.push(`Step 1: ${u} = ${d[0]} + ${d[1]}`),o.push(`Step 2: ${d[0]} = ${_[0]} + ${_[1]} and ${d[1]} = ${m[0]} + ${m[1]}`),o.push(`Step 3: Parts: ${_[0]} + ${_[1]} + ${m[0]} + ${m[1]}`),o.push(`Step 4: Subtract: ${_[0]} + ${_[1]} + ${m[0]} + (${m[1]} - ${h})`),o.push(`Step 5: ${_[0]} + ${_[1]} + ${m[0]} + (${m[1]-h}) = ${u-h}`),o.push(`Final Difference: ${u-h}`)}else if(l.includes("÷")||l.includes("/")||l.includes("divide")){const u=Number(a[0]),h=Number(a[1]),d=h*10,_=u-d,m=10,w=_/h;if(o.push(`Step 1: Break ${u} into friendly numbers: ${d} + ${_}`),o.push(`Step 2: Divide the first part
    ${d} ÷ ${h} = ${m}`),o.push(`    Check: ${h} x ${m} = ${d} (Matches!)`),o.push(`Step 3: Divide the remaining part
    ${_} ÷ ${h} = ${w}`),_>=10){const E=h*Math.floor(w/2),K=_-E;o.push(`    Simplify ${_} more: (${E} + ${K}) ÷ ${h}
    ${E}÷${h}=${E/h} and ${K}÷${h}=${K/h}`)}o.push(`Step 4: Combine the quotients
    ${m} + ${w} = ${m+w}`),o.push(`Final Quotient: ${u/h}`)}else o.push(r);ge.innerText=`--- HOW TO SOLVE ---
`+o.join(`

`),ge.style.color="#fbbf24"}}).catch(i=>console.error("Sync Error:",i))}));
