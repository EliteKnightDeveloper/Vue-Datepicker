import{_ as c,f as g,g as s,u as m,r as f,o as i,c as D,b as v}from"./app.46c9efaa.js";import{r,t as n,Q as h,s as o}from"./vue-datepicker.es.9f3b8378.js";function l(a){r(1,arguments);var e=n(a),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function u(a){r(1,arguments);var e=n(a);return e.setDate(1),e.setHours(0,0,0,0),e}function k(a){r(1,arguments);var e=n(a),t=new Date(0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}function w(a){r(1,arguments);var e=n(a),t=e.getFullYear();return e.setFullYear(t+1,0,0),e.setHours(23,59,59,999),e}const _=g({components:{Datepicker:h},setup(){const a=s(),e=m(),t=s([{label:"Today",range:[new Date,new Date]},{label:"This month",range:[u(new Date),l(new Date)]},{label:"Last month",range:[u(o(new Date,1)),l(o(new Date,1))]},{label:"This year",range:[k(new Date),w(new Date)]}]);return{date:a,dark:e,presetRanges:t}}}),Y={class:"demo-wrap"};function b(a,e,t,F,M,H){const d=f("Datepicker");return i(),D("div",Y,[v(d,{modelValue:a.date,"onUpdate:modelValue":e[0]||(e[0]=p=>a.date=p),placeholder:"Select Date",dark:a.dark,range:"","preset-ranges":a.presetRanges},null,8,["modelValue","dark","preset-ranges"])])}var V=c(_,[["render",b],["__file","PresetRange.vue"]]);export{V as default};
