function promiseAllSettled(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) return resolve([]);
        const results = [];
        let completedCounter = 0;
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = {status: 'FULFILLED', value};
                    completedCounter++;
                    if (promises.length === completedCounter) return resolve(results);
                })
                .catch(reason => {
                    results[index] = {status: 'REJECTED', reason};
                    completedCounter++;
                    if (promises.length === completedCounter) return resolve(results);
                });
        });
    })
}

const promises = [
    new Promise((res) => res(2)),
    new Promise((res, rej) => setTimeout(() => res(3), 10)),
    new Promise((res, rej) => setTimeout(() => rej('Error'), 1000)),
    new Promise((res, rej) => setTimeout(() => res(4), 0)),
];

console.log("All: ", promiseAllSettled(promises).then(vl => console.log("res ", vl)).catch(er => console.log("Errrr ", er)));