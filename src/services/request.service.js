import { BASE_URLS } from '../constans/urls';

export class RequestService {

    baseURLS = BASE_URLS

    constructor() {
        if (new.target === RequestService) {
            throw new Error('RequestService  cannot be directly instantiated')
        }

        // if (this instanceof RequestServer) {
        //     throw new Error('RequestServer  cannot be directly instantiated')
        // }
    }


    // static instanceAxios = axios.create({baseURL})

    // static axiosRequest(config) {
    //     return RequestService.instanceAxios(config)
    // }

    axiosInstance() {
        throw new Error("Create instanse")
    }

    axiosRequest() {
        throw new Error("Create axios request")
    }
}