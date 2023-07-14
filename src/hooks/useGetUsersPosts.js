import { useState, useEffect } from "react";

import { PostsRequestService } from "../services";

const postsRequestService = new PostsRequestService()

export const useGetUsersPosts = () => {
    const [posts, setPosts] = useState({ userName: null, userId: null, userPosts: null })

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
        posts, setPosts,
        usersPosts, setUsersPosts,
        error, setError
    }
}