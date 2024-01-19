var a = window.document.getElementById('area')



// Função para simular uma aposta de pênalti
function apostarNoPenalti() {
    // Gerar um número aleatório entre 0 e 1 para representar o resultado do pênalti
    const resultado = Math.random();

    // Verificar o resultado e determinar se foi um  ou não
    if (resultado < 0.8) {
        a.innerText = 'Gol!'
        a.style.background = 'Green'
    } else {
        a.innerText = 'Defesa!'
        a.style.background = 'red'
    }
}

function sair(){
    a.innerText = 'Saiu!'
    a.style.background = 'blue'
}