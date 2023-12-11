let amigo = {
 nome:`jose`,
 sexo: `M`, 
 peso: 85.4 ,
 engordar(p){
    console.log('engordou')
    this.peso += p
 }}
 //minha proplia variavel tem funçao dentro dela.
 amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}`)