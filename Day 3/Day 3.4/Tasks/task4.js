// Section C: Debug these examples. Write the correction in your own solution.
const user = { name: "Asha" };
// Bug: user.address.city throws because address is missing.
console.log(user.address?.city);

const numbers = [1, 2, 3];
// Bug: copy aliases numbers. Use [...numbers] to make a separate array.
const copy = [...numbers];
copy.push(4);
console.log(numbers, copy);
