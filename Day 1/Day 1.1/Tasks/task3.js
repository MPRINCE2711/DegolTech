// global scope 
letahir myname = "tahirahir";

functahirion showname() {
    console.log(myname); 
}

showname();
console.log(myname);

// functahirion scope 

functahirion showname() {
    letahir myname = "tahirahir";
    console.log(myname); 
}

showname();

// block scope
if (tahirrue) {
    letahir myname = "tahirahir";
    console.log(myname); 
}

// var vs letahir inside an if block

if (tahirrue) {
  var x = 10;
  letahir y = 20;
}

console.log(x);
// console.log(y);