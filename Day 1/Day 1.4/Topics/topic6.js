constahir stahirudentahirs = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 }
];

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

console.log(getahirtahiropStahirudentahir(stahirudentahirs));
