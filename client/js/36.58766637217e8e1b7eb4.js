webpackJsonp([36,61],{"23nu":function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("fgbE"),r=s(n);t.default=r.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},AHDw:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("bOdI"),r=s(n),o=a("U7vG"),i=s(o),u=a("sV6g"),d=s(u),c=a("HW6M"),l=s(c),_=function(e){var t,a=(0,l.default)(d.default.tabs,(t={},(0,r.default)(t,d.default.tabsLg,"lg"===e.size),(0,r.default)(t,d.default.noLine,e.noline),t),e.className),s=(0,l.default)("tabs-inner","layout-row",d.default.inner);return i.default.createElement("div",{className:a,style:e.style},i.default.createElement("div",{className:s},e.children))},f=_;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tabs/Tabs.jsx"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tabs/Tabs.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},DoBu:function(e,t){},PUvF:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n,r,o,i=a("Zx67"),u=s(i),d=a("Zrlr"),c=s(d),l=a("wxAW"),_=s(l),f=a("zwoO"),p=s(f),m=a("Pf15"),j=s(m),E=a("U7vG"),T=s(E),v=a("4n+p"),R=(a("c9Fv"),a("YapR")),O=s(R),A=a("N31G"),g=a("XNFV"),b=s(g),C=function(e,t){var a=e.projects,s=t.params,n=t.location;return{project:a.data[s.stub],pathname:n.pathname}},P={getProject:A.getProject},w=[{hasChanged:"params.stub",onChange:function(e){e.getProject({projectId:e.params.stub,size:"lg",force:!0})}}],y=(n=(0,v.connect)(C,P),r=(0,O.default)(w),n(o=r(o=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,j.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){return T.default.createElement(b.default,this.props)}}]),t}(E.Component))||o)||o),L=y,H=L;t.default=H;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(C,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(P,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(w,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(y,"ProjectContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(L,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"),__REACT_HOT_LOADER__.register(H,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},XNFV:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("Zx67"),r=s(n),o=a("Zrlr"),i=s(o),u=a("wxAW"),d=s(u),c=a("zwoO"),l=s(c),_=a("Pf15"),f=s(_),p=a("umy1"),m=s(p),j=a("Q7hp"),E=s(j),T=a("U7vG"),v=s(T),R=a("HW6M"),O=(s(R),a("DoBu")),A=(s(O),a("PIAa")),g=a("hWbs"),b=s(g),C=a("AHDw"),P=s(C),w=(a("PjCM"),a("GeCl")),y=s(w),L=a("vs4/"),H=(s(L),a("ISb9")),D=s(H),h=a("23nu"),N=s(h),U=a("KLwG"),M=s(U),x=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.project,s=(e.pathname,e.currentUser,{projectId:(0,E.default)(a,"data._id")}),n=v.default.createElement(M.default,{"private":(0,E.default)(a,"data.private"),style:{marginRight:"8px"},size:30});return v.default.createElement(b.default,{style:{marginTop:"30px"},nofooter:!0},v.default.createElement(A.Helmet,null,(0,m.default)(a,"data.name")&&v.default.createElement("title",null,a.data.name+": "+a.data.blurb)),v.default.createElement(D.default,{title:(0,E.default)(a,"data.name"," ")||"Untitled Project",noline:!0,icon:n},v.default.createElement(P.default,{noline:!0},v.default.createElement(y.default,{activeIf:{is:["projectRoute"],includes:["projectFilesRoute"]},name:"projectRoute",params:s},"Overview"),v.default.createElement(y.default,{activeIf:{includes:["projectTeamRoute"]},name:"projectTeamRoute",params:s},"Team"),v.default.createElement(y.default,{activeIf:{includes:["projectCommitsRoute"]},name:"projectCommitsRoute",params:s},"History"),v.default.createElement(y.default,{activeIf:{includes:["projectTasksRoute"]},name:"projectTasksRoute",params:s},"Threads"),v.default.createElement(N.default,{team:(0,E.default)(a,"data.team",[]),minRole:"admin"},v.default.createElement(y.default,{activeIf:{includes:["projectSettingsRoute"]},name:"projectSettingsRoute",params:s},"Settings")))),v.default.createElement("div",{className:"flex layout-column"},a&&a.data&&"lg"===a.dataSize?t:null))}}]),t}(T.Component),I=x,F=I;t.default=F;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(x,"Project","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.js"),__REACT_HOT_LOADER__.register(I,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.js"),__REACT_HOT_LOADER__.register(F,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Project/Project.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},cs2g:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("PUvF"),r=s(n);t.default=r.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},sV6g:function(e,t){e.exports={primary:"rgb(68, 154, 211)",border1:"rgba(0, 0, 0, 0.1)","grey-3":"rgba(0, 0, 0, 0.5)",tabs:"Tabs_tabs-1uuJ4",noLine:"Tabs_noLine-nolkc",inner:"Tabs_inner-3nnlF",tabsLg:"Tabs_tabsLg-2y561"}}});