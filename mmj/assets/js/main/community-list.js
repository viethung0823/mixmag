jsoneopack([49],{20:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),a=o(i),r=n(1),s=o(r),u=n(2),l=o(u),c=function(){function e(){(0,s.default)(this,e)}return(0,l.default)(e,null,[{key:"SET_VENUE_SEARCH_JSON",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];arguments.length>2&&void 0!==arguments[2]&&arguments[2];e={param:e,isSearchByLocation:t},window.sessionStorage.searchReqJson=(0,a.default)(e)}},{key:"SET_ARTIST_SEARCH_JSON",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];arguments.length>2&&void 0!==arguments[2]&&arguments[2];e={param:e,isSearchByToday:t},window.sessionStorage.searchReqJson=(0,a.default)(e)}},{key:"SET_EVENT_SEARCH_JSON",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];arguments.length>2&&void 0!==arguments[2]&&arguments[2];e={param:e,isSearchByLocation:t},window.sessionStorage.searchReqJson=(0,a.default)(e)}},{key:"GET_SEARCH_HISTORY",value:function(e){var t=window.localStorage[e+"SearchHistory"];return t=void 0===t?[]:JSON.parse(t)}},{key:"ADD_SEARCH_HISTORY",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=e.GET_SEARCH_HISTORY(t);o.unshift(n),o.length>10&&o.pop(),window.localStorage[t+"SearchHistory"]=(0,a.default)(o)}},{key:"SET_BIRTHDAY_GENDER",value:function(e,t){var n={birthday:e,gender:t};window.sessionStorage.setItem("self_my_b_e_g",(0,a.default)(n))}},{key:"SET_CIGARETTES_AND_ALCOHOLS",value:function(e,t,n,o){var i={smoker:e,tabacoTypes:t,drinker:n,alcoholTypes:o};window.sessionStorage.setItem("self_c_and_a",(0,a.default)(i))}},{key:"SET_GENRES",value:function(e){var t={genres:e};window.sessionStorage.setItem("self_g",(0,a.default)(t))}},{key:"SET_AREA_IDS",value:function(e){var t={areaIds:e};window.sessionStorage.setItem("self_a",(0,a.default)(t))}},{key:"GET_VENUE_SEARCH_JSON",get:function(){return JSON.parse(window.sessionStorage.searchReqJson)}},{key:"GET_ARTIST_SEARCH_JSON",get:function(){return JSON.parse(window.sessionStorage.searchReqJson)}},{key:"GET_EVENT_SEARCH_JSON",get:function(){return JSON.parse(window.sessionStorage.searchReqJson)}},{key:"GET_BIRTHDAY_EMAIL_GENDER",get:function(){return JSON.parse(window.sessionStorage.self_my_b_e_g)}},{key:"GET_CIGARETTES_AND_ALCOHOLS",get:function(){return JSON.parse(window.sessionStorage.self_c_and_a)}},{key:"GET_GENRENS",get:function(){return JSON.parse(window.sessionStorage.self_g)}},{key:"GET_AREA_IDS",get:function(){return JSON.parse(window.sessionStorage.self_a)}}]),e}();t.default=c},3:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(){var e=document.getElementById("offcanvas_open"),t=(document.getElementById("offcanvas_close"),document.body),n=document.getElementById("offcanvas");e.onclick=function(){n.classList.toggle("is-menu-open"),t.classList.toggle("is-menu-open")}}function a(){var e=document.getElementById("inner_body"),t="",n=document.getElementsByClassName("js_modal_overlay"),o=document.getElementsByClassName("js_modal_close"),i=document.getElementsByClassName("show_modal"),a=document.body;[].forEach.call(i,function(n){n.onclick=function(){t=document.getElementById(n.getAttribute("data-modal")),t.classList.toggle("active"),a.classList.toggle("is-open"),e.classList.toggle("blured")}}),[].forEach.call(n,function(n){n.onclick=function(){t.classList.toggle("active"),a.classList.toggle("is-open"),e.classList.toggle("blured")}}),[].forEach.call(o,function(n){n.onclick=function(){t.classList.toggle("active"),a.classList.toggle("is-open"),e.classList.toggle("blured")}}),window.onload=function(){var e=document.getElementsByClassName("js_modal_close_and_show");[].forEach.call(e,function(e){e.onclick=function(){t.classList.toggle("active"),t=document.getElementById(e.getAttribute("data-modal")),t.classList.toggle("active")}})}}function r(){var e=document.getElementsByClassName("area_level_1"),t=document.getElementsByClassName("area_level_2");document.getElementsByClassName("area_checked");[].forEach.call(e,function(e){e.onclick=function(){e.classList.toggle("active"),t=e.nextElementSibling,t.classList.toggle("is-open"),t.classList.contains("check-open")&&t.classList.remove("check-open")}})}function s(){var e=void 0,t=document.getElementsByClassName("search_form_age");[].forEach.call(t,function(t){for(e=18;e<100;e++){var n=document.createElement("option");n.value=e,n.innerHTML=e,t.appendChild(n)}})}function u(){return window.location.search.substring(1).split("&").map(function(e){return e.split("=")}).reduce(function(e,t){var n=(0,w.default)(t,2),o=n[0],i=n[1];return O.default.extend(e,(0,I.default)({},o,decodeURI(i)))},{})}function l(e){return e.toMoment().format("YYYY/MM/DD ddd")}function c(e){var t=(0,C.default)(e),n=(0,C.default)(e).startOf("day"),o=(0,C.default)().startOf("day"),i="M/DD H:mm";return n.isSame(o)&&(i="H:mm"),t.format(i)}function f(e,t){return e.toMoment().format(t)}function d(){var e={enableHighAccuracy:!1,timeout:15e3,maximumAge:5e3};return new S.default(function(t,n){navigator.geolocation.getCurrentPosition(function(e){var n=e.coords.latitude,o=e.coords.longitude;t({lon:n,lat:o,params:{params:{lon:n,lat:o,offset_distance:0}}})},function(e){var t={0:"原因不明のエラーが発生しました",1:"位置情報の取得が許可されませんでした",2:"電波状況などで位置情報が取得できませんでした",3:"位置情報の取得に時間がかかり過ぎてタイムアウトしました"};alert(t[e.code]),n(e||"ERROR")},e)})}function m(e,t){var n=e.split(",")[1],o=window.atob(n),i=new ArrayBuffer(o.length),a=new Uint8Array(i),r=void 0,s=void 0;for(r=0,s=o.length;r<s;r++)a[r]=o.charCodeAt(r);return new Blob([a],{type:t})}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e6,n=e.toDataURL("image/jpeg"),o=m(n);console.log(o.size);var i=o;if(t<=o.size){var a=t/o.size;n=e.toDataURL("image/jpeg",a),i=m(n),console.log(a),console.log(i.size)}return i}function h(e){return"http://maps.google.co.jp/maps?q="+e}function _(){var e=[],t=0,n="",o="";n=window.location.search.slice(1).split("&"),t=n.length;for(var i=0;i<t;i++)o=n[i].split("="),e[o[0]]=o[1];return e}function p(){return null!==navigator.userAgent.match(/\/iOS-app\/jp.mixmag$/)}function y(){return null!==navigator.userAgent.match(/\/android-app\/jp.mixmag$/)}function E(){return p()||y()}Object.defineProperty(t,"__esModule",{value:!0});var v=n(5),S=o(v),T=n(14),I=o(T),R=n(10),w=o(R);t.navigation=i,t.modal=a,t.accordion=r,t.searchNumberSelect=s,t.getURLQueryJSON=u,t.filterVueEventDate=l,t.filterVueTime=c,t.filterVueDateTime=f,t.getCurrentPosition=d,t.base64ToBlob=m,t.compressImage=g,t.makeGmapUrlByAddress=h,t.getQueryParameter=_,t.isiOSAPP=p,t.isAndroidAPP=y,t.isApp=E;var A=n(12),O=o(A),L=n(7),k=o(L),N=n(0),C=o(N);(0,k.default)()},536:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(66),a=o(i),r=n(15),s=o(r),u=n(3),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(u),c=n(65),f=o(c),d=n(77),m=o(d),g=void 0;window.onload=function(){g=h()};var h=function(){return new s.default({el:"#community-list-vue",delimiters:["${","}"],data:{isLoading:!1,isInitLoaded:!1,pageTitle:"",offset:0,communities:[],categoryId:0,params:[],communityName:""},created:function(){},mounted:function(){var e=l.getURLQueryJSON();"type"in e?(this.params=e,this.setResultByType()):location.href="/community/"},components:{InfiniteLoading:m.default},methods:{onInfinite:function(){this.isInitLoaded&&this.setResultByType()},setResultByType:function(){switch(this.params.type){case"venue":case"artist":case"join":this.sendRequestByType(),this.pageTitle=this.params.type;break;case"category":this.categoryId=this.params.id,this.pageTitle="カテゴリ",this.sendRequestByCategory();break;case"search":this.communityName=this.params.name,this.sendRequestByCommunityName(),this.pageTitle=this.communityName;break;default:location.href="/community/"}},emitInfiniteLoading:function(e){this.$refs.infiniteLoading.$emit("$InfiniteLoading:"+e)},sendRequestByType:function(){var e=this;f.default.GET_LIST_BY_TYPE(this.params.type,this.offset).then(function(t){var n;(n=e.communities).push.apply(n,(0,a.default)(t.list)),e.offset=t.offset,e.isInitLoaded=!0,e.emitInfiniteLoading("loaded"),0==t.next&&e.emitInfiniteLoading("complete")}).catch(function(t){e.emitInfiniteLoading("complete")})},sendRequestByCategory:function(){var e=this;f.default.GET_CATEGORY_COMMUNITIES(this.categoryId,this.offset).then(function(t){var n;(n=e.communities).push.apply(n,(0,a.default)(t.list)),e.offset=t.offset,e.isInitLoaded=!0,e.emitInfiniteLoading("loaded"),0==t.next&&e.emitInfiniteLoading("complete")}).catch(function(t){e.emitInfiniteLoading("complete")})},sendRequestByCommunityName:function(){var e=this;f.default.GET_SEARCH_COMMUNTY_NAME(this.communityName,this.offset).then(function(t){var n;(n=e.communities).push.apply(n,(0,a.default)(t.list)),e.offset=t.offset,e.isInitLoaded=!0,e.emitInfiniteLoading("loaded"),0==t.next&&e.emitInfiniteLoading("complete")}).catch(function(t){e.emitInfiniteLoading("complete")})},linkToDetail:function(e){return"/community/detail.html?id="+e}},computed:{}})}},6:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),a=o(i),r=n(9),s=o(r),u=n(16),l=o(u),c=n(1),f=o(c),d=n(2),m=o(d);n(18);var g=n(19),h=o(g),_=n(11),p=o(_),y=n(3),E=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(y),v=n(8),S=o(v),T=function(){function e(){var t=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15e3;(0,f.default)(this,e);var i={},r=location.pathname.startsWith("/friends/")||location.pathname.startsWith("/community/"),u="Bearer";r&&null===location.pathname.match(/registration/)&&!this.isCurrentPathEqualSignIn()&&(u+="Friend");var c=(0,p.default)("mag_token_front");c&&(i.Authorization=u+" "+c),i=(0,l.default)({},i,this.makeContentType()),this.showErrorAlert=n,this.ins=h.default.create({timeout:o,headers:i,onDownloadProgress:function(e){}}),this.ins.interceptors.response.use(function(e){return e.data},function(e){var n=0,o=void 0;return void 0!==e.response&&(n=e.response.status,o=e.response.data,console.log("error: "+n),console.log("data: "+(0,s.default)(o)),console.log("message: "+e.response.message)),401===n?(console.log("認証エラー"),window.confirm("Mixmag japanにログインしてすべての機能を体験しましょう！")&&(E.isApp()?S.default.AUTH_ERROR:I("/login/"))):void 0!==o&&o.errorCode>999?(console.log(o.message),alert(o.message)):403===n?r&&I("/friends/sign-in.html"):t.showErrorAlert&&(n>=500?(alert("サーバでエラーが発生しました"),console.log("サーバでエラーが発生しました")):(alert("通信に失敗しました"),console.log("通信に失敗しました"))),a.default.reject(e)})}return(0,m.default)(e,[{key:"makeContentType",value:function(){return{}}},{key:"isCurrentPathEqualSignIn",value:function(){return location.pathname.startsWith("/friends/sign-in.html")}}],[{key:"GET_TOKEN",get:function(){return(0,p.default)("mag_token_front")}}]),e}();t.default=T;var I=function(e){location.href=e}},65:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),a=o(i),r=n(22),s=o(r),u=n(161),l=o(u),c=n(1),f=o(c),d=n(2),m=o(d),g=n(6),h=o(g),_=n(20),p=(o(_),function(){function e(){(0,f.default)(this,e)}return(0,m.default)(e,null,[{key:"GET_LIST",value:function(){return(new h.default).ins.get(e.PREFIX)}},{key:"GET_LIST_BY_TYPE",value:function(t,n){return console.log(t),(new h.default).ins.get(e.PREFIX+"/types/"+t+"?offset="+n)}},{key:"GET_CATEGORIES",value:function(){return(new h.default).ins.get(""+e.CATEGORY_PREFIX)}},{key:"GET_CATEGORY_COMMUNITIES",value:function(t,n){return(new h.default).ins.get(e.PREFIX+"/categories/"+t+"?offset="+n)}},{key:"GET_SEARCH_COMMUNTY_NAME",value:function(t,n){return(new h.default).ins.get(e.PREFIX+"/search",{params:{name:t,offset:n}})}},{key:"GET_DETAIL",value:function(t){return(new h.default).ins.get(e.PREFIX+"/"+t)}},{key:"GET_SEARCH_MEMBERS",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=new h.default,a={since_date:o};return console.log(n),(0,l.default)(n).length>0&&(a=(0,s.default)({area_ids:n.areaIds,gender:n.gender,prefecture:n.birthplace,age_from:n.ageFrom,age_to:n.ageTo},a)),i.ins.get(e.PREFIX+"/"+t+"/members/search",{params:a})}},{key:"POST_JOIN",value:function(t){return(new h.default).ins.post(e.PREFIX+"/"+t+"/member/join")}},{key:"DELETE_JOIN",value:function(t){return(new h.default).ins.delete(e.PREFIX+"/"+t+"/member/join")}},{key:"GET_INITIAL_TOP",value:function(){return a.default.all([e.GET_LIST(),e.GET_CATEGORIES()])}},{key:"PREFIX",get:function(){return"/api/communities"}},{key:"CATEGORY_PREFIX",get:function(){return"/api/community_categories"}}]),e}());t.default=p},7:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),a=o(i),r=n(0),s=o(r),u=function(){String.prototype.format=function(e){var t=void 0;if("object"===(void 0===e?"undefined":(0,a.default)(e)))t=function(t,n){return e[n]};else{var n=arguments;t=function(e,t){return n[parseInt(t)]}}return this.replace(/\{(\w+)\}/g,t)},String.prototype.toMoment=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"YYYY-MM-DD HH:mm:ss";return(0,s.default)(this,e)},String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.lastIndexOf(e,t)===t}),String.prototype.endsWith||Object.defineProperty(String.prototype,"endsWith",{enumerable:!1,configurable:!1,writable:!1,value:function(e,t){return t=t||this.length,t-=e.length,this.lastIndexOf(e)===t}}),Date.prototype.reqFormat=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"YYYY-MM-DD HH:mm:ss";return(0,s.default)(this).format(e)},Array.prototype.isEmpty=function(){return 0===this.length},Array.prototype.last=function(){return this.isEmpty()?null:this[this.length-1]},Array.prototype.first=function(){return this.isEmpty()?null:this[0]}};t.default=u},8:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),a=o(i),r=n(2),s=o(r),u=function(){function e(){(0,a.default)(this,e)}return(0,s.default)(e,null,[{key:"PREFIX",get:function(){return"call-native://api/"}},{key:"AUTH_ERROR",get:function(){location.href=e.PREFIX+"authError"}},{key:"CLOSE_MODAL",get:function(){location.href=e.PREFIX+"closeModal"}},{key:"CLOSE_MODAL_IMMEDIATELY",get:function(){location.href=e.PREFIX+"closeModalImmediately"}},{key:"PATCH_DEVICE_TOKEN",get:function(){location.href=e.PREFIX+"patchDeviceToken"}}]),e}();t.default=u}},[536]);