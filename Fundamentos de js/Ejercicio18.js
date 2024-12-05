function esVocal(letra) {
    letra = letra.toLowerCase()
    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        return "Es una vocal"
    }else{return "Es incorrecto"}
  }
  //console.log(esVocal("o"))
  module.exports = esVocal;