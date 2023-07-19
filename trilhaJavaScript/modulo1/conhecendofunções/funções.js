function teste( ){ 
    console.log('teste');
}

teste();
teste();

function sayMyName(name) {
    console.log('Your name is:' + name);
}

sayMyName('Renan');
sayMyName('Vitro');

function quadrado(valor) {
    return valor * valor;
}
quadrado(10);

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100, 10));