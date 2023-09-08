import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux_Hooks";
import { carsActions } from "../reduxRTK/slices";
import { useSearchParams } from "react-router-dom";

export const useCars = () => {
    const dispatch = useAppDispatch()
    const {cars} = useAppSelector(state => state.cars)

    const [query, setQuery] = useSearchParams({page: "1", size: "10"})
    
    useEffect(() => {
        dispatch(carsActions.getAll({page: +query.get("page"), size: +query.get("size")}))
    }, [query.get("page"), query.get("size")])

   return {
    cars
   }
}
