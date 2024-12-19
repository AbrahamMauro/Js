function conection(status) {
    if(status == 1){
        return "Online"
    }
    else if(status == 2){
        return "Away"
    }
    else{return "Offline"}
  }
  //console.log(conection(0))
  module.exports = conection;