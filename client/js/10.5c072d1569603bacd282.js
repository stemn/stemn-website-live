webpackJsonp([10,58],{"2V0G":function(e,t,n){"use strict";e.exports=n("RrHP");(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"4Xm7":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i,o=n("Dd8w"),d=s(o),a=n("+6Bu"),l=s(a),_=n("Zx67"),u=s(_),c=n("Zrlr"),f=s(c),m=n("wxAW"),p=s(m),E=n("zwoO"),v=s(E),O=n("Pf15"),R=s(O),y=n("U7vG"),T=s(y),A=n("HW6M"),C=(s(A),n("RZ9R")),w=s(C),h=n("i0X4"),b=s(h),g=n("6DPZ"),L=s(g),D=n("7CZC"),j=s(D),H=n("D2fa"),P=s(H),N=n("c9QE"),M=s(N),F=n("RdTR"),I=s(F),x=n("GeCl"),U=s(x),k=(i=r=function(e){function t(e){(0,f.default)(this,t);var n=(0,v.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return n.toggleEdit=function(){return n.__toggleEdit__REACT_HOT_LOADER__.apply(n,arguments)},n.save=function(){return n.__save__REACT_HOT_LOADER__.apply(n,arguments)},n.state={editActive:!1},n}return(0,R.default)(t,e),(0,p.default)(t,[{key:"__toggleEdit__REACT_HOT_LOADER__",value:function(){this.setState({editActive:!this.state.editActive})}},{key:"__save__REACT_HOT_LOADER__",value:function(){var e=this.props,t=e.saveProject,n=e.project;this.toggleEdit(),setTimeout(function(){return t({project:n.data})},1)}},{key:"render",value:function(){var e=this.props,t=e.files,n=e.project,s=e.projectModel,r=(0,l.default)(e,["files","project","projectModel"]),i=this.state.editActive,o=["readme.md","readme.txt"],a=t.find(function(e){return o.includes(e.name.toLowerCase())});if(a){var _={projectId:a.project._id,fileId:a.fileId,revisionId:a.revisionId};return T.default.createElement("div",{className:j.default.readme},T.default.createElement(U.default,{style:{marginBottom:"15px",display:"inline-block"},className:"text-mini-caps",name:"fileRoute",params:_},a.name),T.default.createElement("div",(0,d.default)({},r,{style:{position:"relative"}}),T.default.createElement(w.default,{file:a})))}return T.default.createElement("div",null,T.default.createElement("div",{className:j.default.readme},T.default.createElement("div",{style:{marginBottom:"15px"},className:"text-mini-caps"},"Readme"),T.default.createElement(P.default,{className:j.default.editButton,title:"Edit Readme",onClick:this.toggleEdit},T.default.createElement(M.default,{size:18})),i?T.default.createElement(L.default,{value:n.data.readme,model:s+".data.readme"}):T.default.createElement(b.default,{value:n.data.readme}),i&&T.default.createElement("div",{className:"layout-row layout-align-end",style:{marginTop:"15px"}},T.default.createElement(I.default,{className:"primary",onClick:this.save},"Save"))))}}]),t}(y.Component),r.propTypes={files:y.PropTypes.array,project:y.PropTypes.object.isRequired,projectModel:y.PropTypes.string.isRequired,saveProject:y.PropTypes.func.isRequired},i);t.default=k;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(k,"Readme","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Readme/Readme.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"5b1F":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i,o=n("Zx67"),d=s(o),a=n("Zrlr"),l=s(a),_=n("wxAW"),u=s(_),c=n("zwoO"),f=s(c),m=n("Pf15"),p=s(m),E=n("U7vG"),v=s(E),O=n("4n+p"),R=(n("c9Fv"),n("jZgO")),y=n("N31G"),T=n("erdY"),A=s(T),C=function(e,t){var n=e.projects,s=(e.projectSettings,e.fileList),r=t.params,i=t.location,o=t.provider,d=r.stub,a=r.path||"",l=n.data[d],_="projects.data."+d,u=d+"-"+a+"-"+o,c=s[u];return{project:l,entityModel:_,path:a,files:c,isFilePage:i.pathname.includes("/files/")}},w={pushRoute:R.push,saveProject:y.saveProject},h=(r=(0,O.connect)(C,w),r(i=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return v.default.createElement(A.default,this.props)}}]),t}(E.Component))||i);t.default=h;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"LoginContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectOverview/ProjectOverview.container.js"),__REACT_HOT_LOADER__.register(C,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectOverview/ProjectOverview.container.js"),__REACT_HOT_LOADER__.register(w,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectOverview/ProjectOverview.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"5uJm":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=e.fileId,n=e.renderId;return function(e,s){var r=n?n:t,i=s().files.websocketRooms.includes(r);i&&e({type:"FILES/WEBSOCKET_LEAVE_FILE",websocket:!0,payload:{type:"ROOM/LEAVE",payload:{room:r,type:n?"render":"file"}}})}},s=n;t.default=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/websocketLeaveFile.js"),__REACT_HOT_LOADER__.register(s,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/websocketLeaveFile.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"7CZC":function(e,t){e.exports={readme:"Readme_readme-mb1SO",editButton:"Readme_editButton-3ksmZ"}},"91n2":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=e.fileId,n=e.renderId;return function(e,s){var r=n?n:t,i=s().files.websocketRooms.includes(r);i||e({type:"FILES/WEBSOCKET_JOIN_FILE",websocket:!0,payload:{type:"ROOM/JOIN",payload:{room:r,type:n?"render":"file"}}})}},s=n;t.default=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/websocketJoinFile.js"),__REACT_HOT_LOADER__.register(s,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/websocketJoinFile.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"9gnX":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),i=s(r),o=n("+6Bu"),d=s(o),a=n("U7vG"),l=s(a),_=n("HW6M"),u=s(_),c=n("19Kw"),f=n("Gdbn"),m=s(f),p=l.default.createClass({displayName:"_default",render:function(){var e=this.props,t=e.text,n=e.className,s=e.children,r=(0,d.default)(e,["text","className","children"]);return l.default.createElement("div",(0,i.default)({className:(0,u.default)(m.default.tag,n)},r),l.default.createElement("div",{className:(0,u.default)(m.default.tagInner,"layout-row layout-align-start-center")},s,(0,c.middle)(t,30)))}}),E=p;t.default=E;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tags/Tag/Tag.jsx"),__REACT_HOT_LOADER__.register(E,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tags/Tag/Tag.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},ARtS:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=e.percentage,n=e.cacheKey;return{type:"FILES/GET_FILE_PROGRESS",payload:{percentage:t},meta:{cacheKey:n}}},s=n;t.default=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/getFileProgress.js"),__REACT_HOT_LOADER__.register(s,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/getFileProgress.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},AtAW:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("mtWM"),i=s(r),o=function(e){var t=e.projectId,n=e.fileId,s=e.revisionId,r=e.provider,o=n+"-"+s;return{type:"FILES/GET_ASSEMBLY_PARTS",payload:(0,i.default)({url:t?"/api/v1/sync/assemblyParts/"+t+"/"+n:"/api/v1/remote/assemblyParts/"+r+"/"+n,params:{revisionId:s}}),meta:{cacheKey:o,fileId:n,revisionId:s}}},d=o;t.default=d;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/getAssemblyParts.js"),__REACT_HOT_LOADER__.register(d,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/getAssemblyParts.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},DDgy:function(e,t){e.exports={header:"SubSubHeader_header-3_JRv",headerBorder:"SubSubHeader_headerBorder-3N5ww"}},E16q:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("5b1F"),i=s(r);t.default=i.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Ia4n:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i,o=n("Dd8w"),d=s(o),a=n("+6Bu"),l=s(a),_=n("Zx67"),u=s(_),c=n("Zrlr"),f=s(c),m=n("wxAW"),p=s(m),E=n("zwoO"),v=s(E),O=n("Pf15"),R=s(O),y=n("U7vG"),T=s(y),A=n("DDgy"),C=s(A),w=n("HW6M"),h=s(w),b=n("PjCM"),g=(i=r=function(e){function t(){return(0,f.default)(this,t),(0,v.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,R.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this.props,t=(e.title,e.children),n=e.className,s=(0,l.default)(e,["title","children","className"]);return T.default.createElement("div",(0,d.default)({className:(0,h.default)(C.default.header,n)},s),T.default.createElement(b.Container,null,T.default.createElement("div",{className:C.default.headerBorder}),t))}}]),t}(y.Component),r.propTypes={children:y.PropTypes.node},i);t.default=g;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(g,"SubHeader","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/modules/SubSubHeader/SubSubHeader.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},K3Wt:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),i=s(r),o=n("U7vG"),d=s(o),a=n("aSqn"),l=s(a),_=function(e){return d.default.createElement(l.default,(0,i.default)({viewBox:"0 0 40 40"},e),d.default.createElement("g",null,d.default.createElement("path",{d:"m20.9 11.6v8.8l7.5 4.4-1.3 2.2-8.7-5.4v-10h2.5z m-0.9 21.8q5.5 0 9.4-4t4-9.4-4-9.4-9.4-4-9.4 4-4 9.4 4 9.4 9.4 4z m0-30q6.9 0 11.8 4.8t4.8 11.8-4.8 11.8-11.8 4.8-11.8-4.8-4.8-11.8 4.8-11.8 11.8-4.8z"})))},u=_,c=u;t.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MdAccessTime","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/access-time.js"),__REACT_HOT_LOADER__.register(u,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/access-time.js"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/access-time.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},KC90:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=e.projectId,n=e.fileId;return{type:"FILES/GET_RELATED_TASKS",http:!0,payload:{method:"GET",url:"/api/v1/sync/files/"+t+"/"+n+"/tasks"},meta:{fileId:n}}},s=n;t.default=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/getRelatedTasks.js"),__REACT_HOT_LOADER__.register(s,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/getRelatedTasks.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Khps:function(e,t,n){"use strict";e.exports=n("oHdL");(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},MS8W:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=e.renderId,n=e.message,s=t;return{type:"FILES/RENDER_FILE_PROGRESS",payload:{message:n},meta:{cacheKey:s}}},s=n;t.default=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/renderFileProgress.js"),__REACT_HOT_LOADER__.register(s,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/renderFileProgress.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},NYcx:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("mtWM"),i=s(r),o=function(e){var t=e.projectId,n=e.fileId,s=e.revisionId,r=e.provider,o=n+"-"+s;return{type:"FILES/GET_ASSEMBLY_PARENTS",payload:(0,i.default)({url:t?"/api/v1/sync/assemblyParents/"+t+"/"+n:"/api/v1/remote/assemblyParents/"+r+"/"+n,params:{revisionId:s}}),meta:{cacheKey:o,fileId:n,revisionId:s}}},d=o;t.default=d;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/getAssemblyParents.js"),__REACT_HOT_LOADER__.register(d,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/getAssemblyParents.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"P1+L":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("Ia4n"),i=s(r);t.default=i.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Pagr:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),i=s(r),o=n("U7vG"),d=s(o),a=n("aSqn"),l=s(a),_=function(e){return d.default.createElement(l.default,(0,i.default)({viewBox:"0 0 40 40"},e),d.default.createElement("g",null,d.default.createElement("path",{d:"m26.6 21.6c3.9 0 11.8 2 11.8 5.9v4.1h-10v-4.1c0-2.5-1.4-4.4-3.3-5.8 0.5-0.1 1.1-0.1 1.5-0.1z m-13.2 0c3.9 0 11.6 2 11.6 5.9v4.1h-23.4v-4.1c0-3.9 7.9-5.9 11.8-5.9z m0-3.2c-2.8 0-5-2.3-5-5s2.2-5 5-5 4.9 2.2 4.9 5-2.2 5-4.9 5z m13.2 0c-2.7 0-5-2.3-5-5s2.3-5 5-5 5 2.2 5 5-2.2 5-5 5z"})))},u=_,c=u;t.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MdPeople","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/people.js"),__REACT_HOT_LOADER__.register(u,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/people.js"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/people.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},RZ9R:function(e,t,n){"use strict";function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){var n=e.files,s=(t.project,t.file),r=s.fileId+"-"+s.revisionId;return{cacheKey:r,fileData:n.fileData[r]}}function o(e){return{filesActions:(0,u.bindActionCreators)(m,e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.DisplayReadme=void 0;var d=n("fZjL"),a=r(d),l=n("Dc7M"),_=r(l),u=n("c9Fv"),c=n("4n+p"),f=n("iLLw"),m=s(f),p=n("U7vG"),E=r(p),v=n("HW6M"),O=(r(v),n("K+/r")),R=r(O),y=n("i0X4"),T=r(y),A={file:p.PropTypes.object,fileData:p.PropTypes.object,cacheKey:p.PropTypes.string,filesActions:p.PropTypes.object},C=t.DisplayReadme=E.default.createClass({displayName:"DisplayReadme",propTypes:A,componentWillMount:function(){this.onMount(this.props)},componentWillReceiveProps:function(e){this.onMount(e,this.props)},onMount:function(e,t){t&&e.cacheKey===t.cacheKey||e.fileData||e.filesActions.getFile({projectId:e.file.project._id,fileId:e.file.fileId,revisionId:e.file.revisionId,provider:e.file.provider})},render:function(){var e=this.props,t=(e.file,e.fileData);return t&&t.loading||t&&t.data?E.default.createElement("div",(0,_.default)(this.props,(0,a.default)(A)),t&&t.data?E.default.createElement(T.default,{value:t.data}):null,E.default.createElement(R.default,{show:t&&t.loading})):E.default.createElement("div",null,"This file is empty.")}}),w=(0,c.connect)(i,o)(C),h=w;t.default=h;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(C,"DisplayReadme","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Readme/DisplayReadme.jsx"),__REACT_HOT_LOADER__.register(i,"mapStateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Readme/DisplayReadme.jsx"),__REACT_HOT_LOADER__.register(o,"mapDispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Readme/DisplayReadme.jsx"),__REACT_HOT_LOADER__.register(A,"propTypesObject","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Readme/DisplayReadme.jsx"),__REACT_HOT_LOADER__.register(w,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Readme/DisplayReadme.jsx"),__REACT_HOT_LOADER__.register(h,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/Readme/DisplayReadme.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},RrHP:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("91n2"),i=s(r),o=n("FmOC"),d=(s(o),n("mtWM"));s(d);t.default=function(e){var t=e.projectId,n=e.fileId,s=e.revisionId,r=e.provider,o=e.timestamp,d=o?n+"-"+s+"-"+o:n+"-"+s;return function(e){e({type:"FILES/RENDER_FILE",http:!0,payload:{url:t?"/api/v1/sync/render/"+t+"/"+n:"/api/v1/remote/render/"+r+"/"+n},meta:{cacheKey:d}}),e((0,i.default)({renderId:d}))}}},SQIr:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=e.projectId,n=e.fileId,s=e.revisionId,r=e.provider,i=(e.responseType,n+"-"+s);return{type:"FILES/GET_FILE",http:!0,payload:{url:t?"/api/v1/sync/download/"+t+"/"+n:"/api/v1/remote/download/"+r+"/"+n,params:{revisionId:s}},meta:{cacheKey:i}}},s=n;t.default=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/getFile.web.js"),__REACT_HOT_LOADER__.register(s,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/getFile.web.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},V32k:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){return{type:"FILES/DOWNLOAD_PROGRESS",payload:{progress:t,cacheKey:e}}},s=n;t.default=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/downloadProgress.js"),__REACT_HOT_LOADER__.register(s,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/downloadProgress.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},X6P3:function(e,t,n){"use strict";e.exports=n("SQIr");(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},ZHGc:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("9gnX"),i=s(r);t.default=i.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"Zm/y":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=e.fileId,n=e.revisionId,s=e.error,r=t+"-"+n;return{type:"FILES/RENDER_FILE_REJECTED",payload:{response:{data:{error:s}}},meta:{cacheKey:r}}},s=n;t.default=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/renderFileError.js"),__REACT_HOT_LOADER__.register(s,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/renderFileError.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},c9QE:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),i=s(r),o=n("U7vG"),d=s(o),a=n("aSqn"),l=s(a),_=function(e){return d.default.createElement(l.default,(0,i.default)({viewBox:"0 0 40 40"},e),d.default.createElement("g",null,d.default.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3c0.6-0.7 1.7-0.7 2.3 0l3.9 3.9c0.7 0.6 0.7 1.7 0 2.3z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=_,c=u;t.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MdModeEdit","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/mode-edit.js"),__REACT_HOT_LOADER__.register(u,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/mode-edit.js"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/mode-edit.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},erdY:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("Zx67"),i=s(r),o=n("Zrlr"),d=s(o),a=n("wxAW"),l=s(a),_=n("zwoO"),u=s(_),c=n("Pf15"),f=s(c),m=n("Q7hp"),p=s(m),E=n("umy1"),v=s(E),O=n("U7vG"),R=s(O),y=n("HW6M"),T=s(y),A=n("yecU"),C=s(A),w=n("B98q"),h=n("PJh5"),b=s(h),g=n("EzfF"),L=s(g),D=n("4Xm7"),j=s(D),H=n("PjCM"),P=n("Yrew"),N=(s(P),n("ZHGc")),M=s(N),F=n("m4co"),I=s(F),x=n("P1+L"),U=s(x),k=n("GeCl"),S=s(k),B=n("ysrY"),G=n("evfG"),K=s(G),z=n("Pagr"),W=s(z),Z=n("tWAH"),q=s(Z),Y=n("K3Wt"),J=s(Y),X=function(e){function t(){var e,n,s,r;(0,d.default)(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=s=(0,u.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(a))),s.clickFileOrFolder=function(){var e;return(e=s).__clickFileOrFolder__REACT_HOT_LOADER__.apply(e,arguments)},r=n,(0,u.default)(s,r)}return(0,f.default)(t,e),(0,l.default)(t,[{key:"__clickFileOrFolder__REACT_HOT_LOADER__",value:function(e){var t=e.file,n=t.fileId,s=t.revisionId,r=this.props.pushRoute,i=this.props.project.data._id;"file"==t.type?r((0,w.fileRoute)({fileId:n,projectId:i,revisionId:s})):"folder"==t.type?r((0,w.projectFolderRoute)({fileId:n,projectId:i})):i&&r((0,w.projectRoute)({projectId:i}))}},{key:"render",value:function(){var e=this.props,t=e.entityModel,n=e.project,s=e.path,r=e.files,i=e.isFilePage,o=e.saveProject,d={showMenu:!0};if(n&&n.data&&n.data._id){var a=B.licenseData.find(function(e){return e.type==n.data.license}),l={projectId:n.data._id},_=R.default.createElement(H.Col,{className:(0,T.default)(n.data.picture?"flex flex-gt-xs-33":"flex")},R.default.createElement("div",{className:(0,T.default)(n.data.picture?"layout-column":"layout-xs-column layout-gt-xs-row",C.default.infoBoxes)},R.default.createElement("div",{className:"flex layout-row layout-align-start-center"},R.default.createElement(J.default,null),"Updated ",(0,b.default)(n.data.updated).fromNow()),R.default.createElement("div",{className:"flex layout-row layout-align-start-center"},R.default.createElement(W.default,null),R.default.createElement(S.default,{name:"projectTeamRoute",params:l},1===n.data.team.length?n.data.team.length+" team member":n.data.team.length+" team members")),(0,v.default)(n,"data.location[0].name")?R.default.createElement("div",{className:"flex layout-row layout-align-start-center"},R.default.createElement(K.default,null),R.default.createElement("div",{className:"text-ellipsis flex"},n.data.location[0].name)):null,a?R.default.createElement("div",{className:"flex layout-row layout-align-start-center"},R.default.createElement(q.default,null),R.default.createElement("a",{className:"flex text-ellipsis",href:a.url,target:"_blank"},a.name)):null)),u=R.default.createElement(H.Col,{className:"flex"},R.default.createElement("div",{style:{backgroundImage:"url(https://dev.stemn.com"+n.data.picture+")"},className:C.default.image})),c=R.default.createElement(H.Row,{className:"layout-xs-column layout-gt-xs-row",style:{marginBottom:"30px"}},n.data.picture?u:null,_);return R.default.createElement("div",{style:{marginBottom:"30px"}},R.default.createElement(U.default,null,n.data.blurb.length>0?R.default.createElement("div",{className:C.default.blurb},n.data.blurb):null,R.default.createElement("div",{className:"layout-xs-column layout-gt-xs-row layout-align-gt-xs-start-center"},R.default.createElement("div",{className:C.default.tags},n.data.fields.map(function(e){return R.default.createElement(S.default,{key:e._id,name:"fieldRoute",params:{fieldId:e.stub}},R.default.createElement(M.default,{className:"primary",text:e.name,style:{marginBottom:"6px"}}))})),R.default.createElement("div",{className:"flex"}),R.default.createElement("div",{className:"layout-row",style:{marginBottom:"6px"}},R.default.createElement(I.default,{style:{marginRight:"10px"},type:"follow",numberModel:t+".data.followers",number:n.data.followers,entityType:"project",entityId:n.data._id}),R.default.createElement(I.default,{type:"like",numberModel:t+".data.likes",number:n.data.likes,entityType:"project",entityId:n.data._id})))),R.default.createElement(H.Container,{style:{marginTop:"30px"}},i?null:c,R.default.createElement(L.default,{className:C.default.files,projectId:n.data._id,path:s||"",crumbClickFn:this.clickFileOrFolder,options:d,crumbPopup:!0,search:!0,link:!0}),R.default.createElement(j.default,{files:(0,p.default)(r,"entries",[]),project:n,projectModel:t,saveProject:o})))}return null}}]),t}(O.Component);t.default=X;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(X,"ProjectOverview","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectOverview/ProjectOverview.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},evfG:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),i=s(r),o=n("U7vG"),d=s(o),a=n("aSqn"),l=s(a),_=function(e){return d.default.createElement(l.default,(0,i.default)({viewBox:"0 0 40 40"},e),d.default.createElement("g",null,d.default.createElement("path",{d:"m20 19.1q1.7 0 2.9-1.2t1.2-2.9-1.2-2.9-2.9-1.2-2.9 1.2-1.2 2.9 1.2 2.9 2.9 1.2z m0-15.7q4.8 0 8.2 3.4t3.4 8.2q0 2.4-1.2 5.5t-2.9 5.9-3.4 5.1-2.8 3.8l-1.3 1.3q-0.5-0.5-1.2-1.4t-2.9-3.6-3.5-5.2-2.8-5.8-1.2-5.6q0-4.8 3.4-8.2t8.2-3.4z"})))},u=_,c=u;t.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MdLocationOn","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/location-on.js"),__REACT_HOT_LOADER__.register(u,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/location-on.js"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/location-on.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},iLLw:function(e,t,n){"use strict";function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var r=n("Khps"),i=s(r);e.exports=i;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},mUll:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=e.projectId,n=e.fileId,s=e.revisionId,r=e.provider,i=e.cacheKey;return{type:"FILES/GET_META",http:!0,payload:{method:"GET",url:t?"/api/v1/sync/files/"+t+"/"+n:"/api/v1/remote/files/"+r+"/"+n,params:{revisionId:s}},meta:{cacheKey:i||n+"-"+s}}},s=n;t.default=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/getMeta.js"),__REACT_HOT_LOADER__.register(s,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Files/actions/getMeta.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},oHdL:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.websocketLeaveFile=t.websocketJoinFile=t.renderFileProgress=t.renderFileError=t.renderFile=t.getRelatedTasks=t.getMeta=t.getFileProgress=t.getFile=t.getAssemblyParts=t.getAssemblyParents=t.downloadProgress=void 0;var r=n("V32k"),i=s(r),o=n("NYcx"),d=s(o),a=n("AtAW"),l=s(a),_=n("X6P3"),u=s(_),c=n("ARtS"),f=s(c),m=n("mUll"),p=s(m),E=n("KC90"),v=s(E),O=n("2V0G"),R=s(O),y=n("Zm/y"),T=s(y),A=n("MS8W"),C=s(A),w=n("91n2"),h=s(w),b=n("5uJm"),g=s(b);t.downloadProgress=i.default,t.getAssemblyParents=d.default,t.getAssemblyParts=l.default,t.getFile=u.default,t.getFileProgress=f.default,t.getMeta=p.default,t.getRelatedTasks=v.default,t.renderFile=R.default,t.renderFileError=T.default,t.renderFileProgress=C.default,t.websocketJoinFile=h.default,t.websocketLeaveFile=g.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},tWAH:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),i=s(r),o=n("U7vG"),d=s(o),a=n("aSqn"),l=s(a),_=function(e){return d.default.createElement(l.default,(0,i.default)({viewBox:"0 0 40 40"},e),d.default.createElement("g",null,d.default.createElement("path",{d:"m19.1 1.6l15.9 8.4v3.4h-31.6v-3.4z m7.5 15h5v11.8h-5v-11.8z m-23.2 20v-5h31.6v5h-31.6z m13.2-20h5v11.8h-5v-11.8z m-10 0h5v11.8h-5v-11.8z"})))},u=_,c=u;t.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MdAccountBalance","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/account-balance.js"),
__REACT_HOT_LOADER__.register(u,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/account-balance.js"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/account-balance.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},yecU:function(e,t){e.exports={blurb:"ProjectOverview_blurb-11KWp",files:"ProjectOverview_files-2BGbu",tags:"ProjectOverview_tags-DOdzn",image:"ProjectOverview_image-1zQHK",infoBoxes:"ProjectOverview_infoBoxes-qFKC_"}},ysrY:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.licenseData=[{type:"CC BY",name:"Creative Commons - Attribution",url:"http://creativecommons.org/licenses/by/4.0/",symbols:["cc","cc-by"],description:"This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation."},{type:"CC BY-SA",name:"Creative Commons - Attribution - Share Alike",url:"http://creativecommons.org/licenses/by-sa/4.0/",symbols:["cc","cc-by","cc-sa"],description:"This license lets others remix, tweak, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms."},{type:"CC BY-ND",name:"Creative Commons - Attribution - No Derivatives",url:"http://creativecommons.org/licenses/by-nd/4.0/",symbols:["cc","cc-by","cc-nd"],description:"This license allows for redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to you."},{type:"CC BY-NC",name:"Creative Commons - Attribution - Non-Commercial",url:"http://creativecommons.org/licenses/by-nc/4.0/",symbols:["cc","cc-by","cc-nc"],description:"This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms."},{type:"CC BY-NC-SA",name:"Creative Commons - Attribution - Non-Commercial - Share Alike",url:"http://creativecommons.org/licenses/by-nc-sa/4.0/",symbols:["cc","cc-by","cc-nd","cc-sa"],description:"This license lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms."},{type:"CC BY-NC-ND",name:"Creative Commons - Attribution - Non-Commercial - No Derivatives",url:"http://creativecommons.org/licenses/by-nc-nd/4.0/",symbols:["cc","cc-by","cc-nd","cc-nc"],description:"This license is the most restrictive of the Creative Commons licenses, only allowing others to download your works and share them with others as long as they credit you, but they can’t change them in any way or use them commercially."},{type:"MPL",name:"Mozilla Public License",url:"https://www.mozilla.org/MPL/2.0/",symbols:[],description:"The MPL allows source code to be mixed with other files under a different, even proprietary license. However, code files licensed under the MPL must remain under the MPL and freely available in source form."},{type:"Other",name:"Other License",url:"",symbols:[],description:"Other License. Please outline the conditions in your Readme file."}];(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"licenseData","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Licenses/Licenses.data.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});