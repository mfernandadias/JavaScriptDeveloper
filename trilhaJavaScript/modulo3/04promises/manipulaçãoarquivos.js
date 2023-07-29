//manipulação arquivos de Promises 

const fs = require('fs')
const path = require('path')

//path.resolve

const promesaDaLeituraDeArquivo = fs.promises.readFile('tarefas.csv')

const promesaDaLeituraDoArquivo = fs.promises.rreadFile(filePath)

promesaDaLeituraDeArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((texto) => console.log(texto.split('/n').slice(1)))
    .then((linhasSemOCabecalho) => linhasSemOCabecalho.map((linha)=> {
        const [nome, feito] =linhs.split(';')
        return {
            nome, 
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((erro) => console.log('deu ruim', error))

