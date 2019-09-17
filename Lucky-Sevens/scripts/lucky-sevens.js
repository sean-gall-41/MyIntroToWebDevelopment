// Utility function to return a pseudorandom value in the half-open
// interval [lBound, uBound]
function randInt(lBound, uBound) {
    return Math.floor(Math.random() * (uBound - lBound)) + lBound;
}

// Utility function to roll N dice and return an array containg the 
// N reseulting values
function rollDice(N) {
    var outputRolls = new Array();
    for(var i = 0; i < N; i++) {
        outputRolls.push(randInt(1, 7));
    }
    return outputRolls
}

// playLuckySevens plays the game once. Returns an array of the form:
// [startBet, totalRolls, maxWon, rollCountAtMax]
// This array will be used in the validate items function to set
// span elements in the resulting table 
function playLuckySevens(startBet) {
    var output = new Array();
    var dieOutcomes = new Array();
    var gameMoney = Number(startBet);
    var rollCount = 0;
    var maxWon = 0.0;
    var countAtMax = 0;
    // define local arrow function to take sum of elements of array
    // without having to use primitive for-loop structure
    const arrSum = arr => arr.reduce((a, b) => a + b, 0)
    // here we assume inputs have been validated
    while (gameMoney > 0.0) {
        if (gameMoney > maxWon) {
            maxWon = gameMoney;
            countAtMax = rollCount;
        }
        dieOutcomes = rollDice(2);
        console.log("you rolled a " + dieOutcomes[0] + " and a " + dieOutcomes[1]);
        if (arrSum(dieOutcomes) == 7) {
            gameMoney += 4.0;
        } else {
            gameMoney--;
        }
        rollCount++;
    }
     output.push(startBet);
     output.push(rollCount);
     output.push(maxWon);
     output.push(countAtMax);
     return output;  
}

// For lucky sevens, do not need to loop over form elements as there is only one element
// to clear errors from.
function clearErrors() {
    if (document.forms["startBet"]["placeBet"].parentElement.parentElement.className.indexOf("has-") != -1) {
        document.forms["startBet"]["placeBet"].parentElement.parentElement.className = "form-group row";
    }
}

function resetForm() {
    clearErrors();
    document.forms["startBet"]["placeBet"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("play").innerText = "Play";
    document.forms["startBet"]["placeBet"].focus();
}

function validateItems() {
    clearErrors();
    var startBet = document.forms["startBet"]["placeBet"].value;
    //first check if starting bet is a number
    if (startBet == "" || isNaN(startBet)) {
        alert("Starting bet must be a number. Try again.");
        document.forms["startBet"]["placeBet"].parentElement.parentElement = "form-group row has-error";
        document.forms["startBet"]["placeBet"].focus();
        return false;
    } else if (Number(startBet) <= 0) {
        alert("Starting bet must be greater than zero. Try again.");
        document.forms["startBet"]["placeBet"].parentElement.parentElement = "form-group row has-error";
        document.forms["startBet"]["placeBet"].focus();
        return false;
    }
    // If we got through above, then our starting bet is a number that is greater than zero.
    var outputToTable = playLuckySevens(Number(startBet));
    document.getElementById("startBetTable").innerText = outputToTable[0];
    document.getElementById("totalRollsTable").innerText = outputToTable[1];
    document.getElementById("maxWonTable").innerText = outputToTable[2];
    document.getElementById("countAtHighestTable").innerText = outputToTable[3];
    document.getElementById("results").style.display = "block";
    document.getElementById("play").innerText = "Play Again?";
    return false;
}

