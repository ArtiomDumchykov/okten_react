const BASE_URL = "https://jsonplaceholder.typicode.com";
const BASE_URL_SPACEX = 'https://api.spacexdata.com/v3';
const POSTS = "posts";
const USERS = "users"
const LAUNCHES = "launches"


export const utilsURLS = {
    BASE_URL,
    BASE_URL_SPACEX,
    postsURL() {
        return `${this.BASE_URL}/${POSTS}`
    },
    launchesURL() {
        return `${this.BASE_URL_SPACEX}/${LAUNCHES}`
    },
    usersURL() {
        return `${this.BASE_URL}/${USERS}`
    }
}


