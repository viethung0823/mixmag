jsoneopack([25,74,90],{23:function(e,t,n){var o=n(4)(n(24),n(25),null,null,null);o.options.__file="/Users/harasho/Documents/git_projects/mmj/mixmag-front/public/src/assets/vue/common/VueAdsense.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] VueAdsense.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},24:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},props:{adClient:{type:String,required:!1,default:"ca-pub-5761639912716402"},adSlot:{type:String,required:!1},adFormat:{type:String,required:!1,default:"auto"},adStyle:{type:String,required:!1,default:"display: block"},isHidden:{type:Boolean,default:!0}},mounted:function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})},computed:{}}},25:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isHidden?e._e():n("div")},staticRenderFns:[]},e.exports.render._withStripped=!0},3:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){var e=document.getElementById("offcanvas_open"),t=(document.getElementById("offcanvas_close"),document.body),n=document.getElementById("offcanvas");e.onclick=function(){n.classList.toggle("is-menu-open"),t.classList.toggle("is-menu-open")}}function a(){var e=document.getElementById("inner_body"),t="",n=document.getElementsByClassName("js_modal_overlay"),o=document.getElementsByClassName("js_modal_close"),r=document.getElementsByClassName("show_modal"),a=document.body;[].forEach.call(r,function(n){n.onclick=function(){t=document.getElementById(n.getAttribute("data-modal")),t.classList.toggle("active"),a.classList.toggle("is-open"),e.classList.toggle("blured")}}),[].forEach.call(n,function(n){n.onclick=function(){t.classList.toggle("active"),a.classList.toggle("is-open"),e.classList.toggle("blured")}}),[].forEach.call(o,function(n){n.onclick=function(){t.classList.toggle("active"),a.classList.toggle("is-open"),e.classList.toggle("blured")}}),window.onload=function(){var e=document.getElementsByClassName("js_modal_close_and_show");[].forEach.call(e,function(e){e.onclick=function(){t.classList.toggle("active"),t=document.getElementById(e.getAttribute("data-modal")),t.classList.toggle("active")}})}}function i(){var e=document.getElementsByClassName("area_level_1"),t=document.getElementsByClassName("area_level_2");document.getElementsByClassName("area_checked");[].forEach.call(e,function(e){e.onclick=function(){e.classList.toggle("active"),t=e.nextElementSibling,t.classList.toggle("is-open"),t.classList.contains("check-open")&&t.classList.remove("check-open")}})}function s(){var e=void 0,t=document.getElementsByClassName("search_form_age");[].forEach.call(t,function(t){for(e=18;e<100;e++){var n=document.createElement("option");n.value=e,n.innerHTML=e,t.appendChild(n)}})}function l(){return window.location.search.substring(1).split("&").map(function(e){return e.split("=")}).reduce(function(e,t){var n=(0,O.default)(t,2),o=n[0],r=n[1];return w.default.extend(e,(0,b.default)({},o,decodeURI(r)))},{})}function u(e){return e.toMoment().format("YYYY/MM/DD ddd")}function c(e){var t=(0,M.default)(e),n=(0,M.default)(e).startOf("day"),o=(0,M.default)().startOf("day"),r="M/DD H:mm";return n.isSame(o)&&(r="H:mm"),t.format(r)}function d(e,t){return e.toMoment().format(t)}function f(){var e={enableHighAccuracy:!1,timeout:15e3,maximumAge:5e3};return new S.default(function(t,n){navigator.geolocation.getCurrentPosition(function(e){var n=e.coords.latitude,o=e.coords.longitude;t({lon:n,lat:o,params:{params:{lon:n,lat:o,offset_distance:0}}})},function(e){var t={0:"原因不明のエラーが発生しました",1:"位置情報の取得が許可されませんでした",2:"電波状況などで位置情報が取得できませんでした",3:"位置情報の取得に時間がかかり過ぎてタイムアウトしました"};alert(t[e.code]),n(e||"ERROR")},e)})}function g(e,t){var n=e.split(",")[1],o=window.atob(n),r=new ArrayBuffer(o.length),a=new Uint8Array(r),i=void 0,s=void 0;for(i=0,s=o.length;i<s;i++)a[i]=o.charCodeAt(i);return new Blob([a],{type:t})}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e6,n=e.toDataURL("image/jpeg"),o=g(n);console.log(o.size);var r=o;if(t<=o.size){var a=t/o.size;n=e.toDataURL("image/jpeg",a),r=g(n),console.log(a),console.log(r.size)}return r}function p(e){return"http://maps.google.co.jp/maps?q="+e}function _(){var e=[],t=0,n="",o="";n=window.location.search.slice(1).split("&"),t=n.length;for(var r=0;r<t;r++)o=n[r].split("="),e[o[0]]=o[1];return e}function v(){return null!==navigator.userAgent.match(/\/iOS-app\/jp.mixmag$/)}function h(){return null!==navigator.userAgent.match(/\/android-app\/jp.mixmag$/)}function y(){return v()||h()}Object.defineProperty(t,"__esModule",{value:!0});var E=n(5),S=o(E),T=n(14),b=o(T),C=n(10),O=o(C);t.navigation=r,t.modal=a,t.accordion=i,t.searchNumberSelect=s,t.getURLQueryJSON=l,t.filterVueEventDate=u,t.filterVueTime=c,t.filterVueDateTime=d,t.getCurrentPosition=f,t.base64ToBlob=g,t.compressImage=m,t.makeGmapUrlByAddress=p,t.getQueryParameter=_,t.isiOSAPP=v,t.isAndroidAPP=h,t.isApp=y;var A=n(12),w=o(A),P=n(7),L=o(P),k=n(0),M=o(k);(0,L.default)()},577:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(66),a=o(r),i=n(15),s=o(i),l=n(3),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(l),c=n(12),d=o(c),f=n(82),g=o(f),m=n(23),p=o(m),_=n(69),v=o(_),h=n(77),y=o(h),E=void 0;window.onload=function(){E=S()};var S=function(){return new s.default({el:"#list-article",delimiters:["${","}"],data:{bottomContent:!1,currentCategory:"",currentSubCategory:"",articles:[],subCategories:[],currentPage:1},created:function(){var e=this,t=u.getQueryParameter();console.log(t),t.category||(location.href="/"),this.currentCategory=t.category,v.default.GET_POSTS_LIST(t.category,t.sub?t.sub:"").then(function(n){(0,d.default)("title").text(e.currentCategory+" - Mixmag Japan"),e.subCategories=n[0],e.articles=n[1].posts;var o=e.subCategories.filter(function(e,n){if(e.slug==t.sub)return!0});o.length>0&&(e.currentSubCategory=o[0].name)})},components:{ArticleCard:g.default,InfiniteLoading:y.default,VueAdsense:p.default},methods:{toggleContent:function(){this.bottomContent?this.bottomContent=!1:this.bottomContent=!0},linkToCategoryList:function(e,t){return"/article/list.html?category="+e+"&sub="+t},onInfinite:function(){var e=this;v.default.GET_POSTS_MORE(this.currentPage,""==this.currentSubCategory?this.currentCategory:this.currentSubCategory).then(function(t){if(t.posts&&e.articles.length>4){var n;(n=e.articles).push.apply(n,(0,a.default)(t.posts)),e.$refs.infiniteLoading.$emit("$InfiniteLoading:loaded"),t.posts.length<5&&e.$refs.infiniteLoading.$emit("$InfiniteLoading:complete")}else e.$refs.infiniteLoading.$emit("$InfiniteLoading:complete");e.currentPage++})}},computed:{isApp:function(){return u.isApp()||window.screen.width<641}}})}},6:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),a=o(r),i=n(9),s=o(i),l=n(16),u=o(l),c=n(1),d=o(c),f=n(2),g=o(f);n(18);var m=n(19),p=o(m),_=n(11),v=o(_),h=n(3),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(h),E=n(8),S=o(E),T=function(){function e(){var t=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15e3;(0,d.default)(this,e);var r={},i=location.pathname.startsWith("/friends/")||location.pathname.startsWith("/community/"),l="Bearer";i&&null===location.pathname.match(/registration/)&&!this.isCurrentPathEqualSignIn()&&(l+="Friend");var c=(0,v.default)("mag_token_front");c&&(r.Authorization=l+" "+c),r=(0,u.default)({},r,this.makeContentType()),this.showErrorAlert=n,this.ins=p.default.create({timeout:o,headers:r,onDownloadProgress:function(e){}}),this.ins.interceptors.response.use(function(e){return e.data},function(e){var n=0,o=void 0;return void 0!==e.response&&(n=e.response.status,o=e.response.data,console.log("error: "+n),console.log("data: "+(0,s.default)(o)),console.log("message: "+e.response.message)),401===n?(console.log("認証エラー"),window.confirm("Mixmag japanにログインしてすべての機能を体験しましょう！")&&(y.isApp()?S.default.AUTH_ERROR:b("/login/"))):void 0!==o&&o.errorCode>999?(console.log(o.message),alert(o.message)):403===n?i&&b("/friends/sign-in.html"):t.showErrorAlert&&(n>=500?(alert("サーバでエラーが発生しました"),console.log("サーバでエラーが発生しました")):(alert("通信に失敗しました"),console.log("通信に失敗しました"))),a.default.reject(e)})}return(0,g.default)(e,[{key:"makeContentType",value:function(){return{}}},{key:"isCurrentPathEqualSignIn",value:function(){return location.pathname.startsWith("/friends/sign-in.html")}}],[{key:"GET_TOKEN",get:function(){return(0,v.default)("mag_token_front")}}]),e}();t.default=T;var b=function(e){location.href=e}},69:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),a=o(r),i=n(1),s=o(i),l=n(2),u=o(l),c=n(6),d=o(c),f=function(){function e(){(0,s.default)(this,e)}return(0,u.default)(e,null,[{key:"GET_SUBCATEGORY",value:function(t){return(new d.default).ins.get(e.BASE_URL+"categories?parent="+t)}},{key:"GET_POSTS",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=new d.default(o);return n>1?r.ins.get(e.BASE_URL+"posts/"+n+"?per_page="+t):r.ins.get(e.BASE_URL+"posts?per_page="+t)}},{key:"GET_PICKUP_POSTS",value:function(){return new d.default(!1).ins.get(e.BASE_URL+"posts-pickup")}},{key:"GET_DETAIL",value:function(t){return new d.default(!1).ins.get(e.BASE_URL+"posts-detail?id="+t)}},{key:"GET_POSTS_CATEGORY",value:function(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=new d.default(!1);return o>1?r.ins.get(e.BASE_URL+"posts/"+o+"?category="+n+"&per_page="+t):r.ins.get(e.BASE_URL+"posts?category="+n+"&per_page="+t)}},{key:"GET_POSTS_TAG",value:function(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;console.log(n);var r=new d.default;return o>1?(o++,r.ins.get(e.BASE_URL+"posts/"+o+"?tag="+n+"&per_page="+t)):r.ins.get(e.BASE_URL+"posts?tag="+n+"&per_page="+t)}},{key:"GET_POSTS_INDEX",value:function(){return a.default.all([e.GET_POSTS(5),e.GET_POSTS_CATEGORY(4,"video"),e.GET_POSTS(5,2),e.GET_PICKUP_POSTS()])}},{key:"GET_POSTS_MORE",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return""===n?e.GET_POSTS(5,t+1,!0):e.GET_POSTS_CATEGORY(5,n,t+1)}},{key:"GET_POSTS_DETAIL",value:function(t,n){return a.default.all([e.GET_DETAIL(t),e.GET_POSTS_CATEGORY(4,n)])}},{key:"GET_POSTS_LIST",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a.default.all([e.GET_SUBCATEGORY(t),e.GET_POSTS_CATEGORY(5,""===n?t:n)])}},{key:"BASE_URL",get:function(){return"https://www.mixmag.jp/wp-api/"}}]),e}();t.default=f},7:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(13),a=o(r),i=n(0),s=o(i),l=function(){String.prototype.format=function(e){var t=void 0;if("object"===(void 0===e?"undefined":(0,a.default)(e)))t=function(t,n){return e[n]};else{var n=arguments;t=function(e,t){return n[parseInt(t)]}}return this.replace(/\{(\w+)\}/g,t)},String.prototype.toMoment=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"YYYY-MM-DD HH:mm:ss";return(0,s.default)(this,e)},String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.lastIndexOf(e,t)===t}),String.prototype.endsWith||Object.defineProperty(String.prototype,"endsWith",{enumerable:!1,configurable:!1,writable:!1,value:function(e,t){return t=t||this.length,t-=e.length,this.lastIndexOf(e)===t}}),Date.prototype.reqFormat=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"YYYY-MM-DD HH:mm:ss";return(0,s.default)(this).format(e)},Array.prototype.isEmpty=function(){return 0===this.length},Array.prototype.last=function(){return this.isEmpty()?null:this[this.length-1]},Array.prototype.first=function(){return this.isEmpty()?null:this[0]}};t.default=l},8:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=o(r),i=n(2),s=o(i),l=function(){function e(){(0,a.default)(this,e)}return(0,s.default)(e,null,[{key:"PREFIX",get:function(){return"call-native://api/"}},{key:"AUTH_ERROR",get:function(){location.href=e.PREFIX+"authError"}},{key:"CLOSE_MODAL",get:function(){location.href=e.PREFIX+"closeModal"}},{key:"CLOSE_MODAL_IMMEDIATELY",get:function(){location.href=e.PREFIX+"closeModalImmediately"}},{key:"PATCH_DEVICE_TOKEN",get:function(){location.href=e.PREFIX+"patchDeviceToken"}}]),e}();t.default=l},82:function(e,t,n){var o=n(4)(n(83),n(84),null,null,null);o.options.__file="/Users/harasho/Documents/git_projects/mmj/mixmag-front/public/src/assets/vue/common/ArticleCard.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] ArticleCard.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},83:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"article-card",data:function(){return{firstClass:"small-12",defaultClass:"small-6 medium-12"}},props:{state:{},article:{},isvideo:Boolean,isfirst:Boolean,hascaption:Boolean,isnews:Boolean},computed:{computeImageCSS:function(){return{"background-image":"url("+this.article.thumbnail+")"}}},methods:{linkToYoutube:function(e){return"https://www.youtube.com/embed/"+e},linkToDetail:function(e){return"/article/detail.html?id="+e}}}},84:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"article_card",class:{first_card:e.isfirst,video_card:e.isvideo,news_card:e.isnews}},[e.isvideo?[n("figure",{staticClass:"article_card--figure"},[n("div",{staticClass:"youtube"},[n("iframe",{attrs:{src:e.linkToYoutube(e.article.youtube),frameborder:"0",allowfullscreen:""}})]),e._v(" "),e.hascaption?[n("strong",{staticClass:"article_card--caption"},[e._v(e._s(e.article.category))])]:e._e()],2),e._v(" "),n("section",{staticClass:"article_card--main"},[n("h2",{staticClass:"article_card--title"},[e._v(e._s(e.article.title))]),e._v(" "),n("p",{staticClass:"article_card--content",domProps:{innerHTML:e._s(e.article.headlign)}})])]:[n("a",{attrs:{href:e.linkToDetail(e.article.id),title:e.article.alt}},[n("figure",{staticClass:"article_card--figure"},[n("span",{staticClass:"thumbnail_block thumbnail_block--medium",style:e.computeImageCSS}),e._v(" "),e.hascaption?[n("strong",{staticClass:"article_card--caption"},[e._v(e._s(e.article.category))])]:e._e()],2),e._v(" "),n("section",{staticClass:"article_card--main"},[n("h2",{staticClass:"article_card--title trimmed_article trimmed_article--2"},[e._v(e._s(e.article.title))]),e._v(" "),n("p",{staticClass:"article_card--content trimmed_article trimmed_article--3",domProps:{innerHTML:e._s(e.article.headlign)}})])])]],2)},staticRenderFns:[]},e.exports.render._withStripped=!0}},[577]);