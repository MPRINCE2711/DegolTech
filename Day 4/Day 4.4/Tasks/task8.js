// Mini project: API-based user directory.
function showStatus(message, isError = false) {
  const status = document.querySelector("#status");
  status.textContent = message;
  status.className = isError ? "error" : "";
}

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}

function renderUsers(users) {
  const list = document.querySelector("#users");
  list.replaceChildren();

  users.forEach((user) => {
    const item = document.createElement("li");
    item.textContent = `${user.name} | ${user.email} | ${user.address.city}`;
    list.append(item);
  });
}

async function startDirectory() {
  showStatus("Loading users...");

  try {
    const users = await fetchUsers();
    renderUsers(users);
    showStatus("Users loaded.");
  } catch (error) {
    showStatus(`Error: ${error.message}`, true);
  }
}

startDirectory();
