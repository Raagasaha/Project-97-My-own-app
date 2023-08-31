function secondpage() {
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);

    location.replace("2ndPage.html");

}


