import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as n}from"./assets/vendor-77e16229.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".form");s.addEventListener("submit",e=>{e.preventDefault();const o=s.elements.delay.value,i=s.elements.state.value;r(o,i).then(t=>{n.success({title:"Success",message:t,position:"topRight"})}).catch(t=>{n.error({title:"Error",message:t,position:"topRight"})})});function r(e,o){return new Promise((i,t)=>{setTimeout(()=>{o==="fulfilled"?i(`✅ Fulfilled promise in ${e}ms`):t(`❌ Rejected promise in ${e}ms`)},e)})}});
//# sourceMappingURL=commonHelpers2.js.map
