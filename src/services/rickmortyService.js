import { instanseAxiosRickMorty } from "./apiRickMortyService";
import { urls } from "../constans";

const rickmortyEndpoints = {
    episodes: urls.rickmorty.episodes,
    characters: {
        byId: (id) => urls.rickmorty.characters.byId(id)
    }
}


export const rickmortyService = {
    getEpisodes: (page) => instanseAxiosRickMorty.get(rickmortyEndpoints.episodes, {params: {page}}),
    getCharacter: (id) => instanseAxiosRickMorty.get(rickmortyEndpoints.characters.byId(id))
}