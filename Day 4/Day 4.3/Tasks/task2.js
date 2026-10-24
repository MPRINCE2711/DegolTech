Promise.resolve(4)
  .then((number) => number * 3)
  .then((number) => number + 5)
  .then((result) => console.log("Final result:", result))
  .catch((error) => console.error(error.message));
