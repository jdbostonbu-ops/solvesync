(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Do=()=>{};var Di={};/**
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
 */const Ds={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const p=function(n,e){if(!n)throw Qe(e)},Qe=function(n){return new Error("Firebase Database ("+Ds.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Os=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Oo=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},jn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,f=r>>2,d=(r&3)<<4|a>>4;let u=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(u=64)),i.push(t[f],t[d],t[u],t[m])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Os(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Oo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new Lo;const u=r<<2|a>>4;if(i.push(u),c!==64){const m=a<<4&240|c>>2;if(i.push(m),d!==64){const g=c<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Lo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ls=function(n){const e=Os(n);return jn.encodeByteArray(e,!0)},Ft=function(n){return Ls(n).replace(/\./g,"")},An=function(n){try{return jn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Fo(n){return Fs(void 0,n)}function Fs(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Bo(t)||(n[t]=Fs(n[t],e[t]));return n}function Bo(n){return n!=="__proto__"}/**
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
 */function Wo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Uo=()=>Wo().__FIREBASE_DEFAULTS__,Ho=()=>{if(typeof process>"u"||typeof Di>"u")return;const n=Di.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vo=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&An(n[1]);return e&&JSON.parse(e)},Bs=()=>{try{return Do()||Uo()||Ho()||Vo()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$o=n=>{var e,t;return(t=(e=Bs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},zo=n=>{const e=$o(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Ws=()=>{var n;return(n=Bs())===null||n===void 0?void 0:n.config};/**
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
 */function qn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Go(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function jo(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ft(JSON.stringify(t)),Ft(JSON.stringify(o)),""].join(".")}const ot={};function qo(){const n={prod:[],emulator:[]};for(const e of Object.keys(ot))ot[e]?n.emulator.push(e):n.prod.push(e);return n}function Yo(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Oi=!1;function Ko(n,e){if(typeof window>"u"||typeof document>"u"||!qn(window.location.host)||ot[n]===e||ot[n]||Oi)return;ot[n]=e;function t(u){return`__firebase__banner__${u}`}const i="__firebase__banner",r=qo().prod.length>0;function o(){const u=document.getElementById(i);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,m){u.setAttribute("width","24"),u.setAttribute("id",m),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Oi=!0,o()},u}function f(u,m){u.setAttribute("id",m),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function d(){const u=Yo(i),m=t("text"),g=document.getElementById(m)||document.createElement("span"),M=t("learnmore"),w=document.getElementById(M)||document.createElement("a"),se=t("preprendIcon"),re=document.getElementById(se)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const oe=u.element;a(oe),f(w,M);const tt=c();l(re,se),oe.append(re,g,w,tt),document.body.appendChild(oe)}r?(g.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function Qo(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Us(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qo())}function Xo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jo(){return Ds.NODE_ADMIN===!0}function Zo(){try{return typeof indexedDB=="object"}catch{return!1}}function ea(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */function dt(n){return JSON.parse(n)}function V(n){return JSON.stringify(n)}/**
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
 */const Vs=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=dt(An(r[0])||""),t=dt(An(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},sa=function(n){const e=Vs(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ra=function(n){const e=Vs(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ce(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function je(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Li(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Bt(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Wt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Fi(r)&&Fi(o)){if(!Wt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Fi(n){return n!==null&&typeof n=="object"}/**
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
 */class aa{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const u=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(u<<1|u>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,f;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),f=1518500249):(c=r^o^a,f=1859775393):d<60?(c=r&o|a&(r|o),f=2400959708):(c=r^o^a,f=3395469782);const u=(s<<5|s>>>27)+c+l+f+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=u}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Yn(n,e){return`${n} failed: ${e} argument `}/**
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
 */const la=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,p(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rn=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const fa={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},_a=O.INFO,pa={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},ma=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=pa[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $s{constructor(e){this.name=e,this._logLevel=_a,this._logHandler=ma,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const ga=(n,e)=>e.some(t=>n instanceof t);let Bi,Wi;function ya(){return Bi||(Bi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function va(){return Wi||(Wi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zs=new WeakMap,xn=new WeakMap,Gs=new WeakMap,yn=new WeakMap,Kn=new WeakMap;function Ca(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(we(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&zs.set(t,n)}).catch(()=>{}),Kn.set(e,n),e}function Ea(n){if(xn.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});xn.set(n,e)}let Mn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Gs.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return we(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function wa(n){Mn=n(Mn)}function ba(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(vn(this),e,...t);return Gs.set(i,e.sort?e.sort():[e]),we(i)}:va().includes(n)?function(...e){return n.apply(vn(this),e),we(zs.get(this))}:function(...e){return we(n.apply(vn(this),e))}}function Ia(n){return typeof n=="function"?ba(n):(n instanceof IDBTransaction&&Ea(n),ga(n,ya())?new Proxy(n,Mn):n)}function we(n){if(n instanceof IDBRequest)return Ca(n);if(yn.has(n))return yn.get(n);const e=Ia(n);return e!==n&&(yn.set(n,e),Kn.set(e,n)),e}const vn=n=>Kn.get(n);function Ta(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=we(o);return i&&o.addEventListener("upgradeneeded",l=>{i(we(o.result),l.oldVersion,l.newVersion,we(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Sa=["get","getKey","getAll","getAllKeys","count"],Na=["put","add","delete","clear"],Cn=new Map;function Ui(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Cn.get(e))return Cn.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Na.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Sa.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Cn.set(e,r),r}wa(n=>({...n,get:(e,t,i)=>Ui(e,t)||n.get(e,t,i),has:(e,t)=>!!Ui(e,t)||n.has(e,t)}));/**
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
 */class Ra{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Aa(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Aa(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kn="@firebase/app",Hi="0.13.2";/**
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
 */const ye=new $s("@firebase/app"),xa="@firebase/app-compat",Ma="@firebase/analytics-compat",ka="@firebase/analytics",Pa="@firebase/app-check-compat",Da="@firebase/app-check",Oa="@firebase/auth",La="@firebase/auth-compat",Fa="@firebase/database",Ba="@firebase/data-connect",Wa="@firebase/database-compat",Ua="@firebase/functions",Ha="@firebase/functions-compat",Va="@firebase/installations",$a="@firebase/installations-compat",za="@firebase/messaging",Ga="@firebase/messaging-compat",ja="@firebase/performance",qa="@firebase/performance-compat",Ya="@firebase/remote-config",Ka="@firebase/remote-config-compat",Qa="@firebase/storage",Xa="@firebase/storage-compat",Ja="@firebase/firestore",Za="@firebase/ai",el="@firebase/firestore-compat",tl="firebase",nl="11.10.0";/**
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
 */const Pn="[DEFAULT]",il={[kn]:"fire-core",[xa]:"fire-core-compat",[ka]:"fire-analytics",[Ma]:"fire-analytics-compat",[Da]:"fire-app-check",[Pa]:"fire-app-check-compat",[Oa]:"fire-auth",[La]:"fire-auth-compat",[Fa]:"fire-rtdb",[Ba]:"fire-data-connect",[Wa]:"fire-rtdb-compat",[Ua]:"fire-fn",[Ha]:"fire-fn-compat",[Va]:"fire-iid",[$a]:"fire-iid-compat",[za]:"fire-fcm",[Ga]:"fire-fcm-compat",[ja]:"fire-perf",[qa]:"fire-perf-compat",[Ya]:"fire-rc",[Ka]:"fire-rc-compat",[Qa]:"fire-gcs",[Xa]:"fire-gcs-compat",[Ja]:"fire-fst",[el]:"fire-fst-compat",[Za]:"fire-vertex","fire-js":"fire-js",[tl]:"fire-js-all"};/**
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
 */const Ut=new Map,sl=new Map,Dn=new Map;function Vi(n,e){try{n.container.addComponent(e)}catch(t){ye.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ht(n){const e=n.name;if(Dn.has(e))return ye.debug(`There were multiple attempts to register component ${e}.`),!1;Dn.set(e,n);for(const t of Ut.values())Vi(t,n);for(const t of sl.values())Vi(t,n);return!0}function rl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ol(n){return n==null?!1:n.settings!==void 0}/**
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
 */const al={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},be=new Hs("app","Firebase",al);/**
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
 */class ll{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw be.create("app-deleted",{appName:this._name})}}/**
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
 */const cl=nl;function js(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Pn,automaticDataCollectionEnabled:!0},e),s=i.name;if(typeof s!="string"||!s)throw be.create("bad-app-name",{appName:String(s)});if(t||(t=Ws()),!t)throw be.create("no-options");const r=Ut.get(s);if(r){if(Wt(t,r.options)&&Wt(i,r.config))return r;throw be.create("duplicate-app",{appName:s})}const o=new da(s);for(const l of Dn.values())o.addComponent(l);const a=new ll(t,i,o);return Ut.set(s,a),a}function hl(n=Pn){const e=Ut.get(n);if(!e&&n===Pn&&Ws())return js();if(!e)throw be.create("no-app",{appName:n});return e}function He(n,e,t){var i;let s=(i=il[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ye.warn(a.join(" "));return}Ht(new ft(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ul="firebase-heartbeat-database",dl=1,_t="firebase-heartbeat-store";let En=null;function qs(){return En||(En=Ta(ul,dl,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_t)}catch(t){console.warn(t)}}}}).catch(n=>{throw be.create("idb-open",{originalErrorMessage:n.message})})),En}async function fl(n){try{const t=(await qs()).transaction(_t),i=await t.objectStore(_t).get(Ys(n));return await t.done,i}catch(e){if(e instanceof It)ye.warn(e.message);else{const t=be.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ye.warn(t.message)}}}async function $i(n,e){try{const i=(await qs()).transaction(_t,"readwrite");await i.objectStore(_t).put(e,Ys(n)),await i.done}catch(t){if(t instanceof It)ye.warn(t.message);else{const i=be.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ye.warn(i.message)}}}function Ys(n){return`${n.name}!${n.options.appId}`}/**
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
 */const _l=1024,pl=30;class ml{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yl(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zi();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>pl){const o=vl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ye.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zi(),{heartbeatsToSend:i,unsentEntries:s}=gl(this._heartbeatsCache.heartbeats),r=Ft(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ye.warn(t),""}}}function zi(){return new Date().toISOString().substring(0,10)}function gl(n,e=_l){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Gi(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Gi(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class yl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zo()?ea().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fl(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return $i(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return $i(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Gi(n){return Ft(JSON.stringify({version:2,heartbeats:n})).length}function vl(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function Cl(n){Ht(new ft("platform-logger",e=>new Ra(e),"PRIVATE")),Ht(new ft("heartbeat",e=>new ml(e),"PRIVATE")),He(kn,Hi,n),He(kn,Hi,"esm2017"),He("fire-js","")}Cl("");var El="firebase",wl="11.10.0";/**
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
 */He(El,wl,"app");var ji={};const qi="@firebase/database",Yi="1.0.20";/**
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
 */let Ks="";function bl(n){Ks=n}/**
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
 */class Il{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),V(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:dt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Tl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ce(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Qs=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Il(e)}}catch{}return new Tl},Pe=Qs("localStorage"),Sl=Qs("sessionStorage");/**
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
 */const Ve=new $s("@firebase/database"),Nl=function(){let n=1;return function(){return n++}}(),Xs=function(n){const e=la(n),t=new aa;t.update(e);const i=t.digest();return jn.encodeByteArray(i)},Tt=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Tt.apply(null,i):typeof i=="object"?e+=V(i):e+=i,e+=" "}return e};let at=null,Ki=!0;const Rl=function(n,e){p(!0,"Can't turn on custom loggers persistently."),Ve.logLevel=O.VERBOSE,at=Ve.log.bind(Ve)},Y=function(...n){if(Ki===!0&&(Ki=!1,at===null&&Sl.get("logging_enabled")===!0&&Rl()),at){const e=Tt.apply(null,n);at(e)}},St=function(n){return function(...e){Y(n,...e)}},On=function(...n){const e="FIREBASE INTERNAL ERROR: "+Tt(...n);Ve.error(e)},ve=function(...n){const e=`FIREBASE FATAL ERROR: ${Tt(...n)}`;throw Ve.error(e),new Error(e)},Z=function(...n){const e="FIREBASE WARNING: "+Tt(...n);Ve.warn(e)},Al=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Js=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},xl=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},qe="[MIN_NAME]",Oe="[MAX_NAME]",Je=function(n,e){if(n===e)return 0;if(n===qe||e===Oe)return-1;if(e===qe||n===Oe)return 1;{const t=Qi(n),i=Qi(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Ml=function(n,e){return n===e?0:n<e?-1:1},nt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+V(e))},Qn=function(n){if(typeof n!="object"||n===null)return V(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=V(e[i]),t+=":",t+=Qn(n[e[i]]);return t+="}",t},Zs=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function ee(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const er=function(n){p(!Js(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const f=c.join("");let d="";for(l=0;l<64;l+=8){let u=parseInt(f.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},kl=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Pl=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Dl(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Ol=new RegExp("^-?(0*)\\d{1,10}$"),Ll=-2147483648,Fl=2147483647,Qi=function(n){if(Ol.test(n)){const e=Number(n);if(e>=Ll&&e<=Fl)return e}return null},Ze=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Z("Exception was thrown by user callback.",t),e},Math.floor(0))}},Bl=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},lt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Wl{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ol(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Z(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ul{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Y("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Z(e)}}class Lt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Lt.OWNER="owner";/**
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
 */const Xn="5",tr="v",nr="s",ir="r",sr="f",rr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,or="ls",ar="p",Ln="ac",lr="websocket",cr="long_polling";/**
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
 */class hr{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Hl(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ur(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let i;if(e===lr)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===cr)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Hl(n)&&(t.ns=n.namespace);const s=[];return ee(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Vl{constructor(){this.counters_={}}incrementCounter(e,t=1){Ce(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Fo(this.counters_)}}/**
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
 */const wn={},bn={};function Jn(n){const e=n.toString();return wn[e]||(wn[e]=new Vl),wn[e]}function $l(n,e){const t=n.toString();return bn[t]||(bn[t]=e()),bn[t]}/**
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
 */class zl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ze(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Xi="start",Gl="close",jl="pLPCommand",ql="pRTLPCB",dr="id",fr="pw",_r="ser",Yl="cb",Kl="seg",Ql="ts",Xl="d",Jl="dframe",pr=1870,mr=30,Zl=pr-mr,ec=25e3,tc=3e4;class Ue{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=St(e),this.stats_=Jn(t),this.urlFn=l=>(this.appCheckToken&&(l[Ln]=this.appCheckToken),ur(t,cr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new zl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tc)),xl(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zn((...r)=>{const[o,a,l,c,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Xi)this.id=a,this.password=l;else if(o===Gl)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Xi]="t",i[_r]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Yl]=this.scriptTagHolder.uniqueCallbackIdentifier),i[tr]=Xn,this.transportSessionId&&(i[nr]=this.transportSessionId),this.lastSessionId&&(i[or]=this.lastSessionId),this.applicationId&&(i[ar]=this.applicationId),this.appCheckToken&&(i[Ln]=this.appCheckToken),typeof location<"u"&&location.hostname&&rr.test(location.hostname)&&(i[ir]=sr);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ue.forceAllow_=!0}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){return Ue.forceAllow_?!0:!Ue.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kl()&&!Pl()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=V(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Ls(t),s=Zs(i,Zl);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Jl]="t",i[dr]=e,i[fr]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=V(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Zn{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Nl(),window[jl+this.uniqueCallbackIdentifier]=e,window[ql+this.uniqueCallbackIdentifier]=t,this.myIFrame=Zn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Y("frame writing exception"),a.stack&&Y(a.stack),Y(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Y("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[dr]=this.myID,e[fr]=this.myPW,e[_r]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+mr+i.length<=pr;){const o=this.pendingSegs.shift();i=i+"&"+Kl+s+"="+o.seg+"&"+Ql+s+"="+o.ts+"&"+Xl+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(ec)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Y("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const nc=16384,ic=45e3;let Vt=null;typeof MozWebSocket<"u"?Vt=MozWebSocket:typeof WebSocket<"u"&&(Vt=WebSocket);class ce{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=St(this.connId),this.stats_=Jn(t),this.connURL=ce.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[tr]=Xn,typeof location<"u"&&location.hostname&&rr.test(location.hostname)&&(o[ir]=sr),t&&(o[nr]=t),i&&(o[or]=i),s&&(o[Ln]=s),r&&(o[ar]=r),ur(e,lr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pe.set("previous_websocket_failure",!0);try{let i;Jo(),this.mySock=new Vt(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ce.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Vt!==null&&!ce.forceDisallow_}static previouslyFailed(){return Pe.isInMemoryStorage||Pe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=dt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=V(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Zs(t,nc);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ic))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ce.responsesRequiredToBeHealthy=2;ce.healthyTimeout=3e4;/**
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
 */class pt{static get ALL_TRANSPORTS(){return[Ue,ce]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ce&&ce.isAvailable();let i=t&&!ce.previouslyFailed();if(e.webSocketOnly&&(t||Z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ce];else{const s=this.transports_=[];for(const r of pt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);pt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pt.globalTransportInitialized_=!1;/**
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
 */const sc=6e4,rc=5e3,oc=10*1024,ac=100*1024,In="t",Ji="d",lc="s",Zi="r",cc="e",es="o",ts="a",ns="n",is="p",hc="h";class uc{constructor(e,t,i,s,r,o,a,l,c,f){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=St("c:"+this.id+":"),this.transportManager_=new pt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=lt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ac?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>oc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(In in e){const t=e[In];t===ts?this.upgradeIfSecondaryHealthy_():t===Zi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===es&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=nt("t",e),i=nt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:is,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ts,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ns,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=nt("t",e),i=nt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=nt(In,e);if(Ji in e){const i=e[Ji];if(t===hc){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===ns){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===lc?this.onConnectionShutdown_(i):t===Zi?this.onReset_(i):t===cc?On("Server Error: "+i):t===es?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):On("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Xn!==i&&Z("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),lt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):lt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:is,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class gr{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class yr{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class $t extends yr{static getInstance(){return new $t}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Us()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ss=32,rs=768;class P{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function k(){return new P("")}function T(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Se(n){return n.pieces_.length-n.pieceNum_}function L(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new P(n.pieces_,e)}function vr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function dc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Cr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Er(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new P(e,0)}function $(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof P)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new P(t,0)}function N(n){return n.pieceNum_>=n.pieces_.length}function Q(n,e){const t=T(n),i=T(e);if(t===null)return e;if(t===i)return Q(L(n),L(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ei(n,e){if(Se(n)!==Se(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function he(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Se(n)>Se(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class fc{constructor(e,t){this.errorPrefix_=t,this.parts_=Cr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=rn(this.parts_[i]);wr(this)}}function _c(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=rn(e),wr(n)}function pc(n){const e=n.parts_.pop();n.byteLength_-=rn(e),n.parts_.length>0&&(n.byteLength_-=1)}function wr(n){if(n.byteLength_>rs)throw new Error(n.errorPrefix_+"has a key path longer than "+rs+" bytes ("+n.byteLength_+").");if(n.parts_.length>ss)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ss+") or object contains a cycle "+ke(n))}function ke(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class ti extends yr{static getInstance(){return new ti}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const it=1e3,mc=60*5*1e3,os=30*1e3,gc=1.3,yc=3e4,vc="server_kill",as=3;class ge extends gr{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ge.nextPersistentConnectionId_++,this.log_=St("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=it,this.maxReconnectDelay_=mc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ti.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$t.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(V(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new sn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ge.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ce(e,"w")){const i=je(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Z(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ra(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=os)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=sa(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+V(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):On("Unrecognized action received from server: "+V(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=it,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=it,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yc&&(this.reconnectDelay_=it),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ge.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,u]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Y("getToken() completed but was canceled"):(Y("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,a=new uc(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,m=>{Z(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(vc)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Z(d),l())}}}interrupt(e){Y("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Y("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Li(this.interruptReasons_)&&(this.reconnectDelay_=it,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Qn(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new P(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Y("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=as&&(this.reconnectDelay_=os,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Y("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=as&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ks.replace(/\./g,"-")]=1,Us()?e["framework.cordova"]=1:Xo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$t.getInstance().currentlyOnline();return Li(this.interruptReasons_)&&e}}ge.nextPersistentConnectionId_=0;ge.nextConnectionId_=0;/**
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
 */class S{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new S(e,t)}}/**
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
 */class on{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new S(qe,e),s=new S(qe,t);return this.compare(i,s)!==0}minPost(){return S.MIN}}/**
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
 */let kt;class br extends on{static get __EMPTY_NODE(){return kt}static set __EMPTY_NODE(e){kt=e}compare(e,t){return Je(e.name,t.name)}isDefinedOn(e){throw Qe("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return S.MIN}maxPost(){return new S(Oe,kt)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new S(e,kt)}toString(){return".key"}}const $e=new br;/**
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
 */class Pt{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class G{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??G.RED,this.left=s??J.EMPTY_NODE,this.right=r??J.EMPTY_NODE}copy(e,t,i,s,r){return new G(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return J.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return J.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}G.RED=!0;G.BLACK=!1;class Cc{copy(e,t,i,s,r){return this}insert(e,t,i){return new G(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class J{constructor(e,t=J.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new J(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,G.BLACK,null,null))}remove(e){return new J(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,G.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Pt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Pt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Pt(this.root_,null,this.comparator_,!0,e)}}J.EMPTY_NODE=new Cc;/**
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
 */function Ec(n,e){return Je(n.name,e.name)}function ni(n,e){return Je(n,e)}/**
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
 */let Fn;function wc(n){Fn=n}const Ir=function(n){return typeof n=="number"?"number:"+er(n):"string:"+n},Tr=function(n){if(n.isLeafNode()){const e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ce(e,".sv"),"Priority must be a string or number.")}else p(n===Fn||n.isEmpty(),"priority of unexpected type.");p(n===Fn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ls;class z{static set __childrenNodeConstructor(e){ls=e}static get __childrenNodeConstructor(){return ls}constructor(e,t=z.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Tr(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new z(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:z.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return N(e)?this:T(e)===".priority"?this.priorityNode_:z.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:z.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=T(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(p(i!==".priority"||Se(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,z.__childrenNodeConstructor.EMPTY_NODE.updateChild(L(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ir(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=er(this.value_):e+=this.value_,this.lazyHash_=Xs(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===z.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof z.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=z.VALUE_TYPE_ORDER.indexOf(t),r=z.VALUE_TYPE_ORDER.indexOf(i);return p(s>=0,"Unknown leaf type: "+t),p(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}z.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Sr,Nr;function bc(n){Sr=n}function Ic(n){Nr=n}class Tc extends on{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Je(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return S.MIN}maxPost(){return new S(Oe,new z("[PRIORITY-POST]",Nr))}makePost(e,t){const i=Sr(e);return new S(t,new z("[PRIORITY-POST]",i))}toString(){return".priority"}}const H=new Tc;/**
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
 */const Sc=Math.log(2);class Nc{constructor(e){const t=r=>parseInt(Math.log(r)/Sc,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zt=function(n,e,t,i){n.sort(e);const s=function(l,c){const f=c-l;let d,u;if(f===0)return null;if(f===1)return d=n[l],u=t?t(d):d,new G(u,d.node,G.BLACK,null,null);{const m=parseInt(f/2,10)+l,g=s(l,m),M=s(m+1,c);return d=n[m],u=t?t(d):d,new G(u,d.node,G.BLACK,g,M)}},r=function(l){let c=null,f=null,d=n.length;const u=function(g,M){const w=d-g,se=d;d-=g;const re=s(w+1,se),oe=n[w],tt=t?t(oe):oe;m(new G(tt,oe.node,M,null,re))},m=function(g){c?(c.left=g,c=g):(f=g,c=g)};for(let g=0;g<l.count;++g){const M=l.nextBitIsOne(),w=Math.pow(2,l.count-(g+1));M?u(w,G.BLACK):(u(w,G.BLACK),u(w,G.RED))}return f},o=new Nc(n.length),a=r(o);return new J(i||e,a)};/**
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
 */let Tn;const We={};class me{static get Default(){return p(We&&H,"ChildrenNode.ts has not been loaded"),Tn=Tn||new me({".priority":We},{".priority":H}),Tn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=je(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof J?t:null}hasIndex(e){return Ce(this.indexSet_,e.toString())}addIndex(e,t){p(e!==$e,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(S.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=zt(i,e.getCompare()):a=We;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const f=Object.assign({},this.indexes_);return f[l]=a,new me(f,c)}addToIndexes(e,t){const i=Bt(this.indexes_,(s,r)=>{const o=je(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),s===We)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(S.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),zt(a,o.getCompare())}else return We;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new S(e.name,a))),l.insert(e,e.node)}});return new me(i,this.indexSet_)}removeFromIndexes(e,t){const i=Bt(this.indexes_,s=>{if(s===We)return s;{const r=t.get(e.name);return r?s.remove(new S(e.name,r)):s}});return new me(i,this.indexSet_)}}/**
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
 */let st;class v{static get EMPTY_NODE(){return st||(st=new v(new J(ni),null,me.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Tr(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||st}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?st:t}}getChild(e){const t=T(e);return t===null?this:this.getImmediateChild(t).getChild(L(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new S(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?st:this.priorityNode_;return new v(s,o,r)}}updateChild(e,t){const i=T(e);if(i===null)return t;{p(T(e)!==".priority"||Se(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(L(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(H,(o,a)=>{t[o]=a.val(e),i++,r&&v.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ir(this.getPriority().val())+":"),this.forEachChild(H,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Xs(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new S(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new S(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new S(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,S.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,S.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Nt?-1:0}withIndex(e){if(e===$e||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===$e||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(H),s=t.getIterator(H);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===$e?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Rc extends v{constructor(){super(new J(ni),v.EMPTY_NODE,me.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const Nt=new Rc;Object.defineProperties(S,{MIN:{value:new S(qe,v.EMPTY_NODE)},MAX:{value:new S(Oe,Nt)}});br.__EMPTY_NODE=v.EMPTY_NODE;z.__childrenNodeConstructor=v;wc(Nt);Ic(Nt);/**
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
 */const Ac=!0;function j(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new z(t,j(e))}if(!(n instanceof Array)&&Ac){const t=[];let i=!1;if(ee(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=j(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new S(o,l)))}}),t.length===0)return v.EMPTY_NODE;const r=zt(t,Ec,o=>o.name,ni);if(i){const o=zt(t,H.getCompare());return new v(r,j(e),new me({".priority":o},{".priority":H}))}else return new v(r,j(e),me.Default)}else{let t=v.EMPTY_NODE;return ee(n,(i,s)=>{if(Ce(n,i)&&i.substring(0,1)!=="."){const r=j(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(j(e))}}bc(j);/**
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
 */class xc extends on{constructor(e){super(),this.indexPath_=e,p(!N(e)&&T(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Je(e.name,t.name):r}makePost(e,t){const i=j(e),s=v.EMPTY_NODE.updateChild(this.indexPath_,i);return new S(t,s)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,Nt);return new S(Oe,e)}toString(){return Cr(this.indexPath_,0).join("/")}}/**
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
 */class Mc extends on{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Je(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return S.MIN}maxPost(){return S.MAX}makePost(e,t){const i=j(e);return new S(t,i)}toString(){return".value"}}const kc=new Mc;/**
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
 */function Rr(n){return{type:"value",snapshotNode:n}}function Ye(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function mt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function gt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Pc(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class ii{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(mt(t,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ye(t,i)):o.trackChildChange(gt(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(H,(s,r)=>{t.hasChild(s)||i.trackChildChange(mt(s,r))}),t.isLeafNode()||t.forEachChild(H,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(gt(s,r,o))}else i.trackChildChange(Ye(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class yt{constructor(e){this.indexedFilter_=new ii(e.getIndex()),this.index_=e.getIndex(),this.startPost_=yt.getStartPost_(e),this.endPost_=yt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new S(t,i))||(i=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=v.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(H,(o,a)=>{r.matches(new S(o,a))||(s=s.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Dc{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new yt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new S(t,i))||(i=v.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(u,m)=>d(m,u)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const l=new S(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let u=s.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=s.getChildAfterChild(this.index_,u,this.reverse_);const m=u==null?1:o(u,l);if(f&&!i.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(gt(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(mt(t,d));const M=a.updateImmediateChild(t,v.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(Ye(u.name,u.node)),M.updateImmediateChild(u.name,u.node)):M}}else return i.isEmpty()?e:f&&o(c,l)>=0?(r!=null&&(r.trackChildChange(mt(c.name,c.node)),r.trackChildChange(Ye(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,v.EMPTY_NODE)):e}}/**
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
 */class si{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=H}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:qe}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Oe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===H}copy(){const e=new si;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Oc(n){return n.loadsAllData()?new ii(n.getIndex()):n.hasLimit()?new Dc(n):new yt(n)}function cs(n){const e={};if(n.isDefault())return e;let t;if(n.index_===H?t="$priority":n.index_===kc?t="$value":n.index_===$e?t="$key":(p(n.index_ instanceof xc,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=V(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=V(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+V(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=V(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+V(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function hs(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==H&&(e.i=n.index_.toString()),e}/**
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
 */class Gt extends gr{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=St("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Gt.getListenId_(e,i),a={};this.listens_[o]=a;const l=cs(e._queryParams);this.restRequest_(r+".json",l,(c,f)=>{let d=f;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),je(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",s(u,null)}})}unlisten(e,t){const i=Gt.getListenId_(e,t);delete this.listens_[i]}get(e){const t=cs(e._queryParams),i=e._path.toString(),s=new sn;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oa(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=dt(a.responseText)}catch{Z("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Z("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */function jt(){return{value:null,children:new Map}}function Ar(n,e,t){if(N(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=T(e);n.children.has(i)||n.children.set(i,jt());const s=n.children.get(i);e=L(e),Ar(s,e,t)}}function Bn(n,e,t){n.value!==null?t(e,n.value):Fc(n,(i,s)=>{const r=new P(e.toString()+"/"+i);Bn(s,r,t)})}function Fc(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class Bc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ee(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const us=10*1e3,Wc=30*1e3,Uc=5*60*1e3;class Hc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Bc(e);const i=us+(Wc-us)*Math.random();lt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;ee(e,(s,r)=>{r>0&&Ce(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),lt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Uc))}}/**
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
 */var ue;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ue||(ue={}));function xr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ri(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function oi(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class qt{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ue.ACK_USER_WRITE,this.source=xr()}operationForChild(e){if(N(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new P(e));return new qt(k(),t,this.revert)}}else return p(T(this.path)===e,"operationForChild called for unrelated child."),new qt(L(this.path),this.affectedTree,this.revert)}}/**
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
 */class vt{constructor(e,t){this.source=e,this.path=t,this.type=ue.LISTEN_COMPLETE}operationForChild(e){return N(this.path)?new vt(this.source,k()):new vt(this.source,L(this.path))}}/**
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
 */class Le{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ue.OVERWRITE}operationForChild(e){return N(this.path)?new Le(this.source,k(),this.snap.getImmediateChild(e)):new Le(this.source,L(this.path),this.snap)}}/**
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
 */class Ct{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ue.MERGE}operationForChild(e){if(N(this.path)){const t=this.children.subtree(new P(e));return t.isEmpty()?null:t.value?new Le(this.source,k(),t.value):new Ct(this.source,k(),t)}else return p(T(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ct(this.source,L(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ne{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(N(e))return this.isFullyInitialized()&&!this.filtered_;const t=T(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Vc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $c(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Pc(o.childName,o.snapshotNode))}),rt(n,s,"child_removed",e,i,t),rt(n,s,"child_added",e,i,t),rt(n,s,"child_moved",r,i,t),rt(n,s,"child_changed",e,i,t),rt(n,s,"value",e,i,t),s}function rt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Gc(n,a,l)),o.forEach(a=>{const l=zc(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function zc(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Gc(n,e,t){if(e.childName==null||t.childName==null)throw Qe("Should only compare child_ events.");const i=new S(e.childName,e.snapshotNode),s=new S(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function an(n,e){return{eventCache:n,serverCache:e}}function ct(n,e,t,i){return an(new Ne(e,t,i),n.serverCache)}function Mr(n,e,t,i){return an(n.eventCache,new Ne(e,t,i))}function Yt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Fe(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Sn;const jc=()=>(Sn||(Sn=new J(Ml)),Sn);class B{static fromObject(e){let t=new B(null);return ee(e,(i,s)=>{t=t.set(new P(i),s)}),t}constructor(e,t=jc()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:k(),value:this.value};if(N(e))return null;{const i=T(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(L(e),t);return r!=null?{path:$(new P(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(N(e))return this;{const t=T(e),i=this.children.get(t);return i!==null?i.subtree(L(e)):new B(null)}}set(e,t){if(N(e))return new B(t,this.children);{const i=T(e),r=(this.children.get(i)||new B(null)).set(L(e),t),o=this.children.insert(i,r);return new B(this.value,o)}}remove(e){if(N(e))return this.children.isEmpty()?new B(null):new B(null,this.children);{const t=T(e),i=this.children.get(t);if(i){const s=i.remove(L(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new B(null):new B(this.value,r)}else return this}}get(e){if(N(e))return this.value;{const t=T(e),i=this.children.get(t);return i?i.get(L(e)):null}}setTree(e,t){if(N(e))return t;{const i=T(e),r=(this.children.get(i)||new B(null)).setTree(L(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new B(this.value,o)}}fold(e){return this.fold_(k(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_($(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,k(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(N(e))return null;{const r=T(e),o=this.children.get(r);return o?o.findOnPath_(L(e),$(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,k(),t)}foreachOnPath_(e,t,i){if(N(e))return this;{this.value&&i(t,this.value);const s=T(e),r=this.children.get(s);return r?r.foreachOnPath_(L(e),$(t,s),i):new B(null)}}foreach(e){this.foreach_(k(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_($(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class de{constructor(e){this.writeTree_=e}static empty(){return new de(new B(null))}}function ht(n,e,t){if(N(e))return new de(new B(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Q(s,e);return r=r.updateChild(o,t),new de(n.writeTree_.set(s,r))}else{const s=new B(t),r=n.writeTree_.setTree(e,s);return new de(r)}}}function ds(n,e,t){let i=n;return ee(t,(s,r)=>{i=ht(i,$(e,s),r)}),i}function fs(n,e){if(N(e))return de.empty();{const t=n.writeTree_.setTree(e,new B(null));return new de(t)}}function Wn(n,e){return Be(n,e)!=null}function Be(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Q(t.path,e)):null}function _s(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(H,(i,s)=>{e.push(new S(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new S(i,s.value))}),e}function Ie(n,e){if(N(e))return n;{const t=Be(n,e);return t!=null?new de(new B(t)):new de(n.writeTree_.subtree(e))}}function Un(n){return n.writeTree_.isEmpty()}function Ke(n,e){return kr(k(),n.writeTree_,e)}function kr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=kr($(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild($(n,".priority"),i)),t}}/**
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
 */function ln(n,e){return Lr(e,n)}function qc(n,e,t,i,s){p(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=ht(n.visibleWrites,e,t)),n.lastWriteId=i}function Yc(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Kc(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Qc(a,i.path)?s=!1:he(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Xc(n),!0;if(i.snap)n.visibleWrites=fs(n.visibleWrites,i.path);else{const a=i.children;ee(a,l=>{n.visibleWrites=fs(n.visibleWrites,$(i.path,l))})}return!0}else return!1}function Qc(n,e){if(n.snap)return he(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&he($(n.path,t),e))return!0;return!1}function Xc(n){n.visibleWrites=Pr(n.allWrites,Jc,k()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Jc(n){return n.visible}function Pr(n,e,t){let i=de.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)he(t,o)?(a=Q(t,o),i=ht(i,a,r.snap)):he(o,t)&&(a=Q(o,t),i=ht(i,k(),r.snap.getChild(a)));else if(r.children){if(he(t,o))a=Q(t,o),i=ds(i,a,r.children);else if(he(o,t))if(a=Q(o,t),N(a))i=ds(i,k(),r.children);else{const l=je(r.children,T(a));if(l){const c=l.getChild(L(a));i=ht(i,k(),c)}}}else throw Qe("WriteRecord should have .snap or .children")}}return i}function Dr(n,e,t,i,s){if(!i&&!s){const r=Be(n.visibleWrites,e);if(r!=null)return r;{const o=Ie(n.visibleWrites,e);if(Un(o))return t;if(t==null&&!Wn(o,k()))return null;{const a=t||v.EMPTY_NODE;return Ke(o,a)}}}else{const r=Ie(n.visibleWrites,e);if(!s&&Un(r))return t;if(!s&&t==null&&!Wn(r,k()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(he(c.path,e)||he(e,c.path))},a=Pr(n.allWrites,o,e),l=t||v.EMPTY_NODE;return Ke(a,l)}}}function Zc(n,e,t){let i=v.EMPTY_NODE;const s=Be(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(H,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ie(n.visibleWrites,e);return t.forEachChild(H,(o,a)=>{const l=Ke(Ie(r,new P(o)),a);i=i.updateImmediateChild(o,l)}),_s(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ie(n.visibleWrites,e);return _s(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function eh(n,e,t,i,s){p(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=$(e,t);if(Wn(n.visibleWrites,r))return null;{const o=Ie(n.visibleWrites,r);return Un(o)?s.getChild(t):Ke(o,s.getChild(t))}}function th(n,e,t,i){const s=$(e,t),r=Be(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ie(n.visibleWrites,s);return Ke(o,i.getNode().getImmediateChild(t))}else return null}function nh(n,e){return Be(n.visibleWrites,e)}function ih(n,e,t,i,s,r,o){let a;const l=Ie(n.visibleWrites,e),c=Be(l,k());if(c!=null)a=c;else if(t!=null)a=Ke(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],d=o.getCompare(),u=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=u.getNext();for(;m&&f.length<s;)d(m,i)!==0&&f.push(m),m=u.getNext();return f}else return[]}function sh(){return{visibleWrites:de.empty(),allWrites:[],lastWriteId:-1}}function Kt(n,e,t,i){return Dr(n.writeTree,n.treePath,e,t,i)}function ai(n,e){return Zc(n.writeTree,n.treePath,e)}function ps(n,e,t,i){return eh(n.writeTree,n.treePath,e,t,i)}function Qt(n,e){return nh(n.writeTree,$(n.treePath,e))}function rh(n,e,t,i,s,r){return ih(n.writeTree,n.treePath,e,t,i,s,r)}function li(n,e,t){return th(n.writeTree,n.treePath,e,t)}function Or(n,e){return Lr($(n.treePath,e),n.writeTree)}function Lr(n,e){return{treePath:n,writeTree:e}}/**
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
 */class oh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,gt(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,mt(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Ye(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,gt(i,e.snapshotNode,s.oldSnap));else throw Qe("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ah{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Fr=new ah;class ci{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ne(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return li(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fe(this.viewCache_),r=rh(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function lh(n){return{filter:n}}function ch(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function hh(n,e,t,i,s){const r=new oh;let o,a;if(t.type===ue.OVERWRITE){const c=t;c.source.fromUser?o=Hn(n,e,c.path,c.snap,i,s,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!N(c.path),o=Xt(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===ue.MERGE){const c=t;c.source.fromUser?o=dh(n,e,c.path,c.children,i,s,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Vn(n,e,c.path,c.children,i,s,a,r))}else if(t.type===ue.ACK_USER_WRITE){const c=t;c.revert?o=ph(n,e,c.path,i,s,r):o=fh(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===ue.LISTEN_COMPLETE)o=_h(n,e,t.path,i,r);else throw Qe("Unknown operation type: "+t.type);const l=r.getChanges();return uh(e,o,l),{viewCache:o,changes:l}}function uh(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Yt(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Rr(Yt(e)))}}function Br(n,e,t,i,s,r){const o=e.eventCache;if(Qt(i,t)!=null)return e;{let a,l;if(N(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Fe(e),f=c instanceof v?c:v.EMPTY_NODE,d=ai(i,f);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Kt(i,Fe(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=T(t);if(c===".priority"){p(Se(t)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const d=ps(i,t,f,l);d!=null?a=n.filter.updatePriority(f,d):a=o.getNode()}else{const f=L(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=ps(i,t,o.getNode(),l);u!=null?d=o.getNode().getImmediateChild(c).updateChild(f,u):d=o.getNode().getImmediateChild(c)}else d=li(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,f,s,r):a=o.getNode()}}return ct(e,a,o.isFullyInitialized()||N(t),n.filter.filtersNodes())}}function Xt(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const f=o?n.filter:n.filter.getIndexedFilter();if(N(t))c=f.updateFullNode(l.getNode(),i,null);else if(f.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(t,i);c=f.updateFullNode(l.getNode(),m,null)}else{const m=T(t);if(!l.isCompleteForPath(t)&&Se(t)>1)return e;const g=L(t),w=l.getNode().getImmediateChild(m).updateChild(g,i);m===".priority"?c=f.updatePriority(l.getNode(),w):c=f.updateChild(l.getNode(),m,w,g,Fr,null)}const d=Mr(e,c,l.isFullyInitialized()||N(t),f.filtersNodes()),u=new ci(s,d,r);return Br(n,d,t,s,u,a)}function Hn(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const f=new ci(s,e,r);if(N(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ct(e,c,!0,n.filter.filtersNodes());else{const d=T(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=ct(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=L(t),m=a.getNode().getImmediateChild(d);let g;if(N(u))g=i;else{const M=f.getCompleteChild(d);M!=null?vr(u)===".priority"&&M.getChild(Er(u)).isEmpty()?g=M:g=M.updateChild(u,i):g=v.EMPTY_NODE}if(m.equals(g))l=e;else{const M=n.filter.updateChild(a.getNode(),d,g,u,f,o);l=ct(e,M,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function ms(n,e){return n.eventCache.isCompleteForChild(e)}function dh(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const f=$(t,l);ms(e,T(f))&&(a=Hn(n,a,f,c,s,r,o))}),i.foreach((l,c)=>{const f=$(t,l);ms(e,T(f))||(a=Hn(n,a,f,c,s,r,o))}),a}function gs(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Vn(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;N(t)?c=i:c=new B(null).setTree(t,i);const f=e.serverCache.getNode();return c.children.inorderTraversal((d,u)=>{if(f.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),g=gs(n,m,u);l=Xt(n,l,new P(d),g,s,r,o,a)}}),c.children.inorderTraversal((d,u)=>{const m=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!f.hasChild(d)&&!m){const g=e.serverCache.getNode().getImmediateChild(d),M=gs(n,g,u);l=Xt(n,l,new P(d),M,s,r,o,a)}}),l}function fh(n,e,t,i,s,r,o){if(Qt(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(N(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Xt(n,e,t,l.getNode().getChild(t),s,r,a,o);if(N(t)){let c=new B(null);return l.getNode().forEachChild($e,(f,d)=>{c=c.set(new P(f),d)}),Vn(n,e,t,c,s,r,a,o)}else return e}else{let c=new B(null);return i.foreach((f,d)=>{const u=$(t,f);l.isCompleteForPath(u)&&(c=c.set(f,l.getNode().getChild(u)))}),Vn(n,e,t,c,s,r,a,o)}}function _h(n,e,t,i,s){const r=e.serverCache,o=Mr(e,r.getNode(),r.isFullyInitialized()||N(t),r.isFiltered());return Br(n,o,t,i,Fr,s)}function ph(n,e,t,i,s,r){let o;if(Qt(i,t)!=null)return e;{const a=new ci(i,e,s),l=e.eventCache.getNode();let c;if(N(t)||T(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Kt(i,Fe(e));else{const d=e.serverCache.getNode();p(d instanceof v,"serverChildren would be complete if leaf node"),f=ai(i,d)}f=f,c=n.filter.updateFullNode(l,f,r)}else{const f=T(t);let d=li(i,f,e.serverCache);d==null&&e.serverCache.isCompleteForChild(f)&&(d=l.getImmediateChild(f)),d!=null?c=n.filter.updateChild(l,f,d,L(t),a,r):e.eventCache.getNode().hasChild(f)?c=n.filter.updateChild(l,f,v.EMPTY_NODE,L(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Kt(i,Fe(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Qt(i,k())!=null,ct(e,c,o,n.filter.filtersNodes())}}/**
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
 */class mh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new ii(i.getIndex()),r=Oc(i);this.processor_=lh(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(v.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),f=new Ne(l,o.isFullyInitialized(),s.filtersNodes()),d=new Ne(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=an(d,f),this.eventGenerator_=new Vc(this.query_)}get query(){return this.query_}}function gh(n){return n.viewCache_.serverCache.getNode()}function yh(n){return Yt(n.viewCache_)}function vh(n,e){const t=Fe(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!N(e)&&!t.getImmediateChild(T(e)).isEmpty())?t.getChild(e):null}function ys(n){return n.eventRegistrations_.length===0}function Ch(n,e){n.eventRegistrations_.push(e)}function vs(n,e,t){const i=[];if(t){p(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Cs(n,e,t,i){e.type===ue.MERGE&&e.source.queryId!==null&&(p(Fe(n.viewCache_),"We should always have a full cache before handling merges"),p(Yt(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=hh(n.processor_,s,e,t,i);return ch(n.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Wr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Eh(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(H,(r,o)=>{i.push(Ye(r,o))}),t.isFullyInitialized()&&i.push(Rr(t.getNode())),Wr(n,i,t.getNode(),e)}function Wr(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return $c(n.eventGenerator_,e,t,s)}/**
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
 */let Jt;class Ur{constructor(){this.views=new Map}}function wh(n){p(!Jt,"__referenceConstructor has already been defined"),Jt=n}function bh(){return p(Jt,"Reference.ts has not been loaded"),Jt}function Ih(n){return n.views.size===0}function hi(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return p(r!=null,"SyncTree gave us an op for an invalid query."),Cs(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Cs(o,e,t,i));return r}}function Hr(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Kt(t,s?i:null),l=!1;a?l=!0:i instanceof v?(a=ai(t,i),l=!1):(a=v.EMPTY_NODE,l=!1);const c=an(new Ne(a,l,!1),new Ne(i,s,!1));return new mh(e,c)}return o}function Th(n,e,t,i,s,r){const o=Hr(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Ch(o,t),Eh(o,t)}function Sh(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Re(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(vs(c,t,i)),ys(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(vs(l,t,i)),ys(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Re(n)&&r.push(new(bh())(e._repo,e._path)),{removed:r,events:o}}function Vr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Te(n,e){let t=null;for(const i of n.views.values())t=t||vh(i,e);return t}function $r(n,e){if(e._queryParams.loadsAllData())return cn(n);{const i=e._queryIdentifier;return n.views.get(i)}}function zr(n,e){return $r(n,e)!=null}function Re(n){return cn(n)!=null}function cn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Zt;function Nh(n){p(!Zt,"__referenceConstructor has already been defined"),Zt=n}function Rh(){return p(Zt,"Reference.ts has not been loaded"),Zt}let Ah=1;class Es{constructor(e){this.listenProvider_=e,this.syncPointTree_=new B(null),this.pendingWriteTree_=sh(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gr(n,e,t,i,s){return qc(n.pendingWriteTree_,e,t,i,s),s?At(n,new Le(xr(),e,t)):[]}function De(n,e,t=!1){const i=Yc(n.pendingWriteTree_,e);if(Kc(n.pendingWriteTree_,e)){let r=new B(null);return i.snap!=null?r=r.set(k(),!0):ee(i.children,o=>{r=r.set(new P(o),!0)}),At(n,new qt(i.path,r,t))}else return[]}function Rt(n,e,t){return At(n,new Le(ri(),e,t))}function xh(n,e,t){const i=B.fromObject(t);return At(n,new Ct(ri(),e,i))}function Mh(n,e){return At(n,new vt(ri(),e))}function kh(n,e,t){const i=di(n,t);if(i){const s=fi(i),r=s.path,o=s.queryId,a=Q(r,e),l=new vt(oi(o),a);return _i(n,r,l)}else return[]}function en(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||zr(o,e))){const l=Sh(o,e,t,i);Ih(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const f=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(u,m)=>Re(m));if(f&&!d){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const m=Oh(u);for(let g=0;g<m.length;++g){const M=m[g],w=M.query,se=Kr(n,M);n.listenProvider_.startListening(ut(w),Et(n,w),se.hashFn,se.onComplete)}}}!d&&c.length>0&&!i&&(f?n.listenProvider_.stopListening(ut(e),null):c.forEach(u=>{const m=n.queryToTagMap.get(hn(u));n.listenProvider_.stopListening(ut(u),m)}))}Lh(n,c)}return a}function jr(n,e,t,i){const s=di(n,i);if(s!=null){const r=fi(s),o=r.path,a=r.queryId,l=Q(o,e),c=new Le(oi(a),l,t);return _i(n,o,c)}else return[]}function Ph(n,e,t,i){const s=di(n,i);if(s){const r=fi(s),o=r.path,a=r.queryId,l=Q(o,e),c=B.fromObject(t),f=new Ct(oi(a),l,c);return _i(n,o,f)}else return[]}function $n(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(u,m)=>{const g=Q(u,s);r=r||Te(m,g),o=o||Re(m)});let a=n.syncPointTree_.get(s);a?(o=o||Re(a),r=r||Te(a,k())):(a=new Ur,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((m,g)=>{const M=Te(g,k());M&&(r=r.updateImmediateChild(m,M))}));const c=zr(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=hn(e);p(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const m=Fh();n.queryToTagMap.set(u,m),n.tagToQueryMap.set(m,u)}const f=ln(n.pendingWriteTree_,s);let d=Th(a,e,t,f,r,l);if(!c&&!o&&!i){const u=$r(a,e);d=d.concat(Bh(n,e,u))}return d}function ui(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Q(o,e),c=Te(a,l);if(c)return c});return Dr(s,e,r,t,!0)}function Dh(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,f)=>{const d=Q(c,t);i=i||Te(f,d)});let s=n.syncPointTree_.get(t);s?i=i||Te(s,k()):(s=new Ur,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new Ne(i,!0,!1):null,a=ln(n.pendingWriteTree_,e._path),l=Hr(s,e,a,r?o.getNode():v.EMPTY_NODE,r);return yh(l)}function At(n,e){return qr(e,n.syncPointTree_,null,ln(n.pendingWriteTree_,k()))}function qr(n,e,t,i){if(N(n.path))return Yr(n,e,t,i);{const s=e.get(k());t==null&&s!=null&&(t=Te(s,k()));let r=[];const o=T(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,f=Or(i,o);r=r.concat(qr(a,l,c,f))}return s&&(r=r.concat(hi(s,n,i,t))),r}}function Yr(n,e,t,i){const s=e.get(k());t==null&&s!=null&&(t=Te(s,k()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Or(i,o),f=n.operationForChild(o);f&&(r=r.concat(Yr(f,a,l,c)))}),s&&(r=r.concat(hi(s,n,i,t))),r}function Kr(n,e){const t=e.query,i=Et(n,t);return{hashFn:()=>(gh(e)||v.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?kh(n,t._path,i):Mh(n,t._path);{const r=Dl(s,t);return en(n,t,null,r)}}}}function Et(n,e){const t=hn(e);return n.queryToTagMap.get(t)}function hn(n){return n._path.toString()+"$"+n._queryIdentifier}function di(n,e){return n.tagToQueryMap.get(e)}function fi(n){const e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new P(n.substr(0,e))}}function _i(n,e,t){const i=n.syncPointTree_.get(e);p(i,"Missing sync point for query tag that we're tracking");const s=ln(n.pendingWriteTree_,e);return hi(i,t,s,null)}function Oh(n){return n.fold((e,t,i)=>{if(t&&Re(t))return[cn(t)];{let s=[];return t&&(s=Vr(t)),ee(i,(r,o)=>{s=s.concat(o)}),s}})}function ut(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Rh())(n._repo,n._path):n}function Lh(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=hn(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Fh(){return Ah++}function Bh(n,e,t){const i=e._path,s=Et(n,e),r=Kr(n,t),o=n.listenProvider_.startListening(ut(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)p(!Re(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,f,d)=>{if(!N(c)&&f&&Re(f))return[cn(f).query];{let u=[];return f&&(u=u.concat(Vr(f).map(m=>m.query))),ee(d,(m,g)=>{u=u.concat(g)}),u}});for(let c=0;c<l.length;++c){const f=l[c];n.listenProvider_.stopListening(ut(f),Et(n,f))}}return o}/**
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
 */class pi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new pi(t)}node(){return this.node_}}class mi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=$(this.path_,e);return new mi(this.syncTree_,t)}node(){return ui(this.syncTree_,this.path_)}}const Wh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ws=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Uh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Hh(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Uh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},Hh=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&p(!1,"Unexpected increment value: "+i);const s=e.node();if(p(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Vh=function(n,e,t,i){return gi(e,new mi(t,n),i)},Qr=function(n,e,t){return gi(n,new pi(e),t)};function gi(n,e,t){const i=n.getPriority().val(),s=ws(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=ws(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new z(a,j(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new z(s))),o.forEachChild(H,(a,l)=>{const c=gi(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class yi{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function vi(n,e){let t=e instanceof P?e:new P(e),i=n,s=T(t);for(;s!==null;){const r=je(i.node.children,s)||{children:{},childCount:0};i=new yi(s,i,r),t=L(t),s=T(t)}return i}function et(n){return n.node.value}function Xr(n,e){n.node.value=e,zn(n)}function Jr(n){return n.node.childCount>0}function $h(n){return et(n)===void 0&&!Jr(n)}function un(n,e){ee(n.node.children,(t,i)=>{e(new yi(t,n,i))})}function Zr(n,e,t,i){t&&e(n),un(n,s=>{Zr(s,e,!0)})}function zh(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function xt(n){return new P(n.parent===null?n.name:xt(n.parent)+"/"+n.name)}function zn(n){n.parent!==null&&Gh(n.parent,n.name,n)}function Gh(n,e,t){const i=$h(t),s=Ce(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,zn(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,zn(n))}/**
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
 */const jh=/[\[\].#$\/\u0000-\u001F\u007F]/,qh=/[\[\].#$\u0000-\u001F\u007F]/,Nn=10*1024*1024,eo=function(n){return typeof n=="string"&&n.length!==0&&!jh.test(n)},to=function(n){return typeof n=="string"&&n.length!==0&&!qh.test(n)},Yh=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),to(n)},Kh=function(n,e,t,i){Ci(Yn(n,"value"),e,t)},Ci=function(n,e,t){const i=t instanceof P?new fc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ke(i));if(typeof e=="function")throw new Error(n+"contains a function "+ke(i)+" with contents = "+e.toString());if(Js(e))throw new Error(n+"contains "+e.toString()+" "+ke(i));if(typeof e=="string"&&e.length>Nn/3&&rn(e)>Nn)throw new Error(n+"contains a string greater than "+Nn+" utf8 bytes "+ke(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ee(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!eo(o)))throw new Error(n+" contains an invalid key ("+o+") "+ke(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_c(i,o),Ci(n,a,i),pc(i)}),s&&r)throw new Error(n+' contains ".value" child '+ke(i)+" in addition to actual children.")}},no=function(n,e,t,i){if(!to(t))throw new Error(Yn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Qh=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),no(n,e,t)},Xh=function(n,e){if(T(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Jh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!eo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Yh(t))throw new Error(Yn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Zh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ei(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!ei(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function io(n,e,t){Ei(n,t),so(n,i=>ei(i,e))}function _e(n,e,t){Ei(n,t),so(n,i=>he(i,e)||he(e,i))}function so(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(eu(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function eu(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();at&&Y("event: "+t.toString()),Ze(i)}}}/**
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
 */const tu="repo_interrupt",nu=25;class iu{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Zh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jt(),this.transactionQueueTree_=new yi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function su(n,e,t){if(n.stats_=Jn(n.repoInfo_),n.forceRestClient_||Bl())n.server_=new Gt(n.repoInfo_,(i,s,r,o)=>{bs(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Is(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{V(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new ge(n.repoInfo_,e,(i,s,r,o)=>{bs(n,i,s,r,o)},i=>{Is(n,i)},i=>{ou(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=$l(n.repoInfo_,()=>new Hc(n.stats_,n.server_)),n.infoData_=new Lc,n.infoSyncTree_=new Es({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Rt(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),bi(n,"connected",!1),n.serverSyncTree_=new Es({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);_e(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function ru(n){const t=n.infoData_.getNode(new P(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function wi(n){return Wh({timestamp:ru(n)})}function bs(n,e,t,i,s){n.dataUpdateCount++;const r=new P(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Bt(t,c=>j(c));o=Ph(n.serverSyncTree_,r,l,s)}else{const l=j(t);o=jr(n.serverSyncTree_,r,l,s)}else if(i){const l=Bt(t,c=>j(c));o=xh(n.serverSyncTree_,r,l)}else{const l=j(t);o=Rt(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=fn(n,r)),_e(n.eventQueue_,a,o)}function Is(n,e){bi(n,"connected",e),e===!1&&cu(n)}function ou(n,e){ee(e,(t,i)=>{bi(n,t,i)})}function bi(n,e,t){const i=new P("/.info/"+e),s=j(t);n.infoData_.updateSnapshot(i,s);const r=Rt(n.infoSyncTree_,i,s);_e(n.eventQueue_,i,r)}function ro(n){return n.nextWriteId_++}function au(n,e,t){const i=Dh(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=j(s).withIndex(e._queryParams.getIndex());$n(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Rt(n.serverSyncTree_,e._path,r);else{const a=Et(n.serverSyncTree_,e);o=jr(n.serverSyncTree_,e._path,r,a)}return _e(n.eventQueue_,e._path,o),en(n.serverSyncTree_,e,t,null,!0),r},s=>(dn(n,"get for query "+V(e)+" failed: "+s),Promise.reject(new Error(s))))}function lu(n,e,t,i,s){dn(n,"set",{path:e.toString(),value:t,priority:i});const r=wi(n),o=j(t,i),a=ui(n.serverSyncTree_,e),l=Qr(o,a,r),c=ro(n),f=Gr(n.serverSyncTree_,e,l,c,!0);Ei(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(u,m)=>{const g=u==="ok";g||Z("set at "+e+" failed: "+u);const M=De(n.serverSyncTree_,c,!g);_e(n.eventQueue_,e,M),du(n,s,u,m)});const d=ho(n,e);fn(n,d),_e(n.eventQueue_,d,[])}function cu(n){dn(n,"onDisconnectEvents");const e=wi(n),t=jt();Bn(n.onDisconnect_,k(),(s,r)=>{const o=Vh(s,r,n.serverSyncTree_,e);Ar(t,s,o)});let i=[];Bn(t,k(),(s,r)=>{i=i.concat(Rt(n.serverSyncTree_,s,r));const o=ho(n,s);fn(n,o)}),n.onDisconnect_=jt(),_e(n.eventQueue_,k(),i)}function hu(n,e,t){let i;T(e._path)===".info"?i=$n(n.infoSyncTree_,e,t):i=$n(n.serverSyncTree_,e,t),io(n.eventQueue_,e._path,i)}function Ts(n,e,t){let i;T(e._path)===".info"?i=en(n.infoSyncTree_,e,t):i=en(n.serverSyncTree_,e,t),io(n.eventQueue_,e._path,i)}function uu(n){n.persistentConnection_&&n.persistentConnection_.interrupt(tu)}function dn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Y(t,...e)}function du(n,e,t,i){e&&Ze(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function oo(n,e,t){return ui(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function Ii(n,e=n.transactionQueueTree_){if(e||_n(n,e),et(e)){const t=lo(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&fu(n,xt(e),t)}else Jr(e)&&un(e,t=>{Ii(n,t)})}function fu(n,e,t){const i=t.map(c=>c.currentWriteId),s=oo(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const f=t[c];p(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const d=Q(e,f.path);r=r.updateChild(d,f.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{dn(n,"transaction put response",{path:l.toString(),status:c});let f=[];if(c==="ok"){const d=[];for(let u=0;u<t.length;u++)t[u].status=2,f=f.concat(De(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&d.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();_n(n,vi(n.transactionQueueTree_,e)),Ii(n,n.transactionQueueTree_),_e(n.eventQueue_,e,f);for(let u=0;u<d.length;u++)Ze(d[u])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{Z("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}fn(n,e)}},o)}function fn(n,e){const t=ao(n,e),i=xt(t),s=lo(n,t);return _u(n,s,i),i}function _u(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Q(t,l.path);let f=!1,d;if(p(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,d=l.abortReason,s=s.concat(De(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=nu)f=!0,d="maxretry",s=s.concat(De(n.serverSyncTree_,l.currentWriteId,!0));else{const u=oo(n,l.path,o);l.currentInputSnapshot=u;const m=e[a].update(u.val());if(m!==void 0){Ci("transaction failed: Data returned ",m,l.path);let g=j(m);typeof m=="object"&&m!=null&&Ce(m,".priority")||(g=g.updatePriority(u.getPriority()));const w=l.currentWriteId,se=wi(n),re=Qr(g,u,se);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=re,l.currentWriteId=ro(n),o.splice(o.indexOf(w),1),s=s.concat(Gr(n.serverSyncTree_,l.path,re,l.currentWriteId,l.applyLocally)),s=s.concat(De(n.serverSyncTree_,w,!0))}else f=!0,d="nodata",s=s.concat(De(n.serverSyncTree_,l.currentWriteId,!0))}_e(n.eventQueue_,t,s),s=[],f&&(e[a].status=2,function(u){setTimeout(u,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}_n(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Ze(i[a]);Ii(n,n.transactionQueueTree_)}function ao(n,e){let t,i=n.transactionQueueTree_;for(t=T(e);t!==null&&et(i)===void 0;)i=vi(i,t),e=L(e),t=T(e);return i}function lo(n,e){const t=[];return co(n,e,t),t.sort((i,s)=>i.order-s.order),t}function co(n,e,t){const i=et(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);un(e,s=>{co(n,s,t)})}function _n(n,e){const t=et(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Xr(e,t.length>0?t:void 0)}un(e,i=>{_n(n,i)})}function ho(n,e){const t=xt(ao(n,e)),i=vi(n.transactionQueueTree_,e);return zh(i,s=>{Rn(n,s)}),Rn(n,i),Zr(i,s=>{Rn(n,s)}),t}function Rn(n,e){const t=et(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(De(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Xr(e,void 0):t.length=r+1,_e(n.eventQueue_,xt(e),s);for(let o=0;o<i.length;o++)Ze(i[o])}}/**
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
 */function pu(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function mu(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Z(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ss=function(n,e){const t=gu(n),i=t.namespace;t.domain==="firebase.com"&&ve(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&ve("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Al();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new hr(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new P(t.pathString)}},gu=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let f=n.indexOf("/");f===-1&&(f=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(f,d)),f<d&&(s=pu(n.substring(f,d)));const u=mu(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=i}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class yu{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+V(this.snapshot.exportVal())}}class vu{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class uo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ti{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return N(this._path)?null:vr(this._path)}get ref(){return new Ee(this._repo,this._path)}get _queryIdentifier(){const e=hs(this._queryParams),t=Qn(e);return t==="{}"?"default":t}get _queryObject(){return hs(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof Ti))return!1;const t=this._repo===e._repo,i=ei(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+dc(this._path)}}class Ee extends Ti{constructor(e,t){super(e,t,new si,!1)}get parent(){const e=Er(this._path);return e===null?null:new Ee(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class wt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new P(e),i=tn(this.ref,e);return new wt(this._node.getChild(t),i,H)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new wt(s,tn(this.ref,i),H)))}hasChild(e){const t=new P(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function te(n,e){return n=Xe(n),n._checkNotDeleted("ref"),e!==void 0?tn(n._root,e):n._root}function tn(n,e){return n=Xe(n),T(n._path)===null?Qh("child","path",e):no("child","path",e),new Ee(n._repo,$(n._path,e))}function ze(n,e){n=Xe(n),Xh("set",n._path),Kh("set",e,n._path);const t=new sn;return lu(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function fo(n){n=Xe(n);const e=new uo(()=>{}),t=new pn(e);return au(n._repo,n,t).then(i=>new wt(i,new Ee(n._repo,n._path),n._queryParams.getIndex()))}class pn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new yu("value",this,new wt(e.snapshotNode,new Ee(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new vu(this,e,t):null}matches(e){return e instanceof pn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Cu(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(f,d)=>{Ts(n._repo,n,a),l(f,d)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new uo(t,r||void 0),a=new pn(o);return hu(n._repo,n,a),()=>Ts(n._repo,n,a)}function Mt(n,e,t,i){return Cu(n,"value",e,t,i)}wh(Ee);Nh(Ee);/**
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
 */const Eu="FIREBASE_DATABASE_EMULATOR_HOST",Gn={};let wu=!1;function bu(n,e,t,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=qn(r);n.repoInfo_=new hr(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function Iu(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||ve("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Y("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ss(r,s),a=o.repoInfo,l;typeof process<"u"&&ji&&(l=ji[Eu]),l?(r=`http://${l}?ns=${a.namespace}`,o=Ss(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Ul(n.name,n.options,e);Jh("Invalid Firebase Database URL",o),N(o.path)||ve("Database URL must point to the root of a Firebase Database (not including a child path).");const f=Su(a,n,c,new Wl(n,t));return new Nu(f,n)}function Tu(n,e){const t=Gn[e];(!t||t[n.key]!==n)&&ve(`Database ${e}(${n.repoInfo_}) has already been deleted.`),uu(n),delete t[n.key]}function Su(n,e,t,i){let s=Gn[e.name];s||(s={},Gn[e.name]=s);let r=s[n.toURLString()];return r&&ve("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new iu(n,wu,t,i),s[n.toURLString()]=r,r}class Nu{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(su(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ee(this._repo,k())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Tu(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ve("Cannot call "+e+" on a deleted database.")}}function Ru(n=hl(),e){const t=rl(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=zo("database");i&&Au(t,...i)}return t}function Au(n,e,t,i={}){n=Xe(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Wt(i,r.repoInfo_.emulatorOptions))return;ve("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&ve('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Lt(Lt.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:jo(i.mockUserToken,n.app.options.projectId);o=new Lt(a)}qn(e)&&(Go(e),Ko("Database",!0)),bu(r,s,i,o)}/**
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
 */function xu(n){bl(cl),Ht(new ft("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Iu(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),He(qi,Yi,n),He(qi,Yi,"esm2017")}ge.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ge.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};xu();var Si={};(function n(e,t,i,s){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;try{var _=new OffscreenCanvas(1,1),h=_.getContext("2d");h.fillRect(0,0,1,1);var y=_.transferToImageBitmap();h.createPattern(y,"no-repeat")}catch{return!1}return!0}();function l(){}function c(_){var h=t.exports.Promise,y=h!==void 0?h:e.Promise;return typeof y=="function"?new y(_):(_(l,l),null)}var f=function(_,h){return{transform:function(y){if(_)return y;if(h.has(y))return h.get(y);var E=new OffscreenCanvas(y.width,y.height),b=E.getContext("2d");return b.drawImage(y,0,0),h.set(y,E),E},clear:function(){h.clear()}}}(a,new Map),d=function(){var _=Math.floor(16.666666666666668),h,y,E={},b=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(h=function(I){var R=Math.random();return E[R]=requestAnimationFrame(function C(A){b===A||b+_-1<A?(b=A,delete E[R],I()):E[R]=requestAnimationFrame(C)}),R},y=function(I){E[I]&&cancelAnimationFrame(E[I])}):(h=function(I){return setTimeout(I,_)},y=function(I){return clearTimeout(I)}),{frame:h,cancel:y}}(),u=function(){var _,h,y={};function E(b){function I(R,C){b.postMessage({options:R||{},callback:C})}b.init=function(C){var A=C.transferControlToOffscreen();b.postMessage({canvas:A},[A])},b.fire=function(C,A,D){if(h)return I(C,null),h;var W=Math.random().toString(36).slice(2);return h=c(function(F){function U(q){q.data.callback===W&&(delete y[W],b.removeEventListener("message",U),h=null,f.clear(),D(),F())}b.addEventListener("message",U),I(C,W),y[W]=U.bind(null,{data:{callback:W}})}),h},b.reset=function(){b.postMessage({reset:!0});for(var C in y)y[C](),delete y[C]}}return function(){if(_)return _;if(!i&&r){var b=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{_=new Worker(URL.createObjectURL(new Blob([b])))}catch(I){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",I),null}E(_)}return _}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(_,h){return h?h(_):_}function M(_){return _!=null}function w(_,h,y){return g(_&&M(_[h])?_[h]:m[h],y)}function se(_){return _<0?0:Math.floor(_)}function re(_,h){return Math.floor(Math.random()*(h-_))+_}function oe(_){return parseInt(_,16)}function tt(_){return _.map(_o)}function _o(_){var h=String(_).replace(/[^0-9a-f]/gi,"");return h.length<6&&(h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]),{r:oe(h.substring(0,2)),g:oe(h.substring(2,4)),b:oe(h.substring(4,6))}}function po(_){var h=w(_,"origin",Object);return h.x=w(h,"x",Number),h.y=w(h,"y",Number),h}function mo(_){_.width=document.documentElement.clientWidth,_.height=document.documentElement.clientHeight}function go(_){var h=_.getBoundingClientRect();_.width=h.width,_.height=h.height}function yo(_){var h=document.createElement("canvas");return h.style.position="fixed",h.style.top="0px",h.style.left="0px",h.style.pointerEvents="none",h.style.zIndex=_,h}function vo(_,h,y,E,b,I,R,C,A){_.save(),_.translate(h,y),_.rotate(I),_.scale(E,b),_.arc(0,0,1,R,C,A),_.restore()}function Co(_){var h=_.angle*(Math.PI/180),y=_.spread*(Math.PI/180);return{x:_.x,y:_.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:_.startVelocity*.5+Math.random()*_.startVelocity,angle2D:-h+(.5*y-Math.random()*y),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:_.color,shape:_.shape,tick:0,totalTicks:_.ticks,decay:_.decay,drift:_.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:_.gravity*3,ovalScalar:.6,scalar:_.scalar,flat:_.flat}}function Eo(_,h){h.x+=Math.cos(h.angle2D)*h.velocity+h.drift,h.y+=Math.sin(h.angle2D)*h.velocity+h.gravity,h.velocity*=h.decay,h.flat?(h.wobble=0,h.wobbleX=h.x+10*h.scalar,h.wobbleY=h.y+10*h.scalar,h.tiltSin=0,h.tiltCos=0,h.random=1):(h.wobble+=h.wobbleSpeed,h.wobbleX=h.x+10*h.scalar*Math.cos(h.wobble),h.wobbleY=h.y+10*h.scalar*Math.sin(h.wobble),h.tiltAngle+=.1,h.tiltSin=Math.sin(h.tiltAngle),h.tiltCos=Math.cos(h.tiltAngle),h.random=Math.random()+2);var y=h.tick++/h.totalTicks,E=h.x+h.random*h.tiltCos,b=h.y+h.random*h.tiltSin,I=h.wobbleX+h.random*h.tiltCos,R=h.wobbleY+h.random*h.tiltSin;if(_.fillStyle="rgba("+h.color.r+", "+h.color.g+", "+h.color.b+", "+(1-y)+")",_.beginPath(),o&&h.shape.type==="path"&&typeof h.shape.path=="string"&&Array.isArray(h.shape.matrix))_.fill(bo(h.shape.path,h.shape.matrix,h.x,h.y,Math.abs(I-E)*.1,Math.abs(R-b)*.1,Math.PI/10*h.wobble));else if(h.shape.type==="bitmap"){var C=Math.PI/10*h.wobble,A=Math.abs(I-E)*.1,D=Math.abs(R-b)*.1,W=h.shape.bitmap.width*h.scalar,F=h.shape.bitmap.height*h.scalar,U=new DOMMatrix([Math.cos(C)*A,Math.sin(C)*A,-Math.sin(C)*D,Math.cos(C)*D,h.x,h.y]);U.multiplySelf(new DOMMatrix(h.shape.matrix));var q=_.createPattern(f.transform(h.shape.bitmap),"no-repeat");q.setTransform(U),_.globalAlpha=1-y,_.fillStyle=q,_.fillRect(h.x-W/2,h.y-F/2,W,F),_.globalAlpha=1}else if(h.shape==="circle")_.ellipse?_.ellipse(h.x,h.y,Math.abs(I-E)*h.ovalScalar,Math.abs(R-b)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI):vo(_,h.x,h.y,Math.abs(I-E)*h.ovalScalar,Math.abs(R-b)*h.ovalScalar,Math.PI/10*h.wobble,0,2*Math.PI);else if(h.shape==="star")for(var x=Math.PI/2*3,X=4*h.scalar,ae=8*h.scalar,le=h.x,pe=h.y,xe=5,fe=Math.PI/xe;xe--;)le=h.x+Math.cos(x)*ae,pe=h.y+Math.sin(x)*ae,_.lineTo(le,pe),x+=fe,le=h.x+Math.cos(x)*X,pe=h.y+Math.sin(x)*X,_.lineTo(le,pe),x+=fe;else _.moveTo(Math.floor(h.x),Math.floor(h.y)),_.lineTo(Math.floor(h.wobbleX),Math.floor(b)),_.lineTo(Math.floor(I),Math.floor(R)),_.lineTo(Math.floor(E),Math.floor(h.wobbleY));return _.closePath(),_.fill(),h.tick<h.totalTicks}function wo(_,h,y,E,b){var I=h.slice(),R=_.getContext("2d"),C,A,D=c(function(W){function F(){C=A=null,R.clearRect(0,0,E.width,E.height),f.clear(),b(),W()}function U(){i&&!(E.width===s.width&&E.height===s.height)&&(E.width=_.width=s.width,E.height=_.height=s.height),!E.width&&!E.height&&(y(_),E.width=_.width,E.height=_.height),R.clearRect(0,0,E.width,E.height),I=I.filter(function(q){return Eo(R,q)}),I.length?C=d.frame(U):F()}C=d.frame(U),A=F});return{addFettis:function(W){return I=I.concat(W),D},canvas:_,promise:D,reset:function(){C&&d.cancel(C),A&&A()}}}function Ri(_,h){var y=!_,E=!!w(h||{},"resize"),b=!1,I=w(h,"disableForReducedMotion",Boolean),R=r&&!!w(h||{},"useWorker"),C=R?u():null,A=y?mo:go,D=_&&C?!!_.__confetti_initialized:!1,W=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,F;function U(x,X,ae){for(var le=w(x,"particleCount",se),pe=w(x,"angle",Number),xe=w(x,"spread",Number),fe=w(x,"startVelocity",Number),So=w(x,"decay",Number),No=w(x,"gravity",Number),Ro=w(x,"drift",Number),xi=w(x,"colors",tt),Ao=w(x,"ticks",Number),Mi=w(x,"shapes"),xo=w(x,"scalar"),Mo=!!w(x,"flat"),ki=po(x),Pi=le,gn=[],ko=_.width*ki.x,Po=_.height*ki.y;Pi--;)gn.push(Co({x:ko,y:Po,angle:pe,spread:xe,startVelocity:fe,color:xi[Pi%xi.length],shape:Mi[re(0,Mi.length)],ticks:Ao,decay:So,gravity:No,drift:Ro,scalar:xo,flat:Mo}));return F?F.addFettis(gn):(F=wo(_,gn,A,X,ae),F.promise)}function q(x){var X=I||w(x,"disableForReducedMotion",Boolean),ae=w(x,"zIndex",Number);if(X&&W)return c(function(fe){fe()});y&&F?_=F.canvas:y&&!_&&(_=yo(ae),document.body.appendChild(_)),E&&!D&&A(_);var le={width:_.width,height:_.height};C&&!D&&C.init(_),D=!0,C&&(_.__confetti_initialized=!0);function pe(){if(C){var fe={getBoundingClientRect:function(){if(!y)return _.getBoundingClientRect()}};A(fe),C.postMessage({resize:{width:fe.width,height:fe.height}});return}le.width=le.height=null}function xe(){F=null,E&&(b=!1,e.removeEventListener("resize",pe)),y&&_&&(document.body.contains(_)&&document.body.removeChild(_),_=null,D=!1)}return E&&!b&&(b=!0,e.addEventListener("resize",pe,!1)),C?C.fire(x,le,xe):U(x,le,xe)}return q.reset=function(){C&&C.reset(),F&&F.reset()},q}var mn;function Ai(){return mn||(mn=Ri(null,{useWorker:!0,resize:!0})),mn}function bo(_,h,y,E,b,I,R){var C=new Path2D(_),A=new Path2D;A.addPath(C,new DOMMatrix(h));var D=new Path2D;return D.addPath(A,new DOMMatrix([Math.cos(R)*b,Math.sin(R)*b,-Math.sin(R)*I,Math.cos(R)*I,y,E])),D}function Io(_){if(!o)throw new Error("path confetti are not supported in this browser");var h,y;typeof _=="string"?h=_:(h=_.path,y=_.matrix);var E=new Path2D(h),b=document.createElement("canvas"),I=b.getContext("2d");if(!y){for(var R=1e3,C=R,A=R,D=0,W=0,F,U,q=0;q<R;q+=2)for(var x=0;x<R;x+=2)I.isPointInPath(E,q,x,"nonzero")&&(C=Math.min(C,q),A=Math.min(A,x),D=Math.max(D,q),W=Math.max(W,x));F=D-C,U=W-A;var X=10,ae=Math.min(X/F,X/U);y=[ae,0,0,ae,-Math.round(F/2+C)*ae,-Math.round(U/2+A)*ae]}return{type:"path",path:h,matrix:y}}function To(_){var h,y=1,E="#000000",b='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof _=="string"?h=_:(h=_.text,y="scalar"in _?_.scalar:y,b="fontFamily"in _?_.fontFamily:b,E="color"in _?_.color:E);var I=10*y,R=""+I+"px "+b,C=new OffscreenCanvas(I,I),A=C.getContext("2d");A.font=R;var D=A.measureText(h),W=Math.ceil(D.actualBoundingBoxRight+D.actualBoundingBoxLeft),F=Math.ceil(D.actualBoundingBoxAscent+D.actualBoundingBoxDescent),U=2,q=D.actualBoundingBoxLeft+U,x=D.actualBoundingBoxAscent+U;W+=U+U,F+=U+U,C=new OffscreenCanvas(W,F),A=C.getContext("2d"),A.font=R,A.fillStyle=E,A.fillText(h,q,x);var X=1/y;return{type:"bitmap",bitmap:C.transferToImageBitmap(),matrix:[X,0,0,X,-W*X/2,-F*X/2]}}t.exports=function(){return Ai().apply(this,arguments)},t.exports.reset=function(){Ai().reset()},t.exports.create=Ri,t.exports.shapeFromPath=Io,t.exports.shapeFromText=To})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Si,!1);const bt=Si.exports;Si.exports.create;let ie=0;const Mu={apiKey:"",authDomain:"solvesync-6f45a.firebaseapp.com",databaseURL:"https://solvesync-6f45a-default-rtdb.firebaseio.com",projectId:"solvesync-6f45a",storageBucket:"solvesync-6f45a.appspot.com",messagingSenderId:"...",appId:"..."},ku=js(Mu),ne=Ru(ku),Ae=document.getElementById("answer-input"),K=document.getElementById("student-work"),Ns=document.getElementById("clear-btn"),Pu=document.getElementById("connection-status"),Du=document.getElementById("status-dot"),Rs=document.getElementById("math-problem"),nn=document.getElementById("submit-btn"),As=document.getElementById("hint-btn"),Dt=document.getElementById("chalkboard"),Ot=document.getElementById("streak-num"),xs=document.getElementById("next-btn"),Ms=document.getElementById("high-score-num");let ks=0;Mt(te(ne,".info/connected"),n=>{n.val()===!0&&(Pu.innerText="CLOUD_SYNC_ACTIVE",Du.style.background="#22c55e")});Mt(te(ne,"activeProblem"),n=>{const e=n.val();Rs&&(Rs.innerText=e||"Select a category below to start!")});Mt(te(ne,"worldRecord"),n=>{const e=n.val()||0;Ms&&(Ms.innerText=e)});Ae&&K&&(Ae.addEventListener("input",n=>{ze(te(ne,"currentWork"),n.target.value)}),Mt(te(ne,"currentWork"),n=>{K.innerText=n.val()||"READY_FOR_INPUT"}));Ns&&Ns.addEventListener("click",()=>{ze(te(ne,"currentWork"),""),Ae.value=""});let Ge="add";document.querySelectorAll(".cat-btn").forEach(n=>{n.addEventListener("click",e=>{const t=e.target.getAttribute("data-type");t&&(Ge=t,Ni(Ge))})});xs&&xs.addEventListener("click",()=>{Ge||(Ge="add"),Ni(Ge),K&&(K.innerText="")});function Ni(n){let e=Math.floor(Math.random()*20)+1,t=Math.floor(Math.random()*10)+1,i="",s=0;if(n==="add")i=`${e} + ${t} = ?`,s=e+t;else if(n==="sub")i=`${e+t} - ${t} = ?`,s=e;else if(n==="mult")i=`${e} × ${t} = ?`,s=e*t;else if(n==="div"){let r=Math.floor(Math.random()*50)+10,o=Math.floor(Math.random()*20)+2;i=`${r*o} ÷ ${o} = ?`,s=r}else if(n==="alg"){let r=Math.floor(Math.random()*15)+2,o=Math.floor(Math.random()*3);if(o===0){let a=Math.floor(Math.random()*5)+2,l=Math.floor(Math.random()*10)+1,c=a*(r+l);i=`Solve for x: ${a}(x + ${l}) = ${c}`,s=r}else if(o===1){let a=Math.floor(Math.random()*4)+1,l=a+(Math.floor(Math.random()*5)+2),c=Math.floor(Math.random()*20)+1,f=l*r+c-a*r;i=`Solve for x: ${l}x + ${c} = ${a}x + ${f}`,s=r}else{let a=Math.floor(Math.random()*8)+3,l=Math.floor(Math.random()*6)+2,c=a*r/l;for(;c%1!==0;)r++,c=a*r/l;i=`Solve for x: (${a}x) / ${l} = ${c}`,s=r}}ze(te(ne,"activeProblem"),i),ze(te(ne,"correctAnswer"),s),ze(te(ne,"currentWork"),""),Ae&&(Ae.value="")}function Ps(n){const e=document.getElementById("math-bot"),t=document.getElementById("bot-bubble"),i=document.getElementById("cosmo-rocket"),s=document.getElementById("cosmo-bubble"),r=document.getElementById("chalkboard");if(n%5===0){if(!i||!s)return;i.style.transition="bottom 1s ease-out",i.style.bottom="120px",s.style.display="block",r&&r.classList.add("shake-screen"),setTimeout(()=>{bt({particleCount:60,spread:80,origin:{x:.5,y:.8},colors:["#4b5563","#ff4500"]}),setTimeout(()=>{i.style.transition="bottom 5s cubic-bezier(0.1, 0, 1, 1)",i.style.bottom="180%";const o=Date.now()+4500;(function a(){bt({particleCount:12,angle:270,spread:45,origin:{x:.5,y:.5},colors:["#ff4500","#ffa500","#ffff00"],gravity:2}),Date.now()<o&&requestAnimationFrame(a)})()},1500)},500),setTimeout(()=>{s.style.display="none",r&&r.classList.remove("shake-screen"),i.style.transition="none",i.style.bottom="-400px"},7500)}else if(n%3===0){if(!e||!t)return;e.style.bottom="80px",e.classList.add("bot-dancing"),t.style.display="block",setTimeout(()=>{e.style.bottom="-450px",t.style.display="none",e.classList.remove("bot-dancing")},4500)}}function Ou(){const n=document.getElementById("persistence-banner");n&&setTimeout(()=>{n.style.top="50px",n.style.opacity="1";const t=Date.now()+4e3;(function i(){bt({particleCount:3,angle:60,spread:55,origin:{x:0,y:.3},colors:["#f0abfc","#fbbf24","#ffffff"]}),bt({particleCount:3,angle:120,spread:55,origin:{x:1,y:.3},colors:["#f0abfc","#fbbf24","#ffffff"]}),Date.now()<t&&requestAnimationFrame(i)})(),setTimeout(()=>{n.style.top="20px",n.style.opacity="0",n.style.filter="blur(10px)",setTimeout(()=>{n.style.top="-100px",n.style.filter="blur(0px)"},1e3)},4e3)},8500)}nn&&nn.addEventListener("click",()=>{const n=Ae.value.trim(),e=Number(n);Mt(te(ne,"correctAnswer"),t=>{const i=Number(t.val());e===i&&n!==""?(ie+=1,Ot&&(Ot.innerText=ie),(ie>0&&ie%5===0||ie===3)&&Ps(ie),fo(tn(te(ne),"worldRecord")).then(s=>{const r=s.val()||0;ie>r&&(ze(te(ne,"worldRecord"),ie),console.log("🏆 NEW WORLD RECORD!"))}),bt({particleCount:150,spread:70,origin:{y:.6},colors:["#22d3ee","#f8fafc","#334155"]}),Dt.classList.add("success-glow"),K.style.color="var(--accent-cyan)",ie>=3&&(Dt.style.boxShadow="0 0 50px var(--accent-cyan)"),setTimeout(()=>{alert(`CORRECT! 🚀 STREAK: ${ie}`),Dt.classList.remove("success-glow"),Ae.value="",Ni(Ge)},500)):(ie=0,Ot&&(Ot.innerText="0"),Dt.style.boxShadow="none",K.style.color="var(--danger-red)",alert("TRY AGAIN... ❌ STREAK RESET"))},{onlyOnce:!0})});nn&&nn.addEventListener("click",()=>{Ae.value.trim()!==""&&(ks++,ks%10===0&&Ou())});As&&As.addEventListener("click",async n=>{n.stopPropagation(),K.innerText="Analyzing problem and generating steps...";const e=te(ne,"activeProblem");try{const i=(await fo(e)).val();if(console.log("Sending to AI:",i),!i){K.innerText="NEW_PROBLEM_LOADED",K.style.color="var(--chalk-text)",K.innerText="Please select a math problem first!";return}const l=await(await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBBZV4zd_2CotPuef5cmUXfvi1mObO6oR8",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:`Act as a 4th-8th grade math tutor. Solve this problem: "${i}". 
                        Break it into exactly as many steps as needed for a student to understand. 
                        Return ONLY a JSON array of strings like this: ["Step 1: ...", "Step 2: ..."] 
                        Do not include any other text or markdown.`}]}]})})).json();if(l.candidates&&l.candidates[0]){const f=l.candidates[0].content.parts[0].text.replace(/```json|```/g,"").trim(),u=JSON.parse(f).join(`

`);K.innerText=`--- A Tutor Will Read in 30 Seconds ---

`+u,Lu(u)}else l.error&&l.error.code===429?(K.innerText="The tutor is busy. Please wait 60 seconds and try again!",K.style.color="var(--danger-red)"):K.innerText="Oops! Something went wrong. Try again."}catch(t){console.error("AI/Firebase Error:",t),K.innerText="Oops! I hit a snag. Try clicking hint again."}});async function Lu(n){const t="https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyCle8rlyygPKFuE-gGsHL15ZvD6FtCueDQ";try{const s=await(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:{text:n.toLowerCase().replace(/`/g,"").replace(/['"]/g,"").replace(/\*/g,"$1 . ")},voice:{languageCode:"en-US",name:"en-US-Journey-F"},audioConfig:{audioEncoding:"MP3"}})})).json();s.audioContent&&new Audio(`data:audio/mp3;base64,${s.audioContent}`).play()}catch(i){console.error("TTS Fetch Error:",i)}}
