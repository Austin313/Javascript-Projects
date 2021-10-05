function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++; //tested and you can create a infinite loop error and cause browser to crash if you decrement lol
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var yo = "yo wassup its me Austin";
document.getElementById("length").innerHTML = yo.length;

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = ""
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++){
    content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

//Array and Objects Assignment.
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}
//Constant Assignment
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The Cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}
//Let Assignment
var x = 69;
document.write(x);
{
    let x = 47;
    document.write("<br>" + x);
}
document.write("<br>" + x);
//return assignment
function return_test(name) {
    return "Yo" + name;
}
document.getElementById("return").innerHTML = return_test(" Austin");
//object assignment

let car = {
    make: "Subaru",
    model: "BRZ",
    year: "2013",
    color: "Black",
    description: function() {
        return "The Car is a " +this.year + this.color + this.make + this.model;
    }

};
document.getElementById("Car").innerHTML = car.description();

//break function
let text = "";
for(let i = 0; i < 10; i++) {
    if (i === 3) {continue;}
    text += "The number is " + i + "<br>";

}
document.getElementById("break").innerHTML = text;