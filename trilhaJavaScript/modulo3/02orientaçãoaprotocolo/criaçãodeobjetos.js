//formas de criação de objetos literais com protótipos 
const pessoa = {
    genero: 'masculino'
}

pessoa.__proto__
const renan = Object.create(pessoa)
renan,nome = 'Renan'

console.log(renan.genero)

const texto = 'massculino'

console.log(texto.__proto__)