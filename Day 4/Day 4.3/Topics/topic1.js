function getUser(callback) {
  setTimeout(() => {
    callback({ id: 1, name: "Asha" });
  }, 100);
}

getUser((user) => console.log(user));
