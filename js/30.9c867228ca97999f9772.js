webpackJsonp([30],{1327:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var l=t(3087),s=n(l);o.default=s.default},1421:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var l=t(1425),s=n(l),i=t(168),a=n(i);o.default=(0,a.default)(s.default.root)},1425:function(e,o){e.exports={border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)",root:"styles_root-2U4JT"}},2865:function(e,o){e.exports={primary:"rgb(68, 154, 211)",toggle:"Toggle_toggle-3RYEb"}},2877:function(e,o){e.exports={panel:"EmailAndNotificationToggles_panel-3HyE8",iconButton:"EmailAndNotificationToggles_iconButton-39-4Q",iconButtonOpen:"EmailAndNotificationToggles_iconButtonOpen-2SBTJ",divider:"EmailAndNotificationToggles_divider-2BWp2",childRow:"EmailAndNotificationToggles_childRow-1XjO1",toggle:"EmailAndNotificationToggles_toggle-3vjXd",miniToggle:"EmailAndNotificationToggles_miniToggle-3QDlE",childToggles:"EmailAndNotificationToggles_childToggles-27cYg"}},2949:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var l=t(0),s=n(l),i=t(62),a=n(i),r=t(1),d=n(r),u=t(2865),c=n(u);o.default=s.default.createClass({displayName:"Toggle",render:function(){var e=this.props,o=e.value,t=e.model,n=e.title,l=e.className,i=e.disabled,r=e.changeAction,u=function(){return"semi"===o?"semi":o?"checked":""},g=Math.random().toString(36).substring(7);return s.default.createElement("div",{title:n,className:(0,d.default)(l,c.default.toggle,{disabled:i})},s.default.createElement(a.default,{type:"checkbox",value:o,model:t,changeAction:r,className:u(),id:g}),s.default.createElement("label",{htmlFor:g}))}})},2996:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var l=t(0),s=(n(l),t(5)),i=t(15),a=t(2997),r=n(a),d=function(){return{}},u={change:i.actions.change};o.default=(0,s.connect)(d,u)(r.default)},2997:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var l=t(35),s=n(l),i=t(10),a=n(i),r=t(9),d=n(r),u=t(11),c=n(u),g=t(13),f=n(g),p=t(12),w=n(p),m=t(3123),h=n(m),y=t(0),v=n(y),j=t(2998),b=t(2949),_=n(b),W=t(1421),E=n(W),T=t(2877),k=n(T),q=t(1),N=n(q),F=t(73),S=n(F),M=t(267),P=n(M),O=v.default.createElement(P.default,{size:25}),C=function(e){function o(e){(0,d.default)(this,o);var t=(0,f.default)(this,(o.__proto__||(0,a.default)(o)).call(this,e));return t.togglePanelOpen=function(){t.setState({isToggledOpen:!t.state.isToggledOpen})},t.getGroupToggleValue=function(){var e=t.props,o=e.toggleValues,n=e.group,l=n.toggles.map(function(e){return o[e]||!1}),s=(0,h.default)(l);return s.length>1?"semi":s[0]},t.toggleAll=function(e){var o=e.value,n=t.props,l=n.group,s=n.toggleModel,i=n.change;l.toggles.forEach(function(e){i(s+"."+e,o)}),t.saveSettings()},t.saveSettings=function(){setTimeout(t.props.saveSettings,1)},t.state={isToggledOpen:!1},t}return(0,w.default)(o,e),(0,c.default)(o,[{key:"render",value:function(){var e=this,o=this.props,t=o.toggleValues,n=o.toggleModel,l=o.group,i=this.state.isToggledOpen,a=this.getGroupToggleValue(),r=i||"semi"===a,d=100,u=50,c=r?{maxHeight:d*l.toggles.length+u+"px"}:{};return v.default.createElement(E.default,{className:k.default.panel},v.default.createElement("div",{className:(0,N.default)(k.default.parentRow,"layout-row layout-align-start-center")},v.default.createElement("div",{className:"flex"},v.default.createElement("h3",null,l.title),v.default.createElement("p",null,l.description)),v.default.createElement("div",{className:"layout-xs-column layout-gt-xs-row layout-align-xs-center layout-align-gt-xs-start-center"},v.default.createElement(S.default,{disabled:"semi"===a,className:(0,N.default)(k.default.iconButton,(0,s.default)({},k.default.iconButtonOpen,r)),onClick:this.togglePanelOpen},O),v.default.createElement(_.default,{className:k.default.toggle,changeAction:this.toggleAll,value:a}))),v.default.createElement("div",{className:k.default.childToggles,style:c},v.default.createElement("div",{className:k.default.divider}),l.toggles.map(function(o){var l=(0,j.getToggleData)(o);return v.default.createElement("div",{className:(0,N.default)(k.default.childRow,"layout-row layout-align-start-center"),key:o},v.default.createElement("div",{className:"flex"},v.default.createElement("h3",null,l.name),v.default.createElement("p",null,l.description)),v.default.createElement(_.default,{className:(0,N.default)(k.default.miniToggle,k.default.toggle),model:n+"."+o,value:t[o],changeAction:e.saveSettings}))})))}}]),o}(y.Component),A=function(e){function o(){return(0,d.default)(this,o),(0,f.default)(this,(o.__proto__||(0,a.default)(o)).apply(this,arguments))}return(0,w.default)(o,e),(0,c.default)(o,[{key:"render",value:function(){var e=this.props,o=e.toggleValues,t=e.toggleModel,n=e.change,l=e.type,s=e.saveSettings;"emails"===l?j.emailToggles:j.notificationToggles;return v.default.createElement("div",null,j.emailToggles.map(function(e){return v.default.createElement(C,{key:e.name,toggleValues:o,toggleModel:t,group:e,saveSettings:s,change:n})}))}}]),o}(y.Component);o.default=A},2998:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=o.toggleData={"added-project":{name:"Project invites",description:"When someone adds you to a project."},"added-organisation":{name:"Organisation invites",description:"When someone adds you to an organisation."},"invite-accepted":{name:"Project accept",description:"When someone accepts your invite to a project."},"followed-user-project":{name:"Followed user projects",description:"When someone you follow adds a new project."},"followed-user-blog":{name:"Followed user blogs",description:"When someone you follow posts a blog."},"followed-user-general":{name:"Followed user discussions",description:"When someone you follow starts a discussion."},"followed-user-question":{name:"Followed user questions",description:"When someone you follow asks a question."},"followed-project-blog":{name:"Followed project blogs",description:"When a blog is posted on a project you follow."},"followed-project-general":{name:"Followed project discussions",description:"When a discussion is posted on a project you follow."},"followed-project-question":{name:"Followed project questions",description:"When a question is asked on a project you follow."},"followed-field-project":{name:"Followed field projects",description:"When a project is posted to a field you follow."},"followed-field-blog":{name:"Followed field blogs",description:"When a blog is posted to a field you follow."},"followed-field-general":{name:"Followed field discussions",description:"When a discussion is posted to a field you follow."},"followed-field-question":{name:"Followed field questions",description:"When a question is asked on a field you follow."},"followed-organisation-project":{name:"Followed organisation projects",description:"When a project is posted to an organisation you follow."},"followed-organisation-blog":{name:"Followed organisation blogs",description:"When a blog is posted to an organisation you follow."},"followed-organisation-general":{name:"Followed organisation discussions",description:"When a discussion is posted to an organisation you follow."},"followed-organisation-question":{name:"Followed Organisation question",description:"When a question is asked an organisation you follow."},"followed-own-user":{name:"New follower",description:"When someone follows you."},"followed-own-project":{name:"New project follower",description:"When someone follows your project."},"followed-own-question":{name:"New question follower",description:"When someone follows your question."},"followed-own-blog":{name:"New blog follower",description:"When someone follows your blog."},"followed-own-general":{name:"New discussion follower",description:"When someone follows your discussion."},"followed-question-post":{name:"Followed question answers",description:"When someone answers a question you follow."},"followed-blog-post":{name:"Followed blog replies",description:"When someone posts in a blog you follow."},"followed-general-post":{name:"Followed discussion replies",description:"When someone posts in a discussion you follow."},"followed-project-comment":{name:"Followed project replies",description:"When someone posts in a project you follow."},"own-question-post":{name:"Question replies",description:"When someone answers your question."},"own-blog-post":{name:"Blog replies",description:"When someone posts in your blog."},"own-general-post":{name:"Discussion replies",description:"When someone posts in your discussion."},"own-question-like":{name:"Question likes",description:"When someone likes your question."},"own-blog-like":{name:"Blog likes",description:"When someone likes your blog."},"own-general-like":{name:"Discussion likes",description:"When someone likes your discussion."},"own-post-like":{name:"Post likes",description:"When someone likes your post."},"own-post-post":{name:"Post replies",description:"When someone replies to your post."},"own-project-comment":{name:"Project comments",description:"When someone posts in your project."},digest:{name:"Weekly Digests",description:"Just once a week, you'll get a community-curated list of the best space projects."},jobs:{name:"Weekly Jobs Digests",description:"Just once a week, you'll get a personalised list of the latest space jobs based on the fields you follow."},product:{name:"Product Updates",description:"We're proud of every new feature we add to STEMN, and when a new feature is ready for you, we want you to be the first to know."},"own-user-mention":{name:"Direct mentions",description:"When someone mentions you."},"own-project-mention":{name:"Project mentions",description:"When someone mentions your project."},"own-organisation-mention":{name:"Organisation mentions",description:"When someone mentions your organisation."},"own-thread-mention":{name:"Blog, question, and discussion mentions",description:"When someone mentions your blog, question, or discussion."}};o.getToggleData=function(e){return t[e]},o.notificationToggles=[{name:"Invites",title:"Invites",description:"When you are invited to projects.",toggles:["added-project","added-organisation"]},{name:"FollowedUserProjectCreation",title:"People and Projects you follow",description:"When something is posted by someone or a project you follow.",toggles:["followed-user-project","followed-user-blog","followed-user-general","followed-user-question","followed-project-blog","followed-project-general","followed-project-question"]},{name:"FollowedFieldOrgCreation",title:"Fields and Organisations you follow",description:"When something is posted to a field or organisation you follow.",toggles:["followed-field-project","followed-field-blog","followed-field-general","followed-field-question","followed-organisation-project","followed-organisation-blog","followed-organisation-general","followed-organisation-question"]},{name:"FollowedCreationPost",title:"Blogs, Questions and Discussion you follow",description:"When someone posts on project, blog or thread you follow.",toggles:["followed-question-post","followed-blog-post","followed-general-post","followed-project-comment"]},{name:"FollowedLikeOwnCreation",title:"Likes and Follows on your creations",description:"When others like or follow you or your creations.",toggles:["followed-own-user","followed-own-project","followed-own-blog","followed-own-general","followed-own-question","own-question-like","own-blog-like","own-general-like","own-post-like"]},{name:"OwnCreationsPost",title:"Posts on your creations",description:"When others reply to you or post on your creations.",toggles:["own-question-post","own-blog-post","own-general-post","own-project-comment","own-post-post"]},{name:"Mentions",title:"Mentions",description:"When others mention you or your creations.",toggles:["own-user-mention","own-project-mention","own-organisation-mention","own-thread-mention"]}],o.emailToggles=[{name:"News",title:"STEMN News",description:"Friendly emails including community-curated list of the best space projects, the latest STEMN features, and occasional VIP treatment (exclusive previews, invitations to events etc.)",toggles:["digest","jobs","product"]},{name:"Invites",title:"Invites",description:"When you are invited to projects.",toggles:["added-project","added-organisation"]},{name:"FollowedOwnCreation",title:"Follows on your creations",description:"When others follow you or your creations.",toggles:["followed-own-user","followed-own-project","followed-own-question","followed-own-blog","followed-own-general"]},{name:"FollowedUserProjectCreation",title:"People and Projects you follow",description:"When something is posted by someone or a project you follow.",toggles:["followed-user-project","followed-user-blog","followed-user-general","followed-user-question","followed-project-blog","followed-project-general","followed-project-question"]},{name:"FollowedFieldOrgCreation",title:"Fields and Organisations you follow",description:"When something is posted to a field or organisation you follow.",toggles:["followed-field-project","followed-field-blog","followed-field-general","followed-field-question","followed-organisation-project","followed-organisation-blog","followed-organisation-general","followed-organisation-question"]},{name:"FollowedCreationPost",title:"Blogs, Questions and discussion you follow",description:"When someone posts on blog or thread you follow.",toggles:["followed-question-post","followed-blog-post","followed-general-post","followed-project-comment"]},{name:"OwnCreationsPost",title:"Posts on your creations",description:"When others reply to you or post on your creations.",toggles:["own-question-post","own-blog-post","own-general-post","own-project-comment","own-post-post"]},{name:"Mentions",title:"Mentions",description:"When others mention you or your creations.",toggles:["own-user-mention","own-project-mention","own-organisation-mention","own-thread-mention"]}]},2999:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var l=t(2996),s=n(l);o.default=s.default},3010:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.getSettings=function(){return{type:"USER_SETTINGS/GET_SETTINGS",http:!0,payload:{url:"api/v1/settings",method:"GET"}}},o.saveSettings=function(){return function(e,o){return e({type:"USER_SETTINGS/SAVE_SETTINGS",http:!0,payload:{url:"api/v1/settings/"+o().auth.user._id,method:"PUT",data:o().userSettings.data}})}}},3087:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var l,s,i=t(10),a=n(i),r=t(9),d=n(r),u=t(11),c=n(u),g=t(13),f=n(g),p=t(12),w=n(p),m=t(0),h=n(m),y=t(5),v=t(3010),j=t(3088),b=n(j),_=function(e){var o=e.userSettings;return{toggleValues:o.data.emails,toggleModel:"userSettings.data.emails"}},W={getSettings:v.getSettings,saveSettings:v.saveSettings},E=(l=(0,y.connect)(_,W),l(s=function(e){function o(){return(0,d.default)(this,o),(0,f.default)(this,(o.__proto__||(0,a.default)(o)).apply(this,arguments))}return(0,w.default)(o,e),(0,c.default)(o,[{key:"render",value:function(){return h.default.createElement(b.default,this.props)}}]),o}(m.Component))||s);o.default=E},3088:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var l=t(10),s=n(l),i=t(9),a=n(i),r=t(11),d=n(r),u=t(13),c=n(u),g=t(12),f=n(g),p=t(0),w=n(p),m=t(2999),h=n(m),y=function(e){function o(){return(0,a.default)(this,o),(0,c.default)(this,(o.__proto__||(0,s.default)(o)).apply(this,arguments))}return(0,f.default)(o,e),(0,d.default)(o,[{key:"componentWillMount",value:function(){this.props.getSettings()}},{key:"render",value:function(){var e=this.props,o=e.toggleValues,t=e.toggleModel,n=e.saveSettings;return w.default.createElement("div",null,w.default.createElement(h.default,{type:"emails",toggleValues:o,toggleModel:t,saveSettings:n}))}}]),o}(p.Component);o.default=y},3123:function(e,o,t){function n(e){return e&&e.length?l(e):[]}var l=t(493);e.exports=n}});