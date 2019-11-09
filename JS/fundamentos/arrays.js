const valores = [7,234,124,5] //declaração literal
console.log(valores[0], valores[3])

valores[4] = 10 //arrays nao tem tamanho definido em JS
console.log(valores[4])

console.log(valores)
console.log(valores.length) //quantos elementos tem no array


valores.push({id: 3}, false, null, 'teste') //tipagem fraca, pode botar qualquer coisa
console.log(valores)

console.log(valores.pop())//retira o ultimo item do array

delete valores[0]//deleta tal item do array
console.log(valores)

console.log(typeof valores)//array sao obj

