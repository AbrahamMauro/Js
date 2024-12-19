function promedioResultadosTest(resultadosTest) {
    let suma = 0
    for(n of resultadosTest){
        suma += n
    }
    return suma / resultadosTest.length
  }
  //console.log(promedioResultadosTest([1,9,8,7,8,9,8,7,8]))
  module.exports = promedioResultadosTest;