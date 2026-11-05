function renderProfile(){
 const u=currentUser();
 layout("My Profile",`<div class="card form"><form id="f" novalidate><label>Name</label><input id="nm" value="${esc(u.name)}"><div class="err" id="e1"></div>
 <label>${u.role} ID</label><input value="${esc(u.id)}" readonly><label>Role</label><input value="${esc(u.role)}" readonly>
 <label>Email</label><input id="em" type="email" value="${esc(u.email)}"><div class="err" id="e2"></div><label>Contact number</label><input id="ph" value="${esc(u.phone)}">
 <p class="note" style="margin-top:1rem">Only basic details are stored, in this browser only.</p><button class="btn">Save Changes</button></form></div>`,"profile");
 $("#f").onsubmit=e=>{e.preventDefault();$("#e1").textContent=$("#e2").textContent="";
  const nm=$("#nm").value.trim(),em=$("#em").value.trim();let ok=true;
  if(!nm){$("#e1").textContent="Name is required.";ok=false}
  if(!/^\S+@\S+\.\S+$/.test(em)){$("#e2").textContent="Enter a valid email address.";ok=false}
  if(!ok)return;
  const all=getUsers(),x=all.find(a=>a.id===u.id);x.name=nm;x.email=em;x.phone=$("#ph").value.trim();store.set("ceb_users",all);toast("Profile saved.");renderProfile();
 };
}
