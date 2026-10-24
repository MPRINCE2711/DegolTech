const student = {
  name: "Asha",
  marks: 85,
  course: "JavaScript",
};

const studentJson = JSON.stringify(student);
const parsedStudent = JSON.parse(studentJson);

console.log(studentJson);
console.log(parsedStudent);
