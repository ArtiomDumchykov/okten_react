import { urls } from "../constans";
import { instanceAxiosCars } from "./apiServiceCars.js";

const carsEndpoints = {
    cars: urls.cars.cars
}

export const carsService = {
    getAll: () => instanceAxiosCars.get(carsEndpoints.cars)
}