class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.handlers = [];

        const resolve = result => {
            if (this.state !== 'pending') return;
            if (result instanceof MyPromise) {
                return result.then(resolve, reject);
            }
            this.state = 'fulfilled';
            this.value = result;
            this._executeHandlers();
        }

        const reject = error => {
            if (this.state !== 'pending') return;
            this.state = 'rejected';
            this.value = error;
            this._executeHandlers();
        }
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    _executeHandlers() {
        if (this.state === 'pending') return;
        queueMicrotask(() => {
            this.handlers.forEach(handler => {
                const callback = this.state === 'fulfilled' ? handler.onFulfilled : handler.onRejected;
                if (!callback) {
                    return (this.state === 'fulfilled' ? handler.resolve : handler.reject)(this.value)
                }
                try {
                    const result = callback(this.value);
                    handler.resolve(result);
                } catch (error) {
                    handler.reject(error);
                }
            })
            this.handlers = []
        });
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            this.handlers.push({onFulfilled, onRejected, resolve, reject});
            this._executeHandlers();
        })
    }
    catch(onRejected) {
        return this.then(null, onRejected);
    }
}





const p = new MyPromise(resolve => {
  setTimeout(() => resolve(10), 1000);
});

p.then(value => {
  console.log("Val", value);
  return value + 1;
}).then(v => {
    console.log("p2 ", v)
    return v + 1;
}).then(v => {
    console.log("p3 ", v)
    throw new Error('alndls');
}).catch(err => {
    console.log("Error ", err)
    return 'Hello'
}).then(v => {console.log("Last ", v)})
console.log("P ",p);