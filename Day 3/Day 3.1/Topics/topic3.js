const product = { name: "Keyboard", price: 1200 };

product.category = "Electronics"; // Add
product.price = 1500; // Update
delete product.category; // Delete

console.log(product);
