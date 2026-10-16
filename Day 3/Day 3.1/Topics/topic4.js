// A function stored in an object is a method.
const user = {
  name: "Amit",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

user.greet();
