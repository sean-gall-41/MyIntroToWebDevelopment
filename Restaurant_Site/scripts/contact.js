function clearErrors() {
    for (var i = 0; i < document.forms["contact-form"].elements.length; i++) {
        if (document.forms["contact-form"].elements[i].parentElement.parentElement.className.indexOf("has-") != -1) {
            document.forms["contact-form"].elements[i].parentElement.className = "form-group";
        }
    }
}

function resetForm() {
    clearErrors();
    document.forms["numberFun"]["num1"].value = "";
    document.forms["numberFun"]["num2"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["numberFun"]["num1"].focus();
}

function validateItems() {
    clearErrors();
    var num1 = document.forms["numberFun"]["num1"].value;
    var num2 = document.forms["numberFun"]["num2"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Num1 must be filled in with a number.");
        document.forms["numberFun"]["num1"].parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
    if (num2 == "" || isNaN(num2)) {
        alert("Num2 must be filled in with a number.");
        document.forms["numberFun"]["num2"].parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num2"].focus();
        return false;
    }
    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "recalculate";
    document.getElementById("addResult").innerText = Number(num1)+Number(num2);
    document.getElementById("subtractResult").innerText = Number(num1)-Number(num2);
    document.getElementById("multiplyResult").innerText = Number(num1)*Number(num2);
    document.getElementById("divideResult").innerText = Number(num1)/Number(num2);
    // return false so form doesn't submit
    return false;
}