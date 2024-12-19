function productoEntreNúmeros(a, b) {
a = Math.min(a,b)
b = Math.max(b,a)

    for(i = a; i <= b; i++){
        console.log(i)
}}
productoEntreNúmeros(-7,7)
  module.exports = productoEntreNúmeros;