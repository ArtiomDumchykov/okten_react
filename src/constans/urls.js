
const rickmortyURL = "https://rickandmortyapi.com/api";
const owuBaseURl = 'http://owu.linkpc.net/carsAPI/v1';

const episodes = '/episode';
const characters = '/character';

const cars = '/cars';

const urls = {
    rickmorty: {
        episodes,
        characters: {
            byId: (id) => `${characters}/${id}`
        } 
    },
    cars: {
        base: cars,
        byId: (id) => `${cars}/${id}`
    }
}

export {
    rickmortyURL,
    owuBaseURl,
    urls
}