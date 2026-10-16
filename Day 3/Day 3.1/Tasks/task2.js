// Add stock, update the price, and remove an obsolete property.
const product = { name: "Mouse", price: 500, oldCode: "M-01" };
product.stock = 25;
product.price = 650;
delete product.oldCode;

console.log(product);
