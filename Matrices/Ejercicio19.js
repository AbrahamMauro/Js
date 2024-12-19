function multiplicarArgumentos() {
    if(arguments.length === 0) 
        { return 0; } 
    let producto = 1; 
    
    for(let i = 0; i < arguments.length; i++) 
        { producto *= arguments[i]; } 
    return producto;
 }
 //console.log(multiplicarArgumentos(1,3,2))
  module.exports = multiplicarArgumentos;