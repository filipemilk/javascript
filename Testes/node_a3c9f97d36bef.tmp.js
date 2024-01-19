const http = require('http')
const { text } = require('stream/consumers')

http.createServer((request, response)=>{
    response.writeHead(200, {
        'Content-Type' : 'text/plain'
    })
    response.write('CFB Cursos\n')
    response.end()
}).listen(1337)