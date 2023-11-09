var agora = new Date()
var diaSem = agora.getDay()
/* no java script ele ve o dia dsa semana assim 
0 = Domingo
1 = segunda 
2 = terça 
3 = quarta 
4 = quinta 
5 = sexta 
6 = sabado*/

//console.log(diaSem)
//poderia usar o IF mas vou usar o SWITCH
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1: 
        console.log('segunda-feira')
    case 2: 
        console.log('terça-feira')
        break
    case 3: 
         console.log('quarta-feira')
         break
    case 4: 
        console.log('quinta-feira')
         break
    case 5:
        console.log('sexta-feira')
         break
    case 6:
        console.log('sabado')
         break
    default: 
        console.log('erro dia invalido.')
        break
}