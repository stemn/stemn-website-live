webpackJsonp([15,54],{"/AxA":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("9ZIC"),s=r(o);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"/f+K":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s,a=n("woOf"),d=r(a),i=n("Zx67"),u=r(i),_=n("Zrlr"),l=r(_),f=n("wxAW"),c=r(f),p=n("zwoO"),m=r(p),E=n("Pf15"),O=r(E),T=n("U7vG"),R=r(T),y=n("KUdC"),A=r(y),v=n("HW6M"),g=r(v),w=(s=o=function(e){function t(){return(0,l.default)(this,t),(0,m.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,O.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.width,n=e.className,r=e.style,o={width:t+"px"};return R.default.createElement("div",{className:(0,g.default)(A.default.placeholder,n),style:(0,d.default)({},o,r)}," ")}}]),t}(T.Component),o.defaultProps={width:200},s);t.default=w;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(w,"LoadingPlaceholder","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Loading/LoadingPlaceholder/LoadingPlaceholder.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"1cxV":function(e,t){e.exports={panel:"UserFollowing_panel-2WFhH",user:"UserFollowing_user-2WyON"}},"9ZIC":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s,a=n("Zx67"),d=r(a),i=n("Zrlr"),u=r(i),_=n("wxAW"),l=r(_),f=n("zwoO"),c=r(f),p=n("Pf15"),m=r(p),E=n("U7vG"),O=r(E),T=n("Eaae"),R=r(T),y=n("HW6M"),A=r(y),v=n("fzhJ"),g=r(v),w=n("vs4/"),C=r(w),h=n("GeCl"),b=r(h),L=n("LZKX"),D=r(L),H=n("tYm5"),U=r(H),j=n("m4co"),P=r(j),N=function(e){return"project"===e.entityType?{name:"projectRoute",params:{projectId:e._id}}:"task"===e.entityType?{name:"taskRoute",params:{taskId:e._id}}:"commit"===e.entityType?{name:"commitRoute",params:{commitId:e._id}}:"field"===e.entityType?{name:"fieldRoute",params:{fieldId:e._id}}:{name:"userRoute",params:{userId:e._id}}},M=(s=o=function(e){function t(){return(0,u.default)(this,t),(0,c.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.query,r=e.loading,o=e.className,s=e.nofollow,a=e.children,d=N(t);return r||!t._id?O.default.createElement(U.default,{className:(0,A.default)("layout-row layout-align-start-center",R.default.row,o)},O.default.createElement(C.default,{size:40,shape:"square",className:R.default.avatar}),O.default.createElement("div",{className:"flex"},O.default.createElement(D.default,{width:200,className:R.default.link}),O.default.createElement(D.default,{width:300,className:R.default.blurb}))):O.default.createElement("div",{className:(0,A.default)("layout-row layout-align-start-center",R.default.row,o)},O.default.createElement(C.default,{size:40,shape:"square",name:t.name,picture:t.picture,className:R.default.avatar}),O.default.createElement("div",{className:"flex"},O.default.createElement(b.default,{className:(0,A.default)(R.default.link,"link-primary"),name:d.name,params:d.params},O.default.createElement(g.default,{className:"text-ellipsis",text:t.name||"Untitled",query:n,hightlightClass:R.default.highlight})),O.default.createElement("div",{className:R.default.blurb+" text-ellipsis"},t.blurb)),s?null:O.default.createElement(P.default,{className:R.default.socialButton,type:"follow",entityType:t.entityType,entityId:t._id}),a)}}]),t}(E.Component),o.propTypes={data:E.PropTypes.object.isRequired,query:E.PropTypes.string,nofollow:E.PropTypes.bool,children:E.PropTypes.node},o.defaultProps={data:{}},s);t.default=M;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(M,"EntityRow","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/EntityRow/EntityRow.jsx"),__REACT_HOT_LOADER__.register(N,"getRouteNameAndParams","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/EntityRow/EntityRow.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Dc8Y:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("Zx67"),s=r(o),a=n("Zrlr"),d=r(a),i=n("wxAW"),u=r(i),_=n("zwoO"),l=r(_),f=n("Pf15"),c=r(f),p=n("U7vG"),m=r(p),E=n("eooA"),O=r(E),T=n("HW6M"),R=r(T),y=function(e){function t(){return(0,d.default)(this,t),(0,l.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className;return m.default.createElement("div",{className:(0,R.default)(O.default.animation,n)},t)}}]),t}(p.Component);t.default=y;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(y,"LoadingAnimation","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Loading/LoadingAnimation/LoadingAnimation.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Eaae:function(e,t){e.exports={link:"EntityRow_link-jTVsR",blurb:"EntityRow_blurb-33uJo",highlight:"EntityRow_highlight-1Ndy5",avatar:"EntityRow_avatar-1bTmy",socialButton:"EntityRow_socialButton-2jmPU"}},Ej9u:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("Dd8w"),s=r(o),a=n("U7vG"),d=r(a),i=n("aSqn"),u=r(i),_=function(e){return d.default.createElement(u.default,(0,s.default)({viewBox:"0 0 40 40"},e),d.default.createElement("g",null,d.default.createElement("path",{d:"m20 28.8l-10.3 6.2 2.7-11.7-9-7.9 11.9-1 4.7-11 4.7 11 11.9 1-9 7.9 2.7 11.7z"})))},l=_,f=l;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MdStar","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},F21s:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s,a,d,i,u=n("Dd8w"),_=r(u),l=n("+6Bu"),f=r(l),c=n("Zx67"),p=r(c),m=n("Zrlr"),E=r(m),O=n("wxAW"),T=r(O),R=n("zwoO"),y=r(R),A=n("Pf15"),v=r(A),g=n("U7vG"),w=r(g),C=n("4n+p"),h=n("YapR"),b=r(h),L=n("y+89"),D=n("/AxA"),H=r(D),U=function(e,t){var n=e.users,r=t.userId;return{user:n[r]}},j={getUser:L.getUser},P=[{hasChanged:"userId",onChange:function(e){e.getUser({userId:e.userId,size:"md"})}}],N=(o=(0,C.connect)(U,j),s=(0,b.default)(P),o(a=s((i=d=function(e){function t(){return(0,E.default)(this,t),(0,y.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,T.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=(0,f.default)(e,["user"]);return w.default.createElement(H.default,(0,_.default)({data:t.data,loading:t.loading},n))}}]),t}(g.Component),d.defaultProps={user:{}},a=i))||a)||a);t.default=N;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(N,"UserRowContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"),__REACT_HOT_LOADER__.register(U,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"),__REACT_HOT_LOADER__.register(j,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"),__REACT_HOT_LOADER__.register(P,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Ipzs:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("Dd8w"),s=r(o),a=n("U7vG"),d=r(a),i=n("aSqn"),u=r(i),_=function(e){return d.default.createElement(u.default,(0,s.default)({viewBox:"0 0 40 40"},e),d.default.createElement("g",null,d.default.createElement("path",{d:"m25.7 12.3l-7.7 7.7 7.7 7.7-2.3 2.3-10-10 10-10z"})))},l=_,f=l;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MdChevronLeft","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/chevron-left.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/chevron-left.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/chevron-left.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},JHWm:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.getUserFollowing=function(e){var t=e.userId,n=e.page,r=void 0===n?1:n,o=e.size;return{type:"USER_FOLLOWING/GET_FOLLOWING",http:!0,payload:{method:"GET",url:"/api/v1/users/"+t+"/following",params:{type:"user",size:o,page:r}},meta:{userId:t,page:r}}};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"getUserFollowing","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserFollowing/UserFollowing.actions.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},JoCH:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("s6Wy"),s=r(o);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},KUdC:function(e,t){e.exports={placeholder:"LoadingPlaceholder_placeholder-U9tJY"}},LZKX:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("/f+K"),s=r(o);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Nyhj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.remove=t.add=t.checkStatus=void 0;var r=n("DY/v"),o=t.checkStatus=function(e,t){return function(n,r){var o=r().auth.user._id;o&&n({type:"SOCIAL/GET_STATUS",httpPackage:{method:"GET",url:"/api/v1/social",staticParams:{childId:o,socialType:t},params:{parentIds:e}},meta:{entityId:e,type:t}})}},s=t.add=function(e){var t=e.entityId,n=e.type,o=e.number,s=e.numberModel;return function(e,a){e({type:"SOCIAL/ADD",auth:!0,http:!0,payload:{method:"PUT",url:"/api/v1/users/"+a().auth.user._id+"/"+n+"s/"+t},meta:{entityId:t,type:n}}),o&&s&&e(r.actions.change(s,o+1))}},a=t.remove=function(e){var t=e.entityId,n=e.type,o=e.number,s=e.numberModel;return function(e,a){e({type:"SOCIAL/REMOVE",auth:!0,http:!0,payload:{method:"DELETE",url:"/api/v1/users/"+a().auth.user._id+"/"+n+"s/"+t},meta:{entityId:t,type:n}}),o&&s&&e(r.actions.change(s,o-1))}};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"checkStatus","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/Social.actions.js"),__REACT_HOT_LOADER__.register(s,"add","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/Social.actions.js"),__REACT_HOT_LOADER__.register(a,"remove","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/Social.actions.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},QlVd:function(e,t){e.exports={primary:"rgb(68, 154, 211)",border1:"rgba(0, 0, 0, 0.1)",primaryLight1:"rgba(0, 152, 255, 0.08)",primaryLight2:"rgba(0, 152, 255, 0.12)",bg1:"rgba(0, 0, 0, 0.03)",button:"SocialButton_button-1emT4",main:"SocialButton_main-1nTG1",count:"SocialButton_count-2UovY"}},RMmn:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("4n+p"),s=n("h7W2"),a=r(s),d=n("Nyhj"),i=function(e,t){var n=e.social,r=t.entityId,o=t.type;return{status:n[o][r]||!1}},u={add:d.add,remove:d.remove,checkStatus:d.checkStatus},_=(0,o.connect)(i,u)(a.default),l=_;t.default=l;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.container.js"),__REACT_HOT_LOADER__.register(u,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.container.js"),__REACT_HOT_LOADER__.register(_,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.container.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},bDKF:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("Dd8w"),s=r(o),a=n("U7vG"),d=r(a),i=n("aSqn"),u=r(i),_=function(e){return d.default.createElement(u.default,(0,s.default)({viewBox:"0 0 40 40"},e),d.default.createElement("g",null,d.default.createElement("path",{d:"m20 25.7l6.3 3.8-1.7-7.2 5.6-4.8-7.4-0.6-2.8-6.7-2.8 6.7-7.4 0.6 5.6 4.8-1.6 7.2z m16.6-10.3l-9 7.9 2.7 11.7-10.3-6.2-10.3 6.2 2.7-11.7-9-7.9 11.9-1 4.7-11 4.7 11z"})))},l=_,f=l;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MdStarBorder","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star-border.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star-border.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star-border.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},e85t:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("F21s"),s=r(o);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},eooA:function(e,t){e.exports={animation:"LoadingAnimation_animation-4VpK7",pulse:"LoadingAnimation_pulse-1rSsH"}},fg6P:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("Dd8w"),s=r(o),a=n("U7vG"),d=r(a),i=n("aSqn"),u=r(i),_=function(e){return d.default.createElement(u.default,(0,s.default)({viewBox:"0 0 40 40"},e),d.default.createElement("g",null,d.default.createElement("path",{d:"m28.4 5q1.3 0 2.3 1t0.9 2.4v26.6l-11.6-5-11.6 5v-26.6q0-1.4 0.9-2.4t2.3-1h16.8z"})))},l=_,f=l;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MdBookmark","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},h7W2:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s,a=n("Dd8w"),d=r(a),i=n("+6Bu"),u=r(i),_=n("Zx67"),l=r(_),f=n("Zrlr"),c=r(f),p=n("wxAW"),m=r(p),E=n("zwoO"),O=r(E),T=n("Pf15"),R=r(T),y=n("U7vG"),A=r(y),v=n("HW6M"),g=r(v),w=n("QlVd"),C=r(w),h=n("Ej9u"),b=r(h),L=n("bDKF"),D=r(L),H=n("fg6P"),U=r(H),j=n("kSWO"),P=r(j),N=function(e,t){return"like"===e?t?A.default.createElement(b.default,null):A.default.createElement(D.default,null):"follow"===e?t?A.default.createElement(U.default,null):A.default.createElement(P.default,null):void 0},M=function(e,t){return"like"===e?t?"Starred":"Star":"follow"===e?t?"Following":"Follow":void 0},S=(s=o=function(e){function t(){var e,n,r,o;(0,c.default)(this,t);for(var s=arguments.length,a=Array(s),d=0;d<s;d++)a[d]=arguments[d];return n=r=(0,O.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(a))),r.componentWillMount=function(){var e;return(e=r).__componentWillMount__REACT_HOT_LOADER__.apply(e,arguments)},r.toggle=function(){var e;return(e=r).__toggle__REACT_HOT_LOADER__.apply(e,arguments)},o=n,(0,O.default)(r,o)}return(0,R.default)(t,e),(0,m.default)(t,[{key:"__componentWillMount__REACT_HOT_LOADER__",value:function(){var e=this.props,t=e.checkStatus,n=e.entityId,r=e.type;t(n,r)}},{key:"__toggle__REACT_HOT_LOADER__",value:function(){var e=this.props,t=e.status,n=e.type,r=e.remove,o=e.add,s=e.number,a=e.numberModel,d=e.entityId;t?r({entityId:d,type:n,number:s,numberModel:a}):o({entityId:d,type:n,number:s,numberModel:a})}},{key:"render",value:function(){var e=this.props,t=(e.add,e.checkStatus,e.className),n=(e.entityId,e.entityType,e.number),r=e.numberModel,o=(e.remove,e.status),s=e.type,a=(0,u.default)(e,["add","checkStatus","className","entityId","entityType","number","numberModel","remove","status","type"]);return A.default.createElement("div",(0,d.default)({className:(0,g.default)(C.default.button,t)},a),A.default.createElement("div",{className:(0,g.default)(C.default.main),onClick:this.toggle},N(s,o),M(s,o)),n&&r?A.default.createElement("div",{className:C.default.count},n):null)}}]),t}(y.Component),o.propTypes={checkStatus:y.PropTypes.func.isRequired,add:y.PropTypes.func.isRequired,remove:y.PropTypes.func.isRequired,entityId:y.PropTypes.string.isRequired,entityType:y.PropTypes.string.isRequired,number:y.PropTypes.number,numberModel:y.PropTypes.string,type:y.PropTypes.oneOf(["follow","like"]).isRequired,status:y.PropTypes.bool.isRequired},s);t.default=S;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(S,"SocialButton","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.jsx"),__REACT_HOT_LOADER__.register(N,"getIcon","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.jsx"),__REACT_HOT_LOADER__.register(M,"getText","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},kSWO:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("Dd8w"),s=r(o),a=n("U7vG"),d=r(a),i=n("aSqn"),u=r(i),_=function(e){return d.default.createElement(u.default,(0,s.default)({viewBox:"0 0 40 40"},e),d.default.createElement("g",null,d.default.createElement("path",{d:"m28.4 30v-21.6h-16.8v21.6l8.4-3.7z m0-25q1.3 0 2.3 1t0.9 2.4v26.6l-11.6-5-11.6 5v-26.6q0-1.4 0.9-2.4t2.3-1h16.8z"})))},l=_,f=l;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MdBookmarkOutline","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark-outline.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark-outline.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark-outline.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},lSz7:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s,a=n("woOf"),d=r(a),i=n("Zx67"),u=r(i),_=n("Zrlr"),l=r(_),f=n("wxAW"),c=r(f),p=n("zwoO"),m=r(p),E=n("Pf15"),O=r(E),T=n("U7vG"),R=r(T),y=n("HW6M"),A=(r(y),n("qeG2")),v=r(A),g=n("raO4"),w=r(g),C=n("Ipzs"),h=r(C),b=n("Zfgq"),L=(s=o=function(e){function t(){return(0,l.default)(this,t),(0,m.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,O.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.noMoreResults,n=e.page,r=e.query,o=e.path,s={pathname:o,query:(0,d.default)({},r,{page:parseInt(n)-1})},a={pathname:o,query:(0,d.default)({},r,{page:parseInt(n)+1})};return R.default.createElement("div",{className:"layout-row layout-align-end-center"},n>1?R.default.createElement(b.Link,{to:s,className:v.default.button+" layout-column layout-align-center-center"},R.default.createElement(h.default,{size:20})):null,R.default.createElement("div",{className:v.default.indicator+" layout-column layout-align-center-center"},"Page: ",n),t?null:R.default.createElement(b.Link,{to:a,className:v.default.button+" layout-column layout-align-center-center"},R.default.createElement(w.default,{size:20})))}}]),t}(T.Component),o.propTypes={page:T.PropTypes.number.isRequired,noMoreResults:T.PropTypes.bool.isRequired,path:T.PropTypes.string.isRequired,query:T.PropTypes.object},o.defaultProps={page:1,noMoreResults:!1},s);t.default=L;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(L,"Pagination","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Pagination/Pagination.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},m4co:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("RMmn"),s=r(o);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},n4OE:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("lSz7"),s=r(o);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},qeG2:function(e,t){e.exports={primary:"rgb(68, 154, 211)",bg1:"rgba(0, 0, 0, 0.03)",button:"Pagination_button-2Ny0e",indicator:"Pagination_indicator-2PBet"}},s6Wy:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s,a,d=n("Zx67"),i=r(d),u=n("Zrlr"),_=r(u),l=n("wxAW"),f=r(l),c=n("zwoO"),p=r(c),m=n("Pf15"),E=r(m),O=n("Q7hp"),T=r(O),R=n("U7vG"),y=r(R),A=n("4n+p"),v=n("YapR"),g=r(v),w=n("JHWm"),C=n("tcrP"),h=r(C),b=function(e,t){var n=t.params,r=t.location,o=30,s=n.stub,a=parseInt(r.query.page||1),d=(0,T.default)(e,"userFollowing."+s+"."+a);return{following:d,page:a,pageId:s+"-"+a,size:o,user:e.users[n.stub],userId:s}},L={getUserFollowing:w.getUserFollowing},D=[{hasChanged:"pageId",onChange:function(e){e.getUserFollowing({userId:e.userId,page:e.page,size:e.size})}}],H=(o=(0,A.connect)(b,L),s=(0,g.default)(D),o(a=s(a=function(e){function t(){return(0,_.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){return y.default.createElement(h.default,this.props)}}]),t}(R.Component))||a)||a);t.default=H;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(H,"UserFollowingContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowing/UserFollowing.container.js"),__REACT_HOT_LOADER__.register(b,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowing/UserFollowing.container.js"),__REACT_HOT_LOADER__.register(L,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowing/UserFollowing.container.js"),__REACT_HOT_LOADER__.register(D,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowing/UserFollowing.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},tYm5:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("Dc8Y"),s=r(o);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},tcrP:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("Zx67"),s=r(o),a=n("Zrlr"),d=r(a),i=n("wxAW"),u=r(i),_=n("zwoO"),l=r(_),f=n("Pf15"),c=r(f),p=n("U7vG"),m=r(p),E=n("1cxV"),O=r(E),T=n("HW6M"),R=(r(T),n("n4OE")),y=r(R),A=n("e85t"),v=r(A),g=function(e){function t(){return(0,d.default)(this,t),(0,l.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.following,r=e.page,o=e.size,s=e.location,a=n&&n.data&&n.data.length<o;return m.default.createElement("div",null,m.default.createElement("div",{className:"text-mini-caps"},"People who follow ",t.data.profile.firstname),m.default.createElement("br",null),m.default.createElement("div",{className:O.default.panel},n&&n.data?n.data.map(function(e){return m.default.createElement(v.default,{key:e,userId:e,className:O.default.user})}):null),m.default.createElement(y.default,{path:s.pathname,page:r,noMoreResults:a}))}}]),t}(p.Component);t.default=g;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(g,"UserFollowing","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowing/UserFollowing.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});