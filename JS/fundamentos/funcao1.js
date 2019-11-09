//funcao sem retorno

function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)

imprimirSoma(2)
imprimirSoma(2, 10, 4, 5) //pega so os dois primeiros, flexibilidade...
imprimirSoma()

// funcao com retorno

function soma(a, b = 0){
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))// ja que b tem valor padrao 0
