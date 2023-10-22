/**
 * 
 * https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
 * 
 * 2665. Counter II

Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0


Constraints:

-1000 <= init <= 1000
0 <= calls.length <= 1000
calls[i] is one of "increment", "decrement" and "reset"

*/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

/**
 *  Solution breakdown
 * 
 * 1. Need to define a function that returns an object of 3 functions
 * 2. The increment function should return the result by incrementing the value by 1
 * 3. The decrement function should return the result by decrementing the value by 1
 * 4. The reset function should return the result by resetting the value to the initial value
 * 5. This is concept of closures where the outer function will have the updated value every time inner functions are called
 * 6. The inner functions will have the access of the outer function values along with the parameter passed to the outer function
 * 7. The defined initialValue variable will be incremented, decremented, and reset as per the inner function call. 
 * 
 *  */  

function createCounter(init) {
    let initialValue = init;

    return {
        increment: () => ++initialValue,
        decrement: () => --initialValue,
        reset: () => initialValue = init,
    };
}


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.increment(); // 7
 * counter.increment(); // 8
 * counter.reset(); // 5
 * counter.decrement(); // 4
 * counter.decrement(); // 3
 * counter.increment(); // 4
 */

