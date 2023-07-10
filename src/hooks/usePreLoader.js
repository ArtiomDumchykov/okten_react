import { useState, useEffect } from "react"
import { delay } from "../utils"

export const usePreLoader = (data) => {
    const [preLoader, setPreLoader] = useState(true)

	useEffect(() => {
		delay(1200, () => {setPreLoader(false)})
	}, [data])

    return {preLoader, setPreLoader}
}