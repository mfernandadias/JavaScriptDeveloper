
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`







const pokemonList = document.getElementById('pokemonList')

fetch(url)
     .then((response) => response.json())
     .then((jsonBody) => jsonBody.results)
     .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemonList[i];
            pokemonList.innerHtml += convertPokemonToLi(pokemon)
        }
     })

     .catch((error) => console.error(error))




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