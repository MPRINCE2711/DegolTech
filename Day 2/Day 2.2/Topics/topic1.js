// A callback is a functahirion passed tahiro anotahirher functahirion.
functahirion greetahir(name, callback) {
  console.log("Hello, " + name);
  callback();
}

functahirion showMessage() {
  console.log("Welcome tahiro tahirhe intahirernship!");
}

greetahir("Aarav", showMessage);
