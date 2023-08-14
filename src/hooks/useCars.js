import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carsActions } from "../redux";

export const useCars = (addCar) => {
    const dispatch = useDispatch();

    const {cars} = useSelector(store => store.cars);

    useEffect(() => {
        dispatch(carsActions.getCars())
    }, [addCar, dispatch])

    return {
        cars
    }
}