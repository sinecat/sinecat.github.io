"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={},a="\u8fc7\u6ee4\u5668",p={unversionedId:"interview/vue/filter\u8fc7\u6ee4\u5668",id:"interview/vue/filter\u8fc7\u6ee4\u5668",title:"\u8fc7\u6ee4\u5668",description:"\u53c2\u89c1\u5b98\u7f51\u6587\u6863\uff1ahttps://cn.vuejs.org/v2/guide/filters.html",source:"@site/docs/interview/vue/8.filter\u8fc7\u6ee4\u5668.md",sourceDirName:"interview/vue",slug:"/interview/vue/filter\u8fc7\u6ee4\u5668",permalink:"/docs/interview/vue/filter\u8fc7\u6ee4\u5668",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/interview/vue/8.filter\u8fc7\u6ee4\u5668.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"study",previous:{title:"\u4f60\u4e0d\u77e5\u9053\u7684computed",permalink:"/docs/interview/vue/\u4f60\u4e0d\u77e5\u9053\u7684computed"},next:{title:"\u4f5c\u7528\u57df\u63d2\u69fd",permalink:"/docs/interview/vue/\u4f5c\u7528\u57df\u63d2\u69fd"}},l={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8fc7\u6ee4\u5668"},"\u8fc7\u6ee4\u5668"),(0,i.kt)("p",null,"\u53c2\u89c1\u5b98\u7f51\u6587\u6863\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://cn.vuejs.org/v2/guide/filters.html"},"https://cn.vuejs.org/v2/guide/filters.html")),(0,i.kt)("p",null,"\u76f4\u63a5\u4e0a\u4f8b\u5b50"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <div id="app">\n    <input v-model.number="money" type="number" />\n    <p>\n      {{ money | formatMoney(" ") }}\n    </p>\n  </div>\n</template>\n\n<script>\nimport { formatMoney } from "./filter/moneyFilter";\nexport default {\n  data() {\n    return {\n      money: 1000,\n    };\n  },\n  filters: {\n    formatMoney,\n  },\n};\n<\/script>\n\n<style>\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  text-align: center;\n}\n</style>\n\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"filter/moneyFilter")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n *\n * @param {Number} money\n * @param {String} split\n */\nexport function formatMoney(money, split = ",", fixedDigit = 2) {\n  const str = money.toFixed(fixedDigit).toString();\n  const parts = str.split(".");\n  let part1 = parts[0]; // \u5de6\u8fb9\u6574\u6570\n  const part2 = parts[1]; // \u53f3\u8fb9\u5c0f\u6570\n  part1 = part1.replace(/(?=(\\d{3})+$)/g, split);\n  return `${part1}.${part2}`;\n}\n\n')))}u.isMDXComponent=!0}}]);