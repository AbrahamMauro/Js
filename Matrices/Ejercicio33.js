const res = require("express/lib/response")

function combine(str1 = "", str2 = "", str3 = "") {
    let resultado = str1.concat(str2,str3).split('').map(()=> "<{}>")
    if( str1.length != 0){
        let array1 = str1.split('')
        for(indice1 in array1){
            resultado.splice(indice1*3,1,array1[indice1])
        }
    }
    if( str2.length != 0){
        let array2 = str2.split('')
        for(indice2 in array2){
            resultado.splice(indice2*3+1,1,array2[indice2])
        }
    }
    if( str3.length != 0){
        let array3 = str3.split('')
        for(indice3 in array3){
            resultado.splice(indice3*3+2,1,array3[indice3])
        }
    }
    return resultado.filter(a => a != "<{}>").join('')
  }
  console.log(combine("123","456fd","789"))
  module.exports = combine;