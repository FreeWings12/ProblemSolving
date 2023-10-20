// https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**

2620. Counter
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each subsequent call. 

Constraints:

-1000 <= n <= 1000
0 <= calls.length <= 1000
calls[i] === "call"

*/

/**
 * Solution breakdown
 * 1. Need to define a function that returns a function
 * 2. The inner function should return the result
 * 3. The returned value should be in increment by 1 manner every time we call the inner function
 * 4. This is concept of closures where the outer function will have the updated value every time inner function is called
 * 5. The inner function will have the access of the previous value along with the parameter passed to the outer function 
 * */ 

/**
 * @param {number} number
 * @return {Function} counter
 */

function createCounter(number) {
    let counter = 0; 
    return function() {
        let result = counter + number;
        counter++; // Increment the counter every time the inner function is invoked.
        return result;
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
