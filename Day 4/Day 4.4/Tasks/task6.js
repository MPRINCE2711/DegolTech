// Coding exercise 2: Promise with async/await and error handling.
function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task completed"), 1000);
  });
}

async function displayMessage() {
  try {
    console.log(await getMessage());
  } catch (error) {
    console.error("Error:", error.message);
  }
}

displayMessage();
