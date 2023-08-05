import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postsService } from "../services";

export const usePost = () => {
    const [post, setPost] = useState(null);
    const {postId} = useParams();

    useEffect(() => {
        (async () => {
            try {
                const {data} = await postsService.getPostsId(postId);
                setPost(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [postId])

    return {
        post, setPost,
        postId
    }
}