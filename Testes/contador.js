const sites = [
    'https://www.site1.com',
    'https://www.site2.com',
    'https://www.site3.com'
  ];
  
  const palavraChave = 'exemplo';
  let sitesAbertos = 0;
  
  sites.forEach(site => {
    fetch(site)
      .then(response => response.text())
      .then(text => {
        if (text.includes(palavraChave)) {
          console.log(`A palavra "${palavraChave}" foi encontrada no site ${site}.`);
          window.open(site, '_blank');
          sitesAbertos++;
          console.log(`Total de sites abertos: ${sitesAbertos}`);
        } else {
          console.log(`A palavra "${palavraChave}" não foi encontrada no site ${site}.`);
        }
      })
      .catch(error => {
        console.error(`Ocorreu um erro ao acessar o site ${site}:`, error);
      });
  });
  