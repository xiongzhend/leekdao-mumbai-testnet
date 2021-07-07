(this["webpackJsonpleek-finance-farm"]=this["webpackJsonpleek-finance-farm"]||[]).push([[14],{689:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Z}));var c=t(14),r=t(60),i=t(0),a=t(3),s=t(50),o=t(653),l=t(172),j=t(660),u=t(655),b=t(4),f=t.n(b),d=t(15),x=t(26),m=t(12),O=t.n(m),p=(t(641),t(296)),h=t(83),g=(t(120),t(63),t(38)),v=t(131),w=t(665),z=function(e){var n=e.value,t=e.decimals,r=e.fontSize,a=void 0===r?"40px":r,o=e.prefix,l=Object(w.useCountUp)({start:0,end:n,duration:1,separator:",",decimals:void 0!==t?t:n<0?4:n>1e5?0:3}),j=l.countUp,u=l.update,b=Object(i.useRef)(u);return Object(i.useEffect)((function(){b.current(n)}),[n,b]),Object(c.jsxs)(s.u,{bold:!0,fontSize:a,children:[o,j]})},S=t(177);function k(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return k=function(){return e},e}function T(){var e=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return T=function(){return e},e}var E=Object(a.e)(s.e)(T()),y=a.e.div(k()),L=function(){var e=Object(o.a)(),n=function(){var e=Object(v.a)().slowRefresh,n=Object(i.useState)(),t=Object(x.a)(n,2),c=t[0],r=t[1];return Object(i.useEffect)((function(){function e(){return(e=Object(d.a)(f.a.mark((function e(){var n,t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(h.a)(p,Object(g.a)()),e.next=3,n.methods.totalSupply().call();case 3:t=e.sent,r(new O.a(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),t=function(e){var n=Object(i.useState)(new O.a(0)),t=Object(x.a)(n,2),c=t[0],r=t[1],a=Object(v.a)().slowRefresh;return Object(i.useEffect)((function(){!function(){var e=Object(d.a)(f.a.mark((function e(){var n,t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(h.a)(p,Object(g.a)()),e.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:t=e.sent,r(new O.a(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,a]),c}(Object(g.a)()),r=Object(S.a)(),a=Object(S.b)(),l=n?n.minus(t):new j.a(0),b=Object(u.a)(l),m=a.times(l),w=0;return r&&r[0]&&r[0].leekPerBlock&&(w=new j.a(r[0].leekPerBlock).div(new j.a(10).pow(18)).toNumber()),Object(c.jsx)(E,{children:Object(c.jsxs)(s.f,{children:[Object(c.jsx)(s.j,{size:"xl",mb:"24px",children:e(534,"Leek Stats")}),Object(c.jsxs)(y,{children:[Object(c.jsx)(s.u,{fontSize:"14px",children:e(10005,"Market Cap")}),Object(c.jsx)(z,{fontSize:"14px",value:Object(u.a)(m),decimals:0,prefix:"$"})]}),Object(c.jsxs)(y,{children:[Object(c.jsx)(s.u,{fontSize:"14px",children:e(536,"Total Minted")}),n&&Object(c.jsx)(z,{fontSize:"14px",value:Object(u.a)(n),decimals:0})]}),Object(c.jsxs)(y,{children:[Object(c.jsx)(s.u,{fontSize:"14px",children:e(538,"Total Burned")}),Object(c.jsx)(z,{fontSize:"14px",value:Object(u.a)(t),decimals:0})]}),Object(c.jsxs)(y,{children:[Object(c.jsx)(s.u,{fontSize:"14px",children:e(10004,"Circulating Supply")}),b&&Object(c.jsx)(z,{fontSize:"14px",value:b,decimals:0})]}),Object(c.jsxs)(y,{children:[Object(c.jsx)(s.u,{fontSize:"14px",children:e(540,"New LEEK/block")}),Object(c.jsx)(s.u,{bold:!0,fontSize:"14px",children:w})]})]})})};function R(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]);return R=function(){return e},e}var C=Object(a.e)(s.e)(R()),M=function(){var e=Object(o.a)(),n=Object(S.c)();return Object(c.jsx)(C,{children:Object(c.jsxs)(s.f,{children:[Object(c.jsx)(s.j,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(z,{value:n.toNumber(),prefix:"$",decimals:2}),Object(c.jsx)(s.u,{color:"textSubtle",children:e(999,"Across all Farms and Pools")})]})]})})},Y=t(684);function K(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return K=function(){return e},e}function N(){var e=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return N=function(){return e},e}var D=Object(a.e)(s.e)(N()),A=(a.e.div(K()),function(){var e=Object(o.a)();return Object(c.jsx)(D,{children:Object(c.jsxs)(s.f,{children:[Object(c.jsx)(s.j,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(c.jsx)(Y.a,{dataSource:{sourceType:"profile",screenName:"CryptoLeek"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})}),H=t(661),I=t.n(H),U=t(662),B=t.n(U),F=t(663);function P(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return P=function(){return e},e}function Q(){var e=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return Q=function(){return e},e}var V=Object(a.e)(s.e)(Q()),J=a.e.div(P()),$=function(){var e=Object(i.useState)({cliff:0,releaseTime:0,finalTime:0,nextReleaseTime:0,linearReleaseInterval:0,releaseCount:0,releaseAmount:0,remainingTokens:0}),n=Object(x.a)(e,2),t=n[0],r=n[1],a=Object(v.a)().slowRefresh,o=Object(F.b)(Object(g.f)());Object(i.useEffect)((function(){(function(){var e=Object(d.a)(f.a.mark((function e(){var n,t,c,i,a,s,l,j,u,b;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([o.methods.cliff().call(),o.methods.releaseTime().call(),o.methods.finalTime().call(),o.methods.nextReleaseTime().call(),o.methods.linearReleaseInterval().call(),o.methods.releaseTotalCount().call(),o.methods.releaseAmount().call(),o.methods.remainingTokens().call()]);case 2:n=e.sent,t=Object(x.a)(n,8),c=t[0],i=t[1],a=t[2],s=t[3],l=t[4],j=t[5],u=t[6],b=t[7],r({cliff:c,releaseTime:i,finalTime:a,nextReleaseTime:s,linearReleaseInterval:l,releaseCount:j,releaseAmount:u,remainingTokens:b});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o,r,a]);var l=I.a.utc(1e3*Number(t.releaseTime)).format("MMMM Do YYYY, HH:mm"),b=I()(1e3*Number(t.finalTime)).format("MMMM Do YYYY, HH:mm"),m=I()(1e3*Number(t.nextReleaseTime)).format("MMMM Do YYYY, HH:mm"),O=Number(t.cliff/3600/24).toString(),p=B()(Object(u.a)(new j.a(t.releaseAmount))).format("0,0"),h=B()(Object(u.a)(new j.a(t.remainingTokens))).format("0,0");return Object(c.jsx)(V,{children:Object(c.jsxs)(s.f,{children:[Object(c.jsx)(s.j,{size:"xl",mb:"24px",children:"Leek Vesting Info"}),Object(c.jsxs)(J,{children:[Object(c.jsx)(s.u,{fontSize:"14px",children:"LEEK Release Start Time"}),Object(c.jsx)(s.l,{href:"https://www.timeanddate.com/worldclock/timezone/utc",children:Object(c.jsxs)(s.u,{bold:!0,fontSize:"14px",color:"primary",children:[l," UTC"]})})]}),Object(c.jsxs)(J,{children:[Object(c.jsx)(s.u,{fontSize:"14px",children:"LEEK Release End Time"}),Object(c.jsx)(s.l,{href:"https://www.timeanddate.com/worldclock/timezone/utc",children:Object(c.jsxs)(s.u,{bold:!0,fontSize:"14px",color:"primary",children:[b," UTC"]})})]}),Object(c.jsxs)(J,{children:[Object(c.jsx)(s.u,{fontSize:"14px",children:"Next LEEK Release Date"}),Object(c.jsx)(s.l,{href:"https://www.timeanddate.com/worldclock/timezone/utc",children:Object(c.jsxs)(s.u,{bold:!0,fontSize:"14px",color:"primary",children:[m," UTC"]})})]}),Object(c.jsxs)(J,{children:[Object(c.jsx)(s.u,{fontSize:"14px",children:"LEEK Release Interval"}),Object(c.jsxs)(s.u,{bold:!0,fontSize:"14px",children:[O," Days"]})]}),Object(c.jsxs)(J,{children:[Object(c.jsx)(s.u,{fontSize:"14px",children:"LEEK Release Count "}),Object(c.jsx)(s.u,{bold:!0,fontSize:"14px",children:t.releaseCount})]}),Object(c.jsxs)(J,{children:[Object(c.jsx)(s.u,{fontSize:"14px",children:"LEEK Release Every Time "}),Object(c.jsxs)(s.u,{bold:!0,fontSize:"14px",children:[p," LEEK"]})]}),Object(c.jsxs)(J,{children:[Object(c.jsx)(s.u,{fontSize:"14px",children:"LEEK Locked "}),Object(c.jsxs)(s.u,{bold:!0,fontSize:"14px",children:[h," LEEK"]})]})]})})};function q(){var e=Object(r.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);return q=function(){return e},e}function G(){var e=Object(r.a)(["\n  align-items: center;\n  background-image: url('./images/leek/3.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('./images/leek/3.png'), url('./images/leek/3b.png');\n    background-position: left center, right center;\n    height: 230px;\n    padding-top: 0;\n  }\n"]);return G=function(){return e},e}var W=a.e.div(G(),(function(e){return e.theme.mediaQueries.lg})),X=Object(a.e)(s.a)(q(),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Z=function(){var e=Object(o.a)();return Object(c.jsxs)(l.a,{children:[Object(c.jsxs)(W,{children:[Object(c.jsx)(s.j,{as:"h1",size:"xl",mb:"24px",color:"primary",children:e(576,"CryptoLeek Finance")}),Object(c.jsx)(s.u,{children:e(578,"Top 3 best DEFI app on Binance Smart Chain.")})]}),Object(c.jsx)("div",{children:Object(c.jsxs)(X,{children:[Object(c.jsx)(A,{}),Object(c.jsx)(L,{}),Object(c.jsx)(M,{}),Object(c.jsx)($,{})]})})]})}}}]);
//# sourceMappingURL=14.cb2b4057.chunk.js.map