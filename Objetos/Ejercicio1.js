const obtenerValorPropiedad = (objeto, propiedad) => {
    // Recibe un objeto y el nombre de una propiedad.
    // Devuelve el valor de esta propiedad.
    // Tu código:
    const a = objeto[propiedad];
    return a;
 };
 const coche = {
    color: "rojo", 
    marca: "Toyota", 
    modelo: "Corolla" };

 console.log(obtenerValorPropiedad(coche,"marca"))
 module.exports = obtenerValorPropiedad;