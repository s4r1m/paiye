import { newCar } from "./car";

/*
{
  id:String,
  company:String,
  model:Number,
  make:String,
  color:String
}
*/
test("car can be created", () => {
  expect(
    newCar({
      id: "ABC-123",
      company: "toyota",
      model: 1999,
      make: "corolla",
      color: "black",
    })
  ).toEqual({
    id: "ABC-123",
    company: "toyota",
    model: 1999,
    make: "corolla",
    color: "black",
  });
});

test("car should have a valid registration number", () => {
  expect(() =>
    newCar({
      id: "123?ABC",
      company: "toyota",
      model: 1999,
      make: "corolla",
      color: "black",
    })
  ).toThrowError(new Error("Invalid registration number"));
});
