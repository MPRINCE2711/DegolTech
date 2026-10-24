queueMicrotask(() => {
  console.log("Microtask");
});

setTimeout(() => {
  console.log("Task");
}, 0);
