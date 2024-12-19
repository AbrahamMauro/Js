function eliminarPropiedad(objeto, propiedad) {
    delete objeto[propiedad]
    return objeto
  }
  
  const coche = {
    color: "rojo", 
    marca: "Toyota", 
    modelo: "Corolla" };
console.log(eliminarPropiedad(coche, "modelo"))
  module.exports = eliminarPropiedad;