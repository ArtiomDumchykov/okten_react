import {useState, useEffect } from "react";
import { UsersRequestService } from "../services";

const usersRequestService = new UsersRequestService()

export const useGetUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("")

    useEffect(() => {
        (async() => {
            try {
                const {data} = await usersRequestService.getUsers();
                setUsers(data)
            } catch (error) {
                setError(error.message)
            }
        })()
    }, [])

    return {
        users, setUsers,
        error, setError
    }
}