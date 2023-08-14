import { episodesActionsTypes } from "../types"

const initialState = {
    prevPage: null,
    nextPage: null,
    episodes: [],
    isLoading: false,
    error: null,
}

export const episodesReducer = (state = initialState, action) => {
    switch(action.type) {
        case episodesActionsTypes.SET_EPISODES: 
            const episodes = action.payload.results.map(item => ({
                ...item,
                characters: item.characters.map(character => character.split('/').slice(-1)[0]).join(',')
            }))
        return {
            ...state,
            prevPage: action.payload.info?.prev,
            nextPage: action.payload.info?.next,
            episodes,
            isLoading: false
        }
        case episodesActionsTypes.SET_ISLOADING: 
            return {
                ...state,
                isLoading: action.payload
            }
         case episodesActionsTypes.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: 
        return state
    }
}