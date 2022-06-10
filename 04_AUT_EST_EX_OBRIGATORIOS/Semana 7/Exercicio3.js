function formato() {
  var number = document.getElementById("telefone").value
  var split = number.split('')
  console.log(split);
  if(split[0] !='(') {
    alert("formatacao do DDD incoreta") //deu erro com acentuação
  } else if(split[3] != ')') {
    alert("formatacao do DDD incoreta") //deu erro com acentuação
  } else if(split[9] != '-') {
    alert("formatacao do numero incoreta") //deu erro com acentuação
  } else if(isNaN(split[1]) ) {
    alert("nao digitou numero") //deu erro com acentuação
  } else if(isNaN(split[2]) ) {
    alert("nao digitou numero") //deu erro com acentuação
  } else if(isNaN(split[4]) ) {
    alert("nao digitou numero") //deu erro com acentuação
  } else if(isNaN(split[5]) ) {
    alert("nao digitou numero") //deu erro com acentuação
  } else if(isNaN(split[6]) ) {
    alert("nao digitou numero") //deu erro com acentuação
  } else if(isNaN(split[7]) ) {
    alert("nao digitou numero") //deu erro com acentuação
  } else if(isNaN(split[8]) ) {
    alert("nao digitou numero") //deu erro com acentuação
  } else if(isNaN(split[10]) ) {
    alert("nao digitou numero") //deu erro com acentuação
  } else if(isNaN(split[11]) ) {
    alert("nao digitou numero") //deu erro com acentuação
  } else if(isNaN(split[12]) ) {
    alert("nao digitou numero") //deu erro com acentuação
  } else if(isNaN(split[13]) ) {
    alert("nao digitou numero") //deu erro com acentuação
  }
} 