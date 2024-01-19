function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manhã.jpg'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'tarde.jpg'
    } else {
        //Boa noite
        img.src = 'noite.jpg'
    }
}