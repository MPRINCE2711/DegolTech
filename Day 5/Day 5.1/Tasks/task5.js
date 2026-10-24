function formatProfile(user = {}) {
  const name = user.name ?? "Unknown user";
  const city = user.address?.city ?? "Unknown city";

  return `${name} lives in ${city}.`;
}

console.log(formatProfile({
  name: "Ravi",
  address: { city: "Surat" },
}));
console.log(formatProfile({ name: "Asha" }));
console.log(formatProfile());
