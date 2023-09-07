import { urls } from "../constants"
import { IRes, instanseCarsaxios } from "./apiCarsService"
import { ICar, IPagination } from "../intefaces"

const carsEndpoints = {
    cars: urls.cars.base,
    byId: (id: number): string => urls.cars.byId(id)
}

export const carsService = {
    getAll: ():IRes<IPagination<ICar>> => instanseCarsaxios.get(carsEndpoints.cars),
    create: (data: ICar): IRes<ICar> => instanseCarsaxios.post(carsEndpoints.cars, data),
    update: (id: number, data: ICar) => instanseCarsaxios.put<ICar>(carsEndpoints.byId(id), data),
    deleteById: (id:number): IRes<void> => instanseCarsaxios.delete(carsEndpoints.byId(id)),
}