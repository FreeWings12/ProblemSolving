// Promise.any
// Accepts an iterable (array)
// Returns a new promise
// Returns the first resolved promise
// If all the promises are rejected then returns an aggregate error

function promiseAny(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) return reject(new AggregateError([], 'All promises were rejected'));
        let errorCounter = 0;
        const errors = [];

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(data => {
                    return resolve(data);
                })
                .catch(error => {
                    errorCounter++;
                    errors[index] = error;
                    if (promises.length === errorCounter) return reject(new AggregateError(errors, "All promises were rejected"));
                });
        })
    });
}

const promises = [
    // new Promise((res) => res(2)),
    // new Promise((res, rej) => setTimeout(() => res(3), 10)),
    new Promise((res, rej) => setTimeout(() => rej('Error 1'), 5)),
    new Promise((res, rej) => setTimeout(() => rej('Error 2'), 10)),
    new Promise((res, rej) => setTimeout(() => rej('Error 3'), 0)),
    new Promise((res, rej) => setTimeout(() => res(4), 50)),
];

console.log("All: ", promiseAny(promises).then(vl => console.log("res ", vl)).catch(er => console.log("Er ", er)));