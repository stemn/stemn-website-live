webpackJsonp([38,62],{"23nu":function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("fgbE"),s=r(n);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},AHDw:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("bOdI"),s=r(n),o=a("U7vG"),i=r(o),d=a("sV6g"),u=r(d),c=a("HW6M"),l=r(c),_=function(e){var t,a=(0,l.default)(u.default.tabs,(t={},(0,s.default)(t,u.default.tabsLg,"lg"===e.size),(0,s.default)(t,u.default.noLine,e.noline),t),e.className),r=(0,l.default)("tabs-inner","layout-row",u.default.inner);return i.default.createElement("div",{className:a,style:e.style},i.default.createElement("div",{className:r},e.children))},f=_;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tabs/Tabs.jsx"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tabs/Tabs.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},DoBu:function(e,t){},PUvF:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n,s,o,i=a("Zx67"),d=r(i),u=a("Zrlr"),c=r(u),l=a("wxAW"),_=r(l),f=a("zwoO"),p=r(f),m=a("Pf15"),j=r(m),R=a("U7vG"),v=r(R),T=a("4n+p"),E=(a("c9Fv"),a("YapR")),O=r(E),g=a("N31G"),A=a("r0iT"),C=a("XNFV"),b=r(C),P=function(e,t){var a=e.projects,r=t.params,n=t.location;return{projectId:r.stub,project:a.data[r.stub],pathname:n.pathname}},w={getProject:g.getProject,joinRoom:A.joinRoom,leaveRoom:A.leaveRoom},y=[{hasChanged:"projectId",onChange:function(e){e.getProject({projectId:e.projectId,size:"lg",force:!0}),e.joinRoom({room:e.projectId,type:"project"})}},{unmount:!0,hasChanged:"projectId",onChange:function(e,t){t.leaveRoom&&t.projectId&&t.leaveRoom({type:"project",room:t.projectId})}}],h=(n=(0,T.connect)(P,w),s=(0,O.default)(y),n(o=s(o=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,j.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){return v.default.createElement(b.default,this.props)}}]),t}(R.Component))||o)||o),L=h,H=L;t.default=H;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(P,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(w,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(y,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(h,"ProjectContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(L,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(H,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},XNFV:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("Zx67"),s=r(n),o=a("Zrlr"),i=r(o),d=a("wxAW"),u=r(d),c=a("zwoO"),l=r(c),_=a("Pf15"),f=r(_),p=a("umy1"),m=r(p),j=a("Q7hp"),R=r(j),v=a("U7vG"),T=r(v),E=a("HW6M"),O=(r(E),a("DoBu")),g=(r(O),a("PIAa")),A=a("hWbs"),C=r(A),b=a("AHDw"),P=r(b),w=(a("PjCM"),a("GeCl")),y=r(w),h=a("vs4/"),L=(r(h),a("ISb9")),H=r(L),D=a("23nu"),N=r(D),U=a("KLwG"),I=r(U),M=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.project,r=(e.pathname,e.currentUser,{projectId:(0,R.default)(a,"data._id")}),n=T.default.createElement(I.default,{"private":(0,R.default)(a,"data.private"),style:{marginRight:"8px",minWidth:"30px"},size:30});return T.default.createElement(C.default,{style:{marginTop:"30px"},nofooter:!0},T.default.createElement(g.Helmet,null,(0,m.default)(a,"data.name")&&T.default.createElement("title",null,a.data.name+": "+a.data.blurb)),T.default.createElement(H.default,{title:(0,R.default)(a,"data.name"," ")||"Untitled Project",name:"projectRoute",params:r,noline:!0,icon:n},T.default.createElement(P.default,{noline:!0},T.default.createElement(y.default,{activeIf:{is:["projectRoute"],includes:["projectFilesRoute"]},name:"projectRoute",params:r},"Overview"),T.default.createElement(y.default,{activeIf:{includes:["projectThreadsRoute"]},name:"projectThreadsRoute",params:r},"Threads"),T.default.createElement(y.default,{activeIf:{includes:["projectCommitsRoute"]},name:"projectCommitsRoute",params:r},"History"),T.default.createElement(y.default,{activeIf:{includes:["projectTeamRoute"]},name:"projectTeamRoute",params:r},"Team"),T.default.createElement(N.default,{team:(0,R.default)(a,"data.team",[]),minRole:"admin"},T.default.createElement(y.default,{activeIf:{includes:["projectSettingsRoute"]},name:"projectSettingsRoute",params:r},"Settings")))),T.default.createElement("div",{className:"flex layout-column"},a&&a.data&&"lg"===a.dataSize?t:null))}}]),t}(v.Component),x=M,F=x;t.default=F;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(M,"Project","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.js"),__REACT_HOT_LOADER__.register(x,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.js"),__REACT_HOT_LOADER__.register(F,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},cs2g:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("PUvF"),s=r(n);t.default=s.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},sV6g:function(e,t){e.exports={primary:"#4484d3",border1:"rgba(0, 0, 0, 0.1)","grey-3":"rgba(0, 0, 0, 0.5)",tabs:"Tabs_tabs-1uuJ4",noLine:"Tabs_noLine-nolkc",inner:"Tabs_inner-3nnlF",tabsLg:"Tabs_tabsLg-2y561"}}});