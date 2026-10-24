console.log("Start");

setTimeout(() => {
  console.log("Timer runs after the blocking loop.");
}, 0);

const endTime = Date.now() + 100;
while (Date.now() < endTime) {
  // Simulate CPU-heavy synchronous work for about 100 ms.
}

console.log("Blocking loop finished");

// The timer cannot interrupt JavaScript while the call stack is busy.
