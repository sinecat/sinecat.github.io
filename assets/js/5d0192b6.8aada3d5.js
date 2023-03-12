"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[186],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>N});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),l=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,s=k(e,["components","mdxType","originalType","parentName"]),u=l(r),c=n,N=u["".concat(o,".").concat(c)]||u[c]||i[c]||p;return r?a.createElement(N,m(m({ref:t},s),{},{components:r})):a.createElement(N,m({ref:t},s))}));function N(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,m=new Array(p);m[0]=c;var k={};for(var o in t)hasOwnProperty.call(t,o)&&(k[o]=t[o]);k.originalType=e,k[u]="string"==typeof e?e:n,m[1]=k;for(var l=2;l<p;l++)m[l]=r[l];return a.createElement.apply(null,m)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>u,frontMatter:()=>p,metadata:()=>k,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const p={},m="web worker",k={unversionedId:"Interview/browser/web worker",id:"Interview/browser/web worker",title:"web worker",description:"\u5728\u8fd0\u884c\u5927\u578b\u6216\u8005\u590d\u6742\u7684 JavaScript \u811a\u672c\u7684\u65f6\u5019\u7ecf\u5e38\u4f1a\u51fa\u73b0\u6d4f\u89c8\u5668\u5047\u6b7b\u7684\u73b0\u8c61\uff0c\u8fd9\u662f\u7531\u4e8e JavaScript \u8fd9\u4e2a\u8bed\u8a00\u5728\u6267\u884c\u7684\u65f6\u5019\u662f\u91c7\u7528\u5355\u7ebf\u7a0b\u6765\u6267\u884c\u800c\u5bfc\u81f4\u7684\u3002\u91c7\u7528\u540c\u6b65\u6267\u884c\u7684\u65b9\u5f0f\u8fdb\u884c\u8fd0\u884c\uff0c\u5982\u679c\u51fa\u73b0\u963b\u585e\uff0c\u90a3\u4e48\u540e\u9762\u7684\u4ee3\u7801\u5c06\u4e0d\u4f1a\u6267\u884c\u3002\u4f8b\u5982\uff1a",source:"@site/docs/Interview/browser/web worker.md",sourceDirName:"Interview/browser",slug:"/Interview/browser/web worker",permalink:"/docs/Interview/browser/web worker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Interview/browser/web worker.md",tags:[],version:"current",frontMatter:{},sidebar:"study",previous:{title:"WebSQL",permalink:"/docs/Interview/browser/WebSQL"},next:{title:"\u6d4f\u89c8\u5668\u6e32\u67d3\u6d41\u7a0b",permalink:"/docs/Interview/browser/\u6d4f\u89c8\u5668\u6e32\u67d3\u6d41\u7a0b"}},o={},l=[{value:"<em>web worker</em> \u6982\u8ff0",id:"web-worker-\u6982\u8ff0",level:2},{value:"<em>web Worker</em> \u4f7f\u7528\u793a\u4f8b",id:"web-worker-\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u4f7f\u7528 <em>web Worker</em> \u5b9e\u73b0\u8de8\u6807\u7b7e\u9875\u901a\u4fe1",id:"\u4f7f\u7528-web-worker-\u5b9e\u73b0\u8de8\u6807\u7b7e\u9875\u901a\u4fe1",level:2}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"web-worker"},"web worker"),(0,n.kt)("p",null,"\u5728\u8fd0\u884c\u5927\u578b\u6216\u8005\u590d\u6742\u7684 ",(0,n.kt)("em",{parentName:"p"},"JavaScript")," \u811a\u672c\u7684\u65f6\u5019\u7ecf\u5e38\u4f1a\u51fa\u73b0\u6d4f\u89c8\u5668\u5047\u6b7b\u7684\u73b0\u8c61\uff0c\u8fd9\u662f\u7531\u4e8e ",(0,n.kt)("em",{parentName:"p"},"JavaScript")," \u8fd9\u4e2a\u8bed\u8a00\u5728\u6267\u884c\u7684\u65f6\u5019\u662f\u91c7\u7528\u5355\u7ebf\u7a0b\u6765\u6267\u884c\u800c\u5bfc\u81f4\u7684\u3002\u91c7\u7528\u540c\u6b65\u6267\u884c\u7684\u65b9\u5f0f\u8fdb\u884c\u8fd0\u884c\uff0c\u5982\u679c\u51fa\u73b0\u963b\u585e\uff0c\u90a3\u4e48\u540e\u9762\u7684\u4ee3\u7801\u5c06\u4e0d\u4f1a\u6267\u884c\u3002\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"while(true){}\n")),(0,n.kt)("p",null,"\u90a3\u4e48\u80fd\u4e0d\u80fd\u8ba9\u8fd9\u4e9b\u4ee3\u7801\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u6216\u8005\u8ba9 ",(0,n.kt)("em",{parentName:"p"},"JavaScript")," \u51fd\u6570\u5728\u591a\u4e2a\u8fdb\u7a0b\u4e2d\u540c\u65f6\u8fd0\u884c\u5462\uff1f"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"HTML5")," \u6240\u63d0\u51fa\u7684 ",(0,n.kt)("em",{parentName:"p"},"Web Worker")," \u6b63\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u800c\u51fa\u73b0\u7684\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"HTML5")," \u7684 ",(0,n.kt)("em",{parentName:"p"},"Web Worker")," \u53ef\u4ee5\u8ba9 ",(0,n.kt)("em",{parentName:"p"},"Web")," \u5e94\u7528\u7a0b\u5e8f\u5177\u5907\u540e\u53f0\u7684\u5904\u7406\u80fd\u529b\u3002\u5b83\u652f\u6301\u591a\u7ebf\u7a0b\u5904\u7406\u529f\u80fd\uff0c\u56e0\u6b64\u53ef\u4ee5\u5145\u5206\u5229\u7528\u591a\u6838 ",(0,n.kt)("em",{parentName:"p"},"CPU")," \u5e26\u6765\u7684\u4f18\u52bf\uff0c\u5c06\u8017\u65f6\u957f\u7684\u4efb\u52a1\u5206\u914d\u7ed9 ",(0,n.kt)("em",{parentName:"p"},"HTML5")," \u7684 ",(0,n.kt)("em",{parentName:"p"},"Web Worker")," \u8fd0\u884c\uff0c\u4ece\u800c\u907f\u514d\u4e86\u6709\u65f6\u9875\u9762\u53cd\u5e94\u8fdf\u7f13\uff0c\u751a\u81f3\u5047\u6b7b\u7684\u73b0\u8c61\u3002"),(0,n.kt)("p",null,"\u672c\u6587\u5c06\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206\u6765\u4ecb\u7ecd ",(0,n.kt)("em",{parentName:"p"},"web worker"),"\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"web worker")," \u6982\u8ff0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"web Worker")," \u4f7f\u7528\u793a\u4f8b"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,n.kt)("em",{parentName:"li"},"web Worker")," \u5b9e\u73b0\u8de8\u6807\u7b7e\u9875\u901a\u4fe1")),(0,n.kt)("h2",{id:"web-worker-\u6982\u8ff0"},(0,n.kt)("em",{parentName:"h2"},"web worker")," \u6982\u8ff0"),(0,n.kt)("p",null,"\u5728 ",(0,n.kt)("em",{parentName:"p"},"Web")," \u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c",(0,n.kt)("em",{parentName:"p"},"web Worker")," \u662f\u4e00\u9879\u540e\u53f0\u5904\u7406\u6280\u672f\u3002"),(0,n.kt)("p",null,"\u5728\u6b64\u4e4b\u524d\uff0c",(0,n.kt)("em",{parentName:"p"},"JavaScript")," \u521b\u5efa\u7684 ",(0,n.kt)("em",{parentName:"p"},"Web")," \u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u56e0\u4e3a\u6240\u6709\u7684\u5904\u7406\u90fd\u662f\u5728\u5355\u7ebf\u7a0b\u5185\u6267\u884c\u7684\uff0c\u6240\u4ee5\u5982\u679c\u811a\u672c\u6240\u9700\u8fd0\u884c\u65f6\u95f4\u592a\u957f\uff0c\u7a0b\u5e8f\u754c\u9762\u5c31\u4f1a\u957f\u65f6\u95f4\u5904\u4e8e\u505c\u6b62\u72b6\u6001\uff0c\u751a\u81f3\u5f53\u7b49\u5f85\u65f6\u95f4\u8d85\u51fa\u4e00\u5b9a\u7684\u9650\u5ea6\uff0c\u6d4f\u89c8\u5668\u5c31\u4f1a\u8fdb\u5165\u5047\u6b7b\u7684\u72b6\u6001\u3002"),(0,n.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c",(0,n.kt)("em",{parentName:"p"},"HTML5")," \u65b0\u589e\u52a0\u4e86\u4e00\u4e2a ",(0,n.kt)("em",{parentName:"p"},"web Worker API"),"\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e2a ",(0,n.kt)("em",{parentName:"p"},"API"),"\uff0c\u7528\u6237\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u521b\u5efa\u5728\u540e\u53f0\u8fd0\u884c\u7684\u7ebf\u7a0b\uff0c\u8fd9\u4e2a\u7ebf\u7a0b\u88ab\u79f0\u4e4b\u4e3a ",(0,n.kt)("em",{parentName:"p"},"Worker"),"\u3002\u5982\u679c\u5c06\u53ef\u80fd\u8017\u8d39\u8f83\u957f\u65f6\u95f4\u7684\u5904\u7406\u4ea4\u7ed9\u540e\u53f0\u6765\u6267\u884c\uff0c\u5219\u5bf9\u7528\u6237\u5728\u524d\u53f0\u9875\u9762\u4e2d\u6267\u884c\u7684\u64cd\u4f5c\u6ca1\u6709\u5f71\u54cd\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"web Worker")," \u7684\u7279\u70b9\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7\u52a0\u8f7d\u4e00\u4e2a ",(0,n.kt)("em",{parentName:"p"},"JS")," \u6587\u4ef6\u6765\u8fdb\u884c\u5927\u91cf\u590d\u6742\u7684\u8ba1\u7b97\uff0c\u800c\u4e0d\u6302\u8d77\u4e3b\u8fdb\u7a0b\u3002\u901a\u8fc7 ",(0,n.kt)("em",{parentName:"p"},"postMessage")," \u548c ",(0,n.kt)("em",{parentName:"p"},"onMessage")," \u8fdb\u884c\u901a\u4fe1\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u5728 ",(0,n.kt)("em",{parentName:"p"},"Worker")," \u4e2d\u901a\u8fc7 ",(0,n.kt)("em",{parentName:"p"},"importScripts(url)")," \u65b9\u6cd5\u6765\u52a0\u8f7d ",(0,n.kt)("em",{parentName:"p"},"JavaScript")," \u811a\u672c\u6587\u4ef6\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("em",{parentName:"p"},"setTimeout( )\uff0cclearTimeout( )\uff0csetInterval( ) \u548c clearInterval( )")," \u7b49\u65b9\u6cd5\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("em",{parentName:"p"},"XMLHttpRequest")," \u8fdb\u884c\u5f02\u6b65\u8bf7\u6c42\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u8bbf\u95ee ",(0,n.kt)("em",{parentName:"p"},"navigator")," \u7684\u90e8\u5206\u5c5e\u6027\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("em",{parentName:"p"},"JavaScript")," \u6838\u5fc3\u5bf9\u8c61\u3002"))),(0,n.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u7684\u4f18\u70b9\uff0c",(0,n.kt)("em",{parentName:"p"},"web Worker")," \u672c\u8eab\u4e5f\u5177\u6709\u4e00\u5b9a\u5c40\u9650\u6027\u7684\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e0d\u80fd\u8de8\u57df\u52a0\u8f7d ",(0,n.kt)("em",{parentName:"p"},"JavaScript"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Worker")," \u5185\u4ee3\u7801\u4e0d\u80fd\u8bbf\u95ee ",(0,n.kt)("em",{parentName:"p"},"DOM"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,n.kt)("em",{parentName:"p"},"Web Worker")," \u52a0\u8f7d\u6570\u636e\u6ca1\u6709 ",(0,n.kt)("em",{parentName:"p"},"JSONP")," \u548c ",(0,n.kt)("em",{parentName:"p"},"Ajax")," \u52a0\u8f7d\u6570\u636e\u9ad8\u6548\u3002"))),(0,n.kt)("p",null,"\u76ee\u524d\u6765\u770b\uff0c",(0,n.kt)("em",{parentName:"p"},"web Worker")," \u7684\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u8fd8\u662f\u5f88\u4e0d\u9519\u7684\uff0c\u57fa\u672c\u5f97\u5230\u4e86\u4e3b\u6d41\u6d4f\u89c8\u5668\u7684\u4e00\u81f4\u652f\u6301\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-06-074024.png",alt:"image-20211206154023963"})),(0,n.kt)("p",null,"\u5728\u5f00\u59cb\u4f7f\u7528 ",(0,n.kt)("em",{parentName:"p"},"web Worker")," \u4e4b\u524d\uff0c\u6211\u4eec\u5148\u6765\u770b\u4e00\u4e0b\u4f7f\u7528 ",(0,n.kt)("em",{parentName:"p"},"Worker")," \u65f6\u4f1a\u9047\u5230\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"self"),"\uff1a",(0,n.kt)("em",{parentName:"p"},"self")," \u5173\u952e\u503c\u7528\u6765\u8868\u793a\u672c\u7ebf\u7a0b\u8303\u56f4\u5185\u7684\u4f5c\u7528\u57df\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"postMessage( )"),"\uff1a\u5411\u521b\u5efa\u7ebf\u7a0b\u7684\u6e90\u7a97\u53e3\u53d1\u9001\u4fe1\u606f\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"onMessage"),"\uff1a\u83b7\u53d6\u63a5\u6536\u6d88\u606f\u7684\u4e8b\u4ef6\u53e5\u67c4\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"importScripts(urls)"),"\uff1a",(0,n.kt)("em",{parentName:"p"},"Worker")," \u5185\u90e8\u5982\u679c\u8981\u52a0\u8f7d\u5176\u4ed6\u811a\u672c\uff0c\u53ef\u4ee5\u4f7f\u7528\u8be5\u65b9\u6cd5\u6765\u5bfc\u5165\u5176\u5b83 ",(0,n.kt)("em",{parentName:"p"},"JavaScript")," \u811a\u672c\u6587\u4ef6\u3002\u53c2\u6570\u4e3a\u8be5\u811a\u672c\u6587\u4ef6\u7684 ",(0,n.kt)("em",{parentName:"p"},"URL")," \u5730\u5740\uff0c\u5bfc\u5165\u7684\u811a\u672c\u6587\u4ef6\u5fc5\u987b\u4e0e\u4f7f\u7528\u8be5\u7ebf\u7a0b\u6587\u4ef6\u7684\u9875\u9762\u5728\u540c\u4e00\u4e2a\u57df\u4e2d\uff0c\u5e76\u5728\u540c\u4e00\u4e2a\u7aef\u53e3\u4e2d\u3002"))),(0,n.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'// \u5bfc\u5165\u4e86 3 \u4e2a JavaScript \u811a\u672c\nimportScripts("worker1.js","worker2.js","worker3.js"); \n')),(0,n.kt)("h2",{id:"web-worker-\u4f7f\u7528\u793a\u4f8b"},(0,n.kt)("em",{parentName:"h2"},"web Worker")," \u4f7f\u7528\u793a\u4f8b"),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u6765\u770b\u4e00\u4e0b ",(0,n.kt)("em",{parentName:"p"},"web Worker")," \u7684\u5177\u4f53\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"web Worker")," \u7684\u4f7f\u7528\u65b9\u6cd5\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u521b\u5efa\u4e00\u4e2a ",(0,n.kt)("em",{parentName:"p"},"web Worker")," \u5bf9\u8c61\uff0c\u5e76\u4f20\u5165\u5e0c\u671b\u6267\u884c\u7684 ",(0,n.kt)("em",{parentName:"p"},"JavaScript")," \u6587\u4ef6\u5373\u53ef\u3002"),(0,n.kt)("p",null,"\u4e4b\u540e\u5728\u9875\u9762\u4e2d\u8bbe\u7f6e\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u7528\u6765\u76d1\u542c\u7531 ",(0,n.kt)("em",{parentName:"p"},"web Worker")," \u5bf9\u8c61\u53d1\u6765\u7684\u6d88\u606f\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u60f3\u8981\u5728\u9875\u9762\u4e0e ",(0,n.kt)("em",{parentName:"p"},"web Worker")," \u4e4b\u95f4\u5efa\u7acb\u901a\u4fe1\uff0c\u6570\u636e\u9700\u8981\u901a\u8fc7 ",(0,n.kt)("em",{parentName:"p"},"postMessage( )")," \u65b9\u6cd5\u6765\u8fdb\u884c\u4f20\u9012\u3002"),(0,n.kt)("p",null,"\u521b\u5efa ",(0,n.kt)("em",{parentName:"p"},"web Worker"),"\u3002\u6b65\u9aa4\u5341\u5206\u7b80\u5355\uff0c\u53ea\u8981\u5728 ",(0,n.kt)("em",{parentName:"p"},"Worker")," \u7c7b\u7684\u6784\u9020\u5668\u4e2d\uff0c\u5c06\u9700\u8981\u5728\u540e\u53f0\u7ebf\u7a0b\u4e2d\u6267\u884c\u7684\u811a\u672c\u6587\u4ef6\u7684 ",(0,n.kt)("em",{parentName:"p"},"URL")," \u5730\u5740\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\uff0c\u5c31\u53ef\u4ee5\u521b\u5efa ",(0,n.kt)("em",{parentName:"p"},"Worker")," \u5bf9\u8c61\uff0c\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'var worker = new Worker("./worker.js");\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728\u540e\u53f0\u7ebf\u7a0b\u4e2d\u662f\u4e0d\u80fd\u8bbf\u95ee\u9875\u9762\u6216\u8005\u7a97\u53e3\u5bf9\u8c61\u7684\uff0c\u6b64\u65f6\u5982\u679c\u5728\u540e\u53f0\u7ebf\u7a0b\u7684\u811a\u672c\u6587\u4ef6\u4e2d\u4f7f\u7528 ",(0,n.kt)("em",{parentName:"p"},"window")," \u6216\u8005 ",(0,n.kt)("em",{parentName:"p"},"document")," \u5bf9\u8c61\uff0c\u5219\u4f1a\u5f15\u53d1\u9519\u8bef\u3002")),(0,n.kt)("p",null,"\u8fd9\u91cc\u4f20\u5165\u7684 ",(0,n.kt)("em",{parentName:"p"},"JavaScript")," \u7684 ",(0,n.kt)("em",{parentName:"p"},"URL")," \u53ef\u4ee5\u662f\u76f8\u5bf9\u6216\u8005\u7edd\u5bf9\u8def\u5f84\uff0c\u53ea\u8981\u662f\u76f8\u540c\u7684\u534f\u8bae\uff0c\u4e3b\u673a\u548c\u7aef\u53e3\u5373\u53ef\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u60f3\u83b7\u53d6 ",(0,n.kt)("em",{parentName:"p"},"Worker")," \u8fdb\u7a0b\u7684\u8fd4\u56de\u503c\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("em",{parentName:"p"},"onmessage")," \u5c5e\u6027\u6765\u7ed1\u5b9a\u4e00\u4e2a\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u3002\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'var worker = new Worker("./worker.js");\nworker.onmessage = function(){\n   console.log("the message is back!");\n}\n')),(0,n.kt)("p",null,"\u8fd9\u91cc\u7b2c\u4e00\u884c\u4ee3\u7801\u7528\u6765\u521b\u5efa\u548c\u8fd0\u884c ",(0,n.kt)("em",{parentName:"p"},"Worker")," \u8fdb\u7a0b\uff0c\u7b2c ",(0,n.kt)("em",{parentName:"p"},"2")," \u884c\u8bbe\u7f6e\u4e86 ",(0,n.kt)("em",{parentName:"p"},"Worker")," \u7684 ",(0,n.kt)("em",{parentName:"p"},"message")," \u4e8b\u4ef6\uff0c\u5f53\u540e\u53f0 Worker \u7684 ",(0,n.kt)("em",{parentName:"p"},"postMessage( )")," \u65b9\u6cd5\u88ab\u8c03\u7528\u65f6\uff0c\u8be5\u4e8b\u4ef6\u5c31\u4f1a\u88ab\u89e6\u53d1\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528 ",(0,n.kt)("em",{parentName:"p"},"Worker")," \u5bf9\u8c61\u7684 ",(0,n.kt)("em",{parentName:"p"},"postMessage( )")," \u65b9\u6cd5\u53ef\u4ee5\u7ed9\u540e\u53f0\u7ebf\u7a0b\u53d1\u9001\u6d88\u606f\u3002\u53d1\u9001\u7684\u6d88\u606f\u9700\u8981\u4e3a\u6587\u672c\u6570\u636e\uff0c\u5982\u679c\u8981\u53d1\u9001\u4efb\u4f55 ",(0,n.kt)("em",{parentName:"p"},"JavaScript")," \u5bf9\u8c61\uff0c\u9700\u8981\u901a\u8fc7 ",(0,n.kt)("em",{parentName:"p"},"JSON.stringify( )")," \u65b9\u6cd5\u5c06\u5176\u8f6c\u6362\u6210\u6587\u672c\u6570\u636e\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"worker.postMessage(message);\n")),(0,n.kt)("p",null,"\u901a\u8fc7\u83b7\u53d6 ",(0,n.kt)("em",{parentName:"p"},"Worker")," \u5bf9\u8c61\u7684 ",(0,n.kt)("em",{parentName:"p"},"onmessage")," \u4e8b\u4ef6\u4ee5\u53ca ",(0,n.kt)("em",{parentName:"p"},"Worker")," \u5bf9\u8c61\u7684 ",(0,n.kt)("em",{parentName:"p"},"postMessage( )")," \u65b9\u6cd5\u5c31\u53ef\u4ee5\u5b9e\u73b0\u7ebf\u7a0b\u4e4b\u95f4\u7684\u6d88\u606f\u63a5\u6536\u548c\u53d1\u9001\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Web Worker")," \u4e0d\u80fd\u81ea\u884c\u7ec8\u6b62\uff0c\u4f46\u662f\u80fd\u591f\u88ab\u542f\u7528\u5b83\u4eec\u7684\u9875\u9762\u6240\u7ec8\u6b62\u3002"),(0,n.kt)("p",null,"\u8c03\u7528 ",(0,n.kt)("em",{parentName:"p"},"terminate( )")," \u51fd\u6570\u53ef\u4ee5\u7ec8\u6b62\u540e\u53f0\u8fdb\u7a0b\u3002\u88ab\u7ec8\u6b62\u7684 ",(0,n.kt)("em",{parentName:"p"},"Web Workers")," \u5c06\u4e0d\u518d\u54cd\u5e94\u4efb\u4f55\u6d88\u606f\u6216\u8005\u6267\u884c\u4efb\u4f55\u5176\u4ed6\u8fd0\u7b97\u3002"),(0,n.kt)("p",null,"\u7ec8\u6b62\u4e4b\u540e\uff0c",(0,n.kt)("em",{parentName:"p"},"Worker")," \u4e0d\u80fd\u88ab\u91cd\u65b0\u542f\u52a8\uff0c\u4f46\u662f\u53ef\u4ee5\u4f7f\u7528\u540c\u6837\u7684 ",(0,n.kt)("em",{parentName:"p"},"URL")," \u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,n.kt)("em",{parentName:"p"},"Worker"),"\u3002"),(0,n.kt)("p",null,"\u4e0b\u9762\u662f ",(0,n.kt)("em",{parentName:"p"},"web Worker")," \u7684\u4e00\u4e2a\u5177\u4f53\u4f7f\u7528\u793a\u4f8b\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"index.html")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<p>\u8ba1\u6570\uff1a<output id="result"></output></p>\n<button id="startBtn">\u5f00\u59cb\u5de5\u4f5c</button>\n<button id="stopBtn">\u505c\u6b62\u5de5\u4f5c</button>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'var startBtn = document.getElementById("startBtn");\nvar stopBtn = document.getElementById("stopBtn");\nvar worker; // \u7528\u4e8e\u5b58\u50a8 Worker \u8fdb\u7a0b\n// \u5f00\u59cb Worker \u7684\u4ee3\u7801\nstartBtn.onclick = function () {\n    // \u7b2c\u4e00\u6b21\u8fdb\u6765\u6ca1\u6709 Worker \u8fdb\u7a0b , \u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Worker \u8fdb\u7a0b\n    worker = new Worker("worker.js");\n    // \u63a5\u6536\u6765\u81ea\u4e8e\u540e\u53f0\u7684\u6570\u636e\n    worker.onmessage = function (event) {\n        document.getElementById("result").innerHTML = event.data;\n    };\n}\n// \u505c\u6b62 Worker \u7684\u4ee3\u7801\nstopBtn.onclick = function () {\n    worker.terminate();\n    worker = undefined;\n}\n')),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"worker.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'var i = 0;\nfunction timedCount() {\n    i++;\n    // \u6bcf\u6b21\u5f97\u5230\u7684\u7ed3\u679c\u90fd\u901a\u8fc7 postMessage \u65b9\u6cd5\u8fd4\u56de\u7ed9\u524d\u53f0\n    postMessage(i);\n    setTimeout("timedCount()", 1000);\n}\ntimedCount();\n')),(0,n.kt)("p",null,'\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u5f53\u7528\u6237\u70b9\u51fb"\u5f00\u59cb\u5de5\u4f5c"\u65f6\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2a ',(0,n.kt)("em",{parentName:"p"},"Web Worker")," \u5728\u540e\u53f0\u8fdb\u884c\u8ba1\u6570\u3002\u6bcf\u6b21\u8ba1\u7684\u6570\u90fd\u4f1a\u901a\u8fc7 ",(0,n.kt)("em",{parentName:"p"},"postMessage( )")," \u65b9\u6cd5\u8fd4\u56de\u7ed9\u524d\u53f0\u3002"),(0,n.kt)("p",null,'\u5f53\u7528\u6237\u70b9\u51fb"\u505c\u6b62\u5de5\u4f5c"\u65f6\uff0c\u5219\u4f1a\u8c03\u7528 ',(0,n.kt)("em",{parentName:"p"},"terminate( )")," \u65b9\u6cd5\u6765\u7ec8\u6b62 ",(0,n.kt)("em",{parentName:"p"},"Web Worker")," \u7684\u8fd0\u884c\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528-web-worker-\u5b9e\u73b0\u8de8\u6807\u7b7e\u9875\u901a\u4fe1"},"\u4f7f\u7528 ",(0,n.kt)("em",{parentName:"h2"},"web Worker")," \u5b9e\u73b0\u8de8\u6807\u7b7e\u9875\u901a\u4fe1"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"web Worker")," \u53ef\u5206\u4e3a\u4e24\u79cd\u7c7b\u578b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e13\u7528\u7ebf\u7a0b ",(0,n.kt)("em",{parentName:"p"},"dedicated web worker"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5171\u4eab\u7ebf\u7a0b ",(0,n.kt)("em",{parentName:"p"},"shared web worker")))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Dedicated web worker")," \u968f\u5f53\u524d\u9875\u9762\u7684\u5173\u95ed\u800c\u7ed3\u675f\uff0c\u8fd9\u610f\u5473\u7740 ",(0,n.kt)("em",{parentName:"p"},"Dedicated web worker")," \u53ea\u80fd\u88ab\u521b\u5efa\u5b83\u7684\u9875\u9762\u8bbf\u95ee\u3002"),(0,n.kt)("p",null,"\u4e0e\u4e4b\u76f8\u5bf9\u5e94\u7684 ",(0,n.kt)("em",{parentName:"p"},"Shared web worker")," \u5171\u4eab\u7ebf\u7a0b\u53ef\u4ee5\u540c\u65f6\u6709\u591a\u4e2a\u9875\u9762\u7684\u7ebf\u7a0b\u94fe\u63a5\u3002"),(0,n.kt)("p",null,"\u524d\u9762\u6211\u4eec\u793a\u4f8b ",(0,n.kt)("em",{parentName:"p"},"web Worker")," \u65f6\uff0c\u5b9e\u4f8b\u5316\u7684\u662f\u4e00\u4e2a Worker \u7c7b\uff0c\u8fd9\u5c31\u4ee3\u8868\u662f\u4e00\u4e2a ",(0,n.kt)("em",{parentName:"p"},"Dedicated web worker"),"\uff0c\u800c\u8981\u521b\u5efa ",(0,n.kt)("em",{parentName:"p"},"SharedWorker")," \u5219\u9700\u8981\u5b9e\u4f8b\u5316 ",(0,n.kt)("em",{parentName:"p"},"SharedWorker")," \u7c7b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'var worker = new SharedWorker("sharedworker.js");\n')),(0,n.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u5c31\u4f7f\u7528 ",(0,n.kt)("em",{parentName:"p"},"Shared web worker")," \u5171\u4eab\u7ebf\u7a0b\u6765\u5b9e\u73b0\u8de8\u6807\u7b7e\u9875\u901a\u4fe1\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"index.html")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n    <input type="text" name="" id="content" placeholder="\u8bf7\u8f93\u5165\u8981\u53d1\u9001\u7684\u4fe1\u606f">\n    <button id="btn">\u53d1\u9001</button>\n    <script>\n        const content = document.querySelector("#content");\n        const btn = document.querySelector("#btn");\n        const worker = new SharedWorker(\'worker.js\')\n        btn.onclick = function () {\n            worker.port.postMessage(content.value);\n        }\n    <\/script>\n</body>\n')),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"index2.html")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n    <script>\n        const btn = document.querySelector(\"#btn\");\n        var worker = new SharedWorker('worker.js');\n        worker.port.start()\n        worker.port.addEventListener('message', (e) => {\n            if(e.data){\n                console.log('\u6765\u81eaworker\u7684\u6570\u636e\uff1a', e.data)\n            }\n        }, false);\n\n        setInterval(function(){\n            // \u83b7\u53d6\u548c\u53d1\u9001\u6d88\u606f\u90fd\u662f\u8c03\u7528 postMessage \u65b9\u6cd5\uff0c\u6211\u8fd9\u91cc\u7ea6\u5b9a\u7684\u662f\u4f20\u9012'get'\u8868\u793a\u83b7\u53d6\u6570\u636e\u3002\n            worker.port.postMessage('get')\n        },1000);\n    <\/script>\n</body>\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"worker.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"var data = '';\nonconnect = function (e) {\n    var port = e.ports[0]\n    port.onmessage = function (e) {\n        // \u5982\u679c\u662f get \u5219\u8fd4\u56de\u6570\u636e\u7ed9\u5ba2\u6237\u7aef\n        if (e.data === 'get') {       \n            port.postMessage(data);\n            data = \"\";\n        } else {    \n            // \u5426\u5219\u628a\u6570\u636e\u4fdd\u5b58                  \n            data = e.data\n        }\n    }\n}\n")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"-",(0,n.kt)("em",{parentName:"p"},"EOF"),"-"))}u.isMDXComponent=!0}}]);