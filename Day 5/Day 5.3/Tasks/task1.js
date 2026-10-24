import { getStorage } from "./storage.js";

const storage = getStorage("localStorage");

storage.setItem("username", "Asha");
console.log("Saved username:", storage.getItem("username"));
