import { newUser, User, UserRepository } from "../entities/user";

export interface RegistrationService {
  register: (email: String) => User;
}

export function newRegistrationService(
  userRepo: UserRepository
): RegistrationService {
  return Object.freeze({
    register: makeRegister(userRepo),
  });
}

function makeRegister(userRepo: UserRepository): (email: String) => User {
  return function register(email: String): User {
    const user = newUser(email);
    userRepo.save(user);
    return user;
  };
}
