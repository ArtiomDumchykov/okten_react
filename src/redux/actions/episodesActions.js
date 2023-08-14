import { episodesActionsTypes } from "../types";
import { rickmortyService } from "../../services";

export const actionsEpisodes = {
    setEpisodes: (payload) => ({type: episodesActionsTypes.SET_EPISODES, payload}),
    setAddEpisodes: (payload) => ({type: episodesActionsTypes.SET_ADD_EPISODES, payload}),
    setEpisodesError: (payload) => ({type: episodesActionsTypes.SET_ERROR, payload}),
    setEpisodesIsLoading: (payload) => ({type: episodesActionsTypes.SET_ISLOADING, payload}),
}


const getEpisodes = (page) => async (dispatch) => {
    try {
        dispatch(actionsEpisodes.setEpisodesIsLoading(true))
        const {data} = await rickmortyService.getEpisodes(page);
        dispatch(actionsEpisodes.setEpisodes(data))
    } catch (error) {
        dispatch(actionsEpisodes.setEpisodesError("Something wrong!!!"))
    }
}

export const episodesActions = {
    getEpisodes,

}