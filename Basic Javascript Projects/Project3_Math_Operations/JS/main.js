//Addition
var A = doAdd(3, 7);
document.getElementById("add").innerHTML = A;

function doAdd (a, b) {
    return a + b;
}

//Subtraction
var B = doSubtraction(6, 3);
document.getElementById("subtract").innerHTML = B;

function doSubtraction (a, b) {
    return a - b;
}

//Multiplication
var C = doMultiply(6, 3);
document.getElementById("multiply").innerHTML = C;

function doMultiply (a, b) {
    return a * b;
}

//Division
var D = doDivide(45, 9);
document.getElementById("divide").innerHTML = D;

function doDivide (a, b) {
    return a / b;
}

//MultiMath
var E = simpleMath(65, 9);
document.getElementById("equation").innerHTML = -E;

function simpleMath (a, b) {
    return a / b + A - B * C % D;
}

//Increment and Decrement
var F = 7;
F++;
document.write(F);
document.getElementById("decre").innerHTML = F;

var G = 7;
G--;
document.write(G);
document.getElementById("incre").innerHTML = G;

//random math window
window.alert(Math.random()* 100);

//Math Object Method
var H = Math.pow(8, 2);
document.getElementById("Pow").innerHTML = H;