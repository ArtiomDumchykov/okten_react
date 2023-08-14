import { charactersActionsTypes } from "../types";
import { rickmortyService } from "../../services";

export const actionsCharacters = {
    setCharacters: (payload) => ({type: charactersActionsTypes.SET_CHARACTERS, payload}),
    setCharactersError: (payload) => ({type: charactersActionsTypes.SET_ERROR, payload}),
    setCharactersIsLoading: (payload) => ({type: charactersActionsTypes.SET_ISLOADING, payload}),
}

const getCharacrets = (id) => async (dispatch) => {
    try {
        dispatch(actionsCharacters.setCharactersIsLoading(true))
        const { data } = await rickmortyService.getCharacter(id);
        dispatch(actionsCharacters.setCharacters(data))
    } catch (error) {
        dispatch(actionsCharacters.setCharactersError("Something wrong!!!"))
    }
}

export const charactersActions = {
    getCharacrets,
}