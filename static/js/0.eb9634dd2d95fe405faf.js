webpackJsonp([0],{SldL:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=_;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},g={};g[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(G([])));y&&y!==n&&o.call(y,a)&&(g=y);var w=k.prototype=b.prototype=Object.create(g);L.prototype=w.constructor=k,k.constructor=L,k[c]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[s]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,r,n){var o=new j(_(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=G,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function _(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return M()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=C(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=x(t,e,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function b(){}function L(){}function k(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var s=x(t[r],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},a)}a(s.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function C(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function G(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:M}}function M(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,r){t.exports=r("jyFz")},exGp:function(t,e,r){"use strict";e.__esModule=!0;var n,o=r("//Fk"),i=(n=o)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,r){return function n(o,a){try{var s=e[o](a),c=s.value}catch(t){return void r(t)}if(!s.done)return i.default.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}("next")})}}},jyFz:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("SldL"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},r0hr:function(t,e){},weg5:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Gu7T"),o=r.n(n),i=r("Xxa5"),a=r.n(i),s=r("exGp"),c=r.n(s),u={data:function(){return{isGetChatMsg:!0,form:{msg:""},userInfo:{},post_data:[],ops:{rail:{background:"#f5f5f5",border:"1px solid #cecece",size:"7px"},bar:{background:"#999",keepShow:!0,size:"5px",minSize:0},scrollButton:{enable:!0,background:"#cecece"},scrollPanel:{easing:"easeInQuad",speed:800},vuescroll:{wheelScrollDuration:0,wheelDirectionReverse:!1}}}},created:function(){var t=this;this.userInfo=JSON.parse(localStorage.getItem("userInfo")),this.$socket.emit("getChatMsg"),window.onkeyup=function(e){"Enter"!==e.code||e.shiftKey||t.setChatMsg()}},mounted:function(){},methods:{scrollEvent:function(){var t=this.$refs.vs.getScrollProcess(),e=t.v;t.h;0===e&&this.isGetChatMsg&&(this.isGetChatMsg=!1,this.$socket.emit("getChatMsg",this.post_data[0].id))},setChatMsg:function(){var t=this;return c()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=t.form.msg){e.next=2;break}return e.abrupt("return");case 2:if("\n"!=t.form.msg){e.next=5;break}return t.form.msg="",e.abrupt("return");case 5:return e.next=7,t.$socket.emit("setChatMsg",{msg:t.form.msg.replace(/\n/g,"<br/>").replace(/\s/g,"&nbsp;"),user_id:t.userInfo.user_id});case 7:t.form.msg="";case 8:case"end":return e.stop()}},e,t)}))()}},sockets:{connect:function(t){this.$socket.emit("joinRoom",11111)},joinRoom:function(t){console.log("joinRoom",t)},getChatMsg:function(t){var e,r=this;if(t.length){this.isGetChatMsg=!0,(e=this.post_data).push.apply(e,o()(t)),this.post_data.sort(function(t,e){return t.id-e.id});var n=t[t.length-1].id;this.$nextTick(function(){if(n===r.post_data[r.post_data.length-1].id){if(r.post_data[r.post_data.length-1].user_id!=r.userInfo.user_id)document.getElementById("audio").play();r.$refs.vs.scrollIntoView("#id"+n,500)}else r.$refs.vs.scrollIntoView("#id"+n,0)})}}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-row",{staticClass:"df jcc",attrs:{gutter:20}},[r("el-col",{attrs:{span:16}},[r("el-row",{staticClass:"chatWindw df ffcn"},[r("vue-scroll",{ref:"vs",attrs:{ops:t.ops},on:{"handle-scroll":t.scrollEvent}},[r("div",{staticClass:"p20"},t._l(t.post_data,function(e,n){return r("div",{key:e.id,attrs:{id:["id"+e.id]}},[n&&e.time-t.post_data[n-1].time>12e4?r("div",{staticClass:"time df aic jcc"},[r("span",{staticClass:"df aic jcc"},[t._v(t._s(t._f("formatDate")(e.time)))])]):t._e(),t._v(" "),r("div",{staticClass:"df aifs ptb10",class:[e.user_id==t.userInfo.user_id?"jcfe":"jcfs"]},[r("el-avatar",{class:[e.user_id==t.userInfo.user_id?"o2":"o0"],attrs:{shape:"square",size:"medium",src:e.user_head}}),t._v(" "),r("div",{staticClass:"df ffcn mlr10",staticStyle:{"max-width":"75%"}},[r("div",{staticClass:"df",class:[e.user_id==t.userInfo.user_id?"jcfe":"jcfs"],staticStyle:{color:"#606266","font-size":"12px"}},[t._v(t._s(e.user_name))]),t._v(" "),r("div",{staticClass:"text o1",domProps:{innerHTML:t._s(e.msg)}})])],1)])}),0)])],1),t._v(" "),r("el-row",{staticClass:"sendText"},[r("el-col",[r("audio",{attrs:{src:"http://uaoie.top/cv/audio/3761.mp3",id:"audio"}})]),t._v(" "),r("el-col",[r("el-input",{staticClass:"inputSen",attrs:{type:"textarea",maxlength:"2048",autofocus:"",placeholder:"请输入...","show-word-limit":""},model:{value:t.form.msg,callback:function(e){t.$set(t.form,"msg",e)},expression:"form.msg"}})],1),t._v(" "),r("el-col",{staticClass:"df jcfe"},[r("el-button",{staticClass:"buttonSen",attrs:{type:"info",plain:"","native-type":"submit"},on:{click:t.setChatMsg}},[t._v("发送")])],1)],1)],1),t._v(" "),r("el-col",{staticClass:"onlineList",attrs:{span:4}},[t._v("在线列表")])],1)],1)},staticRenderFns:[]};var f=r("VU/8")(u,l,!1,function(t){r("r0hr")},null,null);e.default=f.exports}});
//# sourceMappingURL=0.eb9634dd2d95fe405faf.js.map