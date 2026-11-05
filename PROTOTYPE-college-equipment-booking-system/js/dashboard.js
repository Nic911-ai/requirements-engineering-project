function myBookings(){const u=currentUser();return getBookings().filter(b=>b.userId===u.id)} // users only see their own bookings
function renderDashboard(){
 const u=currentUser(),b=myBookings(),n=s=>b.filter(x=>x.status===s).length;
 const recent=[...b].sort((x,y)=>y.submitted.localeCompare(x.submitted)).slice(0,3);
 const bars=[["Pending Review","#e08a1e"],["Approved","#117a4d"],["Rejected","#b3261e"],["Cancelled","#8a93a6"]].map(s=>`<div class="bar"><span>${s[0]}</span><i style="width:${b.length?n(s[0])/b.length*100:0}%;background:${s[1]}"></i><b>${n(s[0])}</b></div>`).join("");
 layout("Dashboard",`<div class="hero"><h2>Welcome back, ${esc(u.name)}</h2><p>Signed in as ${esc(u.role)}. Browse equipment and track your requests here.</p><a class="btn ghost" href="equipment.html">Browse Equipment</a><a class="btn ghost" href="my-bookings.html">My Bookings</a></div>
 <div class="grid stats" style="margin-top:1rem"><div class="card stat"><b>${b.length}</b><span>Total requests</span></div><div class="card stat"><b>${n("Pending Review")}</b><span>Pending</span></div><div class="card stat"><b>${n("Approved")}</b><span>Approved</span></div><div class="card stat"><b>${n("Rejected")}</b><span>Rejected</span></div></div>
 <div class="two"><div class="card"><h3>Recently submitted</h3>${recent.length?`<table class="resp"><tbody>${recent.map(x=>`<tr><td data-l="Ref"><a href="booking-details.html?ref=${x.ref}">${x.ref}</a></td><td data-l="Equipment">${esc(findEquip(x.equipId).name)}</td><td data-l="Status">${badge(x.status)}</td></tr>`).join("")}</tbody></table>`:`<div class="empty">No requests yet.</div>`}</div>
 <div class="card"><h3>Status summary</h3>${bars}</div></div>`,"dashboard");
}
