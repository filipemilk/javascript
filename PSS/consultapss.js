
//myDate.value = palavraChave
//const dados = window.document.getElementById('dados')
//const myDate = new Date(Date.now()).toLocaleString().split(',')[0]

//dados.innerHTML += myDate.value
//Se myDate estiver vazio pegue a palavraChave = New Date
var myDate = window.document.querySelector('input#data') // A palavra que você está procurando (Data)

const sites = [
  
  'https://copeve.ufal.br/',
  'https://transparencia.riolargo.al.gov.br/editais-diversos',
  'https://www.pciconcursos.com.br/concursos/nordeste/',
  'https://www.pciconcursos.com.br/concursos/nacional/'

]

function dataHoje() { 
  // Obtém a data atual
  const dataAtual = new Date();

  // Formata a data no formato YYYY-MM-DD para definir o valor do input
  const ano = dataAtual.getFullYear();
  const mes = String(dataAtual.getMonth() + 1).padStart(2, "0"); // +1 porque janeiro é mês 0
  const dia = String(dataAtual.getDate()).padStart(2, "0");

  const dataFormatada = `${ano}-${mes}-${dia}`;

  // Define o valor do input para a data atual formatada
  myDate.value = dataFormatada
}



function consultar() {

  var palavraChave = myDate.value.split('-').reverse().join('/')
  var siteAberto = 0
  var item = 0

  if (myDate.value != '') {
    sites.forEach(site => {
      fetch(site)
        .then(response => response.text())
        .then(text => {
          item++
          if (text.includes(palavraChave)) {
            // console.log(`A palavra "${palavraChave}" foi encontrada no site ${site}.`);
            window.open(site, '_blank') // Abre o site em uma nova aba
            siteAberto++
            window.alert(`Total de sites abertos: ${siteAberto}`)
          } else if (siteAberto == 0 && item == sites.length) {
            // console.log(`A palavra "${palavraChave}" não foi encontrada no site ${site}.`);
            window.alert(`Não há processo tramitado nesta data: ${palavraChave}.`)
          }
        })
        .catch(error => {
          //console.error(`Ocorreu um erro ao acessar o site ${site}:`, error);
          window.alert(`O endereço de site está inválido! \n${site}`)
        });
    })
  } else {
    window.alert(`Insira uma data!`)
  }
}
