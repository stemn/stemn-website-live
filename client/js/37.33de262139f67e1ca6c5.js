webpackJsonp([37,62],{"1cxV":function(e,t){e.exports={panel:"UserFollowing_panel-2WFhH",user:"UserFollowing_user-2WyON"}},F21s:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,i,a,d,u=s("Dd8w"),_=n(u),l=s("+6Bu"),f=n(l),c=s("Zx67"),p=n(c),g=s("Zrlr"),m=n(g),w=s("wxAW"),O=n(w),R=s("zwoO"),E=n(R),T=s("Pf15"),U=n(T),A=s("U7vG"),v=n(A),C=s("4n+p"),h=s("YapR"),y=n(h),F=s("y+89"),H=s("/AxA"),L=n(H),D=function(e,t){var s=e.users,n=t.userId;return{user:s[n]}},j={getUser:F.getUser},b=[{hasChanged:"userId",onChange:function(e){e.getUser({userId:e.userId,size:"md"})}}],P=(r=(0,C.connect)(D,j),o=(0,y.default)(b),r(i=o((d=a=function(e){function t(){return(0,m.default)(this,t),(0,E.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}return(0,U.default)(t,e),(0,O.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,s=(0,f.default)(e,["user"]);return v.default.createElement(L.default,(0,_.default)({data:t.data,loading:t.loading},s))}}]),t}(A.Component),a.defaultProps={user:{}},i=d))||i)||i);t.default=P;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(P,"UserRowContainer","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"),__REACT_HOT_LOADER__.register(D,"stateToProps","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"),__REACT_HOT_LOADER__.register(j,"dispatchToProps","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"),__REACT_HOT_LOADER__.register(b,"fetchConfigs","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},JHWm:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=t.getUserFollowing=function(e){var t=e.userId,s=e.page,n=void 0===s?1:s,r=e.size;return{type:"USER_FOLLOWING/GET_FOLLOWING",http:!0,payload:{method:"GET",url:"api/v1/social",params:{parentType:"user",childType:"user",childId:t,socialType:"follow",size:r,page:n}},meta:{userId:t,page:n}}};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(s,"getUserFollowing","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserFollowing/UserFollowing.actions.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},JoCH:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s("s6Wy"),o=n(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},e85t:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s("F21s"),o=n(r);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},s6Wy:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,i,a=s("Zx67"),d=n(a),u=s("Zrlr"),_=n(u),l=s("wxAW"),f=n(l),c=s("zwoO"),p=n(c),g=s("Pf15"),m=n(g),w=s("Q7hp"),O=n(w),R=s("U7vG"),E=n(R),T=s("4n+p"),U=s("YapR"),A=n(U),v=s("JHWm"),C=s("tcrP"),h=n(C),y=function(e,t){var s=t.params,n=t.location,r=30,o=s.stub,i=parseInt(n.query.page||1),a=(0,O.default)(e,"userFollowing."+o+"."+i);return{items:a,page:i,pageId:o+"-"+i,size:r,user:e.users[s.stub],userId:o}},F={getUserFollowing:v.getUserFollowing},H=[{hasChanged:"pageId",onChange:function(e){e.getUserFollowing({userId:e.userId,page:e.page,size:e.size})}}],L=(r=(0,T.connect)(y,F),o=(0,A.default)(H),r(i=o(i=function(e){function t(){return(0,_.default)(this,t),(0,p.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){return E.default.createElement(h.default,this.props)}}]),t}(R.Component))||i)||i);t.default=L;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(L,"UserFollowingContainer","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowing/UserFollowing.container.js"),__REACT_HOT_LOADER__.register(y,"stateToProps","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowing/UserFollowing.container.js"),__REACT_HOT_LOADER__.register(F,"dispatchToProps","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowing/UserFollowing.container.js"),__REACT_HOT_LOADER__.register(H,"fetchConfigs","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowing/UserFollowing.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},tcrP:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s("Zx67"),o=n(r),i=s("Zrlr"),a=n(i),d=s("wxAW"),u=n(d),_=s("zwoO"),l=n(_),f=s("Pf15"),c=n(f),p=s("U7vG"),g=n(p),m=s("1cxV"),w=n(m),O=s("HW6M"),R=(n(O),s("n4OE")),E=n(R),T=s("e85t"),U=n(T),A=function(e){function t(){return(0,a.default)(this,t),(0,l.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,s=e.items,n=e.page,r=e.size,o=e.location,i=s&&s.data&&s.data.length<r;return g.default.createElement("div",null,g.default.createElement("div",{className:"text-mini-caps"},"People who ",t.data.profile.firstname," follows"),g.default.createElement("br",null),g.default.createElement("div",{className:w.default.panel},s&&s.data?s.data.map(function(e){return g.default.createElement(U.default,{key:e,userId:e,className:w.default.user})}):null),g.default.createElement(E.default,{path:o.pathname,page:n,noMoreResults:i}))}}]),t}(p.Component);t.default=A;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(A,"UserFollowing","C:/Users/david/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowing/UserFollowing.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});