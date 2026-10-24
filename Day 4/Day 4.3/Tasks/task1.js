function loadWithCallback(callback) {
  setTimeout(() => {
    callback(null, "Callback result");
  }, 100);
}

function loadWithPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise result");
    }, 100);
  });
}

loadWithCallback((error, result) => {
  if (error) {
    console.error(error.message);
    return;
  }

  console.log(result);
});

loadWithPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));
