function sumarHastaNConBreak(n) {
    let numi = 0
    for(i = 1; i <= n; i++){
        if(numi > 100){
            break
        } 
        numi += i
}
console.log(numi)
  
 }
 sumarHastaNConBreak(30)
 module.exports = sumarHastaNConBreak;