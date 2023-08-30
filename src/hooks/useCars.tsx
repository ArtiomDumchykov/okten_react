import { useEffect, useState } from "react";

import { ICar } from "../intefaces";
import { AxiosError } from "axios";
import { carsService } from "../services";

export const useCars = (triggerCar: boolean) => {
    const [cars, setCars] = useState<ICar[]>([]); 

    useEffect(() => {
        (async() => {
            try {
                const { data } = await carsService.getAll();
                setCars(data);
            } catch (error) {
                const err = error as AxiosError
               console.log(err.response.data)
            }
        })()
    }, [triggerCar])

    return {
        cars, setCars
    }
}
