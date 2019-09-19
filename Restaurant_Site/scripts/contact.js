function clearErrors() {
    for (var i = 0; i < document.forms["contact-form"].elements.length; i++) {
        if (document.forms["contact-form"].elements[i].parentElement.parentElement.className.indexOf("has-") != -1) {
            if (document.forms["contact-form"].elements[i].id == "add-info") {
                document.forms["contact-form"].elements[i].parentElement.parentElement.className = "form-group";
            } else {
                document.forms["contact-form"].elements[i].parentElement.parentElement.className = "form-group row";
            }
            
        }
    }
}

function resetForm() {
    clearErrors();
    for (var i=0; i < document.forms["contact-form"].elements.length; i++) {
        document.forms["contact-form"].elements[i].value = "";
    }
    document.forms["contact-form"]["name"].focus();
}

function validateItems() {
    clearErrors();
    var userName = document.forms["contact-form"]["name"].value;
    var userEmail = document.forms["contact-form"]["email"].value;
    var userPhone = document.forms["contact-form"]["phone"].value;
    var reasonForInquiry = document.forms["contact-form"]["reason-for-inquiry"].value;

    if (userName == "") {
        alert("You must enter your name to submit this form!");
        document.forms["contact-form"]["name"].parentElement.parentElement = "form-group row has-error";
        document.forms["contact-form"]["name"].focus();
        return false;
    }

    // if (num1 == "" || isNaN(num1)) {
    //     alert("Num1 must be filled in with a number.");
    //     document.forms["numberFun"]["num1"].parentElement.className = "form-group has-error";
    //     document.forms["numberFun"]["num1"].focus();
    //     return false;
    // }
    // if (num2 == "" || isNaN(num2)) {
    //     alert("Num2 must be filled in with a number.");
    //     document.forms["numberFun"]["num2"].parentElement.className = "form-group has-error";
    //     document.forms["numberFun"]["num2"].focus();
    //     return false;
    // }
    // document.getElementById("results").style.display = "block";
    // document.getElementById("submitButton").innerText = "recalculate";
    // document.getElementById("addResult").innerText = Number(num1)+Number(num2);
    // document.getElementById("subtractResult").innerText = Number(num1)-Number(num2);
    // document.getElementById("multiplyResult").innerText = Number(num1)*Number(num2);
    // document.getElementById("divideResult").innerText = Number(num1)/Number(num2);
    // // return false so form doesn't submit
    return false;
}