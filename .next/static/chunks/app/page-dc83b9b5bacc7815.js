(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2188:function(e,t,n){Promise.resolve().then(n.t.bind(n,3235,23)),Promise.resolve().then(n.bind(n,5049))},5049:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/profile.de00efdd.png",height:4038,width:3858,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBklEQVR42mNwszBhYgACKWUt3dxA5+/xbpbPgFwZkJiSmi4TQ2tKCCuIk+nnVHJwSs3/dS35/1319aJBYum+ziwMeydWs4A4B2e0d59b0PP/xKy2/xs6K2tBYivqMlkYrp68ADZhhh+D9PEZ9b939RT/B3IlQGJHdx8GyzFcPHdf9s69jxNvHD7w//LOjf+vXHm67OLFJ8oMIHDz5uuyRw8//X/29Nv/t2/+/H/35ve/J4+//L9/9+3/ixceNDPcvfPm37MnX/+/evHz9+uXv/6/evnz/4unX3/fv/vm/9XLj/8z3L75/P+dWy//PX/65f/zZ9/+vwDh5z/+X7pw/9+Fs7f/AgCGkJKtGSXgyAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},3235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(5996).Z,r=n(8644).Z,a=n(9536).Z,o=n(872).Z,l=a(n(6006)),s=r(n(0)),d=n(1326),u=n(2861),c=n(4038);n(5655);var f=r(n(209));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,r,a,o,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;r.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:r,widthInt:a,qualityInt:s,className:d,imgStyle:u,blurStyle:c,isLazy:f,fill:p,placeholder:g,loading:m,srcString:v,config:y,unoptimized:b,loader:w,onLoadRef:_,onLoadingCompleteRef:A,setBlurComplete:S,setShowAltText:C,onLoad:E,onError:x}=e,j=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},j,{loading:m,width:a,height:r,decoding:"async","data-nimg":p?"fill":"1",className:d,style:i({},u,c)},n,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&h(e,v,g,_,A,S,b))},[v,g,_,A,S,x,b,t]),onLoad:e=>{let t=e.currentTarget;h(t,v,g,_,A,S,b)},onError:e=>{C(!0),"blur"===g&&S(!0),x&&x(e)}})))}),y=l.forwardRef((e,t)=>{let n,r;var a,{src:h,sizes:y,unoptimized:b=!1,priority:w=!1,loading:_,className:A,quality:S,width:C,height:E,fill:x,style:j,onLoad:P,onLoadingComplete:O,placeholder:z="empty",blurDataURL:k,layout:M,objectFit:I,objectPosition:R,lazyBoundary:D,lazyRoot:L}=e,B=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let U=l.useContext(c.ImageConfigContext),N=l.useMemo(()=>{let e=p||U||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:n})},[U]),Z=B,F=Z.loader||f.default;delete Z.loader;let H="__next_img_default"in F;if(H){if("custom"===N.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=F;F=t=>{let{config:n}=t,i=o(t,["config"]);return e(i)}}if(M){"fill"===M&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(j=i({},j,e));let t={responsive:"100vw",fill:"100vw"}[M];t&&!y&&(y=t)}let J="",T=m(C),W=m(E);if("object"==typeof(a=h)&&(g(a)||void 0!==a.src)){let e=g(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,r=e.blurHeight,k=k||e.blurDataURL,J=e.src,!x){if(T||W){if(T&&!W){let t=T/e.width;W=Math.round(e.height*t)}else if(!T&&W){let t=W/e.height;T=Math.round(e.width*t)}}else T=e.width,W=e.height}}let G=!w&&("lazy"===_||void 0===_);((h="string"==typeof h?h:J).startsWith("data:")||h.startsWith("blob:"))&&(b=!0,G=!1),N.unoptimized&&(b=!0),H&&h.endsWith(".svg")&&!N.dangerouslyAllowSVG&&(b=!0);let[V,X]=l.useState(!1),[Y,q]=l.useState(!1),K=m(S),Q=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:R}:{},Y?{}:{color:"transparent"},j),$="blur"===z&&k&&!V?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(d.getImageBlurSvg({widthInt:T,heightInt:W,blurWidth:n,blurHeight:r,blurDataURL:k,objectFit:Q.objectFit}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:i,width:r,quality:a,sizes:o,loader:l}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,n){let{deviceSizes:i,allSizes:r}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let a=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:a,kind:"x"}}(t,r,o),u=s.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:s.map((e,i)=>"".concat(l({config:t,src:n,quality:a,width:e})," ").concat("w"===d?e:i+1).concat(d)).join(", "),src:l({config:t,src:n,quality:a,width:s[u]})}}({config:N,src:h,unoptimized:b,width:T,quality:K,sizes:y,loader:F}),et=h,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:Z.crossOrigin},ei=l.useRef(P);l.useEffect(()=>{ei.current=P},[P]);let er=l.useRef(O);l.useEffect(()=>{er.current=O},[O]);let ea=i({isLazy:G,imgAttributes:ee,heightInt:W,widthInt:T,qualityInt:K,className:A,imgStyle:Q,blurStyle:$,loading:_,config:N,fill:x,unoptimized:b,placeholder:z,loader:F,srcString:et,onLoadRef:ei,onLoadingCompleteRef:er,setBlurComplete:X,setShowAltText:q},Z);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},ea,{ref:t})),w?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6842:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var i=(0,n(8644).Z)(n(6006));let r=i.default.createContext({});t.AmpStateContext=r},4050:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){let{ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&n}},0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=u,t.default=void 0;var i=n(5996).Z,r=n(8644).Z,a=(0,n(9536).Z)(n(6006)),o=r(n(6917)),l=n(6842),s=n(5266),d=n(4050);function u(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(5655);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(u(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,i={};return r=>{let a=!0,o=!1;if(r.key&&"number"!=typeof r.key&&r.key.indexOf("$")>0){o=!0;let t=r.key.slice(r.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(r.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?a=!1:n.add(t);else{let e=r.props[t],n=i[t]||new Set;("name"!==t||!o)&&n.has(e)?a=!1:(n.add(e),i[t]=n)}}}}return a}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t=i({},e.props||{});return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}t.default=function(e){let{children:t}=e,n=a.useContext(l.AmpStateContext),i=a.useContext(s.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:i,inAmpMode:d.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1326:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:r,blurDataURL:a,objectFit:o}=e,l=i||t,s=r||n,d=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&r?"1":"20","'/%3E").concat(d,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},4038:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImageConfigContext=void 0;var i=(0,n(8644).Z)(n(6006)),r=n(2861);let a=i.default.createContext(r.imageConfigDefault);t.ImageConfigContext=a},2861:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0,t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"],t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},209:function(e,t){"use strict";function n(e){let{config:t,src:n,width:i,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},6917:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let r=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}if(r){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return a(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),a(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null};var i=(0,n(9536).Z)(n(6006));let r=!1,a=r?()=>{}:i.useLayoutEffect,o=r?()=>{}:i.useEffect},5655:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0;let n=e=>{};t.warnOnce=n}},function(e){e.O(0,[701,744],function(){return e(e.s=2188)}),_N_E=e.O()}]);