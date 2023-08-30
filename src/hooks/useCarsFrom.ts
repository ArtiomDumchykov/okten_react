import { useAppDispatch, useAppSelector } from "./redux_Hooks"

export const useCarsFrom = () => {
  const {carForUpdate} = useAppSelector(store => store.cars)
  const dispatch = useAppDispatch()


  return {
    carForUpdate, dispatch
  }
}
