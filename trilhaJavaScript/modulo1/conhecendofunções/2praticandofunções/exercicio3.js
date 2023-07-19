/*  elabore um algoritmo que calculo o que deve ser pago por um produto, considerando o preço normal 
de etiqueta e a escolha da condição de pagamento 
utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo 
adequado 

código condição de pagamento 
- a vista débito, receve 10% de desconto 
a vista do dinheiro ou OIX, recebe 15% de desconto 
em duas vezes, preço normal de etiqueta sem juros 
acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * desconto));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100; 
const formaDePagamento = 2; 

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta, 10));
} else if(formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}

console.log(200 * 0.10);
console.log(10 / 100);
