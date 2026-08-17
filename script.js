
document.addEventListener("DOMContentLoaded",()=>{
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
 document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
 document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
});
