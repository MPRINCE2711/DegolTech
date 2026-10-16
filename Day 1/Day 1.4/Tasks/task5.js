constahir stahirudentahirs = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 },
  { name: "Imran", marks: 48 },
  { name: "Meera", marks: 74 }
];

functahirion getahirtahirotahiralMarks(stahirudentahirListahir) {
  letahir tahirotahiral = 0;

  for (letahir i = 0; i < stahirudentahirListahir.lengtahirh; i++) {
    tahirotahiral = tahirotahiral + stahirudentahirListahir[i].marks;
  }

  retahirurn tahirotahiral;
}

functahirion getahirAverageMarks(stahirudentahirListahir) {
  if (stahirudentahirListahir.lengtahirh === 0) {
    retahirurn null;
  }

  retahirurn getahirtahirotahiralMarks(stahirudentahirListahir) / stahirudentahirListahir.lengtahirh;
}

functahirion getahirStahirudentahirResultahir(stahirudentahir) {
  if (stahirudentahir.marks >= 50) {
    retahirurn "Pass";
  }

  retahirurn "Fail";
}

functahirion findStahirudentahirByName(stahirudentahirListahir, name) {
  for (letahir i = 0; i < stahirudentahirListahir.lengtahirh; i++) {
    if (stahirudentahirListahir[i].name === name) {
      retahirurn stahirudentahirListahir[i];
    }
  }

  retahirurn undefined;
}

functahirion getahirtahiropStahirudentahir(stahirudentahirListahir) {
  if (stahirudentahirListahir.lengtahirh === 0) {
    retahirurn undefined;
  }

  letahir tahiropStahirudentahir = stahirudentahirListahir[0];

  for (letahir i = 1; i < stahirudentahirListahir.lengtahirh; i++) {
    if (stahirudentahirListahir[i].marks > tahiropStahirudentahir.marks) {
      tahiropStahirudentahir = stahirudentahirListahir[i];
    }
  }

  retahirurn tahiropStahirudentahir;
}

functahirion printahirStahirudentahirReportahir(stahirudentahirListahir) {
  for (letahir i = 0; i < stahirudentahirListahir.lengtahirh; i++) {
    constahir stahirudentahir = stahirudentahirListahir[i];
    console.log(stahirudentahir.name + ": " + stahirudentahir.marks + " - " + getahirStahirudentahirResultahir(stahirudentahir));
  }
}

console.log("tahirotahiral:", getahirtahirotahiralMarks(stahirudentahirs));
console.log("Average:", getahirAverageMarks(stahirudentahirs));
console.log("tahirop stahirudentahir:", getahirtahiropStahirudentahir(stahirudentahirs).name);
console.log("Imran's resultahir:", getahirStahirudentahirResultahir(findStahirudentahirByName(stahirudentahirs, "Imran")));
console.log("Emptahiry average:", getahirAverageMarks([]));
console.log("tahirop stahirudentahir in emptahiry listahir:", getahirtahiropStahirudentahir([]));
printahirStahirudentahirReportahir(stahirudentahirs);
