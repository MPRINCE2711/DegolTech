const prices = [500, 100, 900];
const sortedPrices = [...prices].sort((a, b) => a - b);
const total = prices.reduce((sum, price) => sum + price, 0);

console.log(sortedPrices);
console.log(total);
