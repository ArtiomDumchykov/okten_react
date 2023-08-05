// export const BASE_URLS = {
//     cars_url: 'http://owu.linkpc.net/carsAPI/v1',
//     jsonplaceholder_url: "https://jsonplaceholder.typicode.com",
//     spacex_url: 'https://api.spacexdata.com/v3'
// } 

const baseURL = 'https://jsonplaceholder.typicode.com';

const todos = '/todos'
const albums = '/albums'
const comments = '/comments'
const posts = '/posts'

const urls = {
    todos,
    albums,
    comments,
    posts
}

export {
    baseURL,
    urls
}