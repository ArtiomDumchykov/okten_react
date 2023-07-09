import { useState, useEffect } from "react";
import { PostsRequestService } from "../services/request.service";

const postsRequestService = new PostsRequestService();

export const usePost = (id) => {
  const [isShow, setIsShow] = useState(false);
    const [postDetail, setPostDetail] = useState({})
    const [error, setError] = useState("")
  
    useEffect(() => {
      (async() => {
        try {
            const {data} = await postsRequestService.getPost(id)
            setPostDetail(data)
        } catch (error) {
          setError(error.message)
        }
      })()
    }, [id])

    return {
      postDetail, 
      setPostDetail,
      isShow,
      setIsShow,
      error,
      setError
    }
}
