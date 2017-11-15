function validateName() {
    var name = document.forms["ciForm"]["name"].value;
    var div = document.createElement("div");
    if (name == "") {
      document.getElementById('name').style.background = "red";
      document.getElementById('name').style.borderColor = "red";

      if(document.getElementsByClassName("nameError").length < 1){
        div.className= "nameError"
        div.style.color = "red";
        div.innerHTML = "Full Name is a required field.";
        document.getElementById("nameInput").appendChild(div);
      }

      return false;
    }
    else{
      document.getElementById('name').style.background = "white";
      document.getElementById('name').style.borderColor = "white";
      $('.nameError').remove();
      return true
    }

}
function validatePhone() {
    var phone = document.forms["ciForm"]["phone"].value;
    var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    var div = document.createElement("div");
    if (phone == "") {
      document.getElementById('phone').style.background = "red";
      document.getElementById('phone').style.borderColor = "red";
      if(document.getElementsByClassName("phoneError").length < 1){
        div.className= "phoneError"
        div.style.color = "red";
        div.innerHTML = "Mobile number is a required field.";
        document.getElementById("phoneInput").appendChild(div);
      }

      return false;
    }
    else if (!RegExp(phoneRegex).test(phone)){
      document.getElementById('phone').style.background = "red";
      document.getElementById('phone').style.borderColor = "red";
      if(document.getElementsByClassName("phoneError2").length < 1){
        div.className= "phoneError2"
        div.style.color = "red";
        div.innerHTML = "Please enter valid number.";
        $('.phoneError').remove();
        document.getElementById("phoneInput").appendChild(div);
      }
      return false;
    }
    else {
      document.getElementById('phone').style.background = "white";
      document.getElementById('phone').style.borderColor = "white";
      $('.phoneError').remove();
      $('.phoneError2').remove();
      return true
    }

}
