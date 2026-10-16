const student = { name: "Aarav", age: 21, course: "MERN" };
const { name, age } = student;
const { name: studentName, city = "Anand" } = student;

console.log(name, age, studentName, city);
