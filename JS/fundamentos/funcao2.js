// armazenando uma função em uma variavel

const imprimirSoma = function (a, b){ //função anonima
    console.log(a+b)
}

imprimirSoma(2, 3)


// armazenando uma funçao arrow em uma variavel

const soma = (a, b) => {
    return a+b
}

console.log(soma(2, 3))


// retorno implicito

const subtracao = (a, b) => a-b //possivel quando a 
//função tem apenas uma linha,  entao nao eh necessario {}.

console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)//um parametro so nao
//eh necessario ().
imprimir2('top')
