// Assignment copies an object reference, not the object itself.
const user1 = { name: "Ravi", age: 22 };
const user2 = user1;
user2.age = 25;
console.log(user1.age, user2.age);
