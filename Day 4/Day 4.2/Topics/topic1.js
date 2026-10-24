function first() {
  console.log("first() started");
  second();
  console.log("first() finished");
}

function second() {
  console.log("second() runs at the top of the call stack");
}

first();
