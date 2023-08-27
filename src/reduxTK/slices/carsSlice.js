import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [],
    carForUpdate: null,
    error: null,
}
const slice = createSlice({
    name: "carsSlice",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => builder
})

const {reducer: carsReduser, actions} = slice

const carsActions = {
    ...actions,

}

export {
    carsReduser,
    carsActions
}