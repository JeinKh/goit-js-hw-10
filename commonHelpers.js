import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y,i as S}from"./assets/vendor-77e16229.js";const s=document.querySelector("button[data-start]"),c=document.querySelector("#datetime-picker"),p=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),D=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");let l,u;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(S.warning({title:"Warning",message:"Please choose a date in the future"}),s.disabled=!0):(s.disabled=!1,l=t)}};y(c,q);s.addEventListener("click",()=>{s.disabled=!0,c.disabled=!0,u=setInterval(()=>{const t=l-new Date;if(t<=0){clearInterval(u),i(0,0,0,0),c.disabled=!1;return}const{days:n,hours:o,minutes:d,seconds:r}=w(t);i(n,o,d,r)},1e3)});function w(e){const r=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:m,minutes:f,seconds:h}}function i(e,t,n,o){p.textContent=a(e),b.textContent=a(t),D.textContent=a(n),g.textContent=a(o)}function a(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
