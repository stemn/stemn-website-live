webpackJsonp([44,58],{"1vec":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("Zx67"),o=a(r),u=n("Zrlr"),l=a(u),i=n("wxAW"),d=a(i),s=n("zwoO"),f=a(s),c=n("Pf15"),_=a(c),p=n("U7vG"),m=a(p),b=(n("PjCM"),n("Yrew")),A=a(b),E=n("ycY4"),O=a(E),v=n("e8Jd"),g=a(v),y=n("b/sw"),R=a(y),T=n("vs4/"),h=(a(T),n("dXl9")),C=a(h),w=n("KIqL"),L=a(w),N=n("HW6M"),j=(a(N),function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,d.default)(t,[{key:"componentWillUnmount",value:function(){this.props.saveUser({user:this.props.user.data})}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.userModel,a=e.confirmLinkedinImport;return m.default.createElement(g.default,{title:"About You",description:"Add some basic account info. You'll be able to add more details later."},m.default.createElement(O.default,null,m.default.createElement("h3",null,"Want to get a head start"),m.default.createElement("p",null,"Import your profile from Linkedin. This will automatically fill out your profile picture, education and experience."),m.default.createElement(A.default,{onClick:a,className:"linkedin"},"Import from Linkedin")),m.default.createElement(O.default,null,m.default.createElement("h3",null,"Profile Photo"),m.default.createElement("div",{className:"layout-row"},m.default.createElement(C.default,{containerClassName:L.default.container,imageClassName:L.default.image,model:n+".data.profile.picture",value:t.data.profile.picture,uploadId:"UserSettingsAvatar"}),m.default.createElement("p",{className:"flex layout-column layout-align-center-center"},t.data.profile.picture?"Looking good!":"Upload a profile picture"))),m.default.createElement(O.default,null,m.default.createElement("h3",null,"Profile Blurb"),m.default.createElement("p",null,"Introduce yourself in 100 characters"),m.default.createElement(R.default,{model:n+".data.profile.blurb",value:t.data.profile.blurb,className:"dr-input",type:"text",placeholder:"Eg: Structural Engineer @ SpaceX"})),m.default.createElement("br",null),m.default.createElement("div",{className:"layout-row layout-align-end"},m.default.createElement(A.default,{className:"lg primary",name:"onboardingSyncRoute"},"Next: Sync Account")))}}]),t}(p.Component));t.default=j;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(j,"OnboardingAbout","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/OnboardingAbout/OnboardingAbout.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"4x2D":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("YhRA"),o=a(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},KIqL:function(e,t){e.exports={image:"OnboardingAbout_image-22vJl",container:"OnboardingAbout_container-1uJzt"}},YhRA:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,u=n("Zx67"),l=a(u),i=n("Zrlr"),d=a(i),s=n("wxAW"),f=a(s),c=n("zwoO"),_=a(c),p=n("Pf15"),m=a(p),b=n("U7vG"),A=a(b),E=n("4n+p"),O=n("1vec"),v=a(O),g=n("+z2A"),y=n("y+89"),R=function(e){var t=e.users,n=e.auth;return{user:t[n.user._id],userModel:"users."+n.user._id}},T={confirmLinkedinImport:g.confirmLinkedinImport,saveUser:y.saveUser},h=(r=(0,E.connect)(R,T),r(o=function(e){function t(){return(0,d.default)(this,t),(0,_.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){return A.default.createElement(v.default,this.props)}}]),t}(b.Component))||o);t.default=h;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"OnboardingAboutContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/OnboardingAbout/OnboardingAbout.container.js"),__REACT_HOT_LOADER__.register(R,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/OnboardingAbout/OnboardingAbout.container.js"),__REACT_HOT_LOADER__.register(T,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/OnboardingAbout/OnboardingAbout.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});