function breakStatement(num) {
  let array = []
    for(i = num; i < num + 22; i+=2){
      array.push(i)
      if(i == array.length -1){
        return "Se interrumpió la ejecución"
      }
    }
    return array
  }
  console.log(breakStatement(0))
  
  module.exports = breakStatement;