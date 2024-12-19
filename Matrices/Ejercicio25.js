function contarParesConContinue(numeros) {
    //return numeros.filter(a => a % 2 == 0)    Es mejor
    let arreglo = []
    for(num of numeros){
        if(num % 2 == 1){
            continue
        }
        arreglo.push(num)
    }
    return arreglo
  }
  console.log(contarParesConContinue([2,3,4,5,6,7,8,9,9,10,10]))
  module.exports = contarParesConContinue;