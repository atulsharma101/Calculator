const result = document.getElementById("result");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal");
let a, b = "", c, index;

function digit(num) {
  console.log(num);
  result.innerHTML += num.innerHTML;
}

function clear_data(){
  result.innerHTML="";
}

function add() {
  a = result.innerHTML;
  a = parseInt(a);
  result.innerHTML += "+";
  c = "+";
}

function sub() {
  a = result.innerHTML;
  a = parseInt(a);
  result.innerHTML += "-";
  c = "-";
}

function multiply() {
  a = result.innerHTML;
  a = parseInt(a);
  result.innerHTML += "*";
  c = "*";
}

function div() {
  a = result.innerHTML;
  a = parseInt(a);
  result.innerHTML += "/";
  c = "/";
}

function equal() {
  let res;
  let r = result.innerHTML;
  console.log(r);
  if (c == "+") {
    index = r.indexOf("+");
    let len = r.length;
    for (let i = index + 1; i < len; i++)
      b += (r.charAt(i)).toString();
    b = parseInt(b);
    console.log(a,b);
    res = a + b;
  }
  else if (c == "-") {
    index = r.indexOf("-");
    let len = r.length;
    for (let i = index + 1; i < len; i++)
      b += (r.charAt(i)).toString();
    b = parseInt(b);
    res = a - b;
  }
  else if (c == "*") {
    index = r.indexOf("*");
    let len = r.length;
    for (let i = index + 1; i < len; i++)
      b += (r.charAt(i)).toString();
    b = parseInt(b);
    res = a * b;
  }
  else if (c == "/") {
    index = r.indexOf("/");
    let len = r.length;
    for (let i = index + 1; i < len; i++)
      b += (r.charAt(i)).toString();
    b = parseInt(b);
    res = a / b;
  }
  result.innerHTML = res;
  b=""
}