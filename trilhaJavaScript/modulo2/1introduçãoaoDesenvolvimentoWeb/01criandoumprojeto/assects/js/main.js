const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
    return `
            <li class="pokemon"> 
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"    
                         alt="${pokemon.name}">
                </div>
            </li>
    `;
}

const pokemonList = document.getElementById('pokemonList');

PokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
});



//interface de alguma coisa 
/*fetch(url)
.then(function (response){
   return response.json()
})
.then(function (jsonBody) {
    console.log(jsonBody)
})
.catch(function(error) {
    console.log(error)
})
.fenally(function () {
    console.log('Requisição concluída')
}) */


/*try {

} catch (erroo) {
    
} finally {

} */