import { urls } from "../constans";
import { instanceAxios } from "./axiosService";

export const creaditService = {
    getAll: (id) => instanceAxios.get(urls.credits.base(id))
}