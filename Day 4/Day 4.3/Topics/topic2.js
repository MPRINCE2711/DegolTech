const userPromise = Promise.resolve({ id: 1, name: "Asha" });

userPromise.then((user) => {
  console.log(user.name);
});
