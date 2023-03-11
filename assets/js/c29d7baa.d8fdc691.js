"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),k=i(n),c=r,N=k["".concat(o,".").concat(c)]||k[c]||s[c]||l;return n?a.createElement(N,p(p({ref:t},u),{},{components:n})):a.createElement(N,p({ref:t},u))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=c;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m[k]="string"==typeof e?e:r,p[1]=m;for(var i=2;i<l;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>m,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const l={},p="\u5c5e\u6027\u63cf\u8ff0\u7b26",m={unversionedId:"interview/js/\u5c5e\u6027\u63cf\u8ff0\u7b26",id:"interview/js/\u5c5e\u6027\u63cf\u8ff0\u7b26",title:"\u5c5e\u6027\u63cf\u8ff0\u7b26",description:"\u7ecf\u5178\u771f\u9898",source:"@site/docs/interview/js/16.\u5c5e\u6027\u63cf\u8ff0\u7b26.md",sourceDirName:"interview/js",slug:"/interview/js/\u5c5e\u6027\u63cf\u8ff0\u7b26",permalink:"/docs/interview/js/\u5c5e\u6027\u63cf\u8ff0\u7b26",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/interview/js/16.\u5c5e\u6027\u63cf\u8ff0\u7b26.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{},sidebar:"study",previous:{title:"\u9012\u5f52",permalink:"/docs/interview/js/\u9012\u5f52"},next:{title:"class \u548c\u6784\u9020\u51fd\u6570\u533a\u522b",permalink:"/docs/interview/js/class \u548c\u6784\u9020\u51fd\u6570\u533a\u522b"}},o={},i=[{value:"\u7ecf\u5178\u771f\u9898",id:"\u7ecf\u5178\u771f\u9898",level:2},{value:"\u5c5e\u6027\u63cf\u8ff0\u7b26\u8be6\u89e3",id:"\u5c5e\u6027\u63cf\u8ff0\u7b26\u8be6\u89e3",level:2},{value:"\u5c5e\u6027\u63cf\u8ff0\u7b26\u7684\u7ed3\u6784",id:"\u5c5e\u6027\u63cf\u8ff0\u7b26\u7684\u7ed3\u6784",level:3},{value:"<em>get</em> \u548c <em>set</em> \u51fd\u6570",id:"get-\u548c-set-\u51fd\u6570",level:3},{value:"\u64cd\u4f5c\u5c5e\u6027\u63cf\u8ff0\u7b26",id:"\u64cd\u4f5c\u5c5e\u6027\u63cf\u8ff0\u7b26",level:3},{value:"\u63a7\u5236\u5bf9\u8c61\u72b6\u6001",id:"\u63a7\u5236\u5bf9\u8c61\u72b6\u6001",level:3},{value:"\u771f\u9898\u89e3\u7b54",id:"\u771f\u9898\u89e3\u7b54",level:2}],u={toc:i};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5c5e\u6027\u63cf\u8ff0\u7b26"},"\u5c5e\u6027\u63cf\u8ff0\u7b26"),(0,r.kt)("h2",{id:"\u7ecf\u5178\u771f\u9898"},"\u7ecf\u5178\u771f\u9898"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"JavaScript")," \u4e2d\u5bf9\u8c61\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u6709\u54ea\u4e9b\uff1f\u5206\u522b\u6709\u4ec0\u4e48\u4f5c\u7528\uff1f")),(0,r.kt)("h2",{id:"\u5c5e\u6027\u63cf\u8ff0\u7b26\u8be6\u89e3"},"\u5c5e\u6027\u63cf\u8ff0\u7b26\u8be6\u89e3"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("em",{parentName:"p"},"JavaScript")," \u4e2d\uff0c\u5bf9\u8c61\u7684\u5c5e\u6027\u53ef\u4ee5\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u5c5e\u6027\uff1a\u5b83\u7684\u672c\u8d28\u5c31\u662f\u4e00\u4e2a\u6570\u636e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b58\u53d6\u5668\u5c5e\u6027\uff1a\u5b83\u7684\u672c\u8d28\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4f46\u662f\u53ef\u4ee5\u5c06\u5b83\u5f53\u4f5c\u666e\u901a\u5c5e\u6027\u6765\u4f7f\u7528\uff0c\u5f53\u7ed9\u8be5\u5c5e\u6027\u8d4b\u503c\u65f6\uff0c\u4f1a\u8fd0\u884c\u76f8\u5e94\u7684 ",(0,r.kt)("em",{parentName:"p"},"setter")," \u51fd\u6570\uff0c\u5f53\u83b7\u53d6\u8be5\u5c5e\u6027\u7684\u503c\u65f6\uff0c\u4f1a\u8fd0\u884c\u76f8\u5e94\u7684 ",(0,r.kt)("em",{parentName:"p"},"getter")," \u51fd\u6570\u3002\u9664\u4e86\u5b58\u53d6\u5668\uff0c\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u7684\u5173\u952e\u5b57\uff0c\u7528\u4ee5\u8868\u793a\u5f53\u524d\u5c5e\u6027\u662f\u5426\u53ef\u5199\u3001\u662f\u5426\u6709\u9ed8\u8ba4\u503c\u3001\u662f\u5426\u53ef\u679a\u4e3e\u7b49\uff0c\u8fd9\u4e9b\u5173\u952e\u5b57\u5c31\u662f\u5c5e\u6027\u63cf\u8ff0\u7b26\u3002"))),(0,r.kt)("p",null,"\u5c5e\u6027\u63cf\u8ff0\u7b26\u662f ",(0,r.kt)("em",{parentName:"p"},"ECMAScript")," 5 \u65b0\u589e\u7684\u8bed\u6cd5\uff0c\u5b83\u5176\u5b9e\u5c31\u662f\u4e00\u4e2a\u5185\u90e8\u5bf9\u8c61\uff0c\u7528\u6765\u63cf\u8ff0\u5bf9\u8c61\u7684\u5c5e\u6027\u7684\u7279\u6027\u3002"),(0,r.kt)("h3",{id:"\u5c5e\u6027\u63cf\u8ff0\u7b26\u7684\u7ed3\u6784"},"\u5c5e\u6027\u63cf\u8ff0\u7b26\u7684\u7ed3\u6784"),(0,r.kt)("p",null,"\u5728\u5b9a\u4e49\u5bf9\u8c61\u3001\u5b9a\u4e49\u5c5e\u6027\u65f6\uff0c\u6211\u4eec\u66fe\u7ecf\u4ecb\u7ecd\u8fc7\u5c5e\u6027\u63cf\u8ff0\u7b26\uff0c\u5c5e\u6027\u63cf\u8ff0\u7b26\u5b9e\u9645\u4e0a\u5c31\u662f\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u5c5e\u6027\u63cf\u8ff0\u7b26\u4e00\u5171\u6709 ",(0,r.kt)("em",{parentName:"p"},"6")," \u4e2a\uff0c\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"value"),"\uff1a\u8bbe\u7f6e\u5c5e\u6027\u503c\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("em",{parentName:"li"},"undefined"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"writable"),"\uff1a\u8bbe\u7f6e\u5c5e\u6027\u503c\u662f\u5426\u53ef\u5199\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("em",{parentName:"li"},"true"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"enumerable"),"\uff1a\u8bbe\u7f6e\u5c5e\u6027\u662f\u5426\u53ef\u679a\u4e3e\uff0c\u5373\u662f\u5426\u5141\u8bb8\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"li"},"for/in")," \u8bed\u53e5\u6216 ",(0,r.kt)("em",{parentName:"li"},"Object.keys( )")," \u51fd\u6570\u904d\u5386\u8bbf\u95ee\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("em",{parentName:"li"},"true"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"configurable"),"\uff1a\u8bbe\u7f6e\u662f\u5426\u53ef\u8bbe\u7f6e\u5c5e\u6027\u7279\u6027\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("em",{parentName:"li"},"true"),"\u3002\u5982\u679c\u4e3a ",(0,r.kt)("em",{parentName:"li"},"false"),"\uff0c\u5c06\u65e0\u6cd5\u5220\u9664\u8be5\u5c5e\u6027\uff0c\u4e0d\u80fd\u591f\u4fee\u6539\u5c5e\u6027\u503c\uff0c\u4e5f\u4e0d\u80fd\u4fee\u6539\u5c5e\u6027\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"get"),"\uff1a\u53d6\u503c\u51fd\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("em",{parentName:"li"},"undefined"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"set"),"\uff1a\u5b58\u503c\u51fd\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("em",{parentName:"li"},"undefined"),"\u3002")),(0,r.kt)("p",null,"\u6ce8\u610f\u8fd9\u51e0\u4e2a\u5c5e\u6027\u4e0d\u662f\u90fd\u53ef\u4ee5\u4e00\u8d77\u8bbe\u7f6e\uff0c\u5177\u4f53\u5982\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-21-031647.png",alt:"image-20211021111647398"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1")),(0,r.kt)("p",null,"\u4e0b\u9762\u793a\u4f8b\u6f14\u793a\u4e86\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"value")," \u8bfb\u5199\u5c5e\u6027\u503c\u7684\u57fa\u672c\u7528\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var obj = {};  //\u5b9a\u4e49\u7a7a\u5bf9\u8c61\nObject.defineProperty(obj, 'x', {value : 100});  //\u6dfb\u52a0\u5c5e\u6027x\uff0c\u503c\u4e3a100\nconsole.log(Object.getOwnPropertyDescriptor(obj, 'x').value);  //\u8fd4\u56de100\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2")),(0,r.kt)("p",null,"\u4e0b\u9762\u793a\u4f8b\u6f14\u793a\u4e86\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"writable")," \u5c5e\u6027\u7981\u6b62\u4fee\u6539\u5c5e\u6027 ",(0,r.kt)("em",{parentName:"p"},"x"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var obj = {};\nObject.defineProperty(obj, 'x', {\n    value : 1,  //\u8bbe\u7f6e\u5c5e\u6027\u9ed8\u8ba4\u503c\u4e3a1\n    writable : false  //\u7981\u6b62\u4fee\u6539\u5c5e\u6027\u503c\n});\nobj.x = 2;  //\u4fee\u6539\u5c5e\u6027x\u7684\u503c\nconsole.log(obj.x);  // 1 \u8bf4\u660e\u4fee\u6539\u5931\u8d25\n")),(0,r.kt)("p",null,"\u5728\u6b63\u5e38\u6a21\u5f0f\u4e0b\uff0c\u5982\u679c ",(0,r.kt)("em",{parentName:"p"},"writable")," \u4e3a ",(0,r.kt)("em",{parentName:"p"},"false"),"\uff0c\u91cd\u5199\u5c5e\u6027\u503c\u4e0d\u4f1a\u62a5\u9519\uff0c\u4f46\u662f\u64cd\u4f5c\u5931\u8d25\uff0c\u800c\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u5219\u4f1a\u629b\u51fa\u5f02\u5e38\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"configurable")," \u53ef\u4ee5\u7981\u6b62\u4fee\u6539\u5c5e\u6027\u63cf\u8ff0\u7b26\uff0c\u5f53\u5176\u503c\u4e3a ",(0,r.kt)("em",{parentName:"p"},"false")," \u65f6\uff0c",(0,r.kt)("em",{parentName:"p"},"value\u3001writable\u3001enumerable")," \u548c ",(0,r.kt)("em",{parentName:"p"},"configurable")," \u7981\u6b62\u4fee\u6539\uff0c\u540c\u65f6\u7981\u6b62\u5220\u9664\u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u5728\u4e0b\u9762\u793a\u4f8b\u4e2d\uff0c\u5f53\u8bbe\u7f6e\u5c5e\u6027 ",(0,r.kt)("em",{parentName:"p"},"x")," \u7981\u6b62\u4fee\u6539\u914d\u7f6e\u540e\uff0c\u4e0b\u9762\u64cd\u4f5c\u90fd\u662f\u4e0d\u5141\u8bb8\u7684\uff0c\u5176\u4e2d ",(0,r.kt)("em",{parentName:"p"},"obj.x=5;")," \u82e5\u64cd\u4f5c\u5931\u8d25\uff0c\u5219\u540e\u9762 ",(0,r.kt)("em",{parentName:"p"},"4")," \u4e2a\u64cd\u4f5c\u65b9\u6cd5\u90fd\u5c06\u629b\u51fa\u5f02\u5e38\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var obj = Object.defineProperty({}, 'x', {\n    configurable : false  // \u7981\u6b62\u914d\u7f6e\n});\nobj.x = 5;  //\u8bd5\u56fe\u4fee\u6539\u5176\u503c\nconsole.log(obj.x);  //\u4fee\u6539\u5931\u8d25\uff0c\u8fd4\u56deundefined\nObject.defineProperty(obj, 'x', {value : 2});  //\u629b\u51fa\u5f02\u5e38\nObject.defineProperty(obj, 'x', {writable: true});  //\u629b\u51fa\u5f02\u5e38\nObject.defineProperty(obj, 'x', {enumerable: true});  //\u629b\u51fa\u5f02\u5e38\nObject.defineProperty(obj, 'x', {configurable: true});  //\u629b\u51fa\u5f02\u5e38\n")),(0,r.kt)("p",null,"\u5f53 ",(0,r.kt)("em",{parentName:"p"},"configurable")," \u4e3a ",(0,r.kt)("em",{parentName:"p"},"false")," \u65f6\uff0c\u5982\u679c\u628a ",(0,r.kt)("em",{parentName:"p"},"writable=true")," \u6539\u4e3a ",(0,r.kt)("em",{parentName:"p"},"false")," \u662f\u5141\u8bb8\u7684\u3002\u53ea\u8981 ",(0,r.kt)("em",{parentName:"p"},"writable")," \u6216 ",(0,r.kt)("em",{parentName:"p"},"configurable")," \u6709\u4e00\u4e2a\u4e3a ",(0,r.kt)("em",{parentName:"p"},"true"),"\uff0c\u5219 ",(0,r.kt)("em",{parentName:"p"},"value")," \u4e5f\u5141\u8bb8\u4fee\u6539\u3002"),(0,r.kt)("h3",{id:"get-\u548c-set-\u51fd\u6570"},(0,r.kt)("em",{parentName:"h3"},"get")," \u548c ",(0,r.kt)("em",{parentName:"h3"},"set")," \u51fd\u6570"),(0,r.kt)("p",null,"\u9664\u4e86\u4f7f\u7528\u70b9\u8bed\u6cd5\u6216\u4e2d\u62ec\u53f7\u8bed\u6cd5\u8bbf\u95ee\u5c5e\u6027\u7684 ",(0,r.kt)("em",{parentName:"p"},"value")," \u5916\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528\u8bbf\u95ee\u5668\uff0c\u5305\u62ec ",(0,r.kt)("em",{parentName:"p"},"set")," \u548c ",(0,r.kt)("em",{parentName:"p"},"get")," \u4e24\u4e2a\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c",(0,r.kt)("em",{parentName:"p"},"set( )")," \u51fd\u6570\u53ef\u4ee5\u8bbe\u7f6e ",(0,r.kt)("em",{parentName:"p"},"value")," \u5c5e\u6027\u503c\uff0c\u800c ",(0,r.kt)("em",{parentName:"p"},"get( )")," \u51fd\u6570\u53ef\u4ee5\u8bfb\u53d6 ",(0,r.kt)("em",{parentName:"p"},"value")," \u5c5e\u6027\u503c\u3002"),(0,r.kt)("p",null,"\u501f\u52a9\u8bbf\u95ee\u5668\uff0c\u53ef\u4ee5\u4e3a\u5c5e\u6027\u7684 ",(0,r.kt)("em",{parentName:"p"},"value")," \u8bbe\u8ba1\u9ad8\u7ea7\u529f\u80fd\uff0c\u5982\u7981\u7528\u90e8\u5206\u7279\u6027\u3001\u8bbe\u8ba1\u8bbf\u95ee\u6761\u4ef6\u3001\u5229\u7528\u5185\u90e8\u53d8\u91cf\u6216\u5c5e\u6027\u8fdb\u884c\u6570\u636e\u5904\u7406\u7b49\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1")),(0,r.kt)("p",null,"\u4e0b\u9762\u793a\u4f8b\u8bbe\u8ba1\u5bf9\u8c61 ",(0,r.kt)("em",{parentName:"p"},"obj")," \u7684 ",(0,r.kt)("em",{parentName:"p"},"x")," \u5c5e\u6027\u503c\u5fc5\u987b\u4e3a\u6570\u5b57\u3002\u4e3a\u5c5e\u6027 ",(0,r.kt)("em",{parentName:"p"},"x")," \u5b9a\u4e49\u4e86 ",(0,r.kt)("em",{parentName:"p"},"get")," \u548c ",(0,r.kt)("em",{parentName:"p"},"set")," \u7279\u6027\uff0c",(0,r.kt)("em",{parentName:"p"},"obj.x")," \u53d6\u503c\u65f6\uff0c\u5c31\u4f1a\u8c03\u7528 ",(0,r.kt)("em",{parentName:"p"},"get"),"\uff1b\u8d4b\u503c\u65f6\uff0c\u5c31\u4f1a\u8c03\u7528 ",(0,r.kt)("em",{parentName:"p"},"set"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var obj = Object.create(Object.prototype, {\n    _x : {  //\u6570\u636e\u5c5e\u6027\n        value : 1,  //\u521d\u59cb\u503c\n        writable : true\n    },\n    x : {  //\u8bbf\u95ee\u5668\u5c5e\u6027\n        get : function () {  //getter\n            return this._x;  //\u8fd4\u56de_x\u5c5e\u6027\u503c\n        },\n        set : function (value) {  //setter\n            if (typeof value != "number"){\n              throw new Error(\'\u8bf7\u8f93\u5165\u6570\u5b57\');\n            }\n            this._x = value;  //\u8d4b\u503c\n        }\n    }\n});\nconsole.log(obj.x);  //1\nobj.x = "2";  //\u629b\u51fa\u5f02\u5e38\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"JavaScript")," \u4e5f\u652f\u6301\u4e00\u79cd\u7b80\u5199\u65b9\u6cd5\u3002\u9488\u5bf9\u793a\u4f8b ",(0,r.kt)("em",{parentName:"p"},"1"),"\uff0c\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u53ef\u4ee5\u5feb\u901f\u5b9a\u4e49\u5c5e\u6027\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var obj = {\n    _x : 1,  // \u5b9a\u4e49 _x \u5c5e\u6027\n    get x() { return this._x },  //\u5b9a\u4e49 x \u5c5e\u6027\u7684 getter\n    set x(value) {  //\u5b9a\u4e49 x \u5c5e\u6027\u7684 setter\n        if (typeof value != \"number\"){\n          throw new Error('\u8bf7\u8f93\u5165\u6570\u5b57');\n        }\n        this._x = value;  // \u8d4b\u503c\n    }\n};\nconsole.log(obj.x);  //1\nobj.x = 2;\nconsole.log(obj.x);  //2\n")),(0,r.kt)("p",null,"\u53d6\u503c\u51fd\u6570 ",(0,r.kt)("em",{parentName:"p"},"get( )")," \u4e0d\u80fd\u63a5\u6536\u53c2\u6570\uff0c\u5b58\u503c\u51fd\u6570 ",(0,r.kt)("em",{parentName:"p"},"set( )")," \u53ea\u80fd\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\uff0c\u7528\u4e8e\u8bbe\u7f6e\u5c5e\u6027\u7684\u503c\u3002"),(0,r.kt)("h3",{id:"\u64cd\u4f5c\u5c5e\u6027\u63cf\u8ff0\u7b26"},"\u64cd\u4f5c\u5c5e\u6027\u63cf\u8ff0\u7b26"),(0,r.kt)("p",null,"\u5c5e\u6027\u63cf\u8ff0\u7b26\u662f\u4e00\u4e2a\u5185\u90e8\u5bf9\u8c61\uff0c\u65e0\u6cd5\u76f4\u63a5\u8bfb\u5199\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u51e0\u4e2a\u51fd\u6570\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Object.getOwnPropertyDescriptor( )"),"\uff1a\u53ef\u4ee5\u8bfb\u51fa\u6307\u5b9a\u5bf9\u8c61\u79c1\u6709\u5c5e\u6027\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Object.defineProperty( )"),"\uff1a\u901a\u8fc7\u5b9a\u4e49\u5c5e\u6027\u63cf\u8ff0\u7b26\u6765\u5b9a\u4e49\u6216\u4fee\u6539\u4e00\u4e2a\u5c5e\u6027\uff0c\u7136\u540e\u8fd4\u56de\u4fee\u6539\u540e\u7684\u63cf\u8ff0\u7b26\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Object.defineProperties( )"),"\uff1a\u53ef\u4ee5\u540c\u65f6\u5b9a\u4e49\u591a\u4e2a\u5c5e\u6027\u63cf\u8ff0\u7b26\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Object.getOwnPropertyNames( )"),"\uff1a\u83b7\u53d6\u5bf9\u8c61\u7684\u6240\u6709\u79c1\u6709\u5c5e\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Object.keys( )"),"\uff1a\u83b7\u53d6\u5bf9\u8c61\u7684\u6240\u6709\u672c\u5730\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"propertyIsEnumerable( )"),"\uff1a\u5bf9\u8c61\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u76f4\u63a5\u8c03\u7528\uff0c\u5224\u65ad\u6307\u5b9a\u7684\u5c5e\u6027\u662f\u5426\u53ef\u679a\u4e3e\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1")),(0,r.kt)("p",null,"\u5728\u4e0b\u9762\u793a\u4f8b\u4e2d\uff0c\u5b9a\u4e49 ",(0,r.kt)("em",{parentName:"p"},"obj")," \u7684 ",(0,r.kt)("em",{parentName:"p"},"x")," \u5c5e\u6027\u5141\u8bb8\u914d\u7f6e\u7279\u6027\uff0c\u7136\u540e\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"Object.getOwnPropertyDescriptor( )")," \u51fd\u6570\u83b7\u53d6\u5bf9\u8c61 ",(0,r.kt)("em",{parentName:"p"},"obj")," \u7684 ",(0,r.kt)("em",{parentName:"p"},"x")," \u5c5e\u6027\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u3002\u4fee\u6539\u5c5e\u6027\u63cf\u8ff0\u7b26\u7684 ",(0,r.kt)("em",{parentName:"p"},"set")," \u51fd\u6570\uff0c\u91cd\u8bbe\u68c0\u6d4b\u6761\u4ef6\uff0c\u5141\u8bb8\u975e\u6570\u503c\u578b\u6570\u5b57\u8d4b\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var obj = Object.create(Object.prototype, {\n    _x: {  //\u6570\u636e\u5c5e\u6027\n        value: 1,  //\u521d\u59cb\u503c\n        writable: true\n    },\n    x: {  //\u8bbf\u95ee\u5668\u5c5e\u6027\n        configurable: true,  //\u5141\u8bb8\u4fee\u6539\u914d\u7f6e\n        get: function () {  //getter\n            return this._x;  //\u8fd4\u56de_x\u5c5e\u6027\u503c\n        },\n        set: function (value) {\n            if (typeof value != "number") {\n                throw new Error(\'\u8bf7\u8f93\u5165\u6570\u5b57\');\n            }\n            this._x = value;  //\u8d4b\u503c\n        }\n    }\n});\nvar des = Object.getOwnPropertyDescriptor(obj, "x");  //\u83b7\u53d6\u5c5e\u6027x\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\ndes.set = function (value) {\n    //\u4fee\u6539\u5c5e\u6027x\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26set\u51fd\u6570\n    //\u5141\u8bb8\u975e\u6570\u503c\u578b\u7684\u6570\u5b57\uff0c\u4e5f\u53ef\u4ee5\u8fdb\u884c\u8d4b\u503c\n    if (typeof value != "number" && isNaN(value * 1)) {\n        throw new Error(\'\u8bf7\u8f93\u5165\u6570\u5b57\');\n    }\n    this._x = value;\n}\nobj = Object.defineProperty(obj, "x", des);\nconsole.log(obj.x);  //1\nobj.x = "2";  //\u628a\u4e00\u4e2a\u7ed9\u6570\u503c\u578b\u6570\u5b57\u8d4b\u503c\u7ed9\u5c5e\u6027x\nconsole.log(obj.x);  //2\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2")),(0,r.kt)("p",null,"\u4e0b\u9762\u793a\u4f8b\u5148\u5b9a\u4e49\u4e00\u4e2a\u6269\u5c55\u51fd\u6570\uff0c\u4f7f\u7528\u5b83\u53ef\u4ee5\u628a\u4e00\u4e2a\u5bf9\u8c61\u5305\u542b\u7684\u5c5e\u6027\u4ee5\u53ca\u4e30\u5bcc\u7684\u4fe1\u606f\u590d\u5236\u7ed9\u53e6\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u3010\u5b9e\u73b0\u4ee3\u7801\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function extend (toObj, fromObj) {  //\u6269\u5c55\u5bf9\u8c61\n    for (var property in fromObj) {  //\u904d\u5386\u5bf9\u8c61\u5c5e\u6027\n        if (!fromObj.hasOwnProperty(property)) continue;  //\u8fc7\u6ee4\u6389\u7ee7\u627f\u5c5e\u6027\n        Object.defineProperty(  //\u590d\u5236\u5b8c\u6574\u7684\u5c5e\u6027\u4fe1\u606f\n            toObj,  //\u76ee\u6807\u5bf9\u8c61\n            property,  //\u79c1\u6709\u5c5e\u6027\n            Object.getOwnPropertyDescriptor(fromObj, property)  //\u83b7\u53d6\u5c5e\u6027\u63cf\u8ff0\u7b26\n        );\n    }\n    return toObj;  //\u8fd4\u56de\u76ee\u6807\u5bf9\u8c61\n}\n")),(0,r.kt)("p",null,"\u3010\u5e94\u7528\u4ee3\u7801\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var obj = {};  //\u65b0\u5efa\u5bf9\u8c61\nobj.x = 1;  //\u5b9a\u4e49\u5bf9\u8c61\u5c5e\u6027\nextend(obj, { get y() { return 2} })  //\u5b9a\u4e49\u8bfb\u53d6\u5668\u5bf9\u8c61\nconsole.log(obj.y);  //2\n")),(0,r.kt)("h3",{id:"\u63a7\u5236\u5bf9\u8c61\u72b6\u6001"},"\u63a7\u5236\u5bf9\u8c61\u72b6\u6001"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"JavaScript")," \u63d0\u4f9b\u4e86 ",(0,r.kt)("em",{parentName:"p"},"3")," \u79cd\u65b9\u6cd5\uff0c\u7528\u6765\u7cbe\u786e\u63a7\u5236\u4e00\u4e2a\u5bf9\u8c61\u7684\u8bfb\u5199\u72b6\u6001\uff0c\u9632\u6b62\u5bf9\u8c61\u88ab\u6539\u53d8\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Object.preventExtensions"),"\uff1a\u963b\u6b62\u4e3a\u5bf9\u8c61\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Object.seal"),"\uff1a\u963b\u6b62\u4e3a\u5bf9\u8c61\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\uff0c\u540c\u65f6\u4e5f\u65e0\u6cd5\u5220\u9664\u65e7\u5c5e\u6027\u3002\u7b49\u4ef7\u4e8e\u5c5e\u6027\u63cf\u8ff0\u7b26\u7684 ",(0,r.kt)("em",{parentName:"li"},"configurable")," \u5c5e\u6027\u8bbe\u4e3a ",(0,r.kt)("em",{parentName:"li"},"false"),"\u3002\u6ce8\u610f\uff0c\u8be5\u65b9\u6cd5\u4e0d\u5f71\u54cd\u4fee\u6539\u67d0\u4e2a\u5c5e\u6027\u7684\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Object.freeze"),"\uff1a\u963b\u6b62\u4e3a\u4e00\u4e2a\u5bf9\u8c61\u6dfb\u52a0\u65b0\u5c5e\u6027\u3001\u5220\u9664\u65e7\u5c5e\u6027\u3001\u4fee\u6539\u5c5e\u6027\u503c\u3002")),(0,r.kt)("p",null,"\u540c\u65f6\u63d0\u4f9b\u4e86 ",(0,r.kt)("em",{parentName:"p"},"3")," \u4e2a\u5bf9\u5e94\u7684\u8f85\u52a9\u68c0\u67e5\u51fd\u6570\uff0c\u7b80\u5355\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Object.isExtensible"),"\uff1a\u68c0\u67e5\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u5141\u8bb8\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Object.isSealed"),"\uff1a\u68c0\u67e5\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u4f7f\u7528\u4e86 ",(0,r.kt)("em",{parentName:"li"},"Object.seal")," \u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Object.isFrozen"),"\uff1a\u68c0\u67e5\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u4f7f\u7528\u4e86 ",(0,r.kt)("em",{parentName:"li"},"Object.freeze")," \u65b9\u6cd5\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("p",null,"\u4e0b\u9762\u4ee3\u7801\u5206\u522b\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"Object.preventExtensions\u3001Object.seal")," \u548c ",(0,r.kt)("em",{parentName:"p"},"Object.freeze")," \u51fd\u6570\u63a7\u5236\u5bf9\u8c61\u7684\u72b6\u6001\uff0c\u7136\u540e\u518d\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"Object.isExtensible\u3001Object.isSealed")," \u548c ",(0,r.kt)("em",{parentName:"p"},"Object.isFrozen")," \u51fd\u6570\u68c0\u6d4b\u5bf9\u8c61\u7684\u72b6\u6001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var obj1 = {};\nconsole.log(Object.isExtensible(obj1));  //true\nObject.preventExtensions(obj1);\nconsole.log(Object.isExtensible(obj1));  //false\nvar obj2 = {};\nconsole.log(Object.isSealed(obj2));  //true\nObject.seal(obj2);\nconsole.log(Object.isSealed(obj2));  //false\nvar obj3 = {};\nconsole.log(Object.isFrozen(obj3));  //true\nObject.freeze(obj3);\nconsole.log(Object.isFrozen(obj3));  //false\n")),(0,r.kt)("h2",{id:"\u771f\u9898\u89e3\u7b54"},"\u771f\u9898\u89e3\u7b54"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"JavaScript")," \u4e2d\u5bf9\u8c61\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u6709\u54ea\u4e9b\uff1f\u5206\u522b\u6709\u4ec0\u4e48\u4f5c\u7528\uff1f")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u7b54\u6848\uff1a"),(0,r.kt)("p",{parentName:"blockquote"},"\u5c5e\u6027\u63cf\u8ff0\u7b26\u4e00\u5171\u6709 ",(0,r.kt)("em",{parentName:"p"},"6")," \u4e2a\uff0c\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\u3002"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"value"),"\uff1a\u8bbe\u7f6e\u5c5e\u6027\u503c\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("em",{parentName:"li"},"undefined"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"writable"),"\uff1a\u8bbe\u7f6e\u5c5e\u6027\u503c\u662f\u5426\u53ef\u5199\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("em",{parentName:"li"},"true"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"enumerable"),"\uff1a\u8bbe\u7f6e\u5c5e\u6027\u662f\u5426\u53ef\u679a\u4e3e\uff0c\u5373\u662f\u5426\u5141\u8bb8\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"li"},"for/in")," \u8bed\u53e5\u6216 ",(0,r.kt)("em",{parentName:"li"},"Object.keys( )")," \u51fd\u6570\u904d\u5386\u8bbf\u95ee\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("em",{parentName:"li"},"true"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"configurable"),"\uff1a\u8bbe\u7f6e\u662f\u5426\u53ef\u8bbe\u7f6e\u5c5e\u6027\u7279\u6027\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("em",{parentName:"li"},"true"),"\u3002\u5982\u679c\u4e3a ",(0,r.kt)("em",{parentName:"li"},"false"),"\uff0c\u5c06\u65e0\u6cd5\u5220\u9664\u8be5\u5c5e\u6027\uff0c\u4e0d\u80fd\u591f\u4fee\u6539\u5c5e\u6027\u503c\uff0c\u4e5f\u4e0d\u80fd\u4fee\u6539\u5c5e\u6027\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"get"),"\uff1a\u53d6\u503c\u51fd\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("em",{parentName:"li"},"undefined"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"set"),"\uff1a\u5b58\u503c\u51fd\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("em",{parentName:"li"},"undefined"),"\u3002")),(0,r.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u5c5e\u6027\u63cf\u8ff0\u7b26\u7684\u65f6\u5019\uff0c",(0,r.kt)("em",{parentName:"p"},"get")," \u548c ",(0,r.kt)("em",{parentName:"p"},"set")," \u4ee5\u53ca ",(0,r.kt)("em",{parentName:"p"},"value")," \u548c ",(0,r.kt)("em",{parentName:"p"},"writable")," \u8fd9\u4e24\u7ec4\u662f\u4e92\u65a5\u7684\uff0c\u8bbe\u7f6e\u4e86 ",(0,r.kt)("em",{parentName:"p"},"get")," \u548c ",(0,r.kt)("em",{parentName:"p"},"set")," \u5c31\u4e0d\u80fd\u8bbe\u7f6e ",(0,r.kt)("em",{parentName:"p"},"value")," \u548c ",(0,r.kt)("em",{parentName:"p"},"writable"),"\uff0c\u53cd\u4e4b\u8bbe\u7f6e\u4e86 ",(0,r.kt)("em",{parentName:"p"},"value")," \u548c ",(0,r.kt)("em",{parentName:"p"},"writable")," \u4e5f\u5c31\u4e0d\u53ef\u4ee5\u8bbe\u7f6e ",(0,r.kt)("em",{parentName:"p"},"get")," \u548c ",(0,r.kt)("em",{parentName:"p"},"set"),"\u3002")),(0,r.kt)("p",null,"-",(0,r.kt)("em",{parentName:"p"},"EOF"),"-"))}k.isMDXComponent=!0}}]);