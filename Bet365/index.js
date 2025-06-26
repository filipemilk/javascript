"use strict"

function init(){
    const elementos = document.querySelectorAll(".ovm-AlternativeMarketHeader")

    for (let i = 0; i < elementos.length; i++) {
        let elemento = elementos[i].innerText
        if(elemento == "Para Ganhar nos Pênaltis" || elemento == "Para Marcar o 7° Gol") {
            console.log(elemento)
            alert(elemento)
        } else {
            console.log(elemento)
            alert(elemento)
        }
    }
}

init()