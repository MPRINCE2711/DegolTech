const student = {
  name: "Neha",
  marks: { javascript: 85, react: 90 },
  address: { city: "Anand", state: "Gujarat" },
};

console.log(student.marks.react);
console.log(student.address.city);
// Optional chaining safely handles a property that may be missing.
console.log(student.contact?.email);
