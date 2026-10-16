const student = { name: "Rahil", age: 24, course: "MERN Stack" };

// Dot notation and bracket notation both access object properties.
console.log(student.name);
console.log(student["course"]);

// Bracket notation is useful when the key is stored in a variable.
const key = "age";
console.log(student[key]);
