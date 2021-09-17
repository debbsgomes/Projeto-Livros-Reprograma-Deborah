console.log('--------------------------------------')
console.log('     Projeto            ')
console.log('             Tassila Bomfim         ')
console.log('--------------------------------------')


//vamos instanciar, o nosso banco de dados

const livros = require('./database')
console.table (livros);

livros.sort((a, b) => a.paginas - b.paginas )
console.table(livros);

const pegarEntrada = require('readline-sync')

const livrosRecomendados = pegarEntrada.question('Voce quer uma recomendacao de um livro?(s/n)').toLocaleUpperCase()
console.log(livrosRecomendados)

if (livrosRecomendados === 'S') {
    console.log('Okay, temos livros de romance, fantasia, infantil, drama e ação.')
    
    const livrosPorCategoria = pegarEntrada.question('Qual categoria de livros voce deseja ler??').toLocaleLowerCase()

function genero(livros) {
    return livros.categoria === livrosPorCategoria
} 

const livrosEncontrados = livros.filter(genero)
console.table(livrosEncontrados)

const livrosLidos = pegarEntrada.question('Voce deseja uma recomendacao de algo que ja li?(s/n)').toLocaleUpperCase()
console.log('Esses são os livros que já li e recomendo?')

if (livrosLidos === 'S'){
function read(livros) {
        return livros.recomenda === true
    }

    const livrosDaDebbs = livros.filter(read)
    console.table(livrosDaDebbs)
}

const livrosNaoLidos = pegarEntrada.question('Voce quer ver a minha lista de desejos?(s/n)').toLocaleUpperCase()
console.log('Esses são os livros que ainda não li e estou querendo ler: ')

if (livrosNaoLidos === 'S'){
function desejos(livros) {
    return livros.leu === false
}    

const leituraECultura = livros.filter(desejos)
console.table(leituraECultura)
}

}else {
    console.log('Só temos esses livros disponiveis disponiveis')
    console.table(livros)
}