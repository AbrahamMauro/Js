function encontrarNumeroFaltante(numeros) {
    let primero = numeros[0]
    let resultados = []
    for(i =1; i < numeros.length; i++){
        primero += 1
        if(!(primero == numeros[i])){
            resultados.push(primero)
            i--
        }
    }
    return resultados
  }
  console.log(encontrarNumeroFaltante([1,2,3,4,6,7,8,20, 25]))
  
  module.exports = encontrarNumeroFaltante;