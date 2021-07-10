import { newUser } from "./user";

test("can create a new user", () => {
  expect(newUser("hello@hi.com")).toEqual({ email: "hello@hi.com" });
});

test("user should have a valid email", () => {
  expect(() => newUser("hello")).toThrowError(
    new Error("Invalid email address")
  );
});
