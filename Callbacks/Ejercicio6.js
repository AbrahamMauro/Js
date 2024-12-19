function mapa(array, cb) {
    let nuevoArray = []
   for(elemento of array){
    nuevoArray.push(cb(elemento))
   }
   return nuevoArray
  }

  function proceso(numero){
    return numero * 3 + 1
  }

  console.log(mapa([2,5,7,4],proceso))

  module.exports = mapa;