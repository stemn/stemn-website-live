webpackJsonp([41,62],{"0sLM":function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l,r,i=a("Zx67"),u=s(i),d=a("Zrlr"),o=s(d),f=a("wxAW"),c=s(f),m=a("zwoO"),p=s(m),_=a("Pf15"),E=s(_),v=a("U7vG"),D=s(v),y=a("4n+p"),g=a("YapR"),O=s(g),C=a("scSe"),T=s(C),U=function(e,t){var a=t.params;return{user:e.users[a.stub],projects:e.projects.userProjects[a.stub]||{}}},A={},N=[],R=(n=(0,y.connect)(U,A),l=(0,O.default)(N),n(r=l(r=function(e){function t(){return(0,o.default)(this,t),(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return D.default.createElement(T.default,this.props)}}]),t}(v.Component))||r)||r);t.default=R;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(R,"UserDetailsContainer","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserDetails/UserDetails.container.js"),__REACT_HOT_LOADER__.register(U,"stateToProps","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserDetails/UserDetails.container.js"),__REACT_HOT_LOADER__.register(A,"dispatchToProps","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserDetails/UserDetails.container.js"),__REACT_HOT_LOADER__.register(N,"fetchConfigs","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserDetails/UserDetails.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},IQ0q:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("0sLM"),l=s(n);t.default=l.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Qx0J:function(e,t){e.exports={item:"UserDetails_item-1NSTT",main:"UserDetails_main-1JHW-",sub:"UserDetails_sub-39dDc",notes:"UserDetails_notes-2LE7r",summary:"UserDetails_summary-c_YGm"}},scSe:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("Zx67"),l=s(n),r=a("Zrlr"),i=s(r),u=a("wxAW"),d=s(u),o=a("zwoO"),f=s(o),c=a("Pf15"),m=s(c),p=a("U7vG"),_=s(p),E=a("Qx0J"),v=s(E),D=a("HW6M"),y=(s(D),a("ycY4")),g=s(y),O=a("vs4/"),C=s(O),T=a("GeCl"),U=s(T),A=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.item,t=e.organisations[0]?e.organisations[0].name:e.school;return _.default.createElement("div",{className:v.default.item},_.default.createElement("div",{className:"layout-row layout-align-start-center"},_.default.createElement("div",{className:"flex"},_.default.createElement("div",{className:v.default.main+" text-mini-caps"},_.default.createElement("span",null,e.degree),e.degree&&e.fieldOfStudy?_.default.createElement("span",{className:"text-interpunct"}):null,_.default.createElement("span",null,e.fieldOfStudy)),_.default.createElement("div",{className:v.default.sub+" text-mini-caps"},_.default.createElement("span",null,t),_.default.createElement("span",{className:"text-interpunct"}),_.default.createElement("span",null,e.startDate.year," - ",e.isCurrent?"Current":e.endDate.year))),e.organisations[0]?_.default.createElement(U.default,{name:"organisationRoute",params:{organisationId:e.organisations[0]._id}},_.default.createElement(C.default,{name:e.organisations[0].name,picture:e.organisations[0].picture,shape:"square",display:"contain",size:35})):null),_.default.createElement("p",{className:v.default.notes},e.notes))}}]),t}(p.Component),N=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.item,t=e.organisations[0]?e.organisations[0].name:e.company;return _.default.createElement("div",{className:v.default.item},_.default.createElement("div",{className:"layout-row layout-align-start-center"},_.default.createElement("div",{className:"flex"},_.default.createElement("div",{className:v.default.main+" text-mini-caps"},_.default.createElement("span",null,e.position),e.position&&t?_.default.createElement("span",{className:"text-interpunct"}):null,_.default.createElement("span",null,t)),_.default.createElement("div",{className:v.default.sub+" text-mini-caps"},_.default.createElement("span",null,e.startDate.year," - ",e.isCurrent?"Current":e.endDate.year))),e.organisations[0]?_.default.createElement(U.default,{to:"/"},_.default.createElement(C.default,{name:e.organisations[0].name,picture:e.organisations[0].picture,shape:"square",display:"contain",size:35})):null),_.default.createElement("p",{className:v.default.notes},e.notes))}}]),t}(p.Component),R=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.user,t=e.data.profile.profileDetails.experience&&e.data.profile.profileDetails.experience.length>0,a=e.data.profile.profileDetails.education&&e.data.profile.profileDetails.education.length>0,s=e.data.profile.profileDetails.summary.length>0;return _.default.createElement("div",null,s&&_.default.createElement("div",null,_.default.createElement("div",{className:"text-mini-caps"},"About"),_.default.createElement("br",null),_.default.createElement(g.default,null,_.default.createElement("p",{className:v.default.summary},e.data.profile.profileDetails.summary)),_.default.createElement("br",null)),a&&_.default.createElement("div",null,_.default.createElement("div",{className:"text-mini-caps"},"Education"),_.default.createElement("br",null),_.default.createElement(g.default,null,e.data.profile.profileDetails.education.map(function(e){return _.default.createElement(A,{key:e._id,item:e})})),_.default.createElement("br",null)),t&&_.default.createElement("div",null,_.default.createElement("div",{className:"text-mini-caps"},"Experience"),_.default.createElement("br",null),_.default.createElement(g.default,null,e.data.profile.profileDetails.experience.map(function(e){return _.default.createElement(N,{key:e._id,item:e})}))),!s&&!t&&!a&&_.default.createElement("div",{className:"text-title-5"},e.data.profile.firstname," has no profile details"))}}]),t}(p.Component);t.default=R;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(R,"UserDetails","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserDetails/UserDetails.js"),__REACT_HOT_LOADER__.register(A,"EducationItem","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserDetails/UserDetails.js"),__REACT_HOT_LOADER__.register(N,"ExperienceItem","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserDetails/UserDetails.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});