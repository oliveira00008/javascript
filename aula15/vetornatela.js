let num = [ 1 , 7, 9 ,0 ]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} pisiçao`)
console.log(`o primeiro valor do vetor e ${[0]}`)
let pos = num.indexOf(8) 
if (pos == -1){
    console.log('o valor nao foi encomtrado')
} else{
    console.log(`o valor  esta na posiçao ${pos}`)
}




//console.log(valores [0]) <- ESSE E O SIMPLES 

/*ESSE CODIGO E O TRADICIONAL DE VETORE PARA SE USAR  
for( let pos=0; pos < valores.length; pos++){
    console.log(`a posiçao do meus valore e ${pos} tem o valor ${valores[pos]}`)
}*/

/*GEITO MA SIMPLES 

for(let pos in valores){
    console.log(`a posisao ${pos} tem o valor ${valores[pos]}`)
}*/

