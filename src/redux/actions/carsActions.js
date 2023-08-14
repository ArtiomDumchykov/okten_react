import { carsService } from "../../services";
import { carsActionsTypes } from "../types";

export const actionsCars = {
    setCars: (payload) => ({type: carsActionsTypes.SET_CARS, payload}),
    setCarForUpdate: (payload) => ({type: carsActionsTypes.SET_CAR_FOR_UPDATE, payload}),
    setCarsError: (payload) => ({type: carsActionsTypes.SET_ERROR, payload}),
    setCarsIsLoading: (payload) => ({type: carsActionsTypes.SET_ISLOADING, payload}),

}


const getCars = () => async (dispatch) => {
    try {
        dispatch(actionsCars.setCarsIsLoading(true))
        const {data} = await carsService.getAll();
        dispatch(actionsCars.setCars(data))
    } catch (error) {
        dispatch(actionsCars.setCarsError("Something wrong!!!"))
    }
}
const createCar = (car) => async (dispatch) => {
    try {
        dispatch(actionsCars.setCarsIsLoading(true))
        await carsService.create(car);
        await dispatch(getCars());
    } catch (error) {
        dispatch(actionsCars.setCarsError("Something wrong!!!"))
    }
}
const updateCar = (id, car) => async (dispatch) => {
    try {
        dispatch(actionsCars.setCarsIsLoading(true))
        await carsService.update(id, car)
        dispatch(actionsCars.setCarForUpdate(null))
        await dispatch(getCars());
    } catch (error) {
        dispatch(actionsCars.setCarsError("Something wrong!!!"))
    }
}
const deleteCars = (id) => async (dispatch) => {
    try {
        dispatch(actionsCars.setCarsIsLoading(true))
        await carsService.deleteById(id);
        await dispatch(getCars());
    } catch (error) {
        dispatch(actionsCars.setCarsError("Something wrong!!!"))
    }
}


export const carsActions = {
    getCars,
    createCar,
    updateCar,
    deleteCars,
    setCarForUpdate: actionsCars.setCarForUpdate
}
