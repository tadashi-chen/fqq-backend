webpackJsonp([0],[,,function(t,e,n){function a(t){n(46)}var s=n(0)(n(17),n(92),a,"data-v-3a0262ba",null);t.exports=s.exports},function(t,e,n){function a(t){n(41)}var s=n(0)(n(23),n(87),a,"data-v-09b9e516",null);t.exports=s.exports},function(t,e,n){function a(t){n(60)}var s=n(0)(n(24),n(106),a,"data-v-9cc1a928",null);t.exports=s.exports},function(t,e,n){"use strict";e.a={install:function(t,e){t.prototype.fn={warn:function(t){console.error(t)},gotoConversation:function(t,e){t.$router.push({path:"/show-panel/conversation",query:{friendID:e.friendID,name:e.name,account:e.account}})}}}}},function(t,e,n){"use strict";var a=n(1),s=n(110),i=n(65),r=n.n(i),o=n(67),c=n.n(o),u=n(80),l=n.n(u),f=n(75),d=n.n(f),v=n(76),p=n.n(v),m=n(78),h=n.n(m),_=n(64),g=n.n(_),b=n(84),x=n.n(b),C=n(66),y=n.n(C),$=n(82),k=n.n($),w=n(83),E=n.n(w),j=n(68);n.n(j);a.a.use(s.a);var I=new s.a({routes:[{path:"/login",component:g.a},{path:"/",name:"main",component:r.a,meta:{requiresAuth:!0},children:[{path:"/",component:l.a},{path:"/contacts",component:d.a,children:[{path:"/",component:h.a}]},{path:"/dynamic",component:p.a}]},{path:"/show-panel",component:c.a,meta:{requiresAuth:!0},children:[{path:"/",component:x.a},{path:"/show-panel/conversation",component:E.a}]},{path:"/no-transition-panel",component:y.a,meta:{requiresAuth:!0},children:[{path:"/",component:k.a}]}]});I.beforeEach(function(t,e,n){t.matched[0]&&t.matched[0].meta.requiresAuth?localStorage.token?n():n({path:"/login",query:{redirect:t.fullPath}}):n()}),e.a=I},function(t,e,n){function a(t){n(45)}var s=n(0)(n(10),n(91),a,"data-v-33167caf",null);t.exports=s.exports},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{trans:!0}},watch:{$route:function(t,e){this.trans=e.path.indexOf("show-panel")>-1||t.path.indexOf("show-panel")>-1}},methods:{beforeEnter:function(t){},enter:function(t,e){e()},afterEnter:function(t){this.trans&&Velocity(t,{left:"0rem"},{duration:250,easing:"ease"})},beforeLeave:function(t){},leave:function(t,e){if(this.trans){var n="show-panel"===t.getAttribute("name")?"7.2rem":"-7.2rem";Velocity(t,{left:n},{duration:250,complete:e,easing:"ease"})}else e()},afterLeave:function(t){}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(36),s=n.n(a);e.default={data:function(){return{account:"",pwd:"",avatar:"default"}},methods:{input:function(t){var e=this,n=t.target.value;4===n.length?this.$http.get("/static/img/"+n+".jpg").then(function(t){"Verify fail!"!==t.body&&(e.avatar=n)}):"default"!==this.avatar&&(this.avatar="default")},login:function(){var t=this;if(this.account.trim().length)if(this.pwd.trim().length){var e={params:{account:this.account.trim(),pwd:md5(this.pwd.trim())}};this.$http.get("/login",e).then(function(e){if(e.body.token){localStorage.token=e.body.token,localStorage.user=s()(e.body.user);var n=t.$route.query.redirect||"/",a="/"===n?{name:"main"}:{path:n};t.$router.replace(a),t.$store.commit("setUser",e.body.user),console.log("登录成功")}else t.fn.warn(e.body.error)},function(t){console.error("fail",t)})}else this.fn.warn("密码不能为空");else this.fn.warn("帐号不能为空")},test:function(){}},mounted:function(){this.$el.querySelector("#account").focus()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(79),s=n.n(a),i=n(77),r=n.n(i),o=n(81),c=n.n(o);e.default={name:"mainPanel",data:function(){return{transitionName:"slide-left",headerData:{title:"消息",page:"msg"}}},components:{vHeader:s.a,vFooter:r.a,vSettingPanel:c.a},watch:{$route:function(t,e){this.transitionName="/"===t.path||"/contacts"===t.path&&"/dynamic"===e.path?"slide-left":"slide-right"}},methods:{setHeader:function(t){switch(t){case"msg":this.headerData={title:"消息",page:"msg"};break;case"contacts":this.headerData={title:"联系人",page:"contacts"};break;case"dynamic":this.headerData={title:"动态",page:"dynamic"}}},hideSidebar:function(){this.$store.commit("hideSidebar")}},activated:function(){"main"===this.$route.name&&(this.$el.style.left="0rem")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"showPanel"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{name:"temp",test:"tempAAA"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),s=n.n(a);e.default={mixins:[s.a],props:["bTitle"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},props:["text","icon","hasGotoIcon"],methods:{click:function(){this.$emit("itemClick")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(71),s=n.n(a);e.default={data:function(){return{expandClass:""}},props:["groupInfo"],methods:{click:function(t){this.expandClass=this.expandClass?"":"expand",console.log(666)}},components:{vGroupItem:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["friendInfo"],methods:{click:function(){this.fn.gotoConversation(this,this.friendInfo)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["dir","avatar","msg"],computed:{msgStyle:function(){return{"flex-direction":this.dir&&"right"===this.dir?"row-reverse":"row"}},spanStyle:function(){var t={float:"left",background:"#fff",color:"#000"},e={float:"right",background:"#10b5f6",color:"#fff"};return this.dir&&"right"===this.dir?e:t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},props:["chatInfo"],methods:{click:function(){this.fn.gotoConversation(this,this.chatInfo)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{navData:[{title:"好友",url:"/contacts/"},{title:"群",url:"/contacts/groups"},{title:"多人聊天",url:"/contacts/many-chat"},{title:"设备",url:"/contacts/device"},{title:"通讯录",url:"/contacts/address-book"},{title:"公众号",url:"/contacts/official-accounts"}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"search",data:function(){return{text:"搜索"}},props:["clickEvent"],methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["headerTitle"],methods:{leftClick:function(){this.$emit("leftClick")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),s=n.n(a),i=n(2),r=n.n(i),o=n(74),c=n.n(o);e.default={data:function(){return{msg:""}},components:{vSearch:s.a,vGotoItem:r.a,vNav:c.a},methods:{showsearch:function(){},emptyFn:function(){}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"dynamic",data:function(){return{msg:"dynamic"}},methods:{click:function(){}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msgIcon:"../../assets/img/msg_active.png"}},methods:{click:function(t){var e="A"===t.target.tagName?t.target:t.target.parentElement;this.$emit("changePage",e.getAttribute("name"))}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(70),s=n.n(a);e.default={data:function(){return{groups:[]}},components:{vGroup:s.a},activated:function(){this.getData()},methods:{getData:function(){var t=this;this.$http.get("/getFriendList").then(function(e){"[object Array]"===toString.call(e.body.list)&&(t.groups=e.body.list)},function(t){console.error(t)})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["parentData"],methods:{imgClick:function(){this.$store.commit("showSidebar")},test:function(){}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),s=n.n(a),i=n(73),r=n.n(i);e.default={data:function(){return{chats:[]}},components:{vSearch:s.a,vMsgItem:r.a},activated:function(){this.getData()},methods:{getData:function(){var t=this;this.$http.get("/getMsgList").then(function(e){"[object Array]"===toString.call(e.body.list)&&(t.chats=e.body.list)},function(t){console.error(t)})},showsearch:function(t){this.$router.push("/no-transition-panel/")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{set:function(){this.$router.push("/show-panel")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){this.$el.querySelector("input[name=search]").focus()},methods:{back:function(){this.$router.back()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(69),s=n.n(a),i=n(72),r=n.n(i);e.default={data:function(){return{text:"",list:[],title:"",friendAccount:"",autoReplyMsg:["猪，你来啦","黑猪白猪你是小猪猪"]}},computed:{styleObj:function(){return{color:this.text.length?"#fff":"#f1f2f3",background:this.text.length?"#10b5f6":"#dddee2"}}},components:{vHeader:s.a,vMsg:r.a},methods:{goback:function(){this.$router.back()},send:function(){var t=this;if(this.text.length){this.list.push({avatar:JSON.parse(localStorage.user).account,msg:this.text,dir:"right"});var e=this.$el.querySelector(".content");setTimeout(function(){e.scrollTop=e.scrollHeight-e.offsetHeight},60),setTimeout(function(){var n=t.autoReplyMsg.shift()||"你是猪，你说的我听不懂。。";t.list.push({avatar:t.friendAccount,msg:n}),t.$http.post("/addMsg",{fromID:t.$route.query.friendID,toID:JSON.parse(localStorage.user).rowid,msg:n}),setTimeout(function(){e.scrollTop=e.scrollHeight-e.offsetHeight},60)},800),this.$http.post("/addMsg",{fromID:JSON.parse(localStorage.user).rowid,toID:this.$route.query.friendID,msg:this.text}),this.text=""}}},created:function(){var t=this;this.title=this.$route.query.name,this.friendAccount=this.$route.query.account,this.$http.get("/getConversation",{params:{friendID:this.$route.query.friendID}}).then(function(e){t.list=e.body.list},function(t){console.log(t,"fail")})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),s=n.n(a),i=n(2),r=n.n(i);e.default={components:{vHeader:s.a,vItem:r.a},methods:{goback:function(){this.$router.back()},logout:function(){localStorage.clear(),this.$store.commit("hideSidebar"),this.$router.back()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),s=n(7),i=n.n(s),r=n(6),o=n(8),c=n(9),u=n(5);a.a.config.productionTip=!1,a.a.use(o.a),a.a.use(c.a),a.a.use(u.a),a.a.http.interceptors.push(function(t,e){t.headers.set("Authorization",localStorage.token),e(function(t){t.headers.map&&t.headers.map.verify&&this.$router.push({path:"/login",query:{redirect:this.$route.fullPath}})})});var l=new c.a.Store({state:{sidebar:"",user:{}},mutations:{showSidebar:function(t){return t.sidebar="show"},hideSidebar:function(t){return t.sidebar=""},setUser:function(t,e,n){"[object Object]"===toString.call(e)?t.user=e:t.user[e]=n}}});new a.a({el:"#app",router:r.a,store:l,render:function(t){return t(i.a)}})},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function a(t){n(56)}var s=n(0)(n(11),n(102),a,"data-v-6ec73cd2",null);t.exports=s.exports},function(t,e,n){function a(t){n(42)}var s=n(0)(n(12),n(88),a,"data-v-0e2dfbb4",null);t.exports=s.exports},function(t,e,n){function a(t){n(40)}var s=n(0)(n(13),n(86),a,"data-v-071c3b17",null);t.exports=s.exports},function(t,e,n){function a(t){n(44)}var s=n(0)(n(14),n(90),a,"data-v-21e65a20",null);t.exports=s.exports},function(t,e,n){function a(t){n(52)}var s=n(0)(n(15),n(98),a,"data-v-54e7c6fb",null);t.exports=s.exports},function(t,e,n){function a(t){n(50)}var s=n(0)(n(16),n(96),a,"data-v-4989993d",null);t.exports=s.exports},function(t,e,n){function a(t){n(51)}var s=n(0)(n(18),n(97),a,"data-v-4b66647c",null);t.exports=s.exports},function(t,e,n){function a(t){n(62)}var s=n(0)(n(19),n(108),a,"data-v-d00d7316",null);t.exports=s.exports},function(t,e,n){function a(t){n(54)}var s=n(0)(n(20),n(100),a,"data-v-5b003c84",null);t.exports=s.exports},function(t,e,n){function a(t){n(61)}var s=n(0)(n(21),n(107),a,"data-v-c018f792",null);t.exports=s.exports},function(t,e,n){function a(t){n(57)}var s=n(0)(n(22),n(103),a,"data-v-72029d26",null);t.exports=s.exports},function(t,e,n){function a(t){n(39)}var s=n(0)(n(25),n(85),a,"data-v-055a29c5",null);t.exports=s.exports},function(t,e,n){function a(t){n(55)}var s=n(0)(n(26),n(101),a,"data-v-6a11efbd",null);t.exports=s.exports},function(t,e,n){function a(t){n(53)}var s=n(0)(n(27),n(99),a,"data-v-57342ce6",null);t.exports=s.exports},function(t,e,n){function a(t){n(59)}var s=n(0)(n(28),n(105),a,"data-v-9292c35e",null);t.exports=s.exports},function(t,e,n){function a(t){n(43)}var s=n(0)(n(29),n(89),a,"data-v-14cf6502",null);t.exports=s.exports},function(t,e,n){function a(t){n(63)}var s=n(0)(n(30),n(109),a,"data-v-d11a1986",null);t.exports=s.exports},function(t,e,n){function a(t){n(49)}var s=n(0)(n(31),n(95),a,"data-v-4655fcf4",null);t.exports=s.exports},function(t,e,n){function a(t){n(47)}var s=n(0)(n(32),n(93),a,"data-v-3b3e5306",null);t.exports=s.exports},function(t,e,n){function a(t){n(58)}var s=n(0)(n(33),n(104),a,"data-v-736b2c31",null);t.exports=s.exports},function(t,e,n){function a(t){n(48)}var s=n(0)(n(34),n(94),a,"data-v-432586dc",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contacts"},[n("v-search",{attrs:{clickEvent:t.showsearch}}),t._v(" "),n("hr"),t._v(" "),n("v-goto-item",{attrs:{text:"新朋友"}}),t._v(" "),n("div",{staticClass:"blank"}),t._v(" "),n("hr"),t._v(" "),n("v-nav"),t._v(" "),n("hr"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-view")},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search",on:{click:t.clickEvent}},[n("div",{staticClass:"input"},[n("b"),t._v(" "),n("div",{staticClass:"text"},[t._v(t._s(t.text))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("div",{staticClass:"info-panel",attrs:{name:this.$store.state.sidebar,id:"info-panel"}},[n("v-setting-panel")],1),t._v(" "),n("div",{staticClass:"shade",attrs:{name:this.$store.state.sidebar},on:{click:t.hideSidebar}}),t._v(" "),n("div",{staticClass:"main-panel",attrs:{name:this.$store.state.sidebar}},[n("v-header",{attrs:{parentData:t.headerData}}),t._v(" "),n("div",{staticClass:"main-div"},[n("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[n("keep-alive",[n("router-view")],1)],1)],1),t._v(" "),n("v-footer",{on:{changePage:t.setHeader}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"avatar",on:{click:t.imgClick}},[n("img",{attrs:{src:"/static/img/"+this.$store.state.user.account+".jpg"}})]),t._v(" "),n("span",{on:{click:t.test}},[t._v(t._s(t.parentData.title))]),t._v(" "),n("div",{class:t.parentData.page,attrs:{name:"add"}},[n("span",{attrs:{name:"msg"}}),t._v(" "),n("span",{attrs:{name:"contacts"}},[t._v("添加")]),t._v(" "),n("span",{attrs:{name:"dynamic"}},[t._v("更多")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show-panel",attrs:{name:"show-panel"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},[n("keep-alive",{attrs:{include:"mainPanel"}},[n("router-view")],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goto-item",on:{click:t.click}},[t.icon?n("div"):t._e(),t._v(" "),n("p",[t._v(t._s(t.text))]),t._v(" "),t.hasGotoIcon?t._e():n("b")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-page"},[n("div",{staticClass:"search-bar"},[t._m(0),t._v(" "),n("input",{staticClass:"btn-cancel",attrs:{type:"button",value:"取消"},on:{click:t.back}})]),t._v(" "),n("h4",[t._v("快捷搜索")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-c"},[n("b"),t._v(" "),n("input",{attrs:{type:"text",placeholder:"搜索",name:"search"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"classify"},[n("div",{staticClass:"dynamic"},[n("b"),n("span",[t._v("好友动态")])]),t._v(" "),n("div",{staticClass:"article"},[n("b"),n("span",[t._v("文章")])]),t._v(" "),n("div",{staticClass:"official"},[n("b"),n("span",[t._v("公众号")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-header",{attrs:{headerTitle:"设置"},on:{leftClick:t.goback}}),t._v(" "),n("div",{staticClass:"items"},[n("v-item",{attrs:{text:"消息通知"}}),t._v(" "),n("v-item",{attrs:{text:"聊天记录"}}),t._v(" "),n("v-item",{attrs:{text:"空间清理"}})],1),t._v(" "),n("div",{staticClass:"items"},[n("v-item",{attrs:{text:"帐号、设备安全"}}),t._v(" "),n("v-item",{attrs:{text:"联系人、隐私"}}),t._v(" "),n("v-item",{attrs:{text:"辅助功能"}})],1),t._v(" "),n("div",{staticClass:"items"},[n("v-item",{attrs:{text:"退出当前账户",hasGotoIcon:!0},on:{itemClick:t.logout}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setting-panel"},[n("div",{staticClass:"top"},[t._m(0),t._v(" "),n("div",{staticClass:"top-center"},[n("img",{attrs:{src:"/static/img/"+this.$store.state.user.account+".jpg"}}),t._v(" "),n("span",[t._v(t._s(this.$store.state.user.name))])]),t._v(" "),n("div",{staticClass:"top-bottom"},[t._m(1),t._v(" "),n("p",[t._v(t._s(this.$store.state.user.signature))])])]),t._v(" "),n("div",{staticClass:"center"}),t._v(" "),n("div",{staticClass:"bottom"},[n("i",{staticClass:"temperature"},[t._v("31°")]),t._v(" "),n("div",{staticClass:"toolbar"},[n("div",{staticClass:"setting",on:{click:t.set}},[n("b"),n("span",[t._v("设置")])]),t._v(" "),t._m(2),t._v(" "),n("div",[t._v("广州市")])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qr-code"},[n("img",{attrs:{src:"/static/img/qr_code.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:"/static/img/star.png"}}),t._v(" "),n("img",{attrs:{src:"/static/img/star.png"}}),t._v(" "),n("img",{attrs:{src:"/static/img/star.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"moon"},[n("b"),n("span",[t._v("夜间")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"left",on:{click:t.leftClick}},[n("span",[t._v("返回")])]),t._v(" "),n("div",{staticClass:"center"},[n("p",[t._v(t._s(t.bTitle))]),t._v(" "),n("span",[t._v("手机在线-WiFi")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right"},[n("b"),t._v(" "),n("b")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"group",on:{click:t.click}},[n("b",{class:t.expandClass,attrs:{name:"group"}}),t._v(" "),n("span",[t._v(t._s(t.groupInfo.name))]),t._v(" "),n("i",[t._v(t._s(t.groupInfo.online)+"/"+t._s(t.groupInfo.online+t.groupInfo.offline))])]),t._v(" "),n("ul",{class:t.expandClass,attrs:{name:"list"}},t._l(t.groupInfo.friends,function(t){return n("li",[n("v-group-item",{attrs:{friendInfo:t}})],1)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v(t._s(t.name))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer",on:{click:t.click}},[n("router-link",{attrs:{to:"/",name:"msg",replace:""}},[n("b",{staticClass:"msg"}),t._v(" "),n("span",[t._v("消息")])]),t._v(" "),n("router-link",{attrs:{to:"/contacts",name:"contacts",replace:""}},[n("b",{staticClass:"contacts"}),t._v(" "),n("span",[t._v("联系人")])]),t._v(" "),n("router-link",{attrs:{to:"/dynamic",name:"dynamic",replace:""}},[n("b",{staticClass:"dynamic"}),t._v(" "),n("span",[t._v("动态")])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"msg",style:t.msgStyle},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:"/static/img/"+t.avatar+".jpg"}})]),t._v(" "),n("div",{staticClass:"content"},[n("span",{style:t.spanStyle},[t._v(t._s(t.msg||" "))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"dynamic",on:{click:t.click}},[t._v("\n\tDynamic\n\t")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login",on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.login(e)}}},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:"/static/img/"+t.avatar+".jpg"}})]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"account"},[n("b",{staticClass:"user"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"number",id:"account",placeholder:"4位数字帐号",autocomplete:"off"},domProps:{value:t.account},on:{input:[function(e){e.target.composing||(t.account=e.target.value)},t.input]}})]),t._v(" "),n("div",{staticClass:"password"},[n("b",{staticClass:"pwd"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"btn"},[n("input",{attrs:{type:"button",value:"登录"},on:{click:t.login}})])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},t._l(t.navData,function(e){return n("div",{staticClass:"item"},[n("router-link",{attrs:{to:{path:e.url}}},[n("span",[t._v(t._s(e.title)),n("b")])])],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"conversation"},[n("v-header",{attrs:{bTitle:t.title},on:{leftClick:t.goback}}),t._v(" "),n("div",{staticClass:"content"},t._l(t.list,function(t){return n("v-msg",{attrs:{avatar:t.avatar,msg:t.msg,dir:t.dir}})})),t._v(" "),n("div",{staticClass:"footer"},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"text",attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("input",{staticClass:"button",style:t.styleObj,attrs:{type:"button",value:"发送"},on:{click:t.send}})]),t._v(" "),t._m(0)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toolbar"},[n("b",{attrs:{name:"record"}}),t._v(" "),n("b",{attrs:{name:"picture"}}),t._v(" "),n("b",{attrs:{name:"camera"}}),t._v(" "),n("b",{attrs:{name:"red_package"}}),t._v(" "),n("b",{attrs:{name:"gif"}}),t._v(" "),n("b",{attrs:{name:"smile"}}),t._v(" "),n("b",{attrs:{name:"add2"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.groups,function(t){return n("li",[n("v-group",{attrs:{groupInfo:t}})],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"left",on:{click:t.leftClick}},[n("span",[t._v("返回")])]),t._v(" "),n("div",{staticClass:"center"},[t._v(t._s(t.headerTitle))]),t._v(" "),n("div",{staticClass:"right"})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"msg-item",on:{click:t.click}},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:"/static/img/"+t.chatInfo.account+".jpg"}})]),t._v(" "),n("div",{staticClass:"text"},[n("div",[n("p",[t._v(t._s(t.chatInfo.name))]),t._v(" "),n("i",[t._v(t._s(t.chatInfo.lastTime))])]),t._v(" "),n("span",[t._v(t._s(t.chatInfo.lastMsg))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group-item",on:{click:t.click}},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:"/static/img/"+t.friendInfo.account+".jpg"}})]),t._v(" "),n("div",{staticClass:"text"},[n("p",[t._v(t._s(t.friendInfo.name))]),t._v(" "),n("span",[t._v("["+t._s(t.friendInfo.state)+"] "+t._s(t.friendInfo.signature))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-search",{attrs:{clickEvent:t.showsearch}}),t._v(" "),n("ul",t._l(t.chats,function(t){return n("li",[n("v-msg-item",{attrs:{chatInfo:t}})],1)}))],1)},staticRenderFns:[]}},,,,function(t,e){}],[35]);
//# sourceMappingURL=app.c4840633afc6bd23e6f2.js.map