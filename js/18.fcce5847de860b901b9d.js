webpackJsonp([18],{1298:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(3056),a=r(s);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1394:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1398),a=r(s),u=n(161),o=r(u),i=(0,o.default)(a.default.root),l=i;t.default=l;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Panels/InfoPanel/index.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Panels/InfoPanel/index.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1398:function(e,t){e.exports={border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)",root:"styles_root-2U4JT"}},1431:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function s(e){this.el=e,this.paths=[].slice.call(this.el.querySelectorAll("path")),this.pathsArr=new Array,this.lengthsArr=new Array,this._init()}Object.defineProperty(t,"__esModule",{value:!0}),t.AnimateSvg=void 0;var a=n(35),u=r(a),o=n(0),i=r(o),l=n(1),d=r(l),c=n(1437),f=r(c),_=t.AnimateSvg=i.default.createClass({displayName:"AnimateSvg",svgEl:"",render:function(){var e=this.props,t=e.children,n=e.draw,r={ref:"svg"};return!this.svgEl&&this.refs.svg&&(this.svgEl=new s(this.refs.svg)),this.svgEl&&this.svgEl.draw(n),i.default.cloneElement(t,r)}}),m=i.default.createClass({displayName:"_default",getInitialState:function(){return{status:"",disabled:!1,drawLoading:0,drawSuccess:0}},componentWillReceiveProps:function(e){var t=this.props;!e.loading||t&&t.loading?t&&t.loading&&!e.loading&&this.loadingComplete():this.startLoading()},partialLoadTimeout:null,completeTimeout:null,completeIconTimeout:null,resetTimeout:null,clearTimeouts:function(){clearTimeout(this.partialLoadTimeout),clearTimeout(this.completeTimeout),clearTimeout(this.completeIconTimeout),clearTimeout(this.resetTimeout)},componentWillUnmount:function(){this.clearTimeouts()},startLoading:function(){var e=this;this.clearTimeouts(),this.setState({status:"loading",disabled:!0,drawLoading:0,drawComplete:0}),this.partialLoadTimeout=setTimeout(function(){e.setState({drawLoading:.7})},100)},loadingComplete:function(){var e=this;this.clearTimeouts(),this.setState({drawLoading:1}),this.completeTimeout=setTimeout(function(){e.setState(e.props.error?{status:"error"}:{status:"success"}),e.completeIconTimeout=setTimeout(function(){e.setState({drawComplete:1})},100),e.resetTimeout=setTimeout(function(){e.setState({status:"",disabled:!1,drawLoading:0})},2e3)},700)},render:function(){var e=this.props,t=e.children,n=e.onClick,r=(e.loading,e.className),s=e.href,a=this.state,o=a.status,l=a.disabled,c=a.drawLoading,m=a.drawComplete,p=i.default.createElement("svg",{className:f.default.progressCircle,width:"40",height:"40",viewBox:"0 0 40 40"},i.default.createElement("path",{d:"m1.5,20c0,-10.22099 8.27901,-18.5 18.5,-18.5c10.22099,0 18.5,8.27901 18.5,18.5c0,10.22099 -8.27901,18.5 -18.5,18.5c-10.22099,0 -18.5,-8.27901 -18.5,-18.5z"})),E=i.default.createElement("svg",{className:f.default.checkmark,width:"40",height:"40",viewBox:"0 0 70 70"},i.default.createElement("path",{d:"m31.5,46.5l15.3,-23.2"}),i.default.createElement("path",{d:"m31.5,46.5l-8.5,-7.1"})),h=i.default.createElement("svg",{className:f.default.cross,width:"40",height:"40",viewBox:"0 0 70 70"},i.default.createElement("path",{d:"m35,35l-9.3,-9.3"}),i.default.createElement("path",{d:"m35,35l9.3,9.3"}),i.default.createElement("path",{d:"m35,35l-9.3,9.3"}),i.default.createElement("path",{d:"m35,35l9.3,-9.3"})),T=function(){return"success"==o?i.default.createElement(_,{draw:m},E):"error"==o?i.default.createElement(_,{draw:m},h):null};return i.default.createElement("div",{className:(0,d.default)(f.default.progressButton,r,(0,u.default)({},f.default.loading,"loading"==o),(0,u.default)({},f.default.error,"error"==o),(0,u.default)({},f.default.success,"success"==o))},s?i.default.createElement("a",{href:s},i.default.createElement("button",null,i.default.createElement("span",null,t))):i.default.createElement("button",{onClick:function(){l||n()}},i.default.createElement("span",null,t)),i.default.createElement(_,{draw:c},p),T())}}),p=m;t.default=p,s.prototype._init=function(){var e=this;this.paths.forEach(function(t,n){e.pathsArr[n]=t,t.style.strokeDasharray=e.lengthsArr[n]=t.getTotalLength()}),this.draw(0)},s.prototype.draw=function(e){for(var t=0,n=this.pathsArr.length;t<n;++t)this.pathsArr[t].style.strokeDashoffset=this.lengthsArr[t]*(1-e)};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"AnimateSvg","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"),__REACT_HOT_LOADER__.register(s,"SVGEl","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"),__REACT_HOT_LOADER__.register(m,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"),__REACT_HOT_LOADER__.register(p,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Buttons/ProgressButton/ProgressButton.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1437:function(e,t){e.exports={primary:"rgb(68, 154, 211)","primary-2":"rgb(64, 129, 173)",warn:"rgb(244,67,54)","warn-2":"rgb(219, 59, 47)",progressButton:"ProgressButton_progressButton-3j879",progressCircle:"ProgressButton_progressCircle-UXzDa",checkmark:"ProgressButton_checkmark-27Dq2",cross:"ProgressButton_cross-1idFP",loading:"ProgressButton_loading-2wmTv",success:"ProgressButton_success-8765O",error:"ProgressButton_error-CaXYN"}},1475:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),a=r(s),u=n(0),o=r(u),i=n(25),l=r(i),d=function(e){return o.default.createElement(l.default,(0,a.default)({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m28.4 11.6c4.6 0 8.2 3.8 8.2 8.4s-3.6 8.4-8.2 8.4h-6.8v-3.2h6.8c2.8 0 5.1-2.4 5.1-5.2s-2.3-5.2-5.1-5.2h-6.8v-3.2h6.8z m-15 10v-3.2h13.2v3.2h-13.2z m-6.9-1.6c0 2.8 2.3 5.2 5.1 5.2h6.8v3.2h-6.8c-4.6 0-8.2-3.8-8.2-8.4s3.6-8.4 8.2-8.4h6.8v3.2h-6.8c-2.8 0-5.1 2.4-5.1 5.2z"})))},c=d,f=c;t.default=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"MdLink","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/link.js"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/link.js"),__REACT_HOT_LOADER__.register(f,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/react-icons/md/link.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},1491:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,a,u,o,i=n(10),l=r(i),d=n(9),c=r(d),f=n(11),_=r(f),m=n(13),p=r(m),E=n(12),h=r(E),T=n(0),v=r(T),A=n(5),g=n(15),y=function(){return{}},O={load:g.actions.load},R=(s=(0,A.connect)(y,O),s((o=u=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,_.default)(t,[{key:"componentWillMount",value:function(){this.props.load(this.props.model,this.props.value)}},{key:"render",value:function(){var e=this.props.children;return v.default.createElement("div",null,e)}}]),t}(T.Component),u.propTypes={load:T.PropTypes.func.isRequired,model:T.PropTypes.string.isRequired,value:T.PropTypes.any.isRequired},a=o))||a);t.default=R;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(R,"Form","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Forms/Form.jsx"),__REACT_HOT_LOADER__.register(y,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Forms/Form.jsx"),__REACT_HOT_LOADER__.register(O,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Forms/Form.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2219:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(10),a=r(s),u=n(9),o=r(u),i=n(11),l=r(i),d=n(13),c=r(d),f=n(12),_=r(f),m=n(0),p=r(m),E=n(1),h=(r(E),n(117)),T=r(h),v=n(71),A=r(v),g=n(431),y=r(g),O=n(1475),R=r(O),C=n(257),w=r(C),b=n(2466),L=r(b),k=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this;return p.default.createElement("div",{className:L.default.row+" layout-row layout-align-start-center"},p.default.createElement("div",{onClick:function(){e.props.isLinked||e.props.linkFn()},className:"flex layout-row layout-align-start-center"},this.props.isLinked?p.default.createElement(y.default,{size:"22"}):p.default.createElement(R.default,{size:"20"}),p.default.createElement("div",{className:"flex",style:{marginLeft:"10px"}},this.props.isLinked?p.default.createElement("span",null,"Connected with ",this.props.text):p.default.createElement("span",null,"Connect to ",this.props.text))),this.props.isLinked?p.default.createElement(T.default,{preferPlace:"right"},p.default.createElement(A.default,null,p.default.createElement(w.default,{size:"20"})),p.default.createElement("div",{className:"PopoverMenu"},p.default.createElement("a",{onClick:this.props.unLinkFn},"Unlink Account"),this.props.email?p.default.createElement("a",{className:"info"},"Email: ",this.props.email):null)):"")}}]),t}(p.default.Component);t.default=k;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2466:function(e,t){e.exports={border1:"rgba(0, 0, 0, 0.1)",row:"LinkAccount_row-3GUqv"}},2483:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),a=r(s),u=n(0),o=r(u),i=n(25),l=r(i),d=function(e){return o.default.createElement(l.default,(0,a.default)({viewBox:"0 0 24 24"},e),o.default.createElement("path",{d:"M0.234,15.31c0.261-0.441,0.526-0.88,0.783-1.324 C1.55,13.064,2.08,12.141,2.61,11.22c0.593-1.03,1.185-2.063,1.779-3.094c0.829-1.435,1.66-2.871,2.49-4.307 c0.024-0.041,0.058-0.077,0.101-0.132C7.22,4.104,7.45,4.504,7.682,4.904c0.811,1.403,1.623,2.807,2.433,4.209 c0.235,0.408,0.463,0.818,0.701,1.222c0.055,0.095,0.053,0.165,0,0.258c-0.447,0.769-0.889,1.539-1.333,2.309 c-0.887,1.541-1.774,3.08-2.663,4.621c-0.711,1.231-1.425,2.458-2.137,3.689c-0.172,0.298-0.342,0.596-0.524,0.913 c-0.286-0.493-0.563-0.967-0.837-1.443c-0.602-1.039-1.203-2.08-1.803-3.122c-0.372-0.644-0.742-1.291-1.115-1.935 c-0.05-0.084-0.113-0.161-0.17-0.24C0.234,15.359,0.234,15.335,0.234,15.31z"}),o.default.createElement("path",{d:"M6.87,22.267c0.228-0.401,0.448-0.785,0.658-1.153 c0.812-1.425,1.623-2.85,2.436-4.274c0.351-0.612,0.706-1.226,1.051-1.844c0.067-0.12,0.16-0.116,0.269-0.116 c2.432,0,4.864,0,7.297,0c1.635,0,3.27,0,4.906,0c0.08,0,0.16,0,0.279,0c-0.078,0.154-0.137,0.282-0.203,0.406 c-0.656,1.231-1.313,2.464-1.969,3.697c-0.553,1.039-1.105,2.077-1.652,3.118c-0.063,0.121-0.133,0.168-0.271,0.168 c-4.195-0.005-8.388-0.005-12.581-0.005C7.033,22.264,6.966,22.273,6.87,22.267z"}),o.default.createElement("path",{d:"M22.652,13.403c-0.109,0-0.176,0-0.244,0c-2.461,0-4.926,0-7.387,0.004 c-0.145,0.001-0.229-0.041-0.301-0.167c-0.852-1.487-1.707-2.973-2.564-4.458c-0.933-1.615-1.869-3.229-2.803-4.841 C8.946,3.237,8.54,2.531,8.134,1.826C8.123,1.809,8.12,1.783,8.105,1.733c0.084,0,0.15,0,0.216,0c2.469,0,4.938,0,7.405-0.002 c0.143,0,0.225,0.035,0.299,0.163c0.529,0.931,1.064,1.855,1.602,2.783c0.656,1.139,1.318,2.274,1.975,3.412 c0.65,1.126,1.297,2.255,1.947,3.383c0.309,0.537,0.621,1.073,0.93,1.609C22.533,13.178,22.584,13.274,22.652,13.403z"}))},c=d;t.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/providers/drive.js"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/providers/drive.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2484:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),a=r(s),u=n(0),o=r(u),i=n(25),l=r(i),d=function(e){return o.default.createElement(l.default,(0,a.default)({viewBox:"0 0 24 24"},e),o.default.createElement("path",{d:"M0.271,12.705c0.649-0.486,1.298-0.969,1.945-1.456 c0.957-0.72,1.911-1.443,2.866-2.165c0.024-0.019,0.047-0.039,0.091-0.075C3.541,7.781,1.921,6.56,0.277,5.322 c0.3-0.196,0.58-0.379,0.86-0.562C2.285,4.02,3.432,3.279,4.58,2.54C5.477,1.962,6.375,1.387,7.27,0.807 C7.366,0.744,7.425,0.75,7.511,0.825c0.732,0.632,1.468,1.258,2.202,1.887c0.715,0.613,1.428,1.227,2.144,1.84 c0.041,0.036,0.094,0.06,0.169,0.105C9.716,6.127,7.463,7.56,5.179,9.013c0.347,0.223,0.664,0.427,0.982,0.629 c1.378,0.878,2.757,1.755,4.136,2.633c0.531,0.338,1.061,0.678,1.597,1.008c0.052,0.033,0.158,0.035,0.209,0.004 c1.124-0.695,2.244-1.399,3.364-2.1c1.146-0.718,2.296-1.434,3.442-2.152c0.084-0.052,0.166-0.11,0.273-0.183 c-2.391-1.391-4.766-2.772-7.171-4.172c0.125-0.106,0.233-0.203,0.345-0.295c1.363-1.12,2.727-2.241,4.092-3.359 c0.362-0.297,0.363-0.292,0.754-0.045c1.46,0.923,2.922,1.843,4.382,2.765c0.659,0.417,1.317,0.834,1.976,1.252 c0.051,0.033,0.1,0.07,0.162,0.113c-1.518,1.253-3.022,2.496-4.535,3.744c1.518,1.288,3.021,2.566,4.542,3.858 c-0.527,0.313-1.03,0.609-1.532,0.908c-0.873,0.52-1.746,1.041-2.62,1.561c-0.928,0.553-1.855,1.104-2.787,1.648 c-0.044,0.023-0.136,0.018-0.177-0.012c-0.851-0.633-1.697-1.271-2.543-1.91c-0.648-0.486-1.296-0.975-1.94-1.467 c-0.097-0.074-0.167-0.068-0.26,0.004c-1.208,0.936-2.419,1.869-3.629,2.801c-0.247,0.189-0.493,0.383-0.748,0.561 c-0.05,0.035-0.157,0.043-0.208,0.014c-0.972-0.564-1.938-1.135-2.906-1.703c-1.291-0.758-2.582-1.516-3.873-2.271 c-0.073-0.043-0.156-0.071-0.234-0.104C0.271,12.73,0.271,12.717,0.271,12.705z"}),o.default.createElement("path",{d:"M11.997,23.236c-1.4-0.93-2.786-1.852-4.174-2.77 c-0.962-0.637-1.928-1.27-2.889-1.908c-0.053-0.035-0.113-0.109-0.114-0.166c-0.009-0.514-0.005-1.025-0.005-1.582 c0.216,0.123,0.41,0.229,0.599,0.34c0.64,0.375,1.28,0.75,1.917,1.131c0.098,0.061,0.168,0.047,0.252-0.018 c1.201-0.926,2.401-1.85,3.602-2.775c0.266-0.205,0.536-0.406,0.816-0.619c0.381,0.285,0.759,0.568,1.137,0.852 c0.902,0.678,1.806,1.355,2.708,2.035c0.224,0.168,0.449,0.336,0.668,0.51c0.086,0.07,0.157,0.076,0.252,0.02 c0.743-0.449,1.487-0.893,2.231-1.336c0.056-0.033,0.117-0.061,0.199-0.102c0,0.553,0.002,1.076-0.003,1.6 c-0.001,0.043-0.043,0.1-0.082,0.125c-0.927,0.613-1.855,1.221-2.784,1.828c-1.226,0.805-2.451,1.605-3.678,2.408 C12.438,22.949,12.223,23.088,11.997,23.236z"}))},c=d;t.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/providers/dropbox.js"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/providers/dropbox.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2544:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,a,u=n(10),o=r(u),i=n(9),l=r(i),d=n(11),c=r(d),f=n(13),_=r(f),m=n(12),p=r(m),E=n(0),h=r(E),T=n(62),v=(r(T),n(1431)),A=(r(v),n(2219)),g=r(A),y=n(443),O=(r(y),a=s=function(e){function t(){return(0,l.default)(this,t),(0,_.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.authenticate,r=e.unlink;return h.default.createElement("div",null,h.default.createElement("h3",null,"Cloud Providers"),h.default.createElement("p",null,"Link your cloud storage providers to Stemn. Your files and revision history will be automatically synced."),h.default.createElement("br",null),h.default.createElement(g.default,{text:"Dropbox",isLinked:t.accounts.dropbox&&t.accounts.dropbox.id,linkFn:function(){return n("dropbox")},unLinkFn:function(){return r("dropbox")},email:t.accounts.dropbox&&t.accounts.dropbox.email?t.accounts.dropbox.email:""}),h.default.createElement(g.default,{text:"Google Drive",isLinked:t.accounts.google&&t.accounts.google.refreshToken,linkFn:function(){return n("google")},unLinkFn:function(){return r("google")},email:t.accounts.google&&t.accounts.google.email?t.accounts.google.email:""}))}}]),t}(E.Component),s.propTypes={user:E.PropTypes.object.isRequired,authenticate:E.PropTypes.func.isRequired,unlink:E.PropTypes.func.isRequired},a);t.default=O;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(O,"UserCloudProviderSettings","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/UserCloudProviderSettings/UserCloudProviderSettings.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2545:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(2544),a=r(s);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2851:253,2891:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),a=r(s),u=n(0),o=r(u),i=n(25),l=r(i),d=function(e){return o.default.createElement(l.default,(0,a.default)({viewBox:"0 0 24 24"},e),o.default.createElement("path",{d:"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z"}))},c=d;t.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/providers/facebook.js"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/providers/facebook.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2892:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),a=r(s),u=n(0),o=r(u),i=n(25),l=r(i),d=function(e){return o.default.createElement(l.default,(0,a.default)({viewBox:"0 0 24 24"},e),o.default.createElement("path",{d:"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"}))},c=d;t.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/providers/linkedin.js"),__REACT_HOT_LOADER__.register(c,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/assets/icons/providers/linkedin.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2973:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,a,u=n(10),o=r(u),i=n(9),l=r(i),d=n(11),c=r(d),f=n(13),_=r(f),m=n(12),p=r(m),E=n(0),h=r(E),T=n(443),v=r(T),A=(a=s=function(e){function t(){return(0,l.default)(this,t),(0,_.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.user;return h.default.createElement("div",null,h.default.createElement("h3",null,"Beta"),h.default.createElement("p",null,"Invite your friends to the ",h.default.createElement("a",{className:"link-primary",href:"https://github.com/Stemn/Stemn-Desktop/releases"},"Stemn beta")," using your access code below and get rewarded for each referral. Email ",h.default.createElement("a",{className:"link-primary",href:"mailto:rewards@stemn.com"},"rewards@stemn.com")," for more info."),h.default.createElement(v.default,null,e._id))}}]),t}(E.Component),s.propTypes={user:E.PropTypes.object.isRequired},a);t.default=A;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(A,"UserBetaSettings","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/UserBetaSettings/UserBetaSettings.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2974:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(2973),a=r(s);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2975:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,a,u=n(72),o=r(u),i=n(10),l=r(i),d=n(9),c=r(d),f=n(11),_=r(f),m=n(13),p=r(m),E=n(12),h=r(E),T=n(0),v=r(T),A=n(62),g=r(A),y=n(1491),O=r(y),R=n(1431),C=r(R),w=n(29),b=r(w),L=n(443),k=r(L),H=n(2483),P=r(H),D=n(2484),U=r(D),j=n(2891),M=r(j),N=n(2892),x=r(N),S=n(2851),B=(r(S),function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){var e=this.props,t=e.primary,n=e.type,r=e.email,s=e.setPrimary,a=function(){return"google"===n?P.default:"dropbox"===n?U.default:"facebook"===n?M.default:x.default},u=a();return r&&r.length>0?v.default.createElement(k.default,{style:{marginBottom:"10px"}},r,v.default.createElement("div",{className:"flex"}),"local"!=n&&v.default.createElement(u,{size:16,style:{marginRight:"10px",color:"rgba(0, 0, 0, 0.3)"}}),r===t?v.default.createElement(b.default,{className:"primary xs"},"Primary"):v.default.createElement(b.default,{className:"light xs",onClick:function(){return s(r)}},"Make Primary")):null}}]),t}(T.Component)),q=(a=s=function(e){function t(){var e,n,r,s;(0,c.default)(this,t);for(var a=arguments.length,u=Array(a),o=0;o<a;o++)u[o]=arguments[o];return n=r=(0,p.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(u))),r.addEmail=function(){var e;return(e=r).__addEmail__REACT_HOT_LOADER__.apply(e,arguments)},s=n,(0,p.default)(r,s)}return(0,h.default)(t,e),(0,_.default)(t,[{key:"__addEmail__REACT_HOT_LOADER__",value:function(){var e=this.props,t=e.saveUser,n=e.auth;t({user:{_id:n.user._id,accounts:{local:{email:n.forms.newEmail}}}})}},{key:"render",value:function(){var e=this.props,t=e.auth,n=e.setPrimaryEmail;(0,o.default)(t.user.accounts);return v.default.createElement("div",null,v.default.createElement("h3",null,"Set Primary Email"),v.default.createElement("p",null,"Your primary address is where your emails will be sent."),v.default.createElement(B,{setPrimary:n,type:"dropbox",primary:t.user.email,email:t.user.accounts.dropbox.email}),v.default.createElement(B,{setPrimary:n,type:"google",primary:t.user.email,email:t.user.accounts.google.email}),v.default.createElement(B,{setPrimary:n,type:"linkedin",primary:t.user.email,email:t.user.accounts.linkedin.email}),v.default.createElement(B,{setPrimary:n,type:"facebook",primary:t.user.email,email:t.user.accounts.facebook.email}),v.default.createElement(B,{setPrimary:n,type:"local",primary:t.user.email,email:t.user.accounts.local.email}),v.default.createElement("br",null),v.default.createElement("h3",null,"Update email"),v.default.createElement(O.default,{model:"auth.forms.newEmail",value:t.user.accounts.local.email},!(void 0===t.forms.newEmail)&&v.default.createElement(g.default,{placeholder:"Email account",className:"dr-input",model:"auth.forms.newEmail",value:t.forms.newEmail})),v.default.createElement("br",null),v.default.createElement("div",{className:"layout-row layout-align-end"},v.default.createElement(C.default,{className:"primary",onClick:this.addEmail},"Update Email")))}}]),t}(T.Component),s.propTypes={auth:T.PropTypes.object.isRequired,setPrimaryEmail:T.PropTypes.func.isRequired,saveUser:T.PropTypes.func.isRequired},a);t.default=q;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(q,"UserEmailSettings","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/UserEmailSettings/UserEmailSettings.jsx"),__REACT_HOT_LOADER__.register(B,"EmailRow","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/UserEmailSettings/UserEmailSettings.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2976:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(2975),a=r(s);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2979:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,a,u=n(72),o=r(u),i=n(10),l=r(i),d=n(9),c=r(d),f=n(11),_=r(f),m=n(13),p=r(m),E=n(12),h=r(E),T=n(0),v=r(T),A=n(62),g=(r(A),n(1431)),y=(r(g),n(2219)),O=r(y),R=(a=s=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user;e.authenticate,e.unlink,(0,o.default)(t.accounts);return v.default.createElement("div",null,v.default.createElement("h3",null,"Login"),v.default.createElement("p",null,"By linking social accounts you'll be able to login to STEMN using Facebook and LinkedIn. We never post to your social networks."),v.default.createElement(O.default,{text:"Facebook",isLinked:t.accounts.facebook&&t.accounts.facebook.id,linkFn:function(){return authActions.authenticate("facebook")},unLinkFn:function(){return authActions.unlink("facebook")}}),v.default.createElement(O.default,{text:"Linkedin",isLinked:t.accounts.linkedin&&t.accounts.linkedin.id,linkFn:function(){return authActions.authenticate("linkedin")},unLinkFn:function(){return authActions.unlink("linkedin")}}))}}]),t}(T.Component),s.propTypes={user:T.PropTypes.object.isRequired,authenticate:T.PropTypes.func.isRequired,unlink:T.PropTypes.func.isRequired},a);t.default=R;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(R,"UserLinkedAccountSettings","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/UserLinkedAccountSettings/UserLinkedAccountSettings.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2980:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(2979),a=r(s);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2981:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(10),a=r(s),u=n(9),o=r(u),i=n(11),l=r(i),d=n(13),c=r(d),f=n(12),_=r(f),m=n(0),p=r(m),E=n(62),h=r(E),T=n(1431),v=r(T),A=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.updateUsername,n=e.username,r=e.usernameModel;return p.default.createElement("div",null,p.default.createElement("h3",null,"Update Username"),p.default.createElement("p",null,"Your profile will be available at: stemn.com/users/",n),p.default.createElement(h.default,{model:r,value:n,className:"dr-input",type:"text",placeholder:"Username"}),p.default.createElement("br",null),p.default.createElement("div",{className:"layout-row layout-align-end"},p.default.createElement(v.default,{className:"primary",onClick:t},"Update Username")))}}]),t}(m.Component);t.default=A;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(A,"UserNameSettings","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserSettings/UserNameSettings/UserNameSettings.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},2982:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(2981),a=r(s);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},3056:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,a,u=n(10),o=r(u),i=n(9),l=r(i),d=n(11),c=r(d),f=n(13),_=r(f),m=n(12),p=r(m),E=n(0),h=r(E),T=n(5),v=n(3057),A=r(v),g=n(74),y=n(433),O=function(e){var t=e.auth;return{auth:t}},R={authenticate:g.authenticate,unlink:g.unlink,setPrimaryEmail:g.setPrimaryEmail,saveUser:y.saveUser},C=(s=(0,T.connect)(O,R),s(a=function(e){function t(){return(0,l.default)(this,t),(0,_.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return h.default.createElement(A.default,this.props)}}]),t}(E.Component))||a);t.default=C;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(C,"SettingsAccountContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsAccount/SettingsAccount.container.js"),__REACT_HOT_LOADER__.register(O,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsAccount/SettingsAccount.container.js"),__REACT_HOT_LOADER__.register(R,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsAccount/SettingsAccount.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},3057:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,a,u=n(10),o=r(u),i=n(9),l=r(i),d=n(11),c=r(d),f=n(13),_=r(f),m=n(12),p=r(m),E=n(0),h=r(E),T=n(1394),v=r(T),A=n(2982),g=(r(A),
n(2976)),y=r(g),O=n(2980),R=r(O),C=n(2545),w=r(C),b=n(2974),L=(r(b),a=s=function(e){function t(){return(0,l.default)(this,t),(0,_.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.authenticate,r=e.unlink,s=e.setPrimaryEmail,a=e.saveUser;return h.default.createElement("div",null,h.default.createElement(v.default,null,h.default.createElement(R.default,{user:t.user,authenticate:n,unlink:r})),h.default.createElement(v.default,null,h.default.createElement(w.default,{user:t.user,authenticate:n,unlink:r})),h.default.createElement(v.default,null,h.default.createElement(y.default,{auth:t,setPrimaryEmail:s,saveUser:a})))}}]),t}(E.Component),s.propTypes={auth:E.PropTypes.object.isRequired,authenticate:E.PropTypes.func.isRequired,unlink:E.PropTypes.func.isRequired,setPrimaryEmail:E.PropTypes.func.isRequired,saveUser:E.PropTypes.func.isRequired},a);t.default=L;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(L,"SettingsAccount","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/SettingsAccount/SettingsAccount.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});