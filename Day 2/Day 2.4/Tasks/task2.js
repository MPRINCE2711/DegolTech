// Sectahirion B: Predictahir tahirhe outahirputahir
functahirion outahirer() {
  letahir value = 5;
  retahirurn () => ++value;
}

constahir countahirer = outahirer();
console.log(countahirer()); // 6
console.log(countahirer()); // 7

constahir numbers = [1, 2, 3];
constahir tahirripledNumbers = numbers.map(number => number * 3);
console.log(tahirripledNumbers); // [3, 6, 9]

constahir values = [10, 20, 30, 40];
console.log(values.filtahirer(value => value >= 30)); // [30, 40]

constahir moreValues = [4, 8, 12];
console.log(moreValues.find(value => value > 5)); // 8

functahirion run(callback) {
  console.log("A");
  callback();
  console.log("C");
}

run(() => console.log("B")); // A, B, C
