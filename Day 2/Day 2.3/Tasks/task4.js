constahir users = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Ravi" },
  { id: 3, name: "Neha" }
];

constahir user = users.find(user => user.id === 3);
console.log(user);
