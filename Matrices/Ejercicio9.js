function obtenerElementoAleatorio(array) {
    
    return array[parseInt(Math.random() * (array.length))]
 }
 //console.log(obtenerElementoAleatorio([1,2,4,52,5,52,521,42]))
 module.exports = obtenerElementoAleatorio;