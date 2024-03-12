var frase = 'ana paula de olIveira sANTOS'

var palavra = frase.split(' ')

for (let i in palavra) {
    if (palavra[i].length > 2) {
        palavra[i] = palavra[i].charAt(0).toUpperCase() + palavra[i].slice(1).toLowerCase()
    } else {
        palavra[i] = palavra[i].toLowerCase()
    }
}
console.log(palavra.join(' '))

