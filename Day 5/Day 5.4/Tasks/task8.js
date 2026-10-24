const storageKey = "persistent-tasks";
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const form = document.querySelector("#task-form");

function loadTasks() {
  try {
    const saved = localStorage.getItem(storageKey);
    const tasks = saved ? JSON.parse(saved) : [];
    return Array.isArray(tasks) ? tasks : [];
  } catch {
    return [];
  }
}

function saveTasks(tasks) {
  localStorage.setItem(storageKey, JSON.stringify(tasks));
}

function renderTasks() {
  const tasks = loadTasks();
  list.replaceChildren();

  tasks.forEach((task) => {
    const item = document.createElement("li");
    const title = document.createElement("span");
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    title.textContent = task.title;
    title.className = task.completed ? "completed" : "";

    completeButton.textContent = task.completed ? "Undo" : "Complete";
    completeButton.addEventListener("click", () => toggleTask(task.id));

    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    item.append(title, completeButton, deleteButton);
    list.append(item);
  });
}

function addTask(title) {
  const tasks = loadTasks();
  tasks.push({ id: crypto.randomUUID(), title, completed: false });
  saveTasks(tasks);
  renderTasks();
}

function toggleTask(id) {
  const tasks = loadTasks().map((task) => (
    task.id === id ? { ...task, completed: !task.completed } : task
  ));

  saveTasks(tasks);
  renderTasks();
}

function deleteTask(id) {
  const tasks = loadTasks().filter((task) => task.id !== id);
  saveTasks(tasks);
  renderTasks();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value.trim();

  if (!title) {
    return;
  }

  addTask(title);
  form.reset();
  input.focus();
});

renderTasks();
