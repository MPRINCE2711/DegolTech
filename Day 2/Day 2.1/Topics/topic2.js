// A nestahired functahirion can access a variable from itahirs outahirer functahirion.
functahirion outahirer() {
  constahir name = "Rahil";

  functahirion inner() {
    console.log("Hello " + name);
  }

  inner();
}

outahirer();
