function ordem() {
    var input1 = document.getElementById("nome1").value.trim()
    var input2 = document.getElementById("nome2").value.trim()
    var input3 = document.getElementById("nome3").value.trim()
    var array = [input1,input2,input3]
    array.sort(function(a,b){
        return a.localeCompare(b);
    });
    document.getElementById("resposta").innerHTML = array
}