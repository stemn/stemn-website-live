webpackJsonp([44],{1197:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(2857),a=n(i);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2332:function(e,t){e.exports={notification:"NotificationItem_notification-1bNwj",avatar1:"NotificationItem_avatar1-34y8V",avatar2:"NotificationItem_avatar2-1bVGa",meta:"NotificationItem_meta-MO2Ej",mark:"NotificationItem_mark-3moTT",markRead:"NotificationItem_markRead-2cAIT"}},2399:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(38),a=n(i),s=o(13),r=n(s),d=o(11),l=n(d),u=o(14),f=n(u),c=o(16),_=n(c),p=o(15),m=n(p),w=o(0),g=n(w),N=o(2332),E=n(N),y=o(2),v=n(y),R=o(1),T=n(R),A=o(455),O=n(A),h=o(464),j=n(h),b=o(57),C=n(b),k=o(2400),U=function(e){function t(){return(0,l.default)(this,t),(0,_.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.notification,o=e.markAsRead,n=t._id,i=t.type,s=t.read,r=t.timestamp,d=(t.id1,t.name1),l=t.picture1,u=t.link1,f=(t.id2,t.name2),c=t.picture2,_=t.link2,p=function(){return o(n)};return g.default.createElement("div",{className:(0,v.default)(E.default.notification,"layout-row layout-align-start-center")},g.default.createElement(C.default,{className:"layout-row layout-align-start-center",name:"userRoute",params:{link1:u}},g.default.createElement(O.default,{className:E.default.avatar1,picture:l,size:"33",shape:"square"})),g.default.createElement("div",{className:"flex"},g.default.createElement("div",{className:"text-ellipsis"},g.default.createElement(C.default,{className:(0,v.default)("link-primary"),to:u},d),g.default.createElement("span",null," ",(0,k.getNotificationText)(i)),g.default.createElement(C.default,{className:(0,v.default)("link-primary"),to:_}," ",f)),g.default.createElement("div",{className:E.default.meta},(0,T.default)(r).fromNow())),c?g.default.createElement(C.default,{name:"userRoute",params:{link2:_}},g.default.createElement(O.default,{className:E.default.avatar2,picture:c,size:"33",shape:"square"})):null,g.default.createElement("a",{className:(0,v.default)(E.default.mark,(0,a.default)({},E.default.markRead,s)),onClick:p},g.default.createElement(j.default,{size:24})))}}]),t}(w.Component),L=U,D=L;t.default=D;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(U,"NotificationItem","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/NotificationItem/NotificationItem.js"),__REACT_HOT_LOADER__.register(L,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/NotificationItem/NotificationItem.js"),__REACT_HOT_LOADER__.register(D,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/NotificationItem/NotificationItem.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2400:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=t.show=function(e){new Notification(e.title,e)},n={"added-project":"added you to their project","added-organisation":"added you to the organisation","invite-accepted":"joined","followed-user-project":"has a new project","followed-user-blog":"has a new blog","followed-user-general":"has a new discussion","followed-user-question":"has a new question","followed-project-blog":"has a new blog","followed-project-general":"has a new discussion","followed-project-question":"has a new question","followed-project-post":"commented","followed-field-project":"has a new project","followed-field-blog":"has a new blog","followed-field-general":"has a new discussion","followed-organisation-project":"has a new project","followed-field-question":"has a new question","followed-organisation-blog":"has a new blog","followed-organisation-general":"has a new discussion","followed-organisation-question":"has a new question","followed-own-user":"is now following you.","followed-own-project":"is now following your project","followed-own-question":"is now following your question","followed-own-blog":"is now following your blog","followed-own-general":"is now following your discussion","followed-own-organisation":"is now following your organisation","followed-question-post":"posted an answer in","followed-blog-post":"posted a comment on","followed-general-post":"posted a reply in","own-question-post":"answered your question","own-blog-post":"posted on your blog","own-general-post":"replied in your discussion","own-question-like":"liked your question","own-blog-like":"liked your blog","own-general-like":"liked your discussion","own-post-like":"liked your post","own-post-post":"replied to your post","own-user-mention":"mentioned you in","own-project-mention":"mentioned your project in","own-organisation-mention":"mentioned your organisation in","own-blog-mention":"mentioned your blog in","own-general-mention":"mentioned your discussion in","own-question-mention":"mentioned your question in","own-application-pendingReview":"application is now pending review.","own-application-underReview":"application is now under review.","own-application-awaitingUpdate":"application is awaiting update.","own-application-readyToSubmit":"application is now submitted.","own-application-submittedToCompany":"application has been rejected.","own-application-rejected":"application has been rejected.","own-application-processLater":"application is now submitted."},i=t.getNotificationText=function(e){if(n[e])return n[e]};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"show","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/Notifications.utils.js"),__REACT_HOT_LOADER__.register(n,"notificationText","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/Notifications.utils.js"),__REACT_HOT_LOADER__.register(i,"getNotificationText","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Notifications/Notifications.utils.js"))})()},2857:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a,s,r=o(13),d=n(r),l=o(11),u=n(l),f=o(14),c=n(f),_=o(16),p=n(_),m=o(15),w=n(m),g=o(0),N=n(g),E=o(5),y=o(456),v=n(y),R=o(2858),T=n(R),A=o(475),O=function(e){var t=e.notifications;return{notifications:t}},h={markAsRead:A.markAsRead},j=[],b=(i=(0,E.connect)(O,h),a=(0,v.default)(j),i(s=a(s=function(e){function t(){return(0,u.default)(this,t),(0,p.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,w.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return N.default.createElement(T.default,this.props)}}]),t}(g.Component))||s)||s);t.default=b;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"NotificationsUnreadContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/NotificationsUnread/NotificationsUnread.container.js"),__REACT_HOT_LOADER__.register(O,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/NotificationsUnread/NotificationsUnread.container.js"),__REACT_HOT_LOADER__.register(h,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/NotificationsUnread/NotificationsUnread.container.js"),__REACT_HOT_LOADER__.register(j,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/NotificationsUnread/NotificationsUnread.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2858:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(13),a=n(i),s=o(11),r=n(s),d=o(14),l=n(d),u=o(16),f=n(u),c=o(15),_=n(c),p=o(0),m=n(p),w=o(2399),g=n(w),N=function(e){function t(){return(0,r.default)(this,t),(0,f.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.notifications,o=e.markAsRead,n=t&&t.data?t.data.filter(function(e){return!e.read}):[];return m.default.createElement("div",null,n.length>0?n.map(function(e){return m.default.createElement(g.default,{key:e._id,notification:e,markAsRead:o})}):m.default.createElement("div",{className:"text-title-5"},"No unread notifications"))}}]),t}(p.Component);t.default=N;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(N,"NotificationsUnread","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/NotificationsUnread/NotificationsUnread.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});