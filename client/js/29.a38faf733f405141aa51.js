webpackJsonp([29,62],{"+qPa":function(e,t){e.exports={project:"UserProjects_project-2zd56"}},"1lL9":function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n,a,d=r("Zx67"),u=s(d),i=r("Zrlr"),c=s(i),_=r("wxAW"),l=s(_),f=r("zwoO"),p=s(f),m=r("Pf15"),j=s(m),R=r("U7vG"),E=s(R),P=r("4n+p"),w=r("YapR"),O=s(w),v=(r("N31G"),r("twox")),A=s(v),T=function(e,t){var r=e.users,s=e.projects,o=t.params;return{user:r[o.stub],projects:s.userProjects[o.stub]||{}}},C={},y=[],h=(o=(0,P.connect)(T,C),n=(0,O.default)(y),o(a=n(a=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,j.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return E.default.createElement(A.default,this.props)}}]),t}(R.Component))||a)||a);t.default=h;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"UserProjectsContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserProjects/UserProjects.container.js"),__REACT_HOT_LOADER__.register(T,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserProjects/UserProjects.container.js"),__REACT_HOT_LOADER__.register(C,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserProjects/UserProjects.container.js"),__REACT_HOT_LOADER__.register(y,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserProjects/UserProjects.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"2k9P":function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("1lL9"),n=s(o);t.default=n.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"5Oyi":function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n,a,d=r("Zx67"),u=s(d),i=r("Zrlr"),c=s(i),_=r("wxAW"),l=s(_),f=r("zwoO"),p=s(f),m=r("Pf15"),j=s(m),R=r("U7vG"),E=s(R),P=r("4n+p"),w=r("YapR"),O=s(w),v=r("N31G"),A=r("9Uyb"),T=s(A),C=function(e,t){var r=t.projectId;return{project:e.projects.data[r]}},y={getProject:v.getProject},h=[{hasChanged:"projectId",onChange:function(e){e.getProject({projectId:e.projectId,size:"md"})}}],b=(o=(0,P.connect)(C,y),n=(0,O.default)(h),o(a=n(a=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,j.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return E.default.createElement(T.default,this.props)}}]),t}(R.Component))||a)||a);t.default=b;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"ProjectContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Projects/ProjectRow/ProjectRow.container.js"),__REACT_HOT_LOADER__.register(C,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Projects/ProjectRow/ProjectRow.container.js"),__REACT_HOT_LOADER__.register(y,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Projects/ProjectRow/ProjectRow.container.js"),__REACT_HOT_LOADER__.register(h,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Projects/ProjectRow/ProjectRow.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"9Uyb":function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r("Zx67"),n=s(o),a=r("Zrlr"),d=s(a),u=r("wxAW"),i=s(u),c=r("zwoO"),_=s(c),l=r("Pf15"),f=s(l),p=r("U7vG"),m=s(p),j=r("PIRZ"),R=s(j),E=r("HW6M"),P=s(E),w=r("PJh5"),O=s(w),v=r("GeCl"),A=s(v),T=r("LZKX"),C=s(T),y=r("tYm5"),h=s(y),b=function(e){function t(){return(0,d.default)(this,t),(0,_.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.project,r=e.className,s=e.size;if(t&&t.data){var o=t.data,n=o._id,a=o.name,d=o.blurb,u=o.picture,i=o.updated;return m.default.createElement("div",{className:(0,P.default)(R.default.project,"layout-row",r)},m.default.createElement("div",{className:"layout-column flex"},m.default.createElement(A.default,{className:(0,P.default)("link-primary",R.default.title),name:"projectRoute",params:{projectId:n}},a||"Untitled Project"),m.default.createElement("div",{className:(0,P.default)("flex",R.default.blurb)},d),m.default.createElement("div",{className:R.default.meta},(0,O.default)(i).fromNow())),"wide"===s&&u?m.default.createElement(A.default,{name:"projectRoute",params:{projectId:n}},m.default.createElement("img",{className:R.default.picture,src:"https://dev.stemn.com"+u+"?size=feed-sm&crop=true"})):null)}return m.default.createElement(h.default,{className:(0,P.default)(R.default.project,"layout-row",r)},m.default.createElement("div",{className:"layout-column flex"},m.default.createElement(C.default,{width:200,className:R.default.title}),m.default.createElement("div",{className:R.default.blurb},m.default.createElement(C.default,{width:320,style:{marginBottom:"5px"}}),m.default.createElement(C.default,{width:300})),m.default.createElement(C.default,{width:200,className:R.default.meta})))}}]),t}(p.Component),N=b,U=N;t.default=U;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"Project","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Projects/ProjectRow/ProjectRow.jsx"),__REACT_HOT_LOADER__.register(N,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Projects/ProjectRow/ProjectRow.jsx"),__REACT_HOT_LOADER__.register(U,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Projects/ProjectRow/ProjectRow.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},NCXo:function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("5Oyi"),n=s(o);t.default=n.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},PIRZ:function(e,t){e.exports={project:"ProjectRow_project-3dNxi",title:"ProjectRow_title-3M7ng",blurb:"ProjectRow_blurb-1NZuS",meta:"ProjectRow_meta-20WCU",picture:"ProjectRow_picture-2PNQn"}},twox:function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("Zx67"),n=s(o),a=r("Zrlr"),d=s(a),u=r("wxAW"),i=s(u),c=r("zwoO"),_=s(c),l=r("Pf15"),f=s(l),p=r("Ba3q"),m=s(p),j=r("U7vG"),R=s(j),E=r("+qPa"),P=s(E),w=r("HW6M"),O=(s(w),r("NCXo")),v=s(O),A=function(e){function t(){return(0,d.default)(this,t),(0,_.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.projects;return R.default.createElement("div",null,R.default.createElement("div",{className:"text-mini-caps"},"Projects"),R.default.createElement("br",null),(0,m.default)(e.data,"updated","desc").map(function(e){return R.default.createElement(v.default,{size:"wide",key:e._id,projectId:e._id,className:P.default.project})}))}}]),t}(j.Component);t.default=A;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(A,"UserProjects","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserProjects/UserProjects.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});