/**
 * A variable pali is given. Return true if it is a palindrome. Otherwise false. A palindrome is a word that is read forward and backward, resulting in the same word.
 */

function palindrome(palindrome) {
    return palindrome === palindrome.split("").reverse().join("");
}


console.log(palindrome('racecar'))          // true
console.log(palindrome('eye'))              //true
console.log(palindrome('baseball'))         //false
console.log(palindrome('otto'))             //true
console.log(palindrome('rotators'))         //false