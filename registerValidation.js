var emailVal = false;
var phoneVal = false;

function emailValidate(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        emailVal = true;
        return true;
    }
    else{
        alert("You have entered an invalid email address!");
        return false;
    }
}

function phoneValidate(inputText){
    var phoneno = /^\d{10}$/;
    if(inputText.value.match(phoneno)){
        phoneVal = true;
        return true;
    }
    else{
        alert("You have entered invalid Phone!");
        return false;
    }
}

function validate(){
    if(phoneVal && emailVal){
        window.location.href = "login.html";
    }
}