function encontrarPrimerMultiploDeN(n, secuencia) {
    //return secuencia.find(a => a % n == 0) Es mejor
    let resultado = undefined
    for(nimi of secuencia){
        if(nimi % n == 0){
            resultado = nimi
            break
        }
    }
    return resultado
  }
  console.log(encontrarPrimerMultiploDeN(3, [1,2,4,6,4,6,9]))
  module.exports = encontrarPrimerMultiploDeN;