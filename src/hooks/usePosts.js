import { useEffect, useState } from "react"

export const usePosts = () => {
    const [posts, setPosts] = useState({ userName: null, userId: null, userPosts: [] })
    return {
        posts, setPosts
    }
}