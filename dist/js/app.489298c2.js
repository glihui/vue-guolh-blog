(function(e){function t(t){for(var a,n,s=t[0],i=t[1],u=t[2],l=0,f=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&f.push(o[n][0]),o[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);g&&g(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],a=!0,n=1;n<r.length;n++){var s=r[n];0!==o[s]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a9aa7ab1","chunk-2c00bcc2":"d6d9e299","chunk-70be8264":"d8f39154","chunk-ee38bcd2":"651befc4"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-2c00bcc2":1,"chunk-70be8264":1,"chunk-ee38bcd2":1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise(function(t,r){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2c00bcc2":"b92e7d32","chunk-70be8264":"1ce12546","chunk-ee38bcd2":"f371a414"}[e]+".css",o=i.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete n[e],g.parentNode.removeChild(g),r(c)},g.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(g)}).then(function(){n[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise(function(t,r){a=o[e]=[t,r]});t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(g);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,r[1](f)}o[e]=void 0}};var g=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var g=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},1145:function(e,t,r){"use strict";var a=r("7fa4"),n=r.n(a);n.a},3673:function(e,t,r){},"4ec3":function(e,t,r){"use strict";r("2338"),r("f763"),r("fb37");var a=r("a506"),n=r("2427"),o=r.n(n);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach(function(t){Object(a["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var i=o.a.create();o.a.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),i.interceptors.response.use(function(e){return e.data},function(e){return Promise.reject(e.response.data)});var u={request:function(e){var t=e.url,r=e.params,a=e.responseType,n=void 0===a?"json":a,o=e.method,c=void 0===o?"post":o,u="post"===c?{data:r}:{params:r},l=localStorage.getItem("user");if(console.log(l),l){var f=JSON.parse(l).meta.access_token;u.headers={Authorization:"Bearer ".concat(f)}}return i(s({url:"/api/".concat(t),method:c},u,{responseType:n})).then(function(e){return e}).catch(function(e){return Promise.reject(e)})}},l=function(e,t){return u.request({url:e,method:"post",params:t})},f=function(){return u.request({url:"authorizations/current",method:"put"}).catch(function(e){})},g=function(){return u.request({url:"authorizations/current",method:"delete"}).catch(function(e){})},p=function(e){return u.request({url:"user?incude=user",method:"patch",params:e}).catch(function(e){})},d=function(){return u.request({url:"categories",method:"get"}).catch(function(e){})},m=function(e){return u.request({url:"categories/".concat(e),method:"get"}).catch(function(e){})},b=function(e){return u.request({url:"topics/".concat(e,"?include=user,category"),method:"get"}).catch(function(e){})},h=function(e){return u.request({url:"topics/".concat(e,"/zans"),method:"post"}).catch(function(e){})},v=function(e){return u.request({url:"topics/".concat(e,"/zans"),method:"delete"}).catch(function(e){})},O=function(e){return u.request({url:"topics/".concat(e,"/replies?include=user"),method:"get"}).catch(function(e){})},y=function(e,t){return u.request({url:"topics/".concat(e,"/replies"),method:"post",params:t}).catch(function(e){})};t["a"]={getCategoriesData:d,getCategoriesTopic:m,getTopicDetail:b,loginOrRegister:l,refreshToken:f,deleteToken:g,editUser:p,goZan:h,goUnZan:v,getCommentList:O,commentTopic:y}},"5c0b":function(e,t,r){"use strict";var a=r("3673"),n=r.n(a);n.a},"7fa4":function(e,t,r){},b1ce:function(e,t){e.exports="data:image/png;base64,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"},cd49:function(e,t,r){"use strict";r.r(t);r("ae5f"),r("19dd");var a=r("f6a8"),n=r.n(a),o=(r("83bd"),r("f199")),c=r.n(o),s=(r("0cca"),r("f03a")),i=r.n(s),u=(r("65a2"),r("198a")),l=r.n(u),f=(r("acb8"),r("79fd")),g=r.n(f),p=(r("6ec4"),r("dcff")),d=r.n(p),m=(r("2901"),r("73d5")),b=r.n(m),h=(r("f116"),r("fa7f")),v=r.n(h),O=(r("7364"),r("9b3e"),r("11ca")),y=r.n(O),A=(r("dac5"),r("6e26"),r("9604"),r("df67"),r("eaf6")),j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"bg-img"}),r("div",{attrs:{id:"nav"}},[r("HomeTab")],1),r("router-view")],1)},w=[],k=r("98d4"),C=r("ab1f"),S=r("b911"),P=r("27b9"),E=r("f761"),T=r("ace7"),U=r("50fb"),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tab_box"},[a("div",{staticClass:"blog_name"},[e._v("Dream It Possible")]),a("ul",{staticClass:"tab_ul"},e._l(e.tabs,function(t,r){return a("li",{key:r,staticClass:"tab_li",on:{click:function(r){return e.goTabPage(t.id)}}},[e._v("\n            "+e._s(t.name)+"\n        ")])}),0),e.userMsg.name?e._e():a("div",{staticClass:"login_register"},[a("div",{staticClass:"login-btn",on:{click:function(t){return e.goLogOrReg(1)}}},[e._v("登录")]),a("div",{staticClass:"register-btn",on:{click:function(t){return e.goLogOrReg(2)}}},[e._v("注册")])]),e.userMsg.name?a("div",{staticClass:"user-msg"},[e.userMsg.avatar?a("img",{staticClass:"user-img",attrs:{src:e.userMsg.avatar},on:{click:e.changeAvatar}}):a("img",{staticClass:"user-img",attrs:{src:r("b1ce")},on:{click:e.changeAvatar}}),a("span",{staticClass:"user-name"},[e._v(e._s(e.userMsg.name))]),a("span",{staticClass:"user-logout",on:{click:e.logout}},[e._v("退出")])]):e._e(),a("el-dialog",{attrs:{title:e.loginOrRegist,center:!0,visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"login-register-box"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"账号"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{"show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.loginOrRegist))])],1)],1)],1)]),a("el-dialog",{attrs:{title:"更换头像",visible:e.avtarDialogVisible,center:!0,width:"30%"},on:{"update:visible":function(t){e.avtarDialogVisible=t}}},[a("div",{staticClass:"avatar-box"},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/images",name:"image",data:{type:"avatar"},headers:{Authorization:"Bearer "+e.getToken()},"show-file-list":!1,"on-success":e.handleAvatarSuccess,"on-error":e.handleAvatarError,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.avtarDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.updateAvatar}},[e._v("确 定")])],1)],1)])],1)},N=[],q=(r("2338"),r("f763"),r("fb37"),r("a506")),B=r("4ec3"),G=r("591a");function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(r,!0).forEach(function(t){Object(q["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var H=function(e){function t(){var e;return Object(k["a"])(this,t),e=Object(S["a"])(this,Object(P["a"])(t).apply(this,arguments)),e.dialogVisible=!1,e.avtarDialogVisible=!1,e.loginOrRegist="登录",e.logOrRegFlag=1,e.imageUrl="",e.avatarImageId=0,e.form={name:"",password:""},e}return Object(E["a"])(t,e),Object(C["a"])(t,[{key:"created",value:function(){this.$store.dispatch("getCategories"),this.$store.dispatch("getTopics",{id:1})}},{key:"goTabPage",value:function(e){this.$store.dispatch("getTopics",{id:e}),1===e?this.$router.push("/").catch(function(e){console.log(e)}):this.$router.push("/category/".concat(e)).catch(function(e){console.log(e)})}},{key:"onSubmit",value:function(){var e=this;console.log(this.form);var t="";t=1===this.logOrRegFlag?"authorizations":"register",B["a"].loginOrRegister(t,{name:this.form.name,password:this.form.password}).then(function(t){0===t.code?(e.$message({message:"恭喜你，".concat(e.loginOrRegist,"成功"),type:"success"}),e.$store.commit("setUser",t.data),localStorage.setItem("user",JSON.stringify(t.data)),e.dialogVisible=!1):e.$message({message:t.message,type:"error"})}).catch(function(t){console.log(t.message),e.$message.error(t.message),e.dialogVisible=!1})}},{key:"logout",value:function(){B["a"].deleteToken().then(function(e){}),this.$store.commit("setUser",{}),localStorage.removeItem("user")}},{key:"goLogOrReg",value:function(e){this.loginOrRegist=1===e?"登录":"注册",this.dialogVisible=!0,this.logOrRegFlag=e}},{key:"changeAvatar",value:function(){this.avtarDialogVisible=!0}},{key:"handleAvatarSuccess",value:function(e,t){console.log(e),0===e.code?(this.imageUrl=URL.createObjectURL(t.raw),this.avatarImageId=e.data.id):this.$message.error(e.message)}},{key:"handleAvatarError",value:function(e,t,r){console.log(e)}},{key:"beforeAvatarUpload",value:function(e){console.log(e.type);var t="image/jpeg"===e.type||"image/png",r=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 或 PNG 格式!"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&r}},{key:"updateAvatar",value:function(){var e=this;0!==this.avatarImageId?B["a"].editUser({avatar_image_id:this.avatarImageId}).then(function(t){console.log(t),e.$message({message:"头像修改成功",type:"success"});var r=e.userMsg;r.avatar=t.data.avatar,localStorage.setItem("user",JSON.stringify(r)),e.$store.commit("setUser",r),console.log(e.userMsg),e.avtarDialogVisible=!1}):this.avtarDialogVisible=!1}},{key:"getToken",value:function(){var e=localStorage.getItem("user")||"",t=e?JSON.parse(e).meta.access_token:"";return t}},{key:"tabs",get:function(){return this.$store.state.categories}},{key:"userMsg",get:function(){return this.$store.state.user}}]),t}(U["d"]);Object(T["a"])([Object(U["c"])()],H.prototype,"dialogVisible",void 0),Object(T["a"])([Object(U["c"])()],H.prototype,"avtarDialogVisible",void 0),Object(T["a"])([Object(U["c"])()],H.prototype,"loginOrRegist",void 0),Object(T["a"])([Object(U["c"])()],H.prototype,"logOrRegFlag",void 0),Object(T["a"])([Object(U["c"])()],H.prototype,"imageUrl",void 0),Object(T["a"])([Object(U["c"])()],H.prototype,"avatarImageId",void 0),Object(T["a"])([Object(U["c"])()],H.prototype,"form",void 0),H=Object(T["a"])([Object(U["a"])(R({},Object(G["c"])(["categories"]),{},Object(G["b"])(["getTopics","getCategories"])))],H);var L=H,V=L,I=(r("1145"),r("6691")),x=Object(I["a"])(V,D,N,!1,null,"511a9bb2",null),z=x.exports,F=function(e){function t(){return Object(k["a"])(this,t),Object(S["a"])(this,Object(P["a"])(t).apply(this,arguments))}return Object(E["a"])(t,e),Object(C["a"])(t,[{key:"created",value:function(){var e=this,t=localStorage.getItem("user")||"";""!==t&&(this.$store.commit("setUser",JSON.parse(t)),B["a"].refreshToken().then(function(r){if(console.log(r),0===r.code){var a=JSON.parse(t);a.meta=r.data,localStorage.setItem("user",JSON.stringify(a)),e.$store.commit("setUser",JSON.parse(a))}}).catch(function(e){}))}}]),t}(U["d"]);F=Object(T["a"])([Object(U["a"])({components:{HomeTab:z}})],F);var Q=F,J=Q,W=(r("5c0b"),Object(I["a"])(J,j,w,!1,null,null,null)),Y=W.exports,Z=r("c478");A["default"].use(Z["a"]);var X=new Z["a"]({mode:"hash",routes:[{path:"/",name:"home",component:function(){return r.e("chunk-70be8264").then(r.bind(null,"bb51"))}},{path:"/category/:id",name:"category",component:function(){return r.e("chunk-2c00bcc2").then(r.bind(null,"4886"))}},{path:"/detail/:id",name:"detail",component:function(){return r.e("chunk-ee38bcd2").then(r.bind(null,"c84b"))}},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]});A["default"].use(G["a"]);var _=new G["a"].Store({state:{categories:[],topics:{},fetchIng:!1,user:{}},mutations:{setTopics:function(e,t){e.topics=t},setCategories:function(e,t){e.categories=t},setFetchIng:function(e,t){e.fetchIng=t},setUser:function(e,t){e.user=t}},actions:{getCategories:function(e){var t=e.commit;B["a"].getCategoriesData().then(function(e){console.log(e),t("setCategories",e.data.data)})},getTopics:function(e,t){var r=e.commit,a=(e.state,e.dispatch,t.id);console.log(a),r("setFetchIng",!0),B["a"].getCategoriesTopic(a).then(function(e){console.log(e),r("setTopics",e.data),r("setFetchIng",!1)})}},getters:{categories:function(e){return e.categories},topics:function(e){return e.topics}}});A["default"].component(y.a.name,y.a),A["default"].component(v.a.name,v.a),A["default"].component(b.a.name,b.a),A["default"].component(d.a.name,d.a),A["default"].component(g.a.name,g.a),A["default"].component(l.a.name,l.a),A["default"].component(i.a.name,i.a),A["default"].component(c.a.name,c.a),A["default"].prototype.$message=n.a,A["default"].config.productionTip=!1,new A["default"]({router:X,store:_,render:function(e){return e(Y)}}).$mount("#app")}});
//# sourceMappingURL=app.489298c2.js.map