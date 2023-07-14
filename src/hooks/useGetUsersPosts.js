import { useState, useEffect } from "react";

import { PostsRequestService } from "../services";

const postsRequestService = new PostsRequestService()

export const useGetUsersPosts = () => {
    const [usersPosts, setUsersPosts] = useState([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
        (async() => {
            try {
                const {data} = await postsRequestService.getPosts();
                setUsersPosts(data)

            } catch (error) {
                setError(error.message);
            }
        })()
    }, [])

    return {
        usersPosts, setUsersPosts,
        error, setError
    }
}