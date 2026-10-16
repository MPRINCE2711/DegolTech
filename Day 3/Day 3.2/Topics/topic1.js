const colors = ["red", "green", "blue"];
const [first, , third] = colors; // Skip the second value.
console.log(first, third);

const [name = "Unknown", age = 18] = ["Riya"];
console.log(name, age);
