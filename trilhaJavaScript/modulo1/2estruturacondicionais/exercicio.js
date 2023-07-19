/*  

Faça um programa para calcular o valor de uma viagem 
você terá 3 variáveis, sendo elas: 
1 - preço da etanol
2 - preço gasolina
3 - o tipo de combustivel que esta no seu carro 
4 - gasto médio de combustível do carro por KM 
5 - distância em KM da viagem 
imprima no console o valor que será gasto para realizar esta viagem 

*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const KmPorLitros = 10; 
const distanciaEmKm = 100; 
const tipoCombustivel = 'Gasolina';
const litrosConsumidos = distanciaEmKm / KmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2)) 
} else  {
    const valorGasto = litrosConsumidos * precoGasolina; 
    console.log(valorGasto.toFixed(2)) 
} 
