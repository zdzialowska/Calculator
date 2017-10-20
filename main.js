let one = document.getElementById("button1");
let two = document.getElementById("button2");
let three = document.getElementById("button3");
let four = document.getElementById("button4");
let five = document.getElementById("button5");
let six = document.getElementById("button6");
let seven = document.getElementById("button7");
let eight = document.getElementById("button8");
let nine = document.getElementById("button9");
let zero = document.getElementById("button0");
let plus = document.getElementById("buttonPlus");
let minus = document.getElementById("buttonMinus");
let divide = document.getElementById("buttonDivide");
let dot = document.getElementById("buttonDot");
let equal = document.getElementById("buttonEqual");
let multiply = document.getElementById("buttonMultiply");
let c = document.getElementById("buttonC");



one.addEventListener('click', oneFunction);
two.addEventListener('click', twoFunction);
three.addEventListener('click', threeFunction);
four.addEventListener('click', fourFunction);
five.addEventListener('click', fiveFunction);
six.addEventListener('click', sixFunction);
seven.addEventListener('click', sevenFunction);
eight.addEventListener('click', eightFunction);
nine.addEventListener('click', nineFunction);
zero.addEventListener('click', zeroFunction);
plus.addEventListener('click', plusFunction);
minus.addEventListener('click', minusFunction);
divide.addEventListener('click', divideFunction);
dot.addEventListener('click', dotFunction);
multiply.addEventListener('click', multiplyFunction);




equal.addEventListener('click', enterFun);
c.addEventListener('click', cFun);

window.addEventListener('keydown', fingerDown)
function fingerDown(evt) {
    console.log(evt.key)

    switch (evt.key) {
          /*case "1":
            break;

          case "2":
            break;

          case "3":
            break;

          case "4":
            break;

          case "5":
            break;

        case "6":
            break;

        case "7":
            break;

        case "8":
            break;

        case "9":
            break;

        case "0":
            break;

        case "+":
            break;

        case "-":
            break;

        case "/":
            break;

        case "*":
            break;

        case ".":
            break;*/

        case "Enter":
            enterFun()
            break;

        case "c":
            cFun()
            break;


    }
}

function oneFunction() {
    document.getElementById("inputField").value += 1
}

function twoFunction() {
    document.getElementById("inputField").value += 2
}

function threeFunction() {
    document.getElementById("inputField").value += 3
}

function fourFunction() {
    document.getElementById("inputField").value += 4
}

function fiveFunction() {
    document.getElementById("inputField").value += 5
}

function sixFunction() {
    document.getElementById("inputField").value += 6
}

function sevenFunction() {
    document.getElementById("inputField").value += 7
}

function eightFunction() {
    document.getElementById("inputField").value += 8
}

function nineFunction() {
    document.getElementById("inputField").value += 9
}

function zeroFunction() {
    document.getElementById("inputField").value += 0
}

function plusFunction() {
    document.getElementById("inputField").value += "+"
}
function minusFunction() {
    document.getElementById("inputField").value += "-"
}
function divideFunction() {
    document.getElementById("inputField").value += "/"
}

function dotFunction() {
    document.getElementById("inputField").value += "."
}

function multiplyFunction() {
    document.getElementById("inputField").value += "*"
}



function enterFun() {
    let userInput = eval(document.getElementById("inputField").value)
    console.log(userInput)
    document.getElementById("inputField").value = userInput
}

function cFun(){
   document.getElementById("inputField").value = ""
}

document.getElementById("inputField").addEventListener("keypress", function (e) {
    let allowedChars = '0123456789.=-*+/';
    function contains(stringValue, charValue) {
        return stringValue.indexOf(charValue) > -1
      }
    let invalidKey = e.key.length === 1 && !contains(allowedChars, e.key)
            || e.key === '.' && contains(e.target.value, '.')
    invalidKey && e.preventDefault()
});
