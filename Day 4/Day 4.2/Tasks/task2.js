console.log("Synchronous message 1");
console.log("Synchronous message 2");

setTimeout(() => {
  console.log("Asynchronous timer message");
}, 0);

console.log("Synchronous message 3");

// Predicted order: 1, 2, 3, timer message.
