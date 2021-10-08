"use strict";(self.webpackChunkvue3_date_time_picker_documentation=self.webpackChunkvue3_date_time_picker_documentation||[]).push([[267],{5952:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-241ec4c4",path:"/customization/theming/",title:"Theming",lang:"en-US",frontmatter:{title:"Theming",description:"Datepicker theme configuration for light and dark theme"},excerpt:"",headers:[],filePathRelative:"customization/theming/README.md",git:{updatedTime:1632583146e3}}},2291:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});var p=a(6252);const e={ssrRender:(...n)=>(n[2].appContext.provides[p.Uc]._registeredComponents.add("D:\\Projects\\vue3-date-picker-documentation\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projects\\vue3-date-picker-documentation\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projects\\vue3-date-picker-documentation\\docs\\.vuepress\\.temp\\pages\\customization\\theming\\index.html.vue"),function(n,s,a,p){s('\x3c!--[--\x3e<h1 id="theming" tabindex="-1"><a class="header-anchor" href="#theming" aria-hidden="true">#</a> Theming</h1><p>Datepicker comes with the theme support with <code>css</code> variables. It provides two classes that are applied based on the chosen dark/light mode</p><p>To change variables, simply override the classes with your custom values.</p><p><strong>Dark mode configuration</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.dp__theme_dark</span> <span class="token punctuation">{</span>\n    <span class="token property">--dp-background-color</span><span class="token punctuation">:</span> #212121<span class="token punctuation">;</span>\n    <span class="token property">--dp-text-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>\n    <span class="token property">--dp-hover-color</span><span class="token punctuation">:</span> #484848<span class="token punctuation">;</span>\n    <span class="token property">--dp-primary-color</span><span class="token punctuation">:</span> #005cb2<span class="token punctuation">;</span>\n    <span class="token property">--dp-primary-text-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>\n    <span class="token property">--dp-secondary-color</span><span class="token punctuation">:</span> #a9a9a9<span class="token punctuation">;</span>\n    <span class="token property">--dp-border-color</span><span class="token punctuation">:</span> #2d2d2d<span class="token punctuation">;</span>\n    <span class="token property">--dp-border-color-hover</span><span class="token punctuation">:</span> #aaaeb7<span class="token punctuation">;</span>\n    <span class="token property">--dp-disabled-color</span><span class="token punctuation">:</span> #737373<span class="token punctuation">;</span>\n    <span class="token property">--dp-scroll-bar-background</span><span class="token punctuation">:</span> #212121<span class="token punctuation">;</span>\n    <span class="token property">--dp-scroll-bar-color</span><span class="token punctuation">:</span> #484848<span class="token punctuation">;</span>\n    <span class="token property">--dp-success-color</span><span class="token punctuation">:</span> #00701a<span class="token punctuation">;</span>\n    <span class="token property">--dp-icon-color</span><span class="token punctuation">:</span> #959595<span class="token punctuation">;</span>\n    <span class="token property">--dp-danger-color</span><span class="token punctuation">:</span> #e53935<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>Light mode configration</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.dp__theme_light</span> <span class="token punctuation">{</span>\n  <span class="token property">--dp-background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>\n  <span class="token property">--dp-text-color</span><span class="token punctuation">:</span> #212121<span class="token punctuation">;</span>\n  <span class="token property">--dp-hover-color</span><span class="token punctuation">:</span> #f3f3f3<span class="token punctuation">;</span>\n  <span class="token property">--dp-primary-color</span><span class="token punctuation">:</span> #1976d2<span class="token punctuation">;</span>\n  <span class="token property">--dp-primary-text-color</span><span class="token punctuation">:</span> #f8f5f5<span class="token punctuation">;</span>\n  <span class="token property">--dp-secondary-color</span><span class="token punctuation">:</span> #c0c4cc<span class="token punctuation">;</span>\n  <span class="token property">--dp-border-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>\n  <span class="token property">--dp-border-color-hover</span><span class="token punctuation">:</span> #aaaeb7<span class="token punctuation">;</span>\n  <span class="token property">--dp-disabled-color</span><span class="token punctuation">:</span> #f6f6f6<span class="token punctuation">;</span>\n  <span class="token property">--dp-scroll-bar-background</span><span class="token punctuation">:</span> #f3f3f3<span class="token punctuation">;</span>\n  <span class="token property">--dp-scroll-bar-color</span><span class="token punctuation">:</span> #959595<span class="token punctuation">;</span>\n  <span class="token property">--dp-success-color</span><span class="token punctuation">:</span> #76d275<span class="token punctuation">;</span>\n  <span class="token property">--dp-icon-color</span><span class="token punctuation">:</span> #959595<span class="token punctuation">;</span>\n  <span class="token property">--dp-danger-color</span><span class="token punctuation">:</span> #ff6f60<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>\x3c!--]--\x3e')}(...n))}}}]);