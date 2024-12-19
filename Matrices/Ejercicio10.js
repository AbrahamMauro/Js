function obtenerPrimerStringLargo(array) {
    return array.find(string => string.length > 5)
  }
  //console.log(obtenerPrimerStringLargo(["casa", "perro", "automóvil", "gato", "elefante"]))
  module.exports = obtenerPrimerStringLargo;