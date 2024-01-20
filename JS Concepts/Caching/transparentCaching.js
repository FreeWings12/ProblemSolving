// Write a function that implements caching functionalities for any function

function getIncrementedCount(number) {
    // console.log("Origin", number)
    return ++number;
}

// This caching function is generic enough to provide caching for any function
function cacheFunction(func) {
    const cache = new Map();
    return function(num) {
        if (cache.has(num)) {
            // console.log("Cache inside if", num);
            return cache.get(num);
        }
        const result = func(num);
        cache.set(num, result);
        // console.log("Cache outside if", num)
        return result;
    }
}

const cacheFunc = cacheFunction(getIncrementedCount);

// console.log(cacheFunc(10));
// console.log(cacheFunc(10));
// console.log(cacheFunc(20));
// console.log(cacheFunc(10));