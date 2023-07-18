import axios from "axios";

import { RequestService } from "./request.service"

import { BASE_URLS } from "../constans/urls";

const baseURL = BASE_URLS.cars_url;
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


   axiosInstance() {
    return axios.create({baseURL})
   }


   axiosRequest(config) {
        return this.axiosInstance(config)
   }

    getAll() {
        const config = {
            url: CarsService.endpoints.cars,
            method: "get",
            headers: {'content-type': 'application/json'},
        }
        return this.axiosRequest(config)
    }

    getCarsId(id) {
        const config = {
            url: CarsService.endpoints.carsId(id),
            method: "get",
            headers: {'content-type': 'application/json'},
        }
        return this.axiosRequest(config)
    }

    createCar(data) {
        const config = {
            url: CarsService.endpoints.cars,
            method: "post",
            headers: {'content-type': 'application/json'},
            data
        }
        return this.axiosRequest(config)
    }

    deleteCar(id) {
        const config = {
            url: CarsService.endpoints.carsId(id),
            method: "delete",
            headers: {'content-type': 'application/json'},
        }
        return this.axiosRequest(config)
    }
    
    updateCar(id, data) {
        const config = {
            url: CarsService.endpoints.carsId(id),
            method: "put",
            headers: {'content-type': 'application/json'},
            data
        }
        return this.axiosRequest(config)
    }
}