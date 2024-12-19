function filtrarNumerosPares(array) {
    return array.filter(elemento => elemento % 2 === 0)
  }
  //console.log(filtrarNumerosPares([4,67,61,3,7,37,353,13,87,634,7,8,8,41]))
  module.exports = filtrarNumerosPares;