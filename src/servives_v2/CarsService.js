import { RequestService } from "./request.service"
export class CarsService extends RequestService {

    static endpoints = {
        cars: "/cars",
        carsId(id) {return `/cars/${id}`}
    }
     constructor() {
        super()
        if (typeof CarsService.instance === "object") {
            return CarsService.instance
        }
        CarsService.instance = this
    }

    getAll() {
        const config = {
            url: CarsService.endpoints.cars,
            method: "get",
            headers: {'content-type': 'application/json'},
        }
        return RequestService.axiosRequest(config)
    }

    getCarsId(id) {
        const config = {
            url: CarsService.endpoints.carsId(id),
            method: "get",
            headers: {'content-type': 'application/json'},
        }
        return RequestService.axiosRequest(config)
    }

    createCar(data) {
        const config = {
            url: CarsService.endpoints.cars,
            method: "post",
            headers: {'content-type': 'application/json'},
            data
        }
        return RequestService.axiosRequest(config)
    }

    deleteCar(id) {
        const config = {
            url: CarsService.endpoints.carsId(id),
            method: "delete",
            headers: {'content-type': 'application/json'},
        }
        return RequestService.axiosRequest(config)
    }
    
    updateCar(id, data) {
        const config = {
            url: CarsService.endpoints.carsId(id),
            method: "put",
            headers: {'content-type': 'application/json'},
            data
        }
        return RequestService.axiosRequest(config)
    }
}