import { RequestServer } from "./request.service.js";

export class UsersRequestService extends RequestServer {
    #users = "users"
    constructor() {
        super()
        if (typeof UsersRequestService.instance === "object") {
            return UsersRequestService.instance;
        }
        UsersRequestService.instance = this;
    }
    
    get users() {
        return this.#users;
    }

    #createUrl(url) {
        return RequestServer.getURL(url);
    }

    #getData(url) {
        return RequestServer.getAxiosData(url);
    }

    getUsers() {
        let url = this.#createUrl(this.users);
        return this.#getData(url);
    }

    getUserPosts(userId) {
        const url = this.#createUrl(this.users) + `/${userId}/posts`;
        return this.#getData(url)
    }
}