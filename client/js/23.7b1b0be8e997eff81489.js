webpackJsonp([23,58],{"2QZm":function(e,o){e.exports={panel:"EmailAndNotificationToggles_panel-3HyE8",iconButton:"EmailAndNotificationToggles_iconButton-39-4Q",iconButtonOpen:"EmailAndNotificationToggles_iconButtonOpen-2SBTJ",divider:"EmailAndNotificationToggles_divider-2BWp2",childRow:"EmailAndNotificationToggles_childRow-1XjO1",toggle:"EmailAndNotificationToggles_toggle-3vjXd",miniToggle:"EmailAndNotificationToggles_miniToggle-3QDlE",childToggles:"EmailAndNotificationToggles_childToggles-27cYg"}},"5/es":function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=o.toggleData={"added-project":{name:"Project invites",description:"When someone adds you to a project."},"added-organisation":{name:"Organisation invites",description:"When someone adds you to an organisation."},"invite-accepted":{name:"Project accept",description:"When someone accepts your invite to a project."},"followed-user-project":{name:"Followed user projects",description:"When someone you follow adds a new project."},"followed-user-blog":{name:"Followed user blogs",description:"When someone you follow posts a blog."},"followed-user-general":{name:"Followed user discussions",description:"When someone you follow starts a discussion."},"followed-user-question":{name:"Followed user questions",description:"When someone you follow asks a question."},"followed-project-blog":{name:"Followed project blogs",description:"When a blog is posted on a project you follow."},"followed-project-general":{name:"Followed project discussions",description:"When a discussion is posted on a project you follow."},"followed-project-question":{name:"Followed project questions",description:"When a question is asked on a project you follow."},"followed-field-project":{name:"Followed field projects",description:"When a project is posted to a field you follow."},"followed-field-blog":{name:"Followed field blogs",description:"When a blog is posted to a field you follow."},"followed-field-general":{name:"Followed field discussions",description:"When a discussion is posted to a field you follow."},"followed-field-question":{name:"Followed field questions",description:"When a question is asked on a field you follow."},"followed-organisation-project":{name:"Followed organisation projects",description:"When a project is posted to an organisation you follow."},"followed-organisation-blog":{name:"Followed organisation blogs",description:"When a blog is posted to an organisation you follow."},"followed-organisation-general":{name:"Followed organisation discussions",description:"When a discussion is posted to an organisation you follow."},"followed-organisation-question":{name:"Followed Organisation question",description:"When a question is asked an organisation you follow."},"followed-own-user":{name:"New follower",description:"When someone follows you."},"followed-own-project":{name:"New project follower",description:"When someone follows your project."},"followed-own-question":{name:"New question follower",description:"When someone follows your question."},"followed-own-blog":{name:"New blog follower",description:"When someone follows your blog."},"followed-own-general":{name:"New discussion follower",description:"When someone follows your discussion."},"followed-question-post":{name:"Followed question answers",description:"When someone answers a question you follow."},"followed-blog-post":{name:"Followed blog replies",description:"When someone posts in a blog you follow."},"followed-general-post":{name:"Followed discussion replies",description:"When someone posts in a discussion you follow."},"followed-project-comment":{name:"Followed project replies",description:"When someone posts in a project you follow."},"own-question-post":{name:"Question replies",description:"When someone answers your question."},"own-blog-post":{name:"Blog replies",description:"When someone posts in your blog."},"own-general-post":{name:"Discussion replies",description:"When someone posts in your discussion."},"own-question-like":{name:"Question likes",description:"When someone likes your question."},"own-blog-like":{name:"Blog likes",description:"When someone likes your blog."},"own-general-like":{name:"Discussion likes",description:"When someone likes your discussion."},"own-post-like":{name:"Post likes",description:"When someone likes your post."},"own-post-post":{name:"Post replies",description:"When someone replies to your post."},"own-project-comment":{name:"Project comments",description:"When someone posts in your project."},digest:{name:"Weekly Digests",description:"Just once a week, you'll get a community-curated list of the best space projects."},jobs:{name:"Weekly Jobs Digests",description:"Just once a week, you'll get a personalised list of the latest space jobs based on the fields you follow."},product:{name:"Product Updates",description:"We're proud of every new feature we add to STEMN, and when a new feature is ready for you, we want you to be the first to know."},"own-user-mention":{name:"Direct mentions",description:"When someone mentions you."},"own-project-mention":{name:"Project mentions",description:"When someone mentions your project."},"own-organisation-mention":{name:"Organisation mentions",description:"When someone mentions your organisation."},"own-thread-mention":{name:"Blog, question, and discussion mentions",description:"When someone mentions your blog, question, or discussion."}},n=o.getToggleData=function(e){return t[e]},s=o.notificationToggles=[{name:"Invites",title:"Invites",description:"When you are invited to projects.",toggles:["added-project","added-organisation"]},{name:"FollowedUserProjectCreation",title:"People and Projects you follow",description:"When something is posted by someone or a project you follow.",toggles:["followed-user-project","followed-user-blog","followed-user-general","followed-user-question","followed-project-blog","followed-project-general","followed-project-question"]},{name:"FollowedFieldOrgCreation",title:"Fields and Organisations you follow",description:"When something is posted to a field or organisation you follow.",toggles:["followed-field-project","followed-field-blog","followed-field-general","followed-field-question","followed-organisation-project","followed-organisation-blog","followed-organisation-general","followed-organisation-question"]},{name:"FollowedCreationPost",title:"Blogs, Questions and Discussion you follow",description:"When someone posts on project, blog or thread you follow.",toggles:["followed-question-post","followed-blog-post","followed-general-post","followed-project-comment"]},{name:"FollowedLikeOwnCreation",title:"Likes and Follows on your creations",description:"When others like or follow you or your creations.",toggles:["followed-own-user","followed-own-project","followed-own-blog","followed-own-general","followed-own-question","own-question-like","own-blog-like","own-general-like","own-post-like"]},{name:"OwnCreationsPost",title:"Posts on your creations",description:"When others reply to you or post on your creations.",toggles:["own-question-post","own-blog-post","own-general-post","own-project-comment","own-post-post"]},{name:"Mentions",title:"Mentions",description:"When others mention you or your creations.",toggles:["own-user-mention","own-project-mention","own-organisation-mention","own-thread-mention"]}],i=o.emailToggles=[{name:"News",title:"STEMN News",description:"Friendly emails including community-curated list of the best space projects, the latest STEMN features, and occasional VIP treatment (exclusive previews, invitations to events etc.)",toggles:["digest","jobs","product"]},{name:"Invites",title:"Invites",description:"When you are invited to projects.",toggles:["added-project","added-organisation"]},{name:"FollowedOwnCreation",title:"Follows on your creations",description:"When others follow you or your creations.",toggles:["followed-own-user","followed-own-project","followed-own-question","followed-own-blog","followed-own-general"]},{name:"FollowedUserProjectCreation",title:"People and Projects you follow",description:"When something is posted by someone or a project you follow.",toggles:["followed-user-project","followed-user-blog","followed-user-general","followed-user-question","followed-project-blog","followed-project-general","followed-project-question"]},{name:"FollowedFieldOrgCreation",title:"Fields and Organisations you follow",description:"When something is posted to a field or organisation you follow.",toggles:["followed-field-project","followed-field-blog","followed-field-general","followed-field-question","followed-organisation-project","followed-organisation-blog","followed-organisation-general","followed-organisation-question"]},{name:"FollowedCreationPost",title:"Blogs, Questions and discussion you follow",description:"When someone posts on blog or thread you follow.",toggles:["followed-question-post","followed-blog-post","followed-general-post","followed-project-comment"]},{name:"OwnCreationsPost",title:"Posts on your creations",description:"When others reply to you or post on your creations.",toggles:["own-question-post","own-blog-post","own-general-post","own-project-comment","own-post-post"]},{name:"Mentions",title:"Mentions",description:"When others mention you or your creations.",toggles:["own-user-mention","own-project-mention","own-organisation-mention","own-thread-mention"]}];(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(t,"toggleData","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/EmailAndNotificationToggles/EmailAndNotificationToggles.utils.js"),__REACT_HOT_LOADER__.register(n,"getToggleData","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/EmailAndNotificationToggles/EmailAndNotificationToggles.utils.js"),__REACT_HOT_LOADER__.register(s,"notificationToggles","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/EmailAndNotificationToggles/EmailAndNotificationToggles.utils.js"),__REACT_HOT_LOADER__.register(i,"emailToggles","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/EmailAndNotificationToggles/EmailAndNotificationToggles.utils.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"63uv":function(e,o){e.exports={primary:"rgb(68, 154, 211)",toggle:"Toggle_toggle-3RYEb"}},"9LIT":function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s=t("KaXU"),i=n(s);o.default=i.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"F/Gx":function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var s=t("Zx67"),i=n(s),l=t("Zrlr"),r=n(l),a=t("wxAW"),d=n(a),u=t("zwoO"),g=n(u),c=t("Pf15"),f=n(c),p=t("U7vG"),_=n(p),m=t("9LIT"),w=n(m),T=function(e){function o(){return(0,r.default)(this,o),(0,g.default)(this,(o.__proto__||(0,i.default)(o)).apply(this,arguments))}return(0,f.default)(o,e),(0,d.default)(o,[{key:"componentWillMount",value:function(){this.props.getSettings()}},{key:"render",value:function(){var e=this.props,o=e.toggleValues,t=e.toggleModel,n=e.saveSettings;return _.default.createElement("div",null,_.default.createElement(w.default,{type:"emails",toggleValues:o,toggleModel:t,saveSettings:n}))}}]),o}(p.Component),E=T,y=E;o.default=y;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(T,"SettingsEmails","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsEmails/SettingsEmails.js"),__REACT_HOT_LOADER__.register(E,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsEmails/SettingsEmails.js"),__REACT_HOT_LOADER__.register(y,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsEmails/SettingsEmails.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},KaXU:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var s=t("U7vG"),i=(n(s),t("4n+p")),l=t("+I1Y"),r=t("iqLA"),a=n(r),d=function(){return{}},u={change:l.storeChange},g=(0,i.connect)(d,u)(a.default),c=g;o.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/EmailAndNotificationToggles/EmailAndNotificationToggles.container.js"),__REACT_HOT_LOADER__.register(u,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/EmailAndNotificationToggles/EmailAndNotificationToggles.container.js"),__REACT_HOT_LOADER__.register(g,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/EmailAndNotificationToggles/EmailAndNotificationToggles.container.js"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/EmailAndNotificationToggles/EmailAndNotificationToggles.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},WIDu:function(e,o,t){function n(e){return e&&e.length?s(e):[]}var s=t("Tvex");e.exports=n},iqLA:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s,i,l,r,a=t("bOdI"),d=n(a),u=t("Zx67"),g=n(u),c=t("Zrlr"),f=n(c),p=t("wxAW"),_=n(p),m=t("zwoO"),w=n(m),T=t("Pf15"),E=n(T),y=t("WIDu"),h=n(y),A=t("U7vG"),O=n(A),v=t("5/es"),j=t("xQ/s"),R=n(j),b=t("ycY4"),C=n(b),N=t("2QZm"),W=n(N),D=t("HW6M"),q=n(D),L=t("D2fa"),P=n(L),S=t("O8U9"),H=n(S),k=(i=s=function(e){function o(e){(0,f.default)(this,o);var t=(0,w.default)(this,(o.__proto__||(0,g.default)(o)).call(this,e));return t.togglePanelOpen=function(){return t.__togglePanelOpen__REACT_HOT_LOADER__.apply(t,arguments)},t.getGroupToggleValue=function(){return t.__getGroupToggleValue__REACT_HOT_LOADER__.apply(t,arguments)},t.toggleAll=function(){return t.__toggleAll__REACT_HOT_LOADER__.apply(t,arguments)},t.saveSettings=function(){return t.__saveSettings__REACT_HOT_LOADER__.apply(t,arguments)},t.state={isToggledOpen:!1},t}return(0,E.default)(o,e),(0,_.default)(o,[{key:"__togglePanelOpen__REACT_HOT_LOADER__",value:function(){this.setState({isToggledOpen:!this.state.isToggledOpen})}},{key:"__getGroupToggleValue__REACT_HOT_LOADER__",value:function(){var e=this.props,o=e.toggleValues,t=e.group,n=t.toggles.map(function(e){return o[e]||!1}),s=(0,h.default)(n);return s.length>1?"semi":s[0]}},{key:"__toggleAll__REACT_HOT_LOADER__",value:function(e){var o=e.value,t=this.props,n=t.group,s=t.toggleModel,i=t.change;n.toggles.forEach(function(e){i(s+"."+e,o)}),this.saveSettings()}},{key:"__saveSettings__REACT_HOT_LOADER__",value:function(){setTimeout(this.props.saveSettings,1)}},{key:"render",value:function(){var e=this,o=this.props,t=o.toggleValues,n=o.toggleModel,s=o.group,i=this.state.isToggledOpen,l=this.getGroupToggleValue(),r=i||"semi"===l,a=100,u=50,g=r?{maxHeight:a*s.toggles.length+u+"px"}:{};return O.default.createElement(C.default,{className:W.default.panel},O.default.createElement("div",{className:(0,q.default)(W.default.parentRow,"layout-row layout-align-start-center")},O.default.createElement("div",{className:"flex"},O.default.createElement("h3",null,s.title),O.default.createElement("p",null,s.description)),O.default.createElement("div",{className:"layout-xs-column layout-gt-xs-row layout-align-xs-center layout-align-gt-xs-start-center"},O.default.createElement(P.default,{disabled:"semi"===l,className:(0,q.default)(W.default.iconButton,(0,d.default)({},W.default.iconButtonOpen,r)),onClick:this.togglePanelOpen},O.default.createElement(H.default,{size:25})),O.default.createElement(R.default,{className:W.default.toggle,changeAction:this.toggleAll,value:l}))),O.default.createElement("div",{className:W.default.childToggles,style:g},O.default.createElement("div",{className:W.default.divider}),s.toggles.map(function(o){var s=(0,v.getToggleData)(o);return O.default.createElement("div",{className:(0,q.default)(W.default.childRow,"layout-row layout-align-start-center"),key:o},O.default.createElement("div",{className:"flex"},O.default.createElement("h3",null,s.name),O.default.createElement("p",null,s.description)),O.default.createElement(R.default,{className:(0,q.default)(W.default.miniToggle,W.default.toggle),model:n+"."+o,value:t[o],changeAction:e.saveSettings}))})))}}]),o}(A.Component),s.propTypes={toggleValues:A.PropTypes.object.isRequired,toggleModel:A.PropTypes.string.isRequired,group:A.PropTypes.object.isRequired,saveSettings:A.PropTypes.func.isRequired,change:A.PropTypes.func.isRequired},i),U=(r=l=function(e){function o(){return(0,f.default)(this,o),(0,w.default)(this,(o.__proto__||(0,g.default)(o)).apply(this,arguments))}return(0,E.default)(o,e),(0,_.default)(o,[{key:"render",value:function(){var e=this.props,o=e.toggleValues,t=e.toggleModel,n=e.change,s=e.type,i=e.saveSettings;"emails"===s?v.emailToggles:v.notificationToggles;return O.default.createElement("div",null,v.emailToggles.map(function(e){return O.default.createElement(k,{key:e.name,toggleValues:o,toggleModel:t,group:e,saveSettings:i,change:n})}))}}]),o}(A.Component),l.propTypes={type:A.PropTypes.oneOf(["emails","notifications"]).isRequired,toggleValues:A.PropTypes.object.isRequired,toggleModel:A.PropTypes.string.isRequired,saveSettings:A.PropTypes.func.isRequired,change:A.PropTypes.func.isRequired},r);o.default=U;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(U,"EmailAndNotificationToggles","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/EmailAndNotificationToggles/EmailAndNotificationToggles.jsx"),__REACT_HOT_LOADER__.register(k,"ToggleGroup","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/EmailAndNotificationToggles/EmailAndNotificationToggles.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},vwLr:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s=t("zYoU"),i=n(s);o.default=i.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"xQ/s":function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var s=t("U7vG"),i=n(s),l=t("xwNf"),r=n(l),a=t("HW6M"),d=n(a),u=t("63uv"),g=n(u),c=i.default.createClass({displayName:"_default",render:function(){var e=this.props,o=e.value,t=e.model,n=e.title,s=e.className,l=e.disabled,a=e.changeAction,u=function(){return"semi"===o?"semi":o?"checked":""},c=Math.random().toString(36).substring(7);return i.default.createElement("div",{title:n,className:(0,d.default)(s,g.default.toggle,{disabled:l})},i.default.createElement(r.default,{type:"checkbox",value:o,model:t,changeAction:a,className:u(),id:c}),i.default.createElement("label",{htmlFor:c}))}}),f=c;o.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Input/Toggle/Toggle.jsx"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Input/Toggle/Toggle.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},zYoU:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s,i,l=t("Zx67"),r=n(l),a=t("Zrlr"),d=n(a),u=t("wxAW"),g=n(u),c=t("zwoO"),f=n(c),p=t("Pf15"),_=n(p),m=t("U7vG"),w=n(m),T=t("4n+p"),E=t("6fbs"),y=t("F/Gx"),h=n(y),A=function(e){var o=e.userSettings;return{toggleValues:o.data.emails,toggleModel:"userSettings.data.emails"}},O={getSettings:E.getSettings,saveSettings:E.saveSettings},v=(s=(0,T.connect)(A,O),s(i=function(e){function o(){return(0,d.default)(this,o),(0,f.default)(this,(o.__proto__||(0,r.default)(o)).apply(this,arguments))}return(0,_.default)(o,e),(0,g.default)(o,[{key:"render",value:function(){return w.default.createElement(h.default,this.props)}}]),o}(m.Component))||i);o.default=v;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(v,"SettingsEmailsContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsEmails/SettingsEmails.container.js"),__REACT_HOT_LOADER__.register(A,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsEmails/SettingsEmails.container.js"),__REACT_HOT_LOADER__.register(O,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsEmails/SettingsEmails.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});