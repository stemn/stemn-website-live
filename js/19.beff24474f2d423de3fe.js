webpackJsonp([19],{1313:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(3076),o=r(a);t.default=o.default},1405:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1409),o=r(a),i=n(158),l=r(i);t.default=(0,l.default)(o.default.root)},1409:function(e,t){e.exports={border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)",root:"styles_root-2U4JT"}},1442:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){this.el=e,this.paths=[].slice.call(this.el.querySelectorAll("path")),this.pathsArr=new Array,this.lengthsArr=new Array,this._init()}Object.defineProperty(t,"__esModule",{value:!0}),t.AnimateSvg=void 0;var o=n(35),i=r(o),l=n(0),s=r(l),u=n(1),d=r(u),c=n(1448),f=r(c),p=t.AnimateSvg=s.default.createClass({displayName:"AnimateSvg",svgEl:"",render:function(){var e=this.props,t=e.children,n=e.draw,r={ref:"svg"};return!this.svgEl&&this.refs.svg&&(this.svgEl=new a(this.refs.svg)),this.svgEl&&this.svgEl.draw(n),s.default.cloneElement(t,r)}}),m=s.default.createElement("path",{d:"m1.5,20c0,-10.22099 8.27901,-18.5 18.5,-18.5c10.22099,0 18.5,8.27901 18.5,18.5c0,10.22099 -8.27901,18.5 -18.5,18.5c-10.22099,0 -18.5,-8.27901 -18.5,-18.5z"}),h=s.default.createElement("path",{d:"m31.5,46.5l15.3,-23.2"}),y=s.default.createElement("path",{d:"m31.5,46.5l-8.5,-7.1"}),v=s.default.createElement("path",{d:"m35,35l-9.3,-9.3"}),g=s.default.createElement("path",{d:"m35,35l9.3,9.3"}),b=s.default.createElement("path",{d:"m35,35l-9.3,9.3"}),E=s.default.createElement("path",{d:"m35,35l9.3,-9.3"});t.default=s.default.createClass({displayName:"ProgressButton",getInitialState:function(){return{status:"",disabled:!1,drawLoading:0,drawSuccess:0}},componentWillReceiveProps:function(e){var t=this.props;!e.loading||t&&t.loading?t&&t.loading&&!e.loading&&this.loadingComplete():this.startLoading()},partialLoadTimeout:null,completeTimeout:null,completeIconTimeout:null,resetTimeout:null,clearTimeouts:function(){clearTimeout(this.partialLoadTimeout),clearTimeout(this.completeTimeout),clearTimeout(this.completeIconTimeout),clearTimeout(this.resetTimeout)},componentWillUnmount:function(){this.clearTimeouts()},startLoading:function(){var e=this;this.clearTimeouts(),this.setState({status:"loading",disabled:!0,drawLoading:0,drawComplete:0}),this.partialLoadTimeout=setTimeout(function(){e.setState({drawLoading:.7})},100)},loadingComplete:function(){var e=this;this.clearTimeouts(),this.setState({drawLoading:1}),this.completeTimeout=setTimeout(function(){e.setState(e.props.error?{status:"error"}:{status:"success"}),e.completeIconTimeout=setTimeout(function(){e.setState({drawComplete:1})},100),e.resetTimeout=setTimeout(function(){e.setState({status:"",disabled:!1,drawLoading:0})},2e3)},700)},render:function(){var e=this.props,t=e.children,n=e.onClick,r=(e.loading,e.className),a=e.href,o=this.state,l=o.status,u=o.disabled,c=o.drawLoading,P=o.drawComplete,A=s.default.createElement("svg",{className:f.default.progressCircle,width:"40",height:"40",viewBox:"0 0 40 40"},m),T=s.default.createElement("svg",{className:f.default.checkmark,width:"40",height:"40",viewBox:"0 0 70 70"},h,y),_=s.default.createElement("svg",{className:f.default.cross,width:"40",height:"40",viewBox:"0 0 70 70"},v,g,b,E),N=s.default.createElement(p,{draw:P},T),w=s.default.createElement(p,{draw:P},_),k=function(){return"success"==l?N:"error"==l?w:null};return s.default.createElement("div",{className:(0,d.default)(f.default.progressButton,r,(0,i.default)({},f.default.loading,"loading"==l),(0,i.default)({},f.default.error,"error"==l),(0,i.default)({},f.default.success,"success"==l))},a?s.default.createElement("a",{href:a},s.default.createElement("button",null,s.default.createElement("span",null,t))):s.default.createElement("button",{onClick:function(){u||n()}},s.default.createElement("span",null,t)),s.default.createElement(p,{draw:c},A),k())}}),a.prototype._init=function(){var e=this;this.paths.forEach(function(t,n){e.pathsArr[n]=t,t.style.strokeDasharray=e.lengthsArr[n]=t.getTotalLength()}),this.draw(0)},a.prototype.draw=function(e){for(var t=0,n=this.pathsArr.length;t<n;++t)this.pathsArr[t].style.strokeDashoffset=this.lengthsArr[t]*(1-e)}},1448:function(e,t){e.exports={primary:"rgb(68, 154, 211)","primary-2":"rgb(64, 129, 173)",warn:"rgb(244,67,54)","warn-2":"rgb(219, 59, 47)",progressButton:"ProgressButton_progressButton-3j879",progressCircle:"ProgressButton_progressCircle-UXzDa",checkmark:"ProgressButton_checkmark-27Dq2",cross:"ProgressButton_cross-1idFP",loading:"ProgressButton_loading-2wmTv",success:"ProgressButton_success-8765O",error:"ProgressButton_error-CaXYN"}},2542:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),o=r(a),i=n(31),l=r(i),s=n(10),u=r(s),d=n(9),c=r(d),f=n(11),p=r(f),m=n(13),h=r(m),y=n(12),v=r(y),g=n(0),b=r(g),E=n(5),P=n(15),A=n(121),T=r(A),_=function(e){function t(){var e,n,r,a;(0,c.default)(this,t);for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];return n=r=(0,h.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(i))),r.onChange=function(e){var t=r.props,n=t.dispatch,a=t.model;n(P.actions.change(a,e&&e.value))},a=n,(0,h.default)(r,a)}return(0,v.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.model,(0,l.default)(e,["dispatch","model"]));return b.default.createElement(T.default,(0,o.default)({onChange:this.onChange},t))}}]),t}(b.default.Component);t.default=(0,E.connect)()(_)},2543:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(2542),o=r(a);t.default=o.default},2569:function(e,t){function n(e,t,n,o){for(var i=-1,l=a(r((t-e)/(n||1)),0),s=Array(l);l--;)s[o?l:++i]=e,e+=n;return s}var r=Math.ceil,a=Math.max;e.exports=n},2572:function(e,t,n){function r(e){return function(t,n,r){return r&&"number"!=typeof r&&o(t,n,r)&&(n=r=void 0),t=i(t),void 0===n?(n=t,t=0):n=i(n),r=void 0===r?t<n?1:-1:i(r),a(t,n,r,e)}}var a=n(2569),o=n(162),i=n(456);e.exports=r},2580:function(e,t,n){var r=n(2572),a=r();e.exports=a},2831:function(e,t){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};return Object.keys(e).forEach(function(r){t.indexOf(r)===-1&&(n[r]=e[r])}),n}function r(e,t){var n=e===t;if(n)return!0;var r=!Array.isArray(e)||!Array.isArray(t),a=e.length!==t.length;return!r&&!a&&e.every(function(e,n){return e===t[n]})}Object.defineProperty(t,"__esModule",{value:!0}),t.omit=n,t.arraysEqual=r;t.isElementAnSFC=function(e){var t="string"==typeof e.type;return!t&&!e.type.prototype.isReactComponent}},2843:function(e,t){e.exports={primary:"rgb(68, 154, 211)","primary-2":"rgb(64, 129, 173)",secondary:"rgba(0, 0, 0, 0.7)","secondary-2":"rgba(0, 0, 0, 0.8)",warn:"rgb(244,67,54)","warn-2":"rgb(219, 59, 47)","grey-3":"rgba(0, 0, 0, 0.5)",bg1:"rgba(0, 0, 0, 0.03)",linkedin:"#1884bc","linkedin-dark":"#166f9d",facebook:"#3b5998","facebook-dark":"#2d4579",button:"FilledIconButton_button-1r-g2"}},2866:function(e,t){e.exports={dateInput:"UserExperienceSettings_dateInput-1fylW",panel:"UserExperienceSettings_panel-3wC-y",closeButton:"UserExperienceSettings_closeButton-1kE8y"}},2889:function(e,t){e.exports={avatarCol:"SettingsProfileDetails_avatarCol-r7xui"}},2915:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),o=r(a),i=n(31),l=r(i),s=n(0),u=r(s),d=n(1),c=r(d),f=n(2843),p=r(f);t.default=function(e){var t=e.children,n=e.className,r=(0,l.default)(e,["children","className"]);return u.default.createElement("button",(0,o.default)({className:(0,c.default)(p.default.button,n)},r),t)}},2991:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o,i=n(10),l=r(i),s=n(9),u=r(s),d=n(11),c=r(d),f=n(13),p=r(f),m=n(12),h=r(m),y=n(2580),v=r(y),g=n(0),b=r(g),E=n(5),P=n(15),A=n(61),T=r(A),_=n(433),N=r(_),w=n(115),k=n(2543),D=r(k),O=n(261),C=r(O),x=n(2915),S=r(x),B=n(2866),M=r(B),j=n(1),F=r(j),H=n(1405),R=r(H),L=n(71),I=(r(L),n(436)),U=r(I),z=n(428),V=r(z),W=n(3119),q=r(W),Y=n(94),X=r(Y),K=b.default.createElement("h3",null,"Degree/Certificate Type"),J=b.default.createElement("h3",null,"Field of Study"),G=b.default.createElement("h3",null,"School/University"),Q=b.default.createElement("h3",null,"Position"),Z=b.default.createElement("h3",null,"Company"),$=b.default.createElement(U.default,{size:20}),ee=b.default.createElement("br",null),te=b.default.createElement("h3",null,"Time Period"),ne=b.default.createElement(w.Col,{className:"sm"},"to"),re=b.default.createElement(w.Col,{className:"sm"},"or"),ae=b.default.createElement(w.Col,{className:"sm"},"Current?"),oe=b.default.createElement("br",null),ie=b.default.createElement("h3",null,"Description"),le=b.default.createElement(V.default,{size:20}),se=(a=(0,E.connect)(),a(o=function(e){function t(e){(0,u.default)(this,t);var n=(0,p.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.remove=function(e){var t=n.props,r=t.dispatch,a=t.dataModel;r(P.actions.remove(a,e))},n.add=function(){var e=n.props,t=e.dispatch,r=e.dataModel;t(P.actions.push(r,{_id:(0,X.default)()}))},n.dateRange=(0,v.default)(1940,2025).map(function(e){return{value:e,label:e}}),n}return(0,h.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.dataModel,r=t.type,a=t.data;return b.default.createElement("div",null,b.default.createElement(q.default,{duration:200,enterAnimation:"fade",leaveAnimation:"fade"},a.map(function(t,a){var o=n+".["+a+"]",i=function(){return"education"===r?b.default.createElement(w.Row,{className:"sm layout-row"},b.default.createElement(w.Col,{className:"sm flex-33"},K,b.default.createElement(T.default,{className:"dr-input",model:o+".degree",value:t.degree,placeholder:"eg: Bachelor"})),b.default.createElement(w.Col,{className:"sm flex-33"},J,b.default.createElement(T.default,{className:"dr-input",model:o+".fieldOfStudy",value:t.fieldOfStudy,placeholder:"eg: Mechanical Engineering"})),b.default.createElement(w.Col,{className:"sm flex-33"},G,b.default.createElement(T.default,{className:"dr-input",model:o+".school",value:t.school,placeholder:"eg: MIT"}))):b.default.createElement(w.Row,{className:"sm layout-row"},b.default.createElement(w.Col,{className:"sm flex-50"},Q,b.default.createElement(T.default,{className:"dr-input",model:o+".position",value:t.position,placeholder:"eg: Mechanical Design Engineer "})),b.default.createElement(w.Col,{className:"sm flex-50"},Z,b.default.createElement(T.default,{className:"dr-input",model:o+".company",value:t.company,placeholder:"eg: SpaceX"})))};return b.default.createElement("div",{key:t._id},b.default.createElement(R.default,{className:M.default.panel},b.default.createElement(S.default,{onClick:function(){return e.remove(a)},className:(0,F.default)(M.default.closeButton,"warn")},$),i(),ee,te,b.default.createElement(w.Row,{className:"sm layout-row layout-align-start-center"},b.default.createElement(w.Col,{className:"sm"},b.default.createElement(D.default,{model:o+".startDate.year",value:t.startDate&&t.startDate.year,className:M.default.dateInput,options:e.dateRange,placeholder:"Start Year"})),!t.isCurrent&&ne,!t.isCurrent&&b.default.createElement(w.Col,{className:"sm"},b.default.createElement(D.default,{model:o+".endDate.year",value:t.endDate&&t.endDate.year,className:M.default.dateInput,options:e.dateRange,placeholder:"End Year"})),!t.isCurrent&&re,b.default.createElement(w.Col,{className:"sm text-primary"},b.default.createElement(C.default,{model:o+".isCurrent",value:t.isCurrent})),ae),oe,ie,b.default.createElement(N.default,{className:"dr-input",model:o+".notes",value:t.notes})))})),b.default.createElement("div",{className:"layout-row layout-align-center"},b.default.createElement(S.default,{onClick:this.add,className:"primary"},le)))}}]),t}(g.Component))||o);t.default=se},2992:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(2991),o=r(a);t.default=o.default},3076:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o,i=n(10),l=r(i),s=n(9),u=r(s),d=n(11),c=r(d),f=n(13),p=r(f),m=n(12),h=r(m),y=n(0),v=r(y),g=n(5),b=n(3077),E=r(b),P=n(429),A=function(e){var t=e.users,n=e.auth;return{user:t[n.user._id],currentUser:n.user,entityModel:"users."+n.user._id}},T={saveUser:P.saveUser},_=(a=(0,g.connect)(A,T),a(o=function(e){function t(){return(0,u.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return v.default.createElement(E.default,this.props)}}]),t}(y.Component))||o);t.default=_},3077:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(10),o=r(a),i=n(9),l=r(i),s=n(11),u=r(s),d=n(13),c=r(d),f=n(12),p=r(f),m=n(0),h=r(m),y=n(2889),v=(r(y),n(2992)),g=r(v),b=n(1405),E=(r(b),n(115),n(61)),P=(r(E),n(433)),A=(r(P),n(1442)),T=(r(A),n(418)),_=(r(T),h.default.createElement("div",{className:"text-title-3"},"Experience")),N=h.default.createElement("br",null),w=h.default.createElement("br",null),k=h.default.createElement("br",null),D=h.default.createElement("div",{className:"text-title-3"},"Education"),O=h.default.createElement("br",null),C=function(e){function t(){var e,n,r,a;(0,l.default)(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=r=(0,c.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(s))),r.saveUser=function(){r.props.saveUser({user:r.props.user.data})},a=n,(0,c.default)(r,a)}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.entityModel;return h.default.createElement("div",null,_,N,h.default.createElement(g.default,{data:t.data.profile.profileDetails.experience,dataModel:n+".data.profile.profileDetails.experience",type:"experience"}),w,k,D,O,h.default.createElement(g.default,{data:t.data.profile.profileDetails.education,dataModel:n+".data.profile.profileDetails.education",type:"education"}))}}]),t}(m.Component);t.default=C},3115:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(0),c=r(d);n(3120);var f=n(3121),p=r(f),m=n(3116),h=n(2831),y=(0,m.whichTransitionEvent)(),v=!y,g=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.childrenData={},n.parentData={domNode:null,boundingBox:null},n.heightPlaceholderData={domNode:null},n.state={children:e.children.map(function(e){return s({},e,{appearing:!0})})},n.remainingAnimations=0,n.childrenToAnimate=[],n.doesChildNeedToBeAnimated=n.doesChildNeedToBeAnimated.bind(n),n.runAnimation=n.runAnimation.bind(n),n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props.appearAnimation&&!this.isAnimationDisabled(this.props);e&&(this.prepForAnimation(),this.runAnimation())}},{key:"componentWillReceiveProps",value:function(e){this.updateBoundingBoxCaches();var t=this.isAnimationDisabled(e)?e.children:this.calculateNextSetOfChildren(e.children);this.setState({children:t})}},{key:"componentDidUpdate",value:function(e){var t=this.props.children.map(function(e){return e.key}),n=e.children.map(function(e){return e.key}),r=!(0,h.arraysEqual)(t,n)&&!this.isAnimationDisabled(this.props);r&&(this.prepForAnimation(),this.runAnimation())}},{key:"calculateNextSetOfChildren",value:function(e){var t=this,n=e.map(function(e){var n=t.findChildByKey(e.key),r=!n||n.leaving;return s({},e,{entering:r})}),r=0;return this.state.children.forEach(function(a,o){var i=!e.find(function(e){var t=e.key;return t===a.key});if(i&&t.props.leaveAnimation){var l=s({},a,{leaving:!0}),u=o+r;n.splice(u,0,l),r+=1}}),n}},{key:"prepForAnimation",value:function(){var e=this,t=this.props,n=t.leaveAnimation,r=t.maintainContainerHeight,a=t.getPosition;if(n){var o=this.state.children.filter(function(e){return!!e.leaving});o.forEach(function(t){var n=e.childrenData[t.key];n.boundingBox&&(0,m.removeNodeFromDOMFlow)(n,e.props.verticalAlignment)}),r&&(0,m.updateHeightPlaceholder)({domNode:this.heightPlaceholderData.domNode,parentData:this.parentData,getPosition:a})}this.state.children.forEach(function(t){var n=e.childrenData[t.key].domNode;n&&(t.entering||t.leaving||(0,m.applyStylesToDOMNode)({domNode:n,styles:{transition:""}}))})}},{key:"runAnimation",value:function(){var e=this,t=this.state.children.filter(this.doesChildNeedToBeAnimated);if(t.forEach(function(t,n){e.remainingAnimations+=1,e.childrenToAnimate.push(t.key),e.animateChild(t,n)}),this.props.onStartAll){var n=this.formatChildrenForHooks(),r=l(n,2),a=r[0],o=r[1];this.props.onStartAll(a,o)}}},{key:"animateChild",value:function(e,t){var n=this,r=this.childrenData[e.key].domNode;(0,m.applyStylesToDOMNode)({domNode:r,styles:this.computeInitialStyles(e)}),this.props.onStart&&this.props.onStart(e,r),requestAnimationFrame(function(){requestAnimationFrame(function(){var a={transition:(0,m.createTransitionString)(t,n.props),transform:"",opacity:""};e.appearing&&n.props.appearAnimation?a=s({},a,n.props.appearAnimation.to):e.entering&&n.props.enterAnimation?a=s({},a,n.props.enterAnimation.to):e.leaving&&n.props.leaveAnimation&&(a=s({},a,n.props.leaveAnimation.to)),(0,m.applyStylesToDOMNode)({domNode:r,styles:a})})}),this.bindTransitionEndHandler(e)}},{key:"bindTransitionEndHandler",value:function(e){var t=this,n=this.childrenData[e.key].domNode,r=function a(r){r.target===n&&(n.style.transition="",t.triggerFinishHooks(e,n),n.removeEventListener(y,a),e.leaving&&delete t.childrenData[e.key])};n.addEventListener(y,r)}},{key:"triggerFinishHooks",value:function(e,t){var n=this;if(this.props.onFinish&&this.props.onFinish(e,t),this.remainingAnimations-=1,0===this.remainingAnimations){var r=this.state.children.filter(function(e){var t=e.leaving;return!t}).map(function(e){return s({},e,{appearing:!1,entering:!1})});this.setState({children:r},function(){if("function"==typeof n.props.onFinishAll){var e=n.formatChildrenForHooks(),t=l(e,2),r=t[0],a=t[1];n.props.onFinishAll(r,a)}n.childrenToAnimate=[]}),null!==this.heightPlaceholderData.domNode&&(this.heightPlaceholderData.domNode.style.height=0)}}},{key:"formatChildrenForHooks",value:function(){var e=this,t=[],n=[];return this.childrenToAnimate.forEach(function(r){var a=e.findChildByKey(r);a&&(t.push(a),n.push(e.childrenData[r].domNode))}),[t,n]}},{key:"updateBoundingBoxCaches",value:function(){var e=this;this.parentData.boundingBox=this.props.getPosition(this.parentData.domNode),this.state.children.forEach(function(t){if(t.key){var n=e.childrenData[t.key];n&&n.domNode&&(n.boundingBox=(0,m.getRelativeBoundingBox)({childData:n,parentData:e.parentData,getPosition:e.props.getPosition}))}})}},{key:"computeInitialStyles",value:function(e){var t=e.appearing&&!this.props.appearAnimation||e.entering&&!this.props.enterAnimation||e.leaving&&!this.props.leaveAnimation;if(t)return{};if(e.appearing)return this.props.appearAnimation.from;if(e.entering)return s({position:"",top:"",left:"",right:"",bottom:""},this.props.enterAnimation.from);if(e.leaving)return this.props.leaveAnimation.from;var n=(0,m.getPositionDelta)({childData:this.childrenData[e.key],parentData:this.parentData,getPosition:this.props.getPosition}),r=l(n,2),a=r[0],o=r[1];return{transform:"translate("+a+"px, "+o+"px)"}}},{key:"isAnimationDisabled",value:function(e){return v||e.disableAllAnimations||0===e.duration&&0===e.delay&&0===e.staggerDurationBy&&0===e.staggerDelayBy}},{key:"doesChildNeedToBeAnimated",value:function(e){if(!e.key)return!1;var t=this.childrenData[e.key];if(!t.domNode)return!1;var n=this.props,r=n.appearAnimation,a=n.enterAnimation,o=n.leaveAnimation,i=n.getPosition,s=e.appearing&&r,u=e.entering&&a,d=e.leaving&&o;if(s||u||d)return!0;var c=(0,m.getPositionDelta)({childData:t,parentData:this.parentData,getPosition:i}),f=l(c,2),p=f[0],h=f[1];return 0!==p||0!==h}},{key:"findChildByKey",value:function(e){return this.state.children.find(function(t){return t.key===e})}},{key:"createHeightPlaceholder",value:function(){var e=this,t=this.props.typeName,n="ul"===t||"ol"===t,r=n?"li":"div";return c.default.createElement(r,{key:"height-placeholder",ref:function(t){e.heightPlaceholderData.domNode=t},style:{visibility:"hidden",height:0}})}},{key:"childrenWithRefs",value:function(){var e=this;return this.state.children.map(function(t){return c.default.cloneElement(t,{ref:function(n){if(n){var r=(0,m.getNativeNode)(n);e.childrenData[t.key]||(e.childrenData[t.key]={}),e.childrenData[t.key].domNode=r}}})})}},{key:"render",value:function(){var e=this,t=this.props,n=t.typeName,r=t.delegated,a=t.leaveAnimation,o=t.maintainContainerHeight,i=s({},r,{ref:function(t){e.parentData.domNode=t}}),l=this.childrenWithRefs();return a&&o&&l.push(this.createHeightPlaceholder()),c.default.createElement(n,i,l)}}]),t}(d.Component);t.default=(0,p.default)(g),e.exports=t.default},3116:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){var t=e.domNode,n=e.styles;Object.keys(n).forEach(function(e){t.style[e]=n[e]})}function o(){var e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};if("undefined"==typeof document)return"";var t=document.createElement("fakeelement"),n=Object.keys(e).find(function(e){return void 0!==t.style[e]});return n?e[n]:""}Object.defineProperty(t,"__esModule",{value:!0}),t.createTransitionString=t.getNativeNode=t.updateHeightPlaceholder=t.removeNodeFromDOMFlow=t.getPositionDelta=t.getRelativeBoundingBox=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.applyStylesToDOMNode=a,t.whichTransitionEvent=o;var l=n(30);t.getRelativeBoundingBox=function(e){var t=e.childData,n=e.parentData,r=e.getPosition,a=t.domNode,o=n.domNode,i=r(o),l=r(a),s=l.top,u=l.left,d=l.right,c=l.bottom,f=l.width,p=l.height;return{top:s-i.top,left:u-i.left,right:i.right-d,bottom:i.bottom-c,width:f,height:p}},t.getPositionDelta=function(e){var t=e.childData,n=e.parentData,r=e.getPosition,a={top:0,left:0,right:0,bottom:0},o=t.boundingBox||a,i=r(t.domNode),l={top:i.top-n.boundingBox.top,left:i.left-n.boundingBox.left};return[o.left-l.left,o.top-l.top]},t.removeNodeFromDOMFlow=function(e,t){var n=e.domNode,o=e.boundingBox,l=window.getComputedStyle(n),s=["margin-top","margin-left","margin-right"],u=s.reduce(function(e,t){var n=l.getPropertyValue(t);return i({},e,r({},t,Number(n.replace("px",""))))},{}),d="bottom"===t?o.top-o.height:o.top,c={position:"absolute",top:d-u["margin-top"]+"px",left:o.left-u["margin-left"]+"px",right:o.right-u["margin-right"]+"px"};a({domNode:n,styles:c})},t.updateHeightPlaceholder=function(e){var t=e.domNode,n=e.parentData,r=e.getPosition;a({domNode:t,styles:{height:0}});var o=n.boundingBox.height,i=r(n.domNode).height,l=o-i,s={height:l>0?l+"px":0};a({domNode:t,styles:s})},t.getNativeNode=function(e){return"undefined"==typeof HTMLElement?null:e instanceof HTMLElement?e:(0,l.findDOMNode)(e)},t.createTransitionString=function(e,t){var n=t.delay,r=t.duration,a=t.staggerDurationBy,o=t.staggerDelayBy,i=t.easing;n+=e*o,r+=e*a;var l=["transform","opacity"];return l.map(function(e){return e+" "+r+"ms "+i+" "+n+"ms"}).join(", ")}},3117:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.enterPresets={elevator:{from:{transform:"scale(0)",opacity:0},to:{transform:"",opacity:""}},fade:{from:{opacity:0},to:{opacity:""}},accordionVertical:{from:{transform:"scaleY(0)",transformOrigin:"center top"},to:{transform:"",transformOrigin:"center top"}},accordionHorizontal:{from:{transform:"scaleX(0)",transformOrigin:"left center"},to:{transform:"",transformOrigin:"left center"}},none:!1},r=t.leavePresets={elevator:{from:{transform:"scale(1)",opacity:1},to:{transform:"scale(0)",opacity:0}},fade:{from:{opacity:1},to:{opacity:0}},accordionVertical:{from:{transform:"scaleY(1)",transformOrigin:"center top"},to:{transform:"scaleY(0)",transformOrigin:"center top"}},accordionHorizontal:{from:{transform:"scaleX(1)",transformOrigin:"left center"},to:{transform:"scaleX(0)",transformOrigin:"left center"}},none:!1};t.appearPresets=n;n.accordianVertical=n.accordionVertical,n.accordianHorizontal=n.accordionHorizontal,r.accordianVertical=r.accordionVertical,r.accordianHorizontal=r.accordionHorizontal;t.defaultPreset="elevator",t.disablePreset="none"},3118:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.statelessFunctionalComponentSupplied=function(){return"\n>> Error, via react-flip-move <<\n\nYou provided a stateless functional component as a child to <FlipMove>. Unfortunately, SFCs aren't supported, because Flip Move needs access to the backing instances via refs, and SFCs don't have a public instance that holds that info.\n\nPlease wrap your components in a native element (eg. <div>), or a non-functional component.\n"},t.invalidTypeForTimingProp=function(e){var t=e.prop,n=e.value,r=e.defaultValue;return"\n>> Error, via react-flip-move <<\n\nThe prop you provided for '"+t+"' is invalid. It needs to be a positive integer, or a string that can be resolved to a number. The value you provided is '"+n+"'.\n\nAs a result,  the default value for this parameter will be used, which is '"+r+"'.\n"},t.deprecatedDisableAnimations=function(){return"\n>> Warning, via react-flip-move <<\n\nThe 'disableAnimations' prop you provided is deprecated. Please switch to use 'disableAllAnimations'.\n\nThis will become a silent error in future versions of react-flip-move.\n"},t.invalidEnterLeavePreset=function(e){var t=e.value,n=e.acceptableValues,r=e.defaultValue;return"\n>> Error, via react-flip-move <<\n\nThe enter/leave preset you provided is invalid. We don't currently have a '"+t+" preset.'\n\nAcceptable values are "+n+". The default value of '"+r+"' will be used.\n"}},3119:function(e,t,n){"use strict";e.exports=n(3115)},3120:function(e,t){"use strict";Array.prototype.find||(Array.prototype.find=function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t=Object(this),n=t.length>>>0,r=arguments[1],a=void 0,o=0;o<n;o++)if(a=t[o],e.call(r,a,o,t))return a}),Array.prototype.every||(Array.prototype.every=function(e,t){var n,r;if(null==this)throw new TypeError("this is null or not defined");var a=Object(this),o=a.length>>>0;if("function"!=typeof e)throw new TypeError;for(arguments.length>1&&(n=t),r=0;r<o;){var i;if(r in a){i=a[r];var l=e.call(n,i,r,a);if(!l)return!1}r++}return!0}),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)})},3121:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t=function(t){function n(){return a(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),d(n,[{key:"convertProps",value:function(e){var t=n.propTypes,r=n.defaultProps,a=u({},e);a.children=f.default.Children.toArray(e.children);var o=(a.children.every(function(e){return!(0,h.isElementAnSFC)(e)||"undefined"==typeof e.key}),["duration","delay","staggerDurationBy","staggerDelayBy"]);o.forEach(function(e){var t=a[e],n="string"==typeof t?parseInt(t,10):t;if(isNaN(n)){var o=r[e];(0,p.invalidTypeForTimingProp)({prop:e,value:n,defaultValue:o});n=o}a[e]=n}),a.appearAnimation=this.convertAnimationProp(a.appearAnimation,m.appearPresets),a.enterAnimation=this.convertAnimationProp(a.enterAnimation,m.enterPresets),a.leaveAnimation=this.convertAnimationProp(a.leaveAnimation,m.leavePresets),"undefined"!=typeof e.disableAnimations&&(a.disableAnimations=void 0,a.disableAllAnimations=e.disableAnimations);var i=Object.keys(t),l=(0,h.omit)(this.props,i);return l.style=u({position:"relative"},l.style),a=(0,h.omit)(a,Object.keys(l)),a.delegated=l,a}},{key:"convertAnimationProp",value:function(e,t){var n=void 0;switch("undefined"==typeof e?"undefined":s(e)){case"boolean":n=t[e?m.defaultPreset:m.disablePreset];break;case"string":var r=Object.keys(t);n=r.indexOf(e)===-1?t[m.defaultPreset]:t[e];break;default:n=e}return n}},{key:"render",value:function(){return f.default.createElement(e,this.convertProps(this.props))}}]),n}(c.Component),n=c.PropTypes.oneOfType([c.PropTypes.string,c.PropTypes.bool,c.PropTypes.shape({from:c.PropTypes.object,to:c.PropTypes.object})]);return t.propTypes={children:c.PropTypes.node,easing:c.PropTypes.string,duration:c.PropTypes.oneOfType([c.PropTypes.string,c.PropTypes.number]),delay:c.PropTypes.oneOfType([c.PropTypes.string,c.PropTypes.number]),staggerDurationBy:c.PropTypes.oneOfType([c.PropTypes.string,c.PropTypes.number]),staggerDelayBy:c.PropTypes.oneOfType([c.PropTypes.string,c.PropTypes.number]),onStart:c.PropTypes.func,onFinish:c.PropTypes.func,onStartAll:c.PropTypes.func,onFinishAll:c.PropTypes.func,typeName:c.PropTypes.string,appearAnimation:n,enterAnimation:n,leaveAnimation:n,disableAllAnimations:c.PropTypes.bool,getPosition:c.PropTypes.func,maintainContainerHeight:c.PropTypes.bool.isRequired,verticalAlignment:c.PropTypes.oneOf(["top","bottom"]).isRequired},t.defaultProps={easing:"ease-in-out",duration:350,delay:0,staggerDurationBy:0,staggerDelayBy:0,typeName:"div",
enterAnimation:m.defaultPreset,leaveAnimation:m.defaultPreset,disableAllAnimations:!1,getPosition:function(e){return e.getBoundingClientRect()},maintainContainerHeight:!1,verticalAlignment:"top"},t}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),f=r(c),p=n(3118),m=n(3117),h=n(2831);t.default=l,e.exports=t.default}});