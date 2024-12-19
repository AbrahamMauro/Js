function multiplicarElementosPorIndice(array) {
   for(n in array){
    array[n] *= n
   }
   return array
  }
  //console.log(multiplicarElementosPorIndice([1,2,3,4,5,6,7,8]))
  module.exports = multiplicarElementosPorIndice;