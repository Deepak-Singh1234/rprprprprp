function login1(){
    username=document.getElementById("User_name").value;
    localStorage.setItem("User_name",username);
    window.location="kwitter_room.html";

}