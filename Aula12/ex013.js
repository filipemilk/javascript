var agora = new Date()
var diaSem = agora.getDay()
var hora = agora.getHours()
var minutos = agora.getMinutes()
// 0 = Domingo
// 6 = Sábado

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    default:
        console.log('Sábado')            
}

console.log(`${hora} horas e ${minutos} minutos`)