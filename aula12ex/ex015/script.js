function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   // essa soma 
   if (fano.value.length == 0 || Number (fano.value) > ano){
    window.alert('[ERRO]Verifique os dados e tente novamente')
   } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'criança1.png')
            }else if(idade < 21 ) {
                //jovem
                img.setAttribute('src', 'jovem1.png')
            }else if(idade >= 21 && idade < 50 ) {
                    //adulto
                    img.setAttribute('src', 'adulto1.png')
            }else {
                //idoso
                img.setAttribute('src', 'senhor1.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'criança2.png')
            }else if(idade < 21 ) {
                //jovem
                img.setAttribute('src', 'jovem2.png')
            }else if(idade >= 21 && idade < 50 ) {
                    //adulto
                    img.setAttribute('src', 'adulta2.png')
            }else {
                //idoso
                img.setAttribute('src', 'senhora2.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
   }
}