"use strict";(self.webpackChunkvue3_date_time_picker_documentation=self.webpackChunkvue3_date_time_picker_documentation||[]).push([[398],{6398:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(6252);const r={class:"demo-wrap"};var i=a(8680),s=a(2650);const l={components:{Datepicker:i.Z},props:["is24","enableTimePicker","locale","cancelText","selectText","range","position","weekNumbers","placeholder","hoursIncrement","minutesIncrement","hoursGridIncrement","minutesGridIncrement","minDate","maxDate","minTime","maxTime","weekStart","disabled","readonly","inputClassName","menuClassName","hideInputIcon","state","clearable","closeOnScroll","autoApply","filters","disableMonthYearSelect","yearRange","disabledDates","inline","weekNumName","autoPosition","monthPicker","timePicker","closeOnAutoApply","calendarClassName","calendarCellClassName","teleport","startDate","startTime","monthNameFormat","autoRange","hideOffsetDates","noHoursOverlay","noMinutesOverlay","altPosition","twoCalendars","twoCalendarsSolo","partialRange","monthChangeOnScroll"],data:()=>({date:null,dateReset:!1,dark:!0}),computed:{value:{get(){if(this.dateReset||this.maxTime||this.minTime||this.startDate||this.startTime)return null;if(this.date)return this.date;if(this.monthPicker)return{month:(new Date).getMonth(),year:(new Date).getFullYear()};if(this.timePicker){const e=new Date;return{hours:e.getHours(),minutes:e.getMinutes()}}if(this.range){const e=new Date,t=new Date((new Date).setDate(e.getDate()+7));return[e,t]}return new Date},set(e){this.dateReset=!e,this.date=e}}},mounted(){this.dark=(0,s.vs)()}},o=(0,a(3744).Z)(l,[["render",function(e,t,a,i,s,l){const o=(0,n.up)("Datepicker");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(o,(0,n.dG)({modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e)},e.$props,{dark:s.dark}),null,16,["modelValue","dark"])])}]])},2650:(e,t,a)=>{a.d(t,{vs:()=>n.vs});var n=a(2791);a(8639)},8639:(e,t,a)=>{a.d(t,{Fg:()=>s,c9:()=>r});var n=a(7788);const r=e=>!(0,n.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,i={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},s=({docsRepo:e,docsBranch:t,docsDir:a,filePathRelative:s,editLinkPattern:l})=>{const o=r(e);let c;return l?c=l:null!==o&&(c=i[o]),c?c.replace(/:repo/,(0,n.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,(0,n.FY)(`${(0,n.U1)(a)}/${s}`)):null}}}]);