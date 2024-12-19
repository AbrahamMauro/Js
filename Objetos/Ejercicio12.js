function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    return objetoMisterioso.numeroMisterioso * 5
  }
  
const objeto = {
    numeroMisterioso : parseInt(Math.random() * 10)
}
console.log(multiplicarNumeroDesconocidoPorCinco(objeto))
  module.exports = multiplicarNumeroDesconocidoPorCinco;