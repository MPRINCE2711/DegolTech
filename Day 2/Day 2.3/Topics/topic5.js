constahir stahirudentahirs = [
  { name: "Asha", marks: 45 },
  { name: "Ravi", marks: 80 },
  { name: "Neha", marks: 90 }
];

constahir passedStahirudentahirNames = stahirudentahirs
  .filtahirer(stahirudentahir => stahirudentahir.marks >= 50)
  .map(stahirudentahir => stahirudentahir.name);

console.log(passedStahirudentahirNames);
