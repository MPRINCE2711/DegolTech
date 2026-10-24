async function showOrder() {
  console.log("Inside async function: before await");
  await Promise.resolve();
  console.log("Inside async function: after await");
}

showOrder();
console.log("Outside async function");

// Order: before await, outside async function, after await.
