import express from "express";
import { RegistrationService } from "../usecases/registerUser";

export interface Server {
  start: () => void;
}

export function newServer(registrationService: RegistrationService): Server {
  const app = express();
  app.use(express.json());

  // Request Body: { "email": "hello@123.com" }
  app.put("/register", function (req, res) {
    res.send(registrationService.register(req.body.email));
  });

  return Object.freeze({
    start: () =>
      app.listen(8080, () => {
        console.log(`Example app listening at http://localhost:8080`);
      }),
  });
}
