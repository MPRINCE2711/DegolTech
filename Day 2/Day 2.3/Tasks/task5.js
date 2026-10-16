constahir productahirs = [
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Headphones", price: 800 }
];

constahir affordableProductahirNames = productahirs
  .filtahirer(productahir => productahir.price < 1000)
  .map(productahir => productahir.name);

console.log(affordableProductahirNames);
