"use strict";(self.webpackChunkvue3_date_time_picker_documentation=self.webpackChunkvue3_date_time_picker_documentation||[]).push([[192],{220:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-08a5d2dc",path:"/installation/",title:"Installation",lang:"en-US",frontmatter:{title:"Installation",description:"Install guide for vue3-date-time-picker for global installation, Options and Composition API"},excerpt:"",headers:[{level:3,title:"Global",slug:"global",children:[]},{level:3,title:"Local",slug:"local",children:[]}],filePathRelative:"installation/README.md",git:{updatedTime:1632583146e3}}},1893:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(6252);const e=(0,t.uE)('<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><p>Install the component using the preferred package manager</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> vue3-date-time-picker\n\n<span class="token comment"># or</span>\n\n<span class="token function">npm</span> <span class="token function">install</span> vue3-date-time-picker\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Then import and register component</p><p><strong>Note</strong>: <code>css</code> file is imported separately</p><h3 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> <strong>Global</strong></h3><p>In the main file</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> Datepicker <span class="token keyword">from</span> <span class="token string">&#39;vue3-date-time-picker&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;vue3-date-time-picker/dist/main.css&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;Datepicker&#39;</span><span class="token punctuation">,</span> Datepicker<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="local" tabindex="-1"><a class="header-anchor" href="#local" aria-hidden="true">#</a> <strong>Local</strong></h3><p>In the <code>.vue</code> files</p>',10),p=(0,t._)("div",{class:"language-vue ext-vue line-numbers-mode"},[(0,t._)("pre",{class:"language-vue"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("Datepicker")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"v-model"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("date"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("Datepicker")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(" Datepicker "),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue3-date-time-picker'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue3-date-time-picker/dist/main.css'"),(0,t.Uk)("\n    \n    "),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        components"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" Datepicker "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token function"},"data"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n                date"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"null"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"12"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"13"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"14"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"15"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"16"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"17"),(0,t._)("br")])],-1),c=(0,t._)("div",{class:"language-vue ext-vue line-numbers-mode"},[(0,t._)("pre",{class:"language-vue"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("Datepicker")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"v-model"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("date"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("Datepicker")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" ref "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(" Datepicker "),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue3-date-time-picker'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue3-date-time-picker/dist/main.css'"),(0,t.Uk)("\n    \n    "),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        components"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" Datepicker "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token function"},"setup"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" date "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"ref"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n            \n            "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n                date\n            "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"12"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"13"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"14"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"15"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"16"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"17"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"18"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"19"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"20"),(0,t._)("br")])],-1),o=(0,t._)("div",{class:"language-vue ext-vue line-numbers-mode"},[(0,t._)("pre",{class:"language-vue"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("Datepicker")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"v-model"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("date"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("Datepicker")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"setup"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" ref "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(" Datepicker "),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue3-date-time-picker'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue3-date-time-picker/dist/main.css'"),(0,t.Uk)("\n    \n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" date "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"ref"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br")])],-1),l=(0,t.uE)('<p>Alternatively, you can import the <code>scss</code> file if you want full control of the component styles</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@Import</span> <span class="token string">&#39;vue3-date-time-picker/src/Vue3DatePicker/styles/main.scss&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>That&#39;s it, you are ready to go</p>',3),u={render:function(n,s){const a=(0,t.up)("CodeGroupItem"),u=(0,t.up)("CodeGroup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Wm)(a,{title:"Options API",active:""},{default:(0,t.w5)((()=>[p])),_:1}),(0,t.Wm)(a,{title:"Composition API"},{default:(0,t.w5)((()=>[c])),_:1}),(0,t.Wm)(a,{title:"<script setup>"},{default:(0,t.w5)((()=>[o])),_:1})])),_:1}),l],64)}}}}]);