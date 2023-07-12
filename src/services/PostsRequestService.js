import { RequestServer } from "./request.service.js";

export class PostsRequestService extends RequestServer {
    #posts = "posts"
    constructor() {
        super()
        if (typeof PostsRequestService.instance === "object") {
            return PostsRequestService.instance
        }
        PostsRequestService.instance = this
    }
    
    get posts() {
        return this.#posts
    }

    #createUrl(url) {
        return RequestServer.getURL(url)
    }

    #getData(url) {
        return RequestServer.getAxiosData(url)
    }

    getPosts() {
        const url = this.#createUrl(this.posts)
        return this.#getData(url)
    }

    getPost(postId) {
        const url = this.#createUrl(this.posts)
        return this.#getData(`${url}/${postId}`)
    }
}