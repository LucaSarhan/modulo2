var number = 1;

function plusOne() {
  var count = document.getElementById('count');

  number++;
  count.textContent = number.toString();
}

var number = 1;

function minusOne() {
    var count = document.getElementById('count');
  
    number--;
    count.innerHTML = number;
}