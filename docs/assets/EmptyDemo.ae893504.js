import{c as l}from"./vue-datepicker.es.71494812.js";import{_ as o,C as d,o as r,c as s,b as c,r as u}from"./app.35a3a0b2.js";const w={components:{Datepicker:l},props:["placeholder","noToday","minTime","maxTime","startDate","startTime","disabledWeekDays","allowedDates","showNowButton","nowButtonLabel","multiDates","flow","minRange","maxRange","range","multiDatesLimit","weekPicker","monthPicker","timePicker","disableTimeRangeValidation"],data(){return{date:null,dark:!0}},mounted(){this.dark=d()},computed:{hasAllowedDates(){return this.allowedDates?[new Date,new Date(new Date().setDate(new Date().getDate()+1))]:[]}}},k={class:"demo-wrap"};function D(b,a,e,g,t,i){const n=u("Datepicker");return r(),s("div",k,[c(n,{modelValue:t.date,"onUpdate:modelValue":a[0]||(a[0]=m=>t.date=m),placeholder:e.placeholder,dark:t.dark,"no-today":e.noToday,"min-time":e.minTime,"max-time":e.maxTime,"start-date":e.startDate,"start-time":e.startTime,"disabled-week-days":e.disabledWeekDays,"allowed-dates":i.hasAllowedDates,"show-now-button":e.showNowButton,"now-button-label":e.nowButtonLabel,"multi-dates":e.multiDates,"min-range":e.minRange,"max-range":e.maxRange,range:e.range,flow:e.flow,"multi-dates-limit":e.multiDatesLimit,"week-picker":e.weekPicker,"month-picker":e.monthPicker,"time-picker":e.timePicker,"disable-time-range-validation":e.disableTimeRangeValidation},null,8,["modelValue","placeholder","dark","no-today","min-time","max-time","start-date","start-time","disabled-week-days","allowed-dates","show-now-button","now-button-label","multi-dates","min-range","max-range","range","flow","multi-dates-limit","week-picker","month-picker","time-picker","disable-time-range-validation"])])}var _=o(w,[["render",D],["__file","EmptyDemo.vue"]]);export{_ as default};
