function doWhile(num) {
    for(i = 0; i < 8; i++){
        num += 5
    }
    return num
     // el do-while no es necesesario en este ejercicio
  }
  console.log(doWhile(5))
  module.exports = doWhile;