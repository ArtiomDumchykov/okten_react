import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { rickmortyService } from "../../services"
import { progressActions } from "./progressSlice"

const initialState = {
    episodes: [],
    pages: 0,
    current: null,
    error: null,
}

const getAll = createAsyncThunk(
    "episodesSlice/getAll",
    async({page}, thunkAPI) => {
        try {
            thunkAPI.dispatch(progressActions.setIsLoading(true))

            await new Promise((resolve, reject) => setTimeout(resolve), 20000)  
            const { data } = await rickmortyService.getEpisodes(page)
            return data

          
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        } finally {
            thunkAPI.dispatch(progressActions.setIsLoading(false))
        }
    }
)

const slice = createSlice({
    name: "episodesSlice",
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload
        }
    },
    extraReducers: (builder) => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {info: {pages}, results} = action.payload
            state.pages = pages;
            state.episodes = results;
            state.current = null;
        })
})

const {reducer: episodesReduser, actions} = slice

const episodesActions = {
    ...actions,
    getAll

}

export {
    episodesReduser,
    episodesActions
}