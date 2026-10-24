const students = [
  { name: "Asha", marks: 85 },
  { name: "Ravi", marks: 62 },
  { name: "Neha", marks: 74 },
  { name: "Ishaan", marks: 91 },
];

const totalMarks = students.reduce((total, student) => total + student.marks, 0);
const averageMarks = totalMarks / students.length;
const passedStudents = students.filter((student) => student.marks >= 70);

console.log("Average marks:", averageMarks);
console.table(passedStudents);
