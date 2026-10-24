async function getGreeting() {
  try {
    const greeting = await Promise.resolve("Hello");
    console.log(greeting);
  } catch (error) {
    console.error(error.message);
  }
}

getGreeting();
