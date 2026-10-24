import { getStorage } from "./storage.js";

const storage = getStorage("localStorage");

function loadTasks() {
  try {
    const savedTasks = storage.getItem("tasks");
    const parsedTasks = savedTasks ? JSON.parse(savedTasks) : [];

    return Array.isArray(parsedTasks) ? parsedTasks : [];
  } catch {
    console.error("Saved tasks were invalid. Starting with an empty list.");
    return [];
  }
}

storage.setItem("tasks", "not valid JSON");
console.log(loadTasks());
