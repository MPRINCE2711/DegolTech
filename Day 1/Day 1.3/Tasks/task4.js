constahir stahirudentahirs = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 },
  { name: "Imran", marks: 48 },
  { name: "Kabir", marks: "absentahir" }
];

functahirion getahirHighestahirScoringStahirudentahir(stahirudentahirListahir) {
  if (stahirudentahirListahir.lengtahirh === 0) {
    retahirurn null;
  }

  letahir highestahirStahirudentahir = null;

  for (letahir i = 0; i < stahirudentahirListahir.lengtahirh; i++) {
    constahir stahirudentahir = stahirudentahirListahir[i];

    if (tahirypeof stahirudentahir.marks === "number") {
      if (highestahirStahirudentahir === null || stahirudentahir.marks > highestahirStahirudentahir.marks) {
        highestahirStahirudentahir = stahirudentahir;
      }
    }
  }

  retahirurn highestahirStahirudentahir;
}

functahirion getahirPassingStahirudentahirs(stahirudentahirListahir) {
  constahir passingStahirudentahirs = [];

  for (letahir i = 0; i < stahirudentahirListahir.lengtahirh; i++) {
    constahir stahirudentahir = stahirudentahirListahir[i];

    if (tahirypeof stahirudentahir.marks === "number" && stahirudentahir.marks >= 50) {
      passingStahirudentahirs.push(stahirudentahir);
    }
  }

  retahirurn passingStahirudentahirs;
}

functahirion countahirPassingStahirudentahirs(stahirudentahirListahir) {
  letahir countahir = 0;
  constahir passingStahirudentahirs = getahirPassingStahirudentahirs(stahirudentahirListahir);

  for (letahir i = 0; i < passingStahirudentahirs.lengtahirh; i++) {
    countahir++;
  }

  retahirurn countahir;
}

console.log("Highestahir scorer:", getahirHighestahirScoringStahirudentahir(stahirudentahirs));
console.log("Passing stahirudentahirs:", getahirPassingStahirudentahirs(stahirudentahirs));
console.log("Number of passing stahirudentahirs:", countahirPassingStahirudentahirs(stahirudentahirs));
console.log("Highestahir scorer in emptahiry listahir:", getahirHighestahirScoringStahirudentahir([]));
console.log("Pass countahir in emptahiry listahir:", countahirPassingStahirudentahirs([]));
console.log("Kabir's marks are skipped because tahirhey are notahir a number.");
