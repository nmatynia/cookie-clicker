(this["webpackJsonpcookie-clicker"]=this["webpackJsonpcookie-clicker"]||[]).push([[0],[,,,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},,function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/picture.18820570.png"},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),r=t(4),s=t.n(r),i=(t(9),t(2)),a=(t(10),t(11),t(12),t(0));function u(e){return Object(a.jsx)("div",{className:"cookieContainer",children:Object(a.jsx)("img",{src:t(14).default,alt:"cookie",onClick:e.onClick,onMouseDown:e.onMouseDown,onAnimationEnd:e.onAnimationEnd,className:"cookiePicture ".concat(e.cookieClickedClassName)})})}t(15);function d(e){var n=0===e.workerPerSecond?"Buy":"Upgrade";return Object(a.jsx)("div",{className:"upgrades",children:Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsxs)("button",{onClick:e.onClick,children:["Upgrade (",e.cost,")"]}),Object(a.jsxs)("button",{onClick:e.onUpgradePerSecond,children:[n," +",e.workerPerSecond," score per second (",e.costPerSecond,")"]})]})})}t(16);function j(e){return Object(a.jsxs)("div",{className:"stats",children:[Object(a.jsxs)("p",{className:"stat",children:["Current click power: ",e.upgrade]}),Object(a.jsxs)("p",{className:"stat",children:["Score per second: ",e.upgradePerSecond]}),Object(a.jsxs)("p",{className:"stat",children:["Score: ",e.counter]})]})}function l(){var e=Object(c.useState)(1),n=Object(i.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(1),s=Object(i.a)(r,2),l=s[0],b=s[1],O=Object(c.useState)(10),f=Object(i.a)(O,2),k=f[0],p=f[1],h=Object(c.useState)(50),S=Object(i.a)(h,2),m=S[0],g=S[1],C=Object(c.useState)(0),x=Object(i.a)(C,2),v=x[0],P=x[1],N=Object(c.useState)(!1),w=Object(i.a)(N,2),M=w[0],E=w[1];return Object(c.useEffect)((function(){var e=setInterval((function(){o((function(e){return e+v}))}),1e3);return function(){return clearInterval(e)}}),[v]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(d,{onClick:function(){t>=k&&(o(t-k),b(l+1),p(Math.round(2*k)))},cost:k,onUpgradePerSecond:function(){t>=m&&(0===v?(P(1),o(t-m),g(Math.round(2*m))):(o(t-m),P((function(e){return 2*e})),g(Math.round(2*m))))},workerPerSecond:v,costPerSecond:m}),Object(a.jsx)(u,{onClick:function(){o(t+l)},onMouseDown:function(){E(!0)},cookieClickedClassName:M?"cookieClicked":"",onAnimationEnd:function(){E(!1)}}),Object(a.jsx)(j,{counter:t,upgrade:l,upgradePerSecond:v})]})}var b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),c(e),o(e),r(e),s(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root")),b()}],[[17,1,2]]]);
//# sourceMappingURL=main.2cf16877.chunk.js.map