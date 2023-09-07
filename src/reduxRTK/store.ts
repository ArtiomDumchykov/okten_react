import {configureStore} from '@reduxjs/toolkit'
import { authReducer, carsReducer } from './slices';


const store = configureStore({
    reducer: {
        cars: carsReducer,
        auth: authReducer,
    }
})


type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch;

export type {
    RootState,
    AppDispatch
}

export {
    store
}