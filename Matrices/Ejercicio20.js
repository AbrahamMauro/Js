function todosIguales(array) {
    return array.every(elemento => elemento === array[0])
  }
  //console.log(todosIguales([1,1,1,1,1]))
  module.exports = todosIguales;
