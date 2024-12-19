function continueStatement(num) {
    let array = []
    let numi = num
    for(i = 1; i <= 10; i++){
      if(5 == i){
        console.log("continuo")
        continue
      }
      numi += 2
      array.push(numi)
    }
    return array
  }
  console.log(continueStatement(0))
  module.exports = continueStatement;