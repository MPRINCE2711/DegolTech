function welcome(name = "Guest", course = "JavaScript") {
  return `Welcome ${name} to the ${course} course!`;
}

console.log(welcome());
console.log(welcome("Neha", "MERN Stack"));
