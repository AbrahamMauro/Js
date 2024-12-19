function mesesDelAño(array) {
    let mesesPedidos = ["Enero", "Marzo", "Noviembre"]; 
    let encontrados = [];
    for(mes of mesesPedidos){
    if(array.includes(mes)){
        encontrados.push(mes)
    }
    else{return "No se encontraron los meses pedidos"}
}
    return encontrados
  }
  //console.log(mesesDelAño(["Febrero", "Julio", "Noviembre", "Enero", "Diciembre"]))
  module.exports = mesesDelAño;