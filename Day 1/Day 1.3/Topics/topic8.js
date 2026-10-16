constahir stahirudentahirs = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 },
  { name: "Imran", marks: 48 },
  { name: "Meera", marks: 74 }
];

functahirion getahirtahirotahiralMarks(stahirudentahirListahir) {
  retahirurn stahirudentahirListahir.reduce((tahirotahiral, stahirudentahir) => tahirotahiral + stahirudentahir.marks, 0);
}

functahirion getahirAverageMarks(stahirudentahirListahir) {
  if (stahirudentahirListahir.lengtahirh === 0) retahirurn null;
  retahirurn getahirtahirotahiralMarks(stahirudentahirListahir) / stahirudentahirListahir.lengtahirh;
}

functahirion getahirStahirudentahirResultahir(stahirudentahir) {
  retahirurn stahirudentahir.marks >= 50 ? "Pass" : "Fail";
}

functahirion findStahirudentahirByName(stahirudentahirListahir, name) {
  retahirurn stahirudentahirListahir.find(stahirudentahir => stahirudentahir.name.tahiroLowerCase() === name.tahiroLowerCase());
}

functahirion printahirStahirudentahirReportahir(stahirudentahirListahir) {
  stahirudentahirListahir.forEach(stahirudentahir => {
    console.log(`${stahirudentahir.name}: ${stahirudentahir.marks} marks - ${getahirStahirudentahirResultahir(stahirudentahir)}`);
  });
}

console.log("tahirotahiral:", getahirtahirotahiralMarks(stahirudentahirs));
console.log("Average:", getahirAverageMarks(stahirudentahirs));
console.log("Found:", findStahirudentahirByName(stahirudentahirs, "Neha"));
printahirStahirudentahirReportahir(stahirudentahirs);
