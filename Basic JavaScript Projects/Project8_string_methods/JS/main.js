// Concatenate strings
var string1 = "JavaScript";
var string2 = " is";
var string3 = " fun!";
var result = string1.concat(string2, string3);
document.getElementById("Concatenate").innerHTML = result;

//Slice method
function sliceMethod() {
    var str = "JavaScript is fun!";
    var result = str.slice(10, 13);
    document.getElementById("Slice").innerHTML = result;
}

//toUpperCase method
var text = "JavaScript is fun!";
var result = text.toUpperCase();
document.getElementById("Uppercase").innerHTML = result;

//Search method
var text = "JavaScript is fun!";
var result = text.search("fun");
document.getElementById("Search").innerHTML = result;

//toString method
var number = 123;
var result = number.toString();
document.getElementById("String").innerHTML = result;

//toPrecision method
var number = 123.4564563;
var result = number.toPrecision(7);
document.getElementById("Precision").innerHTML = result;

//toFixed method
var number = 123.4567;
var result = number.toFixed(2);
document.getElementById("Fixed").innerHTML = result;

//valueof method
var number = 45.67;
var result = number.valueOf();
document.getElementById("Value").innerHTML = result;