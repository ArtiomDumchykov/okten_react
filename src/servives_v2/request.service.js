import axios from 'axios';

import { BASE_URLS } from '../constans/urls';

const baseURL = BASE_URLS.jsonplaceholder_url;
// const baseURL = BASE_URLS.spacex_url;
// const baseURL = BASE_URLS.cars_url;
export class RequestService {
    constructor() {
        if (new.target === RequestService) {
            throw new Error('RequestService  cannot be directly instantiated')
        }

        // if (this instanceof RequestServer) {
        //     throw new Error('RequestServer  cannot be directly instantiated')
        // }
    }
    static instanceAxios = axios.create({baseURL})

    static axiosRequest(config) {
        return RequestService.instanceAxios(config)
    }
}