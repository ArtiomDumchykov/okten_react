import { useState, useEffect } from "react";
import { UsersRequestService } from "../services";

const usersRequestService = new UsersRequestService();

export const useUserPosts = (userId) => {
    const [userPosts, setUserPosts] = useState([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
        (async() => {
            try {
                const {data} = await usersRequestService.getUserPosts(userId)
                setUserPosts(data);
            } catch (error) {
                setError(error.message);
            }
            
        })()
    }, [userId]);

    return {
        userPosts, setUserPosts,
        error, setError
    }
}