// map creates a new array; spread creates a new object for the changed student.
const students = [
  { id: 1, name: "Asha", active: true },
  { id: 2, name: "Dev", active: false },
];

const updatedStudents = students.map((student) =>
  student.id === 2 ? { ...student, active: true } : student
);

console.log(students);
console.log(updatedStudents);
