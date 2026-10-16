// Rest syntax collects the remaining values.
const [first, ...remaining] = [10, 20, 30, 40];
console.log(first, remaining);

function calculateTotal(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}

console.log(calculateTotal(100, 200, 300));
