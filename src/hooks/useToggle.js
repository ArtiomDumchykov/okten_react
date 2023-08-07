import { useCallback, useState } from 'react'

export const useToggle = (defaultValue = false) => {
    const [toggle, setToggle] = useState(defaultValue)

    const handleToggle = () => setToggle(prev => !prev)

        return {
            toggle, setToggle,
            handleToggle,
        }
    }
