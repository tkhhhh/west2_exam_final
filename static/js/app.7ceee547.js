(function(t){function e(e){for(var a,i,l=e[0],o=e[1],c=e[2],d=0,v=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,l=1;l<s.length;l++){var o=s[l];0!==r[o]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"073d":function(t,e,s){},"09e2":function(t,e,s){},1212:function(t,e,s){},"12c5":function(t,e,s){},1729:function(t,e,s){"use strict";var a=s("b54a"),r=s.n(a);r.a},"17b0":function(t,e,s){},"1e84":function(t,e,s){"use strict";var a=s("12c5"),r=s.n(a);r.a},2537:function(t,e,s){},"278a":function(t){t.exports=JSON.parse("{}")},3243:function(t,e,s){},"37e2":function(t,e,s){},"41dc":function(t,e,s){"use strict";var a=s("073d"),r=s.n(a);r.a},"51a6":function(t,e,s){"use strict";var a=s("3243"),r=s.n(a);r.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app"},[s("router-view")],1)},n=[],i={name:"app",components:{}},l=i,o=(s("afc1"),s("2877")),c=Object(o["a"])(l,r,n,!1,null,"2cff34c0",null),u=c.exports,d=(s("845f"),s("5c96")),v=s.n(d);s("0fae");a["default"].use(v.a);s("09e2");var f=s("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("nav",{staticClass:"nav"},[s("v-nav")],1),s("el-carousel",{staticClass:"main",attrs:{height:"90vh",direction:"vertical",autoplay:!1}},[s("el-carousel-item",[s("v-fir",{staticClass:"ppt"})],1),s("el-carousel-item",[s("v-sec",{staticClass:"ppt"})],1),s("el-carousel-item",[s("v-thi",{staticClass:"ppt"})],1),s("el-carousel-item",[s("v-for",{staticClass:"ppt"})],1),s("el-carousel-item",[s("v-fif",{staticClass:"ppt"})],1)],1)],1)},p=[],h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fir"},[s("div",{staticClass:"left"},[t._m(0),s("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(e){return t.help()}}},[t._v("帮我")])],1),s("img",{staticClass:"img",attrs:{src:"/undraw_co-workers_ujs6.svg"}})])},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("h1",{staticClass:"word"},[t._v("  遇上难题？")]),s("h1",{staticClass:"word"},[t._v("  帮手帮您！")])])}],_={name:"Fir",data:function(){return{}},methods:{help:function(){0==this.$store.state.loged?this.$router.push("/upgrading"):this.$router.push("/list")}}},b=_,C=(s("a794"),Object(o["a"])(b,h,g,!1,null,"8d451732",null)),$=C.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sec"},[t._m(0),t.get?s("div",{staticClass:"list"},t._l(2,function(e){return s("el-row",{key:e,attrs:{gutter:20}},t._l(t.listSize,function(t){return s("el-col",{key:t,attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("v-work")],1)])}),1)}),1):t._e()])},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("span",[t._v("服务列表")]),s("h2",[t._v("几十余种专业服务随时提供")])])}],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-card",{staticClass:"card",attrs:{"body-style":{padding:"0px",backgroundColor:"#4186a7",border:"none"},shadow:"hover"}},[s("img",{staticClass:"image",attrs:{src:t.src}}),s("div",{staticClass:"bottom"},[s("span",[t._v(t._s(t.work.name))]),s("div",{staticClass:"order"},[s("span",{staticClass:"cost"},[t._v(t._s(t.work.price)+"元起")]),s("el-button",{staticClass:"button",attrs:{type:"text"}},[t._v("现在预约")])],1)])])},x=[],F=(s("278a"),{name:"Work",data:function(){return{work:{},src:""}},mounted:function(){this.$data.work=this.$store.state.hotGoods[this.$store.state.hotGoodNum],console.log(this.$data.good);var t=String(this.$data.work.id),e="/"+t+".jpg";console.log(e),this.$data.src=e,this.$store.state.hotGoodNum++}}),E=F,j=(s("6dd5"),Object(o["a"])(E,y,x,!1,null,"85b60a9c",null)),O=j.exports,P=s("bc3a"),S=s.n(P),N={name:"Sec",data:function(){return{get:!1,listSize:0}},components:{"v-work":O},beforeMount:function(){this.$data.get=!1;var t=this;S.a.get("https://easy-mock.com/mock/5d5cb424faa4555ebab63d17/helper/hot").then(function(e){t.$store.state.hotGoods=e.data.goods,t.$data.listSize=e.data.goods.length/2,t.$data.get=!0}).catch(function(t){console.log(t)})}},q=N,R=(s("a685"),Object(o["a"])(q,k,w,!1,null,"69ebc724",null)),z=R.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"thi"},[s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{span:8}},[s("div",{staticClass:"block left"},[s("img",{staticClass:"img",attrs:{src:"/undraw_house_searching_n8mp.svg"}}),s("div",{staticClass:"ifo"},[s("h2",[t._v("附近帮手")]),s("span",[t._v("迅速便捷，快速解决")])])])]),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"block middle"},[s("img",{staticClass:"img",attrs:{src:"/undraw_superhero_kguv.svg"}}),s("div",{staticClass:"ifo"},[s("h2",[t._v("认证帮手")]),s("span",[t._v("迅速便捷，快速解决")])])])]),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"block right"},[s("img",{staticClass:"img",attrs:{src:"/undraw_Hello_qnas.svg"}}),s("div",{staticClass:"ifo"},[s("h2",[t._v("专职帮手")]),s("span",[t._v("迅速便捷，快速解决")])])])])],1)],1)},L=[],M={name:"Thi",data:function(){return{}}},T=M,I=(s("72b7"),Object(o["a"])(T,G,L,!1,null,"18b11637",null)),B=I.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"for"},[s("div",{staticClass:"left"},[s("h1",[t._v("加入帮手")]),s("el-link",{staticClass:"link",attrs:{underline:!1}},[t._v("注册 / 认证 / 考核")]),s("span",[t._v("成为帮手，帮助更多人")])],1),t._m(0)])},J=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"right"},[s("img",{staticClass:"img",attrs:{src:"/undraw_under_construction_46pa.svg"}})])}],A={name:"For",data:function(){return{}}},H=A,Q=(s("ff1e"),Object(o["a"])(H,D,J,!1,null,"73a85f6c",null)),V=Q.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fif"},[s("el-link",{staticClass:"link",attrs:{underline:!1}},[t._v("加入帮手论坛")]),s("span",[t._v("经验交流，知识分享，能力提升")]),s("img",{staticClass:"img",attrs:{src:"/undraw_team_page_pgpr.svg"}})],1)},W=[],K={name:"Fif",data:function(){return{}}},X=K,Y=(s("a20c"),Object(o["a"])(X,U,W,!1,null,"499162fd",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav"},[s("div",{staticClass:"logo"},[s("img",{staticClass:"img",attrs:{src:"/logo-white.png"},on:{click:function(e){return t.change("/")}}})]),s("div",{staticClass:"right"},[s("div",{staticClass:"option"},[1==t.loged?s("el-link",{attrs:{underline:!1}},[s("i",{staticClass:"el-icon-bell"})]):t._e(),1==t.loged?s("el-link",{attrs:{underline:!1},on:{click:function(e){return t.$router.push("/order")}}},[s("i",{staticClass:"el-icon-tickets"})]):t._e()],1),s("div",{staticClass:"head"},[s("el-popover",{attrs:{placement:"bottom-end",width:"200",trigger:"hover"}},[s("div",{staticClass:"menu"},[1==t.loged?s("div",{staticClass:"top"},[s("h2",[t._v("用户名")]),s("div",{staticClass:"tags"},[s("el-tag",{staticClass:"tag",attrs:{size:"mini"}},[t._v("标签1")]),s("el-tag",{staticClass:"tag",attrs:{size:"mini"}},[t._v("标签2")]),s("el-tag",{staticClass:"tag",attrs:{size:"mini"}},[t._v("标签3")])],1)]):t._e(),1==t.loged?s("div",{staticClass:"middle"},[s("el-link",{attrs:{underline:!1},on:{click:function(e){return t.$router.push("/ifo")}}},[t._v("个人信息")]),s("el-link",{attrs:{underline:!1},on:{click:function(e){return t.$router.push("/need")}}},[t._v("我是帮手")])],1):t._e(),1==t.loged?s("div",{staticClass:"bottom"},[s("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.logout()}}},[t._v("退出")])],1):t._e(),0==t.loged?s("div",{staticClass:"noLog"},[s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.goLog()}}},[t._v("登入")]),s("el-button",{on:{click:function(e){return t.goReg()}}},[t._v("注册")])],1):t._e()]),1==t.loged?s("img",{staticClass:"user",attrs:{slot:"reference",src:"/josh-howard-6BI7fVlw_BA-unsplash.jpg"},slot:"reference"}):t._e(),0==t.loged?s("img",{staticClass:"user",attrs:{slot:"reference",src:"/undraw_male_avatar_323b.svg"},slot:"reference"}):t._e()])],1)])])},et=[];s("28a5");function st(t,e,s,a,r){var n=window.location.pathname.lastIndexOf("/"),i=window.location.pathname.slice(0,n);if(a=a||i,r=r||document.domain,s){var l=new Date;l.setDate(l.getDate()+s),document.cookie=t+"="+e+";expires="+l.toGMTString()+";path="+a+";domain="+r}else document.cookie=t+"="+e+";path="+a+";domain="+r}function at(t){for(var e=document.cookie.split(";"),s=0;s<e.length;s++){var a=e[s].split("=");if(a[0].trim()===t)return a[1]}}function rt(t,e){st(t,at(t),-1,e)}var nt={name:"Nav",data:function(){return{loged:!1}},methods:{logout:function(){rt("token"),this.$store.state.loged=!1,this.$data.loged=!1,this.$router.push("/")},goReg:function(){this.$store.state.logReg="reg",this.$router.push("/upgrading")},goLog:function(){this.$store.state.logReg="log",this.$router.push("/upgrading")},getToken:function(){var t=this,e=at("token");console.log("get token!!!!!!!!"),S.a.get("https://easy-mock.com/mock/5d5cb424faa4555ebab63d17/helper/user",{params:{response:"token",token:e}}).then(function(e){console.log(e),console.log(e.data.token),""==e.data.token?(console.log("no token 1"),t.$store.state.loged=!1,t.$data.loged=!1):(st("token",e.data.token),t.$store.state.loged=!0,t.$data.loged=!0)}).catch(function(t){console.log(t)})}},mounted:function(){this.getToken()}},it=nt,lt=(s("d79f"),Object(o["a"])(it,tt,et,!1,null,null,null)),ot=lt.exports,ct={name:"home",components:{"v-fir":$,"v-sec":z,"v-thi":B,"v-for":V,"v-fif":Z,"v-nav":ot}},ut=ct,dt=(s("a97f"),Object(o["a"])(ut,m,p,!1,null,"66fd724a",null)),vt=dt.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index div"},[s("nav",{staticClass:"nav div"},[s("v-nav")],1),s("div",{staticClass:"body div"},[s("div",{staticClass:"sort div"},[s("h3",[t._v("分类")]),s("el-divider"),s("el-tree",{staticClass:"tree",attrs:{data:t.sort,props:t.defaultProps,accordion:""},on:{"node-click":t.handleNodeClick}})],1),s("div",{staticClass:"show div"},[s("div",{staticClass:"search div"},[s("v-search",{staticClass:"input"})],1),t.get?s("div",{staticClass:"list div"},[s("el-carousel",{staticClass:"cards",attrs:{type:"card",autoplay:!1,height:"90%",arrow:"always","indicator-position":"outside"}},t._l(t.listSize,function(t){return s("el-carousel-item",{key:t},[s("v-good",{staticClass:"good"})],1)}),1)],1):t._e()])])])},mt=[],pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("el-input",{staticClass:"input",attrs:{placeholder:"请输入需要的帮助"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1)},ht=[],gt={name:"Search",data:function(){return{input:""}}},_t=gt,bt=(s("8c3a"),Object(o["a"])(_t,pt,ht,!1,null,"3d8e8252",null)),Ct=bt.exports,$t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("img",{staticClass:"img",attrs:{src:t.src}}),s("h3",{staticClass:"name"},[t._v(t._s(t.good.name))]),s("div",{staticClass:"price"},[s("h2",[t._v(t._s(t.good.price))]),s("h3",[t._v("/元 起")])]),s("el-button",{staticClass:"chose",on:{click:function(e){return t.select()}}},[t._v("选 择")])],1)},kt=[],wt={name:"Good",data:function(){return{good:{},src:""}},methods:{select:function(){window.location.href="/chose"}},mounted:function(){this.$data.good=this.$store.state.goods[this.$store.state.goodListNum],console.log(this.$data.good);var t=String(this.$data.good.id),e="/"+t+".jpg";console.log(e),this.$data.src=e,this.$store.state.goodListNum++}},yt=wt,xt=(s("1e84"),Object(o["a"])(yt,$t,kt,!1,null,"2ae2631d",null)),Ft=xt.exports,Et={name:"Goods",data:function(){return{listSize:0,get:!1,sort:[{label:"数码软件",children:[{label:"办公软件"},{label:"功能软件"},{label:"手机软件"}]},{label:"电子硬件",children:[{label:"电脑检修"},{label:"手机检修"}]},{label:"家政清洁",children:[{label:"电器清洗"},{label:"室内保洁"},{label:"室外保洁"},{label:"保姆家教"}]},{label:"水电修理",children:[{label:"水管类维修"},{label:"电路类维修"}]},{label:"力量不够",children:[{label:"搬家"},{label:"搬动"}]}],defaultProps:{children:"children",label:"label"}}},components:{"v-search":Ct,"v-good":Ft,"v-nav":ot},beforeMount:function(){this.$data.get=!1;var t=this;S.a.get("https://easy-mock.com/mock/5d5cb424faa4555ebab63d17/helper/goodList").then(function(e){t.$store.state.goods=e.data,t.$data.listSize=e.data.length,t.$data.get=!0}).catch(function(t){console.log(t)})}},jt=Et,Ot=(s("dd7c"),Object(o["a"])(jt,ft,mt,!1,null,"7dee99f6",null)),Pt=Ot.exports,St=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("nav",{staticClass:"nav"},[s("v-nav")],1),s("div",{staticClass:"time"},[s("h2",[t._v("选择一个方便的时间")]),s("div",{staticClass:"input"},[s("el-date-picker",{staticClass:"input",attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),s("el-button",[t._v("确定")])],1)]),s("div",{staticClass:"result"},[s("v-helper",{staticClass:"helper"}),s("v-helper",{staticClass:"helper"}),s("v-helper",{staticClass:"helper"}),s("v-helper",{staticClass:"helper"}),s("v-helper",{staticClass:"helper"})],1),s("el-pagination",{staticClass:"page",attrs:{background:"",layout:"prev, pager, next",total:60}})],1)},Nt=[],qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list"},[t._m(0),s("h2",{staticClass:"name"},[t._v("帮手姓名")]),s("span",{staticClass:"ifo"},[t._v("这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的说明文字")]),s("div",{staticClass:"star"},[s("span",{staticClass:"title"},[t._v("信用评级")]),s("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#eaeac1",colors:t.color,"score-template":"{value}"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),s("el-button",{staticClass:"btn",on:{click:function(e){return t.select()}}},[t._v("选择")])],1)},Rt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"head"},[s("img",{staticClass:"img",attrs:{src:"/josh-howard-6BI7fVlw_BA-unsplash.jpg"}})])}],zt={name:"Helper",data:function(){return{value:4,color:["#ede264","#ede264","#ede264"]}},methods:{select:function(){window.location.href="/settle"}}},Gt=zt,Lt=(s("41dc"),Object(o["a"])(Gt,qt,Rt,!1,null,"45891489",null)),Mt=Lt.exports,Tt={name:"Chose",data:function(){return{value1:""}},components:{"v-helper":Mt,"v-nav":ot}},It=Tt,Bt=(s("1729"),Object(o["a"])(It,St,Nt,!1,null,"13237c2c",null)),Dt=Bt.exports,Jt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("nav",{staticClass:"nav"},[s("v-nav")],1),s("div",{staticClass:"ifo block"},[s("div",{staticClass:"left block"},[s("h1",{staticClass:"title"},[t._v("帮帮信息")]),s("span",{staticClass:"intro"},[t._v('感谢您使用"帮帮"IN coming平台！您的帮手会通过电话与您取得联系并为您提供帮助，若您10分钟后仍未接到电话，请与帮手通过下方联系方式取得联系，或与我们平台客服反馈。')]),t._m(0),t._m(1),t._m(2),t._m(3),s("div",{staticClass:"confirm block"},[s("el-button",{attrs:{icon:"el-icon-check",circle:""},on:{click:function(e){return t.change("/")}}})],1)])])])},At=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"head block"},[s("img",{staticClass:"img",attrs:{src:"/philipe-cavalcante-xe68QiMaDrQ-unsplash.jpg"}}),s("div",{staticClass:"name block"},[s("h3",[t._v("帮手")]),s("h2",[t._v("帮手姓名")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tel block"},[s("h3",[t._v("联系电话")]),s("h2",[t._v("13956786675")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"time block"},[s("h3",[t._v("选择时间")]),s("h2",[t._v("12:20:58")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"msg block"},[s("h3",[t._v("备注信息")]),s("span",[t._v("这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的介绍信息")])])}],Ht={name:"Settle",data:function(){return{}},components:{"v-nav":ot}},Qt=Ht,Vt=(s("85bf"),Object(o["a"])(Qt,Jt,At,!1,null,"20b17912",null)),Ut=Vt.exports,Wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("nav",{staticClass:"nav"},[s("v-nav")],1),s("div",{staticClass:"body"},[s("el-button",{staticClass:"refresh block",attrs:{type:"primary",icon:"el-icon-refresh-left",circle:""}}),s("div",{staticClass:"outList block"},[s("el-scrollbar",{attrs:{"wrap-class":"list","view-class":"cards block",native:!1}},[s("v-note",{staticClass:"card"}),s("v-note",{staticClass:"card"}),s("v-note",{staticClass:"card"}),s("v-note",{staticClass:"card"})],1),s("div",{staticClass:"load block"},[s("el-button",{attrs:{type:"primary"}},[t._v("加载更多"),s("i",{staticClass:"el-icon-circle-plus icon"})])],1)],1)],1)])},Kt=[],Xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-card",{attrs:{shadow:"hover"}},[s("div",{staticClass:"note"},[s("div",{staticClass:"left"},[s("h2",[t._v("需求服务")]),s("span",[t._v("12:23:44这里有请求的时间以及备注")])]),s("div",{staticClass:"right"},[s("el-button",{attrs:{type:"primary",plain:""}},[t._v("接取")])],1)])])},Yt=[],Zt={name:"Note",data:function(){return{}}},te=Zt,ee=(s("ca46"),Object(o["a"])(te,Xt,Yt,!1,null,"6c03b4f5",null)),se=ee.exports,ae={name:"Need",data:function(){return{}},components:{"v-note":se,"v-nav":ot}},re=ae,ne=(s("b991"),s("bc63"),Object(o["a"])(re,Wt,Kt,!1,null,"36eb0ff2",null)),ie=ne.exports,le=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("nav",{staticClass:"nav"},[s("v-nav")],1),s("div",{staticClass:"body"},[s("div",{staticClass:"ifo"},[t._m(0),s("div",{staticClass:"right container"},[s("div",{staticClass:"block change"},[s("el-button",{staticClass:"btn",attrs:{type:"warning",plain:""}},[t._v("修改")]),s("el-button",{staticClass:"btn",attrs:{type:"danger",plain:""}},[t._v("退出")])],1),t._m(1),t._m(2),t._m(3),s("div",{staticClass:"block"},[t._m(4),s("div",{staticClass:"tags word"},[s("el-tag",{staticClass:"tag"},[t._v("项目1")]),s("el-tag",{staticClass:"tag"},[t._v("项目2")]),s("el-tag",{staticClass:"tag"},[t._v("项目3")])],1)])])])])])},oe=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"left container"},[s("h1",[t._v("个人信息")]),s("div",{staticClass:"block"},[s("h2",[s("i",{staticClass:"el-icon-user"}),t._v("用户名")]),s("h3",{staticClass:"word"},[t._v("用户昵称")])]),s("div",{staticClass:"block"},[s("h2",[s("i",{staticClass:"el-icon-message"}),t._v("邮箱")]),s("h3",{staticClass:"word"},[t._v("12345676@123.com")])]),s("div",{staticClass:"block"},[s("h2",[s("i",{staticClass:"el-icon-mobile-phone"}),t._v("联系方式")]),s("h3",{staticClass:"word"},[t._v("1234567890")])]),s("div",{staticClass:"block"},[s("h2",[s("i",{staticClass:"el-icon-chat-dot-square"}),t._v("个人备注")]),s("span",{staticClass:"word"},[t._v("这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的备注")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"block"},[s("h2",[s("i",{staticClass:"el-icon-medal"}),t._v("账户类型")]),s("h3",{staticClass:"word"},[t._v("普通帮手")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"block"},[s("h2",[s("i",{staticClass:"el-icon-circle-check"}),t._v("实名认证")]),s("h3",{staticClass:"word"},[t._v("用户已实名(nam*)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"block"},[s("h2",[s("i",{staticClass:"el-icon-school"}),t._v("大学生认证")]),s("h3",{staticClass:"word"},[t._v("福州大学221**222")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",[s("i",{staticClass:"el-icon-trophy"}),t._v("专业项目")])}],ce={name:"Ifo",data:function(){return{}},components:{"v-nav":ot}},ue=ce,de=(s("d7f4"),Object(o["a"])(ue,le,oe,!1,null,"1f23e2d8",null)),ve=de.exports,fe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("nav",{staticClass:"nav"},[s("v-nav")],1),s("div",{staticClass:"body"},[s("el-scrollbar",{staticClass:"container",attrs:{native:!1}},[s("v-card",{staticClass:"card"})],1)],1)])},me=[],pe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"pho"}),t._m(0),s("div",{staticClass:"right"},[s("el-tag",{attrs:{type:"success"}},[t._v("已完成")])],1)])},he=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"middle"},[s("div",{staticClass:"title"},[s("div",{staticClass:"tag"}),s("h2",[t._v("事件名称")])]),s("div",{staticClass:"helper"},[s("h3",[t._v("帮手:")]),s("h3",[t._v("姓名")])])])}],ge={name:"OrderCard",data:function(){return{}}},_e=ge,be=(s("c874"),Object(o["a"])(_e,pe,he,!1,null,"97b95b6e",null)),Ce=be.exports,$e={name:"Order",data:function(){return{}},components:{"v-card":Ce,"v-nav":ot}},ke=$e,we=(s("51a6"),Object(o["a"])(ke,fe,me,!1,null,"2135cd20",null)),ye=we.exports,xe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("nav",{staticClass:"nav"},[s("v-nav")],1),s("div",{staticClass:"body"},["log"==t.$store.state.logReg?s("v-login"):t._e(),"reg"==t.$store.state.logReg?s("v-reg"):t._e()],1)])},Fe=[],Ee=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-body"},[s("h2",[t._v("\n        登入\n    ")]),s("el-form",{ref:"ruleForm",attrs:{"label-position":"top","label-width":"60px",model:t.ruleForm,"status-icon":"",rules:t.rules}},[s("el-form-item",{staticClass:"title",attrs:{label:"账号 (邮箱)",prop:"account"}},[s("el-input",{model:{value:t.ruleForm.account,callback:function(e){t.$set(t.ruleForm,"account",e)},expression:"ruleForm.account"}})],1),s("el-form-item",{staticClass:"title",attrs:{label:"密码",prop:"password"}},[s("el-input",{attrs:{type:"password"},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1),s("el-link",{attrs:{type:"primary"}},[t._v("忘记密码？")]),s("div",{staticClass:"footer"},[s("el-button",{on:{click:function(e){t.$store.state.logReg="reg"}}},[t._v("注 册")]),s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("登 入")])],1)],1)],1)},je=[],Oe={name:"Login",data:function(){return{ruleForm:{account:"",password:""},rules:{account:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}]},center:!0}},methods:{submitForm:function(t){var e=this;S.a.get("/user",{params:{response:"login",email:this.$refs[t].model.account,password:this.$refs[t].model.password}}).then(function(s){console.log(s);var a=s.data.status;"201"==a?(e.$refs[t].$message.error("登入失败"),e.$refs[t].resetFields()):"200"==a&&(e.$refs[t].$message({message:"登入成功",type:"success"}),st("token",s.data.token),e.$refs[t].resetFields(),e.$store.state.loged=!0,e.$router.push("/"))}).catch(function(s){console.log("error"+s),e.$refs[t].$message.error("出错了，错误信息"+s)})}}},Pe=Oe,Se=(s("e56d"),Object(o["a"])(Pe,Ee,je,!1,null,"170be0ed",null)),Ne=Se.exports,qe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reg-body"},[s("h2",[t._v("\r\n        注册\r\n    ")]),s("el-form",{ref:"ruleForm",staticClass:"reg",attrs:{model:t.ruleForm,"status-icon":"",rules:t.rules,"label-width":"100px","label-position":"left"}},[t.repeated?s("el-alert",{staticClass:"repeat",attrs:{title:"用户名已存在",type:"error",description:"用户名与已存在用户重复，请重试","show-icon":""}}):t._e(),s("el-form-item",{attrs:{label:"用户名",prop:"name"}},[s("el-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{model:{value:t.ruleForm.email,callback:function(e){t.$set(t.ruleForm,"email",e)},expression:"ruleForm.email"}})],1),s("el-form-item",{attrs:{label:"电话号码",prop:"number"}},[s("el-input",{model:{value:t.ruleForm.number,callback:function(e){t.$set(t.ruleForm,"number",e)},expression:"ruleForm.number"}})],1),s("el-form-item",{attrs:{label:"真实姓名",prop:"real"}},[s("el-input",{model:{value:t.ruleForm.real,callback:function(e){t.$set(t.ruleForm,"real",e)},expression:"ruleForm.real"}})],1),s("el-form-item",{attrs:{label:"身份证号",prop:"id"}},[s("el-input",{model:{value:t.ruleForm.id,callback:function(e){t.$set(t.ruleForm,"id",e)},expression:"ruleForm.id"}})],1),s("el-form-item",{attrs:{label:"密码",prop:"pass"}},[s("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.pass,callback:function(e){t.$set(t.ruleForm,"pass",e)},expression:"ruleForm.pass"}})],1),s("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[s("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.checkPass,callback:function(e){t.$set(t.ruleForm,"checkPass",e)},expression:"ruleForm.checkPass"}})],1),s("el-form-item",[s("el-button",{on:{click:function(e){return t.change("/")}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("注 册")])],1)],1)],1)},Re=[],ze=(s("7f7f"),{name:"Reg",data:function(){var t=this,e=function(e,s,a){if(""===s)return a(new Error("请输入用户名"));""!==t.ruleForm.checkPass&&t.$refs.ruleForm.validateField("email"),a()},s=function(e,s,a){""===s?a(new Error("请输入邮箱")):(""!==t.ruleForm.checkPass&&t.$refs.ruleForm.validateField("pass"),a())},a=function(e,s,a){if(""===s)a(new Error("请输入密码"));else{var r=/^[\w_]{6,16}$/;r.test(s)||a(new Error("密码不能包含下划线以外的特殊字符")),""!==t.ruleForm.checkPass&&t.$refs.ruleForm.validateField("checkPass"),a()}},r=function(e,s,a){""===s?a(new Error("请再次输入密码")):s!==t.ruleForm.pass?a(new Error("两次输入密码不一致!")):a()};return{repeated:!1,ruleForm:{name:"",email:"",pass:"",checkPass:"",real:"",id:"",number:""},rules:{name:[{validator:e,trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",required:!0,trigger:"blur"}],email:[{validator:s,trigger:"blur",required:!0},{type:"email",trigger:"change",message:"请输入正确的邮箱地址"}],pass:[{min:6,max:16,message:"密码最短6位，最长16位",trigger:"blur"},{validator:a,trigger:"blur",required:!0}],checkPass:[{validator:r,trigger:"blur",required:!0}],id:[{min:17,max:18,message:"请输入正确身份证号",required:!0,trigger:"blur"}],real:[{min:2,max:10,message:"请输入正确姓名",required:!0,trigger:"blur"}],number:[{min:11,max:11,message:"请输入正确手机电话号码",required:!0,trigger:"blur"}]}}},methods:{submitForm:function(t){var e=this,s=this;this.$refs[t].validate(function(a){if(!a)return s.$refs[t].$message.error("提交出错，请检查信息内容"),!1;S.a.get("/user",{params:{response:"register",email:e.$refs[t].model.email,username:e.$refs[t].model.name,password:e.$refs[t].model.checkPass,id:e.$refs[t].model.id,name:e.$refs[t].model.name,number:e.$refs[t].model.number}}).then(function(e){var a=e.data.status;"201"==a?(s.$data.repeated=!0,s.$refs[t].resetFields(),s.$refs[t].$message({message:"该用户已存在",type:"error"})):"200"==a?(s.$data.repeated=!1,s.$refs[t].$message({message:"注册成功",type:"success"}),s.$refs[t].resetFields(),s.$store.state.logReg="log"):(s.$data.repeated=!0,s.$refs[t].resetFields(),s.$refs[t].$message({message:"出错了，请联系管理员处理",type:"warning"}))}).catch(function(e){console.log("error"+e),s.$refs[t].$message.error("出错了，错误信息:"+e)})})}}}),Ge=ze,Le=(s("b546"),Object(o["a"])(Ge,qe,Re,!1,null,"e23c7a5c",null)),Me=Le.exports,Te={name:"Upgrading",data:function(){return{}},components:{"v-login":Ne,"v-reg":Me,"v-nav":ot}},Ie=Te,Be=(s("dc47"),Object(o["a"])(Ie,xe,Fe,!1,null,"5c1e6426",null)),De=Be.exports;a["default"].use(f["a"]);var Je=new f["a"]({mode:"hash",routes:[{path:"/",name:"home",component:vt},{path:"/list",name:"list",component:Pt},{path:"/chose",name:"chose",component:Dt},{path:"/settle",name:"settle",component:Ut},{path:"/need",name:"need",component:ie},{path:"/ifo",name:"ifo",component:ve},{path:"/order",name:"order",component:ye},{path:"/upgrading",name:"upgrading",component:De},{path:"*",redirect:"/"}]}),Ae=s("2f62");a["default"].use(Ae["a"]);var He=new Ae["a"].Store({state:{goods:[],goodListNum:0,logReg:"reg",loged:!1,hotGoods:[],hotGoodNum:0},mutations:{},actions:{}});a["default"].config.productionTip=!1,new a["default"]({router:Je,store:He,render:function(t){return t(u)}}).$mount("#app"),a["default"].prototype.change=function(t){this.$router.push(t)}},"5c8c":function(t,e,s){},"681f":function(t,e,s){},"69be":function(t,e,s){},"6d54":function(t,e,s){},"6dd5":function(t,e,s){"use strict";var a=s("37e2"),r=s.n(a);r.a},"72b7":function(t,e,s){"use strict";var a=s("be137"),r=s.n(a);r.a},"74ca":function(t,e,s){},"845f":function(t,e,s){},"85bf":function(t,e,s){"use strict";var a=s("2537"),r=s.n(a);r.a},"8c3a":function(t,e,s){"use strict";var a=s("9fa1"),r=s.n(a);r.a},9276:function(t,e,s){},"941e":function(t,e,s){},9526:function(t,e,s){},"9e74":function(t,e,s){},"9fa1":function(t,e,s){},a20c:function(t,e,s){"use strict";var a=s("5c8c"),r=s.n(a);r.a},a685:function(t,e,s){"use strict";var a=s("74ca"),r=s.n(a);r.a},a794:function(t,e,s){"use strict";var a=s("1212"),r=s.n(a);r.a},a97f:function(t,e,s){"use strict";var a=s("6d54"),r=s.n(a);r.a},afc1:function(t,e,s){"use strict";var a=s("681f"),r=s.n(a);r.a},b546:function(t,e,s){"use strict";var a=s("9276"),r=s.n(a);r.a},b54a:function(t,e,s){},b991:function(t,e,s){"use strict";var a=s("ddf5"),r=s.n(a);r.a},bc63:function(t,e,s){"use strict";var a=s("c02d"),r=s.n(a);r.a},be137:function(t,e,s){},c02d:function(t,e,s){},c874:function(t,e,s){"use strict";var a=s("df4e"),r=s.n(a);r.a},ca46:function(t,e,s){"use strict";var a=s("941e"),r=s.n(a);r.a},cf3d:function(t,e,s){},d79f:function(t,e,s){"use strict";var a=s("9e74"),r=s.n(a);r.a},d7f4:function(t,e,s){"use strict";var a=s("17b0"),r=s.n(a);r.a},dad6:function(t,e,s){},dc47:function(t,e,s){"use strict";var a=s("9526"),r=s.n(a);r.a},dd7c:function(t,e,s){"use strict";var a=s("69be"),r=s.n(a);r.a},ddf5:function(t,e,s){},df4e:function(t,e,s){},e56d:function(t,e,s){"use strict";var a=s("dad6"),r=s.n(a);r.a},ff1e:function(t,e,s){"use strict";var a=s("cf3d"),r=s.n(a);r.a}});
//# sourceMappingURL=app.7ceee547.js.map