//join e combinação de funções de manipulação 

//join  é juntar 

const lista = [{nome: 'Renan'}, {nome: 'Andresa'}, {nome: 'Vitor'}]

/*console.log
    ( 
        lista.map(e => e.nome)
        .filter((e) => e.startsWith('A'))
        .join('; ')
    ) */


    const elementosEmHtml = lista
         .filter((e) => e.nome.startsWith('A'))
         .map(e => `<li>${e.nome}</li>`)
         .join('')
    console.log(elementosEmHtml)



