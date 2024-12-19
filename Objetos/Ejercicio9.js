function nuevoUsuario(nombre, email, password) {
    let usuario = {
        Nombre: nombre,
        Correo: email,
        Contraseña: password
    }
    return usuario
  }
  console.log(nuevoUsuario("Isabella", "isacuenca12@gmail.com", "Menta"))
  module.exports = nuevoUsuario;