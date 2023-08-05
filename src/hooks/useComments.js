import { useEffect, useState } from "react";
import { commentsService } from "../services";

export const useComments = () => {
    const [comments, setcomments] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const {data} = await commentsService.getAll_Comments()
                setcomments(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return {
        comments, setcomments
    }
}