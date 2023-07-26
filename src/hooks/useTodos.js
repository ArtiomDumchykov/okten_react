import { useEffect, useState } from "react"
import { todosService } from "../setvices";

export const useTodos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const {data} = await todosService.getAll_Todos()
                setTodos(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return {
        todos, setTodos
    }
} 