webpackJsonp([28,58],{Ckag:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("sOpo"),o=s(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},JeFk:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,i=n("Zx67"),a=s(i),c=n("Zrlr"),l=s(c),u=n("wxAW"),d=s(u),_=n("zwoO"),f=s(_),p=n("Pf15"),m=s(p),y=n("U7vG"),v=s(y),h=n("4n+p"),C=n("hktq"),T=s(C),O=n("N31G"),A=function(e,t){var n=e.projects,s=t.params,r=s.stub,o=n.data[r],i="projects.data."+r;return{project:o,projectModel:i}},E={saveProject:O.saveProject},g=(r=(0,h.connect)(A,E),r(o=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return v.default.createElement(T.default,this.props)}}]),t}(y.Component))||o);t.default=g;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(g,"ProjectSettingsPermissionsContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettingsPermissions/ProjectSettingsPermissions.container.js"),__REACT_HOT_LOADER__.register(A,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettingsPermissions/ProjectSettingsPermissions.container.js"),__REACT_HOT_LOADER__.register(E,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettingsPermissions/ProjectSettingsPermissions.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},PAeO:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("JeFk"),o=s(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},hktq:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,i=n("Zx67"),a=s(i),c=n("Zrlr"),l=s(c),u=n("wxAW"),d=s(u),_=n("zwoO"),f=s(_),p=n("Pf15"),m=s(p),y=n("Q7hp"),v=s(y),h=n("U7vG"),C=s(h),T=n("FR+B"),O=s(T),A=n("Ckag"),E=s(A),g=n("ycY4"),R=s(g),P=n("RdTR"),b=s(P),w=(o=r=function(e){function t(){var e,n,s,r;(0,l.default)(this,t);for(var o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];return n=s=(0,f.default)(this,(e=t.__proto__||(0,a.default)(t)).call.apply(e,[this].concat(i))),s.saveProject=function(){var e;return(e=s).__saveProject__REACT_HOT_LOADER__.apply(e,arguments)},r=n,(0,f.default)(s,r)}return(0,m.default)(t,e),(0,d.default)(t,[{key:"__saveProject__REACT_HOT_LOADER__",value:function(){this.props.saveProject({project:this.props.project.data})}},{key:"render",value:function(){var e=this.props,t=e.project,n=e.projectModel;e.saveProject;return C.default.createElement("div",null,C.default.createElement(R.default,null,C.default.createElement("h3",null,"Project Type"),C.default.createElement(O.default,{model:n+".data.permissions.projectType",value:(0,v.default)(t,"data.permissions.projectType","")})),C.default.createElement(R.default,null,C.default.createElement(E.default,{model:n+".data.license",value:(0,v.default)(t,"data.license","")})),C.default.createElement("div",{className:"layout-row layout-align-end"},C.default.createElement(b.default,{className:"primary",onClick:this.saveProject,loading:t.savePending},"Save Project")))}}]),t}(h.Component),r.propTypes={saveProject:h.PropTypes.func.isRequired,project:h.PropTypes.object.isRequired,projectModel:h.PropTypes.string.isRequired},o);t.default=w;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(w,"ProjectSettingsPermissions","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettingsPermissions/ProjectSettingsPermissions.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},mlP5:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),o=s(r),i=n("+6Bu"),a=s(i),c=n("Zx67"),l=s(c),u=n("Zrlr"),d=s(u),_=n("wxAW"),f=s(_),p=n("zwoO"),m=s(p),y=n("Pf15"),v=s(y),h=n("U7vG"),C=s(h),T=n("4n+p"),O=n("DY/v"),A=n("famw"),E=s(A),g=function(e){function t(){var e,n,s,r;(0,d.default)(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=s=(0,m.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(i))),s.onChange=function(){var e;return(e=s).__onChange__REACT_HOT_LOADER__.apply(e,arguments)},r=n,(0,m.default)(s,r)}return(0,v.default)(t,e),(0,f.default)(t,[{key:"__onChange__REACT_HOT_LOADER__",value:function(e){var t=this.props,n=t.dispatch,s=t.model;n(O.actions.change(s,e&&e.value))}},{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.model,(0,a.default)(e,["dispatch","model"]));return C.default.createElement(E.default,(0,o.default)({onChange:this.onChange},t))}}]),t}(C.default.Component),R=(0,T.connect)()(g),P=R;t.default=P;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(g,"Component","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Input/Select/Select.jsx"),__REACT_HOT_LOADER__.register(R,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Input/Select/Select.jsx"),__REACT_HOT_LOADER__.register(P,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Input/Select/Select.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},sOpo:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,i=n("Zx67"),a=s(i),c=n("Zrlr"),l=s(c),u=n("wxAW"),d=s(u),_=n("zwoO"),f=s(_),p=n("Pf15"),m=s(p),y=n("U7vG"),v=s(y),h=n("v42J"),C=s(h),T=n("ysrY"),O=T.licenseData.map(function(e){return{label:e.name,value:e.type}}),A=(o=r=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.model,n=e.value,s=T.licenseData.find(function(e){return e.type===n}),r=function(){if(s&&s.url)return v.default.createElement("a",{href:s.url,target:"_blank",className:"link-primary"},"Learn more.")};return v.default.createElement("div",null,v.default.createElement("h3",null,"Copyright License"),v.default.createElement("p",null,"Protect your work by selecting an appropriate license."),v.default.createElement(C.default,{value:n,model:t,options:O}),s&&s.description?v.default.createElement("p",null,s.description," ",r()):null)}}]),t}(y.Component),r.propTypes={model:y.PropTypes.string.isRequired,value:y.PropTypes.string},o);t.default=A;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(A,"LicenseSettings","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/ProjectSettings/LicenseSettings/LicenseSettings.jsx"),__REACT_HOT_LOADER__.register(O,"options","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/ProjectSettings/LicenseSettings/LicenseSettings.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},v42J:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("mlP5"),o=s(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},ysrY:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.licenseData=[{type:"CC BY",name:"Creative Commons - Attribution",url:"http://creativecommons.org/licenses/by/4.0/",symbols:["cc","cc-by"],description:"This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation."},{type:"CC BY-SA",name:"Creative Commons - Attribution - Share Alike",url:"http://creativecommons.org/licenses/by-sa/4.0/",symbols:["cc","cc-by","cc-sa"],description:"This license lets others remix, tweak, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms."},{type:"CC BY-ND",name:"Creative Commons - Attribution - No Derivatives",url:"http://creativecommons.org/licenses/by-nd/4.0/",symbols:["cc","cc-by","cc-nd"],description:"This license allows for redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to you."},{type:"CC BY-NC",name:"Creative Commons - Attribution - Non-Commercial",url:"http://creativecommons.org/licenses/by-nc/4.0/",symbols:["cc","cc-by","cc-nc"],description:"This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms."},{type:"CC BY-NC-SA",name:"Creative Commons - Attribution - Non-Commercial - Share Alike",url:"http://creativecommons.org/licenses/by-nc-sa/4.0/",symbols:["cc","cc-by","cc-nd","cc-sa"],description:"This license lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms."},{type:"CC BY-NC-ND",name:"Creative Commons - Attribution - Non-Commercial - No Derivatives",url:"http://creativecommons.org/licenses/by-nc-nd/4.0/",symbols:["cc","cc-by","cc-nd","cc-nc"],description:"This license is the most restrictive of the Creative Commons licenses, only allowing others to download your works and share them with others as long as they credit you, but they can’t change them in any way or use them commercially."},{type:"MPL",name:"Mozilla Public License",url:"https://www.mozilla.org/MPL/2.0/",symbols:[],description:"The MPL allows source code to be mixed with other files under a different, even proprietary license. However, code files licensed under the MPL must remain under the MPL and freely available in source form."},{type:"Other",name:"Other License",url:"",symbols:[],description:"Other License. Please outline the conditions in your Readme file."}];(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"licenseData","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Licenses/Licenses.data.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});