Promise.resolve("Start")
  .then(() => {
    throw new Error("Something went wrong");
  })
  .then(() => {
    console.log("This line is skipped.");
  })
  .catch((error) => {
    console.error("Caught error:", error.message);
  });
