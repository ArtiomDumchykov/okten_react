import { configureStore } from "@reduxjs/toolkit";
import { carsReduser, charactersReduser, episodesReduser, errorsReducer, progressReducer } from "./slices";

const store = configureStore({
    reducer: {
        cars: carsReduser,
        episodes: episodesReduser,
        characters: charactersReduser,
        progress: progressReducer,
        errors: errorsReducer,
    }
})

export {
    store
}