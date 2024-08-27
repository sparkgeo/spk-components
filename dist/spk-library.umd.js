(function(V,oe){typeof exports=="object"&&typeof module<"u"?oe(exports,require("react"),require("@fortawesome/react-fontawesome"),require("@fortawesome/free-solid-svg-icons")):typeof define=="function"&&define.amd?define(["exports","react","@fortawesome/react-fontawesome","@fortawesome/free-solid-svg-icons"],oe):(V=typeof globalThis<"u"?globalThis:V||self,oe(V.SpkLibrary={},V.React,V.FontAwesome,V.FreeSolidSvgIcons))})(this,function(V,oe,Sr,se){"use strict";function xr(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ke={exports:{}},be={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke;function Pr(){if(Ke)return be;Ke=1;var n=oe,d=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,m=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function _(p,b,j){var y,T={},M=null,L=null;j!==void 0&&(M=""+j),b.key!==void 0&&(M=""+b.key),b.ref!==void 0&&(L=b.ref);for(y in b)u.call(b,y)&&!c.hasOwnProperty(y)&&(T[y]=b[y]);if(p&&p.defaultProps)for(y in b=p.defaultProps,b)T[y]===void 0&&(T[y]=b[y]);return{$$typeof:d,type:p,key:M,ref:L,props:T,_owner:m.current}}return be.Fragment=l,be.jsx=_,be.jsxs=_,be}var ge={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xe;function Cr(){return Xe||(Xe=1,process.env.NODE_ENV!=="production"&&function(){var n=oe,d=Symbol.for("react.element"),l=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),p=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),L=Symbol.for("react.offscreen"),G=Symbol.iterator,N="@@iterator";function J(e){if(e===null||typeof e!="object")return null;var r=G&&e[G]||e[N];return typeof r=="function"?r:null}var B=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function Y(e){{for(var r=arguments.length,i=new Array(r>1?r-1:0),h=1;h<r;h++)i[h-1]=arguments[h];z("error",e,i)}}function z(e,r,i){{var h=B.ReactDebugCurrentFrame,D=h.getStackAddendum();D!==""&&(r+="%s",i=i.concat([D]));var F=i.map(function(A){return String(A)});F.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,F)}}var W=!1,o=!1,ae=!1,Te=!1,Re=!1,le;le=Symbol.for("react.module.reference");function _e(e){return!!(typeof e=="string"||typeof e=="function"||e===u||e===c||Re||e===m||e===j||e===y||Te||e===L||W||o||ae||typeof e=="object"&&e!==null&&(e.$$typeof===M||e.$$typeof===T||e.$$typeof===_||e.$$typeof===p||e.$$typeof===b||e.$$typeof===le||e.getModuleId!==void 0))}function de(e,r,i){var h=e.displayName;if(h)return h;var D=r.displayName||r.name||"";return D!==""?i+"("+D+")":i}function ve(e){return e.displayName||"Context"}function H(e){if(e==null)return null;if(typeof e.tag=="number"&&Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case u:return"Fragment";case l:return"Portal";case c:return"Profiler";case m:return"StrictMode";case j:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case p:var r=e;return ve(r)+".Consumer";case _:var i=e;return ve(i._context)+".Provider";case b:return de(e,e.render,"ForwardRef");case T:var h=e.displayName||null;return h!==null?h:H(e.type)||"Memo";case M:{var D=e,F=D._payload,A=D._init;try{return H(A(F))}catch{return null}}}return null}var Z=Object.assign,ie=0,ee,ne,ue,pe,t,s,S;function O(){}O.__reactDisabledLog=!0;function g(){{if(ie===0){ee=console.log,ne=console.info,ue=console.warn,pe=console.error,t=console.group,s=console.groupCollapsed,S=console.groupEnd;var e={configurable:!0,enumerable:!0,value:O,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}ie++}}function w(){{if(ie--,ie===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Z({},e,{value:ee}),info:Z({},e,{value:ne}),warn:Z({},e,{value:ue}),error:Z({},e,{value:pe}),group:Z({},e,{value:t}),groupCollapsed:Z({},e,{value:s}),groupEnd:Z({},e,{value:S})})}ie<0&&Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var E=B.ReactCurrentDispatcher,R;function x(e,r,i){{if(R===void 0)try{throw Error()}catch(D){var h=D.stack.trim().match(/\n( *(at )?)/);R=h&&h[1]||""}return`
`+R+e}}var k=!1,P;{var K=typeof WeakMap=="function"?WeakMap:Map;P=new K}function a(e,r){if(!e||k)return"";{var i=P.get(e);if(i!==void 0)return i}var h;k=!0;var D=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var F;F=E.current,E.current=null,g();try{if(r){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(Q){h=Q}Reflect.construct(e,[],A)}else{try{A.call()}catch(Q){h=Q}e.call(A.prototype)}}else{try{throw Error()}catch(Q){h=Q}e()}}catch(Q){if(Q&&h&&typeof Q.stack=="string"){for(var C=Q.stack.split(`
`),X=h.stack.split(`
`),q=C.length-1,U=X.length-1;q>=1&&U>=0&&C[q]!==X[U];)U--;for(;q>=1&&U>=0;q--,U--)if(C[q]!==X[U]){if(q!==1||U!==1)do if(q--,U--,U<0||C[q]!==X[U]){var te=`
`+C[q].replace(" at new "," at ");return e.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",e.displayName)),typeof e=="function"&&P.set(e,te),te}while(q>=1&&U>=0);break}}}finally{k=!1,E.current=F,w(),Error.prepareStackTrace=D}var me=e?e.displayName||e.name:"",fe=me?x(me):"";return typeof e=="function"&&P.set(e,fe),fe}function re(e,r,i){return a(e,!1)}function ye(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function ce(e,r,i){if(e==null)return"";if(typeof e=="function")return a(e,ye(e));if(typeof e=="string")return x(e);switch(e){case j:return x("Suspense");case y:return x("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case b:return re(e.render);case T:return ce(e.type,r,i);case M:{var h=e,D=h._payload,F=h._init;try{return ce(F(D),r,i)}catch{}}}return""}var Oe=Object.prototype.hasOwnProperty,dr={},vr=B.ReactDebugCurrentFrame;function Ae(e){if(e){var r=e._owner,i=ce(e.type,e._source,r?r.type:null);vr.setExtraStackFrame(i)}else vr.setExtraStackFrame(null)}function Lr(e,r,i,h,D){{var F=Function.call.bind(Oe);for(var A in e)if(F(e,A)){var C=void 0;try{if(typeof e[A]!="function"){var X=Error((h||"React class")+": "+i+" type `"+A+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[A]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw X.name="Invariant Violation",X}C=e[A](r,A,h,i,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(q){C=q}C&&!(C instanceof Error)&&(Ae(D),Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",h||"React class",i,A,typeof C),Ae(null)),C instanceof Error&&!(C.message in dr)&&(dr[C.message]=!0,Ae(D),Y("Failed %s type: %s",i,C.message),Ae(null))}}}var Yr=Array.isArray;function Ue(e){return Yr(e)}function qr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,i=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return i}}function Wr(e){try{return pr(e),!1}catch{return!0}}function pr(e){return""+e}function yr(e){if(Wr(e))return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",qr(e)),pr(e)}var Se=B.ReactCurrentOwner,Ur={key:!0,ref:!0,__self:!0,__source:!0},hr,mr,Ve;Ve={};function Vr(e){if(Oe.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Br(e){if(Oe.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function zr(e,r){if(typeof e.ref=="string"&&Se.current&&r&&Se.current.stateNode!==r){var i=H(Se.current.type);Ve[i]||(Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',H(Se.current.type),e.ref),Ve[i]=!0)}}function Jr(e,r){{var i=function(){hr||(hr=!0,Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"key",{get:i,configurable:!0})}}function Gr(e,r){{var i=function(){mr||(mr=!0,Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"ref",{get:i,configurable:!0})}}var Kr=function(e,r,i,h,D,F,A){var C={$$typeof:d,type:e,key:r,ref:i,props:A,_owner:F};return C._store={},Object.defineProperty(C._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(C,"_self",{configurable:!1,enumerable:!1,writable:!1,value:h}),Object.defineProperty(C,"_source",{configurable:!1,enumerable:!1,writable:!1,value:D}),Object.freeze&&(Object.freeze(C.props),Object.freeze(C)),C};function Xr(e,r,i,h,D){{var F,A={},C=null,X=null;i!==void 0&&(yr(i),C=""+i),Br(r)&&(yr(r.key),C=""+r.key),Vr(r)&&(X=r.ref,zr(r,D));for(F in r)Oe.call(r,F)&&!Ur.hasOwnProperty(F)&&(A[F]=r[F]);if(e&&e.defaultProps){var q=e.defaultProps;for(F in q)A[F]===void 0&&(A[F]=q[F])}if(C||X){var U=typeof e=="function"?e.displayName||e.name||"Unknown":e;C&&Jr(A,U),X&&Gr(A,U)}return Kr(e,C,X,D,h,Se.current,A)}}var Be=B.ReactCurrentOwner,br=B.ReactDebugCurrentFrame;function he(e){if(e){var r=e._owner,i=ce(e.type,e._source,r?r.type:null);br.setExtraStackFrame(i)}else br.setExtraStackFrame(null)}var ze;ze=!1;function Je(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function gr(){{if(Be.current){var e=H(Be.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Hr(e){return""}var Er={};function Zr(e){{var r=gr();if(!r){var i=typeof e=="string"?e:e.displayName||e.name;i&&(r=`

Check the top-level render call using <`+i+">.")}return r}}function Tr(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var i=Zr(r);if(Er[i])return;Er[i]=!0;var h="";e&&e._owner&&e._owner!==Be.current&&(h=" It was passed a child from "+H(e._owner.type)+"."),he(e),Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',i,h),he(null)}}function Rr(e,r){{if(typeof e!="object")return;if(Ue(e))for(var i=0;i<e.length;i++){var h=e[i];Je(h)&&Tr(h,r)}else if(Je(e))e._store&&(e._store.validated=!0);else if(e){var D=J(e);if(typeof D=="function"&&D!==e.entries)for(var F=D.call(e),A;!(A=F.next()).done;)Je(A.value)&&Tr(A.value,r)}}}function Qr(e){{var r=e.type;if(r==null||typeof r=="string")return;var i;if(typeof r=="function")i=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===b||r.$$typeof===T))i=r.propTypes;else return;if(i){var h=H(r);Lr(i,e.props,"prop",h,e)}else if(r.PropTypes!==void 0&&!ze){ze=!0;var D=H(r);Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",D||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function et(e){{for(var r=Object.keys(e.props),i=0;i<r.length;i++){var h=r[i];if(h!=="children"&&h!=="key"){he(e),Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",h),he(null);break}}e.ref!==null&&(he(e),Y("Invalid attribute `ref` supplied to `React.Fragment`."),he(null))}}var _r={};function Or(e,r,i,h,D,F){{var A=_e(e);if(!A){var C="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(C+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var X=Hr();X?C+=X:C+=gr();var q;e===null?q="null":Ue(e)?q="array":e!==void 0&&e.$$typeof===d?(q="<"+(H(e.type)||"Unknown")+" />",C=" Did you accidentally export a JSX literal instead of a component?"):q=typeof e,Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",q,C)}var U=Xr(e,r,i,D,F);if(U==null)return U;if(A){var te=r.children;if(te!==void 0)if(h)if(Ue(te)){for(var me=0;me<te.length;me++)Rr(te[me],e);Object.freeze&&Object.freeze(te)}else Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Rr(te,e)}if(Oe.call(r,"key")){var fe=H(e),Q=Object.keys(r).filter(function(ot){return ot!=="key"}),Ge=Q.length>0?"{key: someKey, "+Q.join(": ..., ")+": ...}":"{key: someKey}";if(!_r[fe+Ge]){var it=Q.length>0?"{"+Q.join(": ..., ")+": ...}":"{}";Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ge,fe,it,fe),_r[fe+Ge]=!0}}return e===u?et(U):Qr(U),U}}function rt(e,r,i){return Or(e,r,i,!0)}function tt(e,r,i){return Or(e,r,i,!1)}var nt=tt,at=rt;ge.Fragment=u,ge.jsx=nt,ge.jsxs=at}()),ge}process.env.NODE_ENV==="production"?ke.exports=Pr():ke.exports=Cr();var v=ke.exports,Ie={exports:{}},xe={exports:{}},I={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He;function jr(){if(He)return I;He=1;var n=typeof Symbol=="function"&&Symbol.for,d=n?Symbol.for("react.element"):60103,l=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,m=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,_=n?Symbol.for("react.provider"):60109,p=n?Symbol.for("react.context"):60110,b=n?Symbol.for("react.async_mode"):60111,j=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,T=n?Symbol.for("react.suspense"):60113,M=n?Symbol.for("react.suspense_list"):60120,L=n?Symbol.for("react.memo"):60115,G=n?Symbol.for("react.lazy"):60116,N=n?Symbol.for("react.block"):60121,J=n?Symbol.for("react.fundamental"):60117,B=n?Symbol.for("react.responder"):60118,Y=n?Symbol.for("react.scope"):60119;function z(o){if(typeof o=="object"&&o!==null){var ae=o.$$typeof;switch(ae){case d:switch(o=o.type,o){case b:case j:case u:case c:case m:case T:return o;default:switch(o=o&&o.$$typeof,o){case p:case y:case G:case L:case _:return o;default:return ae}}case l:return ae}}}function W(o){return z(o)===j}return I.AsyncMode=b,I.ConcurrentMode=j,I.ContextConsumer=p,I.ContextProvider=_,I.Element=d,I.ForwardRef=y,I.Fragment=u,I.Lazy=G,I.Memo=L,I.Portal=l,I.Profiler=c,I.StrictMode=m,I.Suspense=T,I.isAsyncMode=function(o){return W(o)||z(o)===b},I.isConcurrentMode=W,I.isContextConsumer=function(o){return z(o)===p},I.isContextProvider=function(o){return z(o)===_},I.isElement=function(o){return typeof o=="object"&&o!==null&&o.$$typeof===d},I.isForwardRef=function(o){return z(o)===y},I.isFragment=function(o){return z(o)===u},I.isLazy=function(o){return z(o)===G},I.isMemo=function(o){return z(o)===L},I.isPortal=function(o){return z(o)===l},I.isProfiler=function(o){return z(o)===c},I.isStrictMode=function(o){return z(o)===m},I.isSuspense=function(o){return z(o)===T},I.isValidElementType=function(o){return typeof o=="string"||typeof o=="function"||o===u||o===j||o===c||o===m||o===T||o===M||typeof o=="object"&&o!==null&&(o.$$typeof===G||o.$$typeof===L||o.$$typeof===_||o.$$typeof===p||o.$$typeof===y||o.$$typeof===J||o.$$typeof===B||o.$$typeof===Y||o.$$typeof===N)},I.typeOf=z,I}var $={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ze;function wr(){return Ze||(Ze=1,process.env.NODE_ENV!=="production"&&function(){var n=typeof Symbol=="function"&&Symbol.for,d=n?Symbol.for("react.element"):60103,l=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,m=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,_=n?Symbol.for("react.provider"):60109,p=n?Symbol.for("react.context"):60110,b=n?Symbol.for("react.async_mode"):60111,j=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,T=n?Symbol.for("react.suspense"):60113,M=n?Symbol.for("react.suspense_list"):60120,L=n?Symbol.for("react.memo"):60115,G=n?Symbol.for("react.lazy"):60116,N=n?Symbol.for("react.block"):60121,J=n?Symbol.for("react.fundamental"):60117,B=n?Symbol.for("react.responder"):60118,Y=n?Symbol.for("react.scope"):60119;function z(a){return typeof a=="string"||typeof a=="function"||a===u||a===j||a===c||a===m||a===T||a===M||typeof a=="object"&&a!==null&&(a.$$typeof===G||a.$$typeof===L||a.$$typeof===_||a.$$typeof===p||a.$$typeof===y||a.$$typeof===J||a.$$typeof===B||a.$$typeof===Y||a.$$typeof===N)}function W(a){if(typeof a=="object"&&a!==null){var re=a.$$typeof;switch(re){case d:var ye=a.type;switch(ye){case b:case j:case u:case c:case m:case T:return ye;default:var ce=ye&&ye.$$typeof;switch(ce){case p:case y:case G:case L:case _:return ce;default:return re}}case l:return re}}}var o=b,ae=j,Te=p,Re=_,le=d,_e=y,de=u,ve=G,H=L,Z=l,ie=c,ee=m,ne=T,ue=!1;function pe(a){return ue||(ue=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),t(a)||W(a)===b}function t(a){return W(a)===j}function s(a){return W(a)===p}function S(a){return W(a)===_}function O(a){return typeof a=="object"&&a!==null&&a.$$typeof===d}function g(a){return W(a)===y}function w(a){return W(a)===u}function E(a){return W(a)===G}function R(a){return W(a)===L}function x(a){return W(a)===l}function k(a){return W(a)===c}function P(a){return W(a)===m}function K(a){return W(a)===T}$.AsyncMode=o,$.ConcurrentMode=ae,$.ContextConsumer=Te,$.ContextProvider=Re,$.Element=le,$.ForwardRef=_e,$.Fragment=de,$.Lazy=ve,$.Memo=H,$.Portal=Z,$.Profiler=ie,$.StrictMode=ee,$.Suspense=ne,$.isAsyncMode=pe,$.isConcurrentMode=t,$.isContextConsumer=s,$.isContextProvider=S,$.isElement=O,$.isForwardRef=g,$.isFragment=w,$.isLazy=E,$.isMemo=R,$.isPortal=x,$.isProfiler=k,$.isStrictMode=P,$.isSuspense=K,$.isValidElementType=z,$.typeOf=W}()),$}var Qe;function er(){return Qe||(Qe=1,process.env.NODE_ENV==="production"?xe.exports=jr():xe.exports=wr()),xe.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var $e,rr;function Ar(){if(rr)return $e;rr=1;var n=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function u(c){if(c==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(c)}function m(){try{if(!Object.assign)return!1;var c=new String("abc");if(c[5]="de",Object.getOwnPropertyNames(c)[0]==="5")return!1;for(var _={},p=0;p<10;p++)_["_"+String.fromCharCode(p)]=p;var b=Object.getOwnPropertyNames(_).map(function(y){return _[y]});if(b.join("")!=="0123456789")return!1;var j={};return"abcdefghijklmnopqrst".split("").forEach(function(y){j[y]=y}),Object.keys(Object.assign({},j)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return $e=m()?Object.assign:function(c,_){for(var p,b=u(c),j,y=1;y<arguments.length;y++){p=Object(arguments[y]);for(var T in p)d.call(p,T)&&(b[T]=p[T]);if(n){j=n(p);for(var M=0;M<j.length;M++)l.call(p,j[M])&&(b[j[M]]=p[j[M]])}}return b},$e}var De,tr;function Me(){if(tr)return De;tr=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return De=n,De}var Fe,nr;function ar(){return nr||(nr=1,Fe=Function.call.bind(Object.prototype.hasOwnProperty)),Fe}var Ne,ir;function kr(){if(ir)return Ne;ir=1;var n=function(){};if(process.env.NODE_ENV!=="production"){var d=Me(),l={},u=ar();n=function(c){var _="Warning: "+c;typeof console<"u"&&console.error(_);try{throw new Error(_)}catch{}}}function m(c,_,p,b,j){if(process.env.NODE_ENV!=="production"){for(var y in c)if(u(c,y)){var T;try{if(typeof c[y]!="function"){var M=Error((b||"React class")+": "+p+" type `"+y+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof c[y]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw M.name="Invariant Violation",M}T=c[y](_,y,b,p,null,d)}catch(G){T=G}if(T&&!(T instanceof Error)&&n((b||"React class")+": type specification of "+p+" `"+y+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof T+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),T instanceof Error&&!(T.message in l)){l[T.message]=!0;var L=j?j():"";n("Failed "+p+" type: "+T.message+(L??""))}}}}return m.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(l={})},Ne=m,Ne}var Le,or;function Ir(){if(or)return Le;or=1;var n=er(),d=Ar(),l=Me(),u=ar(),m=kr(),c=function(){};process.env.NODE_ENV!=="production"&&(c=function(p){var b="Warning: "+p;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}});function _(){return null}return Le=function(p,b){var j=typeof Symbol=="function"&&Symbol.iterator,y="@@iterator";function T(t){var s=t&&(j&&t[j]||t[y]);if(typeof s=="function")return s}var M="<<anonymous>>",L={array:B("array"),bigint:B("bigint"),bool:B("boolean"),func:B("function"),number:B("number"),object:B("object"),string:B("string"),symbol:B("symbol"),any:Y(),arrayOf:z,element:W(),elementType:o(),instanceOf:ae,node:_e(),objectOf:Re,oneOf:Te,oneOfType:le,shape:ve,exact:H};function G(t,s){return t===s?t!==0||1/t===1/s:t!==t&&s!==s}function N(t,s){this.message=t,this.data=s&&typeof s=="object"?s:{},this.stack=""}N.prototype=Error.prototype;function J(t){if(process.env.NODE_ENV!=="production")var s={},S=0;function O(w,E,R,x,k,P,K){if(x=x||M,P=P||R,K!==l){if(b){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var re=x+":"+R;!s[re]&&S<3&&(c("You are manually calling a React.PropTypes validation function for the `"+P+"` prop on `"+x+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),s[re]=!0,S++)}}return E[R]==null?w?E[R]===null?new N("The "+k+" `"+P+"` is marked as required "+("in `"+x+"`, but its value is `null`.")):new N("The "+k+" `"+P+"` is marked as required in "+("`"+x+"`, but its value is `undefined`.")):null:t(E,R,x,k,P)}var g=O.bind(null,!1);return g.isRequired=O.bind(null,!0),g}function B(t){function s(S,O,g,w,E,R){var x=S[O],k=ee(x);if(k!==t){var P=ne(x);return new N("Invalid "+w+" `"+E+"` of type "+("`"+P+"` supplied to `"+g+"`, expected ")+("`"+t+"`."),{expectedType:t})}return null}return J(s)}function Y(){return J(_)}function z(t){function s(S,O,g,w,E){if(typeof t!="function")return new N("Property `"+E+"` of component `"+g+"` has invalid PropType notation inside arrayOf.");var R=S[O];if(!Array.isArray(R)){var x=ee(R);return new N("Invalid "+w+" `"+E+"` of type "+("`"+x+"` supplied to `"+g+"`, expected an array."))}for(var k=0;k<R.length;k++){var P=t(R,k,g,w,E+"["+k+"]",l);if(P instanceof Error)return P}return null}return J(s)}function W(){function t(s,S,O,g,w){var E=s[S];if(!p(E)){var R=ee(E);return new N("Invalid "+g+" `"+w+"` of type "+("`"+R+"` supplied to `"+O+"`, expected a single ReactElement."))}return null}return J(t)}function o(){function t(s,S,O,g,w){var E=s[S];if(!n.isValidElementType(E)){var R=ee(E);return new N("Invalid "+g+" `"+w+"` of type "+("`"+R+"` supplied to `"+O+"`, expected a single ReactElement type."))}return null}return J(t)}function ae(t){function s(S,O,g,w,E){if(!(S[O]instanceof t)){var R=t.name||M,x=pe(S[O]);return new N("Invalid "+w+" `"+E+"` of type "+("`"+x+"` supplied to `"+g+"`, expected ")+("instance of `"+R+"`."))}return null}return J(s)}function Te(t){if(!Array.isArray(t))return process.env.NODE_ENV!=="production"&&(arguments.length>1?c("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):c("Invalid argument supplied to oneOf, expected an array.")),_;function s(S,O,g,w,E){for(var R=S[O],x=0;x<t.length;x++)if(G(R,t[x]))return null;var k=JSON.stringify(t,function(K,a){var re=ne(a);return re==="symbol"?String(a):a});return new N("Invalid "+w+" `"+E+"` of value `"+String(R)+"` "+("supplied to `"+g+"`, expected one of "+k+"."))}return J(s)}function Re(t){function s(S,O,g,w,E){if(typeof t!="function")return new N("Property `"+E+"` of component `"+g+"` has invalid PropType notation inside objectOf.");var R=S[O],x=ee(R);if(x!=="object")return new N("Invalid "+w+" `"+E+"` of type "+("`"+x+"` supplied to `"+g+"`, expected an object."));for(var k in R)if(u(R,k)){var P=t(R,k,g,w,E+"."+k,l);if(P instanceof Error)return P}return null}return J(s)}function le(t){if(!Array.isArray(t))return process.env.NODE_ENV!=="production"&&c("Invalid argument supplied to oneOfType, expected an instance of array."),_;for(var s=0;s<t.length;s++){var S=t[s];if(typeof S!="function")return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ue(S)+" at index "+s+"."),_}function O(g,w,E,R,x){for(var k=[],P=0;P<t.length;P++){var K=t[P],a=K(g,w,E,R,x,l);if(a==null)return null;a.data&&u(a.data,"expectedType")&&k.push(a.data.expectedType)}var re=k.length>0?", expected one of type ["+k.join(", ")+"]":"";return new N("Invalid "+R+" `"+x+"` supplied to "+("`"+E+"`"+re+"."))}return J(O)}function _e(){function t(s,S,O,g,w){return Z(s[S])?null:new N("Invalid "+g+" `"+w+"` supplied to "+("`"+O+"`, expected a ReactNode."))}return J(t)}function de(t,s,S,O,g){return new N((t||"React class")+": "+s+" type `"+S+"."+O+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+g+"`.")}function ve(t){function s(S,O,g,w,E){var R=S[O],x=ee(R);if(x!=="object")return new N("Invalid "+w+" `"+E+"` of type `"+x+"` "+("supplied to `"+g+"`, expected `object`."));for(var k in t){var P=t[k];if(typeof P!="function")return de(g,w,E,k,ne(P));var K=P(R,k,g,w,E+"."+k,l);if(K)return K}return null}return J(s)}function H(t){function s(S,O,g,w,E){var R=S[O],x=ee(R);if(x!=="object")return new N("Invalid "+w+" `"+E+"` of type `"+x+"` "+("supplied to `"+g+"`, expected `object`."));var k=d({},S[O],t);for(var P in k){var K=t[P];if(u(t,P)&&typeof K!="function")return de(g,w,E,P,ne(K));if(!K)return new N("Invalid "+w+" `"+E+"` key `"+P+"` supplied to `"+g+"`.\nBad object: "+JSON.stringify(S[O],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(t),null,"  "));var a=K(R,P,g,w,E+"."+P,l);if(a)return a}return null}return J(s)}function Z(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(Z);if(t===null||p(t))return!0;var s=T(t);if(s){var S=s.call(t),O;if(s!==t.entries){for(;!(O=S.next()).done;)if(!Z(O.value))return!1}else for(;!(O=S.next()).done;){var g=O.value;if(g&&!Z(g[1]))return!1}}else return!1;return!0;default:return!1}}function ie(t,s){return t==="symbol"?!0:s?s["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&s instanceof Symbol:!1}function ee(t){var s=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":ie(s,t)?"symbol":s}function ne(t){if(typeof t>"u"||t===null)return""+t;var s=ee(t);if(s==="object"){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return s}function ue(t){var s=ne(t);switch(s){case"array":case"object":return"an "+s;case"boolean":case"date":case"regexp":return"a "+s;default:return s}}function pe(t){return!t.constructor||!t.constructor.name?M:t.constructor.name}return L.checkPropTypes=m,L.resetWarningCache=m.resetWarningCache,L.PropTypes=L,L},Le}var Ye,sr;function $r(){if(sr)return Ye;sr=1;var n=Me();function d(){}function l(){}return l.resetWarningCache=d,Ye=function(){function u(_,p,b,j,y,T){if(T!==n){var M=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw M.name="Invariant Violation",M}}u.isRequired=u;function m(){return u}var c={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:m,element:u,elementType:u,instanceOf:m,node:u,objectOf:m,oneOf:m,oneOfType:m,shape:m,exact:m,checkPropTypes:l,resetWarningCache:d};return c.PropTypes=c,c},Ye}if(process.env.NODE_ENV!=="production"){var Dr=er(),Mr=!0;Ie.exports=Ir()(Dr.isElement,Mr)}else Ie.exports=$r()();var Fr=Ie.exports;const f=xr(Fr),Nr={trash:se.faTrash,filter:se.faFilter,info:se.faInfo,fill:se.faFillDrip,ellipsis:se.faEllipsisVertical,chevronRight:se.faChevronRight,chevronLeft:se.faChevronLeft},Ee=({onClick:n,iconName:d})=>v.jsx("div",{className:"iconButton",children:v.jsx("button",{"aria-label":d,type:"button",onClick:n,children:v.jsx(Sr.FontAwesomeIcon,{icon:Nr[d]})})});Ee.propTypes={iconName:f.oneOf(["trash","filter","info","fill","ellipsis","chevronLeft","chevronRight"]),onClick:f.func.isRequired},Ee.defaultProps={iconName:"ellipsis"};const Pe=({buttons:n})=>v.jsx("div",{className:"layerButtonReel",children:n&&Object.keys(n).map(d=>v.jsx(Ee,{iconName:d,onClick:n[d]}))});Pe.propTypes={buttons:f.objectOf(f.func)},Pe.defaultProps={buttons:null};const Ce=({layerName:n,isActive:d,onChange:l})=>v.jsxs("div",{className:"layerToggle",children:[v.jsx("p",{children:n}),v.jsxs("div",{className:"switch",children:[v.jsx("input",{type:"checkbox",value:n,checked:d,onChange:l}),v.jsx("span",{className:"slider"})]})]});Ce.propTypes={layerName:f.string,isActive:f.bool,onChange:f.func.isRequired},Ce.defaultProps={layerName:"Example Layer",isActive:!1};const qe=({layerName:n,isActive:d,onChange:l,buttons:u})=>v.jsx("div",{className:"layerCard",children:v.jsxs("div",{className:"layerCardWrapper",children:[v.jsx(Ce,{layerName:n,isActive:d,onChange:l}),v.jsx(Pe,{buttons:u})]})});qe.propTypes={layerName:f.string.isRequired,isActive:f.bool,onChange:f.func.isRequired,buttons:f.objectOf(f.func)},qe.defaultProps={isActive:!1,buttons:null};const je=({color:n,label:d,value:l,units:u})=>v.jsxs("div",{className:"swatch-container",children:[v.jsx("div",{className:"swatch",style:{"background-color":n}}),v.jsx("div",{className:"swatch-label",children:d}),v.jsxs("div",{className:"swatch-value",children:[l,u]})]});je.propTypes={color:f.string.isRequired,label:f.string.isRequired,value:f.number,units:f.string},je.defaultProps={value:void 0,units:""};const ur=({swatches:n})=>v.jsx("div",{className:"swatch-legend",children:n&&n.map(d=>{const{color:l,label:u,value:m,units:c}=d;return v.jsx(je,{label:u,color:l,value:m,units:c},u)})});ur.propTypes={swatches:f.arrayOf(f.objectOf(f.string)).isRequired};const cr=({title:n="Gradient Legend",startColor:d="red",endColor:l="yellow",startNo:u=0,endNo:m=100,titleBelow:c=!1,bins:_=0,precision:p=2})=>{const b=_>0?Array(_-1).fill(0).map((j,y)=>{const T=(u+(m-u)/_*(y+1)).toPrecision(p);return v.jsx("span",{children:T},T)}):[];return v.jsxs("div",{className:"gradient-box",children:[!c&&v.jsxs("div",{className:"ui-title",children:[" ",n]}),v.jsxs("div",{className:"gradient-legend",children:[v.jsx("div",{className:"gradient",style:{background:`linear-gradient(to right, ${d} , ${l})`}}),v.jsxs("div",{className:"gradient-numbers",children:[v.jsx("span",{children:u}),b,v.jsx("span",{children:m})]}),c&&v.jsxs("div",{className:"ui-title",children:[" ",n]})]})]})};cr.propTypes={title:f.string,startColor:f.string,endColor:f.string,startNo:f.number,endNo:f.number,titleBelow:f.bool,bins:f.number,precision:f.number};const we=({units:n,label:d,onChange:l,min:u,max:m,step:c,value:_})=>v.jsxs("div",{className:"simple-slider",children:[v.jsxs("div",{children:[d&&v.jsx("div",{className:"ui-label",children:d}),v.jsx("input",{onChange:l,className:"simple-slider-input",type:"range",value:_,min:u,max:m,step:c})]}),v.jsxs("div",{className:"simple-slider-min-max-container",children:[v.jsxs("div",{className:"ui-label",children:[u,n]}),v.jsxs("div",{className:"ui-label",children:[m,n]})]})]});we.propTypes={onChange:f.func.isRequired,min:f.number.isRequired,max:f.number.isRequired,step:f.number.isRequired,value:f.number,label:f.string,units:f.string},we.defaultProps={value:0,units:"",label:""};const We=({mapContainer:n,children:d})=>v.jsx("div",{className:"map-container",ref:n,children:d});We.propTypes={mapContainer:f.oneOfType([f.func,f.shape({current:f.instanceOf(Element)})]),children:f.node},We.defaultProps={children:null,mapContainer:null};const fr=({showToggle:n,children:d})=>{const[l,u]=oe.useState(!1),m=`sidebar ${l?"closed":""}`,c=()=>{u(!l)};return v.jsxs("div",{className:"sidebarContainer",children:[v.jsx("div",{className:m,children:d}),n&&v.jsx("div",{className:"sidebarToggle",children:v.jsx(Ee,{onClick:c,iconName:l?"chevronRight":"chevronLeft"})})]})};fr.propTypes={showToggle:f.bool,children:f.oneOfType([f.arrayOf(f.node),f.node]).isRequired};const lr=({title:n,units:d,sliderConfig:l})=>v.jsxs("div",{className:" slider-control-wrapper",children:[v.jsx("div",{className:"ui-label",children:n}),v.jsx("div",{}),l&&l.map(u=>{const{label:m}=u;return v.jsx("div",{className:"slider-label",children:m})}),l&&l.map(u=>{const{onChange:m,min:c,max:_,step:p,value:b}=u;return v.jsx(we,{onChange:m,units:d,min:c,max:_,step:p,value:b})})]});lr.propTypes={title:f.string.isRequired,units:f.string.isRequired,sliderConfig:f.arrayOf(f.objectOf(f.string)).isRequired},V.GradientLegend=cr,V.IconButton=Ee,V.LayerButtonReel=Pe,V.LayerCard=qe,V.LayerToggle=Ce,V.MapContainer=We,V.Sidebar=fr,V.SimpleSlider=we,V.SliderControl=lr,V.Swatch=je,V.SwatchLegend=ur,Object.defineProperty(V,Symbol.toStringTag,{value:"Module"})});
