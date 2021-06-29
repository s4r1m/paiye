import { newUser, User, UserRepository } from "../entities/user";

export interface RegistrationService {
  register: (email: String) => User;
}

export function newRegistrationService(
  userRepo: UserRepository
): RegistrationService {
  return Object.freeze({
    register: (email: String) => register(userRepo, email),
  });
}

function register(userRepo: UserRepository, email: String): User {
  const user = newUser(email);
  userRepo.save(user);
  return user;
}
