/* faça um programa que calcule e imprima o salário a ser transferido para um funcionario 
para realizar o calculo receba o valor bruo do salario e o  adicional dos beneficios 
o salario a ser transferido e calculado da seguinte maneira: 

o valor bruto do salario - percentual de imposto e faixa salarial + adicional dos benefecios 

para calcular o percentual de imposto segue as aliquotas: 

de R$ 0.00 a R$ 1100.00 = 5.00% 
de R$ 1100.00 a R$ 2500.00 = 10.00% 
maior que R$2500.00 = 15.00%

entrada 
2000
250

saída: 
2050.00
*/
const entradas = [2050.00];
let i = 0;

function gets() {
    const valor = entradas[i];
    i ++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };