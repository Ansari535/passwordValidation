function check() {
  let input = document.getElementById("password").value;
  document.getElementById("password").value = input;

  // Check 0 --Lower case
  if (input.match(/[a-z]/)) {
    document.getElementById("check0").style.color = "green";
  } else {
    document.getElementById("check0").style.color = "red";
  }

  // chack 1-- special character
  if (
    input.match(/[!\@\#\$\%\^\&\*\(\)\_\+\=\?\[\]\{\}\:\/\|\<\>\:\;\"\'\.]/)
  ) {
    document.getElementById("check1").style.color = "green";
  } else {
    document.getElementById("check1").style.color = "red";
  }

  // check 2 -- uppercase
  if (input.match(/[A-Z]/)) {
    document.getElementById("check2").style.color = "green";
  } else {
    document.getElementById("check2").style.color = "red";
  }

  // check 3 -- length
  if (input.length >= 8) {
    document.getElementById("check3").style.color = "green";
  } else {
    document.getElementById("check3").style.color = "red";
  }
}

// check 4 -- number
if (input.match(/[0-9]/)) {
  document.getElementById("check4").style.color = "green";
} else {
  document.getElementById("check4").style.color = "red";
}

function btn() {
  let password = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;

  if (password == null || password == "" ) {
    alert("Please enter password");
  }

  else if (password2 == null || password2 == "" ) {
    alert("Please enter confirm password");
  }

  else if(password != password2){
    alert("Password did not please try again");
    // return false;
  }

  else if(password.length <8){
    alert("Please enter 8 or more characters");
    // return false;
  }

  else if(password2.length <8){
    alert("Please enter 8 or more characters");
    // return false;
  }

   else {
    alert("Password changed successfully");
    return true;
  }
}

// eye button
function eye() {
  let eye = document.getElementById("eye").value;
  if (document.getElementById("password").type=="password") {
        document.getElementById("password").type="text";
      } else{
        document.getElementById("password").type="password";
      }
}

function eye2() {
  let eye2 = document.getElementById("eye2").value;
  if (document.getElementById("password2").type=="password") {
        document.getElementById("password2").type="text";
      } else{
        document.getElementById("password2").type="password";
      }
}
