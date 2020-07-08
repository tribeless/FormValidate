$(document).ready(()=>{

    $("form").submit((e)=>{
         e.preventDefault();
        var $userName=  $(".username").val();
        var $password= $(".password").val();
         var $confirmPassword = $(".confirmpassword").val();
         var $email = $(".email").val();
         var $submitButton = $(".submit-btn");
        var errorMessage = "";
       
            if($userName.length<8){
                errorMessage = "Enter a longer name";
                $(".error-message").html(errorMessage);
                return false;
            }
             else if($password.length<8){
                errorMessage = "Enter a longer password";
                $(".error-message").html(errorMessage);
                return false;
            }
            else if($confirmPassword!=$password || $confirmPassword.length<8 ){
                errorMessage = "password dont match";
                $(".error-message").html(errorMessage);
                return false;
            }
           else if($email.length<6 || $email.indexOf("@")===-1){
                errorMessage = "not valid email";
                $(".error-message").html(errorMessage);
                return false;
            }
            else{
                $(".error-message").html("");
            }

            return true;
        
    })
})

function validateForm(){
    
}