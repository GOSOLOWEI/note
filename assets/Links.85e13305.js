import{C as k}from"./Common.cbaaa848.js";import{P as g}from"./PageHeader.23f9609f.js";import{_ as h,e as v,f as L,H as B,j as w,o as t,g as x,w as C,h as y,i as c,a as e,c as o,E as _,F as u,t as i}from"./app.70af97e0.js";const F={class:"links-wrapper"},P={class:"link-group"},$={class:"content"},D=["href"],E=["src"],H={class:"sitename"},N={class:"desc"},T=v({__name:"Links",setup(V){const a=L(),p=B(),d=w(()=>{var r;const s=a.value.pages&&a.value.pages.links?a.value.pages.links:{};return s.title===void 0&&(s.title=(r=a.value.pageText)==null?void 0:r.links),s});return(s,r)=>(t(),x(k,null,{page:C(()=>[y(g,{"page-info":c(d)},null,8,["page-info"]),e("div",F,[(t(!0),o(u,null,_(c(p).links,(l,m)=>(t(),o("div",{key:`link-group-${m}`,class:"link-section"},[e("h2",null,i(l.title),1),e("div",P,[(t(!0),o(u,null,_(l.items,(n,f)=>(t(),o("div",{key:`link-${f}`,class:"link-item"},[e("div",$,[e("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:s.$withBase(n.img)},null,8,E),e("span",H,i(n.sitename),1),e("div",N,i(n.desc),1)],8,D)])]))),128))])]))),128))])]),_:1}))}});var S=h(T,[["__file","Links.vue"]]);export{S as default};
