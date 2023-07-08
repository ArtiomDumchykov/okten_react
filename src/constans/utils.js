const BASE_URL = "https://jsonplaceholder.typicode.com";

const POSTS = "posts";
const USERS = "users"


export const utilsURLS = {
    BASE_URL,
    postsURL() {
        
        return `${this.BASE_URL}/${POSTS}`
    },
    usersURL() {
        return `${this.BASE_URL}/${USERS}`
    }
}


