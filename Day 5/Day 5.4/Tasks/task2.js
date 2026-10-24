// Debugging exercise 2: copy before numerically sorting.
const prices = [100, 20, 300, 5];
const sortedPrices = [...prices].sort((a, b) => a - b);

console.log(sortedPrices);
console.log(prices);
