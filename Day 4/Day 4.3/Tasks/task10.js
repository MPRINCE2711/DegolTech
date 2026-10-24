function setStatus(message, isError = false) {
  const status = document.querySelector("#status");
  status.textContent = message;
  status.className = isError ? "error" : "";
}

export async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}

export function renderUsers(users) {
  const userList = document.querySelector("#user-list");
  userList.replaceChildren();

  users.forEach((user) => {
    const item = document.createElement("li");
    item.textContent = `${user.name} — ${user.email}`;
    userList.append(item);
  });
}

export async function loadUserDirectory() {
  setStatus("Loading users...");

  try {
    const users = await fetchUsers();
    renderUsers(users);
    setStatus(`${users.length} users loaded.`);
  } catch (error) {
    setStatus(`Could not load users: ${error.message}`, true);
  }
}

loadUserDirectory();
