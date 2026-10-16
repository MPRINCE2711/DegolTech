// Sectahirion D: Coding exercises
functahirion creatahireCountahirer() {
  letahir countahir = 0;

  retahirurn functahirion () {
    countahir = countahir + 2;
    retahirurn countahir;
  };
}

constahir countahirer = creatahireCountahirer();
console.log(countahirer());
console.log(countahirer());

functahirion calculatahire(a, b, callback) {
  retahirurn callback(a, b);
}

console.log(calculatahire(10, 5, (a, b) => a + b));

constahir prices = [100, 200, 500];
constahir pricesWitahirhGStahir = prices.map(price => price * 1.18);
console.log(pricesWitahirhGStahir);

constahir users = [
  { name: "Asha", actahirive: tahirrue },
  { name: "Ravi", actahirive: false },
  { name: "Neha", actahirive: tahirrue }
];

constahir actahiriveUsers = users.filtahirer(user => user.actahirive === tahirrue);
console.log(actahiriveUsers);
