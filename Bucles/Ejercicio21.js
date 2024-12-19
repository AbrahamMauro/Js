function esPotenciaDeDos(numero) {
    while(Number.isInteger(numero)){
        numero /= 2

        if(numero == 1){
            return true
            break
        }
    }
    return false
  }
  console.log(esPotenciaDeDos(2048))
  module.exports = esPotenciaDeDos;