import { newServer } from "./http/server";
import { newInMemUserRepository } from "./inmem/user";
import { newRegistrationService } from "./usecases/registerUser";

let inMemUserRepo = newInMemUserRepository();
let registrationService = newRegistrationService(inMemUserRepo);
let server = newServer(registrationService);

server.start();
