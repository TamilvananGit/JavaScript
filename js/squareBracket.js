const prompt = require("prompt-sync")();

let zero = "+[]";
let one = `++[[]][${zero}]`;

function add(a, b) {
  return `${a}+[${b}][${zero}]`;
}

function digit(d) {
  if (d == 0) {
    return zero;
  } else if (d == 1) {
    return one;
  } else {
    return add(one, digit(d - 1));
  }
}

function mingle(number) {
  let n = "" + number;
  let result = "";
  for (let d of n) {
  	if (result == "") {
    	result += digit(d);
    } else {
    	result += `+[${digit(d)}]`
    }
  }
  return `+[${result}][${zero}]`;
}

let i = prompt('Enter a number: ')
console.log(mingle(i));
