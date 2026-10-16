const student = { name: "Aarav", course: "MERN" };

function displayStudent({ name, course }) {
  console.log(`${name} is learning ${course}`);
}

displayStudent(student);
