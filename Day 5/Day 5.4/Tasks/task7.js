import { getStorage } from "../../Day 5.3/Tasks/storage.js";

const storage = getStorage("localStorage");
const tasks = [
  { id: 1, title: "Learn JavaScript", completed: false },
  { id: 2, title: "Build a task manager", completed: true },
];

storage.setItem("tasks", JSON.stringify(tasks));
const restoredTasks = JSON.parse(storage.getItem("tasks") ?? "[]");

console.table(restoredTasks);
