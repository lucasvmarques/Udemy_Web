let valor//n inicializada
console.log(valor)

//undenied != de not defined

valor = null //ausencia de valor

console.log(valor)

// quanto quiser zerar a variavel, usar null

//console.log(valor.toString()) //erro
 
const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 2.234
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

//para apagar o atributo do objeto
//delete produto.preco

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)