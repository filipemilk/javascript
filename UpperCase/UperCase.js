//var frase = 'ana paula de olIveira sANTOS'

var nome = document.getElementById('inome')
var butao = document.getElementById('but')


function letraMaiuscula() {
    var palavra = nome.value.split(' ')

    for (let i in palavra) {
        if (palavra[i].length > 2) {
            palavra[i] = palavra[i].charAt(0).toUpperCase() + palavra[i].slice(1).toLowerCase()
        } else {
            palavra[i] = palavra[i].toLowerCase()
        }
    }
    palavra = palavra.join(' ')
}

