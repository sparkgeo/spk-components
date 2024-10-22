(function(W,se){typeof exports=="object"&&typeof module<"u"?se(exports,require("react"),require("@fortawesome/react-fontawesome"),require("@fortawesome/free-solid-svg-icons")):typeof define=="function"&&define.amd?define(["exports","react","@fortawesome/react-fontawesome","@fortawesome/free-solid-svg-icons"],se):(W=typeof globalThis<"u"?globalThis:W||self,se(W.SpkLibrary={},W.React,W.FontAwesome,W.FreeSolidSvgIcons))})(this,function(W,se,er,ae){"use strict";function Mr(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Le={exports:{}},be={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rr;function qr(){if(rr)return be;rr=1;var r=se,p=Symbol.for("react.element"),f=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,v=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function R(y,b,j){var h,T={},$=null,D=null;j!==void 0&&($=""+j),b.key!==void 0&&($=""+b.key),b.ref!==void 0&&(D=b.ref);for(h in b)u.call(b,h)&&!d.hasOwnProperty(h)&&(T[h]=b[h]);if(y&&y.defaultProps)for(h in b=y.defaultProps,b)T[h]===void 0&&(T[h]=b[h]);return{$$typeof:p,type:y,key:$,ref:D,props:T,_owner:v.current}}return be.Fragment=f,be.jsx=R,be.jsxs=R,be}var ge={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr;function Wr(){return nr||(nr=1,process.env.NODE_ENV!=="production"&&function(){var r=se,p=Symbol.for("react.element"),f=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),y=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),J=Symbol.iterator,q="@@iterator";function z(e){if(e===null||typeof e!="object")return null;var n=J&&e[J]||e[q];return typeof n=="function"?n:null}var U=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function F(e){{for(var n=arguments.length,i=new Array(n>1?n-1:0),m=1;m<n;m++)i[m-1]=arguments[m];V("error",e,i)}}function V(e,n,i){{var m=U.ReactDebugCurrentFrame,L=m.getStackAddendum();L!==""&&(n+="%s",i=i.concat([L]));var M=i.map(function(A){return String(A)});M.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,M)}}var G=!1,s=!1,oe=!1,Ee=!1,Re=!1,fe;fe=Symbol.for("react.module.reference");function Ce(e){return!!(typeof e=="string"||typeof e=="function"||e===u||e===d||Re||e===v||e===j||e===h||Ee||e===D||G||s||oe||typeof e=="object"&&e!==null&&(e.$$typeof===$||e.$$typeof===T||e.$$typeof===R||e.$$typeof===y||e.$$typeof===b||e.$$typeof===fe||e.getModuleId!==void 0))}function de(e,n,i){var m=e.displayName;if(m)return m;var L=n.displayName||n.name||"";return L!==""?i+"("+L+")":i}function pe(e){return e.displayName||"Context"}function H(e){if(e==null)return null;if(typeof e.tag=="number"&&F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case u:return"Fragment";case f:return"Portal";case d:return"Profiler";case v:return"StrictMode";case j:return"Suspense";case h:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:var n=e;return pe(n)+".Consumer";case R:var i=e;return pe(i._context)+".Provider";case b:return de(e,e.render,"ForwardRef");case T:var m=e.displayName||null;return m!==null?m:H(e.type)||"Memo";case $:{var L=e,M=L._payload,A=L._init;try{return H(A(M))}catch{return null}}}return null}var Z=Object.assign,ie=0,ee,te,ce,ve,t,c,x;function C(){}C.__reactDisabledLog=!0;function g(){{if(ie===0){ee=console.log,te=console.info,ce=console.warn,ve=console.error,t=console.group,c=console.groupCollapsed,x=console.groupEnd;var e={configurable:!0,enumerable:!0,value:C,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}ie++}}function P(){{if(ie--,ie===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Z({},e,{value:ee}),info:Z({},e,{value:te}),warn:Z({},e,{value:ce}),error:Z({},e,{value:ve}),group:Z({},e,{value:t}),groupCollapsed:Z({},e,{value:c}),groupEnd:Z({},e,{value:x})})}ie<0&&F("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var _=U.ReactCurrentDispatcher,E;function O(e,n,i){{if(E===void 0)try{throw Error()}catch(L){var m=L.stack.trim().match(/\n( *(at )?)/);E=m&&m[1]||""}return`
`+E+e}}var k=!1,S;{var K=typeof WeakMap=="function"?WeakMap:Map;S=new K}function o(e,n){if(!e||k)return"";{var i=S.get(e);if(i!==void 0)return i}var m;k=!0;var L=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var M;M=_.current,_.current=null,g();try{if(n){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(Q){m=Q}Reflect.construct(e,[],A)}else{try{A.call()}catch(Q){m=Q}e.call(A.prototype)}}else{try{throw Error()}catch(Q){m=Q}e()}}catch(Q){if(Q&&m&&typeof Q.stack=="string"){for(var w=Q.stack.split(`
`),X=m.stack.split(`
`),Y=w.length-1,B=X.length-1;Y>=1&&B>=0&&w[Y]!==X[B];)B--;for(;Y>=1&&B>=0;Y--,B--)if(w[Y]!==X[B]){if(Y!==1||B!==1)do if(Y--,B--,B<0||w[Y]!==X[B]){var ne=`
`+w[Y].replace(" at new "," at ");return e.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",e.displayName)),typeof e=="function"&&S.set(e,ne),ne}while(Y>=1&&B>=0);break}}}finally{k=!1,_.current=M,P(),Error.prepareStackTrace=L}var me=e?e.displayName||e.name:"",le=me?O(me):"";return typeof e=="function"&&S.set(e,le),le}function re(e,n,i){return o(e,!1)}function ye(e){var n=e.prototype;return!!(n&&n.isReactComponent)}function ue(e,n,i){if(e==null)return"";if(typeof e=="function")return o(e,ye(e));if(typeof e=="string")return O(e);switch(e){case j:return O("Suspense");case h:return O("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case b:return re(e.render);case T:return ue(e.type,n,i);case $:{var m=e,L=m._payload,M=m._init;try{return ue(M(L),n,i)}catch{}}}return""}var xe=Object.prototype.hasOwnProperty,Cr={},xr=U.ReactDebugCurrentFrame;function Ne(e){if(e){var n=e._owner,i=ue(e.type,e._source,n?n.type:null);xr.setExtraStackFrame(i)}else xr.setExtraStackFrame(null)}function Qr(e,n,i,m,L){{var M=Function.call.bind(xe);for(var A in e)if(M(e,A)){var w=void 0;try{if(typeof e[A]!="function"){var X=Error((m||"React class")+": "+i+" type `"+A+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[A]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw X.name="Invariant Violation",X}w=e[A](n,A,m,i,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(Y){w=Y}w&&!(w instanceof Error)&&(Ne(L),F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",m||"React class",i,A,typeof w),Ne(null)),w instanceof Error&&!(w.message in Cr)&&(Cr[w.message]=!0,Ne(L),F("Failed %s type: %s",i,w.message),Ne(null))}}}var en=Array.isArray;function Je(e){return en(e)}function rn(e){{var n=typeof Symbol=="function"&&Symbol.toStringTag,i=n&&e[Symbol.toStringTag]||e.constructor.name||"Object";return i}}function nn(e){try{return Or(e),!1}catch{return!0}}function Or(e){return""+e}function Sr(e){if(nn(e))return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",rn(e)),Or(e)}var Oe=U.ReactCurrentOwner,tn={key:!0,ref:!0,__self:!0,__source:!0},wr,jr,Ke;Ke={};function an(e){if(xe.call(e,"ref")){var n=Object.getOwnPropertyDescriptor(e,"ref").get;if(n&&n.isReactWarning)return!1}return e.ref!==void 0}function on(e){if(xe.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return e.key!==void 0}function sn(e,n){if(typeof e.ref=="string"&&Oe.current&&n&&Oe.current.stateNode!==n){var i=H(Oe.current.type);Ke[i]||(F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',H(Oe.current.type),e.ref),Ke[i]=!0)}}function cn(e,n){{var i=function(){wr||(wr=!0,F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};i.isReactWarning=!0,Object.defineProperty(e,"key",{get:i,configurable:!0})}}function un(e,n){{var i=function(){jr||(jr=!0,F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};i.isReactWarning=!0,Object.defineProperty(e,"ref",{get:i,configurable:!0})}}var ln=function(e,n,i,m,L,M,A){var w={$$typeof:p,type:e,key:n,ref:i,props:A,_owner:M};return w._store={},Object.defineProperty(w._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(w,"_self",{configurable:!1,enumerable:!1,writable:!1,value:m}),Object.defineProperty(w,"_source",{configurable:!1,enumerable:!1,writable:!1,value:L}),Object.freeze&&(Object.freeze(w.props),Object.freeze(w)),w};function fn(e,n,i,m,L){{var M,A={},w=null,X=null;i!==void 0&&(Sr(i),w=""+i),on(n)&&(Sr(n.key),w=""+n.key),an(n)&&(X=n.ref,sn(n,L));for(M in n)xe.call(n,M)&&!tn.hasOwnProperty(M)&&(A[M]=n[M]);if(e&&e.defaultProps){var Y=e.defaultProps;for(M in Y)A[M]===void 0&&(A[M]=Y[M])}if(w||X){var B=typeof e=="function"?e.displayName||e.name||"Unknown":e;w&&cn(A,B),X&&un(A,B)}return ln(e,w,X,L,m,Oe.current,A)}}var Xe=U.ReactCurrentOwner,Pr=U.ReactDebugCurrentFrame;function he(e){if(e){var n=e._owner,i=ue(e.type,e._source,n?n.type:null);Pr.setExtraStackFrame(i)}else Pr.setExtraStackFrame(null)}var He;He=!1;function Ze(e){return typeof e=="object"&&e!==null&&e.$$typeof===p}function Ar(){{if(Xe.current){var e=H(Xe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function dn(e){return""}var kr={};function pn(e){{var n=Ar();if(!n){var i=typeof e=="string"?e:e.displayName||e.name;i&&(n=`

Check the top-level render call using <`+i+">.")}return n}}function Ir(e,n){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var i=pn(n);if(kr[i])return;kr[i]=!0;var m="";e&&e._owner&&e._owner!==Xe.current&&(m=" It was passed a child from "+H(e._owner.type)+"."),he(e),F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',i,m),he(null)}}function Nr(e,n){{if(typeof e!="object")return;if(Je(e))for(var i=0;i<e.length;i++){var m=e[i];Ze(m)&&Ir(m,n)}else if(Ze(e))e._store&&(e._store.validated=!0);else if(e){var L=z(e);if(typeof L=="function"&&L!==e.entries)for(var M=L.call(e),A;!(A=M.next()).done;)Ze(A.value)&&Ir(A.value,n)}}}function vn(e){{var n=e.type;if(n==null||typeof n=="string")return;var i;if(typeof n=="function")i=n.propTypes;else if(typeof n=="object"&&(n.$$typeof===b||n.$$typeof===T))i=n.propTypes;else return;if(i){var m=H(n);Qr(i,e.props,"prop",m,e)}else if(n.PropTypes!==void 0&&!He){He=!0;var L=H(n);F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",L||"Unknown")}typeof n.getDefaultProps=="function"&&!n.getDefaultProps.isReactClassApproved&&F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function yn(e){{for(var n=Object.keys(e.props),i=0;i<n.length;i++){var m=n[i];if(m!=="children"&&m!=="key"){he(e),F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",m),he(null);break}}e.ref!==null&&(he(e),F("Invalid attribute `ref` supplied to `React.Fragment`."),he(null))}}var Lr={};function $r(e,n,i,m,L,M){{var A=Ce(e);if(!A){var w="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(w+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var X=dn();X?w+=X:w+=Ar();var Y;e===null?Y="null":Je(e)?Y="array":e!==void 0&&e.$$typeof===p?(Y="<"+(H(e.type)||"Unknown")+" />",w=" Did you accidentally export a JSX literal instead of a component?"):Y=typeof e,F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",Y,w)}var B=fn(e,n,i,L,M);if(B==null)return B;if(A){var ne=n.children;if(ne!==void 0)if(m)if(Je(ne)){for(var me=0;me<ne.length;me++)Nr(ne[me],e);Object.freeze&&Object.freeze(ne)}else F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Nr(ne,e)}if(xe.call(n,"key")){var le=H(e),Q=Object.keys(n).filter(function(Tn){return Tn!=="key"}),Qe=Q.length>0?"{key: someKey, "+Q.join(": ..., ")+": ...}":"{key: someKey}";if(!Lr[le+Qe]){var _n=Q.length>0?"{"+Q.join(": ..., ")+": ...}":"{}";F(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Qe,le,_n,le),Lr[le+Qe]=!0}}return e===u?yn(B):vn(B),B}}function hn(e,n,i){return $r(e,n,i,!0)}function mn(e,n,i){return $r(e,n,i,!1)}var bn=mn,gn=hn;ge.Fragment=u,ge.jsx=bn,ge.jsxs=gn}()),ge}process.env.NODE_ENV==="production"?Le.exports=qr():Le.exports=Wr();var l=Le.exports,$e={exports:{}},Se={exports:{}},I={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tr;function Dr(){if(tr)return I;tr=1;var r=typeof Symbol=="function"&&Symbol.for,p=r?Symbol.for("react.element"):60103,f=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,v=r?Symbol.for("react.strict_mode"):60108,d=r?Symbol.for("react.profiler"):60114,R=r?Symbol.for("react.provider"):60109,y=r?Symbol.for("react.context"):60110,b=r?Symbol.for("react.async_mode"):60111,j=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,T=r?Symbol.for("react.suspense"):60113,$=r?Symbol.for("react.suspense_list"):60120,D=r?Symbol.for("react.memo"):60115,J=r?Symbol.for("react.lazy"):60116,q=r?Symbol.for("react.block"):60121,z=r?Symbol.for("react.fundamental"):60117,U=r?Symbol.for("react.responder"):60118,F=r?Symbol.for("react.scope"):60119;function V(s){if(typeof s=="object"&&s!==null){var oe=s.$$typeof;switch(oe){case p:switch(s=s.type,s){case b:case j:case u:case d:case v:case T:return s;default:switch(s=s&&s.$$typeof,s){case y:case h:case J:case D:case R:return s;default:return oe}}case f:return oe}}}function G(s){return V(s)===j}return I.AsyncMode=b,I.ConcurrentMode=j,I.ContextConsumer=y,I.ContextProvider=R,I.Element=p,I.ForwardRef=h,I.Fragment=u,I.Lazy=J,I.Memo=D,I.Portal=f,I.Profiler=d,I.StrictMode=v,I.Suspense=T,I.isAsyncMode=function(s){return G(s)||V(s)===b},I.isConcurrentMode=G,I.isContextConsumer=function(s){return V(s)===y},I.isContextProvider=function(s){return V(s)===R},I.isElement=function(s){return typeof s=="object"&&s!==null&&s.$$typeof===p},I.isForwardRef=function(s){return V(s)===h},I.isFragment=function(s){return V(s)===u},I.isLazy=function(s){return V(s)===J},I.isMemo=function(s){return V(s)===D},I.isPortal=function(s){return V(s)===f},I.isProfiler=function(s){return V(s)===d},I.isStrictMode=function(s){return V(s)===v},I.isSuspense=function(s){return V(s)===T},I.isValidElementType=function(s){return typeof s=="string"||typeof s=="function"||s===u||s===j||s===d||s===v||s===T||s===$||typeof s=="object"&&s!==null&&(s.$$typeof===J||s.$$typeof===D||s.$$typeof===R||s.$$typeof===y||s.$$typeof===h||s.$$typeof===z||s.$$typeof===U||s.$$typeof===F||s.$$typeof===q)},I.typeOf=V,I}var N={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar;function Fr(){return ar||(ar=1,process.env.NODE_ENV!=="production"&&function(){var r=typeof Symbol=="function"&&Symbol.for,p=r?Symbol.for("react.element"):60103,f=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,v=r?Symbol.for("react.strict_mode"):60108,d=r?Symbol.for("react.profiler"):60114,R=r?Symbol.for("react.provider"):60109,y=r?Symbol.for("react.context"):60110,b=r?Symbol.for("react.async_mode"):60111,j=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,T=r?Symbol.for("react.suspense"):60113,$=r?Symbol.for("react.suspense_list"):60120,D=r?Symbol.for("react.memo"):60115,J=r?Symbol.for("react.lazy"):60116,q=r?Symbol.for("react.block"):60121,z=r?Symbol.for("react.fundamental"):60117,U=r?Symbol.for("react.responder"):60118,F=r?Symbol.for("react.scope"):60119;function V(o){return typeof o=="string"||typeof o=="function"||o===u||o===j||o===d||o===v||o===T||o===$||typeof o=="object"&&o!==null&&(o.$$typeof===J||o.$$typeof===D||o.$$typeof===R||o.$$typeof===y||o.$$typeof===h||o.$$typeof===z||o.$$typeof===U||o.$$typeof===F||o.$$typeof===q)}function G(o){if(typeof o=="object"&&o!==null){var re=o.$$typeof;switch(re){case p:var ye=o.type;switch(ye){case b:case j:case u:case d:case v:case T:return ye;default:var ue=ye&&ye.$$typeof;switch(ue){case y:case h:case J:case D:case R:return ue;default:return re}}case f:return re}}}var s=b,oe=j,Ee=y,Re=R,fe=p,Ce=h,de=u,pe=J,H=D,Z=f,ie=d,ee=v,te=T,ce=!1;function ve(o){return ce||(ce=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),t(o)||G(o)===b}function t(o){return G(o)===j}function c(o){return G(o)===y}function x(o){return G(o)===R}function C(o){return typeof o=="object"&&o!==null&&o.$$typeof===p}function g(o){return G(o)===h}function P(o){return G(o)===u}function _(o){return G(o)===J}function E(o){return G(o)===D}function O(o){return G(o)===f}function k(o){return G(o)===d}function S(o){return G(o)===v}function K(o){return G(o)===T}N.AsyncMode=s,N.ConcurrentMode=oe,N.ContextConsumer=Ee,N.ContextProvider=Re,N.Element=fe,N.ForwardRef=Ce,N.Fragment=de,N.Lazy=pe,N.Memo=H,N.Portal=Z,N.Profiler=ie,N.StrictMode=ee,N.Suspense=te,N.isAsyncMode=ve,N.isConcurrentMode=t,N.isContextConsumer=c,N.isContextProvider=x,N.isElement=C,N.isForwardRef=g,N.isFragment=P,N.isLazy=_,N.isMemo=E,N.isPortal=O,N.isProfiler=k,N.isStrictMode=S,N.isSuspense=K,N.isValidElementType=V,N.typeOf=G}()),N}var or;function ir(){return or||(or=1,process.env.NODE_ENV==="production"?Se.exports=Dr():Se.exports=Fr()),Se.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Me,sr;function Yr(){if(sr)return Me;sr=1;var r=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;function u(d){if(d==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(d)}function v(){try{if(!Object.assign)return!1;var d=new String("abc");if(d[5]="de",Object.getOwnPropertyNames(d)[0]==="5")return!1;for(var R={},y=0;y<10;y++)R["_"+String.fromCharCode(y)]=y;var b=Object.getOwnPropertyNames(R).map(function(h){return R[h]});if(b.join("")!=="0123456789")return!1;var j={};return"abcdefghijklmnopqrst".split("").forEach(function(h){j[h]=h}),Object.keys(Object.assign({},j)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Me=v()?Object.assign:function(d,R){for(var y,b=u(d),j,h=1;h<arguments.length;h++){y=Object(arguments[h]);for(var T in y)p.call(y,T)&&(b[T]=y[T]);if(r){j=r(y);for(var $=0;$<j.length;$++)f.call(y,j[$])&&(b[j[$]]=y[j[$]])}}return b},Me}var qe,cr;function We(){if(cr)return qe;cr=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return qe=r,qe}var De,ur;function lr(){return ur||(ur=1,De=Function.call.bind(Object.prototype.hasOwnProperty)),De}var Fe,fr;function Gr(){if(fr)return Fe;fr=1;var r=function(){};if(process.env.NODE_ENV!=="production"){var p=We(),f={},u=lr();r=function(d){var R="Warning: "+d;typeof console<"u"&&console.error(R);try{throw new Error(R)}catch{}}}function v(d,R,y,b,j){if(process.env.NODE_ENV!=="production"){for(var h in d)if(u(d,h)){var T;try{if(typeof d[h]!="function"){var $=Error((b||"React class")+": "+y+" type `"+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof d[h]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw $.name="Invariant Violation",$}T=d[h](R,h,b,y,null,p)}catch(J){T=J}if(T&&!(T instanceof Error)&&r((b||"React class")+": type specification of "+y+" `"+h+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof T+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),T instanceof Error&&!(T.message in f)){f[T.message]=!0;var D=j?j():"";r("Failed "+y+" type: "+T.message+(D??""))}}}}return v.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(f={})},Fe=v,Fe}var Ye,dr;function Br(){if(dr)return Ye;dr=1;var r=ir(),p=Yr(),f=We(),u=lr(),v=Gr(),d=function(){};process.env.NODE_ENV!=="production"&&(d=function(y){var b="Warning: "+y;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}});function R(){return null}return Ye=function(y,b){var j=typeof Symbol=="function"&&Symbol.iterator,h="@@iterator";function T(t){var c=t&&(j&&t[j]||t[h]);if(typeof c=="function")return c}var $="<<anonymous>>",D={array:U("array"),bigint:U("bigint"),bool:U("boolean"),func:U("function"),number:U("number"),object:U("object"),string:U("string"),symbol:U("symbol"),any:F(),arrayOf:V,element:G(),elementType:s(),instanceOf:oe,node:Ce(),objectOf:Re,oneOf:Ee,oneOfType:fe,shape:pe,exact:H};function J(t,c){return t===c?t!==0||1/t===1/c:t!==t&&c!==c}function q(t,c){this.message=t,this.data=c&&typeof c=="object"?c:{},this.stack=""}q.prototype=Error.prototype;function z(t){if(process.env.NODE_ENV!=="production")var c={},x=0;function C(P,_,E,O,k,S,K){if(O=O||$,S=S||E,K!==f){if(b){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var re=O+":"+E;!c[re]&&x<3&&(d("You are manually calling a React.PropTypes validation function for the `"+S+"` prop on `"+O+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),c[re]=!0,x++)}}return _[E]==null?P?_[E]===null?new q("The "+k+" `"+S+"` is marked as required "+("in `"+O+"`, but its value is `null`.")):new q("The "+k+" `"+S+"` is marked as required in "+("`"+O+"`, but its value is `undefined`.")):null:t(_,E,O,k,S)}var g=C.bind(null,!1);return g.isRequired=C.bind(null,!0),g}function U(t){function c(x,C,g,P,_,E){var O=x[C],k=ee(O);if(k!==t){var S=te(O);return new q("Invalid "+P+" `"+_+"` of type "+("`"+S+"` supplied to `"+g+"`, expected ")+("`"+t+"`."),{expectedType:t})}return null}return z(c)}function F(){return z(R)}function V(t){function c(x,C,g,P,_){if(typeof t!="function")return new q("Property `"+_+"` of component `"+g+"` has invalid PropType notation inside arrayOf.");var E=x[C];if(!Array.isArray(E)){var O=ee(E);return new q("Invalid "+P+" `"+_+"` of type "+("`"+O+"` supplied to `"+g+"`, expected an array."))}for(var k=0;k<E.length;k++){var S=t(E,k,g,P,_+"["+k+"]",f);if(S instanceof Error)return S}return null}return z(c)}function G(){function t(c,x,C,g,P){var _=c[x];if(!y(_)){var E=ee(_);return new q("Invalid "+g+" `"+P+"` of type "+("`"+E+"` supplied to `"+C+"`, expected a single ReactElement."))}return null}return z(t)}function s(){function t(c,x,C,g,P){var _=c[x];if(!r.isValidElementType(_)){var E=ee(_);return new q("Invalid "+g+" `"+P+"` of type "+("`"+E+"` supplied to `"+C+"`, expected a single ReactElement type."))}return null}return z(t)}function oe(t){function c(x,C,g,P,_){if(!(x[C]instanceof t)){var E=t.name||$,O=ve(x[C]);return new q("Invalid "+P+" `"+_+"` of type "+("`"+O+"` supplied to `"+g+"`, expected ")+("instance of `"+E+"`."))}return null}return z(c)}function Ee(t){if(!Array.isArray(t))return process.env.NODE_ENV!=="production"&&(arguments.length>1?d("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):d("Invalid argument supplied to oneOf, expected an array.")),R;function c(x,C,g,P,_){for(var E=x[C],O=0;O<t.length;O++)if(J(E,t[O]))return null;var k=JSON.stringify(t,function(K,o){var re=te(o);return re==="symbol"?String(o):o});return new q("Invalid "+P+" `"+_+"` of value `"+String(E)+"` "+("supplied to `"+g+"`, expected one of "+k+"."))}return z(c)}function Re(t){function c(x,C,g,P,_){if(typeof t!="function")return new q("Property `"+_+"` of component `"+g+"` has invalid PropType notation inside objectOf.");var E=x[C],O=ee(E);if(O!=="object")return new q("Invalid "+P+" `"+_+"` of type "+("`"+O+"` supplied to `"+g+"`, expected an object."));for(var k in E)if(u(E,k)){var S=t(E,k,g,P,_+"."+k,f);if(S instanceof Error)return S}return null}return z(c)}function fe(t){if(!Array.isArray(t))return process.env.NODE_ENV!=="production"&&d("Invalid argument supplied to oneOfType, expected an instance of array."),R;for(var c=0;c<t.length;c++){var x=t[c];if(typeof x!="function")return d("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ce(x)+" at index "+c+"."),R}function C(g,P,_,E,O){for(var k=[],S=0;S<t.length;S++){var K=t[S],o=K(g,P,_,E,O,f);if(o==null)return null;o.data&&u(o.data,"expectedType")&&k.push(o.data.expectedType)}var re=k.length>0?", expected one of type ["+k.join(", ")+"]":"";return new q("Invalid "+E+" `"+O+"` supplied to "+("`"+_+"`"+re+"."))}return z(C)}function Ce(){function t(c,x,C,g,P){return Z(c[x])?null:new q("Invalid "+g+" `"+P+"` supplied to "+("`"+C+"`, expected a ReactNode."))}return z(t)}function de(t,c,x,C,g){return new q((t||"React class")+": "+c+" type `"+x+"."+C+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+g+"`.")}function pe(t){function c(x,C,g,P,_){var E=x[C],O=ee(E);if(O!=="object")return new q("Invalid "+P+" `"+_+"` of type `"+O+"` "+("supplied to `"+g+"`, expected `object`."));for(var k in t){var S=t[k];if(typeof S!="function")return de(g,P,_,k,te(S));var K=S(E,k,g,P,_+"."+k,f);if(K)return K}return null}return z(c)}function H(t){function c(x,C,g,P,_){var E=x[C],O=ee(E);if(O!=="object")return new q("Invalid "+P+" `"+_+"` of type `"+O+"` "+("supplied to `"+g+"`, expected `object`."));var k=p({},x[C],t);for(var S in k){var K=t[S];if(u(t,S)&&typeof K!="function")return de(g,P,_,S,te(K));if(!K)return new q("Invalid "+P+" `"+_+"` key `"+S+"` supplied to `"+g+"`.\nBad object: "+JSON.stringify(x[C],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(t),null,"  "));var o=K(E,S,g,P,_+"."+S,f);if(o)return o}return null}return z(c)}function Z(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(Z);if(t===null||y(t))return!0;var c=T(t);if(c){var x=c.call(t),C;if(c!==t.entries){for(;!(C=x.next()).done;)if(!Z(C.value))return!1}else for(;!(C=x.next()).done;){var g=C.value;if(g&&!Z(g[1]))return!1}}else return!1;return!0;default:return!1}}function ie(t,c){return t==="symbol"?!0:c?c["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&c instanceof Symbol:!1}function ee(t){var c=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":ie(c,t)?"symbol":c}function te(t){if(typeof t>"u"||t===null)return""+t;var c=ee(t);if(c==="object"){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return c}function ce(t){var c=te(t);switch(c){case"array":case"object":return"an "+c;case"boolean":case"date":case"regexp":return"a "+c;default:return c}}function ve(t){return!t.constructor||!t.constructor.name?$:t.constructor.name}return D.checkPropTypes=v,D.resetWarningCache=v.resetWarningCache,D.PropTypes=D,D},Ye}var Ge,pr;function Ur(){if(pr)return Ge;pr=1;var r=We();function p(){}function f(){}return f.resetWarningCache=p,Ge=function(){function u(R,y,b,j,h,T){if(T!==r){var $=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw $.name="Invariant Violation",$}}u.isRequired=u;function v(){return u}var d={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:v,element:u,elementType:u,instanceOf:v,node:u,objectOf:v,oneOf:v,oneOfType:v,shape:v,exact:v,checkPropTypes:f,resetWarningCache:p};return d.PropTypes=d,d},Ge}if(process.env.NODE_ENV!=="production"){var Vr=ir(),zr=!0;$e.exports=Br()(Vr.isElement,zr)}else $e.exports=Ur()();var Jr=$e.exports;const a=Mr(Jr),Kr={iconButton:"_iconButton_1963e_1"},Xr={trash:ae.faTrash,filter:ae.faFilter,info:ae.faInfo,fill:ae.faFillDrip,ellipsis:ae.faEllipsisVertical,chevronRight:ae.faChevronRight,chevronLeft:ae.faChevronLeft},_e=({onClick:r,iconName:p})=>l.jsx("div",{className:Kr.iconButton,children:l.jsx("button",{"aria-label":p,type:"button",onClick:r,children:l.jsx(er.FontAwesomeIcon,{icon:Xr[p]})})});_e.propTypes={iconName:a.oneOf(["trash","filter","info","fill","ellipsis","chevronLeft","chevronRight"]),onClick:a.func.isRequired},_e.defaultProps={iconName:"ellipsis"};const Hr={layerButtonReel:"_layerButtonReel_1o59k_1"},we=({buttons:r})=>l.jsx("div",{className:Hr.layerButtonReel,children:r&&Object.keys(r).map(p=>l.jsx(_e,{iconName:p,onClick:r[p]}))});we.propTypes={buttons:a.objectOf(a.func)},we.defaultProps={buttons:null};const Be={layerToggle:"_layerToggle_1rxix_7",switch:"_switch_1rxix_15",slider:"_slider_1rxix_32"},je=({layerName:r,isActive:p,onChange:f})=>l.jsxs("div",{className:Be.layerToggle,children:[l.jsx("p",{children:r}),l.jsxs("div",{className:Be.switch,children:[l.jsx("input",{type:"checkbox",value:r,checked:p,onChange:f}),l.jsx("span",{className:Be.slider})]})]});je.propTypes={layerName:a.string,isActive:a.bool,onChange:a.func.isRequired},je.defaultProps={layerName:"Example Layer",isActive:!1};const Ue={layerCard:"_layerCard_x5vr4_1",layerCardWrapper:"_layerCardWrapper_x5vr4_10",layerCardChildren:"_layerCardChildren_x5vr4_17"},vr=({layerName:r,isActive:p,onChange:f,buttons:u,children:v})=>l.jsxs("div",{className:Ue.layerCard,children:[l.jsxs("div",{className:Ue.layerCardWrapper,children:[l.jsx(je,{layerName:r,isActive:p,onChange:f}),l.jsx(we,{buttons:u})]}),p&&l.jsx("div",{className:Ue.layerCardChildren,children:v})]});vr.propTypes={layerName:a.string.isRequired,isActive:a.bool,onChange:a.func.isRequired,buttons:a.objectOf(a.func),children:a.oneOfType([a.arrayOf(a.node),a.node])};const Pe={swatchContainer:"_swatchContainer_1r5li_2",swatch:"_swatch_1r5li_2",swatchLabel:"_swatchLabel_1r5li_18",swatchValue:"_swatchValue_1r5li_24"},Ae=({color:r,label:p,value:f,units:u})=>l.jsxs("div",{className:Pe.swatchContainer,children:[l.jsx("div",{className:Pe.swatch,style:{"background-color":r}}),l.jsx("div",{className:Pe.swatchLabel,children:p}),l.jsxs("div",{className:Pe.swatchValue,children:[f,u]})]});Ae.propTypes={color:a.string.isRequired,label:a.string.isRequired,value:a.number,units:a.string},Ae.defaultProps={value:void 0,units:""};const Zr={swatchLegend:"_swatchLegend_qiaru_1"},yr=({swatches:r})=>l.jsx("div",{className:Zr.swatchLegend,children:r&&r.map(p=>{const{color:f,label:u,value:v,units:d}=p;return l.jsx(Ae,{label:u,color:f,value:v,units:d},u)})});yr.propTypes={swatches:a.arrayOf(a.objectOf(a.string)).isRequired};const ke={gradient:"_gradient_1w8qh_1",gradientNumbers:"_gradientNumbers_1w8qh_6",gradientLegend:"_gradientLegend_1w8qh_11"},hr=({title:r="Gradient Legend",startColor:p="red",endColor:f="yellow",startNo:u=0,endNo:v=100,titleBelow:d=!1,bins:R=0,precision:y=2})=>{const b=R>0?Array(R-1).fill(0).map((j,h)=>{const T=(u+(v-u)/R*(h+1)).toPrecision(y);return l.jsx("span",{children:T},T)}):[];return l.jsxs("div",{className:"gradient-box",children:[!d&&l.jsxs("div",{className:"ui-title",children:[" ",r]}),l.jsxs("div",{className:ke.gradientLegend,children:[l.jsx("div",{className:ke.gradient,style:{background:`linear-gradient(to right, ${p} , ${f})`}}),l.jsxs("div",{className:ke.gradientNumbers,children:[l.jsx("span",{children:u}),b,l.jsx("span",{children:v})]}),d&&l.jsxs("div",{className:ke.uiTitle,children:[" ",r]})]})]})};hr.propTypes={title:a.string,startColor:a.string,endColor:a.string,startNo:a.number,endNo:a.number,titleBelow:a.bool,bins:a.number,precision:a.number};const Ve={simpleSlider:"_simpleSlider_qj292_1",simpleSliderInput:"_simpleSliderInput_qj292_7",simpleSliderMinMaxContainer:"_simpleSliderMinMaxContainer_qj292_11"},Ie=({units:r,label:p,onChange:f,min:u,max:v,step:d,value:R})=>l.jsxs("div",{className:Ve.simpleSlider,children:[l.jsxs("div",{children:[p&&l.jsx("div",{className:"ui-label",children:p}),l.jsx("input",{onChange:f,className:Ve.simpleSliderInput,type:"range",value:R,min:u,max:v,step:d})]}),l.jsxs("div",{className:Ve.simpleSliderMinMaxContainer,children:[l.jsxs("div",{className:"ui-label",children:[u,r]}),l.jsxs("div",{className:"ui-label",children:[v,r]})]})]});Ie.propTypes={onChange:a.func.isRequired,min:a.number.isRequired,max:a.number.isRequired,step:a.number.isRequired,value:a.number,label:a.string,units:a.string},Ie.defaultProps={value:0,units:"",label:""};const Te={layerGroupWrapper:"_layerGroupWrapper_rqofl_1",layerGroupChevron:"_layerGroupChevron_rqofl_15",layerGroupWapper:"_layerGroupWapper_rqofl_19","layer-group-wrapper":"_layer-group-wrapper_rqofl_23",layerGroupName:"_layerGroupName_rqofl_28","layer-group":"_layer-group_rqofl_23",layerGroupChildren:"_layerGroupChildren_rqofl_36"},mr=({groupName:r,children:p})=>{const[f,u]=se.useState(!1),v=()=>{u(!f)};return l.jsxs("div",{className:Te.layerGroup,children:[l.jsxs("button",{type:"button",className:Te.layerGroupWrapper,onClick:v,children:[l.jsx("div",{className:Te.layerGroupChevron,children:l.jsx(er.FontAwesomeIcon,{size:"md",fixedWidth:!0,icon:f?ae.faChevronDown:ae.faChevronRight})}),l.jsx("span",{className:Te.layerGroupName,children:r})]}),f&&l.jsx("div",{className:Te.layerGroupChildren,children:p})]})};mr.propTypes={groupName:a.string,children:a.oneOfType([a.arrayOf(a.node),a.node]).isRequired};const ze=({mapContainer:r,id:p,children:f})=>l.jsx("div",{className:"map-container",id:p,ref:r,children:f});ze.propTypes={mapContainer:a.oneOfType([a.func,a.shape({current:a.instanceOf(Element)})]),children:a.node,id:a.string},ze.defaultProps={children:null,mapContainer:null,id:null};const br=({children:r})=>l.jsx("div",{className:"nav-container",children:r});br.propTypes={children:a.oneOfType([a.arrayOf(a.node),a.node]).isRequired};const gr=({showToggle:r,children:p})=>{const[f,u]=se.useState(!1),v=`sidebar ${f?"closed":""}`,d=()=>{u(!f)};return l.jsxs("div",{className:"sidebarContainer",children:[l.jsx("div",{className:v,children:p}),r&&l.jsx("div",{className:"sidebarToggle",children:l.jsx(_e,{onClick:d,iconName:f?"chevronRight":"chevronLeft"})})]})};gr.propTypes={showToggle:a.bool,children:a.oneOfType([a.arrayOf(a.node),a.node]).isRequired};const _r=({children:r})=>l.jsx("div",{className:"layout-stacked",children:r});_r.propTypes={children:a.oneOfType([a.arrayOf(a.node),a.node]).isRequired};const Tr=({align:r="left",children:p})=>l.jsx("div",{className:`layout-standard ${r}`,children:p});Tr.propTypes={align:a.oneOf(["left","right"]),children:a.oneOfType([a.arrayOf(a.node),a.node]).isRequired};const Er={sliderControlWrapper:"_sliderControlWrapper_2tznx_1",sliderLabel:"_sliderLabel_2tznx_9"},Rr=({title:r,units:p,sliderConfig:f})=>l.jsxs("div",{className:Er.sliderControlWrapper,children:[l.jsx("div",{className:"ui-label",children:r}),l.jsx("div",{}),f&&f.map(u=>{const{label:v}=u;return l.jsx("div",{className:Er.sliderLabel,children:v})}),f&&f.map(u=>{const{onChange:v,min:d,max:R,step:y,value:b}=u;return l.jsx(Ie,{onChange:v,units:p,min:d,max:R,step:y,value:b})})]});Rr.propTypes={title:a.string.isRequired,units:a.string.isRequired,sliderConfig:a.arrayOf(a.objectOf(a.string)).isRequired},W.GradientLegend=hr,W.IconButton=_e,W.LayerButtonReel=we,W.LayerCard=vr,W.LayerGroup=mr,W.LayerToggle=je,W.MapContainer=ze,W.NavContainer=br,W.SidebarContainer=gr,W.SimpleSlider=Ie,W.SliderControl=Rr,W.Stacked=_r,W.Standard=Tr,W.Swatch=Ae,W.SwatchLegend=yr,Object.defineProperty(W,Symbol.toStringTag,{value:"Module"})});
