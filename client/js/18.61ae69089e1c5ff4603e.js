webpackJsonp([18,61],{"+zCF":function(e,t){e.exports={project:"UserOverview_project-1l_WA",panel:"UserOverview_panel-2xF87",s0:"UserOverview_s0-2mBY-",s1:"UserOverview_s1-3eKWX",s2:"UserOverview_s2-1bY8h",s3:"UserOverview_s3-1ZfMb",s4:"UserOverview_s4-2C5ml",s5:"UserOverview_s5-kiHiE"}},"4RiB":function(e,t){function r(e,t){for(var r,n=-1,o=e.length;++n<o;){var a=t(e[n]);void 0!==a&&(r=void 0===r?a:r+a)}return r}e.exports=r},"5Oyi":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a,u,i=r("Zx67"),s=n(i),l=r("Zrlr"),c=n(l),f=r("wxAW"),d=n(f),p=r("zwoO"),_=n(p),h=r("Pf15"),v=n(h),y=r("U7vG"),m=n(y),g=r("4n+p"),b=r("YapR"),O=n(b),E=r("N31G"),j=r("9Uyb"),w=n(j),T=function(e,t){var r=t.projectId;return{project:e.projects.data[r]}},A={getProject:E.getProject},C=[{hasChanged:"projectId",onChange:function(e){e.getProject({projectId:e.projectId,size:"md"})}}],D=(o=(0,g.connect)(T,A),a=(0,O.default)(C),o(u=a(u=function(e){function t(){return(0,c.default)(this,t),(0,_.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return m.default.createElement(w.default,this.props)}}]),t}(y.Component))||u)||u);t.default=D;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(D,"ProjectContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Projects/ProjectRow/ProjectRow.container.js"),__REACT_HOT_LOADER__.register(T,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Projects/ProjectRow/ProjectRow.container.js"),__REACT_HOT_LOADER__.register(A,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Projects/ProjectRow/ProjectRow.container.js"),__REACT_HOT_LOADER__.register(C,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Projects/ProjectRow/ProjectRow.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"6VdP":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.getHistory=function(e){var t=e.cacheKey,r=e.entityId,n=e.entityType,o=e.from,a=e.parentId,u=e.parentType,i=e.to,s=e.types;return{type:"HISTORY/GET_HISTORY",http:!0,payload:{url:"api/v1/history",params:{entityId:r,entityType:n,from:o,parentId:a,parentType:u,to:i,types:s}},meta:{cacheKey:t}}};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(r,"getHistory","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/History/History.actions.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"7L04":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("Zx67"),a=n(o),u=r("Zrlr"),i=n(u),s=r("wxAW"),l=n(s),c=r("zwoO"),f=n(c),d=r("Pf15"),p=n(d),_=r("Xm/7"),h=n(_),v=r("L8MQ"),y=n(v),m=r("Ba3q"),g=n(m),b=r("U7vG"),O=n(b),E=r("+zCF"),j=n(E),w=r("HW6M"),T=(n(w),r("PjCM")),A=r("9R6J"),C=n(A),D=r("G/eK"),R=n(D),P=r("NCXo"),S=n(P),k=r("XjrJ"),N=n(k),x=r("n4OE"),L=n(x),M=r("K+/r"),U=n(M),H=function(e){return 0===e?0:1===e?1:e<=3?2:e<=5?3:e<=10?4:5},W=function(e){function t(){var e,r,n,o;(0,i.default)(this,t);for(var u=arguments.length,s=Array(u),l=0;l<u;l++)s[l]=arguments[l];return r=n=(0,f.default)(this,(e=t.__proto__||(0,a.default)(t)).call.apply(e,[this].concat(s))),n.getColorClass=function(){var e;return(e=n).__getColorClass__REACT_HOT_LOADER__.apply(e,arguments)},o=r,(0,f.default)(n,o)}return(0,p.default)(t,e),(0,l.default)(t,[{key:"__getColorClass__REACT_HOT_LOADER__",value:function(e){return e?j.default["s"+H(e.count)]:j.default.s0}},{key:"render",value:function(){var e=this.props,t=(e.user,e.projects),r=e.timeline,n=e.history,o=e.location,a=e.page,u=e.size,i=r&&r.data&&r.data.length<u,s=n&&n.data?n.data.map(function(e){return{date:e.date,count:(0,h.default)((0,y.default)(e.counts))}}):[],l=(0,g.default)(t.data,"updated","desc").slice(0,4);return O.default.createElement("div",null,O.default.createElement("div",{className:"text-mini-caps"},"Recent Projects"),O.default.createElement("br",null),O.default.createElement(T.Row,{className:"sm layout-row layout-wrap"},l.map(function(e){return O.default.createElement(T.Col,{key:e._id,className:"sm flex-100 flex-gt-sm-50"},O.default.createElement(S.default,{key:e._id,projectId:e._id,className:j.default.project}))})),O.default.createElement("br",null),O.default.createElement("div",{className:"text-mini-caps"},"Contribution History"),O.default.createElement("br",null),O.default.createElement("div",{className:j.default.panel},O.default.createElement(N.default,{numDays:280,gutterSize:2,values:s,classForValue:this.getColorClass})),O.default.createElement("br",null),O.default.createElement("br",null),O.default.createElement("div",{className:"text-mini-caps"},"Timeline"),O.default.createElement("br",null),O.default.createElement(C.default,null,O.default.createElement(U.default,{show:r.loading,linear:!0,hideBg:!0,noOverlay:!0}),r.data&&O.default.createElement(R.default,{group:!0,items:r.data,type:"user"})),O.default.createElement(L.default,{path:o.pathname,page:a,noMoreResults:i}),O.default.createElement("br",null),O.default.createElement("br",null))}}]),t}(b.Component);t.default=W;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(W,"UserOverview","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserOverview/UserOverview.js"),__REACT_HOT_LOADER__.register(H,"normaliseValue","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserOverview/UserOverview.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"9R6J":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r("fExO"),a=n(o),u=r("LVXM"),i=n(u),s=(0,i.default)(a.default.root),l=s;t.default=l;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Panels/Panel/index.js"),__REACT_HOT_LOADER__.register(l,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Panels/Panel/index.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"9Uyb":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r("Zx67"),a=n(o),u=r("Zrlr"),i=n(u),s=r("wxAW"),l=n(s),c=r("zwoO"),f=n(c),d=r("Pf15"),p=n(d),_=r("U7vG"),h=n(_),v=r("PIRZ"),y=n(v),m=r("HW6M"),g=n(m),b=r("PJh5"),O=n(b),E=r("GeCl"),j=n(E),w=r("LZKX"),T=n(w),A=r("tYm5"),C=n(A),D=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.project,r=e.className,n=e.size;if(t&&t.data){var o=t.data,a=o._id,u=o.name,i=o.blurb,s=o.picture,l=o.updated;return h.default.createElement("div",{className:(0,g.default)(y.default.project,"layout-row",r)},h.default.createElement("div",{className:"layout-column flex"},h.default.createElement(j.default,{className:(0,g.default)("link-primary",y.default.title),name:"projectRoute",params:{projectId:a}},u||"Untitled Project"),h.default.createElement("div",{className:(0,g.default)("flex",y.default.blurb)},i),h.default.createElement("div",{className:y.default.meta},(0,O.default)(l).fromNow())),"wide"===n&&s?h.default.createElement(j.default,{name:"projectRoute",params:{projectId:a}},h.default.createElement("img",{className:y.default.picture,src:"https://dev.stemn.com"+s+"?size=feed-sm&crop=true"})):null)}return h.default.createElement(C.default,{className:(0,g.default)(y.default.project,"layout-row",r)},h.default.createElement("div",{className:"layout-column flex"},h.default.createElement(T.default,{width:200,className:y.default.title}),h.default.createElement("div",{className:y.default.blurb},h.default.createElement(T.default,{width:320,style:{marginBottom:"5px"}}),h.default.createElement(T.default,{width:300})),h.default.createElement(T.default,{width:200,className:y.default.meta})))}}]),t}(_.Component),R=D,P=R;t.default=P;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(D,"Project","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Projects/ProjectRow/ProjectRow.jsx"),__REACT_HOT_LOADER__.register(R,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Projects/ProjectRow/ProjectRow.jsx"),__REACT_HOT_LOADER__.register(P,"default","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Projects/ProjectRow/ProjectRow.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},NCXo:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("5Oyi"),a=n(o);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},PIRZ:function(e,t){e.exports={project:"ProjectRow_project-3dNxi",title:"ProjectRow_title-3M7ng",blurb:"ProjectRow_blurb-1NZuS",meta:"ProjectRow_meta-20WCU",picture:"ProjectRow_picture-2PNQn"}},VTvy:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("mU3Z"),a=n(o);t.default=a.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},XjrJ:function(e,t,r){!function(t,n){e.exports=n(r("U7vG"))}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&i.return&&i.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(2),f=n(c),d=r(3),p=n(d),_=r(4),h=n(_),v=r(6),y=r(7),m=10,g=4,b=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={valueCache:r.getValueCache(e.values)},r}return u(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({valueCache:this.getValueCache(e.values)})}},{key:"getSquareSizeWithGutter",value:function(){return m+this.props.gutterSize}},{key:"getMonthLabelSize",value:function(){return this.props.showMonthLabels?this.props.horizontal?m+g:2*(m+g):0}},{key:"getStartDate",value:function(){return(0,y.shiftDate)(this.getEndDate(),-this.props.numDays+1)}},{key:"getEndDate",value:function(){return(0,y.getBeginningTimeForDate)((0,y.convertToDate)(this.props.endDate))}},{key:"getStartDateWithEmptyDays",value:function(){return(0,y.shiftDate)(this.getStartDate(),-this.getNumEmptyDaysAtStart())}},{key:"getNumEmptyDaysAtStart",value:function(){return this.getStartDate().getDay()}},{key:"getNumEmptyDaysAtEnd",value:function(){return v.DAYS_IN_WEEK-1-this.getEndDate().getDay()}},{key:"getWeekCount",value:function(){var e=this.props.numDays+this.getNumEmptyDaysAtStart()+this.getNumEmptyDaysAtEnd();return Math.ceil(e/v.DAYS_IN_WEEK)}},{key:"getWeekWidth",value:function(){return v.DAYS_IN_WEEK*this.getSquareSizeWithGutter()}},{key:"getWidth",value:function(){return this.getWeekCount()*this.getSquareSizeWithGutter()-this.props.gutterSize}},{key:"getHeight",value:function(){return this.getWeekWidth()+(this.getMonthLabelSize()-this.props.gutterSize)}},{key:"getValueCache",value:function(e){var t=this;return(0,h.default)(e,function(e,r){var n=(0,y.convertToDate)(r.date),o=Math.floor((n-t.getStartDateWithEmptyDays())/v.MILLISECONDS_IN_ONE_DAY);return e[o]={value:r,className:t.props.classForValue(r),title:t.props.titleForValue?t.props.titleForValue(r):null,tooltipDataAttrs:t.getTooltipDataAttrsForValue(r)},e},{})}},{key:"getValueForIndex",value:function(e){return this.state.valueCache[e]?this.state.valueCache[e].value:null}},{key:"getClassNameForIndex",value:function(e){return this.state.valueCache[e]?this.state.valueCache[e].className:this.props.classForValue(null)}},{key:"getTitleForIndex",value:function(e){return this.state.valueCache[e]?this.state.valueCache[e].title:this.props.titleForValue?this.props.titleForValue(null):null}},{key:"getTooltipDataAttrsForIndex",value:function(e){return this.state.valueCache[e]?this.state.valueCache[e].tooltipDataAttrs:this.getTooltipDataAttrsForValue({date:null,count:null})}},{key:"getTooltipDataAttrsForValue",value:function(e){var t=this.props.tooltipDataAttrs;return"function"==typeof t?t(e):t}},{key:"getTransformForWeek",value:function(e){return this.props.horizontal?"translate("+e*this.getSquareSizeWithGutter()+", 0)":"translate(0, "+e*this.getSquareSizeWithGutter()+")"}},{key:"getTransformForMonthLabels",value:function(){return this.props.horizontal?null:"translate("+(this.getWeekWidth()+g)+", 0)"}},{key:"getTransformForAllWeeks",value:function(){return this.props.horizontal?"translate(0, "+this.getMonthLabelSize()+")":null}},{key:"getViewBox",value:function(){return this.props.horizontal?"0 0 "+this.getWidth()+" "+this.getHeight():"0 0 "+this.getHeight()+" "+this.getWidth()}},{key:"getSquareCoordinates",value:function(e){return this.props.horizontal?[0,e*this.getSquareSizeWithGutter()]:[e*this.getSquareSizeWithGutter(),0]}},{key:"getMonthLabelCoordinates",value:function(e){if(this.props.horizontal)return[e*this.getSquareSizeWithGutter(),this.getMonthLabelSize()-g];var t=-2;return[0,(e+1)*this.getSquareSizeWithGutter()+t]}},{key:"handleClick",value:function(e){this.props.onClick&&this.props.onClick(e)}},{key:"renderSquare",value:function(e,t){var r=t<this.getNumEmptyDaysAtStart()||t>=this.getNumEmptyDaysAtStart()+this.props.numDays;if(r&&!this.props.showOutOfRangeDays)return null;var n=this.getSquareCoordinates(e),o=s(n,2),a=o[0],u=o[1];return f.default.createElement("rect",i({key:t,width:m,height:m,x:a,y:u,title:this.getTitleForIndex(t),className:this.getClassNameForIndex(t),onClick:this.handleClick.bind(this,this.getValueForIndex(t))},this.getTooltipDataAttrsForIndex(t)))}},{key:"renderWeek",value:function(e){var t=this;return f.default.createElement("g",{key:e,transform:this.getTransformForWeek(e)},(0,p.default)(v.DAYS_IN_WEEK).map(function(r){return t.renderSquare(r,e*v.DAYS_IN_WEEK+r)}))}},{key:"renderAllWeeks",value:function(){var e=this;return(0,p.default)(this.getWeekCount()).map(function(t){return e.renderWeek(t)})}},{key:"renderMonthLabels",value:function(){var e=this;if(!this.props.showMonthLabels)return null;var t=(0,p.default)(this.getWeekCount()-1);return t.map(function(t){var r=(0,y.shiftDate)(e.getStartDateWithEmptyDays(),(t+1)*v.DAYS_IN_WEEK),n=e.getMonthLabelCoordinates(t),o=s(n,2),a=o[0],u=o[1];return r.getDate()>=1&&r.getDate()<=v.DAYS_IN_WEEK?f.default.createElement("text",{key:t,x:a,y:u},v.MONTH_LABELS[r.getMonth()]):null})}},{key:"render",value:function(){return f.default.createElement("svg",{className:"react-calendar-heatmap",viewBox:this.getViewBox()},f.default.createElement("g",{transform:this.getTransformForMonthLabels()},this.renderMonthLabels()),f.default.createElement("g",{transform:this.getTransformForAllWeeks()},this.renderAllWeeks()))}}]),t}(f.default.Component);b.propTypes={values:c.PropTypes.arrayOf(c.PropTypes.shape({date:c.PropTypes.oneOfType([c.PropTypes.string,c.PropTypes.number,c.PropTypes.instanceOf(Date)]).isRequired}).isRequired).isRequired,numDays:c.PropTypes.number,endDate:c.PropTypes.oneOfType([c.PropTypes.string,c.PropTypes.number,c.PropTypes.instanceOf(Date)]),gutterSize:c.PropTypes.number,horizontal:c.PropTypes.bool,showMonthLabels:c.PropTypes.bool,showOutOfRangeDays:c.PropTypes.bool,tooltipDataAttrs:c.PropTypes.oneOfType([c.PropTypes.object,c.PropTypes.func]),titleForValue:c.PropTypes.func,classForValue:c.PropTypes.func,onClick:c.PropTypes.func},b.defaultProps={numDays:200,endDate:new Date,gutterSize:1,horizontal:!0,showMonthLabels:!0,showOutOfRangeDays:!1,classForValue:function(e){return e?"color-filled":"color-empty"}},t.default=b},function(t,r){t.exports=e},function(e,t){function r(e,t,r,n){for(var o=-1,a=S(P((t-e)/(r||1)),0),u=Array(a);a--;)u[n?a:++o]=e,e+=r;return u}function n(e){return function(t,n,o){return o&&"number"!=typeof o&&a(t,n,o)&&(n=o=void 0),t=p(t),void 0===n?(n=t,t=0):n=p(n),o=void 0===o?t<n?1:-1:p(o),r(t,n,o,e)}}function o(e,t){return t=null==t?v:t,!!t&&("number"==typeof e||A.test(e))&&e>-1&&e%1==0&&e<t}function a(e,t,r){if(!c(r))return!1;var n=typeof t;return!!("number"==n?i(r)&&o(t,r.length):"string"==n&&t in r)&&u(r[t],e)}function u(e,t){return e===t||e!==e&&t!==t}function i(e){return null!=e&&l(e.length)&&!s(e)}function s(e){var t=c(e)?R.call(e):"";return t==g||t==b}function l(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=v}function c(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function f(e){return!!e&&"object"==typeof e}function d(e){return"symbol"==typeof e||f(e)&&R.call(e)==O}function p(e){if(!e)return 0===e?e:0;if(e=_(e),e===h||e===-h){var t=e<0?-1:1;return t*y}return e===e?e:0}function _(e){if("number"==typeof e)return e;if(d(e))return m;if(c(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=c(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(E,"");var r=w.test(e);return r||T.test(e)?C(e.slice(2),r?2:8):j.test(e)?m:+e}var h=1/0,v=9007199254740991,y=1.7976931348623157e308,m=NaN,g="[object Function]",b="[object GeneratorFunction]",O="[object Symbol]",E=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,T=/^0o[0-7]+$/i,A=/^(?:0|[1-9]\d*)$/,C=parseInt,D=Object.prototype,R=D.toString,P=Math.ceil,S=Math.max,k=n();e.exports=k},function(e,t,r){(function(e,r){function n(e,t,r,n){var o=-1,a=e?e.length:0;for(n&&a&&(r=e[++o]);++o<a;)r=t(r,e[o],o,e);return r}function o(e,t){for(var r=-1,n=e?e.length:0;++r<n;)if(t(e[r],r,e))return!0;return!1}function a(e){return function(t){return null==t?void 0:t[e]}}function u(e,t,r,n,o){return o(e,function(e,o,a){r=n?(n=!1,e):t(r,e,o,a)}),r}function i(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function s(e){return function(t){return e(t)}}function l(e,t){return null==e?void 0:e[t]}function c(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function f(e){var t=-1,r=Array(e.size);return e.forEach(function(e,n){r[++t]=[n,e]}),r}function d(e,t){return function(r){return e(t(r))}}function p(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}function _(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function h(){this.__data__=nr?nr(null):{}}function v(e){return this.has(e)&&delete this.__data__[e]}function y(e){var t=this.__data__;if(nr){var r=t[e];return r===Fe?void 0:r}return Kt.call(t,e)?t[e]:void 0}function m(e){var t=this.__data__;return nr?void 0!==t[e]:Kt.call(t,e)}function g(e,t){var r=this.__data__;return r[e]=nr&&void 0===t?Fe:t,this}function b(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function O(){this.__data__=[]}function E(e){var t=this.__data__,r=F(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():$t.call(t,r,1),!0}function j(e){var t=this.__data__,r=F(t,e);return r<0?void 0:t[r][1]}function w(e){return F(this.__data__,e)>-1}function T(e,t){var r=this.__data__,n=F(r,e);return n<0?r.push([e,t]):r[n][1]=t,this}function A(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function C(){this.__data__={hash:new _,map:new(Qt||b),string:new _}}function D(e){return ce(this,e).delete(e)}function R(e){return ce(this,e).get(e)}function P(e){return ce(this,e).has(e)}function S(e,t){return ce(this,e).set(e,t),this}function k(e){var t=-1,r=e?e.length:0;for(this.__data__=new A;++t<r;)this.add(e[t])}function N(e){return this.__data__.set(e,Fe),this}function x(e){return this.__data__.has(e)}function L(e){this.__data__=new b(e)}function M(){this.__data__=new b}function U(e){return this.__data__.delete(e)}function H(e){return this.__data__.get(e)}function W(e){return this.__data__.has(e)}function I(e,t){var r=this.__data__;if(r instanceof b){var n=r.__data__;if(!Qt||n.length<Ie-1)return n.push([e,t]),this;r=this.__data__=new A(n)}return r.set(e,t),this}function z(e,t){var r=vr(e)||Ae(e)?i(e.length,String):[],n=r.length,o=!!n;for(var a in e)!t&&!Kt.call(e,a)||o&&("length"==a||_e(a,n))||r.push(a);return r}function F(e,t){for(var r=e.length;r--;)if(Te(e[r][0],t))return r;return-1}function V(e,t){return e&&pr(e,t,Ue)}function K(e,t){t=he(t,e)?[t]:oe(t);for(var r=0,n=t.length;null!=e&&r<n;)e=e[Oe(t[r++])];return r&&r==n?e:void 0}function G(e){return Gt.call(e)}function q(e,t){return null!=e&&t in Object(e)}function Y(e,t,r,n,o){return e===t||(null==e||null==t||!Se(e)&&!ke(t)?e!==e&&t!==t:B(e,t,Y,r,n,o))}function B(e,t,r,n,o,a){var u=vr(e),i=vr(t),s=Be,l=Be;u||(s=_r(e),s=s==Ye?rt:s),i||(l=_r(t),l=l==Ye?rt:l);var f=s==rt&&!c(e),d=l==rt&&!c(t),p=s==l;if(p&&!f)return a||(a=new L),u||yr(e)?ie(e,t,r,n,o,a):se(e,t,s,r,n,o,a);if(!(o&Ke)){var _=f&&Kt.call(e,"__wrapped__"),h=d&&Kt.call(t,"__wrapped__");if(_||h){var v=_?e.value():e,y=h?t.value():t;return a||(a=new L),r(v,y,n,o,a)}}return!!p&&(a||(a=new L),le(e,t,r,n,o,a))}function Z(e,t,r,n){var o=r.length,a=o,u=!n;if(null==e)return!a;for(e=Object(e);o--;){var i=r[o];if(u&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++o<a;){i=r[o];var s=i[0],l=e[s],c=i[1];if(u&&i[2]){if(void 0===l&&!(s in e))return!1}else{var f=new L;if(n)var d=n(l,c,s,e,t,f);if(!(void 0===d?Y(c,l,n,Ve|Ke,f):d))return!1}}return!0}function $(e){if(!Se(e)||ye(e))return!1;var t=Re(e)||c(e)?qt:At;return t.test(Ee(e))}function X(e){return ke(e)&&Pe(e.length)&&!!Dt[Gt.call(e)]}function J(e){return"function"==typeof e?e:null==e?He:"object"==typeof e?vr(e)?te(e[0],e[1]):ee(e):We(e)}function Q(e){if(!me(e))return Xt(e);var t=[];for(var r in Object(e))Kt.call(e,r)&&"constructor"!=r&&t.push(r);return t}function ee(e){var t=fe(e);return 1==t.length&&t[0][2]?be(t[0][0],t[0][1]):function(r){return r===e||Z(r,e,t)}}function te(e,t){return he(e)&&ge(t)?be(Oe(e),t):function(r){var n=Le(r,e);return void 0===n&&n===t?Me(r,e):Y(t,n,void 0,Ve|Ke)}}function re(e){return function(t){return K(t,e)}}function ne(e){if("string"==typeof e)return e;if(Ne(e))return fr?fr.call(e):"";var t=e+"";return"0"==t&&1/e==-Ge?"-0":t}function oe(e){return vr(e)?e:hr(e)}function ae(e,t){return function(r,n){if(null==r)return r;if(!Ce(r))return e(r,n);for(var o=r.length,a=t?o:-1,u=Object(r);(t?a--:++a<o)&&n(u[a],a,u)!==!1;);return r}}function ue(e){return function(t,r,n){for(var o=-1,a=Object(t),u=n(t),i=u.length;i--;){var s=u[e?i:++o];if(r(a[s],s,a)===!1)break}return t}}function ie(e,t,r,n,a,u){var i=a&Ke,s=e.length,l=t.length;if(s!=l&&!(i&&l>s))return!1;var c=u.get(e);if(c&&u.get(t))return c==t;var f=-1,d=!0,p=a&Ve?new k:void 0;for(u.set(e,t),u.set(t,e);++f<s;){var _=e[f],h=t[f];if(n)var v=i?n(h,_,f,t,e,u):n(_,h,f,e,t,u);if(void 0!==v){if(v)continue;d=!1;break}if(p){if(!o(t,function(e,t){if(!p.has(t)&&(_===e||r(_,e,n,a,u)))return p.add(t)})){d=!1;break}}else if(_!==h&&!r(_,h,n,a,u)){d=!1;break}}return u.delete(e),u.delete(t),d}function se(e,t,r,n,o,a,u){switch(r){case ct:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case lt:return!(e.byteLength!=t.byteLength||!n(new Bt(e),new Bt(t)));case Ze:case $e:case tt:return Te(+e,+t);case Xe:return e.name==t.name&&e.message==t.message;case ot:case ut:return e==t+"";case et:var i=f;case at:var s=a&Ke;if(i||(i=p),e.size!=t.size&&!s)return!1;var l=u.get(e);if(l)return l==t;a|=Ve,u.set(e,t);var c=ie(i(e),i(t),n,o,a,u);return u.delete(e),c;case it:if(cr)return cr.call(e)==cr.call(t)}return!1}function le(e,t,r,n,o,a){var u=o&Ke,i=Ue(e),s=i.length,l=Ue(t),c=l.length;if(s!=c&&!u)return!1;for(var f=s;f--;){var d=i[f];if(!(u?d in t:Kt.call(t,d)))return!1}var p=a.get(e);if(p&&a.get(t))return p==t;var _=!0;a.set(e,t),a.set(t,e);for(var h=u;++f<s;){d=i[f];var v=e[d],y=t[d];if(n)var m=u?n(y,v,d,t,e,a):n(v,y,d,e,t,a);if(!(void 0===m?v===y||r(v,y,n,o,a):m)){_=!1;break}h||(h="constructor"==d)}if(_&&!h){var g=e.constructor,b=t.constructor;g!=b&&"constructor"in e&&"constructor"in t&&!("function"==typeof g&&g instanceof g&&"function"==typeof b&&b instanceof b)&&(_=!1)}return a.delete(e),a.delete(t),_}function ce(e,t){var r=e.__data__;return ve(t)?r["string"==typeof t?"string":"hash"]:r.map}function fe(e){for(var t=Ue(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,ge(o)]}return t}function de(e,t){var r=l(e,t);return $(r)?r:void 0}function pe(e,t,r){t=he(t,e)?[t]:oe(t);for(var n,o=-1,a=t.length;++o<a;){var u=Oe(t[o]);if(!(n=null!=e&&r(e,u)))break;e=e[u]}if(n)return n;var a=e?e.length:0;return!!a&&Pe(a)&&_e(u,a)&&(vr(e)||Ae(e))}function _e(e,t){return t=null==t?qe:t,!!t&&("number"==typeof e||Ct.test(e))&&e>-1&&e%1==0&&e<t}function he(e,t){if(vr(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ne(e))||Ot.test(e)||!bt.test(e)||null!=t&&e in Object(t)}function ve(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function ye(e){return!!Ft&&Ft in e}function me(e){var t=e&&e.constructor,r="function"==typeof t&&t.prototype||It;return e===r}function ge(e){return e===e&&!Se(e)}function be(e,t){return function(r){return null!=r&&r[e]===t&&(void 0!==t||e in Object(r))}}function Oe(e){if("string"==typeof e||Ne(e))return e;var t=e+"";return"0"==t&&1/e==-Ge?"-0":t}function Ee(e){if(null!=e){try{return Vt.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function je(e,t,r){var o=vr(e)?n:u,a=arguments.length<3;return o(e,J(t,4),r,a,dr)}function we(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError(ze);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var u=e.apply(this,n);return r.cache=a.set(o,u),u};return r.cache=new(we.Cache||A),r}function Te(e,t){return e===t||e!==e&&t!==t}function Ae(e){return De(e)&&Kt.call(e,"callee")&&(!Zt.call(e,"callee")||Gt.call(e)==Ye)}function Ce(e){return null!=e&&Pe(e.length)&&!Re(e)}function De(e){return ke(e)&&Ce(e)}function Re(e){var t=Se(e)?Gt.call(e):"";return t==Je||t==Qe}function Pe(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=qe}function Se(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ke(e){return!!e&&"object"==typeof e}function Ne(e){return"symbol"==typeof e||ke(e)&&Gt.call(e)==it}function xe(e){return null==e?"":ne(e)}function Le(e,t,r){var n=null==e?void 0:K(e,t);return void 0===n?r:n}function Me(e,t){return null!=e&&pe(e,t,q)}function Ue(e){return Ce(e)?z(e):Q(e)}function He(e){return e}function We(e){return he(e)?a(Oe(e)):re(e)}var Ie=200,ze="Expected a function",Fe="__lodash_hash_undefined__",Ve=1,Ke=2,Ge=1/0,qe=9007199254740991,Ye="[object Arguments]",Be="[object Array]",Ze="[object Boolean]",$e="[object Date]",Xe="[object Error]",Je="[object Function]",Qe="[object GeneratorFunction]",et="[object Map]",tt="[object Number]",rt="[object Object]",nt="[object Promise]",ot="[object RegExp]",at="[object Set]",ut="[object String]",it="[object Symbol]",st="[object WeakMap]",lt="[object ArrayBuffer]",ct="[object DataView]",ft="[object Float32Array]",dt="[object Float64Array]",pt="[object Int8Array]",_t="[object Int16Array]",ht="[object Int32Array]",vt="[object Uint8Array]",yt="[object Uint8ClampedArray]",mt="[object Uint16Array]",gt="[object Uint32Array]",bt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ot=/^\w*$/,Et=/^\./,jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wt=/[\\^$.*+?()[\]{}|]/g,Tt=/\\(\\)?/g,At=/^\[object .+?Constructor\]$/,Ct=/^(?:0|[1-9]\d*)$/,Dt={};Dt[ft]=Dt[dt]=Dt[pt]=Dt[_t]=Dt[ht]=Dt[vt]=Dt[yt]=Dt[mt]=Dt[gt]=!0,Dt[Ye]=Dt[Be]=Dt[lt]=Dt[Ze]=Dt[ct]=Dt[$e]=Dt[Xe]=Dt[Je]=Dt[et]=Dt[tt]=Dt[rt]=Dt[ot]=Dt[at]=Dt[ut]=Dt[st]=!1;var Rt="object"==typeof e&&e&&e.Object===Object&&e,Pt="object"==typeof self&&self&&self.Object===Object&&self,St=Rt||Pt||Function("return this")(),kt="object"==typeof t&&t&&!t.nodeType&&t,Nt=kt&&"object"==typeof r&&r&&!r.nodeType&&r,xt=Nt&&Nt.exports===kt,Lt=xt&&Rt.process,Mt=function(){try{return Lt&&Lt.binding("util")}catch(e){}}(),Ut=Mt&&Mt.isTypedArray,Ht=Array.prototype,Wt=Function.prototype,It=Object.prototype,zt=St["__core-js_shared__"],Ft=function(){var e=/[^.]+$/.exec(zt&&zt.keys&&zt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Vt=Wt.toString,Kt=It.hasOwnProperty,Gt=It.toString,qt=RegExp("^"+Vt.call(Kt).replace(wt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Yt=St.Symbol,Bt=St.Uint8Array,Zt=It.propertyIsEnumerable,$t=Ht.splice,Xt=d(Object.keys,Object),Jt=de(St,"DataView"),Qt=de(St,"Map"),er=de(St,"Promise"),tr=de(St,"Set"),rr=de(St,"WeakMap"),nr=de(Object,"create"),or=Ee(Jt),ar=Ee(Qt),ur=Ee(er),ir=Ee(tr),sr=Ee(rr),lr=Yt?Yt.prototype:void 0,cr=lr?lr.valueOf:void 0,fr=lr?lr.toString:void 0;_.prototype.clear=h,_.prototype.delete=v,_.prototype.get=y,_.prototype.has=m,_.prototype.set=g,b.prototype.clear=O,b.prototype.delete=E,b.prototype.get=j,b.prototype.has=w,b.prototype.set=T,A.prototype.clear=C,A.prototype.delete=D,A.prototype.get=R,A.prototype.has=P,A.prototype.set=S,k.prototype.add=k.prototype.push=N,k.prototype.has=x,L.prototype.clear=M,L.prototype.delete=U,L.prototype.get=H,L.prototype.has=W,L.prototype.set=I;var dr=ae(V),pr=ue(),_r=G;(Jt&&_r(new Jt(new ArrayBuffer(1)))!=ct||Qt&&_r(new Qt)!=et||er&&_r(er.resolve())!=nt||tr&&_r(new tr)!=at||rr&&_r(new rr)!=st)&&(_r=function(e){var t=Gt.call(e),r=t==rt?e.constructor:void 0,n=r?Ee(r):void 0;if(n)switch(n){case or:return ct;case ar:return et;case ur:return nt;case ir:return at;case sr:return st}return t});var hr=we(function(e){e=xe(e);var t=[];return Et.test(e)&&t.push(""),e.replace(jt,function(e,r,n,o){t.push(n?o.replace(Tt,"$1"):r||e)}),t});we.Cache=A;var vr=Array.isArray,yr=Ut?s(Ut):X;r.exports=je}).call(t,function(){return this}(),r(5)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],
e.webpackPolyfill=1),e}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MILLISECONDS_IN_ONE_DAY=864e5,t.DAYS_IN_WEEK=7,t.MONTH_LABELS={0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec"}},function(e,t){"use strict";function r(e,t){var r=new Date(e);return r.setDate(r.getDate()+t),r}function n(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function o(e){return e instanceof Date?e:new Date(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.shiftDate=r,t.getBeginningTimeForDate=n,t.convertToDate=o}])})},"Xm/7":function(e,t,r){function n(e){return e&&e.length?o(e,a):0}var o=r("4RiB"),a=r("wSKX");e.exports=n},fExO:function(e,t){e.exports={border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)",root:"styles_root-3Hjcq"}},mU3Z:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a,u,i=r("Zx67"),s=n(i),l=r("Zrlr"),c=n(l),f=r("wxAW"),d=n(f),p=r("zwoO"),_=n(p),h=r("Pf15"),v=n(h),y=r("Q7hp"),m=n(y),g=r("U7vG"),b=n(g),O=r("4n+p"),E=r("YapR"),j=n(E),w=r("6VdP"),T=r("7L04"),A=n(T),C=r("frFe"),D=function(e,t){var r=e.users,n=e.projects,o=e.history,a=e.syncTimeline,u=t.params,i=t.location,s=20,l=i.query.page||1,c="users-"+u.stub,f="users-"+u.stub+"-"+l;return{size:s,page:l,historyCacheKey:c,history:o[c],user:r[u.stub],projects:n.userProjects[u.stub]||{},timeline:(0,m.default)(a,[f],{}),timelineCacheKey:f}},R={getHistory:w.getHistory,fetchTimeline:C.fetchTimeline},P=[{hasChanged:"historyCacheKey",onChange:function(e){e.getHistory({entityType:"user",entityId:e.params.stub,cacheKey:e.historyCacheKey})}},{hasChanged:"timelineCacheKey",onChange:function(e){e.fetchTimeline({entityId:e.params.stub,entityType:"user",size:e.size,page:e.page,cacheKey:e.timelineCacheKey})}}],S=(o=(0,O.connect)(D,R),a=(0,j.default)(P),o(u=a(u=function(e){function t(){return(0,c.default)(this,t),(0,_.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return b.default.createElement(A.default,this.props)}}]),t}(g.Component))||u)||u);t.default=S;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(S,"UserOverviewContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserOverview/UserOverview.container.js"),__REACT_HOT_LOADER__.register(D,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserOverview/UserOverview.container.js"),__REACT_HOT_LOADER__.register(R,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserOverview/UserOverview.container.js"),__REACT_HOT_LOADER__.register(P,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserOverview/UserOverview.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});