webpackJsonp([32,62],{"3jfj":function(e,t){e.exports={"primary-bg":"#4484d3","primary-bg-hover":"#3777c6",primary:"#4484d3",border1:"rgba(0, 0, 0, 0.1)",secondary:"rgba(0, 0, 0, 0.7)",button:"NavPill_button-3sIk7"}},DqoV:function(e,t){e.exports={border1:"rgba(0, 0, 0, 0.1)",root:"NavPillContainer_root-1yetI"}},Kiqx:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("Zx67"),o=i(a),s=n("Zrlr"),r=i(s),l=n("wxAW"),u=i(l),f=n("zwoO"),d=i(f),_=n("Pf15"),c=i(_),p=n("U7vG"),m=i(p),v=n("Zfgq"),E=n("HW6M"),O=i(E),A=n("3jfj"),C=i(A),N=function(e){function t(){return(0,r.default)(this,t),(0,d.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return this.props.to?m.default.createElement(v.Link,{className:(0,O.default)(C.default.button,this.props.className),activeClassName:"active",to:this.props.to,onlyActiveOnIndex:this.props.onlyActiveOnIndex},this.props.children):m.default.createElement("a",{className:(0,O.default)(C.default.button,this.props.className),href:this.props.href},this.props.children)}}]),t}(m.default.Component);t.default=N;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Kulw:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o,s,r=n("Zx67"),l=i(r),u=n("Zrlr"),f=i(u),d=n("wxAW"),_=i(d),c=n("zwoO"),p=i(c),m=n("Pf15"),v=i(m),E=n("U7vG"),O=i(E),A=n("4n+p"),C=n("YapR"),N=i(C),R=n("pY+W"),T=n("O0Vy"),h=i(T),y=function(e){var t=e.notifications;return{notifications:t}},g={getNotifications:R.getNotifications,markAsRead:R.markAsRead},w=[{hasChanged:"location.pathname",onChange:function(e){e.getNotifications()}}],b=(a=(0,A.connect)(y,g),o=(0,N.default)(w),a(s=o(s=function(e){function t(){return(0,f.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){return O.default.createElement(h.default,this.props)}}]),t}(E.Component))||s)||s);t.default=b;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"NotificationsContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Notifications/Notifications.container.js"),__REACT_HOT_LOADER__.register(y,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Notifications/Notifications.container.js"),__REACT_HOT_LOADER__.register(g,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Notifications/Notifications.container.js"),__REACT_HOT_LOADER__.register(w,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Notifications/Notifications.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},O0Vy:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("Zx67"),o=i(a),s=n("Zrlr"),r=i(s),l=n("wxAW"),u=i(l),f=n("zwoO"),d=i(f),_=n("Pf15"),c=i(_),p=n("U7vG"),m=i(p),v=n("Kiqx"),E=i(v),O=n("jMHE"),A=i(O),C=n("hWbs"),N=i(C),R=n("PjCM"),T=n("ISb9"),h=i(T),y=n("Yrew"),g=i(y),w=n("PIAa"),b=function(e){function t(){return(0,r.default)(this,t),(0,d.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.notifications,i=e.markAsRead,a=function(){var e=n&&n.data?n.data.filter(function(e){return!e.read}):[];e.forEach(function(e){return i(e._id)})};return m.default.createElement(N.default,null,m.default.createElement(w.Helmet,null,m.default.createElement("title",null,"Notifications")),m.default.createElement(h.default,{title:"Notifications",noResponsive:!0},m.default.createElement("div",{className:"layout-column layout-align-center"},m.default.createElement(g.default,{className:"primary",onClick:a},"Mark as read"))),m.default.createElement(R.Container,{style:{marginTop:"30px"}},m.default.createElement(R.Row,{className:"layout-xs-column layout-gt-xs-row"},m.default.createElement(R.Col,{className:"flex-gt-xs-30"},m.default.createElement(A.default,null,m.default.createElement(E.default,{to:"/notifications",onlyActiveOnIndex:!0},"Unread"),m.default.createElement(E.default,{to:"/notifications/all"},"All Notifications"))),m.default.createElement(R.Col,{className:"flex"},t))))}}]),t}(p.Component);t.default=b;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(b,"Notifications","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Notifications/Notifications.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Xahj:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),o=i(a),s=n("+6Bu"),r=i(s),l=n("U7vG"),u=i(l),f=n("HW6M"),d=i(f),_=n("DqoV"),c=i(_),p=function(e){var t=e.className,n=(e.children,(0,r.default)(e,["className","children"]));return u.default.createElement("div",(0,o.default)({className:(0,d.default)(c.default.root,t)},n),e.children)},m=p,v=m;t.default=v;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"NavPillContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/NavPillContainer/NavPillContainer.jsx"),__REACT_HOT_LOADER__.register(m,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/NavPillContainer/NavPillContainer.jsx"),__REACT_HOT_LOADER__.register(v,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/NavPillContainer/NavPillContainer.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},jMHE:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("Xahj"),o=i(a);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},nv97:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("Kulw"),o=i(a);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});