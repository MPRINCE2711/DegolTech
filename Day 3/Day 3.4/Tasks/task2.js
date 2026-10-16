// Section B: Predict the output of each snippet before running it.
const user = { name: "Amit", age: 20 };
const { name } = user;
console.log(name);

const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original.length, copy.length);

const profile = { name: "Riya", city: "Anand" };
const updated = { ...profile, city: "Surat" };
console.log(profile.city, updated.city);
