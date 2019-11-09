console.log(Math.ceil(6.1))

const obj1 = {}

obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('tois')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('mesa')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()

// se usa this para a permissao de utilização de variavel
//criada dentro de uma função fora da mesma


/* Basicamente, formas de acessar as variaveis das funçoes
fora dela*/