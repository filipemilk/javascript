function idade() {
    const dataNasc = window.document.getElementById('txtnasc')
    if (dataNasc.value == '') {
        window.alert(`Insira uma data válida!`)
    } else {
        const dataAtual = new Date()

        var anos = new Date(dataAtual).getFullYear() - new Date(dataNasc.value).getFullYear()
        var meses = new Date(dataAtual).getMonth() - new Date(dataNasc.value).getUTCMonth() //Formato UTC - Hora 00:00, logo não altera o mês.
        var dias = new Date(dataAtual).getDate() - new Date(dataNasc.value).getUTCDate() //Formato UTC - Hora 00:00, logo não altera o dia.

        
        //ANOS
        if (meses < 0 || meses == 0 && dias < 0) {
            anos--
        }

        if (anos < 0 ) {
            window.alert(`Data inválida!`)
        } else {
            //MESES
            if (meses < 0 && dias >= 0) {
                meses += 12
            } else if (meses <= 0 && dias < 0) {
                meses += 11
            } else if (meses > 0 && dias < 0) {
                meses--
            }
            //DIAS
            if (dias < 0) {
                dias += new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate()
            }
            
            
            res.innerHTML = `Idade: ${anos} anos, ${meses} meses e ${dias} dias!`
            }
    }    
}