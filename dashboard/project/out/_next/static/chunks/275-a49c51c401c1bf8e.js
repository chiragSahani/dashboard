(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[275],{622:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=t(2265),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var o,l={},c=null,u=null;for(o in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,o)&&!a.hasOwnProperty(o)&&(l[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===l[o]&&(l[o]=r[o]);return{$$typeof:n,type:e,key:c,ref:u,props:l,_owner:s.current}}r.Fragment=l,r.jsx=c,r.jsxs=c},7437:function(e,r,t){"use strict";e.exports=t(622)},4033:function(e,r,t){e.exports=t(290)},5744:function(e,r,t){"use strict";function o(e,r,{checkForDefaultPrevented:t=!0}={}){return function(o){if(e?.(o),!1===t||!o.defaultPrevented)return r?.(o)}}t.d(r,{M:function(){return o}})},3651:function(e,r,t){"use strict";t.d(r,{B:function(){return s}});var o=t(2265),n=t(7437),l=t(2210),i=t(7256);function s(e){let r=e+"CollectionProvider",[t,s]=function(e,r=[]){let t=[],l=()=>{let r=t.map(e=>o.createContext(e));return function(t){let n=t?.[e]||r;return o.useMemo(()=>({[`__scope${e}`]:{...t,[e]:n}}),[t,n])}};return l.scopeName=e,[function(r,l){let i=o.createContext(l),s=t.length;function a(r){let{scope:t,children:l,...a}=r,c=t?.[e][s]||i,u=o.useMemo(()=>a,Object.values(a));return(0,n.jsx)(c.Provider,{value:u,children:l})}return t=[...t,l],a.displayName=r+"Provider",[a,function(t,n){let a=n?.[e][s]||i,c=o.useContext(a);if(c)return c;if(void 0!==l)return l;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=t.reduce((r,{useScope:t,scopeName:o})=>{let n=t(e),l=n[`__scope${o}`];return{...r,...l}},{});return o.useMemo(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return t.scopeName=r.scopeName,t}(l,...r)]}(r),[a,c]=t(r,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:r,children:t}=e,l=o.useRef(null),i=o.useRef(new Map).current;return(0,n.jsx)(a,{scope:r,itemMap:i,collectionRef:l,children:t})};u.displayName=r;let d=e+"CollectionSlot",p=o.forwardRef((e,r)=>{let{scope:t,children:o}=e,s=c(d,t),a=(0,l.e)(r,s.collectionRef);return(0,n.jsx)(i.g7,{ref:a,children:o})});p.displayName=d;let f=e+"CollectionItemSlot",m="data-radix-collection-item",b=o.forwardRef((e,r)=>{let{scope:t,children:s,...a}=e,u=o.useRef(null),d=(0,l.e)(r,u),p=c(f,t);return o.useEffect(()=>(p.itemMap.set(u,{ref:u,...a}),()=>void p.itemMap.delete(u))),(0,n.jsx)(i.g7,{[m]:"",ref:d,children:s})});return b.displayName=f,[{Provider:u,Slot:p,ItemSlot:b},function(r){let t=c(e+"CollectionConsumer",r),n=o.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let r=Array.from(e.querySelectorAll(`[${m}]`)),o=Array.from(t.itemMap.values()),n=o.sort((e,t)=>r.indexOf(e.ref.current)-r.indexOf(t.ref.current));return n},[t.collectionRef,t.itemMap]);return n},s]}},2210:function(e,r,t){"use strict";t.d(r,{F:function(){return n},e:function(){return l}});var o=t(2265);function n(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function l(...e){return o.useCallback(n(...e),e)}},6989:function(e,r,t){"use strict";t.d(r,{b:function(){return l}});var o=t(2265),n=t(7437);function l(e,r=[]){let t=[],l=()=>{let r=t.map(e=>o.createContext(e));return function(t){let n=t?.[e]||r;return o.useMemo(()=>({[`__scope${e}`]:{...t,[e]:n}}),[t,n])}};return l.scopeName=e,[function(r,l){let i=o.createContext(l),s=t.length;t=[...t,l];let a=r=>{let{scope:t,children:l,...a}=r,c=t?.[e]?.[s]||i,u=o.useMemo(()=>a,Object.values(a));return(0,n.jsx)(c.Provider,{value:u,children:l})};return a.displayName=r+"Provider",[a,function(t,n){let a=n?.[e]?.[s]||i,c=o.useContext(a);if(c)return c;if(void 0!==l)return l;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=t.reduce((r,{useScope:t,scopeName:o})=>{let n=t(e),l=n[`__scope${o}`];return{...r,...l}},{});return o.useMemo(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return t.scopeName=r.scopeName,t}(l,...r)]}},5400:function(e,r,t){"use strict";t.d(r,{gm:function(){return l}});var o=t(2265);t(7437);var n=o.createContext(void 0);function l(e){let r=o.useContext(n);return e||r||"ltr"}},966:function(e,r,t){"use strict";t.d(r,{M:function(){return a}});var o,n=t(2265),l=t(1030),i=(o||(o=t.t(n,2)))["useId".toString()]||(()=>void 0),s=0;function a(e){let[r,t]=n.useState(i());return(0,l.b)(()=>{e||t(e=>e??String(s++))},[e]),e||(r?`radix-${r}`:"")}},5606:function(e,r,t){"use strict";t.d(r,{z:function(){return i}});var o=t(2265),n=t(2210),l=t(1030),i=e=>{let r,t;let{present:i,children:a}=e,c=function(e){var r;let[t,n]=o.useState(),i=o.useRef({}),a=o.useRef(e),c=o.useRef("none"),u=e?"mounted":"unmounted",[d,p]=(r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,t)=>{let o=r[e][t];return o??e},u));return o.useEffect(()=>{let e=s(i.current);c.current="mounted"===d?e:"none"},[d]),(0,l.b)(()=>{let r=i.current,t=a.current,o=t!==e;if(o){let o=c.current,n=s(r);e?p("MOUNT"):"none"===n||r?.display==="none"?p("UNMOUNT"):t&&o!==n?p("ANIMATION_OUT"):p("UNMOUNT"),a.current=e}},[e,p]),(0,l.b)(()=>{if(t){let e;let r=t.ownerDocument.defaultView??window,o=o=>{let n=s(i.current),l=n.includes(o.animationName);if(o.target===t&&l&&(p("ANIMATION_END"),!a.current)){let o=t.style.animationFillMode;t.style.animationFillMode="forwards",e=r.setTimeout(()=>{"forwards"===t.style.animationFillMode&&(t.style.animationFillMode=o)})}},n=e=>{e.target===t&&(c.current=s(i.current))};return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",o),t.addEventListener("animationend",o),()=>{r.clearTimeout(e),t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",o),t.removeEventListener("animationend",o)}}p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:o.useCallback(e=>{e&&(i.current=getComputedStyle(e)),n(e)},[])}}(i),u="function"==typeof a?a({present:c.isPresent}):o.Children.only(a),d=(0,n.e)(c.ref,(r=Object.getOwnPropertyDescriptor(u.props,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning?u.ref:(r=Object.getOwnPropertyDescriptor(u,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning?u.props.ref:u.props.ref||u.ref),p="function"==typeof a;return p||c.isPresent?o.cloneElement(u,{ref:d}):null};function s(e){return e?.animationName||"none"}i.displayName="Presence"},9381:function(e,r,t){"use strict";t.d(r,{WV:function(){return s},jH:function(){return a}});var o=t(2265),n=t(4887),l=t(7256),i=t(7437),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=o.forwardRef((e,t)=>{let{asChild:o,...n}=e,s=o?l.g7:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(s,{...n,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function a(e,r){e&&n.flushSync(()=>e.dispatchEvent(r))}},9675:function(e,r,t){"use strict";t.d(r,{ck:function(){return S},fC:function(){return _},Pc:function(){return w}});var o=t(2265),n=t(5744),l=t(3651),i=t(2210),s=t(7437),a=t(966),c=t(9381),u=t(6459),d=t(3763),p=t(5400),f="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[g,v,h]=(0,l.B)(b),[y,w]=function(e,r=[]){let t=[],n=()=>{let r=t.map(e=>o.createContext(e));return function(t){let n=t?.[e]||r;return o.useMemo(()=>({[`__scope${e}`]:{...t,[e]:n}}),[t,n])}};return n.scopeName=e,[function(r,n){let l=o.createContext(n),i=t.length;function a(r){let{scope:t,children:n,...a}=r,c=t?.[e][i]||l,u=o.useMemo(()=>a,Object.values(a));return(0,s.jsx)(c.Provider,{value:u,children:n})}return t=[...t,n],a.displayName=r+"Provider",[a,function(t,s){let a=s?.[e][i]||l,c=o.useContext(a);if(c)return c;if(void 0!==n)return n;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=t.reduce((r,{useScope:t,scopeName:o})=>{let n=t(e),l=n[`__scope${o}`];return{...r,...l}},{});return o.useMemo(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return t.scopeName=r.scopeName,t}(n,...r)]}(b,[h]),[x,k]=y(b),N=o.forwardRef((e,r)=>(0,s.jsx)(g.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,s.jsx)(g.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,s.jsx)(j,{...e,ref:r})})}));N.displayName=b;var j=o.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:t,orientation:l,loop:a=!1,dir:b,currentTabStopId:g,defaultCurrentTabStopId:h,onCurrentTabStopIdChange:y,onEntryFocus:w,preventScrollOnEntryFocus:k=!1,...N}=e,j=o.useRef(null),C=(0,i.e)(r,j),M=(0,p.gm)(b),[E=null,_]=(0,d.T)({prop:g,defaultProp:h,onChange:y}),[S,z]=o.useState(!1),O=(0,u.W)(w),P=v(t),A=o.useRef(!1),[I,T]=o.useState(0);return o.useEffect(()=>{let e=j.current;if(e)return e.addEventListener(f,O),()=>e.removeEventListener(f,O)},[O]),(0,s.jsx)(x,{scope:t,orientation:l,dir:M,loop:a,currentTabStopId:E,onItemFocus:o.useCallback(e=>_(e),[_]),onItemShiftTab:o.useCallback(()=>z(!0),[]),onFocusableItemAdd:o.useCallback(()=>T(e=>e+1),[]),onFocusableItemRemove:o.useCallback(()=>T(e=>e-1),[]),children:(0,s.jsx)(c.WV.div,{tabIndex:S||0===I?-1:0,"data-orientation":l,...N,ref:C,style:{outline:"none",...e.style},onMouseDown:(0,n.M)(e.onMouseDown,()=>{A.current=!0}),onFocus:(0,n.M)(e.onFocus,e=>{let r=!A.current;if(e.target===e.currentTarget&&r&&!S){let r=new CustomEvent(f,m);if(e.currentTarget.dispatchEvent(r),!r.defaultPrevented){let e=P().filter(e=>e.focusable),r=e.find(e=>e.active),t=e.find(e=>e.id===E),o=[r,t,...e].filter(Boolean),n=o.map(e=>e.ref.current);R(n,k)}}A.current=!1}),onBlur:(0,n.M)(e.onBlur,()=>z(!1))})})}),C="RovingFocusGroupItem",M=o.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:t,focusable:l=!0,active:i=!1,tabStopId:u,...d}=e,p=(0,a.M)(),f=u||p,m=k(C,t),b=m.currentTabStopId===f,h=v(t),{onFocusableItemAdd:y,onFocusableItemRemove:w}=m;return o.useEffect(()=>{if(l)return y(),()=>w()},[l,y,w]),(0,s.jsx)(g.ItemSlot,{scope:t,id:f,focusable:l,active:i,children:(0,s.jsx)(c.WV.span,{tabIndex:b?0:-1,"data-orientation":m.orientation,...d,ref:r,onMouseDown:(0,n.M)(e.onMouseDown,e=>{l?m.onItemFocus(f):e.preventDefault()}),onFocus:(0,n.M)(e.onFocus,()=>m.onItemFocus(f)),onKeyDown:(0,n.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){m.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let r=function(e,r,t){var o;let n=(o=e.key,"rtl"!==t?o:"ArrowLeft"===o?"ArrowRight":"ArrowRight"===o?"ArrowLeft":o);if(!("vertical"===r&&["ArrowLeft","ArrowRight"].includes(n))&&!("horizontal"===r&&["ArrowUp","ArrowDown"].includes(n)))return E[n]}(e,m.orientation,m.dir);if(void 0!==r){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let n=h().filter(e=>e.focusable),l=n.map(e=>e.ref.current);if("last"===r)l.reverse();else if("prev"===r||"next"===r){var t,o;"prev"===r&&l.reverse();let n=l.indexOf(e.currentTarget);l=m.loop?(t=l,o=n+1,t.map((e,r)=>t[(o+r)%t.length])):l.slice(n+1)}setTimeout(()=>R(l))}})})})});M.displayName=C;var E={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function R(e,r=!1){let t=document.activeElement;for(let o of e)if(o===t||(o.focus({preventScroll:r}),document.activeElement!==t))return}var _=N,S=M},7256:function(e,r,t){"use strict";t.d(r,{g7:function(){return i}});var o=t(2265),n=t(2210),l=t(7437),i=o.forwardRef((e,r)=>{let{children:t,...n}=e,i=o.Children.toArray(t),a=i.find(c);if(a){let e=a.props.children,t=i.map(r=>r!==a?r:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,l.jsx)(s,{...n,ref:r,children:o.isValidElement(e)?o.cloneElement(e,void 0,t):null})}return(0,l.jsx)(s,{...n,ref:r,children:t})});i.displayName="Slot";var s=o.forwardRef((e,r)=>{let{children:t,...l}=e;if(o.isValidElement(t)){let e,i;let s=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return o.cloneElement(t,{...function(e,r){let t={...r};for(let o in r){let n=e[o],l=r[o],i=/^on[A-Z]/.test(o);i?n&&l?t[o]=(...e)=>{l(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...l}:"className"===o&&(t[o]=[n,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props),ref:r?(0,n.F)(r,s):s})}return o.Children.count(t)>1?o.Children.only(null):null});s.displayName="SlotClone";var a=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function c(e){return o.isValidElement(e)&&e.type===a}},6459:function(e,r,t){"use strict";t.d(r,{W:function(){return n}});var o=t(2265);function n(e){let r=o.useRef(e);return o.useEffect(()=>{r.current=e}),o.useMemo(()=>(...e)=>r.current?.(...e),[])}},3763:function(e,r,t){"use strict";t.d(r,{T:function(){return l}});var o=t(2265),n=t(6459);function l({prop:e,defaultProp:r,onChange:t=()=>{}}){let[l,i]=function({defaultProp:e,onChange:r}){let t=o.useState(e),[l]=t,i=o.useRef(l),s=(0,n.W)(r);return o.useEffect(()=>{i.current!==l&&(s(l),i.current=l)},[l,i,s]),t}({defaultProp:r,onChange:t}),s=void 0!==e,a=s?e:l,c=(0,n.W)(t),u=o.useCallback(r=>{if(s){let t="function"==typeof r?r(e):r;t!==e&&c(t)}else i(r)},[s,e,i,c]);return[a,u]}},1030:function(e,r,t){"use strict";t.d(r,{b:function(){return n}});var o=t(2265),n=globalThis?.document?o.useLayoutEffect:()=>{}},9213:function(e,r,t){"use strict";t.d(r,{j:function(){return l}});let o=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o);else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(e))&&(o&&(o+=" "),o+=r);return o},l=(e,r)=>t=>{var l;if((null==r?void 0:r.variants)==null)return n(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:s}=r,a=Object.keys(i).map(e=>{let r=null==t?void 0:t[e],n=null==s?void 0:s[e];if(null===r)return null;let l=o(r)||o(n);return i[e][l]}),c=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{}),u=null==r?void 0:null===(l=r.compoundVariants)||void 0===l?void 0:l.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...s,...c}[r]):({...s,...c})[r]===t})?[...e,t,o]:e},[]);return n(e,a,u,null==t?void 0:t.class,null==t?void 0:t.className)}},7042:function(e,r,t){"use strict";function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{W:function(){return o}})},4769:function(e,r,t){"use strict";t.d(r,{m6:function(){return Y}});let o=e=>{let r=s(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||i(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let i=e.join("-");return r.validators.find(({validator:e})=>e(i))?.classGroupId},l=/^\[(.+)\]$/,i=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},s=e=>{let{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]},n=d(Object.entries(e.classGroups),t);return n.forEach(([e,t])=>{a(t,o,e,r)}),o},a=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){let o=""===e?r:c(r,e);o.classGroupId=t;return}if("function"==typeof e){if(u(e)){a(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{a(n,c(r,e),t,o)})})},c=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},u=e=>e.isThemeGetter,d=(e,r)=>r?e.map(([e,t])=>{let o=t.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[r+e,t])):e);return[e,o]}):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},f=e=>{let{separator:r,experimentalParseClassName:t}=e,o=1===r.length,n=r[0],l=r.length,i=e=>{let t;let i=[],s=0,a=0;for(let c=0;c<e.length;c++){let u=e[c];if(0===s){if(u===n&&(o||e.slice(c,c+l)===r)){i.push(e.slice(a,c)),a=c+l;continue}if("/"===u){t=c;continue}}"["===u?s++:"]"===u&&s--}let c=0===i.length?e:e.substring(a),u=c.startsWith("!"),d=u?c.substring(1):c,p=t&&t>a?t-a:void 0;return{modifiers:i,hasImportantModifier:u,baseClassName:d,maybePostfixModifierPosition:p}};return t?e=>t({className:e,parseClassName:i}):i},m=e=>{if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{let o="["===e[0];o?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r},b=e=>({cache:p(e.cacheSize),parseClassName:f(e),...o(e)}),g=/\s+/,v=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,l=[],i=e.trim().split(g),s="";for(let e=i.length-1;e>=0;e-=1){let r=i[e],{modifiers:a,hasImportantModifier:c,baseClassName:u,maybePostfixModifierPosition:d}=t(r),p=!!d,f=o(p?u.substring(0,d):u);if(!f){if(!p||!(f=o(u))){s=r+(s.length>0?" "+s:s);continue}p=!1}let b=m(a).join(":"),g=c?b+"!":b,v=g+f;if(l.includes(v))continue;l.push(v);let h=n(f,p);for(let e=0;e<h.length;++e){let r=h[e];l.push(g+r)}s=r+(s.length>0?" "+s:s)}return s};function h(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=y(e))&&(o&&(o+=" "),o+=r);return o}let y=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=y(e[o]))&&(t&&(t+=" "),t+=r);return t},w=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},x=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,N=new Set(["px","full","screen"]),j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,M=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,E=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,R=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,_=e=>z(e)||N.has(e)||k.test(e),S=e=>V(e,"length",B),z=e=>!!e&&!Number.isNaN(Number(e)),O=e=>V(e,"number",z),P=e=>!!e&&Number.isInteger(Number(e)),A=e=>e.endsWith("%")&&z(e.slice(0,-1)),I=e=>x.test(e),T=e=>j.test(e),$=new Set(["length","size","percentage"]),F=e=>V(e,$,K),D=e=>V(e,"position",K),W=new Set(["image","url"]),G=e=>V(e,W,H),L=e=>V(e,"",q),U=()=>!0,V=(e,r,t)=>{let o=x.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))},B=e=>C.test(e)&&!M.test(e),K=()=>!1,q=e=>E.test(e),H=e=>R.test(e),Y=function(e){let r,t,o;let n=function(i){let s=[].reduce((e,r)=>r(e),e());return t=(r=b(s)).cache.get,o=r.cache.set,n=l,l(i)};function l(e){let n=t(e);if(n)return n;let l=v(e,r);return o(e,l),l}return function(){return n(h.apply(null,arguments))}}(()=>{let e=w("colors"),r=w("spacing"),t=w("blur"),o=w("brightness"),n=w("borderColor"),l=w("borderRadius"),i=w("borderSpacing"),s=w("borderWidth"),a=w("contrast"),c=w("grayscale"),u=w("hueRotate"),d=w("invert"),p=w("gap"),f=w("gradientColorStops"),m=w("gradientColorStopPositions"),b=w("inset"),g=w("margin"),v=w("opacity"),h=w("padding"),y=w("saturate"),x=w("scale"),k=w("sepia"),N=w("skew"),j=w("space"),C=w("translate"),M=()=>["auto","contain","none"],E=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto",I,r],$=()=>[I,r],W=()=>["",_,S],V=()=>["auto",z,I],B=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],K=()=>["solid","dashed","dotted","double","none"],q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>["start","end","center","between","around","evenly","stretch"],Y=()=>["","0",I],Z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],J=()=>[z,I];return{cacheSize:500,separator:":",theme:{colors:[U],spacing:[_,S],blur:["none","",T,I],brightness:J(),borderColor:[e],borderRadius:["none","","full",T,I],borderSpacing:$(),borderWidth:W(),contrast:J(),grayscale:Y(),hueRotate:J(),invert:Y(),gap:$(),gradientColorStops:[e],gradientColorStopPositions:[A,S],inset:R(),margin:R(),opacity:J(),padding:$(),saturate:J(),scale:J(),sepia:Y(),skew:J(),space:$(),translate:$()},classGroups:{aspect:[{aspect:["auto","square","video",I]}],container:["container"],columns:[{columns:[T]}],"break-after":[{"break-after":Z()}],"break-before":[{"break-before":Z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...B(),I]}],overflow:[{overflow:E()}],"overflow-x":[{"overflow-x":E()}],"overflow-y":[{"overflow-y":E()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",P,I]}],basis:[{basis:R()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",I]}],grow:[{grow:Y()}],shrink:[{shrink:Y()}],order:[{order:["first","last","none",P,I]}],"grid-cols":[{"grid-cols":[U]}],"col-start-end":[{col:["auto",{span:["full",P,I]},I]}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":[U]}],"row-start-end":[{row:["auto",{span:[P,I]},I]}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",I]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",I]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",I,r]}],"min-w":[{"min-w":[I,r,"min","max","fit"]}],"max-w":[{"max-w":[I,r,"none","full","min","max","fit","prose",{screen:[T]},T]}],h:[{h:[I,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[I,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[I,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[I,r,"auto","min","max","fit"]}],"font-size":[{text:["base",T,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",O]}],"font-family":[{font:[U]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",I]}],"line-clamp":[{"line-clamp":["none",z,O]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",_,I]}],"list-image":[{"list-image":["none",I]}],"list-style-type":[{list:["none","disc","decimal",I]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...K(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",_,S]}],"underline-offset":[{"underline-offset":["auto",_,I]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:$()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",I]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...B(),D]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",F]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},G]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...K(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:K()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...K()]}],"outline-offset":[{"outline-offset":[_,I]}],"outline-w":[{outline:[_,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:W()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[_,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",T,L]}],"shadow-color":[{shadow:[U]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",T,I]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",I]}],duration:[{duration:J()}],ease:[{ease:["linear","in","out","in-out",I]}],delay:[{delay:J()}],animate:[{animate:["none","spin","ping","pulse","bounce",I]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[P,I]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",I]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",I]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":$()}],"scroll-mx":[{"scroll-mx":$()}],"scroll-my":[{"scroll-my":$()}],"scroll-ms":[{"scroll-ms":$()}],"scroll-me":[{"scroll-me":$()}],"scroll-mt":[{"scroll-mt":$()}],"scroll-mr":[{"scroll-mr":$()}],"scroll-mb":[{"scroll-mb":$()}],"scroll-ml":[{"scroll-ml":$()}],"scroll-p":[{"scroll-p":$()}],"scroll-px":[{"scroll-px":$()}],"scroll-py":[{"scroll-py":$()}],"scroll-ps":[{"scroll-ps":$()}],"scroll-pe":[{"scroll-pe":$()}],"scroll-pt":[{"scroll-pt":$()}],"scroll-pr":[{"scroll-pr":$()}],"scroll-pb":[{"scroll-pb":$()}],"scroll-pl":[{"scroll-pl":$()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",I]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[_,S,O]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);