

const { gets, pint } = require('./03auxiliar')

const valorSalarioBruto = gets();
const valorAdicionalDosBeneficios = gets();

function calcularPorcenagem(valor, percentual) {
    return valor * (percentual / 100); 
}

function pegarAliquota(salario) {

    if (salario >= 0.00 && salario <- 1000.00) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}
const aliquotaDoImposto = pegarAliquota(valorSalarioBruto);

const valorImposto = calcularPorcentagem(valorSalarioBruto, aliquotaDoImposto );

const valorAtransferir = valorSalarioBruto - valorImposto + valorAdicionaldosBeneficius

print(valorATranferir);