/* 
Desafio: 
Faça um programa para calcular o valor de uma viagem 
Você terá 3 variavel. sendo elas: 
1 - preço do combustivel 
2 - gasto média de combustivel do carro por Km; 
3 - distância em KM da viagem 

imprima no console o valor que será gasto de combustível para realizar esta viagem

*/

//let variavel = 10 / 10; 

//console.log(variavel);

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmkm = 1580;

const litrosConsumidos = distanciaEmkm / kmPorLitros;

const valorGasto = litrosConsumidos * precoCombustivel; 
console.log(valorGasto.toFixed(2));







