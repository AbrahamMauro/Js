function sumarArray(arrayOfNumbers, cb) {
    let resultado = 0
    for(n of arrayOfNumbers){
        resultado += n
    }
    cb(resultado)
 }
 function recibirResultado(num1){
    console.log(num1)
 }
 sumarArray([1,2,3,4,5],recibirResultado)
 
 module.exports = sumarArray;