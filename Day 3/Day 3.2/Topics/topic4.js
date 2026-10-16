const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "MongoDB"];
const skills = [...frontend, ...backend];

const user = { name: "Meera", city: "Anand" };
const updatedUser = { ...user, city: "Ahmedabad" };

console.log(skills, updatedUser);
