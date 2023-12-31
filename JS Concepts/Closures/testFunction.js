/**
 * 
 * https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * 
 * 2704. To Be Or Not To Be

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal". 

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.

*/

/**
 * @param {string} val
 * @return {Object}
 */

/**
 * Explanation:
 * This is a concept of closures 
 * Normally when we write test cases with unit testing we do assertions to test the functionalities.
 * The below function is a simple function to check for assertions and show the results accordingly.
 * In Normal node environment the thor new Error statement would highlight the thrown error in the terminal.
 * 
 *  */  

function expect(val) {
    return {
        toBe: (value) => {
            if (value === val) return true;
            throw new Error("Not Equal");
        },
        notToBe: (value) => { 
            if (value !== val) return true;
            else throw new Error("Equal");
        },
    };
}


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 * expect(5).toBe(null); // // throws "Not Equal"
 */

