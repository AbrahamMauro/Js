function pasarUsuarioAPremium(objetoMuchosUsuarios) {
    objetoMuchosUsuarios.forEach(element => { element["esPremium"] = true 
    });
    return objetoMuchosUsuarios
  }
  
  const usuarios = [
    { nombre: "Mauro", email: "mauro@example.com", edad: 18, esPremium: false },
    { nombre: "Dilan", email: "dilan@example.com", edad: 20, esPremium: false },
    { nombre: "Facundo", email: "facundo@example.com", edad: 22, esPremium: false },
    { nombre: "Agustin", email: "agustin@example.com", edad: 25, esPremium: false },
    { nombre: "Maximiliano", email: "maximiliano@example.com", edad: 30, esPremium: false }
  ];
  
console.log(JSON.stringify(pasarUsuarioAPremium(usuarios)))
  module.exports = pasarUsuarioAPremium;