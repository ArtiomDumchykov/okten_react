import axios from "axios";

import { utilsURLS } from "../constans";

export class RequestServer {
    static urls = utilsURLS;

    constructor() {
        if (new.target === RequestServer) {
            throw new Error('RequestServer  cannot be directly instantiated')
        }

        // if (this instanceof RequestServer) {
        //     throw new Error('RequestServer  cannot be directly instantiated')
        // }
    }

    static async getAxiosData(url, method = "get") {
        try {
            const response = await axios[method](url);
            return response
        } catch (error) {
            console.log(error)
        }
    }

    static getURL(urlKey) {
        const urlFunction = RequestServer.urls[urlKey + "URL"]

        if (typeof urlFunction === "function") {
            return urlFunction.call(RequestServer.urls);
        }

        throw new Error(`Invalid URL key: ${urlKey}`);
    }

    #createUrl() {
        throw new Error("Create base URL")
    }

    #getData() {
        throw new Error("Create data")
    }
}

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
export class LaunchesRequestService extends RequestServer {
    #launches = "launches"
    constructor() {
        super()
        if (typeof LaunchesRequestService.instance === "object") {
            return LaunchesRequestService.instance
        }
        LaunchesRequestService.instance = this
    }
    get launches() {
        return this.#launches
    }

    #createUrl(url) {
        return RequestServer.getURL(url)
    }

    #getData(url) {
        return RequestServer.getAxiosData(url)
    }

    getLaunches(paginationParams) {
        let url = this.#createUrl(this.launches)

        if (!!paginationParams) {
            url += paginationParams
        }

        return this.#getData(url)
    }

}


