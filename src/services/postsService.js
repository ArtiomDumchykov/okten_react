import { urls } from "../constans";
import { instanceAxiosJsonPL } from "./apiServiceJsonPlaceholder";

const postsEnpoints = {
    posts: urls.jsonPL.posts,
    postsId: (id) => urls.jsonPL.posts + `/${id}`
}

export const postsService = {
    getAll_Posts: () => instanceAxiosJsonPL.get(postsEnpoints.posts),
    getPostsId: (id) => instanceAxiosJsonPL.get(postsEnpoints.postsId(id))
}