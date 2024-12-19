function agregarAmigo(objetoUsuario, nuevoAmigo) {
    objetoUsuario["amigos"].push(nuevoAmigo)
    return objetoUsuario
  }
  
  const usuario = {
    nombre: "mauro",
    email: undefined,
    edad: 18,
    contraseña: 123,
    amigos: ["dilan", "facundo", "agustin"]
  }

  console.log(agregarAmigo(usuario,"Maximiliano"))
  module.exports = agregarAmigo;