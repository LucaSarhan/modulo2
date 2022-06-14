function primos() {
    var input1 = document.getElementById("n1").value
    var input2 = document.getElementById("n2").value

    if (input1<0 || input2<0 || input1>input2) {
        document.getElementById("erro").innerHTML = "Nao possivel realizar" // Erro se colocar acentuação
    } else {
    // looping from lowerNumber to higherNumber
    for (let i = input1; i <= input2; i++) {
        let flag = 0;

        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}   
}