import { urls } from '../constans'; 
import { instanceAxios } from './axiosService';

const movieService = {
  getAll: (params) => instanceAxios.get(urls.movie.base, { params: { ...params } }),
  getById: (id) => instanceAxios.get(urls.movie.byId(id)),
  getCredits: (id) => instanceAxios.get(urls.credits.base(id)),
  getMovieTrailer: (id) => instanceAxios.get(urls.videos.base(id)),
  getVideos: (id) => instanceAxios.get(urls.videos.base(id)),
  search: (query) => instanceAxios.get(urls.search.base, { params: { query } }),
  trendingDay: () => instanceAxios.get(urls.trending.day.base),
  trendingWeek: () => instanceAxios.get(urls.trending.week.base)
};

export { movieService };
