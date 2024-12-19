function esAnagrama(str1, str2) {
    console.log(anagrama(str1),anagrama(str2))
    return anagrama(str1) == anagrama(str2)
 }
 function anagrama(str){
    strminu = str.toLowerCase()
    return strminu.split('').sort().join('');
 }
 console.log(esAnagrama("arroz", "zorra"))
 module.exports = esAnagrama;