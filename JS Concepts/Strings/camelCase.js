/**
 * 
 * Given is a string n. 
 * The task is to return the sentence in CamelCase notation. 
 * This means that each new word is capitalized and immediately appended to the old word. 
 * Start with a lowercase letter.
 */

function camelCase(str) {
    const newString = str.trim().split(" ");
    let result = newString[0][0].toLowerCase() + newString[0].slice(1);
    for (let i = 1; i < newString.length; i++) {
        if (newString[i]) {
            result += newString[i][0].toUpperCase() + newString[i].slice(1);
        }
    }
    return result;
}



//  Test case                                           Expected
console.log(camelCase('Camel Case'));                   // camelCase
console.log(camelCase('String not found'));             // stringNotFound
console.log(camelCase('Nice Challenge'));               // niceChallenge
console.log(camelCase(' Is not found '));               // isNotFound
console.log(camelCase('CamelCase'));                    // camelCase
