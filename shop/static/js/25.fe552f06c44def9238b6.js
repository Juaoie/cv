webpackJsonp([25],{z2ly:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t("Xxa5"),s=t.n(a),l=t("exGp"),o=t.n(l),u=t("Dd8w"),n=t.n(u),i={data:function(){return{roleStatus:"",userId:"",ruleForm:{userName:""},rules:{userName:[{required:!0,message:"请输入推销员姓名",trigger:"blur"},{max:20,message:"长度不能超过20个字符",trigger:"blur"}]}}},methods:{goBack:function(){this.$router.back()},submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;http.put({url:"http://192.168.23.1:8088/shop/shopSale/updateShopSale",params:n()({},r.ruleForm,{userId:r.$route.query.userId,shopId:"TianJin-1200-49359154-20191030094404976-SOCIAL"})})})}},mounted:function(){var e=this;return o()(s.a.mark(function r(){var t,a;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$get({url:"http://192.168.23.1:8088/shop/shopSale/getShopSaleById",params:n()({shopId:"TianJin-1200-49359154-20191030094404976-SOCIAL",userId:e.$route.query.userId},e.ruleForm)});case 2:t=r.sent,a=t.data,e.ruleForm.userName=a.userName,e.userId=a.userId,e.roleStatus="VALID"===a.roleStatus?"启用":"禁用",console.log(t);case 8:case"end":return r.stop()}},r,e)}))()}},m={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-row",{staticClass:"mb15"},[t("el-page-header",{attrs:{content:"编辑推销员"},on:{back:e.goBack}})],1),e._v(" "),t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-col",{staticStyle:{"box-shadow":"0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)"},attrs:{span:12}},[t("el-row",[t("el-col",{attrs:{offset:1,span:22}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm mt10",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px","label-position":"left"}},[t("el-form-item",{attrs:{label:"姓名",prop:"userName"}},[t("el-input",{attrs:{placeholder:"请输入店铺名称，不能超过20个中文字符"},model:{value:e.ruleForm.userName,callback:function(r){e.$set(e.ruleForm,"userName",r)},expression:"ruleForm.userName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手机号"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.userId,callback:function(r){e.userId=r},expression:"userId"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"账号状态"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.roleStatus,callback:function(r){e.roleStatus=r},expression:"roleStatus"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("确定")]),e._v(" "),t("el-button",{on:{click:e.goBack}},[e._v("取消")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},c=t("VU/8")(i,m,!1,null,null,null);r.default=c.exports}});
//# sourceMappingURL=25.fe552f06c44def9238b6.js.map