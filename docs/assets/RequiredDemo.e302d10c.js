import{e as m,f as n,u as d,r as i,o as u,c as p,b as r,a as l,m as c}from"./app.216eec89.js";import{T as f}from"./vue3-date-time-picker.esm.f6c600f4.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{j as b}from"./index.81427e26.js";const k=m({components:{Datepicker:f},setup(){const e=n(),o=d();return{submitForm:()=>{alert("Form submitted")},date:e,dark:o,ja:b}}}),v={class:"demo-wrap"},D=r("button",{class:"submit-btn",type:"submit"},"Submit form",-1);function F(e,o,s,V,$,q){const a=i("Datepicker");return u(),p("div",v,[r("form",{onSubmit:o[1]||(o[1]=c((...t)=>e.submitForm&&e.submitForm(...t),["prevent"]))},[l(a,{modelValue:e.date,"onUpdate:modelValue":o[0]||(o[0]=t=>e.date=t),dark:e.dark,placeholder:"Select Date",required:""},null,8,["modelValue","dark"]),D],32)])}var w=_(k,[["render",F]]);export{w as default};
