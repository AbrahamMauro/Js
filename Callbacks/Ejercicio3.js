function operacionMatematica(num1, num2, cb) {
    return cb(num1, num2)
  }
  function operacion(num1,num2){
    return num1 * num2
  }

  console.log(operacionMatematica(3,5,operacion))
  module.exports = operacionMatematica;