//fazendo fatorial de maneira recurciva vai chamar ela lesma

//Isso se chama recursividade

function fatorial(n){
    if (n == 1){
        return 1 
    } else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))


/*sabemos que 5! fatorial e o mesmo  de 5 x 4 x3 x 2 x1 

mas podemos fazer assim tambem que 
5! fatorial pode se  = 5 x 4! fatorial

e sabemos fatorial de 1! = 1
*/