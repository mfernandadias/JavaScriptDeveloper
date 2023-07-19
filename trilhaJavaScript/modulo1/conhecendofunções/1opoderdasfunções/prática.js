/* o IMC - indica de massa corporal [é um critério da organização mundial de saúde para dar uma indicação 
sobre a condição de peso de uma pessoa adulta 

formula do IMC 
IMC = peso / (altura * altura)

elabore um algoritmo que dado o peso e a altura de um aulto mostre sua condição de acordo com a tabela abaixo 

IMC em adulto condição: 
- abaixo de 18.5 abaixo do peso; 
- entre 18.5 e 25 peso normal 
- entre 25 e 30 acima do peso 
- entre 30 e 40 obeso 
- acima de 40 obesidade Grave

*/
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if(imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if ( imc > 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc > 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}

function main() {
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();