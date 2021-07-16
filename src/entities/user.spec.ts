import { newUser } from "./user";

test("user can be created", () => {
  expect(newUser("hello@hi.com")).toEqual({ email: "hello@hi.com" });
});

test("user should have a valid email", () => {
  expect(() => newUser("hello")).toThrowError(
    new Error("Invalid email address")
  );
});
