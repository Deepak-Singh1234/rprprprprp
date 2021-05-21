//YOUR FIREBASE LINKS
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
user_name=localStorage.getItem("User_name");
room_name=localStorage.getItem("Room_names1");
function send(){
  msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
   document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message= message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name + "<img class='user_tick' src='th (8).jpg></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick= 'updateLike(this.id)'>";
span_with_tag = "<span class='glyphycon glyphycon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag; 
document.getElementById("output").innerHTML += row;

//End code
  } });  }); }
getData();
function updateLike(message_id) { console.log("clicked on like button - " + message_id); 
button_id = message_id; 
likes = document.getElementById(button_id).value; 
updated_likes = Number(likes) + 1; 
console.log(updated_likes); 
firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}
function logout(){
  localStorage.removeItem("Room_names1");
  localStorage.removeItem("User_name");
  window.location.replace("index.html");
}