webpackJsonp([31,61],{DRRM:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i("Lv7b"),a=n(o);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},LjlK:function(e,t){e.exports={notification:"NotificationItem_notification-1bNwj",avatar1:"NotificationItem_avatar1-34y8V",avatar2:"NotificationItem_avatar2-1bVGa",text:"NotificationItem_text-3Z0We",meta:"NotificationItem_meta-MO2Ej",mark:"NotificationItem_mark-3moTT",markRead:"NotificationItem_markRead-2cAIT"}},Lv7b:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i("Zx67"),a=n(o),s=i("Zrlr"),r=n(s),d=i("wxAW"),f=n(d),u=i("zwoO"),_=n(u),l=i("Pf15"),c=n(l),m=i("U7vG"),p=n(m),R=i("GeCl"),A=n(R),E={thread:"threadRoute",project:"projectRoute",user:"userRoute",commit:"commitRoute",comment:"threadRoute"},v=function(e){var t=E[e];return t?t:void 0},N=function(e){function t(){return(0,r.default)(this,t),(0,_.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props.entity;return e?p.default.createElement(A.default,{className:"link-primary",name:v(e.entityType),params:e},e.display||"untitled"):null}}]),t}(m.Component);t.default=N;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(N,"NotificationLink","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/NotificationLink/NotificationLink.jsx"),__REACT_HOT_LOADER__.register(E,"entityToRouteMap","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/NotificationLink/NotificationLink.jsx"),__REACT_HOT_LOADER__.register(v,"getRouteNameFromEntity","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/NotificationLink/NotificationLink.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"Q+y0":function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i("bOdI"),a=n(o),s=i("Zx67"),r=n(s),d=i("Zrlr"),f=n(d),u=i("wxAW"),_=n(u),l=i("zwoO"),c=n(l),m=i("Pf15"),p=n(m),R=i("U7vG"),A=n(R),E=i("LjlK"),v=n(E),N=i("HW6M"),O=n(N),T=i("PJh5"),w=n(T),y=i("vs4/"),C=n(y),h=i("Xu4g"),L=n(h),j=i("GeCl"),k=(n(j),i("vLld"),i("DRRM")),D=n(k),H=function(e){function t(){return(0,f.default)(this,t),(0,c.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){var e=this.props,t=e.notification,i=e.markAsRead,n=function(){return i(t._id)},o=t.template.split("$$"),s=-1;return A.default.createElement("div",{className:(0,O.default)(v.default.notification,"layout-row layout-align-start-center")},A.default.createElement(C.default,{className:v.default.avatar1,picture:t.picture1,size:"33",shape:"square"}),A.default.createElement("div",{className:"flex"},A.default.createElement("div",{className:(0,O.default)(v.default.text,"text-ellipsis")},o.map(function(e,i){return""===e?(s+=1,A.default.createElement(D.default,{key:i,entity:t.entities[s]})):A.default.createElement("span",{key:i},e)})),A.default.createElement("div",{className:v.default.meta},(0,w.default)(t.timestamp).fromNow())),t.picture2?A.default.createElement(C.default,{className:v.default.avatar2,picture:t.picture2,size:"33",shape:"square"}):null,A.default.createElement("a",{className:(0,O.default)(v.default.mark,(0,a.default)({},v.default.markRead,t.read)),onClick:n},A.default.createElement(L.default,{size:24})))}}]),t}(R.Component);t.default=H;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(H,"NotificationItem","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/NotificationItem/NotificationItem.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},REai:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a,s,r=i("Zx67"),d=n(r),f=i("Zrlr"),u=n(f),_=i("wxAW"),l=n(_),c=i("zwoO"),m=n(c),p=i("Pf15"),R=n(p),A=i("U7vG"),E=n(A),v=i("4n+p"),N=i("YapR"),O=n(N),T=i("hLM1"),w=n(T),y=i("pY+W"),C=function(e){var t=e.notifications;return{notifications:t}},h={markAsRead:y.markAsRead},L=[],j=(o=(0,v.connect)(C,h),a=(0,O.default)(L),o(s=a(s=function(e){function t(){return(0,u.default)(this,t),(0,m.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,R.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return E.default.createElement(w.default,this.props)}}]),t}(A.Component))||s)||s);t.default=j;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(j,"NotificationsAllContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/NotificationsAll/NotificationsAll.container.js"),__REACT_HOT_LOADER__.register(C,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/NotificationsAll/NotificationsAll.container.js"),__REACT_HOT_LOADER__.register(h,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/NotificationsAll/NotificationsAll.container.js"),__REACT_HOT_LOADER__.register(L,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/NotificationsAll/NotificationsAll.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},ao03:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i("REai"),a=n(o);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},hLM1:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i("Zx67"),a=n(o),s=i("Zrlr"),r=n(s),d=i("wxAW"),f=n(d),u=i("zwoO"),_=n(u),l=i("Pf15"),c=n(l),m=i("U7vG"),p=n(m),R=i("Q+y0"),A=n(R),E=function(e){function t(){return(0,r.default)(this,t),(0,_.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.notifications,i=e.markAsRead,n=t&&t.data?t.data:[];return p.default.createElement("div",null,n.length>0?n.map(function(e){return p.default.createElement(A.default,{key:e._id,notification:e,markAsRead:i})}):p.default.createElement("div",{className:"text-title-5"},"No unread notifications"))}}]),t}(m.Component);t.default=E;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(E,"NotificationsUnread","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/NotificationsAll/NotificationsAll.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},vLld:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=t.show=function(e){new Notification(e.title,e)},n={"own-user-follow":"followed you","own-user-mention":"mentioned you","added-to-project":"added you to","own-project-thread":"created","own-project-mention":"mentioned","own-project-cloned":"cloned","assigned-thread":"assigned you to","own-thread-mention":"mentioned","own-thread-comment":"commented on","own-thread-closed":"closed","followed-thread-comment":"commented on","followed-thread-closed":"closed"},o=t.getNotificationText=function(e){if(n[e])return n[e]};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"show","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/Notifications.utils.js"),__REACT_HOT_LOADER__.register(o,"getNotificationText","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/Notifications.utils.js"),__REACT_HOT_LOADER__.register(n,"notificationText","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/Notifications.utils.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});