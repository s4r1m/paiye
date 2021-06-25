import { newUser } from "./entities/user";

console.log("paiye from ts, wut")

let jarri = newUser("jarri1337@gmail.com")

console.log("Created a new user:", jarri.getEmail())
