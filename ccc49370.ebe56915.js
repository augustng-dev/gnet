/*! For license information please see ccc49370.ebe56915.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{245:function(e,t,a){"use strict";a.r(t);a(255),a(297),a(19);var n=a(0),r=a.n(n),u=a(273),l=a(309),i=a(254),c=(a(310),a(249));var o=function(e){var t=e.nextItem,a=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Previous Post"),r.a.createElement("div",{className:"pagination-nav__link--label"},"\xab ",a.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Next Post"),r.a.createElement("div",{className:"pagination-nav__link--label"},t.title," \xbb"))))},s=a(280),D=a(246),m=a(274),d=a(247),E=a.n(d),g=a(275),f=a.n(g),b=a(256),p=a(313),h=a(298),v=a.n(h),F=a(223),y=a.n(F);t.default=function(e){var t=e.content,a=t.frontMatter,n=t.metadata,c=a.author_github,d=a.id,g=a.title,h=n.date,F=n.tags,C=v()(t.toString()),N=new Date(Date.parse(h)),_=Object(b.a)(F,"blog").find((function(e){return"domain"==e.category})),w=_?_.value:null,k=Object(p.a)();return k&&k.id==d&&Object(p.b)(),r.a.createElement(i.a,{title:n.title,description:n.description},r.a.createElement("article",{className:y.a.blogPost},r.a.createElement("header",{className:E()("hero","domain-bg","domain-bg--"+w,y.a.header)},r.a.createElement("div",{className:E()("container",y.a.headerContainer)},r.a.createElement("div",{class:"hero--avatar"},r.a.createElement(u.a,{github:c,size:"lg",nameSuffix:r.a.createElement(r.a.Fragment,null," / ",r.a.createElement("time",{pubdate:"pubdate",dateTime:N.toISOString()},f()(N,"mmm dS"))," / ",C.text),rel:"author",subTitle:!1,vertical:!0})),r.a.createElement("h1",null,g),r.a.createElement("div",{className:"hero--subtitle"},n.description),r.a.createElement("div",{className:"hero--tags"},r.a.createElement(m.a,{colorProfile:"blog",tags:F})))),r.a.createElement("div",{className:"container container--xs margin-vert--xl"},r.a.createElement("section",{className:"markdown dropcap"},r.a.createElement(D.a,{components:s.a},r.a.createElement(t,null))),r.a.createElement("section",null,r.a.createElement("h2",null,"Like What You See?"),r.a.createElement(l.a,null)),(n.nextItem||n.prevItem)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(o,{nextItem:n.nextItem,prevItem:n.prevItem})))))}},246:function(e,t,a){"use strict";a.d(t,"a",(function(){return D})),a.d(t,"b",(function(){return E}));var n=a(0),r=a.n(n);function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},D=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,u=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),D=s(a),d=n,E=D["".concat(l,".").concat(d)]||D[d]||m[d]||u;return a?r.a.createElement(E,i({ref:t},o,{components:a})):r.a.createElement(E,i({ref:t},o))}));function E(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=a.length,l=new Array(u);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<u;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},253:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return u}));var n=a(248);function r(){var e=Object(n.a)().siteConfig,t=(void 0===e?{}:e).customFields.metadata.latest_highlight,a=Date.parse(t.date),r=new Date,u=Math.abs(r-a),l=Math.ceil(u/864e5),i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("highlightsViewedAt")||"0"))),l<30&&(!i||i<a)?t:null}function u(){"undefined"!=typeof window&&window.localStorage.setItem("highlightsViewedAt",(new Date).getTime())}},254:function(e,t,a){"use strict";a(263);var n=a(0),r=a.n(n),u=a(264),l=a(252),i=a(1),c=(a(265),a(249)),o=a(266),s=a(251),D=a.n(s),m=a(267),d=a.n(m),E=a(248),g=a(247),f=a.n(g),b=a(131),p=a.n(b),h=function(){return r.a.createElement("span",{className:f()(p.a.toggle,p.a.moon)})},v=function(){return r.a.createElement("span",{className:f()(p.a.toggle,p.a.sun)})},F=function(e){var t=Object(E.a)().isClient;return r.a.createElement(d.a,Object(i.a)({disabled:!t,icons:{checked:r.a.createElement(h,null),unchecked:r.a.createElement(v,null)}},e))},y=a(253),C=a(250),N=a(270),_=a(261),w=a(262),k=a(257),O=a(132),j=a.n(O);function T(e){var t=e.href,a=e.hideIcon,n=e.label,u=e.onClick,l=(e.position,e.right),o=e.to,s=function(e,t){var a={label:e};switch(e.toLowerCase()){case"chat":return a.hideText=1==t,a.icon="message-circle",a;case"community":return a.hideText=1==t,a.icon="users",a;case"github":return a.badge="8.1k",a.hideText=!1,a.icon="github",a;case"highlights":return Object(y.a)()&&(a.badge="new",a.badgeStyle="primary"),a.hideText=1==t,a.icon="gift",a;default:return a}}(n,l)||{},D=Object(C.a)(o);return r.a.createElement(c.a,Object(i.a)({className:f()("navbar__item navbar__link",s.className,{navbar__item__icon_only:s.hideText}),title:s.hideText?n:null,onClick:u},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:D}),!a&&s.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-"+s.icon})," ",s.iconLabel),!s.hideText&&s.label,s.badge&&r.a.createElement("span",{className:f()("badge","badge--"+(s.badgeStyle||"secondary"))},s.badge))}var A=function(){var e,t=Object(E.a)(),a=t.siteConfig.themeConfig,u=a.navbar,l=(u=void 0===u?{}:u).title,s=u.links,m=void 0===s?[]:s,d=u.hideOnScroll,g=void 0!==d&&d,b=a.disableDarkMode,p=void 0!==b&&b,h=(t.isClient,Object(n.useState)(!1)),v=h[0],y=h[1],C=Object(n.useState)(!1),O=C[0],A=C[1],M=Object(k.a)(),S=M.isDarkTheme,x=M.setLightTheme,B=M.setDarkTheme,P=Object(N.a)(g),I=P.navbarRef,L=P.isNavbarVisible,H=Object(w.a)(),R=H.logoLink,W=H.logoLinkProps,z=H.logoImageUrl,J=H.logoAlt;Object(_.a)(v);var U=Object(n.useCallback)((function(){y(!0)}),[y]),V=Object(n.useCallback)((function(){y(!1)}),[y]),G=Object(n.useCallback)((function(e){return e.target.checked?B():x()}),[x,B]);return r.a.createElement("nav",{ref:I,className:f()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":v},e[j.a.navbarHideable]=g,e[j.a.navbarHidden]=!L,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:U,onKeyDown:U},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(c.a,Object(i.a)({className:"navbar__brand",to:R},W),null!=z&&r.a.createElement(D.a,{className:"navbar__logo",src:z,alt:J}),null!=l&&r.a.createElement("strong",{className:O?j.a.hideLogoText:""},l)),m.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(T,Object(i.a)({},e,{left:!0,key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},m.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(T,Object(i.a)({},e,{right:!0,key:t}))})),!p&&r.a.createElement(F,{className:j.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:S,onChange:G}),r.a.createElement(o.a,{handleSearchBarToggle:A,isSearchBarExpanded:O}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:V}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(c.a,Object(i.a)({className:"navbar__brand",onClick:V,to:R},W),null!=z&&r.a.createElement(D.a,{className:"navbar__logo",src:z,alt:J}),null!=l&&r.a.createElement("strong",null,l)),!p&&v&&r.a.createElement(F,{"aria-label":"Dark mode toggle in sidebar",checked:S,onChange:G})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},m.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(T,Object(i.a)({className:"menu__link"},e,{hideIcon:!0,onClick:V})))})))))))},M=a(9);a(133);var S=function(e){var t,a=e.block,n=e.buttonClass,u=e.center,l=e.description,i=e.size,c=e.width;return r.a.createElement("div",{className:f()("mailing-list",(t={"mailing-list--block":a,"mailing-list--center":u},t["mailing-list--"+i]=i,t))},!1!==l&&r.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),r.a.createElement("form",{action:"https://app.getvero.com/forms/a748ded7ce0da69e6042fa1e21042506",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:f()("input","input--"+i),name:"email",placeholder:"you@email.com",type:"email",style:{width:c}}),r.a.createElement("button",{className:f()("button","button--"+(n||"primary"),"button--"+i),type:"submit"},"Subscribe")))},x=a(134),B=a.n(x);function P(e){var t=e.to,a=e.href,n=e.label,u=Object(M.a)(e,["to","href","label"]),l=Object(C.a)(t);return r.a.createElement(c.a,Object(i.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:l},u),n)}var I=function(e){var t=e.url,a=e.alt;return r.a.createElement(D.a,{className:"footer__logo",alt:a,src:t})};var L=function(){var e=Object(E.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},u=n.copyright,l=n.links,i=void 0===l?[]:l,c=n.logo,o=void 0===c?{}:c,s=Object(C.a)(o.src);return a?r.a.createElement("footer",{className:f()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(D.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"gnet",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(S,{description:!1,width:"150px"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/_andy_pan",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"gnet's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/panjf2000/gnet",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"gnet's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://strikefreedom.top/rss.xml",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"gnet's RSS feed"})))),i.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(P,e))}))):null)}))),(o||u)&&r.a.createElement("div",{className:"text--center"},o&&o.src&&r.a.createElement("div",{className:"margin-bottom--sm"},o.href?r.a.createElement("a",{href:o.href,target:"_blank",rel:"noopener noreferrer",className:B.a.footerLogoLink},r.a.createElement(I,{alt:o.alt,url:s})):r.a.createElement(I,{alt:o.alt,url:s}),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.digitalocean.com/",target:"_blank",rel:"noopener noreferrer",className:B.a.footerLogoLink},r.a.createElement("img",{alt:"DigitalOcean",src:"https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/PoweredByDO/DO_Powered_by_Badge_blue.svg",width:"201px"}))),u,r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("a",{href:"https://github.com/panjf2000/gnet/security/policy"},"Security Policy"),"\xa0\u2022\xa0",r.a.createElement("a",{href:"https://github.com/panjf2000/gnet/blob/master/PRIVACY.md"},"Privacy Policy"))))):null},H=a(271),R=a(272),W=a(3);a(135);t.a=function(e){var t=Object(E.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=(a.tagline,a.title),c=a.themeConfig.image,o=a.url,s=e.children,D=e.title,m=e.noFooter,d=e.description,g=e.image,f=e.keywords,b=(e.permalink,e.version),p=D?D+" | "+i:i,h=g||c,v=o+Object(C.a)(h),F=Object(C.a)(n),y=Object(W.h)(),N=y?"https://gnet.host"+(y.pathname.endsWith("/")?y.pathname:y.pathname+"/"):null;return r.a.createElement(R.a,null,r.a.createElement(H.a,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),p&&r.a.createElement("title",null,p),p&&r.a.createElement("meta",{property:"og:title",content:p}),n&&r.a.createElement("link",{rel:"shortcut icon",href:F}),d&&r.a.createElement("meta",{name:"description",content:d}),d&&r.a.createElement("meta",{property:"og:description",content:d}),b&&r.a.createElement("meta",{name:"docsearch:version",content:b}),f&&f.length&&r.a.createElement("meta",{name:"keywords",content:f.join(",")}),h&&r.a.createElement("meta",{property:"og:image",content:v}),h&&r.a.createElement("meta",{property:"twitter:image",content:v}),h&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),h&&r.a.createElement("meta",{name:"twitter:site",content:"@vectordotdev"}),h&&r.a.createElement("meta",{name:"twitter:creator",content:"@vectordotdev"}),N&&r.a.createElement("meta",{property:"og:url",content:N}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),N&&r.a.createElement("link",{rel:"canonical",href:N})),r.a.createElement(u.a,null),r.a.createElement(A,null),r.a.createElement("div",{className:"main-wrapper"},s),!m&&r.a.createElement(L,null)))}},256:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a(79),a(279),a(255),a(78);var n=a(260),r=a.n(n);function u(e,t){var a=new r.a;return e.map((function(e){var n=e;return"string"==typeof e&&(n={label:e,permalink:"/"+t+"/tags/"+a.slug(e)}),function(e,t){if(e.enriched)return e;var a=e.label.split(": ",2),n=a[0],r=a[1],u="primary";switch(n){case"domain":u="blue";break;case"type":u="pink";break;default:u="primary"}return{category:n,count:e.count,enriched:!0,label:e.label,permalink:e.permalink,style:u,value:r}}(n)}))}},258:function(e,t,a){var n=a(24).f,r=Function.prototype,u=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(u)[1]}catch(e){return""}}})},260:function(e,t,a){var n=a(269);e.exports=i;var r=Object.hasOwnProperty,u=/\s/g,l=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~\u2019]/g;function i(){if(!(this instanceof i))return new i;this.reset()}function c(e,t){return"string"!=typeof e?"":(t||(e=e.toLowerCase()),e.trim().replace(l,"").replace(n(),"").replace(u,"-"))}i.prototype.slug=function(e,t){for(var a=c(e,!0===t),n=a;r.call(this.occurrences,a);)this.occurrences[n]++,a=n+"-"+this.occurrences[n];return this.occurrences[a]=0,a},i.prototype.reset=function(){this.occurrences=Object.create(null)},i.slug=c},268:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(249),l=a(247),i=a.n(l);t.a=function(e){var t=e.count,a=e.label,n=e.permalink,l=e.style,c=e.value,o=e.valueOnly;return r.a.createElement(u.a,{to:n+"/",className:i()("badge","badge--rounded","badge--"+l)},o?c:a,t&&r.a.createElement(r.a.Fragment,null," (",t,")"))}},269:function(e,t){e.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},273:function(e,t,a){"use strict";a(258),a(255);var n=a(0),r=a.n(n),u=a(247),l=a.n(u),i=a(248);a(137);t.a=function(e){var t,a=e.bio,n=e.className,u=e.github,c=e.nameSuffix,o=e.rel,s=e.size,D=e.subTitle,m=e.vertical,d=Object(i.a)().siteConfig,E=(void 0===d?{}:d).customFields.metadata.team,g=E.find((function(e){return e.github==u}))||E.find((function(e){return"ben"==e.id}));return r.a.createElement("div",{className:l()("avatar",n,(t={},t["avatar--"+s]=s,t["avatar--vertical"]=m,t))},r.a.createElement("img",{className:l()("avatar__photo","avatar__photo--"+s),src:g.avatar}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("div",{className:"avatar__name"},r.a.createElement("a",{href:g.github,target:"_blank",rel:o},g.name),c),D&&r.a.createElement("small",{className:"avatar__subtitle"},D),!D&&a&&r.a.createElement("small",{className:"avatar__subtitle",dangerouslySetInnerHTML:{__html:g.bio}})))}},274:function(e,t,a){"use strict";var n=a(1),r=a(0),u=a.n(r),l=(a(249),a(268)),i=a(247),c=a.n(i),o=a(256),s=a(138),D=a.n(s);t.a=function(e){var t,a=e.block,r=e.colorProfile,i=e.tags,s=e.valuesOnly,m=Object(o.a)(i,r);return u.a.createElement("span",{className:c()(D.a.tags,(t={},t[D.a.tagsBlock]=a,t))},m.map((function(e,t){return u.a.createElement(l.a,Object(n.a)({key:t,valueOnly:s},e))})))}},275:function(e,t,a){var n;!function(r){"use strict";var u,l,i,c=(u=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,l=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,i=/[^-+\dA-Z]/g,function(e,t,a,n){if(1!==arguments.length||"string"!==m(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var r=(t=String(c.masks[t]||t||c.masks.default)).slice(0,4);"UTC:"!==r&&"GMT:"!==r||(t=t.slice(4),a=!0,"GMT:"===r&&(n=!0));var d=a?"getUTC":"get",E=e[d+"Date"](),g=e[d+"Day"](),f=e[d+"Month"](),b=e[d+"FullYear"](),p=e[d+"Hours"](),h=e[d+"Minutes"](),v=e[d+"Seconds"](),F=e[d+"Milliseconds"](),y=a?0:e.getTimezoneOffset(),C=s(e),N=D(e),_={d:E,dd:o(E),ddd:c.i18n.dayNames[g],dddd:c.i18n.dayNames[g+7],m:f+1,mm:o(f+1),mmm:c.i18n.monthNames[f],mmmm:c.i18n.monthNames[f+12],yy:String(b).slice(2),yyyy:b,h:p%12||12,hh:o(p%12||12),H:p,HH:o(p),M:h,MM:o(h),s:v,ss:o(v),l:o(F,3),L:o(Math.round(F/10)),t:p<12?c.i18n.timeNames[0]:c.i18n.timeNames[1],tt:p<12?c.i18n.timeNames[2]:c.i18n.timeNames[3],T:p<12?c.i18n.timeNames[4]:c.i18n.timeNames[5],TT:p<12?c.i18n.timeNames[6]:c.i18n.timeNames[7],Z:n?"GMT":a?"UTC":(String(e).match(l)||[""]).pop().replace(i,""),o:(y>0?"-":"+")+o(100*Math.floor(Math.abs(y)/60)+Math.abs(y)%60,4),S:["th","st","nd","rd"][E%10>3?0:(E%100-E%10!=10)*E%10],W:C,N:N};return t.replace(u,(function(e){return e in _?_[e]:e.slice(1,e.length-1)}))});function o(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function s(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);var r=(t-a)/6048e5;return 1+Math.floor(r)}function D(e){var t=e.getDay();return 0===t&&(t=7),t}function m(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}c.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},c.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(n=function(){return c}.call(t,a,t,e))||(e.exports=n)}()},278:function(e,t,a){"use strict";(function(e){var n=a(1),r=(a(276),a(277),a(78),a(79),a(287),a(0)),u=a.n(r),l=a(288),i=a.n(l),c=a(301),o=a(52),s=a(247),D=a.n(s),m=a(296),d=a(289),E=a.n(d),g=a(248),f=a(257),b=a(136),p=a.n(b);(void 0!==e?e:window).Prism=o.a,a(290),a(291),a(292),a(293),a(294),a(295);var h=/{([\d,-]+)}/,v=/title=".*"/;t.a=function(e){var t=e.children,a=e.className,l=e.metastring,o=Object(g.a)().siteConfig.themeConfig.prism,s=void 0===o?{}:o,d=Object(r.useState)(!1),b=d[0],F=d[1],y=Object(r.useState)(!1),C=y[0],N=y[1];Object(r.useEffect)((function(){N(!0)}),[]);var _=Object(r.useRef)(null),w=Object(r.useRef)(null),k=[],O="",j=Object(f.a)().isDarkTheme,T=s.theme||m.a,A=s.darkTheme||T,M=j?A:T;if(l&&h.test(l)){var S=l.match(h)[1];k=E.a.parse(S).filter((function(e){return e>0}))}l&&v.test(l)&&(O=l.match(v)[0].split("title=")[1].replace(/"+/g,"")),Object(r.useEffect)((function(){var e;return w.current&&(e=new i.a(w.current,{target:function(){return _.current}})),function(){e&&e.destroy()}}),[w.current,_.current]);var x=a&&a.replace(/language-/,"");!x&&s.defaultLanguage&&(x=s.defaultLanguage);var B=function(){window.getSelection().empty(),F(!0),setTimeout((function(){return F(!1)}),2e3)};return u.a.createElement(c.a,Object(n.a)({},c.b,{key:C,theme:M,code:t.trim(),language:x}),(function(e){var t,a,r=e.className,l=e.style,i=e.tokens,c=e.getLineProps,o=e.getTokenProps;return u.a.createElement(u.a.Fragment,null,O&&u.a.createElement("div",{style:l,className:p.a.codeBlockTitle},O),u.a.createElement("div",{className:p.a.codeBlockContent},u.a.createElement("button",{ref:w,type:"button","aria-label":"Copy code to clipboard",className:D()(p.a.copyButton,(t={},t[p.a.copyButtonWithTitle]=O,t)),onClick:B},b?"Copied":"Copy"),u.a.createElement("pre",{className:D()(r,p.a.codeBlock,(a={},a[p.a.codeBlockWithTitle]=O,a))},u.a.createElement("div",{ref:_,className:p.a.codeBlockLines,style:l},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=c({line:e,key:t});return k.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),u.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return u.a.createElement("span",Object(n.a)({key:t},o({token:e,key:t})))})))}))))))}))}}).call(this,a(77))},280:function(e,t,a){"use strict";var n=a(1),r=a(0),u=a.n(r),l=a(249),i=a(278),c=a(259),o=a(141),s=a.n(o);t.a={code:function(e){var t=e.children;return"string"==typeof t?u.a.createElement(i.a,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?u.a.createElement("a",e):u.a.createElement(l.a,e)},pre:function(e){return u.a.createElement("div",Object(n.a)({className:s.a.mdxCodeBlock},e))},h1:Object(c.a)("h1"),h2:Object(c.a)("h2"),h3:Object(c.a)("h3"),h4:Object(c.a)("h4"),h5:Object(c.a)("h5"),h6:Object(c.a)("h6")}},297:function(e,t,a){"use strict";a(311);var n=a(8),r=a(81),u=a(10),l=/./.toString,i=function(e){a(15)(RegExp.prototype,"toString",e,!0)};a(13)((function(){return"/a/b"!=l.call({source:"a",flags:"b"})}))?i((function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!u&&e instanceof RegExp?r.call(e):void 0)})):"toString"!=l.name&&i((function(){return l.call(this)}))},298:function(e,t,a){e.exports=a(312)},309:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(247),l=a.n(u);t.a=function(e){var t=e.github,a=e.inline,n=e.size,u=e.style,i=l()("panel","panel--button","panel--"+n,"panel--"+u,{"panel--button--inline":a});return r.a.createElement("div",{className:"row row--squished"},r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://twitter.com/_andy_pan",target:"_blank",className:i},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-twitter",title:"Twitter"})),r.a.createElement("div",null,r.a.createElement("div",{className:"panel--title"},"Follow @_andy_pan"),r.a.createElement("div",{className:"panel--description"},"Get real-time updates!")))),0!=t&&r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://github.com/panjf2000/gnet",target:"_blank",className:i},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-github"})),r.a.createElement("div",null,r.a.createElement("div",{className:"panel--title"},"Star panjf2000/gnet"),r.a.createElement("div",{className:"panel--description"},"Star the repo to support us.")))))}},310:function(e,t,a){"use strict";a(255),a(297),a(19);var n=a(0),r=a.n(n),u=a(273),l=a(249),i=(a(280),a(246),a(274)),c=a(247),o=a.n(c),s=a(275),D=a.n(s),m=a(256),d=a(298),E=a.n(d);t.a=function(e){var t=e.children,a=e.frontMatter,n=e.metadata,c=(e.truncated,e.isBlogPostPage,n.date),s=n.description,d=n.permalink,g=n.tags,f=a.author_github,b=a.title,p=E()(t.toString()),h=new Date(Date.parse(c)),v=Object(m.a)(g,"blog").find((function(e){return"domain"==e.category})),F=v?v.value:null;return r.a.createElement(l.a,{to:d+"/",className:o()("panel","domain-bg","domain-bg--hover","domain-bg--"+F)},r.a.createElement("article",null,r.a.createElement("h2",null,b),r.a.createElement("div",{className:"subtitle"},s),r.a.createElement(u.a,{github:f,size:"sm",subTitle:r.a.createElement(r.a.Fragment,null,r.a.createElement("time",{pubdate:"pubdate",dateTime:h.toISOString()},D()(h,"mmm dS"))," / ",p.text),rel:"author"}),r.a.createElement(i.a,{colorProfile:"blog",tags:g})))}},311:function(e,t,a){a(10)&&"g"!=/./g.flags&&a(24).f(RegExp.prototype,"flags",{configurable:!0,get:a(81)})},312:function(e,t,a){"use strict";function n(e){return" "===e||"\n"===e||"\r"===e||"\t"===e}e.exports=function(e,t){var a,r,u=0,l=0,i=e.length-1;for((t=t||{}).wordsPerMinute=t.wordsPerMinute||200,a=t.wordBound||n;a(e[l]);)l++;for(;a(e[i]);)i--;for(r=l;r<=i;){for(;r<=i&&!a(e[r]);r++);for(u++;r<=i&&a(e[r]);r++);}var c=u/t.wordsPerMinute,o=60*c*1e3;return{text:Math.ceil(c.toFixed(2))+" min read",minutes:c,time:o,words:u}}},313:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return u}));var n=a(248);function r(){var e=Object(n.a)().siteConfig,t=(void 0===e?{}:e).customFields.metadata.latest_post,a=Date.parse(t.date),r=new Date,u=Math.abs(r-a),l=Math.ceil(u/864e5),i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("blogViewedAt")||"0"))),l<30&&(!i||i<a)?t:null}function u(){"undefined"!=typeof window&&window.localStorage.setItem("blogViewedAt",(new Date).getTime())}}}]);