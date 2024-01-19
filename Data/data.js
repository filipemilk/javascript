/*var brDate = '2017-06-08'.split('-').reverse().join('/');
var inputDate = '08/06/2017'.split('/').reverse().join('-');

console.log("br date: " + brDate);
console.log("input date: " + inputDate);
*/

//const myDate = new Date(Date.now()).toLocaleString().split(',')[0];

 // Obtém a referência para o elemento input
 var dataInput = document.getElementById("dataInput")
 function dataHoje() {
    

    // Obtém a data atual
    const dataAtual = new Date();

    // Formata a data no formato YYYY-MM-DD para definir o valor do input
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, "0"); // +1 porque janeiro é mês 0
    const dia = String(dataAtual.getDate()).padStart(2, "0");

    const dataFormatada = `${ano}-${mes}-${dia}`;

    // Define o valor do input para a data atual formatada
    dataInput.value = dataFormatada
 }
