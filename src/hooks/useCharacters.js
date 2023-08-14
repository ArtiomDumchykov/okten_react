import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { charactersActions } from "../redux";

export const useCharacters = () => {
    const { state: { id } } = useLocation();

    const dispatch = useDispatch();

    const { characters } = useSelector(store => store.characters);

    useEffect(() => {
        dispatch(charactersActions.getCharacrets(id))
    }, [id, dispatch])
    

    return {
        characters
    }
}