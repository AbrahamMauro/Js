function tieneEmail(objetoUsuario) {
    return objetoUsuario.email != undefined
  }
  const usuario = {
    nombre: "mauro",
    email: undefined,
    edad: 18

  }
  console.log(tieneEmail(usuario))
  module.exports = tieneEmail;