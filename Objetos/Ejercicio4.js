function verificarPropiedad(objeto, propiedad) {
    return objeto.hasOwnProperty(propiedad)
    // Verifica si el objeto posee la propiedad recibida.
    // Retorna true si la tiene, sino retorna false.
    // PISTA: puedes usar el método hasOwnProperty().
    // Tu código:
 }
 
 const coche = {
    color: "rojo", 
    marca: "Toyota", 
    modelo: "Corolla" };
    
console.log(verificarPropiedad(coche,"marca"))
 module.exports = verificarPropiedad;