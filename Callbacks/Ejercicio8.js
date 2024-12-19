const buscarElemento = (array, callback) => {
    if(callback(array) == undefined){
      return "No se encontró el elemento"
    }
    return callback(array)
  };
  function encontrarElemento(array){
   return array.find(a => a == 1)
  }
  console.log(buscarElemento([0,2,3,4,5,6],encontrarElemento))
  module.exports = buscarElemento;