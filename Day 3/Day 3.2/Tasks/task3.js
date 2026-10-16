// Combine the arrays and copy them before adding a student.
const batchA = ["Asha", "Ravi"];
const batchB = ["Neha", "Dev"];
const students = [...batchA, ...batchB];
const updatedStudents = [...students, "Maya"];
console.log(students);
console.log(updatedStudents);
