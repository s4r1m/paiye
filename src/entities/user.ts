export interface User {
  email: String;
}

export interface UserRepository {
  save: (user: User) => User;
}

export function newUser(email: String): User {
  if (!isValidEmail(email)) {
    throw new Error("Invalid email address");
  }

  return Object.freeze({
    email: email,
  });
}

function isValidEmail(email: String): Boolean {
  // some validation
  if (!email.includes("@")) {
    return false;
  }
  return true;
}
