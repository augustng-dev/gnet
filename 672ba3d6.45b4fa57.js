(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{182:function(e,a,t){"use strict";t.r(a);t(258);var n=t(0),r=t.n(n),l=t(259),c=t(254),i=t(249),o=t(143),m=t.n(o),s=t(248),d=Object(l.a)("h2");Object(l.a)("h3");a.default=function(){var e=Object(s.a)().siteConfig,a=(void 0===e?{}:e).customFields.metadata.team;return r.a.createElement(c.a,{title:"Community",description:"Join the gnet community. Connect with other gnet users and help make gnet better."},r.a.createElement("header",{className:"hero hero--clean"},r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("h1",null,"gnet Community"),r.a.createElement("div",{className:"hero--subtitle"},"Join the gnet community. Connect with other gnet users and help make gnet better."))),r.a.createElement("main",null,r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://gitter.im/gnet-io/gnet",target:"_blank",className:"panel panel--button"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-message-circle"})),r.a.createElement("div",{className:"panel--title"},"Chat"),r.a.createElement("div",{className:"panel--description"},"Ask questions and get help"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://twitter.com/_andy_pan",target:"_blank",className:"panel panel--button"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-twitter",title:"Twitter"})),r.a.createElement("div",{className:"panel--title"},"@_andy_pan"),r.a.createElement("div",{className:"panel--description"},"Follow me in real-time"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://github.com/panjf2000/gnet",target:"_blank",className:"panel panel--button"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-github"})),r.a.createElement("div",{className:"panel--title"},"Github panjf2000/gnet"),r.a.createElement("div",{className:"panel--description"},"Code, issues, and pull requests")))))),r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement(d,{id:"team"},"Meet The Team"),r.a.createElement("div",{className:"sub-title"},"Andy Pan is the creator of gnet and the only core contributor at present, hoping more developers will join me in the future."),r.a.createElement("div",{className:m.a.coreTeam},a.map((function(e,a){return r.a.createElement(i.a,{key:a,to:e.github,className:"avatar avatar--vertical"},r.a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:e.avatar}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("h4",{className:"avatar__name"},e.name)))})))))))}},253:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return l}));var n=t(248);function r(){var e=Object(n.a)().siteConfig,a=(void 0===e?{}:e).customFields.metadata.latest_highlight,t=Date.parse(a.date),r=new Date,l=Math.abs(r-t),c=Math.ceil(l/864e5),i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("highlightsViewedAt")||"0"))),c<30&&(!i||i<t)?a:null}function l(){"undefined"!=typeof window&&window.localStorage.setItem("highlightsViewedAt",(new Date).getTime())}},254:function(e,a,t){"use strict";t(263);var n=t(0),r=t.n(n),l=t(264),c=t(252),i=t(1),o=(t(265),t(249)),m=t(266),s=t(251),d=t.n(s),u=t(267),h=t.n(u),g=t(248),b=t(247),E=t.n(b),v=t(131),p=t.n(v),f=function(){return r.a.createElement("span",{className:E()(p.a.toggle,p.a.moon)})},_=function(){return r.a.createElement("span",{className:E()(p.a.toggle,p.a.sun)})},N=function(e){var a=Object(g.a)().isClient;return r.a.createElement(h.a,Object(i.a)({disabled:!a,icons:{checked:r.a.createElement(f,null),unchecked:r.a.createElement(_,null)}},e))},k=t(253),w=t(250),y=t(270),j=t(261),O=t(262),C=t(257),x=t(132),T=t.n(x);function S(e){var a=e.href,t=e.hideIcon,n=e.label,l=e.onClick,c=(e.position,e.right),m=e.to,s=function(e,a){var t={label:e};switch(e.toLowerCase()){case"chat":return t.hideText=1==a,t.icon="message-circle",t;case"community":return t.hideText=1==a,t.icon="users",t;case"github":return t.badge="8.1k",t.hideText=!1,t.icon="github",t;case"highlights":return Object(k.a)()&&(t.badge="new",t.badgeStyle="primary"),t.hideText=1==a,t.icon="gift",t;default:return t}}(n,c)||{},d=Object(w.a)(m);return r.a.createElement(o.a,Object(i.a)({className:E()("navbar__item navbar__link",s.className,{navbar__item__icon_only:s.hideText}),title:s.hideText?n:null,onClick:l},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:d}),!t&&s.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-"+s.icon})," ",s.iconLabel),!s.hideText&&s.label,s.badge&&r.a.createElement("span",{className:E()("badge","badge--"+(s.badgeStyle||"secondary"))},s.badge))}var D=function(){var e,a=Object(g.a)(),t=a.siteConfig.themeConfig,l=t.navbar,c=(l=void 0===l?{}:l).title,s=l.links,u=void 0===s?[]:s,h=l.hideOnScroll,b=void 0!==h&&h,v=t.disableDarkMode,p=void 0!==v&&v,f=(a.isClient,Object(n.useState)(!1)),_=f[0],k=f[1],w=Object(n.useState)(!1),x=w[0],D=w[1],I=Object(C.a)(),L=I.isDarkTheme,M=I.setLightTheme,A=I.setDarkTheme,P=Object(y.a)(b),F=P.navbarRef,B=P.isNavbarVisible,V=Object(O.a)(),J=V.logoLink,R=V.logoLinkProps,q=V.logoImageUrl,H=V.logoAlt;Object(j.a)(_);var G=Object(n.useCallback)((function(){k(!0)}),[k]),W=Object(n.useCallback)((function(){k(!1)}),[k]),z=Object(n.useCallback)((function(e){return e.target.checked?A():M()}),[M,A]);return r.a.createElement("nav",{ref:F,className:E()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":_},e[T.a.navbarHideable]=b,e[T.a.navbarHidden]=!B,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:G,onKeyDown:G},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",to:J},R),null!=q&&r.a.createElement(d.a,{className:"navbar__logo",src:q,alt:H}),null!=c&&r.a.createElement("strong",{className:x?T.a.hideLogoText:""},c)),u.filter((function(e){return"right"!==e.position})).map((function(e,a){return r.a.createElement(S,Object(i.a)({},e,{left:!0,key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},u.filter((function(e){return"right"===e.position})).map((function(e,a){return r.a.createElement(S,Object(i.a)({},e,{right:!0,key:a}))})),!p&&r.a.createElement(N,{className:T.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:L,onChange:z}),r.a.createElement(m.a,{handleSearchBarToggle:D,isSearchBarExpanded:x}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:W}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",onClick:W,to:J},R),null!=q&&r.a.createElement(d.a,{className:"navbar__logo",src:q,alt:H}),null!=c&&r.a.createElement("strong",null,c)),!p&&_&&r.a.createElement(N,{"aria-label":"Dark mode toggle in sidebar",checked:L,onChange:z})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,a){return r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(S,Object(i.a)({className:"menu__link"},e,{hideIcon:!0,onClick:W})))})))))))},I=t(9);t(133);var L=function(e){var a,t=e.block,n=e.buttonClass,l=e.center,c=e.description,i=e.size,o=e.width;return r.a.createElement("div",{className:E()("mailing-list",(a={"mailing-list--block":t,"mailing-list--center":l},a["mailing-list--"+i]=i,a))},!1!==c&&r.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),r.a.createElement("form",{action:"https://app.getvero.com/forms/a748ded7ce0da69e6042fa1e21042506",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:E()("input","input--"+i),name:"email",placeholder:"you@email.com",type:"email",style:{width:o}}),r.a.createElement("button",{className:E()("button","button--"+(n||"primary"),"button--"+i),type:"submit"},"Subscribe")))},M=t(134),A=t.n(M);function P(e){var a=e.to,t=e.href,n=e.label,l=Object(I.a)(e,["to","href","label"]),c=Object(w.a)(a);return r.a.createElement(o.a,Object(i.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},l),n)}var F=function(e){var a=e.url,t=e.alt;return r.a.createElement(d.a,{className:"footer__logo",alt:t,src:a})};var B=function(){var e=Object(g.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=t||{},l=n.copyright,c=n.links,i=void 0===c?[]:c,o=n.logo,m=void 0===o?{}:o,s=Object(w.a)(m.src);return t?r.a.createElement("footer",{className:E()("footer",{"footer--dark":"dark"===t.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(d.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"gnet",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(L,{description:!1,width:"150px"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/_andy_pan",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"gnet's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/panjf2000/gnet",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"gnet's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://strikefreedom.top/rss.xml",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"gnet's RSS feed"})))),i.map((function(e,a){return r.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?r.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(P,e))}))):null)}))),(m||l)&&r.a.createElement("div",{className:"text--center"},m&&m.src&&r.a.createElement("div",{className:"margin-bottom--sm"},m.href?r.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:A.a.footerLogoLink},r.a.createElement(F,{alt:m.alt,url:s})):r.a.createElement(F,{alt:m.alt,url:s}),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.digitalocean.com/",target:"_blank",rel:"noopener noreferrer",className:A.a.footerLogoLink},r.a.createElement("img",{alt:"DigitalOcean",src:"https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/PoweredByDO/DO_Powered_by_Badge_blue.svg",width:"201px"}))),l,r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("a",{href:"https://github.com/panjf2000/gnet/security/policy"},"Security Policy"),"\xa0\u2022\xa0",r.a.createElement("a",{href:"https://github.com/panjf2000/gnet/blob/master/PRIVACY.md"},"Privacy Policy"))))):null},V=t(271),J=t(272),R=t(3);t(135);a.a=function(e){var a=Object(g.a)().siteConfig,t=void 0===a?{}:a,n=t.favicon,i=(t.tagline,t.title),o=t.themeConfig.image,m=t.url,s=e.children,d=e.title,u=e.noFooter,h=e.description,b=e.image,E=e.keywords,v=(e.permalink,e.version),p=d?d+" | "+i:i,f=b||o,_=m+Object(w.a)(f),N=Object(w.a)(n),k=Object(R.h)(),y=k?"https://gnet.host"+(k.pathname.endsWith("/")?k.pathname:k.pathname+"/"):null;return r.a.createElement(J.a,null,r.a.createElement(V.a,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),p&&r.a.createElement("title",null,p),p&&r.a.createElement("meta",{property:"og:title",content:p}),n&&r.a.createElement("link",{rel:"shortcut icon",href:N}),h&&r.a.createElement("meta",{name:"description",content:h}),h&&r.a.createElement("meta",{property:"og:description",content:h}),v&&r.a.createElement("meta",{name:"docsearch:version",content:v}),E&&E.length&&r.a.createElement("meta",{name:"keywords",content:E.join(",")}),f&&r.a.createElement("meta",{property:"og:image",content:_}),f&&r.a.createElement("meta",{property:"twitter:image",content:_}),f&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),f&&r.a.createElement("meta",{name:"twitter:site",content:"@vectordotdev"}),f&&r.a.createElement("meta",{name:"twitter:creator",content:"@vectordotdev"}),y&&r.a.createElement("meta",{property:"og:url",content:y}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),y&&r.a.createElement("link",{rel:"canonical",href:y})),r.a.createElement(l.a,null),r.a.createElement(D,null),r.a.createElement("div",{className:"main-wrapper"},s),!u&&r.a.createElement(B,null)))}},258:function(e,a,t){var n=t(24).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||t(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},259:function(e,a,t){"use strict";var n=t(9),r=t(0),l=t.n(r),c=t(247),i=t.n(c),o=t(248),m=(t(139),t(140)),s=t.n(m);a.a=function(e){return function(a){var t,r=a.id,c=Object(n.a)(a,["id"]),m=Object(o.a)().siteConfig,d=(m=void 0===m?{}:m).themeConfig,u=(d=void 0===d?{}:d).navbar,h=(u=void 0===u?{}:u).hideOnScroll,g=void 0!==h&&h;return r?l.a.createElement(e,c,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:i()("anchor",(t={},t[s.a.enhancedAnchor]=!g,t)),id:r}),l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#"),c.children):l.a.createElement(e,c)}}}}]);