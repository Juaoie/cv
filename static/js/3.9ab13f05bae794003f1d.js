webpackJsonp([3],{"l+3i":function(e,t){},yqAO:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("Dd8w"),a=r.n(s),l=r("woOf"),i=r.n(l),n={data:function(){return{tableData:[],filtersRoles:[],filtersFaculties:[],filters:{filter_group_faculty_id:[],filter_group_role_id:[],state_id:"",sex:""},keywords:"",total:0,current_page:1,page_size:50}},mounted:function(){var e=this;this.getUsersList(),this.$post("user/getgroupid").then(function(t){t.roles.forEach(function(e){e.text=e.role_name,e.value=e.role_id}),t.facultys.forEach(function(e){e.text=e.faculty_name,e.value=e.faculty_id}),e.filtersRoles=t.roles,e.filtersFaculties=t.facultys})},methods:{search:function(){this.current_page=1,this.getUsersList()},binFilters:function(e){"filter_group_role_id"in e?this.filters.filter_group_role_id=e.filter_group_role_id:"filter_group_faculty_id"in e?this.filters.filter_group_faculty_id=e.filter_group_faculty_id:"state_id"in e?this.filters.state_id=e.state_id[0]:"sex"in e&&(this.filters.sex=e.sex[0]),this.current_page=1,this.getUsersList()},new_user:function(){this.$router.push({path:"/page/user/userNew",query:{}})},change_info_user:function(e){this.$router.push({path:"/page/user/userInfoChange",query:{}})},orle_user:function(){this.$router.push("/page/user/userRole")},handleDelete:function(e,t){var r=this;this.$confirm("确定"+("1"==e.state_id?"停用":"启用")+"用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.$post("user/changeState",{user_id:e.user_id,state_id:"1"==e.state_id?"0":"1"}).then(function(e){r.getUsersList()})})},tableRowClassName:function(e){var t=e.row;e.rowIndex;return i()(t,t.faculty,t.clazz,t.role),t.user_sex?t.user_sex_text="男":t.user_sex_text="女",t.state_id?(t.state_id_text="可用",""):(t.state_id_text="停用","warning-row")},handleSizeChange:function(e){this.page_size=e,this.getUsersList()},handleCurrentChange:function(e){this.current_page=e,this.getUsersList()},getUsersList:function(){var e=this;this.$post("user/getuser",a()({},this.filters,{keywords:this.keywords,page:this.current_page,paging:this.page_size})).then(function(t){e.tableData=t.table_data,e.total=t.total})}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:5}},[r("el-input",{attrs:{placeholder:"请输入用户名称/班级名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1),e._v(" "),r("el-col",{attrs:{span:2}},[r("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("搜索")])],1),e._v(" "),r("el-col",{attrs:{span:5,offset:12}},[r("el-button",{attrs:{type:"primary"},on:{click:e.new_user}},[e._v("新建用户")])],1)],1),e._v(" "),r("el-row",{staticClass:"mtb10"},[r("el-table",{ref:"filterTable",staticClass:"w24",attrs:{data:e.tableData,border:"",height:"500px","default-sort":{prop:"user_name",order:"descending"},"row-class-name":e.tableRowClassName},on:{"filter-change":e.binFilters}},[r("el-table-column",{attrs:{prop:"user_name",label:"用户名称",sortable:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"user_id",label:"用户ID"}}),e._v(" "),r("el-table-column",{attrs:{prop:"user_phone",label:"手机号码"}}),e._v(" "),r("el-table-column",{attrs:{prop:"user_sex_text",label:"性别",filters:[{text:"男",value:"1"},{text:"女",value:"0"}],"column-key":"sex","filter-multiple":!1}}),e._v(" "),r("el-table-column",{attrs:{prop:"role_name",label:"角色",filters:e.filtersRoles,"column-key":"filter_group_role_id"}}),e._v(" "),r("el-table-column",{attrs:{prop:"faculty_name",label:"院系",filters:e.filtersFaculties,"column-key":"filter_group_faculty_id"}}),e._v(" "),r("el-table-column",{attrs:{prop:"clazz_name",label:"班级"}}),e._v(" "),r("el-table-column",{attrs:{prop:"state_id_text",label:"状态",filters:[{text:"可用",value:"1"},{text:"停用",value:"0"}],"column-key":"state_id","filter-multiple":!1}}),e._v(" "),r("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(r){return e.change_info_user(t.row)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(r){return e.orle_user(t.$index,t.row)}}},[e._v("角色分配")]),e._v(" "),r("el-button",{attrs:{size:"mini",type:t.row.state_id?"danger":"primary"},on:{click:function(r){return e.handleDelete(t.row,t.$index)}}},[e._v(e._s(1==t.row.state_id?"停用":"启用")+"用户")])]}}])})],1)],1),e._v(" "),r("el-row",{staticClass:"mt10 df jcfe"},[r("el-pagination",{attrs:{"current-page":e.current_page,"page-sizes":[50,100,200],"page-size":e.page_size,layout:"total, sizes, prev, pager, next, jumper",total:e.total,background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var u=r("VU/8")(n,o,!1,function(e){r("l+3i")},null,null);t.default=u.exports}});
//# sourceMappingURL=3.9ab13f05bae794003f1d.js.map