function Contador() {
    var res = window.document.getElementById("res")
    var ini = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert("Passo inválido!")
            p = 1
        }
        if (i < f) {
            for (let c = i ; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        else {
            for (let c = i ; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
    
    
}