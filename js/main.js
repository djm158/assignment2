function sub() {
  var fname = document.getElementById('fullname');
  var email = document.getElementById('email');

  if(fname.value == "" && !isEmail(email.value)) {
    alert("Error! Name is empty and email is invalid.");
  }
  else if(fname.value == "") {
    alert("Error! Name is empty.");
  }
  else if(!isEmail(email.value)) {
    alert("Error! invalid email.")
  }
  else {
    $("form").replaceWith("<h1>Thank you!</h1>");
  }

}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
