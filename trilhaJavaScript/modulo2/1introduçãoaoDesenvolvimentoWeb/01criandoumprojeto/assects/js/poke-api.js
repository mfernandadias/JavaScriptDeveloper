
const PokeApi = {};

PokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .catch((error) => {
            // Consider throwing an error or returning a rejected promise instead of just logging to the console
            console.error(error);
            throw new Error('Failed to fetch Pokémon data.');
        });
};