const listarPropiedades = (objeto) => {
    return Object.keys(objeto)
    // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
    // PISTA: Puedes usar el método Object.keys().
    // Tu código:
  };

  const coche = {
    color: "rojo", 
    marca: "Toyota", 
    modelo: "Corolla" };

  console.log(listarPropiedades(coche))
  module.exports = listarPropiedades;