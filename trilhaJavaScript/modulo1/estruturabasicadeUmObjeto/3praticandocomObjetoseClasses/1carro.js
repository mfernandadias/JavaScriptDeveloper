/* 1 - crie uma classe para representar carros 
os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilemoteo rodado 
crie um método que dado a quantida de quilometros é o preço combustível nos dê o valor gasto em reais 
para realizar este percurso. 
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;
    
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
}

const uno = new Carro('Fiat','Prata', 1/12);
console.log(uno); 