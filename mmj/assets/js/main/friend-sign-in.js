jsoneopack([55],{17:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=o(a),r=n(2),s=o(r),l=n(6),u=o(l),c=n(11),f=(o(c),function(){function e(){(0,i.default)(this,e)}return(0,s.default)(e,null,[{key:"POST_REGISTRATION",value:function(t){return(new u.default).ins.post(e.PREFIX+"/registration",t)}},{key:"PATCH_REGISTRATION",value:function(t){return(new u.default).ins.patch(e.PREFIX+"/registration",t)}},{key:"GET_MEMBER_DETAIL",value:function(){return(new u.default).ins.get(e.PREFIX+"/details")}},{key:"POST_PRE_MAIL",value:function(t,n){var o=new u.default,a={mailAddress:t,mailPassword:n};return o.ins.post(e.PREFIX+"/mail/pre",a)}},{key:"GET_FRIENDS_STATUS",value:function(){return new u.default(!1).ins.get(e.PREFIX+"/friends/status")}},{key:"PATCH_LAST_LOGIN",value:function(){var t=new u.default,n=u.default.GET_TOKEN;return void 0!==sessionStorage.sendLastLogin||void 0===n?null:(sessionStorage.sendLastLogin=!0,t.ins.patch(e.PREFIX+"/last_login"))}},{key:"PREFIX",get:function(){return"/api/members"}}]),e}());t.default=f},3:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(){var e=document.getElementById("offcanvas_open"),t=(document.getElementById("offcanvas_close"),document.body),n=document.getElementById("offcanvas");e.onclick=function(){n.classList.toggle("is-menu-open"),t.classList.toggle("is-menu-open")}}function i(){var e=document.getElementById("inner_body"),t="",n=document.getElementsByClassName("js_modal_overlay"),o=document.getElementsByClassName("js_modal_close"),a=document.getElementsByClassName("show_modal"),i=document.body;[].forEach.call(a,function(n){n.onclick=function(){t=document.getElementById(n.getAttribute("data-modal")),t.classList.toggle("active"),i.classList.toggle("is-open"),e.classList.toggle("blured")}}),[].forEach.call(n,function(n){n.onclick=function(){t.classList.toggle("active"),i.classList.toggle("is-open"),e.classList.toggle("blured")}}),[].forEach.call(o,function(n){n.onclick=function(){t.classList.toggle("active"),i.classList.toggle("is-open"),e.classList.toggle("blured")}}),window.onload=function(){var e=document.getElementsByClassName("js_modal_close_and_show");[].forEach.call(e,function(e){e.onclick=function(){t.classList.toggle("active"),t=document.getElementById(e.getAttribute("data-modal")),t.classList.toggle("active")}})}}function r(){var e=document.getElementsByClassName("area_level_1"),t=document.getElementsByClassName("area_level_2");document.getElementsByClassName("area_checked");[].forEach.call(e,function(e){e.onclick=function(){e.classList.toggle("active"),t=e.nextElementSibling,t.classList.toggle("is-open"),t.classList.contains("check-open")&&t.classList.remove("check-open")}})}function s(){var e=void 0,t=document.getElementsByClassName("search_form_age");[].forEach.call(t,function(t){for(e=18;e<100;e++){var n=document.createElement("option");n.value=e,n.innerHTML=e,t.appendChild(n)}})}function l(){return window.location.search.substring(1).split("&").map(function(e){return e.split("=")}).reduce(function(e,t){var n=(0,M.default)(t,2),o=n[0],a=n[1];return R.default.extend(e,(0,A.default)({},o,decodeURI(a)))},{})}function u(e){return e.toMoment().format("YYYY/MM/DD ddd")}function c(e){var t=(0,b.default)(e),n=(0,b.default)(e).startOf("day"),o=(0,b.default)().startOf("day"),a="M/DD H:mm";return n.isSame(o)&&(a="H:mm"),t.format(a)}function f(e,t){return e.toMoment().format(t)}function d(){var e={enableHighAccuracy:!1,timeout:15e3,maximumAge:5e3};return new L.default(function(t,n){navigator.geolocation.getCurrentPosition(function(e){var n=e.coords.latitude,o=e.coords.longitude;t({lon:n,lat:o,params:{params:{lon:n,lat:o,offset_distance:0}}})},function(e){var t={0:"原因不明のエラーが発生しました",1:"位置情報の取得が許可されませんでした",2:"電波状況などで位置情報が取得できませんでした",3:"位置情報の取得に時間がかかり過ぎてタイムアウトしました"};alert(t[e.code]),n(e||"ERROR")},e)})}function g(e,t){var n=e.split(",")[1],o=window.atob(n),a=new ArrayBuffer(o.length),i=new Uint8Array(a),r=void 0,s=void 0;for(r=0,s=o.length;r<s;r++)i[r]=o.charCodeAt(r);return new Blob([i],{type:t})}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e6,n=e.toDataURL("image/jpeg"),o=g(n);console.log(o.size);var a=o;if(t<=o.size){var i=t/o.size;n=e.toDataURL("image/jpeg",i),a=g(n),console.log(i),console.log(a.size)}return a}function p(e){return"http://maps.google.co.jp/maps?q="+e}function v(){var e=[],t=0,n="",o="";n=window.location.search.slice(1).split("&"),t=n.length;for(var a=0;a<t;a++)o=n[a].split("="),e[o[0]]=o[1];return e}function h(){return null!==navigator.userAgent.match(/\/iOS-app\/jp.mixmag$/)}function _(){return null!==navigator.userAgent.match(/\/android-app\/jp.mixmag$/)}function y(){return h()||_()}Object.defineProperty(t,"__esModule",{value:!0});var E=n(5),L=o(E),I=n(14),A=o(I),P=n(10),M=o(P);t.navigation=a,t.modal=i,t.accordion=r,t.searchNumberSelect=s,t.getURLQueryJSON=l,t.filterVueEventDate=u,t.filterVueTime=c,t.filterVueDateTime=f,t.getCurrentPosition=d,t.base64ToBlob=g,t.compressImage=m,t.makeGmapUrlByAddress=p,t.getQueryParameter=v,t.isiOSAPP=h,t.isAndroidAPP=_,t.isApp=y;var w=n(12),R=o(w),T=n(7),k=o(T),O=n(0),b=o(O);(0,k.default)()},570:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=n(22),i=o(a),r=n(15),s=o(r),l=n(3),u=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(l),n(17)),c=o(u),f=void 0;window.onload=function(){f=d()};var d=function(){var e={state:{}};return new s.default({el:"#friend-sign-in-vue",delimiters:["${","}"],data:(0,i.default)({isLoading:!1,isLoadCompleted:!1},e),created:function(){var e=this;this.isLoading=!0,c.default.GET_FRIENDS_STATUS(!1).then(function(t){location.href=t.redirectUrl,e.isLoading=!1}).catch(function(t){e.isLoading=!1})},components:{},methods:{clickedSubmit:function(){location.href="/api/fb/friends/sign_in"}},computed:{}})}},6:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),i=o(a),r=n(9),s=o(r),l=n(16),u=o(l),c=n(1),f=o(c),d=n(2),g=o(d);n(18);var m=n(19),p=o(m),v=n(11),h=o(v),_=n(3),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(_),E=n(8),L=o(E),I=function(){function e(){var t=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15e3;(0,f.default)(this,e);var a={},r=location.pathname.startsWith("/friends/")||location.pathname.startsWith("/community/"),l="Bearer";r&&null===location.pathname.match(/registration/)&&!this.isCurrentPathEqualSignIn()&&(l+="Friend");var c=(0,h.default)("mag_token_front");c&&(a.Authorization=l+" "+c),a=(0,u.default)({},a,this.makeContentType()),this.showErrorAlert=n,this.ins=p.default.create({timeout:o,headers:a,onDownloadProgress:function(e){}}),this.ins.interceptors.response.use(function(e){return e.data},function(e){var n=0,o=void 0;return void 0!==e.response&&(n=e.response.status,o=e.response.data,console.log("error: "+n),console.log("data: "+(0,s.default)(o)),console.log("message: "+e.response.message)),401===n?(console.log("認証エラー"),window.confirm("Mixmag japanにログインしてすべての機能を体験しましょう！")&&(y.isApp()?L.default.AUTH_ERROR:A("/login/"))):void 0!==o&&o.errorCode>999?(console.log(o.message),alert(o.message)):403===n?r&&A("/friends/sign-in.html"):t.showErrorAlert&&(n>=500?(alert("サーバでエラーが発生しました"),console.log("サーバでエラーが発生しました")):(alert("通信に失敗しました"),console.log("通信に失敗しました"))),i.default.reject(e)})}return(0,g.default)(e,[{key:"makeContentType",value:function(){return{}}},{key:"isCurrentPathEqualSignIn",value:function(){return location.pathname.startsWith("/friends/sign-in.html")}}],[{key:"GET_TOKEN",get:function(){return(0,h.default)("mag_token_front")}}]),e}();t.default=I;var A=function(e){location.href=e}},7:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),i=o(a),r=n(0),s=o(r),l=function(){String.prototype.format=function(e){var t=void 0;if("object"===(void 0===e?"undefined":(0,i.default)(e)))t=function(t,n){return e[n]};else{var n=arguments;t=function(e,t){return n[parseInt(t)]}}return this.replace(/\{(\w+)\}/g,t)},String.prototype.toMoment=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"YYYY-MM-DD HH:mm:ss";return(0,s.default)(this,e)},String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.lastIndexOf(e,t)===t}),String.prototype.endsWith||Object.defineProperty(String.prototype,"endsWith",{enumerable:!1,configurable:!1,writable:!1,value:function(e,t){return t=t||this.length,t-=e.length,this.lastIndexOf(e)===t}}),Date.prototype.reqFormat=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"YYYY-MM-DD HH:mm:ss";return(0,s.default)(this).format(e)},Array.prototype.isEmpty=function(){return 0===this.length},Array.prototype.last=function(){return this.isEmpty()?null:this[this.length-1]},Array.prototype.first=function(){return this.isEmpty()?null:this[0]}};t.default=l},8:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=o(a),r=n(2),s=o(r),l=function(){function e(){(0,i.default)(this,e)}return(0,s.default)(e,null,[{key:"PREFIX",get:function(){return"call-native://api/"}},{key:"AUTH_ERROR",get:function(){location.href=e.PREFIX+"authError"}},{key:"CLOSE_MODAL",get:function(){location.href=e.PREFIX+"closeModal"}},{key:"CLOSE_MODAL_IMMEDIATELY",get:function(){location.href=e.PREFIX+"closeModalImmediately"}},{key:"PATCH_DEVICE_TOKEN",get:function(){location.href=e.PREFIX+"patchDeviceToken"}}]),e}();t.default=l}},[570]);