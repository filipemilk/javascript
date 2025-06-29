"use strict"

function init(){
    
    function penalti() {
        const elementos = document.querySelectorAll(".ovm-AlternativeMarketHeader")
        
        for (let i = 0; i < elementos.length; i++) {
            let elemento = elementos[i].innerText
            if(elemento == "Para Ganhar nos Pênaltis" || elemento == "Resultado da Prorrogação") {
                console.log(elemento)
                alert(elemento)
            } else {
            console.log(elemento)
            }
        }
    }
    
    function loop() {
        setTimeout(() => {
            penalti()
            loop()
        }, 10000)
    }
      
}

init()