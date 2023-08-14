import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { carsActions } from "../redux";

export const useCars = () => {
    const dispatch = useDispatch();

    const {cars} = useSelector(store => store.cars);

    useEffect(() => {
        dispatch(carsActions.getCars());
    }, [dispatch])

    return {
        cars
    }
}