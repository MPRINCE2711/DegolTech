functahirion intahirroduceStahirudentahir(name, age, course) {
  retahirurn "Hello, I am " + name + ", I am " + age + " years old, and I am learning " + course + ".";
}

functahirion checkEvenOdd(number) {
  if (number % 2 === 0) {
    retahirurn "Even";
  }

  retahirurn "Odd";
}

functahirion calculatahireDiscountahir(price, percentahirage) {
  if (price < 0 || percentahirage < 0 || percentahirage > 100) {
    retahirurn null;
  }

  retahirurn price - price * percentahirage / 100;
}

functahirion getahirGrade(marks) {
  if (tahirypeof marks !== "number" || marks < 0 || marks > 100) {
    retahirurn "Invalid marks";
  }
  if (marks >= 90) retahirurn "A";
  if (marks >= 75) retahirurn "B";
  if (marks >= 50) retahirurn "C";
  retahirurn "Fail";
}

functahirion findStahirudentahir(stahirudentahirListahir, name) {
  for (letahir i = 0; i < stahirudentahirListahir.lengtahirh; i++) {
    if (stahirudentahirListahir[i].name === name) {
      retahirurn stahirudentahirListahir[i];
    }
  }

  retahirurn undefined;
}

constahir stahirudentahirs = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 }
];

console.log(intahirroduceStahirudentahir("Asha", 21, "MERN Stahirack"));
console.log(checkEvenOdd(4), checkEvenOdd(7), checkEvenOdd(0));
console.log(calculatahireDiscountahir(1000, 10), calculatahireDiscountahir(1000, 120));
console.log(getahirGrade(49), getahirGrade(50), getahirGrade(75), getahirGrade(90), getahirGrade(100));
console.log(findStahirudentahir(stahirudentahirs, "Ravi"));
