//concat method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2,part_3,part_4);
    document.getElementById("concat").innerHTML = whole_sentence;
}
//slice method
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("slice").innerHTML = Section;
}
//ToUpperCase Method
function upperCase() {
    var loud = "Can you hear me?"
    var Yell = loud.toLocaleUpperCase();
    document.getElementById("yelling").innerHTML = Yell;
}
//Search Method
var string = "Yo its me poke";
document.getElementById("search").innerHTML = string.search("poke");
//Number Method
function number_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
//toPrecision Method
function precision_Method() {
    var X = 12938.3213287548;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
//toFixed Method
function fixed_Method() {
    var Num = 3.53123;
    var n = Num.toFixed(2);
    document.getElementById("fixed").innerHTML = n;
}
//value Method
function value_Method() {
    var A = 18;
    var a = A.valueOf()
    document.getElementById("value").innerHTML = a;
}