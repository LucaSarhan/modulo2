function realizar() {
    var input = document.getElementById("numero").value
    console.log(input)
    var array = input.split("")
    console.log(array)
    var modulo = parseInt(array[0])
    if (array.length != 3) {
        document.getElementById("resposta").innerHTML = "Apenas 3 algarismos!" //erro com acentuação
    } else if(input<100 ){
        document.getElementById("resposta").innerHTML = "Apenas centenas inteiras!"
    } else if(modulo % 2 == 0) {
        document.getElementById("resposta").innerHTML = "Centena par!"
    } else {
        document.getElementById("resposta").innerHTML = "Centena impar!"
    }
}