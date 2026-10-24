import { getStorage } from "./storage.js";

const storage = getStorage("localStorage");
const storageKey = "tasks";

function loadTasks() {
  try {
    const savedTasks = storage.getItem(storageKey);
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch {
    return [];
  }
}

function saveTasks(tasks) {
  storage.setItem(storageKey, JSON.stringify(tasks));
}

function addTask(tasks, title) {
  const highestId = tasks.reduce((highest, task) => Math.max(highest, task.id), 0);
  const task = { id: highestId + 1, title, completed: false };
  tasks.push(task);
  saveTasks(tasks);
  return task;
}

function completeTask(tasks, id) {
  const task = tasks.find((item) => item.id === id);

  if (task) {
    task.completed = true;
    saveTasks(tasks);
  }
}

function deleteTask(tasks, id) {
  const updatedTasks = tasks.filter((task) => task.id !== id);
  saveTasks(updatedTasks);
  return updatedTasks;
}

let tasks = loadTasks();
const firstTask = addTask(tasks, "Learn JavaScript");
addTask(tasks, "Practice array methods");
completeTask(tasks, firstTask.id);
tasks = deleteTask(tasks, firstTask.id);

console.table(tasks);
