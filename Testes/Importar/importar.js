//Só funciona no Node.js

const fs = require('fs')
//E para ler o arquivo utilize a função readFile ou readFileSync:

fs.readFile('teste.txt', 'utf8', (err, texto) => {
    var linhas = texto.split(',')
    const filtrado = linhas.filter(x => x.trim())
    // agora podes usar dentro desta callback "linha", 
    // como uma array onde cada entrada é uma linha nova
    for (var p in filtrado) {
        console.log(`Posição ${p} - ${filtrado[p].trim()}`) //O método trim() remove os espaços desnecessários declarados no início e/ou no final de uma string.
    }
})
