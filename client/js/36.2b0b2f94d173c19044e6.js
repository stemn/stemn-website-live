webpackJsonp([36,61],{F21s:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o,a,d,i,u=s("Dd8w"),_=r(u),l=s("+6Bu"),f=r(l),c=s("Zx67"),p=r(c),w=s("Zrlr"),O=r(w),R=s("wxAW"),E=r(R),m=s("zwoO"),T=r(m),U=s("Pf15"),A=r(U),v=s("U7vG"),g=r(v),C=s("4n+p"),y=s("YapR"),h=r(y),L=s("y+89"),F=s("/AxA"),j=r(F),D=function(e,t){var s=e.users,r=t.userId;return{user:s[r]}},H={getUser:L.getUser},b=[{hasChanged:"userId",onChange:function(e){e.getUser({userId:e.userId,size:"md"})}}],x=(n=(0,C.connect)(D,H),o=(0,h.default)(b),n(a=o((i=d=function(e){function t(){return(0,O.default)(this,t),(0,T.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}return(0,A.default)(t,e),(0,E.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,s=(0,f.default)(e,["user"]);return g.default.createElement(j.default,(0,_.default)({data:t.data,loading:t.loading},s))}}]),t}(v.Component),d.defaultProps={user:{}},a=i))||a)||a);t.default=x;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(x,"UserRowContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"),__REACT_HOT_LOADER__.register(D,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"),__REACT_HOT_LOADER__.register(H,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"),__REACT_HOT_LOADER__.register(b,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},JxAd:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s("ymx5"),o=r(n);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"QYo+":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=t.getUserFollowers=function(e){var t=e.userId,s=e.page,r=void 0===s?1:s,n=e.size;return{type:"USER_FOLLOWERS/GET_FOLLOWERS",http:!0,payload:{method:"GET",url:"api/v1/social",params:{parentType:"user",parentId:t,socialType:"follow",size:n,page:r}},meta:{userId:t,page:r}}};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(s,"getUserFollowers","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserFollowers/UserFollowers.actions.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},e85t:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s("F21s"),o=r(n);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},tf8j:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s("Zx67"),o=r(n),a=s("Zrlr"),d=r(a),i=s("wxAW"),u=r(i),_=s("zwoO"),l=r(_),f=s("Pf15"),c=r(f),p=s("U7vG"),w=r(p),O=s("yMzO"),R=r(O),E=s("HW6M"),m=(r(E),s("e85t")),T=r(m),U=s("n4OE"),A=r(U),v=function(e){function t(){return(0,d.default)(this,t),(0,l.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,s=e.items,r=e.page,n=e.size,o=e.location,a=s&&s.data&&s.data.length<n;return w.default.createElement("div",null,w.default.createElement("div",{className:"text-mini-caps"},"People who follow ",t.data.profile.firstname),w.default.createElement("br",null),w.default.createElement("div",{className:R.default.panel},s&&s.data?s.data.map(function(e){return w.default.createElement(T.default,{key:e,userId:e,className:R.default.user})}):null),w.default.createElement(A.default,{path:o.pathname,page:r,noMoreResults:a}))}}]),t}(p.Component);t.default=v;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(v,"UserFollowers","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowers/UserFollowers.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},yMzO:function(e,t){e.exports={panel:"UserFollowers_panel-2d6L9",user:"UserFollowers_user-2OXiR"}},ymx5:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o,a,d=s("Zx67"),i=r(d),u=s("Zrlr"),_=r(u),l=s("wxAW"),f=r(l),c=s("zwoO"),p=r(c),w=s("Pf15"),O=r(w),R=s("Q7hp"),E=r(R),m=s("U7vG"),T=r(m),U=s("4n+p"),A=s("YapR"),v=r(A),g=s("QYo+"),C=s("tf8j"),y=r(C),h=function(e,t){var s=t.params,r=t.location,n=30,o=s.stub,a=parseInt(r.query.page||1),d=(0,E.default)(e,"userFollowers."+o+"."+a);return{items:d,page:a,pageId:o+"-"+a,size:n,user:e.users[s.stub],userId:o}},L={getUserFollowers:g.getUserFollowers},F=[{hasChanged:"pageId",onChange:function(e){e.getUserFollowers({userId:e.userId,page:e.page,size:e.size})}}],j=(n=(0,U.connect)(h,L),o=(0,v.default)(F),n(a=o(a=function(e){function t(){return(0,_.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,O.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){return T.default.createElement(y.default,this.props)}}]),t}(m.Component))||a)||a);t.default=j;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(j,"UserFollowersContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowers/UserFollowers.container.js"),__REACT_HOT_LOADER__.register(h,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowers/UserFollowers.container.js"),__REACT_HOT_LOADER__.register(L,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowers/UserFollowers.container.js"),__REACT_HOT_LOADER__.register(F,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowers/UserFollowers.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});