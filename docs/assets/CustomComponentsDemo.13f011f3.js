import{_ as a,$ as t,a0 as n,C as c,r as i,o as p,c as u,b as _}from"./app.9132655d.js";import{y as d}from"./vue-datepicker.es.f6a996e8.js";const l=t(()=>n(()=>import("./MonthYearCmp.3dc8033f.js"),["assets/MonthYearCmp.3dc8033f.js","assets/ChevronLeftIcon.19830481.js","assets/app.9132655d.js","assets/ChevronRightIcon.efa067ca.js"])),C=t(()=>n(()=>import("./TimePickerCmp.a9804ea8.js"),["assets/TimePickerCmp.a9804ea8.js","assets/app.9132655d.js"])),k=t(()=>n(()=>import("./ActionRowCmp.c7d9e5dd.js"),["assets/ActionRowCmp.c7d9e5dd.js","assets/app.9132655d.js"])),h={components:{Datepicker:d},props:["useCustomMonthYear","useCustomTimePicker","useCustomActionRow"],data(){return{date:new Date,dark:!0}},mounted(){this.dark=c()},computed:{monthYearCmp(){return this.useCustomMonthYear?l:null},timePickerCmp(){return this.useCustomTimePicker?C:null},actionRowCmp(){return this.useCustomActionRow?k:null}}},D={class:"demo-wrap"};function f(w,r,P,v,e,o){const m=i("Datepicker");return p(),u("div",D,[_(m,{modelValue:e.date,"onUpdate:modelValue":r[0]||(r[0]=s=>e.date=s),dark:e.dark,"month-year-component":o.monthYearCmp,"time-picker-component":o.timePickerCmp,"action-row-component":o.actionRowCmp},null,8,["modelValue","dark","month-year-component","time-picker-component","action-row-component"])])}var E=a(h,[["render",f],["__file","CustomComponentsDemo.vue"]]);export{E as default};
