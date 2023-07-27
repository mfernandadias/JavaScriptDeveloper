//orientação a prototipo

/*const pessoa = {
    genero: 'masculino'

}

const renan = {
    nome: 'renan', 
    idade: 30,
    __proto__: pessoa
}
pessoa.genero = 'masculino'

console.log(renan.genero) */

//

//função construtura e 
function Pessoa(nome, idade) {
    //atributos
    this.nome = nome
    this.idade = idade 
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

class Fernanda {
    constructor(nome, idade) {
        this.nome = nome 
        this.idade = idade
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}