webpackJsonp([28],{1301:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(2843),o=r(s);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1418:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1422),o=r(s),a=n(161),i=r(a),u=(0,i.default)(o.default.root),l=u;t.default=l;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Panels/InfoPanel/index.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Panels/InfoPanel/index.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1422:function(e,t){e.exports={border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)",root:"styles_root-2U4JT"}},1455:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function s(e){this.el=e,this.paths=[].slice.call(this.el.querySelectorAll("path")),this.pathsArr=new Array,this.lengthsArr=new Array,this._init()}Object.defineProperty(t,"__esModule",{value:!0}),t.AnimateSvg=void 0;var o=n(31),a=r(o),i=n(0),u=r(i),l=n(1),d=r(l),c=n(1461),f=r(c),_=t.AnimateSvg=u.default.createClass({displayName:"AnimateSvg",svgEl:"",render:function(){var e=this.props,t=e.children,n=e.draw,r={ref:"svg"};return!this.svgEl&&this.refs.svg&&(this.svgEl=new s(this.refs.svg)),this.svgEl&&this.svgEl.draw(n),u.default.cloneElement(t,r)}}),p=u.default.createClass({displayName:"_default",getInitialState:function(){return{status:"",disabled:!1,drawLoading:0,drawSuccess:0}},componentWillReceiveProps:function(e){var t=this.props;!e.loading||t&&t.loading?t&&t.loading&&!e.loading&&this.loadingComplete():this.startLoading()},partialLoadTimeout:null,completeTimeout:null,completeIconTimeout:null,resetTimeout:null,clearTimeouts:function(){clearTimeout(this.partialLoadTimeout),clearTimeout(this.completeTimeout),clearTimeout(this.completeIconTimeout),clearTimeout(this.resetTimeout)},componentWillUnmount:function(){this.clearTimeouts()},startLoading:function(){var e=this;this.clearTimeouts(),this.setState({status:"loading",disabled:!0,drawLoading:0,drawComplete:0}),this.partialLoadTimeout=setTimeout(function(){e.setState({drawLoading:.7})},100)},loadingComplete:function(){var e=this;this.clearTimeouts(),this.setState({drawLoading:1}),this.completeTimeout=setTimeout(function(){e.setState(e.props.error?{status:"error"}:{status:"success"}),e.completeIconTimeout=setTimeout(function(){e.setState({drawComplete:1})},100),e.resetTimeout=setTimeout(function(){e.setState({status:"",disabled:!1,drawLoading:0})},2e3)},700)},render:function(){var e=this.props,t=e.children,n=e.onClick,r=(e.loading,e.className),s=e.href,o=this.state,i=o.status,l=o.disabled,c=o.drawLoading,p=o.drawComplete,m=u.default.createElement("svg",{className:f.default.progressCircle,width:"40",height:"40",viewBox:"0 0 40 40"},u.default.createElement("path",{d:"m1.5,20c0,-10.22099 8.27901,-18.5 18.5,-18.5c10.22099,0 18.5,8.27901 18.5,18.5c0,10.22099 -8.27901,18.5 -18.5,18.5c-10.22099,0 -18.5,-8.27901 -18.5,-18.5z"})),h=u.default.createElement("svg",{className:f.default.checkmark,width:"40",height:"40",viewBox:"0 0 70 70"},u.default.createElement("path",{d:"m31.5,46.5l15.3,-23.2"}),u.default.createElement("path",{d:"m31.5,46.5l-8.5,-7.1"})),g=u.default.createElement("svg",{className:f.default.cross,width:"40",height:"40",viewBox:"0 0 70 70"},u.default.createElement("path",{d:"m35,35l-9.3,-9.3"}),u.default.createElement("path",{d:"m35,35l9.3,9.3"}),u.default.createElement("path",{d:"m35,35l-9.3,9.3"}),u.default.createElement("path",{d:"m35,35l9.3,-9.3"})),E=function(){return"success"==i?u.default.createElement(_,{draw:p},h):"error"==i?u.default.createElement(_,{draw:p},g):null};return u.default.createElement("div",{className:(0,d.default)(f.default.progressButton,r,(0,a.default)({},f.default.loading,"loading"==i),(0,a.default)({},f.default.error,"error"==i),(0,a.default)({},f.default.success,"success"==i))},s?u.default.createElement("a",{href:s},u.default.createElement("button",null,u.default.createElement("span",null,t))):u.default.createElement("button",{onClick:function(){l||n()}},u.default.createElement("span",null,t)),u.default.createElement(_,{draw:c},m),E())}}),m=p;t.default=m,s.prototype._init=function(){var e=this;this.paths.forEach(function(t,n){e.pathsArr[n]=t,t.style.strokeDasharray=e.lengthsArr[n]=t.getTotalLength()}),this.draw(0)},s.prototype.draw=function(e){for(var t=0,n=this.pathsArr.length;t<n;++t)this.pathsArr[t].style.strokeDashoffset=this.lengthsArr[t]*(1-e)};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"AnimateSvg","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"),__REACT_HOT_LOADER__.register(s,"SVGEl","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"),__REACT_HOT_LOADER__.register(p,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"),__REACT_HOT_LOADER__.register(m,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1461:function(e,t){e.exports={primary:"rgb(68, 154, 211)","primary-2":"rgb(64, 129, 173)",warn:"rgb(244,67,54)","warn-2":"rgb(219, 59, 47)",progressButton:"ProgressButton_progressButton-3j879",progressCircle:"ProgressButton_progressCircle-UXzDa",checkmark:"ProgressButton_checkmark-27Dq2",cross:"ProgressButton_cross-1idFP",loading:"ProgressButton_loading-2wmTv",success:"ProgressButton_success-8765O",error:"ProgressButton_error-CaXYN"}},1499:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),o=r(s),a=n(0),i=r(a),u=n(19),l=r(u),d=function(e){return i.default.createElement(l.default,(0,o.default)({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m28.4 11.6c4.6 0 8.2 3.8 8.2 8.4s-3.6 8.4-8.2 8.4h-6.8v-3.2h6.8c2.8 0 5.1-2.4 5.1-5.2s-2.3-5.2-5.1-5.2h-6.8v-3.2h6.8z m-15 10v-3.2h13.2v3.2h-13.2z m-6.9-1.6c0 2.8 2.3 5.2 5.1 5.2h6.8v3.2h-6.8c-4.6 0-8.2-3.8-8.2-8.4s3.6-8.4 8.2-8.4h6.8v3.2h-6.8c-2.8 0-5.1 2.4-5.1 5.2z"})))},c=d,f=c;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"MdLink","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/link.js"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/link.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/link.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2050:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(7),o=r(s),a=n(6),i=r(a),u=n(8),l=r(u),d=n(10),c=r(d),f=n(9),_=r(f),p=n(0),m=r(p),h=n(1),g=(r(h),n(94)),E=r(g),T=n(63),v=r(T),O=n(436),y=r(O),A=n(1499),C=r(A),R=n(259),w=r(R),b=n(2297),L=r(b),k=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this;return m.default.createElement("div",{className:L.default.row+" layout-row layout-align-start-center"},m.default.createElement("div",{onClick:function(){e.props.isLinked||e.props.linkFn()},className:"flex layout-row layout-align-start-center"},this.props.isLinked?m.default.createElement(y.default,{size:"22"}):m.default.createElement(C.default,{size:"20"}),m.default.createElement("div",{className:"flex",style:{marginLeft:"10px"}},this.props.isLinked?m.default.createElement("span",null,"Connected with ",this.props.text):m.default.createElement("span",null,"Connect to ",this.props.text))),this.props.isLinked?m.default.createElement(E.default,{preferPlace:"right"},m.default.createElement(v.default,null,m.default.createElement(w.default,{size:"20"})),m.default.createElement("div",{className:"PopoverMenu"},m.default.createElement("a",{onClick:this.props.unLinkFn},"Unlink Account"),this.props.email?m.default.createElement("a",{className:"info"},"Email: ",this.props.email):null)):"")}}]),t}(m.default.Component);t.default=k;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2297:function(e,t){e.exports={border1:"rgba(0, 0, 0, 0.1)",row:"LinkAccount_row-3GUqv"}},2375:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,o,a=n(7),i=r(a),u=n(6),l=r(u),d=n(8),c=r(d),f=n(10),_=r(f),p=n(9),m=r(p),h=n(0),g=r(h),E=n(64),T=(r(E),n(1455)),v=(r(T),n(2050)),O=r(v),y=n(445),A=(r(y),o=s=function(e){function t(){return(0,l.default)(this,t),(0,_.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.authenticate,r=e.unlink;return g.default.createElement("div",null,g.default.createElement("h3",null,"Cloud Providers"),g.default.createElement("p",null,"Link your cloud storage providers to Stemn. Your files and revision history will be automatically synced."),g.default.createElement("br",null),g.default.createElement(O.default,{text:"Dropbox",isLinked:t.accounts.dropbox&&t.accounts.dropbox.id,linkFn:function(){return n("dropbox")},unLinkFn:function(){return r("dropbox")},email:t.accounts.dropbox&&t.accounts.dropbox.email?t.accounts.dropbox.email:""}),g.default.createElement(O.default,{text:"Google Drive",isLinked:t.accounts.google&&t.accounts.google.refreshToken,linkFn:function(){return n("google")},unLinkFn:function(){return r("google")},email:t.accounts.google&&t.accounts.google.email?t.accounts.google.email:""}))}}]),t}(h.Component),s.propTypes={user:h.PropTypes.object.isRequired,authenticate:h.PropTypes.func.isRequired,unlink:h.PropTypes.func.isRequired},o);t.default=A;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(A,"UserCloudProviderSettings","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/UserCloudProviderSettings/UserCloudProviderSettings.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2376:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(2375),o=r(s);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2691:254,2843:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,o,a=n(7),i=r(a),u=n(6),l=r(u),d=n(8),c=r(d),f=n(10),_=r(f),p=n(9),m=r(p),h=n(0),g=r(h),E=n(5),T=n(75),v=n(2844),O=r(v),y=function(e){var t=e.auth;return{user:t.user}},A={authenticate:T.authenticate,unlink:T.unlink},C=(s=(0,E.connect)(y,A),s(o=function(e){function t(){return(0,l.default)(this,t),(0,_.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return g.default.createElement(O.default,this.props)}}]),t}(h.Component))||o);t.default=C;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(C,"OnboardingSyncContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/OnboardingSync/OnboardingSync.container.js"),__REACT_HOT_LOADER__.register(y,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/OnboardingSync/OnboardingSync.container.js"),__REACT_HOT_LOADER__.register(A,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/OnboardingSync/OnboardingSync.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2844:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,o,a=n(7),i=r(a),u=n(6),l=r(u),d=n(8),c=r(d),f=n(10),_=r(f),p=n(9),m=r(p),h=n(0),g=r(h),E=(n(53),n(28)),T=r(E),v=n(1418),O=r(v),y=n(2376),A=r(y),C=n(448),R=r(C),w=n(2691),b=(r(w),n(1)),L=(r(b),o=s=function(e){function t(){return(0,l.default)(this,t),(0,_.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.authenticate,r=e.unlink;return g.default.createElement(R.default,{title:"Connect Sync",description:"Connect your Dropbox or Google Drive. This allows your STEMN projects to Sync directly to your computer."},g.default.createElement(O.default,null,g.default.createElement(A.default,{user:t,authenticate:n,unlink:r})),g.default.createElement("br",null),g.default.createElement("div",{className:"layout-row layout-align-end"},g.default.createElement(T.default,{className:"lg primary",name:"onboardingDownloadRoute"},"Next: Download")))}}]),t}(h.Component),s.propTypes={user:h.PropTypes.object.isRequired,authenticate:h.PropTypes.func.isRequired,unlink:h.PropTypes.func.isRequired},o);t.default=L;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(L,"OnboardingAbout","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/OnboardingSync/OnboardingSync.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});