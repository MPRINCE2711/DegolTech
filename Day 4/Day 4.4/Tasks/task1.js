// Debugging exercise 1: print the resolved value, not the Promise object.
const promise = Promise.resolve("Success");

promise.then((value) => console.log(value));
