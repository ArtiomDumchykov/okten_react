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
}

export class PostsRequestService extends RequestServer {
    constructor() {
        super()
        if (typeof PostsRequestService.instance === "object") {
            return PostsRequestService.instance
        }
        PostsRequestService.instance = this
    }

    getPosts() {
        const url = RequestServer.getURL("posts")
        return RequestServer.getAxiosData(url)
    }

    getPost(postId) {
        const url = RequestServer.getURL("posts");
        return RequestServer.getAxiosData(`${url}/${postId}`)
    }
}
