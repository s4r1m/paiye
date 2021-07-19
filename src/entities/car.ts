export interface Car {
  id: String;
  company: String;
  model: Number;
  make: String;
  color: String;
}

export interface CarRepository {
  save: (car: Car) => Car;
}

export function newCar(car: Car): Car {
  if (!isValidRegistrationId(car.id)) {
    throw new Error("Invalid registration number");
  }

  return Object.freeze(car);
}

function isValidRegistrationId(id: String): Boolean {
  // some validation
  let regex = "[A-Z]{3}-[0-9]{3}";
  if (id.match(regex) === null) {
    return false;
  }
  return true;
}
