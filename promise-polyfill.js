/*
  
  <--------------------------------------
  new Promise((resolve, reject) => {
  //async call
  request()

  })
  
  -------------------------------------->
const timeOutPromise = (fn, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("timeout");
      fn.call();
      resolve(1);
    }, time);
  });
};

timeOutPromise(() => {
  console.log("function 1");
}, 2000)
  .then((v) => {
    console.log(v, "value");
    return v;
  })
  .then((r) => {
    console.log(r + 1, "second then");
  });
  */

class PromiseSimple {
  constructor(exFn) {
    this.promiseChain = [];
    this.onResolve = this.onResolve.bind(this);
    this.handleError = () => {};
    this.onReject = this.onReject.bind(this);
    exFn(this.onResolve, this.onReject);
  }

  onResolve(val) {
    let storedVal = val;
    try {
      this.promiseChain.forEach((fn) => {
        storedVal = fn(storedVal);
      });
    } catch (e) {
      this.onReject(e);
    }
  }

  onReject(e) {
    this.handleError(e);
  }

  then(successCallback) {
    this.promiseChain.push(successCallback);
    return this;
  }

  catch(handleError) {
    this.handleError = handleError;
    return this;
  }
}

const timeOutPromise = (fn, time) => {
  return new PromiseSimple((resolve, reject) => {
    setTimeout(() => {
      fn();
      resolve({ name: "Aditya" });
    }, time);
  });
};

timeOutPromise(() => {
  console.log("i m param");
}, 1000)
  .then((val) => {
    console.log(val);
    return val;
  })
  .then((rp) => {
    console.log(rp.name + "is the name");
    return rp;
  });
