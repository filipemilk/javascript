
//myDate.value = palavraChave
//const dados = window.document.getElementById('dados')
//const myDate = new Date(Date.now()).toLocaleString().split(',')[0]

//dados.innerHTML += myDate.value
//Se myDate estiver vazio pegue a palavraChave = New Date
var myDate = window.document.querySelector('input#data') // A palavra que você está procurando (Data)
var res = document.querySelector('div#res')
var a = window.document.getElementById('area')
var d = window.document.getElementById('dados')


// A URL do site que você deseja verificar
const sites = [
  
  //FILIPE
  'https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=010010YUO0001&processo.foro=1&conversationId=&cbPesquisa=NMPARTE&dadosConsulta.valorConsulta=filipe+leite+pais&cdForo=-1&cdProcessoMaster=010010YUO0000&cdForoProcesso=1&conversationId=&paginaConsulta=1/',
  'https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=01000ZXCL0002&processo.foro=1&conversationId=&cbPesquisa=NMPARTE&dadosConsulta.valorConsulta=filipe+leite+pais&cdForo=-1&cdProcessoMaster=01000ZXCL0000&cdForoProcesso=1&conversationId=&paginaConsulta=1',
  'https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=01000X0LB0000&processo.foro=1&conversationId=&cbPesquisa=NMPARTE&dadosConsulta.valorConsulta=filipe+leite+pais&cdForo=-1&paginaConsulta=1',
  'https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=01000RRH90001&processo.foro=1&conversationId=&cbPesquisa=NMPARTE&dadosConsulta.valorConsulta=filipe+leite+pais&cdForo=-1&cdProcessoMaster=01000RRH90000&cdForoProcesso=1&conversationId=&paginaConsulta=1',
  'https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=01001FNRV0000&processo.foro=1&conversationId=&cbPesquisa=NMPARTE&dadosConsulta.valorConsulta=filipe+leite+pais&cdForo=-1&paginaConsulta=1',
  
  
 
  //ORACIO
  'https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=01001FDSL0000&processo.foro=1&conversationId=&cbPesquisa=NMPARTE&dadosConsulta.valorConsulta=oracio+pais+da+silva&cdForo=-1&paginaConsulta=1',
  'https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=01001FDSJ0000&processo.foro=1&conversationId=&cbPesquisa=NMPARTE&dadosConsulta.valorConsulta=oracio+pais+da+silva&cdForo=-1&paginaConsulta=1',
  'https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=01001CXYB0000&processo.foro=1&conversationId=&cbPesquisa=NMPARTE&dadosConsulta.valorConsulta=oracio+pais+da+silva&cdForo=-1&paginaConsulta=1',
  'https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=010018DCL0000&processo.foro=1&conversationId=&cbPesquisa=NMPARTE&dadosConsulta.valorConsulta=oracio+pais+da+silva&cdForo=-1&paginaConsulta=1',
  'https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=010012OFV0000&processo.foro=1&conversationId=&cbPesquisa=NMPARTE&dadosConsulta.valorConsulta=oracio+pais+da+silva&cdForo=-1&paginaConsulta=1',
  'https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=01001FKDM0000&processo.foro=1&conversationId=&cbPesquisa=NMPARTE&dadosConsulta.valorConsulta=oracio+pais+da+silva&cdForo=-1&paginaConsulta=1',
  
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
    res.innerHTML = `<p>Total de Processos: ${sites.length}</p>`
    sites.forEach(site => {
      fetch(site)
        .then(response => response.text())
        .then(text => {
          //Verificador de sites repetidos!
          if(sites.indexOf(sites[item]) != item) {
            res.innerHTML += `<p>Endereço repetido:</p> ${sites[item]}`
            a.style.width = '800px'
            d.style.textAlign = 'center'
          }
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
          res.innerHTML += `<p>O endereço de site está inválido:</p> ${site}`
          a.style.width = '800px'
          d.style.textAlign = 'center'
        });
    })
  } else {
    window.alert(`Insira uma data válida!`)
  }
}
