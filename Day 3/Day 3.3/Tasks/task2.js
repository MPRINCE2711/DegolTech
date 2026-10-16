// Create a new user object with an updated email. Keep the original unchanged.
const user = { name: "Maya", email: "old@example.com" };
const updatedUser = { ...user, email: "maya@example.com" };
console.log(user, updatedUser);
