const baseURL = 'https://api.themoviedb.org/3/';
const posterUrl = 'https://image.tmdb.org/t/p/original/';
const youTube = 'https://www.youtube.com/embed/';

const discover = '/discover';
const movies = '/movies';
const movie = '/movie';
const favorite = '/favorite';
const genre = '/genre';
const search = '/search';
const list = '/list';
const credits = '/credits';
const videos = '/videos';
const account = '/account';

const trending = '/trending'
const day = '/day'
const week = '/week'

const notFoundPoster = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';

const urls = {
    movie: {
        base: `${discover}${movie}`,
        byId: (id) => `${movie}/${id}`,
    },
    genre: { base: `${genre}${movie}${list}` },
    posterUrl: { base: posterUrl },
    credits: { base: (id) => `${movie}/${id}${credits}` },
    videos: { base: (id) => `${movie}/${id}${videos}` },
    youTube: { base: youTube },
    search: { base: `${search}${movie}` },
    postFavorite: { base: (id) => `${account}/${id}${favorite}` },
    getFavorite: { base: (id) => `${account}/${id}${favorite}${movies}` },
    notFoundPoster: { base: notFoundPoster },
    trending: {
        day: {base: `${trending}${movie}${day}`},
        week: {base: `${trending}${movie}${week}`}
    }
};

export { urls, baseURL };
