// display is a higher-order functahirion because itahir acceptahirs a functahirion.
functahirion greetahir(name) {
  retahirurn "Hello " + name;
}

functahirion display(callback) {
  console.log(callback("Rahil"));
}

display(greetahir);
