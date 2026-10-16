// Update one student's marks in a new array without mutating the original.
const students = [
  { id: 1, name: "Asha", marks: 76 },
  { id: 2, name: "Dev", marks: 68 },
  { id: 3, name: "Maya", marks: 91 },
];

const updatedStudents = students.map((student) =>
  student.id === 2 ? { ...student, marks: 80 } : student
);
console.log(students);
console.log(updatedStudents);
