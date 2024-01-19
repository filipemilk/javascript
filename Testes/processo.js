function consultarProcessadorPorConteudo(conteudo) {
    const url = "https://copeve.ufal.br/";
  
    // Objeto de configuração para a requisição POST
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ conteudo: conteudo })
    };
  
    // Fazer a requisição POST usando o Fetch
    fetch(url, config)
      .then(response => response.json())
      .then(data => {
        // Processar os dados recebidos do processador
        console.log(data);
        // Faça algo com os dados processados, como exibi-los na tela ou manipulá-los de alguma forma
        console.log(conteudo);
      
      })
      .catch(error => {
        console.error("Ocorreu um erro na consulta:", error);
      });
  }
  
  // Exemplo de uso da função para consultar o processador por conteúdo
  const conteudo = "Processo";
  consultarProcessadorPorConteudo(conteudo);
  