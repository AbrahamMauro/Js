function operadoresLogicos(num1, num2, num3) {
    if(num1 < 0 || num2 < 0 || num3 < 0){
        return "Hay negativos"
    }
    else if(num1 > num2 && num1 > num3 && num1 >= 0){
    return "Numero 1 es mayor y positivo"
   }
   else if(num3 > num1 && num3 > num2){
    return num3 + 1
   }
   else if(num1 == 0 && num2 == 0 && num3 == 0){
    return "Error"
   }
   else{return false}
  }
  //console.log(operadoresLogicos(10,50,30))
  module.exports = operadoresLogicos;