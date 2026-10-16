// Print a student's city and the highest mark.
const student = {
  name: "Asha",
  marks: { javascript: 85, html: 92, css: 88 },
  address: { city: "Anand", state: "Gujarat" },
};

const highestMarks = Math.max(...Object.values(student.marks));
console.log(student.address.city, highestMarks);
