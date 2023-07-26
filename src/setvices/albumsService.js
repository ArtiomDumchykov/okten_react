import { instanceAxios } from "./apiService";
import { urls } from "../constans";

const albumsEnpoints = {
    albums: urls.albums,
    albumsId: (id) => urls.albums + `/${id}`
}

export const albumsService = {
    getAll_Albums: () => instanceAxios.get(albumsEnpoints.albums),
    getAlbumsId: (id) => instanceAxios.get(albumsEnpoints.albumsId(id))
}