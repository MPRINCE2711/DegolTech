const products = [
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1200 },
];

const productsJson = JSON.stringify(products);
const parsedProducts = JSON.parse(productsJson);

console.log(productsJson);
console.table(parsedProducts);
