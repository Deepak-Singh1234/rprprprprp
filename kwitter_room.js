var firebaseConfig = {
  apiKey: "AIzaSyCutoqk67ZYInsKVsOxgjh2yxs02r3l0AM",
  authDomain: "class-project-93.firebaseapp.com",
  databaseURL: "https://class-project-93-default-rtdb.firebaseio.com",
  projectId: "class-project-93",
  storageBucket: "class-project-93.appspot.com",
  messagingSenderId: "407807535193",
  appId: "1:407807535193:web:dfb53facd379093ef8a948",
  measurementId: "G-65SSY7CXV1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username1=localStorage.getItem("User_name");
document.getElementById("User_name").innerHTML="welcome " + username1;
function roomname(){
 Room_names1=document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_names1).update({
          purpose:"adding user"
      });
      localStorage.setItem("Room_names1",Room_names1);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room_name-" + Room_names1);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomname1",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("Room_names1");
  localStorage.removeItem("User_name");
  window.location="index.html";
}