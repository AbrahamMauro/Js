function tienePropiedad(objeto, propiedad) {
    return objeto.hasOwnProperty(propiedad)
  }

  const coche = {
    color: "rojo", 
    marca: "Toyota", 
    modelo: "Corolla" };

  console.log(tienePropiedad(coche, "marca"))
  module.exports = tienePropiedad;