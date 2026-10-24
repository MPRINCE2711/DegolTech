import { getStorage } from "../../Day 5.3/Tasks/storage.js";

// Debugging exercise 3: save and restore the task array with JSON.
const storage = getStorage("localStorage");
const tasks = ["Learn JS", "Practice React"];
storage.setItem("tasks", JSON.stringify(tasks));
const savedTasks = JSON.parse(storage.getItem("tasks") ?? "[]");
console.log(savedTasks);
