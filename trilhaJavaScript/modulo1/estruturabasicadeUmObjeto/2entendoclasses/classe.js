
class Pessoa {
    nome; 
    idade; 
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
//classe é a definição que deve ser aquele objeto e instancia é a ocorrencia daquele objeto 

const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan J Paula'
renan.idade = 30;

console.log(vitor);
console.log(renan);