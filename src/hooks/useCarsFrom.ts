import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux_Hooks"

export const useCarsFrom = () => {
    const [, setQuery] = useSearchParams();
    const { carForUpdate, total_items, currentSize } = useAppSelector(store => store.cars)
    const dispatch = useAppDispatch()

    return {
        carForUpdate, dispatch,
        total_items, currentSize,
        setQuery,
    }
}
