webpackJsonp([9],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o=n("mvHQ"),a=n.n(o),u=(n("sqb0"),{name:"App",data:function(){return{server_type:"java"}},watch:{server_type:function(){localStorage.setItem("server_type",this.server_type)}},created:function(){var e=this,t=localStorage.getItem("server_type");t&&(this.server_type=t);var n=JSON.parse(localStorage.getItem("userInfo"));n&&n.user_id&&n.refresh_jwt?this.$post("check/refreshJWT").then(function(t){if(!t.user_id)return e.$notify({title:"提示",message:t,type:"warning"}),localStorage.removeItem("userInfo"),void e.$router.replace("/");localStorage.setItem("userInfo",a()(t)),"/"==e.$route.path&&e.$router.replace("/page/user/userList")}).catch(function(t){localStorage.removeItem("userInfo"),e.$router.replace("/"),loading.close()}):this.$router.replace("/")}}),i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e._v(" "),n("el-radio-group",{staticClass:"pf z_index999 server_type",model:{value:e.server_type,callback:function(t){e.server_type=t},expression:"server_type"}},[n("el-radio-button",{attrs:{label:"java"}}),e._v(" "),n("el-radio-button",{attrs:{label:"python"}})],1)],1)},staticRenderFns:[]};var c=n("VU/8")(u,i,!1,function(e){n("lF0R")},null,null).exports,s=n("Gu7T"),l=n.n(s),p=n("/ocq"),f=[{path:"user/userList",name:"homeUserList",component:function(){return n.e(2).then(n.bind(null,"yqAO"))},meta:["用户","用户列表"]},{path:"user/roleList",name:"homeRoleList",component:function(){return n.e(4).then(n.bind(null,"bwfu"))},meta:["用户","角色列表"]},{path:"user/structure",name:"homeStructure",component:function(){return n.e(7).then(n.bind(null,"7oN0"))},meta:["用户","组织架构"]},{path:"user/logsQuery",name:"homeLogsQuery",component:function(){return n.e(6).then(n.bind(null,"gAlv"))},meta:["用户","日志查询"]}];r.default.use(p.a);var h=new p.a({mode:"history",base:"/cv/",routes:[{path:"*",component:function(){return n.e(5).then(n.bind(null,"mVtR"))}},{path:"/",name:"login",component:function(){return n.e(3).then(n.bind(null,"TWBs"))},meta:{title:"登录"}},{path:"/home",name:"home",component:function(){return n.e(1).then(n.bind(null,"cB1C"))},children:[]},{path:"/page",name:"page",component:function(){return n.e(0).then(n.bind(null,"PmZ0"))},children:[].concat(l()(f))}]}),m=n("zL8q"),d=n.n(m),v=(n("tvR6"),n("//Fk")),y=n.n(v),g=n("mtWM"),_=n.n(g),b=n("faEy"),j=n.n(b),T=n("mw3O"),w=n.n(T);function S(e,t,n,r){"GET"==e?"[object Array]"===Object.prototype.toString.call(n)?(t=t+"/"+n.join("/"),n=null):Object.prototype.toString.call(n):"POST"!==e&&"PUT"!==e||r&&"application/x-www-form-urlencodeds"==r["Content-Type"]&&(n=w.a.stringify(n,{arrayFormat:"indices"}));var o=localStorage.getItem("server_type"),a="";console.log(o),o?"java"==o?a=j.a.url_java:"python"==o&&(a=j.a.url_python):a=j.a.url_java;var u={method:e,baseURL:a,url:t,headers:r||{"Content-Type":"application/json;charset=UTF-8"},params:"GET"===e||"DELETE"===e?n:null,data:"POST"===e||"PUT"===e?n:null,timeout:1e4},i=JSON.parse(localStorage.getItem("userInfo"));return i&&i.refresh_jwt&&(u.headers.authorization=i.refresh_jwt),new y.a(function(e,t){_()(u).then(function(t){var n=function(e){if("200"==e.code)return e.data;throw new Error(e.msg)}(t);e(n||{})}).catch(function(e){!function(e){if(e&&200===e.status)return e.data;m.Notification.error({title:e})}(e),t(e)})})}_.a.interceptors.request.use(function(e){return e},function(e){return y.a.reject(e)}),_.a.interceptors.response.use(function(e){return e.data},function(e){return y.a.reject(e)});var I={install:function(e){e.prototype.$get=function(e,t,n){return S("GET",e,t,n)},e.prototype.$post=function(e,t,n){return S("POST",e,t,n)},e.prototype.$put=function(e,t,n){return S("PUT",e,t,n)},e.prototype.$delect=function(e,t,n){return S("DELECT",e,t,n)}}};n("RUj5");r.default.use(d.a,{size:"medium",zIndex:3e3}),r.default.use(I),r.default.config.productionTip=!1,new r.default({el:"#app",router:h,render:function(e){return e(c)}})},RUj5:function(e,t){},faEy:function(e,t){e.exports={title:"和助理平台",package:"shop",domain:"/shop",url_java:"http://118.31.63.147/api/",url_python:"http://118.31.63.147:6666/api/"}},lF0R:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8f719b7c19890ebf0b4e.js.map