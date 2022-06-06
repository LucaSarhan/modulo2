function formato() {
  var s = document.getElementById("numeros").value.toString();
  const myArray = s.split("p")
  document.getElementById("yeet").innerHTML = myArray;

}

function isNumber(char) {
  if (typeof char !== 'string') {
    return false;
  }

  if (char.trim() === '') {
    return false;
  }

  return !isNaN(char);
}
const str = 'a1';
console.log(isNumber(str[0])); // 👉️ false
console.log(isNumber(str[1])); // 👉️ true
console.log(isNumber('123')); // 👉️ true
console.log(isNumber('')); // 👉️ false
console.log(isNumber(undefined)); // false

/*function charIsLetter(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    return /^[a-zA-Z]+$/.test(char);
  }

console.log(charIsLetter('a')); // 👉️ true
console.log(charIsLetter('!')); // 👉️ false
console.log(charIsLetter(' ')); // 👉️ false
console.log(charIsLetter(null)); // 👉️ false*/
