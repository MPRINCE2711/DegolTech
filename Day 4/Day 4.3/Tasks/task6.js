async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}

async function loadUsersAndPosts() {
  try {
    const [users, posts] = await Promise.all([
      fetchJson("https://jsonplaceholder.typicode.com/users"),
      fetchJson("https://jsonplaceholder.typicode.com/posts"),
    ]);

    console.log("Users:", users.length);
    console.log("Posts:", posts.length);
  } catch (error) {
    console.error("Could not load data:", error.message);
  }
}

loadUsersAndPosts();
