// Section B continued: Predict each output and explain the shallow copy.
const [first, ...remaining] = [5, 10, 15, 20];
console.log(first, remaining);

const product = { name: "Laptop", details: { color: "Silver" } };
const productCopy = { ...product };
productCopy.details.color = "Black";
console.log(product.details.color);
