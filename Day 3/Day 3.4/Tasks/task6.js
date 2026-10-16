// Section E: Student Record Manager mini project.
const students = [
  { id: 1, name: "Asha", marks: 82, address: { city: "Anand" } },
  { id: 2, name: "Dev", marks: 65, address: { city: "Surat" } },
  { id: 3, name: "Maya", marks: 91, address: { city: "Vadodara" } },
];

students.forEach(({ name, address }) => console.log(`${name}: ${address.city}`));
const passedStudents = students.filter((student) => student.marks >= 70);
const updatedStudents = students.map((student) =>
  student.id === 2 ? { ...student, marks: 72 } : student
);
const { name, marks } = updatedStudents[1];

console.log("Passed:", passedStudents);
console.log("Updated:", updatedStudents);
console.log("Selected student:", name, marks);
console.log("Original:", students);
