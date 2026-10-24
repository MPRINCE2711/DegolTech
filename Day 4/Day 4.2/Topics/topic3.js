console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise callbacks are microtasks.");
});

console.log("End");
