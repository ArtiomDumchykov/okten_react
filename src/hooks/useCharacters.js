import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { charactersActions } from "../reduxTK";

export const useCharacters = () => {
    const { state: { ids } } = useLocation();
    const dispatch = useDispatch();

    const { characters } = useSelector(store => store.characters);

    useEffect(() => {
        dispatch(charactersActions.getById({ids}));
    }, [ids, dispatch])
    

    return {
        characters
    }
}