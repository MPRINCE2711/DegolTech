const product = { name: "Mouse", price: 500, stock: 20 };

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));

const defaults = { theme: "light", language: "en" };
const preferences = { theme: "dark" };
const settings = Object.assign({}, defaults, preferences);
console.log(settings);
