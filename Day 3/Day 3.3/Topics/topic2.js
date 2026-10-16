// Create an updated object instead of changing the original.
const user = { name: "Ravi", age: 22 };
const updatedUser = { ...user, age: 25 };
console.log(user.age, updatedUser.age);
