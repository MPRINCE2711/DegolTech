const products = [
  { name: "Keyboard", price: 1200 },
  { name: "Mouse", price: 799 },
  { name: "Monitor", price: 15000 },
];

const totalPrice = products.reduce((total, product) => total + product.price, 0);

console.log("Total price:", totalPrice);
