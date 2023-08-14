import { charactersActionsTypes } from "../types"

const initialState = {
    characters: [],
    isLoading: false,
    error: null,
}

export const charactersReducer = (state = initialState, action) => {
    switch(action.type) {
        case charactersActionsTypes.SET_CHARACTERS: 
            return {
                ...state, 
                characters: action.payload,
                isLoading: false,
                error: null
            }
        case charactersActionsTypes.SET_ISLOADING: 
            return {
                ...state,
                isLoading: action.payload
            }
        case charactersActionsTypes.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: 
        return state
    }
}