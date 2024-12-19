function encontrarIndiceMayor(array) {
    return array.indexOf(Math.max(...array))
  }
  //console.log(encontrarIndiceMayor([4,67,7,412,4,87,5241,8]))
  module.exports = encontrarIndiceMayor;