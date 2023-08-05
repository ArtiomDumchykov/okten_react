import { urls } from "../constans";
import { instanceAxiosJsonPL } from "./apiServiceJsonPlaceholder";

const commentsEnpoints = {
    comments: urls.comments,
    commentsId: (id) => urls.comments + `/${id}`
}

export const commentsService = {
    getAll_Comments: () => instanceAxiosJsonPL.get(commentsEnpoints.comments),
    getCommentsId: (id) => instanceAxiosJsonPL.get(commentsEnpoints.commentsId(id))
}