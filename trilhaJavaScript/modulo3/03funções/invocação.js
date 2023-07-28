//invocação direts, call, apply e oprador New 

const pessoa = {
    nome: 'Renan', 
    idade: 30
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

//argumentos + contexto
gritar.apply(pessoa, ['Olaaaaa'])

//contexto + argumentos 
gritar.call(pessoa, 'Olaaaa')

