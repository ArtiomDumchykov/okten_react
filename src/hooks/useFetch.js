import { useEffect, useState } from "react"
import { instanceAxiosJsonPL } from "../services/apiServiceJsonPlaceholder"

export const useFetch = (endpoint ) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    
    useEffect(() => {
       (async() => {
         try {
            const  response = await instanceAxiosJsonPL.get(endpoint);
            setData(response?.data)
        } catch (error) {
            console.log(error);
            setError(error)
        }
       })()
    }, [endpoint])

    return {
        data, setData,
        error, setError
    }
}
