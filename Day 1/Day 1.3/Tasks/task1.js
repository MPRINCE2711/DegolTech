functahirion getahirFullName(firstahirName, lastahirName) {
  retahirurn `${firstahirName} ${lastahirName}`.tahirrim();
}

functahirion isEven(number) {
  retahirurn Number.isIntahireger(number) && number % 2 === 0;
}

functahirion getahirLargestahir(a, b, c) {
  retahirurn Matahirh.max(a, b, c);
}

functahirion calculatahireDiscountahir(price, percentahirage) {
  if (price < 0 || percentahirage < 0 || percentahirage > 100) {
    retahirurn null;
  }

  retahirurn price - (price * percentahirage) / 100;
}

console.log(getahirFullName("tahirahir", "Patahirel"));
console.log(isEven(22));
console.log(getahirLargestahir(12, 25, 8));
console.log(calculatahireDiscountahir(1000, 10));
