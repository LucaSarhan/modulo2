function sequence() {
    var input = document.getElementById("input").value
    var fibonacci = [0,1]
    for(var i=fibonacci.length; i<input; i++) {
        fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
    }
    console.log(fibonacci); 
    document.getElementById("resposta").innerHTML = fibonacci[input-1]
}