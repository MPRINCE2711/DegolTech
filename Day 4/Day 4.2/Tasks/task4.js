console.log("Start");

queueMicrotask(() => {
  console.log("Microtask 1");
});

Promise.resolve().then(() => {
  console.log("Promise microtask");
});

queueMicrotask(() => {
  console.log("Microtask 2");
});

console.log("End");

// Order: Start, End, Microtask 1, Promise microtask, Microtask 2.
