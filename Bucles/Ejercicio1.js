function esIgualYNegativo(a, b) {
    return a === b && a < 0 && b < 0
  }
  console.log(esIgualYNegativo(-2,-2))
  module.exports = esIgualYNegativo;