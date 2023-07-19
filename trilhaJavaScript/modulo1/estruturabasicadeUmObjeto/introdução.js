const pessoa = { 
    nome: 'Vitor J Guetrra', 
    idade: 25,

    descrever: function (){
        this 
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

const atributo = 'idade';
//através de uma string estou acessando dinamicamente o atributo 
console.log(pessoa['nome']);

pessoa.nome = 'teste';

/*
pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever(); */



