import { getStorage } from "./storage.js";

const storage = getStorage("sessionStorage");

storage.setItem("currentFormStep", "2");
console.log("Current step:", storage.getItem("currentFormStep"));
