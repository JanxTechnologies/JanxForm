module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=14)}([function(t,e){t.exports=require("react")},function(t,e,r){t.exports=r(12)()},function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e,r){t.exports=r(7)},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},function(t,e){function r(t,e,r,n,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void r(t)}u.done?e(a):Promise.resolve(a).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var c=t.apply(e,n);function u(t){r(c,o,i,u,a,"next",t)}function a(t){r(c,o,i,u,a,"throw",t)}u(void 0)}))}}},function(t,e,r){var n=r(8),o=r(9),i=r(10),c=r(11);t.exports=function(t){return n(t)||o(t)||i(t)||c()}},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function a(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),c=new x(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var u=O(c,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var a=s(t,e,r);if("normal"===a.type){if(n=r.done?"completed":"suspendedYield",a.arg===f)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(n="completed",r.method="throw",r.arg=a.arg)}}}(t,r,c),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var f={};function l(){}function p(){}function h(){}var d={};d[o]=function(){return this};var y=Object.getPrototypeOf,v=y&&y(y(F([])));v&&v!==e&&r.call(v,o)&&(d=v);var m=h.prototype=l.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(o,i){function c(){return new e((function(n,c){!function n(o,i,c,u){var a=s(t[o],t,i);if("throw"!==a.type){var f=a.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(a.arg)}(o,i,n,c)}))}return n=n?n.then(c,c):c()}}function O(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function F(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=m.constructor=h,h.constructor=p,p.displayName=u(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new b(a(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(m),u(m,c,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=F,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),a=r.call(i,"finallyLoc");if(u&&a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:F(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){var n=r(4);t.exports=function(t){if(Array.isArray(t))return n(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e,r){var n=r(4);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,r){"use strict";var n=r(13);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,i,c){if(c!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,r){"use strict";r.r(e),r.d(e,"useField",(function(){return O})),r.d(e,"JanxFormContext",(function(){return y}));var n=r(3),o=r.n(n),i=r(5),c=r.n(i),u=r(6),a=r.n(u),s=r(2),f=r.n(s),l=r(0),p=r.n(l),h=r(1),d=r.n(h),y=Object(l.createContext)({});function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){f()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var g=Object(l.forwardRef)((function(t,e){var r=t.children,n=t.className,i=t.defaultValues,u=t.onSubmit,s=t.skipValidationOnSubmit,h=t.commonFieldsClassName,d=Object(l.useRef)(i||{}),v=Object(l.useRef)([]),g=Object(l.useRef)({}),b=Object(l.useRef)({}),O=function(t){g.current=t},w=function(){return Object.keys(g.current).length},j=function(t){d.current=t},x=function(t){v.current=t},F=Object(l.useCallback)((function(t){x([].concat(a()(v.current),[t]))}),[v]),E=Object(l.useCallback)((function(t){x(v.current.filter((function(e){return e.name!==t})))}),[v]),L=function(t){return v.current.find((function(e){return e.name===t}))},P=Object(l.useCallback)((function(){return new Promise((function(t,e){Object.keys(v.current).forEach((function(t){v.current[t]&&v.current[t].ref&&v.current[t].ref.validate&&v.current[t].ref.validate()})),setTimeout((function(){t(0===w())}),10)}))}),[]),_=Object(l.useCallback)((function(t){Object.keys(t).forEach((function(e){var r=L(e);r&&r.ref&&r.ref.setValue&&r.ref.setValue(t[e])}))}),[]),S=Object(l.useCallback)((function(){Object.keys(v.current).forEach((function(t){v.current[t]&&v.current[t].ref&&v.current[t].ref.clearValue&&v.current[t].ref.clearValue()}))}),[]),k=Object(l.useCallback)(function(){var t=c()(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e&&e.preventDefault(),s?u(d.current,{touched:b.current,errors:g.current,isValid:0===w()}):P().then((function(t){t?u(d.current,{touched:b.current,errors:g.current,isValid:t}):Object.keys(g.current).reverse().forEach((function(t){var e=L(t);e&&e.ref&&e.ref.setFocus&&e.ref.setFocus()}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[s,u,P]);return Object(l.useImperativeHandle)(e,(function(){return{getField:function(){return L()},setData:function(t){_(t)},clearForm:function(){S()},submitForm:function(){k()},setFieldValue:function(t,e){var r=L(t);r&&r.ref&&r.ref.setValue&&r.ref.setValue(e)}}})),p.a.createElement(y.Provider,{value:{registerField:F,unregisterField:E,setValues:j,setFieldValue:function(t,e){j(m(m({},d.current),{},f()({},t,e)))},getFieldValue:function(t){return d.current[t]},setFieldErrors:function(t,e){if(0===e.length){var r=g.current;delete r[t],O(r)}else O(m(m({},g.current),{},f()({},t,e)))},getFieldErrors:function(t){return g.current[t]},setFieldTouched:function(t,e){!function(t){b.current=t}(m(m({},b.current),{},f()({},t,e)))},getFieldTouched:function(t){return b.current[t]},getField:L,commonFieldsClassName:h}},p.a.createElement("form",{className:n,onSubmit:k},r))}));g.propTypes={className:d.a.string,commonFieldsClassName:d.a.string,defaultValues:d.a.object,children:d.a.any,onSubmit:d.a.func,skipValidationOnSubmit:d.a.bool};var b=g,O=function(){var t=Object(l.useContext)(y),e=t.registerField,r=t.unregisterField,n=t.setFieldValue;return{registerField:e,unregisterField:r,setValues:t.setValues,setFieldValue:n,getFieldValue:t.getFieldValue,setFieldErrors:t.setFieldErrors,getFieldErrors:t.getFieldErrors,setFieldTouched:t.setFieldTouched,getFieldTouched:t.getFieldTouched,getField:t.getField,commonFieldsClassName:t.commonFieldsClassName}};e.default=b}]);