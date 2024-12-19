function actualizarValorPropiedad(objeto, propiedad, valor) {
    // Actualiza el valor de la propiedad del objeto recibidos en la función.
    // Retorna el objeto actualizado.
    // Tu código:
    objeto[propiedad] = valor;
    return objeto;
 }
 
 const coche = {
    color: "rojo", 
    marca: "Toyota", 
    modelo: "Corolla" };

    console.log(actualizarValorPropiedad(coche,"color", "verde"))
 module.exports = actualizarValorPropiedad;