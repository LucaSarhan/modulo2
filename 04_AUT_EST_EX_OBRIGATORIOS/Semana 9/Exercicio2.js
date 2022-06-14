function calc() {
    var input = document.getElementById("input").value
    var array = input.split('')
    console.log(array);
    var Nnumber = Number(input)
    var sum = parseInt(0)
    if (Number.isInteger(Nnumber)) {
        if (input>0) {
            for(var i=0; i<=array.length;i++) {
                var number = parseInt(array[i]);
                if(!isNaN(number)) sum += number;
            }
            document.getElementById("resposta").innerHTML = sum
        } 
    } else document.getElementById("resposta").innerHTML = "Somente valores inteiros positivos"
}