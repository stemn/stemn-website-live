webpackJsonp([35,59],{"2pJp":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o,d,s=r("Zx67"),u=n(s),l=r("Zrlr"),i=n(l),f=r("wxAW"),_=n(f),c=r("zwoO"),p=n(c),m=r("Pf15"),h=n(m),E=r("Q7hp"),T=n(E),v=r("U7vG"),O=n(v),g=r("4n+p"),R=r("YapR"),A=n(R),y=r("oWbs"),b=n(y),C=r("88Vw"),j=function(e,t){var r=e.threads,n=e.projects,a=t.params,o=a.stub,d=n.data[o],s=(0,T.default)(r,["projects",o,"boards","0"]),u=(0,T.default)(r,["boards",s],{});return{projectId:o,project:d,boardId:s,board:u,boardModel:"threads.boards."+s}},w={updateBoard:C.updateBoard,getBoards:C.getBoards},D=[{hasChanged:"projectId",onChange:function(e){e.getBoards({projectId:e.projectId})}}],L=(a=(0,g.connect)(j,w),o=(0,A.default)(D),a(d=o(d=function(e){function t(){return(0,i.default)(this,t),(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){return O.default.createElement(b.default,this.props)}}]),t}(v.Component))||d)||d);t.default=L;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(L,"ProjectSettingsThreadsContainer","/home/jackson/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/ProjectSettings/ThreadsSettings/ThreadsSettings.container.js"),__REACT_HOT_LOADER__.register(j,"stateToProps","/home/jackson/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/ProjectSettings/ThreadsSettings/ThreadsSettings.container.js"),__REACT_HOT_LOADER__.register(w,"dispatchToProps","/home/jackson/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/ProjectSettings/ThreadsSettings/ThreadsSettings.container.js"),__REACT_HOT_LOADER__.register(D,"fetchConfigs","/home/jackson/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/ProjectSettings/ThreadsSettings/ThreadsSettings.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"36xg":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("2pJp"),o=n(a);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"85CU":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("36xg"),o=n(a);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},KtbW:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("jMOG"),o=n(a);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Smmr:function(e,t){e.exports={row:"ThreadGroupsEdit_row-2pFhL",name:"ThreadGroupsEdit_name-3vE6z",threadCount:"ThreadGroupsEdit_threadCount-26tFm"}},jMOG:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r("Zx67"),o=n(a),d=r("Zrlr"),s=n(d),u=r("wxAW"),l=n(u),i=r("zwoO"),f=n(i),_=r("Pf15"),c=n(_),p=r("U7vG"),m=n(p),h=r("4n+p"),E=r("FmOC"),T=n(E),v=r("HW6M"),O=n(v),g=r("Smmr"),R=n(g),A=r("+I1Y"),y=r("u2h7"),b=r("Erdv"),C=n(b),j=r("xwNf"),w=n(j),D=r("D2fa"),L=n(D),H=r("O8U9"),P=n(H),M=r("LPSb"),S=n(M),k=function(e){function t(){var e,r,n,a;(0,s.default)(this,t);for(var d=arguments.length,u=Array(d),l=0;l<d;l++)u[l]=arguments[l];return r=n=(0,f.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(u))),n.confirmDelete=function(){var e;return(e=n).__confirmDelete__REACT_HOT_LOADER__.apply(e,arguments)},n.onMount=function(){var e;return(e=n).__onMount__REACT_HOT_LOADER__.apply(e,arguments)},a=r,(0,f.default)(n,a)}return(0,c.default)(t,e),(0,l.default)(t,[{key:"__confirmDelete__REACT_HOT_LOADER__",value:function(e,t){var r=this;this.props.dispatch((0,y.showConfirm)({message:"If you delete this label it will be removed from all assigned threads."})).then(function(){r.props.dispatch((0,A.storeRemove)(e,t))})}},{key:"componentWillReceiveProps",value:function(e){this.onMount(e)}},{key:"componentWillMount",value:function(){this.onMount(this.props)}},{key:"__onMount__REACT_HOT_LOADER__",value:function(e){var t=e.model,r=e.value,n=e.dispatch;0===r.length?n((0,A.storePush)(t,{_id:(0,T.default)(),color:"",name:"",threads:[]})):r[r.length-1].name.length>=1&&n((0,A.storePush)(t,{_id:(0,T.default)(),color:"",name:"",threads:[]}))}},{key:"render",value:function(){var e=this,t=this.props,r=t.model,n=t.value;t.props;return m.default.createElement("div",null,n.map(function(t,n){return m.default.createElement("div",{key:t._id,className:R.default.row+" layout-row layout-align-start-center"},m.default.createElement("div",{className:R.default.name+" flex"},m.default.createElement(w.default,{model:r+"["+n+"].name",value:t.name,className:"dr-input",type:"text",placeholder:"Group Name"})),m.default.createElement("div",{className:(0,O.default)("dr-input",R.default.threadCount)},(0,S.default)(t.threads.length,"Thread")),m.default.createElement(C.default,{preferPlace:"right"},m.default.createElement(L.default,null,m.default.createElement(P.default,{size:"20px"})),m.default.createElement("div",{className:"PopoverMenu"},m.default.createElement("a",{onClick:function(){return e.confirmDelete(r,n)}},"Remove Group"))))}))}}]),t}(p.Component),G=(0,h.connect)()(k),x=G;t.default=x;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(k,"ThreadGroupsEdit","/home/jackson/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Threads/ThreadGroupsEdit/ThreadGroupsEdit.jsx"),__REACT_HOT_LOADER__.register(G,"default","/home/jackson/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Threads/ThreadGroupsEdit/ThreadGroupsEdit.jsx"),__REACT_HOT_LOADER__.register(x,"default","/home/jackson/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Threads/ThreadGroupsEdit/ThreadGroupsEdit.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},oWbs:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o,d=r("Dd8w"),s=n(d),u=r("Zx67"),l=n(u),i=r("Zrlr"),f=n(i),_=r("wxAW"),c=n(_),p=r("zwoO"),m=n(p),h=r("Pf15"),E=n(h),T=r("umy1"),v=n(T),O=r("U7vG"),g=n(O),R=r("RdTR"),A=n(R),y=r("5byU"),b=n(y),C=r("KtbW"),j=n(C),w=r("hpuc"),D=n(w),L=r("ycY4"),H=n(L),P=(o=a=function(e){function t(){var e,r,n,a;(0,f.default)(this,t);for(var o=arguments.length,d=Array(o),s=0;s<o;s++)d[s]=arguments[s];return r=n=(0,m.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(d))),n.updateBoard=function(){var e;return(e=n).__updateBoard__REACT_HOT_LOADER__.apply(e,arguments)},a=r,(0,m.default)(n,a)}return(0,E.default)(t,e),(0,c.default)(t,[{key:"__updateBoard__REACT_HOT_LOADER__",value:function(){var e=this.props,t=e.board,r=(e.boardModel,e.updateBoard),n=(0,s.default)({},t.data,{groups:t.forms.groups.filter(function(e){return e.name.length>0||e.threads.length>0}),labels:t.forms.labels.filter(function(e){return e.name.length>0||e.color.length>0})});r({board:n})}},{key:"render",value:function(){var e=this.props,t=e.boardModel,r=e.board;return r&&r.data?g.default.createElement("div",null,g.default.createElement(H.default,null,g.default.createElement("h3",null,"Thread Groups"),g.default.createElement("p",null,"Groups are used to categorize your threads. A thread can only be part of 1 group at any given time. If you delete a group, all child threads will be removed."),g.default.createElement(D.default,{model:t+".forms.groups",value:r.data.groups},(0,v.default)(r,"forms.groups")&&g.default.createElement(j.default,{model:t+".forms.groups",value:r.forms.groups}))),g.default.createElement(H.default,null,g.default.createElement("h3",null,"Thread Labels"),g.default.createElement("p",null,"Labels act in a similar way to Groups except a thread can have multiple labels. If you delete a label, it will be removed from all related threads."),g.default.createElement(D.default,{model:t+".forms.labels",value:r.data.labels},(0,v.default)(r,"forms.labels")&&g.default.createElement(b.default,{model:t+".forms.labels",value:r.forms.labels}))),g.default.createElement("div",{className:"layout-row"},g.default.createElement("div",{className:"flex"}),g.default.createElement(A.default,{className:"primary",onClick:this.updateBoard,loading:r.savePending},"Save"))):null}}]),t}(O.Component),a.propTypes={board:O.PropTypes.object.isRequired,boardModel:O.PropTypes.string.isRequired,updateBoard:O.PropTypes.func.isRequired},o);t.default=P;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(P,"ThreadsSettings","/home/jackson/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/ProjectSettings/ThreadsSettings/ThreadsSettings.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});