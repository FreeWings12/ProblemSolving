// Given is a String string and a number n. Return a string with the section from 0 to n in a row. In each run n is to be decremented.

function repeater(string, n) {
    let result = '';
    while (n > 0) {
        result += string.slice(0, n);
        n--;
    }
    return result;
}



//  Test case                                           Expected
console.log(repeater('JSCodebox', 6));                  // JSCodeJSCodJSCoJSCJSJ
console.log(repeater('Foobar', 2));                     // FoF
console.log(repeater('', 2));                           // 
console.log(repeater('Hello coder!', 5));               // HelloHellHelHeH
console.log(repeater('Hi', 3));                         // HiHiH
