import{T as a}from"./vue3-date-time-picker.esm.f6c600f4.js";import{u as p,r as s,o as u,c as d,a as i}from"./app.216eec89.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const l={components:{Datepicker:a},props:["textInput","textInputOptions"],data(){return{date:null,dark:!0}},mounted(){this.dark=p()}},m={class:"demo-wrap"};function x(k,e,o,_,t,f){const n=s("Datepicker");return u(),d("div",m,[i(n,{modelValue:t.date,"onUpdate:modelValue":e[0]||(e[0]=r=>t.date=r),dark:t.dark,"text-input":o.textInput,"text-input-options":o.textInputOptions,placeholder:"Start Typing ..."},null,8,["modelValue","dark","text-input","text-input-options"])])}var V=c(l,[["render",x]]);export{V as default};
