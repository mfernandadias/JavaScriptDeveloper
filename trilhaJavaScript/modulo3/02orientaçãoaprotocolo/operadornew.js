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
/*String.prototype.toPlang = function() {
    return `p ${this}`
}

console.log('teste'.toPlang()) */

//O que são protótipos?
//protótipos são o mecanismo pelo qual objetos JavScript herdam recuros uns dos outros 

function Pessoa(nome) {
    this.nome = nome
}

Pessoa.prototype.falarSeuNome = function () {
    console.log(`Meu nome é ${this.nome}`)
}

const renan = new Pessoa('renan')
renan.falarSeuNome()