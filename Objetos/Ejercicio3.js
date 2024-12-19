const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
    objeto[propiedad] = valor
    return objeto
  };
  
  const coche = {
    color: "rojo", 
    marca: "Toyota", 
    modelo: "Corolla" };
  
console.log(agregarNuevaPropiedad(coche,"Potencia", "220 caballos"))

  module.exports = agregarNuevaPropiedad;