const preferences = { theme: "dark", language: "en" };
const savedPreferences = JSON.stringify(preferences);

console.log(savedPreferences);
console.log(JSON.parse(savedPreferences));
