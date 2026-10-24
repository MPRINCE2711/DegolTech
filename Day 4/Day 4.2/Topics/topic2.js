console.log("Synchronous code starts.");

setTimeout(() => {
  console.log("Timer callback runs later.");
}, 0);

console.log("Synchronous code ends.");
