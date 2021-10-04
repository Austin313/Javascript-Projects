//Global Variable, with local variable inside the function. 
var X = 10;
function add_Numbers_1() {
    var Y = 10;
    document.write(X + Y + "<br>");
    console.log(Y);
}
add_Numbers_1();
//adding a method function
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
//If Statement Assignment
function spooky_season() {
    if (new Date().getMonth() == 9) { //This took me a minute, cause I forgot that all these start at 0 haha. I knew since it wasnt throwing a error that it had to be the thing erick warned about LOL
        document.getElementById("spooky").innerHTML = "Boo!";
    }
}
//Else Assignment, I'm just going to copy the top function and add a else statement
function spooky_valid() {
    if (new Date().getMonth() == 9) {
        document.getElementById("answer_display").innerHTML = "It is spooky season!";
    }
    else {
        document.getElementById("answer_display").innerHTML = "It is not spooky season :(";
    }
} //I am not sure how I incorporate the input utilizing the function, if it is updated, I figured it out lol
//Else If Assignment
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning!"
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}