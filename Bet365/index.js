"use strict"

function init(){

    var contador = 1
    
    function penalti() {
        const elementos = document.querySelectorAll(".ovm-AlternativeMarketHeader")
        
        console.log(`${contador}ª - Verificação`)
        console.log("-----------------------------------")
        contador++

        for (let i = 0; i < elementos.length; i++) {
            let elemento = elementos[i].innerText
            if(elemento == "Para Ganhar nos Pênaltis" || elemento == "Resultado da Prorrogação") {
                console.log(elemento)
                alert(elemento)
            } else {
            console.log(elemento)
            }
        }
        console.log("-----------------------------------")
    }
    
    function loop() {
        setTimeout(() => {
            penalti()
            loop()
        }, 30000)
    }
      
}

init()