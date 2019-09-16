
// the function outputs a string representation of the 
// even numbers between startNum and endNum in counts of step.
// Notice how we have to start with a newline escape character because
// we included this result within the same paragraph as the "announcement"
// of output.
function calculateEvens(startNum, endNum, step) { 
    var output = "\n";
    for (var i = startNum; i < endNum; i += step) {
        if (i % 2 == 0) {
            output += i; //ig js auto converts i to a string???
            output += "\n";
        }
    }
    return output; 
}

function clearErrors() {
    for (var i = 0; i < document.forms["evens"].elements.length; i++) {
        if (document.forms["evens"].elements[i].parentElement.parentElement.className.indexOf("has-") != -1) {
            document.forms["evens"].elements[i].parentElement.parentElement.className = "form-group row";            
        }
    }
}

function resetForm() {
    clearErrors();
    document.forms["evens"]["startNum"].value = "";
    document.forms["evens"]["endNum"].value = "";
    document.forms["evens"]["step"].value = "";
    document.getElementById("result").style.display = "none";
    document.getElementById("submitButton").innerText = "Display Evens";
    document.forms["evens"]["startNum"].focus();
}

function validateItems() {
    // Before we validate anything, clear any of the errors that have just previously happened
    clearErrors();
    var startNum = document.forms["evens"]["startNum"].value;
    var endNum = document.forms["evens"]["endNum"].value;
    var step = document.forms["evens"]["step"].value;
    // First check if starting number is a number 
    if (startNum == "" || isNaN(startNum)) {
        alert("Entry for 'Starting Number' must be a number.");
        document.forms["evens"]["startNum"].parentElement.parentElement.className = "form-group row has-error";
        document.forms["evens"]["startNum"].focus();
        return false;
    }
    // Check that ending number is a number
    if (endNum == "" || isNaN(endNum)) {
        alert("Entry for 'Ending Number' must be a number.");
        document.forms["evens"]["endNum"].parentElement.parentElement = "form-group row has-error";
        document.forms["evens"]["endNum"].focus();
        return false;
    } 
    // Now check if ending number is strictly greater than starting number
    else if (Number(endNum) <= Number(startNum)) {
        alert("Ending number must be strictly greater than starting number.");
        document.forms["evens"]["endNum"].parentElement.parentElement = "form-group row has-error";
        document.forms["evens"]["endNum"].focus();
        return false;
    }
    // Check if step is a number
    if (step == "" || isNaN(step)) {
        alert("Entry for 'Step' must be a number.");
        document.forms["evens"]["step"].parentElement.parentElement = "form-group row has-error";
        document.forms["evens"]["step"].focus();
        return false;
    } 
    //Now check if step is positive
    else if (Number(step) <= 0) {
        alert("'Step' must be a positive number.");
        document.forms["evens"]["step"].parentElement.parentElement = "form-group row has-error";
        document.forms["evens"]["step"].focus();
        return false;
    }

    // If we get through all of the above, then all of our input is good

    // set the display style for our results to block so we can see the results
    document.getElementById("displayStartNum").innerText = startNum;
    document.getElementById("displayEndNum").innerText = endNum;
    document.getElementById("displayStep").innerText = step;
    document.getElementById("evenNumNewLine").innerText = calculateEvens(Number(startNum), Number(endNum), Number(step));
    document.getElementById("result").style.display = "block";
    // set the text of the submit button to recalculate for better user interactivity
    document.getElementById("submitButton").innerText = "Recalculate";
    return false;
}