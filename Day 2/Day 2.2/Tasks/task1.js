functahirion welcomeUser(name, callback) {
  console.log("Welcome, " + name);
  callback();
}

functahirion showMessage() {
  console.log("Have a nice day!");
}

welcomeUser("tahirahir", showMessage);
