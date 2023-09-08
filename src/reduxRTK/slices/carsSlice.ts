import { AxiosError } from "axios";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ICar, IPagination } from "../../intefaces";
import { carsService } from "../../services";
import { RootState } from "../store";
interface IState  {
    cars: ICar[],
    carForUpdate: ICar | null;
    total_items: number
    currentPage: number
    currentSize: number
}

const initialState: IState = {
    cars: [],
    carForUpdate: null,
    total_items: null,
    currentPage: null,
    currentSize: null,
}

const getAll = createAsyncThunk<{ data: IPagination<ICar>, page: number, size: number }, {page: number,size: number}>(
    'carsSlise/getAll',
    async ({page, size}, {rejectWithValue}) => {
        try {
            const {data} = await carsService.getAll(page, size);
            return {data, page, size}
        } catch (error) {
            const err = error as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const create = createAsyncThunk<void, {car: ICar}>(
        "carsSlise/create",
        async({car}, { rejectWithValue}) => {
            try {
                await carsService.create(car)

            } catch (error) {
                const err = error as AxiosError
                return rejectWithValue(err.response.data)
            }
        }
)

const update = createAsyncThunk<ICar, {id: number, car: ICar}>(
    "carsSlise/update", 
    async({id, car}, { rejectWithValue}) => {
        try {
            const {data} = await carsService.update(id, car);
            return data
        } catch (error) {
            const err = error as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const deleteCar = createAsyncThunk<void, {id: number}>(
    "carsSlise/deleteCar",
    async ({id}, {dispatch, getState, rejectWithValue,}) => {
        try {
            await carsService.deleteById(id);
            const {cars: {currentPage, currentSize}} = getState() as RootState
            console.log("getState", getState())
            dispatch(getAll({page: currentPage, size: currentSize}))
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
            state.cars = action.payload.data.items
            state.total_items = action.payload.data.total_items
            state.currentPage = action.payload.page
            state.currentSize = action.payload.size
        })
        .addCase(update.fulfilled, (state, action) => {
            state.carForUpdate = null
            const updatedCar = action.payload;
            const find = state.cars.find(car => car.id === updatedCar.id)
            Object.assign(find, updatedCar)
        })
        .addCase(create.fulfilled, state => {
            state.total_items += 1
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