function verificarPassword(objetoUsuario, password) {
    return objetoUsuario.contraseña == password
  }
  
  const usuario = {
    nombre: "mauro",
    email: undefined,
    edad: 18,
    contraseña: 123
  }

  console.log(verificarPassword(usuario, 1233))
  module.exports = verificarPassword;