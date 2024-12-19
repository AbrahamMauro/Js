function esNumeroPrimo(numero) {
   for(i = 2; i < numero; i++){
    if(numero % i == 0){
        return false
    }}
   return true
  }
  console.log(esNumeroPrimo(71))
  module.exports = esNumeroPrimo;