webpackJsonp([46],{1202:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2868),s=a(r);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2713:function(e,t){e.exports={header:"Onboarding_header-L_yHv",title:"Onboarding_title-2cJo6",content:"Onboarding_content-lZ06b"}},2868:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,s,o,i=n(13),d=a(i),u=n(11),l=a(u),_=n(14),c=a(_),f=n(16),p=a(f),O=n(15),v=a(O),g=n(0),E=a(g),b=n(5),m=n(456),A=a(m),T=n(466),C=n(2869),R=a(C),y=function(e){var t=e.users,n=e.auth;return{user:t[n.user._id],currentUser:n.user}},w={getUser:T.getUser},h=[{hasChanged:"currentUser._id",onChange:function(e){e.getUser({userId:e.currentUser._id,force:!0})}}],N=(r=(0,b.connect)(y,w),s=(0,A.default)(h),r(o=s(o=function(e){function t(){return(0,l.default)(this,t),(0,p.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return E.default.createElement(R.default,this.props)}}]),t}(g.Component))||o)||o);t.default=N;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(N,"OnboardingContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Onboarding/Onboarding.container.js"),__REACT_HOT_LOADER__.register(y,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Onboarding/Onboarding.container.js"),__REACT_HOT_LOADER__.register(w,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Onboarding/Onboarding.container.js"),__REACT_HOT_LOADER__.register(h,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Onboarding/Onboarding.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2869:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(13),s=a(r),o=n(11),i=a(o),d=n(14),u=a(d),l=n(16),_=a(l),c=n(15),f=a(c),p=n(0),O=a(p),v=n(492),g=n(102),E=n(2713),b=a(E),m=n(2),A=a(m),T=function(e){function t(){return(0,i.default)(this,t),(0,_.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.user;return O.default.createElement("div",null,O.default.createElement("div",{className:(0,A.default)(b.default.header,"layout-row layout-align-start-center")},O.default.createElement(g.Container,null,O.default.createElement(v.ArrowTabs,{className:"layout-row flex"},O.default.createElement(v.ArrowTab,{activeClassName:"active",arrow:!0,name:"onboardingAboutRoute",onlyActiveOnIndex:!0},"About You"),O.default.createElement(v.ArrowTab,{activeClassName:"active",arrow:!0,name:"onboardingSyncRoute"},"Sync Account"),O.default.createElement(v.ArrowTab,{activeClassName:"active",name:"onboardingDownloadRoute"},"Download")))),O.default.createElement(g.Container,{className:b.default.content},O.default.createElement("div",{className:b.default.title},O.default.createElement("div",{className:"text-title-2"},"Setup Sync"),O.default.createElement("div",{className:"text-title-4"},"Nice! You'll have STEMN up and running very soon")),n&&"lg"===n.dataSize?t:null))}}]),t}(p.Component);t.default=T;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(T,"Onboarding","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Onboarding/Onboarding.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});