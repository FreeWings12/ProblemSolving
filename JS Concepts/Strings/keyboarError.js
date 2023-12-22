/**
 * 
 * Given are two strings correct and wrong. Return all characters that are defective. 
 * You can recognize defective characters by the fact that they are displayed incorrectly in the string wrong.
 * Return an array with their values.
 * 
 */

function keyboardError(correct, wrong) {
    const result = [];
    for (let i = 0; i < wrong.length; i++) {
        if (correct[i] !== wrong[i] && !result.includes(correct[i])) {
            result.push(correct[i]);
        }
    }
    return result;
}


console.log(keyboardError('foobar', 'fiibnr'));   // ['o','a']
console.log(keyboardError('hello there', 'hgllu thgrg'));   // ['e','o']
console.log(keyboardError('this is awesome!', 'thjs js kwesome!'));   // ['i','a']
console.log(keyboardError('nice challenge', 'nice challenge'));   // []
console.log(keyboardError('you can do this!', 'yhu cen dh this?'));   // ['o','a','!']