var idade = 68 
console.log(`Voce tem ${idade} anos.`)
if (idade < 16){
    console.log('nao vota')//posso jogar o else - if junto 
}else if ( idade < 18 || idade > 65 ){
        console.log('voto opcional') 
    }else{
        console.log('voto obrigatorio')
    }
    

