webpackJsonp([37,62],{"2pJp":function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,d,o,s=r("Zx67"),u=a(s),l=r("Zrlr"),i=a(l),f=r("wxAW"),_=a(f),c=r("zwoO"),p=a(c),m=r("Pf15"),h=a(m),E=r("Q7hp"),T=a(E),v=r("U7vG"),O=a(v),g=r("4n+p"),R=r("YapR"),A=a(R),y=r("oWbs"),b=a(y),C=r("88Vw"),w=function(e,t){var r=e.threads,a=e.projects,n=t.params,d=n.stub,o=a.data[d],s=(0,T.default)(r,["projects",d,"boards","0"]),u=(0,T.default)(r,["boards",s],{});return{projectId:d,project:o,boardId:s,board:u,boardModel:"threads.boards."+s}},D={updateBoard:C.updateBoard,getBoards:C.getBoards},j=[{hasChanged:"projectId",onChange:function(e){e.getBoards({projectId:e.projectId})}}],L=(n=(0,g.connect)(w,D),d=(0,A.default)(j),n(o=d(o=function(e){function t(){return(0,i.default)(this,t),(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){return O.default.createElement(b.default,this.props)}}]),t}(v.Component))||o)||o);t.default=L;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(L,"ProjectSettingsThreadsContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/ProjectSettings/ThreadsSettings/ThreadsSettings.container.js"),__REACT_HOT_LOADER__.register(w,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/ProjectSettings/ThreadsSettings/ThreadsSettings.container.js"),__REACT_HOT_LOADER__.register(D,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/ProjectSettings/ThreadsSettings/ThreadsSettings.container.js"),__REACT_HOT_LOADER__.register(j,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/ProjectSettings/ThreadsSettings/ThreadsSettings.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"36xg":function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("2pJp"),d=a(n);t.default=d.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"85CU":function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("36xg"),d=a(n);t.default=d.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},KtbW:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("jMOG"),d=a(n);t.default=d.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Smmr:function(e,t){e.exports={row:"ThreadGroupsEdit_row-1yhyV",name:"ThreadGroupsEdit_name-2k_YQ",threadCount:"ThreadGroupsEdit_threadCount-1xUww"}},jMOG:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r("Zx67"),d=a(n),o=r("Zrlr"),s=a(o),u=r("wxAW"),l=a(u),i=r("zwoO"),f=a(i),_=r("Pf15"),c=a(_),p=r("U7vG"),m=a(p),h=r("4n+p"),E=r("FmOC"),T=a(E),v=r("HW6M"),O=a(v),g=r("Smmr"),R=a(g),A=r("+I1Y"),y=r("u2h7"),b=r("Erdv"),C=a(b),w=r("xwNf"),D=a(w),j=r("D2fa"),L=a(j),H=r("O8U9"),P=a(H),M=r("LPSb"),S=a(M),x=function(e){function t(){var e,r,a,n;(0,s.default)(this,t);for(var o=arguments.length,u=Array(o),l=0;l<o;l++)u[l]=arguments[l];return r=a=(0,f.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(u))),a.confirmDelete=function(){var e;return(e=a).__confirmDelete__REACT_HOT_LOADER__.apply(e,arguments)},a.onMount=function(){var e;return(e=a).__onMount__REACT_HOT_LOADER__.apply(e,arguments)},n=r,(0,f.default)(a,n)}return(0,c.default)(t,e),(0,l.default)(t,[{key:"__confirmDelete__REACT_HOT_LOADER__",value:function(e,t){var r=this;this.props.dispatch((0,y.showConfirm)({message:"If you delete this label it will be removed from all assigned threads."})).then(function(){r.props.dispatch((0,A.storeRemove)(e,t))})}},{key:"componentWillReceiveProps",value:function(e){this.onMount(e)}},{key:"componentWillMount",value:function(){this.onMount(this.props)}},{key:"__onMount__REACT_HOT_LOADER__",value:function(e){var t=e.model,r=e.value,a=e.dispatch;0===r.length?a((0,A.storePush)(t,{_id:(0,T.default)(),color:"",name:"",threads:[]})):r[r.length-1].name.length>=1&&a((0,A.storePush)(t,{_id:(0,T.default)(),color:"",name:"",threads:[]}))}},{key:"render",value:function(){var e=this,t=this.props,r=t.model,a=t.value;t.props;return m.default.createElement("div",null,a.map(function(t,a){return m.default.createElement("div",{key:t._id,className:R.default.row+" layout-row layout-align-start-center"},m.default.createElement("div",{className:R.default.name+" flex"},m.default.createElement(D.default,{model:r+"["+a+"].name",value:t.name,className:"dr-input",type:"text",placeholder:"Group Name"})),m.default.createElement("div",{className:(0,O.default)("dr-input",R.default.threadCount)},(0,S.default)(t.threads.length,"Thread")),m.default.createElement(C.default,{preferPlace:"right"},m.default.createElement(L.default,null,m.default.createElement(P.default,{size:"20px"})),m.default.createElement("div",{className:"PopoverMenu"},m.default.createElement("a",{onClick:function(){return e.confirmDelete(r,a)}},"Remove Group"))))}))}}]),t}(p.Component),G=(0,h.connect)()(x),N=G;t.default=N;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(x,"ThreadGroupsEdit","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Threads/ThreadGroupsEdit/ThreadGroupsEdit.jsx"),__REACT_HOT_LOADER__.register(G,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Threads/ThreadGroupsEdit/ThreadGroupsEdit.jsx"),__REACT_HOT_LOADER__.register(N,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Threads/ThreadGroupsEdit/ThreadGroupsEdit.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},oWbs:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,d,o=r("Dd8w"),s=a(o),u=r("Zx67"),l=a(u),i=r("Zrlr"),f=a(i),_=r("wxAW"),c=a(_),p=r("zwoO"),m=a(p),h=r("Pf15"),E=a(h),T=r("umy1"),v=a(T),O=r("U7vG"),g=a(O),R=r("RdTR"),A=a(R),y=r("5byU"),b=a(y),C=r("KtbW"),w=a(C),D=r("hpuc"),j=a(D),L=r("ycY4"),H=a(L),P=(d=n=function(e){function t(){var e,r,a,n;(0,f.default)(this,t);for(var d=arguments.length,o=Array(d),s=0;s<d;s++)o[s]=arguments[s];return r=a=(0,m.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(o))),a.updateBoard=function(){var e;return(e=a).__updateBoard__REACT_HOT_LOADER__.apply(e,arguments)},n=r,(0,m.default)(a,n)}return(0,E.default)(t,e),(0,c.default)(t,[{key:"__updateBoard__REACT_HOT_LOADER__",value:function(){var e=this.props,t=e.board,r=(e.boardModel,e.updateBoard),a=(0,s.default)({},t.data,{groups:t.forms.groups.filter(function(e){return e.name.length>0||e.threads.length>0}),labels:t.forms.labels.filter(function(e){return e.name.length>0||e.color.length>0})});r({board:a})}},{key:"render",value:function(){var e=this.props,t=e.boardModel,r=e.board;return r&&r.data?g.default.createElement("div",null,g.default.createElement(H.default,null,g.default.createElement("h3",null,"Thread Groups"),g.default.createElement("p",null,"Groups are used to categorize your threads. A thread can only be part of 1 group at any given time. If you delete a group, all child threads will be removed."),g.default.createElement(j.default,{model:t+".forms.groups",value:r.data.groups},(0,v.default)(r,"forms.groups")&&g.default.createElement(w.default,{model:t+".forms.groups",value:r.forms.groups}))),g.default.createElement(H.default,null,g.default.createElement("h3",null,"Thread Labels"),g.default.createElement("p",null,"Labels act in a similar way to Groups except a thread can have multiple labels. If you delete a label, it will be removed from all related threads."),g.default.createElement(j.default,{model:t+".forms.labels",value:r.data.labels},(0,v.default)(r,"forms.labels")&&g.default.createElement(b.default,{model:t+".forms.labels",value:r.forms.labels}))),g.default.createElement("div",{className:"layout-row"},g.default.createElement("div",{className:"flex"}),g.default.createElement(A.default,{className:"primary",onClick:this.updateBoard,loading:r.savePending},"Save"))):null}}]),t}(O.Component),n.propTypes={board:O.PropTypes.object.isRequired,boardModel:O.PropTypes.string.isRequired,updateBoard:O.PropTypes.func.isRequired},d);t.default=P;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(P,"ThreadsSettings","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/ProjectSettings/ThreadsSettings/ThreadsSettings.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});