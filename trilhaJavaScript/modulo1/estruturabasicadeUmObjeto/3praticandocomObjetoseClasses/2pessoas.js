/*  2) crie uma classe para representar pessoas 
para cada pessoa teremos os atributos nome, peso e altura 
as pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
instancie uma pessoa chamada Josê que tenha 70kg de peso e 1,75 de altura e peça ao Jos~e para dizer o 
valor do seu IMC; */


class Pessoa{
    nome; 
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome; 
        this.peso = peso; 
        this.altura = altura; 
    }
    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }
    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Obeso');
        } else { 
            return('Obesidade Grave');
        }

    }
}

const jose = new Pessoa('jose', 70, 1.75);
console.log(jose.classificarImc());
const renan = new Pessoa('renan', 63, 1,75);
console.log(renan.classificarImc());
const vitor = new Pessoa('vitor', 60, 1.69);
console.log(vitor.classificarImc()); 


