function getCity(user) {
  return user?.address?.city ?? "Unknown city";
}

console.log(getCity({ name: "Asha", address: { city: "Anand" } }));
console.log(getCity({ name: "Ravi" }));
console.log(getCity());
