import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom"

import { episodesActions } from "../redux";

export const useEpisodes = () => {
    const [query, setQuery] = useSearchParams({page: "1"});

    const dispatch = useDispatch();

    const { episodes } = useSelector(store => store.episodes);

    useEffect(() => {
        dispatch(episodesActions.getEpisodes(query.get("page")));
        setQuery(prev => ({...prev, page: prev.get('page')}));
    }, [query, dispatch])

    return {
        episodes
    }
}