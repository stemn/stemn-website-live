webpackJsonp([32,59],{"2AJQ":function(e,t){e.exports={table:"PricingTable_table-aGogi",important:"PricingTable_important-xmW-g",price:"PricingTable_price-2fUVs",period:"PricingTable_period-2skxP",type:"PricingTable_type-11Sm-",description:"PricingTable_description-2Qj5m"}},"7qLQ":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r,l=n("Zx67"),o=a(l),s=n("Zrlr"),c=a(s),u=n("wxAW"),d=a(u),f=n("zwoO"),p=a(f),_=n("Pf15"),m=a(_),E=n("U7vG"),g=a(E),T=n("4n+p"),b=n("x/8Q"),O=a(b),A=function(){return{}},P={},y=(i=(0,T.connect)(A,P),i(r=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return g.default.createElement(O.default,this.props)}}]),t}(E.Component))||r);t.default=y;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(y,"PricingContainer","/home/jackson/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Pricing/Pricing.container.js"),__REACT_HOT_LOADER__.register(A,"stateToProps","/home/jackson/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Pricing/Pricing.container.js"),__REACT_HOT_LOADER__.register(P,"dispatchToProps","/home/jackson/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Pricing/Pricing.container.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},Awp0:function(e,t){e.exports={tables:"Pricing_tables-2TW3J",currencyInfo:"Pricing_currencyInfo-3r7K4",changePlan:"Pricing_changePlan-34Eb2"}},"FM/p":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("bOdI"),r=a(i),l=n("Zx67"),o=a(l),s=n("Zrlr"),c=a(s),u=n("wxAW"),d=a(u),f=n("zwoO"),p=a(f),_=n("Pf15"),m=a(_),E=n("U7vG"),g=a(E),T=n("2AJQ"),b=a(T),O=n("Xu4g"),A=a(O),P=n("HW6M"),y=a(P),v=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.important,n=e.data;return g.default.createElement("div",{className:(0,y.default)("flex","flex-sm-50 layout-column",b.default.table,(0,r.default)({},b.default.important,t))},g.default.createElement("div",{className:b.default.price},"number"==typeof n.price?"$"+n.price:n.price),g.default.createElement("div",{className:b.default.period},n.period),g.default.createElement("div",{className:b.default.type},n.type),g.default.createElement("div",{className:b.default.description},n.description),g.default.createElement("ul",null,n.features.map(function(e,t){return g.default.createElement("li",{key:t},g.default.createElement(A.default,null),e)})))}}]),t}(E.Component);t.default=v;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(v,"PricingTable","/home/jackson/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Billing/PricingTable/PricingTable.jsx")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},VsEB:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("7qLQ"),r=a(i);t.default=r.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},sE0Z:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.pricingTableData=[{price:"FREE",period:"Forever",type:"Open-source",description:"For public projects",features:["Personal Account","Unlimited public projects","One private project"]},{price:129,period:"Per Month",type:"Solo",description:"Ideal for personal projects",features:["Personal Account","Unlimited public projects","Unlimited private projects"]},{price:299,period:"Per User / Month",type:"Team",description:"Great for consultancy",features:["Team Account","Unlimited public projects","Unlimited private projects","External Collaborators","Business Support"]},{price:999,period:"Per User / Month",type:"Enterprise",description:"Scalable, Secure, On-Premise",features:["Organisation Account","On-Premise File Storage","Extended Version History","Uptime SLAs","Auditing and Compliance","Premium Support"]}],a=t.plansData=[{name:"Stemn Beta",description:"Unlimited public, private and collaborators for a limited time."},{name:"Open Source",description:"Unlimited public projects",disabled:!0},{name:"Solo",description:"Unlimited public and private projects",disabled:!0},{name:"Team",description:"Unlimited public, private projects and collaborators",disabled:!0}];(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"pricingTableData","/home/jackson/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Billing/Billing.data.js"),__REACT_HOT_LOADER__.register(a,"plansData","/home/jackson/repositories/stemn/stemn-frontend/websiteNew/node_modules/stemn-frontend-shared/src/misc/Billing/Billing.data.js"))})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},wjyj:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("FM/p"),r=a(i);t.default=r.default;(function(){"undefined"==typeof __REACT_HOT_LOADER__})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()},"x/8Q":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("Zx67"),r=a(i),l=n("Zrlr"),o=a(l),s=n("wxAW"),c=a(s),u=n("zwoO"),d=a(u),f=n("Pf15"),p=a(f),_=n("U7vG"),m=a(_),E=n("cs0U"),g=a(E),T=n("By0I"),b=a(T),O=n("PjCM"),A=n("wjyj"),P=a(A),y=n("sE0Z"),v=n("PIAa"),j=n("Awp0"),h=a(j),R=n("HW6M"),w=a(R),C=function(e){function t(){return(0,o.default)(this,t),(0,d.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return m.default.createElement(g.default,null,m.default.createElement(v.Helmet,null,m.default.createElement("title",null,"Pricing")),m.default.createElement(b.default,null,m.default.createElement("h1",null,"Plans for all workflows"),m.default.createElement("h3",null,"Work together across unlimited private projects with a paid plan")),m.default.createElement(O.Container,null,m.default.createElement("div",{className:(0,w.default)(h.default.tables,"layout-column layout-gt-xs-row layout-wrap")},m.default.createElement(P.default,{data:y.pricingTableData[0]}),m.default.createElement(P.default,{data:y.pricingTableData[1]}),m.default.createElement(P.default,{data:y.pricingTableData[2],important:!0}),m.default.createElement(P.default,{data:y.pricingTableData[3]})),m.default.createElement("div",{className:h.default.currencyInfo},m.default.createElement("div",{className:"text-mini-caps"},"All Prices in USD")),m.default.createElement("div",{className:h.default.changePlan+" layout-column layout-align-center-center"},m.default.createElement("h3",{className:"text-title-2"},m.default.createElement("a",{href:"mailto:sales@stemn.com"},"Contact sales@stemn.com to begin.")),m.default.createElement("h4",{className:"text-title-4"},"While in Beta, all users will have access to the ",m.default.createElement("b",null,"Stemn Beta")," plan offering free public & private projects.",m.default.createElement("br",null),"Other plans will come into effect after the Beta is finished."))))}}]),t}(_.Component);t.default=C;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(C,"Pricing","/home/jackson/repositories/stemn/stemn-frontend/websiteNew/src/client/assets/javascripts/pages/Pricing/Pricing.js")})(),function(){"undefined"==typeof __REACT_HOT_LOADER__}()}});