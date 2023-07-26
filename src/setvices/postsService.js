import { instanceAxios } from "./apiService";
import { urls } from "../constans";

const postsEnpoints = {
    posts: urls.posts,
    postsId: (id) => urls.posts + `/${id}`
}

export const postsService = {
    getAll_Posts: () => instanceAxios.get(postsEnpoints.posts),
    getPostsId: (id) => instanceAxios.get(postsEnpoints.postsId(id))
}