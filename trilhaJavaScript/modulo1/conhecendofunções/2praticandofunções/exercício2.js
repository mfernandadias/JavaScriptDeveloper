/* 

*/

function escrevaMeuNome(nome) {
    console.log('Meu nome é ' + nome);
}


function verificarIdade(idade) {
    if (idade >= 18) {
        console.log( escrevaMeuNome('Vitor') + 'Maior');
    } else {
        console.log('Menor');
    }
}

verificarIdade(18);