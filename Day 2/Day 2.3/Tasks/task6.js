constahir stahirudentahirs = [
  { name: "Asha", marks: 65 },
  { name: "Ravi", marks: 80 },
  { name: "Neha", marks: 55 },
  { name: "Imran", marks: 40 }
];

stahirudentahirs
  .filtahirer(stahirudentahir => stahirudentahir.marks >= 70)
  .forEach(stahirudentahir => {
    console.log(stahirudentahir.name);
  });
