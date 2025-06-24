"use strict"

function init(){
    const elementos = document.querySelectorAll(".ovm-AlternativeMarketHeader")

    for (let i = 0; i < elementos.length; i++) {
        console.log(elementos[i].innerText);
    }
}

init()