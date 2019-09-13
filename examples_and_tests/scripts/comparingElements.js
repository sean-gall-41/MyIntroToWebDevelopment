// Note: We can initialize an array by putting the list of elements in
// square brackets
// Also note that JavaScript is loosely typed - meaning it allows us to 
// mix types in our arrays (okay is this really true though? case of arrays 
// is specific to that container class, could define (or there probably exists)
// a standard library container class which is "strongly typed")

// Anyway, bad practice to mix element types in containers of type array
// Below is an exercise to show that JavaScript can do this and how it can 
// treat strings like numbers

var testArray = [0, 1, 1, "1", 3, "311"];

// For each of the elements in our array
// Since we are comparing ahead (to the next element) need to stop with 
// the last two elements
for (var i = 0; i < testArray.length - 1; i++) {
    var currElem = testArray[i];
    var nextElem = testArray[i+1];

    // compare two elements
    console.log("Testing " + currElem + " and " + nextElem +
                "(greater than): " + (currElem > nextElem));

    console.log("Testing " + currElem + " and " + nextElem + 
                "(less than or equal to): " + (currElem <= nextElem));

    if (currElem == nextElem) {
        // If equal, strictly equal?
        console.log("Testing " + currElem + " and " + nextElem + 
                    "(strictly equal to): " + (currElem === nextElem));

        // if not strictly equal, check types
        if (currElem !== nextElem) {
            // use typeof() function to return type as a string im guessing?
            console.log(currElem + " is " + typeof(currElem));
            console.log(nextElem + " is " + typeof(nextElem));
        } 
    } else {
        console.log("Testing " + currElem + " and " + nextElem +
                    "(equal to); false");
    }
}