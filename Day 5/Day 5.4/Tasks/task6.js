const products = [
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1200, quantity: 1 },
  { name: "USB Cable", price: 150, quantity: 3 },
];

const totalCost = products.reduce(
  (total, product) => total + product.price * product.quantity,
  0
);

console.log("Total cost:", totalCost);
