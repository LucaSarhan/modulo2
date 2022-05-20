function GetInput() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var adition = parseInt(input1)+parseInt(input2);
    var subtraction = parseInt(input1)-parseInt(input2);
    var multiplication = parseInt(input1)*parseInt(input2);
    var division = parseInt(input1)/parseInt(input2);
    var DE = Math.floor(parseInt(input1) / parseInt(input2));
    var modulus = parseInt(input1)%parseInt(input2);
    alert("a. " + input1 + "+" + input2 + "=" + adition + " b. " + input1 + "-" + input2 + "=" + subtraction + 
    " c. " + input1 + "*" + input2 + "=" + multiplication + " d. " + input1 + "/" + input2 + "=" + division + 
    " e. " + input1 + "///" + input2 + "=" + DE + " f. " + input1 + "%" + input2 + "=" + modulus);
    console.log("a." + adition + " b." + subtraction + " c." + multiplication + " d." + division + " e." + DE + " f." + modulus);
}