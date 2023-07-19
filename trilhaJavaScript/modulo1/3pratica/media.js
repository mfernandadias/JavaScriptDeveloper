/*  Faça um algoritmo que dado as 3 notas tirada  por um semestre de faculdade calculle e imprima 
a sua média e a sua classificação conforme a tabela abaixo

média = (nota 1 + nota 2 + nota 3) / 3

classificação: 
média menor que 5, reprovação 
media entre 5 e 7, recupração 
média acima de 7, passou de semestre
*/

const nota1 = 5; 
const nota2 = 5; 
const nota3 = 8; 
const media = ((nota1 + nota2 + nota3) / 3)
console.log(media)

if (media <= 5) {
    console.log('REPROVADO')
} else if (media >= 7 ) {
    console.log('APROVADO')
} else {
    console.log('Recupração')
}

/* else if (media >= 5 && media <= 7) {
    console.log('recupração')
}
*/