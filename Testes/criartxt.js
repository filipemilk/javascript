function escreverArquivo() {  

    var fso  = new ActiveXObject("Scripting.FileSystemObject");
    
    var fh = fso.CreateTextFile("Documentos/Curso JS/Testes/Boi.txt", true); 
    
    fh.WriteLine("Coloque todo o conteudo que voce deseja nesse trecho...");
    
    fh.Close(); 
    
    }