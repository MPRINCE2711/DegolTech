async function example() {
  console.log("Before await");
  await Promise.resolve();
  console.log("After await");
}

example();
console.log("Outside the async function");
