// Implement a polyfil for the map function

const arr = [1,2,3];

Array.prototype.myMap = function (callback) {
    const result = [];
    if (this === null || this === undefined) throw new TypeError('Array.prototype.myMap called on null or undefined');
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`);
    
    for(let index = 0; index < this.length; index++) {
        result[index] = callback(this[index], index, this);
    }
    return result;
}

const nums = arr.myMap((num) => num * 2);
console.log("Nums ", nums);