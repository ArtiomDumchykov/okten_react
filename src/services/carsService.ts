import { urls } from "../constants"
import { IRes, instanseCarsaxios } from "./apiCarsService"
import { ICar, IPagination } from "../intefaces"

const carsEndpoints = {
    cars: urls.cars.base,
    byId: (id: number): string => urls.cars.byId(id),
    photo: (id: number): string => urls.cars.photo(id),
    
}

export const carsService = {
    getAll: (page: number, size: number):IRes<IPagination<ICar>> => instanseCarsaxios.get(carsEndpoints.cars, {params: {page, page_size: size}}),
    create: (data: ICar): IRes<ICar> => instanseCarsaxios.post(carsEndpoints.cars, data),
    update: (id: number, data: ICar) => instanseCarsaxios.put<ICar>(carsEndpoints.byId(id), data),
    deleteById: (id:number): IRes<void> => instanseCarsaxios.delete(carsEndpoints.byId(id)),
    addPhoto:(id:number, data:FormData):IRes<ICar> => instanseCarsaxios.put(carsEndpoints.photo(id), data)
}