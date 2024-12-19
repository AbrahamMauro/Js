function dePalabrasAFrase(palabras) {
    let resultado = palabras[0]
    for(i = 1; i < palabras.length; i++){
       resultado = resultado.concat(" ", palabras[i])
    }
    return resultado
  }
  console.log(dePalabrasAFrase(["isabella", "Es", "Hermosa", "Y", "Bianca", "Tambien"]))
  module.exports = dePalabrasAFrase;