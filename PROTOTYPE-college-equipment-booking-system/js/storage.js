// Safe LocalStorage helpers (fall back gracefully if storage is blocked)
const store={
 get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},
 set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){console.warn("Storage unavailable",e)}}
};
function initData(){ // seed demo data once
 if(!store.get("ceb_users"))store.set("ceb_users",SEED_USERS);
 if(!store.get("ceb_bookings"))store.set("ceb_bookings",SEED_BOOKINGS);
}
const getUsers=()=>store.get("ceb_users",SEED_USERS);
const getBookings=()=>store.get("ceb_bookings",[]);
function currentUser(){
 let id=null;try{id=sessionStorage.getItem("ceb_session")||localStorage.getItem("ceb_session")}catch(e){}
 return getUsers().find(u=>u.id===id)||null;
}
