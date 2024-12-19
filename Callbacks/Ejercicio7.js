function filter(arrayOfStrings) {
    return arrayOfStrings.filter(a => a[0] ==  "a" || a[0] ==  "A")
 }
 console.log(filter(["animal", "perro", "Ala"]))
 module.exports = filter;