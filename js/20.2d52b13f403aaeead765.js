webpackJsonp([20,54],{"/AxA":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("9ZIC"),o=s(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"/f+K":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,d=n("woOf"),i=s(d),a=n("Zx67"),u=s(a),_=n("Zrlr"),l=s(_),f=n("wxAW"),c=s(f),m=n("zwoO"),p=s(m),E=n("Pf15"),T=s(E),O=n("U7vG"),R=s(O),A=n("KUdC"),y=s(A),v=n("HW6M"),C=s(v),g=(o=r=function(e){function t(){return(0,l.default)(this,t),(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,T.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.width,n=e.className,s=e.style,r={width:t+"px"};return R.default.createElement("div",{className:(0,C.default)(y.default.placeholder,n),style:(0,i.default)({},r,s)}," ")}}]),t}(O.Component),r.defaultProps={width:200},o);t.default=g;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(g,"LoadingPlaceholder","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Loading/LoadingPlaceholder/LoadingPlaceholder.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"9ZIC":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,d=n("Zx67"),i=s(d),a=n("Zrlr"),u=s(a),_=n("wxAW"),l=s(_),f=n("zwoO"),c=s(f),m=n("Pf15"),p=s(m),E=n("U7vG"),T=s(E),O=n("Eaae"),R=s(O),A=n("HW6M"),y=s(A),v=n("fzhJ"),C=s(v),g=n("vs4/"),w=s(g),h=n("GeCl"),b=s(h),j=n("LZKX"),L=s(j),D=n("tYm5"),H=s(D),P=n("m4co"),S=s(P),N=function(e){return"project"===e.entityType?{name:"projectRoute",params:{projectId:e._id}}:"task"===e.entityType?{name:"taskRoute",params:{taskId:e._id}}:"commit"===e.entityType?{name:"commitRoute",params:{commitId:e._id}}:"field"===e.entityType?{name:"fieldRoute",params:{fieldId:e._id}}:{name:"userRoute",params:{userId:e._id}}},U=(o=r=function(e){function t(){return(0,u.default)(this,t),(0,c.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.query,s=e.loading,r=e.className,o=e.nofollow,d=e.children,i=N(t);return s||!t._id?T.default.createElement(H.default,{className:(0,y.default)("layout-row layout-align-start-center",R.default.row,r)},T.default.createElement(w.default,{size:40,shape:"square",className:R.default.avatar}),T.default.createElement("div",{className:"flex"},T.default.createElement(L.default,{width:200,className:R.default.link}),T.default.createElement(L.default,{width:300,className:R.default.blurb}))):T.default.createElement("div",{className:(0,y.default)("layout-row layout-align-start-center",R.default.row,r)},T.default.createElement(w.default,{size:40,shape:"square",name:t.name,picture:t.picture,className:R.default.avatar}),T.default.createElement("div",{className:"flex"},T.default.createElement(b.default,{className:(0,y.default)(R.default.link,"link-primary"),name:i.name,params:i.params},T.default.createElement(C.default,{className:"text-ellipsis",text:t.name||"Untitled",query:n,hightlightClass:R.default.highlight})),T.default.createElement("div",{className:R.default.blurb+" text-ellipsis"},t.blurb)),o?null:T.default.createElement(S.default,{className:R.default.socialButton,type:"follow",entityType:t.entityType,entityId:t._id}),d)}}]),t}(E.Component),r.propTypes={data:E.PropTypes.object.isRequired,query:E.PropTypes.string,nofollow:E.PropTypes.bool,children:E.PropTypes.node},r.defaultProps={data:{}},o);t.default=U;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(U,"EntityRow","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/EntityRow/EntityRow.jsx"),__REACT_HOT_LOADER__.register(N,"getRouteNameAndParams","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/EntityRow/EntityRow.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Dc8Y:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("Zx67"),o=s(r),d=n("Zrlr"),i=s(d),a=n("wxAW"),u=s(a),_=n("zwoO"),l=s(_),f=n("Pf15"),c=s(f),m=n("U7vG"),p=s(m),E=n("eooA"),T=s(E),O=n("HW6M"),R=s(O),A=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className;return p.default.createElement("div",{className:(0,R.default)(T.default.animation,n)},t)}}]),t}(m.Component);t.default=A;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(A,"LoadingAnimation","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Loading/LoadingAnimation/LoadingAnimation.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Eaae:function(e,t){e.exports={link:"EntityRow_link-jTVsR",blurb:"EntityRow_blurb-33uJo",highlight:"EntityRow_highlight-1Ndy5",avatar:"EntityRow_avatar-1bTmy",socialButton:"EntityRow_socialButton-2jmPU"}},Ej9u:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),o=s(r),d=n("U7vG"),i=s(d),a=n("aSqn"),u=s(a),_=function(e){return i.default.createElement(u.default,(0,o.default)({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m20 28.8l-10.3 6.2 2.7-11.7-9-7.9 11.9-1 4.7-11 4.7 11 11.9 1-9 7.9 2.7 11.7z"})))},l=_,f=l;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MdStar","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},KUdC:function(e,t){e.exports={placeholder:"LoadingPlaceholder_placeholder-U9tJY"}},LHYH:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),o=s(r),d=n("U7vG"),i=s(d),a=n("aSqn"),u=s(a),_=function(e){return i.default.createElement(u.default,(0,o.default)({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m20 25.9c3.2 0 5.9-2.7 5.9-5.9s-2.7-5.9-5.9-5.9-5.9 2.7-5.9 5.9 2.7 5.9 5.9 5.9z m12.4-4.3l3.5 2.8c0.4 0.2 0.4 0.7 0.2 1.1l-3.4 5.8c-0.2 0.3-0.6 0.4-1 0.3l-4.1-1.7c-0.9 0.7-1.8 1.3-2.8 1.7l-0.7 4.3c0 0.4-0.4 0.7-0.7 0.7h-6.8c-0.4 0-0.7-0.3-0.7-0.7l-0.7-4.3c-1-0.4-1.9-1-2.8-1.7l-4.1 1.7c-0.4 0.1-0.8 0-1-0.3l-3.4-5.8c-0.2-0.4-0.2-0.9 0.2-1.1l3.5-2.8c-0.1-0.5-0.1-1.1-0.1-1.6s0-1.1 0.1-1.6l-3.5-2.8c-0.4-0.2-0.4-0.7-0.2-1.1l3.4-5.7c0.2-0.4 0.6-0.5 1-0.4l4.1 1.7c0.9-0.6 1.8-1.3 2.8-1.7l0.7-4.3c0-0.4 0.3-0.7 0.7-0.7h6.8c0.3 0 0.7 0.3 0.7 0.7l0.7 4.3c1 0.4 1.9 1 2.8 1.7l4.1-1.7c0.4-0.1 0.8 0 1 0.4l3.4 5.7c0.2 0.4 0.2 0.9-0.2 1.1l-3.5 2.8c0.1 0.5 0.1 1.1 0.1 1.6s0 1.1-0.1 1.6z"})))},l=_,f=l;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MdSettings","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/settings.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/settings.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/settings.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},LZKX:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("/f+K"),o=s(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Nyhj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.remove=t.add=t.checkStatus=void 0;var s=n("DY/v"),r=t.checkStatus=function(e,t){return function(n,s){var r=s().auth.user._id;r&&n({type:"SOCIAL/GET_STATUS",httpPackage:{method:"GET",url:"/api/v1/social",staticParams:{childId:r,socialType:t},params:{parentIds:e}},meta:{entityId:e,type:t}})}},o=t.add=function(e){var t=e.entityId,n=e.type,r=e.number,o=e.numberModel;return function(e,d){e({type:"SOCIAL/ADD",auth:!0,http:!0,payload:{method:"PUT",url:"/api/v1/users/"+d().auth.user._id+"/"+n+"s/"+t},meta:{entityId:t,type:n}}),r&&o&&e(s.actions.change(o,r+1))}},d=t.remove=function(e){var t=e.entityId,n=e.type,r=e.number,o=e.numberModel;return function(e,d){e({type:"SOCIAL/REMOVE",auth:!0,http:!0,payload:{method:"DELETE",url:"/api/v1/users/"+d().auth.user._id+"/"+n+"s/"+t},meta:{entityId:t,type:n}}),r&&o&&e(s.actions.change(o,r-1))}};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"checkStatus","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/Social.actions.js"),__REACT_HOT_LOADER__.register(o,"add","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/Social.actions.js"),__REACT_HOT_LOADER__.register(d,"remove","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/Social.actions.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},OhZk:function(e,t){e.exports={project:"SettingsProjects_project-2fjnc"}},QlVd:function(e,t){e.exports={primary:"rgb(68, 154, 211)",border1:"rgba(0, 0, 0, 0.1)",primaryLight1:"rgba(0, 152, 255, 0.08)",primaryLight2:"rgba(0, 152, 255, 0.12)",bg1:"rgba(0, 0, 0, 0.03)",button:"SocialButton_button-1emT4",main:"SocialButton_main-1nTG1",count:"SocialButton_count-2UovY"}},RMmn:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("4n+p"),o=n("h7W2"),d=s(o),i=n("Nyhj"),a=function(e,t){var n=e.social,s=t.entityId,r=t.type;return{status:n[r][s]||!1}},u={add:i.add,remove:i.remove,checkStatus:i.checkStatus},_=(0,r.connect)(a,u)(d.default),l=_;t.default=l;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.container.js"),__REACT_HOT_LOADER__.register(u,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.container.js"),__REACT_HOT_LOADER__.register(_,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.container.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Vr71:function(e,t){e.exports={border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)",root:"styles_root-2U4JT"}},bDKF:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),o=s(r),d=n("U7vG"),i=s(d),a=n("aSqn"),u=s(a),_=function(e){return i.default.createElement(u.default,(0,o.default)({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m20 25.7l6.3 3.8-1.7-7.2 5.6-4.8-7.4-0.6-2.8-6.7-2.8 6.7-7.4 0.6 5.6 4.8-1.6 7.2z m16.6-10.3l-9 7.9 2.7 11.7-10.3-6.2-10.3 6.2 2.7-11.7-9-7.9 11.9-1 4.7-11 4.7 11z"})))},l=_,f=l;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MdStarBorder","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star-border.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star-border.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star-border.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},eooA:function(e,t){e.exports={animation:"LoadingAnimation_animation-4VpK7",pulse:"LoadingAnimation_pulse-1rSsH"}},fg6P:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),o=s(r),d=n("U7vG"),i=s(d),a=n("aSqn"),u=s(a),_=function(e){return i.default.createElement(u.default,(0,o.default)({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m28.4 5q1.3 0 2.3 1t0.9 2.4v26.6l-11.6-5-11.6 5v-26.6q0-1.4 0.9-2.4t2.3-1h16.8z"})))},l=_,f=l;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MdBookmark","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},h7W2:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,d=n("Dd8w"),i=s(d),a=n("+6Bu"),u=s(a),_=n("Zx67"),l=s(_),f=n("Zrlr"),c=s(f),m=n("wxAW"),p=s(m),E=n("zwoO"),T=s(E),O=n("Pf15"),R=s(O),A=n("U7vG"),y=s(A),v=n("HW6M"),C=s(v),g=n("QlVd"),w=s(g),h=n("Ej9u"),b=s(h),j=n("bDKF"),L=s(j),D=n("fg6P"),H=s(D),P=n("kSWO"),S=s(P),N=function(e,t){return"like"===e?t?y.default.createElement(b.default,null):y.default.createElement(L.default,null):"follow"===e?t?y.default.createElement(H.default,null):y.default.createElement(S.default,null):void 0},U=function(e,t){return"like"===e?t?"Starred":"Star":"follow"===e?t?"Following":"Follow":void 0},M=(o=r=function(e){function t(){var e,n,s,r;(0,c.default)(this,t);for(var o=arguments.length,d=Array(o),i=0;i<o;i++)d[i]=arguments[i];return n=s=(0,T.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(d))),s.componentWillMount=function(){var e;return(e=s).__componentWillMount__REACT_HOT_LOADER__.apply(e,arguments)},s.toggle=function(){var e;return(e=s).__toggle__REACT_HOT_LOADER__.apply(e,arguments)},r=n,(0,T.default)(s,r)}return(0,R.default)(t,e),(0,p.default)(t,[{key:"__componentWillMount__REACT_HOT_LOADER__",value:function(){var e=this.props,t=e.checkStatus,n=e.entityId,s=e.type;t(n,s)}},{key:"__toggle__REACT_HOT_LOADER__",value:function(){var e=this.props,t=e.status,n=e.type,s=e.remove,r=e.add,o=e.number,d=e.numberModel,i=e.entityId;t?s({entityId:i,type:n,number:o,numberModel:d}):r({entityId:i,type:n,number:o,numberModel:d})}},{key:"render",value:function(){var e=this.props,t=(e.add,e.checkStatus,e.className),n=(e.entityId,e.entityType,e.number),s=e.numberModel,r=(e.remove,e.status),o=e.type,d=(0,u.default)(e,["add","checkStatus","className","entityId","entityType","number","numberModel","remove","status","type"]);return y.default.createElement("div",(0,i.default)({className:(0,C.default)(w.default.button,t)},d),y.default.createElement("div",{className:(0,C.default)(w.default.main),onClick:this.toggle},N(o,r),U(o,r)),n&&s?y.default.createElement("div",{className:w.default.count},n):null)}}]),t}(A.Component),r.propTypes={checkStatus:A.PropTypes.func.isRequired,add:A.PropTypes.func.isRequired,remove:A.PropTypes.func.isRequired,entityId:A.PropTypes.string.isRequired,entityType:A.PropTypes.string.isRequired,number:A.PropTypes.number,numberModel:A.PropTypes.string,type:A.PropTypes.oneOf(["follow","like"]).isRequired,status:A.PropTypes.bool.isRequired},o);t.default=M;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(M,"SocialButton","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.jsx"),__REACT_HOT_LOADER__.register(N,"getIcon","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.jsx"),__REACT_HOT_LOADER__.register(U,"getText","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},kSWO:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),o=s(r),d=n("U7vG"),i=s(d),a=n("aSqn"),u=s(a),_=function(e){return i.default.createElement(u.default,(0,o.default)({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m28.4 30v-21.6h-16.8v21.6l8.4-3.7z m0-25q1.3 0 2.3 1t0.9 2.4v26.6l-11.6-5-11.6 5v-26.6q0-1.4 0.9-2.4t2.3-1h16.8z"})))},l=_,f=l;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MdBookmarkOutline","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark-outline.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark-outline.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark-outline.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},kjWv:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Zx67"),o=s(r),d=n("Zrlr"),i=s(d),a=n("wxAW"),u=s(a),_=n("zwoO"),l=s(_),f=n("Pf15"),c=s(f),m=n("Q7hp"),p=s(m),E=n("U7vG"),T=s(E),O=n("ycY4"),R=s(O),A=n("/AxA"),y=s(A),v=n("D2fa"),C=s(v),g=n("LHYH"),w=s(g),h=n("OhZk"),b=s(h),j=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.projects;return T.default.createElement("div",null,T.default.createElement(R.default,{style:{padding:"0px"}},(0,p.default)(e,"data",[]).map(function(e){return T.default.createElement(y.default,{data:e,key:e._id,nofollow:!0,className:b.default.project},T.default.createElement(C.default,{name:"projectSettingsRoute",params:{projectId:e._id},style:{marginLeft:"20px"}},T.default.createElement(w.default,{size:20})))})))}}]),t}(E.Component),L=j,D=L;t.default=D;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(j,"SettingsProjects","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsProjects/SettingsProjects.js"),__REACT_HOT_LOADER__.register(L,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsProjects/SettingsProjects.js"),__REACT_HOT_LOADER__.register(D,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsProjects/SettingsProjects.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},m4co:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("RMmn"),o=s(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},tYm5:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("Dc8Y"),o=s(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},wTM9:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("yBdS"),o=s(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},yBdS:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,d,i=n("Zx67"),a=s(i),u=n("Zrlr"),_=s(u),l=n("wxAW"),f=s(l),c=n("zwoO"),m=s(c),p=n("Pf15"),E=s(p),T=n("U7vG"),O=s(T),R=n("4n+p"),A=n("YapR"),y=s(A),v=n("N31G"),C=n("kjWv"),g=s(C),w=function(e){var t=e.auth,n=e.projects;return{currentUser:t.user,projects:n.userProjects[t.user._id]||{}}},h={getUserProjects:v.getUserProjects},b=[{hasChanged:"currentUser._id",onChange:function(e){e.getUserProjects({userId:e.currentUser._id})}}],j=(r=(0,R.connect)(w,h),o=(0,y.default)(b),r(d=o(d=function(e){function t(){return(0,_.default)(this,t),(0,m.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){return O.default.createElement(g.default,this.props)}}]),t}(T.Component))||d)||d);t.default=j;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(j,"SettingsProjectsContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsProjects/SettingsProjects.container.js"),__REACT_HOT_LOADER__.register(w,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsProjects/SettingsProjects.container.js"),__REACT_HOT_LOADER__.register(h,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsProjects/SettingsProjects.container.js"),__REACT_HOT_LOADER__.register(b,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsProjects/SettingsProjects.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},ycY4:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Vr71"),o=s(r),d=n("LVXM"),i=s(d),a=(0,i.default)(o.default.root),u=a;t.default=u;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Panels/InfoPanel/index.js"),__REACT_HOT_LOADER__.register(u,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Panels/InfoPanel/index.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});