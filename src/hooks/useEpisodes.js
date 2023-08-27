import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom"

import { episodesActions } from "../reduxTK";

export const useEpisodes = () => {
    const [query, setQuery] = useSearchParams({page: "1"});

    const dispatch = useDispatch();

    const { episodes } = useSelector(store => store.episodes);

    const page = query.get("page"); 

    useEffect(() => {
        dispatch(episodesActions.getAll({page}));
        setQuery(prev => ({...prev, page: prev.get('page')}));
    }, [page])

    return {
        episodes
    }
}