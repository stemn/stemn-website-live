webpackJsonp([22,54],{"3jfj":function(e,t){e.exports={primary:"rgb(68, 154, 211)","primary-2":"rgb(64, 129, 173)",border1:"rgba(0, 0, 0, 0.1)",secondary:"rgba(0, 0, 0, 0.7)",button:"NavPill_button-3sIk7"}},"4RWb":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Zx67"),a=s(r),u=n("Zrlr"),i=s(u),l=n("wxAW"),o=s(l),d=n("zwoO"),_=s(d),f=n("Pf15"),c=s(f),p=n("U7vG"),m=s(p),E=n("Kiqx"),v=s(E),O=n("jMHE"),T=s(O),R=n("hWbs"),A=s(R),g=n("ecAg"),C=s(g),y=n("PjCM"),b=n("PIAa"),h=function(e){function t(){return(0,i.default)(this,t),(0,_.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.user,s=e.currentUser;return m.default.createElement(A.default,null,m.default.createElement(b.Helmet,null,m.default.createElement("title",null,"Settings")),m.default.createElement(C.default,{user:n,currentUser:s}),m.default.createElement(y.Container,null,m.default.createElement(y.Row,{className:"layout-xs-column layout-gt-xs-row"},m.default.createElement(y.Col,{className:"flex-gt-xs-30"},m.default.createElement(T.default,null,m.default.createElement(v.default,{to:"/settings",onlyActiveOnIndex:!0},"Basic Profile"),m.default.createElement(v.default,{to:"/settings/details"},"Experience and Education")),m.default.createElement(T.default,null,m.default.createElement(v.default,{to:"/settings/account"},"Account"),m.default.createElement(v.default,{to:"/settings/emails"},"Emails"),m.default.createElement(v.default,{to:"/settings/billing"},"Billing"),m.default.createElement(v.default,{to:"/settings/projects"},"Projects"))),m.default.createElement(y.Col,{className:"flex"},t))))}}]),t}(p.Component),w=h,H=w;t.default=H;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"Settings","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Settings/Settings.js"),__REACT_HOT_LOADER__.register(w,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Settings/Settings.js"),__REACT_HOT_LOADER__.register(H,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Settings/Settings.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},AHDw:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("bOdI"),a=s(r),u=n("U7vG"),i=s(u),l=n("sV6g"),o=s(l),d=n("HW6M"),_=s(d),f=function(e){var t,n=(0,_.default)(o.default.tabs,(t={},(0,a.default)(t,o.default.tabsLg,"lg"===e.size),(0,a.default)(t,o.default.noLine,e.noline),t),e.className),s=(0,_.default)("tabs-inner","layout-row",o.default.inner);return i.default.createElement("div",{className:n,style:e.style},i.default.createElement("div",{className:s},e.children))},c=f;t.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tabs/Tabs.jsx"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tabs/Tabs.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},DqoV:function(e,t){e.exports={border1:"rgba(0, 0, 0, 0.1)",root:"NavPillContainer_root-1yetI"}},ISb9:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("JdMn"),a=s(r);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},JdMn:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a,u=n("woOf"),i=s(u),l=n("Zx67"),o=s(l),d=n("Zrlr"),_=s(d),f=n("wxAW"),c=s(f),p=n("zwoO"),m=s(p),E=n("Pf15"),v=s(E),O=n("U7vG"),T=s(O),R=n("NVUE"),A=s(R),g=n("HW6M"),C=s(g),y=n("PjCM"),b=(a=r=function(e){function t(){return(0,_.default)(this,t),(0,m.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children,s=e.noline,r=e.icon,a=e.style,u=e.noResponsive,l=s?{}:{borderBottom:"1px solid rgba(0, 0, 0, 0.1)"},o=u?"layout-row":"layout-xs-column layout-sm-column layout-gt-sm-row layout-align-xs-end layout-align-sm-end";return T.default.createElement("div",{className:A.default.header,style:(0,i.default)({},l,a)},T.default.createElement(y.Container,{className:(0,C.default)(A.default.headerInner,o)},T.default.createElement("h1",{className:(0,C.default)(A.default.title,"layout-row layout-align-start-center")},r,t),t&&T.default.createElement("div",{className:"flex"}),n))}}]),t}(O.Component),r.propTypes={title:O.PropTypes.string,children:O.PropTypes.node,noline:O.PropTypes.bool,style:O.PropTypes.object,icon:O.PropTypes.node,noResponsive:O.PropTypes.bool},a);t.default=b;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(b,"SubHeader","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/modules/SubHeader/SubHeader.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Kiqx:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("Zx67"),a=s(r),u=n("Zrlr"),i=s(u),l=n("wxAW"),o=s(l),d=n("zwoO"),_=s(d),f=n("Pf15"),c=s(f),p=n("U7vG"),m=s(p),E=n("Zfgq"),v=n("HW6M"),O=s(v),T=n("3jfj"),R=s(T),A=function(e){function t(){return(0,i.default)(this,t),(0,_.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return this.props.to?m.default.createElement(E.Link,{className:(0,O.default)(R.default.button,this.props.className),activeClassName:"active",to:this.props.to,onlyActiveOnIndex:this.props.onlyActiveOnIndex},this.props.children):m.default.createElement("a",{className:(0,O.default)(R.default.button,this.props.className),href:this.props.href},this.props.children)}}]),t}(m.default.Component);t.default=A;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},LPSb:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var s="";if("People"===t)return s=1===e?"Person":"People",n?s:e+" "+s;var r=t[t.length];return s=1===e?t:"y"===r?t.substring(0,t.length-1)+"ies":t+"s",n?s:e+" "+s},s=n;t.default=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/utils/strings/pluralise.js"),__REACT_HOT_LOADER__.register(s,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/utils/strings/pluralise.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},NVUE:function(e,t){e.exports={header:"SubHeader_header-uYZTB",headerInner:"SubHeader_headerInner-1OqIO",title:"SubHeader_title-BRVLr"}},Xahj:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),a=s(r),u=n("+6Bu"),i=s(u),l=n("U7vG"),o=s(l),d=n("HW6M"),_=s(d),f=n("DqoV"),c=s(f),p=function(e){var t=e.className,n=(e.children,(0,i.default)(e,["className","children"]));return o.default.createElement("div",(0,a.default)({className:(0,_.default)(c.default.root,t)},n),e.children)},m=p,E=m;t.default=E;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"NavPillContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/NavPillContainer/NavPillContainer.jsx"),__REACT_HOT_LOADER__.register(m,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/NavPillContainer/NavPillContainer.jsx"),__REACT_HOT_LOADER__.register(E,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/NavPillContainer/NavPillContainer.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},ecAg:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("uGO5"),a=s(r);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},ilwl:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a,u,i=n("Zx67"),l=s(i),o=n("Zrlr"),d=s(o),_=n("wxAW"),f=s(_),c=n("zwoO"),p=s(c),m=n("Pf15"),E=s(m),v=n("U7vG"),O=s(v),T=n("4n+p"),R=n("YapR"),A=s(R),g=n("y+89"),C=n("4RWb"),y=s(C),b=function(e,t){t.params;return{user:e.users[e.auth.user._id],currentUser:e.auth.user}},h={getUser:g.getUser},w=[{hasChanged:"currentUser._id",onChange:function(e){e.getUser({userId:e.currentUser._id,force:!0})}}],H=(r=(0,T.connect)(b,h),a=(0,A.default)(w),r(u=a(u=function(e){function t(){return(0,d.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props.user;return e&&e.data?O.default.createElement(y.default,this.props):null}}]),t}(v.Component))||u)||u);t.default=H;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(H,"LoginContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Settings/Settings.container.js"),__REACT_HOT_LOADER__.register(b,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Settings/Settings.container.js"),__REACT_HOT_LOADER__.register(h,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Settings/Settings.container.js"),__REACT_HOT_LOADER__.register(w,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Settings/Settings.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},jMHE:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("Xahj"),a=s(r);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},qkLM:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("ilwl"),a=s(r);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},sV6g:function(e,t){e.exports={primary:"rgb(68, 154, 211)",border1:"rgba(0, 0, 0, 0.1)","grey-3":"rgba(0, 0, 0, 0.5)",tabs:"Tabs_tabs-1uuJ4",noLine:"Tabs_noLine-nolkc",inner:"Tabs_inner-3nnlF",tabsLg:"Tabs_tabsLg-2y561"}},uGO5:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a,u=n("Zx67"),i=s(u),l=n("Zrlr"),o=s(l),d=n("wxAW"),_=s(d),f=n("zwoO"),c=s(f),p=n("Pf15"),m=s(p),E=n("U7vG"),v=s(E),O=n("ISb9"),T=s(O),R=n("AHDw"),A=s(R),g=n("GeCl"),C=s(g),y=n("LPSb"),b=s(y),h=(a=r=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.currentUser,s=t.data._id===n._id,r={userId:t.data._id};return v.default.createElement(T.default,{title:t.data.name,style:{marginBottom:"30px"}},v.default.createElement(A.default,{noline:!0},v.default.createElement(C.default,{activeClassName:"active",params:r,name:"userRoute",onlyActiveOnIndex:!0},"Overview"),v.default.createElement(C.default,{activeClassName:"active",params:r,name:"userDetailsRoute"},"Details"),v.default.createElement(C.default,{activeClassName:"active",params:r,name:"userProjectsRoute"},(0,b.default)(t.data.numProjects,"Project")),v.default.createElement(C.default,{activeClassName:"active",params:r,name:"userStarsRoute"},(0,b.default)(t.data.likes,"Star")),v.default.createElement(C.default,{activeClassName:"active",params:r,name:"userFollowersRoute"},(0,b.default)(t.data.numFollowers,"Follower")),v.default.createElement(C.default,{activeClassName:"active",params:r,name:"userFollowingRoute"},t.data.numFollowing," Following"),s?v.default.createElement(C.default,{activeClassName:"active",name:"settingsRoute"},"Settings"):null))}}]),t}(E.Component),r.propTypes={currentUser:E.PropTypes.object.isRequired,user:E.PropTypes.object.isRequired},a);t.default=h;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(h,"UserNavHeader","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/modules/UserNavHeader/UserNavHeader.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});