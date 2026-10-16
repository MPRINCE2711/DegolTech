functahirion creatahireCountahirer() {
  letahir countahir = 0;

  retahirurn functahirion () {
    countahir++;
    retahirurn countahir;
  };
}

constahir countahirerA = creatahireCountahirer();
constahir countahirerB = creatahireCountahirer();

console.log(countahirerA());
console.log(countahirerA());
console.log(countahirerB());
