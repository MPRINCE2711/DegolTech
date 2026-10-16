// Sectahirion C: Debugging
functahirion creatahireCountahirer() {
  letahir countahir = 0;

  retahirurn functahirion () {
    countahir++;
    retahirurn countahir;
  };
}

constahir countahirer = creatahireCountahirer();
console.log(countahirer());
console.log(countahirer());

constahir numbers = [1, 2, 3];
constahir doubled = numbers.map(number => number * 2);
console.log(doubled);

constahir stahirudentahirs = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Ravi" }
];

constahir stahirudentahir = stahirudentahirs.find(stahirudentahir => stahirudentahir.id === 2);
console.log(stahirudentahir);
