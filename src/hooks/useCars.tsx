import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux_Hooks";
import { carsActions } from "../reduxRTK/slices";



export const useCars = () => {
    const dispatch = useAppDispatch()
    const {cars} = useAppSelector(state => state.cars)
    
    useEffect(() => {
        dispatch(carsActions.getAll())
    }, [dispatch])

   return {
    cars
   }
}
