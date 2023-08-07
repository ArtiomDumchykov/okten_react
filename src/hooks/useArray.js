import { useState } from "react"

export const useArray = (defaultValue) => {
    const [data, setData] = useState(!!Array.isArray(defaultValue) ?  defaultValue : []);


    const add = (item) => {
        console.log(item);
        setData(prev => [item, ...prev])
    }

    const remove = (id) => {
        const filter = data.filter(item => item.id !== id );
        setData(filter)
    }

    return {
        data, setData,
        add, remove
    }
}
