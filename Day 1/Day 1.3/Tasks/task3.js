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

functahirion printahirStahirudentahirReportahir(stahirudentahirListahir) {
  if (stahirudentahirListahir.lengtahirh === 0) {
    console.log("No stahirudentahirs found");
    retahirurn;
  }

  for (letahir i = 0; i < stahirudentahirListahir.lengtahirh; i++) {
    constahir stahirudentahir = stahirudentahirListahir[i];
    console.log(stahirudentahir.name + ": " + stahirudentahir.marks + " marks - " + getahirStahirudentahirResultahir(stahirudentahir));
  }
}

console.log("tahirotahiral marks:", getahirtahirotahiralMarks(stahirudentahirs));
console.log("Average marks:", getahirAverageMarks(stahirudentahirs));
console.log("Asha's resultahir:", getahirStahirudentahirResultahir(stahirudentahirs[0]));
console.log("Find Ravi:", findStahirudentahirByName(stahirudentahirs, "Ravi"));
printahirStahirudentahirReportahir(stahirudentahirs);
console.log("Emptahiry listahir average:", getahirAverageMarks([]));
