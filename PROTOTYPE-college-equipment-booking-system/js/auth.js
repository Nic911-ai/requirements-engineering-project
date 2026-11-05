// Demo login only - NOT secure authentication (passwords are stored in plain text in the browser).
function initLogin(){
 if(currentUser()){location.href="pages/dashboard.html";return}
 let role="Student";
 const roleBtns=document.querySelectorAll(".seg button");
 roleBtns.forEach(b=>b.onclick=()=>{role=b.dataset.role;roleBtns.forEach(x=>x.classList.toggle("on",x===b));$("#lbl").textContent=role+" ID"});
 $("#show").onclick=()=>{const p=$("#pw");const h=p.type==="password";p.type=h?"text":"password";$("#show").textContent=h?"Hide":"Show"};
 $("#form").onsubmit=e=>{e.preventDefault();
  const id=$("#uid").value.trim().toUpperCase(),pw=$("#pw").value;
  if(!id||!pw){$("#err").textContent="Please enter your ID and password.";return}
  const u=getUsers().find(x=>x.id===id&&x.password===pw&&x.role===role);
  if(!u){$("#err").textContent="Incorrect ID, password or role. Check the demo details below.";return}
  try{(($("#rem").checked)?localStorage:sessionStorage).setItem("ceb_session",u.id)}catch(err){}
  location.href="pages/dashboard.html";
 };
}
