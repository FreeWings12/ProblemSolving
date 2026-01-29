// Promise.race
// Accepts an iterable (array)
// Returns a new promise
// Returns the first settled promise

function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) return;

        promises.forEach((promise) => {
            Promise.resolve(promise)
                .then(data => {
                    return resolve(data);
                })
                .catch(error => {
                    return reject(error);
                });
        })
    })
}

const promises = [
    // new Promise((res) => res(2)),
    new Promise((res, rej) => setTimeout(() => res(3), 10)),
    new Promise((res, rej) => setTimeout(() => rej('Error'), 0)),
    new Promise((res, rej) => setTimeout(() => res(4), 50)),
];

console.log("All: ", promiseRace(promises).then(vl => console.log("res ", vl)).catch(er => console.log("Errrr ", er)));