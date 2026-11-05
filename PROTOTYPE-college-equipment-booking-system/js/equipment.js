function renderCatalogue(){
 let view="grid";
 layout("Browse Equipment",`<div class="note" style="margin-bottom:1rem">Demonstration equipment only – not confirmed college inventory.</div>
 <div class="filters"><input id="q" placeholder="Search equipment…" aria-label="Search"><select id="cat" aria-label="Category"><option value="">All categories</option>${CATEGORIES.map(c=>`<option>${c}</option>`).join("")}</select>
 <select id="av" aria-label="Availability"><option value="">Any availability</option><option>Available</option><option>Limited</option><option>Unavailable</option></select>
 <select id="sort" aria-label="Sort"><option value="n">Name A–Z</option><option value="c">Category</option><option value="a">Availability</option></select><button class="btn ghost" id="vw">List view</button></div><div id="list"></div>`,"equipment");
 const draw=()=>{
  const q=$("#q").value.toLowerCase(),c=$("#cat").value,a=$("#av").value,s=$("#sort").value,rank={Available:0,Limited:1,Unavailable:2};
  const r=EQUIPMENT.filter(e=>(!c||e.cat===c)&&(!a||e.status===a)&&(e.name+e.desc+e.cat).toLowerCase().includes(q))
   .sort((x,y)=>s==="c"?x.cat.localeCompare(y.cat):s==="a"?rank[x.status]-rank[y.status]:x.name.localeCompare(y.name));
  $("#list").innerHTML=r.length?`<div class="eqgrid ${view}">${r.map(e=>`<article class="eq"><img src="${equipImg(e)}" alt="${esc(e.name)}"><div class="b"><span class="cat">${e.cat} · ${e.id}</span><h3>${esc(e.name)}</h3><p>${esc(e.desc)}</p><div>${badge(e.status)}</div><div class="row"><a class="btn ghost sm" href="equipment-details.html?id=${e.id}">View Details</a><a class="btn sm" href="booking-request.html?id=${e.id}">Request Equipment</a></div></div></article>`).join("")}</div>`:`<div class="card empty">No equipment matches your search. Try different keywords or clear the filters.</div>`;
 };
 ["q","cat","av","sort"].forEach(i=>$("#"+i).oninput=draw);
 $("#vw").onclick=()=>{view=view==="grid"?"list":"grid";$("#vw").textContent=view==="grid"?"List view":"Grid view";draw()};
 draw();
}
function renderDetails(){
 const e=findEquip(param("id"));
 if(!e){layout("Equipment",`<div class="card empty">Equipment not found. <a href="equipment.html">Back to Equipment</a></div>`,"equipment");return}
 layout(e.name,`<p><a href="equipment.html">← Back to Equipment</a></p><div class="card detail"><img src="${equipImg(e)}" alt="${esc(e.name)}"><div><h2>${esc(e.name)}</h2><p>${badge(e.status)}</p><dl class="dl"><dt>Equipment ID</dt><dd>${e.id}</dd><dt>Category</dt><dd>${e.cat}</dd><dt>Description</dt><dd>${esc(e.desc)}</dd><dt>Availability</dt><dd>${e.status}${e.status==="Unavailable"?" – requests cannot be made right now.":" (demonstration data; a request still needs staff review)"}</dd><dt>Usage info</dt><dd>${esc(e.usage)}</dd></dl><br><a class="btn" href="booking-request.html?id=${e.id}">Request Equipment</a></div></div>`,"equipment");
}
