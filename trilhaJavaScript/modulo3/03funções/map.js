//Map 

class Pessoa {
    constructor(name) {
        this.nome = name
    }
}

const lista = [new Pessoa('Renan'), new Pessoa('Andresa'), new Pessoa('Vitor'), new Pessoa('José')]

const listaNomes = lista.map((element, i) => {
    return `${i} - ${element.name}`
})

console.log(listaNomes)