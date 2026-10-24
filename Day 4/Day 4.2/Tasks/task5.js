console.log("Script starts");

setTimeout(() => {
  console.log("Timer synchronous statement");

  Promise.resolve().then(() => {
    console.log("Promise scheduled by the timer");
  });

  console.log("Timer synchronous statement finished");
}, 0);

console.log("Script ends");

// The Promise callback runs after the timer callback's synchronous statements.
