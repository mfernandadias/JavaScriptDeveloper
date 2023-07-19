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

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}