import { User, UserRepository } from "../entities/user";

var users: User[] = [];

export function newInMemUserRepository(): UserRepository {
  return {
    save: (user: User) => saveUser(user),
  };
}

function saveUser(user: User): User {
  users.push(user);
  users.forEach((u) => console.log(u.email));
  return user;
}
