import { AxiosError } from "axios";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ICar, IPagination } from "../../intefaces";
import { carsService } from "../../services";
interface IState  {
    cars: ICar[],
    carForUpdate: ICar | null;
}

const initialState: IState = {
    cars: [],
    carForUpdate: null,

}

const getAll = createAsyncThunk<IPagination<ICar>, void>(
    'carsSlise/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carsService.getAll();
            return data
        } catch (error) {
            const err = error as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const create = createAsyncThunk<void, {car: ICar}>(
        "carsSlise/create",
        async({car}, {dispatch, rejectWithValue}) => {
            try {
                await carsService.create(car)
                dispatch(getAll())
            } catch (error) {
                const err = error as AxiosError
                return rejectWithValue(err.response.data)
            }
        }
)

const update = createAsyncThunk<void, {id: number, car: ICar}>(
    "carsSlise/update", 
    async({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carsService.update(id, car);
            dispatch(getAll())
        } catch (error) {
            const err = error as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const deleteCar = createAsyncThunk<void, {id: number}>(
    "carsSlise/deleteCar",
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carsService.deleteById(id);
            dispatch(getAll())
        } catch (error) {
            const err = error as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
    name: "carsSlise",
    initialState,
    reducers: {
        setCarForUpdate: (state, action: PayloadAction<{car: ICar}>) => {
            state.carForUpdate = action.payload.car
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload.items
        })
        .addCase(update.fulfilled, state => {
            state.carForUpdate = null
        })
})


const {reducer: carsReducer, actions} = slice;

const carsActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar,
}

export {
    carsReducer,
    carsActions,
}