webpackJsonp([20,61],{"3jfj":function(e,t){e.exports={"primary-bg":"#4484d3","primary-bg-hover":"#3777c6",primary:"#4484d3",border1:"rgba(0, 0, 0, 0.1)",secondary:"rgba(0, 0, 0, 0.7)",button:"NavPill_button-3sIk7"}},"4RWb":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Zx67"),r=s(a),i=n("Zrlr"),u=s(i),l=n("wxAW"),d=s(l),o=n("zwoO"),f=s(o),_=n("Pf15"),c=s(_),p=n("U7vG"),m=s(p),v=n("Kiqx"),E=s(v),O=n("jMHE"),g=s(O),A=n("hWbs"),R=s(A),T=n("ecAg"),C=s(T),b=n("PjCM"),y=n("PIAa"),w=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.user,s=e.currentUser;return m.default.createElement(R.default,null,m.default.createElement(y.Helmet,null,m.default.createElement("title",null,"Settings")),m.default.createElement(C.default,{user:n,currentUser:s}),m.default.createElement(b.Container,null,m.default.createElement(b.Row,{className:"layout-xs-column layout-gt-xs-row"},m.default.createElement(b.Col,{className:"flex-gt-xs-30"},m.default.createElement(g.default,null,m.default.createElement(E.default,{to:"/settings",onlyActiveOnIndex:!0},"Basic Profile"),m.default.createElement(E.default,{to:"/settings/details"},"Experience and Education")),m.default.createElement(g.default,null,m.default.createElement(E.default,{to:"/settings/account"},"Account"),m.default.createElement(E.default,{to:"/settings/emails"},"Emails"),m.default.createElement(E.default,{to:"/settings/billing"},"Billing"),m.default.createElement(E.default,{to:"/settings/projects"},"Projects"))),m.default.createElement(b.Col,{className:"flex"},t))))}}]),t}(p.Component),h=w,j=h;t.default=j;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(w,"Settings","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Settings/Settings.js"),__REACT_HOT_LOADER__.register(h,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Settings/Settings.js"),__REACT_HOT_LOADER__.register(j,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Settings/Settings.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},AHDw:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("bOdI"),r=s(a),i=n("U7vG"),u=s(i),l=n("sV6g"),d=s(l),o=n("HW6M"),f=s(o),_=function(e){var t,n=(0,f.default)(d.default.tabs,(t={},(0,r.default)(t,d.default.tabsLg,"lg"===e.size),(0,r.default)(t,d.default.noLine,e.noline),t),e.className),s=(0,f.default)("tabs-inner","layout-row",d.default.inner);return u.default.createElement("div",{className:n,style:e.style},u.default.createElement("div",{className:s},e.children))},c=_;t.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tabs/Tabs.jsx"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tabs/Tabs.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},DqoV:function(e,t){e.exports={border1:"rgba(0, 0, 0, 0.1)",root:"NavPillContainer_root-1yetI"}},Kiqx:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("Zx67"),r=s(a),i=n("Zrlr"),u=s(i),l=n("wxAW"),d=s(l),o=n("zwoO"),f=s(o),_=n("Pf15"),c=s(_),p=n("U7vG"),m=s(p),v=n("Zfgq"),E=n("HW6M"),O=s(E),g=n("3jfj"),A=s(g),R=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return this.props.to?m.default.createElement(v.Link,{className:(0,O.default)(A.default.button,this.props.className),activeClassName:"active",to:this.props.to,onlyActiveOnIndex:this.props.onlyActiveOnIndex},this.props.children):m.default.createElement("a",{className:(0,O.default)(A.default.button,this.props.className),href:this.props.href},this.props.children)}}]),t}(m.default.Component);t.default=R;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Xahj:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),r=s(a),i=n("+6Bu"),u=s(i),l=n("U7vG"),d=s(l),o=n("HW6M"),f=s(o),_=n("DqoV"),c=s(_),p=function(e){var t=e.className,n=(e.children,(0,u.default)(e,["className","children"]));return d.default.createElement("div",(0,r.default)({className:(0,f.default)(c.default.root,t)},n),e.children)},m=p,v=m;t.default=v;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"NavPillContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/NavPillContainer/NavPillContainer.jsx"),__REACT_HOT_LOADER__.register(m,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/NavPillContainer/NavPillContainer.jsx"),__REACT_HOT_LOADER__.register(v,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/NavPillContainer/NavPillContainer.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},ecAg:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("uGO5"),r=s(a);t.default=r.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},ilwl:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r,i,u=n("Zx67"),l=s(u),d=n("Zrlr"),o=s(d),f=n("wxAW"),_=s(f),c=n("zwoO"),p=s(c),m=n("Pf15"),v=s(m),E=n("U7vG"),O=s(E),g=n("4n+p"),A=n("YapR"),R=s(A),T=n("y+89"),C=n("4RWb"),b=s(C),y=function(e,t){t.params;return{user:e.users[e.auth.user._id],currentUser:e.auth.user}},w={getUser:T.getUser},h=[{hasChanged:"currentUser._id",onChange:function(e){e.getUser({userId:e.currentUser._id,force:!0})}}],j=(a=(0,g.connect)(y,w),r=(0,R.default)(h),a(i=r(i=function(e){function t(){return(0,o.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){var e=this.props.user;return e&&e.data?O.default.createElement(b.default,this.props):null}}]),t}(E.Component))||i)||i);t.default=j;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(j,"LoginContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Settings/Settings.container.js"),__REACT_HOT_LOADER__.register(y,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Settings/Settings.container.js"),__REACT_HOT_LOADER__.register(w,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Settings/Settings.container.js"),__REACT_HOT_LOADER__.register(h,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Settings/Settings.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},jMHE:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("Xahj"),r=s(a);t.default=r.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},qkLM:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("ilwl"),r=s(a);t.default=r.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},sV6g:function(e,t){e.exports={primary:"#4484d3",border1:"rgba(0, 0, 0, 0.1)","grey-3":"rgba(0, 0, 0, 0.5)",tabs:"Tabs_tabs-1uuJ4",noLine:"Tabs_noLine-nolkc",inner:"Tabs_inner-3nnlF",tabsLg:"Tabs_tabsLg-2y561"}},uGO5:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r,i=n("Zx67"),u=s(i),l=n("Zrlr"),d=s(l),o=n("wxAW"),f=s(o),_=n("zwoO"),c=s(_),p=n("Pf15"),m=s(p),v=n("U7vG"),E=s(v),O=n("ISb9"),g=s(O),A=n("AHDw"),R=s(A),T=n("GeCl"),C=s(T),b=n("LPSb"),y=s(b),w=(r=a=function(e){function t(){return(0,d.default)(this,t),(0,c.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.currentUser,s=t.data._id===n._id,a={userId:t.data._id};return E.default.createElement(g.default,{title:t.data.profile.firstname+" "+t.data.profile.lastname,style:{marginBottom:"30px"}},E.default.createElement(R.default,{noline:!0},E.default.createElement(C.default,{activeClassName:"active",params:a,name:"userRoute",onlyActiveOnIndex:!0},"Overview"),E.default.createElement(C.default,{activeClassName:"active",params:a,name:"userDetailsRoute"},"Details"),E.default.createElement(C.default,{activeClassName:"active",params:a,name:"userProjectsRoute"},(0,y.default)(t.data.numProjects,"Project")),E.default.createElement(C.default,{activeClassName:"active",params:a,name:"userStarsRoute"},(0,y.default)(t.data.numLikes,"Star")),E.default.createElement(C.default,{activeClassName:"active",params:a,name:"userFollowersRoute"},(0,y.default)(t.data.numFollowers,"Follower")),E.default.createElement(C.default,{activeClassName:"active",params:a,name:"userFollowingRoute"},t.data.numFollowing," Following"),s?E.default.createElement(C.default,{activeClassName:"active",name:"settingsRoute"},"Settings"):null))}}]),t}(v.Component),a.propTypes={currentUser:v.PropTypes.object.isRequired,user:v.PropTypes.object.isRequired},r);t.default=w;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(w,"UserNavHeader","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/modules/UserNavHeader/UserNavHeader.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});