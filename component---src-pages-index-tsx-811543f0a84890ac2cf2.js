(self.webpackChunkenewnham_github_io=self.webpackChunkenewnham_github_io||[]).push([[691],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,l,c,u;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(l=s;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(l=s;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!i(e[c[l]],a[c[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function u(){l=e(c.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){c.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",s),f}}},3235:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ot}});var n=r(7294),o=r(2122),i=r(7548),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=(0,i.Z)((function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),l=r(8197),c=r(4660),u=r(4418),f=s,p=function(e){return"theme"!==e},d=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?f:p},y=function(e,t,r){var n;if(t){var o=t.shouldForwardProp;n=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},m=function e(t,r){var i,a,s=t.__emotion_real===t,f=s&&t.__emotion_base||t;void 0!==r&&(i=r.label,a=r.target);var p=y(t,r,s),m=p||d(f),h=!m("as");return function(){var b=arguments,g=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==i&&g.push("label:"+i+";"),null==b[0]||void 0===b[0].raw)g.push.apply(g,b);else{0,g.push(b[0][0]);for(var v=b.length,w=1;w<v;w++)g.push(b[w],b[0][w])}var T=(0,l.w)((function(e,t,r){var o=h&&e.as||f,i="",s=[],y=e;if(null==e.theme){for(var b in y={},e)y[b]=e[b];y.theme=(0,n.useContext)(l.T)}"string"==typeof e.className?i=(0,c.f)(t.registered,s,e.className):null!=e.className&&(i=e.className+" ");var v=(0,u.O)(g.concat(s),t.registered,y);(0,c.M)(t,v,"string"==typeof o);i+=t.key+"-"+v.name,void 0!==a&&(i+=" "+a);var w=h&&void 0===p?d(o):m,T={};for(var O in e)h&&"as"===O||w(O)&&(T[O]=e[O]);return T.className=i,T.ref=r,(0,n.createElement)(o,T)}));return T.displayName=void 0!==i?i:"Styled("+("string"==typeof f?f:f.displayName||f.name||"Component")+")",T.defaultProps=t.defaultProps,T.__emotion_real=T,T.__emotion_base=f,T.__emotion_styles=g,T.__emotion_forwardProp=p,Object.defineProperty(T,"toString",{value:function(){return"."+a}}),T.withComponent=function(t,n){return e(t,(0,o.Z)({},r,n,{shouldForwardProp:y(T,n,!0)})).apply(void 0,g)},T}};m("h1",{target:"e4kicyq2"})({name:"l04ybm",styles:"font-size:30px;font-weight:600;margin-bottom:2rem"});var h,b,g,v,w=m("h1",{target:"e4kicyq1"})({name:"1c4bxop",styles:"margin-top:4rem;margin-bottom:2rem;font-size:12px;font-weight:600;color:#c9cccf;letter-spacing:1.2px"}),T=(m("p",{target:"e4kicyq0"})({name:"th0v3",styles:"color:#96999b"}),r(3431)),O=r(5697),x=r.n(O),A=r(4839),S=r.n(A),k=r(2993),C=r.n(k),P=r(6494),E=r.n(P),j="bodyAttributes",L="htmlAttributes",_="titleAttributes",I={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},M=(Object.keys(I).map((function(e){return I[e]})),"charset"),N="cssText",R="href",z="http-equiv",D="innerHTML",H="itemprop",q="name",F="property",U="rel",B="src",Z="target",Y={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},V="defaultTitle",W="defer",K="encodeSpecialCharacters",X="onChangeClientState",G="titleTemplate",Q=Object.keys(Y).reduce((function(e,t){return e[Y[t]]=t,e}),{}),$=[I.NOSCRIPT,I.SCRIPT,I.STYLE],J="data-react-helmet",ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},te=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},re=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},oe=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},ie=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ae=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},se=function(e){var t=pe(e,I.TITLE),r=pe(e,G);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=pe(e,V);return t||n||void 0},le=function(e){return pe(e,X)||function(){}},ce=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ne({},e,t)}),{})},ue=function(e,t){return t.filter((function(e){return void 0!==e[I.BASE]})).map((function(e){return e[I.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},fe=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&be("Helmet: "+e+' should be of type "Array". Instead found type "'+ee(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],l=s.toLowerCase();-1===t.indexOf(l)||r===U&&"canonical"===e[r].toLowerCase()||l===U&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(s)||s!==D&&s!==N&&s!==H||(r=s)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][c]&&(o[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],l=E()({},n[s],o[s]);n[s]=l}return e}),[]).reverse()},pe=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},de=(h=Date.now(),function(e){var t=Date.now();t-h>16?(h=t,e(t)):setTimeout((function(){de(e)}),0)}),ye=function(e){return clearTimeout(e)},me="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||de:r.g.requestAnimationFrame||de,he="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ye:r.g.cancelAnimationFrame||ye,be=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ge=null,ve=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;Oe(I.BODY,n),Oe(I.HTML,o),Te(f,p);var d={baseTag:xe(I.BASE,r),linkTags:xe(I.LINK,i),metaTags:xe(I.META,a),noscriptTags:xe(I.NOSCRIPT,s),scriptTags:xe(I.SCRIPT,c),styleTags:xe(I.STYLE,u)},y={},m={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(y[e]=r),n.length&&(m[e]=d[e].oldTags)})),t&&t(),l(e,y,m)},we=function(e){return Array.isArray(e)?e.join(""):e},Te=function(e,t){void 0!==e&&document.title!==e&&(document.title=we(e)),Oe(I.TITLE,t)},Oe=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(J),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var l=a[s],c=t[l]||"";r.getAttribute(l)!==c&&r.setAttribute(l,c),-1===o.indexOf(l)&&o.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(J):r.getAttribute(J)!==a.join(",")&&r.setAttribute(J,a.join(","))}},xe=function(e,t){var r=document.head||document.querySelector(I.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===D)r.innerHTML=t.innerHTML;else if(n===N)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(J,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},Ae=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Y[r]||r]=e[r],t}),t)},ke=function(e,t,r){switch(e){case I.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(o={key:e})[J]=!0,i=Se(r,o),[n.createElement(I.TITLE,i,e)];var e,r,o,i},toString:function(){return function(e,t,r,n){var o=Ae(r),i=we(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+ae(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ae(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case j:case L:return{toComponent:function(){return Se(t)},toString:function(){return Ae(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var o,i=((o={key:r})[J]=!0,o);return Object.keys(t).forEach((function(e){var r=Y[e]||e;if(r===D||r===N){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),n.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===D||e===N)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+ae(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===$.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},Ce=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:ke(I.BASE,t,n),bodyAttributes:ke(j,r,n),htmlAttributes:ke(L,o,n),link:ke(I.LINK,i,n),meta:ke(I.META,a,n),noscript:ke(I.NOSCRIPT,s,n),script:ke(I.SCRIPT,l,n),style:ke(I.STYLE,c,n),title:ke(I.TITLE,{title:f,titleAttributes:p},n)}},Pe=S()((function(e){return{baseTag:ue([R,Z],e),bodyAttributes:ce(j,e),defer:pe(e,W),encode:pe(e,K),htmlAttributes:ce(L,e),linkTags:fe(I.LINK,[U,R],e),metaTags:fe(I.META,[q,M,z,F,H],e),noscriptTags:fe(I.NOSCRIPT,[D],e),onChangeClientState:le(e),scriptTags:fe(I.SCRIPT,[B,D],e),styleTags:fe(I.STYLE,[N],e),title:se(e),titleAttributes:ce(_,e)}}),(function(e){ge&&he(ge),e.defer?ge=me((function(){ve(e,(function(){ge=null}))})):(ve(e),ge=null)}),Ce)((function(){return null})),Ee=(b=Pe,v=g=function(e){function t(){return te(this,t),ie(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!C()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case I.SCRIPT:case I.NOSCRIPT:return{innerHTML:t};case I.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return ne({},n,((t={})[r.type]=[].concat(n[r.type]||[],[ne({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case I.TITLE:return ne({},o,((t={})[n.type]=a,t.titleAttributes=ne({},i),t));case I.BODY:return ne({},o,{bodyAttributes:ne({},i)});case I.HTML:return ne({},o,{htmlAttributes:ne({},i)})}return ne({},o,((r={})[n.type]=ne({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=ne({},t);return Object.keys(e).forEach((function(t){var n;r=ne({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,o={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Q[r]||r]=e[r],t}),t)}(oe(n,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case I.LINK:case I.META:case I.NOSCRIPT:case I.SCRIPT:case I.STYLE:o=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=oe(e,["children"]),o=ne({},r);return t&&(o=this.mapChildrenToProps(t,o)),n.createElement(b,o)},re(t,null,[{key:"canUseDOM",set:function(e){b.canUseDOM=e}}]),t}(n.Component),g.propTypes={base:x().object,bodyAttributes:x().object,children:x().oneOfType([x().arrayOf(x().node),x().node]),defaultTitle:x().string,defer:x().bool,encodeSpecialCharacters:x().bool,htmlAttributes:x().object,link:x().arrayOf(x().object),meta:x().arrayOf(x().object),noscript:x().arrayOf(x().object),onChangeClientState:x().func,script:x().arrayOf(x().object),style:x().arrayOf(x().object),title:x().string,titleAttributes:x().object,titleTemplate:x().string},g.defaultProps={defer:!0,encodeSpecialCharacters:!0},g.peek=b.peek,g.rewind=function(){var e=b.rewind();return e||(e=Ce({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},v);Ee.renderStatic=Ee.rewind;var je=Ee;var Le=m("div",{target:"effl5nz0"})({name:"nl1umt",styles:"margin:0 auto;padding:4rem 2rem 8rem 2rem;max-width:600px;color:#333333"}),_e={name:"1ojvun4",styles:"body{font-family:Roboto;}section{display:block;}ul{list-style:none;}"},Ie=function(e){var t=e.children;return(0,T.tZ)(Le,null,(0,T.tZ)(T.xB,{styles:_e}),(0,T.tZ)(je,null,(0,T.tZ)("link",{href:"https://fonts.googleapis.com/css?family=Roboto:400,700",rel:"stylesheet"})),t)},Me="#b4ffff",Ne=(0,T.iv)("color:","#80deea",";font-size:12px;font-weight:600;letter-spacing:1.2px;",""),Re=r(4694);function ze(e){return(ze="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function De(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function He(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function qe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?He(Object(r),!0).forEach((function(t){De(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):He(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Fe(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Ue(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Be(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function Ze(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=Be(t.slice(0,n)),i=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[o]=i,e}),{})}var Ye=!1;try{Ye=!0}catch(it){}function Ve(e){return Re.parse.icon?Re.parse.icon(e):null===e?null:"object"===ze(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function We(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?De({},e,t):{}}function Ke(e){var t=e.forwardedRef,r=Fe(e,["forwardedRef"]),n=r.icon,o=r.mask,i=r.symbol,a=r.className,s=r.title,l=r.titleId,c=Ve(n),u=We("classes",[].concat(Ue(function(e){var t,r=e.spin,n=e.pulse,o=e.fixedWidth,i=e.inverse,a=e.border,s=e.listItem,l=e.flip,c=e.size,u=e.rotation,f=e.pull,p=(De(t={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":s,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(c),null!=c),De(t,"fa-rotate-".concat(u),null!=u&&0!==u),De(t,"fa-pull-".concat(f),null!=f),De(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(r)),Ue(a.split(" ")))),f=We("transform","string"==typeof r.transform?Re.parse.transform(r.transform):r.transform),p=We("mask",Ve(o)),d=(0,Re.icon)(c,qe({},u,{},f,{},p,{symbol:i,title:s,titleId:l}));if(!d)return function(){var e;!Ye&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",c),null;var y=d.abstract,m={ref:t};return Object.keys(r).forEach((function(e){Ke.defaultProps.hasOwnProperty(e)||(m[e]=r[e])})),Xe(y[0],m)}Ke.displayName="FontAwesomeIcon",Ke.propTypes={border:x().bool,className:x().string,mask:x().oneOfType([x().object,x().array,x().string]),fixedWidth:x().bool,inverse:x().bool,flip:x().oneOf(["horizontal","vertical","both"]),icon:x().oneOfType([x().object,x().array,x().string]),listItem:x().bool,pull:x().oneOf(["right","left"]),pulse:x().bool,rotation:x().oneOf([0,90,180,270]),size:x().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:x().bool,symbol:x().oneOfType([x().bool,x().string]),title:x().string,transform:x().oneOfType([x().string,x().object]),swapOpacity:x().bool},Ke.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var Xe=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),i=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=Ze(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[Be(t)]=n}return e}),{attrs:{}}),a=n.style,s=void 0===a?{}:a,l=Fe(n,["style"]);return i.attrs.style=qe({},i.attrs.style,{},s),t.apply(void 0,[r.tag,qe({},i.attrs,{},l)].concat(Ue(o)))}.bind(null,n.createElement),Ge={prefix:"far",iconName:"envelope",icon:[512,512,[],"f0e0","M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"]};var Qe=m("h1",{target:"e1c42pvw1"})({name:"qcw7gs",styles:"font-size:30px;font-weight:600;margin:0"}),$e=m("p",{target:"e1c42pvw0"})(Ne," margin:0;"),Je=function(e){var t=e.icon,r=e.children;return(0,T.tZ)("div",null,(0,T.tZ)(Ke,{color:"#4bacb8",icon:t})," ",r)},et=function(){return(0,T.tZ)("div",null,(0,T.tZ)(Qe,null,"Elliot Newnham"),(0,T.tZ)($e,null,"Full Stack Engineer | Embedded Software Engineer | Software Manager"),(0,T.tZ)(Je,{icon:Ge},"elliot.newnham@gmail.com"))};var tt=m("p",{target:"e11f86ws1"})({name:"l5x7cd",styles:"padding-bottom:0.5rem"}),rt=m("a",{target:"e11f86ws0"})("transition:box-shadow 160ms ease 0s;box-shadow:",Me," 0px -10px 0px inset;border-bottom:2px solid ",Me,";text-decoration:none;color:#323336;&:hover{box-shadow:",Me," 0px -1.2em 0px inset;}"),nt=function(e){var t=e.href,r=e.children;return(0,T.tZ)(tt,null,(0,T.tZ)(rt,{href:t},r))},ot=function(){return(0,T.tZ)(Ie,null,(0,T.tZ)(et,null),(0,T.tZ)(w,null,"GitHub Projects"),(0,T.tZ)(nt,{href:"https://github.com/enewnham/Orleans.Providers.MSSQLDapper"},"Orleans.Providers.MSSQLDapper"),(0,T.tZ)("p",null,"Optimized Orleans providers for Microsoft SQL Server for In-Memory OLTP and Natively Compiled Stored Procedures"))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-811543f0a84890ac2cf2.js.map