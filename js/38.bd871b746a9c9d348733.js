webpackJsonp([38],{1220:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(2894),o=n(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1276:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(1280),o=n(r),i=s(135),a=n(i),l=(0,a.default)(o.default.root),u=l;t.default=u;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Panels/InfoPanel/index.js"),__REACT_HOT_LOADER__.register(u,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Panels/InfoPanel/index.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1280:function(e,t){e.exports={border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)",root:"styles_root-2U4JT"}},1313:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){this.el=e,this.paths=[].slice.call(this.el.querySelectorAll("path")),this.pathsArr=new Array,this.lengthsArr=new Array,this._init()}Object.defineProperty(t,"__esModule",{value:!0}),t.AnimateSvg=void 0;var o=s(38),i=n(o),a=s(0),l=n(a),u=s(2),d=n(u),c=s(1319),_=n(c),f=t.AnimateSvg=l.default.createClass({displayName:"AnimateSvg",svgEl:"",render:function(){var e=this.props,t=e.children,s=e.draw,n={ref:"svg"};return!this.svgEl&&this.refs.svg&&(this.svgEl=new r(this.refs.svg)),this.svgEl&&this.svgEl.draw(s),l.default.cloneElement(t,n)}}),m=l.default.createClass({displayName:"_default",getInitialState:function(){return{status:"",disabled:!1,drawLoading:0,drawSuccess:0}},componentWillReceiveProps:function(e){var t=this.props;!e.loading||t&&t.loading?t&&t.loading&&!e.loading&&this.loadingComplete():this.startLoading()},partialLoadTimeout:null,completeTimeout:null,completeIconTimeout:null,resetTimeout:null,clearTimeouts:function(){clearTimeout(this.partialLoadTimeout),clearTimeout(this.completeTimeout),clearTimeout(this.completeIconTimeout),clearTimeout(this.resetTimeout)},componentWillUnmount:function(){this.clearTimeouts()},startLoading:function(){var e=this;this.clearTimeouts(),this.setState({status:"loading",disabled:!0,drawLoading:0,drawComplete:0}),this.partialLoadTimeout=setTimeout(function(){e.setState({drawLoading:.7})},100)},loadingComplete:function(){var e=this;this.clearTimeouts(),this.setState({drawLoading:1}),this.completeTimeout=setTimeout(function(){e.setState(e.props.error?{status:"error"}:{status:"success"}),e.completeIconTimeout=setTimeout(function(){e.setState({drawComplete:1})},100),e.resetTimeout=setTimeout(function(){e.setState({status:"",disabled:!1,drawLoading:0})},2e3)},700)},render:function(){var e=this.props,t=e.children,s=e.onClick,n=(e.loading,e.className),r=e.href,o=this.state,a=o.status,u=o.disabled,c=o.drawLoading,m=o.drawComplete,p=l.default.createElement("svg",{className:_.default.progressCircle,width:"40",height:"40",viewBox:"0 0 40 40"},l.default.createElement("path",{d:"m1.5,20c0,-10.22099 8.27901,-18.5 18.5,-18.5c10.22099,0 18.5,8.27901 18.5,18.5c0,10.22099 -8.27901,18.5 -18.5,18.5c-10.22099,0 -18.5,-8.27901 -18.5,-18.5z"})),h=l.default.createElement("svg",{className:_.default.checkmark,width:"40",height:"40",viewBox:"0 0 70 70"},l.default.createElement("path",{d:"m31.5,46.5l15.3,-23.2"}),l.default.createElement("path",{d:"m31.5,46.5l-8.5,-7.1"})),g=l.default.createElement("svg",{className:_.default.cross,width:"40",height:"40",viewBox:"0 0 70 70"},l.default.createElement("path",{d:"m35,35l-9.3,-9.3"}),l.default.createElement("path",{d:"m35,35l9.3,9.3"}),l.default.createElement("path",{d:"m35,35l-9.3,9.3"}),l.default.createElement("path",{d:"m35,35l9.3,-9.3"})),v=function(){return"success"==a?l.default.createElement(f,{draw:m},h):"error"==a?l.default.createElement(f,{draw:m},g):null};return l.default.createElement("div",{className:(0,d.default)(_.default.progressButton,n,(0,i.default)({},_.default.loading,"loading"==a),(0,i.default)({},_.default.error,"error"==a),(0,i.default)({},_.default.success,"success"==a))},r?l.default.createElement("a",{href:r},l.default.createElement("button",null,l.default.createElement("span",null,t))):l.default.createElement("button",{onClick:function(){u||s()}},l.default.createElement("span",null,t)),l.default.createElement(f,{draw:c},p),v())}}),p=m;t.default=p,r.prototype._init=function(){var e=this;this.paths.forEach(function(t,s){e.pathsArr[s]=t,t.style.strokeDasharray=e.lengthsArr[s]=t.getTotalLength()}),this.draw(0)},r.prototype.draw=function(e){for(var t=0,s=this.pathsArr.length;t<s;++t)this.pathsArr[t].style.strokeDashoffset=this.lengthsArr[t]*(1-e)};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"AnimateSvg","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"),__REACT_HOT_LOADER__.register(r,"SVGEl","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"),__REACT_HOT_LOADER__.register(m,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"),__REACT_HOT_LOADER__.register(p,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1319:function(e,t){e.exports={primary:"rgb(68, 154, 211)","primary-2":"rgb(64, 129, 173)",warn:"rgb(244,67,54)","warn-2":"rgb(219, 59, 47)",progressButton:"ProgressButton_progressButton-3j879",progressCircle:"ProgressButton_progressCircle-UXzDa",checkmark:"ProgressButton_checkmark-27Dq2",cross:"ProgressButton_cross-1idFP",loading:"ProgressButton_loading-2wmTv",success:"ProgressButton_success-8765O",error:"ProgressButton_error-CaXYN"}},2406:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(8),o=n(r),i=s(35),a=n(i),l=s(13),u=n(l),d=s(11),c=n(d),_=s(14),f=n(_),m=s(16),p=n(m),h=s(15),g=n(h),v=s(0),y=n(v),T=s(5),E=s(12),C=s(106),A=n(C),O=function(e){function t(){var e,s,n,r;(0,c.default)(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return s=n=(0,p.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(i))),n.onChange=function(){var e;return(e=n).__onChange__REACT_HOT_LOADER__.apply(e,arguments)},r=s,(0,p.default)(n,r)}return(0,g.default)(t,e),(0,f.default)(t,[{key:"__onChange__REACT_HOT_LOADER__",value:function(e){var t=this.props,s=t.dispatch,n=t.model;s(E.actions.change(n,e&&e.value))}},{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.model,(0,a.default)(e,["dispatch","model"]));return y.default.createElement(A.default,(0,o.default)({onChange:this.onChange},t))}}]),t}(y.default.Component),w=(0,T.connect)()(O),R=w;t.default=R;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(O,"Component","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Input/Select/Select.jsx"),__REACT_HOT_LOADER__.register(w,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Input/Select/Select.jsx"),__REACT_HOT_LOADER__.register(R,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Input/Select/Select.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2407:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(2406),o=n(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2408:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=t.licenseData=[{type:"CC BY",name:"Creative Commons - Attribution",url:"http://creativecommons.org/licenses/by/4.0/",symbols:["cc","cc-by"],description:"This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation."},{type:"CC BY-SA",name:"Creative Commons - Attribution - Share Alike",url:"http://creativecommons.org/licenses/by-sa/4.0/",symbols:["cc","cc-by","cc-sa"],description:"This license lets others remix, tweak, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms."},{type:"CC BY-ND",name:"Creative Commons - Attribution - No Derivatives",url:"http://creativecommons.org/licenses/by-nd/4.0/",symbols:["cc","cc-by","cc-nd"],description:"This license allows for redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to you."},{type:"CC BY-NC",name:"Creative Commons - Attribution - Non-Commercial",url:"http://creativecommons.org/licenses/by-nc/4.0/",symbols:["cc","cc-by","cc-nc"],description:"This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms."},{type:"CC BY-NC-SA",name:"Creative Commons - Attribution - Non-Commercial - Share Alike",url:"http://creativecommons.org/licenses/by-nc-sa/4.0/",symbols:["cc","cc-by","cc-nd","cc-sa"],description:"This license lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms."},{type:"CC BY-NC-ND",name:"Creative Commons - Attribution - Non-Commercial - No Derivatives",url:"http://creativecommons.org/licenses/by-nc-nd/4.0/",symbols:["cc","cc-by","cc-nd","cc-nc"],description:"This license is the most restrictive of the Creative Commons licenses, only allowing others to download your works and share them with others as long as they credit you, but they can’t change them in any way or use them commercially."},{type:"MPL",name:"Mozilla Public License",url:"https://www.mozilla.org/MPL/2.0/",symbols:[],description:"The MPL allows source code to be mixed with other files under a different, even proprietary license. However, code files licensed under the MPL must remain under the MPL and freely available in source form."},{type:"Other",name:"Other License",url:"",symbols:[],description:"Other License. Please outline the conditions in your Readme file."}];(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(s,"licenseData","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Licenses/Licenses.data.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2788:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,i=s(13),a=n(i),l=s(11),u=n(l),d=s(14),c=n(d),_=s(16),f=n(_),m=s(15),p=n(m),h=s(0),g=n(h),v=s(2407),y=n(v),T=s(2408),E=T.licenseData.map(function(e){return{label:e.name,value:e.type}}),C=(o=r=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.model,s=e.value,n=T.licenseData.find(function(e){return e.type===s}),r=function(){if(n&&n.url)return g.default.createElement("a",{href:n.url,target:"_blank",className:"link-primary"},"Learn more.")};return g.default.createElement("div",null,g.default.createElement("h3",null,"Copyright License"),g.default.createElement("p",null,"Protect your work by selecting an appropriate license."),g.default.createElement(y.default,{value:s,model:t,options:E}),n&&n.description?g.default.createElement("p",null,n.description," ",r()):null)}}]),t}(h.Component),r.propTypes={model:h.PropTypes.string.isRequired,value:h.PropTypes.string},o);t.default=C;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(C,"LicenseSettings","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/ProjectSettings/LicenseSettings/LicenseSettings.jsx"),__REACT_HOT_LOADER__.register(E,"options","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/ProjectSettings/LicenseSettings/LicenseSettings.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2789:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(2788),o=n(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2894:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,i=s(13),a=n(i),l=s(11),u=n(l),d=s(14),c=n(d),_=s(16),f=n(_),m=s(15),p=n(m),h=s(0),g=n(h),v=s(5),y=s(2895),T=n(y),E=s(136),C=function(e,t){var s=e.projects,n=t.params,r=n.stub,o=s.data[r],i="projects.data."+r;return{project:o,projectModel:i}},A={saveProject:E.saveProject},O=(r=(0,v.connect)(C,A),r(o=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return g.default.createElement(T.default,this.props)}}]),t}(h.Component))||o);t.default=O;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(O,"ProjectSettingsPermissionsContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettingsPermissions/ProjectSettingsPermissions.container.js"),__REACT_HOT_LOADER__.register(C,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettingsPermissions/ProjectSettingsPermissions.container.js"),__REACT_HOT_LOADER__.register(A,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettingsPermissions/ProjectSettingsPermissions.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2895:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,i=s(13),a=n(i),l=s(11),u=n(l),d=s(14),c=n(d),_=s(16),f=n(_),m=s(15),p=n(m),h=s(0),g=n(h),v=s(460),y=s(487),T=n(y),E=s(2789),C=n(E),A=s(1276),O=n(A),w=s(1313),R=n(w),b=(o=r=function(e){function t(){var e,s,n,r;(0,u.default)(this,t);for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];return s=n=(0,f.default)(this,(e=t.__proto__||(0,a.default)(t)).call.apply(e,[this].concat(i))),n.saveProject=function(){var e;return(e=n).__saveProject__REACT_HOT_LOADER__.apply(e,arguments)},r=s,(0,f.default)(n,r)}return(0,p.default)(t,e),(0,c.default)(t,[{key:"__saveProject__REACT_HOT_LOADER__",value:function(){this.props.saveProject({project:this.props.project.data})}},{key:"render",value:function(){var e=this.props,t=e.project,s=e.projectModel;e.saveProject;return g.default.createElement("div",null,g.default.createElement(O.default,null,g.default.createElement("h3",null,"Project Type"),g.default.createElement(T.default,{model:s+".data.permissions.projectType",value:(0,v.get)(t,"data.permissions.projectType","")})),g.default.createElement(O.default,null,g.default.createElement(C.default,{model:s+".data.license",value:(0,v.get)(t,"data.license","")})),g.default.createElement("div",{className:"layout-row layout-align-end"},g.default.createElement(R.default,{className:"primary",onClick:this.saveProject,loading:t.savePending},"Save Project")))}}]),t}(h.Component),r.propTypes={saveProject:h.PropTypes.func.isRequired,project:h.PropTypes.object.isRequired,projectModel:h.PropTypes.string.isRequired},o);t.default=b;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(b,"ProjectSettingsPermissions","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettingsPermissions/ProjectSettingsPermissions.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});