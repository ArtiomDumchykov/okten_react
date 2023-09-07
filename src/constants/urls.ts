// const owuBaseURl = 'http://owu.linkpc.net/carsAPI/v1';
const owuBaseURl = 'http://owu.linkpc.net/carsAPI/v2';

const cars = '/cars';

const auth = "/auth";
const users = "/users"

const urls = {
    cars: {
        base: cars,
        byId: (id: number): string => `${cars}/${id}`,
    },
    auth: {
        login: auth,
        refresh: `${auth}/refresh`,
        register: users,
        me: `${auth}/me`
    }
}

export {
    owuBaseURl,
    urls
}