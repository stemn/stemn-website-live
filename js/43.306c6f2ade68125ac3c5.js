webpackJsonp([43],{1240:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(2933),r=s(n);t.default=r.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1276:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1280),r=s(n),l=a(135),i=s(l),u=(0,i.default)(r.default.root),d=u;t.default=d;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Panels/InfoPanel/index.js"),__REACT_HOT_LOADER__.register(d,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Panels/InfoPanel/index.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1280:function(e,t){e.exports={border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)",root:"styles_root-2U4JT"}},2739:function(e,t){e.exports={item:"UserDetails_item-1NSTT",main:"UserDetails_main-1JHW-",sub:"UserDetails_sub-39dDc",notes:"UserDetails_notes-2LE7r",summary:"UserDetails_summary-c_YGm"}},2933:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r,l,i=a(13),u=s(i),d=a(11),o=s(d),f=a(14),c=s(f),_=a(16),m=s(_),p=a(15),E=s(p),v=a(0),D=s(v),y=a(5),O=a(459),T=s(O),g=a(2934),C=s(g),A=function(e,t){var a=t.params;return{user:e.users[a.stub],projects:e.projects.userProjects[a.stub]||{}}},R={},U=[],b=(n=(0,y.connect)(A,R),r=(0,T.default)(U),n(l=r(l=function(e){function t(){return(0,o.default)(this,t),(0,m.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return D.default.createElement(C.default,this.props)}}]),t}(v.Component))||l)||l);t.default=b;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"UserDetailsContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserDetails/UserDetails.container.js"),__REACT_HOT_LOADER__.register(A,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserDetails/UserDetails.container.js"),__REACT_HOT_LOADER__.register(R,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserDetails/UserDetails.container.js"),__REACT_HOT_LOADER__.register(U,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserDetails/UserDetails.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2934:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(13),r=s(n),l=a(11),i=s(l),u=a(14),d=s(u),o=a(16),f=s(o),c=a(15),_=s(c),m=a(0),p=s(m),E=a(2739),v=s(E),D=a(2),y=(s(D),a(1276)),O=s(y),T=a(458),g=s(T),C=a(57),A=s(C),R=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.item,t=e.organisations[0]?e.organisations[0].name:e.school;return p.default.createElement("div",{className:v.default.item},p.default.createElement("div",{className:"layout-row layout-align-start-center"},p.default.createElement("div",{className:"flex"},p.default.createElement("div",{className:v.default.main+" text-mini-caps"},p.default.createElement("span",null,e.degree),e.degree&&e.fieldOfStudy?p.default.createElement("span",{className:"text-interpunct"}):null,p.default.createElement("span",null,e.fieldOfStudy)),p.default.createElement("div",{className:v.default.sub+" text-mini-caps"},p.default.createElement("span",null,t),p.default.createElement("span",{className:"text-interpunct"}),p.default.createElement("span",null,e.startDate.year," - ",e.isCurrent?"Current":e.endDate.year))),e.organisations[0]?p.default.createElement(A.default,{name:"organisationRoute",params:{organisationId:e.organisations[0]._id}},p.default.createElement(g.default,{name:e.organisations[0].name,picture:e.organisations[0].picture,shape:"square",display:"contain",size:35})):null),p.default.createElement("p",{className:v.default.notes},e.notes))}}]),t}(m.Component),U=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.item,t=e.organisations[0]?e.organisations[0].name:e.company;return p.default.createElement("div",{className:v.default.item},p.default.createElement("div",{className:"layout-row layout-align-start-center"},p.default.createElement("div",{className:"flex"},p.default.createElement("div",{className:v.default.main+" text-mini-caps"},p.default.createElement("span",null,e.position),e.position&&t?p.default.createElement("span",{className:"text-interpunct"}):null,p.default.createElement("span",null,t)),p.default.createElement("div",{className:v.default.sub+" text-mini-caps"},p.default.createElement("span",null,e.startDate.year," - ",e.isCurrent?"Current":e.endDate.year))),e.organisations[0]?p.default.createElement(A.default,{to:"/"},p.default.createElement(g.default,{name:e.organisations[0].name,picture:e.organisations[0].picture,shape:"square",display:"contain",size:35})):null),p.default.createElement("p",{className:v.default.notes},e.notes))}}]),t}(m.Component),b=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.user;return p.default.createElement("div",null,p.default.createElement("div",{className:"text-mini-caps"},"About"),p.default.createElement("br",null),p.default.createElement(O.default,null,p.default.createElement("p",{className:v.default.summary},e.data.profile.profileDetails.summary)),p.default.createElement("br",null),p.default.createElement("div",{className:"text-mini-caps"},"Education"),p.default.createElement("br",null),p.default.createElement(O.default,null,e.data.profile.profileDetails.education.map(function(e){return p.default.createElement(R,{key:e._id,item:e})})),p.default.createElement("br",null),p.default.createElement("div",{className:"text-mini-caps"},"Experience"),p.default.createElement("br",null),p.default.createElement(O.default,null,e.data.profile.profileDetails.experience.map(function(e){return p.default.createElement(U,{key:e._id,item:e})})))}}]),t}(m.Component);t.default=b;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"UserDetails","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserDetails/UserDetails.js"),__REACT_HOT_LOADER__.register(R,"EducationItem","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserDetails/UserDetails.js"),__REACT_HOT_LOADER__.register(U,"ExperienceItem","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserDetails/UserDetails.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});