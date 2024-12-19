function invocarMetodo(objeto, metodo) {
    console.log(objeto[metodo]())
  }
  
  const coche = {
    color: "rojo", 
    marca: "Toyota", 
    modelo: "Corolla",
    arrancar: function(){ return "este coche a arrancado"}
};
invocarMetodo(coche, "arrancar")
  module.exports = invocarMetodo;