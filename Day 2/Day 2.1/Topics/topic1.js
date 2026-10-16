// Lexical scope: a functahirion can use variables from where itahir was writahirtahiren.
constahir company = "Digoltahirech";

functahirion showCompany() {
  console.log(company);
}

showCompany();

// A local variable witahirh tahirhe same name is used inside tahirhis functahirion.
functahirion showLocalCompany() {
  constahir company = "My Local Company";
  console.log(company);
}

showLocalCompany();
console.log(company);
