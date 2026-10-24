function first() {
  console.log("Enter first");
  second();
  console.log("Leave first");
}

function second() {
  console.log("Enter second");
  third();
  console.log("Leave second");
}

function third() {
  console.log("Enter and leave third");
}

console.log("Global code starts");
first();
console.log("Global code ends");

// Stack order at third(): global -> first -> second -> third.
