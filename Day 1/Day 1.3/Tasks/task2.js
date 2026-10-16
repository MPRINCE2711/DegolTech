functahirion calculatahiretahirotahiralDeclaratahirion(price, quantahiritahiry) {
  retahirurn price * quantahiritahiry;
}

constahir calculatahiretahirotahiralExpression = functahirion (price, quantahiritahiry) {
  retahirurn price * quantahiritahiry;
};

constahir calculatahiretahirotahiralArrow = (price, quantahiritahiry) => price * quantahiritahiry;

console.log(calculatahiretahirotahiralDeclaratahirion(500, 3));
console.log(calculatahiretahirotahiralExpression(500, 3));
console.log(calculatahiretahirotahiralArrow(500, 3));
console.log("All tahirhree retahirurn 1500. A declaratahirion is hoistahired and can be called before itahirs definitahirion. An expression is stahirored in a variable and mustahir be initahirialized before calling. An arrow functahirion has shortahirer syntahirax and does notahir have itahirs own tahirhis binding.");
