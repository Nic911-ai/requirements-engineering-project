const nextRef=()=>"BK"+String(Math.max(0,...getBookings().map(b=>+b.ref.slice(2)))+1).padStart(4,"0");
function renderRequest(){
 const e=findEquip(param("id")),u=currentUser();
 if(!e){layout("Request Equipment",`<div class="card empty">Please choose equipment first. <a href="equipment.html">Browse Equipment</a></div>`,"equipment");return}
 const blocked=e.status==="Unavailable";
 layout("Request Equipment",`<div class="card form"><h2>${esc(e.name)} ${badge(e.status)}</h2>
 ${blocked?`<div class="note" style="background:var(--rbg);color:var(--red)">This equipment is currently unavailable, so a request cannot be submitted. Nothing is confirmed.</div>`:`<div class="note">Demonstration assumption: your request will be recorded as <b>Pending Review</b> and is not confirmed until staff review it.</div>`}
 <form id="f" novalidate><div class="dates"><div><label>Your name</label><input value="${esc(u.name)}" readonly></div><div><label>ID / Role</label><input value="${esc(u.id)} · ${esc(u.role)}" readonly></div></div>
 <div class="dates"><div><label for="s">Start date *</label><input type="date" id="s" min="${today()}"><div class="err" id="es"></div></div><div><label for="e">End date *</label><input type="date" id="e" min="${today()}"><div class="err" id="ee"></div></div></div>
 <label for="p">Purpose of booking *</label><input id="p" maxlength="120"><div class="err" id="ep"></div><label for="n">Additional notes (optional)</label><textarea id="n" rows="3" maxlength="300"></textarea>
 <div class="row" style="margin-top:1rem"><button class="btn" ${blocked?"disabled":""}>Review Request</button><a class="btn ghost" href="equipment.html">Cancel</a></div></form><div id="sum"></div></div>`,"equipment");
 $("#f").onsubmit=ev=>{ev.preventDefault();
  const s=$("#s").value,en=$("#e").value,p=$("#p").value.trim(),n=$("#n").value.trim();let ok=true;
  $("#es").textContent=$("#ee").textContent=$("#ep").textContent="";
  if(!s){$("#es").textContent="Please choose a start date.";ok=false}else if(s<today()){$("#es").textContent="Start date cannot be in the past.";ok=false}
  if(!en){$("#ee").textContent="Please choose an end date.";ok=false}else if(s&&en<s){$("#ee").textContent="End date cannot be earlier than the start date.";ok=false}
  if(!p){$("#ep").textContent="Please enter the purpose of the booking.";ok=false}
  if(!ok){toast("Please fix the highlighted fields.","bad");return}
  $("#sum").innerHTML=`<div class="card summary"><h3>Review your request</h3><dl class="dl"><dt>Equipment</dt><dd>${esc(e.name)} (${e.id})</dd><dt>Period</dt><dd>${fmt(s)} to ${fmt(en)}</dd><dt>Purpose</dt><dd>${esc(p)}</dd><dt>Notes</dt><dd>${esc(n)||"-"}</dd></dl><p class="note">Submitting sends this for staff review. It is not a confirmed booking.</p><div class="row"><button class="btn" id="go">Submit Request</button><button class="btn ghost" id="ed">Edit</button></div></div>`;
  $("#sum").scrollIntoView({behavior:"smooth"});$("#ed").onclick=()=>$("#sum").innerHTML="";
  $("#go").onclick=()=>{const ref=nextRef(),all=getBookings();
   all.push({ref,userId:u.id,equipId:e.id,start:s,end:en,purpose:p,notes:n,submitted:today(),status:"Pending Review"});
   store.set("ceb_bookings",all);location.href="booking-success.html?ref="+ref};
 };
}
function ownBooking(){return myBookings().find(b=>b.ref===param("ref"))}
function renderSuccess(){
 const b=ownBooking();
 if(!b){layout("Request Submitted",`<div class="card empty">Request not found. <a href="my-bookings.html">My Bookings</a></div>`,"my-bookings");return}
 layout("Request Submitted",`<div class="card success"><div class="tick">✅</div><h2>Your request has been sent for staff review.</h2><p><b>This is not a confirmed booking.</b></p><dl class="dl"><dt>Reference</dt><dd>${b.ref}</dd><dt>Equipment</dt><dd>${esc(findEquip(b.equipId).name)}</dd><dt>Start date</dt><dd>${fmt(b.start)}</dd><dt>End date</dt><dd>${fmt(b.end)}</dd><dt>Status</dt><dd>${badge(b.status)}</dd><dt>Submitted</dt><dd>${fmt(b.submitted)}</dd></dl><br><div class="row" style="justify-content:center"><a class="btn" href="my-bookings.html">View My Bookings</a><a class="btn ghost" href="equipment.html">Return to Equipment</a></div></div>`,"equipment");
}
function renderMyBookings(){
 let f="All";const F=["All","Pending Review","Approved","Rejected","Cancelled"];
 layout("My Bookings",`<div class="chips row" style="margin-bottom:1rem">${F.map(x=>`<button data-f="${x}" class="${x==="All"?"on":""}">${x==="Pending Review"?"Pending":x}</button>`).join("")}</div><div class="card" id="t"></div>`,"my-bookings");
 const draw=()=>{const r=myBookings().filter(b=>f==="All"||b.status===f).sort((a,b)=>b.submitted.localeCompare(a.submitted));
  $("#t").innerHTML=r.length?`<table class="resp"><thead><tr><th>Ref</th><th>Equipment</th><th>Start</th><th>End</th><th>Submitted</th><th>Status</th><th></th></tr></thead><tbody>${r.map(b=>`<tr><td data-l="Ref">${b.ref}</td><td data-l="Equipment">${esc(findEquip(b.equipId).name)}</td><td data-l="Start">${fmt(b.start)}</td><td data-l="End">${fmt(b.end)}</td><td data-l="Submitted">${fmt(b.submitted)}</td><td data-l="Status">${badge(b.status)}</td><td><a class="btn ghost sm" href="booking-details.html?ref=${b.ref}">View Details</a></td></tr>`).join("")}</tbody></table>`:`<div class="empty">No bookings to show here. <a href="equipment.html">Browse Equipment</a></div>`};
 document.querySelectorAll(".chips button").forEach(x=>x.onclick=()=>{f=x.dataset.f;document.querySelectorAll(".chips button").forEach(y=>y.classList.toggle("on",y===x));draw()});draw();
}
function renderBookingDetails(){
 const b=ownBooking(),u=currentUser();
 if(!b){layout("Booking Details",`<div class="card empty">Booking not found. <a href="my-bookings.html">My Bookings</a></div>`,"my-bookings");return}
 const e=findEquip(b.equipId);
 layout("Booking "+b.ref,`<p><a href="my-bookings.html">← Back to My Bookings</a></p><div class="card form"><div class="row sp"><h2>${b.ref}</h2>${badge(b.status)}</div>
 ${b.status==="Pending Review"?`<div class="note">Staff review is still required. This request is not confirmed yet.</div>`:""}
 <dl class="dl" style="margin-top:1rem"><dt>Equipment</dt><dd>${esc(e.name)} (${e.id}, ${e.cat})</dd><dt>Requested by</dt><dd>${esc(u.name)} · ${u.id} · ${u.role}</dd><dt>Booking period</dt><dd>${fmt(b.start)} to ${fmt(b.end)}</dd><dt>Purpose</dt><dd>${esc(b.purpose)}</dd><dt>Notes</dt><dd>${esc(b.notes)||"-"}</dd><dt>Submitted</dt><dd>${fmt(b.submitted)}</dd></dl>
 ${b.status==="Pending Review"?`<br><button class="btn danger" id="cx">Cancel Request</button>`:""}</div>`,"my-bookings");
 const cx=$("#cx");if(cx)cx.onclick=()=>confirmBox("Cancel this request? This cannot be undone.",()=>{
  const all=getBookings();all.find(x=>x.ref===b.ref).status="Cancelled";store.set("ceb_bookings",all);toast("Request cancelled.");renderBookingDetails()});
}
