webpackJsonp([45],{1192:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(2852),a=i(n);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2329:function(e,t){e.exports={notification:"NotificationItem_notification-1bNwj",avatar1:"NotificationItem_avatar1-34y8V",avatar2:"NotificationItem_avatar2-1bVGa",meta:"NotificationItem_meta-MO2Ej",mark:"NotificationItem_mark-3moTT",markRead:"NotificationItem_markRead-2cAIT"}},2396:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(38),a=i(n),s=o(13),r=i(s),l=o(12),d=i(l),u=o(14),f=i(u),c=o(16),_=i(c),p=o(15),w=i(p),m=o(0),g=i(m),N=o(2329),A=i(N),E=o(2),y=i(E),R=o(1),v=i(R),T=o(455),O=i(T),h=o(464),j=i(h),b=o(64),C=i(b),k=o(2397),L=function(e){function t(){return(0,d.default)(this,t),(0,_.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,w.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.notification,o=e.markAsRead,i=t._id,n=t.type,s=t.read,r=t.timestamp,l=(t.id1,t.name1),d=t.picture1,u=t.link1,f=(t.id2,t.name2),c=t.picture2,_=t.link2,p=function(){return o(i)};return g.default.createElement("div",{className:(0,y.default)(A.default.notification,"layout-row layout-align-start-center")},g.default.createElement(C.default,{className:"layout-row layout-align-start-center",name:"userRoute",params:{link1:u}},g.default.createElement(O.default,{className:A.default.avatar1,picture:d,size:"33",shape:"square"})),g.default.createElement("div",{className:"flex"},g.default.createElement("div",{className:"text-ellipsis"},g.default.createElement(C.default,{className:(0,y.default)("link-primary"),to:u},l),g.default.createElement("span",null," ",(0,k.getNotificationText)(n)),g.default.createElement(C.default,{className:(0,y.default)("link-primary"),to:_}," ",f)),g.default.createElement("div",{className:A.default.meta},(0,v.default)(r).fromNow())),c?g.default.createElement(C.default,{name:"userRoute",params:{link2:_}},g.default.createElement(O.default,{className:A.default.avatar2,picture:c,size:"33",shape:"square"})):null,g.default.createElement("a",{className:(0,y.default)(A.default.mark,(0,a.default)({},A.default.markRead,s)),onClick:p},g.default.createElement(j.default,{size:24})))}}]),t}(m.Component),D=L,H=D;t.default=H;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(L,"NotificationItem","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/NotificationItem/NotificationItem.js"),__REACT_HOT_LOADER__.register(D,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/NotificationItem/NotificationItem.js"),__REACT_HOT_LOADER__.register(H,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/NotificationItem/NotificationItem.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2397:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=t.show=function(e){new Notification(e.title,e)},i={"added-project":"added you to their project","added-organisation":"added you to the organisation","invite-accepted":"joined","followed-user-project":"has a new project","followed-user-blog":"has a new blog","followed-user-general":"has a new discussion","followed-user-question":"has a new question","followed-project-blog":"has a new blog","followed-project-general":"has a new discussion","followed-project-question":"has a new question","followed-project-post":"commented","followed-field-project":"has a new project","followed-field-blog":"has a new blog","followed-field-general":"has a new discussion","followed-organisation-project":"has a new project","followed-field-question":"has a new question","followed-organisation-blog":"has a new blog","followed-organisation-general":"has a new discussion","followed-organisation-question":"has a new question","followed-own-user":"is now following you.","followed-own-project":"is now following your project","followed-own-question":"is now following your question","followed-own-blog":"is now following your blog","followed-own-general":"is now following your discussion","followed-own-organisation":"is now following your organisation","followed-question-post":"posted an answer in","followed-blog-post":"posted a comment on","followed-general-post":"posted a reply in","own-question-post":"answered your question","own-blog-post":"posted on your blog","own-general-post":"replied in your discussion","own-question-like":"liked your question","own-blog-like":"liked your blog","own-general-like":"liked your discussion","own-post-like":"liked your post","own-post-post":"replied to your post","own-user-mention":"mentioned you in","own-project-mention":"mentioned your project in","own-organisation-mention":"mentioned your organisation in","own-blog-mention":"mentioned your blog in","own-general-mention":"mentioned your discussion in","own-question-mention":"mentioned your question in","own-application-pendingReview":"application is now pending review.","own-application-underReview":"application is now under review.","own-application-awaitingUpdate":"application is awaiting update.","own-application-readyToSubmit":"application is now submitted.","own-application-submittedToCompany":"application has been rejected.","own-application-rejected":"application has been rejected.","own-application-processLater":"application is now submitted."},n=t.getNotificationText=function(e){if(i[e])return i[e]};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"show","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/Notifications.utils.js"),__REACT_HOT_LOADER__.register(i,"notificationText","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/Notifications.utils.js"),__REACT_HOT_LOADER__.register(n,"getNotificationText","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/Notifications.utils.js"))})()},2852:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a,s,r=o(13),l=i(r),d=o(12),u=i(d),f=o(14),c=i(f),_=o(16),p=i(_),w=o(15),m=i(w),g=o(0),N=i(g),A=o(5),E=o(456),y=i(E),R=o(2853),v=i(R),T=o(473),O=function(e){var t=e.notifications;return{notifications:t}},h={markAsRead:T.markAsRead},j=[],b=(n=(0,A.connect)(O,h),a=(0,y.default)(j),n(s=a(s=function(e){function t(){return(0,u.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return N.default.createElement(v.default,this.props)}}]),t}(g.Component))||s)||s);t.default=b;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"NotificationsAllContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/NotificationsAll/NotificationsAll.container.js"),__REACT_HOT_LOADER__.register(O,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/NotificationsAll/NotificationsAll.container.js"),__REACT_HOT_LOADER__.register(h,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/NotificationsAll/NotificationsAll.container.js"),__REACT_HOT_LOADER__.register(j,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/NotificationsAll/NotificationsAll.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2853:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(13),a=i(n),s=o(12),r=i(s),l=o(14),d=i(l),u=o(16),f=i(u),c=o(15),_=i(c),p=o(0),w=i(p),m=o(2396),g=i(m),N=function(e){function t(){return(0,r.default)(this,t),(0,f.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.notifications,o=e.markAsRead,i=t&&t.data?t.data:[];return w.default.createElement("div",null,i.length>0?i.map(function(e){return w.default.createElement(g.default,{key:e._id,notification:e,markAsRead:o})}):"No notifications")}}]),t}(p.Component);t.default=N;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(N,"NotificationsUnread","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/NotificationsAll/NotificationsAll.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});