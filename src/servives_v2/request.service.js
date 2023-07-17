import axios from 'axios';

import { BASE_URLS } from '../constans/urls';

const baseURL = BASE_URLS.cars_url;
const axiosService = axios.create({baseURL})

export class RequestService {
    constructor() {
        if (new.target === RequestService) {
            throw new Error('RequestService  cannot be directly instantiated')
        }

        // if (this instanceof RequestServer) {
        //     throw new Error('RequestServer  cannot be directly instantiated')
        // }
    }
    static axiosRequest(config) {
        return axiosService(config)
    }
}