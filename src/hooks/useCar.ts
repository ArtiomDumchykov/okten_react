import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useAppDispatch } from "./redux_Hooks"

export const useCar = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const fileInputRef = useRef<HTMLInputElement>()
    const [image, setImage] = useState<string>(null)

    return {
        navigate, dispatch, 
        fileInputRef, 
        image, setImage,
    }
}