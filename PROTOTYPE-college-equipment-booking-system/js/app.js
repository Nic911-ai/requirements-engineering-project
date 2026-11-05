// Shared helpers, page shell (sidebar + top bar), toasts and dialogs
const ROOT=document.body.dataset.root||"";
const $=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt=d=>d?new Date(d+"T00:00").toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}):"-";
const today=()=>{const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const param=n=>new URLSearchParams(location.search).get(n);
const findEquip=id=>EQUIPMENT.find(e=>e.id===id);
function badge(s){const c={"Pending Review":"pending",Approved:"approved",Rejected:"rejected",Cancelled:"cancelled",Available:"approved",Limited:"pending",Unavailable:"rejected"}[s]||"pending";return `<span class="badge ${c}">${esc(s)}</span>`}
// Placeholder image drawn as inline SVG so there are never broken links
function equipImg(e){const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="${e.color}"/><text x="200" y="175" font-size="110" text-anchor="middle">${e.icon}</text></svg>`;return "data:image/svg+xml,"+encodeURIComponent(svg)}
function toast(msg,type){let box=$("#toasts");if(!box){box=document.createElement("div");box.id="toasts";document.body.append(box)}
 const t=document.createElement("div");t.className="toast "+(type||"");t.textContent=msg;box.append(t);setTimeout(()=>t.remove(),3500)}
function confirmBox(msg,onYes){const d=document.createElement("dialog");d.innerHTML=`<p>${esc(msg)}</p><div class="row"><button class="btn danger" id="y">Yes, continue</button><button class="btn ghost" id="n">No, go back</button></div>`;
 document.body.append(d);d.showModal();$("#n",d).onclick=()=>{d.close();d.remove()};$("#y",d).onclick=()=>{d.close();d.remove();onYes()}}
function logout(){try{sessionStorage.removeItem("ceb_session");localStorage.removeItem("ceb_session")}catch(e){}location.href=ROOT+"index.html"}
function layout(title,html,active){
 const u=currentUser(),L=[["dashboard","Dashboard"],["equipment","Browse Equipment"],["my-bookings","My Bookings"],["profile","My Profile"]];
 document.body.innerHTML=`<div class="app"><aside class="side" id="side"><div class="brand">🎓 Equipment Booking</div><nav>${L.map(l=>`<a href="${l[0]}.html" class="${l[0]===active?"on":""}">${l[1]}</a>`).join("")}<a href="#" id="out">Sign out</a></nav><div class="who">${esc(u.name)}<br>${esc(u.role)} · ${esc(u.id)}</div></aside>
 <div class="main"><header class="top"><button class="btn ghost" id="menu" aria-label="Menu">☰</button><h1>${esc(title)}</h1><span class="date">${new Date().toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</span></header><main class="content">${html}</main></div></div>`;
 $("#menu").onclick=e=>{e.stopPropagation();$("#side").classList.toggle("open")};$("#out").onclick=e=>{e.preventDefault();confirmBox("Sign out of the demo portal?",logout)};
 $(".main").onclick=()=>$("#side").classList.remove("open");
}
const PAGES={dashboard:()=>renderDashboard(),equipment:()=>renderCatalogue(),"equipment-details":()=>renderDetails(),"booking-request":()=>renderRequest(),"booking-success":()=>renderSuccess(),"my-bookings":()=>renderMyBookings(),"booking-details":()=>renderBookingDetails(),profile:()=>renderProfile()};
document.addEventListener("DOMContentLoaded",()=>{
 initData();const p=document.body.dataset.page;
 if(p==="login")return initLogin();
 if(!currentUser()){location.href=ROOT+"index.html";return}
 try{PAGES[p]()}catch(e){console.error(e);toast("Something went wrong loading this page.","bad")}
});
