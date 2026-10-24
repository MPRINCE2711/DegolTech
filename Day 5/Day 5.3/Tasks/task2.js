import { getStorage } from "./storage.js";

const storage = getStorage("localStorage");
const preferences = { theme: "dark", language: "en" };

storage.setItem("preferences", JSON.stringify(preferences));

const savedPreferences = JSON.parse(storage.getItem("preferences") ?? "{}");
console.log("Theme:", savedPreferences.theme);
console.log("Language:", savedPreferences.language);
