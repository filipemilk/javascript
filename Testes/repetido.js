let indice;
let listaDeNumeros=[0,1,2,2,3,4,2,5,6,4,7,8]

for(indice = 0; indice < listaDeNumeros.length; indice++) {

    if(listaDeNumeros.indexOf(listaDeNumeros[indice]) != indice) {
        console.log(listaDeNumeros[indice])
    };
}