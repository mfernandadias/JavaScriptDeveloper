//asysnc e await 
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

/*function buscarArquivo() {
    fs.promises.readFile(filePath).then(arquivo =>

        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo)
    })
}

buscarArquivo() */

/*o que é aysnc await? 
é uma forma de escrever código assíncrono omo se estivesse escrevendo código síncrono */