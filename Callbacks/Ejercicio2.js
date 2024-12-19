function cambiarCadena(string, callback){
    if (typeof callback === 'function'){
        return callback(string); 
    } 
    else{
        return string; 
    }
 }
 function convertirAMayusculas(str){ 
    return str.toUpperCase(); 
}
 
console.log(cambiarCadena("Hola", convertirAMayusculas))
 module.exports = cambiarCadena;