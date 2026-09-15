// This code is for global and local variables demonstration
var globalVariable = "I am a global variable";

function myFunction() {

    var localVariable = "I am a local variable";
// The following line will throw an error because localVariable is not defined in this scope
    console.log(globalVariable);
    console.log(localVariable);

    // Intentional error:
    console.log(localVarible);
}

myFunction();

// This code is for scope and time function demonstration
function checkTime() {
    if (new Date().getHours() < 12) {
        document.getElementById("Time_Message").innerHTML = "Good morning!";
    } else {
        document.getElementById("Time_Message").innerHTML = "Good afternoon!";
    }
}

// This code is for checking if a number is positive
function checkNumber() {
     number = 10;
    if (number > 0) {
        document.getElementById("Number_Message").innerHTML = "The number is positive.";
    }
}

// This code is for checking if a person is old enough to vote usng a function of age
function checkAge() {
    let age = document.getElementById("Age").value;
    if (age >= 18) {
        document.getElementById("Answer").innerHTML = "You are old enough to vote!";
    } else {
        document.getElementById("Answer").innerHTML = "You are not old enough to vote.";
    }
}

function Time_function() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time >= 12 == time < 18) {
        reply = "It is afternoon.";
    }
    else{
        reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = reply;
}