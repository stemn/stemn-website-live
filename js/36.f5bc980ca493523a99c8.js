webpackJsonp([36],{1228:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2910),a=s(r);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1385:function(e,t){e.exports={header:"SubHeader_header-uYZTB",headerInner:"SubHeader_headerInner-1OqIO",title:"SubHeader_title-BRVLr"}},1387:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a,o=n(31),i=s(o),d=n(13),u=s(d),_=n(11),l=s(_),f=n(14),c=s(f),p=n(16),m=s(p),T=n(15),O=s(T),E=n(0),R=s(E),A=n(1385),v=s(A),y=n(2),j=s(y),b=n(102),h=(a=r=function(e){function t(){return(0,l.default)(this,t),(0,m.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,O.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children,s=e.noline,r=e.icon,a=e.style,o=e.noResponsive,d=s?{}:{borderBottom:"1px solid rgba(0, 0, 0, 0.1)"},u=o?"layout-row":"layout-xs-column layout-sm-column layout-gt-sm-row layout-align-xs-end layout-align-sm-end";return R.default.createElement("div",{className:v.default.header,style:(0,i.default)({},d,a)},R.default.createElement(b.Container,{className:(0,j.default)(v.default.headerInner,u)},R.default.createElement("h1",{className:(0,j.default)(v.default.title,"layout-row layout-align-start-center")},r,t),t&&R.default.createElement("div",{className:"flex"}),n))}}]),t}(E.Component),r.propTypes={title:E.PropTypes.string,children:E.PropTypes.node,noline:E.PropTypes.bool,style:E.PropTypes.object,icon:E.PropTypes.node,noResponsive:E.PropTypes.bool},a);t.default=h;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(h,"SubHeader","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/modules/SubHeader/SubHeader.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1388:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(1387),a=s(r);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1773:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={"public":1,user:2,viewer:3,collaborator:4,admin:5,superAdmin:6},s=t.permissionsGetLevel=function(e){return n[e]},r=t.permissionsIsMin=function(e,t){return s(e)>=s(t)};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"permissionsGetLevel","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Auth/Auth.utils.js"),__REACT_HOT_LOADER__.register(r,"permissionsIsMin","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Auth/Auth.utils.js"),__REACT_HOT_LOADER__.register(n,"permissionLevels","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Auth/Auth.utils.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1794:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r,a,o=n(13),i=s(o),d=n(11),u=s(d),_=n(14),l=s(_),f=n(16),c=s(f),p=n(15),m=s(p),T=n(0),O=(s(T),n(5)),E=n(1773),R=(a=r=function(e){function t(){return(0,u.default)(this,t),(0,c.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.userId,n=e.minRole,s=e.team,r=e.ownerId,a=e.children,o=null;if(r&&r===t)o=a;else if(s){var i=s.find(function(e){return e._id===t});i&&i.permissions&&(0,E.permissionsIsMin)(i.permissions.role,n)&&(o=a)}return o}}]),t}(T.Component),r.propTypes={ownerId:T.PropTypes.string,team:T.PropTypes.array,userId:T.PropTypes.string.isRequired,children:T.PropTypes.node.isRequired,minRole:T.PropTypes.string},a),A=function(e){var t=e.auth;return{userId:t.user._id}},v=(0,O.connect)(A)(R),y=v;t.default=y;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(R,"IsOwner","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Auth/IsOwner/IsOwner.jsx"),__REACT_HOT_LOADER__.register(A,"mapStateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Auth/IsOwner/IsOwner.jsx"),__REACT_HOT_LOADER__.register(v,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Auth/IsOwner/IsOwner.jsx"),__REACT_HOT_LOADER__.register(y,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Auth/IsOwner/IsOwner.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1821:function(e,t){e.exports={primary:"rgb(68, 154, 211)",border1:"rgba(0, 0, 0, 0.1)","grey-3":"rgba(0, 0, 0, 0.5)",tabs:"Tabs_tabs-1uuJ4",noLine:"Tabs_noLine-nolkc",inner:"Tabs_inner-3nnlF",tabsLg:"Tabs_tabsLg-2y561"}},1837:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(38),a=s(r),o=n(0),i=s(o),d=n(1821),u=s(d),_=n(2),l=s(_),f=function(e){var t,n=(0,l.default)(u.default.tabs,(t={},(0,a.default)(t,u.default.tabsLg,"lg"===e.size),(0,a.default)(t,u.default.noLine,e.noline),t),e.className),s=(0,l.default)("tabs-inner","layout-row",u.default.inner);return i.default.createElement("div",{className:n,style:e.style},i.default.createElement("div",{className:s},e.children))},c=f;t.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tabs/Tabs.jsx"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tabs/Tabs.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2733:205,2756:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(1794),a=s(r);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2910:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r,a,o,i=n(13),d=s(i),u=n(11),_=s(u),l=n(14),f=s(l),c=n(16),p=s(c),m=n(15),T=s(m),O=n(0),E=s(O),R=n(5),A=(n(17),n(459)),v=s(A),y=n(136),j=n(2911),b=s(j),h=function(e,t){var n=e.projects,s=t.params,r=t.location;return{project:n.data[s.stub],pathname:r.pathname}},C={getProject:y.getProject},g=[{hasChanged:"params.stub",onChange:function(e){e.getProject({projectId:e.params.stub,size:"lg",force:!0})}}],w=(r=(0,R.connect)(h,C),a=(0,v.default)(g),r(o=a(o=function(e){function t(){return(0,_.default)(this,t),(0,p.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,T.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){return E.default.createElement(b.default,this.props)}}]),t}(O.Component))||o)||o),L=w,H=L;t.default=H;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(C,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(g,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(w,"ProjectContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(L,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(H,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2911:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(13),a=s(r),o=n(11),i=s(o),d=n(14),u=s(d),_=n(16),l=s(_),f=n(15),c=s(f),p=n(0),m=s(p),T=n(2),O=(s(T),n(2733)),E=(s(O),n(463)),R=n(466),A=s(R),v=n(1837),y=s(v),j=(n(102),n(460)),b=n(57),h=s(b),C=n(458),g=(s(C),n(1388)),w=s(g),L=n(2756),H=s(L),P=n(485),D=s(P),I=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.project,s=(e.pathname,e.currentUser,{projectId:(0,j.get)(n,"data._id")}),r=m.default.createElement(D.default,{type:(0,j.get)(n,"data.permissions.projectType","public"),style:{marginRight:"8px"},size:30});return m.default.createElement(A.default,{style:{marginTop:"30px"},nofooter:!0},m.default.createElement(E.Helmet,null,(0,j.has)(n,"data.name")&&m.default.createElement("title",null,n.data.name+": "+n.data.blurb)),m.default.createElement(w.default,{title:(0,j.get)(n,"data.name"," ")||"Untitled Project",noline:!0,icon:r},m.default.createElement(y.default,{noline:!0},m.default.createElement(h.default,{activeIf:{is:["projectRoute"],includes:["projectFilesRoute"]},name:"projectRoute",params:s},"Overview"),m.default.createElement(h.default,{activeIf:{includes:["projectTeamRoute"]},name:"projectTeamRoute",params:s},"Team"),m.default.createElement(h.default,{activeIf:{includes:["projectCommitsRoute"]},name:"projectCommitsRoute",params:s},"History"),m.default.createElement(h.default,{activeIf:{includes:["projectTasksRoute"]},name:"projectTasksRoute",params:s},"Threads"),m.default.createElement(H.default,{team:(0,j.get)(n,"data.team",[]),minRole:"admin"},m.default.createElement(h.default,{activeIf:{includes:["projectSettingsRoute"]},name:"projectSettingsRoute",params:s},"Settings")))),m.default.createElement("div",{className:"flex layout-column"},n&&n.data&&"lg"===n.dataSize?t:null))}}]),t}(p.Component);t.default=I}});