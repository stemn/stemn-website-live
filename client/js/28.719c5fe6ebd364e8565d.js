webpackJsonp([28,61],{"3OIs":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n("Zx67"),a=r(s),o=n("Zrlr"),i=r(o),u=n("wxAW"),d=r(u),l=n("zwoO"),_=r(l),f=n("Pf15"),c=r(f),p=n("U7vG"),v=r(p),m=n("HW6M"),E=(r(m),n("kqVh")),O=r(E),A=n("Kiqx"),C=r(A),T=n("jMHE"),j=r(T),h=n("PjCM"),R=function(e){function t(){return(0,i.default)(this,t),(0,_.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.project,r="/project/"+n.data._id+"/settings";return v.default.createElement("div",{className:O.default.content},v.default.createElement(h.Container,null,v.default.createElement(h.Row,{className:"layout-xs-column layout-gt-xs-row"},v.default.createElement(h.Col,{className:"flex-gt-xs-30"},v.default.createElement(j.default,null,v.default.createElement(C.default,{to:r,onlyActiveOnIndex:!0},"General"),v.default.createElement(C.default,{to:r+"/permissions"},"Permissions"),v.default.createElement(C.default,{to:r+"/tags"},"Tags"),v.default.createElement(C.default,{to:r+"/threads"},"Threads"),v.default.createElement(C.default,{to:r+"/team"},"Team"))),v.default.createElement(h.Col,{className:"flex"},t))))}}]),t}(p.Component);t.default=R;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(R,"ProjectSettings","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettings/ProjectSettings.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"3jfj":function(e,t){e.exports={primary:"rgb(68, 154, 211)","primary-2":"rgb(64, 129, 173)",border1:"rgba(0, 0, 0, 0.1)",secondary:"rgba(0, 0, 0, 0.7)",button:"NavPill_button-3sIk7"}},DqoV:function(e,t){e.exports={border1:"rgba(0, 0, 0, 0.1)",root:"NavPillContainer_root-1yetI"}},Kiqx:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n("Zx67"),a=r(s),o=n("Zrlr"),i=r(o),u=n("wxAW"),d=r(u),l=n("zwoO"),_=r(l),f=n("Pf15"),c=r(f),p=n("U7vG"),v=r(p),m=n("Zfgq"),E=n("HW6M"),O=r(E),A=n("3jfj"),C=r(A),T=function(e){function t(){return(0,i.default)(this,t),(0,_.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return this.props.to?v.default.createElement(m.Link,{className:(0,O.default)(C.default.button,this.props.className),activeClassName:"active",to:this.props.to,onlyActiveOnIndex:this.props.onlyActiveOnIndex},this.props.children):v.default.createElement("a",{className:(0,O.default)(C.default.button,this.props.className),href:this.props.href},this.props.children)}}]),t}(v.default.Component);t.default=T;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},WnvL:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n("hdBL"),a=r(s);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Xahj:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("Dd8w"),a=r(s),o=n("+6Bu"),i=r(o),u=n("U7vG"),d=r(u),l=n("HW6M"),_=r(l),f=n("DqoV"),c=r(f),p=function(e){var t=e.className,n=(e.children,(0,i.default)(e,["className","children"]));return d.default.createElement("div",(0,a.default)({className:(0,_.default)(c.default.root,t)},n),e.children)},v=p,m=v;t.default=m;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"NavPillContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/NavPillContainer/NavPillContainer.jsx"),__REACT_HOT_LOADER__.register(v,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/NavPillContainer/NavPillContainer.jsx"),__REACT_HOT_LOADER__.register(m,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/NavPillContainer/NavPillContainer.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},hdBL:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,a,o=n("Zx67"),i=r(o),u=n("Zrlr"),d=r(u),l=n("wxAW"),_=r(l),f=n("zwoO"),c=r(f),p=n("Pf15"),v=r(p),m=n("U7vG"),E=r(m),O=n("4n+p"),A=n("3OIs"),C=r(A),T=function(e,t){var n=e.projects,r=t.params,s=(t.location,r.stub),a=r.path||"",o=n.data[s],i="projects.data."+s;return{project:o,entityModel:i,path:a}},j={},h=(s=(0,O.connect)(T,j),s(a=function(e){function t(){return(0,d.default)(this,t),(0,c.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){return E.default.createElement(C.default,this.props)}}]),t}(m.Component))||a);t.default=h;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"ProjectSettingsContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettings/ProjectSettings.container.js"),__REACT_HOT_LOADER__.register(T,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettings/ProjectSettings.container.js"),__REACT_HOT_LOADER__.register(j,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/ProjectSettings/ProjectSettings.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},jMHE:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n("Xahj"),a=r(s);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},kqVh:function(e,t){e.exports={content:"ProjectSettings_content-2CvmU"}}});