function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   //var hora = 13

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagemmanha.jpeg'
        document.body.style.background = '#DAA520'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagemtarde.jpg'
        document.body.style.background = '#8B4513'
    } else {
        //BOA NOITE!
        img.src = 'imagemnoite.jpeg'
        document.body.style.background = '#363636'
    }
}

