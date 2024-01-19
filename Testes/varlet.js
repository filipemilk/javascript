//VAR LET CONST

const lista = ['a', 'b', 'a', 'd', 'e']


function contador() {
    var c = 0
    var site = 0    
    for (var pos in lista) {
        console.log(`Item: ${pos} valor: ${lista[pos]}`)
        c++
        if (lista[pos] == 'p'){
            site++
        } else if (site==0 && c == 4) {
            console.log(`Nenhum site foi aberto!`)
        }
    }
    console.log(c)
    console.log(lista.length)
    console.log(site)
}
contador()
