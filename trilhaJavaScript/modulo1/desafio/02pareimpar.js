/* faça um programa que receba N (quantidad de números) e seus respectivos valores 
imprima o maior número par e o menos impar 

exempo 
entrada 
5
3
4
1
10
8

saída? 
maior número par: 10 
*/

const {gets, print } = require('./02auxiliares')

const n = gets();
let maiorNumeroPar = 0;
let maiorNumeroImpar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (numero > maiorNumeroPar){ 
          maiorNumeroPar = numero; 
        }
    } else  {
       if(menorNumeroImpar === 0  ) {
        menorNumeroImpar = numero;
       } else if (numero < menorNumeroImpar ) {
        menorNumeroImpar = numero;
       }
    }
}

print('Maior número par: ' + maiorNumeroPar);
print('Menor Número Impar: ' + menorNumeroImpar);