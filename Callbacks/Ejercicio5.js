function forEach(array, cb) {
    array.forEach(elemento => { cb(elemento) 
    })
  }
  function imprimirValor(elemnt){
    console.log(elemnt)
  }
forEach([1,2,3,4,5],imprimirValor)
  module.exports = forEach;
