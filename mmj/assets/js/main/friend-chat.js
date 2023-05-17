jsoneopack([54,56],{236:function(e,t,n){var o=n(4)(n(237),n(238),null,null,null);o.options.__file="/Users/harasho/Documents/git_projects/mmj/mixmag-front/public/src/assets/vue/component/FriendChatCard.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] FriendChatCard.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},237:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.default={name:"friend-chat-card",data:function(){return{}},props:{messages:{type:Array,default:[]},targetImage:"",targetNickname:"",memberId:0},filters:{filterTime:s.filterVueTime},computed:{},methods:{isSelf:function(e){return e.memberId===this.memberId}}}},238:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"chat_block--list"},[e._l(e.messages,function(t,o){return[e.isSelf(t)?n("li",{key:o,staticClass:"row align-right"},[n("article",{staticClass:"chat_block columns small-12"},[n("div",{staticClass:"chat_block--inner row align-right"},[n("time",{staticClass:"chat_block--time columns shrink align-self-bottom small-order-1"},[e._v(e._s(e._f("filterTime")(t.createdAt)))]),e._v(" "),n("div",{staticClass:"chat_block--message--holder columns shrink small-order-2"},[n("p",{staticClass:"chat_block--message"},[e._v(e._s(t.message))])])])])]):n("li",{key:o,staticClass:"row align-left"},[n("article",{staticClass:"chat_block friend_message columns small-12"},[n("div",{staticClass:"chat_block--inner row align-left"},[n("time",{staticClass:"chat_block--time columns shrink align-self-bottom small-order-2"},[e._v(e._s(e._f("filterTime")(t.createdAt)))]),e._v(" "),n("div",{staticClass:"chat_block--message--holder columns shrink small-order-1"},[n("p",{staticClass:"chat_block--message"},[e._v(e._s(t.message))]),e._v(" "),n("img",{staticClass:"chat_block--image",attrs:{src:e.targetImage,alt:e.targetNickname}})])])])])]})],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},3:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(){var e=document.getElementById("offcanvas_open"),t=(document.getElementById("offcanvas_close"),document.body),n=document.getElementById("offcanvas");e.onclick=function(){n.classList.toggle("is-menu-open"),t.classList.toggle("is-menu-open")}}function a(){var e=document.getElementById("inner_body"),t="",n=document.getElementsByClassName("js_modal_overlay"),o=document.getElementsByClassName("js_modal_close"),s=document.getElementsByClassName("show_modal"),a=document.body;[].forEach.call(s,function(n){n.onclick=function(){t=document.getElementById(n.getAttribute("data-modal")),t.classList.toggle("active"),a.classList.toggle("is-open"),e.classList.toggle("blured")}}),[].forEach.call(n,function(n){n.onclick=function(){t.classList.toggle("active"),a.classList.toggle("is-open"),e.classList.toggle("blured")}}),[].forEach.call(o,function(n){n.onclick=function(){t.classList.toggle("active"),a.classList.toggle("is-open"),e.classList.toggle("blured")}}),window.onload=function(){var e=document.getElementsByClassName("js_modal_close_and_show");[].forEach.call(e,function(e){e.onclick=function(){t.classList.toggle("active"),t=document.getElementById(e.getAttribute("data-modal")),t.classList.toggle("active")}})}}function i(){var e=document.getElementsByClassName("area_level_1"),t=document.getElementsByClassName("area_level_2");document.getElementsByClassName("area_checked");[].forEach.call(e,function(e){e.onclick=function(){e.classList.toggle("active"),t=e.nextElementSibling,t.classList.toggle("is-open"),t.classList.contains("check-open")&&t.classList.remove("check-open")}})}function r(){var e=void 0,t=document.getElementsByClassName("search_form_age");[].forEach.call(t,function(t){for(e=18;e<100;e++){var n=document.createElement("option");n.value=e,n.innerHTML=e,t.appendChild(n)}})}function l(){return window.location.search.substring(1).split("&").map(function(e){return e.split("=")}).reduce(function(e,t){var n=(0,w.default)(t,2),o=n[0],s=n[1];return L.default.extend(e,(0,I.default)({},o,decodeURI(s)))},{})}function c(e){return e.toMoment().format("YYYY/MM/DD ddd")}function u(e){var t=(0,S.default)(e),n=(0,S.default)(e).startOf("day"),o=(0,S.default)().startOf("day"),s="M/DD H:mm";return n.isSame(o)&&(s="H:mm"),t.format(s)}function d(e,t){return e.toMoment().format(t)}function m(){var e={enableHighAccuracy:!1,timeout:15e3,maximumAge:5e3};return new k.default(function(t,n){navigator.geolocation.getCurrentPosition(function(e){var n=e.coords.latitude,o=e.coords.longitude;t({lon:n,lat:o,params:{params:{lon:n,lat:o,offset_distance:0}}})},function(e){var t={0:"原因不明のエラーが発生しました",1:"位置情報の取得が許可されませんでした",2:"電波状況などで位置情報が取得できませんでした",3:"位置情報の取得に時間がかかり過ぎてタイムアウトしました"};alert(t[e.code]),n(e||"ERROR")},e)})}function f(e,t){var n=e.split(",")[1],o=window.atob(n),s=new ArrayBuffer(o.length),a=new Uint8Array(s),i=void 0,r=void 0;for(i=0,r=o.length;i<r;i++)a[i]=o.charCodeAt(i);return new Blob([a],{type:t})}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e6,n=e.toDataURL("image/jpeg"),o=f(n);console.log(o.size);var s=o;if(t<=o.size){var a=t/o.size;n=e.toDataURL("image/jpeg",a),s=f(n),console.log(a),console.log(s.size)}return s}function h(e){return"http://maps.google.co.jp/maps?q="+e}function p(){var e=[],t=0,n="",o="";n=window.location.search.slice(1).split("&"),t=n.length;for(var s=0;s<t;s++)o=n[s].split("="),e[o[0]]=o[1];return e}function v(){return null!==navigator.userAgent.match(/\/iOS-app\/jp.mixmag$/)}function _(){return null!==navigator.userAgent.match(/\/android-app\/jp.mixmag$/)}function y(){return v()||_()}Object.defineProperty(t,"__esModule",{value:!0});var b=n(5),k=o(b),C=n(14),I=o(C),E=n(10),w=o(E);t.navigation=s,t.modal=a,t.accordion=i,t.searchNumberSelect=r,t.getURLQueryJSON=l,t.filterVueEventDate=c,t.filterVueTime=u,t.filterVueDateTime=d,t.getCurrentPosition=m,t.base64ToBlob=f,t.compressImage=g,t.makeGmapUrlByAddress=h,t.getQueryParameter=p,t.isiOSAPP=v,t.isAndroidAPP=_,t.isApp=y;var M=n(12),L=o(M),x=n(7),B=o(x),A=n(0),S=o(A);(0,B.default)()},558:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=n(66),a=o(s),i=n(9),r=o(i),l=n(15),c=o(l),u=n(11),d=o(u),m=n(421),f=o(m),g=n(12),h=o(g),p=n(236),v=o(p),_=f.default,y=null,b={Authorization:"BearerFriend "+(0,d.default)("mag_token_front")},k=sessionStorage.chatPath,C="info",I={url:"/websocket/chat/"+k,contentType:"application/json",logLevel:C,transport:"websocket",fallbackTransport:"long-polling",reconnectInterval:5e3,maxReconnectOnClose:12,trackMessageLength:!0,headers:b},E=function(){y=_.subscribe(I)},w=function(){_.unsubscribe(I)};(function(){new c.default({el:"#friend-chat-vue",delimiters:["${","}"],data:{isLoading:!1,isLoadCompleted:!1,isConnected:!1,messages:[],errIntervalId:null,memberId:0,targetId:0,targetNickname:"",targetImage:"",next:!1,nextPaginationId:0,inputMessage:"",uuid:null},created:function(){if(void 0===k||null===k||""===k)return alert("クライアント側で問題が発生しました\n(エラーコード:chat001)"),void this.goBack();this.configureWebSocket(),E()},components:{FriendChatCard:v.default},methods:{submit:function(){""!==this.inputMessage&&(y.push((0,r.default)({message:this.inputMessage,memberId:this.memberId,targetId:this.targetId,uuid:this.uuid})),this.inputMessage="")},configureWebSocket:function(){var e=this;I.onOpen=function(e){},I.onMessage=function(t){var n=t.responseBody,o=void 0;try{o=h.default.parseJSON(n)}catch(e){return void console.log("This doesn't look like a valid JSON: ",n.data)}if(!e.procReady(o))if(void 0===o.length)e.messages.push(o);else{var s;(s=e.messages).push.apply(s,(0,a.default)(o))}},I.onClose=function(t){console.log("close"),e.isConnected=!1},I.onError=function(t){console.log("error"),e.isConnected=!1,alert("電波の状況が悪いかサーバ側に負荷がかかっており繋がりにくくなっております。\nしばらく経ってからお試しください。")},I.onFailureToReconnect=function(t,n){alert("電波の状況が悪いかサーバ側に負荷がかかっており繋がりにくくなっております。\nしばらく経ってからお試しください。"),e.goBack()}},procReady:function(e){if(!0===e.ready&&null===e.uuid)return console.log("認証に失敗したのでとじー"),w(),this.isConnected=!1,alert(e.error),this.goToIndex(),!0;if(!0===e.ready&&null!==e.uuid){if(this.uuid=e.uuid,this.memberId=e.memberId,this.targetId=e.targetId,this.targetNickname=e.nickname,this.targetImage=e.image,this.next=e.dto.next,this.nextPaginationId=e.dto.nextPaginationId,0===this.messages.length)this.messages=e.dto.list,this.messages.length>6&&this.$nextTick(function(){window.scrollBy(0,1e3)});else if(e.dto.list.length>0){var t,n=this.messages.map(function(e){return e.id}),o=e.dto.list.filter(function(e){return!n.includes(e.id)});(t=this.messages).push.apply(t,(0,a.default)(o))}return this.isConnected=!0,console.log("認証ok"),!0}return!1},goToIndex:function(){location.href="/friends/"},goBack:function(){history.back()},goTo:function(e){location.href=e}},computed:{submitText:function(){return this.isConnected?"送  信":"接続中"}}})})()},7:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(13),a=o(s),i=n(0),r=o(i),l=function(){String.prototype.format=function(e){var t=void 0;if("object"===(void 0===e?"undefined":(0,a.default)(e)))t=function(t,n){return e[n]};else{var n=arguments;t=function(e,t){return n[parseInt(t)]}}return this.replace(/\{(\w+)\}/g,t)},String.prototype.toMoment=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"YYYY-MM-DD HH:mm:ss";return(0,r.default)(this,e)},String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.lastIndexOf(e,t)===t}),String.prototype.endsWith||Object.defineProperty(String.prototype,"endsWith",{enumerable:!1,configurable:!1,writable:!1,value:function(e,t){return t=t||this.length,t-=e.length,this.lastIndexOf(e)===t}}),Date.prototype.reqFormat=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"YYYY-MM-DD HH:mm:ss";return(0,r.default)(this).format(e)},Array.prototype.isEmpty=function(){return 0===this.length},Array.prototype.last=function(){return this.isEmpty()?null:this[this.length-1]},Array.prototype.first=function(){return this.isEmpty()?null:this[0]}};t.default=l}},[558]);