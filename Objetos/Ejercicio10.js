function agregarPropiedad(objeto, propiedad) {
    objeto[propiedad] = null
    return objeto
  }
  
  const coche = {
    color: "rojo", 
    marca: "Toyota", 
    modelo: "Corolla" };

    console.log(agregarPropiedad(coche, "potencia"))
  module.exports = agregarPropiedad;