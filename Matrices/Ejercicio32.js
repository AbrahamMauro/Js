function esPalindromo(string) {
    if(string === string.split('').reverse().join('')){
        return true
    }
    return false
  }
  console.log(esPalindromo("ala"))
  module.exports = esPalindromo;