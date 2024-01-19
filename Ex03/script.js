function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if(idade >=0 && idade <= 12) {
        //criança
        img.setAttribute('src', 'bb-m.jpg')
      } else if ( idade <= 29) {
        //jovem
        img.setAttribute('src', 'jovem-m.jpg')
      } else if (idade < 60) {
        //Adulto
        img.setAttribute('src', 'adulto-m.jpg')
      } else {
        //Idoso
        img.setAttribute('src', 'idoso-m.jpg')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if(idade >=0 && idade <= 12) {
        //criança
        img.setAttribute('src', 'bb-f.jpg')
      } else if ( idade <= 29) {
        //jovem
        img.setAttribute('src', 'jovem-f.jpg')
      } else if (idade < 60) {
        //Adulto
        img.setAttribute('src', 'adulto-f.jpg')
      } else {
        //Idoso
        img.setAttribute('src', 'idoso-f.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
    res.appendChild(img)
  }
}