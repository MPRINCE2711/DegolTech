// Copy each level that changes to update nested data immutably.
const student = {
  name: "Asha",
  address: { city: "Anand", state: "Gujarat" },
};
const updatedStudent = {
  ...student,
  address: { ...student.address, city: "Vadodara" },
};
console.log(student.address.city, updatedStudent.address.city);
