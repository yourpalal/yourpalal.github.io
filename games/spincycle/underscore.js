/**
 * @license
 * Lo-Dash 1.3.1 (Custom Build) lodash.com/license
 * Build: `lodash underscore exports="amd,commonjs,global,node" -o ./dist/lodash.underscore.js`
 * Underscore.js 1.4.4 underscorejs.org/LICENSE
 */

!function(e){function t(e,t){var n;if(e&&dt[typeof e])for(n in e)if(Ct.call(e,n)&&t(e[n],n,e)===et)break}function n(e,t){var n;if(e&&dt[typeof e])for(n in e)if(t(e[n],n,e)===et)break}function r(e){var t,n=[];if(!e||!dt[typeof e])return n;for(t in e)Ct.call(e,t)&&n.push(t);return n}function i(e,t,n){n=(n||0)-1;for(var r=e.length;++n<r;)if(e[n]===t)return n;return-1}function s(e,t){var n=e.m,r=t.m;if(e=e.l,t=t.l,e!==t){if(e>t||typeof e=="undefined")return 1;if(e<t||typeof t=="undefined")return-1}return n<r?-1:1}function o(e){return"\\"+vt[e]}function u(){}function a(e){return e instanceof a?e:new f(e)}function f(e){this.__wrapped__=e}function l(e,t,n){function r(){var a=arguments,f=s?this:t;return i||(e=t[o]),n.length&&(a=a.length?(a=It.call(a),u?a.concat(n):n.concat(a)):n),this instanceof r?(f=c(e.prototype),a=e.apply(f,a),x(a)?a:f):e.apply(f,a)}var i=S(e),s=!n,o=t;if(s){var u=void 0;n=t}else if(!i)throw new TypeError;return r}function c(e){return x(e)?Mt(e):{}}function h(e){return Wt[e]}function p(){var e=(e=a.indexOf)===U?i:e;return e}function d(e){return Xt[e]}function v(e){return At.call(e)==ot}function m(e){if(!e)return e;for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];if(r)for(var i in r)e[i]=r[i]}return e}function g(e){if(!e)return e;for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];if(r)for(var i in r)e[i]==G&&(e[i]=r[i])}return e}function y(e){var t=[];return n(e,function(e,n){S(e)&&t.push(n)}),t.sort()}function b(e){for(var t=-1,n=zt(e),r=n.length,i={};++t<r;){var s=n[t];i[e[s]]=s}return i}function w(e){if(!e)return Q;if(Ut(e)||N(e))return!e.length;for(var t in e)if(Ct.call(e,t))return Y;return Q}function E(e,t,r,i){if(e===t)return 0!==e||1/e==1/t;var s=typeof e,o=typeof t;if(e===e&&(!e||"function"!=s&&"object"!=s)&&(!t||"function"!=o&&"object"!=o))return Y;if(e==G||t==G)return e===t;if(o=At.call(e),s=At.call(t),o!=s)return Y;switch(o){case at:case ft:return+e==+t;case lt:return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case ht:case pt:return e==t+""}if(s=o==ut,!s){if(e instanceof a||t instanceof a)return E(e.__wrapped__||e,t.__wrapped__||t,r,i);if(o!=ct)return Y;var o=e.constructor,u=t.constructor;if(o!=u&&(!S(o)||!(o instanceof o&&S(u)&&u instanceof u)))return Y}for(r||(r=[]),i||(i=[]),o=r.length;o--;)if(r[o]==e)return i[o]==t;var f=Q,l=0;if(r.push(e),i.push(t),s){if(l=t.length,f=l==e.length)for(;l--&&(f=E(e[l],t[l],r,i)););return f}return n(t,function(t,n,s){return Ct.call(s,n)?(l++,!(f=Ct.call(e,n)&&E(e[n],t,r,i))&&et):void 0}),f&&n(e,function(e,t,n){return Ct.call(n,t)?!(f=-1<--l)&&et:void 0}),f}function S(e){return typeof e=="function"}function x(e){return!!e&&!!dt[typeof e]}function T(e){return typeof e=="number"||At.call(e)==lt}function N(e){return typeof e=="string"||At.call(e)==pt}function C(e){for(var t=-1,n=zt(e),r=n.length,i=Array(r);++t<r;)i[t]=e[n[t]];return i}function k(e,n){var r=p(),i=e?e.length:0,s=Y;return i&&typeof i=="number"?s=-1<r(e,n):t(e,function(e){return(s=e===n)&&et}),s}function L(e,n,r){var i=Q;n=$(n,r),r=-1;var s=e?e.length:0;if(typeof s=="number")for(;++r<s&&(i=!!n(e[r],r,e)););else t(e,function(e,t,r){return!(i=!!n(e,t,r))&&et});return i}function A(e,n,r){var i=[];n=$(n,r),r=-1;var s=e?e.length:0;if(typeof s=="number")for(;++r<s;){var o=e[r];n(o,r,e)&&i.push(o)}else t(e,function(e,t,r){n(e,t,r)&&i.push(e)});return i}function O(e,n,r){n=$(n,r),r=-1;var i=e?e.length:0;if(typeof i!="number"){var s;return t(e,function(e,t,r){return n(e,t,r)?(s=e,et):void 0}),s}for(;++r<i;){var o=e[r];if(n(o,r,e))return o}}function M(e,n,r){var i=-1,s=e?e.length:0;if(n=n&&typeof r=="undefined"?n:$(n,r),typeof s=="number")for(;++i<s&&n(e[i],i,e)!==et;);else t(e,n)}function _(e,n,r){var i=-1,s=e?e.length:0;if(n=$(n,r),typeof s=="number")for(var o=Array(s);++i<s;)o[i]=n(e[i],i,e);else o=[],t(e,function(e,t,r){o[++i]=n(e,t,r)});return o}function D(e,t,n){var r=-1/0,i=r,s=-1,o=e?e.length:0;if(t||typeof o!="number")t=$(t,n),M(e,function(e,n,s){n=t(e,n,s),n>r&&(r=n,i=e)});else for(;++s<o;)n=e[s],n>i&&(i=n);return i}function P(e,t){var n=-1,r=e?e.length:0;if(typeof r=="number")for(var i=Array(r);++n<r;)i[n]=e[n][t];return i||_(e,t)}function H(e,n,r,i){if(!e)return r;var s=3>arguments.length;n=$(n,i,4);var o=-1,u=e.length;if(typeof u=="number")for(s&&(r=e[++o]);++o<u;)r=n(r,e[o],o,e);else t(e,function(e,t,i){r=s?(s=Y,e):n(r,e,t,i)});return r}function B(e,t,n,r){var i=e?e.length:0,s=3>arguments.length;if(typeof i!="number")var o=zt(e),i=o.length;return t=$(t,r,4),M(e,function(r,u,a){u=o?o[--i]:--i,n=s?(s=Y,e[u]):t(n,e[u],u,a)}),n}function j(e,n,r){var i;n=$(n,r),r=-1;var s=e?e.length:0;if(typeof s=="number")for(;++r<s&&!(i=n(e[r],r,e)););else t(e,function(e,t,r){return(i=n(e,t,r))&&et});return!!i}function F(e,t,n){return n&&w(t)?G:(n?O:A)(e,t)}function I(e){for(var t=-1,n=p(),r=e.length,i=Tt.apply(bt,It.call(arguments,1)),s=[];++t<r;){var o=e[t];0>n(i,o)&&s.push(o)}return s}function q(e,t,n){if(e){var r=0,i=e.length;if(typeof t!="number"&&t!=G){var s=-1;for(t=$(t,n);++s<i&&t(e[s],s,e);)r++}else if(r=t,r==G||n)return e[0];return It.call(e,0,jt(Bt(0,r),i))}}function R(e,t){for(var n=-1,r=e?e.length:0,i=[];++n<r;){var s=e[n];Ut(s)?kt.apply(i,t?s:R(s)):i.push(s)}return i}function U(e,t,n){if(typeof n=="number"){var r=e?e.length:0;n=0>n?Bt(0,r+n):n||0}else if(n)return n=W(e,t),e[n]===t?n:-1;return e?i(e,t,n):-1}function z(e,t,n){if(typeof t!="number"&&t!=G){var r=0,i=-1,s=e?e.length:0;for(t=$(t,n);++i<s&&t(e[i],i,e);)r++}else r=t==G||n?1:Bt(0,t);return It.call(e,r)}function W(e,t,n,r){var i=0,s=e?e.length:i;for(n=n?$(n,r,1):J,t=n(t);i<s;)r=i+s>>>1,n(e[r])<t?i=r+1:s=r;return i}function X(e,t,n,r){var i=-1,s=p(),o=e?e.length:0,u=[],a=u;for(typeof t!="boolean"&&t!=G&&(r=n,n=t,t=Y),n!=G&&(a=[],n=$(n,r));++i<o;){r=e[i];var f=n?n(r,i,e):r;(t?!i||a[a.length-1]!==f:0>s(a,f))&&(n&&a.push(f),u.push(r))}return u}function V(e,t){return Rt.fastBind||Ot&&2<arguments.length?Ot.call.apply(Ot,arguments):l(e,t,It.call(arguments,2))}function $(e,t,n){if(e==G)return J;var r=typeof e;if("function"!=r){if("object"!=r)return function(t){return t[e]};var i=zt(e);return function(t){for(var n=i.length,r=Y;n--&&(r=t[i[n]]===e[i[n]]););return r}}return typeof t=="undefined"?e:1===n?function(n){return e.call(t,n)}:2===n?function(n,r){return e.call(t,n,r)}:4===n?function(n,r,i,s){return e.call(t,n,r,i,s)}:function(n,r,i){return e.call(t,n,r,i)}}function J(e){return e}function K(e){M(y(e),function(t){var n=a[t]=e[t];a.prototype[t]=function(){var e=[this.__wrapped__];return kt.apply(e,arguments),e=n.apply(a,e),this.__chain__&&(e=new f(e),e.__chain__=Q),e}})}var Q=!0,G=null,Y=!1,Z=0,et={},tt=+(new Date)+"",nt=/&(?:amp|lt|gt|quot|#39);/g,rt=/($^)/,it=/[&<>"']/g,st=/['\n\r\t\u2028\u2029\\]/g,ot="[object Arguments]",ut="[object Array]",at="[object Boolean]",ft="[object Date]",lt="[object Number]",ct="[object Object]",ht="[object RegExp]",pt="[object String]",dt={"boolean":Y,"function":Q,object:Q,number:Y,string:Y,"undefined":Y},vt={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},mt=dt[typeof exports]&&exports,gt=dt[typeof module]&&module&&module.exports==mt&&module,yt=dt[typeof global]&&global;!yt||yt.global!==yt&&yt.window!==yt||(e=yt);var bt=[],yt=Object.prototype,wt=e._,Et=RegExp("^"+(yt.valueOf+"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),St=Math.ceil,xt=e.clearTimeout,Tt=bt.concat,Nt=Math.floor,Ct=yt.hasOwnProperty,kt=bt.push,Lt=e.setTimeout,At=yt.toString,Ot=Et.test(Ot=At.bind)&&Ot,Mt=Et.test(Mt=Object.create)&&Mt,_t=Et.test(_t=Array.isArray)&&_t,Dt=e.isFinite,Pt=e.isNaN,Ht=Et.test(Ht=Object.keys)&&Ht,Bt=Math.max,jt=Math.min,Ft=Math.random,It=bt.slice,yt=Et.test(e.attachEvent),qt=Ot&&!/\n|true/.test(Ot+yt);f.prototype=a.prototype;var Rt={};!function(){var e={0:1,length:1};Rt.fastBind=Ot&&!qt,Rt.spliceObjects=(bt.splice.call(e,0,1),!e[0])}(1),a.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,variable:""},Mt||(c=function(e){if(x(e)){u.prototype=e;var t=new u;u.prototype=G}return t||{}}),v(arguments)||(v=function(e){return e?Ct.call(e,"callee"):Y});var Ut=_t||function(e){return e?typeof e=="object"&&At.call(e)==ut:Y},zt=Ht?function(e){return x(e)?Ht(e):[]}:r,Wt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Xt=b(Wt);S(/x/)&&(S=function(e){return typeof e=="function"&&"[object Function]"==At.call(e)}),a.after=function(e,t){return 1>e?t():function(){return 1>--e?t.apply(this,arguments):void 0}},a.bind=V,a.bindAll=function(e){for(var t=1<arguments.length?Tt.apply(bt,It.call(arguments,1)):y(e),n=-1,r=t.length;++n<r;){var i=t[n];e[i]=V(e[i],e)}return e},a.compact=function(e){for(var t=-1,n=e?e.length:0,r=[];++t<n;){var i=e[t];i&&r.push(i)}return r},a.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length;n--;)t=[e[n].apply(this,t)];return t[0]}},a.countBy=function(e,t,n){var r={};return t=$(t,n),M(e,function(e,n,i){n=t(e,n,i)+"",Ct.call(r,n)?r[n]++:r[n]=1}),r},a.debounce=function(e,t,n){function r(){u=G,n||(s=e.apply(o,i))}var i,s,o,u=G;return function(){var a=n&&!u;return i=arguments,o=this,xt(u),u=Lt(r,t),a&&(s=e.apply(o,i)),s}},a.defaults=g,a.defer=function(e){var t=It.call(arguments,1);return Lt(function(){e.apply(void 0,t)},1)},a.delay=function(e,t){var n=It.call(arguments,2);return Lt(function(){e.apply(void 0,n)},t)},a.difference=I,a.filter=A,a.flatten=R,a.forEach=M,a.functions=y,a.groupBy=function(e,t,n){var r={};return t=$(t,n),M(e,function(e,n,i){n=t(e,n,i)+"",(Ct.call(r,n)?r[n]:r[n]=[]).push(e)}),r},a.initial=function(e,t,n){if(!e)return[];var r=0,i=e.length;if(typeof t!="number"&&t!=G){var s=i;for(t=$(t,n);s--&&t(e[s],s,e);)r++}else r=t==G||n?1:t||r;return It.call(e,0,jt(Bt(0,i-r),i))},a.intersection=function(e){var t=arguments,n=t.length,r=-1,i=p(),s=e?e.length:0,o=[];e:for(;++r<s;){var u=e[r];if(0>i(o,u)){for(var a=n;--a;)if(0>i(t[a],u))continue e;o.push(u)}}return o},a.invert=b,a.invoke=function(e,t){var n=It.call(arguments,2),r=-1,i=typeof t=="function",s=e?e.length:0,o=Array(typeof s=="number"?s:0);return M(e,function(e){o[++r]=(i?t:e[t]).apply(e,n)}),o},a.keys=zt,a.map=_,a.max=D,a.memoize=function(e,t){var n={};return function(){var r=tt+(t?t.apply(this,arguments):arguments[0]);return Ct.call(n,r)?n[r]:n[r]=e.apply(this,arguments)}},a.min=function(e,t,n){var r=1/0,i=r,s=-1,o=e?e.length:0;if(t||typeof o!="number")t=$(t,n),M(e,function(e,n,s){n=t(e,n,s),n<r&&(r=n,i=e)});else for(;++s<o;)n=e[s],n<i&&(i=n);return i},a.omit=function(e){var t=p(),r=Tt.apply(bt,It.call(arguments,1)),i={};return n(e,function(e,n){0>t(r,n)&&(i[n]=e)}),i},a.once=function(e){var t,n;return function(){return t?n:(t=Q,n=e.apply(this,arguments),e=G,n)}},a.pairs=function(e){for(var t=-1,n=zt(e),r=n.length,i=Array(r);++t<r;){var s=n[t];i[t]=[s,e[s]]}return i},a.partial=function(e){return l(e,It.call(arguments,1))},a.pick=function(e){for(var t=-1,n=Tt.apply(bt,It.call(arguments,1)),r=n.length,i={};++t<r;){var s=n[t];s in e&&(i[s]=e[s])}return i},a.pluck=P,a.range=function(e,t,n){e=+e||0,n=+n||1,t==G&&(t=e,e=0);var r=-1;t=Bt(0,St((t-e)/n));for(var i=Array(t);++r<t;)i[r]=e,e+=n;return i},a.reject=function(e,t,n){return t=$(t,n),A(e,function(e,n,r){return!t(e,n,r)})},a.rest=z,a.shuffle=function(e){var t=-1,n=e?e.length:0,r=Array(typeof n=="number"?n:0);return M(e,function(e){var n=Nt(Ft()*(++t+1));r[t]=r[n],r[n]=e}),r},a.sortBy=function(e,t,n){var r=-1,i=e?e.length:0,o=Array(typeof i=="number"?i:0);for(t=$(t,n),M(e,function(e,n,i){o[++r]={l:t(e,n,i),m:r,n:e}}),i=o.length,o.sort(s);i--;)o[i]=o[i].n;return o},a.tap=function(e,t){return t(e),e},a.throttle=function(e,t){function n(){o=new Date,u=G,i=e.apply(s,r)}var r,i,s,o=0,u=G;return function(){var a=new Date,f=t-(a-o);return r=arguments,s=this,0<f?u||(u=Lt(n,f)):(xt(u),u=G,o=a,i=e.apply(s,r)),i}},a.times=function(e,t,n){for(var r=-1,i=Array(-1<e?e:0);++r<e;)i[r]=t.call(n,r);return i},a.toArray=function(e){return Ut(e)?It.call(e):e&&typeof e.length=="number"?_(e):C(e)},a.union=function(e){return Ut(e)||(arguments[0]=e?It.call(e):bt),X(Tt.apply(bt,arguments))},a.uniq=X,a.values=C,a.where=F,a.without=function(e){return I(e,It.call(arguments,1))},a.wrap=function(e,t){return function(){var n=[e];return kt.apply(n,arguments),t.apply(this,n)}},a.zip=function(e){for(var t=-1,n=e?D(P(arguments,"length")):0,r=Array(0>n?0:n);++t<n;)r[t]=P(arguments,t);return r},a.collect=_,a.drop=z,a.each=M,a.extend=m,a.methods=y,a.object=function(e,t){for(var n=-1,r=e?e.length:0,i={};++n<r;){var s=e[n];t?i[s]=t[n]:i[s[0]]=s[1]}return i},a.select=A,a.tail=z,a.unique=X,a.chain=function(e){return e=new f(e),e.__chain__=Q,e},a.clone=function(e){return x(e)?Ut(e)?It.call(e):m({},e):e},a.contains=k,a.escape=function(e){return e==G?"":(e+"").replace(it,h)},a.every=L,a.find=O,a.has=function(e,t){return e?Ct.call(e,t):Y},a.identity=J,a.indexOf=U,a.isArguments=v,a.isArray=Ut,a.isBoolean=function(e){return e===Q||e===Y||At.call(e)==at},a.isDate=function(e){return e?typeof e=="object"&&At.call(e)==ft:Y},a.isElement=function(e){return e?1===e.nodeType:Y},a.isEmpty=w,a.isEqual=E,a.isFinite=function(e){return Dt(e)&&!Pt(parseFloat(e))},a.isFunction=S,a.isNaN=function(e){return T(e)&&e!=+e},a.isNull=function(e){return e===G},a.isNumber=T,a.isObject=x,a.isRegExp=function(e){return!!e&&!!dt[typeof e]&&At.call(e)==ht},a.isString=N,a.isUndefined=function(e){return typeof e=="undefined"},a.lastIndexOf=function(e,t,n){var r=e?e.length:0;for(typeof n=="number"&&(r=(0>n?Bt(0,r+n):jt(n,r-1))+1);r--;)if(e[r]===t)return r;return-1},a.mixin=K,a.noConflict=function(){return e._=wt,this},a.random=function(e,t){e==G&&t==G&&(t=1),e=+e||0,t==G?(t=e,e=0):t=+t||0;var n=Ft();return e%1||t%1?e+jt(n*(t-e+parseFloat("1e-"+((n+"").length-1))),t):e+Nt(n*(t-e+1))},a.reduce=H,a.reduceRight=B,a.result=function(e,t){var n=e?e[t]:G;return S(n)?e[t]():n},a.size=function(e){var t=e?e.length:0;return typeof t=="number"?t:zt(e).length},a.some=j,a.sortedIndex=W,a.template=function(e,t,n){var r=a.templateSettings;e||(e=""),n=g({},n,r);var i=0,s="__p+='",r=n.variable;e.replace(RegExp((n.escape||rt).source+"|"+(n.interpolate||rt).source+"|"+(n.evaluate||rt).source+"|$","g"),function(t,n,r,u,a){return s+=e.slice(i,a).replace(st,o),n&&(s+="'+_['escape']("+n+")+'"),u&&(s+="';"+u+";__p+='"),r&&(s+="'+((__t=("+r+"))==null?'':__t)+'"),i=a+t.length,t}),s+="';\n",r||(r="obj",s="with("+r+"||{}){"+s+"}"),s="function("+r+"){var __t,__p='',__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}"+s+"return __p}";try{var u=Function("_","return "+s)(a)}catch(f){throw f.source=s,f}return t?u(t):(u.source=s,u)},a.unescape=function(e){return e==G?"":(e+"").replace(nt,d)},a.uniqueId=function(e){var t=++Z+"";return e?e+t:t},a.all=L,a.any=j,a.detect=O,a.findWhere=function(e,t){return F(e,t,Q)},a.foldl=H,a.foldr=B,a.include=k,a.inject=H,a.first=q,a.last=function(e,t,n){if(e){var r=0,i=e.length;if(typeof t!="number"&&t!=G){var s=i;for(t=$(t,n);s--&&t(e[s],s,e);)r++}else if(r=t,r==G||n)return e[i-1];return It.call(e,Bt(0,i-r))}},a.take=q,a.head=q,a.VERSION="1.3.1",K(a),a.prototype.chain=function(){return this.__chain__=Q,this},a.prototype.value=function(){return this.__wrapped__},M("pop push reverse shift sort splice unshift".split(" "),function(e){var t=bt[e];a.prototype[e]=function(){var e=this.__wrapped__;return t.apply(e,arguments),!Rt.spliceObjects&&0===e.length&&delete e[0],this}}),M(["concat","join","slice"],function(e){var t=bt[e];a.prototype[e]=function(){var e=t.apply(this.__wrapped__,arguments);return this.__chain__&&(e=new f(e),e.__chain__=Q),e}}),typeof define=="function"&&typeof define.amd=="object"&&define.amd?(e._=a,define([],function(){return a})):mt&&!mt.nodeType?gt?(gt.exports=a)._=a:mt._=a:e._=a}(this);