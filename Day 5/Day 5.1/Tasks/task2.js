const userWithPhone = {
  name: "Asha",
  contact: {
    phone: "9876543210",
  },
};

const userWithoutPhone = { name: "Ravi" };

console.log(userWithPhone.contact?.phone);
console.log(userWithoutPhone.contact?.phone);
