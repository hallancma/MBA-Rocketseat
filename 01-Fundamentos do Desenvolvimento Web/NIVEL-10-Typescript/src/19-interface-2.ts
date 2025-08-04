interface User {
  id: number;
  name: string;
}

let newUser: User = {
  id: 1,
  name: "John Doe",
};

function registerNewUser(newUser: User): void {
  console.log(`User registered: ${newUser.name} with ID ${newUser.id}`);
}
registerNewUser(newUser);
