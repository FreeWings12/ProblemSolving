// Implement a reduce function
const arr =  [1, 2, 3, 4, 5];

Array.prototype.myReduce = function(callback, initialValue) {
    let result = initialValue;
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`);
    
    for (let i = 0; i < this.length; i++) {
        result = result ? callback(result, this[i], i, this) : this[i];
    } 
    return result;
}

const sd = arr.myReduce((acc, curr) => acc + curr, 5);
console.log("sdd ", sd)