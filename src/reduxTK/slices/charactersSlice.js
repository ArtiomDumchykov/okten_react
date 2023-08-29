import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { progressActions } from "./progressSlice"
import { rickmortyService } from "../../services"

const initialState = {
    characters: [],
    error: null,
}

const getById = createAsyncThunk(
    "charactersSlice/getById",
    async({ids}, thunkAPI) => {
        try {
            thunkAPI.dispatch(progressActions.setIsLoading(true))
              const { data } = await rickmortyService.getCharacter(ids);
              return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.message)
        } finally {
            thunkAPI.dispatch(progressActions.setIsLoading(false))
        }
    }
)


const slice = createSlice({
    name: "charactersSlice",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => builder
        .addCase(getById.fulfilled, (state, action) => {
            state.characters = action.payload
        })
})


const {reducer: charactersReduser, actions} = slice

const charactersActions = {
    ...actions,
    getById,

}

export {
    charactersReduser,
    charactersActions
}