const res = require("express/lib/response")

function encontrarElementoRepetido(numeros) {
    for(n in numeros){
        let resultado = numeros.filter(a => a == numeros[n])
       if(resultado.length >= 2 ){
        return resultado[0]
       }
    }
  }
  console.log(encontrarElementoRepetido([1,2,3,4,5,6,7,8,9,7,5]))
  module.exports = encontrarElementoRepetido;
