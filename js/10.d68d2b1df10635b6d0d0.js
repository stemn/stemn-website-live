webpackJsonp([10,54],{"/AxA":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("9ZIC"),s=r(a);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"/f+K":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s,o=n("woOf"),d=r(o),u=n("Zx67"),i=r(u),l=n("Zrlr"),_=r(l),f=n("wxAW"),c=r(f),p=n("zwoO"),m=r(p),y=n("Pf15"),E=r(y),T=n("U7vG"),O=r(T),R=n("KUdC"),v=r(R),A=n("HW6M"),h=r(A),g=(s=a=function(e){function t(){return(0,_.default)(this,t),(0,m.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.width,n=e.className,r=e.style,a={width:t+"px"};return O.default.createElement("div",{className:(0,h.default)(v.default.placeholder,n),style:(0,d.default)({},a,r)}," ")}}]),t}(T.Component),a.defaultProps={width:200},s);t.default=g;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(g,"LoadingPlaceholder","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Loading/LoadingPlaceholder/LoadingPlaceholder.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"9ZIC":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s,o=n("Zx67"),d=r(o),u=n("Zrlr"),i=r(u),l=n("wxAW"),_=r(l),f=n("zwoO"),c=r(f),p=n("Pf15"),m=r(p),y=n("U7vG"),E=r(y),T=n("Eaae"),O=r(T),R=n("HW6M"),v=r(R),A=n("fzhJ"),h=r(A),g=n("vs4/"),C=r(g),b=n("GeCl"),w=r(b),L=n("LZKX"),H=r(L),D=n("tYm5"),S=r(D),N=n("m4co"),j=r(N),M=function(e){return"project"===e.entityType?{name:"projectRoute",params:{projectId:e._id}}:"task"===e.entityType?{name:"taskRoute",params:{taskId:e._id}}:"commit"===e.entityType?{name:"commitRoute",params:{commitId:e._id}}:"field"===e.entityType?{name:"fieldRoute",params:{fieldId:e._id}}:{name:"userRoute",params:{userId:e._id}}},P=(s=a=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.query,r=e.loading,a=e.className,s=e.nofollow,o=e.children,d=M(t);return r||!t._id?E.default.createElement(S.default,{className:(0,v.default)("layout-row layout-align-start-center",O.default.row,a)},E.default.createElement(C.default,{size:40,shape:"square",className:O.default.avatar}),E.default.createElement("div",{className:"flex"},E.default.createElement(H.default,{width:200,className:O.default.link}),E.default.createElement(H.default,{width:300,className:O.default.blurb}))):E.default.createElement("div",{className:(0,v.default)("layout-row layout-align-start-center",O.default.row,a)},E.default.createElement(C.default,{size:40,shape:"square",name:t.name,picture:t.picture,className:O.default.avatar}),E.default.createElement("div",{className:"flex"},E.default.createElement(w.default,{className:(0,v.default)(O.default.link,"link-primary"),name:d.name,params:d.params},E.default.createElement(h.default,{className:"text-ellipsis",text:t.name||"Untitled",query:n,hightlightClass:O.default.highlight})),E.default.createElement("div",{className:O.default.blurb+" text-ellipsis"},t.blurb)),s?null:E.default.createElement(j.default,{className:O.default.socialButton,type:"follow",entityType:t.entityType,entityId:t._id}),o)}}]),t}(y.Component),a.propTypes={data:y.PropTypes.object.isRequired,query:y.PropTypes.string,nofollow:y.PropTypes.bool,children:y.PropTypes.node},a.defaultProps={data:{}},s);t.default=P;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(P,"EntityRow","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/EntityRow/EntityRow.jsx"),__REACT_HOT_LOADER__.register(M,"getRouteNameAndParams","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/EntityRow/EntityRow.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"9gnX":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=r(a),o=n("+6Bu"),d=r(o),u=n("U7vG"),i=r(u),l=n("HW6M"),_=r(l),f=n("19Kw"),c=n("Gdbn"),p=r(c),m=i.default.createClass({displayName:"_default",render:function(){var e=this.props,t=e.text,n=e.className,r=e.children,a=(0,d.default)(e,["text","className","children"]);return i.default.createElement("div",(0,s.default)({className:(0,_.default)(p.default.tag,n)},a),i.default.createElement("div",{className:(0,_.default)(p.default.tagInner,"layout-row layout-align-start-center")},r,(0,f.middle)(t,30)))}}),y=m;t.default=y;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(m,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tags/Tag/Tag.jsx"),__REACT_HOT_LOADER__.register(y,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tags/Tag/Tag.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},AHDw:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("bOdI"),s=r(a),o=n("U7vG"),d=r(o),u=n("sV6g"),i=r(u),l=n("HW6M"),_=r(l),f=function(e){var t,n=(0,_.default)(i.default.tabs,(t={},(0,s.default)(t,i.default.tabsLg,"lg"===e.size),(0,s.default)(t,i.default.noLine,e.noline),t),e.className),r=(0,_.default)("tabs-inner","layout-row",i.default.inner);return d.default.createElement("div",{className:n,style:e.style},d.default.createElement("div",{className:r},e.children))},c=f;t.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tabs/Tabs.jsx"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tabs/Tabs.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},ATcx:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s,o=n("Zx67"),d=r(o),u=n("Zrlr"),i=r(u),l=n("wxAW"),_=r(l),f=n("zwoO"),c=r(f),p=n("Pf15"),m=r(p),y=n("U7vG"),E=r(y),T=n("4n+p"),O=n("wplR"),R=r(O),v=function(){return{}},A={},h=(a=(0,T.connect)(v,A),a(s=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){return E.default.createElement(R.default,this.props)}}]),t}(y.Component))||s);t.default=h;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"SearchContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Search/Search.container.js"),__REACT_HOT_LOADER__.register(v,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Search/Search.container.js"),__REACT_HOT_LOADER__.register(A,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Search/Search.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Dc8Y:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("Zx67"),s=r(a),o=n("Zrlr"),d=r(o),u=n("wxAW"),i=r(u),l=n("zwoO"),_=r(l),f=n("Pf15"),c=r(f),p=n("U7vG"),m=r(p),y=n("eooA"),E=r(y),T=n("HW6M"),O=r(T),R=function(e){function t(){return(0,d.default)(this,t),(0,_.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className;return m.default.createElement("div",{className:(0,O.default)(E.default.animation,n)},t)}}]),t}(p.Component);t.default=R;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(R,"LoadingAnimation","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Loading/LoadingAnimation/LoadingAnimation.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Eaae:function(e,t){e.exports={link:"EntityRow_link-jTVsR",blurb:"EntityRow_blurb-33uJo",highlight:"EntityRow_highlight-1Ndy5",avatar:"EntityRow_avatar-1bTmy",socialButton:"EntityRow_socialButton-2jmPU"}},Ej9u:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=r(a),o=n("U7vG"),d=r(o),u=n("aSqn"),i=r(u),l=function(e){return d.default.createElement(i.default,(0,s.default)({viewBox:"0 0 40 40"},e),d.default.createElement("g",null,d.default.createElement("path",{d:"m20 28.8l-10.3 6.2 2.7-11.7-9-7.9 11.9-1 4.7-11 4.7 11 11.9 1-9 7.9 2.7 11.7z"})))},_=l,f=_;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"MdStar","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star.js"),__REACT_HOT_LOADER__.register(_,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Gdbn:function(e,t){e.exports={primary:"rgb(68, 154, 211)",border2:"rgba(0, 0, 0, 0.3)",primaryLight1:"rgba(0, 152, 255, 0.08)",primaryLight2:"rgba(0, 152, 255, 0.12)",border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)",tag:"Tag_tag-1aAzx",tagInner:"Tag_tagInner-2tHL-",close:"Tag_close-15vwY"}},IDWf:function(e,t){e.exports={content:"Search_content-3JZvB"}},ISb9:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("JdMn"),s=r(a);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Ipzs:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=r(a),o=n("U7vG"),d=r(o),u=n("aSqn"),i=r(u),l=function(e){return d.default.createElement(i.default,(0,s.default)({viewBox:"0 0 40 40"},e),d.default.createElement("g",null,d.default.createElement("path",{d:"m25.7 12.3l-7.7 7.7 7.7 7.7-2.3 2.3-10-10 10-10z"})))},_=l,f=_;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"MdChevronLeft","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/chevron-left.js"),__REACT_HOT_LOADER__.register(_,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/chevron-left.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/chevron-left.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},JdMn:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s,o=n("woOf"),d=r(o),u=n("Zx67"),i=r(u),l=n("Zrlr"),_=r(l),f=n("wxAW"),c=r(f),p=n("zwoO"),m=r(p),y=n("Pf15"),E=r(y),T=n("U7vG"),O=r(T),R=n("NVUE"),v=r(R),A=n("HW6M"),h=r(A),g=n("PjCM"),C=(s=a=function(e){function t(){return(0,_.default)(this,t),(0,m.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children,r=e.noline,a=e.icon,s=e.style,o=e.noResponsive,u=r?{}:{borderBottom:"1px solid rgba(0, 0, 0, 0.1)"},i=o?"layout-row":"layout-xs-column layout-sm-column layout-gt-sm-row layout-align-xs-end layout-align-sm-end";return O.default.createElement("div",{className:v.default.header,style:(0,d.default)({},u,s)},O.default.createElement(g.Container,{className:(0,h.default)(v.default.headerInner,i)},O.default.createElement("h1",{className:(0,h.default)(v.default.title,"layout-row layout-align-start-center")},a,t),t&&O.default.createElement("div",{className:"flex"}),n))}}]),t}(T.Component),a.propTypes={title:T.PropTypes.string,children:T.PropTypes.node,noline:T.PropTypes.bool,style:T.PropTypes.object,icon:T.PropTypes.node,noResponsive:T.PropTypes.bool},s);t.default=C;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(C,"SubHeader","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/modules/SubHeader/SubHeader.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},KUdC:function(e,t){e.exports={placeholder:"LoadingPlaceholder_placeholder-U9tJY"}},LZKX:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("/f+K"),s=r(a);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},NVUE:function(e,t){e.exports={header:"SubHeader_header-uYZTB",headerInner:"SubHeader_headerInner-1OqIO",title:"SubHeader_title-BRVLr"}},Nyhj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.remove=t.add=t.checkStatus=void 0;var r=n("DY/v"),a=t.checkStatus=function(e,t){return function(n,r){var a=r().auth.user._id;a&&n({type:"SOCIAL/GET_STATUS",httpPackage:{method:"GET",url:"/api/v1/social",staticParams:{childId:a,socialType:t},params:{parentIds:e}},meta:{entityId:e,type:t}})}},s=t.add=function(e){var t=e.entityId,n=e.type,a=e.number,s=e.numberModel;return function(e,o){e({type:"SOCIAL/ADD",auth:!0,http:!0,payload:{method:"PUT",url:"/api/v1/users/"+o().auth.user._id+"/"+n+"s/"+t},meta:{entityId:t,type:n}}),a&&s&&e(r.actions.change(s,a+1))}},o=t.remove=function(e){var t=e.entityId,n=e.type,a=e.number,s=e.numberModel;return function(e,o){e({type:"SOCIAL/REMOVE",auth:!0,http:!0,payload:{method:"DELETE",url:"/api/v1/users/"+o().auth.user._id+"/"+n+"s/"+t},meta:{entityId:t,type:n}}),a&&s&&e(r.actions.change(s,a-1))}};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"checkStatus","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/Social.actions.js"),__REACT_HOT_LOADER__.register(s,"add","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/Social.actions.js"),__REACT_HOT_LOADER__.register(o,"remove","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/Social.actions.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},QlVd:function(e,t){e.exports={primary:"rgb(68, 154, 211)",border1:"rgba(0, 0, 0, 0.1)",primaryLight1:"rgba(0, 152, 255, 0.08)",primaryLight2:"rgba(0, 152, 255, 0.12)",bg1:"rgba(0, 0, 0, 0.03)",button:"SocialButton_button-1emT4",main:"SocialButton_main-1nTG1",count:"SocialButton_count-2UovY"}},RMmn:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("4n+p"),s=n("h7W2"),o=r(s),d=n("Nyhj"),u=function(e,t){var n=e.social,r=t.entityId,a=t.type;return{status:n[a][r]||!1}},i={add:d.add,remove:d.remove,checkStatus:d.checkStatus},l=(0,a.connect)(u,i)(o.default),_=l;t.default=_;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.container.js"),__REACT_HOT_LOADER__.register(i,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.container.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.container.js"),__REACT_HOT_LOADER__.register(_,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Strs:function(e,t){e.exports={results:"SiteSearchResults_results-F9XsY",result:"SiteSearchResults_result-1G89t"}},ZHGc:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("9gnX"),s=r(a);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},bDKF:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=r(a),o=n("U7vG"),d=r(o),u=n("aSqn"),i=r(u),l=function(e){return d.default.createElement(i.default,(0,s.default)({viewBox:"0 0 40 40"},e),d.default.createElement("g",null,d.default.createElement("path",{d:"m20 25.7l6.3 3.8-1.7-7.2 5.6-4.8-7.4-0.6-2.8-6.7-2.8 6.7-7.4 0.6 5.6 4.8-1.6 7.2z m16.6-10.3l-9 7.9 2.7 11.7-10.3-6.2-10.3 6.2 2.7-11.7-9-7.9 11.9-1 4.7-11 4.7 11z"})))},_=l,f=_;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"MdStarBorder","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star-border.js"),__REACT_HOT_LOADER__.register(_,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star-border.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/star-border.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},cf2e:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("ATcx"),s=r(a);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},eooA:function(e,t){e.exports={animation:"LoadingAnimation_animation-4VpK7",pulse:"LoadingAnimation_pulse-1rSsH"}},fFjq:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("Zx67"),s=r(a),o=n("Zrlr"),d=r(o),u=n("wxAW"),i=r(u),l=n("zwoO"),_=r(l),f=n("Pf15"),c=r(f),p=n("Q7hp"),m=r(p),y=n("U7vG"),E=r(y),T=n("Strs"),O=r(T),R=n("/AxA"),v=r(R),A=n("K+/r"),h=r(A),g=n("n4OE"),C=r(g),b=n("ZHGc"),w=r(b),L=n("GeCl"),H=r(L),D=function(e){function t(){return(0,d.default)(this,t),(0,_.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.results,n=e.size,r=e.page,a=e.location,s=e.query,o=e.display,d=t&&!t.loading&&!(0,m.default)(t,["data","length"])>0,u=t&&t.data&&t.data.length<n;return"tag"===o?E.default.createElement("div",null,t&&t.data&&t.data.map(function(e){return E.default.createElement(H.default,{key:e._id,name:"fieldRoute",params:{fieldId:e.stub}},E.default.createElement(w.default,{className:"primary",text:e.name,style:{marginBottom:"6px"}}))})):E.default.createElement("div",null,E.default.createElement("div",{className:O.default.results+" layout-column",style:t&&t.data?{}:{minHeight:"100vh"}},E.default.createElement(h.default,{show:!t||t.loading,linear:!0,noOverlay:!0}),t&&t.data&&t.data.map(function(e){return E.default.createElement(v.default,{key:e._id,data:e,query:s,className:O.default.result})}),d&&E.default.createElement("div",{className:"layout-column flex layout-align-center-center text-title-5"},"No Search Results")),E.default.createElement(C.default,{path:a.pathname,query:a.query,page:r,noMoreResults:u}))}}]),t}(y.Component);t.default=D;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(D,"SiteSearchResults","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Search/SiteSearchResults/SiteSearchResults.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},fg6P:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=r(a),o=n("U7vG"),d=r(o),u=n("aSqn"),i=r(u),l=function(e){return d.default.createElement(i.default,(0,s.default)({viewBox:"0 0 40 40"},e),d.default.createElement("g",null,d.default.createElement("path",{d:"m28.4 5q1.3 0 2.3 1t0.9 2.4v26.6l-11.6-5-11.6 5v-26.6q0-1.4 0.9-2.4t2.3-1h16.8z"})))},_=l,f=_;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"MdBookmark","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark.js"),__REACT_HOT_LOADER__.register(_,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},fntx:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("hHuS"),s=r(a);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},h7W2:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s,o=n("Dd8w"),d=r(o),u=n("+6Bu"),i=r(u),l=n("Zx67"),_=r(l),f=n("Zrlr"),c=r(f),p=n("wxAW"),m=r(p),y=n("zwoO"),E=r(y),T=n("Pf15"),O=r(T),R=n("U7vG"),v=r(R),A=n("HW6M"),h=r(A),g=n("QlVd"),C=r(g),b=n("Ej9u"),w=r(b),L=n("bDKF"),H=r(L),D=n("fg6P"),S=r(D),N=n("kSWO"),j=r(N),M=function(e,t){return"like"===e?t?v.default.createElement(w.default,null):v.default.createElement(H.default,null):"follow"===e?t?v.default.createElement(S.default,null):v.default.createElement(j.default,null):void 0},P=function(e,t){return"like"===e?t?"Starred":"Star":"follow"===e?t?"Following":"Follow":void 0},x=(s=a=function(e){function t(){var e,n,r,a;(0,c.default)(this,t);for(var s=arguments.length,o=Array(s),d=0;d<s;d++)o[d]=arguments[d];return n=r=(0,E.default)(this,(e=t.__proto__||(0,_.default)(t)).call.apply(e,[this].concat(o))),r.componentWillMount=function(){var e;return(e=r).__componentWillMount__REACT_HOT_LOADER__.apply(e,arguments)},r.toggle=function(){var e;return(e=r).__toggle__REACT_HOT_LOADER__.apply(e,arguments)},a=n,(0,E.default)(r,a)}return(0,O.default)(t,e),(0,m.default)(t,[{key:"__componentWillMount__REACT_HOT_LOADER__",value:function(){var e=this.props,t=e.checkStatus,n=e.entityId,r=e.type;t(n,r)}},{key:"__toggle__REACT_HOT_LOADER__",value:function(){var e=this.props,t=e.status,n=e.type,r=e.remove,a=e.add,s=e.number,o=e.numberModel,d=e.entityId;t?r({entityId:d,type:n,number:s,numberModel:o}):a({entityId:d,type:n,number:s,numberModel:o})}},{key:"render",value:function(){var e=this.props,t=(e.add,e.checkStatus,e.className),n=(e.entityId,e.entityType,e.number),r=e.numberModel,a=(e.remove,e.status),s=e.type,o=(0,i.default)(e,["add","checkStatus","className","entityId","entityType","number","numberModel","remove","status","type"]);return v.default.createElement("div",(0,d.default)({className:(0,h.default)(C.default.button,t)},o),v.default.createElement("div",{className:(0,h.default)(C.default.main),onClick:this.toggle},M(s,a),P(s,a)),n&&r?v.default.createElement("div",{className:C.default.count},n):null)}}]),t}(R.Component),a.propTypes={checkStatus:R.PropTypes.func.isRequired,add:R.PropTypes.func.isRequired,remove:R.PropTypes.func.isRequired,entityId:R.PropTypes.string.isRequired,entityType:R.PropTypes.string.isRequired,number:R.PropTypes.number,numberModel:R.PropTypes.string,type:R.PropTypes.oneOf(["follow","like"]).isRequired,status:R.PropTypes.bool.isRequired},s);t.default=x;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(x,"SocialButton","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.jsx"),__REACT_HOT_LOADER__.register(M,"getIcon","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.jsx"),__REACT_HOT_LOADER__.register(P,"getText","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Social/SocialButton/SocialButton.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},hHuS:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s,o,d=n("Zx67"),u=r(d),i=n("Zrlr"),l=r(i),_=n("wxAW"),f=r(_),c=n("zwoO"),p=r(c),m=n("Pf15"),y=r(m),E=n("mvHQ"),T=r(E),O=n("U7vG"),R=r(O),v=n("4n+p"),A=n("YapR"),h=r(A),g=n("0aXM"),C=n("fFjq"),b=r(C),w=function(e,t){var n=e.search,r=e.routing,a=t.page,s=t.query,o=t.type,d=t.size,u=t.parentType,i=t.parentId,l=t.sort,_=t.criteria,f=o||"project",c=a||1,p=s,m=d||30,y=f+"-"+s+"-"+c+"-"+u+"-"+i+"-"+l+"-"+(0,T.default)(_);return{cacheKey:y,criteria:_,location:r.locationBeforeTransitions,page:c,query:p,results:n.data[y],searchQuery:n.query,size:m,sort:l,type:f}},L={search:g.search},H=[{hasChanged:"cacheKey",onChange:function(e){e.search({cacheKey:e.cacheKey,entityType:e.type,page:e.page,parentId:e.parentId,parentType:e.parentType,criteria:e.criteria,size:e.size,sort:e.sort,value:e.query})}}],D=(a=(0,v.connect)(w,L),s=(0,h.default)(H),a(o=s(o=function(e){function t(){return(0,l.default)(this,t),(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,y.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){return R.default.createElement(b.default,this.props)}}]),t}(O.Component))||o)||o);t.default=D;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(D,"SiteSearchResultsContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Search/SiteSearchResults/SiteSearchResults.container.js"),__REACT_HOT_LOADER__.register(w,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Search/SiteSearchResults/SiteSearchResults.container.js"),__REACT_HOT_LOADER__.register(L,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Search/SiteSearchResults/SiteSearchResults.container.js"),__REACT_HOT_LOADER__.register(H,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Search/SiteSearchResults/SiteSearchResults.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},kSWO:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=r(a),o=n("U7vG"),d=r(o),u=n("aSqn"),i=r(u),l=function(e){return d.default.createElement(i.default,(0,s.default)({viewBox:"0 0 40 40"},e),d.default.createElement("g",null,d.default.createElement("path",{d:"m28.4 30v-21.6h-16.8v21.6l8.4-3.7z m0-25q1.3 0 2.3 1t0.9 2.4v26.6l-11.6-5-11.6 5v-26.6q0-1.4 0.9-2.4t2.3-1h16.8z"})))},_=l,f=_;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"MdBookmarkOutline","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark-outline.js"),__REACT_HOT_LOADER__.register(_,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark-outline.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/bookmark-outline.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},lSz7:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s,o=n("woOf"),d=r(o),u=n("Zx67"),i=r(u),l=n("Zrlr"),_=r(l),f=n("wxAW"),c=r(f),p=n("zwoO"),m=r(p),y=n("Pf15"),E=r(y),T=n("U7vG"),O=r(T),R=n("HW6M"),v=(r(R),n("qeG2")),A=r(v),h=n("raO4"),g=r(h),C=n("Ipzs"),b=r(C),w=n("Zfgq"),L=(s=a=function(e){function t(){return(0,_.default)(this,t),(0,m.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.noMoreResults,n=e.page,r=e.query,a=e.path,s={pathname:a,query:(0,d.default)({},r,{page:parseInt(n)-1})},o={pathname:a,query:(0,d.default)({},r,{page:parseInt(n)+1})};return O.default.createElement("div",{className:"layout-row layout-align-end-center"},n>1?O.default.createElement(w.Link,{to:s,className:A.default.button+" layout-column layout-align-center-center"},O.default.createElement(b.default,{size:20})):null,O.default.createElement("div",{className:A.default.indicator+" layout-column layout-align-center-center"},"Page: ",n),t?null:O.default.createElement(w.Link,{to:o,className:A.default.button+" layout-column layout-align-center-center"},O.default.createElement(g.default,{size:20})))}}]),t}(T.Component),a.propTypes={page:T.PropTypes.number.isRequired,noMoreResults:T.PropTypes.bool.isRequired,path:T.PropTypes.string.isRequired,query:T.PropTypes.object},a.defaultProps={page:1,noMoreResults:!1},s);t.default=L;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(L,"Pagination","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Pagination/Pagination.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},m4co:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("RMmn"),s=r(a);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},mvHQ:function(e,t,n){e.exports={"default":n("qkKv"),__esModule:!0}},n4OE:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("lSz7"),s=r(a);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},qeG2:function(e,t){e.exports={primary:"rgb(68, 154, 211)",bg1:"rgba(0, 0, 0, 0.03)",button:"Pagination_button-2Ny0e",indicator:"Pagination_indicator-2PBet"}},qkKv:function(e,t,n){var r=n("FeBl"),a=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},sV6g:function(e,t){e.exports={primary:"rgb(68, 154, 211)",border1:"rgba(0, 0, 0, 0.1)","grey-3":"rgba(0, 0, 0, 0.5)",tabs:"Tabs_tabs-1uuJ4",noLine:"Tabs_noLine-nolkc",inner:"Tabs_inner-3nnlF",tabsLg:"Tabs_tabsLg-2y561"}},tYm5:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("Dc8Y"),s=r(a);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},wplR:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{
value:!0}),t.default=void 0;var a=n("Zx67"),s=r(a),o=n("Zrlr"),d=r(o),u=n("wxAW"),i=r(u),l=n("zwoO"),_=r(l),f=n("Pf15"),c=r(f),p=n("U7vG"),m=r(p),y=n("ISb9"),E=r(y),T=n("hWbs"),O=r(T),R=n("PjCM"),v=n("AHDw"),A=r(v),h=n("GeCl"),g=r(h),C=n("fntx"),b=r(C),w=n("PIAa"),L=n("IDWf"),H=r(L),D=n("HW6M"),S=(r(D),function(e){function t(){return(0,d.default)(this,t),(0,_.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.location;return m.default.createElement(O.default,null,m.default.createElement(w.Helmet,null,m.default.createElement("title",null,"Search: "+e.query.q)),m.default.createElement(E.default,{noResponsive:!0},m.default.createElement(A.default,{noline:!0},m.default.createElement(g.default,{to:"/search",className:{active:!e.query.type},query:{q:e.query.q}},"Projects"),m.default.createElement(g.default,{activeClassName:"active",to:"/search",query:{q:e.query.q,type:"thread"}},"Threads"),m.default.createElement(g.default,{activeClassName:"active",to:"/search",query:{q:e.query.q,type:"commit"}},"Commits"),m.default.createElement(g.default,{activeClassName:"active",to:"/search",query:{q:e.query.q,type:"user"}},"People"),m.default.createElement(g.default,{activeClassName:"active",to:"/search",query:{q:e.query.q,type:"field"}},"Fields"))),m.default.createElement(R.Container,{className:H.default.content},m.default.createElement(R.Row,{className:"layout-xs-col layout-gt-xs-row"},m.default.createElement(R.Col,{className:"flex-gt-xs-70"},m.default.createElement(b.default,{query:e.query.q,type:e.query.type,page:parseInt(e.query.page),size:30})),m.default.createElement(R.Col,{className:"flex-30"}))))}}]),t}(p.Component));t.default=S;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(S,"Search","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Search/Search.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});