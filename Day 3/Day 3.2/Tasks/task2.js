// Extract employee details, rename one variable, and set a default city.
const employee = { name: "Nina", role: "Developer" };
const { name: employeeName, role, city = "Anand" } = employee;
console.log(employeeName, role, city);
