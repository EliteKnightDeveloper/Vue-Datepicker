"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[881],{881:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var d=a(6252);const r={class:"demo-wrap"};var i=a(4855),s=a(2650);const c={components:{Datepicker:i.Z},props:["uid"],data:()=>({date:new Date,dark:!0}),computed:{disabledDates(){const e=new Date,t=new Date(e);t.setDate(t.getDate()+1);const a=new Date(t);return a.setDate(t.getDate()+1),[t,a]}},mounted(){this.dark=(0,s.vs)()},render:function(e,t,a,i,s,c){const n=(0,d.up)("Datepicker");return(0,d.wg)(),(0,d.iD)("div",r,[(0,d.Wm)(n,{modelValue:s.date,"onUpdate:modelValue":t[0]||(t[0]=e=>s.date=e),uid:a.uid,dark:s.dark,disabledDates:c.disabledDates},null,8,["modelValue","uid","dark","disabledDates"])])}}},2650:(e,t,a)=>{a.d(t,{vs:()=>d.vs});var d=a(4536);a(8639)},8639:(e,t,a)=>{a.d(t,{Fg:()=>s,c9:()=>r});var d=a(480);const r=e=>!(0,d.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,i={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},s=({docsRepo:e,docsBranch:t,docsDir:a,filePathRelative:s,editLinkPattern:c})=>{const n=r(e);let o;return c?o=c:null!==n&&(o=i[n]),o?o.replace(/:repo/,(0,d.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,(0,d.FY)(`${(0,d.U1)(a)}/${s}`)):null}}}]);