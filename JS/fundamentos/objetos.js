//json = Javascript object notation  !=   notacao literal objetos

const prod1 = {}
prod1.nome = 'Celular ultra mega' //declaracao dinamica
prod1.preco = 234.3
prod1['Desconto legal'] = 0.4 //evitar atributos com espaço

//console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 40.99,
    alo: {
        blabla: 1,
        obj:{
            blabla: 2
        }
    }
}

console.log(prod2)