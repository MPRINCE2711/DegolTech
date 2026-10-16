// Create an employee object and print each property with dot and bracket notation.
const employee = {
  name: "Maya Patel",
  department: "Engineering",
  salary: 45000,
  employeeId: "EMP-101",
};

console.log(employee.name, employee.department, employee.salary, employee.employeeId);
console.log(employee["name"], employee["department"], employee["salary"], employee["employeeId"]);
