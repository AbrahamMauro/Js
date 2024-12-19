function crearGato(nombre, edad) {
    let animal = {
        Nombre : nombre,
        Edad : edad,
        meow : function(){return "meow"} 
      }

      return animal
  }
  
  let gato = crearGato("Gati",15)
  console.log(gato)
  module.exports = crearGato;