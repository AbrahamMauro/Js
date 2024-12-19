function tieneTresDigitos(num) {
   num = String(num)
    if(num.length == 3){
    return true
   }else{return false}
  }
  //console.log(tieneTresDigitos(275))
  module.exports = tieneTresDigitos;