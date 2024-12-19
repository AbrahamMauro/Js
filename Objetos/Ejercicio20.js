function sumarLikesDeUsuario(objetoUsuario) {
    let likestotales = 0;
  
    // Iterar sobre el arreglo de posts
    objetoUsuario.posts.forEach(post => {
      likestotales += post.likes;
    });
  
    return likestotales;
  }
  
  const objetoUsuario = { 
    nombre: "Mauro", 
    email: "mauro@example.com", 
    edad: 18, 
    posts: [
      { id: 1, titulo: "Primer Post", likes: 10 }, 
      { id: 2, titulo: "Segundo Post", likes: 20 }, 
      { id: 3, titulo: "Tercer Post", likes: 30 }
    ]
  };
  
  console.log(sumarLikesDeUsuario(objetoUsuario)); // 60
  module.exports = sumarLikesDeUsuario;
  