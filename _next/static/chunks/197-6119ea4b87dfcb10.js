(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{6010:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o);else for(r in t)t[r]&&(n&&(n+=" "),n+=r)}return n}(e))&&(o&&(o+=" "),o+=t);return o}},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return f.ImageLoaderProps}}),t.default=function(e){let t,r;var n,{src:l,sizes:m,unoptimized:y=!1,priority:b=!1,loading:w,className:_,quality:C,width:E,height:j,fill:S,style:x,onLoad:P,onLoadingComplete:M,placeholder:O="empty",blurDataURL:k,layout:I,objectFit:z,objectPosition:R,lazyBoundary:L,lazyRoot:$}=e,A=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=a.useContext(c.ImageConfigContext),N=a.useMemo(()=>{let e=p||T||f.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return o({},e,{allSizes:t,deviceSizes:r})},[T]),D=A,B=D.loader||d.default;if(delete D.loader,"__next_img_default"in B){if("custom"===N.loader)throw Error(`Image with src "${l}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{let U=B;B=e=>{let{config:t}=e,r=i(e,["config"]);return U(r)}}if(I){"fill"===I&&(S=!0);let Z={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];Z&&(x=o({},x,Z));let W={responsive:"100vw",fill:"100vw"}[I];W&&!m&&(m=W)}let q="",F=h(E),G=h(j);if("object"==typeof(n=l)&&(g(n)||void 0!==n.src)){let H=g(l)?l.default:l;if(!H.src)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(H)}`);if(!H.height||!H.width)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(H)}`);if(t=H.blurWidth,r=H.blurHeight,k=k||H.blurDataURL,q=H.src,!S){if(F||G){if(F&&!G){let K=F/H.width;G=Math.round(H.height*K)}else if(!F&&G){let V=G/H.height;F=Math.round(H.width*V)}}else F=H.width,G=H.height}}let J=!b&&("lazy"===w||void 0===w);((l="string"==typeof l?l:q).startsWith("data:")||l.startsWith("blob:"))&&(y=!0,J=!1),N.unoptimized&&(y=!0);let[Q,X]=a.useState(!1),[Y,ee]=a.useState(!1),et=h(C),er=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:R}:{},Y?{}:{color:"transparent"},x),eo="blur"===O&&k&&!Q?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:`url("data:image/svg+xml;charset=utf-8,${s.getImageBlurSvg({widthInt:F,heightInt:G,blurWidth:t,blurHeight:r,blurDataURL:k})}")`}:{},en=function(e){let{config:t,src:r,unoptimized:o,width:n,quality:l,sizes:i,loader:a}=e;if(o)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:o,allSizes:n}=e;if(r){let l=/(^|\s)(1?\d?\d)vw/g,i=[];for(let a;a=l.exec(r);a)i.push(parseInt(a[2]));if(i.length){let u=.01*Math.min(...i);return{widths:n.filter(e=>e>=o[0]*u),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:o,kind:"w"};let s=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:s,kind:"x"}}(t,n,i),f=u.length-1;return{sizes:i||"w"!==s?i:"100vw",srcSet:u.map((e,o)=>`${a({config:t,src:r,quality:l,width:e})} ${"w"===s?e:o+1}${s}`).join(", "),src:a({config:t,src:r,quality:l,width:u[f]})}}({config:N,src:l,unoptimized:y,width:F,quality:et,sizes:m,loader:B}),el=l,ei={imageSrcSet:en.srcSet,imageSizes:en.sizes,crossOrigin:D.crossOrigin},ea=a.useRef(P);a.useEffect(()=>{ea.current=P},[P]);let eu=a.useRef(M);a.useEffect(()=>{eu.current=M},[M]);let es=o({isLazy:J,imgAttributes:en,heightInt:G,widthInt:F,qualityInt:et,className:_,imgStyle:er,blurStyle:eo,loading:w,config:N,fill:S,unoptimized:y,placeholder:O,loader:B,srcString:el,onLoadRef:ea,onLoadingCompleteRef:eu,setBlurComplete:X,setShowAltText:ee},D);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,Object.assign({},es)),b?a.default.createElement(u.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src},ei))):null)};var o=r(6495).Z,n=r(2648).Z,l=r(1598).Z,i=r(7273).Z,a=l(r(7294)),u=n(r(3121)),s=r(2675),f=r(139),c=r(8730);r(7238);var d=n(r(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,n,l,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,u=!1;n.current(o({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>u,persist(){},preventDefault(){a=!0,t.preventDefault()},stopPropagation(){u=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let v=e=>{var{imgAttributes:t,heightInt:r,widthInt:n,qualityInt:l,className:u,imgStyle:s,blurStyle:f,isLazy:c,fill:d,placeholder:p,loading:g,srcString:h,config:v,unoptimized:y,loader:b,onLoadRef:w,onLoadingCompleteRef:_,setBlurComplete:C,setShowAltText:E,onLoad:j,onError:S}=e,x=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=c?"lazy":g,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},x,t,{width:n,height:r,decoding:"async","data-nimg":d?"fill":"1",className:u,loading:g,style:o({},s,f),ref:a.useCallback(e=>{e&&(S&&(e.src=e.src),e.complete&&m(e,h,p,w,_,C,y))},[h,p,w,_,C,S,y]),onLoad(e){let t=e.currentTarget;m(t,h,p,w,_,C,y)},onError(e){E(!0),"blur"===p&&C(!0),S&&S(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(2648).Z,n=r(7273).Z,l=o(r(7294)),i=r(1003),a=r(7795),u=r(4465),s=r(2692),f=r(8245),c=r(9246),d=r(227),p=r(3468);let g=new Set;function h(e,t,r,o){if(i.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let n=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+n;if(g.has(l))return;g.add(l)}Promise.resolve(e.prefetch(t,r,o)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let r,o;let{href:a,as:g,children:v,prefetch:y,passHref:b,replace:w,shallow:_,scroll:C,locale:E,onClick:j,onMouseEnter:S,onTouchStart:x,legacyBehavior:P=!0!==Boolean(!0)}=e,M=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=v,P&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let O=!1!==y,k=l.default.useContext(s.RouterContext),I=l.default.useContext(f.AppRouterContext),z=null!=k?k:I,R=!k,{href:L,as:$}=l.default.useMemo(()=>{if(!k){let e=m(a);return{href:e,as:g?m(g):e}}let[t,r]=i.resolveHref(k,a,!0);return{href:t,as:g?i.resolveHref(k,g):r||t}},[k,a,g]),A=l.default.useRef(L),T=l.default.useRef($);P&&(o=l.default.Children.only(r));let N=P?o&&"object"==typeof o&&o.ref:t,[D,B,U]=c.useIntersection({rootMargin:"200px"}),Z=l.default.useCallback(e=>{(T.current!==$||A.current!==L)&&(U(),T.current=$,A.current=L),D(e),N&&("function"==typeof N?N(e):"object"==typeof N&&(N.current=e))},[$,N,L,U,D]);l.default.useEffect(()=>{z&&B&&O&&h(z,L,$,{locale:E})},[$,L,B,E,O,null==k?void 0:k.locale,z]);let W={ref:Z,onClick(e){P||"function"!=typeof j||j(e),P&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,r,o,n,a,u,s,f,c){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(r)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[n?"replace":"push"](r,o,{shallow:a,locale:s,scroll:u}):t[n?"replace":"push"](o||r,{forceOptimisticNavigation:!c})};f?l.default.startTransition(g):g()}(e,z,L,$,w,_,C,E,R,O)},onMouseEnter(e){P||"function"!=typeof S||S(e),P&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),z&&(O||!R)&&h(z,L,$,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){P||"function"!=typeof x||x(e),P&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),z&&(O||!R)&&h(z,L,$,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!P||b||"a"===o.type&&!("href"in o.props)){let q=void 0!==E?E:null==k?void 0:k.locale,F=(null==k?void 0:k.isLocaleDomain)&&d.getDomainLocale($,q,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);W.href=F||p.addBasePath(u.addLocale($,q,null==k?void 0:k.defaultLocale))}return P?l.default.cloneElement(o,W):l.default.createElement("a",Object.assign({},M,W),r)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!l,[f,c]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(l){if(!s&&!f&&d&&d.tagName){let e=function(e,t,r){let{id:o,observer:n,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===r.root&&e.margin===r.margin);if(o&&(t=i.get(o)))return t;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:n},a.push(r),i.set(r,t),t}(r);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),i.delete(o);let t=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!f){let o=n.requestIdleCallback(()=>c(!0));return()=>n.cancelIdleCallback(o)}},[d,s,r,t,f]);let g=o.useCallback(()=>{c(!1)},[]);return[p,f,g]};var o=r(7294),n=r(4686);let l="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:o,blurHeight:n,blurDataURL:l}=e,i=o||t,a=n||r,u=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&a?`%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ${i} ${a}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${o&&n?"1":"20"}'/%3E${u}%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='${l}'/%3E%3C/svg%3E`:`%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='${l}'/%3E%3C/svg%3E`}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:o,quality:n}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:`${t.path}?url=${encodeURIComponent(r)}&w=${o}&q=${n||75}`}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)},1664:function(e,t,r){e.exports=r(1551)}}]);