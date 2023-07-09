import { useState, useEffect } from "react";
import { PostsRequestService } from "../services/request.service";

const postsRequestService = new PostsRequestService()

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("")

    useEffect(() => {
        (async() => {
            try {
                const {data} = await postsRequestService.getPosts()
                setPosts(data)
            } catch (error) {
                setError(error.message)
            }
        })()
    }, [])

    return {posts, setPosts, error, setError}
}