import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
// import {logger} from "redux-logger/src";

import { charactersReducer, episodesReducer, carsReduser } from "../redusers";

const rootReducer = combineReducers({
    episodes: episodesReducer,
    characters: charactersReducer,
    cars: carsReduser
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
    // applyMiddleware(thunk, logger),
)