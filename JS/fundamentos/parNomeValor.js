// par nome/valor

const saudacao = 'Opa' //contexto lexico 1

function exec(){
    const saudacao = 'Falaaa' //contexto lexico 2
    return saudacao
}


// Objetos sao grupos aninhados de pare/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())

console.log(cliente.nome)
console.log(cliente.endereco.numero)
console.log(cliente)