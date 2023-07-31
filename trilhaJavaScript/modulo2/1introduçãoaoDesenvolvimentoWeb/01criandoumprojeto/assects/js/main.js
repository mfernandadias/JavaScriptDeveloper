
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
     .then((response) => response.json())
     .then((jsonBody) => console.log(jsonBody))
     .catch((erro) => console.error(error))





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