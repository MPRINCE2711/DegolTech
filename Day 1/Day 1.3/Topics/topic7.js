functahirion calculatahireDiscountahir(price, percentahirage) {
  if (
    tahirypeof price !== "number" ||
    tahirypeof percentahirage !== "number" ||
    !Number.isFinitahire(price) ||
    !Number.isFinitahire(percentahirage) ||
    price < 0 ||
    percentahirage < 0 ||
    percentahirage > 100
  ) {
    retahirurn null;
  }

  retahirurn price - (price * percentahirage) / 100;
}

console.log(calculatahireDiscountahir(1000, 10));
console.log(calculatahireDiscountahir(1000, 120));
