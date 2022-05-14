import{y as i}from"./vue-datepicker.es.b9c52109.js";import{_ as o,C as l,r as m,o as c,c as u,b as d,s as p}from"./app.f8eaa7ee.js";const h={components:{Datepicker:i},props:["uid","is24","enableTimePicker","locale","cancelText","selectText","range","position","weekNumbers","placeholder","hoursIncrement","minutesIncrement","hoursGridIncrement","minutesGridIncrement","minDate","maxDate","minTime","maxTime","weekStart","disabled","readonly","inputClassName","menuClassName","hideInputIcon","state","clearable","closeOnScroll","autoApply","filters","disableMonthYearSelect","yearRange","disabledDates","inline","weekNumName","autoPosition","monthPicker","timePicker","closeOnAutoApply","calendarClassName","calendarCellClassName","teleport","startDate","startTime","monthNameFormat","autoRange","hideOffsetDates","noHoursOverlay","noMinutesOverlay","altPosition","multiCalendars","multiCalendarsSolo","partialRange","monthChangeOnScroll","transitions","modeHeight","enableSeconds","secondsIncrement","secondsGridIncrement","noSecondsOverlay","openMenuOnFocus","escClose","spaceConfirm","monthChangeOnArrows","inlineWithInput","name","autocomplete","preventMinMaxNavigation","fixedEnd","fixedStart","keepActionRow","reverseYears","vertical","noSwipe","arrowNavigation","textInput","yearPicker","multiStatic"],data(){return{date:null,dateReset:!1,dark:!0}},computed:{value:{get(){if(this.dateReset||this.maxTime||this.minTime||this.startDate||this.startTime)return null;if(this.date)return this.date;if(this.monthPicker)return{month:new Date().getMonth(),year:new Date().getFullYear()};if(this.yearPicker)return new Date().getFullYear();if(this.timePicker){const e=new Date;return{hours:e.getHours(),minutes:e.getMinutes()}}if(this.range){const e=new Date,t=new Date(new Date().setDate(e.getDate()+7));return[e,t]}return new Date},set(e){this.dateReset=!e,this.date=e}}},mounted(){this.dark=l()}},D={class:"demo-wrap"};function k(e,t,f,g,n,a){const r=m("Datepicker");return c(),u("div",D,[d(r,p({modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s)},e.$props,{dark:n.dark}),null,16,["modelValue","dark"])])}var w=o(h,[["render",k],["__file","Demo.vue"]]);export{w as default};
