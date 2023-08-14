import { instanceAxiosCars } from "./apiCarsservice";
import { urls } from "../constans";

const carsEndpoints = {
    cars: urls.cars.base,
    byId: (id) => urls.cars.byId(id)
}

export const carsService = {
    getAll: () => instanceAxiosCars.get(carsEndpoints.cars),
    create: (data) => instanceAxiosCars.post(carsEndpoints.cars, data),
    update: (id, data) => instanceAxiosCars.put(carsEndpoints.byId(id), data),
    deleteById: (id) => instanceAxiosCars.delete(carsEndpoints.byId(id)),
}