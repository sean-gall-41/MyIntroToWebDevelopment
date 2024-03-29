/*  filename: contact.js
 *  Name: Sean Gallogly
 *  Date Created: 09/17/2019
 *  Most recent revision: 09/19/2019
 */


/* This function loops through each form element and checks whether the parent of the parent
 * of the element has a class name with "has-" in it, indicating an error flag has been set 
 * in the class name. We use parentElement of the parentElement of the element as we have each
 * element encapsulated within form group divs.
 */
function clearErrors() {
    for (var i = 0; i < document.forms["contact-form"].elements.length; i++) {
        if (document.forms["contact-form"].elements[i].parentElement.parentElement.className.indexOf("has-") != -1) { 
            document.forms["contact-form"].elements[i].parentElement.parentElement.className = "form-group row";
        }
    }
}

/* This function calls the clearErrors() function before proceeding,
 * then loops through all form elements, resetting their values.
 * Finally, focuses on the first element for easier user experience
 */
function resetForm() {
    clearErrors();
    for (var i=0; i < document.forms["contact-form"].elements.length; i++) {
        if (document.forms["contact-form"].elements[i].id == "reason-for-inquiry") {
            document.forms["contact-form"].elements[i].value = "select-one";    
        } else {
            document.forms["contact-form"].elements[i].value = "";
        }
    }
    document.forms["contact-form"]["name"].focus();
}


/* This function toggles the visibility of the 'please specify' text area, 
 * dependent on if 'other' is selected in the select element immediately above.
 */
function selectChange() {
    var selectBox = document.getElementById("reason-for-inquiry");
    var selected = selectBox.value;
    var textArea = document.getElementById("display-if-selected");
    if (selected == "other") {
        textArea.style.display = "";
    } else {
        textArea.style.display = "none";
    }
}

/* This function checks whether the user has entered a phone number in 
 * one of the following formats:
 *   
 *      XXXXXXXXXX   (10 digit string)
 *      XXX-XXX-XXXX (10 digits with hyphens)
 *      XXX.XXX.XXXX (10 digits with periods)
 *      XXX XXX XXXX (10 digits with spaces)
 * 
 * It checks using regex objects. 
 */
function validPhoneNumber(inputNumber) {
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return (inputNumber.match(phoneNum) ? true : false);
}

/* This function clears errors before carrying out a myriad of validation
 * tests for the required values in the contact form. All other values are not
 * validated. Alerts the user whenever they input correct values in required fields.
 *
 */
function validateItems() {
    clearErrors();
    var userName = document.forms["contact-form"]["name"].value.trim();
    var userEmail = document.forms["contact-form"]["email"].value.trim();
    var userPhone = document.forms["contact-form"]["phone"].value.trim();
    var reasonForInquiry = document.forms["contact-form"]["reason-for-inquiry"].value;

    if (userName == "") {
        alert("You must enter your name to submit this form!");
        document.forms["contact-form"]["name"].parentElement.parentElement = "form-group row has-error";
        document.forms["contact-form"]["name"].focus();
        return false;
    } else if (!isNaN(userName)) {
        alert("Please enter a name, not a number.");
        document.forms["contact-form"]["name"].parentElement.parentElement = "form-group row has-error";
        document.forms["contact-form"]["name"].focus();
        return false;
    }
    if (userEmail == "") {
        alert("You must enter your email address so that we may get back to you!");
        document.forms["contact-form"]["email"].parentElement.parentElement = "form-group row has-error";
        document.forms["contact-form"]["email"].focus();
        return false;
    // Very primite email validation. If I had more time, then I would create a set object
    // of all valid domain names, and query such a data set to see if the user's email ends with
    // one of the domain names, not just whether their email contains the domain name as a substring
    } else if (!userEmail.includes("@") || !userEmail.toLowerCase().includes(".com")) {
        alert("Please enter a valid email address.");
        document.forms["contact-form"]["email"].parentElement.parentElement = "form-group row has-error";
        document.forms["contact-form"]["email"].focus();
        return false;
    }
    if (userPhone == "") {
        alert("Please enter a phone number so we may get back to you!");
        document.forms["contact-form"]["phone"].parentElement.parentElement = "form-group row has-error";
        document.forms["contact-form"]["phone"].focus();
        return false;
    } else if (!validPhoneNumber(userPhone)) {
        alert("Please enter a valid phone number");
        document.forms["contact-form"]["phone"].parentElement.parentElement = "form-group row has-error";
        document.forms["contact-form"]["phone"].focus();
        return false;
    }
    if (document.forms["contact-form"]["reason-for-inquiry"].value == "select-one") {
        alert("Please specify the reason for your inquiry");
        document.forms["contact-form"]["reason-for-inquiry"].parentElement.parentElement = "form-group row has-error";
        document.forms["contact-form"]["reason-for-inquiry"].focus();
        return false;
    }
    if (document.forms["contact-form"]["reason-for-inquiry"].value == "other") {
        if (document.getElementById("specify").value == "") {
            alert("If you have entered 'other' in the reason for inquiry, you must specify the reason.");
            document.forms["contact-form"]["specify"].parentElement.parentElement = "form-group row has-error";
            document.forms["contact-form"]["specify"].focus();
            return false;
        }
    }
    // If user data successfully passes above tests, give alert them of success
    alert("Congratulations! Your information has been sent and we will get back to you shortly.");
    // In a real form, all the info should be cleared after it has been submitted, for privacy
    resetForm();
    return false;
}