const users = [
  { name: "Asha", active: true },
  { name: "Ravi", active: false },
];

console.log(users.filter((user) => user.active).map((user) => user.name));
