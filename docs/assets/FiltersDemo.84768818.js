import{e as d,f as l,u as p,h as m,r as c,o as i,c as f,a as u}from"./app.bce967f0.js";import{V as _,g as k,b as D}from"./vue3-date-time-picker.esm.37fef68f.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";const V=d({components:{Datepicker:_},setup(){const e=l(new Date),t=p();return{filters:m(()=>{const r=new Date;return{months:Array.from(Array(3).keys()).map(a=>k(D(r,a+1)))}}),date:e,dark:t}}}),h={class:"demo-wrap"};function y(e,t,o,r,a,$){const s=c("Datepicker");return i(),f("div",h,[u(s,{modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=n=>e.date=n),dark:e.dark,placeholder:"Select Date",filters:e.filters},null,8,["modelValue","dark","filters"])])}var A=v(V,[["render",y]]);export{A as default};
