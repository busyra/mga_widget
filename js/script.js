$(document).ready(function(){
  $("#hide").hide();
  $('#state').change(function () {
    if ($('option:selected', this).val() == "california") {
      $("#hide").show();
    } else {
      $("#hide").hide();
    }
  });
});

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

function validateQuestion() {
    var question = document.forms["ciForm"]["question"].value;
    var div = document.createElement("div");
    if (question == "") {
      document.getElementById('question').style.background = "red";
      document.getElementById('question').style.borderColor = "red";
      if(document.getElementsByClassName("questionError").length < 1){
        div.className= "questionError"
        div.style.color = "red";
        div.innerHTML = "Description is a required field.";
        document.getElementById("questionInput").appendChild(div);
      }
      return false;
    }
    else {
      document.getElementById('question').style.background = "white";
      document.getElementById('question').style.borderColor = "white";
      $('.questionError').remove();
      return true
    }
}

function validateState() {
    var state = document.forms["ciForm"]["state"].value;
    var div = document.createElement("div");
    if (state == "selectone") {
      document.getElementById('state').style.background = "red";
      if(document.getElementsByClassName("stateError").length < 1){
        div.className= "stateError"
        div.style.color = "red";
        div.innerHTML = "State is a required field.";
        document.getElementById("stateInput").appendChild(div);
      }
      return false;
    }
    else if (state == "california"){
      validatePurchase()
      document.getElementById('state').style.background = "white";
      $('.stateError').remove();
      return true;
    }
    else {
      document.getElementById('state').style.background = "white";
      $('.stateError').remove();
      return true
    }
}

function validatePurchase() {
    var purchase = document.forms["ciForm"]["purchase"].value;
    var div = document.createElement("div");
    if (purchase == "selectone") {
      document.getElementById('purchase').style.background = "red";
      if(document.getElementsByClassName("purchaseError").length < 1){
        div.className= "purchaseError"
        div.style.color = "red";
        div.innerHTML = "Selection required field.";
        document.getElementById("purchaseInput").appendChild(div);
      }
      return false;
    }
    else {
      document.getElementById('purchase').style.background = "white";
      $('.purchaseError').remove();
      return true

    }
}
