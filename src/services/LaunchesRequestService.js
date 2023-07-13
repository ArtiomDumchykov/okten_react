import { RequestServer } from "./request.service.js";

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