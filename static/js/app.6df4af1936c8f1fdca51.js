webpackJsonp([10],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o=n("mvHQ"),a=n.n(o),u={name:"App",data:function(){return{server_type:"java"}},watch:{server_type:function(){localStorage.setItem("server_type",this.server_type)}},created:function(){var e=this,t=localStorage.getItem("server_type");t&&(this.server_type=t);var n=JSON.parse(localStorage.getItem("userInfo"));n&&n.user_id&&n.refresh_jwt?this.$post("check/refreshJWT").then(function(t){if(!t.user_id)return e.$notify({title:"提示",message:t,type:"warning"}),localStorage.removeItem("userInfo"),void e.$router.replace("/");localStorage.setItem("userInfo",a()(t)),e.$router.replace("/page")}).catch(function(t){localStorage.removeItem("userInfo"),e.$router.replace("/"),loading.close()}):this.$router.replace("/")}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e._v(" "),n("el-radio-group",{staticClass:"pf z_index999 server_type",model:{value:e.server_type,callback:function(t){e.server_type=t},expression:"server_type"}},[n("el-radio-button",{attrs:{label:"java"}}),e._v(" "),n("el-radio-button",{attrs:{label:"python"}})],1)],1)},staticRenderFns:[]};var c=n("VU/8")(u,i,!1,function(e){n("fwFq")},null,null).exports,s=n("Gu7T"),l=n.n(s),p=n("/ocq"),f=[{path:"user/userList",component:function(){return n.e(8).then(n.bind(null,"yqAO"))},meta:["用户","用户列表"]},{path:"user/structure",component:function(){return n.e(2).then(n.bind(null,"7oN0"))},meta:["用户","组织架构"]},{path:"user/logsQuery",component:function(){return n.e(3).then(n.bind(null,"gAlv"))},meta:["用户","日志查询"]},{path:"permission/changePermission",component:function(){return n.e(7).then(n.bind(null,"eFb/"))},meta:["权限","修改权限"]},{path:"chat/group",component:function(){return n.e(1).then(n.bind(null,"weg5"))},meta:["通信","广播通信"]}];r.default.use(p.a);var h=new p.a({mode:"history",base:"/cv/",routes:[{path:"*",component:function(){return n.e(6).then(n.bind(null,"mVtR"))}},{path:"/",name:"login",component:function(){return n.e(5).then(n.bind(null,"TWBs"))},meta:{title:"登录"}},{path:"/home",name:"home",component:function(){return n.e(4).then(n.bind(null,"cB1C"))},children:[]},{path:"/page",name:"page",component:function(){return n.e(0).then(n.bind(null,"PmZ0"))},children:[].concat(l()(f))}]}),d=n("zL8q"),m=n.n(d),g=(n("tvR6"),{install:function(e,t){e.filter("formatDate",function(e,t){var n=parseInt(e);n==e&&(e=n);var r=new Date(e),o=t||"yyyy.MM.dd hh:mm:ss";/(y+)/.test(o)&&(o=o.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length)));var a={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds()};for(var u in a)if(new RegExp("("+u+")").test(o)){var i=a[u]+"";o=o.replace(RegExp.$1,1===RegExp.$1.length?i:("00"+i).substr(i.length))}return o})}}),v=n("//Fk"),y=n.n(v),_=n("mtWM"),b=n.n(_),w=n("faEy"),S=n.n(w),j=n("mw3O"),T=n.n(j);function E(e,t,n,r){"GET"==e?"[object Array]"===Object.prototype.toString.call(n)?(t=t+"/"+n.join("/"),n=null):Object.prototype.toString.call(n):"POST"!==e&&"PUT"!==e||r&&"application/x-www-form-urlencodeds"==r["Content-Type"]&&(n=T.a.stringify(n,{arrayFormat:"indices"}));var o=localStorage.getItem("server_type"),u="";o?"java"==o?u=S.a.url_java:"python"==o&&(u=S.a.url_python):u=S.a.url_java;var i={method:e,baseURL:u,url:t,headers:r||{"Content-Type":"application/json;charset=UTF-8"},params:"GET"===e||"DELETE"===e?n:null,data:"POST"===e||"PUT"===e?n:null,timeout:1e4},c=JSON.parse(localStorage.getItem("returnCitySN")),s=JSON.parse(localStorage.getItem("userInfo"));return s&&s.refresh_jwt&&(i.headers.authorization=s.refresh_jwt),c&&(i.headers.returnCitySN=escape(a()(c))),new y.a(function(e,t){b()(i).then(function(t){var n=function(e){if("200"==e.code)return e.data;throw new Error(e.msg)}(t);e(n||{})}).catch(function(e){!function(e){if(e&&200===e.status)return e.data;d.Notification.error({title:e})}(e),t(e)})})}b.a.interceptors.request.use(function(e){return e},function(e){return y.a.reject(e)}),b.a.interceptors.response.use(function(e){return e.data},function(e){return y.a.reject(e)});var I={install:function(e){e.prototype.$get=function(e,t,n){return E("GET",e,t,n)},e.prototype.$post=function(e,t,n){return E("POST",e,t,n)},e.prototype.$put=function(e,t,n){return E("PUT",e,t,n)},e.prototype.$delect=function(e,t,n){return E("DELECT",e,t,n)}}},$=(n("RUj5"),n("RFxO"),n("HI0L")),R=n.n($),x=n("8/7D"),O=n.n(x);r.default.use(m.a,{size:"medium",zIndex:3e3}),r.default.use(I),r.default.use(g),r.default.config.productionTip=!1,r.default.use(new R.a({debug:!0,connection:"http://118.31.63.147:7001",options:{path:""}})),r.default.use(O.a,{ops:{}}),new r.default({el:"#app",router:h,render:function(e){return e(c)}})},RFxO:function(e,t){},RUj5:function(e,t){},faEy:function(e,t){e.exports={title:"和助理平台",package:"shop",domain:"/shop",url_java:"http://118.31.63.147/api/",url_python:"http://118.31.63.147:7001/api/"}},fwFq:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6df4af1936c8f1fdca51.js.map