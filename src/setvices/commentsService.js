import { instanceAxios } from "./apiService";
import { urls } from "../constans";

const commentsEnpoints = {
    comments: urls.comments,
    commentsId: (id) => urls.comments + `/${id}`
}

export const commentsService = {
    getAll_Comments: () => instanceAxios.get(commentsEnpoints.comments),
    getCommentsId: (id) => instanceAxios.get(commentsEnpoints.commentsId(id))
}