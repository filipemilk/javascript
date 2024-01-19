// Função para simular uma aposta de pênalti
function apostarNoPenalti() {
    // Gerar um número aleatório entre 0 e 1 para representar o resultado do pênalti
    const resultado = Math.random();

    // Verificar o resultado e determinar se foi um  ou não
    if (resultado < 0.8) {
        console.log('Gol!')
    } else {
        console.log('Defesa!')
    }
}

apostarNoPenalti()