function colors(color) {
    if (color == "blue" || color == "red" || color == "green" || color == "orange"){
        return "this is ".concat(color)
    }else{return "Color not found"}
  }
  //console.log(colors("blue"))
  module.exports = colors;