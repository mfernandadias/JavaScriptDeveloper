//entendendo melhor o operador New e Brancando com protótipos
/*function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade 
}
Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

const renan = {
    genero: 'masculino'
}

console.log(new Pessoa('renan', 30))
renan.falar() */

//protótipo da string 
String.prototype.toPlang = function() {
    return `p ${this}`
}

console.log('teste'.toPlang())