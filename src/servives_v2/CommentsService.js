import { RequestService } from "./request.service"
export class CommentsService extends RequestService {

    static endpoints = {
        comments: "/comments",
        commentsId(id) {return `/comments/${id}`}
    }
     constructor() {
        super()
        if (typeof CommentsService.instance === "object") {
            return CommentsService.instance
        }
        CommentsService.instance = this
    }

    getAll() {
        const config = {
            url: CommentsService.endpoints.comments,
            method: "get",
            headers: {'content-type': 'application/json'},
        }
        return RequestService.axiosRequest(config)
    }

    getCommentsId(id) {
        const config = {
            url: CommentsService.endpoints.commentsId(id),
            method: "get",
            headers: {'content-type': 'application/json'},
        }
        return RequestService.axiosRequest(config)
    }

    createComments(data) {
        const config = {
            url: CommentsService.endpoints.comments,
            method: "post",
            headers: {'content-type': 'application/json'},
            data
        }
        return RequestService.axiosRequest(config)
    }

    deleteComments(id) {
        const config = {
            url: CommentsService.endpoints.commentsId(id),
            method: "delete",
            headers: {'content-type': 'application/json'},
        }
        return RequestService.axiosRequest(config)
    }
    
    updateComments(id, data) {
        const config = {
            url: CommentsService.endpoints.commentsId(id),
            method: "put",
            headers: {'content-type': 'application/json'},
            data
        }
        return RequestService.axiosRequest(config)
    }
}