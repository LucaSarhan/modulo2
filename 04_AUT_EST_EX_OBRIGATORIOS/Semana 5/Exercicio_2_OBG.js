function getInput() {
    var input = document.getElementById("input").value;
    var hundred = input / 100
    var fifty = (input % 100) / 50
    var twenty = ((input % 100) % 50) / 20
    var ten = (((input % 100) % 50) % 20) / 10
    var five = ((((input % 100) % 50) % 20) % 10) / 5
    var two = (((((input % 100) % 50) % 20) % 10) % 5) / 2
    var one = ((((((input % 100) % 50) % 20) % 10) % 5) % 2) / 1
    document.write(Math.trunc(hundred) + " Nota(s) de R$100, " + Math.trunc(fifty) + " Nota(s) de R$50, " + Math.trunc(twenty) + " Nota(s) de R$20, " 
    + Math.trunc(ten) + " Nota(s) de R$10, " + Math.trunc(five) + " Nota(s) de R$5, "+ Math.trunc(two) + " Nota(s) de R$2, " 
    + Math.trunc(one) + " Nota(s) de R$1 ");
    console.log(hundred, fifty, twenty, ten, five, two, one)
}