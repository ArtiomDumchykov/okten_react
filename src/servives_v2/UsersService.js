import { RequestService } from "./request.service";
export class UsersService extends RequestService {

    static endpoints = {
        users: "/users",
        userId(id) {return `/users/${id}`}
    }
     constructor() {
        super()
        if (typeof UsersService.instance === "object") {
            return UsersService.instance
        }
        UsersService.instance = this;
    }

    getAll() {
        const config = {
            url: UsersService.endpoints.users,
            method: "get",
            headers: {'content-type': 'application/json'},
        }
        return RequestService.axiosRequest(config)
    }

    getUserId(id) {
        const config = {
            url: UsersService.endpoints.userId(id),
            method: "get",
            headers: {'content-type': 'application/json'},
        }
        return RequestService.axiosRequest(config)
    }

    createUser(data) {
        const config = {
            url: UsersService.endpoints.users,
            method: "post",
            headers: {'content-type': 'application/json'},
            data
        }
        return RequestService.axiosRequest(config)
    }

    deleteUser(id) {
        const config = {
            url: UsersService.endpoints.userId(id),
            method: "delete",
            headers: {'content-type': 'application/json'},
        }
        return RequestService.axiosRequest(config)
    }
    
    updateUser(id, data) {
        const config = {
            url: UsersService.endpoints.userId(id),
            method: "put",
            headers: {'content-type': 'application/json'},
            data
        }
        return RequestService.axiosRequest(config)
    }
}