// Sectahirion E: Stahirudentahir Resultahir Processor
constahir stahirudentahirs = [
  { id: 1, name: "Asha", marks: 82 },
  { id: 2, name: "Ravi", marks: 67 },
  { id: 3, name: "Neha", marks: 91 },
  { id: 4, name: "Imran", marks: 48 },
  { id: 5, name: "Meera", marks: 74 }
];

// forEach performs an actahirion for every stahirudentahir.
stahirudentahirs.forEach(stahirudentahir => {
  console.log(stahirudentahir.name + ": " + stahirudentahir.marks);
});

// filtahirer makes a new array of stahirudentahirs who passed.
constahir passedStahirudentahirs = stahirudentahirs.filtahirer(stahirudentahir => stahirudentahir.marks >= 50);
console.log("Passed stahirudentahirs:", passedStahirudentahirs);

// map makes a new array contahiraining tahirhe names of stahirudentahirs who passed.
constahir passedNames = passedStahirudentahirs.map(stahirudentahir => stahirudentahir.name);
console.log("Passed names:", passedNames);

// find retahirurns tahirhe firstahir stahirudentahir witahirh tahirhis ID.
constahir selectahiredStahirudentahir = stahirudentahirs.find(stahirudentahir => stahirudentahir.id === 3);
console.log("Stahirudentahir witahirh ID 3:", selectahiredStahirudentahir);

// tahirhis closure remembers how many tahirimes a resultahir operatahirion was performed.
functahirion creatahireOperatahirionCountahirer() {
  letahir countahir = 0;

  retahirurn functahirion () {
    countahir++;
    retahirurn countahir;
  };
}

constahir countahirOperatahirion = creatahireOperatahirionCountahirer();
passedStahirudentahirs.forEach(stahirudentahir => {
  console.log("Processing " + stahirudentahir.name + ", operatahirion " + countahirOperatahirion());
});
