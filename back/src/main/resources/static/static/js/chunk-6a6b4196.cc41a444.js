(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a6b4196"],{"0021":function(e,t,s){"use strict";var i=s("0026"),n=s.n(i);n.a},"0026":function(e,t,s){},"3b5f":function(e,t,s){"use strict";var i=s("c034"),n=s.n(i);n.a},"9d65":function(e,t,s){"use strict";var i=s("ffdd"),n=s.n(i);n.a},c034:function(e,t,s){},c975:function(e,t,s){"use strict";var i=s("23e7"),n=s("4d64").indexOf,a=s("a640"),r=s("ae40"),l=[].indexOf,u=!!l&&1/[1].indexOf(1,-0)<0,o=a("indexOf"),c=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:u||!o||!c},{indexOf:function(e){return u?l.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},cd56:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"Main"}},[s("div",{attrs:{id:"container"}},[s("div",{attrs:{id:"left"}},[s("keep-alive",[s("NavigationMenu",{on:{routes:e.setMenuRoutes}})],1)],1),s("div",{attrs:{id:"right"}},[s("div",{attrs:{id:"header"}},[s("HeaderBar")],1),s("div",{attrs:{id:"content"}},[s("transition",{attrs:{mode:"out-in",name:"fade-transform"}},[s("keep-alive",[s("router-view")],1)],1)],1)])])])},n=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"NavigationMenu"}},[i("el-menu",{attrs:{id:"el-menu",router:!0,"unique-opened":!0,"active-text-color":"#ffd04b","background-color":"#545c64","default-active":"2","text-color":"#fff"},on:{select:e.menuSelect}},[e.isValidAccess(["系统用户管理","系统角色管理","系统部门管理","系统人员审批","系统权限管理"])?i("el-submenu",{attrs:{index:"system"}},[i("template",{slot:"title"},[i("div",{staticClass:"icon-name-slot"},[i("i",{staticClass:"icon-slot"},[i("img",{attrs:{src:s("fa18")}})]),i("span",{staticClass:"name-slot"},[e._v("系统管理")])])]),e.isValidAccess(["系统用户管理"])?i("el-menu-item",{staticClass:"double-submenu-item",attrs:{index:"/system/userManagement"}},[e._v("用户管理 ")]):e._e(),e.isValidAccess(["系统角色管理"])?i("el-menu-item",{staticClass:"double-submenu-item",attrs:{index:"/system/roleManagement"}},[e._v("角色管理 ")]):e._e(),e.isValidAccess(["系统部门管理"])?i("el-menu-item",{staticClass:"double-submenu-item",attrs:{index:"/system/departmentManagement"}},[e._v("部门管理 ")]):e._e(),e.isValidAccess(["系统人员审批"])?i("el-menu-item",{staticClass:"double-submenu-item",attrs:{index:"/system/userApply"}},[e._v("人员审批 ")]):e._e(),e.isValidAccess(["系统权限管理"])?i("el-menu-item",{staticClass:"double-submenu-item",attrs:{index:"/system/permissionManagement"}},[e._v("权限管理 ")]):e._e()],2):e._e(),e.isValidAccess(["质检结果录入","产品瑕疵管理","产品品质管理"])?i("el-submenu",{attrs:{index:"qualityManagement"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-s-order"}),i("span",[e._v("质量管理")])]),e.isValidAccess(["质检结果录入"])?i("el-menu-item",{attrs:{index:"/qualityManagement/monitorManagementComponent"}},[e._v("质检录入")]):e._e(),e.isValidAccess(["产品瑕疵管理"])?i("el-menu-item",{attrs:{index:"/qualityManagement/defectManagementComponent"}},[e._v("瑕疵管理")]):e._e(),e.isValidAccess(["产品品质管理"])?i("el-menu-item",{attrs:{index:"/qualityManagement/qualityManagementComponent"}},[e._v("品质管理")]):e._e()],2):e._e(),e.isValidAccess(["生产过程管理"])?i("el-submenu",{attrs:{index:"production"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-goods"}),i("span",[e._v("生产过程管理")])]),i("el-menu-item",{attrs:{index:"/process/production/add"}},[e._v("产品添加")]),i("el-menu-item",{attrs:{index:"/process/production/list"}},[e._v("产品查看")]),i("el-menu-item",{attrs:{index:"/process/procedure/add"}},[e._v("工序添加")]),i("el-menu-item",{attrs:{index:"/process/procedure/list"}},[e._v("工序查看")])],2):e._e(),e.isValidAccess(["生产计划管理"])?i("el-submenu",{attrs:{index:"/Plan"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-goods"}),i("span",[e._v("生产计划管理")])]),i("el-menu-item",{attrs:{index:"/CommondForm"}},[e._v("需求单管理")]),i("el-menu-item",{attrs:{index:"/Plan"}},[e._v("计划单管理")])],2):e._e(),e.isValidAccess(["车间管理"])?i("el-submenu",{attrs:{index:"workShop"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-truck"}),i("span",[e._v("车间管理")])]),i("el-menu-item",{attrs:{index:"/work/workshop"}},[e._v("车间管理")]),i("el-menu-item",{attrs:{index:"/work/apply"}},[e._v("申请查询")])],2):e._e(),e.isValidAccess(["仓库管理"])?i("el-submenu",{attrs:{index:"storeHouse"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-truck"}),i("span",[e._v("仓库管理")])]),i("el-menu-item",{attrs:{index:"/storehouse/storageMain"}},[e._v("库区管理")]),i("el-menu-item",{attrs:{index:"/storehouse/equAndMatMain"}},[e._v("物料设备")]),i("el-menu-item",{attrs:{index:"/storehouse/inOut"}},[e._v("出入库管理")]),i("el-menu-item",{attrs:{index:"/storehouse/inOutApproval"}},[e._v("出入库审批")])],2):e._e(),e.isValidAccess(["数据分析报表"])?i("el-submenu",{attrs:{index:"dataAnalysis"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-data-analysis"}),i("span",[e._v("数据分析报表")])]),i("el-menu-item",{attrs:{index:"/dataAnalysis/productionSchedule"}},[e._v("生产计划进度")]),i("el-menu-item",{attrs:{index:"/dataAnalysis/materialStock"}},[e._v("物料库存")])],2):e._e()],1)],1)},r=[],l=(s("c975"),{name:"NavigationMenu",data:function(){return{}},methods:{menuSelect:function(e,t){this.$emit("routes",t)},isValidAccess:function(e){var t=!1;try{for(var s=0;s<e.length;s++){var i=e[s];if(-1!==this.$store.getters.userinfo.accessList.indexOf(i)){t=!0;break}}}catch(n){return!1}return t}}}),u=l,o=(s("9d65"),s("2877")),c=Object(o["a"])(u,a,r,!1,null,"7ef652a0",null),d=c.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"HeaderBar"}},[s("div",{attrs:{id:"left"}},[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("transition-group",{attrs:{mode:"out-in",name:"breadcrumb"}},e._l(this.menuRoutes,(function(t,i){return s("el-breadcrumb-item",{key:t},[e._v(e._s(t))])})),1)],1)],1),s("div",{attrs:{id:"right"}},[s("el-menu",{staticClass:"user-bar",attrs:{"default-active":"用户",mode:"horizontal"},on:{select:e.handleSelect}},[s("el-submenu",{attrs:{index:"用户",id:"login_item"}},[s("template",{slot:"title"},[e._v("用户："+e._s(this.$store.getters.userinfo.name))]),s("el-menu-item",{attrs:{index:"个人信息"}},[e._v("个人信息")]),s("el-menu-item",{attrs:{index:"登出"}},[e._v("登出")])],2)],1)],1)])},v=[],f=(s("ac1f"),s("1276"),{name:"HeaderBar",data:function(){return{menuRoutes:[]}},methods:{handleSelect:function(e,t){switch(e){case"登出":this.$store.commit("login/LOG_OUT");break;case"个人信息":this.$message.info("待有缘人完善代码");break}}},created:function(){var e=this.$route.meta,t=e.title;t&&(this.menuRoutes=t.split("-").reverse())},watch:{$route:function(e,t){var s=e.meta,i=s.title;i&&(this.menuRoutes=i.split("-").reverse())}}}),p=f,_=(s("0021"),Object(o["a"])(p,m,v,!1,null,"37714660",null)),x=_.exports,b={name:"Main",components:{HeaderBar:x,NavigationMenu:d},data:function(){return{menuRoutes:[]}},methods:{setMenuRoutes:function(e){this.menuRoutes=e}}},h=b,g=(s("3b5f"),Object(o["a"])(h,i,n,!1,null,"363d1872",null));t["default"]=g.exports},fa18:function(e,t,s){e.exports=s.p+"static/img/system.6ba2855b.svg"},ffdd:function(e,t,s){}}]);
//# sourceMappingURL=chunk-6a6b4196.cc41a444.js.map