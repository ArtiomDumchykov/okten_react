import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit"
import { carsService } from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    isLoading: null,
    errors: null,
}

const getCars = createAsyncThunk(
    'carsSlice/getCars',
    async (_, thunkAPI) => {
        try {

            const { data } = await carsService.getAll();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)    
        }
    });

const createCar = createAsyncThunk(
    'carsSlice/createCar',
    async ({car}, thunkAPI) => {
        try {

            await carsService.create(car);
            await thunkAPI.dispatch(getCars());
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    });

const updateCar = createAsyncThunk(
    'carsSlice/updateCar',
    async ({ id, car }, thunkAPI) => {
        try {

            await carsService.update(id, car);
            await thunkAPI.dispatch(getCars());
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    });

const deleteCar = createAsyncThunk(
    'carsSlice/deleteCar', 
    async ({id}, thunkAPI) => {
    try {
        await carsService.deleteById(id);
        await thunkAPI.dispatch(getCars());
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});




const slice = createSlice({
    name: "carsSlice",
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: (builder) => builder
        .addCase(getCars.fulfilled, (state, action) => {
            state.cars = action.payload
        })
        .addCase(createCar.fulfilled, (state, action) => {
        })
        .addCase(updateCar.fulfilled, (state, action) => {
            state.carForUpdate = action.payload
        })
        .addCase(deleteCar.fulfilled, (state, action) => {
        })
        .addMatcher(isPending(), state => {
            state.isLoading = true;
            state.errors = null;
        })
        .addMatcher(isFulfilled(), state => {
            state.isLoading = false;
            state.errors = null;
        })
        .addMatcher(isRejected(), (state, action) => {
            state.isLoading = false;
            state.errors = action.payload;
        })
        

})

const { reducer: carsReduser, actions } = slice

const carsActions = {
    ...actions,
    getCars,
    createCar,
    updateCar,
    deleteCar,
}

export {
    carsReduser,
    carsActions
}