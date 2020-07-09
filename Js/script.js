
//retrive all users info
validateForm();
checkUsersLoginDetails();
document.addEventListener("DOMContentLoaded", retrieveUsersDetais);
$(".eye-open-close").on("click",showHide);
$(".open-close").on("click",lnOpenHide);

function retrieveUsersDetais(){
    let usersDetails;
    if(localStorage.getItem("usersdetails")===null){
        usersDetails = [];
    }else{
        usersDetails = JSON.parse(localStorage.getItem("usersdetails"));
    }

    
}

//validate users details on try login
function checkUsersLoginDetails(){
    
     let usersDetails;
     if (localStorage.getItem("usersdetails")===null){
         usersDetails = [];
     }
     else{
         usersDetails = JSON.parse(localStorage.getItem("usersdetails"));
     }
    var loginDetails = usersDetails;
        $("form").submit(e => {
            e.preventDefault();
            
            var username = $(".loginusername").val();
            var password = $(".loginpassword").val();
            
            
            for(var i=0;i<loginDetails.length;i++){
                var vv = loginDetails[i];
               // var users = {logDet:vv};
                //console.log(loginDetails[i].username)
                if (username === vv.username && password === vv.password)
                {
                   // alert("Working")
                    $(".login-message").html("Login successful").fadeToggle(500);
                    $(".loginusername").val("");
                    $(".loginpassword").val("");
                    return false;
                    }
                    else{
                   // alert("not")
                    $(".login-message").html("Failed, try again").fadeToggle(500);  
                    $(".loginusername").val("");
                    $(".loginpassword").val("");
                    
                    }
          
      }
            return true;
            
            
})
    
}

function validateForm()
{
    
    $("form").submit((e) => {
        e.preventDefault();
        var $userName = $(".username").val();
        var $pnumber = $(".phonenumber").val();
        var $password = $(".password").val();
        var $confirmPassword = $(".confirmpassword").val();
        var $email = $(".email").val();
       
        var errorMessage = "";

    var myUsersValues = {
        username: $userName,
        password: $password,
        pnumber:$pnumber,
        email: $email
    }

    if (myUsersValues.username.length < 8) {
        errorMessage = "Enter a longer name";
        $(".error-message").html(errorMessage);
        return false;
    }
    else if (isNaN(myUsersValues.pnumber) || myUsersValues.pnumber.length<10){
        errorMessage = "Number is invalid";
        $(".error-message").html(errorMessage);
        return false;
    }
    else if (myUsersValues.password.length < 8) {
        errorMessage = "Enter a longer password";
        $(".error-message").html(errorMessage);
        return false;
    }
    else if ($confirmPassword != myUsersValues.password || $confirmPassword.length < 8) {
        errorMessage = "password dont match";
        $(".error-message").html(errorMessage);
        return false;
    }
    else if (myUsersValues.email.length < 6 || $email.indexOf("@") === -1) {
        errorMessage = "not valid email";
        $(".error-message").html(errorMessage);
        return false;
    }
    else {
        $(".error-message").html("Log in please").fadeToggle(3000);
    }
        $(".phonenumber").val("");
        $(".username").val("");
        $(".password").val("");
        $(".confirmpassword").val("");
        $(".email").val("");

        addUsersToLocalStorage(myUsersValues);
        return true;
})

}


function addUsersToLocalStorage(user){

    let usersDetails;
    if (localStorage.getItem("usersdetails")===null){
        usersDetails = [];
    }
    else{
        usersDetails = JSON.parse(localStorage.getItem("usersdetails"));
    }
        usersDetails.push(user);
    localStorage.setItem("usersdetails", JSON.stringify(usersDetails));

}

//creating a tabbed view
function openTab(tab){
    var openTab = document.querySelectorAll(".tab");
    var clickedBtn = document.querySelectorAll(".btn-btn");
   
    for(var i=0;i<openTab.length;i++){
        openTab[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";

    for (var y = 0; y < clickedBtn.length; y++) {
        if (clickedBtn[y].className==="btn-btn") {
            clickedBtn[y].classList.add("active");
            document.querySelector(".current-page").innerHTML="Log In";
            
        }
        else {
            clickedBtn[y].classList.remove("active");
            document.querySelector(".current-page").innerHTML = "Sign Up";
            
        }

    }
    retrieveUsersDetais();
  
}

//function to hide/show password
function showHide(e){
    var btnBtn = e.target;
    var $reveal = $(".eye-open-close");
    
     var hold = btnBtn.parentElement.parentElement;
     var holdbtn = hold.children[2];
     var holdch = document.querySelector(".confirmpassword");
    
     $reveal.find("i").remove();
     
    
         if(holdbtn.getAttribute("type")==="password" && holdch.getAttribute("type")==="password" ){
             holdbtn.setAttribute("type","text");
             holdch.setAttribute("type","text");
             $reveal.html($("<i/>", { class: "far fa-eye-slash" }));
         }
           
         else{
             holdbtn.setAttribute("type","password");
             holdch.setAttribute("type", "password");
             $reveal.html($("<i/>", { class: "fas fa-eye" }));
         }
   // retrieveUsersDetais();
}

function lnOpenHide(e){
 
    var btn = e.target;
    var $reveal = $(".open-close");
    var hold = btn.parentElement.parentElement;
    var holdBt = hold.children[1];
    $reveal.find("i").remove();
    if(holdBt.getAttribute("type")==="password"){
        holdBt.setAttribute("type","text");
        $reveal.html($("<i/>", { class: "far fa-eye-slash" }));
    }
    else{
        holdBt.setAttribute("type","password");
        $reveal.html($("<i/>", { class: "fas fa-eye" }));

    }
}