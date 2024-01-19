let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let vetor = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function Adicionar() {
    if (isNumero(num.value) && inLista(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function Finalizar() {
    if (vetor.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0

        for (let c = 0; c < vetor.length; c++) {
            if (vetor[c] > maior) {
                maior = vetor[c]
            } else if (vetor[c] < menor) {
                menor = vetor[c]
            }
        }

        for (let pos in vetor) {
            soma += vetor[pos]
        }
        media = soma / total


        res.innerHTML = `<p>Ao todo, temos ${total} números cadastrados!</P>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}!</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}!</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}!</p>`
        res.innerHTML += `<p>A média dos valor digitados é ${media}!</p>`
        
    }
}