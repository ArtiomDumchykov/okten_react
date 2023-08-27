import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isError: false,
    errorMessages: [],
}

const slice = createSlice({
    name: "errorsSlice",
    initialState,
    reducers: {
        setIsError: (state, action) => {
            state.isError = action.payload
        }
    },
})


const { reducer: errorsReducer, actions: errorsActions} = slice

export {
    errorsReducer,
    errorsActions,
}