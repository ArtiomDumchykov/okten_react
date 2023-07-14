import { useState } from "react"

export const useFilter = () => {
    const [posts, setPosts] = useState({ userName: null, userId: null, userPosts: [] })


    return {
        posts, setPosts
    }
}