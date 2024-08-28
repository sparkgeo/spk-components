(function(Y,oe){typeof exports=="object"&&typeof module<"u"?oe(exports,require("react"),require("@fortawesome/react-fontawesome"),require("@fortawesome/free-solid-svg-icons")):typeof define=="function"&&define.amd?define(["exports","react","@fortawesome/react-fontawesome","@fortawesome/free-solid-svg-icons"],oe):(Y=typeof globalThis<"u"?globalThis:Y||self,oe(Y.SpkLibrary={},Y.React,Y.FontAwesome,Y.FreeSolidSvgIcons))})(this,function(Y,oe,Pr,se){"use strict";function Cr(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ke={exports:{}},be={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke;function jr(){if(Ke)return be;Ke=1;var n=oe,d=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,m=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function _(p,b,j){var y,T={},M=null,L=null;j!==void 0&&(M=""+j),b.key!==void 0&&(M=""+b.key),b.ref!==void 0&&(L=b.ref);for(y in b)u.call(b,y)&&!f.hasOwnProperty(y)&&(T[y]=b[y]);if(p&&p.defaultProps)for(y in b=p.defaultProps,b)T[y]===void 0&&(T[y]=b[y]);return{$$typeof:d,type:p,key:M,ref:L,props:T,_owner:m.current}}return be.Fragment=l,be.jsx=_,be.jsxs=_,be}var ge={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xe;function wr(){return Xe||(Xe=1,process.env.NODE_ENV!=="production"&&function(){var n=oe,d=Symbol.for("react.element"),l=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),p=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),L=Symbol.for("react.offscreen"),G=Symbol.iterator,F="@@iterator";function J(e){if(e===null||typeof e!="object")return null;var r=G&&e[G]||e[F];return typeof r=="function"?r:null}var B=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function q(e){{for(var r=arguments.length,i=new Array(r>1?r-1:0),h=1;h<r;h++)i[h-1]=arguments[h];z("error",e,i)}}function z(e,r,i){{var h=B.ReactDebugCurrentFrame,D=h.getStackAddendum();D!==""&&(r+="%s",i=i.concat([D]));var N=i.map(function(A){return String(A)});N.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,N)}}var U=!1,o=!1,ae=!1,Te=!1,Re=!1,le;le=Symbol.for("react.module.reference");function _e(e){return!!(typeof e=="string"||typeof e=="function"||e===u||e===f||Re||e===m||e===j||e===y||Te||e===L||U||o||ae||typeof e=="object"&&e!==null&&(e.$$typeof===M||e.$$typeof===T||e.$$typeof===_||e.$$typeof===p||e.$$typeof===b||e.$$typeof===le||e.getModuleId!==void 0))}function de(e,r,i){var h=e.displayName;if(h)return h;var D=r.displayName||r.name||"";return D!==""?i+"("+D+")":i}function ve(e){return e.displayName||"Context"}function H(e){if(e==null)return null;if(typeof e.tag=="number"&&q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case u:return"Fragment";case l:return"Portal";case f:return"Profiler";case m:return"StrictMode";case j:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case p:var r=e;return ve(r)+".Consumer";case _:var i=e;return ve(i._context)+".Provider";case b:return de(e,e.render,"ForwardRef");case T:var h=e.displayName||null;return h!==null?h:H(e.type)||"Memo";case M:{var D=e,N=D._payload,A=D._init;try{return H(A(N))}catch{return null}}}return null}var Z=Object.assign,ie=0,ee,te,ue,pe,t,s,S;function O(){}O.__reactDisabledLog=!0;function g(){{if(ie===0){ee=console.log,te=console.info,ue=console.warn,pe=console.error,t=console.group,s=console.groupCollapsed,S=console.groupEnd;var e={configurable:!0,enumerable:!0,value:O,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}ie++}}function w(){{if(ie--,ie===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Z({},e,{value:ee}),info:Z({},e,{value:te}),warn:Z({},e,{value:ue}),error:Z({},e,{value:pe}),group:Z({},e,{value:t}),groupCollapsed:Z({},e,{value:s}),groupEnd:Z({},e,{value:S})})}ie<0&&q("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var E=B.ReactCurrentDispatcher,R;function x(e,r,i){{if(R===void 0)try{throw Error()}catch(D){var h=D.stack.trim().match(/\n( *(at )?)/);R=h&&h[1]||""}return`
`+R+e}}var k=!1,P;{var K=typeof WeakMap=="function"?WeakMap:Map;P=new K}function a(e,r){if(!e||k)return"";{var i=P.get(e);if(i!==void 0)return i}var h;k=!0;var D=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var N;N=E.current,E.current=null,g();try{if(r){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(Q){h=Q}Reflect.construct(e,[],A)}else{try{A.call()}catch(Q){h=Q}e.call(A.prototype)}}else{try{throw Error()}catch(Q){h=Q}e()}}catch(Q){if(Q&&h&&typeof Q.stack=="string"){for(var C=Q.stack.split(`
`),X=h.stack.split(`
`),W=C.length-1,V=X.length-1;W>=1&&V>=0&&C[W]!==X[V];)V--;for(;W>=1&&V>=0;W--,V--)if(C[W]!==X[V]){if(W!==1||V!==1)do if(W--,V--,V<0||C[W]!==X[V]){var ne=`
`+C[W].replace(" at new "," at ");return e.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",e.displayName)),typeof e=="function"&&P.set(e,ne),ne}while(W>=1&&V>=0);break}}}finally{k=!1,E.current=N,w(),Error.prepareStackTrace=D}var me=e?e.displayName||e.name:"",fe=me?x(me):"";return typeof e=="function"&&P.set(e,fe),fe}function re(e,r,i){return a(e,!1)}function ye(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function ce(e,r,i){if(e==null)return"";if(typeof e=="function")return a(e,ye(e));if(typeof e=="string")return x(e);switch(e){case j:return x("Suspense");case y:return x("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case b:return re(e.render);case T:return ce(e.type,r,i);case M:{var h=e,D=h._payload,N=h._init;try{return ce(N(D),r,i)}catch{}}}return""}var Oe=Object.prototype.hasOwnProperty,pr={},yr=B.ReactDebugCurrentFrame;function Ae(e){if(e){var r=e._owner,i=ce(e.type,e._source,r?r.type:null);yr.setExtraStackFrame(i)}else yr.setExtraStackFrame(null)}function Yr(e,r,i,h,D){{var N=Function.call.bind(Oe);for(var A in e)if(N(e,A)){var C=void 0;try{if(typeof e[A]!="function"){var X=Error((h||"React class")+": "+i+" type `"+A+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[A]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw X.name="Invariant Violation",X}C=e[A](r,A,h,i,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(W){C=W}C&&!(C instanceof Error)&&(Ae(D),q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",h||"React class",i,A,typeof C),Ae(null)),C instanceof Error&&!(C.message in pr)&&(pr[C.message]=!0,Ae(D),q("Failed %s type: %s",i,C.message),Ae(null))}}}var Wr=Array.isArray;function Ue(e){return Wr(e)}function Ur(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,i=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return i}}function Vr(e){try{return hr(e),!1}catch{return!0}}function hr(e){return""+e}function mr(e){if(Vr(e))return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ur(e)),hr(e)}var Se=B.ReactCurrentOwner,Br={key:!0,ref:!0,__self:!0,__source:!0},br,gr,Ve;Ve={};function zr(e){if(Oe.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Jr(e){if(Oe.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Gr(e,r){if(typeof e.ref=="string"&&Se.current&&r&&Se.current.stateNode!==r){var i=H(Se.current.type);Ve[i]||(q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',H(Se.current.type),e.ref),Ve[i]=!0)}}function Kr(e,r){{var i=function(){br||(br=!0,q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"key",{get:i,configurable:!0})}}function Xr(e,r){{var i=function(){gr||(gr=!0,q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"ref",{get:i,configurable:!0})}}var Hr=function(e,r,i,h,D,N,A){var C={$$typeof:d,type:e,key:r,ref:i,props:A,_owner:N};return C._store={},Object.defineProperty(C._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(C,"_self",{configurable:!1,enumerable:!1,writable:!1,value:h}),Object.defineProperty(C,"_source",{configurable:!1,enumerable:!1,writable:!1,value:D}),Object.freeze&&(Object.freeze(C.props),Object.freeze(C)),C};function Zr(e,r,i,h,D){{var N,A={},C=null,X=null;i!==void 0&&(mr(i),C=""+i),Jr(r)&&(mr(r.key),C=""+r.key),zr(r)&&(X=r.ref,Gr(r,D));for(N in r)Oe.call(r,N)&&!Br.hasOwnProperty(N)&&(A[N]=r[N]);if(e&&e.defaultProps){var W=e.defaultProps;for(N in W)A[N]===void 0&&(A[N]=W[N])}if(C||X){var V=typeof e=="function"?e.displayName||e.name||"Unknown":e;C&&Kr(A,V),X&&Xr(A,V)}return Hr(e,C,X,D,h,Se.current,A)}}var Be=B.ReactCurrentOwner,Er=B.ReactDebugCurrentFrame;function he(e){if(e){var r=e._owner,i=ce(e.type,e._source,r?r.type:null);Er.setExtraStackFrame(i)}else Er.setExtraStackFrame(null)}var ze;ze=!1;function Je(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function Tr(){{if(Be.current){var e=H(Be.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Qr(e){return""}var Rr={};function en(e){{var r=Tr();if(!r){var i=typeof e=="string"?e:e.displayName||e.name;i&&(r=`

Check the top-level render call using <`+i+">.")}return r}}function _r(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var i=en(r);if(Rr[i])return;Rr[i]=!0;var h="";e&&e._owner&&e._owner!==Be.current&&(h=" It was passed a child from "+H(e._owner.type)+"."),he(e),q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',i,h),he(null)}}function Or(e,r){{if(typeof e!="object")return;if(Ue(e))for(var i=0;i<e.length;i++){var h=e[i];Je(h)&&_r(h,r)}else if(Je(e))e._store&&(e._store.validated=!0);else if(e){var D=J(e);if(typeof D=="function"&&D!==e.entries)for(var N=D.call(e),A;!(A=N.next()).done;)Je(A.value)&&_r(A.value,r)}}}function rn(e){{var r=e.type;if(r==null||typeof r=="string")return;var i;if(typeof r=="function")i=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===b||r.$$typeof===T))i=r.propTypes;else return;if(i){var h=H(r);Yr(i,e.props,"prop",h,e)}else if(r.PropTypes!==void 0&&!ze){ze=!0;var D=H(r);q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",D||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function nn(e){{for(var r=Object.keys(e.props),i=0;i<r.length;i++){var h=r[i];if(h!=="children"&&h!=="key"){he(e),q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",h),he(null);break}}e.ref!==null&&(he(e),q("Invalid attribute `ref` supplied to `React.Fragment`."),he(null))}}var Sr={};function xr(e,r,i,h,D,N){{var A=_e(e);if(!A){var C="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(C+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var X=Qr();X?C+=X:C+=Tr();var W;e===null?W="null":Ue(e)?W="array":e!==void 0&&e.$$typeof===d?(W="<"+(H(e.type)||"Unknown")+" />",C=" Did you accidentally export a JSX literal instead of a component?"):W=typeof e,q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",W,C)}var V=Zr(e,r,i,D,N);if(V==null)return V;if(A){var ne=r.children;if(ne!==void 0)if(h)if(Ue(ne)){for(var me=0;me<ne.length;me++)Or(ne[me],e);Object.freeze&&Object.freeze(ne)}else q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Or(ne,e)}if(Oe.call(r,"key")){var fe=H(e),Q=Object.keys(r).filter(function(cn){return cn!=="key"}),Ge=Q.length>0?"{key: someKey, "+Q.join(": ..., ")+": ...}":"{key: someKey}";if(!Sr[fe+Ge]){var un=Q.length>0?"{"+Q.join(": ..., ")+": ...}":"{}";q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ge,fe,un,fe),Sr[fe+Ge]=!0}}return e===u?nn(V):rn(V),V}}function tn(e,r,i){return xr(e,r,i,!0)}function an(e,r,i){return xr(e,r,i,!1)}var on=an,sn=tn;ge.Fragment=u,ge.jsx=on,ge.jsxs=sn}()),ge}process.env.NODE_ENV==="production"?ke.exports=jr():ke.exports=wr();var v=ke.exports,Ie={exports:{}},xe={exports:{}},I={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He;function Ar(){if(He)return I;He=1;var n=typeof Symbol=="function"&&Symbol.for,d=n?Symbol.for("react.element"):60103,l=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,m=n?Symbol.for("react.strict_mode"):60108,f=n?Symbol.for("react.profiler"):60114,_=n?Symbol.for("react.provider"):60109,p=n?Symbol.for("react.context"):60110,b=n?Symbol.for("react.async_mode"):60111,j=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,T=n?Symbol.for("react.suspense"):60113,M=n?Symbol.for("react.suspense_list"):60120,L=n?Symbol.for("react.memo"):60115,G=n?Symbol.for("react.lazy"):60116,F=n?Symbol.for("react.block"):60121,J=n?Symbol.for("react.fundamental"):60117,B=n?Symbol.for("react.responder"):60118,q=n?Symbol.for("react.scope"):60119;function z(o){if(typeof o=="object"&&o!==null){var ae=o.$$typeof;switch(ae){case d:switch(o=o.type,o){case b:case j:case u:case f:case m:case T:return o;default:switch(o=o&&o.$$typeof,o){case p:case y:case G:case L:case _:return o;default:return ae}}case l:return ae}}}function U(o){return z(o)===j}return I.AsyncMode=b,I.ConcurrentMode=j,I.ContextConsumer=p,I.ContextProvider=_,I.Element=d,I.ForwardRef=y,I.Fragment=u,I.Lazy=G,I.Memo=L,I.Portal=l,I.Profiler=f,I.StrictMode=m,I.Suspense=T,I.isAsyncMode=function(o){return U(o)||z(o)===b},I.isConcurrentMode=U,I.isContextConsumer=function(o){return z(o)===p},I.isContextProvider=function(o){return z(o)===_},I.isElement=function(o){return typeof o=="object"&&o!==null&&o.$$typeof===d},I.isForwardRef=function(o){return z(o)===y},I.isFragment=function(o){return z(o)===u},I.isLazy=function(o){return z(o)===G},I.isMemo=function(o){return z(o)===L},I.isPortal=function(o){return z(o)===l},I.isProfiler=function(o){return z(o)===f},I.isStrictMode=function(o){return z(o)===m},I.isSuspense=function(o){return z(o)===T},I.isValidElementType=function(o){return typeof o=="string"||typeof o=="function"||o===u||o===j||o===f||o===m||o===T||o===M||typeof o=="object"&&o!==null&&(o.$$typeof===G||o.$$typeof===L||o.$$typeof===_||o.$$typeof===p||o.$$typeof===y||o.$$typeof===J||o.$$typeof===B||o.$$typeof===q||o.$$typeof===F)},I.typeOf=z,I}var $={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ze;function kr(){return Ze||(Ze=1,process.env.NODE_ENV!=="production"&&function(){var n=typeof Symbol=="function"&&Symbol.for,d=n?Symbol.for("react.element"):60103,l=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,m=n?Symbol.for("react.strict_mode"):60108,f=n?Symbol.for("react.profiler"):60114,_=n?Symbol.for("react.provider"):60109,p=n?Symbol.for("react.context"):60110,b=n?Symbol.for("react.async_mode"):60111,j=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,T=n?Symbol.for("react.suspense"):60113,M=n?Symbol.for("react.suspense_list"):60120,L=n?Symbol.for("react.memo"):60115,G=n?Symbol.for("react.lazy"):60116,F=n?Symbol.for("react.block"):60121,J=n?Symbol.for("react.fundamental"):60117,B=n?Symbol.for("react.responder"):60118,q=n?Symbol.for("react.scope"):60119;function z(a){return typeof a=="string"||typeof a=="function"||a===u||a===j||a===f||a===m||a===T||a===M||typeof a=="object"&&a!==null&&(a.$$typeof===G||a.$$typeof===L||a.$$typeof===_||a.$$typeof===p||a.$$typeof===y||a.$$typeof===J||a.$$typeof===B||a.$$typeof===q||a.$$typeof===F)}function U(a){if(typeof a=="object"&&a!==null){var re=a.$$typeof;switch(re){case d:var ye=a.type;switch(ye){case b:case j:case u:case f:case m:case T:return ye;default:var ce=ye&&ye.$$typeof;switch(ce){case p:case y:case G:case L:case _:return ce;default:return re}}case l:return re}}}var o=b,ae=j,Te=p,Re=_,le=d,_e=y,de=u,ve=G,H=L,Z=l,ie=f,ee=m,te=T,ue=!1;function pe(a){return ue||(ue=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),t(a)||U(a)===b}function t(a){return U(a)===j}function s(a){return U(a)===p}function S(a){return U(a)===_}function O(a){return typeof a=="object"&&a!==null&&a.$$typeof===d}function g(a){return U(a)===y}function w(a){return U(a)===u}function E(a){return U(a)===G}function R(a){return U(a)===L}function x(a){return U(a)===l}function k(a){return U(a)===f}function P(a){return U(a)===m}function K(a){return U(a)===T}$.AsyncMode=o,$.ConcurrentMode=ae,$.ContextConsumer=Te,$.ContextProvider=Re,$.Element=le,$.ForwardRef=_e,$.Fragment=de,$.Lazy=ve,$.Memo=H,$.Portal=Z,$.Profiler=ie,$.StrictMode=ee,$.Suspense=te,$.isAsyncMode=pe,$.isConcurrentMode=t,$.isContextConsumer=s,$.isContextProvider=S,$.isElement=O,$.isForwardRef=g,$.isFragment=w,$.isLazy=E,$.isMemo=R,$.isPortal=x,$.isProfiler=k,$.isStrictMode=P,$.isSuspense=K,$.isValidElementType=z,$.typeOf=U}()),$}var Qe;function er(){return Qe||(Qe=1,process.env.NODE_ENV==="production"?xe.exports=Ar():xe.exports=kr()),xe.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var $e,rr;function Ir(){if(rr)return $e;rr=1;var n=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function u(f){if(f==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(f)}function m(){try{if(!Object.assign)return!1;var f=new String("abc");if(f[5]="de",Object.getOwnPropertyNames(f)[0]==="5")return!1;for(var _={},p=0;p<10;p++)_["_"+String.fromCharCode(p)]=p;var b=Object.getOwnPropertyNames(_).map(function(y){return _[y]});if(b.join("")!=="0123456789")return!1;var j={};return"abcdefghijklmnopqrst".split("").forEach(function(y){j[y]=y}),Object.keys(Object.assign({},j)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return $e=m()?Object.assign:function(f,_){for(var p,b=u(f),j,y=1;y<arguments.length;y++){p=Object(arguments[y]);for(var T in p)d.call(p,T)&&(b[T]=p[T]);if(n){j=n(p);for(var M=0;M<j.length;M++)l.call(p,j[M])&&(b[j[M]]=p[j[M]])}}return b},$e}var De,nr;function Me(){if(nr)return De;nr=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return De=n,De}var Ne,tr;function ar(){return tr||(tr=1,Ne=Function.call.bind(Object.prototype.hasOwnProperty)),Ne}var Fe,ir;function $r(){if(ir)return Fe;ir=1;var n=function(){};if(process.env.NODE_ENV!=="production"){var d=Me(),l={},u=ar();n=function(f){var _="Warning: "+f;typeof console<"u"&&console.error(_);try{throw new Error(_)}catch{}}}function m(f,_,p,b,j){if(process.env.NODE_ENV!=="production"){for(var y in f)if(u(f,y)){var T;try{if(typeof f[y]!="function"){var M=Error((b||"React class")+": "+p+" type `"+y+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof f[y]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw M.name="Invariant Violation",M}T=f[y](_,y,b,p,null,d)}catch(G){T=G}if(T&&!(T instanceof Error)&&n((b||"React class")+": type specification of "+p+" `"+y+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof T+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),T instanceof Error&&!(T.message in l)){l[T.message]=!0;var L=j?j():"";n("Failed "+p+" type: "+T.message+(L??""))}}}}return m.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(l={})},Fe=m,Fe}var Le,or;function Dr(){if(or)return Le;or=1;var n=er(),d=Ir(),l=Me(),u=ar(),m=$r(),f=function(){};process.env.NODE_ENV!=="production"&&(f=function(p){var b="Warning: "+p;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}});function _(){return null}return Le=function(p,b){var j=typeof Symbol=="function"&&Symbol.iterator,y="@@iterator";function T(t){var s=t&&(j&&t[j]||t[y]);if(typeof s=="function")return s}var M="<<anonymous>>",L={array:B("array"),bigint:B("bigint"),bool:B("boolean"),func:B("function"),number:B("number"),object:B("object"),string:B("string"),symbol:B("symbol"),any:q(),arrayOf:z,element:U(),elementType:o(),instanceOf:ae,node:_e(),objectOf:Re,oneOf:Te,oneOfType:le,shape:ve,exact:H};function G(t,s){return t===s?t!==0||1/t===1/s:t!==t&&s!==s}function F(t,s){this.message=t,this.data=s&&typeof s=="object"?s:{},this.stack=""}F.prototype=Error.prototype;function J(t){if(process.env.NODE_ENV!=="production")var s={},S=0;function O(w,E,R,x,k,P,K){if(x=x||M,P=P||R,K!==l){if(b){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var re=x+":"+R;!s[re]&&S<3&&(f("You are manually calling a React.PropTypes validation function for the `"+P+"` prop on `"+x+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),s[re]=!0,S++)}}return E[R]==null?w?E[R]===null?new F("The "+k+" `"+P+"` is marked as required "+("in `"+x+"`, but its value is `null`.")):new F("The "+k+" `"+P+"` is marked as required in "+("`"+x+"`, but its value is `undefined`.")):null:t(E,R,x,k,P)}var g=O.bind(null,!1);return g.isRequired=O.bind(null,!0),g}function B(t){function s(S,O,g,w,E,R){var x=S[O],k=ee(x);if(k!==t){var P=te(x);return new F("Invalid "+w+" `"+E+"` of type "+("`"+P+"` supplied to `"+g+"`, expected ")+("`"+t+"`."),{expectedType:t})}return null}return J(s)}function q(){return J(_)}function z(t){function s(S,O,g,w,E){if(typeof t!="function")return new F("Property `"+E+"` of component `"+g+"` has invalid PropType notation inside arrayOf.");var R=S[O];if(!Array.isArray(R)){var x=ee(R);return new F("Invalid "+w+" `"+E+"` of type "+("`"+x+"` supplied to `"+g+"`, expected an array."))}for(var k=0;k<R.length;k++){var P=t(R,k,g,w,E+"["+k+"]",l);if(P instanceof Error)return P}return null}return J(s)}function U(){function t(s,S,O,g,w){var E=s[S];if(!p(E)){var R=ee(E);return new F("Invalid "+g+" `"+w+"` of type "+("`"+R+"` supplied to `"+O+"`, expected a single ReactElement."))}return null}return J(t)}function o(){function t(s,S,O,g,w){var E=s[S];if(!n.isValidElementType(E)){var R=ee(E);return new F("Invalid "+g+" `"+w+"` of type "+("`"+R+"` supplied to `"+O+"`, expected a single ReactElement type."))}return null}return J(t)}function ae(t){function s(S,O,g,w,E){if(!(S[O]instanceof t)){var R=t.name||M,x=pe(S[O]);return new F("Invalid "+w+" `"+E+"` of type "+("`"+x+"` supplied to `"+g+"`, expected ")+("instance of `"+R+"`."))}return null}return J(s)}function Te(t){if(!Array.isArray(t))return process.env.NODE_ENV!=="production"&&(arguments.length>1?f("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):f("Invalid argument supplied to oneOf, expected an array.")),_;function s(S,O,g,w,E){for(var R=S[O],x=0;x<t.length;x++)if(G(R,t[x]))return null;var k=JSON.stringify(t,function(K,a){var re=te(a);return re==="symbol"?String(a):a});return new F("Invalid "+w+" `"+E+"` of value `"+String(R)+"` "+("supplied to `"+g+"`, expected one of "+k+"."))}return J(s)}function Re(t){function s(S,O,g,w,E){if(typeof t!="function")return new F("Property `"+E+"` of component `"+g+"` has invalid PropType notation inside objectOf.");var R=S[O],x=ee(R);if(x!=="object")return new F("Invalid "+w+" `"+E+"` of type "+("`"+x+"` supplied to `"+g+"`, expected an object."));for(var k in R)if(u(R,k)){var P=t(R,k,g,w,E+"."+k,l);if(P instanceof Error)return P}return null}return J(s)}function le(t){if(!Array.isArray(t))return process.env.NODE_ENV!=="production"&&f("Invalid argument supplied to oneOfType, expected an instance of array."),_;for(var s=0;s<t.length;s++){var S=t[s];if(typeof S!="function")return f("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ue(S)+" at index "+s+"."),_}function O(g,w,E,R,x){for(var k=[],P=0;P<t.length;P++){var K=t[P],a=K(g,w,E,R,x,l);if(a==null)return null;a.data&&u(a.data,"expectedType")&&k.push(a.data.expectedType)}var re=k.length>0?", expected one of type ["+k.join(", ")+"]":"";return new F("Invalid "+R+" `"+x+"` supplied to "+("`"+E+"`"+re+"."))}return J(O)}function _e(){function t(s,S,O,g,w){return Z(s[S])?null:new F("Invalid "+g+" `"+w+"` supplied to "+("`"+O+"`, expected a ReactNode."))}return J(t)}function de(t,s,S,O,g){return new F((t||"React class")+": "+s+" type `"+S+"."+O+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+g+"`.")}function ve(t){function s(S,O,g,w,E){var R=S[O],x=ee(R);if(x!=="object")return new F("Invalid "+w+" `"+E+"` of type `"+x+"` "+("supplied to `"+g+"`, expected `object`."));for(var k in t){var P=t[k];if(typeof P!="function")return de(g,w,E,k,te(P));var K=P(R,k,g,w,E+"."+k,l);if(K)return K}return null}return J(s)}function H(t){function s(S,O,g,w,E){var R=S[O],x=ee(R);if(x!=="object")return new F("Invalid "+w+" `"+E+"` of type `"+x+"` "+("supplied to `"+g+"`, expected `object`."));var k=d({},S[O],t);for(var P in k){var K=t[P];if(u(t,P)&&typeof K!="function")return de(g,w,E,P,te(K));if(!K)return new F("Invalid "+w+" `"+E+"` key `"+P+"` supplied to `"+g+"`.\nBad object: "+JSON.stringify(S[O],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(t),null,"  "));var a=K(R,P,g,w,E+"."+P,l);if(a)return a}return null}return J(s)}function Z(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(Z);if(t===null||p(t))return!0;var s=T(t);if(s){var S=s.call(t),O;if(s!==t.entries){for(;!(O=S.next()).done;)if(!Z(O.value))return!1}else for(;!(O=S.next()).done;){var g=O.value;if(g&&!Z(g[1]))return!1}}else return!1;return!0;default:return!1}}function ie(t,s){return t==="symbol"?!0:s?s["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&s instanceof Symbol:!1}function ee(t){var s=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":ie(s,t)?"symbol":s}function te(t){if(typeof t>"u"||t===null)return""+t;var s=ee(t);if(s==="object"){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return s}function ue(t){var s=te(t);switch(s){case"array":case"object":return"an "+s;case"boolean":case"date":case"regexp":return"a "+s;default:return s}}function pe(t){return!t.constructor||!t.constructor.name?M:t.constructor.name}return L.checkPropTypes=m,L.resetWarningCache=m.resetWarningCache,L.PropTypes=L,L},Le}var qe,sr;function Mr(){if(sr)return qe;sr=1;var n=Me();function d(){}function l(){}return l.resetWarningCache=d,qe=function(){function u(_,p,b,j,y,T){if(T!==n){var M=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw M.name="Invariant Violation",M}}u.isRequired=u;function m(){return u}var f={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:m,element:u,elementType:u,instanceOf:m,node:u,objectOf:m,oneOf:m,oneOfType:m,shape:m,exact:m,checkPropTypes:l,resetWarningCache:d};return f.PropTypes=f,f},qe}if(process.env.NODE_ENV!=="production"){var Nr=er(),Fr=!0;Ie.exports=Dr()(Nr.isElement,Fr)}else Ie.exports=Mr()();var Lr=Ie.exports;const c=Cr(Lr),qr={trash:se.faTrash,filter:se.faFilter,info:se.faInfo,fill:se.faFillDrip,ellipsis:se.faEllipsisVertical,chevronRight:se.faChevronRight,chevronLeft:se.faChevronLeft},Ee=({onClick:n,iconName:d})=>v.jsx("div",{className:"iconButton",children:v.jsx("button",{"aria-label":d,type:"button",onClick:n,children:v.jsx(Pr.FontAwesomeIcon,{icon:qr[d]})})});Ee.propTypes={iconName:c.oneOf(["trash","filter","info","fill","ellipsis","chevronLeft","chevronRight"]),onClick:c.func.isRequired},Ee.defaultProps={iconName:"ellipsis"};const Pe=({buttons:n})=>v.jsx("div",{className:"layerButtonReel",children:n&&Object.keys(n).map(d=>v.jsx(Ee,{iconName:d,onClick:n[d]}))});Pe.propTypes={buttons:c.objectOf(c.func)},Pe.defaultProps={buttons:null};const Ce=({layerName:n,isActive:d,onChange:l})=>v.jsxs("div",{className:"layerToggle",children:[v.jsx("p",{children:n}),v.jsxs("div",{className:"switch",children:[v.jsx("input",{type:"checkbox",value:n,checked:d,onChange:l}),v.jsx("span",{className:"slider"})]})]});Ce.propTypes={layerName:c.string,isActive:c.bool,onChange:c.func.isRequired},Ce.defaultProps={layerName:"Example Layer",isActive:!1};const Ye=({layerName:n,isActive:d,onChange:l,buttons:u})=>v.jsx("div",{className:"layerCard",children:v.jsxs("div",{className:"layerCardWrapper",children:[v.jsx(Ce,{layerName:n,isActive:d,onChange:l}),v.jsx(Pe,{buttons:u})]})});Ye.propTypes={layerName:c.string.isRequired,isActive:c.bool,onChange:c.func.isRequired,buttons:c.objectOf(c.func)},Ye.defaultProps={isActive:!1,buttons:null};const je=({color:n,label:d,value:l,units:u})=>v.jsxs("div",{className:"swatch-container",children:[v.jsx("div",{className:"swatch",style:{"background-color":n}}),v.jsx("div",{className:"swatch-label",children:d}),v.jsxs("div",{className:"swatch-value",children:[l,u]})]});je.propTypes={color:c.string.isRequired,label:c.string.isRequired,value:c.number,units:c.string},je.defaultProps={value:void 0,units:""};const ur=({swatches:n})=>v.jsx("div",{className:"swatch-legend",children:n&&n.map(d=>{const{color:l,label:u,value:m,units:f}=d;return v.jsx(je,{label:u,color:l,value:m,units:f},u)})});ur.propTypes={swatches:c.arrayOf(c.objectOf(c.string)).isRequired};const cr=({title:n="Gradient Legend",startColor:d="red",endColor:l="yellow",startNo:u=0,endNo:m=100,titleBelow:f=!1,bins:_=0,precision:p=2})=>{const b=_>0?Array(_-1).fill(0).map((j,y)=>{const T=(u+(m-u)/_*(y+1)).toPrecision(p);return v.jsx("span",{children:T},T)}):[];return v.jsxs("div",{className:"gradient-box",children:[!f&&v.jsxs("div",{className:"ui-title",children:[" ",n]}),v.jsxs("div",{className:"gradient-legend",children:[v.jsx("div",{className:"gradient",style:{background:`linear-gradient(to right, ${d} , ${l})`}}),v.jsxs("div",{className:"gradient-numbers",children:[v.jsx("span",{children:u}),b,v.jsx("span",{children:m})]}),f&&v.jsxs("div",{className:"ui-title",children:[" ",n]})]})]})};cr.propTypes={title:c.string,startColor:c.string,endColor:c.string,startNo:c.number,endNo:c.number,titleBelow:c.bool,bins:c.number,precision:c.number};const we=({units:n,label:d,onChange:l,min:u,max:m,step:f,value:_})=>v.jsxs("div",{className:"simple-slider",children:[v.jsxs("div",{children:[d&&v.jsx("div",{className:"ui-label",children:d}),v.jsx("input",{onChange:l,className:"simple-slider-input",type:"range",value:_,min:u,max:m,step:f})]}),v.jsxs("div",{className:"simple-slider-min-max-container",children:[v.jsxs("div",{className:"ui-label",children:[u,n]}),v.jsxs("div",{className:"ui-label",children:[m,n]})]})]});we.propTypes={onChange:c.func.isRequired,min:c.number.isRequired,max:c.number.isRequired,step:c.number.isRequired,value:c.number,label:c.string,units:c.string},we.defaultProps={value:0,units:"",label:""};const We=({mapContainer:n,id:d,children:l})=>v.jsx("div",{className:"map-container",id:d,ref:n,children:l});We.propTypes={mapContainer:c.oneOfType([c.func,c.shape({current:c.instanceOf(Element)})]),children:c.node,id:c.string},We.defaultProps={children:null,mapContainer:null,id:null};const fr=({showToggle:n,children:d})=>{const[l,u]=oe.useState(!1),m=`sidebar ${l?"closed":""}`,f=()=>{u(!l)};return v.jsxs("div",{className:"sidebarContainer",children:[v.jsx("div",{className:m,children:d}),n&&v.jsx("div",{className:"sidebarToggle",children:v.jsx(Ee,{onClick:f,iconName:l?"chevronRight":"chevronLeft"})})]})};fr.propTypes={showToggle:c.bool,children:c.oneOfType([c.arrayOf(c.node),c.node]).isRequired};const lr=({children:n})=>v.jsx("div",{className:"layout-stacked",children:n});lr.propTypes={children:c.oneOfType([c.arrayOf(c.node),c.node]).isRequired};const dr=({align:n="left",children:d})=>v.jsx("div",{className:`layout-standard ${n}`,children:d});dr.propTypes={align:c.oneOf(["left","right"]),children:c.oneOfType([c.arrayOf(c.node),c.node]).isRequired};const vr=({title:n,units:d,sliderConfig:l})=>v.jsxs("div",{className:" slider-control-wrapper",children:[v.jsx("div",{className:"ui-label",children:n}),v.jsx("div",{}),l&&l.map(u=>{const{label:m}=u;return v.jsx("div",{className:"slider-label",children:m})}),l&&l.map(u=>{const{onChange:m,min:f,max:_,step:p,value:b}=u;return v.jsx(we,{onChange:m,units:d,min:f,max:_,step:p,value:b})})]});vr.propTypes={title:c.string.isRequired,units:c.string.isRequired,sliderConfig:c.arrayOf(c.objectOf(c.string)).isRequired},Y.GradientLegend=cr,Y.IconButton=Ee,Y.LayerButtonReel=Pe,Y.LayerCard=Ye,Y.LayerToggle=Ce,Y.MapContainer=We,Y.SidebarContainer=fr,Y.SimpleSlider=we,Y.SliderControl=vr,Y.Stacked=lr,Y.Standard=dr,Y.Swatch=je,Y.SwatchLegend=ur,Object.defineProperty(Y,Symbol.toStringTag,{value:"Module"})});