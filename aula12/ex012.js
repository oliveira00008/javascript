var agora = new Date()//para pegar a hora atual eu uso o (AGORA.GETHOURS)
var horas = agora.getHours()
console.log(`Agora sao exatamente ${horas} horas.`)
if (horas < 6){
    console.log('Boa madrugada')
}else if (horas <= 12 ){
    console.log ('Bom dia')
}else if(horas <= 18){
    console.log('Boa tarde')
}else{
    console.log('Boa noite')
}