import{f as l,j as _,m as p,n as u,l as t,k as f,o as b,c as m,_ as v}from"../app.e1aa4a60.js";const A=l({__name:"VPCarbonAds",props:{carbonAds:null},setup(r){const d=r,{page:i}=_(),s=d.carbonAds,{isAsideEnabled:n}=p(),c=u();let a=!1;function o(){if(!a){a=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${s.code}&placement=${s.placement}`,e.async=!0,c.value.appendChild(e)}}return t(()=>i.value.relativePath,()=>{var e;a&&n.value&&((e=window._carbonads)==null||e.refresh())}),s&&f(()=>{n.value?o():t(n,e=>e&&o())}),(e,C)=>(b(),m("div",{class:"VPCarbonAds",ref_key:"container",ref:c},null,512))}});const P=v(A,[["__scopeId","data-v-942749cc"]]);export{P as default};
