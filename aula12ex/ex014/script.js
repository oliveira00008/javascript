function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        //Bom dia!
        img.src = 'fotodemanha.png'
        msg.innerHTML = `Bom Dia agora sao  ${hora} horas...`
        document.body.style.background = '#8BADD9'
    }else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'fotodetarde.png'
        msg.innerHTML = `Boa Tarde agora são ${hora} horas...`
        document.body.style.background = '#F27405'
    }else{
        //Boa noite!
        img.src = 'fotodenoite.png'
        msg.innerHTML = `Boa Noite agora são ${hora} horas... `
        document.body.style.background = '#0D0D0D'
    }

}
