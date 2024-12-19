const contarPropiedades = (objeto) => {
    return Object.keys(objeto).length
  };
  
  const coche = {
    color: "rojo", 
    marca: "Toyota", 
    modelo: "Corolla" };

    console.log(contarPropiedades(coche))
  module.exports = contarPropiedades;