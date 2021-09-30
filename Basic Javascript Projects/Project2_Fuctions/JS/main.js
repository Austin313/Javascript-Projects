function changeColor(newColor) {
    var elem = document.getElementById('xmas');
    elem.style.color = newColor; //this element is where it calls to this function to give a new color,and applys to the value given to it.
  }
function myFunction() {
    var sentence = "I really don't have";
    sentence += " a lot of money.";
    document.getElementById("click").innerHTML =sentence; //this is stating the function will print the var sentence, which has been concated
}
function myFunction2() {
    return p1 * p2;
}
document.getElementById("times").innerHTML = myFunction2(6,7);