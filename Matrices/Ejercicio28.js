function esArrayNoVacio(arr) {
    return Array.isArray(arr) && arr.length > 0
  }
  console.log(esArrayNoVacio([2]))
  module.exports = esArrayNoVacio;