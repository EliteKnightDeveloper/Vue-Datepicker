import{c as d}from"./vue-datepicker.es.71494812.js";import{_ as l,C as m,o as p,c as u,b as _,r as f}from"./app.35a3a0b2.js";const i={components:{Datepicker:d},props:["placeholder"],data(){return{date:new Date,dark:!0}},methods:{format(e){const o=e.getDate(),t=e.getMonth()+1,a=e.getFullYear();return`Selected date is ${o}/${t}/${a}`}},mounted(){this.dark=m()}},k={class:"demo-wrap"};function h(e,o,t,a,r,n){const s=f("Datepicker");return p(),u("div",k,[_(s,{modelValue:r.date,"onUpdate:modelValue":o[0]||(o[0]=c=>r.date=c),placeholder:t.placeholder,format:n.format,dark:r.dark},null,8,["modelValue","placeholder","format","dark"])])}var V=l(i,[["render",h],["__file","FormatDemo.vue"]]);export{V as default};
