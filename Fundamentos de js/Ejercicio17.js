function esPositivo(num) {
    if(parseInt(num)>= 0){
        return "Es positivo"
    }
    else{return "Es negativo"}
  }
  //console.log(esPositivo(0))
  module.exports = esPositivo;