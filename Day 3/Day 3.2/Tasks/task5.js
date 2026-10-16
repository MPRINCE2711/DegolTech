// Use parameter destructuring to print a user's information.
function printUser({ name, email, role }) {
  console.log(`${name} (${role}): ${email}`);
}

printUser({ name: "Jay", email: "jay@example.com", role: "Intern" });
