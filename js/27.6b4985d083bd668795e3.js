webpackJsonp([27,54],{"6Y9n":function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s("mNLN"),a=r(n);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},IHO3:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s("Zx67"),a=r(n),o=s("Zrlr"),d=r(o),l=s("wxAW"),i=r(l),u=s("zwoO"),f=r(u),_=s("Pf15"),c=r(_),p=s("U7vG"),m=r(p),h=s("4n+p"),T=s("FmOC"),E=r(T),v=s("HW6M"),g=r(v),A=s("nWVF"),O=r(A),R=s("DY/v"),C=s("u2h7"),w=s("Erdv"),y=r(w),b=s("xwNf"),P=r(b),L=s("D2fa"),k=r(L),j=s("O8U9"),D=r(j),H=s("LPSb"),N=r(H),B=function(e){function t(){var e,s,r,n;(0,d.default)(this,t);for(var o=arguments.length,l=Array(o),i=0;i<o;i++)l[i]=arguments[i];return s=r=(0,f.default)(this,(e=t.__proto__||(0,a.default)(t)).call.apply(e,[this].concat(l))),r.confirmDelete=function(){var e;return(e=r).__confirmDelete__REACT_HOT_LOADER__.apply(e,arguments)},r.onMount=function(){var e;return(e=r).__onMount__REACT_HOT_LOADER__.apply(e,arguments)},n=s,(0,f.default)(r,n)}return(0,c.default)(t,e),(0,i.default)(t,[{key:"__confirmDelete__REACT_HOT_LOADER__",value:function(e,t){var s=this;this.props.dispatch((0,C.showConfirm)({message:"If you delete this label it will be removed from all assigned tasks."})).then(function(){s.props.dispatch(R.actions.remove(e,t))})}},{key:"componentWillReceiveProps",value:function(e){this.onMount(e)}},{key:"componentWillMount",value:function(){this.onMount(this.props)}},{key:"__onMount__REACT_HOT_LOADER__",value:function(e){var t=e.model,s=e.value,r=e.dispatch;0===s.length?r(R.actions.push(t,{_id:(0,E.default)(),color:"",name:"",tasks:[]})):s[s.length-1].name.length>=1&&r(R.actions.push(t,{_id:(0,E.default)(),color:"",name:"",tasks:[]}))}},{key:"render",value:function(){var e=this,t=this.props,s=t.model,r=t.value;t.props;return m.default.createElement("div",null,r.map(function(t,r){return m.default.createElement("div",{key:t._id,className:O.default.row+" layout-row layout-align-start-center"},m.default.createElement("div",{className:O.default.name+" flex"},m.default.createElement(P.default,{model:s+"["+r+"].name",value:t.name,className:"dr-input",type:"text",placeholder:"Group Name"})),m.default.createElement("div",{className:(0,g.default)("dr-input",O.default.taskCount)},(0,N.default)(t.tasks.length,"Task")),m.default.createElement(y.default,{preferPlace:"right"},m.default.createElement(k.default,null,m.default.createElement(D.default,{size:"20px"})),m.default.createElement("div",{className:"PopoverMenu"},m.default.createElement("a",{onClick:function(){return e.confirmDelete(s,r)}},"Remove Group"))))}))}}]),t}(p.Component),x=(0,h.connect)()(B),M=x;t.default=M;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(B,"TaskGroupsEdit","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tasks/TaskGroupsEdit/TaskGroupsEdit.jsx"),__REACT_HOT_LOADER__.register(x,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tasks/TaskGroupsEdit/TaskGroupsEdit.jsx"),__REACT_HOT_LOADER__.register(M,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Tasks/TaskGroupsEdit/TaskGroupsEdit.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},LPSb:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e,t,s){var r="";if("People"===t)return r=1===e?"Person":"People",s?r:e+" "+r;var n=t[t.length];return r=1===e?t:"y"===n?t.substring(0,t.length-1)+"ies":t+"s",s?r:e+" "+r},r=s;t.default=r;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/utils/strings/pluralise.js"),__REACT_HOT_LOADER__.register(r,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/utils/strings/pluralise.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Nqbw:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s("IHO3"),a=r(n);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},RdTR:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e){this.el=e,this.paths=[].slice.call(this.el.querySelectorAll("path")),this.pathsArr=new Array,this.lengthsArr=new Array,this._init()}Object.defineProperty(t,"__esModule",{value:!0}),t.AnimateSvg=void 0;var a=s("bOdI"),o=r(a),d=s("U7vG"),l=r(d),i=s("HW6M"),u=r(i),f=s("Yvel"),_=r(f),c=t.AnimateSvg=l.default.createClass({displayName:"AnimateSvg",svgEl:"",render:function(){var e=this.props,t=e.children,s=e.draw,r={ref:"svg"};return!this.svgEl&&this.refs.svg&&(this.svgEl=new n(this.refs.svg)),this.svgEl&&this.svgEl.draw(s),l.default.cloneElement(t,r)}}),p=l.default.createClass({displayName:"_default",getInitialState:function(){return{status:"",disabled:!1,drawLoading:0,drawSuccess:0}},componentWillReceiveProps:function(e){var t=this.props;!e.loading||t&&t.loading?t&&t.loading&&!e.loading&&this.loadingComplete():this.startLoading()},partialLoadTimeout:null,completeTimeout:null,completeIconTimeout:null,resetTimeout:null,clearTimeouts:function(){clearTimeout(this.partialLoadTimeout),clearTimeout(this.completeTimeout),clearTimeout(this.completeIconTimeout),clearTimeout(this.resetTimeout)},componentWillUnmount:function(){this.clearTimeouts()},startLoading:function(){var e=this;this.clearTimeouts(),this.setState({status:"loading",disabled:!0,drawLoading:0,drawComplete:0}),this.partialLoadTimeout=setTimeout(function(){e.setState({drawLoading:.7})},100)},loadingComplete:function(){var e=this;this.clearTimeouts(),this.setState({drawLoading:1}),this.completeTimeout=setTimeout(function(){e.setState(e.props.error?{status:"error"}:{status:"success"}),e.completeIconTimeout=setTimeout(function(){e.setState({drawComplete:1})},100),e.resetTimeout=setTimeout(function(){e.setState({status:"",disabled:!1,drawLoading:0})},2e3)},700)},render:function(){var e=this.props,t=e.children,s=e.onClick,r=(e.loading,e.className),n=e.href,a=this.state,d=a.status,i=a.disabled,f=a.drawLoading,p=a.drawComplete,m=l.default.createElement("svg",{className:_.default.progressCircle,width:"40",height:"40",viewBox:"0 0 40 40"},l.default.createElement("path",{d:"m1.5,20c0,-10.22099 8.27901,-18.5 18.5,-18.5c10.22099,0 18.5,8.27901 18.5,18.5c0,10.22099 -8.27901,18.5 -18.5,18.5c-10.22099,0 -18.5,-8.27901 -18.5,-18.5z"})),h=l.default.createElement("svg",{className:_.default.checkmark,width:"40",height:"40",viewBox:"0 0 70 70"},l.default.createElement("path",{d:"m31.5,46.5l15.3,-23.2"}),l.default.createElement("path",{d:"m31.5,46.5l-8.5,-7.1"})),T=l.default.createElement("svg",{className:_.default.cross,width:"40",height:"40",viewBox:"0 0 70 70"},l.default.createElement("path",{d:"m35,35l-9.3,-9.3"}),l.default.createElement("path",{d:"m35,35l9.3,9.3"}),l.default.createElement("path",{d:"m35,35l-9.3,9.3"}),l.default.createElement("path",{d:"m35,35l9.3,-9.3"})),E=function(){return"success"==d?l.default.createElement(c,{draw:p},h):"error"==d?l.default.createElement(c,{draw:p},T):null};return l.default.createElement("div",{className:(0,u.default)(_.default.progressButton,r,(0,o.default)({},_.default.loading,"loading"==d),(0,o.default)({},_.default.error,"error"==d),(0,o.default)({},_.default.success,"success"==d))},n?l.default.createElement("a",{href:n},l.default.createElement("button",null,l.default.createElement("span",null,t))):l.default.createElement("button",{onClick:function(){i||s()}},l.default.createElement("span",null,t)),l.default.createElement(c,{draw:f},m),E())}}),m=p;t.default=m,n.prototype._init=function(){var e=this;this.paths.forEach(function(t,s){e.pathsArr[s]=t,t.style.strokeDasharray=e.lengthsArr[s]=t.getTotalLength()}),this.draw(0)},n.prototype.draw=function(e){for(var t=0,s=this.pathsArr.length;t<s;++t)this.pathsArr[t].style.strokeDashoffset=this.lengthsArr[t]*(1-e)};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"AnimateSvg","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"),__REACT_HOT_LOADER__.register(n,"SVGEl","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"),__REACT_HOT_LOADER__.register(p,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"),__REACT_HOT_LOADER__.register(m,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Vr71:function(e,t){e.exports={border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)",root:"styles_root-2U4JT"}},VsSL:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s("Zx67"),a=r(n),o=s("Zrlr"),d=r(o),l=s("wxAW"),i=r(l),u=s("zwoO"),f=r(u),_=s("Pf15"),c=r(_),p=s("U7vG"),m=r(p),h=s("jE9e"),T=r(h),E=function(e){function t(){return(0,d.default)(this,t),(0,f.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.boardModel,s=e.updateBoard,r=e.board;return r&&r.data?m.default.createElement(T.default,{boardModel:t,board:r,saveBoard:s}):null}}]),t}(p.Component);t.default=E;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(E,"ProjectSettingsTasks","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettingsTasks/ProjectSettingsTasks.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Yvel:function(e,t){e.exports={primary:"rgb(68, 154, 211)","primary-2":"rgb(64, 129, 173)",warn:"rgb(244,67,54)","warn-2":"rgb(219, 59, 47)",progressButton:"ProgressButton_progressButton-3j879",progressCircle:"ProgressButton_progressCircle-UXzDa",checkmark:"ProgressButton_checkmark-27Dq2",cross:"ProgressButton_cross-1idFP",loading:"ProgressButton_loading-2wmTv",success:"ProgressButton_success-8765O",error:"ProgressButton_error-CaXYN"}},hpuc:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a,o,d,l=s("Zx67"),i=r(l),u=s("Zrlr"),f=r(u),_=s("wxAW"),c=r(_),p=s("zwoO"),m=r(p),h=s("Pf15"),T=r(h),E=s("U7vG"),v=r(E),g=s("4n+p"),A=s("DY/v"),O=function(){return{}},R={load:A.actions.load},C=(n=(0,g.connect)(O,R),n((d=o=function(e){function t(){return(0,f.default)(this,t),(0,m.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,T.default)(t,e),(0,c.default)(t,[{key:"componentWillMount",value:function(){this.props.load(this.props.model,this.props.value)}},{key:"render",value:function(){var e=this.props.children;return v.default.createElement("div",null,e)}}]),t}(E.Component),o.propTypes={load:E.PropTypes.func.isRequired,model:E.PropTypes.string.isRequired,value:E.PropTypes.any.isRequired},a=d))||a);t.default=C;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(C,"Form","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Forms/Form.jsx"),__REACT_HOT_LOADER__.register(O,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Forms/Form.jsx"),__REACT_HOT_LOADER__.register(R,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Forms/Form.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},jE9e:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a,o=s("Dd8w"),d=r(o),l=s("Zx67"),i=r(l),u=s("Zrlr"),f=r(u),_=s("wxAW"),c=r(_),p=s("zwoO"),m=r(p),h=s("Pf15"),T=r(h),E=s("umy1"),v=r(E),g=s("U7vG"),A=r(g),O=s("RdTR"),R=r(O),C=s("onR1"),w=r(C),y=s("Nqbw"),b=r(y),P=s("hpuc"),L=r(P),k=s("ycY4"),j=r(k),D=(a=n=function(e){function t(){var e,s,r,n;(0,f.default)(this,t);for(var a=arguments.length,o=Array(a),d=0;d<a;d++)o[d]=arguments[d];return s=r=(0,m.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(o))),r.saveBoard=function(){var e;return(e=r).__saveBoard__REACT_HOT_LOADER__.apply(e,arguments)},n=s,(0,m.default)(r,n)}return(0,T.default)(t,e),(0,c.default)(t,[{key:"__saveBoard__REACT_HOT_LOADER__",value:function(){var e=this.props,t=e.board,s=(e.boardModel,e.saveBoard),r=(0,d.default)({},t.data,{groups:t.forms.groups.filter(function(e){return e.name.length>0||e.tasks.length>0}),labels:t.forms.labels.filter(function(e){return e.name.length>0||e.color.length>0})});s({board:r})}},{key:"render",value:function(){var e=this.props,t=e.boardModel,s=e.board;return A.default.createElement("div",null,A.default.createElement(j.default,null,A.default.createElement("h3",null,"Thread Groups"),A.default.createElement("p",null,"Groups are used to categorize your threads. A thread can only be part of 1 group at any given time. If you delete a group, all child threads will be removed."),A.default.createElement(L.default,{model:t+".forms.groups",value:s.data.groups},(0,v.default)(s,"forms.groups")&&A.default.createElement(b.default,{model:t+".forms.groups",value:s.forms.groups}))),A.default.createElement(j.default,null,A.default.createElement("h3",null,"Thread Labels"),A.default.createElement("p",null,"Labels act in a similar way to Groups except a thread can have multiple labels. If you delete a label, it will be removed from all related threads."),A.default.createElement(L.default,{model:t+".forms.labels",value:s.data.labels},(0,v.default)(s,"forms.labels")&&A.default.createElement(w.default,{model:t+".forms.labels",value:s.forms.labels}))),A.default.createElement("div",{className:"layout-row"},A.default.createElement("div",{className:"flex"}),A.default.createElement(R.default,{className:"primary",onClick:this.saveBoard,loading:s.savePending},"Save")))}}]),t}(g.Component),n.propTypes={board:g.PropTypes.object.isRequired,boardModel:g.PropTypes.string.isRequired,saveBoard:g.PropTypes.func.isRequired},a);t.default=D;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(D,"TasksSettings","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/ProjectSettings/TasksSettings/index.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},mNLN:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a,o,d=s("Zx67"),l=r(d),i=s("Zrlr"),u=r(i),f=s("wxAW"),_=r(f),c=s("zwoO"),p=r(c),m=s("Pf15"),h=r(m),T=s("Q7hp"),E=r(T),v=s("U7vG"),g=r(v),A=s("4n+p"),O=s("YapR"),R=r(O),C=s("VsSL"),w=r(C),y=s("Htxf"),b=function(e,t){var s=e.tasks,r=e.projects,n=t.params,a=n.stub,o=r.data[a],d=(0,E.default)(s,["projects",a,"boards","0"]),l=(0,E.default)(s,["boards",d]);return{projectId:a,project:o,boardId:d,board:l,boardModel:"tasks.boards."+d}},P={updateBoard:y.updateBoard,getBoards:y.getBoards},L=[{hasChanged:"projectId",onChange:function(e){e.getBoards({projectId:e.projectId})}}],k=(n=(0,A.connect)(b,P),a=(0,R.default)(L),n(o=a(o=function(e){function t(){return(0,u.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){return g.default.createElement(w.default,this.props)}}]),t}(v.Component))||o)||o);t.default=k;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(k,"ProjectSettingsTasksContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettingsTasks/ProjectSettingsTasks.container.js"),__REACT_HOT_LOADER__.register(b,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettingsTasks/ProjectSettingsTasks.container.js"),__REACT_HOT_LOADER__.register(P,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettingsTasks/ProjectSettingsTasks.container.js"),__REACT_HOT_LOADER__.register(L,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettingsTasks/ProjectSettingsTasks.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},nWVF:function(e,t){e.exports={row:"TaskGroupsEdit_row-sW57I",name:"TaskGroupsEdit_name-2Qzzo",taskCount:"TaskGroupsEdit_taskCount-26u3W"}},ycY4:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s("Vr71"),a=r(n),o=s("LVXM"),d=r(o),l=(0,d.default)(a.default.root),i=l;t.default=i;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Panels/InfoPanel/index.js"),__REACT_HOT_LOADER__.register(i,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Panels/InfoPanel/index.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});