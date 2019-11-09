// hoisting -->  levar pra cima
// como se ele movesse a declaração pra cima, por isso 
//nao da erro e sim undefined, ficaria assim:

//var a
console.log('a =', a)

var a = 2
//a = 2

console.log('a =', a)



function teste(){
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

// na função tambem, mas dentro da função


console.log('a =', a)
let a = 2
console.log('a =', a)

// com let nao funciona

//basicamente hoisting joga a declaração pra cima