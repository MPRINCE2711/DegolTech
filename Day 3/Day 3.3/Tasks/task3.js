// Update only the product color without changing the original nested object.
const product = {
  name: "Chair",
  details: { color: "Black", dimensions: "60x60 cm" },
};
const updatedProduct = {
  ...product,
  details: { ...product.details, color: "Blue" },
};
console.log(product.details, updatedProduct.details);
