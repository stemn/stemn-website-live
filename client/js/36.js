webpackJsonp([36],{1207:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(2890),o=n(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1364:function(e,t){e.exports={header:"SubHeader_header-uYZTB",headerInner:"SubHeader_headerInner-1OqIO",title:"SubHeader_title-BRVLr"}},1366:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,a=s(35),i=n(a),d=s(14),u=n(d),_=s(13),l=n(_),f=s(15),c=n(f),p=s(17),m=n(p),T=s(16),O=n(T),R=s(0),E=n(R),A=s(1364),j=n(A),v=s(2),y=n(v),C=s(101),b=(o=r=function(e){function t(){return(0,l.default)(this,t),(0,m.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,O.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,s=e.children,n=e.noline,r=e.icon,o=e.style,a=e.noResponsive,d=n?{}:{borderBottom:"1px solid rgba(0, 0, 0, 0.1)"},u=a?"layout-row":"layout-xs-column layout-sm-column layout-gt-sm-row layout-align-xs-end layout-align-sm-end";return E.default.createElement("div",{className:j.default.header,style:(0,i.default)({},d,o)},E.default.createElement(C.Container,{className:(0,y.default)(j.default.headerInner,u)},E.default.createElement("h1",{className:(0,y.default)(j.default.title,"layout-row layout-align-start-center")},r,t),t&&E.default.createElement("div",{className:"flex"}),s))}}]),t}(R.Component),r.propTypes={title:R.PropTypes.string,children:R.PropTypes.node,noline:R.PropTypes.bool,style:R.PropTypes.object,icon:R.PropTypes.node,noResponsive:R.PropTypes.bool},o);t.default=b;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(b,"SubHeader","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/modules/SubHeader/SubHeader.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1367:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(1366),o=n(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1773:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={"public":1,user:2,viewer:3,collaborator:4,admin:5,superAdmin:6},n=t.permissionsGetLevel=function(e){return s[e]},r=t.permissionsIsMin=function(e,t){return n(e)>=n(t)};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"permissionsGetLevel","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Auth/Auth.utils.js"),__REACT_HOT_LOADER__.register(r,"permissionsIsMin","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Auth/Auth.utils.js"),__REACT_HOT_LOADER__.register(s,"permissionLevels","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Auth/Auth.utils.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1774:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r,o,a=s(14),i=n(a),d=s(13),u=n(d),_=s(15),l=n(_),f=s(17),c=n(f),p=s(16),m=n(p),T=s(0),O=(n(T),s(6)),R=s(1773),E=(o=r=function(e){function t(){return(0,u.default)(this,t),(0,c.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.userId,s=e.minRole,n=e.team,r=e.ownerId,o=e.children,a=null;if(r&&r===t)a=o;else if(n){var i=n.find(function(e){return e._id===t});i&&i.permissions&&(0,R.permissionsIsMin)(i.permissions.role,s)&&(a=o)}return a}}]),t}(T.Component),r.propTypes={ownerId:T.PropTypes.string,team:T.PropTypes.array,userId:T.PropTypes.string.isRequired,children:T.PropTypes.node.isRequired,minRole:T.PropTypes.string},o),A=function(e){var t=e.auth;return{userId:t.user._id}},j=(0,O.connect)(A)(E),v=j;t.default=v;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(E,"IsOwner","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Auth/IsOwner/IsOwner.jsx"),__REACT_HOT_LOADER__.register(A,"mapStateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Auth/IsOwner/IsOwner.jsx"),__REACT_HOT_LOADER__.register(j,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Auth/IsOwner/IsOwner.jsx"),__REACT_HOT_LOADER__.register(v,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Auth/IsOwner/IsOwner.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1801:function(e,t){e.exports={primary:"rgb(68, 154, 211)",border1:"rgba(0, 0, 0, 0.1)","grey-3":"rgba(0, 0, 0, 0.5)",tabs:"Tabs_tabs-1uuJ4",noLine:"Tabs_noLine-nolkc",inner:"Tabs_inner-3nnlF",tabsLg:"Tabs_tabsLg-2y561"}},1817:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(38),o=n(r),a=s(0),i=n(a),d=s(1801),u=n(d),_=s(2),l=n(_),f=function(e){var t,s=(0,l.default)(u.default.tabs,(t={},(0,o.default)(t,u.default.tabsLg,"lg"===e.size),(0,o.default)(t,u.default.noLine,e.noline),t),e.className),n=(0,l.default)("tabs-inner","layout-row",u.default.inner);return i.default.createElement("div",{className:s,style:e.style},i.default.createElement("div",{className:n},e.children))},c=f;t.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tabs/Tabs.jsx"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tabs/Tabs.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2714:203,2737:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(1774),o=n(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2890:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r,o,a,i=s(14),d=n(i),u=s(13),_=n(u),l=s(15),f=n(l),c=s(17),p=n(c),m=s(16),T=n(m),O=s(0),R=n(O),E=s(6),A=(s(12),s(456)),j=n(A),v=s(136),y=s(2891),C=n(y),b=function(e,t){var s=e.projects,n=t.params,r=t.location;return{project:s.data[n.stub],pathname:r.pathname}},g={getProject:v.getProject},h=[{hasChanged:"params.stub",onChange:function(e){e.getProject({projectId:e.params.stub,size:"lg",force:!0})}}],w=(r=(0,E.connect)(b,g),o=(0,j.default)(h),r(a=o(a=function(e){function t(){return(0,_.default)(this,t),(0,p.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,T.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){return R.default.createElement(C.default,this.props)}}]),t}(O.Component))||a)||a),L=w,P=L;t.default=P;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(g,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(h,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(w,"ProjectContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(L,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(P,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2891:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(14),o=n(r),a=s(13),i=n(a),d=s(15),u=n(d),_=s(17),l=n(_),f=s(16),c=n(f),p=s(0),m=n(p),T=s(2),O=(n(T),s(2714)),R=(n(O),s(462)),E=n(R),A=s(1817),j=n(A),v=(s(101),s(457)),y=s(64),C=n(y),b=s(455),g=(n(b),s(1367)),h=n(g),w=s(2737),L=n(w),P=s(477),H=n(P),D=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.children,s=e.project,n=(e.pathname,e.currentUser,{projectId:(0,v.get)(s,"data._id")}),r=m.default.createElement(H.default,{type:(0,v.get)(s,"data.permissions.projectType","public"),style:{marginRight:"8px"},size:30});return m.default.createElement(E.default,{style:{marginTop:"30px"},nofooter:!0},m.default.createElement(h.default,{title:(0,v.get)(s,"data.name"," ")||"Untitled Project",noline:!0,icon:r},m.default.createElement(j.default,{noline:!0},m.default.createElement(C.default,{activeIf:{is:["projectRoute"],includes:["projectFilesRoute"]},name:"projectRoute",params:n},"Overview"),m.default.createElement(C.default,{activeIf:{includes:["projectTeamRoute"]},name:"projectTeamRoute",params:n},"Team"),m.default.createElement(C.default,{activeIf:{includes:["projectCommitsRoute"]},name:"projectCommitsRoute",params:n},"History"),m.default.createElement(C.default,{activeIf:{includes:["projectTasksRoute"]},name:"projectTasksRoute",params:n},(0,v.get)(s,"data.numThreads",0)," Threads"),m.default.createElement(L.default,{team:(0,v.get)(s,"data.team",[]),minRole:"admin"},m.default.createElement(C.default,{activeIf:{includes:["projectSettingsRoute"]},name:"projectSettingsRoute",params:n},"Settings")))),m.default.createElement("div",{className:"flex layout-column"},s&&s.data&&"lg"===s.dataSize?t:null))}}]),t}(p.Component),I=D,N=I;t.default=N;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(D,"Project","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.js"),__REACT_HOT_LOADER__.register(I,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.js"),__REACT_HOT_LOADER__.register(N,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});