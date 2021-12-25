$("#logInbutton").click(function(){
  var password1 = $("#pass1").val();
  var password2 = $("#pass2").val();

  if(password1 != "" & password2 != ""){
    if(password1 === password2){
      alert("Successfully Loged In");
    }
    else{
      alert("Password Missmatch");
    }
  }
  else{
    alert("please enter password");
  }
  });