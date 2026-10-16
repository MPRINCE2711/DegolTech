// Section D: Return a sum for any number of numeric arguments.
function sumAll(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sumAll(10, 20, 30));
