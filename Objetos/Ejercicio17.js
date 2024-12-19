function actualizarPassword(objetoUsuario, nuevaPassword) {
    objetoUsuario["contraseña"] = nuevaPassword
    return objetoUsuario
  }
  
  const usuario = {
    nombre: "mauro",
    email: undefined,
    edad: 18,
    contraseña: 123
  }
console.log(actualizarPassword(usuario, 1234567))
  module.exports = actualizarPassword;