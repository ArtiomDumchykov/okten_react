import { useEffect, useState } from "react";

import { CarsService } from '../services'

const carsService = new CarsService()

export const useCars = (addCar) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await carsService.getAll()
                setCars(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [addCar])

    return {
        cars, setCars
    }
}