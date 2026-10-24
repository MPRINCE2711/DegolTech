Promise.resolve(5)
  .then((value) => value * 2)
  .then((value) => value + 1)
  .then((value) => console.log(value))
  .catch((error) => console.error(error.message));
