function saludo(idioma = undefined) {
    if(idioma == "aleman"){
        return "Guten Tag!"
    }
    else if(idioma == "mandarin"){
        return "Ni Hao!"
    }
    else if(idioma == "ingles"){
        return "Hello!"
    }
    else{return "Hola!"}
  }
  //console.log(saludo("mandarin"))
  module.exports = saludo;