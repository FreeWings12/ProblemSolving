const arr =  [1, 2, 3, 4, 5];

Array.prototype.myFilter = function(callback) {
    const result = [];
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`);
    
    for (let index = 0; index < this.length; index++) {
        const filteredData = callback(this[index], index, this);
        if (filteredData) {
            result.push(filteredData);
        }
    }
    return result;
}

const filteredRes = arr.myFilter((num) => num > 2 ? num : false);
console.log({filteredRes});