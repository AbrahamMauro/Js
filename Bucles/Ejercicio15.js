function obtenerDiaSemana(numero) {
    if(numero == 1){
        return "Lunes"
    }
    else if(numero == 2){
        return "Martes"
    }
    else if(numero == 3){
        return "Miercoles"
    }
    else if(numero == 4){
        return "Jueves"
    }
    else if(numero == 5){
        return "Viernes"
    }
    else if(numero == 6){
        return "Sabado"
    }
    else if(numero == 7){
        return "Domingo"
    }
    else{return "No es un dia de la semana"}
  }
  console.log(obtenerDiaSemana(1))
  module.exports = obtenerDiaSemana;