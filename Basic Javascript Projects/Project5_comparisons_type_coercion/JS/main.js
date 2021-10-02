document.write(typeof "10" + 5);
//above is type of ^^^^ and below is function tests vvvvvv//
function my_Function() {
    document.getElementById("test").innerHTML = 0/0;
    document.getElementById("test2").innerHTML = isNaN('this is a string');
    document.getElementById("test3").innerHTML = isNaN('420');
    document.getElementById("test4").innerHTML = !(10 >= 10);
    document.getElementById("test5").innerHTML = !(10 < 1);
}
//Below is all the operators
document.write(3E334);
document.write(-3E345);
document.write(19>7);
document.write(19<7);
console.log(2+2);
console.log(90<1);
document.write(10==1);
document.write(10==10);
//below i set values and used them for ===
var A = 10;
var B = 10;
var C = "10";
var D = "10";
var E = "string";
document.write(A === B);
document.write(A === E);
document.write(A === C);
document.write(C === E);
//below is the OR and AND operators
document.write(2>3 && 2 > 4);
document.write(2<3 && 2 < 4);
document.write(2<3 || 2 > 4);
document.write(2>3 || 2 > 4);


