
// escopos diferentes, ja que let esta restrito ao bloco
var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero) //nesse caso pega o "numero"
    //mais interno, se n tivesse declarado no bloco usaria
    //a global
}

console.log('fora = ', numero)

// let tem escopo por bloco a mais do q os de var