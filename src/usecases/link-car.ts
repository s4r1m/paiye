import { newCar, Car, CarRepository } from "../entities/car";

export interface LinkCarRequest {
  id: String;
  company?: String;
  model?: Number;
  make?: String;
  color?: String;
}

export interface CarLinkingService {
  linkCar: (req: LinkCarRequest) => Car;
}

export function newCarLinkingService(
  carRepo: CarRepository
): CarLinkingService {
  return Object.freeze({
    linkCar: makeLinkCar(carRepo),
  });
}

function makeLinkCar(carRepo: CarRepository): (req: LinkCarRequest) => Car {
  return function linkCar(req: LinkCarRequest): Car {
    const car = linkCarRequestToNewCar(req);
    carRepo.save(car);
    return car;
  };
}

function linkCarRequestToNewCar(req: LinkCarRequest): Car {
  return newCar({
    id: req.id,
    company: req.company ? req.company : "",
    model: req.model ? req.model : 0,
    make: req.make ? req.make : "",
    color: req.color ? req.color : "",
  });
}
