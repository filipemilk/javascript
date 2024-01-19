/*const d1  = '1988-01-16';
const d2    = '2023-09-08';
const milissegundos   = new Date(d2) - new Date(d1)
const seg = milissegundos / 1000
const min = seg / 60
const h = min / 60
const dia = h / 24
const ano = parseInt(dia / 365)
const mes = parseInt(dia % 365 / 30)
const resto = dia % 365 % 30
console.log(milissegundos)
console.log(`${dia} dias = ${ano} anos, ${mes} meses e ${resto} dias!`)
*/
const ano = new Date('2023-09-09').getFullYear()
const mes = new Date('2023-09-09').getMonth()
const dia = new Date('2023-09-09').getDate()

console.log(`${ano} ano, ${mes} mes ${dia} dia`)