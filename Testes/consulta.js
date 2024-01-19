const sites = [
    'https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=010010YUO0001&processo.foro=1&conversationId=&cbPesquisa=NMPARTE&dadosConsulta.valorConsulta=filipe+leite+pais&cdForo=-1&cdProcessoMaster=010010YUO0000&cdForoProcesso=1&conversationId=&paginaConsulta=1/', // A URL do site que você deseja verificar
    'https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=01000ZXCL0002&processo.foro=1&conversationId=&cbPesquisa=NMPARTE&dadosConsulta.valorConsulta=filipe+leite+pais&cdForo=-1&cdProcessoMaster=01000ZXCL0000&cdForoProcesso=1&conversationId=&paginaConsulta=1',
    'https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=01000X0LB0000&processo.foro=1&conversationId=&cbPesquisa=NMPARTE&dadosConsulta.valorConsulta=filipe+leite+pais&cdForo=-1&paginaConsulta=1',
    'https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=01000RRH90001&processo.foro=1&conversationId=&cbPesquisa=NMPARTE&dadosConsulta.valorConsulta=filipe+leite+pais&cdForo=-1&cdProcessoMaster=01000RRH90000&cdForoProcesso=1&conversationId=&paginaConsulta=1'
  ]
  
  const palavraChave = '11/05/2023';
  
  sites.forEach(site => {
    fetch(site)
      .then(response => response.text())
      .then(text => {
        if (text.includes(palavraChave)) {
         // console.log(`A palavra "${palavraChave}" foi encontrada no site ${site}.`);
          window.open(site, '_blank'); // Abre o site em uma nova aba
        } else {
         // console.log(`A palavra "${palavraChave}" não foi encontrada no site ${site}.`);
        }
      })
      .catch(error => {
        console.error(`Ocorreu um erro ao acessar o site ${site}:`, error);
      });
  });
  


  function consultar() {
    if (myDate.value != '') {
      const palavraChave = myDate.value.split('-').reverse().join('/')
      for (var site in sites) {
        fetch(sites[site])
          .then(response => response.text())
          .then(text => {
            if (text.includes(palavraChave)) {
              //console.log(`A palavra "${palavraChave}" foi encontrada no conteúdo do site.`);
              // Aqui você pode abrir o site, por exemplo:
              window.open(sites[site]);
            } //else {
             // window.alert(`Não há processo transitado nesta data: "${palavraChave}".`);
            //}
          })
          .catch(error => {
            console.error('Ocorreu um erro:', error);
          })
      }
    } else {
      window.alert(`Insira uma data!`);
    }
  }