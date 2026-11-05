// DEMONSTRATION DATA ONLY - not confirmed college inventory.
const EQUIPMENT = [
 {id:"EQ001",name:"Dell Latitude Laptop",cat:"Laptops",icon:"💻",color:"#2d5bd0",status:"Available",desc:"14-inch business laptop for coursework and presentations.",usage:"Charger included. Save your files elsewhere before returning."},
 {id:"EQ002",name:"HP EliteBook Laptop",cat:"Laptops",icon:"🖥️",color:"#3b6fa0",status:"Limited",desc:"Lightweight laptop suited to teaching and light editing.",usage:"Limited stock in this demonstration."},
 {id:"EQ003",name:"Canon DSLR Camera",cat:"Cameras",icon:"📷",color:"#7a3db8",status:"Available",desc:"DSLR with standard lens for photography projects.",usage:"Handle with care. Battery and memory card included."},
 {id:"EQ004",name:"Epson Projector",cat:"Projectors",icon:"📽️",color:"#c26a12",status:"Unavailable",desc:"HD projector for classrooms and events.",usage:"Currently shown as unavailable in this demonstration."},
 {id:"EQ005",name:"Sony Video Camera",cat:"Cameras",icon:"🎥",color:"#b3261e",status:"Available",desc:"Handheld camcorder for filming assignments.",usage:"Tripod not included."},
 {id:"EQ006",name:"Portable Speaker",cat:"Audio Equipment",icon:"🔊",color:"#117a4d",status:"Available",desc:"Bluetooth speaker for presentations and small events.",usage:"Charge before use."},
 {id:"EQ007",name:"iPad",cat:"Tablets",icon:"📱",color:"#4a5568",status:"Limited",desc:"Tablet for note-taking, demos and digital sketching.",usage:"Do not sign in with personal accounts."},
 {id:"EQ008",name:"Wireless Microphone",cat:"Accessories",icon:"🎤",color:"#0e8a9a",status:"Available",desc:"Handheld wireless microphone with receiver.",usage:"Batteries are not guaranteed to be supplied."}
];
const CATEGORIES = ["Laptops","Cameras","Projectors","Audio Equipment","Tablets","Accessories"];
const SEED_USERS = [
 {id:"STU001",role:"Student",name:"Alex Tan",email:"alex@student.example.edu",phone:"+353 80 000 0001",password:"student123"},
 {id:"LEC001",role:"Lecturer",name:"John Smith",email:"john.lecturer@example.edu",phone:"+353 80 000 0002",password:"lecturer123"}
];
const SEED_BOOKINGS = [
 {ref:"BK0001",userId:"STU001",equipId:"EQ001",start:"2026-11-12",end:"2026-11-14",purpose:"Group project work",notes:"",submitted:"2026-11-02",status:"Pending Review"},
 {ref:"BK0002",userId:"STU001",equipId:"EQ003",start:"2026-10-20",end:"2026-10-22",purpose:"Photography assignment",notes:"Need memory card.",submitted:"2026-10-12",status:"Approved"},
 {ref:"BK0003",userId:"LEC001",equipId:"EQ004",start:"2026-11-09",end:"2026-11-09",purpose:"Guest lecture",notes:"",submitted:"2026-11-01",status:"Rejected"},
 {ref:"BK0004",userId:"LEC001",equipId:"EQ007",start:"2026-11-16",end:"2026-11-18",purpose:"Classroom demo",notes:"",submitted:"2026-11-03",status:"Pending Review"}
];
