(this["webpackJsonpleekdao-farm"]=this["webpackJsonpleekdao-farm"]||[]).push([[22],{1542:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Ft}));var n=r(13),i=r(60),c=r(0),a=r.n(c),o=r(2),s=r(170),u=r(50),p=r(25),d=r(57),l=r.n(d);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){var t,r;function n(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(h(t)),t.handleErrored=t.handleErrored.bind(h(t)),t.handleChange=t.handleChange.bind(h(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(h(t)),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,r){e.executionResolve=t,e.executionReject=r,e.execute()}))},i.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},i.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return a.a.createElement("div",j({},t,{ref:this.handleRecaptchaRef}))},n}(a.a.Component);b.displayName="ReCAPTCHA",b.propTypes={sitekey:l.a.string.isRequired,onChange:l.a.func,grecaptcha:l.a.object,theme:l.a.oneOf(["dark","light"]),type:l.a.oneOf(["image","audio"]),tabindex:l.a.number,onExpired:l.a.func,onErrored:l.a.func,size:l.a.oneOf(["compact","normal","invisible"]),stoken:l.a.string,hl:l.a.string,badge:l.a.oneOf(["bottomright","bottomleft","inline"])},b.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var f=r(65),x=r.n(f);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var O={},v=0;var g="onloadcallback";var y,w,A=(y=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+g+"&render=explicit"},w=(w={callbackName:g,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){var r,n;function i(e,r){var n;return(n=t.call(this,e,r)||this).state={},n.__scriptURL="",n}n=t,(r=i).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var a=i.prototype;return a.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+v++),this.__scriptLoaderID},a.setupScriptURL=function(){return this.__scriptURL="function"===typeof y?y():y,this.__scriptURL},a.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},a.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=O[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[w.callbackName]},a.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),n=w,i=n.globalName,c=n.callbackName,a=n.scriptId;if(i&&"undefined"!==typeof window[i]&&(O[t]={loaded:!0,observers:{}}),O[t]){var o=O[t];return o&&(o.loaded||o.errored)?void this.asyncScriptLoaderHandleLoad(o):void(o.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},O[t]={loaded:!1,observers:s};var u=document.createElement("script");for(var p in u.src=t,u.async=!0,w.attributes)u.setAttribute(p,w.attributes[p]);a&&(u.id=a);var d=function(e){if(O[t]){var r=O[t].observers;for(var n in r)e(r[n])&&delete r[n]}};c&&"undefined"!==typeof window&&(window[c]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),u.onload=function(){var e=O[t];e&&(e.loaded=!0,d((function(t){return!c&&(t(e),!0)})))},u.onerror=function(){var e=O[t];e&&(e.errored=!0,d((function(t){return t(e),!0})))},document.body.appendChild(u)},a.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===w.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var n=O[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===w.removeOnUnmount&&delete O[e])},a.render=function(){var t=w.globalName,r=this.props,n=(r.asyncScriptOnLoad,r.forwardedRef),i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(i[t]="undefined"!==typeof window[t]?window[t]:void 0),i.ref=n,Object(c.createElement)(e,i)},i}(c.Component),n=Object(c.forwardRef)((function(e,t){return Object(c.createElement)(r,m({},e,{forwardedRef:t}))}));return n.displayName="AsyncScriptLoader("+t+")",n.propTypes={asyncScriptOnLoad:l.a.func},x()(n,e)})(b),S=r(650),k=r(680),C=r(845),R=r.n(C);function E(){var e=Object(i.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ",";\n  justify-items: ",";\n"]);return E=function(){return e},e}function D(){var e=Object(i.a)(["\n  width: 100%;\n  align-items: center;\n"]);return D=function(){return e},e}function _(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);return _=function(){return e},e}var T=o.e.div(_()),I=Object(o.e)(T)(D()),L=o.e.div(E(),(function(e){var t=e.gap;return("sm"===t?"8px":"md"===t&&"12px")||"lg"===t&&"24px"||t}),(function(e){var t=e.justify;return t&&t})),N=r(4),P=r.n(N),B=r(15),U=r(323),z=r.n(U),Q=r(675),H=r(126),W="https://api.testleekdao.xyz",J="leekdao",M="LuckyDraw!123",V=function(e){var t=Object(c.useState)(null),r=Object(p.a)(t,2),n=r[0],i=r[1],a="".concat(W,"/airdropList"),o=Object(H.a)().fastRefresh;return Object(c.useEffect)((function(){var t=!0;return function(){var r=Object(B.a)(P.a.mark((function r(){var n,c;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,z.a.get(a,{params:{isVip:e}});case 3:n=r.sent,c=n.data,t&&i(c),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Unable to fetch airdrop list:",r.t0.response);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}()(),function(){t=!1}}),[a,e,i,o]),n},q=function(){var e=Object(B.a)(P.a.mark((function e(t){var r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(W,"/airdropParticipationStatus"),e.next=3,z.a.patch(r,{isVip:t},{auth:{username:J,password:M}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function G(){var e=Object(i.a)(["\n  height: ",";\n  width: ",";\n"]);return G=function(){return e},e}function Y(){var e=Object(i.a)(["\n  padding: 40px 0;\n"]);return Y=function(){return e},e}function F(){var e=Object(i.a)(["\n  animation: 2s "," linear infinite;\n  width: 16px;\n  height: 16px;\n\n"]);return F=function(){return e},e}function K(){var e=Object(i.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return K=function(){return e},e}var Z=Object(o.f)(K()),X=o.e.img(F(),Z),$=Object(o.e)(I)(Y()),ee=Object(o.e)(X)(G(),(function(e){return e.size}),(function(e){return e.size})),te=function(){return Object(n.jsx)($,{children:Object(n.jsx)(ee,{src:"./images/blue-loader.svg",alt:"loader",size:"90px"})})};function re(){var e=Object(i.a)(["\n  padding: 20px 0;\n"]);return re=function(){return e},e}var ne=Object(o.e)(I)(re()),ie=function(e){var t=e.errorMessage;return Object(n.jsxs)(ne,{children:[Object(n.jsx)(u.t,{color:"failure",width:"60px"}),Object(n.jsx)(u.Q,{color:"failure",fontSize:"20px",mt:"10px",children:t})]})};function ce(){var e=Object(i.a)(["\n  padding: 20px 0;\n"]);return ce=function(){return e},e}var ae=Object(o.e)(I)(ce()),oe=function(){return Object(n.jsxs)(ae,{children:[Object(n.jsx)(u.o,{color:"success",width:"60px"}),Object(n.jsx)(u.Q,{color:"success",fontSize:"20px",mt:"10px",children:"Thank you for your participation!"})]})};function se(){var e=Object(i.a)(["\n  padding: 20px 0;\n"]);return se=function(){return e},e}var ue=Object(o.e)(I)(se()),pe=function(e){var t=e.waringMessage;return Object(n.jsxs)(ue,{children:[Object(n.jsx)(u.V,{color:"warning",width:"60px"}),Object(n.jsx)(u.Q,{color:"warning",fontSize:"20px",mt:"10px",style:{width:"350px",textAlign:"center"},children:t})]})},de=r(52),le={formData:{}},je={airdropApproveTxHash:"",airdropApproveError:""},he={vipAirdropApproveTxHash:"",vipAirdropApproveError:""},be={claimAirdropTxHash:""},fe="POST_FORM_DATA",xe="APPROVE_AIRDROP",me="APPROVE_VIP_AIRDROP",Oe="CLAIM_AIRDROP",ve="UPDATE_ERROR_MESSAGE",ge="RESET_TO_DEFAULT_STATE",ye=Object(de.e)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;if(t.type===fe){var r=JSON.parse(JSON.stringify(e));return r.formData=t.formData,r}return e})),we=Object(de.e)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;if(t.type===xe){var r=JSON.parse(JSON.stringify(e));return r.airdropApproveTxHash=t.airdropApproveTxHash,r.airdropApproveError="",r}if(t.type===ve){var n=JSON.parse(JSON.stringify(e));return n.airdropApproveTxHash="",n.airdropApproveError=t.airdropApproveError,n}if(t.type===ge){var i=JSON.parse(JSON.stringify(e));return i.airdropApproveTxHash="",i.airdropApproveError="",i}return e})),Ae=Object(de.e)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;if(t.type===me){var r=JSON.parse(JSON.stringify(e));return r.vipAirdropApproveTxHash=t.vipAirdropApproveTxHash,r.vipAirdropApproveError="",r}if(t.type===ve){var n=JSON.parse(JSON.stringify(e));return n.vipAirdropApproveTxHash="",n.vipAirdropApproveError=t.vipAirdropApproveError,n}if(t.type===ge){var i=JSON.parse(JSON.stringify(e));return i.vipAirdropApproveTxHash="",i.vipAirdropApproveError="",i}return e})),Se=Object(de.e)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;if(t.type===Oe){var r=JSON.parse(JSON.stringify(e));return r.claimAirdropTxHash=t.claimAirdropTxHash,r}if(t.type===ge){var n=JSON.parse(JSON.stringify(e));return n.claimAirdropTxHash="",n}return e})),ke=function(e){var t,r=e.onDismiss,i=function(e){var t=Object(c.useState)(null),r=Object(p.a)(t,2),n=r[0],i=r[1],a="".concat(W,"/airdrop");return Object(c.useEffect)((function(){var t=!0;return function(){var r=Object(B.a)(P.a.mark((function r(){var n,c;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,z.a.post(a,e,{auth:{username:J,password:M}});case 3:n=r.sent,c=n.data,t&&i(c),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Unable to post participation data:",r.t0.response);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}()(),function(){t=!1}}),[a,e,i]),n}(ye.getState().formData);return t=i?i.error?Object(n.jsx)(ie,{errorMessage:i.error}):i.warning?Object(n.jsx)(pe,{waringMessage:i.warning}):Object(n.jsx)(oe,{}):Object(n.jsx)(te,{}),Object(n.jsxs)(u.G,{title:"Participation Submission",onDismiss:r,children:[Object(n.jsx)("div",{children:t}),Object(n.jsx)(L,{gap:"8px",justify:"center",children:Object(n.jsx)(u.g,{onClick:r,mt:"20px",children:"Close"})})]})};function Ce(){var e=Object(i.a)(["\n  color: ",";\n  marign: 20px;\n"]);return Ce=function(){return e},e}function Re(){var e=Object(i.a)(["\n    padding:30px;\n\n    @media (max-width: 768px) {\n        padding:20px\n    }\n"]);return Re=function(){return e},e}var Ee=o.e.form(Re()),De=Object(o.e)(u.w).attrs({as:"h4",size:"md"})(Ce(),(function(e){return e.theme.colors.secondary})),_e=function(){var e=Object(S.i)().account,t=Object(c.useState)(""),r=Object(p.a)(t,2),i=r[0],a=r[1],o=Object(c.useState)(""),s=Object(p.a)(o,2),d=s[0],l=s[1],j=Object(c.useState)(""),h=Object(p.a)(j,2),b=h[0],f=h[1],x=Object(c.useState)(""),m=Object(p.a)(x,2),O=m[0],v=m[1],g=Object(c.useState)(!0),y=Object(p.a)(g,2),w=y[0],C=y[1],E=Object(c.useState)(!0),D=Object(p.a)(E,2),_=D[0],T=D[1],I=Object(c.useState)(!0),L=Object(p.a)(I,2),N=L[0],P=L[1],B=Object(c.useState)(!0),U=Object(p.a)(B,2),z=U[0],Q=U[1],H=Object(c.useState)(!0),W=Object(p.a)(H,2),J=W[0],M=W[1],V=Object(c.useState)(""),q=Object(p.a)(V,2),G=q[0],Y=q[1],F=Object(c.useState)(!1),K=Object(p.a)(F,2),Z=K[0],X=K[1],$=Object(c.useState)(!1),ee=Object(p.a)($,2),te=ee[0],re=ee[1],ne=function(e,t){"twitter"===e?(a(t),R.a.isLength(t,{min:1,max:30})?C(!0):C(!1)):"retweetUrl"===e?(l(t),R.a.isURL(t)?T(!0):T(!1)):"telegram"===e?(f(t),R.a.isLength(t,{min:1,max:30})?P(!0):P(!1)):"discord"===e?(v(t),R.a.isLength(t,{min:1,max:30})?Q(!0):Q(!1)):"email"===e&&(Y(t),R.a.isEmail(t)?M(!0):M(!1))},ie=function(e,t){ne(t,e.currentTarget.value)},ce=function(e){ne(e,{twitter:i,retweetUrl:d,telegram:b,discord:O,email:G}[e])},ae=Object(u.Y)(Object(n.jsx)(ke,{onDismiss:function(){return null}})),oe=Object(p.a)(ae,1)[0];return Object(n.jsxs)(u.k,{style:{width:"100%"},children:[Object(n.jsx)(u.m,{children:Object(n.jsx)(u.u,{alignItems:"center",justifyContent:"space-between",children:Object(n.jsx)(u.w,{children:"AirDrop Participation Form"})})}),Object(n.jsxs)(Ee,{onSubmit:function(t){return function(t){t.preventDefault();var r={type:fe,formData:{walletAddress:e,twitterName:i,retweetUrl:d,telegramName:b,discordName:O,email:G,isVerified:Z}};ye.dispatch(r),oe()}(t)},children:[Object(n.jsx)(u.Q,{mb:"10px",children:"* Required"}),Object(n.jsxs)("div",{style:{marginBottom:"20px"},children:[Object(n.jsx)(De,{mb:"10px",children:"Section 1: BlockChain"}),Object(n.jsx)(u.Q,{mb:"5px",children:"* What is your Wallet Address?"}),Object(n.jsx)(u.A,{type:"text",value:e||"",readOnly:!0,required:!0,placeholder:"Your wallet address...",isSuccess:e&&e.length>0,name:"wallet_address"})]}),Object(n.jsxs)("div",{style:{marginBottom:"20px"},children:[Object(n.jsx)(De,{mb:"10px",children:"Section 2: AirDrop Tasks"}),Object(n.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(n.jsx)(u.Q,{mb:"5px",children:"* What is your Twitter Username? (Without @)"}),Object(n.jsx)(u.A,{type:"text",placeholder:"Your Twitter Name...",value:i,onChange:function(e){return ie(e,"twitter")},onBlur:function(){return ce("twitter")},required:!0,isSuccess:e&&w,isWarning:e&&!w,name:"twitter_name"}),e&&!w&&Object(n.jsx)(u.Q,{color:"failure",fontSize:"15px",mt:"5px",children:"Sorry! Please input your Twitter Username"})]}),Object(n.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(n.jsx)(u.Q,{mb:"5px",children:"* If your retweet our AirDrop Tweets, please enter the Retweet URL below."}),Object(n.jsx)(u.A,{placeholder:"Your Retweeted URL...",required:!0,value:d,onChange:function(e){return ie(e,"retweetUrl")},onBlur:function(){return ce("retweetUrl")},isSuccess:e&&_,isWarning:e&&!_,name:"retweet_url"}),e&&!_&&Object(n.jsx)(u.Q,{color:"failure",fontSize:"15px",mt:"5px",children:"Sorry! Please input your Retweet Url!"})]}),Object(n.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(n.jsx)(u.Q,{mb:"5px",children:"* What is your Telegram UserName in the group?"}),Object(n.jsx)(u.A,{type:"text",placeholder:"Your Telegram Name...",required:!0,value:b,onChange:function(e){return ie(e,"telegram")},onBlur:function(){return ce("telegram")},isSuccess:e&&N,isWarning:e&&!N,name:"telegram_name"}),e&&!N&&Object(n.jsx)(u.Q,{color:"failure",fontSize:"15px",mt:"5px",children:"Sorry! Please input your Telegram Username in the group"})]}),Object(n.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(n.jsx)(u.Q,{mb:"5px",children:"* What is your Discord Name in the group?"}),Object(n.jsx)(u.A,{type:"text",placeholder:"Your Discord Name...",value:O,onChange:function(e){return ie(e,"discord")},onBlur:function(){return ce("discord")},required:!0,isSuccess:e&&z,isWarning:e&&!z,name:"discord_name"}),e&&!z&&Object(n.jsx)(u.Q,{color:"failure",fontSize:"15px",mt:"5px",children:"Sorry! Please input your Discord Username in the group"})]}),Object(n.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(n.jsxs)(u.u,{alignItems:"start",justifyContent:"start",children:[Object(n.jsx)(u.Q,{mb:"5px",children:"If you are an early contributor, please enter your email address below."}),Object(n.jsx)(u.z,{mt:"3px",onMouseMove:function(){re(!0)},onMouseLeave:function(){re(!1)},style:{cursor:"pointer"}})]}),te&&Object(n.jsxs)(u.u,{alignItems:"start",justifyContent:"start",children:[Object(n.jsx)(u.Q,{mb:"5px",mr:"5px",children:"Note: Early contributors are paid members from"}),Object(n.jsx)(u.B,{href:"https://www.bitcoinleek.com",target:"_blank",children:"bitcoinleek.com"})]}),Object(n.jsx)(u.A,{type:"text",placeholder:"Your Email Address ...",value:G,onChange:function(e){return ie(e,"email")},isSuccess:e&&J,isWarning:e&&!J,name:"early_contributor"}),e&&!J&&Object(n.jsx)(u.Q,{color:"failure",fontSize:"15px",mt:"5px",children:"Sorry! Please input a valid email address"})]})]}),Object(n.jsx)(A,{sitekey:"6Lest7wbAAAAAPRzQ2ZGU-w_O9v-gbnw3fK1l98u",onChange:function(e){X(!!e)}}),e?Object(n.jsxs)(u.g,{mt:"20px",type:"submit",fullWidth:!0,disabled:!(w&&N&&z&&_&&Z),children:[" ","Participate"]}):Object(n.jsx)(k.a,{mt:"20px",fullWidth:!0})]})]})},Te=r(12),Ie=r.n(Te),Le=r(676),Ne=r(679),Pe=r(684),Be=function(){var e=Object(B.a)(P.a.mark((function e(t,r,n,i){var c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,symbol:r,decimals:n,image:i}}});case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,r,n,i){return e.apply(this,arguments)}}();function Ue(){var e=Object(i.a)(["\n  color: ",";\n  font-size: 14px;\n  text-align: left;\n  margin-left: 20px;\n"]);return Ue=function(){return e},e}function ze(){var e=Object(i.a)(["\n  margin-bottom: 4px;\n  text-align: left;\n  margin-left: 20px;\n"]);return ze=function(){return e},e}function Qe(){var e=Object(i.a)(["\n  & > div {\n    flex: 1;\n  }\n"]);return Qe=function(){return e},e}var He=Object(o.e)(u.u)(Qe()),We=Object(o.e)(u.w).attrs({as:"h3",size:"lg"})(ze()),Je=Object(o.e)(u.Q)(Ue(),(function(e){return e.theme.colors.textSubtle})),Me=function(e){var t=e.airdropId,r=e.name,i=e.description;return Object(n.jsxs)(He,{mb:"24px",alignItems:"center",children:[Object(n.jsx)("img",{src:"./images/airdrop/token/".concat(t,".png"),alt:t,width:"50px",height:"50px"}),Object(n.jsxs)("div",{children:[Object(n.jsx)(We,{children:r}),Object(n.jsx)(Je,{children:i})]})]})},Ve=r(755),qe=r.n(Ve);function Ge(){var e=Object(i.a)(["\n  flex: 1;\n"]);return Ge=function(){return e},e}function Ye(){var e=Object(i.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n"]);return Ye=function(){return e},e}function Fe(){var e=Object(i.a)(["\n  margin-bottom: 24px;\n"]);return Fe=function(){return e},e}var Ke=o.e.div(Fe()),Ze=o.e.div(Ye(),(function(e){return e.theme.colors.secondary})),Xe=Object(o.e)(u.Q)(Ge()),$e="80001",et=function(e){var t=e.startBlock,r=e.endBlock,i=e.airdropAmount,c=e.vipAirdropAmount,a=e.remainingTokens,o=e.totalAmount,s=e.tokenName;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(Ke,{children:[Object(n.jsxs)(Ze,{children:[Object(n.jsx)(Xe,{children:"Start Block"}),Object(n.jsx)(u.Q,{children:Object(n.jsxs)(u.B,{href:Object(Ne.a)($e,t),target:"blank",style:{display:"inline"},children:["# ",t]})})]}),Object(n.jsxs)(Ze,{children:[Object(n.jsx)(Xe,{children:"End Block"}),Object(n.jsx)(u.Q,{children:Object(n.jsxs)(u.B,{href:Object(Ne.a)($e,r),target:"blank",style:{display:"inline"},children:["# ",r]})})]}),Object(n.jsxs)(Ze,{children:[Object(n.jsx)(Xe,{children:"AirDrop Amount/Person"}),Object(n.jsxs)(u.Q,{children:[qe()(i).format("0,0")," ",s]})]}),Object(n.jsxs)(Ze,{children:[Object(n.jsx)(Xe,{children:"AirDrop Amount/VIP Person"}),Object(n.jsxs)(u.Q,{children:[qe()(c).format("0,0")," ",s]})]}),Object(n.jsxs)(Ze,{children:[Object(n.jsx)(Xe,{children:"Total Airdrop Amount"}),Object(n.jsxs)(u.Q,{children:[qe()(o).format("0,0")," ",s]})]}),Object(n.jsxs)(Ze,{children:[Object(n.jsx)(Xe,{children:"Remaining Amount"}),Object(n.jsxs)(u.Q,{children:[qe()(a).format("0,0")," ",s]})]})]})})};function tt(){var e=Object(i.a)(["\n  margin-bottom: 16px;\n"]);return tt=function(){return e},e}var rt=o.e.div(tt()),nt=function(e){var t=e.progress;return Object(n.jsx)(rt,{children:Object(n.jsx)(u.I,{primaryStep:t})})},it=function(e){var t=e.onDismiss;return Object(n.jsx)(u.G,{title:"Waiting for confirmation",onDismiss:t,children:Object(n.jsx)(te,{})})},ct=r(844);function at(){var e=Object(i.a)(["\n  padding: 40px 0;\n"]);return at=function(){return e},e}var ot=Object(o.e)(I)(at()),st=function(e){var t=e.transactionHash,r=Object(c.useContext)(o.a);return Object(n.jsxs)("div",{children:[Object(n.jsx)(ot,{children:Object(n.jsx)(ct.a,{strokeWidth:.5,size:97,color:r.colors.primary})}),Object(n.jsx)(L,{gap:"8px",justify:"center",children:Object(n.jsx)(u.C,{href:Object(Ne.c)("80001",t),children:"View on PolygonScan"})})]})},ut=function(e){var t=e.onDismiss,r=we.getState().airdropApproveTxHash;return Object(n.jsxs)(u.G,{title:"Transaction Submitted",onDismiss:t,children:[Object(n.jsx)(st,{transactionHash:r}),Object(n.jsx)(L,{gap:"8px",justify:"center",children:Object(n.jsx)(u.g,{onClick:t,mt:"20px",children:"Close"})})]})},pt=function(e){var t=e.onDismiss,r=we.getState().airdropApproveError;return Object(n.jsxs)(u.G,{title:"Error Message",onDismiss:t,children:[Object(n.jsx)(ie,{errorMessage:r}),Object(n.jsx)(L,{gap:"8px",justify:"center",children:Object(n.jsx)(u.g,{onClick:t,mt:"20px",children:"Close"})})]})},dt=function(e){var t=e.onDismiss,r=Ae.getState().vipAirdropApproveError;return Object(n.jsxs)(u.G,{title:"Error Message",onDismiss:t,children:[Object(n.jsx)(ie,{errorMessage:r}),Object(n.jsx)(L,{gap:"8px",justify:"center",children:Object(n.jsx)(u.g,{onClick:t,mt:"20px",children:"Close"})})]})},lt=function(e){var t=e.onDismiss,r=Ae.getState().vipAirdropApproveTxHash;return Object(n.jsxs)(u.G,{title:"Transaction Submitted",onDismiss:t,children:[Object(n.jsx)(st,{transactionHash:r}),Object(n.jsx)(L,{gap:"8px",justify:"center",children:Object(n.jsx)(u.g,{onClick:t,mt:"20px",children:"Close"})})]})},jt=function(e){var t=e.onDismiss,r=Se.getState().claimAirdropTxHash;return Object(n.jsxs)(u.G,{title:"Transaction Submitted",onDismiss:t,children:[Object(n.jsx)(st,{transactionHash:r}),Object(n.jsx)(L,{gap:"8px",justify:"center",children:Object(n.jsx)(u.g,{onClick:t,mt:"20px",children:"Close"})})]})};function ht(){var e=Object(i.a)(["\n  background-repeat: no-repeat;\n  background-size: contain;\n  max-height: ","}\n  width: 100%;\n"]);return ht=function(){return e},e}function bt(){var e=Object(i.a)(["\n    padding:30px;\n\n    @media (max-width: 768px) {\n        padding:20px\n    }\n"]);return bt=function(){return e},e}var ft="80001",xt=o.e.div(bt()),mt=Object(o.e)(u.k)(ht(),(function(e){return e.isOwner?"580px":"510px"})),Ot=function(){var e=Pe.a.id,t=Pe.a.name,r=Pe.a.description,i=Pe.a.tokenAddress,a=Pe.a.tokenDecimals,o=Pe.a.projectSiteUrl,s=Pe.a.totalAmount,d=Pe.a.isActive,l=Object(S.i)().account,j=i[80001],h="0xB232D899b39Ee282EC26BBA385497b9FCD150ED3"===l,b=function(){var e=Object(c.useState)({}),t=Object(p.a)(e,2),r=t[0],n=t[1],i=Object(Q.a)(),a=Object(H.a)().fastRefresh;return Object(c.useEffect)((function(){var e=!0;return function(){var t=Object(B.a)(P.a.mark((function t(){var r,c,a,o,s,u,d;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([i.methods.startBlockNumber().call(),i.methods.finishBlockNumber().call(),i.methods.airdropAmount().call(),i.methods.vipAirdropAmount().call(),i.methods.remainingTokens().call()]);case 3:r=t.sent,c=Object(p.a)(r,5),a=c[0],o=c[1],s=c[2],u=c[3],d=c[4],e&&n({startBlock:a,endBlock:o,airdropAmount:s,vipAirdropAmount:u,remainingAmount:d}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error("Unable to fetch airdrop info",t.t0.response);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}()(),function(){e=!1}}),[i.methods,a]),r}(),f=b.startBlock,x=b.endBlock,m=b.airdropAmount,O=b.vipAirdropAmount,v=b.remainingAmount,g=Object(Le.a)(new Ie.a(m)),y=Object(Le.a)(new Ie.a(O)),w=Object(Le.a)(new Ie.a(v)),A=d?(s-w)/s*100:0,C=V(!1),R=V(!0),E=Object(Q.a)(),D=function(e){var t=Object(c.useState)(!1),r=Object(p.a)(t,2),n=r[0],i=r[1],a=Object(Q.a)(),o=Object(H.a)().slowRefresh;return Object(c.useEffect)((function(){var t=!0;return function(){var r=Object(B.a)(P.a.mark((function r(){var n;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!e){r.next=6;break}return r.next=4,a.methods.isVIP(e).call();case 4:n=r.sent,t&&i(n);case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Unable to identify whether is VIP",r.t0.response);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}()(),function(){t=!1}}),[a.methods,e,o]),n}(l),_=function(e){var t=Object(c.useState)(!1),r=Object(p.a)(t,2),n=r[0],i=r[1],a=Object(Q.a)(),o=Object(H.a)().slowRefresh;return Object(c.useEffect)((function(){var t=!0;return function(){var r=Object(B.a)(P.a.mark((function r(){var n;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!e){r.next=6;break}return r.next=4,a.methods.isWhitelisted(e).call();case 4:n=r.sent,t&&i(n);case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Unable to identify whether is whitelisted",r.t0.response);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}()(),function(){t=!1}}),[a.methods,e,o]),n}(l),T=Object(u.Y)(Object(n.jsx)(it,{onDismiss:function(){return null}})),I=Object(p.a)(T,1)[0],L=Object(u.Y)(Object(n.jsx)(ut,{onDismiss:function(){return null}})),N=Object(p.a)(L,1)[0],U=Object(u.Y)(Object(n.jsx)(pt,{onDismiss:function(){return null}})),z=Object(p.a)(U,1)[0],W=Object(u.Y)(Object(n.jsx)(lt,{onDismiss:function(){return null}})),J=Object(p.a)(W,1)[0],M=Object(u.Y)(Object(n.jsx)(dt,{onDismiss:function(){return null}})),G=Object(p.a)(M,1)[0],Y=Object(u.Y)(Object(n.jsx)(jt,{onDismiss:function(){return null}})),F=Object(p.a)(Y,1)[0],K=function(){var e=Object(B.a)(P.a.mark((function e(){var t,r,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I(),we.dispatch({type:ge}),!C.error){e.next=8;break}t={type:ve,airdropApproveError:C.error},we.dispatch(t),z(),e.next=16;break;case 8:return e.next=10,E.methods.whitelist(C).send({from:l});case 10:return r=e.sent,n={type:xe,airdropApproveTxHash:r.transactionHash},we.dispatch(n),N(),e.next=16,q(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(B.a)(P.a.mark((function e(){var t,r,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I(),Ae.dispatch({type:ge}),!R.error){e.next=8;break}t={type:ve,vipAirdropApproveError:R.error},Ae.dispatch(t),G(),e.next=16;break;case 8:return e.next=10,E.methods.whitelistVIP(R).send({from:l});case 10:return r=e.sent,n={type:me,vipAirdropApproveTxHash:r.transactionHash},Ae.dispatch(n),J(),e.next=16,q(!0);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(B.a)(P.a.mark((function e(){var t,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I(),Se.dispatch({type:ge}),!_&&!D){e.next=9;break}return e.next=5,E.methods.getAirdrop().send({from:l});case 5:t=e.sent,r={type:Oe,claimAirdropTxHash:t.transactionHash},Se.dispatch(r),F();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(mt,{isOwner:h,children:[Object(n.jsx)(u.m,{children:Object(n.jsx)(u.u,{alignItems:"center",justifyContent:"space-between",children:Object(n.jsx)(u.w,{children:"AirDrop Info"})})}),Object(n.jsxs)(xt,{children:[Object(n.jsx)(Me,{airdropId:e,name:t,description:r}),Object(n.jsx)(nt,{progress:A}),Object(n.jsx)(et,{startBlock:f,endBlock:x,airdropAmount:g,vipAirdropAmount:y,totalAmount:s,remainingTokens:w,tokenName:t.toUpperCase()}),Object(n.jsx)("hr",{}),Object(n.jsxs)(u.u,{alignItems:"center",justifyContent:"space-between",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(u.C,{mb:"5px",style:{cursor:"pointer"},href:Object(Ne.b)(ft,j),children:"View Token Contract"}),Object(n.jsx)(u.C,{mb:"5px",style:{cursor:"pointer"},href:o,children:"View Project Site"}),l&&Object(n.jsxs)(u.u,{justifyContent:"flex-start",alignItems:"center",mb:"10px",style:{cursor:"pointer"},children:[Object(n.jsx)(u.f,{onClick:function(){return Be(j,t,a)},children:Object(n.jsx)(u.Q,{color:"primary",bold:!0,fontSize:"16px",mr:"5px",children:"Add to Metamask"})}),Object(n.jsx)("img",{src:"./images/metamask.svg",alt:"metamask",width:"20px"})]})]}),Object(n.jsxs)("div",{children:[l?Object(n.jsx)(u.g,{disabled:!D&&!_,onClick:X,fullWidth:!0,children:"Claim"}):Object(n.jsx)(k.a,{}),l&&!D&&!_&&Object(n.jsx)(u.Q,{color:"failure",children:"* System is validating your info"})]})]}),h?Object(n.jsx)("div",{children:Object(n.jsxs)(u.u,{alignItems:"center",justifyContent:"space-between",children:[Object(n.jsx)(u.g,{onClick:K,children:"Approve"}),Object(n.jsx)(u.g,{onClick:Z,children:"Approve VIP"})]})}):""]})]})};function vt(){var e=Object(i.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"]);return vt=function(){return e},e}function gt(){var e=Object(i.a)(["\n  color: ",";\n  margin-bottom: 24px;\n  margin-top:20px;\n"]);return gt=function(){return e},e}function yt(){var e=Object(i.a)(["\n background-image: linear-gradient(180deg, #c0cefa 20%, #c0fae3 100%);\n  padding-bottom: 32px;\n  padding-top: 32px;\n"]);return yt=function(){return e},e}var wt=Object(o.e)(u.f)(yt()),At=Object(o.e)(u.w).attrs({as:"h1",size:"xl"})(gt(),(function(e){return e.theme.colors.primary})),St=Object(o.e)(u.y)(vt(),(function(e){return e.theme.mediaQueries.lg})),kt=function(){return Object(n.jsx)(wt,{children:Object(n.jsx)(s.a,{children:Object(n.jsxs)(u.u,{alignItems:"center",justifyContent:"space-between",children:[Object(n.jsxs)(u.f,{pr:"32px",children:[Object(n.jsx)(At,{children:"LeekDAO AirDrop"}),Object(n.jsx)(u.w,{mb:"16px",children:"Join the LEEK Token AirDrop to Embrace the Future"})]}),Object(n.jsx)(St,{src:"./images/airdrop/airdrop.png",width:200,height:200})]})})})};function Ct(){var e=Object(i.a)(["\n  color: ",";\n  margin-bottom: 24px;\n  margin-top:20px;\n"]);return Ct=function(){return e},e}function Rt(){var e=Object(i.a)(["\n  width: 100%;\n  padding: 24px;\n  background: ",";\n  border-radius: ",";\n"]);return Rt=function(){return e},e}function Et(){var e=Object(i.a)(["\n  display: inline;\n"]);return Et=function(){return e},e}function Dt(){var e=Object(i.a)(["\n  display: flex;\n  align-self: baseline;\n  position: relative;\n  background: ",";\n  padding: 1px 1px 3px 1px;\n  border-radius: ",";\n"]);return Dt=function(){return e},e}function _t(){var e=Object(i.a)(["\n  gap: 24px;\n  width: 100%;\n  flex-direction: column;\n  "," {\n    flex-direction: row;\n  }\n"]);return _t=function(){return e},e}function Tt(){var e=Object(i.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 40px 0;\n  width: 100%;\n"]);return Tt=function(){return e},e}var It=o.e.div(Tt(),(function(e){return e.theme.colors.borderColor})),Lt=Object(o.e)(u.u)(_t(),(function(e){return e.theme.mediaQueries.md})),Nt=Object(o.e)(u.f)(Dt(),(function(e){return e.theme.colors.borderColor}),(function(e){return e.theme.radii.card})),Pt=Object(o.e)(u.B)(Et()),Bt=Object(o.e)(u.f)(Rt(),(function(e){return e.theme.card.background}),(function(e){return e.theme.radii.card})),Ut=Object(o.e)(u.w).attrs({as:"h2",size:"xl"})(Ct(),(function(e){return e.theme.colors.secondary})),zt=function(e){var t=e.step;return Object(n.jsx)(Nt,{width:"100%",children:Object(n.jsxs)(Bt,{height:["200px","180px",null,"200px"],children:[Object(n.jsx)(u.Q,{mb:"16px",fontSize:"15px",bold:!0,textTransform:"uppercase",style:{textAlign:"right"},children:t.label}),Object(n.jsx)(u.w,{mb:"16px",fontSize:"20px",color:"secondary",children:t.title}),Object(n.jsx)(u.Q,{color:"textSubtle",children:t.subtitle})]})})},Qt=function(){return Object(n.jsxs)(u.f,{width:"100%",style:{marginBottom:"30px"},children:[Object(n.jsx)(u.u,{mt:"30px",mb:"40px",alignItems:"center",flexDirection:"column",children:Object(n.jsx)(Ut,{mb:"24px",fontSize:"30px",color:"secondary",children:"How to Participate Our AirDrop?"})}),Object(n.jsx)(Lt,{children:[{label:"Step 1",title:"Fill in the Form",subtitle:"Only the person whose DeGenScore is over 30 can have access to the airdrop."},{label:"Step 2",title:"Wait for the AirDrop",subtitle:"The lucky draw will be open in person and regularly."},{label:"Step 3",title:"Check for Prizes",subtitle:"Each round winner(s) will be displayed in public."}].map((function(e){return Object(n.jsx)(zt,{step:e},e.label)}))}),Object(n.jsx)(It,{}),Object(n.jsxs)(u.u,{justifyContent:"center",alignItems:"center",flexDirection:["column","column","row"],children:[Object(n.jsx)(u.u,{maxWidth:"100px",mr:"8px",mb:"16px",children:Object(n.jsx)("img",{src:"./images/lottery/question.png",alt:"question"})}),Object(n.jsxs)(u.u,{maxWidth:"300px",flexDirection:"column",children:[Object(n.jsx)(u.w,{mb:"16px",children:"Still got questions?"}),Object(n.jsxs)(u.Q,{children:["Check our in-depth guide on",Object(n.jsx)(Pt,{href:"https://docs.leekdao.xyz",marginLeft:"5px",target:"_blank",children:"how to participate the LeekDAO Airdrop!"})]})]})]})]})},Ht=r(990);function Wt(){var e=Object(i.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  height: 400px;\n  overflow-y: scroll;\n"]);return Wt=function(){return e},e}var Jt=Object(o.e)(u.k)(Wt()),Mt=function(){return Object(n.jsxs)(Jt,{children:[Object(n.jsx)(u.m,{children:Object(n.jsx)(u.u,{alignItems:"center",justifyContent:"space-between",children:Object(n.jsx)(u.w,{children:"AirDrop Annoucement"})})}),Object(n.jsxs)(u.l,{children:[Object(n.jsx)(u.Q,{mb:"10px",children:"* Retweet this tweet, and copy the link to the participation form"}),Object(n.jsx)(Ht.b,{tweetId:"1423148480239861760",options:{height:"300",chrome:"noheader, nofooter",width:"60%"}})]})]})};function Vt(){var e=Object(i.a)(["\n  background-color: ",";\n  height: 1px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 100%;\n"]);return Vt=function(){return e},e}function qt(){var e=Object(i.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  margin: 0 auto;\n  padding-left: 50px;\n  padding-right: 50px;\n  padding-top:50px;\n  padding-bottom:50px;\n\n  "," {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media (max-width: 768px) {\n   padding:30px\n  }\n"]);return qt=function(){return e},e}var Gt=Object(o.e)(u.c)(qt(),(function(e){return e.theme.mediaQueries.sm})),Yt=o.e.div(Vt(),(function(e){return e.theme.colors.borderColor})),Ft=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(kt,{}),Object(n.jsx)(u.u,{width:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center",children:Object(n.jsx)(u.w,{size:"xl",color:"secondary",mt:"40px",fontSize:"50px",children:"Participate our AirDrop Right now!"})}),Object(n.jsxs)(Gt,{children:[Object(n.jsx)(_e,{}),Object(n.jsxs)(u.f,{children:[Object(n.jsx)(Mt,{}),Object(n.jsx)(Ot,{})]})]}),Object(n.jsxs)(s.a,{children:[Object(n.jsx)(Yt,{}),Object(n.jsx)(Qt,{})]})]})}},676:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o}));var n=r(12),i=r.n(n),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,r=new i.a(e).dividedBy(new i.a(10).pow(t));return r.toNumber()},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return e.dividedBy(new i.a(10).pow(t)).toFixed()},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return e.multipliedBy(new i.a(10).pow(t)).toFixed()}}}]);
//# sourceMappingURL=22.402ecbfd.chunk.js.map