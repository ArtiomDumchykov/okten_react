import { urls } from '../constans'; 
import { instanceAxios } from './axiosService';

const movieService = {
  getAll: (params) => instanceAxios.get(urls.movie.base, { params: { ...params } }),
  getById: (id) => instanceAxios.get(urls.movie.byId(id)),
  search: (query) => instanceAxios.get(urls.search.base, { params: { query } }),
};

export { movieService };
