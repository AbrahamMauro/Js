function tablaDelSeis() {
    tabla = []
    for(i = 0; i <= 10; i++){
        tabla.push(i*6)
    }
    return tabla
  }
  //console.log(tablaDelSeis())
  module.exports = tablaDelSeis;