function agregarNumeros(arrayOfNums) {
    return arrayOfNums.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
  }
  //console.log(agregarNumeros([1,2,3,4,5]))

  module.exports = agregarNumeros;