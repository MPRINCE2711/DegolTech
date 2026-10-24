// Debugging exercise 3: HTTP errors need an explicit response.ok check.
async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();
    console.log("Loaded users:", users.length);
  } catch (error) {
    console.error("Could not load users:", error.message);
  }
}

loadUsers();
