"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7011],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(o),f=r,d=l["".concat(p,".").concat(f)]||l[f]||m[f]||i;return o?n.createElement(d,a(a({ref:t},u),{},{components:o})):n.createElement(d,a({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},8984:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const i={},a="Composition API\u7684\u4f18\u52bf",s={unversionedId:"vue3/Composition API\u7684\u4f18\u52bf",id:"vue3/Composition API\u7684\u4f18\u52bf",title:"Composition API\u7684\u4f18\u52bf",description:"1.Options API \u5b58\u5728\u7684\u95ee\u9898",source:"@site/docs/vue3/2.Composition API\u7684\u4f18\u52bf.md",sourceDirName:"vue3",slug:"/vue3/Composition API\u7684\u4f18\u52bf",permalink:"/docs/vue3/Composition API\u7684\u4f18\u52bf",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/vue3/2.Composition API\u7684\u4f18\u52bf.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"vue3",previous:{title:"Vue3\u7b80\u4ecb",permalink:"/docs/vue3/\u5206\u6790\u5de5\u7a0b\u7ed3\u6784"},next:{title:"\u5e38\u7528Composition API",permalink:"/docs/vue3/\u5e38\u7528 Composition API"}},p={},c=[{value:"1.Options API \u5b58\u5728\u7684\u95ee\u9898",id:"1options-api-\u5b58\u5728\u7684\u95ee\u9898",level:2},{value:"2.Composition API \u7684\u4f18\u52bf",id:"2composition-api-\u7684\u4f18\u52bf",level:2}],u={toc:c};function l(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"composition-api\u7684\u4f18\u52bf"},"Composition API\u7684\u4f18\u52bf"),(0,r.kt)("h2",{id:"1options-api-\u5b58\u5728\u7684\u95ee\u9898"},"1.Options API \u5b58\u5728\u7684\u95ee\u9898"),(0,r.kt)("p",null,"\u4f7f\u7528\u4f20\u7edfOptionsAPI\u4e2d\uff0c\u65b0\u589e\u6216\u8005\u4fee\u6539\u4e00\u4e2a\u9700\u6c42\uff0c\u5c31\u9700\u8981\u5206\u522b\u5728data\uff0cmethods\uff0ccomputed\u91cc\u4fee\u6539 \u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgs1.gif",alt:"1"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgs2.gif",alt:"2"})),(0,r.kt)("h2",{id:"2composition-api-\u7684\u4f18\u52bf"},"2.Composition API \u7684\u4f18\u52bf"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u66f4\u52a0\u4f18\u96c5\u7684\u7ec4\u7ec7\u6211\u4eec\u7684\u4ee3\u7801\uff0c\u51fd\u6570\u3002\u8ba9\u76f8\u5173\u529f\u80fd\u7684\u4ee3\u7801\u66f4\u52a0\u6709\u5e8f\u7684\u7ec4\u7ec7\u5728\u4e00\u8d77\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgs3.gif",alt:"3"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgs4.gif",alt:"4"})))}l.isMDXComponent=!0}}]);