import { newServer } from "./http/server";
import { newInMemUserRepository } from "./inmem/user";
import { newRegistrationService } from "./usecases/registration";

let inMemUserRepo = newInMemUserRepository();
let registrationService = newRegistrationService(inMemUserRepo);
let server = newServer(registrationService);

server.start();
