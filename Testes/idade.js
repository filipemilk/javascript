// Obtenha a data de nascimento do usuário (substitua isso pela data real)
const dataDeNascimento = new Date('1990-03-01')
const dataAtual = new Date()

// Obtenha a data atual


console.log(`${dataDeNascimento}`)
console.log(`${dataAtual}`)

// Calcule a diferença em anos, meses e dias
var anosDif = dataDeNascimento.getFullYear()
var mesesDif = dataDeNascimento.getMonth();
var diasN = dataAtual.getDate() - dataDeNascimento.getUTCDate()


console.log(`Idade: ${anosDif} anos, ${mesesDif} meses e ${diasN} dias`);

