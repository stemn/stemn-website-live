webpackJsonp([28,62],{"0Xlu":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u,i=n("Zx67"),a=r(i),l=n("Zrlr"),s=r(l),d=n("wxAW"),c=r(d),f=n("zwoO"),_=r(f),p=n("Pf15"),E=r(p),m=n("U7vG"),y=r(m),v=n("4n+p"),O=n("+z2A"),g=n("2doG"),T=r(g),C=function(e){var t=e.auth;return{user:t.user}},R={authenticate:O.authenticate,unlink:O.unlink},A=(o=(0,v.connect)(C,R),o(u=function(e){function t(){return(0,s.default)(this,t),(0,_.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return y.default.createElement(T.default,this.props)}}]),t}(m.Component))||u);t.default=A;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(A,"OnboardingSyncContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/OnboardingSync/OnboardingSync.container.js"),__REACT_HOT_LOADER__.register(C,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/OnboardingSync/OnboardingSync.container.js"),__REACT_HOT_LOADER__.register(R,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/OnboardingSync/OnboardingSync.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"2doG":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u,i=n("Zx67"),a=r(i),l=n("Zrlr"),s=r(l),d=n("wxAW"),c=r(d),f=n("zwoO"),_=r(f),p=n("Pf15"),E=r(p),m=n("U7vG"),y=r(m),v=(n("PjCM"),n("Yrew")),O=r(v),g=n("ycY4"),T=r(g),C=n("cmdK"),R=r(C),A=n("e8Jd"),b=r(A),h=n("CQ3C"),w=(r(h),n("HW6M")),k=(r(w),u=o=function(e){function t(){return(0,s.default)(this,t),(0,_.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.authenticate,r=e.unlink;return y.default.createElement(b.default,{title:"Connect Sync",description:"Connect your Dropbox or Google Drive. This allows your STEMN projects to Sync directly to your computer."},y.default.createElement(T.default,null,y.default.createElement(R.default,{user:t,authenticate:n,unlink:r})),y.default.createElement("br",null),y.default.createElement("div",{className:"layout-row layout-align-end"},y.default.createElement(O.default,{className:"lg primary",name:"onboardingDownloadRoute"},"Next: Download")))}}]),t}(m.Component),o.propTypes={user:m.PropTypes.object.isRequired,authenticate:m.PropTypes.func.isRequired,unlink:m.PropTypes.func.isRequired},u);t.default=k;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(k,"OnboardingAbout","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/OnboardingSync/OnboardingSync.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"7v8K":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("0Xlu"),u=r(o);t.default=u.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"8l9J":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u,i=n("Zx67"),a=r(i),l=n("Zrlr"),s=r(l),d=n("wxAW"),c=r(d),f=n("zwoO"),_=r(f),p=n("Pf15"),E=r(p),m=n("U7vG"),y=r(m),v=n("xwNf"),O=(r(v),n("RdTR")),g=(r(O),n("C/Kt")),T=r(g),C=n("+NnW"),R=(r(C),u=o=function(e){function t(){return(0,s.default)(this,t),(0,_.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.authenticate,r=e.unlink;return y.default.createElement("div",null,y.default.createElement("h3",null,"Cloud Providers"),y.default.createElement("p",null,"Link your cloud storage providers to Stemn. Your files and revision history will be automatically synced."),y.default.createElement("br",null),y.default.createElement(T.default,{text:"Dropbox",isLinked:t.accounts.dropbox&&t.accounts.dropbox.id,linkFn:function(){return n("dropbox")},unLinkFn:function(){return r("dropbox")},email:t.accounts.dropbox&&t.accounts.dropbox.email?t.accounts.dropbox.email:""}),y.default.createElement(T.default,{text:"Google Drive",isLinked:t.accounts.google&&t.accounts.google.refreshToken,linkFn:function(){return n("google")},unLinkFn:function(){return r("google")},email:t.accounts.google&&t.accounts.google.email?t.accounts.google.email:""}))}}]),t}(m.Component),o.propTypes={user:m.PropTypes.object.isRequired,authenticate:m.PropTypes.func.isRequired,unlink:m.PropTypes.func.isRequired},u);t.default=R;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(R,"UserCloudProviderSettings","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/UserCloudProviderSettings/UserCloudProviderSettings.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"C/Kt":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("Zx67"),u=r(o),i=n("Zrlr"),a=r(i),l=n("wxAW"),s=r(l),d=n("zwoO"),c=r(d),f=n("Pf15"),_=r(f),p=n("U7vG"),E=r(p),m=n("HW6M"),y=(r(m),n("Erdv")),v=r(y),O=n("D2fa"),g=r(O),T=n("Xu4g"),C=r(T),R=n("3sDB"),A=r(R),b=n("O8U9"),h=r(b),w=n("FiOM"),k=r(w),L=function(e){function t(){return(0,a.default)(this,t),(0,c.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this;return E.default.createElement("div",{className:k.default.row+" layout-row layout-align-start-center"},E.default.createElement("div",{onClick:function(){e.props.isLinked||e.props.linkFn()},className:"flex layout-row layout-align-start-center"},this.props.isLinked?E.default.createElement(C.default,{size:"22"}):E.default.createElement(A.default,{size:"20"}),E.default.createElement("div",{className:"flex",style:{marginLeft:"10px"}},this.props.isLinked?E.default.createElement("span",null,"Connected with ",this.props.text):E.default.createElement("span",null,"Connect to ",this.props.text))),this.props.isLinked?E.default.createElement(v.default,{preferPlace:"right"},E.default.createElement(g.default,null,E.default.createElement(h.default,{size:"20"})),E.default.createElement("div",{className:"PopoverMenu"},E.default.createElement("a",{onClick:this.props.unLinkFn},"Unlink Account"),this.props.email?E.default.createElement("a",{className:"info"},"Email: ",this.props.email):null)):"")}}]),t}(E.default.Component);t.default=L;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},CQ3C:function(e,t){},FiOM:function(e,t){e.exports={border1:"rgba(0, 0, 0, 0.1)",row:"LinkAccount_row-3GUqv"}},cmdK:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("8l9J"),u=r(o);t.default=u.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});