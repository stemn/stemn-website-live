webpackJsonp([34,58],{F21s:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o,a,d,u,i=s("Dd8w"),_=r(i),l=s("+6Bu"),f=r(l),c=s("Zx67"),p=r(c),w=s("Zrlr"),O=r(w),R=s("wxAW"),E=r(R),U=s("zwoO"),m=r(U),A=s("Pf15"),T=r(A),v=s("U7vG"),g=r(v),C=s("4n+p"),h=s("YapR"),y=r(h),L=s("y+89"),F=s("/AxA"),j=r(F),D=function(e,t){var s=e.users,r=t.userId;return{user:s[r]}},H={getUser:L.getUser},b=[{hasChanged:"userId",onChange:function(e){e.getUser({userId:e.userId,size:"md"})}}],x=(n=(0,C.connect)(D,H),o=(0,y.default)(b),n(a=o((u=d=function(e){function t(){return(0,O.default)(this,t),(0,m.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}return(0,T.default)(t,e),(0,E.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,s=(0,f.default)(e,["user"]);return g.default.createElement(j.default,(0,_.default)({data:t.data,loading:t.loading},s))}}]),t}(v.Component),d.defaultProps={user:{}},a=u))||a)||a);t.default=x;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(x,"UserRowContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"),__REACT_HOT_LOADER__.register(D,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"),__REACT_HOT_LOADER__.register(H,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"),__REACT_HOT_LOADER__.register(b,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Users/UserRow/UserRow.container.jsx"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},JxAd:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s("ymx5"),o=r(n);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"QYo+":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=t.getUserFollowers=function(e){var t=e.userId,s=e.size,r=e.page,n=void 0===r?1:r;return{type:"USER_FOLLOWERS/GET_FOLLOWERS",http:!0,payload:{method:"GET",url:"/api/v1/users/"+t+"/follows",params:{type:"user",size:s,page:n}},meta:{userId:t,page:n}}};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(s,"getUserFollowers","C:/Users/david/repositories/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/UserFollowers/UserFollowers.actions.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},e85t:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s("F21s"),o=r(n);t.default=o.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},tf8j:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s("Zx67"),o=r(n),a=s("Zrlr"),d=r(a),u=s("wxAW"),i=r(u),_=s("zwoO"),l=r(_),f=s("Pf15"),c=r(f),p=s("U7vG"),w=r(p),O=s("yMzO"),R=r(O),E=s("HW6M"),U=(r(E),s("e85t")),m=r(U),A=s("n4OE"),T=r(A),v=function(e){function t(){return(0,d.default)(this,t),(0,l.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.user,s=e.followers,r=e.page,n=e.size,o=e.location,a=s&&s.data&&s.data.length<n;return w.default.createElement("div",null,w.default.createElement("div",{className:"text-mini-caps"},"People who follow ",t.data.profile.firstname),w.default.createElement("br",null),w.default.createElement("div",{className:R.default.panel},s&&s.data?s.data.map(function(e){return w.default.createElement(m.default,{key:e,userId:e,className:R.default.user})}):null),w.default.createElement(T.default,{path:o.pathname,page:r,noMoreResults:a}))}}]),t}(p.Component);t.default=v;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(v,"UserFollowers","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowers/UserFollowers.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},yMzO:function(e,t){e.exports={panel:"UserFollowers_panel-2d6L9",user:"UserFollowers_user-2OXiR"}},ymx5:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o,a,d=s("Zx67"),u=r(d),i=s("Zrlr"),_=r(i),l=s("wxAW"),f=r(l),c=s("zwoO"),p=r(c),w=s("Pf15"),O=r(w),R=s("Q7hp"),E=r(R),U=s("U7vG"),m=r(U),A=s("4n+p"),T=s("YapR"),v=r(T),g=s("QYo+"),C=s("tf8j"),h=r(C),y=function(e,t){var s=t.params,r=t.location,n=30,o=s.stub,a=parseInt(r.query.page||1),d=(0,E.default)(e,"userFollowers."+o+"."+a);return{followers:d,page:a,pageId:o+"-"+a,size:n,user:e.users[s.stub],userId:o}},L={getUserFollowers:g.getUserFollowers},F=[{hasChanged:"pageId",onChange:function(e){e.getUserFollowers({userId:e.userId,page:e.page,size:e.size})}}],j=(n=(0,A.connect)(y,L),o=(0,v.default)(F),n(a=o(a=function(e){function t(){return(0,_.default)(this,t),(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,O.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){return m.default.createElement(h.default,this.props)}}]),t}(U.Component))||a)||a);t.default=j;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(j,"UserFollowersContainer","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowers/UserFollowers.container.js"),__REACT_HOT_LOADER__.register(y,"stateToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowers/UserFollowers.container.js"),__REACT_HOT_LOADER__.register(L,"dispatchToProps","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowers/UserFollowers.container.js"),__REACT_HOT_LOADER__.register(F,"fetchConfigs","C:/Users/david/repositories/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/UserFollowers/UserFollowers.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});