function countingCharacters(stringToCount) {
    // The length property has been mentioned in 
    // the logging letter exercise in lesson 4
    console.log(stringToCount + " has " + stringToCount.length + " characters.")
}

function countingCharacters2(stringToCount, characterToFind) {
    // Let's count the number of times a character appears in a string
    // We will look at each character one-by-one with the help of a for loop
    var charCount = 0;
    for (var charPos = 0; charPos < stringToCount.length; charPos++) {
        if (stringToCount[charPos] == characterToFind) {
            charCount++;
        }
    }

    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + charCount);
}

// str - string to search
// search - characters to find in str
function countingCharacters3(str, search) {
    var count = 0; // number of occurrences found
    var numChars = search.length;
    /* we need to stop loop based on multiple characters example: if searching
    "Ohio" with 3 characters at a time we want to stop at h so we do not go past 
    the end of the string */
    var lastIndex = str.length - numChars;
    
    // we will use a for loop to go through our string

    // This time, we are looking for a series of characters - aka a susbtring
    for (var index = 0; index <= lastIndex; index++) {
        // substring gets a part of a strign from a start to end index
        var current = str.substring(index, index + numChars);
        // if the substring matches our series, increase our counter
        if (current == search) {
            count++;
        }
    }

    return count;
}