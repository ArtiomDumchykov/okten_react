import { carsActionsTypes } from "../types"

const initialState = {
    cars: [],
    carForUpdate: null,
    isLoading: false,
    error: null,
}

export const carsReduser = (state = initialState, action) => {
    switch (action.type) {
        case carsActionsTypes.SET_CARS:
            return {
                ...state,
                cars: action.payload,
                isLoading: false,
            }
        case carsActionsTypes.SET_CAR_FOR_UPDATE:
            return {
                ...state,
                carForUpdate: action.payload,
                isLoading: false,
            }
        case carsActionsTypes.SET_ISLOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case carsActionsTypes.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}