
//retrive all users info
validateForm();
$(document).on("DOMContentLoaded",retrieveUsersDetais);
$(".login").on("click", checkUsersLoginDetails);

function retrieveUsersDetais(){
    let usersDetails;
    if(localStorage.getItem("usersdetails")===null){
        usersDetails = [];
    }else{
        usersDetails = JSON.parse(localStorage.getItem("usersdetails"));
    }

    
}

//validate users details on try login
function checkUsersLoginDetails(event){
    
     let usersDetails;
     if (localStorage.getItem("usersdetails")===null){
         usersDetails = [];
     }
     else{
         usersDetails = JSON.parse(localStorage.getItem("usersdetails"));
     }
     console.log(usersDetails)
     var loginDetails = usersDetails;
    var username = $(".loginusername").val();
     var password = $(".loginpassword").val();
     
      for(var i=0;i<loginDetails.length;i++){
          var vv = loginDetails[i];

           if(vv.username===username && vv.password===password){
           alert("Login successful");
           return false;
       }
       else{
          alert("Failed, try again");
          return false;
       }
          $(".username").val("");
          $(".password").val("");
      }
    

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
        $(".error-message").html("");
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
    for(var i=0;i<openTab.length;i++){
        openTab[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
}