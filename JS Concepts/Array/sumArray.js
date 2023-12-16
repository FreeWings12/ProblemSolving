// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

function myFunction(a, b) {
    return a.reduce((sum, value) => value > b ?  sum += value: sum, 0)
}


console.log(myFunction([1,2,3,4,5], 2)); // 12
console.log(myFunction([1,2,3,4,5], 4)); // 5
console.log(myFunction([1,2,3,4,5], 5)); // 0
console.log(myFunction([1,2,3,4,5], 0)); // 15

